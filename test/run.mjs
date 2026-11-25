/* Exercises the functions against a stand-in Stripe and a stand-in ShipHero.
   The Stripe SDK and the webhook signature check are the real ones; only the
   far end of the socket is fake. Run with: node test/run.mjs  */
import http from 'node:http';
import assert from 'node:assert/strict';
import { Readable } from 'node:stream';

const PORT = 12411;
let calls = [];

// ── a stand-in Stripe ───────────────────────────────────────────────────────
const stripeMock = http.createServer((req, res) => {
  let body = '';
  req.on('data', c => (body += c));
  req.on('end', () => {
    calls.push({ method: req.method, path: req.url, body });
    const send = o => { res.writeHead(200, { 'content-type': 'application/json' }); res.end(JSON.stringify(o)); };
    const p = req.url.split('?')[0];

    if (p === '/v1/customers' && req.method === 'GET') return send({ object: 'list', data: [] });
    if (p === '/v1/customers' && req.method === 'POST') return send({ id: 'cus_TEST1', object: 'customer' });
    if (p.startsWith('/v1/customers/') && req.method === 'POST') return send({ id: 'cus_TEST1', object: 'customer' });
    if (p.startsWith('/v1/customers/') && req.method === 'GET') {
      return send({
        id: 'cus_TEST1', object: 'customer', email: 'daniel@growthlink.me', name: 'Daniel Kim',
        address: { line1: '480 Callaway Road', city: 'London', state: 'Ontario', postal_code: 'N6G 0Z3', country: 'CA' },
        invoice_settings: { default_payment_method: 'pm_TEST' },
        metadata: { status: 'awaiting_approval', card_saved: 'yes', formula_id: 'F01', plan: 'monthly', market: 'CA',
                    per_cycle: '85', dev_fee: '0', formula_name: 'Sleep & Stress Balance', formula_summary: 'Mg 300mg' }
      });
    }
    if (p === '/v1/checkout/sessions') return send({ id: 'cs_TEST', url: 'https://checkout.stripe.com/c/pay/cs_TEST' });
    if (p === '/v1/subscriptions') return send({ id: 'sub_TEST', object: 'subscription' });
    if (p.startsWith('/v1/setup_intents/')) return send({ id: 'seti_TEST', payment_method: 'pm_TEST' });
    if (p.startsWith('/v1/invoices/')) return send({ id: 'in_TEST', object: 'invoice' });
    return send({});
  });
});

// ── a stand-in ShipHero ─────────────────────────────────────────────────────
let shipheroCalls = [];
let failFirstWithAuth = false;
global.fetch = async (url, init) => {
  const u = String(url);
  if (u.includes('/auth/refresh')) {
    shipheroCalls.push({ kind: 'refresh' });
    return new Response(JSON.stringify({ access_token: 'at_TEST' }), { status: 200 });
  }
  if (u.includes('/graphql')) {
    const payload = JSON.parse(init.body);
    shipheroCalls.push({ kind: 'graphql', auth: init.headers.authorization, data: payload.variables.data });
    if (failFirstWithAuth) { failFirstWithAuth = false; return new Response('expired', { status: 401 }); }
    return new Response(JSON.stringify({
      data: { order_create: { request_id: 'r1', complexity: 1,
              order: { id: 'T3JkZXI6MQ==', legacy_id: 99, order_number: payload.variables.data.order_number } } }
    }), { status: 200 });
  }
  throw new Error('unexpected fetch to ' + u);
};

// ── helpers ─────────────────────────────────────────────────────────────────
function mockRes() {
  const r = { statusCode: 0, payload: null };
  r.status = c => { r.statusCode = c; return r; };
  r.json = o => { r.payload = o; return r; };
  return r;
}
function jsonReq(body, headers = {}) {
  const req = new Readable({ read() { this.push(JSON.stringify(body)); this.push(null); } });
  req.method = 'POST';
  req.headers = { host: 'nutrilab.test', 'content-type': 'application/json', ...headers };
  return req;
}
function rawReq(raw, headers = {}) {
  const req = new Readable({ read() { this.push(raw); this.push(null); } });
  req.method = 'POST';
  req.headers = { host: 'nutrilab.test', ...headers };
  return req;
}

let passed = 0;
async function test(name, fn) {
  calls = []; shipheroCalls = [];
  try { await fn(); console.log('  ok  ' + name); passed++; }
  catch (e) { console.log('FAIL  ' + name + '\n      ' + e.message); process.exitCode = 1; }
}

// ── environment ─────────────────────────────────────────────────────────────
process.env.STRIPE_SECRET_KEY = 'sk_test_fake';
process.env.STRIPE_API_HOST = 'localhost';
process.env.STRIPE_API_PORT = String(PORT);
process.env.STRIPE_WEBHOOK_SECRET = 'whsec_test';
process.env.SHIPHERO_REFRESH_TOKEN = 'rt_TEST';
process.env.SHIPHERO_WAREHOUSE_ID = 'V2FyZWhvdXNlOjE=';
process.env.SHIPHERO_SKU = 'NL-CUSTOM-60';
process.env.ADMIN_TOKEN = 'admin-secret-token';
process.env.SITE_URL = 'https://nutrilab.ca';

