// ─── DATA ─────────────────────────────────────────────────────────────────────

const AM={
  sleep:    {label:"Sleep",                    icon:"", desc:"Difficulty falling asleep, staying asleep, or waking unrefreshed — affecting overnight brain repair, hormone restoration, and immune deployment."},
  stress:   {label:"Stress, Anxiety & Mood",   icon:"", desc:"Feeling overwhelmed, unable to switch off, or persistent low mood — driven by elevated cortisol and disrupted brain chemistry affecting stress, anxiety, and emotional wellbeing."},
  cognitive:{label:"Focus & Memory",            icon:"", desc:"Brain fog, difficulty concentrating, or forgetting things easily — caused by under-fuelled neurons, cortisol impairing the memory centre, or insufficient acetylcholine."},
  weight:   {label:"Weight & Metabolism",       icon:"", desc:"Stubborn weight despite effort, uncontrollable cravings, or a sluggish metabolism — driven by insulin resistance, cortisol-programmed fat storage, or appetite signals working against you."},
  immune:   {label:"Immune Health & Antioxidant",icon:"",desc:"Getting sick easily, slow recovery, allergies, or feeling run-down — reflecting immune cells that lack the fuel or activation signals they need, or a system overreacting to everyday triggers."},
  joint:    {label:"Joint, Bone & Mobility",    icon:"", desc:"Stiffness, aching, bone density concerns, or reduced range of motion — caused by inflammation in joint tissue, cartilage wear, or hormonal signals to bone cells declining."},
  cardio:   {label:"Heart Health",              icon:"", desc:"Cholesterol, blood pressure, circulation, or general cardiovascular protection — closely tied to mitochondrial energy and inflammatory pathways in the vascular system."},
  skin:     {label:"Skin, Hair & Eye Health",   icon:"", desc:"Breakouts, dullness, thinning hair, or eye strain — rooted in hormonal imbalances, nutrient shortfalls, inflammation reaching the skin, or oxidative stress affecting the retina."},
  energy:   {label:"Energy, Vitality & Sports", icon:"", desc:"Low energy, afternoon crashes, poor recovery from exercise, or wanting to optimise athletic performance — caused by mitochondria lacking the rate-limiting molecules they need."},
  hormonal: {label:"Hormonal Balance",          icon:"", desc:"Cycle irregularity, PMS, PCOS, or menopausal changes — driven by imbalances in cortisol, oestrogen metabolites, androgens, or the brain signals regulating sex hormone production."},
};

