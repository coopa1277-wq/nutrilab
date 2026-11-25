/* ShipHero — the fulfilment side.
   Access tokens last 28 days, so we hold one in module scope for as long as
   the function stays warm and only call /auth/refresh when ShipHero actually
   rejects what we have. Their docs ask that refresh not be called before
   every request, and a cold start is rare enough to stay well inside that. */

const AUTH = 'https://public-api.shiphero.com/auth/refresh';
const GRAPHQL = 'https://public-api.shiphero.com/graphql';

let cachedToken = process.env.SHIPHERO_ACCESS_TOKEN || null;

async function refreshToken() {
  const refresh = process.env.SHIPHERO_REFRESH_TOKEN;
  if (!refresh) throw new Error('SHIPHERO_REFRESH_TOKEN is not set');

  const res = await fetch(AUTH, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ refresh_token: refresh })
  });
  if (!res.ok) {
    throw new Error('ShipHero refresh failed (' + res.status + '): ' + (await res.text()).slice(0, 300));
  }
  const data = await res.json();
  if (!data.access_token) throw new Error('ShipHero refresh returned no access_token');
  cachedToken = data.access_token;
  return cachedToken;
}

async function gql(query, variables, retry = true) {
  if (!cachedToken) await refreshToken();

  const res = await fetch(GRAPHQL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer ' + cachedToken
    },
    body: JSON.stringify({ query, variables })
  });

  // an expired token is the one failure worth retrying, and only once
  if ((res.status === 401 || res.status === 403) && retry) {
    cachedToken = null;
    await refreshToken();
    return gql(query, variables, false);
  }

  const text = await res.text();
  let body;
  try { body = JSON.parse(text); } catch { throw new Error('ShipHero returned non-JSON: ' + text.slice(0, 300)); }

  if (body.errors && body.errors.length) {
    throw new Error('ShipHero: ' + body.errors.map(e => e.message).join('; ').slice(0, 500));
  }
  return body.data;
}

const ORDER_CREATE = `
mutation CreateOrder($data: CreateOrderInput!) {
  order_create(data: $data) {
    request_id
    complexity
    order { id legacy_id order_number fulfillment_status }
  }
}`;

/* One paid invoice becomes one order in ShipHero.
   order_number carries the Stripe invoice number, which makes the call
   naturally idempotent: ShipHero refuses a duplicate order number, so a
   webhook delivered twice cannot produce two shipments. */
export async function createOrder({
  orderNumber, email, shipping, lineItems, shippingTitle, shippingPrice,
  totalTax = '0.00', note = ''
}) {
  const warehouseId = process.env.SHIPHERO_WAREHOUSE_ID;
  if (!warehouseId) throw new Error('SHIPHERO_WAREHOUSE_ID is not set');

  const address = {
    first_name: shipping.firstName,
    last_name: shipping.lastName,
    address1: shipping.address1,
    address2: shipping.address2 || '',
    city: shipping.city,
    state: shipping.state,
    state_code: shipping.stateCode || shipping.state,
    zip: shipping.zip,
    country: shipping.country,
    country_code: shipping.countryCode || shipping.country,
    email,
    phone: shipping.phone || ''
  };

  const data = {
    order_number: orderNumber,
    shop_name: process.env.SHIPHERO_SHOP_NAME || 'NutriLab',
    fulfillment_status: 'pending',
    order_date: new Date().toISOString().slice(0, 10),
    total_tax: String(totalTax),
    total_discounts: '0.00',
    email,
    profile: process.env.SHIPHERO_PROFILE || 'default',
    packing_note: note.slice(0, 500),
    shipping_lines: {
      title: shippingTitle || 'Standard',
      price: String(shippingPrice ?? '0.00'),
      carrier: process.env.SHIPHERO_CARRIER || 'generic',
      method: process.env.SHIPHERO_SHIP_METHOD || 'standard'
    },
    shipping_address: address,
    billing_address: address,
    line_items: lineItems.map((li, i) => ({
      sku: li.sku,
      partner_line_item_id: orderNumber + '-' + (i + 1),
      quantity: li.quantity,
      price: String(li.price),
      product_name: li.name,
      fulfillment_status: 'pending',
      quantity_pending_fulfillment: li.quantity,
      warehouse_id: warehouseId
    }))
  };

  const out = await gql(ORDER_CREATE, { data });
  return out.order_create.order;
}

export { gql };
