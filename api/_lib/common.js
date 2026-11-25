import Stripe from 'stripe';

let stripeClient = null;
export function stripe() {
  if (!stripeClient) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error('STRIPE_SECRET_KEY is not set');
    // STRIPE_API_HOST lets the test suite point the real SDK at a local
    // stand-in. Leave it unset everywhere else and the SDK talks to Stripe.
    const opts = process.env.STRIPE_API_HOST
      ? { host: process.env.STRIPE_API_HOST, port: Number(process.env.STRIPE_API_PORT), protocol: 'http' }
      : {};
    stripeClient = new Stripe(key, opts);
  }
  return stripeClient;
}

export function siteUrl(req) {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, '');
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const proto = req.headers['x-forwarded-proto'] || 'https';
  return proto + '://' + host;
}

export function readJson(req) {
  if (req.body && typeof req.body === 'object') return Promise.resolve(req.body);
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', c => { raw += c; if (raw.length > 1e6) req.destroy(); });
    req.on('end', () => {
      if (!raw) return resolve({});
      try { resolve(JSON.parse(raw)); } catch { reject(new Error('Body was not valid JSON')); }
    });
    req.on('error', reject);
  });
}

/* Everything that arrives from the browser is treated as a stranger's
   typing: trimmed, length-capped, and checked for the shape we need. */
const str = (v, max) => String(v == null ? '' : v).trim().slice(0, max);

export function validateCustomer(input = {}) {
  const c = {
    name: str(input.name, 120),
    email: str(input.email, 160).toLowerCase(),
    address1: str(input.address1 ?? input.address, 200),
    address2: str(input.address2, 200),
    city: str(input.city, 100),
    province: str(input.province ?? input.state, 100),
    postal: str(input.postal ?? input.zip, 20).toUpperCase(),
    country: str(input.country, 2).toUpperCase() || 'CA',
    phone: str(input.phone, 40)
  };

  const errors = [];
  if (!c.name || !c.name.includes(' ')) errors.push('Enter your full name.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c.email)) errors.push('Enter a valid email address.');
  if (!c.address1) errors.push('Enter your street address.');
  if (!c.city) errors.push('Enter your city.');
  if (!c.province) errors.push('Select your province or state.');
  if (!c.postal) errors.push('Enter your postal code.');

  // a wrong postal code means a parcel that never arrives, so check the shape
  if (c.country === 'CA' && c.postal && !/^[A-Z]\d[A-Z] ?\d[A-Z]\d$/.test(c.postal)) {
    errors.push('That postal code does not look like a Canadian one.');
  }
  if (c.country === 'AU' && c.postal && !/^\d{4}$/.test(c.postal)) {
    errors.push('An Australian postcode is four digits.');
  }

  const parts = c.name.split(/\s+/);
  c.firstName = parts.shift();
  c.lastName = parts.join(' ') || c.firstName;
  if (c.country === 'CA' && /^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(c.postal)) {
    c.postal = c.postal.slice(0, 3) + ' ' + c.postal.slice(3);
  }

  return { customer: c, errors };
}

export function fail(res, status, message, extra = {}) {
  res.status(status).json({ error: message, ...extra });
}

export function requireAdmin(req, res) {
  const expected = process.env.ADMIN_TOKEN;
  if (!expected) { fail(res, 500, 'ADMIN_TOKEN is not set on the server.'); return false; }
  const given = req.headers['x-admin-token'] || '';
  // compared at full length so the check does not leak the token by timing
  const ok = given.length === expected.length &&
    [...given].reduce((acc, ch, i) => acc | (ch.charCodeAt(0) ^ expected.charCodeAt(i)), 0) === 0;
  if (!ok) { fail(res, 401, 'Not authorised.'); return false; }
  return true;
}
