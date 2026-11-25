function getBotReply(text) {
  var q = text.toLowerCase().trim();

  // GREETINGS
  if (q === 'hi' || q === 'hello' || q === 'hey' || q === 'yo' || q === 'sup' || q.indexOf('good morning') !== -1 || q.indexOf('good evening') !== -1) {
    return "Hey there! Welcome to NutriLab. I am your personal wellness advisor, founded on MSc Pharmacology expertise. Ask me anything about our supplements, ingredients, pricing, or how our personalised quiz works. What is on your mind?";
  }

  // WHAT CAN YOU DO
  if (q.indexOf('what can you') !== -1 || q.indexOf('how can you help') !== -1 || q.indexOf('what do you do') !== -1) {
    return "I am NutriLab's AI wellness advisor. I can help you with: understanding what specific supplements do and the science behind them, finding the right stack for your health goals (energy, sleep, stress, gut, immunity), explaining how our formulas are developed by our MSc Pharmacology founder, and answering questions about pricing, delivery, and subscriptions. What would you like to know?";
  }

  // MAGNESIUM - DOSE
  if (q.indexOf('magnesium') !== -1 && (q.indexOf('dose') !== -1 || q.indexOf('how much') !== -1 || q.indexOf('mg') !== -1)) {
    return "The clinically effective dose for Magnesium Glycinate is 300-400mg of elemental magnesium daily. A 2024 randomised controlled trial used 250mg elemental magnesium daily and found statistically significant improvements in insomnia severity scores within 14 days. We use 400mg in our formulas - within the evidence-based range and gentle on digestion.";
  }

  // MAGNESIUM - SLEEP
  if (q.indexOf('magnesium') !== -1 && (q.indexOf('sleep') !== -1 || q.indexOf('insomnia') !== -1)) {
    return "Magnesium is one of the best-studied supplements for sleep. It works by enhancing GABAergic transmission (your brain's calm-down signal), antagonising excitatory NMDA receptors, and supporting melatonin synthesis. A 2024 systematic review found that 5 out of 8 studies showed improvements in sleep parameters with magnesium supplementation. The glycinate form is preferred because it is the most bioavailable and has a synergistic calming effect from glycine itself.";
  }

  // MAGNESIUM - ANXIETY/STRESS
  if (q.indexOf('magnesium') !== -1 && (q.indexOf('anxi') !== -1 || q.indexOf('stress') !== -1 || q.indexOf('mood') !== -1)) {
    return "Magnesium plays a key role in regulating neurotransmitters involved in stress and mood - including serotonin production and NMDA receptor activity. A 2024 systematic review found that the majority of included trials showed at least modest positive results for anxiety and sleep. It is particularly effective for people with low baseline magnesium, which affects nearly 50% of the population due to modern diets.";
  }

  // MAGNESIUM - GENERAL
  if (q.indexOf('magnesium') !== -1) {
    return "NutriLab uses Magnesium Glycinate (not magnesium oxide or citrate) because the glycinate form is the most bioavailable and gentlest on the gut. Magnesium participates in over 300 enzymatic reactions and is critical for GABA synthesis, sleep, muscle recovery, and stress regulation. Nearly 50% of the population is sub-optimal due to modern diets. Our Sleep and Calm Stack includes this alongside L-Glycine (500-700mg) and Lemon Balm 5:1 for synergistic GABAergic support.";
  }

  // ASHWAGANDHA - CORTISOL/STRESS
  if ((q.indexOf('ashwagandha') !== -1 || q.indexOf('ksm') !== -1) && (q.indexOf('cortisol') !== -1 || q.indexOf('stress') !== -1)) {
    return "KSM-66 Ashwagandha has some of the strongest clinical evidence for cortisol reduction of any natural supplement. In a landmark double-blind, placebo-controlled RCT, 600mg per day for 60 days produced a statistically significant reduction in serum cortisol (p=0.0006) and stress scores across all three validated scales - with a 44-72% reduction in stress scores compared to placebo. No serious adverse events were reported.";
  }

  // ASHWAGANDHA - SLEEP
  if ((q.indexOf('ashwagandha') !== -1 || q.indexOf('ksm') !== -1) && q.indexOf('sleep') !== -1) {
    return "KSM-66 Ashwagandha significantly improves sleep quality - not just stress. In an 8-week RCT of 80 adults including those with insomnia, 600mg per day KSM-66 improved sleep onset latency, total sleep time, sleep efficiency, and perceived anxiety. The NIH provisionally recommends specific daily doses of ashwagandha root extract for anxiety based on this growing body of evidence.";
  }

  // ASHWAGANDHA - ENERGY/COGNITIVE
  if ((q.indexOf('ashwagandha') !== -1 || q.indexOf('ksm') !== -1) && (q.indexOf('energy') !== -1 || q.indexOf('cognitive') !== -1 || q.indexOf('focus') !== -1)) {
    return "A 2024 prospective RCT using 600mg KSM-66 for 8 weeks found significant improvements in cognitive function including memory, information processing speed, and executive function - as well as reductions in mental fatigue. Ashwagandha works partly by lowering stress hormones that interfere with cognitive performance, and partly through direct neuroprotective mechanisms.";
  }

  // ASHWAGANDHA - GENERAL
  if (q.indexOf('ashwagandha') !== -1 || q.indexOf('ksm-66') !== -1 || q.indexOf('withania') !== -1) {
    return "Ashwagandha 1.5% is our core adaptogen. Our withanoside-standardised root extract is backed by over 24 published studies. At 300-600mg daily it significantly reduces serum cortisol, improves sleep onset, supports testosterone biosynthesis via glucocorticoid receptor modulation, and improves cognitive performance under stress. All NutriLab ingredients are confirmed Health Canada Schedule 1 NHPs.";
  }

  // STRESS / ANXIETY
  if (q.indexOf('stress') !== -1 || q.indexOf('anxi') !== -1 || q.indexOf('overwhelm') !== -1 || q.indexOf('burnout') !== -1 || q.indexOf('panic') !== -1) {
    return "For stress and anxiety, our Sleep and Calm Stack centres on: Ashwagandha KSM-66 (600mg - clinically proven to reduce cortisol by up to 30% in RCTs), L-Theanine (200mg - promotes alpha brain waves and calm focus without sedation), Magnesium Glycinate (400mg - regulates NMDA receptors and GABA activity), and Reishi Mushroom (500mg - adaptogenic and immune-modulating). Together these work on the HPA axis, nervous system, and neurotransmitter balance. Want to take the quiz for a personalised recommendation?";
  }

  // SLEEP - MELATONIN
  if ((q.indexOf('sleep') !== -1 || q.indexOf('insomnia') !== -1) && q.indexOf('melatonin') !== -1) {
    return "We do not include melatonin in our formulas by default. While melatonin can be useful for jet lag, it directly overrides your circadian rhythm and can reduce your body's natural melatonin production over time. Instead, our Sleep Stack works upstream - supporting the conditions your body needs to produce melatonin naturally through magnesium and ashwagandha for cortisol reduction, and calming neural excitability through L-Theanine and Reishi. This is a more sustainable long-term approach.";
  }

  // SLEEP - GENERAL
  if (q.indexOf('sleep') !== -1 || q.indexOf('insomnia') !== -1 || q.indexOf('wake up') !== -1 || q.indexOf('tired') !== -1) {
    return "Our Sleep and Circadian Stack draws from 5 sleep-specific and supporting ingredients. Key picks: Melatonin (0.5-1mg, MT1/MT2 receptor agonism for circadian phase shifting - we use low-dose for natural rhythm support), L-Glycine (500-700mg, inhibitory brainstem neurotransmitter that improves sleep quality with minimal side effects), Lemon Balm 5:1 (300-600mg, GABA-transaminase inhibition raises endogenous GABA), Ashwagandha 1.5% (reduces cortisol disrupting sleep onset), and L-Theanine (200-400mg, alpha-wave induction). Most people notice measurable improvement within 1-2 weeks.";
  }

  // ENERGY - CAFFEINE
  if ((q.indexOf('energy') !== -1 || q.indexOf('fatigue') !== -1) && (q.indexOf('caffeine') !== -1 || q.indexOf('coffee') !== -1)) {
    return "Unlike caffeine, which stimulates the adrenal system and can cause crashes and dependency, our energy formulas work at the cellular level. CoQ10 supports mitochondrial ATP production - your cell's actual energy currency. B-Complex fuels metabolic pathways that convert food into energy. Lion's Mane improves neural efficiency. And Ashwagandha reduces the cortisol drain that leaves you exhausted. Sustained, clean energy with no jitters and no crash.";
  }

  // ENERGY - GENERAL
  if (q.indexOf('energy') !== -1 || q.indexOf('fatigue') !== -1 || q.indexOf('exhausted') !== -1 || q.indexOf('sluggish') !== -1 || q.indexOf('brain fog') !== -1) {
    return "Persistent fatigue has several root causes - mitochondrial inefficiency, nutrient gaps, or cortisol drain. Our Energy and Cognitive Stack draws from our 17-ingredient energy library and 14-ingredient cognitive library. Core picks: CoEnzyme Q10 Kaneka Ubiquinol (100-200mg, ETC Complex I/II electron carrier), Cordyceps 16% (500-700mg, improves VO2 max and ATP via cordycepin), NR Nicotinamide Riboside (250-500mg, raises NAD+ via NRK pathway), Lion's Mane 40% (500-1000mg, NGF stimulation), and Ashwagandha 1.5% (300-600mg, reduces cortisol-driven fatigue via HPA axis normalisation). All NutriLab doses match the ranges used in clinical trials.";
  }

  // GUT - PROBIOTIC
  if ((q.indexOf('gut') !== -1 || q.indexOf('digest') !== -1) && (q.indexOf('probiotic') !== -1 || q.indexOf('bacteria') !== -1 || q.indexOf('microbiome') !== -1)) {
    return "Our Probiotic formula contains 50 Billion CFU across multiple clinically studied strains including Lactobacillus acidophilus, Bifidobacterium longum, and Lactobacillus rhamnosus. Multi-strain formulas outperform single-strain products in clinical trials. The 50B CFU dose ensures enough bacteria survive the acidic stomach environment to colonise the large intestine effectively - many cheap brands use 5-10B CFU which is insufficient. We also pair it with Digestive Enzymes to maximise absorption.";
  }

  // GUT - GENERAL
  if (q.indexOf('gut') !== -1 || q.indexOf('digest') !== -1 || q.indexOf('bloat') !== -1 || q.indexOf('ibs') !== -1 || q.indexOf('stomach') !== -1) {
    return "Our Gut Health Stack draws from our 28-ingredient gut library, all confirmed Health Canada Schedule 1 NHPs. Core ingredients include: L-Glutamine (500-700mg, primary enterocyte fuel for gut barrier repair), Milk Thistle 80% (150-420mg, hepatoprotection and liver regeneration via silymarin), Ginger Root (250-500mg, 5-HT3 receptor antagonism for nausea and motility), DGL Deglycyrrhizinated Licorice (250-500mg, mucosal barrier repair), and Calcium Butyrate (150-300mg, colonocyte fuel and HDAC inhibition for epigenetic gut health). All addresses the gut-brain axis, not just surface symptoms.";
  }

  // IMMUNITY
  if (q.indexOf('immun') !== -1 || q.indexOf('sick') !== -1 || q.indexOf('cold') !== -1 || q.indexOf('flu') !== -1 || q.indexOf('infection') !== -1) {
    return "Our Immunity Stack draws from our 30-ingredient immune library. Top evidence-tier picks (all backed by multiple RCTs or systematic reviews): Beta-1,3-Glucans (250-500mg, Dectin-1 macrophage and NK cell activation), Quercetin 95% (500-700mg, NF-kB inhibition plus zinc ionophore plus antiviral triple mechanism), Elderberry 10% (200-500mg, viral hemagglutinin inhibition - direct antiviral), Andrographis 10% (100-300mg, reduces cold and flu duration via NF-kB inhibition), and Vitamin D3 (1,000-4,000 IU, master immune gene expression regulator). Every ingredient is a confirmed Health Canada Schedule 1 NHP.";
  }

  // LION'S MANE
  if (q.indexOf("lion") !== -1 || q.indexOf('hericium') !== -1 || q.indexOf('mushroom') !== -1 || q.indexOf('cognitive') !== -1 || q.indexOf('memory') !== -1) {
    return "Our Lion's Mane 40% extract (500-1,000mg) contains the highest potency standardisation available. Its hericenones and erinacines cross the blood-brain barrier and stimulate Nerve Growth Factor (NGF) synthesis - supporting neuronal growth and neuroplasticity. A 2025 double-blind RCT found significant improvements in cognition and mood in healthy younger adults. Pairs excellently with Alpha GPC and Bacopa 45% in our Cognitive Stack.";
  }

  // OMEGA-3
  if (q.indexOf('omega') !== -1 || q.indexOf('fish oil') !== -1 || q.indexOf('dha') !== -1 || q.indexOf('epa') !== -1 || q.indexOf('inflam') !== -1) {
    return "Omega-3 DHA/EPA is one of the most extensively researched supplements in existence. At 2g per day, it significantly reduces inflammatory markers (CRP, IL-6), supports brain structure and function (DHA is a structural component of neuronal membranes), benefits cardiovascular health, and improves gut barrier integrity. We use molecularly distilled fish oil to remove heavy metals and PCBs. Critically important if you eat limited oily fish.";
  }

  // VITAMIN D
  if (q.indexOf('vitamin d') !== -1 || q.indexOf('vit d') !== -1 || q.indexOf('d3') !== -1 || q.indexOf('k2') !== -1 || q.indexOf('sunshine') !== -1) {
    return "Vitamin D3 plus K2 is one of the most important combinations in our catalogue. D3 at 5000 IU supports immune cell activation, mood regulation (low D is strongly linked to depression), calcium absorption, and bone density. K2 at 100mcg MK-7 form is the critical co-factor - it activates proteins that direct calcium to bones and teeth rather than arteries, preventing arterial calcification. Studies estimate 40-50% of people in North America and the UK are deficient, especially in winter.";
  }

  // CoQ10
  if (q.indexOf('coq10') !== -1 || q.indexOf('coenzyme') !== -1 || q.indexOf('ubiquinol') !== -1 || q.indexOf('mitochondr') !== -1) {
    return "We use Kaneka Ubiquinol - the gold-standard ubiquinol CoQ10 sourced from the original Japanese fermentation manufacturer. At 100-200mg with food, it directly supports Complex I/II of the mitochondrial electron transport chain. CoQ10 declines with age and is severely depleted by statin medications. Clinical studies show improvements in energy, cardiac output, and antioxidant status. Fat-soluble - always take with a meal.";
  }

  // L-THEANINE
  if (q.indexOf('theanine') !== -1 || q.indexOf('l-theanine') !== -1 || q.indexOf('calm focus') !== -1 || q.indexOf('alpha wave') !== -1) {
    return "L-Theanine is an amino acid found naturally in green tea. At 200mg, it promotes alpha brain wave activity - the same relaxed, focused state experienced during meditation. It is the only supplement with clinical evidence of improving focus and calm simultaneously, without sedation. Particularly effective when paired with low-dose caffeine (the classic clean focus stack). It also takes the edge off anxiety without impairing performance - ideal for high-stress work days or exam periods.";
  }

  // REISHI
  if (q.indexOf('reishi') !== -1 || q.indexOf('ganoderma') !== -1 || q.indexOf('adaptogen') !== -1) {
    return "Reishi mushroom (Ganoderma lucidum) is one of the most studied medicinal mushrooms, used in East Asian medicine for over 2,000 years. Its bioactive beta-glucans modulate immune response - enhancing it when under-active, calming it when over-active. Clinical studies show benefits for sleep quality, stress resilience, and immune function. We use 500mg of a standardised extract before bed - it pairs beautifully with Magnesium Glycinate for sleep depth.";
  }

  // ZINC
  if (q.indexOf('zinc') !== -1 || q.indexOf('copper') !== -1) {
    return "Zinc is one of the most critical micronutrients for immune function - it is required for T-cell development, antiviral activity, and wound healing. We dose at 25mg zinc alongside 2mg copper, because high-dose zinc supplementation without copper can cause copper deficiency over time. This ratio reflects the most evidence-based approach. Zinc also supports skin health, hormonal balance (particularly testosterone), and cognitive function. Deficiency is common in vegetarians, athletes, and those who drink alcohol regularly.";
  }

  // B-COMPLEX
  if (q.indexOf('b vitamin') !== -1 || q.indexOf('b complex') !== -1 || q.indexOf('b12') !== -1 || q.indexOf('b6') !== -1 || q.indexOf('b-complex') !== -1 || q.indexOf('folate') !== -1) {
    return "Our B-Complex covers the full spectrum: B1, B2, B3, B5, B6, B7, B9 (folate), and B12. B vitamins are co-enzymes for energy metabolism - without them, you cannot effectively convert food into ATP. B12 deficiency is extremely common in vegans and older adults, and causes fatigue, brain fog, and nerve damage. B6 is critical for serotonin and dopamine synthesis. We use active, bioavailable forms - not the cheap synthetic versions used in most supermarket brands.";
  }

  // PROBIOTICS
  if (q.indexOf('probiotic') !== -1 || q.indexOf('prebiotic') !== -1 || q.indexOf('lactobacillus') !== -1 || q.indexOf('microbiome') !== -1) {
    return "Our 50 Billion CFU Probiotic uses multiple clinically studied strains including Lactobacillus acidophilus, Bifidobacterium longum, and Lactobacillus rhamnosus GG. The 50B CFU dose is critical: most bacteria are destroyed by stomach acid, so a high CFU count ensures sufficient live bacteria reach the intestine. The gut microbiome directly influences mood via the gut-brain axis, immunity, energy extraction from food, and inflammation levels.";
  }

  // DIGESTIVE ENZYMES
  if (q.indexOf('enzyme') !== -1 || q.indexOf('bloat') !== -1 || q.indexOf('gas') !== -1 || q.indexOf('absorption') !== -1) {
    return "Digestive Enzymes help break down proteins (protease), fats (lipase), and carbohydrates (amylase and cellulase) more completely before they reach the large intestine. Incomplete digestion is a major cause of bloating, gas, and nutrient malabsorption. This is especially important as enzyme production naturally declines with age. We recommend taking them with each main meal. Paired with our probiotic, this creates a comprehensive gut support system.";
  }

  // VEGAN
  if (q.indexOf('vegan') !== -1 || q.indexOf('vegetarian') !== -1 || q.indexOf('plant-based') !== -1 || q.indexOf('plant based') !== -1) {
    return "Great news - we cater specifically for plant-based diets. Vegans are at higher risk of deficiency in B12, Vitamin D3, Omega-3 (EPA/DHA), and Zinc. We offer vegan-friendly versions of all our supplements including algae-sourced Omega-3 (instead of fish oil), vegan D3 from lichen, and methylcobalamin B12. Just mention your dietary preference in the quiz and your recommended stack will be entirely plant-based. No animal-derived capsules or ingredients.";
  }

  // SIDE EFFECTS / SAFETY
  if (q.indexOf('side effect') !== -1 || q.indexOf('safe') !== -1 || q.indexOf('danger') !== -1 || q.indexOf('risk') !== -1 || q.indexOf('interaction') !== -1 || q.indexOf('medication') !== -1) {
    return "Safety is central to everything we do - our MSc Pharmacology founder specifically chose ingredients with strong safety profiles. A few important notes: always consult your doctor if you are on medications (some supplements like Omega-3 can interact with blood thinners), magnesium at high doses can cause loose stools (we dose within the well-tolerated range), ashwagandha is not recommended during pregnancy, and vitamin D toxicity is possible at very high doses (our 5000 IU is safe for most adults). We never include stimulants, artificial fillers, or proprietary blends that hide doses.";
  }

  // QUIZ
  if (q.indexOf('quiz') !== -1 || q.indexOf('recommend') !== -1 || q.indexOf('where do i start') !== -1 || q.indexOf('what should i take') !== -1 || q.indexOf('get started') !== -1 || q.indexOf('personalised') !== -1 || q.indexOf('personalized') !== -1) {
    return "Our free quiz is the best starting point! It takes about 2 minutes - just 7 questions about your health priorities, sleep, diet, activity level, and budget. Our AI (built on our MSc Pharmacology founder's protocols) then builds your personalised stack with a full explanation of why each ingredient was selected. Click 'Take the Free Quiz' at the top of the page. You will see your exact recommended package and price before committing to anything.";
  }

  // PRICING
  if (q.indexOf('price') !== -1 || q.indexOf('cost') !== -1 || q.indexOf('how much') !== -1 || q.indexOf('expensive') !== -1 || q.indexOf('affordable') !== -1 || q.indexOf('dollar') !== -1) {
    return "NutriLab packages are priced based on your personalised stack: Essential Stack $50-70 per month (3-4 core supplements), Optimised Stack $70-100 per month (5-6 supplements), and Premium Stack $100-120 per month (comprehensive formula). All include free shipping and a full 30-day supply. You choose your budget in the quiz and we build the best possible stack within it. Cancel anytime - no contracts or penalties.";
  }

  // SHIPPING
  if (q.indexOf('ship') !== -1 || q.indexOf('deliver') !== -1 || q.indexOf('arrive') !== -1 || q.indexOf('tracking') !== -1) {
    return "We offer free shipping on all subscriptions! Your first box ships within 2 business days of your order being confirmed. Subsequent boxes ship automatically each month on the same date. You will receive an email with your tracking number as soon as it ships. We ship across North America with standard delivery taking 3-7 business days.";
  }

  // CANCEL / SUBSCRIPTION
  if (q.indexOf('cancel') !== -1 || q.indexOf('pause') !== -1 || q.indexOf('stop') !== -1 || q.indexOf('subscription') !== -1 || q.indexOf('contract') !== -1 || q.indexOf('commitment') !== -1) {
    return "No contracts, no lock-ins, no cancellation fees. You can cancel, pause, or modify your NutriLab subscription anytime through your account dashboard or by contacting us. We bill monthly and ship automatically. Many customers choose to pause rather than cancel when travelling - your formula stays saved and ready to restart.";
  }

  // FOUNDER / SCIENCE / CREDIBILITY
  if (q.indexOf('founder') !== -1 || q.indexOf('msc') !== -1 || q.indexOf('pharmacology') !== -1 || q.indexOf('science') !== -1 || q.indexOf('research') !== -1 || q.indexOf('clinical') !== -1 || q.indexOf('evidence') !== -1 || q.indexOf('legit') !== -1 || q.indexOf('trust') !== -1) {
    return "NutriLab was built by an MSc Pharmacology graduate frustrated by an industry full of underdosed, overhyped products. Our library covers 172 ingredients across 11 health categories - all confirmed Health Canada Schedule 1 Natural Health Products. Every ingredient is: (1) Selected based on peer-reviewed RCTs or systematic reviews, (2) Evidence-ranked from multiple RCTs/meta-analyses to strong mechanistic support, (3) Dosed at clinically effective ranges with documented mechanisms of action, and (4) Sourced with certificates of analysis for purity. No proprietary blends. No hidden doses.";
  }

  // COMPARE / BETTER THAN OTHERS
  if (q.indexOf('better than') !== -1 || q.indexOf('compare') !== -1 || q.indexOf('other brand') !== -1 || q.indexOf('pharmacy') !== -1 || q.indexOf('supermarket') !== -1 || q.indexOf('amazon') !== -1) {
    return "Most supermarket supplements have three core failures: (1) Underdosing - they use the minimum needed to print a claim, not the therapeutic range used in clinical trials. (2) Poor ingredient forms - magnesium oxide instead of glycinate, folic acid instead of 5-MTHF Quatrefolic, ubiquinone instead of Kaneka Ubiquinol, synthetic vitamin B2 instead of Riboflavin-5-Phosphate. (3) Zero personalisation - everyone gets the same formula regardless of their biology and concerns. NutriLab fixes all three: 172 evidence-ranked NHP ingredients, premium standardised forms, and AI-personalised stacks built on MSc Pharmacology protocols.";
  }

  // HOW LONG TO SEE RESULTS
  if (q.indexOf('how long') !== -1 || q.indexOf('when will') !== -1 || q.indexOf('results') !== -1 || q.indexOf('take effect') !== -1 || q.indexOf('notice') !== -1) {
    return "It depends on the supplement and your starting point. L-Theanine - effects felt within 30-60 minutes. Magnesium - most people notice better sleep within 1-2 weeks. Ashwagandha - stress and cortisol improvements typically appear at 4-8 weeks (studies use 60-day periods). Probiotics - gut changes begin within days but meaningful microbiome shifts take 4-6 weeks. Vitamin D - takes 2-3 months to meaningfully raise blood levels. CoQ10 - energy improvements typically noticed at 4-6 weeks. Consistency is key.";
  }

  // WEIGHT LOSS
  if (q.indexOf('weight') !== -1 || q.indexOf('fat loss') !== -1 || q.indexOf('slim') !== -1 || q.indexOf('metabolism') !== -1) {
    return "We do not sell weight loss supplements - and that is intentional. The vast majority of products marketed for weight loss have no meaningful clinical evidence. What we do offer that supports healthy metabolism: B-Complex (energy metabolism), CoQ10 (mitochondrial efficiency), Omega-3 (reduces metabolic inflammation), Magnesium (insulin sensitivity), and Ashwagandha (reduces cortisol-driven fat storage). These support your body's metabolic function from the inside out.";
  }

  // HAIR / SKIN
  if (q.indexOf('hair') !== -1 || q.indexOf('skin') !== -1 || q.indexOf('nail') !== -1 || q.indexOf('collagen') !== -1 || q.indexOf('biotin') !== -1) {
    return "For skin, hair, and nail health, the underlying science points to: Zinc (supports keratin production and wound healing), B-Complex including Biotin (supports keratin structure), Omega-3 (reduces skin inflammation, supports the lipid barrier), and Vitamin D (skin cell turnover and immune function in the skin). Rather than isolated beauty supplements, we address the nutritional foundations that actually support healthy hair and skin from within.";
  }

  // TESTOSTERONE / MEN'S HEALTH
  if (q.indexOf('testosterone') !== -1 || q.indexOf('libido') !== -1 || q.indexOf('male health') !== -1) {
    return "Several ingredients in our catalogue have clinical evidence for supporting male hormonal health. Ashwagandha KSM-66 has been shown in RCTs to significantly increase testosterone levels in men, reduce cortisol (which suppresses testosterone), and improve reproductive parameters. Zinc is a direct cofactor in testosterone synthesis - deficiency reliably lowers T levels. Vitamin D3 acts as a steroid hormone precursor. These are evidence-based nutritional supports for normal hormonal function.";
  }

  // WOMEN'S HEALTH
  if (q.indexOf('women') !== -1 || q.indexOf('female') !== -1 || q.indexOf('menopaus') !== -1 || q.indexOf('pms') !== -1 || q.indexOf('period') !== -1 || q.indexOf('hormonal') !== -1) {
    return "Women have specific nutritional needs that change across the lifespan. For PMS and hormonal balance: Magnesium reduces PMS symptoms including cramping and mood changes (well-evidenced), B6 supports progesterone synthesis and mood, and Omega-3 reduces prostaglandin-driven cramping. For perimenopause and menopause: Vitamin D3 plus K2 is critical for bone density as oestrogen falls, and Ashwagandha helps with stress, sleep, and mood during the transition. Our quiz takes your life stage into account.";
  }

  // ATHLETES / EXERCISE
  if (q.indexOf('workout') !== -1 || q.indexOf('exercise') !== -1 || q.indexOf('gym') !== -1 || q.indexOf('athlete') !== -1 || q.indexOf('sport') !== -1 || q.indexOf('muscle') !== -1 || q.indexOf('recovery') !== -1) {
    return "For active people and athletes, we focus on recovery and performance at the cellular level: CoQ10 Ubiquinol 200mg (supports mitochondrial energy during exercise), Magnesium Glycinate 400mg (reduces muscle cramps, supports recovery and sleep quality), Omega-3 DHA/EPA 2g (reduces exercise-induced inflammation and DOMS), Ashwagandha KSM-66 (studies show improved VO2 max, strength, and recovery in athletes), and Zinc (supports testosterone and immune function, depleted heavily through sweat).";
  }

  // OLDER ADULTS / AGEING
  if (q.indexOf('older') !== -1 || q.indexOf('ageing') !== -1 || q.indexOf('aging') !== -1 || q.indexOf('senior') !== -1 || q.indexOf('elderly') !== -1 || q.indexOf('anti-age') !== -1) {
    return "As we age, several key changes increase nutrient needs: CoQ10 synthesis declines after 40, Vitamin D3 absorption decreases, B12 absorption drops significantly (a common cause of cognitive decline in older adults), Magnesium depletion accelerates, and gut microbiome diversity reduces. Our approach for healthy ageing prioritises CoQ10 Ubiquinol, high-dose D3 plus K2, methylcobalamin B12, Omega-3 for brain health, and Lion's Mane for neuroprotection - all at evidence-based doses.";
  }

  // REFUND / RETURN
  if (q.indexOf('refund') !== -1 || q.indexOf('return') !== -1 || q.indexOf('money back') !== -1 || q.indexOf('guarantee') !== -1 || q.indexOf('not happy') !== -1) {
    return "We stand behind our formulas. If you are not satisfied with your first month, reach out to us and we will work with you to either adjust your formula or arrange a refund. We genuinely believe in what we have built - if it is not working for you, we want to understand why and make it right.";
  }

  // THANK YOU
  if (q.indexOf('thank') !== -1 || q.indexOf('thanks') !== -1 || q.indexOf('cheers') !== -1 || q.indexOf('helpful') !== -1 || q.indexOf('great') !== -1) {
    return "You are very welcome! That is what I am here for. If you have any more questions - about specific ingredients, your health goals, or anything else - just ask. And when you are ready, our free quiz is the best next step: it takes 2 minutes and gives you a fully personalised supplement recommendation.";
  }

  // DEFAULT
  // FILLERS / CAPSULES / ALLERGIES
  if (q.indexOf('filler') !== -1 || q.indexOf('binder') !== -1 || q.indexOf('capsule') !== -1 || q.indexOf('unknown') !== -1 || q.indexOf('excipient') !== -1 || q.indexOf('artificial') !== -1 || q.indexOf('coating') !== -1) {
    return "This is one of the biggest problems in the supplement industry — and a core reason NutriLab was founded. Most commercial supplements pack their capsules with fillers like magnesium stearate, silicon dioxide, titanium dioxide, and artificial coatings that never appear on the front label. Many of these contain hidden allergens including gluten, soy, dairy, and shellfish derivatives. Third-party testing regularly finds unlisted substances and contaminants in popular brands. NutriLab formulas are compounded fresh by CompoundIt Pharmacy with absolutely zero fillers, zero binders, and zero unknown substances. You receive a certificate of analysis for every ingredient. What is in your formula is exactly and only what you see — nothing else.";
  }

  // ALLERGY / ALLERGENS
  if (q.indexOf('allerg') !== -1 || q.indexOf('gluten') !== -1 || q.indexOf('soy') !== -1 || q.indexOf('dairy') !== -1 || q.indexOf('shellfish') !== -1 || q.indexOf('nut') !== -1 || q.indexOf('intoleran') !== -1) {
    return "Allergy safety is something we take extremely seriously. Most commercial supplements use fillers and binders that contain hidden allergens — gluten, soy, dairy derivatives, shellfish, and tree nuts — none of which are disclosed on the front label. Because NutriLab formulas are freshly compounded by our licensed pharmacy with no fillers or binders, there are no hidden excipients and no cross-contamination from unrelated ingredients. If you have specific allergy concerns, please mention them when taking the quiz and our pharmacist will review your formula accordingly before preparation.";
  }

  // CERTIFICATE OF ANALYSIS / COA / PURITY / TESTING
  if (q.indexOf('certificate') !== -1 || q.indexOf('coa') !== -1 || q.indexOf('test') !== -1 || q.indexOf('purity') !== -1 || q.indexOf('contamin') !== -1 || q.indexOf('third party') !== -1 || q.indexOf('third-party') !== -1) {
    return "Every ingredient in your NutriLab formula comes from suppliers who provide a certificate of analysis (COA) confirming purity, potency, and the absence of contaminants. Unlike brands that rely on manufacturer claims, we require documented proof for every ingredient we use. This is part of our pharmacist-reviewed compounding process at CompoundIt Pharmacy — a Health Canada licensed NHP compounding facility.";
  }

  return "That is a great question! Feel free to ask me about any specific ingredient, health goal, or how our subscriptions work. I cover everything from the science behind our formulas to pricing and delivery. Or click 'Take the Free Quiz' at the top - our MSc Pharmacology founder designed it to give you a fully personalised supplement recommendation in just 2 minutes.";
}

