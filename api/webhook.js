/* POST /api/webhook  — Stripe's side of the conversation.

   This is the only place that creates a ShipHero order, and it does so only
   on invoice.paid. Fulfilment therefore cannot run ahead of the money: a
   forged browser request can reach /api/checkout, but nothing reaches the
   warehouse until Stripe says a real card was charged.
*/
import { stripe, fail } from './_lib/common.js';
import { createOrder } from './_lib/shiphero.js';

export const config = { api: { bodyParser: false } };

function rawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return fail(res, 405, 'Use POST.');

  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) return fail(res, 500, 'STRIPE_WEBHOOK_SECRET is not set.');

  const sk = stripe();
  let event;
  try {
    event = sk.webhooks.constructEvent(await rawBody(req), req.headers['stripe-signature'], secret);
  } catch (e) {
    // an unverified body is not from Stripe, whatever it claims
    console.error('bad webhook signature:', e.message);
    return fail(res, 400, 'Signature verification failed.');
  }

  try {
    if (event.type === 'checkout.session.completed' && event.data.object.mode === 'setup') {
      await onCardSaved(sk, event.data.object);
    } else if (event.type === 'invoice.paid') {
      await onInvoicePaid(sk, event.data.object);
    } else if (event.type === 'invoice.payment_failed') {
      console.warn('payment failed for invoice', event.data.object.id);
    }
  } catch (e) {
    console.error('handling ' + event.type + ' failed:', e);
    // 500 asks Stripe to deliver again, which is what we want for a
    // ShipHero outage; the duplicate guard below makes the retry safe
    return res.status(500).json({ error: e.message });
  }

  return res.status(200).json({ received: true });
}

// the card is on file: make it the default so the approval charge can use it
async function onCardSaved(sk, session) {
  const setup = await sk.setupIntents.retrieve(session.setup_intent);
  if (!setup.payment_method || !session.customer) return;

  await sk.customers.update(session.customer, {
    invoice_settings: { default_payment_method: setup.payment_method },
    metadata: { card_saved: 'yes', status: 'awaiting_approval' }
  });
}

// money has landed: tell the warehouse to pick and pack
async function onInvoicePaid(sk, invoice) {
  if (!invoice.customer) return;

  if (invoice.metadata?.shiphero_order_id) {
    console.log('invoice', invoice.id, 'already sent to ShipHero');
    return;
  }

  const customer = await sk.customers.retrieve(invoice.customer);
  const m = customer.metadata || {};
  const addr = customer.address || {};

  // The development fee is a charge, not a thing in a box, so it is left
  // out of the line items: the warehouse ships one bottle either way.
  const bottleSku = process.env.SHIPHERO_SKU || 'NL-CUSTOM-60';
  const months = Number(m.plan === 'quarterly' ? 3 : m.plan === 'bimonthly' ? 2 : 1);
  const perCycle = Number(m.per_cycle || 0);

  const order = await createOrder({
    orderNumber: 'NL-' + (invoice.number || invoice.id),
    email: customer.email,
    shipping: {
      firstName: (customer.name || '').split(/\s+/)[0] || 'Customer',
      lastName: (customer.name || '').split(/\s+/).slice(1).join(' ') || '-',
      address1: addr.line1 || '',
      address2: addr.line2 || '',
      city: addr.city || '',
      state: addr.state || '',
      stateCode: addr.state || '',
      zip: addr.postal_code || '',
      country: addr.country || 'CA',
      countryCode: addr.country || 'CA',
      phone: customer.phone || ''
    },
    lineItems: [{
      sku: bottleSku,
      quantity: months,
      price: months ? (perCycle / months).toFixed(2) : '0.00',
      name: m.formula_name || 'Personalised NutriLab formula'
    }],
    shippingTitle: 'Standard',
    shippingPrice: '0.00',
    totalTax: ((invoice.tax || 0) / 100).toFixed(2),
    note: 'Formula ' + (m.formula_id || '?') + ' — ' + (m.formula_summary || '')
  });

  // written back so a repeat delivery of this event does nothing
  await sk.invoices.update(invoice.id, {
    metadata: { shiphero_order_id: String(order?.legacy_id || order?.id || 'created') }
  });

  console.log('ShipHero order created for invoice', invoice.id, order?.order_number);
}
