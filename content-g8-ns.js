/* Grade 8 Natural Sciences, Terms 1–3. */
TOPICS.push(
/* ===== Term 1: Life and living ===== */
{id:"g8-ns-photosynthesis",grade:8,term:1,subject:"ns",strand:"Life & living",title:"Photosynthesis and respiration",
notes:`<h2>Photosynthesis</h2>
<p>Green plants make their own food using light energy. This happens in the <b>chloroplasts</b>, mostly in the leaves, which contain the green pigment <b>chlorophyll</b>.</p>
<div class="key">carbon dioxide + water <b>→</b> glucose + oxygen (using light energy and chlorophyll)</div>
<ul><li>Carbon dioxide enters through tiny pores in the leaves called <b>stomata</b>. Water comes from the roots.</li>
<li>Plants store extra glucose as <b>starch</b>. Iodine solution turns <b>blue-black</b> when starch is present.</li>
<li>Photosynthesis needs light, so it only happens in daylight.</li></ul>
<h2>Respiration</h2>
<p>All living cells release energy from food through respiration, mainly in the <b>mitochondria</b>.</p>
<div class="key">glucose + oxygen <b>→</b> carbon dioxide + water + <b>energy</b></div>
<ul><li>Respiration happens in plants and animals, <b>day and night</b>.</li>
<li>Respiration is the reverse of photosynthesis. Together they keep oxygen and carbon dioxide balanced in the air.</li></ul>
<h2>Comparing them</h2>
<div class="tbl"><table><tr><th></th><th>Photosynthesis</th><th>Respiration</th></tr>
<tr><td>Where</td><td>Chloroplasts (green parts of plants)</td><td>Mitochondria (all living cells)</td></tr>
<tr><td>Uses</td><td>Carbon dioxide, water, light</td><td>Glucose, oxygen</td></tr>
<tr><td>Makes</td><td>Glucose, oxygen</td><td>Carbon dioxide, water, energy</td></tr>
<tr><td>When</td><td>Only in light</td><td>All the time</td></tr></table></div>`,
qs:[
{q:"What do plants need for photosynthesis?",o:["Carbon dioxide, water and light","Oxygen and glucose","Only soil","Starch and iodine"],a:0,e:"These are the raw materials and the energy source."},
{q:"Which gas is released during photosynthesis?",o:["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"],a:0,e:"Oxygen is a product."},
{q:"Where does photosynthesis take place in a cell?",o:["Chloroplasts","Mitochondria","Nucleus","Cell wall"],a:0,e:"Chloroplasts contain chlorophyll."},
{q:"What is the green pigment that absorbs light?",o:["Chlorophyll","Starch","Glucose","Iodine"],a:0,e:"Chlorophyll."},
{q:"How do plants store extra glucose?",o:["As starch","As oxygen","As water","As carbon dioxide"],a:0,e:"Glucose is stored as starch."},
{q:"Iodine solution turns blue-black when it detects…",o:["starch","glucose","oxygen","water"],a:0,e:"This is the starch test."},
{q:"What does respiration release?",o:["Energy","Light","Starch","Chlorophyll"],a:0,e:"Respiration releases energy from food."},
{q:"Where does respiration mainly take place?",o:["Mitochondria","Chloroplasts","Stomata","Roots only"],a:0,e:"Mitochondria."},
{q:"When do plants respire?",o:["Day and night","Only during the day","Only at night","Never"],a:0,e:"Respiration never stops."},
{q:"Carbon dioxide enters a leaf through tiny pores called…",o:["stomata","roots","veins","petals"],a:0,e:"Stomata."}],
pq:[
{q:"What does a plant make in photosynthesis?",o:["Glucose","Carbon dioxide","Soil","Iodine"],a:0,h:"It's the plant's food, a type of sugar.",e:"Glucose."},
{q:"Which energy source drives photosynthesis?",o:["Light","Wind","Heat from soil","Sound"],a:0,h:"Plants grow towards it.",e:"Light."},
{q:"Which gas do animals breathe in for respiration?",o:["Oxygen","Carbon dioxide","Helium","Methane"],a:0,h:"We need it to stay alive.",e:"Oxygen."},
{q:"Which is a product of respiration?",o:["Carbon dioxide","Oxygen","Glucose","Chlorophyll"],a:0,h:"We breathe it out.",e:"Carbon dioxide (plus water and energy)."},
{q:"Where do plants get water for photosynthesis?",o:["From the roots","From the air through petals","From starch","From the Sun"],a:0,h:"It's absorbed from the soil.",e:"Through the roots."}],
cq:[
{q:"A leaf kept in the dark for two days is tested with iodine. What happens and why?",o:["No blue-black colour: no light means no photosynthesis, so no starch","Blue-black: starch is always present","It turns red","It glows"],a:0,e:"Without light, starch isn't made and stored starch gets used up."},
{q:"How are photosynthesis and respiration related?",o:["One is roughly the reverse of the other","They are the same","Neither involves gases","Both need light"],a:0,e:"The products of one are the raw materials of the other."},
{q:"Why is the balance of oxygen and carbon dioxide in the air important?",o:["Living things need oxygen, and plants need carbon dioxide","It isn't important","Only for clouds","Only for fish"],a:0,e:"Photosynthesis and respiration keep the gases balanced."},
{q:"Which word equation shows respiration?",o:["glucose + oxygen → carbon dioxide + water + energy","carbon dioxide + water → glucose + oxygen","starch + iodine → blue-black","water → oxygen"],a:0,e:"Respiration releases energy from glucose."},
{q:"Why can't animals photosynthesise?",o:["They have no chlorophyll or chloroplasts","They don't need food","They live in the dark","They have no cells"],a:0,e:"Only cells with chloroplasts can photosynthesise."}]},

{id:"g8-ns-ecosystems",grade:8,term:1,subject:"ns",strand:"Life & living",title:"Interactions and interdependence in ecosystems",
notes:`<h2>Key terms</h2>
<div class="tbl"><table><tr><th>Term</th><th>Meaning</th></tr>
<tr><td>Ecosystem</td><td>All the living things in an area and their non-living environment, interacting</td></tr>
<tr><td>Biotic factors</td><td>Living things: plants, animals, fungi, bacteria</td></tr>
<tr><td>Abiotic factors</td><td>Non-living things: water, light, temperature, soil, air</td></tr>
<tr><td>Habitat</td><td>The place where an organism lives</td></tr>
<tr><td>Population</td><td>All the members of one species in an area</td></tr>
<tr><td>Community</td><td>All the populations in an area</td></tr></table></div>
<h2>Feeding relationships</h2>
<ul><li><b>Producers</b> (plants) make their own food.</li>
<li><b>Consumers</b> eat other organisms: <b>herbivores</b> eat plants, <b>carnivores</b> eat animals, <b>omnivores</b> eat both.</li>
<li><b>Decomposers</b> (fungi and bacteria) break down dead material and return nutrients to the soil.</li>
<li>A <b>food chain</b> shows one feeding path: grass → zebra → lion. A <b>food web</b> shows many linked chains.</li>
<li>Only about <b>10%</b> of energy passes from one level to the next, so there are fewer animals at the top (energy pyramid).</li></ul>
<h2>Relationships between species</h2>
<ul><li><b>Predation</b>: a predator hunts and eats its prey.</li><li><b>Competition</b>: organisms fight for the same food, water or space.</li>
<li><b>Mutualism</b>: both benefit (oxpecker birds eat ticks off buffalo).</li>
<li><b>Parasitism</b>: one benefits, the other is harmed (a tick on a dog).</li>
<li><b>Commensalism</b>: one benefits, the other is unaffected.</li></ul>`,
qs:[
{q:"An ecosystem is…",o:["living things and their non-living environment interacting","only the animals in an area","a type of plant","a weather pattern"],a:0,e:"It includes biotic and abiotic parts."},
{q:"Which is an abiotic factor?",o:["Temperature","Grass","Lion","Fungi"],a:0,e:"Abiotic means non-living."},
{q:"A population is…",o:["all the members of one species in an area","all living things in an area","one organism","the non-living parts"],a:0,e:"One species only."},
{q:"Organisms that make their own food are…",o:["producers","consumers","decomposers","carnivores"],a:0,e:"Plants are producers."},
{q:"A zebra that eats only grass is a…",o:["herbivore","carnivore","omnivore","decomposer"],a:0,e:"Herbivores eat plants."},
{q:"What do decomposers do?",o:["Break down dead material and return nutrients to the soil","Make food from sunlight","Hunt prey","Pollinate flowers"],a:0,e:"Fungi and bacteria recycle nutrients."},
{q:"In grass → zebra → lion, what is the lion?",o:["A carnivore","A producer","A herbivore","A decomposer"],a:0,e:"It eats other animals."},
{q:"About what percentage of energy passes to the next level in a food chain?",o:["10%","50%","90%","100%"],a:0,e:"Most energy is used or lost as heat."},
{q:"Oxpeckers eat ticks off buffalo, and both benefit. This is…",o:["mutualism","parasitism","predation","competition"],a:0,e:"Both organisms gain."},
{q:"A tick feeding on a dog is an example of…",o:["parasitism","mutualism","commensalism","decomposition"],a:0,e:"The tick benefits; the dog is harmed."}],
pq:[
{q:"Which is a biotic factor?",o:["A tree","Sunlight","Rain","Soil temperature"],a:0,h:"Biotic means living.",e:"A tree is living."},
{q:"An animal that eats both plants and animals is…",o:["an omnivore","a herbivore","a producer","a decomposer"],a:0,h:"“Omni” means all.",e:"An omnivore."},
{q:"Which is a decomposer?",o:["Mushroom (fungus)","Lion","Grass","Zebra"],a:0,h:"It grows on dead logs.",e:"Fungi are decomposers."},
{q:"A habitat is…",o:["where an organism lives","what an organism eats","a group of species","a food chain"],a:0,h:"Think of it as an organism's home.",e:"Its home."},
{q:"Two lions fighting over the same prey is…",o:["competition","mutualism","parasitism","commensalism"],a:0,h:"They both want the same resource.",e:"Competition."}],
cq:[
{q:"Why are there fewer lions than zebras in an ecosystem?",o:["Energy decreases at each level of the food chain","Lions eat grass","Zebras eat lions","Lions don't need energy"],a:0,e:"Only about 10% of energy passes up each level."},
{q:"What could happen if all the decomposers disappeared?",o:["Dead material would pile up and nutrients wouldn't return to the soil","Plants would grow faster","Nothing would change","Animals would live forever"],a:0,e:"Nutrient recycling would stop."},
{q:"Most lions in an area die from disease. What happens to the zebra population at first?",o:["It increases","It decreases","It disappears","It doesn't change"],a:0,e:"Fewer predators means more zebras survive."},
{q:"A food web is better than a food chain for showing an ecosystem because…",o:["it shows many linked feeding relationships","it only shows plants","it is shorter","it shows the weather"],a:0,e:"Most animals eat more than one thing."},
{q:"Commensalism means…",o:["one organism benefits and the other is unaffected","both benefit","one is harmed","both are harmed"],a:0,e:"For example, birds nesting in a tree."}]},

{id:"g8-ns-microorganisms",grade:8,term:1,subject:"ns",strand:"Life & living",title:"Micro-organisms",
notes:`<h2>What are micro-organisms?</h2>
<p>Living things too small to see without a microscope. There are four main groups:</p>
<div class="tbl"><table><tr><th>Group</th><th>Example of useful</th><th>Example of harmful</th></tr>
<tr><td><b>Viruses</b> (smallest; only reproduce inside living cells)</td><td>Used to make some vaccines</td><td>Flu, HIV, measles</td></tr>
<tr><td><b>Bacteria</b> (single cells, no nucleus)</td><td>Making yoghurt and cheese; decomposing waste</td><td>TB (tuberculosis), cholera</td></tr>
<tr><td><b>Protists</b> (single cells with a nucleus)</td><td>Algae produce oxygen</td><td>Malaria (spread by mosquitoes)</td></tr>
<tr><td><b>Fungi</b> (yeasts and moulds)</td><td>Yeast makes bread rise; penicillin is made from a mould</td><td>Athlete's foot, ringworm</td></tr></table></div>
<h2>Useful micro-organisms</h2>
<ul><li>Food: yeast in bread and beer, bacteria in yoghurt, maas and cheese.</li>
<li>Decomposers recycle nutrients. Bacteria clean sewage water.</li>
<li>Medicine: the antibiotic <b>penicillin</b> came from a fungus.</li></ul>
<h2>Preventing disease</h2>
<ul><li>Wash hands with soap, drink clean water, cook food properly and keep it cool.</li>
<li><b>Vaccines</b> train the body to fight specific diseases.</li>
<li><b>Antibiotics kill bacteria but do NOT work against viruses</b>, such as colds and flu.</li></ul>`,
qs:[
{q:"Micro-organisms are…",o:["living things too small to see without a microscope","large animals","types of rock","only harmful"],a:0,e:"Micro means very small."},
{q:"Which is the smallest type of micro-organism?",o:["Virus","Bacterium","Fungus","Protist"],a:0,e:"Viruses are much smaller than bacteria."},
{q:"Which micro-organism makes bread rise?",o:["Yeast (a fungus)","A virus","Malaria","TB bacteria"],a:0,e:"Yeast releases carbon dioxide."},
{q:"Yoghurt is made with the help of…",o:["bacteria","viruses","protists","worms"],a:0,e:"Bacteria ferment the milk."},
{q:"Which disease is caused by a virus?",o:["HIV","TB","Athlete's foot","Malaria"],a:0,e:"HIV is a virus."},
{q:"Malaria is caused by a protist and spread by…",o:["mosquitoes","dogs","water only","bread"],a:0,e:"Mosquitoes carry the protist."},
{q:"TB (tuberculosis) is caused by…",o:["bacteria","a virus","a fungus","a protist"],a:0,e:"TB is bacterial."},
{q:"Penicillin is an antibiotic made from a…",o:["fungus (mould)","virus","protist","plant root"],a:0,e:"It was discovered in a mould."},
{q:"Antibiotics are used to treat infections caused by…",o:["bacteria","viruses","all micro-organisms","allergies"],a:0,e:"They don't work on viruses."},
{q:"Which is the best way to prevent spreading germs?",o:["Washing hands with soap","Sharing cups","Leaving food out","Coughing into your hands"],a:0,e:"Soap removes germs."}],
pq:[
{q:"Which is a fungus?",o:["Mushroom","Bacterium","Virus","Mosquito"],a:0,h:"It grows in damp places.",e:"Mushrooms are fungi."},
{q:"Which tool do we need to see bacteria?",o:["Microscope","Telescope","Magnifying mirror","Ruler"],a:0,h:"Micro means small.",e:"A microscope."},
{q:"Athlete's foot is caused by a…",o:["fungus","virus","bacterium","protist"],a:0,h:"It grows in warm, damp places like shoes.",e:"A fungus."},
{q:"What does a vaccine do?",o:["Trains the body to fight a specific disease","Kills all bacteria instantly","Causes the disease","Cleans water"],a:0,h:"It prepares the immune system.",e:"It builds immunity."},
{q:"Which is useful work done by bacteria?",o:["Decomposing dead material","Causing TB","Spreading cholera","Causing flu"],a:0,h:"Think about recycling nutrients.",e:"Decomposition."}],
cq:[
{q:"Why won't antibiotics cure a cold?",o:["Colds are caused by viruses, and antibiotics don't kill viruses","Colds are caused by fungi","Antibiotics are too weak","Colds aren't infections"],a:0,e:"Antibiotics only work on bacteria."},
{q:"How do viruses reproduce?",o:["Only inside living cells","By splitting in water","By making seeds","Through photosynthesis"],a:0,e:"They need a host cell."},
{q:"Why should food be kept in a fridge?",o:["Cold slows the growth of micro-organisms","It kills all germs","It adds vitamins","It makes food bigger"],a:0,e:"Micro-organisms grow slowly in the cold."},
{q:"Which pair shows one useful and one harmful micro-organism?",o:["Yeast in bread; bacteria causing TB","Malaria; HIV","Yoghurt bacteria; penicillin","Athlete's foot; ringworm"],a:0,e:"Yeast is useful; TB bacteria are harmful."},
{q:"How does sleeping under a treated mosquito net help prevent malaria?",o:["It stops mosquitoes carrying the protist from biting","It kills bacteria","It cures malaria","It cleans water"],a:0,e:"Malaria is spread by mosquito bites."}]},

/* ===== Term 2: Matter and materials ===== */
{id:"g8-ns-atoms",grade:8,term:2,subject:"ns",strand:"Matter & materials",title:"Atoms",
notes:`<h2>What is an atom?</h2>
<p>All matter is made of tiny particles called <b>atoms</b>. An atom has a central <b>nucleus</b> with electrons moving around it.</p>
<div class="tbl"><table><tr><th>Particle</th><th>Charge</th><th>Where</th></tr>
<tr><td>Proton</td><td>Positive (+)</td><td>Nucleus</td></tr>
<tr><td>Neutron</td><td>No charge (neutral)</td><td>Nucleus</td></tr>
<tr><td>Electron</td><td>Negative (−)</td><td>Around the nucleus, in energy levels (shells)</td></tr></table></div>
<p>An atom has equal numbers of protons and electrons, so it is <b>neutral</b> overall.</p>
<h2>Elements and the Periodic Table</h2>
<ul><li>An <b>element</b> is made of only one kind of atom. Each element has a <b>symbol</b>: H (hydrogen), O (oxygen), C (carbon), Na (sodium), Fe (iron), Cu (copper).</li>
<li>The <b>atomic number</b> is the number of protons. Hydrogen is 1, carbon is 6, oxygen is 8.</li>
<li>The <b>Periodic Table</b> arranges elements by atomic number. Most elements are <b>metals</b> (on the left); <b>non-metals</b> are on the right.</li></ul>
<h2>Compounds and molecules</h2>
<ul><li>A <b>molecule</b> is two or more atoms joined together: O₂ (oxygen gas).</li>
<li>A <b>compound</b> is made of two or more <i>different</i> elements chemically joined: H₂O (water), CO₂ (carbon dioxide), NaCl (table salt).</li></ul>`,
qs:[
{q:"What is the charge of a proton?",o:["Positive","Negative","Neutral","It changes"],a:0,e:"Protons are positive."},
{q:"What is the charge of an electron?",o:["Positive","Negative","Neutral","Double"],a:1,e:"Electrons are negative."},
{q:"Which particle has no charge?",o:["Neutron","Proton","Electron","Nucleus"],a:0,e:"Neutrons are neutral."},
{q:"Where are protons and neutrons found?",o:["In the nucleus","Around the nucleus","Outside the atom","In the shells"],a:0,e:"Both are in the nucleus."},
{q:"The atomic number tells you the number of…",o:["protons","neutrons","atoms","molecules"],a:0,e:"Atomic number = number of protons."},
{q:"What is the chemical symbol for sodium?",o:["Na","S","So","Sd"],a:0,e:"From its Latin name, natrium."},
{q:"What is the chemical symbol for iron?",o:["Fe","I","Ir","In"],a:0,e:"From the Latin ferrum."},
{q:"An element is made of…",o:["only one kind of atom","two kinds of atoms","only molecules","only electrons"],a:0,e:"Elements are pure substances of one atom type."},
{q:"Which is a compound?",o:["H₂O","O₂","Fe","He"],a:0,e:"Water contains two different elements."},
{q:"Why is an atom neutral overall?",o:["It has equal numbers of protons and electrons","It has no particles","It has only neutrons","It has more electrons"],a:0,e:"Positive and negative charges cancel out."}],
pq:[
{q:"What are all substances made of?",o:["Atoms","Cells","Light","Energy only"],a:0,h:"They're the tiny building blocks of matter.",e:"Atoms."},
{q:"What is the symbol for oxygen?",o:["O","Ox","Og","Oy"],a:0,h:"Just the first letter.",e:"O."},
{q:"What is in the centre of an atom?",o:["The nucleus","An electron","Empty space only","A molecule"],a:0,h:"It holds protons and neutrons.",e:"The nucleus."},
{q:"Where are most metals on the Periodic Table?",o:["On the left","On the right","At the top only","Nowhere"],a:0,h:"Non-metals are on the other side.",e:"On the left."},
{q:"Table salt (NaCl) is a…",o:["compound","element","single atom","mixture of gases"],a:0,h:"It contains sodium and chlorine joined together.",e:"A compound."}],
cq:[
{q:"Carbon has atomic number 6. How many protons and electrons does a carbon atom have?",o:["6 protons and 6 electrons","6 protons and 12 electrons","3 of each","12 protons and 6 electrons"],a:0,e:"A neutral atom has equal numbers."},
{q:"What is the difference between a molecule and a compound?",o:["A compound contains different elements; a molecule can be the same element (like O₂)","There is no difference","A molecule is always a metal","A compound is a single atom"],a:0,e:"O₂ is a molecule but not a compound."},
{q:"How many atoms are in one molecule of CO₂?",o:["3","2","1","4"],a:0,e:"One carbon and two oxygen atoms."},
{q:"How does the Periodic Table arrange the elements?",o:["By atomic number","Alphabetically","By colour","By price"],a:0,e:"From the smallest atomic number to the largest."},
{q:"Which symbol stands for copper?",o:["Cu","Co","C","Cp"],a:0,e:"From the Latin cuprum."}]},

{id:"g8-ns-particles",grade:8,term:2,subject:"ns",strand:"Matter & materials",title:"The particle model of matter",
notes:`<h2>The particle model</h2>
<ul><li>All matter is made of tiny particles that are <b>always moving</b>.</li>
<li>There are spaces between the particles, and forces of attraction hold them together.</li>
<li>Heating gives particles more energy, so they move faster.</li></ul>
<h2>Three states of matter</h2>
<div class="tbl"><table><tr><th>State</th><th>Arrangement</th><th>Movement</th><th>Shape and volume</th></tr>
<tr><td>Solid</td><td>Tightly packed in a regular pattern</td><td>Vibrate in place</td><td>Fixed shape, fixed volume</td></tr>
<tr><td>Liquid</td><td>Close together, irregular</td><td>Slide past each other</td><td>Takes the container's shape, fixed volume</td></tr>
<tr><td>Gas</td><td>Far apart</td><td>Move quickly in all directions</td><td>Fills any container</td></tr></table></div>
<h2>Changes of state</h2>
<p><b>Melting</b> (solid → liquid), <b>evaporating/boiling</b> (liquid → gas), <b>condensing</b> (gas → liquid), <b>freezing</b> (liquid → solid), <b>sublimation</b> (solid → gas directly).</p>
<h2>Explaining everyday things</h2>
<ul><li><b>Diffusion</b>: particles spread from high to low concentration, like the smell of perfume across a room.</li>
<li><b>Expansion</b>: heated materials expand because particles move more and take up more space. Bridges have expansion gaps.</li>
<li><b>Gas pressure</b>: gas particles hit the walls of their container.</li>
<li><b>Density</b> = mass ÷ volume. Solids are usually denser than gases because particles are packed closely.</li></ul>`,
qs:[
{q:"According to the particle model, particles in matter are…",o:["always moving","completely still","only in gases","alive"],a:0,e:"Particles are in constant motion."},
{q:"In a solid, particles…",o:["vibrate in fixed positions","move freely","are far apart","don't exist"],a:0,e:"They are tightly packed and vibrate."},
{q:"Which state has a fixed volume but takes the shape of its container?",o:["Liquid","Solid","Gas","None"],a:0,e:"Liquids flow but don't expand to fill space."},
{q:"In which state are particles furthest apart?",o:["Gas","Solid","Liquid","They're the same"],a:0,e:"Gas particles are far apart."},
{q:"Changing from a liquid to a solid is called…",o:["freezing","melting","condensing","evaporating"],a:0,e:"Freezing."},
{q:"Changing from a gas to a liquid is called…",o:["condensing","boiling","melting","sublimation"],a:0,e:"Condensation, like water drops on a cold glass."},
{q:"The smell of perfume spreading across a room is an example of…",o:["diffusion","freezing","condensation","density"],a:0,e:"Particles spread out."},
{q:"Why do materials expand when heated?",o:["Particles move more and take up more space","Particles get bigger","New particles appear","Particles stop moving"],a:0,e:"The particles themselves don't grow."},
{q:"How do you calculate density?",o:["Mass ÷ volume","Volume ÷ mass","Mass × volume","Mass + volume"],a:0,e:"Density = m ÷ V."},
{q:"Solid to gas directly, without becoming a liquid, is called…",o:["sublimation","evaporation","condensation","melting"],a:0,e:"Dry ice does this."}],
pq:[
{q:"What happens to particles when they are heated?",o:["They move faster","They stop","They shrink","They disappear"],a:0,h:"Heat gives them more energy.",e:"They move faster."},
{q:"Ice changing into water is…",o:["melting","freezing","condensing","boiling"],a:0,h:"Solid to liquid.",e:"Melting."},
{q:"Which state can be squashed (compressed) most easily?",o:["Gas","Solid","Liquid","All equally"],a:0,h:"Which has the most space between particles?",e:"Gas."},
{q:"Which state has a fixed shape?",o:["Solid","Liquid","Gas","None"],a:0,h:"Think of a brick.",e:"Solid."},
{q:"Gas pressure is caused by…",o:["particles hitting the walls of the container","particles standing still","light","colour"],a:0,h:"Billions of tiny collisions.",e:"Particle collisions."}],
cq:[
{q:"Why do bridges have small gaps (expansion joints)?",o:["So the material can expand in hot weather without cracking","To let water through","To save money","For decoration"],a:0,e:"Heat makes the bridge expand."},
{q:"An object has a mass of 200 g and a volume of 50 cm³. What is its density?",o:["4 g/cm³","250 g/cm³","0,25 g/cm³","10 000 g/cm³"],a:0,e:"200 ÷ 50 = 4."},
{q:"Why do water droplets form on a cold can of cooldrink?",o:["Water vapour in the air condenses on the cold surface","The can leaks","The drink sweats","Ice melts inside"],a:0,e:"The vapour cools and becomes a liquid."},
{q:"Why does diffusion happen faster in hot water than in cold water?",o:["Particles move faster when hot","Hot water has fewer particles","Cold water is thicker","It doesn't"],a:0,e:"More energy means faster movement."},
{q:"Why does a balloon get bigger when it is warmed?",o:["Gas particles move faster and push harder on the walls","The rubber grows","More air enters","Particles get bigger"],a:0,e:"Increased particle motion raises pressure."}]},

{id:"g8-ns-reactions",grade:8,term:2,subject:"ns",strand:"Matter & materials",title:"Chemical reactions",
notes:`<h2>Physical vs chemical changes</h2>
<ul><li>A <b>physical change</b> changes the state or shape, but no new substance forms, and it's often reversible (melting ice, dissolving sugar).</li>
<li>A <b>chemical change (reaction)</b> forms <b>new substances</b> and is usually hard to reverse (burning paper, rusting, cooking an egg).</li></ul>
<h2>Signs of a chemical reaction</h2><p>Gas bubbles, a colour change, a temperature change (heat or cold), light, or a solid forming in a liquid (a <b>precipitate</b>).</p>
<h2>Reactants and products</h2>
<p>The substances you start with are <b>reactants</b>; the new substances formed are <b>products</b>.</p>
<div class="ex"><b>Word equation</b>hydrogen + oxygen → water<br><b>Balanced equation</b>2H₂ + O₂ → 2H₂O</div>
<h2>Conservation of mass</h2>
<div class="key">In a chemical reaction, atoms are rearranged, not created or destroyed. The total mass of the reactants equals the total mass of the products.</div>
<p>A balanced equation has the same number of each type of atom on both sides: 2H₂ + O₂ → 2H₂O has 4 H and 2 O on each side.</p>`,
qs:[
{q:"In a chemical reaction…",o:["new substances are formed","only the shape changes","nothing changes","only the state changes"],a:0,e:"New substances form."},
{q:"Which is a chemical change?",o:["Burning paper","Melting ice","Cutting paper","Dissolving sugar"],a:0,e:"Burning forms new substances (ash, smoke, gases)."},
{q:"Which is a physical change?",o:["Melting butter","Rusting iron","Cooking an egg","Burning wood"],a:0,e:"No new substance forms."},
{q:"Which is a sign of a chemical reaction?",o:["Gas bubbles forming","Ice cracking","Paper folding","Water pouring"],a:0,e:"Gas production signals a reaction."},
{q:"The substances you start with in a reaction are called…",o:["reactants","products","precipitates","elements only"],a:0,e:"Reactants."},
{q:"The new substances formed in a reaction are called…",o:["products","reactants","atoms","mixtures"],a:0,e:"Products."},
{q:"What does conservation of mass mean?",o:["The total mass before and after a reaction is the same","Mass disappears","Mass doubles","Only gases have mass"],a:0,e:"Atoms are only rearranged."},
{q:"A solid that forms when two liquids react is called a…",o:["precipitate","product gas","catalyst","solution"],a:0,e:"A precipitate."},
{q:"Which word equation is correct?",o:["hydrogen + oxygen → water","water → hydrogen + salt","oxygen → hydrogen","carbon → water"],a:0,e:"Hydrogen burns in oxygen to form water."},
{q:"In 2H₂ + O₂ → 2H₂O, how many hydrogen atoms are on each side?",o:["4","2","6","1"],a:0,e:"2 × 2 = 4 on each side."}],
pq:[
{q:"Is rusting a chemical or a physical change?",o:["Chemical","Physical","Neither","Both"],a:0,h:"Does a new substance form?",e:"Chemical: rust is a new substance."},
{q:"Dissolving salt in water is…",o:["a physical change","a chemical change","impossible","burning"],a:0,h:"You can get the salt back by evaporating the water.",e:"Physical."},
{q:"Which is a sign of a chemical reaction?",o:["A change in colour that can't be undone","Water freezing","Breaking a stick","Folding a shirt"],a:0,h:"Think of a cut apple turning brown.",e:"A colour change."},
{q:"In the reaction A + B → C, what is C?",o:["The product","A reactant","An element","Nothing"],a:0,h:"It's on the right of the arrow.",e:"The product."},
{q:"During a reaction, atoms are…",o:["rearranged","destroyed","created","turned into energy only"],a:0,h:"They join up in new ways.",e:"Rearranged."}],
cq:[
{q:"10 g of reactants react completely. What is the total mass of the products?",o:["10 g","Less than 10 g","More than 10 g","0 g"],a:0,e:"Mass is conserved."},
{q:"Wood is burned in an open fire and the ash weighs less than the wood. Why?",o:["Gases such as carbon dioxide escaped into the air","Mass was destroyed","The wood shrank","The ash is lighter atoms"],a:0,e:"Gas products left, so they weren't weighed."},
{q:"Why is cooking an egg a chemical change?",o:["New substances form and it can't be reversed","It changes temperature only","It is easy to reverse","The egg changes shape only"],a:0,e:"The proteins change permanently."},
{q:"Which equation is balanced?",o:["2H₂ + O₂ → 2H₂O","H₂ + O₂ → H₂O","H₂ + O → H₂O₂","2H + O₂ → H₂O"],a:0,e:"4 H and 2 O on each side."},
{q:"Which is NOT a sign of a chemical reaction?",o:["A change of shape only","Gas bubbles","A precipitate","Heat given off"],a:0,e:"Shape changes are physical."}]},

/* ===== Term 3: Energy and change ===== */
{id:"g8-ns-static",grade:8,term:3,subject:"ns",strand:"Energy & change",title:"Static electricity",
notes:`<h2>Charges</h2>
<ul><li>Objects become charged when <b>electrons</b> move from one object to another, usually by <b>friction</b> (rubbing).</li>
<li>An object that <b>gains</b> electrons becomes <b>negatively</b> charged. One that <b>loses</b> electrons becomes <b>positively</b> charged.</li>
<li>Only electrons move. Protons stay in the nucleus.</li></ul>
<div class="key">Like charges <b>repel</b> (push apart). Unlike charges <b>attract</b> (pull together).</div>
<h2>Examples</h2>
<ul><li>Rubbing a balloon on your hair: electrons move to the balloon, so it can stick to a wall or lift your hair.</li>
<li>A small shock when touching a door handle after walking on carpet.</li>
<li>A charged object can attract small neutral objects like bits of paper.</li></ul>
<h2>Lightning</h2>
<p>Charges build up in storm clouds. When the charge is large enough, it jumps to the ground or another cloud as <b>lightning</b>, a huge spark.</p>
<h2>Earthing and safety</h2>
<ul><li><b>Earthing</b> lets extra charge flow safely into the ground. Lightning conductors on tall buildings do this.</li>
<li>Fuel trucks are earthed so a spark doesn't cause a fire.</li>
<li>During a storm, stay indoors, keep away from tall trees and open fields, and don't swim.</li></ul>`,
qs:[
{q:"Which particles move when an object becomes charged by rubbing?",o:["Electrons","Protons","Neutrons","Whole atoms"],a:0,e:"Only electrons transfer."},
{q:"An object that gains electrons becomes…",o:["negatively charged","positively charged","neutral","magnetic"],a:0,e:"Electrons are negative."},
{q:"An object that loses electrons becomes…",o:["positively charged","negatively charged","neutral","heavier"],a:0,e:"It has more protons than electrons."},
{q:"What do like charges do?",o:["Repel","Attract","Nothing","Merge"],a:0,e:"Like charges repel."},
{q:"What do unlike charges do?",o:["Attract","Repel","Cancel out forever","Explode"],a:0,e:"Opposites attract."},
{q:"Charging objects by rubbing them together is called charging by…",o:["friction","conduction only","heating","freezing"],a:0,e:"Friction."},
{q:"Lightning is…",o:["a huge spark of static charge","a type of rain","sunlight","a magnet"],a:0,e:"Charge jumps from clouds."},
{q:"What does a lightning conductor do?",o:["Lets charge flow safely to the ground","Creates lightning","Makes noise","Stores rain"],a:0,e:"It earths the charge."},
{q:"A balloon rubbed on hair sticks to a wall because…",o:["it is charged and attracts the wall","it is wet","it is magnetic","it is heavy"],a:0,e:"Static charge causes attraction."},
{q:"What should you do during a thunderstorm?",o:["Stay indoors","Stand under a tall tree","Swim","Fly a kite"],a:0,e:"Indoors is safest."}],
pq:[
{q:"Two negatively charged balloons will…",o:["repel","attract","stick together","do nothing"],a:0,h:"They have the same charge.",e:"They repel."},
{q:"A positive and a negative charge will…",o:["attract","repel","cancel instantly","disappear"],a:0,h:"Opposites…",e:"Attract."},
{q:"Electrons carry which charge?",o:["Negative","Positive","None","Both"],a:0,h:"Remember from the atom.",e:"Negative."},
{q:"Earthing means…",o:["letting charge flow safely into the ground","digging holes","planting trees","charging batteries"],a:0,h:"The Earth can absorb extra charge.",e:"Safely discharging to the ground."},
{q:"Which can cause a small static shock?",o:["Walking on carpet, then touching a door handle","Drinking water","Reading a book","Sleeping"],a:0,h:"Friction builds up charge on you.",e:"Carpet friction."}],
cq:[
{q:"Why are fuel trucks earthed while filling up?",o:["To prevent a spark that could ignite the fuel","To keep the fuel cold","To make the truck heavier","To save fuel"],a:0,e:"Static sparks can cause fires."},
{q:"A rubbed plastic ruler picks up small bits of paper. Why?",o:["The charged ruler attracts the neutral paper","The paper is magnetic","The ruler is sticky","The paper is heavy"],a:0,e:"Charged objects attract light neutral objects."},
{q:"A cloth rubs a rod, and the rod becomes negative. What charge does the cloth get?",o:["Positive","Negative","None","Both"],a:0,e:"The cloth lost electrons to the rod."},
{q:"Why is standing under a tall tree dangerous in a storm?",o:["Lightning often strikes tall objects","Trees attract rain","It is too dark","Trees fall every time"],a:0,e:"Tall objects are likely lightning paths."},
{q:"Why can't protons move when objects are rubbed?",o:["They are held in the nucleus","They are too small","They are negative","They have no mass"],a:0,e:"Protons are bound in the nucleus."}]},

{id:"g8-ns-electrical",grade:8,term:3,subject:"ns",strand:"Energy & change",title:"Energy transfer in electrical systems",
notes:`<h2>A simple circuit</h2>
<p>An electric circuit is a complete path for current. It needs:</p>
<ul><li>an <b>energy source</b>, such as a cell or battery;</li><li><b>conducting wires</b>;</li>
<li>a <b>load</b> or resistor that uses the energy, such as a bulb, buzzer or motor;</li><li>a <b>switch</b> to open (break) or close (complete) the circuit.</li></ul>
<h2>Conductors and insulators</h2>
<p><b>Conductors</b> let electric current flow: copper, aluminium, iron, graphite. <b>Insulators</b> don't: plastic, rubber, glass, dry wood.</p>
<h2>Energy transfers</h2>
<div class="tbl"><table><tr><th>Device</th><th>Energy transfer</th></tr>
<tr><td>Cell</td><td>chemical → electrical</td></tr><tr><td>Bulb</td><td>electrical → light (and heat)</td></tr>
<tr><td>Kettle or heater</td><td>electrical → heat</td></tr><tr><td>Motor or fan</td><td>electrical → kinetic (movement)</td></tr>
<tr><td>Buzzer or speaker</td><td>electrical → sound</td></tr></table></div>
<h2>Effects of electric current</h2>
<ul><li><b>Heating effect</b>: kettles, toasters, stoves.</li><li><b>Magnetic effect</b>: electromagnets, motors, electric bells.</li>
<li><b>Chemical effect</b>: electroplating and charging batteries.</li></ul>
<p>Some energy is always “wasted” as heat; efficient devices waste less.</p>`,
qs:[
{q:"What does a cell do in a circuit?",o:["Provides energy","Uses energy as light","Stops the current","Measures current"],a:0,e:"It's the energy source."},
{q:"What does a switch do?",o:["Opens or closes the circuit","Stores energy","Makes light","Measures voltage"],a:0,e:"It breaks or completes the path."},
{q:"Which material is a conductor?",o:["Copper","Plastic","Rubber","Glass"],a:0,e:"Metals conduct."},
{q:"Which material is an insulator?",o:["Rubber","Iron","Aluminium","Graphite"],a:0,e:"Rubber doesn't conduct."},
{q:"What energy transfer happens in a cell?",o:["Chemical → electrical","Electrical → light","Heat → sound","Light → chemical"],a:0,e:"Chemicals in the cell provide electrical energy."},
{q:"What energy transfer happens in a bulb?",o:["Electrical → light and heat","Light → electrical","Chemical → sound","Kinetic → electrical"],a:0,e:"Bulbs give light and some heat."},
{q:"What energy transfer happens in an electric fan?",o:["Electrical → kinetic","Kinetic → electrical","Electrical → chemical","Heat → light"],a:0,e:"The motor makes movement."},
{q:"Which effect of current does a kettle use?",o:["Heating","Magnetic","Chemical","Sound"],a:0,e:"Heating effect."},
{q:"Which effect of current does an electromagnet use?",o:["Magnetic","Heating","Chemical","Light"],a:0,e:"Magnetic effect."},
{q:"For current to flow, a circuit must be…",o:["complete (closed)","open","broken","made of plastic"],a:0,e:"A complete path."}],
pq:[
{q:"Which is a load in a circuit?",o:["A bulb","A wire","A switch","A cell"],a:0,h:"It uses the electrical energy.",e:"A bulb."},
{q:"Why are wires covered in plastic?",o:["Plastic is an insulator that keeps us safe","Plastic conducts","For colour only","To make them heavier"],a:0,h:"Plastic doesn't let current through.",e:"Insulation for safety."},
{q:"A buzzer changes electrical energy into…",o:["sound","light","heat only","chemical"],a:0,h:"It makes a noise.",e:"Sound."},
{q:"Graphite (pencil lead) is…",o:["a conductor","an insulator","a metal","a magnet"],a:0,h:"It's a non-metal that surprisingly conducts.",e:"A conductor."},
{q:"Which effect is used to charge a phone battery?",o:["Chemical effect","Magnetic effect","Light effect","Sound effect"],a:0,h:"Energy is stored as chemical energy.",e:"Chemical."}],
cq:[
{q:"Why does a bulb get hot as well as giving light?",o:["Some energy is changed into heat (wasted energy)","It is broken","Heat makes light","It uses chemical energy"],a:0,e:"No device is 100% efficient."},
{q:"What energy chain happens in a torch?",o:["Chemical → electrical → light","Light → electrical → chemical","Heat → light","Kinetic → light"],a:0,e:"Battery to wires to bulb."},
{q:"Why are LED bulbs better than old filament bulbs?",o:["They waste less energy as heat","They are hotter","They use more electricity","They have no light"],a:0,e:"They are more efficient."},
{q:"A circuit has a cell, wires and a bulb, but the bulb doesn't light. What is a likely cause?",o:["The circuit is not complete","The wires are copper","The cell is new","The bulb is a conductor"],a:0,e:"A break means no current."},
{q:"Which device uses the magnetic effect of current?",o:["Electric motor","Toaster","Kettle","Iron"],a:0,e:"Motors use electromagnets."}]},

{id:"g8-ns-circuits",grade:8,term:3,subject:"ns",strand:"Energy & change",title:"Series and parallel circuits",
notes:`<h2>Series circuits</h2>
<ul><li>All components are in <b>one loop</b>.</li>
<li>The current has only one path and is the <b>same everywhere</b>.</li>
<li>Adding more bulbs makes each bulb <b>dimmer</b> (more resistance).</li>
<li>If one bulb breaks, the <b>whole circuit stops</b>.</li></ul>
<h2>Parallel circuits</h2>
<ul><li>Components are on <b>separate branches</b>.</li>
<li>Each bulb gets the full voltage, so the bulbs stay <b>bright</b>.</li>
<li>If one bulb breaks, the <b>others keep working</b>.</li>
<li>Homes are wired in parallel.</li></ul>
<h2>Cells</h2>
<p>Adding cells in series increases the voltage, making bulbs brighter (but too much can blow a bulb).</p>
<h2>Circuit symbols</h2>
<p>You must be able to draw and read the symbols for a cell, battery, bulb, switch (open and closed), resistor and wires.</p>
<div class="key">Series = one path, everything shares. Parallel = many paths, each branch is independent.</div>`,
qs:[
{q:"In a series circuit, components are…",o:["in one single loop","on separate branches","not connected","in two loops"],a:0,e:"One path only."},
{q:"In a parallel circuit, components are…",o:["on separate branches","in one loop","disconnected","always off"],a:0,e:"Each has its own path."},
{q:"In a series circuit, the current is…",o:["the same everywhere","different in each bulb","zero","doubled at the end"],a:0,e:"There's only one path."},
{q:"What happens when you add more bulbs in series?",o:["Each bulb gets dimmer","Each bulb gets brighter","Nothing","The cell recharges"],a:0,e:"Resistance increases."},
{q:"One bulb in a series circuit breaks. What happens?",o:["All the bulbs go off","Only that bulb goes off","The others get brighter","Nothing"],a:0,e:"The single path is broken."},
{q:"One bulb in a parallel circuit breaks. What happens?",o:["The others keep working","All go off","The others explode","The cell breaks"],a:0,e:"Other branches are still complete."},
{q:"How are homes usually wired?",o:["In parallel","In series","Not at all","With one loop"],a:0,e:"So appliances work independently."},
{q:"What does adding another cell in series do?",o:["Increases the voltage, so bulbs are brighter","Makes bulbs dimmer","Stops current","Has no effect"],a:0,e:"More voltage pushes more current."},
{q:"Bulbs in parallel are usually…",o:["brighter than the same bulbs in series","dimmer than in series","always off","the same as one bulb in series with two others"],a:0,e:"Each gets the full voltage."},
{q:"Why are circuit symbols used?",o:["They make diagrams quick and clear for everyone","They look nice","They are required by law","They show colour"],a:0,e:"Standard symbols are understood everywhere."}],
pq:[
{q:"How many paths does current have in a series circuit?",o:["One","Two","Many","None"],a:0,h:"Series means one after another.",e:"One."},
{q:"Christmas lights where one broken bulb switches off the whole string are wired in…",o:["series","parallel","neither","both"],a:0,h:"One break stops everything.",e:"Series."},
{q:"Which circuit lets you switch off one light while others stay on?",o:["Parallel","Series","Neither","Both"],a:0,h:"Each light needs its own branch.",e:"Parallel."},
{q:"Adding more bulbs in series makes the total resistance…",o:["increase","decrease","stay the same","zero"],a:0,h:"Each bulb adds opposition.",e:"Increase."},
{q:"Which is the symbol for a cell?",o:["A long line and a short line","A circle with a cross","A zigzag","A wavy line"],a:0,h:"Two parallel lines of different length.",e:"Long and short lines."}],
cq:[
{q:"Why are houses wired in parallel instead of series?",o:["Each appliance can work and be switched on its own","It uses one wire","Series is brighter","Parallel is cheaper to use"],a:0,e:"Independent branches."},
{q:"Two identical bulbs are in series with one cell. A third identical bulb is added in series. What happens?",o:["All three are dimmer","All three are brighter","Only the new one lights","Nothing changes"],a:0,e:"More resistance means less current."},
{q:"Which circuit would you use to keep lights working if one fails?",o:["Parallel","Series","Open circuit","No circuit"],a:0,e:"Parallel branches are independent."},
{q:"What could happen if you add too many cells in series to a small bulb?",o:["The bulb could blow","It will get dimmer","Nothing","The wires become insulators"],a:0,e:"Too much current damages the filament."},
{q:"In a series circuit, an ammeter reads 0,3 A before the first bulb. What does it read after the last bulb?",o:["0,3 A","0 A","0,6 A","0,1 A"],a:0,e:"Current is the same throughout a series circuit."}]},

{id:"g8-ns-light",grade:8,term:3,subject:"ns",strand:"Energy & change",title:"Visible light",
notes:`<h2>Properties of light</h2>
<ul><li>Light travels in <b>straight lines</b> and very fast: about <b>300 000 km per second</b>.</li>
<li>Light can travel through a vacuum (empty space), unlike sound.</li>
<li>Materials can be <b>transparent</b> (let light through clearly, like glass), <b>translucent</b> (let some light through, like frosted glass) or <b>opaque</b> (block light, like wood). Opaque objects make <b>shadows</b>.</li></ul>
<h2>The spectrum</h2>
<p>White light is a mixture of colours. A <b>prism</b> splits it into the <b>spectrum</b>: <b>red, orange, yellow, green, blue, indigo, violet</b> (ROYGBIV). This splitting is called <b>dispersion</b>. Rainbows form when raindrops disperse sunlight.</p>
<h2>Reflection</h2>
<div class="key">The angle of incidence equals the angle of reflection (measured from the normal).</div>
<p>Smooth, shiny surfaces like mirrors give clear reflections.</p>
<h2>Refraction</h2><p>Light bends when it moves from one material into another, because its speed changes. This is why a straw looks bent in water.</p>
<h2>Seeing colour</h2>
<ul><li>We see an object because light reflects off it into our eyes.</li>
<li>A red shirt <b>reflects red</b> light and absorbs the other colours.</li>
<li>White objects reflect all colours; black objects absorb all colours (which is why black clothes get hot in the sun).</li></ul>`,
qs:[
{q:"How does light travel?",o:["In straight lines","In circles","Only around corners","Only through water"],a:0,e:"That's why shadows form."},
{q:"About how fast does light travel?",o:["300 000 km per second","300 km per hour","340 m per second","3 km per second"],a:0,e:"Light is the fastest thing known."},
{q:"A material that lets light through clearly is…",o:["transparent","translucent","opaque","reflective only"],a:0,e:"Like clear glass."},
{q:"A material that blocks all light is…",o:["opaque","transparent","translucent","refractive"],a:0,e:"Opaque objects cast shadows."},
{q:"What does a prism do to white light?",o:["Splits it into a spectrum of colours","Makes it brighter","Turns it black","Stops it"],a:0,e:"Dispersion."},
{q:"Which colour is at the opposite end of the spectrum from red?",o:["Violet","Green","Yellow","Orange"],a:0,e:"ROYGBIV: red to violet."},
{q:"In reflection, the angle of incidence is…",o:["equal to the angle of reflection","double the angle of reflection","always 90°","zero"],a:0,e:"The law of reflection."},
{q:"A straw looks bent in a glass of water because of…",o:["refraction","reflection","dispersion","absorption"],a:0,e:"Light bends as it changes speed."},
{q:"Why does a red shirt look red?",o:["It reflects red light and absorbs other colours","It absorbs red light","It makes red light","It is hot"],a:0,e:"We see the reflected colour."},
{q:"Why do black clothes get hot in the sun?",o:["Black absorbs all colours of light","Black reflects all light","Black is heavier","Black makes heat"],a:0,e:"Absorbed light becomes heat."}],
pq:[
{q:"Frosted glass is…",o:["translucent","transparent","opaque","a mirror"],a:0,h:"It lets some light through, but you can't see clearly.",e:"Translucent."},
{q:"A rainbow is an example of…",o:["dispersion","reflection only","a shadow","opaque light"],a:0,h:"Sunlight is split into colours.",e:"Dispersion."},
{q:"How many colours are in the visible spectrum?",o:["7","3","5","10"],a:0,h:"Remember ROYGBIV.",e:"7."},
{q:"A white object…",o:["reflects all colours","absorbs all colours","makes its own light","is always cold"],a:0,h:"White is all colours together.",e:"Reflects all colours."},
{q:"Shadows form because light…",o:["travels in straight lines and is blocked","bends around objects","is too fast","is a colour"],a:0,h:"Light can't go around the object.",e:"Straight-line travel."}],
cq:[
{q:"A mirror reflects a ray that hits it at 30° to the normal. At what angle does it reflect?",o:["30°","60°","90°","15°"],a:0,e:"Angle of incidence = angle of reflection."},
{q:"Why can light travel from the Sun to Earth but sound can't?",o:["Light can travel through a vacuum; sound needs particles","Sound is faster","Light is louder","Space is full of air"],a:0,e:"Space is a vacuum."},
{q:"Why is it cooler to wear white clothes in summer?",o:["White reflects most light, so less is absorbed as heat","White absorbs more heat","White is thinner","It isn't cooler"],a:0,e:"Reflected light doesn't heat the fabric."},
{q:"Why does a swimming pool look shallower than it really is?",o:["Light refracts as it leaves the water","The water is coloured","Reflection off the bottom","Water absorbs depth"],a:0,e:"Refraction bends the light rays."},
{q:"A green leaf looks green because it…",o:["reflects green light and absorbs most other colours","absorbs green light","makes green light","is transparent"],a:0,e:"We see the colour that is reflected."}]}
);
TOPICS.slice(-10).forEach(t=>TOPIC[t.id]=t);
