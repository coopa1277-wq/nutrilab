/* GET /api/pending   header: x-admin-token
   Everyone whose card is saved and whose formula is waiting on a pharmacist.
   This is what the review screen reads. */
import { stripe, fail, requireAdmin } from './_lib/common.js';
import { quote } from './_lib/pricing.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') return fail(res, 405, 'Use GET.');
  if (!requireAdmin(req, res)) return;

  try {
    const sk = stripe();
    const found = await sk.customers.list({ limit: 100 });

    const waiting = found.data
      .filter(c => c.metadata?.status === 'awaiting_approval' && c.metadata?.card_saved === 'yes')
      .map(c => {
        let q = null;
        try { q = quote({ formulaId: c.metadata.formula_id, plan: c.metadata.plan, market: c.metadata.market }); }
        catch { /* a formula we can no longer price is still worth showing */ }
        return {
          id: c.id,
          name: c.name,
          email: c.email,
          created: c.created,
          formulaId: c.metadata.formula_id,
          formulaName: c.metadata.formula_name,
          summary: c.metadata.formula_summary,
          plan: c.metadata.plan,
          address: c.address,
          willCharge: q ? q.amountDueNow : null,
          currency: q ? q.currency : null
        };
      })
      .sort((a, b) => a.created - b.created);

    return res.status(200).json({ waiting });
  } catch (e) {
    console.error('pending failed:', e);
    return fail(res, 502, 'Could not read the queue.');
  }
}