const FL={
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
const ING={
  F01:[
    {n:"Vitamin B12",d:"1,000 mcg/day",b:"A vitamin your body uses to keep nerves healthy, turn food into energy and support a steady mood. Many people run low without realising it, so topping it up helps your brain and body run smoothly."},
    {n:"Mg Glycinate",d:"300 mg/day",b:"A calming mineral involved in hundreds of everyday body processes. It helps your muscles and mind relax, supports restful sleep and steady energy, and eases tension. This gentle form is easy on the stomach."},
    {n:"Ashwagandha KSM-66",d:"500 mg/day",b:"A traditional herb best known for helping the body handle stress. It gently lowers your stress levels, which can improve calm, sleep, mood and resilience during busy or demanding periods."},
    {n:"L-Theanine",d:"346 mg/day",b:"A natural calming compound found in tea. It helps you feel relaxed but alert — easing racing thoughts and making it easier to unwind or focus, without making you drowsy."},
    {n:"Melatonin",d:"3 mg/day",b:"Your body's natural sleep signal. Taken at night, it helps reset your internal clock so you fall asleep more easily and keep a healthy sleep rhythm. Best taken shortly before bed."},
  ],
  F02:[
    {n:"Vitamin B12",d:"1,000 mcg/day",b:"A vitamin your body uses to keep nerves healthy, turn food into energy and support a steady mood. Many people run low without realising it, so topping it up helps your brain and body run smoothly."},
    {n:"Mg Glycinate (bisglycinate)",d:"200 mg/day",b:"A calming mineral involved in hundreds of everyday body processes. It helps your muscles and mind relax, supports restful sleep and steady energy, and eases tension. This gentle form is easy on the stomach."},
    {n:"L-Theanine",d:"412 mg/day",b:"A natural calming compound found in tea. It helps you feel relaxed but alert — easing racing thoughts and making it easier to unwind or focus, without making you drowsy."},
    {n:"Bacopa Monnieri 45% bacosides",d:"514 mg/day",b:"A traditional brain herb shown to support memory and learning. It works gradually over several weeks to sharpen recall and help you think more clearly."},
    {n:"Melatonin",d:"3 mg/day",b:"Your body's natural sleep signal. Taken at night, it helps reset your internal clock so you fall asleep more easily and keep a healthy sleep rhythm. Best taken shortly before bed."},
  ],
  F03:[
    {n:"Vitamin D3",d:"4,000 IU/day",b:"The “sunshine vitamin.” It supports your immune system, bones, mood and hormone balance. Most people don't get enough from sunlight alone, so a daily dose helps your whole body work better."},
    {n:"Vitamin B6 (P5P form)",d:"26 mg/day",b:"A vitamin that helps your body make the natural chemicals behind calm mood, restful sleep and balanced hormones. It's the “helper” that lets several other ingredients do their job."},
    {n:"L-Tryptophan",d:"1,000 mg/day",b:"A natural building block your body turns into the calming, sleep-promoting signals that help you relax and drift off. It supports easier, deeper sleep and a settled mood."},
    {n:"L-Theanine",d:"290 mg/day",b:"A natural calming compound found in tea. It helps you feel relaxed but alert — easing racing thoughts and making it easier to unwind or focus, without making you drowsy."},
    {n:"Melatonin",d:"3 mg/day",b:"Your body's natural sleep signal. Taken at night, it helps reset your internal clock so you fall asleep more easily and keep a healthy sleep rhythm. Best taken shortly before bed."},
  ],
  F04:[
    {n:"Vitamin D3",d:"4,000 IU/day",b:"The “sunshine vitamin.” It supports your immune system, bones, mood and hormone balance. Most people don't get enough from sunlight alone, so a daily dose helps your whole body work better."},
    {n:"Vitamin C (Ascorbic Acid)",d:"500 mg/day",b:"A well-known antioxidant that supports your immune defences, helps your body make collagen for healthy skin, and helps you cope with stress. It protects your cells from everyday wear and tear."},
    {n:"Beta-1,3-Glucans",d:"600 mg/day",b:"Natural fibres that act like a wake-up call for your immune system, helping your body's defensive cells stay alert and ready to respond."},
    {n:"Zinc Bisglycinate",d:"26 mg/day",b:"An essential mineral for a strong immune system, clear skin and healthy hormones. This gentle, well-absorbed form is easy on the stomach."},
    {n:"L-Theanine",d:"296 mg/day",b:"A natural calming compound found in tea. It helps you feel relaxed but alert — easing racing thoughts and making it easier to unwind or focus, without making you drowsy."},
    {n:"Melatonin",d:"3 mg/day",b:"Your body's natural sleep signal. Taken at night, it helps reset your internal clock so you fall asleep more easily and keep a healthy sleep rhythm. Best taken shortly before bed."},
  ],
  F05:[
    {n:"Vitamin D3",d:"4,000 IU/day",b:"The “sunshine vitamin.” It supports your immune system, bones, mood and hormone balance. Most people don't get enough from sunlight alone, so a daily dose helps your whole body work better."},
    {n:"Vitamin E (d-alpha Tocopherol)",d:"268 mg/day",b:"A protective antioxidant that shields your skin and cells from damage, helping keep skin firm, healthy and youthful."},
    {n:"Resveratrol 50%",d:"400 mg/day",b:"A plant antioxidant found in grapes that supports healthy ageing, circulation and skin by protecting your cells from stress and wear."},
    {n:"Astaxanthin",d:"12 mg/day",b:"A powerful natural antioxidant from algae (the pigment that makes salmon pink). It helps protect skin from sun and ageing and supports overall cell health."},
    {n:"Melatonin",d:"3 mg/day",b:"Your body's natural sleep signal. Taken at night, it helps reset your internal clock so you fall asleep more easily and keep a healthy sleep rhythm. Best taken shortly before bed."},
  ],
  F06:[
    {n:"Vitamin B12",d:"1,000 mcg/day",b:"A vitamin your body uses to keep nerves healthy, turn food into energy and support a steady mood. Many people run low without realising it, so topping it up helps your brain and body run smoothly."},
    {n:"Mg Glycinate",d:"200 mg/day",b:"A calming mineral involved in hundreds of everyday body processes. It helps your muscles and mind relax, supports restful sleep and steady energy, and eases tension. This gentle form is easy on the stomach."},
    {n:"NR (Nicotinamide Riboside)",d:"400 mg/day",b:"A nutrient that recharges your cells' energy “batteries,” helping restore steady energy, stamina and healthy ageing from the inside out."},
    {n:"CoQ10 (Kaneka Ubiquinol)",d:"200 mg/day",b:"A natural compound your cells use to produce energy. Levels drop with age, so topping it up supports lasting energy and a healthy heart."},
    {n:"Melatonin",d:"3 mg/day",b:"Your body's natural sleep signal. Taken at night, it helps reset your internal clock so you fall asleep more easily and keep a healthy sleep rhythm. Best taken shortly before bed."},
  ],
  F07:[
    {n:"Vitamin B12",d:"1,000 mcg/day",b:"A vitamin your body uses to keep nerves healthy, turn food into energy and support a steady mood. Many people run low without realising it, so topping it up helps your brain and body run smoothly."},
    {n:"Vitamin B6 (P5P form)",d:"26 mg/day",b:"A vitamin that helps your body make the natural chemicals behind calm mood, restful sleep and balanced hormones. It's the “helper” that lets several other ingredients do their job."},
    {n:"Ashwagandha KSM-66 1.5% withanolides",d:"444 mg/day",b:"A traditional herb best known for helping the body handle stress. It gently lowers your stress levels, which can improve calm, sleep, mood and resilience during busy or demanding periods."},
    {n:"Phosphatidylserine",d:"300 mg/day",b:"A natural fat that nourishes your brain cells — supporting memory and focus while helping keep stress in check."},
    {n:"Alpha GPC (L-alpha-glycerylphosphorylcholine)",d:"400 mg/day",b:"A nutrient that boosts a key brain messenger for focus, memory and mental sharpness."},
  ],
  F08:[
    {n:"Vitamin D3",d:"4,000 IU/day",b:"The “sunshine vitamin.” It supports your immune system, bones, mood and hormone balance. Most people don't get enough from sunlight alone, so a daily dose helps your whole body work better."},
    {n:"Vitamin B6 (P5P form)",d:"26 mg/day",b:"A vitamin that helps your body make the natural chemicals behind calm mood, restful sleep and balanced hormones. It's the “helper” that lets several other ingredients do their job."},
    {n:"Ashwagandha (KSM-66, 1.5% withanolides)",d:"600 mg/day",b:"A traditional herb best known for helping the body handle stress. It gently lowers your stress levels, which can improve calm, sleep, mood and resilience during busy or demanding periods."},
    {n:"Alpha Lipoic Acid (R-ALA)",d:"194 mg/day",b:"A versatile antioxidant that helps your cells make energy, supports steady blood sugar and recharges other antioxidants in your body."},
    {n:"5-HTP (Griffonia simplicifolia)",d:"300 mg/day",b:"A natural building block for serotonin, your “feel-good” and fullness signal. It supports calm mood and helps curb appetite and cravings."},
  ],
  F09:[
    {n:"Vitamin D3",d:"4,000 IU/day",b:"The “sunshine vitamin.” It supports your immune system, bones, mood and hormone balance. Most people don't get enough from sunlight alone, so a daily dose helps your whole body work better."},
    {n:"Vitamin C",d:"500 mg/day",b:"A well-known antioxidant that supports your immune defences, helps your body make collagen for healthy skin, and helps you cope with stress. It protects your cells from everyday wear and tear."},
    {n:"Ashwagandha KSM-66",d:"430 mg/day",b:"A traditional herb best known for helping the body handle stress. It gently lowers your stress levels, which can improve calm, sleep, mood and resilience during busy or demanding periods."},
    {n:"ALA (Alpha Lipoic Acid)",d:"300 mg/day",b:"A versatile antioxidant that helps your cells make energy, supports steady blood sugar and recharges other antioxidants in your body."},
  ],
  F10:[
    {n:"Vitamin D3",d:"4,000 IU/day",b:"The “sunshine vitamin.” It supports your immune system, bones, mood and hormone balance. Most people don't get enough from sunlight alone, so a daily dose helps your whole body work better."},
    {n:"Vitamin C (Ascorbic Acid)",d:"500 mg/day",b:"A well-known antioxidant that supports your immune defences, helps your body make collagen for healthy skin, and helps you cope with stress. It protects your cells from everyday wear and tear."},
    {n:"Phosphatidylserine",d:"400 mg/day",b:"A natural fat that nourishes your brain cells — supporting memory and focus while helping keep stress in check."},
    {n:"Niacinamide (Vitamin B3)",d:"518 mg/day",b:"A gentle form of vitamin B3 that supports clear, healthy skin and helps your cells repair and stay energised."},
  ],
  F11:[
    {n:"Vitamin B12",d:"1,000 mcg/day",b:"A vitamin your body uses to keep nerves healthy, turn food into energy and support a steady mood. Many people run low without realising it, so topping it up helps your brain and body run smoothly."},
    {n:"Mg Glycinate",d:"192 mg/day",b:"A calming mineral involved in hundreds of everyday body processes. It helps your muscles and mind relax, supports restful sleep and steady energy, and eases tension. This gentle form is easy on the stomach."},
    {n:"Ashwagandha KSM-66",d:"400 mg/day",b:"A traditional herb best known for helping the body handle stress. It gently lowers your stress levels, which can improve calm, sleep, mood and resilience during busy or demanding periods."},
    {n:"NR (Nicotinamide Riboside)",d:"400 mg/day",b:"A nutrient that recharges your cells' energy “batteries,” helping restore steady energy, stamina and healthy ageing from the inside out."},
  ],
  F12:[
    {n:"Vitamin B12",d:"1,000 mcg/day",b:"A vitamin your body uses to keep nerves healthy, turn food into energy and support a steady mood. Many people run low without realising it, so topping it up helps your brain and body run smoothly."},
    {n:"Vitamin B6 P5P",d:"26 mg/day",b:"A vitamin that helps your body make the natural chemicals behind calm mood, restful sleep and balanced hormones. It's the “helper” that lets several other ingredients do their job."},
    {n:"Ashwagandha KSM-66",d:"500 mg/day",b:"A traditional herb best known for helping the body handle stress. It gently lowers your stress levels, which can improve calm, sleep, mood and resilience during busy or demanding periods."},
    {n:"Vitex 4:1",d:"40 mg/day",b:"A traditional women's herb (chasteberry) that supports a balanced monthly cycle and eases PMS-related symptoms."},
    {n:"Mg Glycinate",d:"334 mg/day",b:"A calming mineral involved in hundreds of everyday body processes. It helps your muscles and mind relax, supports restful sleep and steady energy, and eases tension. This gentle form is easy on the stomach."},
  ],
  F13:[
    {n:"Vitamin B12",d:"1,000 mcg/day",b:"A vitamin your body uses to keep nerves healthy, turn food into energy and support a steady mood. Many people run low without realising it, so topping it up helps your brain and body run smoothly."},
    {n:"Zinc Bisglycinate",d:"26 mg/day",b:"An essential mineral for a strong immune system, clear skin and healthy hormones. This gentle, well-absorbed form is easy on the stomach."},
    {n:"Lion's Mane (Hericium erinaceus) 40% hericenones",d:"650 mg/day",b:"A mushroom traditionally used to support brain health, memory and the body's natural nerve repair."},
    {n:"Alpha Lipoic Acid (R-ALA)",d:"426 mg/day",b:"A versatile antioxidant that helps your cells make energy, supports steady blood sugar and recharges other antioxidants in your body."},
  ],
  F14:[
    {n:"Vitamin B12",d:"1,000 mcg/day",b:"A vitamin your body uses to keep nerves healthy, turn food into energy and support a steady mood. Many people run low without realising it, so topping it up helps your brain and body run smoothly."},
    {n:"Mg Glycinate",d:"200 mg/day",b:"A calming mineral involved in hundreds of everyday body processes. It helps your muscles and mind relax, supports restful sleep and steady energy, and eases tension. This gentle form is easy on the stomach."},
    {n:"Ginkgo Biloba EGb761",d:"200 mg/day",b:"A traditional herb that supports healthy blood flow to the brain, helping with memory, focus and mental clarity."},
    {n:"Resveratrol 50%",d:"450 mg/day",b:"A plant antioxidant found in grapes that supports healthy ageing, circulation and skin by protecting your cells from stress and wear."},
  ],
  F15:[
    {n:"Vitamin B12",d:"1,000 mcg/day",b:"A vitamin your body uses to keep nerves healthy, turn food into energy and support a steady mood. Many people run low without realising it, so topping it up helps your brain and body run smoothly."},
    {n:"Mg Glycinate",d:"166 mg/day",b:"A calming mineral involved in hundreds of everyday body processes. It helps your muscles and mind relax, supports restful sleep and steady energy, and eases tension. This gentle form is easy on the stomach."},
    {n:"Alpha GPC",d:"460 mg/day",b:"A nutrient that boosts a key brain messenger for focus, memory and mental sharpness."},
    {n:"CoQ10 (Kaneka Ubiquinol)",d:"200 mg/day",b:"A natural compound your cells use to produce energy. Levels drop with age, so topping it up supports lasting energy and a healthy heart."},
    {n:"NR (Nicotinamide Riboside)",d:"340 mg/day",b:"A nutrient that recharges your cells' energy “batteries,” helping restore steady energy, stamina and healthy ageing from the inside out."},
  ],
  F16:[
    {n:"Vitamin D3",d:"4,000 IU/day",b:"The “sunshine vitamin.” It supports your immune system, bones, mood and hormone balance. Most people don't get enough from sunlight alone, so a daily dose helps your whole body work better."},
    {n:"Vitamin B6 (P5P form)",d:"26 mg/day",b:"A vitamin that helps your body make the natural chemicals behind calm mood, restful sleep and balanced hormones. It's the “helper” that lets several other ingredients do their job."},
    {n:"5-HTP (Griffonia simplicifolia seed)",d:"300 mg/day",b:"A natural building block for serotonin, your “feel-good” and fullness signal. It supports calm mood and helps curb appetite and cravings."},
    {n:"Green Tea Extract (50% EGCG)",d:"590 mg/day",b:"A concentrated green-tea antioxidant that gently boosts calorie burning and metabolism while supporting immune and overall health."},
    {n:"Quercetin 95%",d:"500 mg/day",b:"A plant antioxidant that calms everyday inflammation, supports your immune system and helps steady metabolism."},
  ],
  F17:[
    {n:"Vitamin D3",d:"4,000 IU/day",b:"The “sunshine vitamin.” It supports your immune system, bones, mood and hormone balance. Most people don't get enough from sunlight alone, so a daily dose helps your whole body work better."},
    {n:"Vitamin B6 (P5P form)",d:"26 mg/day",b:"A vitamin that helps your body make the natural chemicals behind calm mood, restful sleep and balanced hormones. It's the “helper” that lets several other ingredients do their job."},
    {n:"5-HTP (Griffonia simplicifolia seed)",d:"200 mg/day",b:"A natural building block for serotonin, your “feel-good” and fullness signal. It supports calm mood and helps curb appetite and cravings."},
    {n:"Green Tea Extract (50% EGCG)",d:"800 mg/day",b:"A concentrated green-tea antioxidant that gently boosts calorie burning and metabolism while supporting immune and overall health."},
    {n:"Boswellia 65% AKBA",d:"220 mg/day",b:"A traditional herb (frankincense) that soothes joint discomfort and stiffness by calming inflammation — without the stomach upset some painkillers cause."},
  ],
  F18:[
    {n:"Vitamin D3",d:"4,000 IU/day",b:"The “sunshine vitamin.” It supports your immune system, bones, mood and hormone balance. Most people don't get enough from sunlight alone, so a daily dose helps your whole body work better."},
    {n:"Zinc Bisglycinate",d:"26 mg/day",b:"An essential mineral for a strong immune system, clear skin and healthy hormones. This gentle, well-absorbed form is easy on the stomach."},
    {n:"Berberine HCl",d:"986 mg/day",b:"A plant compound well studied for supporting healthy blood sugar and metabolism. Best taken with food."},
    {n:"Niacinamide",d:"488 mg/day",b:"A gentle form of vitamin B3 that supports clear, healthy skin and helps your cells repair and stay energised."},
    {n:"Astaxanthin",d:"12 mg/day",b:"A powerful natural antioxidant from algae (the pigment that makes salmon pink). It helps protect skin from sun and ageing and supports overall cell health."},
  ],
  F19:[
    {n:"Vitamin B12",d:"1,000 mcg/day",b:"A vitamin your body uses to keep nerves healthy, turn food into energy and support a steady mood. Many people run low without realising it, so topping it up helps your brain and body run smoothly."},
    {n:"Berberine HCl",d:"1,250 mg/day",b:"A plant compound well studied for supporting healthy blood sugar and metabolism. Best taken with food."},
    {n:"NR (Nicotinamide Riboside)",d:"300 mg/day",b:"A nutrient that recharges your cells' energy “batteries,” helping restore steady energy, stamina and healthy ageing from the inside out."},
    {n:"PQQ (Pyrroloquinoline Quinone)",d:"20 mg/day",b:"A nutrient that helps your cells build brand-new energy “batteries,” supporting lasting energy and healthy ageing."},
  ],
  F20:[
    {n:"Vitamin D3",d:"4,000 IU/day",b:"The “sunshine vitamin.” It supports your immune system, bones, mood and hormone balance. Most people don't get enough from sunlight alone, so a daily dose helps your whole body work better."},
    {n:"Vitamin B6 P5P",d:"26 mg/day",b:"A vitamin that helps your body make the natural chemicals behind calm mood, restful sleep and balanced hormones. It's the “helper” that lets several other ingredients do their job."},
    {n:"Berberine HCl",d:"1,000 mg/day",b:"A plant compound well studied for supporting healthy blood sugar and metabolism. Best taken with food."},
    {n:"ALA (Alpha Lipoic Acid)",d:"300 mg/day",b:"A versatile antioxidant that helps your cells make energy, supports steady blood sugar and recharges other antioxidants in your body."},
    {n:"DIM (Diindolylmethane)",d:"192 mg/day",b:"A natural compound from vegetables like broccoli that helps your body keep oestrogen in healthy balance — supporting hormones and clearer skin."},
  ],
  F21:[
    {n:"Vitamin D3",d:"4,000 IU/day",b:"The “sunshine vitamin.” It supports your immune system, bones, mood and hormone balance. Most people don't get enough from sunlight alone, so a daily dose helps your whole body work better."},
    {n:"Mg Glycinate",d:"200 mg/day",b:"A calming mineral involved in hundreds of everyday body processes. It helps your muscles and mind relax, supports restful sleep and steady energy, and eases tension. This gentle form is easy on the stomach."},
    {n:"Quercetin 95%",d:"600 mg/day",b:"A plant antioxidant that calms everyday inflammation, supports your immune system and helps steady metabolism."},
    {n:"Boswellia 65% AKBA",d:"200 mg/day",b:"A traditional herb (frankincense) that soothes joint discomfort and stiffness by calming inflammation — without the stomach upset some painkillers cause."},
    {n:"Vitamin C",d:"400 mg/day",b:"A well-known antioxidant that supports your immune defences, helps your body make collagen for healthy skin, and helps you cope with stress. It protects your cells from everyday wear and tear."},
  ],
  F22:[
    {n:"Vitamin D3",d:"4,000 IU/day",b:"The “sunshine vitamin.” It supports your immune system, bones, mood and hormone balance. Most people don't get enough from sunlight alone, so a daily dose helps your whole body work better."},
    {n:"Mg Glycinate",d:"300 mg/day",b:"A calming mineral involved in hundreds of everyday body processes. It helps your muscles and mind relax, supports restful sleep and steady energy, and eases tension. This gentle form is easy on the stomach."},
    {n:"Quercetin 95%",d:"600 mg/day",b:"A plant antioxidant that calms everyday inflammation, supports your immune system and helps steady metabolism."},
    {n:"Resveratrol 50%",d:"400 mg/day",b:"A plant antioxidant found in grapes that supports healthy ageing, circulation and skin by protecting your cells from stress and wear."},
  ],
  F23:[
    {n:"Vitamin D3",d:"4,000 IU/day",b:"The “sunshine vitamin.” It supports your immune system, bones, mood and hormone balance. Most people don't get enough from sunlight alone, so a daily dose helps your whole body work better."},
    {n:"Zinc Bisglycinate",d:"26 mg/day",b:"An essential mineral for a strong immune system, clear skin and healthy hormones. This gentle, well-absorbed form is easy on the stomach."},
    {n:"Niacinamide (Vitamin B3)",d:"500 mg/day",b:"A gentle form of vitamin B3 that supports clear, healthy skin and helps your cells repair and stay energised."},
    {n:"Astaxanthin (Haematococcus pluvialis)",d:"12 mg/day",b:"A powerful natural antioxidant from algae (the pigment that makes salmon pink). It helps protect skin from sun and ageing and supports overall cell health."},
    {n:"Vitamin C (Ascorbic Acid)",d:"854 mg/day",b:"A well-known antioxidant that supports your immune defences, helps your body make collagen for healthy skin, and helps you cope with stress. It protects your cells from everyday wear and tear."},
  ],
  F24:[
    {n:"Vitamin D3",d:"4,000 IU/day",b:"The “sunshine vitamin.” It supports your immune system, bones, mood and hormone balance. Most people don't get enough from sunlight alone, so a daily dose helps your whole body work better."},
    {n:"Vitamin C (Ascorbic Acid)",d:"200 mg/day",b:"A well-known antioxidant that supports your immune defences, helps your body make collagen for healthy skin, and helps you cope with stress. It protects your cells from everyday wear and tear."},
    {n:"CoQ10 (Kaneka Ubiquinol)",d:"200 mg/day",b:"A natural compound your cells use to produce energy. Levels drop with age, so topping it up supports lasting energy and a healthy heart."},
    {n:"NR (Nicotinamide Riboside)",d:"388 mg/day",b:"A nutrient that recharges your cells' energy “batteries,” helping restore steady energy, stamina and healthy ageing from the inside out."},
    {n:"Elderberry Extract 10% flavonoids (Sambucus nigra)",d:"378 mg/day",b:"A berry rich in antioxidants, traditionally used to support the immune system — especially through the colder months."},
  ],
  F25:[
    {n:"Vitamin D3",d:"4,000 IU/day",b:"The “sunshine vitamin.” It supports your immune system, bones, mood and hormone balance. Most people don't get enough from sunlight alone, so a daily dose helps your whole body work better."},
    {n:"Vitamin B6 (P5P form)",d:"26 mg/day",b:"A vitamin that helps your body make the natural chemicals behind calm mood, restful sleep and balanced hormones. It's the “helper” that lets several other ingredients do their job."},
    {n:"Astragalus membranaceus 0.8% astragalosides",d:"804 mg/day",b:"A traditional herb used to strengthen and support the immune system over time."},
    {n:"DIM (Diindolylmethane)",d:"200 mg/day",b:"A natural compound from vegetables like broccoli that helps your body keep oestrogen in healthy balance — supporting hormones and clearer skin."},
    {n:"Zinc Bisglycinate",d:"26 mg/day",b:"An essential mineral for a strong immune system, clear skin and healthy hormones. This gentle, well-absorbed form is easy on the stomach."},
  ],
  F26:[
    {n:"Vitamin D3",d:"4,000 IU/day",b:"The “sunshine vitamin.” It supports your immune system, bones, mood and hormone balance. Most people don't get enough from sunlight alone, so a daily dose helps your whole body work better."},
    {n:"Mg Glycinate",d:"200 mg/day",b:"A calming mineral involved in hundreds of everyday body processes. It helps your muscles and mind relax, supports restful sleep and steady energy, and eases tension. This gentle form is easy on the stomach."},
    {n:"Boswellia 65% AKBA",d:"400 mg/day",b:"A traditional herb (frankincense) that soothes joint discomfort and stiffness by calming inflammation — without the stomach upset some painkillers cause."},
    {n:"Pycnogenol (French Maritime Pine Bark)",d:"390 mg/day",b:"A pine-bark antioxidant that supports healthy circulation, flexible blood vessels and comfortable joints."},
  ],
  F27:[
    {n:"Vitamin D3",d:"4,000 IU/day",b:"The “sunshine vitamin.” It supports your immune system, bones, mood and hormone balance. Most people don't get enough from sunlight alone, so a daily dose helps your whole body work better."},
    {n:"Zinc Bisglycinate",d:"30 mg/day",b:"An essential mineral for a strong immune system, clear skin and healthy hormones. This gentle, well-absorbed form is easy on the stomach."},
    {n:"Vitamin C (Ascorbic Acid)",d:"300 mg/day",b:"A well-known antioxidant that supports your immune defences, helps your body make collagen for healthy skin, and helps you cope with stress. It protects your cells from everyday wear and tear."},
    {n:"MSM (Methylsulfonylmethane)",d:"1,300 mg/day",b:"A natural sulphur compound that supports joint comfort, flexibility and healthy skin and connective tissue."},
    {n:"Astaxanthin (Haematococcus pluvialis)",d:"12 mg/day",b:"A powerful natural antioxidant from algae (the pigment that makes salmon pink). It helps protect skin from sun and ageing and supports overall cell health."},
  ],
  F28:[
    {n:"Vitamin B12",d:"1,000 mcg/day",b:"A vitamin your body uses to keep nerves healthy, turn food into energy and support a steady mood. Many people run low without realising it, so topping it up helps your brain and body run smoothly."},
    {n:"Mg Glycinate (bisglycinate)",d:"50 mg/day",b:"A calming mineral involved in hundreds of everyday body processes. It helps your muscles and mind relax, supports restful sleep and steady energy, and eases tension. This gentle form is easy on the stomach."},
    {n:"PEA (Palmitoylethanolamide)",d:"1,000 mg/day",b:"A calming compound your body makes naturally that helps quiet discomfort and support comfortable, easy movement."},
    {n:"CoQ10 (Kaneka Ubiquinol)",d:"200 mg/day",b:"A natural compound your cells use to produce energy. Levels drop with age, so topping it up supports lasting energy and a healthy heart."},
  ],
  F29:[
    {n:"Vitamin D3",d:"4,000 IU/day",b:"The “sunshine vitamin.” It supports your immune system, bones, mood and hormone balance. Most people don't get enough from sunlight alone, so a daily dose helps your whole body work better."},
    {n:"Vitamin B6 (P5P form)",d:"26 mg/day",b:"A vitamin that helps your body make the natural chemicals behind calm mood, restful sleep and balanced hormones. It's the “helper” that lets several other ingredients do their job."},
    {n:"Glucosamine Sulfate (potassium salt)",d:"1,280 mg/day",b:"A natural building block of cartilage that supports joint cushioning, comfort and easy movement."},
    {n:"Horny Goat Weed (Icariin 20:1 extract)",d:"200 mg/day",b:"A traditional herb used to support circulation, energy and healthy, hormone-driven vitality."},
  ],
  F30:[
    {n:"Vitamin B12",d:"1,000 mcg/day",b:"A vitamin your body uses to keep nerves healthy, turn food into energy and support a steady mood. Many people run low without realising it, so topping it up helps your brain and body run smoothly."},
    {n:"Quercetin 95%",d:"100 mg/day",b:"A plant antioxidant that calms everyday inflammation, supports your immune system and helps steady metabolism."},
    {n:"ALCAR (Acetyl-L-Carnitine HCl)",d:"1,200 mg/day",b:"A nutrient that helps your cells turn fat into usable energy — supporting stamina, focus and steady vitality."},
    {n:"CoQ10 (Kaneka Ubiquinol)",d:"200 mg/day",b:"A natural compound your cells use to produce energy. Levels drop with age, so topping it up supports lasting energy and a healthy heart."},
  ],
  F31:[
    {n:"Vitamin B12",d:"1,000 mcg/day",b:"A vitamin your body uses to keep nerves healthy, turn food into energy and support a steady mood. Many people run low without realising it, so topping it up helps your brain and body run smoothly."},
    {n:"Vitamin B6 (P5P form)",d:"26 mg/day",b:"A vitamin that helps your body make the natural chemicals behind calm mood, restful sleep and balanced hormones. It's the “helper” that lets several other ingredients do their job."},
    {n:"Mg Glycinate",d:"200 mg/day",b:"A calming mineral involved in hundreds of everyday body processes. It helps your muscles and mind relax, supports restful sleep and steady energy, and eases tension. This gentle form is easy on the stomach."},
    {n:"Pycnogenol (French Pine Bark)",d:"200 mg/day",b:"A pine-bark antioxidant that supports healthy circulation, flexible blood vessels and comfortable joints."},
    {n:"CoQ10 (Kaneka Ubiquinol)",d:"200 mg/day",b:"A natural compound your cells use to produce energy. Levels drop with age, so topping it up supports lasting energy and a healthy heart."},
    {n:"Red Clover 40% isoflavones",d:"200 mg/day",b:"A plant source of gentle, oestrogen-like compounds that help ease menopausal changes and support hormone balance."},
    {n:"DIM (Diindolylmethane)",d:"160 mg/day",b:"A natural compound from vegetables like broccoli that helps your body keep oestrogen in healthy balance — supporting hormones and clearer skin."},
  ],
  F32:[
    {n:"Vitamin D3",d:"4,000 IU/day",b:"The “sunshine vitamin.” It supports your immune system, bones, mood and hormone balance. Most people don't get enough from sunlight alone, so a daily dose helps your whole body work better."},
    {n:"Vitamin B6 (P5P form)",d:"26 mg/day",b:"A vitamin that helps your body make the natural chemicals behind calm mood, restful sleep and balanced hormones. It's the “helper” that lets several other ingredients do their job."},
    {n:"Niacinamide (Vitamin B3)",d:"500 mg/day",b:"A gentle form of vitamin B3 that supports clear, healthy skin and helps your cells repair and stay energised."},
    {n:"DIM (Diindolylmethane)",d:"160 mg/day",b:"A natural compound from vegetables like broccoli that helps your body keep oestrogen in healthy balance — supporting hormones and clearer skin."},
    {n:"Zinc Bisglycinate",d:"26 mg/day",b:"An essential mineral for a strong immune system, clear skin and healthy hormones. This gentle, well-absorbed form is easy on the stomach."},
    {n:"Vitamin C (Ascorbic Acid)",d:"500 mg/day",b:"A well-known antioxidant that supports your immune defences, helps your body make collagen for healthy skin, and helps you cope with stress. It protects your cells from everyday wear and tear."},
    {n:"Astaxanthin (Haematococcus pluvialis)",d:"12 mg/day",b:"A powerful natural antioxidant from algae (the pigment that makes salmon pink). It helps protect skin from sun and ageing and supports overall cell health."},
  ],
  F33:[
    {n:"Vitamin B12",d:"1,000 mcg/day",b:"A vitamin your body uses to keep nerves healthy, turn food into energy and support a steady mood. Many people run low without realising it, so topping it up helps your brain and body run smoothly."},
    {n:"Vitamin B6 (P5P form)",d:"26 mg/day",b:"A vitamin that helps your body make the natural chemicals behind calm mood, restful sleep and balanced hormones. It's the “helper” that lets several other ingredients do their job."},
    {n:"NR (Nicotinamide Riboside)",d:"494 mg/day",b:"A nutrient that recharges your cells' energy “batteries,” helping restore steady energy, stamina and healthy ageing from the inside out."},
    {n:"Ashwagandha KSM-66 1.5% withanolides",d:"600 mg/day",b:"A traditional herb best known for helping the body handle stress. It gently lowers your stress levels, which can improve calm, sleep, mood and resilience during busy or demanding periods."},
  ],
};

const CROSS={
  "Ashwagandha":{sleep:"reducing evening cortisol that keeps the nervous system activated at bedtime",stress:"lowering cortisol by up to 30% via glucocorticoid receptor modulation",weight:"blocking cortisol's direct instruction to visceral fat cells to multiply and store fat abdominally",energy:"stopping the PARP1-mediated NAD+ depletion that chronic cortisol causes — conserving cellular energy currency",hormonal:"restoring the GnRH pulsatility that cortisol suppresses — the signalling cascade producing sex hormones",cognitive:"preventing hippocampal dendritic retraction driven by chronic cortisol — protecting your memory architecture",immune:"removing the cortisol that directly suppresses NK cell perforin and granzyme release",skin:"reducing the cortisol-activated collagen-degrading enzymes that break down skin structure"},
  "Theanine":{sleep:"inducing alpha-wave brain state — the neurological bridge between wakefulness and sleep onset",stress:"shifting brainwaves from anxious beta to calm alpha state without sedation",cognitive:"the alpha-wave state underpins both creative problem-solving and sustained focused attention"},
  "NR":{energy:"rebuilding NAD+ — the rate-limiting molecule for mitochondrial ATP production that declines from your 30s",cognitive:"restoring the NAD+ that brain cells need for memory encoding and BDNF-driven neuroplasticity",hormonal:"activating SIRT1 to enhance hormone receptor sensitivity and restore circadian rhythm",sleep:"supporting SIRT1 deacetylation of CLOCK/BMAL1 — the molecular circadian clock governing sleep-wake timing",immune:"rebuilding the NAD+ that immune activation depletes via PARP1 and CD38"},
  "CoQ10":{energy:"powering mitochondrial Complex II/III electron transfer — the rate-limiting step in ATP production",cardio:"protecting cardiac mitochondria — particularly critical for patients on statins",joint:"fuelling the ATP-intensive chondrocyte repair activity in cartilage tissue",immune:"providing the ATP that NK cells need for cytotoxic killing activity"},
  "Vitamin C":{skin:"the obligate electron donor for prolyl hydroxylase assembling collagen — without it collagen synthesis halts regardless of precursor availability",immune:"fuelling the oxidative burst that NK cells use as their primary pathogen-killing mechanism",joint:"the identical prolyl hydroxylase role in cartilage — assembling Type II collagen in joint tissue",stress:"replenishing adrenal VitC depleted by every cortisol secretion event — directly reducing adrenal stress burden"},
  "Zinc":{immune:"the most commonly deficient mineral in immune dysfunction — required for thymulin synthesis and T-cell transcription factor activation",skin:"chelating the catalytic zinc in 5-alpha-reductase — blocking DHT-driven sebum production at the enzyme active site",hormonal:"required for 5'-deiodinase (T4→T3 conversion) and LH/FSH receptor function"},
  "Magnesium":{sleep:"blocking the NMDA receptor that keeps the nervous system excitable — physically enabling transition to sleep",stress:"the most depleted mineral in chronic stress — replenishment measurably reduces cortisol and supports GABA synthesis",energy:"obligate cofactor for ATP synthase phosphoryl transfer — every ATP molecule requires Mg2+ to complete",cardio:"Mg2+-mediated calcium channel antagonism in vascular smooth muscle — directly relaxing blood vessels",joint:"NMDA receptor block at the spinal dorsal horn — dampening central sensitisation amplifying joint pain"},
  "5-HTP":{stress:"directly raises serotonin — the neurotransmitter targeted by antidepressants, via the natural precursor pathway",sleep:"serotonin is the pineal gland substrate for melatonin synthesis — raising evening serotonin increases overnight melatonin output",weight:"activates hypothalamic satiety receptors — specifically reducing carbohydrate and fat cravings"},
  "ALA":{weight:"crosses the blood-brain barrier to improve hypothalamic leptin sensitivity — making the brain respond to the fullness signal again",energy:"recycles Vitamin C and E while feeding acetyl groups into the TCA cycle for ATP generation",cognitive:"crosses the blood-brain barrier to protect neuronal mitochondria from oxidative damage",immune:"reduces neuroinflammatory ROS while arming immune cells with recycled glutathione for their defence response"},
  "DIM":{skin:"shifts oestrogen from the 16-OH metabolite driving NF-kB in sebocytes (inflammatory acne) to 2-OH oestradiol (anti-inflammatory)",weight:"reduces 16-OH oestrone, associated with oestrogen-driven adipogenesis and weight retention",immune:"blocks the 16-OH oestrone-driven inflammatory activation in immune and thyroid tissue"},
  "Melatonin":{immune:"MT1/MT2 receptors on NK cells directly enhance perforin and granzyme release — immune activation independent of sleep",weight:"activates UCP-1 in brown adipose tissue — triggering thermogenesis that burns calories as heat",skin:"directly inhibits MMP-1/3/9 metalloproteinases that degrade newly synthesised skin collagen overnight"},
  "D3":{immune:"activates over 200 immune defence and tolerance genes — deficiency is the most common nutritional impairment of immune function",weight:"expressed in adipose tissue — deficiency directly worsens insulin resistance and fat cell inflammatory signalling",hormonal:"expressed in ovarian, adrenal, and thyroid tissue — deficiency directly worsens PCOS, menstrual irregularity, and thyroid function",skin:"regulates keratinocyte differentiation and epidermal barrier gene expression"},
  "Berberine":{weight:"activates AMPK — improving fat oxidation, reducing hepatic glucose output, and enhancing skeletal muscle glucose uptake simultaneously",hormonal:"reduces the hyperinsulinaemia that directly drives androgen overproduction via ovarian theca cell insulin receptors",skin:"reduces chronic hyperglycaemia driving skin AGE formation and collagen cross-linking"},
  "Quercetin":{immune:"stabilises mast cell membranes to prevent histamine degranulation and independently blocks inflammatory signalling in immune cells",cardio:"inhibits NF-kB in endothelial cells — the primary initiating signal in atherosclerotic plaque formation",joint:"blocks inflammatory signalling in synoviocytes reducing MMP-mediated cartilage matrix breakdown"},
  "Boswellia":{joint:"5-LOX/LTB4 inhibition blocks leukotriene-driven neutrophil recruitment to the synovium — the primary driver of joint cartilage breakdown",weight:"LTB4-mediated inflammation in visceral adipose tissue impairs adiponectin signalling — reducing it improves metabolic insulin sensitivity",immune:"the same 5-LOX pathway drives macrophage inflammatory activation in immune tissue"},
  "EGCG":{weight:"COMT inhibition extends catecholamine half-life, activating hormone-sensitive lipase in adipocytes to trigger fat release",immune:"blocks inflammatory signalling in immune cells — different molecular entry point from Quercetin, making them additive",cognitive:"crosses the blood-brain barrier and has neuroprotective effects in hippocampal neurons",skin:"inhibits MMP-1 and MMP-3 collagenases in fibroblasts — protecting collagen from enzymatic degradation"},
};

function ingKey(name){
  if(name.includes("Ashwagandha"))return"Ashwagandha";
  if(name.includes("Theanine")||name.includes("L-Theanine"))return"Theanine";
  if(name.includes("Nicotinamide Riboside")||name.startsWith("NR "))return"NR";
  if(name.includes("CoQ10")||name.includes("CoEnzyme Q10"))return"CoQ10";
  if(name.includes("Vitamin C")||name.includes("Ascorbic"))return"Vitamin C";
  if(name.includes("Zinc"))return"Zinc";
  if(name.includes("Magnesium"))return"Magnesium";
  if(name.includes("5-HTP"))return"5-HTP";
  if(name.includes("Alpha Lipoic")||name.includes("ALA"))return"ALA";
  if(name.includes("DIM"))return"DIM";
  if(name.includes("Melatonin"))return"Melatonin";
  if(name.includes("Vitamin D"))return"D3";
  if(name.includes("Berberine"))return"Berberine";
  if(name.includes("Quercetin"))return"Quercetin";
  if(name.includes("Boswellia"))return"Boswellia";
  if(name.includes("Green Tea")||name.includes("EGCG"))return"EGCG";
  return null;
}

const FU={
  sleep:[
    {q:"When you lie down to sleep, what most often happens?",sub:"",opts:[
      {l:"My mind races with worries, stress, or to-do lists",s:3},
      {l:"I fall asleep fine but wake during the night or too early",s:3},
      {l:"I sleep long hours but wake completely unrefreshed",s:3},
      {l:"Falling asleep is difficult but it's mostly a physical restlessness",s:2},
    ]},
    {q:"How would you describe your waking state most mornings?",sub:"",opts:[
      {l:"Groggy for 30–60 minutes before feeling functional",s:2},
      {l:"Genuinely unrefreshed, as if sleep provided no restoration",s:3},
      {l:"Exhausted and often anxious or irritable before the day begins",s:3},
      {l:"Generally okay — I just want deeper, more restorative sleep",s:1},
    ]},
    {q:"What most prevents better sleep for you?",sub:"",opts:[
      {l:"Stress, work, or mental load keeping my mind active at night",s:3},
      {l:"Screens, alcohol, or lifestyle habits close to bedtime",s:2},
      {l:"Physical tension — my body won't relax even when I want to sleep",s:2},
      {l:"Nothing obvious — my brain simply won't switch off",s:3},
    ]},
  ],
  stress:[
    {q:"How does stress most commonly show up for you?",sub:"",opts:[
      {l:"Physical tension — tight muscles, jaw clenching, or headaches",s:2},
      {l:"Emotional overload — overwhelmed, irritable, or tearful easily",s:3},
      {l:"Mental overload — can't focus, racing between tasks",s:2},
      {l:"All of the above simultaneously",s:3},
    ]},
    {q:"When stressed, what happens to your appetite and energy?",sub:"",opts:[
      {l:"I crave sugar, carbs, or comfort food when under pressure",s:3},
      {l:"I lose my appetite completely",s:2},
      {l:"My energy collapses — stress exhausts me quickly",s:3},
      {l:"Stress doesn't strongly affect my appetite or energy",s:1},
    ]},
    {q:"How does your stress affect your sleep?",sub:"",opts:[
      {l:"My mind races at bedtime — I can't fall asleep when stressed",s:3},
      {l:"I fall asleep but wake anxious in the early hours",s:3},
      {l:"I sleep normally despite being stressed during the day",s:1},
      {l:"I sleep excessively when stressed — I use it to disengage",s:2},
    ]},
  ],
  cognitive:[
    {q:"Which cognitive difficulty most affects your daily life?",sub:"",opts:[
      {l:"Memory — forgetting names, details, or conversations",s:2},
      {l:"Focus — starting tasks, staying on one thing, finishing what I begin",s:2},
      {l:"Mental clarity — thinking feels slow, foggy, or effortful",s:3},
      {l:"All three — I feel cognitively depleted across the board",s:3},
    ]},
    {q:"When do you most notice cognitive difficulties?",sub:"",opts:[
      {l:"First thing in the morning — hard to get mentally started",s:2},
      {l:"After lunch — a clear afternoon cognitive wall",s:2},
      {l:"Under pressure or deadlines — stress wipes out my thinking",s:3},
      {l:"Throughout the entire day — I never feel mentally sharp",s:3},
    ]},
    {q:"Which pattern best describes how your cognitive changes started?",sub:"",opts:[
      {l:"Gradual over years — I used to be considerably sharper",s:3},
      {l:"Started during or after a stressful or demanding period",s:2},
      {l:"Fluctuates with sleep — poor nights make cognition much worse",s:2},
      {l:"Relatively recent onset",s:1},
    ]},
  ],
  weight:[
    {q:"What feels like the biggest barrier when managing your weight?",sub:"",opts:[
      {l:"Cravings — especially sugar and carbs, particularly when tired or stressed",s:3},
      {l:"Persistent hunger — feeling hungry again shortly after a full meal",s:2},
      {l:"Non-responsiveness — I eat well and exercise but weight doesn't respond",s:3},
      {l:"Emotional eating — stress consistently makes me abandon discipline",s:3},
    ]},
    {q:"Where does excess weight primarily accumulate?",sub:"",opts:[
      {l:"Predominantly abdominal — belly fat even when otherwise lean",s:3},
      {l:"Fairly evenly distributed throughout the body",s:1},
      {l:"Hips, thighs, and lower body",s:2},
      {l:"Generally heavier overall — no specific concentration",s:2},
    ]},
    {q:"Do you notice weight changes linked to any of these triggers?",sub:"",opts:[
      {l:"Yes — stress reliably increases my weight without dietary changes",s:3},
      {l:"Yes — poor sleep dramatically worsens my hunger and cravings",s:3},
      {l:"Yes — hormonal changes triggered or worsened this",s:3},
      {l:"No — my weight challenge is fairly consistent and independent of triggers",s:1},
    ]},
  ],
  immune:[
    {q:"How does your immune system most typically affect you?",sub:"",opts:[
      {l:"I catch every cold and infection circulating around me",s:3},
      {l:"I recover from illness slowly — convalescence takes far longer than expected",s:3},
      {l:"I feel chronically run-down — never fully sick, never fully well",s:3},
      {l:"I manage an autoimmune condition alongside general immune fragility",s:3},
    ]},
    {q:"How does immune activity affect your energy levels?",sub:"",opts:[
      {l:"I'm exhausted for weeks after any illness — even a mild cold floors me",s:3},
      {l:"I bounce back within days with minimal lingering fatigue",s:1},
      {l:"I rarely get acutely sick but feel chronically drained regardless",s:3},
      {l:"My energy during illness is manageable and recovery is normal",s:2},
    ]},
    {q:"Which of these seems to lower your immune resilience most?",sub:"",opts:[
      {l:"Stress — I reliably get sick right when a stressful period ends",s:3},
      {l:"Poor sleep — a few bad nights and I catch something",s:3},
      {l:"Seasonal changes or cold/dry weather specifically",s:2},
      {l:"No clear trigger — it just happens regardless",s:2},
    ]},
  ],
  joint:[
    {q:"How would you most accurately describe your joint or mobility concern?",sub:"",opts:[
      {l:"Stiffness worst in the morning, loosening with movement and warmth",s:2},
      {l:"Persistent aching throughout the day regardless of activity or rest",s:3},
      {l:"Pain worsening with use, improving with rest",s:2},
      {l:"Unpredictable flares — sometimes fine, sometimes severely limiting",s:3},
    ]},
    {q:"Which aspect of your concern most limits daily life?",sub:"",opts:[
      {l:"Physical limitation — I've stopped doing things I used to do",s:3},
      {l:"Pain intensity — the discomfort itself is the primary problem",s:3},
      {l:"Morning routine — getting started each day takes much longer",s:2},
      {l:"Future concern — I want to prevent progression while things are manageable",s:1},
    ]},
    {q:"Is your joint concern connected to other body systems?",sub:"",opts:[
      {l:"Yes — excess body weight is mechanically stressing my joints",s:3},
      {l:"Yes — symptoms worsen with hormonal changes (cycle or menopause)",s:3},
      {l:"Yes — my joints ache more when stressed or when sleep is poor",s:2},
      {l:"No clear connection — it appears to be a standalone joint concern",s:2},
    ]},
  ],
  cardio:[
    {q:"What is your primary cardiovascular concern?",sub:"",opts:[
      {l:"Cholesterol and lipid profile management",s:2},
      {l:"Blood pressure support — mine runs high or I want to maintain healthy levels",s:3},
      {l:"General heart protection — family history or proactive risk reduction",s:2},
      {l:"I'm on heart medication and want nutritional support alongside it",s:3},
    ]},
    {q:"Do you notice any of these cardiovascular symptoms?",sub:"",opts:[
      {l:"Earlier-than-expected breathlessness with physical effort",s:3},
      {l:"Cold extremities or generally poor peripheral circulation",s:2},
      {l:"No current symptoms — purely preventative",s:1},
      {l:"Fatigue that feels like reduced cardiac or energy output",s:2},
    ]},
    {q:"How does your health context relate to cardiovascular risk?",sub:"",opts:[
      {l:"Significant ongoing stress — I know cortisol affects cardiovascular health",s:3},
      {l:"Approaching or post-menopause — cardiovascular risk concerns me",s:3},
      {l:"Generally healthy but proactive given age or family history",s:1},
      {l:"I have a diagnosed cardiovascular condition I'm actively managing",s:3},
    ]},
  ],
  skin:[
    {q:"What is your primary skin or hair concern?",sub:"",opts:[
      {l:"Breakouts or acne — particularly chin, jaw, or cycle-related flares",s:3},
      {l:"Dullness, uneven skin tone, or lack of radiance",s:2},
      {l:"Fine lines, loss of firmness, or visibly accelerated ageing",s:3},
      {l:"Hair thinning, excess shedding, or texture changes",s:2},
    ]},
    {q:"Does your skin or hair noticeably change with stress or your hormonal cycle?",sub:"",opts:[
      {l:"Yes — my skin is clearly worse during or after stressful periods",s:3},
      {l:"Yes — noticeably worse before my period, predictably every cycle",s:3},
      {l:"Yes — my skin changed significantly at menopause or after stopping the pill",s:3},
      {l:"No — my concern feels consistent regardless of these cycles",s:1},
    ]},
    {q:"What has your skin not responded well to?",sub:"",opts:[
      {l:"Good topical skincare — external treatments haven't changed my skin",s:3},
      {l:"Dietary changes — cleaning up my diet didn't produce visible skin improvement",s:2},
      {l:"I haven't really tried targeted interventions yet",s:1},
      {l:"Multiple approaches over time — nothing has produced lasting improvement",s:3},
    ]},
  ],
  energy:[
    {q:"How does your low energy or vitality most accurately show up?",sub:"",opts:[
      {l:"Physical fatigue — my body feels heavy and effort is harder than it should be",s:3},
      {l:"Mental fatigue — my brain is tired and foggy even when my body feels okay",s:2},
      {l:"The afternoon wall — functional in the morning but energy collapses after lunch",s:2},
      {l:"Never fully awake — unrefreshed regardless of sleep duration",s:3},
    ]},
    {q:"What seems to deplete your energy most?",sub:"",opts:[
      {l:"Stress — when under pressure my energy collapses fastest",s:3},
      {l:"Poor food choices — energy is clearly linked to what I eat",s:2},
      {l:"It's consistent and persistent — no identifiable trigger",s:3},
      {l:"Dependent on caffeine — without it I barely function",s:3},
    ]},
    {q:"How would you describe your energy pattern across the day?",sub:"",opts:[
      {l:"Better in the morning, progressively declining through the day",s:2},
      {l:"Uniformly low at all times — never really good",s:3},
      {l:"Unpredictable and variable from hour to hour",s:2},
      {l:"Good some days, completely depleted on others — no predictable pattern",s:2},
    ]},
  ],
  hormonal:[
    {q:"Which hormonal situation most closely describes yours?",sub:"",opts:[
      {l:"PCOS or insulin-androgen imbalance — irregular cycles, excess facial hair, acne, or abdominal weight",s:3},
      {l:"PMS — predictable pre-menstrual mood changes, bloating, breast tenderness, or cramps",s:2},
      {l:"Perimenopause or menopause — hot flushes, night sweats, mood changes, or vaginal dryness",s:3},
      {l:"Post-pill hormonal disruption or unexplained cycle irregularity",s:2},
    ]},
    {q:"Which hormonal symptom most disrupts your daily life?",sub:"",opts:[
      {l:"Mood — anxiety, irritability, or emotional sensitivity tied to hormonal shifts",s:3},
      {l:"Physical symptoms — bloating, pain, flushes, or sweats",s:2},
      {l:"Skin and hair — changes that clearly started with hormonal shifts",s:2},
      {l:"Energy and metabolism — weight gain or fatigue arriving with hormonal changes",s:3},
    ]},
    {q:"How does stress interact with your hormonal symptoms?",sub:"",opts:[
      {l:"Symptoms are significantly worse during or after stressful periods",s:3},
      {l:"Stress doesn't strongly influence my hormonal symptoms",s:1},
      {l:"Both stress and hormonal symptoms are constant — I can't separate them",s:2},
      {l:"Symptoms worsen after the stressful period ends rather than during it",s:2},
    ]},
  ],
};


const CONNECTIONS = {
  "sleep+stress": "The same stress hormone — cortisol — that keeps you mentally on edge during the day is the primary driver of disrupted sleep at night. When cortisol remains elevated into the evening, it suppresses melatonin production, raises core body temperature, and keeps the nervous system in an alert state — making it biologically difficult to relax into deep sleep. Sleep deprivation then amplifies cortisol the following day, creating a self-reinforcing cycle where each concern worsens the other.",
  "sleep+cognitive": "Sleep and cognitive function are directly intertwined at the cellular level — deep sleep is when the brain consolidates new memories, repairs neurons, and clears the metabolic waste that accumulates during waking hours. When sleep quality is poor, these repair processes are cut short, leading to reduced memory consolidation, slower processing, and the mental fog that characterises sleep deprivation. The brain cannot function optimally without sufficient restorative sleep.",
  "sleep+weight": "Sleep and metabolic health operate through shared hormonal systems. Poor sleep disrupts the balance between ghrelin (the hunger hormone) and leptin (the fullness hormone), producing measurable increases in caloric intake the following day. Simultaneously, chronic sleep disruption impairs insulin sensitivity and elevates cortisol — both of which promote fat storage, particularly around the abdomen.",
  "sleep+immune": "Your immune system does its most critical work during sleep. Natural killer cells — your first-line defence against pathogens — are most active during deep, slow-wave sleep, deploying via hormonal signals that only emerge during this sleep stage. Chronic sleep disruption directly suppresses immune cell activity, reduces antibody production, and increases inflammatory signalling, producing a measurably weaker immune response.",
  "sleep+skin": "Skin repair and collagen synthesis are fundamentally nocturnal processes. During deep sleep, growth hormone is released in its largest daily pulse, driving the repair of UV-damaged skin cells and the assembly of new collagen fibres. Poor sleep disrupts both these processes — accelerating skin ageing in ways that topical interventions cannot reverse because the driver is internal.",
  "sleep+energy": "Sleep is the primary period for mitochondrial repair and restoration. The energy-producing machinery in your cells generates damaging reactive oxygen species throughout the day; deep sleep is when antioxidant activity peaks and this damage is cleared. Poor sleep quality means mitochondria operate in a chronically stressed state, directly limiting the cellular energy output that determines how you feel each day.",
  "stress+cognitive": "Cortisol — the primary stress hormone — has a well-documented direct impact on the brain structures responsible for memory and focus. The hippocampus and prefrontal cortex both have a high density of cortisol receptors, making them acutely sensitive to stress. Chronically elevated cortisol physically retracts the dendritic branches of neurons in these regions over time — shrinking the very structures your brain uses to think clearly and remember accurately.",
  "stress+weight": "Cortisol released during chronic stress directly instructs visceral fat cells to multiply and increase their fat-storage capacity — particularly around the abdomen. Simultaneously, cortisol depletes serotonin, the brain signal responsible for appetite control and carbohydrate craving management, producing the drive toward sugar and comfort food that stress reliably triggers. These two mechanisms — fat cell programming and appetite dysregulation — explain why stress and weight gain so consistently occur together.",
  "stress+immune": "Cortisol is one of the most potent natural suppressors of immune function. It directly reduces natural killer cell activity by inhibiting the proteins these cells use to destroy pathogens. The pattern of getting sick immediately after a stressful period ends reflects exactly this: immunity was suppressed throughout, and rebounds — briefly vulnerable — when cortisol finally falls.",
  "stress+skin": "Cortisol activates the collagen-degrading enzymes that break down skin structure from the inside, while also triggering increased androgen activity that overstimulates oil glands. The result is a dual attack on skin — structural degradation and inflammatory breakouts simultaneously. The skin worsening that many people notice during stressful periods is a direct biological consequence of this mechanism.",
  "stress+energy": "Chronic stress depletes cellular energy through a specific molecular mechanism: cortisol chronically activates PARP1, a DNA repair enzyme that consumes NAD+ — the primary fuel molecule your mitochondria need to generate ATP. Stress does not just feel exhausting psychologically; it actively drains the cellular energy currency that determines your physical and mental stamina.",
  "stress+hormonal": "Cortisol and sex hormones share the same hormonal precursor and compete for the same receptor sites. When cortisol production is chronically high, it reduces the raw material available for progesterone, oestrogen, and testosterone synthesis. Cortisol also suppresses the brain signals that drive sex hormone production. Chronic stress reliably disrupts hormonal balance through these upstream mechanisms.",
  "cognitive+immune": "The brain and immune system communicate bidirectionally through shared signalling molecules. Neuroinflammation — chronic immune activation in brain tissue — directly impairs the nerve cell function, synapse formation, and memory consolidation that cognitive performance depends on. The brain's own immune cells can shift from protective maintenance to damaging inflammatory states, physically impairing the neural circuits responsible for attention and memory.",
  "cardio+cognitive": "The brain receives approximately 20% of the body's total blood flow despite being only 2% of its weight. Every aspect of cardiovascular health — blood pressure, vessel flexibility, and circulation quality — directly determines how much oxygen and glucose reach brain tissue. Poor cardiovascular function is one of the most significant modifiable risk factors for cognitive decline, precisely because the brain is so dependent on uninterrupted, high-quality blood supply.",
  "cognitive+energy": "Brain cells have among the highest energy demands of any tissue in the body. The prefrontal cortex and hippocampus — responsible for attention, working memory, and new learning — are particularly energy-intensive. When mitochondrial function is compromised and cellular energy output falls, these cognitively demanding regions are the first to underperform. Mental fatigue and cognitive fog are often symptoms of insufficient cellular energy production rather than insufficient effort.",
  "immune+weight": "Adipose tissue — body fat — actively produces inflammatory signalling molecules. Excess body fat, particularly visceral fat, creates a state of chronic low-grade inflammation that simultaneously impairs immune function and drives further metabolic dysfunction through overlapping molecular pathways. Addressing the metabolic root reduces the inflammatory burden affecting both systems.",
  "joint+weight": "Every kilogram of excess body weight adds approximately four kilograms of force on the knee joint with each step. Beyond this mechanical relationship, adipose tissue actively produces inflammatory molecules that drive joint cartilage breakdown through the same pathways that govern immune-mediated joint destruction. Reducing body weight therefore addresses both the mechanical load and the inflammatory environment that determines how quickly joint tissue degrades.",
  "skin+weight": "High blood sugar — a hallmark of metabolic dysfunction — directly damages skin collagen through a chemical process called glycation, where glucose molecules attach to collagen fibres and cause them to stiffen and age prematurely. The hormonal imbalances that often accompany weight challenges — particularly elevated androgens and insulin resistance — additionally drive sebum overproduction and inflammatory skin conditions.",
  "energy+weight": "Metabolic efficiency and cellular energy production are two sides of the same biological process. When the pathways responsible for converting stored body fat into usable energy are underperforming, the result is simultaneously fat that is difficult to shift and energy that is chronically low — two expressions of the same underlying mitochondrial and metabolic insufficiency.",
  "hormonal+weight": "Hormonal imbalances and weight challenges share deep metabolic roots. Excess insulin directly drives androgen overproduction — the same insulin resistance that causes weight to accumulate around the abdomen also stimulates the hormonal pathway responsible for androgen excess. Correcting insulin sensitivity therefore addresses both the metabolic and hormonal picture simultaneously.",
  "immune+joint": "Joint inflammation and immune dysregulation operate through shared inflammatory pathways — the same leukotriene and cytokine cascades that drive immune overactivation also promote cartilage breakdown and synovial inflammation in joints. Addressing systemic immune inflammation therefore reduces both the overactive immune response and the joint inflammatory environment simultaneously.",
  "cardio+immune": "The same inflammatory cascade that drives immune overactivation also operates in cardiovascular tissue. Chronic immune inflammation promotes endothelial dysfunction — the early stage of arterial disease — through identical molecular switches. People with chronic inflammatory immune conditions consistently show elevated cardiovascular risk through this shared mechanism.",
  "immune+skin": "The skin is the body's largest immune organ, housing a significant population of immune cells responsible for the first response to environmental threats. Skin health and immune function are therefore directly intertwined — systemic immune dysregulation shows up in skin inflammation, while the shared antioxidant resources that protect both are depleted by the demands of either.",
  "energy+immune": "Mounting an immune response is metabolically expensive — immune cells consume enormous amounts of energy during activation, depleting the cellular fuel reserves that the rest of the body depends on. This explains the profound fatigue that accompanies illness. Supporting cellular energy production directly enhances immune cell capacity, while a well-resourced immune system recovers faster without leaving the body depleted.",
  "hormonal+immune": "The immune system and hormonal system communicate constantly and interdependently. Thyroid hormones regulate immune cell production; oestrogen modulates the balance between immune tolerance and reactivity; cortisol directly suppresses immune activity. Many autoimmune conditions preferentially affect hormonal tissue, reflecting the deep bidirectional integration between these two systems.",
  "cardio+joint": "Joint inflammation and cardiovascular inflammation share the leukotriene inflammatory pathway — the same molecular cascade that drives cartilage breakdown in joints also promotes inflammatory changes in arterial walls. Uric acid damages blood vessel endothelium through the same xanthine oxidase enzyme that produces it in joint tissue, creating a genuine biochemical link between these two concerns.",
  "joint+skin": "Both skin and joint tissue are composed primarily of collagen — whose quality determines both cartilage resilience and skin elasticity. Sulphur, Vitamin C, and amino acids are the shared building blocks of collagen in both tissues. Supporting collagen synthesis therefore benefits both skin and joint health through the same biochemical infrastructure.",
  "energy+joint": "Cartilage cells and pain-sensing nerve cells both have significant energy requirements for repair and healthy signalling. When cellular energy production is compromised, cartilage repair capacity reduces and pain perception thresholds lower — making the same level of tissue damage feel more severe. Improving cellular energy therefore supports both joint repair capacity and pain perception.",
  "hormonal+joint": "Oestrogen has a direct protective effect on cartilage — it activates receptors in cartilage-producing cells that stimulate repair and suppress breakdown. The accelerated joint deterioration that occurs during hormonal transitions directly reflects this hormonal-cartilage connection. Providing selective hormonal support to joint tissue addresses a genuine biological driver of joint health.",
  "cardio+energy": "The heart is the highest energy-demand organ in the body, requiring continuous ATP production to sustain its pumping activity. Cardiac energy production depends on the same mitochondrial pathways — CoQ10, carnitine, and NAD+ — that determine whole-body energy levels. Supporting cardiac mitochondrial efficiency therefore improves both heart function and overall vitality simultaneously.",
  "cardio+hormonal": "Oestrogen has significant protective effects on the cardiovascular system — it maintains blood vessel flexibility, supports healthy cholesterol balance, and reduces arterial inflammation. The sharp increase in cardiovascular risk that accompanies hormonal transitions reflects this mechanism directly. Oestrogen's decline accelerates endothelial dysfunction, lipid changes, and inflammatory vascular activity through well-characterised pathways.",
  "hormonal+skin": "Hormonal imbalances are among the most common drivers of skin disruption. Androgens stimulate oil gland overproduction; oestrogen metabolite imbalances drive comedogenic inflammation; cortisol activates the collagen-degrading enzymes that accelerate skin ageing. For many people, improving hormonal balance is the single most impactful change for skin — because the root cause is internal rather than topical.",
  "energy+hormonal": "Mitochondrial function and hormonal health are bidirectionally linked. Sex hormones regulate mitochondrial biogenesis and energy efficiency, while cellular energy levels determine whether the body has the metabolic resources to produce and maintain hormonal balance. Hormonal transitions are characterised by both energy decline and hormonal disruption, reflecting this shared mitochondrial dependency.",
  "allergy+immune": "Allergic responses are fundamentally an immune regulation problem — the immune system is overreacting to benign environmental triggers. The mast cells that release histamine are part of the innate immune system, and their tendency to overreact reflects broader immune dysregulation. Restoring immune balance and reducing mast cell reactivity addresses both the allergy symptoms and the underlying immune dysfunction simultaneously.",
  "eye+immune": "The retina is protected by dedicated immune surveillance, and the oxidative stress that primarily drives retinal damage is also a major trigger of systemic immune inflammation. Antioxidant protection of eye tissue and immune regulation share key molecular pathways — protecting retinal cells also reduces the systemic inflammatory burden that threatens long-term eye health.",
  "mood+sleep": "Low serotonin — the primary neurotransmitter deficit in depression — directly reduces the melatonin available for sleep, since serotonin is the biochemical precursor to melatonin. Meanwhile, poor sleep depresses serotonin synthesis, worsens emotional regulation, and perpetuates the circadian phase delay that is a biological feature of depression. The two reinforce each other through multiple shared mechanisms, making both concerns effectively inseparable.",
  "bone+hormonal": "Bone density is fundamentally governed by hormonal signalling. Oestrogen activates the receptors in bone-building cells that drive mineralisation while suppressing the bone-resorbing cells. The accelerated bone loss that accompanies hormonal transitions is a direct consequence of oestrogen withdrawal from this regulatory system — making hormonal support central to bone protection rather than merely complementary.",
  "cognitive+longevity": "Cognitive decline and biological ageing share a common molecular driver: the decline of NAD+ — the cellular fuel molecule that powers the longevity proteins responsible for DNA repair, epigenetic maintenance, and neuroplasticity. Restoring NAD+ simultaneously slows the biological ageing clock and strengthens the brain's ability to form, retain, and protect memories.",
};


const FN = {
  F01:{
    root:"Stress and sleep share the same root — when your stress hormone stays elevated into the evening, your body physically cannot wind down enough to sleep deeply. This formula targets that shared driver: calming the stress response while resetting your sleep timing together, not separately.{third} All three concerns connect through the same hormonal system.",
    symptoms:"Most people notice racing thoughts at bedtime beginning to ease within 2–4 weeks. Sleep depth and morning refreshment improve alongside — better sleep reduces next-day stress, which makes the following night easier. The two improve together rather than one at a time.",
    maintenance:"The calming and sleep-restoring effects build over the first 2–3 months and hold with daily use. Stopping typically sees both stress and sleep quality begin to slide back within a few weeks — consistent daily use is what maintains the benefit."
  },
  F02:{
    root:"Your brain does its most important memory and repair work during deep sleep — without it, focus and recall both suffer the next day. This formula deepens sleep quality while simultaneously strengthening the brain's memory circuitry, so both concerns improve through the same nightly process.{third} This further reinforces why restoring deep sleep is the central priority.",
    symptoms:"Sleep depth typically improves within the first week, with sharper mornings following soon after. Memory and mental clarity build more gradually — most people notice meaningful improvement in recall and focus between weeks 4 and 8 as the brain's repair processes accumulate.",
    maintenance:"The cognitive strengthening from this formula is cumulative — the longer it is taken consistently, the stronger the effect. Daily use maintains both the sleep quality and the memory benefits; stopping allows both to gradually fade over weeks."
  },
  F03:{
    root:"Poor sleep and weight difficulty share a hormonal root — disrupted sleep throws hunger signals out of balance, making you hungrier the next day and craving foods that worsen blood sugar. This formula stabilises overnight blood sugar to protect sleep depth while simultaneously resetting the hunger hormones that poor sleep disrupts.{third} Correcting this overnight hormonal cycle benefits all selected concerns.",
    symptoms:"Blood sugar stability overnight typically improves within 1–2 weeks, often noticed as fewer wake-ups and reduced next-morning hunger or cravings. Sleep quality improves in parallel. As both stabilise over 4–8 weeks, appetite control during the day becomes noticeably easier.",
    maintenance:"Consistent daily use maintains the metabolic and sleep improvements. If use stops, blood sugar fluctuation and disrupted sleep hormones tend to return within a few weeks, resetting the hunger cycle this formula interrupts."
  },
  F04:{
    root:"Your immune system does its most effective work while you sleep deeply — immune cells are most active during the overnight hours, using sleep as their deployment window. Disrupting that window weakens immune defence directly. This formula deepens sleep while simultaneously activating immune readiness, restoring the nightly process both concerns depend on.{third} This connects through the same overnight repair window.",
    symptoms:"Sleep depth improves within the first week. Immune resilience — fewer illnesses and faster recovery — tends to become noticeable over 4–8 weeks as the overnight immune deployment window is consistently restored and the immune cells operating during it are better supported.",
    maintenance:"Both benefits require consistent daily use to maintain. The immune preparedness built by this formula resets each day — ongoing supplementation sustains it. Stopping allows sleep quality and immune resilience to gradually decline together."
  },
  F05:{
    root:"Skin repair and collagen production happen almost entirely at night, during deep sleep. When sleep is poor, the skin's overnight repair window is cut short — accelerating ageing in a way no topical product can reverse because the cause is internal. This formula deepens sleep while giving the skin the building blocks it needs for overnight repair.{third} All three concerns benefit from restoring this nightly repair process.",
    symptoms:"Sleep quality typically improves within the first week. Skin texture and firmness improvements follow more gradually — usually noticeable from weeks 6–8 as the overnight collagen repair process accumulates with consistently better sleep.",
    maintenance:"Collagen is produced continuously and requires daily nutritional support to keep the production rate elevated. Skin improvements continue to develop with consistent use and begin to reverse within weeks of stopping."
  },
  F06:{
    root:"Low energy and poor sleep are two sides of the same problem — your cells' energy-producing system does its repair and refuelling work overnight. When sleep is poor, this repair window is cut short, and energy the next day suffers. This formula restores the cellular fuel supply while resetting the body clock, addressing both concerns at their shared root.{third} Energy, sleep, and this third concern are all tied to the same cellular recovery cycle.",
    symptoms:"Many people notice improved energy within 2–3 weeks as cellular fuel is restored. Sleep timing and depth improve in parallel as the body clock is reset. Both continue to develop together over the first 2 months.",
    maintenance:"Cellular fuel levels decline with age and are not permanently restored by a course of supplementation — consistent daily use maintains the energy and sleep benefits. Both return toward their pre-treatment state within weeks of stopping."
  },
  F07:{
    root:"Stress hormones directly impair the parts of the brain responsible for memory and focus — not metaphorically, but physically. Chronically elevated stress hormones cause the memory centre to shrink over time. This formula reduces the stress response while restoring the brain chemistry needed for attention and recall, tackling both through the same hormonal pathway.{third} This concern is driven by the same stress hormones and benefits from the same approach.",
    symptoms:"Focus and working memory often improve noticeably within the first 2–3 weeks as brain chemistry is replenished. Stress resilience builds more gradually over 4–8 weeks as hormone levels normalise. Both continue to strengthen over 3 months.",
    maintenance:"Brain chemistry support requires consistent daily provision — the improvement fades within weeks of stopping. Stress hormone management similarly requires ongoing use; the protection it provides accumulates over months and is not permanently established."
  },
  F08:{
    root:"Stress and weight difficulty share the same driver — elevated stress hormones directly instruct fat cells to store fat around the abdomen, while simultaneously depleting the brain signal that controls cravings. This formula reduces the stress hormone driving both problems while improving how your body handles blood sugar and appetite from a second direction.{third} The same stress hormone is the upstream cause here too.",
    symptoms:"Most people notice reduced cravings within the first few weeks as appetite signalling begins to restore. Stress resilience improves over 4–6 weeks. Changes in body composition, particularly around the abdomen, typically become noticeable from weeks 8–12 as both mechanisms work in concert.",
    maintenance:"Metabolic improvements require consistent daily supplementation to maintain — the body tends to drift back toward its previous pattern within weeks of stopping. Long-term use prevents the stress-weight cycle from re-establishing."
  },
  F09:{
    root:"Stress hormones directly suppress the immune system — this is why people reliably get sick when a stressful period ends rather than during it. Immunity is being suppressed throughout, and then rebounds vulnerable. This formula reduces the stress hormone lifting immune suppression, while also directly supporting immune cell function from a second direction.{third} The same stress hormones are impairing this concern as well.",
    symptoms:"Improved stress resilience is typically noticeable within 4–6 weeks. Immune improvements — getting sick less often, recovering faster — tend to follow over 6–10 weeks as the immune suppression from elevated stress hormones is progressively lifted.",
    maintenance:"Both benefits require consistent daily use. Stress hormone management and immune support both decline within weeks of stopping supplementation — ongoing use is what sustains the improved resilience in both systems."
  },
  F10:{
    root:"Stress hormones break down skin collagen from the inside while increasing the oil production that causes breakouts — it's a dual attack that no topical skincare can fully counter because the cause is internal. This formula reduces the stress hormones driving both, while also rebuilding the nutritional support the skin needs to repair itself.{third} Elevated stress hormones are the upstream driver of this concern as well.",
    symptoms:"Skin barrier strength and oil reduction typically become noticeable within 4–6 weeks. As stress hormone levels fall over the same period, the internal skin-damaging signal weakens. Comprehensive skin improvement — fewer breakouts, better texture, improved firmness — is most visible at 8–12 weeks.",
    maintenance:"Skin repair requires consistent daily nutritional support — the skin is continuously exposed to oxidative damage and requires ongoing replenishment to maintain the improved repair rate. Stopping supplementation allows the stress-driven skin deterioration to gradually return."
  },
  F11:{
    root:"Stress doesn't just feel exhausting — it actively consumes your cellular energy supply. Stress hormones trigger a process that burns through the fuel molecules your cells need to generate energy. This formula stops that drain by reducing stress hormones, while directly rebuilding the energy fuel that has been depleted.{third} Energy depletion and this concern share the same stress-hormone driver.",
    symptoms:"Energy improvements are often noticeable within 2–3 weeks as cellular fuel is restored. Stress resilience builds in parallel over 4–8 weeks as hormone levels normalise. Both continue to strengthen over 2–3 months of consistent use.",
    maintenance:"Cellular energy fuel declines with age and ongoing stress — consistent daily supplementation maintains the restored levels. Without it, both the energy and stress resilience improvements fade back within a few weeks."
  },
  F12:{
    root:"Stress hormones compete directly with sex hormones for the same biological resources — when stress is chronically high, the body de-prioritises sex hormone production, disrupting cycles and hormonal balance. This formula reduces the stress hormones driving this imbalance while directly supporting the hormonal signalling pathway from a second direction.{third} The same hormonal disruption is contributing to this concern as well.",
    symptoms:"Hormonal symptoms typically begin to improve after 2–3 months of consistent use, as the full cycle of hormonal signalling normalises. PMS severity often reduces first, followed by more regular cycle timing and improved mood stability around menstruation.",
    maintenance:"Hormonal regulation responds slowly and requires sustained supplementation — stopping typically sees the stress-hormonal pattern begin to return within 4–8 weeks. Consistent use over 6 months produces the most durable improvement."
  },
  F13:{
    root:"Your brain has its own immune system — and when it's inflamed or overactivated, both memory and whole-body immune function suffer. This formula addresses neurological inflammation while stimulating the brain's own repair processes, improving cognitive function and immune resilience through the same shared biology.{third} This concern also connects through the same inflammatory pathway.",
    symptoms:"Immune resilience improvements become noticeable over 4–8 weeks. Memory and cognitive clarity build more gradually over 6–12 weeks as the brain's repair signalling accumulates. Both continue to strengthen with consistent use.",
    maintenance:"The neural strengthening from this formula is cumulative and continuous — the longer it is used consistently, the stronger the effect. Both the cognitive and immune benefits diminish over months of not supplementing."
  },
  F14:{
    root:"Your brain depends directly on cardiovascular health — it uses 20% of your blood flow despite being only 2% of your body weight. When circulation is suboptimal, both memory and cardiovascular health decline for the same reason: the brain is not getting the oxygen and nutrients it needs. This formula improves blood flow to the brain while protecting the blood vessel lining, benefiting both concerns simultaneously.{third} Better blood flow and reduced vascular inflammation benefit this concern in the same way.",
    symptoms:"Mental sharpness and processing speed often improve within 4–6 weeks as brain blood flow increases. Cardiovascular improvements — particularly blood pressure and vessel flexibility — develop over 8–12 weeks. Both continue to develop over 3–6 months.",
    maintenance:"Blood flow support requires consistent daily supplementation to maintain — the vascular benefits are not permanently established. Consistent use also provides ongoing protection to the vessel lining, which is a slow, cumulative process."
  },
  F15:{
    root:"Brain cells are among the most energy-hungry in the body — when cellular energy production declines, the parts of the brain responsible for attention and memory are the first to underperform. This formula replenishes the brain chemistry needed for focus while restoring the cellular energy that powers it, addressing both through the same energy deficit.{third} The same cellular energy shortfall is contributing to this concern.",
    symptoms:"Focus and working memory often improve within 2–3 weeks as brain chemistry is replenished. Physical and mental energy improve in parallel as cellular energy production is restored. Both continue to develop over the first 2 months.",
    maintenance:"Brain chemistry and cellular energy both require consistent daily replenishment — neither is permanently restored by a course of supplementation. Stopping allows both to fade back toward their pre-treatment state within weeks."
  },
  F17:{
    root:"Fat tissue is not passive — when excess fat accumulates, it actively produces inflammatory signals that simultaneously impair immune function and worsen metabolic efficiency. This formula activates the body's metabolic master switch to reduce fat-driven inflammation, improving both weight management and immune resilience through the same biological process.{third} The same metabolic inflammation connects to this concern as well.",
    symptoms:"Metabolic efficiency and blood sugar handling improve within 2–4 weeks, often noticed as reduced cravings and improved energy. Immune resilience tends to improve over 8–12 weeks as systemic inflammation gradually decreases.",
    maintenance:"Metabolic improvements require consistent daily supplementation to sustain — the body tends to drift back toward its previous pattern within weeks of stopping. Long-term use prevents the inflammatory-metabolic cycle from re-establishing."
  },
  F18:{
    root:"Excess body weight stresses joints mechanically — but fat tissue also produces inflammatory signals that actively break down cartilage. This formula activates the metabolic pathway that reduces fat accumulation and the inflammation driving cartilage breakdown, addressing both concerns at their shared root.{third} This concern connects through the same inflammatory pathway that links weight and joint health.",
    symptoms:"Metabolic improvements and reduced joint inflammation typically begin within 4–6 weeks. Joint stiffness and comfort improve as both the mechanical load and the internal inflammatory environment improve together. Visible changes in body composition follow over 8–12 weeks.",
    maintenance:"Both benefits require consistent daily supplementation to maintain. The anti-inflammatory and metabolic effects decline within weeks of stopping, and the joint environment progressively deteriorates without ongoing support."
  },
  F19:{
    root:"High blood sugar ages skin from the inside — excess glucose chemically reacts with skin collagen and permanently stiffens it, accelerating visible ageing in a way that topical products cannot reverse. The same blood sugar imbalance drives hormonal changes that cause excess oil and breakouts. This formula improves blood sugar control while repairing the skin damage it causes.{third} Blood sugar instability is also contributing to this concern.",
    symptoms:"Blood sugar improvements typically become noticeable within 2–4 weeks. Skin barrier improvements and oil reduction follow over 4–6 weeks. Improved skin texture, fewer breakouts, and better tone develop over 8–12 weeks as the metabolic root cause is consistently addressed.",
    maintenance:"Blood sugar control requires consistent daily supplementation to sustain — glycation of skin collagen resumes when blood sugar rises again. Ongoing use maintains the metabolic stability that protects skin quality long-term."
  },
  F20:{
    root:"Low energy and weight difficulty often have the same cause — when the body's fat-burning machinery is underperforming, fat doesn't shift and energy stays chronically low. They're two symptoms of the same problem. This formula activates the metabolic pathway that mobilises fat for energy, improving both through the same process.{third} The same metabolic underperformance is driving this concern too.",
    symptoms:"Improved energy is often noticeable within 2–3 weeks as cellular fuel utilisation improves. Metabolic changes in body composition — particularly reduced abdominal fat — become more evident over 8–12 weeks as the full fat-burning sequence works consistently.",
    maintenance:"The metabolic improvements require consistent daily supplementation to sustain. The body's tendency toward metabolic sluggishness returns within weeks of stopping — ongoing use maintains the fat-burning activation that produces both benefits."
  },
  F21:{
    root:"Hormonal and metabolic imbalance are often the same problem — excess insulin directly triggers androgen overproduction, producing the weight gain, acne, and cycle irregularities that characterise this pattern. This formula improves insulin sensitivity at the root, reducing both the metabolic and hormonal consequences simultaneously.{third} Correcting insulin sensitivity benefits this concern through the same pathway.",
    symptoms:"Insulin sensitivity improvements begin within 2–4 weeks. As insulin normalises over the following weeks, androgen levels typically reduce — often first visible as clearer skin, slower hair growth, and more regular cycles. Cycle regularity is typically most noticeable at 3–6 months.",
    maintenance:"Insulin sensitivity is maintained by consistent daily supplementation — it begins returning toward baseline within weeks of stopping. Long-term consistent use prevents the hormonal-metabolic cycle from re-establishing."
  },
  F25:{
    root:"Immune overactivation and joint inflammation are driven by the same inflammatory switch — when it fires, it causes both immune dysregulation and cartilage breakdown at the same time. This formula blocks that shared inflammatory signal in both locations simultaneously, rather than treating each concern separately.{third} The same inflammatory process connects to this concern as well.",
    symptoms:"Joint stiffness and immune resilience typically both begin improving over 4–8 weeks as the shared inflammatory burden reduces. Both concerns tend to progress together — reduced inflammation benefits the joint environment and immune balance at the same time.",
    maintenance:"The anti-inflammatory benefits require consistent daily use to maintain — inflammatory signalling returns within days of stopping. Cartilage repair is slow and requires a sustained low-inflammation environment over months to produce meaningful structural improvement."
  },
  F26:{
    root:"Immune overactivation and early cardiovascular disease share the same inflammatory switch — when it fires in blood vessel walls, it initiates the processes that drive both arterial dysfunction and immune dysregulation. This formula blocks that shared signal in both locations at once, working at the root of both concerns simultaneously.{third} The same vascular inflammation is relevant to this concern as well.",
    symptoms:"Immune resilience improvements tend to become noticeable over 4–8 weeks. Cardiovascular improvements — particularly blood pressure and vessel flexibility — develop more slowly over 8–12 weeks as the vascular anti-inflammatory effect accumulates.",
    maintenance:"Consistent daily use is required to maintain both benefits. The vascular and immune protection builds cumulatively over months — stopping allows the inflammatory burden to return and both concerns to gradually deteriorate."
  },
  F27:{
    root:"Skin health and immune function draw from the same pool of protective resources — your immune cells and your skin cells compete for the same vitamins and antioxidants. This formula provides enough to fully support both simultaneously, so neither system is under-resourced at the expense of the other.{third} This concern shares key nutritional resources with the other two.",
    symptoms:"Skin improvements — reduced oil production, better barrier strength, improved texture — become noticeable within 4–6 weeks. Immune resilience improvements tend to develop over 6–10 weeks. Both continue to strengthen over 3–6 months of consistent use.",
    maintenance:"Both benefits require daily nutritional replenishment — the skin and immune systems continuously consume the resources this formula provides. Stopping allows both to decline as nutritional support is withdrawn."
  },
  F28:{
    root:"Fighting infection is metabolically expensive — when your immune system activates, it depletes the cellular energy reserves the rest of your body relies on. This is why illness leaves you exhausted for days or weeks afterwards. This formula rebuilds the cellular energy supply while directly supporting immune cell function, addressing both concerns at their shared metabolic root.{third} The same cellular energy depletion is contributing to this concern.",
    symptoms:"Energy improvements are typically noticeable within 2–3 weeks. Immune improvements — getting sick less often, recovering faster, less post-illness exhaustion — tend to develop over 4–8 weeks as the cellular energy available for immune activity is consistently restored.",
    maintenance:"Both benefits require consistent daily supplementation. Cellular energy declines continuously without replenishment, and immune readiness declines with it — ongoing use maintains the energy-immune resilience that this formula builds."
  },
  F29:{
    root:"The immune system and hormonal system are tightly linked — many autoimmune conditions preferentially affect hormonal tissue, and hormonal imbalances directly alter immune reactivity. This formula improves immune regulation while correcting the hormonal imbalance that's driving the immune-hormonal overlap, addressing both through their shared biology.{third} This hormonal-immune connection extends to this concern as well.",
    symptoms:"Both immune regulation and hormonal improvements develop gradually over 3–6 months — these systems respond slowly and require sustained support. Improvement in inflammatory markers and hormonal symptoms tends to be the most noticeable early signal.",
    maintenance:"Immune regulation and hormonal balance both require consistent ongoing supplementation to sustain. Stopping allows the immune-hormonal dysfunction to gradually return over months."
  },
  F30:{
    root:"Joint inflammation and cardiovascular inflammation run through the same biological pathway — the same process that breaks down cartilage also promotes inflammatory changes in artery walls. This formula blocks that shared pathway in both locations, reducing joint inflammation and cardiovascular risk through a single mechanism.{third} This concern is also driven by the same underlying inflammatory process.",
    symptoms:"Joint stiffness and comfort typically improve over 4–6 weeks as inflammation reduces. Cardiovascular benefits — blood pressure, circulation — develop more gradually over 8–12 weeks. Both improve together as the shared inflammatory load decreases.",
    maintenance:"The anti-inflammatory effects in both joint and cardiovascular tissue require consistent daily supplementation to maintain. Stopping allows the inflammatory cascade to return, and both concerns gradually worsen."
  },
  F31:{
    root:"Skin and joints are both built from the same structural protein — collagen. The same raw materials that keep cartilage resilient and cushioned are the ones that keep skin firm and elastic. When the building blocks are inadequate, both deteriorate together. This formula provides the foundational nutrients that build and maintain collagen in both tissues simultaneously.{third} This concern also depends on the same collagen-building resources.",
    symptoms:"Skin texture and firmness improvements are typically noticeable from weeks 6–8. Joint comfort improvements develop on a slightly longer timeline — 8–12 weeks — because cartilage renews more slowly than skin. Both continue to improve cumulatively over months.",
    maintenance:"Collagen production in both skin and joints is a continuous daily process that requires consistent nutritional support. The improvements accumulated with this formula begin to reverse within weeks of stopping supplementation."
  },
  F32:{
    root:"Joint pain and low energy share a common driver — when cells in the joint and nervous system don't have enough energy, cartilage repair slows and the nervous system's pain threshold lowers, making discomfort feel more intense. This formula restores cellular energy production in those tissues while calming the inflammatory signals driving the pain, addressing both through the same cellular energy root.{third} Cellular energy insufficiency is contributing to this concern as well.",
    symptoms:"Pain relief and joint comfort typically improve within 6–8 weeks as local inflammation calms and the nervous system's sensitivity reduces. Energy improvements often develop in parallel over the same period.",
    maintenance:"Both pain management and energy support require consistent daily supplementation to sustain. Stopping allows joint inflammation and energy depletion to gradually return over weeks."
  },
  F33:{
    root:"Oestrogen has a direct protective effect on cartilage — it keeps the cells that maintain cartilage active and slows breakdown. When oestrogen declines during hormonal transitions, joint deterioration accelerates for the same reason that other hormonal symptoms appear. This formula addresses the hormonal signal to joint tissue directly, while also providing the building blocks for cartilage repair.{third} The same hormonal decline is driving this concern alongside the joint changes.",
    symptoms:"Joint comfort improvements from reduced cartilage breakdown enzyme activity tend to become noticeable around weeks 6–8. Hormonal symptom improvements develop over 2–3 months as the formula's hormonal support accumulates.",
    maintenance:"Both the cartilage-building and hormonal support require consistent daily supplementation. Stopping allows the hormone-driven cartilage breakdown to resume and the hormonal symptoms to return."
  },
  F34:{
    root:"The heart is the highest energy-demand organ in the body — 70% of its fuel comes from fat burning. When the pathway that converts fat to energy is underperforming, both cardiovascular function and whole-body energy suffer for the same reason. This formula restores the fat-to-energy conversion pathway in both the heart and the rest of the body simultaneously.{third} The same energy pathway connects to this concern as well.",
    symptoms:"Physical energy improvements are often noticeable within 3–4 weeks. Cardiovascular functional improvements — reduced breathlessness, better stamina — develop over a longer 3–6 month timeline as the cardiac energy supply is consistently restored.",
    maintenance:"Cardiac energy support requires consistent daily supplementation — particularly for those on statin medications, which deplete one of the key ingredients this formula provides. Stopping allows cardiac and whole-body energy to decline back toward baseline."
  },
  F35:{
    root:"Cardiovascular health and hormonal balance are connected through homocysteine — a compound produced naturally by the body that damages artery walls when it accumulates. Hormonal transitions worsen this risk as protective hormonal effects on blood vessels decline. This formula clears homocysteine through three separate pathways simultaneously, while also supporting the heart muscle and vascular tone directly.{third} The vascular and hormonal changes affecting this concern connect through the same pathway.",
    symptoms:"Homocysteine levels typically reduce measurably within 4–8 weeks across all three clearing pathways working together. Heart muscle support and blood vessel tone improve over 8–12 weeks. Both continue to develop with consistent use.",
    maintenance:"Homocysteine is produced continuously as a normal by-product of metabolism — it must be consistently cleared to prevent accumulation. All three clearing pathways in this formula require daily provision to maintain effective protection."
  },
  F36:{
    root:"Hormonal imbalance is the root cause of both skin and hormonal symptoms here — specifically, excess androgen activity driving oil overproduction and breakouts, alongside an oestrogen metabolite imbalance worsening the skin inflammation. This formula blocks the hormonal signal causing excess oil through two independent mechanisms while correcting the oestrogen metabolite pattern, addressing all concerns from a shared hormonal root.{third} The same androgenic and oestrogenic imbalances connect to this concern as well.",
    symptoms:"Oil reduction and improved skin clarity are typically noticeable within 6–8 weeks as the hormonal root cause is addressed. Hormonal cycle improvements take longer — usually 2–3 months — as the oestrogen metabolism normalises.",
    maintenance:"The hormonal signals driving these concerns are ongoing biological processes that require consistent daily suppression. Stopping supplementation allows the androgenic and oestrogen metabolite imbalances to return, reversing the skin and hormonal improvements."
  },
  F37:{
    root:"Energy and hormonal balance are linked through the same biological infrastructure — sex hormones regulate how well cells produce energy, and energy depletion in turn reduces the body's ability to maintain hormonal balance. This formula restores cellular energy production while supporting the brain signals that drive hormonal production, addressing both through their shared foundation.{third} This concern connects through the same hormonal-energy infrastructure.",
    symptoms:"Energy improvements are often noticeable within 2–3 weeks. Hormonal improvements — more regular cycles, fewer symptoms, improved mood stability — develop over 2–3 months as the full hormonal signalling pathway is progressively restored.",
    maintenance:"Both energy and hormonal support require consistent daily supplementation. Stopping allows cellular energy and hormonal balance to decline back toward their previous pattern within weeks to months."
  },
  F43:{
    root:"Cognitive decline and biological ageing share the same driver — as the key cellular fuel molecule declines with age, the proteins that protect DNA, repair cells, and maintain brain plasticity all become less active. This formula restores that fuel supply while directly activating the longevity proteins that slow ageing and strengthen memory, addressing both through the same cellular mechanism.{third} The same cellular ageing process affects this concern as well.",
    symptoms:"Improved energy and mental clarity are often among the first noticed benefits — typically within 2–4 weeks as cellular fuel is restored. Deeper anti-ageing effects on cellular repair and cognitive protection develop over months of consistent use.",
    maintenance:"Cellular fuel declines continuously with age and must be replenished daily to maintain the anti-ageing and cognitive benefits. Stopping allows levels to decline back toward age-expected levels within weeks, and the longevity protein activity falls with it."
  },
};



// ─── STATE ────────────────────────────────────────────────────────────────────
const state = {
  step:"intro", history:[], sex:null, age:null, aspects:[], answers:{},
  aspIdx:0, qIdx:0, top2:[], formula:null, plan:"monthly",
  signup:{name:"",email:"",password:"",confirm:""}, signupErrors:{},
  co:{name:"",email:"",address:"",city:"",postal:"",province:"",formulaName:""},
  // Medical screening
  medConditions:[], medMeds:[], medOther:"", medMedsText:"",
  screenResult:null, altFormula:null,
  // Market
  market:"CA"  // "CA" = Canada, "AU" = Australia
};

const STEPS = ["intro","sex","age","concerns","followup","medical","signup","result","checkout","confirmation"];
function stepPct(){ return Math.round((STEPS.indexOf(state.step)/(STEPS.length-1))*100); }
function push(s){ state.history.push(state.step); state.step=s; render(); window.scrollTo(0,0); }
function goBack(){
  if(!state.history.length) return;
  if(state.step==="followup"){
    if(state.qIdx>0){ state.qIdx--; render(); return; }
    if(state.aspIdx>0){
      state.aspIdx--;
      state.qIdx=(FU[state.aspects[state.aspIdx]]?.length||1)-1;
      render(); return;
    }
  }
  state.step=state.history.pop(); render(); window.scrollTo(0,0);
}

function lkp(a1,a2){ return FL[[a1,a2].sort().join("_")]||null; }


function answerQ(score){
  const ca=state.aspects[state.aspIdx];
  if(!state.answers[ca]) state.answers[ca]=[];
  state.answers[ca][state.qIdx]=score;
  const qs=FU[ca]||[];
  if(state.qIdx<qs.length-1){ state.qIdx++; }
  else if(state.aspIdx<state.aspects.length-1){ state.aspIdx++; state.qIdx=0; }
  else{
    const sc={};
    state.aspects.forEach(a=>{ const ans=state.answers[a]||[]; sc[a]=ans.reduce((s,v)=>s+(v||0),0); });
    const sorted=Object.entries(sc).sort((a,b)=>b[1]-a[1]);
    const ranked=sorted.map(([k])=>k);
    let found=null;
    for(let i=0;i<ranked.length&&!found;i++){
      for(let j=i+1;j<ranked.length&&!found;j++){
        const k=[ranked[i],ranked[j]].sort().join("_");
        if(FL[k]){ found=FL[k]; state.top2=[ranked[i],ranked[j]]; }
      }
    }
    if(!found){ found=Object.values(FL)[0]; state.top2=[ranked[0],ranked[1]||ranked[0]]; }
    state.formula=found;
    push("medical");
    return;
  }
  render();
}



function toggleAsp(k){
  const i=state.aspects.indexOf(k);
  if(i>=0) state.aspects.splice(i,1);
  else if(state.aspects.length<3) state.aspects.push(k);
  render();
}

function validateSignup(){
  const e={};
  if(!state.signup.name.trim()) e.name="Please enter your name";
  if(!state.signup.email.includes("@")||!state.signup.email.includes(".")) e.email="Please enter a valid email address";
  const pw=state.signup.password;
  if(pw.length<8) e.password="Password must be at least 8 characters";
  else if(!/[a-zA-Z]/.test(pw)) e.password="Password must include at least one letter";
  else if(!/[0-9]/.test(pw)) e.password="Password must include at least one number";
  if(pw && pw.length>=8 && !e.password && pw!==state.signup.confirm) e.confirm="Passwords do not match";
  else if(!state.signup.confirm && !e.password) e.confirm="Please confirm your password";
  state.signupErrors=e;
  if(!Object.keys(e).length){ state.co.name=state.signup.name; state.co.email=state.signup.email; push("result"); }
  else render();
}

function fmtCard(v){ v=v.replace(/\D/g,"").slice(0,16); return v.replace(/(.{4})/g,"$1 ").trim(); }
function fmtExpiry(v){ v=v.replace(/\D/g,"").slice(0,4); return v.length>2?v.slice(0,2)+" / "+v.slice(2):v; }

/* The amount actually taken on a charge. The per-month figure the plan
   cards show is rounded for display; rounding it and then multiplying does
   not always land on the same cent, so the cycle total is computed in one
   step and everything — screens and server alike — bills from this. */
function cycleTotal(plan){
  const b = state.formula?.price || 85;
  const months = plan==="quarterly" ? 3 : plan==="bimonthly" ? 2 : 1;
  const disc   = plan==="quarterly" ? 0.10 : plan==="bimonthly" ? 0.05 : 0;
  return Math.round(b * months * (1 - disc));
}
function cycleMonths(plan){ return plan==="quarterly" ? 3 : plan==="bimonthly" ? 2 : 1; }
function cycleWord(plan){ return plan==="quarterly" ? "every 3 months" : plan==="bimonthly" ? "every 2 months" : "/month"; }
function dueToday(plan){ return (state.formula?.custom ? CUSTOM_DEV_FEE : 0) + cycleTotal(plan); }

function getPlanData(){
  const b=state.formula?.price||85;
  const cs=currSymbol();
  return{
    monthly:   {label:"1 Month",  per:b,                      billing:`${cs}${b}/month`,                                          badge:null,        savePct:0},
    bimonthly: {label:"2 Months", per:Math.round(b*0.95),    billing:`Billed ${cs}${Math.round(b*2*0.95)} every 2 months`,      badge:"SAVE 5%",   savePct:5},
    quarterly: {label:"3 Months", per:Math.round(b*0.90),    billing:`Billed ${cs}${Math.round(b*3*0.90)} every 3 months`,      badge:"SAVE 10%",  savePct:10},
  };
}

function getCrossItems(ingrs){
  if(!state.formula) return[];
  return state.aspects.filter(a=>!state.top2.includes(a)).reduce((acc,asp)=>{
    const helping=ingrs.reduce((h,ingr)=>{
      const k=ingKey(ingr.n);
      if(k&&CROSS[k]?.[asp]) h.push({iname:ingr.n.split(" (")[0].split(",")[0],benefit:CROSS[k][asp]});
      return h;
    },[]);
    if(helping.length) acc.push({asp,aspLabel:AM[asp]?.label,helping});
    return acc;
  },[]);
}

// ─── THIRD-ASPECT (holistic) SUPPORT — plain language, conservative claims ───
const ASPECT_PLAIN={
  sleep:{label:"sleep",effect:"more restful sleep"},
  stress:{label:"stress and mood",effect:"a calmer, steadier mood"},
  cognitive:{label:"focus and memory",effect:"clearer focus and memory"},
  weight:{label:"weight and metabolism",effect:"a healthy metabolism and steadier appetite"},
  immune:{label:"immune defence",effect:"your everyday immune defences"},
  joint:{label:"joints and bones",effect:"comfortable, supple joints and strong bones"},
  cardio:{label:"heart and circulation",effect:"healthy circulation and heart function"},
  skin:{label:"skin, hair and eyes",effect:"healthy skin, hair and eyes"},
  energy:{label:"energy and vitality",effect:"steady, lasting energy"},
  hormonal:{label:"hormonal balance",effect:"balanced hormones"}
};
const INGSUP=[
  {kw:["Vitamin B12"],short:"vitamin B12",asp:["energy","cognitive","stress","cardio"]},
  {kw:["Vitamin D"],short:"vitamin D3",asp:["immune","hormonal","joint","weight","skin"]},
  {kw:["Magnesium","Mg Glycinate"],short:"magnesium",asp:["sleep","stress","energy","cardio","cognitive"]},
  {kw:["Theanine"],short:"L-theanine",asp:["sleep","stress","cognitive"]},
  {kw:["Ashwagandha"],short:"ashwagandha",asp:["stress","sleep","hormonal","energy"]},
  {kw:["Melatonin"],short:"melatonin",asp:["sleep"]},
  {kw:["Bacopa"],short:"bacopa",asp:["cognitive"]},
  {kw:["Tryptophan"],short:"L-tryptophan",asp:["sleep","stress","weight"]},
  {kw:["Vitamin B6"],short:"vitamin B6",asp:["stress","hormonal","sleep","weight","cognitive"]},
  {kw:["Vitamin C","Ascorbic"],short:"vitamin C",asp:["immune","skin","stress"]},
  {kw:["Glucan"],short:"beta-glucans",asp:["immune"]},
  {kw:["Zinc"],short:"zinc",asp:["immune","skin","hormonal"]},
  {kw:["Vitamin E"],short:"vitamin E",asp:["skin"]},
  {kw:["Resveratrol"],short:"resveratrol",asp:["cardio","cognitive","skin"]},
  {kw:["Astaxanthin"],short:"astaxanthin",asp:["skin","immune"]},
  {kw:["Nicotinamide Riboside","NR "],short:"nicotinamide riboside",asp:["energy","cognitive"]},
  {kw:["CoQ10"],short:"CoQ10",asp:["energy","cardio"]},
  {kw:["Alpha GPC"],short:"alpha-GPC",asp:["cognitive"]},
  {kw:["Phosphatidylserine"],short:"phosphatidylserine",asp:["cognitive","stress"]},
  {kw:["5-HTP"],short:"5-HTP",asp:["weight","stress","sleep"]},
  {kw:["Alpha Lipoic"],short:"alpha-lipoic acid",asp:["weight","energy","immune"]},
  {kw:["Green Tea","EGCG"],short:"green tea extract",asp:["weight","immune"]},
  {kw:["Quercetin"],short:"quercetin",asp:["immune","weight","cardio"]},
  {kw:["Berberine"],short:"berberine",asp:["weight","hormonal"]},
  {kw:["Niacinamide"],short:"niacinamide",asp:["skin"]},
  {kw:["Boswellia"],short:"boswellia",asp:["joint"]},
  {kw:["Ginkgo"],short:"ginkgo",asp:["cardio","cognitive"]},
  {kw:["Lion"],short:"lion's mane",asp:["cognitive"]},
  {kw:["Glucosamine"],short:"glucosamine",asp:["joint"]},
  {kw:["MSM"],short:"MSM",asp:["joint","skin"]},
  {kw:["PEA","Palmitoyl"],short:"PEA",asp:["joint"]},
  {kw:["Elderberry"],short:"elderberry",asp:["immune"]},
  {kw:["Astragalus"],short:"astragalus",asp:["immune"]},
  {kw:["Pycnogenol","Pine Bark"],short:"pycnogenol",asp:["cardio","joint","skin"]},
  {kw:["Red Clover"],short:"red clover",asp:["hormonal","cardio"]},
  {kw:["DIM"],short:"DIM",asp:["hormonal","skin"]},
  {kw:["Vitex"],short:"vitex",asp:["hormonal"]},
  {kw:["Horny Goat"],short:"horny goat weed",asp:["hormonal","energy"]},
  {kw:["Acetyl-L-Carnitine","ALCAR"],short:"acetyl-L-carnitine",asp:["energy","cognitive"]},
  {kw:["PQQ"],short:"PQQ",asp:["energy"]}
];
function ingSupport(name){ for(const e of INGSUP){ for(const k of e.kw){ if(name.includes(k)) return e; } } return null; }
function joinNamesJS(a){ a=[...new Set(a)]; if(a.length===1)return a[0]; if(a.length===2)return a[0]+" and "+a[1]; return a.slice(0,-1).join(", ")+" and "+a[a.length-1]; }
function extraAspectHtml(){
  if(!state.formula) return "";
  const ingrs=ING[state.formula.id]||[];
  const extras=state.aspects.filter(a=>!state.top2.includes(a));
  if(!extras.length) return "";
  return " "+extras.map(asp=>{
    const info=ASPECT_PLAIN[asp]; if(!info) return "";
    const helpers=[];
    ingrs.forEach(it=>{ const s=ingSupport(it.n); if(s&&s.asp.includes(asp)) helpers.push(s.short); });
    const uniq=[...new Set(helpers)];
    if(uniq.length){
      return `You also chose to focus on your ${info.label}. Your formula is centred on your two main goals, but several of its ingredients — ${joinNamesJS(uniq)} — may also help support ${info.effect}, so this goal is looked after too.`;
    }
    return `You also chose to focus on your ${info.label}. Because the body's systems are connected, supporting your two main goals can also gently benefit ${info.effect}.`;
  }).join(" ");
}

function h(tag,attrs,inner){
  const a=Object.entries(attrs||{}).map(([k,v])=>v===null||v===undefined?"":`${k}="${v}"`).join(" ");
  return `<${tag}${a?" "+a:""}>${inner||""}</${tag}>`;
}


// ─── MEDICAL CONDITIONS THAT BLOCK SPECIFIC FORMULA CATEGORIES ───────────────
// Each condition maps to formula categories that should NOT be recommended.
// The system will use the second-ranked formula pair instead.
const MED_BLOCKS = {
  // Cardiovascular conditions — avoid high-dose stimulants, check cardio formulas
  "Heart disease or heart attack":          ["cardio"],
  "Uncontrolled high blood pressure":       ["cardio","energy"],
  "Arrhythmia or irregular heartbeat":      ["cardio","energy"],
  "Stroke or TIA":                          ["cardio"],
  // Liver conditions — avoid hepatotoxic herbs
  "Liver disease (hepatitis, cirrhosis)":   ["weight","hormonal","cognitive"],
  // Kidney disease — avoid high-dose minerals
  "Kidney disease":                         ["joint","immune","energy"],
  // Autoimmune — avoid immune stimulants
  "Autoimmune condition":                   ["immune"],
  // Thyroid — DIM and iodine interactions
  "Thyroid condition":                      ["hormonal","weight"],
  // Diabetes / blood sugar — berberine interactions with medication
  "Type 1 or Type 2 diabetes":              ["weight"],
  // Epilepsy — evening primrose, GLA interactions
  "Epilepsy or seizure disorder":           ["hormonal","skin"],
  // Pregnancy / breastfeeding — many herbs contraindicated
  "Pregnant or breastfeeding":              ["sleep","stress","hormonal","weight","skin","cognitive","cardio","immune","joint","energy"],
  // Mental health — MAOIs, SSRIs, serotonin interactions
  "Bipolar disorder":                       ["stress","sleep","cognitive"],
  // Cancer — avoid immune stimulants, hormone-active herbs
  "Cancer (current or recent treatment)":   ["immune","hormonal","skin"],
};

// Medications that block specific categories
const MED_BLOCKS_MEDS = {
  "Blood thinners (warfarin, heparin, apixaban)": ["cardio","immune","joint"],
  "Statins (atorvastatin, rosuvastatin)":          ["cardio"],
  "SSRIs or SNRIs (antidepressants)":              ["stress","sleep","cognitive"],
  "MAOIs":                                          ["stress","sleep","cognitive","energy"],
  "Lithium":                                        ["hormonal","cognitive"],
  "Immunosuppressants":                             ["immune"],
  "Thyroid medication (levothyroxine)":             ["hormonal","weight"],
  "Diabetes medication (metformin, insulin)":       ["weight"],
  "Blood pressure medication":                      ["cardio","energy"],
  "Chemotherapy or targeted cancer therapy":        ["immune","hormonal"],
  "Anticoagulants (other)":                         ["cardio","immune"],
  "Anti-seizure medication":                        ["hormonal","sleep"],
};

// Conditions/meds that block everything — redirect to pharmacist
const HARD_BLOCKS = [
  "Pregnant or breastfeeding",
  "Cancer (current or recent treatment)",
  "MAOIs",
  "Chemotherapy or targeted cancer therapy",
];

// ─── INGREDIENT-LEVEL CONTRAINDICATIONS ─────────────────────────────────────
// Catches interactions that category blocks miss — e.g. 5-HTP lives in some
// WEIGHT formulas, but SSRIs only block stress/sleep/cognitive categories, so a
// Weight+Immune formula would otherwise slip through with a serotonin-syndrome risk.
const MED_ING_BLOCKS = {
  "SSRIs or SNRIs (antidepressants)":              ["5-HTP","Tryptophan"],
  "MAOIs":                                          ["5-HTP","Tryptophan","Green Tea"],
  "Blood thinners (warfarin, heparin, apixaban)":  ["Ginkgo","Vitamin E","Resveratrol","Pycnogenol","Quercetin"],
  "Anticoagulants (other)":                         ["Ginkgo","Vitamin E","Resveratrol","Pycnogenol","Quercetin"],
  "Thyroid medication (levothyroxine)":             ["Ashwagandha"],
  "Diabetes medication (metformin, insulin)":       ["Berberine","Alpha Lipoic"],
  "Immunosuppressants":                             ["Melatonin","Ashwagandha","Glucan","Astragalus","Elderberry"],
  "Anti-seizure medication":                        ["Ginkgo"],
  "Lithium":                                        ["Ashwagandha"],
  "Blood pressure medication":                      ["Horny Goat","Green Tea"],
  "Chemotherapy or targeted cancer therapy":        ["Astragalus","Glucan","Elderberry","Melatonin"],
};
const COND_ING_BLOCKS = {
  "Liver disease (hepatitis, cirrhosis)":           ["Ashwagandha","Green Tea","Berberine"],
  "Kidney disease":                                 ["Mg Glycinate"],
  "Autoimmune condition":                           ["Melatonin","Ashwagandha","Glucan","Astragalus","Elderberry"],
  "Thyroid condition":                              ["Ashwagandha"],
  "Type 1 or Type 2 diabetes":                      ["Berberine","Alpha Lipoic"],
  "Epilepsy or seizure disorder":                   ["Ginkgo"],
  "Bipolar disorder":                               ["5-HTP","Tryptophan"],
  "Heart disease or heart attack":                  ["Horny Goat","Green Tea"],
  "Arrhythmia or irregular heartbeat":              ["Horny Goat","Green Tea"],
  "Uncontrolled high blood pressure":               ["Horny Goat","Green Tea"],
  "Stroke or TIA":                                  ["Ginkgo","Vitamin E","Resveratrol","Pycnogenol","Quercetin"],
  "Cancer (current or recent treatment)":           ["Astragalus","Glucan","Elderberry","Melatonin","Resveratrol"],
};
function blockedIngredients(){
  const kw=new Set();
  state.medConditions.forEach(c=>(COND_ING_BLOCKS[c]||[]).forEach(k=>kw.add(k)));
  state.medMeds.forEach(m=>(MED_ING_BLOCKS[m]||[]).forEach(k=>kw.add(k)));
  return [...kw];
}
function formulaHasBlockedIng(formulaId,kwArr){
  if(!kwArr||!kwArr.length) return false;
  return (ING[formulaId]||[]).some(it=>kwArr.some(k=>it.n.includes(k)));
}

// ─── INDIVIDUALISED FORMULA FOR HARD-BLOCK CONDITIONS ───────────────────────
// For pregnancy, active cancer/chemo, and MAOIs we build a brand-new formula
// from a conservative, condition-specific safe pool rather than recommending a
// stock one. safe = {preg, chemo, maoi}: 1 means generally compatible with that
// situation. THESE POOLS ARE A CLINICAL DRAFT — a pharmacist must validate them.
const CUSTOM_DEV_FEE = 275;      // one-time formula-development fee
const CUSTOM_ORDER_PRICE = 95;   // recurring compounding + API cost (editable)
const CUSTOM_ING = [
  {n:"Vitamin D3",              d:"2,000 IU/day",  role:"foundation", asp:["immune","hormonal","joint","skin"],           ul:0,     safe:{preg:1,chemo:1,maoi:1}},
  {n:"Vitamin B12",             d:"1,000 mcg/day", role:"foundation", asp:["energy","cognitive","stress","cardio"],        ul:0,     safe:{preg:1,chemo:1,maoi:1}},
  {n:"Vitamin B6 (P5P form)",   d:"25 mg/day",     role:"opener",     asp:["stress","hormonal","sleep","cognitive"],       ul:1.25,  safe:{preg:1,chemo:1,maoi:1}},
  {n:"Magnesium Glycinate",     d:"200 mg/day",    role:"opener",     asp:["sleep","stress","energy","cardio","cognitive"],ul:1.0,   safe:{preg:1,chemo:1,maoi:1}},
  {n:"Vitamin C",               d:"250 mg/day",    role:"active",     asp:["immune","skin"],                               ul:1.0,   safe:{preg:1,chemo:0,maoi:1}},
  {n:"Zinc Bisglycinate",       d:"12 mg/day",     role:"active",     asp:["immune","skin","hormonal"],                    ul:1.0,   safe:{preg:1,chemo:1,maoi:1}},
  {n:"L-Theanine",              d:"200 mg/day",    role:"active",     asp:["sleep","stress","cognitive"],                  ul:1.25,  safe:{preg:0,chemo:1,maoi:1}},
  {n:"Melatonin",               d:"3 mg/day",      role:"active",     asp:["sleep"],                                       ul:1.0,   safe:{preg:0,chemo:1,maoi:1}},
  {n:"CoQ10",                   d:"200 mg/day",    role:"active",     asp:["energy","cardio"],                             ul:1.667, safe:{preg:0,chemo:0,maoi:1}},
  {n:"Glucosamine Sulfate",     d:"1,000 mg/day",  role:"active",     asp:["joint"],                                       ul:1.0,   safe:{preg:0,chemo:1,maoi:1}},
  {n:"Bacopa Monnieri",         d:"300 mg/day",    role:"active",     asp:["cognitive"],                                   ul:1.25,  safe:{preg:0,chemo:0,maoi:1}},
];
// Capsule #00 holds 950 µL of fill. Foundations are dosed as a fixed 125 µL triturate.
const CAP00_MAX = 950, CAP00_TARGET = 920, FOUNDATION_TRITURATE = 125;
function perCapUL(ing){
  if(ing.role==="foundation") return FOUNDATION_TRITURATE;
  const m=/([\d.,]+)\s*mg/.exec(ing.d);
  if(!m) return 0;                                   // trace/IU/mcg ingredients ≈ negligible
  return (parseFloat(m[1].replace(/,/g,""))/2) * (ing.ul||1);   // per-cap mg (daily÷2) × µL/mg
}
function fillUL(list){ return Math.round(list.reduce((s,i)=>s+perCapUL(i),0)*10)/10; }
const CUSTOM_PLAIN = {
  "Vitamin D3":"The \u201csunshine vitamin.\u201d It supports your immune system, bones, mood and hormone balance \u2014 gentle, and important when other options are limited.",
  "Vitamin B12":"A vitamin your body uses to keep nerves healthy, turn food into energy and support a steady mood.",
  "Vitamin B6 (P5P form)":"A vitamin that helps your body make the natural chemicals behind calm mood and steady hormones. Often used to ease pregnancy-related nausea too.",
  "Magnesium Glycinate":"A calming mineral involved in hundreds of everyday body processes \u2014 it helps your muscles and mind relax, supports restful sleep and steady energy. This gentle form is easy on the stomach.",
  "Vitamin C":"A well-known antioxidant that supports your immune defences and helps your body make collagen for healthy skin.",
  "Zinc Bisglycinate":"An essential mineral for a strong immune system, clear skin and healthy hormones, in a gentle, well-absorbed form.",
  "L-Theanine":"A natural calming compound found in tea. It helps you feel relaxed but alert, easing racing thoughts without making you drowsy.",
  "Melatonin":"Your body's natural sleep signal. Taken at night, it helps you fall asleep more easily and keep a healthy rhythm.",
  "CoQ10":"A natural compound your cells use to produce energy \u2014 supporting steady energy and a healthy heart.",
  "Glucosamine Sulfate":"A natural building block of cartilage that supports joint cushioning, comfort and easy movement.",
  "Bacopa Monnieri":"A traditional brain herb shown to support memory and clear thinking, building gradually over several weeks.",
};
function buildCustomFormula(){
  const c=state.medConditions, m=state.medMeds;
  const flags=[], nm=[];
  if(c.includes("Pregnant or breastfeeding")){ flags.push("preg"); nm.push("pregnancy or breastfeeding"); }
  if(c.includes("Cancer (current or recent treatment)")||m.includes("Chemotherapy or targeted cancer therapy")){ flags.push("chemo"); nm.push("cancer treatment"); }
  if(m.includes("MAOIs")){ flags.push("maoi"); nm.push("MAOI medication"); }
  if(!flags.length) return false;

  const asp = state.aspects.slice();
  const pool = CUSTOM_ING.filter(ing=>flags.every(f=>ing.safe[f]));
  const overlap=(ing)=>ing.asp.filter(a=>asp.includes(a)).length;
  const founds=pool.filter(i=>i.role==="foundation").sort((a,b)=>overlap(b)-overlap(a));
  const opens =pool.filter(i=>i.role==="opener").sort((a,b)=>overlap(b)-overlap(a));
  const acts  =pool.filter(i=>i.role==="active").sort((a,b)=>overlap(b)-overlap(a));

  const chosen=[]; if(founds[0])chosen.push(founds[0]); if(opens[0])chosen.push(opens[0]);
  const extras=pool.filter(i=>i.role!=="foundation"&&!chosen.includes(i)).sort((a,b)=>overlap(b)-overlap(a));
  const covered=new Set(chosen.flatMap(i=>i.asp.filter(a=>asp.includes(a))));
  const chosenActives=[];
  for(const target of asp){ if(covered.has(target))continue;
    const f=extras.find(a=>!chosenActives.includes(a)&&a.asp.includes(target));
    if(f){ chosenActives.push(f); f.asp.forEach(x=>{ if(asp.includes(x))covered.add(x); }); } }
  for(const a of extras){ if(chosenActives.length>=4)break; if(!chosenActives.includes(a)&&overlap(a)>0)chosenActives.push(a); }

  // ── Capsule #00 fit screen: a #00 holds 950 µL. If the per-cap fill runs over,
  // trim to fit — dropping the bulkiest *redundant* active first (one whose goals
  // are already covered), sacrificing an aspect only as a last resort. ──
  const trimmed=[];
  while(fillUL([...chosen,...chosenActives])>CAP00_TARGET && chosenActives.length>1){
    const base=new Set(chosen.flatMap(i=>i.asp.filter(a=>asp.includes(a))));
    const sole=(cand)=>cand.asp.some(a=>asp.includes(a)&&!base.has(a)&&!chosenActives.some(o=>o!==cand&&o.asp.includes(a)));
    const redundant=chosenActives.filter(a=>!sole(a));
    const cands=redundant.length?redundant:chosenActives.slice();
    const drop=cands.reduce((mx,c)=>perCapUL(c)>perCapUL(mx)?c:mx,cands[0]);
    trimmed.push(chosenActives.splice(chosenActives.indexOf(drop),1)[0]);
  }
  const pick=[...chosen,...chosenActives];
  const fillVol=fillUL(pick);
  const fits=fillVol<=CAP00_MAX;
  const covered2=new Set(pick.flatMap(i=>i.asp.filter(a=>asp.includes(a))));

  const ingredients=pick.map(i=>({n:i.n,d:i.d,b:CUSTOM_PLAIN[i.n]||""}));
  const uncovered=asp.filter(a=>!covered2.has(a));

  const labels=asp.map(a=>ASPECT_PLAIN[a]?ASPECT_PLAIN[a].label:a);
  const effects=asp.map(a=>ASPECT_PLAIN[a]?ASPECT_PLAIN[a].effect:a);
  let hol=`Because of your ${nm.join(" and ")}, we've built a special formula just for you, using only ingredients generally considered compatible with your situation, at clinically meaningful doses. It keeps the same structure as our other formulas: a ${ingredients[0]?ingredients[0].n:"vitamin"} foundation${ingredients[1]?`, a ${ingredients[1].n} opener`:""}, and targeted active ingredients. `;
  hol+=`It's designed to work toward all ${labels.length} of your goals \u2014 ${joinNamesJS(labels)} \u2014 aiming to help support ${joinNamesJS(effects)}. `;
  if(uncovered.length){ hol+=`One honest note: your ${joinNamesJS(uncovered.map(a=>ASPECT_PLAIN[a]?ASPECT_PLAIN[a].label:a))} can only be supported gently here, because the ingredients that target it most directly either aren't the safest choice alongside your condition or would make the capsule too large to swallow comfortably \u2014 your pharmacist will advise on the best way forward. `; }
  hol+=`Everything is sized to fit a single size 00 capsule (about ${fillVol} \u00b5L of the 950 \u00b5L a #00 holds), taken twice daily. `;
  hol+=`This is a starting formulation, not a finished product: because of your health situation it needs a deep review and fresh validation by a licensed pharmacist (and ideally your own doctor) before anything is made.`;

  state.formula={ id:"CUSTOM", name:"Your individualised formula", price:CUSTOM_ORDER_PRICE, custom:true,
                  ingredients, holistic:hol, conditionNames:nm, fillUL:fillVol, fits };
  state.top2 = asp.slice(0,2);
  state.screenResult = "custom";
  return true;
}

function runScreening(){
  const flags = [...state.medConditions, ...state.medMeds];

  // Genuinely broad cases (pregnancy, active cancer/chemo, MAOIs): too much is
  // contraindicated for a stock formula, so build a new individualised one from a
  // condition-safe pool. It is flagged for deep pharmacist review + validation.
  if(flags.some(x => HARD_BLOCKS.includes(x))){
    if(buildCustomFormula()) return;
    state.formula = null; state.screenResult = "consult"; return;
  }

  // Screen at the INGREDIENT level only. A formula is a problem only if it
  // contains an ingredient that interacts with the person's meds/conditions —
  // not because it happens to sit in the same broad category.
  const blockedIng = blockedIngredients();
  const safe = (fid) => !formulaHasBlockedIng(fid, blockedIng);

  // If the matched formula has no contraindicated ingredient, KEEP IT — this is
  // what preserves relevance to what the customer actually selected.
  if(!blockedIng.length || (state.formula && safe(state.formula.id))){
    state.screenResult = "clear"; return;
  }

  // The matched formula does contain a contraindicated ingredient. Find the most
  // relevant safe alternative, staying as close to their selections as possible.
  const sc={};
  state.aspects.forEach(a=>{ sc[a]=(state.answers[a]||[]).reduce((s,v)=>s+(v||0),0); });
  const ranked = Object.entries(sc).sort((a,b)=>b[1]-a[1]).map(([k])=>k);

  let alt=null, altTop2=[];
  const tryPair=(x,y)=>{ if(alt||x===y) return; const k=[x,y].sort().join("_"); const f=FL[k]; if(f && safe(f.id)){ alt=f; altTop2=[x,y]; } };

  // 1) A different pairing among the customer's OWN selected concerns (stays on-topic)
  for(let i=0;i<ranked.length&&!alt;i++) for(let j=i+1;j<ranked.length&&!alt;j++) tryPair(ranked[i],ranked[j]);
  // 2) Keep at least one selected concern, paired with any other category
  if(!alt) for(const a of ranked){ for(const b of Object.keys(AM)){ tryPair(a,b); if(alt)break; } if(alt)break; }
  // 3) Any safe formula
  if(!alt) for(const [key,f] of Object.entries(FL)){ if(safe(f.id)){ alt=f; altTop2=key.split("_"); break; } }

  if(alt){ state.formula = alt; state.top2 = altTop2; state.screenResult = "swapped"; }
  else { state.formula = null; state.screenResult = "consult"; }
}

// acceptAlt removed — formula swap now happens silently in runScreening()

function toggleMedCond(val){
  const i = state.medConditions.indexOf(val);
  if(i>=0) state.medConditions.splice(i,1);
  else state.medConditions.push(val);
  render();
}

function toggleMedMed(val){
  const i = state.medMeds.indexOf(val);
  if(i>=0) state.medMeds.splice(i,1);
  else state.medMeds.push(val);
  render();
}



// ─── MARKET HELPERS ──────────────────────────────────────────────────────────
function isAU(){ return state.market === "AU"; }
function currSymbol(){ return isAU() ? "A$" : "$"; }
function trustBadge(){ return isAU()
  ? "TGA-compliant compounding"
  : "Health Canada Schedule 1"; }
function regionLabel(){ return isAU() ? "State / Territory" : "Province"; }
function postcodeLabel(){ return isAU() ? "Postcode" : "Postal code"; }
function postcodePlaceholder(){ return isAU() ? "2000" : "A1B 2C3"; }
function regionList(){ return isAU()
  ? ["Australian Capital Territory","New South Wales","Northern Territory","Queensland","South Australia","Tasmania","Victoria","Western Australia"]
  : ["Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland & Labrador","Nova Scotia","Ontario","Prince Edward Island","Québec","Saskatchewan"]; }


const HOLISTIC={
  F01:"This formula is designed around the two goals you told us matter most — your sleep and your stress and mood. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For your sleep, it's built to help you fall asleep more easily and sleep more deeply; the vitamin B12, ashwagandha, L-theanine and melatonin were chosen for this. For your stress and mood, it works to help you feel calmer, steadier and more able to cope with stress, led by vitamin B12, magnesium, ashwagandha and L-theanine. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F02:"This formula is designed around the two goals you told us matter most — your focus and memory and your sleep. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For both your focus and memory and your sleep, the vitamin B12, magnesium, L-theanine, bacopa and melatonin work together to help you think more clearly, concentrate and remember better and to help you fall asleep more easily and sleep more deeply. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F03:"This formula is designed around the two goals you told us matter most — your sleep and your weight and metabolism. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For your sleep, it's built to help you fall asleep more easily and sleep more deeply; the vitamin D3, vitamin B6, L-tryptophan, L-theanine and melatonin were chosen for this. For your weight and metabolism, it works to support a healthy metabolism, steadier appetite and easier weight management, led by vitamin D3, vitamin B6, L-tryptophan and melatonin. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F04:"This formula is designed around the two goals you told us matter most — your immune defence and your sleep. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For your immune defence, it's built to strengthen your body's natural defences and protect your cells from everyday damage; the vitamin D3, vitamin C, beta-glucans, zinc, L-theanine and melatonin were chosen for this. For your sleep, it works to help you fall asleep more easily and sleep more deeply, led by vitamin D3, vitamin C, zinc, L-theanine and melatonin. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F05:"This formula is designed around the two goals you told us matter most — your skin, hair and eyes and your sleep. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For both your skin, hair and eyes and your sleep, the vitamin D3, vitamin E, resveratrol, astaxanthin and melatonin work together to support healthy, glowing skin, hair and eyes and slow visible ageing and to help you fall asleep more easily and sleep more deeply. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F06:"This formula is designed around the two goals you told us matter most — your energy and vitality and your sleep. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For your energy and vitality, it's built to restore steady, lasting energy and stamina; the vitamin B12, magnesium, nicotinamide riboside, CoQ10 and melatonin were chosen for this. For your sleep, it works to help you fall asleep more easily and sleep more deeply, led by vitamin B12, magnesium, nicotinamide riboside and melatonin. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F07:"This formula is designed around the two goals you told us matter most — your focus and memory and your stress and mood. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For both your focus and memory and your stress and mood, the vitamin B12, vitamin B6, ashwagandha, phosphatidylserine and alpha-GPC work together to help you think more clearly, concentrate and remember better and to help you feel calmer, steadier and more able to cope with stress. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F08:"This formula is designed around the two goals you told us matter most — your stress and mood and your weight and metabolism. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For your stress and mood, it's built to help you feel calmer, steadier and more able to cope with stress; the vitamin D3, vitamin B6, ashwagandha, alpha-lipoic acid and 5-HTP were chosen for this. For your weight and metabolism, it works to support a healthy metabolism, steadier appetite and easier weight management, led by vitamin D3, ashwagandha, alpha-lipoic acid and 5-HTP. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F09:"This formula is designed around the two goals you told us matter most — your immune defence and your stress and mood. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For both your immune defence and your stress and mood, the vitamin D3, vitamin C, ashwagandha and alpha-lipoic acid work together to strengthen your body's natural defences and protect your cells from everyday damage and to help you feel calmer, steadier and more able to cope with stress. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F10:"This formula is designed around the two goals you told us matter most — your skin, hair and eyes and your stress and mood. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For your skin, hair and eyes, it's built to support healthy, glowing skin, hair and eyes and slow visible ageing; the vitamin D3, vitamin C, phosphatidylserine and niacinamide were chosen for this. For your stress and mood, it works to help you feel calmer, steadier and more able to cope with stress, led by vitamin D3, vitamin C and phosphatidylserine. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F11:"This formula is designed around the two goals you told us matter most — your energy and vitality and your stress and mood. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For your energy and vitality, it's built to restore steady, lasting energy and stamina; the vitamin B12, magnesium and nicotinamide riboside were chosen for this. For your stress and mood, it works to help you feel calmer, steadier and more able to cope with stress, led by vitamin B12, magnesium and ashwagandha. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F12:"This formula is designed around the two goals you told us matter most — your hormonal balance and your stress and mood. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For both your hormonal balance and your stress and mood, the vitamin B12, vitamin B6, ashwagandha, vitex and magnesium work together to help balance your hormones and smooth out cycle-related ups and downs and to help you feel calmer, steadier and more able to cope with stress. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F13:"This formula is designed around the two goals you told us matter most — your focus and memory and your immune defence. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For both your focus and memory and your immune defence, the vitamin B12, zinc, lion's mane and alpha-lipoic acid work together to help you think more clearly, concentrate and remember better and to strengthen your body's natural defences and protect your cells from everyday damage. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F14:"This formula is designed around the two goals you told us matter most — your heart and circulation and your focus and memory. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For both your heart and circulation and your focus and memory, the vitamin B12, magnesium, ginkgo and resveratrol work together to support healthy circulation, blood pressure and a strong heart and to help you think more clearly, concentrate and remember better. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F15:"This formula is designed around the two goals you told us matter most — your focus and memory and your energy and vitality. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For your focus and memory, it's built to help you think more clearly, concentrate and remember better; the vitamin B12, magnesium, alpha-GPC, CoQ10 and nicotinamide riboside were chosen for this. For your energy and vitality, it works to restore steady, lasting energy and stamina, led by vitamin B12, magnesium, CoQ10 and nicotinamide riboside. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F16:"This formula is designed around the two goals you told us matter most — your immune defence and your weight and metabolism. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For both your immune defence and your weight and metabolism, the vitamin D3, vitamin B6, 5-HTP, green tea extract and quercetin work together to strengthen your body's natural defences and protect your cells from everyday damage and to support a healthy metabolism, steadier appetite and easier weight management. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F17:"This formula is designed around the two goals you told us matter most — your joints and bones and your weight and metabolism. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For your joints and bones, it's built to ease stiffness, support comfortable movement and keep bones strong; the vitamin D3, vitamin B6, 5-HTP, green tea extract and boswellia were chosen for this. For your weight and metabolism, it works to support a healthy metabolism, steadier appetite and easier weight management, led by vitamin D3, vitamin B6 and 5-HTP. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F18:"This formula is designed around the two goals you told us matter most — your skin, hair and eyes and your weight and metabolism. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For your skin, hair and eyes, it's built to support healthy, glowing skin, hair and eyes and slow visible ageing; the vitamin D3, zinc, niacinamide and astaxanthin were chosen for this. For your weight and metabolism, it works to support a healthy metabolism, steadier appetite and easier weight management, led by vitamin D3, zinc, berberine and astaxanthin. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F19:"This formula is designed around the two goals you told us matter most — your energy and vitality and your weight and metabolism. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For your energy and vitality, it's built to restore steady, lasting energy and stamina; the vitamin B12, berberine, nicotinamide riboside and PQQ were chosen for this. For your weight and metabolism, it works to support a healthy metabolism, steadier appetite and easier weight management, led by vitamin B12, berberine and PQQ. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F20:"This formula is designed around the two goals you told us matter most — your hormonal balance and your weight and metabolism. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For your hormonal balance, it's built to help balance your hormones and smooth out cycle-related ups and downs; the vitamin D3, vitamin B6, berberine, alpha-lipoic acid and DIM were chosen for this. For your weight and metabolism, it works to support a healthy metabolism, steadier appetite and easier weight management, led by vitamin D3, vitamin B6, berberine and alpha-lipoic acid. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F21:"This formula is designed around the two goals you told us matter most — your immune defence and your joints and bones. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For both your immune defence and your joints and bones, the vitamin D3, magnesium, quercetin, boswellia and vitamin C work together to strengthen your body's natural defences and protect your cells from everyday damage and to ease stiffness, support comfortable movement and keep bones strong. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F22:"This formula is designed around the two goals you told us matter most — your heart and circulation and your immune defence. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For your heart and circulation, it's built to support healthy circulation, blood pressure and a strong heart; the vitamin D3, magnesium, quercetin and resveratrol were chosen for this. For your immune defence, it works to strengthen your body's natural defences and protect your cells from everyday damage, led by vitamin D3, quercetin and resveratrol. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F23:"This formula is designed around the two goals you told us matter most — your immune defence and your skin, hair and eyes. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For your immune defence, it's built to strengthen your body's natural defences and protect your cells from everyday damage; the vitamin D3, zinc, astaxanthin and vitamin C were chosen for this. For your skin, hair and eyes, it works to support healthy, glowing skin, hair and eyes and slow visible ageing, led by vitamin D3, zinc, niacinamide, astaxanthin and vitamin C. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F24:"This formula is designed around the two goals you told us matter most — your energy and vitality and your immune defence. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For your energy and vitality, it's built to restore steady, lasting energy and stamina; the vitamin D3, vitamin C, CoQ10 and nicotinamide riboside were chosen for this. For your immune defence, it works to strengthen your body's natural defences and protect your cells from everyday damage, led by vitamin D3, vitamin C, CoQ10, nicotinamide riboside and elderberry. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F25:"This formula is designed around the two goals you told us matter most — your hormonal balance and your immune defence. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For your hormonal balance, it's built to help balance your hormones and smooth out cycle-related ups and downs; the vitamin D3, vitamin B6, astragalus, DIM and zinc were chosen for this. For your immune defence, it works to strengthen your body's natural defences and protect your cells from everyday damage, led by vitamin D3, vitamin B6, astragalus and zinc. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F26:"This formula is designed around the two goals you told us matter most — your heart and circulation and your joints and bones. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For both your heart and circulation and your joints and bones, the vitamin D3, magnesium, boswellia and pycnogenol work together to support healthy circulation, blood pressure and a strong heart and to ease stiffness, support comfortable movement and keep bones strong. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F27:"This formula is designed around the two goals you told us matter most — your joints and bones and your skin, hair and eyes. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For both your joints and bones and your skin, hair and eyes, the vitamin D3, zinc, vitamin C, MSM and astaxanthin work together to ease stiffness, support comfortable movement and keep bones strong and to support healthy, glowing skin, hair and eyes and slow visible ageing. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F28:"This formula is designed around the two goals you told us matter most — your energy and vitality and your joints and bones. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For both your energy and vitality and your joints and bones, the vitamin B12, magnesium, PEA and CoQ10 work together to restore steady, lasting energy and stamina and to ease stiffness, support comfortable movement and keep bones strong. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F29:"This formula is designed around the two goals you told us matter most — your hormonal balance and your joints and bones. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For your hormonal balance, it's built to help balance your hormones and smooth out cycle-related ups and downs; the vitamin D3, vitamin B6 and horny goat weed were chosen for this. For your joints and bones, it works to ease stiffness, support comfortable movement and keep bones strong, led by vitamin D3, vitamin B6, glucosamine and horny goat weed. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F30:"This formula is designed around the two goals you told us matter most — your heart and circulation and your energy and vitality. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For your heart and circulation, it's built to support healthy circulation, blood pressure and a strong heart; the vitamin B12, quercetin and acetyl-L-carnitine were chosen for this. For your energy and vitality, it works to restore steady, lasting energy and stamina, led by vitamin B12 and CoQ10. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F31:"This formula is designed around the two goals you told us matter most — your heart and circulation and your hormonal balance. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For your heart and circulation, it's built to support healthy circulation, blood pressure and a strong heart; the vitamin B12, vitamin B6, magnesium, pycnogenol, CoQ10, red clover and DIM were chosen for this. For your hormonal balance, it works to help balance your hormones and smooth out cycle-related ups and downs, led by vitamin B12, vitamin B6, magnesium, CoQ10 and red clover. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F32:"This formula is designed around the two goals you told us matter most — your hormonal balance and your skin, hair and eyes. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For your hormonal balance, it's built to help balance your hormones and smooth out cycle-related ups and downs; the vitamin D3, vitamin B6, DIM, zinc, vitamin C and astaxanthin were chosen for this. For your skin, hair and eyes, it works to support healthy, glowing skin, hair and eyes and slow visible ageing, led by vitamin D3, vitamin B6, niacinamide, DIM, zinc, vitamin C and astaxanthin. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
  F33:"This formula is designed around the two goals you told us matter most — your energy and vitality and your hormonal balance. These aren't separate problems; they're closely linked in the body, so improving one naturally helps the other, and your formula works on both at the same time. For both your energy and vitality and your hormonal balance, the vitamin B12, vitamin B6, nicotinamide riboside and ashwagandha work together to restore steady, lasting energy and stamina and to help balance your hormones and smooth out cycle-related ups and downs. Every ingredient was matched to your answers, so nothing here is by accident — each one is pulling toward the results you're looking for.",
};

// ─── RENDER ───────────────────────────────────────────────────────────────────
function render(){
  document.getElementById("topfill").style.width=stepPct()+"%";
  document.getElementById("backbtn").style.display=(state.history.length>0&&state.step!=="confirmation")?"flex":"none";

  const {step,sex,age,aspects,aspIdx,qIdx,top2,formula,plan,signup,signupErrors,co}=state;
  const ca=aspects[aspIdx];
  const curQs=ca?(FU[ca]||[]):[];
  const curQ=curQs[qIdx];
  const totalQs=aspects.reduce((s,a)=>s+(FU[a]?.length||0),0);
  const doneQs=aspects.slice(0,aspIdx).reduce((s,a)=>s+(FU[a]?.length||0),0)+qIdx;
  const pct=totalQs>0?Math.round((doneQs/totalQs)*100):0;
  const firstName=(co.name||signup.name||"").split(" ")[0]||"you";
  const ingrs=formula?(formula.custom?formula.ingredients:(ING[formula.id]||[])):[];
  const plans=getPlanData();
  const selPlan=plans[plan];
  const crossItems=getCrossItems(ingrs);

  let html="";

  // ── INTRO ──────────────────────────────────────────────────────────────────
  if(step==="intro"){
    html=`<div class="page"><div class="card">
      <div class="eyebrow">Your health, precisely</div>
      <h1 class="main">Find the right formula your body actually needs.</h1>
      <p class="sub">A pharmacologist-designed assessment evaluates your answers and recommends specific ingredients and doses addressing your concerns. A licensed pharmacist then reviews and compounds your formula personally.</p>
      <div class="pills">
        <span class="pill">4–5 minutes</span>
        <span class="pill">Private &amp; secure</span>
        <span class="pill">Pharmacologist-designed</span>
        <span class="pill">Pharmacist-reviewed</span>
      </div>
      <button class="btn" onclick="push('sex')">Start my assessment →</button>
      <p style="font-size:12px;color:var(--grayLt);text-align:center;margin-top:.75rem;line-height:1.6">No pre-made products. Your formula is unique to your responses.</p>
      <div class="trust-row">
        <span class="trust-item">Pharmacologist-designed</span>
        <span class="trust-item">‍Pharmacist-reviewed</span>
        <span class="trust-item">${trustBadge()}</span>
      </div>
    </div></div>`;
  }

  // ── SEX ────────────────────────────────────────────────────────────────────
  else if(step==="sex"){
    const opts=[["Female",""],["Male",""],["Prefer not to say","○"]];
    html=`<div class="page"><div class="card">
      <div class="eyebrow">Step 1 of 4</div>
      <h1 class="main">What is your biological sex?</h1>
      <p class="sub">This helps us tailor your formula to your physiology.</p>
      <div class="choice-grid" style="grid-template-columns:1fr 1fr 1fr">
        ${opts.map(([l,ic])=>`<button class="opt${sex===l?" selected":""}" onclick="state.sex='${l}';setTimeout(()=>push('age'),200);render()">
          <span style="font-size:20px">${ic}</span><br><span style="font-size:13px">${l}</span>
        </button>`).join("")}
      </div>
    </div></div>`;
  }

  // ── AGE ────────────────────────────────────────────────────────────────────
  else if(step==="age"){
    const ages=["Under 25","25–34","35–44","45–54","55–64","65+"];
    html=`<div class="page"><div class="card">
      <div class="eyebrow">Step 1 of 4</div>
      <h1 class="main">What is your age range?</h1>
      <p class="sub">Your age range helps us calibrate which ingredients and doses are most relevant for your stage of life.</p>
      <div class="choice-grid">
        ${ages.map(a=>`<button class="opt${age===a?" selected":""}" onclick="state.age='${a}';setTimeout(()=>push('concerns'),200);render()">${a}</button>`).join("")}
      </div>
    </div></div>`;
  }

  // ── CONCERNS ───────────────────────────────────────────────────────────────
  else if(step==="concerns"){
    const canAdd=aspects.length<3;
    html=`<div class="page"><div class="card">
      <div class="eyebrow">Step 2 of 4</div>
      <h1 class="main">Which health areas matter to you right now?</h1>
      <p class="sub">Select your top concerns — up to 3. We'll ask a few focused questions about each one.</p>
      <div class="chips">
        ${Object.entries(AM).map(([k,{label,icon}])=>{
          const sel=aspects.includes(k);
          const disabled=!sel&&!canAdd;
          return `<button class="chip${sel?" selected":""}" onclick="toggleAsp('${k}')" style="${disabled?"opacity:.45;cursor:not-allowed":""}">
            <span class="chip-icon">${icon}</span>
            <span class="chip-label">${label}</span>
          </button>`;
        }).join("")}
      </div>
      <button class="btn" ${aspects.length===0?"disabled":""} onclick="if(${aspects.length>0}){state.aspIdx=0;state.qIdx=0;push('followup')}">
        ${aspects.length>0?`Continue with ${aspects.length} of 3 selected →`:"Select at least one to continue"}
      </button>
    </div></div>`;
  }

  // ── FOLLOWUP ───────────────────────────────────────────────────────────────
  else if(step==="followup"&&ca&&curQ){
    const aspMeta=AM[ca];
    html=`<div class="page"><div class="card">
      <div class="eyebrow">Step 3 of 4</div>
      <div class="q-progress">
        <span class="asp-label">${aspMeta?.icon} ${aspMeta?.label}</span>
        <div class="dots">
          ${curQs.map((_,i)=>`<span class="dot${i<qIdx?" done":i===qIdx?" cur":""}"></span>`).join("")}
        </div>
        ${aspects.length>1?`<span class="asp-label" style="margin-left:auto;opacity:.6">${aspIdx+1}/${aspects.length}</span>`:""}
      </div>
      <div class="big-q">${curQ.q}</div>
      <div class="choice-col">
        ${curQ.opts.map((o,i)=>`<button class="opt" onclick="answerQ(${o.s})">${o.l}</button>`).join("")}
      </div>
      <div class="pbar-wrap"><div class="pbar" style="width:${pct}%"></div></div>
      <div class="pbar-pct">${pct}% complete</div>
    </div></div>`;
  }

  // ── MEDICAL SCREENING ──────────────────────────────────────────────────────
  else if(step==="medical"){
    const conditions = [
      "Heart disease or heart attack",
      "Uncontrolled high blood pressure",
      "Arrhythmia or irregular heartbeat",
      "Stroke or TIA",
      "Type 1 or Type 2 diabetes",
      "Liver disease (hepatitis, cirrhosis)",
      "Kidney disease",
      "Thyroid condition",
      "Autoimmune condition",
      "Epilepsy or seizure disorder",
      "Bipolar disorder",
      "Cancer (current or recent treatment)",
      "Pregnant or breastfeeding",
    ];
    const medications = [
      "Blood thinners (warfarin, heparin, apixaban)",
      "Statins (atorvastatin, rosuvastatin)",
      "SSRIs or SNRIs (antidepressants)",
      "MAOIs",
      "Lithium",
      "Immunosuppressants",
      "Thyroid medication (levothyroxine)",
      "Diabetes medication (metformin, insulin)",
      "Blood pressure medication",
      "Chemotherapy or targeted cancer therapy",
      "Anticoagulants (other)",
      "Anti-seizure medication",
    ];

    const condNone  = state.medConditions.includes("None of the above");
    const medNone   = state.medMeds.includes("No medications");
    const canContinue = (state.medConditions.length > 0) && (state.medMeds.length > 0);
    // Show free-text only if something is selected (excluding "None" options)
    const hasFlags = state.medConditions.filter(c=>c!=="None of the above").length > 0
                  || state.medMeds.filter(m=>m!=="No medications").length > 0;

    html=`<div class="page"><div class="card">
      <div class="eyebrow">Health & Safety Check</div>
      <h1 class="main">One more step before your results</h1>
      <p class="sub">Your pharmacist reviews this before compounding your formula to ensure every ingredient is appropriate for you.</p>

      <div style="margin-bottom:1.5rem">
        <div style="font-size:13px;font-weight:500;color:var(--navy);margin-bottom:.6rem">Do any of the following apply to you? <span style="font-weight:400;color:var(--gray)">(Select all that apply)</span></div>
        <div style="display:flex;flex-direction:column;gap:6px">
          ${conditions.map(c=>{
            const sel = state.medConditions.includes(c);
            return `<button class="opt${sel?" selected":""}" style="text-align:left;padding:11px 14px;font-size:13px" onclick="if(state.medConditions.includes('None of the above'))state.medConditions=[];toggleMedCond('${c.replace(/'/g,"\'")}')">
              <span style="display:flex;align-items:center;gap:8px">
                <span style="width:16px;height:16px;border-radius:4px;border:1.5px solid ${sel?"var(--sage)":"var(--warm)"};background:${sel?"var(--sage)":"transparent"};flex-shrink:0;display:inline-flex;align-items:center;justify-content:center">
                  ${sel?'<span style="color:white;font-size:10px">✓</span>':""}
                </span>
                ${c}
              </span>
            </button>`;
          }).join("")}
          <button class="opt${condNone?" selected":""}" style="text-align:left;padding:11px 14px;font-size:13px" onclick="state.medConditions=state.medConditions.includes('None of the above')?[]:['None of the above'];render()">
            <span style="display:flex;align-items:center;gap:8px">
              <span style="width:16px;height:16px;border-radius:4px;border:1.5px solid ${condNone?"var(--sage)":"var(--warm)"};background:${condNone?"var(--sage)":"transparent"};flex-shrink:0;display:inline-flex;align-items:center;justify-content:center">
                ${condNone?'<span style="color:white;font-size:10px">✓</span>':""}
              </span>
              None of the above
            </span>
          </button>
        </div>
      </div>

      <div style="margin-bottom:1.5rem">
        <div style="font-size:13px;font-weight:500;color:var(--navy);margin-bottom:.6rem">Are you currently taking any of the following? <span style="font-weight:400;color:var(--gray)">(Select all that apply)</span></div>
        <div style="display:flex;flex-direction:column;gap:6px">
          ${medications.map(m=>{
            const sel = state.medMeds.includes(m);
            return `<button class="opt${sel?" selected":""}" style="text-align:left;padding:11px 14px;font-size:13px" onclick="if(state.medMeds.includes('No medications'))state.medMeds=[];toggleMedMed('${m.replace(/'/g,"\'")}')">
              <span style="display:flex;align-items:center;gap:8px">
                <span style="width:16px;height:16px;border-radius:4px;border:1.5px solid ${sel?"var(--sage)":"var(--warm)"};background:${sel?"var(--sage)":"transparent"};flex-shrink:0;display:inline-flex;align-items:center;justify-content:center">
                  ${sel?'<span style="color:white;font-size:10px">✓</span>':""}
                </span>
                ${m}
              </span>
            </button>`;
          }).join("")}
          <button class="opt${medNone?" selected":""}" style="text-align:left;padding:11px 14px;font-size:13px" onclick="state.medMeds=state.medMeds.includes('No medications')?[]:['No medications'];render()">
            <span style="display:flex;align-items:center;gap:8px">
              <span style="width:16px;height:16px;border-radius:4px;border:1.5px solid ${medNone?"var(--sage)":"var(--warm)"};background:${medNone?"var(--sage)":"transparent"};flex-shrink:0;display:inline-flex;align-items:center;justify-content:center">
                ${medNone?'<span style="color:white;font-size:10px">✓</span>':""}
              </span>
              No current medications
            </span>
          </button>
        </div>
      </div>

      ${hasFlags?`
      <div style="margin-bottom:1.5rem">
        <div style="font-size:13px;font-weight:500;color:var(--navy);margin-bottom:.4rem">Would you like to specify further? <span style="font-weight:400;color:var(--gray)">(Optional)</span></div>
        <div style="font-size:12px;color:var(--gray);margin-bottom:.6rem;line-height:1.5">If you don't know the exact name, a brief description is fine — your pharmacist will follow up if needed.</div>
        <textarea class="form-input" rows="3" placeholder="e.g. I take a blood pressure pill but don't know its name. I was diagnosed with an autoimmune condition last year." style="resize:none;font-size:13px;line-height:1.6" oninput="state.medOther=this.value">${state.medOther||""}</textarea>
      </div>`:""}

      <button class="btn" onclick="runScreening();push('signup')" ${!canContinue?"disabled":""}>
        ${canContinue?"View my formula results →":"Please answer both questions above to continue"}
      </button>
    </div></div>`;
  }

    // ── SIGNUP ─────────────────────────────────────────────────────────────────
  else if(step==="signup"){
    html=`<div class="page"><div class="card">
      <div class="eyebrow">Step 4 of 4 — Almost there</div>
      <h1 class="main">Create your account to unlock your results</h1>
      <p class="sub">Your ingredient profile is ready. Create a free account to see exactly what was selected for you — and why.</p>
      <div class="sel-tags">${aspects.map(a=>`<span class="sel-tag">${AM[a]?.icon} ${AM[a]?.label}</span>`).join("")}</div>
      <div class="form-field">
        <label class="form-label">Full name</label>
        <input class="form-input" placeholder="Your name" value="${signup.name}" oninput="state.signup.name=this.value">
        ${signupErrors.name?`<div class="form-err">${signupErrors.name}</div>`:""}
      </div>
      <div class="form-field">
        <label class="form-label">Email address</label>
        <input class="form-input" type="email" placeholder="you@email.com" value="${signup.email}" oninput="state.signup.email=this.value">
        ${signupErrors.email?`<div class="form-err">${signupErrors.email}</div>`:""}
      </div>
      <div class="form-field">
        <label class="form-label">Password</label>
        <input class="form-input" type="password" placeholder="Min. 8 characters, letters and numbers" value="${signup.password}" oninput="state.signup.password=this.value">
        ${signupErrors.password?`<div class="form-err">${signupErrors.password}</div>`:""}
        <div style="font-size:11px;color:var(--grayLt);margin-top:5px">At least 8 characters, including letters and numbers</div>
      </div>
      <div class="form-field">
        <label class="form-label">Confirm password</label>
        <input class="form-input" type="password" placeholder="Re-enter your password" value="${signup.confirm}" oninput="state.signup.confirm=this.value">
        ${signupErrors.confirm?`<div class="form-err">${signupErrors.confirm}</div>`:""}
      </div>
      <button class="btn" onclick="validateSignup()">Reveal my ingredient profile →</button>
      <p style="font-size:12px;color:var(--grayLt);text-align:center;margin-top:.75rem;line-height:1.6">Private and never shared. A pharmacist reviews your profile before your first order.</p>
    </div></div>`;
  }

  // ── RESULT ─────────────────────────────────────────────────────────────────
  else if(step==="result"){
    if(!formula){
      const consult = state.screenResult==="consult";
      html=`<div class="page"><div class="card">
        <div style="text-align:center;padding:1rem 0 .5rem">
          <div style="width:64px;height:64px;border-radius:50%;background:var(--sageXLt);border:1px solid rgba(130,149,92,.3);display:flex;align-items:center;justify-content:center;margin:0 auto 16px"><span style="font-size:30px">‍</span></div>
          <h1 class="main" style="font-size:26px">${consult?"Let's have a pharmacist look after this personally":"We couldn't find an exact match"}</h1>
          <p class="sub" style="max-width:460px;margin:10px auto 0">${consult
            ? "Based on your health details, a few ingredients need a licensed pharmacist's judgement before we recommend anything — so we'd rather have them tailor a safe formula for you directly than suggest something automatically. Leave your details and our pharmacist will be in touch."
            : "Please go back and try different selections."}</p>
        </div>
        <button class="btn" style="margin-top:1.25rem" onclick="goBack()">← Go back</button>
      </div></div>`;
      document.getElementById("app").innerHTML=html; return;
    }
    const a0=top2[0], a1=top2[1];
    const allLabels=aspects.map(a=>AM[a]?.label).filter(Boolean);

    const crossHtml=""; // removed - third aspect integrated into narratives

    html=`<div class="page">
      <div class="result-wrap">
        <div class="result-title-block">
          <div class="result-pill">Compounded for you</div>
          <div class="result-big-title">Only for you,<br><span class="name">${firstName}</span></div>
          <p class="result-tagline">Every ingredient below was identified from your specific answers.<br>This formula belongs to no one else.</p>
          <div class="asp-badges">${aspects.map(a=>`<span class="asp-badge">${AM[a]?.icon} ${AM[a]?.label}</span>`).join("")}</div>
        </div>

        <div class="result-body">

          <div class="section-title">Your selected ingredients</div>
          <p class="section-sub">Each ingredient was chosen because of the specific pattern of answers you gave — not from a pre-made product. A licensed pharmacist will review and compound your formula within 1 business day.</p>
          <ul class="ingr-list">
            ${ingrs.map(ingr=>`
            <li class="ingr-item">
              <div class="ingr-dot"></div>
              <div>
                <div class="ingr-name">${ingr.n}</div>
                <div class="ingr-dose">${ingr.d}</div>
                <div class="ingr-benefit">${ingr.b}</div>
              </div>
            </li>`).join("")}
          </ul>

          <div class="divider"></div>

          <div class="fx-box">
            <div class="section-title" style="margin-bottom:10px">How this works for you, ${firstName}</div>
            <div class="fx-text" style="line-height:1.8">${formula.custom?formula.holistic:((HOLISTIC[formula.id]||"Your formula ingredients work across all your selected health concerns simultaneously — each ingredient chosen for the specific biological mechanisms your answers identified.")+extraAspectHtml())}</div>
            ${formula.custom?`<div style="margin-top:14px;display:inline-flex;align-items:center;gap:7px;background:var(--sageXLt);border:1px solid rgba(130,149,92,.35);border-radius:50px;padding:6px 13px;font-size:12px;color:var(--sageDk);font-weight:600">${formula.fits?"✓":""} ${formula.fits?"Fits a size 00 capsule":"May need a larger capsule"} · ${formula.fillUL} µL / 950 µL fill</div>`:""}
          </div>

          <div class="divider"></div>

          <div class="section-title">Choose your subscription</div>
          <p class="section-sub">30-day supply · 2 capsules daily · Compounded fresh for each order</p>
          <div class="plans">
            ${Object.entries(plans).map(([k,p])=>`
            <div class="plan${plan===k?" selected":""}" onclick="state.plan='${k}';render()">
              ${p.badge?`<div class="plan-badge">${p.badge}</div>`:""}
              <div class="plan-label">${p.label}</div>
              <div class="plan-price">${currSymbol()}${p.per}</div>
              <div class="plan-mo">/month</div>
              ${p.billing!==`${currSymbol()}${p.per}/month`?`<div class="plan-billing">${p.billing}</div>`:""}
            </div>`).join("")}
          </div>

          ${formula.custom?`<div style="background:#FCF6EA;border:1px solid #E6CB92;border-radius:12px;padding:12px 14px;margin:2px 0 12px;font-size:12.5px;color:var(--navy);line-height:1.65">
            <strong>First payment:</strong> a one-time ${currSymbol()}${CUSTOM_DEV_FEE} formula-development fee (to create and validate a brand-new formula for your condition) <strong>+</strong> your first order of ${currSymbol()}${cycleTotal(plan)} = <strong>${currSymbol()}${dueToday(plan)} due today</strong>.<br>After that you'll be charged ${currSymbol()}${cycleTotal(plan)} ${cycleWord(plan)}.
          </div>`:""}
          <button class="btn" style="margin-top:8px" onclick="push('checkout')">Proceed to checkout — ${formula.custom?`${currSymbol()}${dueToday(plan)} today`:`${currSymbol()}${cycleTotal(plan)} ${cycleWord(plan)}`} →</button>

          ${formula.custom
            ? `<div style="background:var(--sageXLt);border:1px solid rgba(130,149,92,.4);border-radius:12px;padding:14px 16px;margin-top:1rem;font-size:13px;color:var(--navy);line-height:1.65"><strong>Deep pharmacist review required.</strong> Because of your health condition, this formula was created fresh for you. Before it is compounded, a licensed pharmacist will carry out a thorough review and full re-validation of every ingredient and dose — and we strongly recommend confirming with your own doctor as well.</div>`
            : `<p style="font-size:12px;color:var(--grayLt);text-align:center;margin-top:.75rem;line-height:1.7">
            A pharmacist reviews your profile before your first order is compounded.<br>Cancel anytime · No hidden fees
          </p>`}
          <div class="trust-final">
            <span class="trust-final-item">‍Pharmacist-reviewed</span>
            <span class="trust-final-item">${trustBadge()}</span>
            <span class="trust-final-item">Evidence-dose formulation</span>
            <span class="trust-final-item">Private &amp; secure</span>
          </div>
        </div>
      </div>
    </div>`;
  }

  // ── CHECKOUT ───────────────────────────────────────────────────────────────
  else if(step==="checkout"&&formula){
    const plans2=getPlanData();
    const sp=plans2[plan];
    const provinces=regionList();
    const savedPct=sp.savePct||0;
    html=`<div class="page">
      <div style="max-width:600px;margin:0 auto">
        <div class="eyebrow">Checkout</div>
        <h1 class="main">Complete your order</h1>
        <p class="sub">${isAU()?"Your formula will be reviewed by a licensed Australian compounding pharmacist and compounded fresh to your order.":"Your formula will be reviewed by a licensed pharmacist and compounded within 1 business day."}</p>

        <div class="checkout-summary">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
            <div>
              <input class="form-input" placeholder="Name your formula (optional)" style="font-size:13px;padding:8px 11px;margin-bottom:4px" value="${state.co.formulaName||''}" oninput="state.co.formulaName=this.value" maxlength="40">
              <div style="font-size:12px;color:var(--gray);margin-top:3px">${sp.label} subscription · 2 capsules/day · 30-day supply</div>
            </div>
            <div style="text-align:right;flex-shrink:0;margin-left:12px">
              ${savedPct>0?`<div style="font-size:12px;font-weight:700;color:var(--sage);margin-bottom:2px">You saved ${savedPct}%!</div>`:""}
              <div style="font-family:'Cormorant Garamond',serif;font-size:34px;font-weight:600;color:var(--navy);line-height:1">${currSymbol()}${cycleTotal(plan)}</div>
              <div style="font-size:11px;color:var(--gray)">${cycleWord(plan)}${cycleMonths(plan)>1?`<br>(${currSymbol()}${sp.per}/month)`:""}</div>
            </div>
          </div>
          <div style="border-top:1px solid rgba(130,149,92,.2);padding-top:10px;display:flex;flex-wrap:wrap;gap:5px">
            ${ingrs.map(ingr=>`<span style="background:white;border:1px solid rgba(130,149,92,.3);border-radius:50px;font-size:10px;padding:2px 8px;color:var(--sageDk)">${ingr.n.split(" (")[0]}</span>`).join("")}
          </div>
          ${formula.custom?`<div style="border-top:1px solid rgba(130,149,92,.2);margin-top:10px;padding-top:10px;font-size:12.5px;color:var(--navy)">
            <div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>One-time formula development</span><span>${currSymbol()}${CUSTOM_DEV_FEE}</span></div>
            <div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>First order (${sp.label})</span><span>${currSymbol()}${cycleTotal(plan)}</span></div>
            <div style="display:flex;justify-content:space-between;font-weight:700;border-top:1px solid rgba(130,149,92,.25);padding-top:6px;margin-top:2px"><span>Due today</span><span>${currSymbol()}${dueToday(plan)}</span></div>
            <div style="color:var(--gray);margin-top:6px;line-height:1.5">The ${currSymbol()}${CUSTOM_DEV_FEE} development fee is a one-time charge. After that you'll be charged ${currSymbol()}${cycleTotal(plan)} ${cycleWord(plan)}.</div>
          </div>`:""}
        </div>

        <div class="checkout-section">
          <div class="checkout-section-title">Contact information</div>
          <div class="form-field">
            <label class="form-label">Full name</label>
            <input class="form-input" placeholder="Your name" value="${co.name}" oninput="state.co.name=this.value">
          </div>
          <div class="form-field" style="margin-bottom:0">
            <label class="form-label">Email address</label>
            <input class="form-input" type="email" placeholder="you@email.com" value="${co.email}" oninput="state.co.email=this.value">
          </div>
        </div>

        <div class="checkout-section">
          <div class="checkout-section-title">Shipping address</div>
          <div class="form-field">
            <label class="form-label">Country</label>
            <select class="form-select" onchange="state.market=this.value;state.co.province='';render()">
              <option value="CA" selected>Canada</option>
            </select>
          </div>
          <div class="form-field">
            <label class="form-label">Street address</label>
            <input class="form-input" placeholder="123 Main Street" value="${co.address}" oninput="state.co.address=this.value">
          </div>
          <div class="two-col">
            <div class="form-field">
              <label class="form-label">City</label>
              <input class="form-input" placeholder="City" value="${co.city}" oninput="state.co.city=this.value">
            </div>
            <div class="form-field">
              <label class="form-label">${postcodeLabel()}</label>
              <input class="form-input" placeholder="${postcodePlaceholder()}" value="${co.postal}" oninput="state.co.postal=this.value">
            </div>
          </div>
          <div class="form-field" style="margin-bottom:0">
            <label class="form-label">${regionLabel()}</label>
            <select class="form-select" onchange="state.co.province=this.value">
              <option value="" ${!co.province?"selected":""} disabled>Select ${regionLabel()}</option>
              ${provinces.map(p=>`<option value="${p}" ${co.province===p?"selected":""}>${p}</option>`).join("")}
            </select>
          </div>
        </div>

        <div class="checkout-section">
          <div class="checkout-section-title">Payment</div>
          <p style="font-size:12px;color:var(--grayLt);margin-bottom:10px;line-height:1.6">
            Your card details are entered on Stripe's secure page, never on this site.
            Nothing is charged today: your card is charged ${currSymbol()}${dueToday(plan)}
            only once a licensed pharmacist has approved your formula.
          </p>
          <div id="co-error" style="display:none;font-size:13px;color:var(--rose);background:rgba(184,74,58,.08);border:1px solid rgba(184,74,58,.25);border-radius:4px;padding:10px 12px;margin-bottom:10px"></div>
        </div>

        <button class="btn" id="co-submit" onclick="startStripeCheckout()">
          Continue to secure payment &rarr;
        </button>

        <p style="font-size:12px;color:var(--grayLt);text-align:center;margin-top:.75rem;line-height:1.7">
          Your card is saved with Stripe and charged only after a licensed pharmacist approves your formula.<br>
          Cancel anytime · Free shipping · No hidden fees
        </p>
        <div class="trust-final" style="margin-top:.75rem">
          <span class="trust-final-item">Secure checkout</span>
          <span class="trust-final-item">‍Pharmacist-approved</span>
          <span class="trust-final-item">${trustBadge()}</span>
        </div>
      </div>
    </div>`;
  }

  // ── ORDER CONFIRMATION ───────────────────────────────────────────────────
  else if(step==="confirmation"){
    const cplans=getPlanData();
    const csp=cplans[plan];
    const fname=(co.name||signup.name||"").split(" ")[0]||"there";
    const fLabel=state.co.formulaName?`\u201c${state.co.formulaName}\u201d`:(formula?formula.name:"your formula");
    html=`<div class="page">
      <div class="result-wrap">
        <div class="result-title-block">
          <div style="width:72px;height:72px;border-radius:50%;background:var(--sage);display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 6px 20px rgba(130,149,92,.35)">
            <span style="color:white;font-size:38px;line-height:1">\u2713</span>
          </div>
          <div class="result-pill">\u2726 Order confirmed</div>
          <div class="result-big-title">Your formula is<br><span class="name">on its way</span></div>
          <p class="result-tagline">Thank you, ${fname}! ${fLabel} is now in the hands of your licensed pharmacist \u2014 a formula blended for you and no one else.</p>
        </div>

        <div class="result-body">
          <div class="checkout-summary" style="margin-bottom:24px">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <div>
                <div style="font-size:13px;font-weight:600;color:var(--navy)">${fLabel}</div>
                <div style="font-size:12px;color:var(--gray);margin-top:2px">${csp.label} subscription \u00b7 2 capsules/day \u00b7 30-day supply</div>
              </div>
              <div style="text-align:right;flex-shrink:0;margin-left:12px">
                <div style="font-family:'Cormorant Garamond',serif;font-size:24px;font-weight:600;color:var(--navy);line-height:1">${currSymbol()}${csp.per}</div>
                <div style="font-size:11px;color:var(--gray)">/month</div>
              </div>
            </div>
            <div style="border-top:1px solid rgba(130,149,92,.2);margin-top:12px;padding-top:10px;font-size:12px;color:var(--gray)">A confirmation and updates will be sent to <span style="color:var(--navy);font-weight:500">${co.email||"your email"}</span>.</div>
          </div>

          <div class="section-title" style="margin-bottom:14px">What happens next</div>
          <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:24px">
            <div style="display:flex;gap:14px;align-items:flex-start">
              <div style="width:30px;height:30px;border-radius:50%;background:var(--sageXLt);border:1px solid rgba(130,149,92,.3);color:var(--sageDk);font-weight:600;font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0">1</div>
              <div>
                <div style="font-size:14px;font-weight:600;color:var(--navy);margin-bottom:2px">Pharmacist review</div>
                <div style="font-size:13px;color:var(--gray);line-height:1.6">A licensed pharmacist personally reviews your formula alongside your health assessment results, to make sure every ingredient and dose is right and safe for you.</div>
              </div>
            </div>
            <div style="display:flex;gap:14px;align-items:flex-start">
              <div style="width:30px;height:30px;border-radius:50%;background:var(--sageXLt);border:1px solid rgba(130,149,92,.3);color:var(--sageDk);font-weight:600;font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0">2</div>
              <div>
                <div style="font-size:14px;font-weight:600;color:var(--navy);margin-bottom:2px">Compounded fresh</div>
                <div style="font-size:13px;color:var(--gray);line-height:1.6">Once approved, your personal formula is compounded fresh \u2014 typically within 1 business day.</div>
              </div>
            </div>
            <div style="display:flex;gap:14px;align-items:flex-start">
              <div style="width:30px;height:30px;border-radius:50%;background:var(--sageXLt);border:1px solid rgba(130,149,92,.3);color:var(--sageDk);font-weight:600;font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0">3</div>
              <div>
                <div style="font-size:14px;font-weight:600;color:var(--navy);margin-bottom:2px">On its way to you</div>
                <div style="font-size:13px;color:var(--gray);line-height:1.6">Your order is shipped within 2 business days, with tracking sent straight to your inbox.</div>
              </div>
            </div>
          </div>

          <p style="font-size:12px;color:var(--grayLt);text-align:center;line-height:1.7">Your card is only charged after your pharmacist approves your formula.<br>Questions? Just reply to your confirmation email \u2014 we're here to help.</p>
          <div class="trust-final" style="margin-top:1rem">
            <span class="trust-final-item">\ud83d\udc69\u200d\u2695\ufe0f Pharmacist-reviewed</span>
            <span class="trust-final-item">\ud83e\uddea Compounded for you</span>
            <span class="trust-final-item">${trustBadge()}</span>
          </div>
        </div>
      </div>
    </div>`;
  }

  document.getElementById("app").innerHTML=html;
}