await new Promise(r => stripeMock.listen(PORT, r));

const checkout = (await import('../api/checkout.js')).default;
const approve = (await import('../api/approve.js')).default;
const webhook = (await import('../api/webhook.js')).default;
const pending = (await import('../api/pending.js')).default;
const { quote, FORMULAS, CUSTOM_DEV_FEE, CUSTOM_ORDER_PRICE } = await import('../api/_lib/pricing.js');
const { createOrder } = await import('../api/_lib/shiphero.js');
const Stripe = (await import('stripe')).default;

const goodCustomer = {
  name: 'Daniel Kim', email: 'daniel@growthlink.me', address1: '480 Callaway Road',
  city: 'London', province: 'Ontario', postal: 'N6G0Z3', country: 'CA'
};

console.log('\npricing');
await test('plan discounts match the quiz', () => {
  assert.equal(quote({ formulaId: 'F01', plan: 'monthly', market: 'CA' }).amountDueNow, 85);
  // F15 is a $95 formula: 95 x 3 x 0.90 = 256.50, billed as 257
  assert.equal(quote({ formulaId: 'F15', plan: 'quarterly', market: 'CA' }).amountDueNow, 257);
  // F01 is $85: 85 x 3 x 0.90 = 229.50, billed as 230
  assert.equal(quote({ formulaId: 'F01', plan: 'quarterly', market: 'CA' }).amountDueNow, 230);
  assert.equal(quote({ formulaId: 'CUSTOM', plan: 'monthly', market: 'CA' }).amountDueNow, 370);
});

/* The guarantee that matters: what the customer is shown on the results
   screen is what the card is charged. This walks every formula against
   every plan and reimplements the quiz's own arithmetic to compare. */
await test('every formula and plan charges what the quiz displays', () => {
  const PLAN = { monthly: [1, 0], bimonthly: [2, 0.05], quarterly: [3, 0.10] };
  const ids = Object.keys(FORMULAS).map(k => FORMULAS[k].id).concat('CUSTOM');
  let checked = 0;
  for (const id of ids) {
    const base = id === 'CUSTOM' ? CUSTOM_ORDER_PRICE
      : Object.values(FORMULAS).find(f => f.id === id).price;
    for (const plan of Object.keys(PLAN)) {
      const [months, discount] = PLAN[plan];
      const shown = Math.round(base * months * (1 - discount));   // quiz cycleTotal()
      const dueShown = shown + (id === 'CUSTOM' ? CUSTOM_DEV_FEE : 0);
      const q = quote({ formulaId: id, plan, market: 'CA' });
      assert.equal(q.perCycle, shown, id + '/' + plan + ' cycle');
      assert.equal(q.amountDueNow, dueShown, id + '/' + plan + ' due today');
      assert.equal(q.perCycleCents, shown * 100, id + '/' + plan + ' cents');
      checked++;
    }
  }
  assert.equal(checked, 102);
});

console.log('\ncheckout');
await test('rejects a bad address', async () => {
  const res = mockRes();
  await checkout(jsonReq({ formulaId: 'F01', customer: { ...goodCustomer, postal: '90210' } }), res);
  assert.equal(res.statusCode, 400);
  assert.match(res.payload.error, /Canadian/);
});
await test('rejects an unknown formula', async () => {
  const res = mockRes();
  await checkout(jsonReq({ formulaId: 'F99', customer: goodCustomer }), res);
  assert.equal(res.statusCode, 400);
});
await test('ignores a price sent by the browser', async () => {
  const res = mockRes();
  await checkout(jsonReq({ formulaId: 'F01', plan: 'monthly', market: 'CA', price: 1, amount: 1, customer: goodCustomer }), res);
  assert.equal(res.statusCode, 200);
  assert.equal(res.payload.quote.amountDueNow, 85);
  const made = calls.find(c => c.path === '/v1/customers' && c.method === 'POST');
  assert.match(made.body, /per_cycle\]=85/);
});
await test('opens a setup session, so nothing is charged yet', async () => {
  const res = mockRes();
  await checkout(jsonReq({ formulaId: 'F01', customer: goodCustomer }), res);
  const session = calls.find(c => c.path === '/v1/checkout/sessions');
  assert.match(session.body, /mode=setup/);
  assert.ok(!/line_items/.test(session.body));
  assert.equal(res.payload.url, 'https://checkout.stripe.com/c/pay/cs_TEST');
});

