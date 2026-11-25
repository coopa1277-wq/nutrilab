/* Server-side price list.
   The browser tells us WHICH formula it was given; it never tells us what
   that formula costs. Every amount below is recomputed here from the same
   table the quiz renders, so a price edited in devtools is simply ignored. */

const FORMULAS = {
  "sleep_stress": {id:"F01",name:"Sleep & Stress Balance",price:85},
  "cognitive_sleep": {id:"F02",name:"Sleep & Mind Clarity",price:90},
  "sleep_weight": {id:"F03",name:"Sleep & Metabolic Reset",price:85},
  "immune_sleep": {id:"F04",name:"Sleep & Immune Fortify",price:85},
  "skin_sleep": {id:"F05",name:"Sleep & Skin Renewal",price:90},
  "energy_sleep": {id:"F06",name:"Sleep & Energy Restore",price:95},
  "cognitive_stress": {id:"F07",name:"Stress & Mind Clarity",price:95},
  "stress_weight": {id:"F08",name:"Stress & Metabolic Balance",price:90},
  "immune_stress": {id:"F09",name:"Stress & Immune Shield",price:85},
  "skin_stress": {id:"F10",name:"Stress & Skin Calm",price:90},
  "energy_stress": {id:"F11",name:"Stress & Energy Lift",price:95},
  "hormonal_stress": {id:"F12",name:"Stress & Hormonal Ease",price:90},
  "cognitive_immune": {id:"F13",name:"Mind & Immune Defence",price:90},
  "cardio_cognitive": {id:"F14",name:"Heart & Mind Clarity",price:95},
  "cognitive_energy": {id:"F15",name:"Focus & Vitality",price:95},
  "immune_weight": {id:"F16",name:"Metabolic & Immune Balance",price:90},
  "joint_weight": {id:"F17",name:"Metabolic & Joint Relief",price:90},
  "skin_weight": {id:"F18",name:"Metabolic & Skin Clarity",price:90},
  "energy_weight": {id:"F19",name:"Metabolic & Energy Boost",price:95},
  "hormonal_weight": {id:"F20",name:"Metabolic & Hormonal Reset",price:95},
  "immune_joint": {id:"F21",name:"Immune & Joint Relief",price:85},
  "cardio_immune": {id:"F22",name:"Immune & Heart Protect",price:90},
  "immune_skin": {id:"F23",name:"Immune & Skin Glow",price:90},
  "energy_immune": {id:"F24",name:"Immune & Energy Restore",price:95},
  "hormonal_immune": {id:"F25",name:"Immune & Hormonal Balance",price:90},
  "cardio_joint": {id:"F26",name:"Joint & Heart Protect",price:90},
  "joint_skin": {id:"F27",name:"Joint & Skin Renewal",price:90},
  "energy_joint": {id:"F28",name:"Joint Relief & Vitality",price:95},
  "hormonal_joint": {id:"F29",name:"Joint & Hormonal Support",price:90},
  "cardio_energy": {id:"F30",name:"Heart & Energy Lift",price:95},
  "cardio_hormonal": {id:"F31",name:"Heart & Hormonal Balance",price:95},
  "hormonal_skin": {id:"F32",name:"Skin & Hormonal Clarity",price:90},
  "energy_hormonal": {id:"F33",name:"Energy & Hormonal Restore",price:95},
};

// a custom formula carries a one-time development fee on the first charge
export const CUSTOM_DEV_FEE = 275;
export const CUSTOM_ORDER_PRICE = 95;

// longer commitments are cheaper per month
const PLANS = {
  monthly:   { months: 1, discount: 0.00 },
  bimonthly: { months: 2, discount: 0.05 },
  quarterly: { months: 3, discount: 0.10 }
};

const MARKETS = {
  CA: { currency: 'cad', country: 'CA' },
  AU: { currency: 'aud', country: 'AU' }
};

export function formulaById(id) {
  if (id === 'CUSTOM') {
    return { id: 'CUSTOM', name: 'Your individualised formula', price: CUSTOM_ORDER_PRICE, custom: true };
  }
  for (const key of Object.keys(FORMULAS)) {
    if (FORMULAS[key].id === id) return { ...FORMULAS[key], key, custom: false };
  }
  return null;
}

/* What the customer is actually committing to.
   amountDueNow is what the first charge takes, which for a custom formula
   includes the development fee. recurringAmount is every charge after it. */
export function quote({ formulaId, plan = 'monthly', market = 'CA' }) {
  const formula = formulaById(formulaId);
  if (!formula) throw new Error('Unknown formula: ' + formulaId);

  const planSpec = PLANS[plan];
  if (!planSpec) throw new Error('Unknown plan: ' + plan);

  const marketSpec = MARKETS[market];
  if (!marketSpec) throw new Error('Unknown market: ' + market);

  // The cycle total is rounded in one step, exactly as cycleTotal() does in
  // the quiz. Rounding the per-month figure first and then multiplying lands
  // a dollar off on four of the formula/plan combinations, so it isn't done.
  const perCycle = Math.round(formula.price * planSpec.months * (1 - planSpec.discount));
  const perMonth = Math.round(formula.price * (1 - planSpec.discount)); // shown, never billed
  const devFee = formula.custom ? CUSTOM_DEV_FEE : 0;

  return {
    formulaId: formula.id,
    formulaName: formula.name,
    custom: formula.custom,
    plan,
    months: planSpec.months,
    currency: marketSpec.currency,
    country: marketSpec.country,
    perMonth,
    perCycle,
    devFee,
    amountDueNow: perCycle + devFee,
    recurringAmount: perCycle,
    // Stripe works in the smallest currency unit
    perCycleCents: perCycle * 100,
    devFeeCents: devFee * 100
  };
}

export { PLANS, MARKETS, FORMULAS };
