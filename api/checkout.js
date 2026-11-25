/* POST /api/checkout
   Called when someone presses "Place order" at the end of the quiz.

   It saves the card and charges nothing. The quiz promises twice that the
   card is only charged once a pharmacist has approved the formula, so this
   opens a Stripe Checkout session in setup mode: Stripe collects and stores
   the card on its own domain, and the money moves later, from /api/approve.
*/
import { stripe, siteUrl, readJson, validateCustomer, fail } from './_lib/common.js';
import { quote } from './_lib/pricing.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return fail(res, 405, 'Use POST.');

  let body;
  try { body = await readJson(req); }
  catch (e) { return fail(res, 400, e.message); }

  const { customer, errors } = validateCustomer(body.customer);
  if (errors.length) return fail(res, 400, errors[0], { errors });

  // The browser says which formula it was given. It does not say what that
  // formula costs: the price is looked up here, from our own table.
  let q;
  try {
    q = quote({
      formulaId: String(body.formulaId || ''),
      plan: String(body.plan || 'monthly'),
      market: String(body.market || 'CA')
    });
  } catch (e) {
    return fail(res, 400, 'That formula could not be priced. Please retake the quiz.');
  }

  try {
    const sk = stripe();

    const fields = {
      name: customer.name,
      email: customer.email,
      phone: customer.phone || undefined,
      address: {
        line1: customer.address1,
        line2: customer.address2 || undefined,
        city: customer.city,
        state: customer.province,
        postal_code: customer.postal,
        country: customer.country
      },
      metadata: {
        status: 'awaiting_approval',
        formula_id: q.formulaId,
        formula_name: q.formulaName,
        plan: q.plan,
        market: body.market === 'AU' ? 'AU' : 'CA',
        per_cycle: String(q.perCycle),
        dev_fee: String(q.devFee),
        // what the pharmacist needs to read, kept inside Stripe's 500-char limit
        formula_summary: String(body.formulaSummary || '').slice(0, 480)
      }
    };

    // reuse the customer if this person already started a checkout
    const existing = await sk.customers.list({ email: customer.email, limit: 1 });
    const reusable = existing.data.find(c => c.metadata?.status === 'awaiting_approval');
    const cust = reusable
      ? await sk.customers.update(reusable.id, fields)
      : await sk.customers.create(fields);

    const session = await sk.checkout.sessions.create({
      mode: 'setup',
      customer: cust.id,
      currency: q.currency,
      payment_method_types: ['card'],
      success_url: siteUrl(req) + '/quiz?nl_setup={CHECKOUT_SESSION_ID}',
      cancel_url: siteUrl(req) + '/quiz?nl_cancelled=1'
    });

    return res.status(200).json({ url: session.url, customerId: cust.id, quote: q });
  } catch (e) {
    console.error('checkout failed:', e);
    return fail(res, 502, 'We could not reach the payment provider. Please try again.');
  }
}