function toggleChat() {
  const win = document.getElementById('chat-window');
  const iconOpen = document.getElementById('chat-icon-open');
  const iconClose = document.getElementById('chat-icon-close');
  const isOpen = win.style.display === 'flex';
  win.style.display = isOpen ? 'none' : 'flex';
  iconOpen.style.display = isOpen ? 'block' : 'none';
  iconClose.style.display = isOpen ? 'none' : 'block';
  if (!isOpen) document.getElementById('chat-input').focus();
}

function getBotReply(text) {
  const q = text.toLowerCase().trim();

  // ── GREETINGS ──
  if (/^(hi|hello|hey|yo|sup|hiya|good morning|good afternoon|good evening|howdy)[\s!?.]*$/.test(q)) {
    return "Hey there! Welcome to NutriLab I'm your personal wellness advisor, founded on MSc Pharmacology expertise. Whether you have questions about specific ingredients, your health goals, how our subscriptions work, or want to understand the science behind our formulas — I'm here. What's on your mind?";
  }

  // ── WHAT CAN YOU DO / HELP ──
  if (q.includes("what can you") || q.includes("what do you do") || q.includes("how can you help") || q.includes("what are you")) {
    return "I am NutriLab's AI wellness advisor. I can help you understand what specific supplements do and the science behind them, find the right stack for your health goals (energy, sleep, stress, gut, immunity), explain how our formulas are developed by our MSc Pharmacology founder, and answer questions about pricing, delivery, and subscriptions. What would you like to know?";
  }

  // ── MAGNESIUM ──
  if (q.includes("magnesium")) {
    if (q.includes("dose") || q.includes("how much") || q.includes("amount") || q.includes("mg")) {
      return "The clinically effective dose for Magnesium Glycinate is 300–400mg of elemental magnesium daily. A 2024 randomised controlled trial used 250mg elemental magnesium + 1,523mg glycine daily and found statistically significant improvements in insomnia severity scores within 14 days. We use 400mg in our formulas — within the evidence-based range and gentle on digestion.";
    }
    if (q.includes("sleep") || q.includes("insomnia")) {
      return "Magnesium is one of the best-studied supplements for sleep. It works by enhancing GABAergic transmission (your brain's 'calm down' signal), antagonising excitatory NMDA receptors, and supporting melatonin synthesis. A 2024 systematic review found that 5 out of 8 studies showed improvements in sleep parameters with magnesium supplementation. The glycinate form is preferred — it's the most bioavailable and has a synergistic calming effect from glycine itself.";
    }
    if (q.includes("anxi") || q.includes("stress") || q.includes("mood")) {
      return "Magnesium plays a key role in regulating neurotransmitters involved in stress and mood — including serotonin production and NMDA receptor activity. A 2024 systematic review (Rawji et al.) found that the majority of included trials showed at least modest positive results for anxiety and sleep. It's particularly effective for people with low baseline magnesium, which affects nearly 50% of the population due to modern diets.";
    }
    return "Magnesium Glycinate is one of our most important ingredients. It's involved in over 300 enzymatic reactions in the body and is critical for sleep, stress, muscle function, and energy metabolism. We use the glycinate form specifically — it's the most bioavailable and gentlest on the stomach, unlike magnesium oxide which has poor absorption, or citrate which can cause loose stools. Clinical trials consistently show improvements in sleep quality and anxiety with 250–400mg daily.";
  }

  // ── ASHWAGANDHA ──
  if (q.includes("ashwagandha") || q.includes("ksm") || q.includes("ksm-66") || q.includes("withania")) {
    if (q.includes("cortisol") || q.includes("stress")) {
      return "KSM-66 Ashwagandha has some of the strongest clinical evidence for cortisol reduction of any natural supplement. In a landmark double-blind, placebo-controlled RCT (Chandrasekhar et al.), 600mg/day for 60 days produced a statistically significant reduction in serum cortisol (p=0.0006) and stress scores across all three validated scales (PSS, DASS, GHQ-28) — with a 44–72% reduction in stress scores compared to placebo. No serious adverse events were reported.";
    }
    if (q.includes("sleep")) {
      return "KSM-66 Ashwagandha significantly improves sleep quality — not just stress. In an 8-week RCT of 80 adults (including those with insomnia), 600mg/day KSM-66 improved sleep onset latency, total sleep time, sleep efficiency, and perceived anxiety. The NIH provisionally recommends specific daily doses of ashwagandha root extract for anxiety based on this growing body of evidence.";
    }
    if (q.includes("energy") || q.includes("cognitive") || q.includes("focus") || q.includes("cognit")) {
      return "A 2024 prospective RCT (600mg KSM-66 for 8 weeks) found significant improvements in cognitive function including memory, information processing speed, and executive function — as well as reductions in mental fatigue. Ashwagandha works partly by lowering stress hormones that interfere with cognitive performance, and partly through direct neuroprotective mechanisms.";
    }
    return "Ashwagandha KSM-66 is our flagship adaptogen — and the most clinically studied form of ashwagandha. KSM-66 is extracted only from the root using a patented green chemistry process, standardised to ≥5% withanolides. It has over 24 clinical studies behind it showing benefits for stress, cortisol, sleep, energy, and cognitive performance. We use 600mg/day — the dose most consistently shown effective in peer-reviewed research.";
  }

  // ── STRESS / ANXIETY ──
  if (q.includes("stress") || q.includes("anxiet") || q.includes("overwhelm") || q.includes("burnout") || q.includes("cortisol") || q.includes("panic")) {
    return "For stress and anxiety, our Sleep & Calm Stack centres on: Ashwagandha KSM-66 (600mg — clinically proven to reduce cortisol by up to 30% in RCTs), L-Theanine (200mg — promotes alpha brain waves and calm focus without sedation), Magnesium Glycinate (400mg — regulates NMDA receptors and GABA activity), and Reishi Mushroom (500mg — adaptogenic and immune-modulating). Together these work on the HPA axis, nervous system, and neurotransmitter balance. Want to take the quiz for a personalised recommendation?";
  }

  // ── SLEEP ──
  if (q.includes("sleep") || q.includes("insomnia") || q.includes("can't sleep") || q.includes("wake up") || q.includes("tired in morning") || q.includes("melatonin")) {
    if (q.includes("melatonin")) {
      return "We don't include melatonin in our formulas by default. While melatonin can be useful for jet lag, it directly overrides your circadian rhythm and can reduce your body's natural melatonin production over time. Instead, our Sleep Stack works upstream — supporting the conditions your body needs to produce melatonin naturally (magnesium, ashwagandha for cortisol reduction) and calming neural excitability (L-Theanine, Reishi). This is a more sustainable long-term approach.";
    }
    return "For sleep, our approach is multi-layered and science-backed. The Sleep & Calm Stack typically includes: Magnesium Glycinate (400mg) — enhances GABA, supports melatonin synthesis Ashwagandha KSM-66 (600mg) — lowers cortisol that disrupts sleep onset L-Theanine (200mg) — promotes relaxing alpha brain waves Reishi Mushroom (500mg) — adaptogenic, supports deep sleep quality All four ingredients have clinical evidence behind them. Most people notice improvements within 2–4 weeks of consistent use.";
  }

  // ── ENERGY / FATIGUE ──
  if (q.includes("energy") || q.includes("fatigue") || q.includes("exhausted") || q.includes("tired") || q.includes("sluggish") || q.includes("low energy") || q.includes("afternoon crash")) {
    if (q.includes("caffeine") || q.includes("coffee")) {
      return "Unlike caffeine, which stimulates the adrenal system and can cause crashes and dependency, our energy formulas work at the cellular level. CoQ10 supports mitochondrial ATP production — your cell's actual energy currency. B-Complex fuels metabolic pathways that convert food into energy. Lion's Mane improves neural efficiency. And Ashwagandha reduces the cortisol drain that leaves you exhausted. Sustained, clean energy — no jitters, no crash.";
    }
    return "Persistent fatigue usually has a few root causes: mitochondrial inefficiency, nutrient gaps, or chronic stress hormones draining your reserves. Our Energy & Focus Stack addresses all three: CoQ10 Ubiquinol (200mg) — directly fuels mitochondrial energy production; levels decline with age B-Complex — essential for converting carbs, fats, and protein into usable energy Lion's Mane (500mg) — supports NGF and BDNF for sharper mental energy Ashwagandha KSM-66 (600mg) — reduces cortisol-driven fatigue All doses are at clinically meaningful ranges, not token label amounts.";
  }

  // ── GUT HEALTH ──
  if (q.includes("gut") || q.includes("digest") || q.includes("bloat") || q.includes("ibs") || q.includes("stomach") || q.includes("bowel") || q.includes("constipat") || q.includes("microbiome") || q.includes("probiotic")) {
    if (q.includes("probiotic") || q.includes("microbiome") || q.includes("bacteria")) {
      return "Our Probiotic formula contains 50 Billion CFU across multiple clinically studied strains including Lactobacillus acidophilus, Bifidobacterium longum, and Lactobacillus rhamnosus. Multi-strain formulas outperform single-strain products in clinical trials. The 50B CFU dose ensures enough bacteria survive the acidic stomach environment to colonise the large intestine effectively — many cheap brands use 5–10B CFU which is insufficient. We also pair it with Digestive Enzymes to maximise absorption.";
    }
    return "Gut health is foundational — it affects immunity (70% of immune cells live in the gut), mood (90% of serotonin is made there), and energy. Our Gut Health Stack includes: Probiotics 50B CFU (multi-strain) — restores microbiome diversity Digestive Enzymes — breaks down food more completely, reducing bloating Omega-3 DHA/EPA (2g) — reduces intestinal inflammation Vitamin D3 (5000 IU) — supports gut barrier integrity Our MSc Pharmacology founder selected these specifically because they address the gut-brain axis, not just surface symptoms.";
  }

  // ── IMMUNITY ──
  if (q.includes("immun") || q.includes("sick") || q.includes("cold") || q.includes("flu") || q.includes("infection") || q.includes("ill") || q.includes("defence") || q.includes("defense")) {
    return "For immunity, the evidence points clearly to a few key ingredients: Vitamin D3 5000 IU + K2 100mcg — up to 40% of people are deficient; D3 directly activates immune cells and the K2 ensures calcium goes to bones not arteries Zinc + Copper (25mg/2mg) — zinc is essential for T-cell production and antiviral defence; copper prevents depletion caused by zinc alone Omega-3 DHA/EPA (2g) — resolves inflammation and supports immune cell signalling Reishi Mushroom — beta-glucans modulate immune response without overstimulating All at clinically effective doses, not the minimums needed to appear on a label.";
  }

  // ── LION'S MANE ──
  if (q.includes("lion") || q.includes("lion's mane") || q.includes("hericium") || q.includes("mushroom") || q.includes("cognitive") || q.includes("memory") || q.includes("focus") || q.includes("brain fog")) {
    return "Lion's Mane (Hericium erinaceus) is remarkable for brain health. Its bioactive compounds — hericenones and erinacines — cross the blood-brain barrier and stimulate Nerve Growth Factor (NGF) and BDNF synthesis, which support neuronal growth, repair, and neuroplasticity. A 2025 double-blind RCT found significant improvements in cognition and mood in healthy younger adults. A 2024 review found that dietary patterns including mushrooms showed significant benefits for cognition and mood across multiple studies. We use 500mg of a high-potency fruiting body extract — the form with the most clinical evidence.";
  }

  // ── OMEGA-3 ──
  if (q.includes("omega") || q.includes("fish oil") || q.includes("dha") || q.includes("epa") || q.includes("inflam") || q.includes("omega-3") || q.includes("omega 3")) {
    return "Omega-3 DHA/EPA is one of the most extensively researched supplements in existence. At 2g/day, it significantly reduces inflammatory markers (CRP, IL-6), supports brain structure and function (DHA is a structural component of neuronal membranes), benefits cardiovascular health, and improves gut barrier integrity. We use molecularly distilled fish oil to remove heavy metals and PCBs. The DHA:EPA ratio matters — we prioritise higher DHA for cognitive benefits and higher EPA for inflammation. Critically important if you eat limited oily fish.";
  }

  // ── VITAMIN D ──
  if (q.includes("vitamin d") || q.includes("vitamin d3") || q.includes("vit d") || q.includes("sunshine") || q.includes("d3") || q.includes("k2")) {
    return "Vitamin D3 + K2 is one of the most important combinations in our catalogue. D3 at 5,000 IU supports immune cell activation, mood regulation (low D is strongly linked to depression), calcium absorption, and bone density. K2 (100mcg MK-7 form) is the critical co-factor — it activates proteins that direct calcium to bones and teeth rather than arteries, preventing arterial calcification. Studies estimate 40–50% of people in North America and the UK are deficient, especially in winter. This is foundational supplementation.";
  }

  // ── CoQ10 ──
  if (q.includes("coq10") || q.includes("coenzyme") || q.includes("ubiquinol") || q.includes("mitochondr")) {
    return "CoQ10 Ubiquinol is the active, reduced form of CoQ10 — about 8x more bioavailable than standard CoQ10 (ubiquinone). It's essential for mitochondrial ATP production — literally how your cells make energy. CoQ10 levels naturally decline with age and are depleted by statins (cholesterol medications). At 200mg/day of the ubiquinol form, clinical studies show improvements in energy levels, exercise performance, and cardiovascular markers. Particularly important for anyone over 40, athletes, or those taking statins.";
  }

  // ── L-THEANINE ──
  if (q.includes("theanine") || q.includes("l-theanine") || q.includes("calm") || q.includes("focus") || q.includes("alpha wave")) {
    return "L-Theanine is an amino acid found naturally in green tea. At 200mg, it promotes alpha brain wave activity — the same relaxed, focused state experienced during meditation. It's the only supplement with clinical evidence of improving focus and calm simultaneously, without sedation. Particularly effective when paired with low-dose caffeine (the classic 'clean focus' stack). It also takes the edge off anxiety without impairing performance — making it ideal for high-stress work days or exam periods.";
  }

  // ── REISHI ──
  if (q.includes("reishi") || q.includes("ganoderma") || q.includes("adaptogen")) {
    return "Reishi mushroom (Ganoderma lucidum) is one of the most studied medicinal mushrooms, used in East Asian medicine for over 2,000 years. Its bioactive beta-glucans modulate immune response — enhancing it when under-active, calming it when over-active. Clinical studies show benefits for sleep quality, stress resilience, and immune function. It's particularly useful for people with autoimmune tendencies or those who get frequent infections. We use 500mg of a standardised extract before bed — it pairs beautifully with Magnesium Glycinate for sleep depth.";
  }

  // ── ZINC ──
  if (q.includes("zinc") || q.includes("copper")) {
    return "Zinc is one of the most critical micronutrients for immune function — it's required for T-cell development, antiviral activity, and wound healing. We dose at 25mg zinc alongside 2mg copper, because high-dose zinc supplementation without copper can cause copper deficiency over time. This ratio reflects the most evidence-based approach. Zinc also supports skin health, hormonal balance (particularly testosterone), and cognitive function. Deficiency is common in vegetarians, athletes, and those who drink alcohol regularly.";
  }

  // ── B-COMPLEX ──
  if (q.includes("b vitamin") || q.includes("b complex") || q.includes("b12") || q.includes("b6") || q.includes("folate") || q.includes("b-complex")) {
    return "Our B-Complex covers the full spectrum: B1, B2, B3, B5, B6, B7, B9 (folate), and B12. B vitamins are co-enzymes for energy metabolism — without them, you cannot effectively convert food into ATP. B12 deficiency is extremely common in vegans, vegetarians, and older adults, and causes fatigue, brain fog, and nerve damage. B6 is critical for serotonin and dopamine synthesis. Folate (as methylfolate, not folic acid) supports DNA repair and methylation. We use active, bioavailable forms — not the cheap synthetic versions used in most supermarket brands.";
  }

  // ── PROBIOTICS ──
  if (q.includes("probiotic") || q.includes("prebiotic") || q.includes("lactobacillus") || q.includes("bifidobacterium") || q.includes("microbiome")) {
    return "Our 50 Billion CFU Probiotic uses multiple clinically studied strains — including Lactobacillus acidophilus, Bifidobacterium longum, and Lactobacillus rhamnosus GG. The 50B CFU dose is critical: most bacteria are destroyed by stomach acid, so a high CFU count ensures sufficient live bacteria reach the intestine. Multi-strain formulas address a broader range of gut health outcomes than single-strain products. The gut microbiome directly influences mood (via the gut-brain axis), immunity, energy extraction from food, and inflammation levels.";
  }

  // ── DIGESTIVE ENZYMES ──
  if (q.includes("enzyme") || q.includes("digest") || q.includes("bloat") || q.includes("gas") || q.includes("absorption")) {
    return "Digestive Enzymes help break down proteins (protease), fats (lipase), and carbohydrates (amylase and cellulase) more completely before they reach the large intestine. Incomplete digestion is a major cause of bloating, gas, and nutrient malabsorption. This is especially important as enzyme production naturally declines with age. We recommend taking them with each main meal. Paired with our probiotic, this creates a comprehensive gut support system — better breakdown at the top and better microbiome health at the bottom.";
  }

  // ── VEGAN / VEGETARIAN ──
  if (q.includes("vegan") || q.includes("vegetarian") || q.includes("plant") || q.includes("plant-based") || q.includes("animal free")) {
    return "Great news — we cater specifically for plant-based diets. Vegans are at higher risk of deficiency in B12, Vitamin D3, Omega-3 (EPA/DHA), Zinc, and Iron. We offer vegan-friendly versions of all our supplements including algae-sourced Omega-3 (instead of fish oil), vegan D3 from lichen, and methylcobalamin B12 in our B-Complex. Just mention your dietary preference in the quiz and your recommended stack will be entirely plant-based. No animal-derived capsules or ingredients.";
  }

  // ── SIDE EFFECTS / SAFETY ──
  if (q.includes("side effect") || q.includes("safe") || q.includes("danger") || q.includes("risk") || q.includes("harm") || q.includes("interaction") || q.includes("medication")) {
    return "Safety is central to everything we do — our MSc Pharmacology founder specifically chose ingredients with strong safety profiles. That said, a few important notes: Always consult your doctor if you're on medications — some supplements (e.g. Omega-3) can interact with blood thinners Magnesium at high doses can cause loose stools — we dose within the well-tolerated range Ashwagandha is not recommended during pregnancy Vitamin D toxicity is possible at very high doses — our 5,000 IU is safe for most adults but get tested if unsure We never include stimulants, artificial fillers, or proprietary blends that hide doses.";
  }

  // ── QUIZ ──
  if (q.includes("quiz") || q.includes("recommend") || q.includes("which supplement") || q.includes("where do i start") || q.includes("what should i take") || q.includes("get started") || q.includes("personalised") || q.includes("personalized")) {
    return "Our free quiz is the best starting point! It takes about 2 minutes — just 7 questions about your health priorities, sleep, diet, activity level, and budget. Our AI (built on our MSc Pharmacology founder's protocols) then builds your personalised stack with a full explanation of why each ingredient was selected. Click 'Take the Free Quiz' at the top of the page to get started. You'll see your exact recommended package and price before committing to anything.";
  }

  // ── PRICING ──
  if (q.includes("price") || q.includes("cost") || q.includes("how much") || q.includes("expensive") || q.includes("affordable") || q.includes("cheap") || q.includes("dollar") || q.includes("$") || q.includes("month")) {
    return "NutriLab packages are priced based on your personalised stack: Essential Stack: $50–$70/month (3–4 core supplements) Optimised Stack: $70–$100/month (5–6 supplements) Premium Stack: $100–$120/month (comprehensive formula) All include free shipping and a full 30-day supply. You choose your budget in the quiz and we build the best possible stack within it. Cancel anytime — no contracts, no penalties.";
  }

  // ── SHIPPING ──
  if (q.includes("ship") || q.includes("deliver") || q.includes("how long") || q.includes("when") || q.includes("arrive") || q.includes("tracking")) {
    return "We offer free shipping on all subscriptions! Your first box ships within 2 business days of your order being confirmed. Subsequent boxes ship automatically each month on the same date. You'll receive an email with your tracking number as soon as it ships. We ship across North America with standard delivery taking 3–7 business days.";
  }

  // ── CANCEL / SUBSCRIPTION ──
  if (q.includes("cancel") || q.includes("pause") || q.includes("stop") || q.includes("subscription") || q.includes("contract") || q.includes("commitment") || q.includes("lock")) {
    return "No contracts, no lock-ins, no cancellation fees. You can cancel, pause, or modify your NutriLab subscription anytime through your account dashboard or by contacting us. We bill monthly and ship automatically. Many customers choose to pause rather than cancel when travelling — your formula stays saved and ready to restart. We believe if you're not getting results, you shouldn't be paying.";
  }

  // ── FOUNDER / SCIENCE / CREDIBILITY ──
  if (q.includes("founder") || q.includes("msc") || q.includes("pharmacology") || q.includes("science") || q.includes("proof") || q.includes("research") || q.includes("clinical") || q.includes("evidence") || q.includes("legit") || q.includes("trust") || q.includes("real") || q.includes("genuine") || q.includes("credib")) {
    return "NutriLab was built out of frustration with an industry full of underdosed, overhyped supplements. Our founder holds an MSc in Pharmacology and spent years reviewing clinical literature before designing our formulas. Every ingredient is: Selected based on peer-reviewed RCT evidence (not animal studies or testimonials) Dosed at the range shown effective in clinical trials — not the minimum needed to appear on a label Sourced from suppliers who provide certificates of analysis for purity and potency Free from proprietary blends that hide how little of each ingredient you're actually getting This is what pharmacology training looks like applied to nutrition.";
  }

  // ── COMPARE / BETTER THAN OTHERS ──
  if (q.includes("better than") || q.includes("compare") || q.includes("vs") || q.includes("difference") || q.includes("other brand") || q.includes("pharmacy") || q.includes("supermarket") || q.includes("boots") || q.includes("holland") || q.includes("amazon")) {
    return "Most supermarket and pharmacy supplements have three major problems: (1) Doses are too low — they meet the legal minimum to make a claim but are below the therapeutic range in clinical studies. (2) Poor forms — magnesium oxide instead of glycinate, folic acid instead of methylfolate, ubiquinone instead of ubiquinol. (3) No personalisation — everyone gets the same generic multivitamin regardless of their specific needs. NutriLab solves all three: evidence-based doses, high-bioavailability forms, and a personalised stack designed around your actual health profile.";
  }

  // ── HOW LONG TO SEE RESULTS ──
  if (q.includes("how long") || q.includes("when will") || q.includes("results") || q.includes("work") || q.includes("take effect") || q.includes("notice")) {
    return "It depends on the supplement and your starting point, but here's a general guide: L-Theanine — effects felt within 30–60 minutes of taking it Magnesium — most people notice better sleep within 1–2 weeks Ashwagandha — stress and cortisol improvements typically appear at 4–8 weeks (studies use 60-day periods) Probiotics — gut changes begin within days but meaningful microbiome shifts take 4–6 weeks Vitamin D — takes 2–3 months to meaningfully raise blood levels CoQ10 — energy improvements typically noticed at 4–6 weeks Consistency is key — supplements work cumulatively, not overnight.";
  }

  // ── WEIGHT LOSS ──
  if (q.includes("weight") || q.includes("fat") || q.includes("lose") || q.includes("slim") || q.includes("metabolism")) {
    return "We don't sell weight loss supplements — and that's intentional. The vast majority of products marketed for weight loss have no meaningful clinical evidence, or work only in ways that aren't sustainable. What we do offer that supports healthy metabolism: B-Complex (energy metabolism), CoQ10 (mitochondrial efficiency), Omega-3 (reduces metabolic inflammation), Magnesium (insulin sensitivity), and Ashwagandha (reduces cortisol-driven fat storage). These support your body's metabolic function from the inside out.";
  }

  // ── HAIR / SKIN / NAILS ──
  if (q.includes("hair") || q.includes("skin") || q.includes("nail") || q.includes("collagen") || q.includes("biotin")) {
    return "For skin, hair, and nail health, the underlying science points to a few key areas: Zinc (supports keratin production and wound healing), B-Complex including Biotin (supports keratin structure — though biotin is often overhyped for those not deficient), Omega-3 (reduces skin inflammation, supports the lipid barrier), and Vitamin D (skin cell turnover and immune function in the skin). Rather than isolated beauty supplements, we address the nutritional foundations that actually support healthy hair and skin from within.";
  }

  // ── TESTOSTERONE / HORMONES ──
  if (q.includes("testosterone") || q.includes("hormone") || q.includes("libido") || q.includes("men") || q.includes("male")) {
    return "Several ingredients in our catalogue have clinical evidence for supporting male hormonal health: Ashwagandha KSM-66 has been shown in RCTs to significantly increase testosterone levels in men, reduce cortisol (which suppresses testosterone), and improve reproductive parameters. Zinc is a direct cofactor in testosterone synthesis — deficiency reliably lowers T levels. Vitamin D3 acts as a steroid hormone precursor. Omega-3 supports Leydig cell function. These aren't 'testosterone boosters' in the marketing sense — they're evidence-based nutritional support for normal hormonal function.";
  }

  // ── WOMEN'S HEALTH / MENOPAUSE / PMS ──
  if (q.includes("women") || q.includes("female") || q.includes("menopaus") || q.includes("pms") || q.includes("period") || q.includes("hormonal") || q.includes("oestrogen") || q.includes("estrogen")) {
    return "Women have specific nutritional needs that change across the lifespan. For PMS and hormonal balance: Magnesium reduces PMS symptoms including cramping and mood changes (well-evidenced). B6 supports progesterone synthesis and mood. Omega-3 reduces prostaglandin-driven cramping. For perimenopause/menopause: Vitamin D3+K2 is critical for bone density as oestrogen falls. Ashwagandha helps with stress, sleep, and mood during the transition. Our quiz takes your life stage into account when building your personalised formula.";
  }

  // ── ATHLETES / EXERCISE ──
  if (q.includes("workout") || q.includes("exercise") || q.includes("gym") || q.includes("athlete") || q.includes("sport") || q.includes("muscle") || q.includes("recovery") || q.includes("performance")) {
    return "For active people and athletes, we focus on recovery and performance at the cellular level: CoQ10 Ubiquinol (200mg) — supports mitochondrial energy during exercise Magnesium Glycinate (400mg) — reduces muscle cramps, supports recovery and sleep quality Omega-3 DHA/EPA (2g) — reduces exercise-induced inflammation and DOMS Ashwagandha KSM-66 — studies show improved VO2 max, strength, and recovery in athletes Zinc — supports testosterone and immune function, depleted heavily through sweat These aren't performance-enhancing drugs — they're ensuring your body has the nutritional foundation to perform and recover optimally.";
  }

  // ── OLDER ADULTS / AGEING ──
  if (q.includes("older") || q.includes("ageing") || q.includes("aging") || q.includes("senior") || q.includes("elderly") || q.includes("60") || q.includes("70") || q.includes("anti-age")) {
    return "As we age, several key changes happen that increase nutrient needs: CoQ10 synthesis declines after 40 (energy and cardiovascular health), Vitamin D3 absorption decreases and skin synthesis falls, B12 absorption drops significantly (common cause of cognitive decline in older adults), Magnesium depletion accelerates, and the gut microbiome diversity reduces. Our approach for healthy ageing prioritises CoQ10 Ubiquinol, high-dose D3+K2, methylcobalamin B12, Omega-3 for brain health, and Lion's Mane for neuroprotection — all at evidence-based doses.";
  }

  // ── WHAT'S IN THE PACKAGE / WHAT'S INCLUDED ──
  if (q.includes("what's in") || q.includes("what is in") || q.includes("included") || q.includes("contents") || q.includes("package contain") || q.includes("box contain")) {
    return "Your NutriLab package is completely personalised based on your quiz answers. There's no one-size-fits-all formula here. Depending on your health goals, your box will typically contain 3–6 different supplements as individual daily packets, a guide explaining what each supplement does and when to take it, and a QR code linking to the clinical studies behind your specific formula. Everything is pre-sorted into daily portions — just grab a packet each morning and you're done.";
  }

  // ── RETURN / REFUND ──
  if (q.includes("refund") || q.includes("return") || q.includes("money back") || q.includes("guarantee") || q.includes("dissatisfied") || q.includes("not happy")) {
    return "We stand behind our formulas. If you're not satisfied with your first month, reach out to us and we'll work with you to either adjust your formula or arrange a refund. We genuinely believe in what we've built — if it's not working for you, we want to understand why and make it right. Your feedback also helps us improve our recommendation algorithm over time.";
  }

  // ── THANK YOU ──
  if (q.includes("thank") || q.includes("thanks") || q.includes("cheers") || q.includes("helpful") || q.includes("great")) {
    return "You're very welcome! That's what I'm here for. If you have any more questions — about specific ingredients, your health goals, or anything else — just ask. And when you're ready, our free quiz is the best next step: it takes 2 minutes and gives you a fully personalised supplement recommendation.";
  }

  // ── DEFAULT ──
  return "That's a great question! I want to give you the most accurate answer, and for specifics like that, our personalised quiz is the best starting point — it's designed by our MSc Pharmacology founder and takes just 2 minutes. That said, feel free to ask me about any specific ingredient, health goal, or how our subscriptions work. I cover everything from the science behind our formulas to pricing and delivery. What would you like to know more about?";
}
function sendChat() {
  const input = document.getElementById('chat-input');
  const messages = document.getElementById('chat-messages');
  const text = input.value.trim();
  if (!text) return;

  const userMsg = document.createElement('div');
  userMsg.className = 'msg-user';
  userMsg.textContent = text;
  messages.appendChild(userMsg);
  input.value = '';
  messages.scrollTop = messages.scrollHeight;

  const typing = document.createElement('div');
  typing.className = 'msg-typing';
  typing.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
  messages.appendChild(typing);
  messages.scrollTop = messages.scrollHeight;

  setTimeout(() => {
    typing.remove();
    const reply = getBotReply(text);
    const aiMsg = document.createElement('div');
    aiMsg.className = 'msg-ai';
    aiMsg.style.whiteSpace = 'pre-line';
    aiMsg.textContent = reply;
    messages.appendChild(aiMsg);
    messages.scrollTop = messages.scrollHeight;
  }, 900 + Math.random() * 600);
}