console.log('\napprove');
await test('refuses without the admin token', async () => {
  const res = mockRes();
  await approve(jsonReq({ customerId: 'cus_TEST1' }), res);
  assert.equal(res.statusCode, 401);
});
await test('refuses a token of the wrong length', async () => {
  const res = mockRes();
  await approve(jsonReq({ customerId: 'cus_TEST1' }, { 'x-admin-token': 'nope' }), res);
  assert.equal(res.statusCode, 401);
});
await test('charges the price from our table, not from metadata', async () => {
  const res = mockRes();
  await approve(jsonReq({ customerId: 'cus_TEST1' }, { 'x-admin-token': process.env.ADMIN_TOKEN }), res);
  assert.equal(res.statusCode, 200, JSON.stringify(res.payload));
  const sub = calls.find(c => c.path === '/v1/subscriptions');
  assert.match(sub.body, /unit_amount\]=8500/);
  assert.match(sub.body, /interval\]=month/);
  assert.equal(res.payload.chargedNow, 85);
});

console.log('\nwebhook');
await test('refuses an unsigned body', async () => {
  const res = mockRes();
  await webhook(rawReq('{"type":"invoice.paid"}', { 'stripe-signature': 'bogus' }), res);
  assert.equal(res.statusCode, 400);
});
await test('a paid invoice becomes a ShipHero order', async () => {
  const sk = new Stripe('sk_test_fake');
  const payload = JSON.stringify({
    id: 'evt_1', object: 'event', type: 'invoice.paid',
    data: { object: { id: 'in_TEST', number: 'A1B2-0001', customer: 'cus_TEST1', tax: 0, metadata: {} } }
  });
  const header = sk.webhooks.generateTestHeaderString({ payload, secret: 'whsec_test' });
  const res = mockRes();
  await webhook(rawReq(payload, { 'stripe-signature': header }), res);
  assert.equal(res.statusCode, 200);
  const order = shipheroCalls.find(c => c.kind === 'graphql').data;
  assert.equal(order.order_number, 'NL-A1B2-0001');
  assert.equal(order.shipping_address.zip, 'N6G 0Z3');
  assert.equal(order.shipping_address.country_code, 'CA');
  assert.equal(order.line_items[0].sku, 'NL-CUSTOM-60');
  assert.equal(order.line_items[0].partner_line_item_id, 'NL-A1B2-0001-1');
  assert.equal(order.line_items[0].warehouse_id, 'V2FyZWhvdXNlOjE=');
});
await test('an invoice already sent is not sent twice', async () => {
  const sk = new Stripe('sk_test_fake');
  const payload = JSON.stringify({
    id: 'evt_2', object: 'event', type: 'invoice.paid',
    data: { object: { id: 'in_TEST', number: 'A1B2-0001', customer: 'cus_TEST1',
                      metadata: { shiphero_order_id: '99' } } }
  });
  const header = sk.webhooks.generateTestHeaderString({ payload, secret: 'whsec_test' });
  const res = mockRes();
  await webhook(rawReq(payload, { 'stripe-signature': header }), res);
  assert.equal(res.statusCode, 200);
  assert.equal(shipheroCalls.filter(c => c.kind === 'graphql').length, 0);
});
await test('a saved card is made the default', async () => {
  const sk = new Stripe('sk_test_fake');
  const payload = JSON.stringify({
    id: 'evt_3', object: 'event', type: 'checkout.session.completed',
    data: { object: { id: 'cs_TEST', mode: 'setup', customer: 'cus_TEST1', setup_intent: 'seti_TEST' } }
  });
  const header = sk.webhooks.generateTestHeaderString({ payload, secret: 'whsec_test' });
  const res = mockRes();
  await webhook(rawReq(payload, { 'stripe-signature': header }), res);
  const upd = calls.filter(c => c.path === '/v1/customers/cus_TEST1' && c.method === 'POST').pop();
  assert.match(upd.body, /default_payment_method\]=pm_TEST/);
});

console.log('\nshiphero');
await test('an expired token is refreshed once and the call retried', async () => {
  failFirstWithAuth = true;
  const order = await createOrder({
    orderNumber: 'NL-TEST-9', email: 'a@b.ca',
    shipping: { firstName: 'A', lastName: 'B', address1: '1 St', city: 'London', state: 'Ontario', zip: 'N6G 0Z3', country: 'CA' },
    lineItems: [{ sku: 'NL-CUSTOM-60', quantity: 1, price: '85.00', name: 'Formula' }]
  });
  assert.equal(order.order_number, 'NL-TEST-9');
  assert.equal(shipheroCalls.filter(c => c.kind === 'refresh').length, 1);
  assert.equal(shipheroCalls.filter(c => c.kind === 'graphql').length, 2);
});

console.log('\npending');
await test('the queue needs the admin token', async () => {
  const req = { method: 'GET', headers: {} };
  const res = mockRes();
  await pending(req, res);
  assert.equal(res.statusCode, 401);
});

stripeMock.close();
console.log('\n' + passed + ' checks passed' + (process.exitCode ? ', with failures above' : ''));
