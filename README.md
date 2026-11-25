# NutriLab

The site, the payment flow and the fulfilment handoff.

## Layout

```
index.html          home, with the 3D bottle
quiz.html           the assessment and checkout
ingredients.html    the ingredient index
about.html          about
admin.html          pharmacist review queue (not linked from the site)

assets/             logo, founder photo, bottle, four videos
css/                site, quiz, ingredients, skin, chat
js/                 three.min, scene3d, quiz, ingredients, nav, menu, chat, reveal

api/
  checkout.js       prices the order, opens Stripe Checkout in setup mode
  approve.js        pharmacist sign-off: starts the subscription, charges the card
  webhook.js        Stripe to ShipHero, the only place orders are created
  pending.js        what the review queue reads
  _lib/pricing.js   the price table, mirrored from the quiz
  _lib/shiphero.js  token refresh and order_create
  _lib/common.js    Stripe client, validation, admin auth

test/run.mjs        15 checks against a stand-in Stripe and ShipHero
```

CSS order matters: `skin.css` overrides `quiz.css` and `ingredients.css`, so it
must stay last in the `<link>` list on every page.

## How an order moves

1. The customer finishes the quiz and presses **Continue to secure payment**.
2. `POST /api/checkout` validates the address, **looks the price up on the
   server**, creates a Stripe customer and opens a Stripe-hosted page.
3. Stripe collects and saves the card. **Nothing is charged.** The customer
   returns to `/quiz?nl_setup=…` and sees the confirmation.
4. A pharmacist opens `/admin.html` and presses **Approve**.
5. `POST /api/approve` starts the subscription, which charges the card now and
   every cycle after.
6. Each successful charge fires `invoice.paid`, and `api/webhook.js` turns that
   into a ShipHero order. Renewals create their orders with no action from
   anyone.

Fulfilment runs only on `invoice.paid`, so the warehouse is never told to ship
something that was not paid for.

## Environment variables

Vercel → Settings → Environments → Production. Never commit these.

| Name | Type | Where it comes from |
|---|---|---|
| `STRIPE_SECRET_KEY` | Secret | Stripe → API keys. `rk_live_…` or `sk_live_…` |
| `STRIPE_WEBHOOK_SECRET` | Secret | The signing secret on the webhook destination |
| `ADMIN_TOKEN` | Secret | A long random string you invent. Password for `/admin.html` |
| `SITE_URL` | Config | `https://www.nutrilab.life` |
| `SHIPHERO_REFRESH_TOKEN` | Secret | ShipHero → third-party developer user |
| `SHIPHERO_WAREHOUSE_ID` | Config | `{ account { data { warehouses { id } } } }` |
| `SHIPHERO_SKU` | Config | The SKU the warehouse picks for one bottle |
| `SHIPHERO_SHOP_NAME` | Config | `NutriLab` |

Optional: `SHIPHERO_CARRIER`, `SHIPHERO_SHIP_METHOD`, `SHIPHERO_PROFILE`,
`SHIPHERO_ACCESS_TOKEN`.

The Stripe ones alone are enough to take payments. Without the ShipHero ones
the charge still works and the webhook logs that it could not reach the
warehouse.

## Stripe webhook

Events: `checkout.session.completed`, `invoice.paid`, `invoice.payment_failed`.
Endpoint: `https://www.nutrilab.life/api/webhook`. Payload style **snapshot**,
not thin. Live mode and test mode have different signing secrets.

## Checks

```bash
npm install
node test/run.mjs     # no keys, no network
```

One of those checks walks all 33 formulas against all 3 plans, plus the custom
formula, and asserts the server charges exactly what the results screen
displayed. Run it after any price edit.

After deploying, open `https://www.nutrilab.life/api/checkout`. It should
answer `{"error":"Use POST."}`. A 404 means the functions did not deploy.

## Still open

- **Tax.** Nothing is added. For GST/HST, turn on Stripe Tax and add
  `automatic_tax: { enabled: true }` to the subscription in `api/approve.js`.
- **Shipping.** Every order ships free. The $120 threshold in the site copy is
  not enforced anywhere.
- **Accounts.** The quiz collects a password at signup but nothing stores it.
  There is no login, and cancellation happens in the Stripe dashboard.
- **Emails.** Stripe sends receipts. Nothing sends a shipping confirmation.