/* ─── STRIPE CHECKOUT ────────────────────────────────────────────────────────
   The card never touches this page. We hand the order to our own function,
   which prices it server-side and opens a Stripe-hosted page; Stripe sends
   the customer back here afterwards.
   ─────────────────────────────────────────────────────────────────────────── */
function coError(msg){
  var box=document.getElementById('co-error');
  if(!box){ alert(msg); return; }
  box.textContent=msg; box.style.display='block';
  box.scrollIntoView({behavior:'smooth',block:'center'});
}

async function startStripeCheckout(){
  var box=document.getElementById('co-error'); if(box) box.style.display='none';
  var btn=document.getElementById('co-submit');
  var co=state.co||{};

  // the obvious mistakes are caught here; the server checks again regardless
  if(!co.name||!String(co.name).trim().includes(' ')) return coError('Please enter your first and last name.');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(co.email||'')) return coError('Please enter a valid email address.');
  if(!co.address) return coError('Please enter your street address.');
  if(!co.city) return coError('Please enter your city.');
  if(!co.postal) return coError('Please enter your postal code.');
  if(!co.province) return coError('Please select your province.');

  var f=state.formula||{};
  if(!f.id) return coError('Your formula is missing. Please retake the quiz.');

  var summary=(f.ingredients||[]).map(function(i){return i.n+(i.d?' '+i.d:'');}).join(', ');
  var label=btn?btn.innerHTML:'';
  if(btn){ btn.disabled=true; btn.innerHTML='Opening secure payment…'; }

  // the quiz is kept so the thank-you screen survives the trip to Stripe
  try{ localStorage.setItem('nl_quiz_state', JSON.stringify(state)); }catch(e){}

  try{
    var r=await fetch('/api/checkout',{
      method:'POST', headers:{'content-type':'application/json'},
      body:JSON.stringify({
        formulaId:f.id, plan:state.plan, market:state.market, formulaSummary:summary,
        customer:{
          name:co.name, email:co.email, address1:co.address, city:co.city,
          province:co.province, postal:co.postal,
          country: state.market==='AU' ? 'AU' : 'CA'
        }
      })
    });
    if(r.status===404||r.status===405){
      throw new Error('Payments are not connected on this deployment yet. The API functions still need to be deployed.');
    }
    var data={}; try{ data=await r.json(); }catch(e){}
    if(!r.ok||!data.url) throw new Error(data.error||'We could not start the payment. Please try again.');
    window.location.href=data.url;
  }catch(e){
    if(btn){ btn.disabled=false; btn.innerHTML=label; }
    // a dead fetch means the page is running without its API behind it
    var offline = (e instanceof TypeError) || /failed to fetch|networkerror|load failed/i.test(e.message||'');
    coError(offline
      ? 'Payments are not connected yet. This copy of the site is running without its payment functions deployed.'
      : (e.message||'Something went wrong starting the payment.'));
  }
}

/* Coming back from Stripe: the card is saved, so restore the quiz and show
   the confirmation. The charge itself happens after pharmacist approval. */
(function(){
  var q=new URLSearchParams(window.location.search);
  var done=q.get('nl_setup'), cancelled=q.get('nl_cancelled');
  if(!done && !cancelled) return;

  try{
    var saved=localStorage.getItem('nl_quiz_state');
    if(saved) Object.assign(state, JSON.parse(saved));
  }catch(e){}

  state.step = done ? 'confirmation' : 'checkout';
  if(done){ state.cardSaved=true; try{ localStorage.removeItem('nl_quiz_state'); }catch(e){} }

  // drop the parameter so a refresh does not replay this
  try{ window.history.replaceState({}, '', window.location.pathname); }catch(e){}

  if(typeof showPage==='function') showPage('quiz');
  if(document.getElementById('app')) render();
})();

// Only auto-render if the quiz page is active
if(document.getElementById('app') && document.getElementById('page-quiz') && 
   document.getElementById('page-quiz').classList.contains('active')){
  render();
}
