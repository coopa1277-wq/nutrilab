/* POST /api/approve   { customerId }   header: x-admin-token
   The pharmacist's sign-off. This is the moment the card is charged.

   It starts the subscription, which bills the saved card straight away and
   then every cycle after that. Each successful charge fires invoice.paid,
   and the webhook turns that into a ShipHero order — including the renewals,
   with no further action from anyone.

   POST /api/approve   { customerId, reject: true }
   marks the formula rejected instead. Nothing was ever charged, so there is
   nothing to refund.
*/
import { stripe, readJson, fail, requireAdmin } from './_lib/common.js';
import { quote } from './_lib/pricing.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return fail(res, 405, 'Use POST.');
  if (!requireAdmin(req, res)) return;

  let body;
  try { body = await readJson(req); }
  catch (e) { return fail(res, 400, e.message); }

  const customerId = String(body.customerId || '');
  if (!customerId.startsWith('cus_')) return fail(res, 400, 'customerId is missing.');

  const sk = stripe();

  try {
    const customer = await sk.customers.retrieve(customerId);
    if (customer.deleted) return fail(res, 404, 'That customer no longer exists.');
    const m = customer.metadata || {};

    if (body.reject) {
      await sk.customers.update(customerId, {
        metadata: { ...m, status: 'rejected', rejected_reason: String(body.reason || '').slice(0, 300) }
      });
      return res.status(200).json({ ok: true, status: 'rejected' });
    }

    if (m.status === 'approved') {
      return res.status(200).json({ ok: true, status: 'already approved', subscription: m.subscription_id });
    }
    if (!customer.invoice_settings?.default_payment_method) {
      return fail(res, 409, 'No card is on file for this customer yet.');
    }

    // priced here again rather than read back from metadata, so an edited
    // customer record in the Stripe dashboard cannot change what is charged
    const q = quote({ formulaId: m.formula_id, plan: m.plan, market: m.market });

    const subscription = await sk.subscriptions.create({
      customer: customerId,
      collection_method: 'charge_automatically',
      payment_behavior: 'error_if_incomplete',
      items: [{
        price_data: {
          currency: q.currency,
          product_data: { name: q.formulaName + ' — NutriLab' },
          unit_amount: q.perCycleCents,
          recurring: { interval: 'month', interval_count: q.months }
        }
      }],
      // the one-time development fee rides along on the first invoice only
      add_invoice_items: q.devFeeCents
        ? [{
            price_data: {
              currency: q.currency,
              product_data: { name: 'One-time formula development' },
              unit_amount: q.devFeeCents
            }
          }]
        : undefined,
      metadata: { formula_id: q.formulaId, plan: q.plan }
    });

    await sk.customers.update(customerId, {
      metadata: { ...m, status: 'approved', subscription_id: subscription.id }
    });

    return res.status(200).json({
      ok: true,
      status: 'approved',
      subscription: subscription.id,
      chargedNow: q.amountDueNow,
      currency: q.currency
    });
  } catch (e) {
    console.error('approve failed:', e);
    if (e.type === 'StripeCardError') return fail(res, 402, 'The card was declined: ' + e.message);
    return fail(res, 502, e.message || 'Approval failed.');
  }
}
