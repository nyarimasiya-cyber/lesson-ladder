/* Grade 9 Natural Sciences, Terms 2–3 (Electric circuits is in content-extra/content.js). */
TOPICS.push(
/* ===== Term 2: Matter and materials ===== */
{id:"g9-ns-compounds",grade:9,term:2,subject:"ns",strand:"Matter & materials",title:"Compounds",
notes:`<h2>Elements, compounds and mixtures</h2>
<div class="tbl"><table><tr><th></th><th>What it is</th><th>Example</th></tr>
<tr><td>Element</td><td>One kind of atom only</td><td>Iron (Fe), oxygen (O₂)</td></tr>
<tr><td>Compound</td><td>Two or more different elements <b>chemically joined</b> in a fixed ratio</td><td>Water (H₂O), salt (NaCl)</td></tr>
<tr><td>Mixture</td><td>Substances mixed but <b>not</b> chemically joined; can be separated physically</td><td>Salt water, air, sand and iron filings</td></tr></table></div>
<h2>Chemical formulas</h2>
<p>A formula shows which elements are in a compound and how many atoms of each. In <b>CO₂</b>: 1 carbon and 2 oxygen atoms. In <b>CaCO₃</b> (calcium carbonate): 1 Ca, 1 C and 3 O, so 5 atoms in total.</p>
<h2>Naming simple compounds</h2>
<ul><li>A metal and a non-metal: name the metal first, and the non-metal ends in <b>-ide</b>. NaCl = sodium chlor<b>ide</b>; MgO = magnesium ox<b>ide</b>.</li>
<li>Compounds with oxygen and another element are called <b>oxides</b>.</li></ul>
<h2>New properties</h2>
<div class="key">A compound has different properties from the elements it's made of. Sodium is a reactive metal and chlorine is a poisonous gas, but together they form table salt.</div>`,
qs:[
{q:"A compound is…",o:["two or more different elements chemically joined","one kind of atom","a physical mixture","always a metal"],a:0,e:"The elements are bonded together."},
{q:"Which is a compound?",o:["H₂O","Fe","O₂","Cu"],a:0,e:"Water contains hydrogen and oxygen."},
{q:"Which is a mixture?",o:["Salt water","Sodium chloride","Water","Carbon dioxide"],a:0,e:"The salt and water are not chemically joined."},
{q:"How many oxygen atoms are in CO₂?",o:["2","1","3","0"],a:0,e:"The subscript 2."},
{q:"How many atoms in total are in CaCO₃?",o:["5","3","4","6"],a:0,e:"1 + 1 + 3."},
{q:"What is the name of NaCl?",o:["Sodium chloride","Sodium chlorine","Nitrogen chloride","Salt oxide"],a:0,e:"The non-metal ends in -ide."},
{q:"What is the name of MgO?",o:["Magnesium oxide","Magnesium oxygen","Manganese oxide","Magnet oxide"],a:0,e:"Oxygen becomes oxide."},
{q:"How can a mixture be separated?",o:["By physical methods, such as filtering or evaporating","Only by chemical reactions","It can't","By naming it"],a:0,e:"Its parts are not chemically joined."},
{q:"Sodium is a reactive metal and chlorine is a poisonous gas. Together they form…",o:["table salt, which is safe to eat","a more poisonous gas","pure sodium","water"],a:0,e:"Compounds have new properties."},
{q:"An element contains…",o:["only one kind of atom","two kinds of atoms","only molecules of water","only electrons"],a:0,e:"For example, pure iron."}],
pq:[
{q:"Which is an element?",o:["Oxygen (O₂)","Water (H₂O)","Salt (NaCl)","Carbon dioxide (CO₂)"],a:0,h:"Only one kind of atom.",e:"O₂ is an element (as a molecule)."},
{q:"How many hydrogen atoms are in H₂O?",o:["2","1","3","0"],a:0,h:"Look at the small number after H.",e:"2."},
{q:"Compounds made of oxygen and another element are called…",o:["oxides","chlorides","mixtures","alloys"],a:0,h:"The name ends in -ide.",e:"Oxides."},
{q:"Is air a compound or a mixture?",o:["A mixture","A compound","An element","A single atom"],a:0,h:"Its gases are not chemically joined.",e:"A mixture."},
{q:"What is CO₂ called?",o:["Carbon dioxide","Carbon monoxide","Calcium oxide","Copper oxide"],a:0,h:"“Di” means two.",e:"Carbon dioxide."}],
cq:[
{q:"Iron filings and sulfur powder are mixed. How could you separate them?",o:["Use a magnet","Burn the mixture","Add water and boil","You can't"],a:0,e:"Iron is magnetic; it's still a mixture."},
{q:"Why is water a compound and not a mixture?",o:["Hydrogen and oxygen are chemically joined in a fixed ratio","It can be filtered","It has one element","It's a liquid"],a:0,e:"It always has 2 H to 1 O."},
{q:"How many different elements are in C₆H₁₂O₆ (glucose)?",o:["3","24","6","12"],a:0,e:"Carbon, hydrogen and oxygen."},
{q:"How many atoms are in one molecule of C₆H₁₂O₆?",o:["24","3","18","12"],a:0,e:"6 + 12 + 6."},
{q:"Which statement is true?",o:["A compound's properties differ from those of its elements","A compound always has the same properties as its elements","Mixtures have fixed ratios","Elements contain several atom types"],a:0,e:"Chemical bonding creates new properties."}]},

{id:"g9-ns-reactions",grade:9,term:2,subject:"ns",strand:"Matter & materials",title:"Chemical reactions",
notes:`<h2>Reactants and products</h2>
<p>In a chemical reaction, the <b>reactants</b> are rearranged into new substances, the <b>products</b>. Bonds between atoms break and new bonds form.</p>
<h2>Writing equations</h2>
<div class="ex"><b>Word equation</b>methane + oxygen → carbon dioxide + water<br><b>Balanced equation</b>CH₄ + 2O₂ → CO₂ + 2H₂O</div>
<h2>Balancing equations</h2>
<ul><li>Count each type of atom on both sides.</li>
<li>Change only the large numbers in front (coefficients), <b>never</b> the small numbers in formulas.</li>
<li>Check: CH₄ + 2O₂ → CO₂ + 2H₂O has 1 C, 4 H and 4 O on each side.</li></ul>
<h2>Conservation of mass</h2>
<div class="key">Atoms are not created or destroyed, so the total mass of the reactants equals the total mass of the products.</div>
<h2>Signs of a reaction</h2><p>Gas given off, colour change, temperature change, light, or a precipitate forming.</p>
<h2>Energy in reactions</h2><p><b>Exothermic</b> reactions give off heat (burning). <b>Endothermic</b> reactions take in heat (an ice pack getting cold).</p>`,
qs:[
{q:"In a chemical reaction, the starting substances are called…",o:["reactants","products","elements","mixtures"],a:0,e:"Reactants."},
{q:"What happens to atoms in a chemical reaction?",o:["They are rearranged","They are destroyed","They are created","They disappear"],a:0,e:"Bonds break and form."},
{q:"Which equation is balanced?",o:["CH₄ + 2O₂ → CO₂ + 2H₂O","CH₄ + O₂ → CO₂ + H₂O","CH₄ + 2O₂ → CO₂ + H₂O","CH₄ + O₂ → 2CO₂ + 2H₂O"],a:0,e:"1 C, 4 H and 4 O on each side."},
{q:"When balancing an equation, you may change…",o:["the numbers in front of formulas","the small numbers inside formulas","the elements","the arrow"],a:0,e:"Changing subscripts changes the substance."},
{q:"20 g of reactants react completely. What is the mass of the products?",o:["20 g","Less than 20 g","More than 20 g","It depends on colour"],a:0,e:"Mass is conserved."},
{q:"A reaction that gives off heat is…",o:["exothermic","endothermic","physical","neutral"],a:0,e:"Exo- means out."},
{q:"A reaction that takes in heat is…",o:["endothermic","exothermic","combustion","rusting"],a:0,e:"Endo- means in."},
{q:"Which is a sign of a chemical reaction?",o:["A precipitate forming","Ice melting","Paper tearing","Water boiling"],a:0,e:"A new solid forms."},
{q:"What are the products when methane burns in oxygen?",o:["Carbon dioxide and water","Hydrogen and carbon","Oxygen only","Methane and water"],a:0,e:"This is combustion."},
{q:"In 2H₂ + O₂ → 2H₂O, how many molecules of water form?",o:["2","1","4","3"],a:0,e:"The coefficient is 2."}],
pq:[
{q:"The new substances formed in a reaction are called…",o:["products","reactants","catalysts","atoms"],a:0,h:"They're on the right of the arrow.",e:"Products."},
{q:"Burning wood is…",o:["exothermic","endothermic","physical","not a reaction"],a:0,h:"Does it give off heat?",e:"Exothermic."},
{q:"How many oxygen atoms are in 2O₂?",o:["4","2","1","6"],a:0,h:"2 molecules × 2 atoms.",e:"4."},
{q:"In the law of conservation of mass, the total mass…",o:["stays the same","increases","decreases","disappears"],a:0,h:"Atoms are only rearranged.",e:"Stays the same."},
{q:"An instant cold pack works by…",o:["an endothermic reaction","an exothermic reaction","freezing","magnetism"],a:0,h:"It takes heat from your skin.",e:"Endothermic."}],
cq:[
{q:"Balance: _H₂ + _O₂ → _H₂O",o:["2, 1, 2","1, 1, 1","2, 2, 2","1, 2, 1"],a:0,e:"2H₂ + O₂ → 2H₂O."},
{q:"Why can't you balance H₂ + O₂ → H₂O by writing H₂O₂?",o:["That changes the substance to hydrogen peroxide","It's quicker","It's allowed","It adds mass"],a:0,e:"Never change the subscripts."},
{q:"Count the atoms on the product side of CH₄ + 2O₂ → CO₂ + 2H₂O.",o:["1 C, 4 H, 4 O","1 C, 2 H, 3 O","2 C, 4 H, 2 O","1 C, 4 H, 2 O"],a:0,e:"CO₂: 1 C, 2 O; 2H₂O: 4 H, 2 O."},
{q:"A reaction in a sealed flask is weighed before and after. What do you expect?",o:["The same mass","Less mass","More mass","No mass"],a:0,e:"Nothing escapes a sealed flask."},
{q:"What happens to bonds during a chemical reaction?",o:["Old bonds break and new bonds form","Nothing happens","Atoms split into protons","Bonds become light"],a:0,e:"That is how new substances form."}]},

{id:"g9-ns-oxygen",grade:9,term:2,subject:"ns",strand:"Matter & materials",title:"Reactions of metals and non-metals with oxygen",
notes:`<h2>Metals with oxygen</h2>
<div class="key">metal + oxygen → metal oxide</div>
<ul><li>Magnesium burns with a bright white flame: magnesium + oxygen → magnesium oxide (2Mg + O₂ → 2MgO).</li>
<li>Iron reacts slowly with oxygen and <b>water</b> to form <b>rust</b> (iron oxide).</li>
<li>Metal oxides are <b>basic</b>.</li></ul>
<h2>Preventing rust</h2><p>Keep oxygen and water away: paint, oil or grease, plastic coating, or <b>galvanising</b> (coating with zinc).</p>
<h2>Non-metals with oxygen</h2>
<div class="key">non-metal + oxygen → non-metal oxide</div>
<ul><li>Carbon + oxygen → carbon dioxide (C + O₂ → CO₂).</li>
<li>Sulfur + oxygen → sulfur dioxide (S + O₂ → SO₂).</li>
<li>Non-metal oxides are <b>acidic</b> when dissolved in water.</li></ul>
<h2>Acid rain</h2><p>Burning coal releases sulfur dioxide and nitrogen oxides. They dissolve in rainwater to form <b>acid rain</b>, which damages plants, lakes, buildings and statues. Mpumalanga, where many coal power stations are, is affected.</p>
<h2>Combustion</h2><p>Burning is a fast reaction with oxygen that releases heat and light. Fuels like coal, wood and petrol produce carbon dioxide.</p>`,
qs:[
{q:"What forms when a metal reacts with oxygen?",o:["A metal oxide","A salt","Water","Hydrogen"],a:0,e:"metal + oxygen → metal oxide."},
{q:"How does magnesium burn?",o:["With a bright white flame","With a blue flame","It doesn't burn","With green smoke"],a:0,e:"It forms magnesium oxide."},
{q:"Which two substances does iron need to rust?",o:["Oxygen and water","Salt and sugar","Nitrogen and helium","Only light"],a:0,e:"Both are needed."},
{q:"Metal oxides are…",o:["basic","acidic","neutral always","gases"],a:0,e:"They form bases."},
{q:"Non-metal oxides dissolved in water are…",o:["acidic","basic","neutral","metals"],a:0,e:"For example, CO₂ forms a weak acid."},
{q:"What forms when carbon burns in oxygen?",o:["Carbon dioxide","Carbon oxide salt","Water","Methane"],a:0,e:"C + O₂ → CO₂."},
{q:"What forms when sulfur burns in oxygen?",o:["Sulfur dioxide","Sulfuric salt","Hydrogen","Oxygen"],a:0,e:"S + O₂ → SO₂."},
{q:"What causes acid rain?",o:["Sulfur dioxide and nitrogen oxides dissolving in rain","Too much oxygen","Salt in the sea","Sunlight"],a:0,e:"These gases form acids."},
{q:"Galvanising protects iron by coating it with…",o:["zinc","salt","water","oxygen"],a:0,e:"Zinc keeps oxygen and water away."},
{q:"Which is NOT a way to prevent rust?",o:["Leaving iron in salty water","Painting it","Oiling it","Galvanising it"],a:0,e:"Salt water speeds up rusting."}],
pq:[
{q:"Rust is…",o:["iron oxide","iron chloride","pure iron","zinc"],a:0,h:"Iron combined with oxygen.",e:"Iron oxide."},
{q:"What is the product of 2Mg + O₂ → ?",o:["2MgO","MgO₂","Mg₂","2Mg"],a:0,h:"Magnesium oxide.",e:"2MgO."},
{q:"Combustion is…",o:["a fast reaction with oxygen that gives off heat and light","freezing","dissolving","melting"],a:0,h:"It's another word for burning.",e:"Burning."},
{q:"Why does painting a gate stop it rusting?",o:["The paint keeps out oxygen and water","Paint is a magnet","Paint adds iron","Paint heats it"],a:0,h:"Rust needs two things to reach the iron.",e:"It forms a barrier."},
{q:"Is sulfur a metal or a non-metal?",o:["Non-metal","Metal","Both","Neither"],a:0,h:"It's a yellow solid that burns to form an acidic gas.",e:"Non-metal."}],
cq:[
{q:"Why do iron roofs near the sea rust faster?",o:["Salty, moist air speeds up rusting","There's less oxygen","The sea is cold","They don't"],a:0,e:"Salt and water speed up the reaction."},
{q:"How does acid rain damage statues made of marble or limestone?",o:["The acid reacts with the stone and wears it away","It cools them","It paints them","It has no effect"],a:0,e:"Acids react with carbonates."},
{q:"Why is Mpumalanga particularly affected by acid rain?",o:["Many coal power stations release sulfur dioxide there","It has no rain","It's by the sea","It has volcanoes"],a:0,e:"Coal burning is concentrated there."},
{q:"Which equation is correct?",o:["C + O₂ → CO₂","C + O → CO₃","2C + O₂ → CO₂","C + O₂ → C₂O"],a:0,e:"Balanced: 1 C and 2 O on each side."},
{q:"Which statement compares metal and non-metal oxides correctly?",o:["Metal oxides are basic; non-metal oxides are acidic","Both are acidic","Both are basic","Metal oxides are acidic; non-metal oxides are basic"],a:0,e:"This is a key pattern."}]},

{id:"g9-ns-acids",grade:9,term:2,subject:"ns",strand:"Matter & materials",title:"Acids, bases and pH",
notes:`<h2>The pH scale</h2>
<div class="tbl"><table><tr><th>pH</th><th>Type</th><th>Examples</th></tr>
<tr><td>0–6</td><td><b>Acidic</b> (lower = stronger)</td><td>Stomach acid, lemon juice, vinegar, cooldrinks</td></tr>
<tr><td>7</td><td><b>Neutral</b></td><td>Pure water</td></tr>
<tr><td>8–14</td><td><b>Basic (alkaline)</b> (higher = stronger)</td><td>Soap, baking soda, antacids, bleach, drain cleaner</td></tr></table></div>
<h2>Indicators</h2>
<ul><li><b>Litmus</b>: acids turn blue litmus <b>red</b>; bases turn red litmus <b>blue</b>.</li>
<li><b>Universal indicator</b> shows a range of colours that match the pH: red for strong acid, green for neutral, purple for strong base.</li>
<li>Natural indicators such as <b>red cabbage</b> juice also change colour.</li></ul>
<h2>Properties</h2>
<ul><li>Acids taste sour (never taste chemicals in the lab!). Bases feel slippery and taste bitter.</li>
<li>Strong acids and bases are <b>corrosive</b>. Wear goggles and gloves.</li></ul>
<div class="key">Always add acid to water, never water to acid, to avoid dangerous splashing.</div>`,
qs:[
{q:"What is the pH of a neutral solution?",o:["7","0","14","1"],a:0,e:"Pure water is pH 7."},
{q:"A solution with pH 2 is…",o:["a strong acid","a weak base","neutral","a strong base"],a:0,e:"Low pH means strongly acidic."},
{q:"A solution with pH 12 is…",o:["basic (alkaline)","acidic","neutral","pure water"],a:0,e:"Above 7 is basic."},
{q:"What colour does an acid turn blue litmus?",o:["Red","Blue","Green","Purple"],a:0,e:"Acids turn blue litmus red."},
{q:"What colour does a base turn red litmus?",o:["Blue","Red","Yellow","Orange"],a:0,e:"Bases turn red litmus blue."},
{q:"Which is an acid?",o:["Lemon juice","Soap","Bleach","Baking soda"],a:0,e:"It contains citric acid."},
{q:"Which is a base?",o:["Soap","Vinegar","Lemon juice","Stomach acid"],a:0,e:"Soaps are basic."},
{q:"Universal indicator turns green in a…",o:["neutral solution","strong acid","strong base","weak acid"],a:0,e:"Green means pH 7."},
{q:"Which household substance is a natural indicator?",o:["Red cabbage juice","Salt","Sugar","Flour"],a:0,e:"It changes colour with pH."},
{q:"Strong acids and bases are…",o:["corrosive","harmless","always neutral","sweet"],a:0,e:"They damage skin and materials."}],
pq:[
{q:"The pH scale goes from…",o:["0 to 14","1 to 10","0 to 100","−7 to 7"],a:0,h:"Neutral is in the middle at 7.",e:"0 to 14."},
{q:"Vinegar is…",o:["acidic","basic","neutral","a metal"],a:0,h:"It tastes sour.",e:"Acidic."},
{q:"Pure water is…",o:["neutral","acidic","basic","corrosive"],a:0,h:"pH 7.",e:"Neutral."},
{q:"Bases often feel…",o:["slippery","sticky","rough","hot"],a:0,h:"Think of soap.",e:"Slippery."},
{q:"Which safety equipment should you wear with acids?",o:["Goggles and gloves","Sunglasses only","Nothing","A hat"],a:0,h:"Protect your eyes and skin.",e:"Goggles and gloves."}],
cq:[
{q:"Which is the strongest acid: pH 1, pH 4, pH 6 or pH 7?",o:["pH 1","pH 4","pH 6","pH 7"],a:0,e:"The lower the pH, the stronger the acid."},
{q:"A solution turns universal indicator purple. What is its approximate pH?",o:["About 13–14","About 7","About 1","About 4"],a:0,e:"Purple means strongly basic."},
{q:"Why should you never taste chemicals to test whether they are acids?",o:["They may be poisonous or corrosive","They taste bad","It's too slow","Acids have no taste"],a:0,e:"Use indicators instead."},
{q:"Why must you add acid to water, not water to acid?",o:["Adding water to acid can cause dangerous splashing","It is slower","It changes the colour","It doesn't matter"],a:0,e:"A lot of heat is released."},
{q:"A cooldrink has a pH of about 3. This means it is…",o:["acidic","basic","neutral","alkaline"],a:0,e:"Below 7 is acidic."}]},

{id:"g9-ns-acidreactions",grade:9,term:2,subject:"ns",strand:"Matter & materials",title:"Reactions of acids with bases and metals",
notes:`<h2>Neutralisation</h2>
<div class="key">acid + base → salt + water</div>
<p>Example: hydrochloric acid + sodium hydroxide → sodium chloride + water (HCl + NaOH → NaCl + H₂O). The pH moves towards 7.</p>
<h2>Acid reactions to know</h2>
<div class="tbl"><table><tr><th>Reaction</th><th>Products</th></tr>
<tr><td>acid + metal oxide</td><td>salt + water</td></tr>
<tr><td>acid + metal hydroxide</td><td>salt + water</td></tr>
<tr><td>acid + metal carbonate</td><td>salt + water + <b>carbon dioxide</b></td></tr>
<tr><td>acid + metal</td><td>salt + <b>hydrogen</b></td></tr></table></div>
<h2>Testing for gases</h2>
<ul><li><b>Hydrogen</b>: a lit splint makes a squeaky “pop”.</li>
<li><b>Carbon dioxide</b>: turns limewater milky.</li></ul>
<h2>Naming salts</h2><p>Hydrochloric acid makes <b>chlorides</b>; sulfuric acid makes <b>sulfates</b>; nitric acid makes <b>nitrates</b>. Magnesium + hydrochloric acid → magnesium chloride + hydrogen.</p>
<h2>Neutralisation in everyday life</h2>
<ul><li><b>Antacids</b> (bases) neutralise extra stomach acid to relieve heartburn.</li>
<li>Farmers add <b>lime</b> (a base) to acidic soil.</li><li>Toothpaste is slightly basic and neutralises acids that cause tooth decay.</li>
<li>A bee sting is acidic and can be soothed with bicarbonate of soda (a base).</li></ul>`,
qs:[
{q:"What does an acid and a base produce?",o:["A salt and water","Only gas","Only acid","A metal"],a:0,e:"This is neutralisation."},
{q:"What are the products of HCl + NaOH?",o:["NaCl + H₂O","NaOH + H₂","HCl + O₂","Na + Cl₂"],a:0,e:"Sodium chloride and water."},
{q:"What gas forms when an acid reacts with a metal?",o:["Hydrogen","Oxygen","Carbon dioxide","Nitrogen"],a:0,e:"acid + metal → salt + hydrogen."},
{q:"What gas forms when an acid reacts with a metal carbonate?",o:["Carbon dioxide","Hydrogen","Oxygen","Chlorine"],a:0,e:"acid + carbonate → salt + water + CO₂."},
{q:"How do you test for hydrogen?",o:["A lit splint makes a squeaky pop","Limewater turns milky","It relights a glowing splint","It smells sweet"],a:0,e:"The pop test."},
{q:"How do you test for carbon dioxide?",o:["It turns limewater milky","It makes a squeaky pop","It turns litmus blue","It glows"],a:0,e:"The limewater test."},
{q:"Which salt does hydrochloric acid make?",o:["Chlorides","Sulfates","Nitrates","Carbonates"],a:0,e:"For example, sodium chloride."},
{q:"Which salt does sulfuric acid make?",o:["Sulfates","Chlorides","Nitrates","Oxides"],a:0,e:"For example, copper sulfate."},
{q:"How do antacids relieve heartburn?",o:["They neutralise extra stomach acid","They add more acid","They kill bacteria","They cool the stomach"],a:0,e:"Antacids are bases."},
{q:"Why do farmers add lime to acidic soil?",o:["To neutralise the acid","To make it more acidic","To add water","To kill all plants"],a:0,e:"Lime is a base."}],
pq:[
{q:"Neutralisation moves the pH towards…",o:["7","0","14","1"],a:0,h:"Neutral.",e:"7."},
{q:"Which salt does nitric acid make?",o:["Nitrates","Chlorides","Sulfates","Nitrides"],a:0,h:"Nitric → nit…",e:"Nitrates."},
{q:"What are the products of magnesium + hydrochloric acid?",o:["Magnesium chloride + hydrogen","Magnesium oxide + water","Magnesium sulfate + carbon dioxide","Water only"],a:0,h:"acid + metal → salt + hydrogen.",e:"Magnesium chloride and hydrogen."},
{q:"Toothpaste is slightly…",o:["basic","acidic","neutral","metallic"],a:0,h:"It fights acids made by mouth bacteria.",e:"Basic."},
{q:"An acid + metal oxide gives…",o:["salt + water","salt + hydrogen","salt + carbon dioxide","only water"],a:0,h:"Metal oxides are bases.",e:"Salt + water."}],
cq:[
{q:"Vinegar (an acid) is added to baking soda (a carbonate). Why does it fizz?",o:["Carbon dioxide gas is produced","Hydrogen is produced","Oxygen is produced","It boils"],a:0,e:"acid + carbonate → salt + water + CO₂."},
{q:"What are the products of sulfuric acid + zinc?",o:["Zinc sulfate + hydrogen","Zinc chloride + water","Zinc oxide + carbon dioxide","Sulfur + zinc"],a:0,e:"acid + metal → salt + hydrogen."},
{q:"A bee sting is acidic. What would help soothe it?",o:["Bicarbonate of soda (a base)","Lemon juice","Vinegar","Stomach acid"],a:0,e:"A base neutralises the acid."},
{q:"Which word equation is correct?",o:["hydrochloric acid + calcium carbonate → calcium chloride + water + carbon dioxide","hydrochloric acid + calcium → calcium carbonate","acid + base → hydrogen only","acid + metal → salt + water"],a:0,e:"Carbonates give off CO₂."},
{q:"How could you tell that a neutralisation reaction is complete?",o:["An indicator shows pH 7 (green with universal indicator)","It stops being liquid","It turns red","It explodes"],a:0,e:"Neutral means pH 7."}]},

/* ===== Term 3: Energy and change ===== */
{id:"g9-ns-forces",grade:9,term:3,subject:"ns",strand:"Energy & change",title:"Forces",
notes:`<h2>What is a force?</h2>
<p>A force is a <b>push or a pull</b>. Forces can start, stop, speed up, slow down, change the direction or change the shape of objects. Force is measured in <b>newtons (N)</b> with a <b>spring balance</b> (newton meter).</p>
<h2>Contact and non-contact forces</h2>
<div class="tbl"><table><tr><th>Contact forces (touching)</th><th>Non-contact forces (at a distance)</th></tr>
<tr><td>Friction, applied force (push/pull), tension, normal force</td><td>Gravity, magnetic force, electrostatic force</td></tr></table></div>
<h2>Mass and weight</h2>
<ul><li><b>Mass</b> is the amount of matter, measured in kilograms (kg). It is the same everywhere.</li>
<li><b>Weight</b> is the pull of gravity on that mass, measured in newtons (N). <b>Weight = mass × g</b>, where g ≈ 10 N/kg on Earth.</li>
<li>A 50 kg learner weighs about 500 N on Earth, but only about one-sixth of that on the Moon. Their mass stays 50 kg.</li></ul>
<h2>Friction</h2>
<p>Friction opposes motion between surfaces. It is <b>useful</b> for grip, brakes and walking, but <b>unwanted</b> when it causes wear and heat in machines (reduced with oil and ball bearings).</p>
<h2>Balanced and unbalanced forces</h2><p>Balanced forces: no change in motion. Unbalanced forces: the object speeds up, slows down or changes direction.</p>`,
qs:[
{q:"A force is…",o:["a push or a pull","a type of energy","a unit of mass","a speed"],a:0,e:"Forces push or pull."},
{q:"What is the unit of force?",o:["Newton (N)","Kilogram (kg)","Joule (J)","Metre (m)"],a:0,e:"Newtons."},
{q:"Which instrument measures force?",o:["Spring balance","Thermometer","Ruler","Stopwatch"],a:0,e:"Also called a newton meter."},
{q:"Which is a non-contact force?",o:["Gravity","Friction","Tension","Applied push"],a:0,e:"Gravity acts at a distance."},
{q:"Which is a contact force?",o:["Friction","Gravity","Magnetic force","Electrostatic force"],a:0,e:"Surfaces must touch."},
{q:"Mass is measured in…",o:["kilograms","newtons","metres","litres"],a:0,e:"Mass in kg."},
{q:"A 50 kg learner on Earth weighs about… (g ≈ 10 N/kg)",o:["500 N","50 N","5 N","5 000 N"],a:0,e:"50 × 10 = 500 N."},
{q:"On the Moon, an astronaut's mass…",o:["stays the same","becomes six times smaller","becomes zero","doubles"],a:0,e:"Mass doesn't change; weight does."},
{q:"Friction always…",o:["opposes motion","speeds things up","acts at a distance","attracts metals"],a:0,e:"It resists sliding."},
{q:"Unbalanced forces on an object cause it to…",o:["change its speed or direction","stay exactly the same","disappear","lose mass"],a:0,e:"There is a net force."}],
pq:[
{q:"Is a magnet attracting a pin a contact or non-contact force?",o:["Non-contact","Contact","Neither","Both"],a:0,h:"Does the magnet need to touch the pin?",e:"Non-contact."},
{q:"What is weight?",o:["The pull of gravity on a mass","The amount of matter","A type of energy","Volume"],a:0,h:"It's measured in newtons.",e:"Gravity's pull."},
{q:"How do you calculate weight?",o:["Mass × g","Mass ÷ g","Mass + g","Volume × density"],a:0,h:"W = m × g.",e:"W = mg."},
{q:"Which is an example of useful friction?",o:["Car brakes stopping a car","Engine parts wearing out","A door squeaking","Machines heating up"],a:0,h:"Something we want to happen.",e:"Brakes."},
{q:"How can you reduce friction in machines?",o:["Use oil and ball bearings","Add sand","Make surfaces rougher","Remove all oil"],a:0,h:"Make the surfaces slide easily.",e:"Lubrication."}],
cq:[
{q:"A box with a mass of 8 kg is on Earth (g ≈ 10 N/kg). What is its weight?",o:["80 N","8 N","0,8 N","800 N"],a:0,e:"8 × 10 = 80 N."},
{q:"Why would you weigh less on the Moon?",o:["The Moon's gravity is weaker","Your mass is less","There's no air","You float"],a:0,e:"The Moon's gravity is about one-sixth of Earth's."},
{q:"Why do tyres have treads?",o:["To increase friction for grip","To reduce friction","For decoration","To make the car heavier"],a:0,e:"Grip prevents skidding."},
{q:"Two teams pull a rope with equal force. What happens?",o:["Nothing moves: the forces are balanced","The rope moves left","The rope breaks","Both teams fall"],a:0,e:"Balanced forces mean no change in motion."},
{q:"Why do machine parts get hot when they rub?",o:["Friction changes kinetic energy into heat","Gravity heats them","Magnetism","They don't"],a:0,e:"Friction produces heat."}]},

{id:"g9-ns-cells-electric",grade:9,term:3,subject:"ns",strand:"Energy & change",title:"Electric cells as energy systems",
notes:`<h2>What an electric cell does</h2>
<p>An electric cell changes <b>chemical energy</b> into <b>electrical energy</b>. It has two different conductors (<b>electrodes</b>), often two different metals, and a chemical <b>electrolyte</b> that conducts charge between them.</p>
<ul><li>The cell has a <b>positive (+)</b> and a <b>negative (−)</b> terminal.</li>
<li>Its <b>voltage</b> (potential difference) is measured in volts (V); a common AA cell is 1,5 V.</li>
<li>A <b>battery</b> is two or more cells joined together. Cells in series add their voltages: two 1,5 V cells give 3 V.</li></ul>
<h2>Make your own cell</h2><p>A lemon with a copper coin and a zinc-coated (galvanised) nail pushed into it produces a small voltage. The lemon juice is the electrolyte.</p>
<h2>Types of cells</h2>
<ul><li><b>Primary cells</b> (ordinary batteries) are used once until the chemicals run out.</li>
<li><b>Rechargeable cells</b> (like phone batteries) can be recharged by pushing electrical energy back in, changing it into chemical energy again.</li></ul>
<div class="key">Old batteries contain harmful chemicals. Never throw them in the bin or into a fire; take them to a battery recycling point.</div>`,
qs:[
{q:"What energy change happens in an electric cell?",o:["Chemical → electrical","Electrical → chemical","Light → heat","Sound → electrical"],a:0,e:"Chemicals react to provide electrical energy."},
{q:"What are the two conductors in a cell called?",o:["Electrodes","Electrolytes","Terminals only","Switches"],a:0,e:"Electrodes."},
{q:"What is the chemical between the electrodes called?",o:["The electrolyte","The electrode","The filament","The fuse"],a:0,e:"It conducts charge."},
{q:"What is the voltage of a common AA cell?",o:["1,5 V","9 V","230 V","12 V"],a:0,e:"1,5 volts."},
{q:"Two 1,5 V cells are joined in series. What is the total voltage?",o:["3 V","1,5 V","0,75 V","2,25 V"],a:0,e:"Voltages add in series."},
{q:"A battery is…",o:["two or more cells joined together","a single cell","a type of bulb","a switch"],a:0,e:"Strictly, a battery is several cells."},
{q:"In a lemon cell, the lemon juice acts as the…",o:["electrolyte","electrode","switch","bulb"],a:0,e:"It's the acidic electrolyte."},
{q:"A rechargeable cell is recharged by changing…",o:["electrical energy back into chemical energy","chemical into light","heat into sound","nothing"],a:0,e:"Charging reverses the reaction."},
{q:"How should old batteries be disposed of?",o:["At a battery recycling point","In the bin","In a fire","In a river"],a:0,e:"They contain harmful chemicals."},
{q:"Voltage is measured in…",o:["volts","amperes","ohms","newtons"],a:0,e:"Volts (V)."}],
pq:[
{q:"Every cell has a positive and a … terminal.",o:["negative","neutral","double","magnetic"],a:0,h:"The opposite of positive.",e:"Negative."},
{q:"Which items could make a simple cell?",o:["A lemon, a copper coin and a galvanised nail","Paper and string","Water and sugar only","Plastic and glass"],a:0,h:"Two different metals and an electrolyte.",e:"The lemon cell."},
{q:"A phone battery is…",o:["rechargeable","a primary cell","not a cell","a capacitor only"],a:0,h:"You plug it in every night.",e:"Rechargeable."},
{q:"Why do the electrodes need to be two different conductors?",o:["Different metals create a voltage between them","They look nice","It's cheaper","They must be the same"],a:0,h:"The difference drives the current.",e:"Different metals are needed."},
{q:"Three 1,5 V cells in series give…",o:["4,5 V","1,5 V","3 V","0,5 V"],a:0,h:"Add them up.",e:"4,5 V."}],
cq:[
{q:"A torch needs 4,5 V. How many 1,5 V cells in series are needed?",o:["3","2","4","1"],a:0,e:"3 × 1,5 = 4,5 V."},
{q:"Why does a primary cell eventually go \"flat\"?",o:["Its chemicals are used up","It loses its metal","Its voltage increases","Light escapes"],a:0,e:"The reacting chemicals run out."},
{q:"Why is throwing batteries in a fire dangerous?",o:["They can explode and release toxic chemicals","They recharge","They make more electricity","Nothing happens"],a:0,e:"Heat makes the chemicals react violently."},
{q:"What is the full energy chain in a torch?",o:["Chemical → electrical → light (and heat)","Light → chemical","Electrical → chemical → sound","Heat → electrical"],a:0,e:"From the cell to the bulb."},
{q:"What happens to the total voltage when a cell is put in the wrong way round in series?",o:["It decreases (the voltages partly cancel)","It doubles","It stays the same","It becomes 230 V"],a:0,e:"The reversed cell works against the others."}]},

{id:"g9-ns-safety",grade:9,term:3,subject:"ns",strand:"Energy & change",title:"Safety with electricity",
notes:`<h2>Dangers of electricity</h2>
<p>Electricity can cause <b>shocks</b>, burns and <b>fires</b>. South African homes use <b>230 V</b> mains electricity, which can kill.</p>
<h2>A three-pin plug</h2>
<div class="tbl"><table><tr><th>Wire</th><th>Colour</th><th>Job</th></tr>
<tr><td>Live</td><td>Brown</td><td>Carries the current to the appliance</td></tr>
<tr><td>Neutral</td><td>Blue</td><td>Completes the circuit</td></tr>
<tr><td>Earth</td><td>Green and yellow</td><td>Carries current safely to the ground if there's a fault</td></tr></table></div>
<h2>Safety devices</h2>
<ul><li>A <b>fuse</b> melts and breaks the circuit if the current is too high.</li>
<li>A <b>circuit breaker</b> switches off (“trips”) when too much current flows, and can be reset.</li>
<li>An <b>earth leakage</b> unit trips if current leaks, for example through a person.</li></ul>
<h2>Staying safe</h2>
<ul><li>Don't overload multi-plugs or adaptors.</li><li>Never touch electrical appliances with wet hands or use them near water.</li>
<li>Replace damaged cords and plugs; don't push metal objects into sockets.</li>
<li>Illegal connections are extremely dangerous and cause fires and deaths.</li>
<li>Stay far away from fallen power lines.</li></ul>
<div class="key">If someone is being shocked, switch off the power first, or push them away with something dry and non-conducting such as a wooden broom. Never touch them directly.</div>`,
qs:[
{q:"What is the voltage of household electricity in South Africa?",o:["230 V","12 V","1,5 V","9 V"],a:0,e:"About 230 V."},
{q:"What colour is the live wire?",o:["Brown","Blue","Green and yellow","Red"],a:0,e:"Brown."},
{q:"What colour is the neutral wire?",o:["Blue","Brown","Green and yellow","Black"],a:0,e:"Blue."},
{q:"What colour is the earth wire?",o:["Green and yellow","Blue","Brown","White"],a:0,e:"Green and yellow stripes."},
{q:"What does a fuse do?",o:["Melts and breaks the circuit if the current is too high","Increases the current","Stores electricity","Lights up"],a:0,e:"It protects the appliance and wiring."},
{q:"What does a circuit breaker do?",o:["Switches off when too much current flows","Makes more electricity","Charges batteries","Measures voltage"],a:0,e:"It trips and can be reset."},
{q:"What does the earth wire do?",o:["Carries current safely to the ground if there's a fault","Supplies electricity","Makes the appliance work faster","Nothing"],a:0,e:"It protects people from shocks."},
{q:"Why should you not overload a multi-plug?",o:["Too much current can cause overheating and fire","It saves electricity","It makes appliances faster","There's no danger"],a:0,e:"Wires can overheat."},
{q:"Why should you never use appliances with wet hands?",o:["Water conducts electricity and increases the risk of shock","Water insulates","The appliance gets dirty","It's slower"],a:0,e:"Water helps current flow through you."},
{q:"Someone is being shocked by an appliance. What should you do first?",o:["Switch off the power at the plug or the main switch","Grab them with your hands","Throw water on them","Pull the cable with wet hands"],a:0,e:"Never touch them while the current is on."}],
pq:[
{q:"Which device can be reset after it trips?",o:["Circuit breaker","Fuse","Bulb","Plug"],a:0,h:"A fuse must be replaced.",e:"A circuit breaker."},
{q:"Which is a safe action?",o:["Replacing a damaged cord","Pushing a knife into a socket","Using a heater in the bath","Touching a fallen power line"],a:0,h:"Only one of these is safe.",e:"Replace damaged cords."},
{q:"Which wire carries the current to the appliance?",o:["Live","Neutral","Earth","None"],a:0,h:"It's the brown one.",e:"Live."},
{q:"Why are illegal connections dangerous?",o:["They can cause fires, shocks and deaths","They save money","They are faster","They're safe"],a:0,h:"They bypass all safety devices.",e:"They're very dangerous."},
{q:"What should you use to push someone away from a live wire?",o:["A dry wooden broom","A metal pipe","Your hands","A wet towel"],a:0,h:"It must not conduct.",e:"A dry, non-conducting object."}],
cq:[
{q:"Why is a fuse placed in the live wire?",o:["To break the supply of current if there's a fault","To make the plug heavier","To light the appliance","To connect to earth"],a:0,e:"Cutting the live wire stops the danger."},
{q:"A kettle's metal body becomes live because of a fault. How does the earth wire protect you?",o:["Current flows to the ground instead of through you, and the fuse or breaker cuts the power","It cools the kettle","It turns off the light","It doesn't"],a:0,e:"Earthing and the fuse work together."},
{q:"Why should you stay far away from fallen power lines?",o:["They may still be live and can kill","They are hot","They are heavy","They are magnetic"],a:0,e:"Report them and keep clear."},
{q:"Why are plugs and cord covers made of plastic or rubber?",o:["They are insulators that protect us","They conduct well","They are magnetic","They are cheap only"],a:0,e:"Insulation prevents shocks."},
{q:"Why does a circuit breaker trip when too many heaters run on one circuit?",o:["The total current becomes too high","The voltage drops to zero","The heaters cool down","It's broken"],a:0,e:"It protects the wiring from overheating."}]},

{id:"g9-ns-grid",grade:9,term:3,subject:"ns",strand:"Energy & change",title:"Energy and the national electricity grid",
notes:`<h2>Generating electricity</h2>
<p>In most power stations, a source of energy turns a <b>turbine</b>, which turns a <b>generator</b> that produces electricity.</p>
<div class="tbl"><table><tr><th>Source</th><th>How it works</th><th>Renewable?</th></tr>
<tr><td>Coal (most of South Africa's electricity)</td><td>Burning coal boils water; steam turns turbines</td><td>No</td></tr>
<tr><td>Nuclear (Koeberg, near Cape Town)</td><td>Nuclear reactions heat water into steam</td><td>No</td></tr>
<tr><td>Hydro</td><td>Flowing water turns turbines</td><td>Yes</td></tr>
<tr><td>Wind</td><td>Wind turns turbine blades</td><td>Yes</td></tr>
<tr><td>Solar</td><td>Solar panels change light directly into electricity</td><td>Yes</td></tr></table></div>
<h2>The national grid</h2>
<ul><li>The <b>grid</b> is the network of power lines that carries electricity across the country. Eskom runs most of it.</li>
<li><b>Step-up transformers</b> raise the voltage very high for long-distance transmission, so less energy is lost as heat.</li>
<li><b>Step-down transformers</b> lower the voltage before it reaches homes (230 V).</li></ul>
<h2>Paying for electricity</h2>
<div class="key">Energy used (kWh) = power (kW) × time (hours). Cost = kWh × price per kWh.</div>
<div class="ex"><b>Example</b>A 2 kW heater used for 3 hours uses 6 kWh. At R3 per kWh, that costs <b>R18</b>.</div>
<h2>Saving electricity</h2><p>Switch off lights and appliances, use LED bulbs, use a geyser timer or blanket, and use solar water heaters.</p>`,
qs:[
{q:"Where does most of South Africa's electricity come from?",o:["Coal power stations","Wind farms","Hydro power","Solar panels"],a:0,e:"Coal is the main source."},
{q:"What does a generator do?",o:["Changes kinetic energy into electrical energy","Stores electricity","Burns coal","Lowers voltage"],a:0,e:"A spinning generator produces electricity."},
{q:"Where is South Africa's nuclear power station?",o:["Koeberg, near Cape Town","Durban","Johannesburg","Kimberley"],a:0,e:"Koeberg."},
{q:"Which energy source is renewable?",o:["Wind","Coal","Nuclear fuel","Oil"],a:0,e:"Wind is constantly replenished."},
{q:"What is the national grid?",o:["The network of power lines carrying electricity across the country","A type of power station","A battery","A map"],a:0,e:"It connects power stations to users."},
{q:"Why is voltage stepped up for long-distance transmission?",o:["To reduce energy lost as heat","To make it more dangerous","To use more coal","To make it cheaper to build"],a:0,e:"Higher voltage means less loss."},
{q:"What does a step-down transformer do?",o:["Lowers the voltage for homes","Raises the voltage","Generates electricity","Stores energy"],a:0,e:"Down to 230 V."},
{q:"What unit is used on electricity bills?",o:["Kilowatt-hour (kWh)","Volt","Newton","Ampere"],a:0,e:"kWh measures energy used."},
{q:"A 2 kW heater runs for 3 hours. How much energy does it use?",o:["6 kWh","5 kWh","1,5 kWh","2 kWh"],a:0,e:"2 × 3 = 6 kWh."},
{q:"Which saves electricity?",o:["Using LED bulbs","Leaving lights on","Using the geyser all day","Opening the fridge often"],a:0,e:"LEDs use far less energy."}],
pq:[
{q:"What do solar panels change light into?",o:["Electricity","Heat only","Coal","Wind"],a:0,h:"They power calculators and homes.",e:"Electricity."},
{q:"Which company runs most of South Africa's grid?",o:["Eskom","Telkom","Transnet","SAA"],a:0,h:"It's the national power utility.",e:"Eskom."},
{q:"Is coal renewable?",o:["No","Yes","Only in winter","Sometimes"],a:0,h:"It took millions of years to form.",e:"No."},
{q:"What spins a generator in a coal power station?",o:["A turbine driven by steam","Wind only","Solar panels","Batteries"],a:0,h:"Burning coal boils water first.",e:"A steam turbine."},
{q:"Energy used = power ×…",o:["time","voltage","mass","distance"],a:0,h:"kW × hours.",e:"Time."}],
cq:[
{q:"A 1,5 kW kettle is used for 2 hours in total in a month. At R3 per kWh, what does it cost?",o:["R9","R4,50","R3","R6"],a:0,e:"1,5 × 2 = 3 kWh; 3 × R3 = R9."},
{q:"Why is South Africa building more wind and solar power?",o:["They are renewable and don't release greenhouse gases while running","They're the only option","Coal has run out","They're noisier"],a:0,e:"Cleaner and sustainable."},
{q:"What is a disadvantage of coal power?",o:["It pollutes the air and is non-renewable","It's renewable","It produces no waste","It needs wind"],a:0,e:"It releases CO₂ and other pollutants."},
{q:"What is the correct order of energy changes in a coal power station?",o:["Chemical → heat → kinetic → electrical","Electrical → heat → chemical","Light → electrical","Kinetic → chemical → heat"],a:0,e:"Coal burns, steam turns the turbine, the generator makes electricity."},
{q:"A 100 W (0,1 kW) bulb is left on for 10 hours. How much energy does it use?",o:["1 kWh","10 kWh","100 kWh","0,1 kWh"],a:0,e:"0,1 × 10 = 1 kWh."}]}
);
TOPICS.slice(-9).forEach(t=>TOPIC[t.id]=t);
