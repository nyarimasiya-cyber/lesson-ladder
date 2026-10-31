/* Grade 9 Natural Sciences, Term 1: Life and living. */
TOPICS.push(
{id:"g9-ns-cells",grade:9,term:1,subject:"ns",strand:"Life & living",title:"Cells as the basic units of life",
notes:`<h2>Cells</h2>
<p>All living things are made of <b>cells</b>, the basic units of life. New cells come from existing cells. We see cells using a <b>microscope</b>.</p>
<h2>Parts of a cell</h2>
<div class="tbl"><table><tr><th>Part</th><th>Job</th><th>Plant</th><th>Animal</th></tr>
<tr><td>Cell membrane</td><td>Controls what enters and leaves</td><td>✓</td><td>✓</td></tr>
<tr><td>Nucleus</td><td>Controls the cell; contains DNA (genetic information)</td><td>✓</td><td>✓</td></tr>
<tr><td>Cytoplasm</td><td>Jelly-like fluid where reactions happen</td><td>✓</td><td>✓</td></tr>
<tr><td>Mitochondria</td><td>Respiration: release energy</td><td>✓</td><td>✓</td></tr>
<tr><td>Cell wall</td><td>Supports and protects; gives a fixed shape</td><td>✓</td><td>✗</td></tr>
<tr><td>Chloroplasts</td><td>Photosynthesis</td><td>✓</td><td>✗</td></tr>
<tr><td>Large vacuole</td><td>Stores water and keeps the cell firm</td><td>✓</td><td>small or none</td></tr></table></div>
<h2>Levels of organisation</h2>
<div class="key">cell → tissue → organ → organ system → organism</div>
<p>Example: muscle cells → muscle tissue → heart → circulatory system → human.</p>
<p>Cells are specialised for their jobs: red blood cells carry oxygen, nerve cells carry messages, root hair cells absorb water.</p>`,
qs:[
{q:"What is the basic unit of life?",o:["The cell","The organ","The tissue","The atom"],a:0,e:"All living things are made of cells."},
{q:"Which part controls the cell and contains DNA?",o:["Nucleus","Cytoplasm","Cell wall","Vacuole"],a:0,e:"The nucleus is the control centre."},
{q:"Which part controls what enters and leaves the cell?",o:["Cell membrane","Nucleus","Chloroplast","Mitochondria"],a:0,e:"The membrane is selectively permeable."},
{q:"Where does respiration happen in a cell?",o:["Mitochondria","Chloroplasts","Cell wall","Vacuole"],a:0,e:"Mitochondria release energy."},
{q:"Which part is found in plant cells but NOT animal cells?",o:["Cell wall","Nucleus","Cell membrane","Cytoplasm"],a:0,e:"Also chloroplasts and a large vacuole."},
{q:"What do chloroplasts do?",o:["Photosynthesis","Respiration","Control the cell","Store DNA"],a:0,e:"They contain chlorophyll."},
{q:"What is the correct order of organisation?",o:["Cell → tissue → organ → system → organism","Organ → cell → tissue → system","Tissue → cell → organism → organ","System → organ → cell → tissue"],a:0,e:"From smallest to largest."},
{q:"A group of similar cells doing the same job is a…",o:["tissue","organ","system","organism"],a:0,e:"For example, muscle tissue."},
{q:"Which instrument do we use to see cells?",o:["Microscope","Telescope","Thermometer","Ruler"],a:0,e:"Cells are too small to see without one."},
{q:"What is the jelly-like fluid inside a cell called?",o:["Cytoplasm","Nucleus","Membrane","Vacuole"],a:0,e:"Cytoplasm."}],
pq:[
{q:"Which is an organ?",o:["The heart","A muscle cell","Blood","A nerve cell"],a:0,h:"An organ is made of several tissues working together.",e:"The heart."},
{q:"Which cell part gives a plant cell a fixed shape?",o:["Cell wall","Nucleus","Mitochondria","Cytoplasm"],a:0,h:"It's a stiff outer layer.",e:"The cell wall."},
{q:"What does the large vacuole in plant cells store?",o:["Water","DNA","Chlorophyll","Bone"],a:0,h:"It keeps the cell firm.",e:"Water (cell sap)."},
{q:"Do animal cells have mitochondria?",o:["Yes","No","Only muscle cells","Only plants do"],a:0,h:"Animals need energy too.",e:"Yes."},
{q:"Where do new cells come from?",o:["Existing cells dividing","Air","Food directly","Nowhere"],a:0,h:"Cells divide to make more cells.",e:"Existing cells."}],
cq:[
{q:"Why don't animal cells have chloroplasts?",o:["Animals get food by eating, not photosynthesis","Animals live in the dark","Chloroplasts are too big","They do have them"],a:0,e:"Only producers photosynthesise."},
{q:"Root hair cells have a long thin shape. Why?",o:["It gives a large surface area to absorb water","To make food","To store fat","To move"],a:0,e:"Specialised for absorption."},
{q:"Which is the correct example of the levels of organisation?",o:["Muscle cell → muscle tissue → heart → circulatory system → human","Heart → blood → cell → human","Human → heart → cell → tissue","Tissue → organ → cell → system"],a:0,e:"Smallest to largest."},
{q:"Red blood cells have no nucleus. How does this help them?",o:["More space to carry oxygen","They live longer","They can make food","They can divide faster"],a:0,e:"More room for haemoglobin."},
{q:"Which three parts do BOTH plant and animal cells have?",o:["Nucleus, cell membrane and cytoplasm","Cell wall, chloroplasts and vacuole","Only the cell wall","Chloroplasts and mitochondria only"],a:0,e:"These are common to both."}]},

{id:"g9-ns-body",grade:9,term:1,subject:"ns",strand:"Life & living",title:"Systems in the human body",
notes:`<h2>Organ systems and their jobs</h2>
<div class="tbl"><table><tr><th>System</th><th>Main organs</th><th>Job</th></tr>
<tr><td>Skeletal</td><td>Bones, joints</td><td>Support, protection, movement, makes blood cells</td></tr>
<tr><td>Muscular</td><td>Muscles</td><td>Movement</td></tr>
<tr><td>Digestive</td><td>Mouth, stomach, intestines, liver</td><td>Breaks down food and absorbs nutrients</td></tr>
<tr><td>Circulatory</td><td>Heart, blood vessels, blood</td><td>Transports oxygen, nutrients and waste</td></tr>
<tr><td>Respiratory</td><td>Nose, trachea, lungs</td><td>Gas exchange: takes in oxygen, removes carbon dioxide</td></tr>
<tr><td>Excretory</td><td>Kidneys, bladder, skin</td><td>Removes waste (urine, sweat)</td></tr>
<tr><td>Nervous</td><td>Brain, spinal cord, nerves</td><td>Controls and coordinates; carries messages</td></tr>
<tr><td>Endocrine</td><td>Glands (e.g. pancreas, thyroid)</td><td>Makes hormones, chemical messengers</td></tr>
<tr><td>Reproductive</td><td>Testes or ovaries</td><td>Produces offspring</td></tr></table></div>
<h2>Systems work together</h2>
<p>Example: when you run, the <b>nervous</b> system signals the <b>muscles</b>; the <b>respiratory</b> system takes in more oxygen; the <b>circulatory</b> system pumps it faster to the muscles; and the skin (excretory) sweats to cool you down.</p>
<div class="key">The skull protects the brain, and the ribs protect the heart and lungs.</div>`,
qs:[
{q:"Which system supports the body and protects organs?",o:["Skeletal","Digestive","Nervous","Endocrine"],a:0,e:"Bones support and protect."},
{q:"Which system transports oxygen and nutrients around the body?",o:["Circulatory","Respiratory","Skeletal","Excretory"],a:0,e:"Blood carries them."},
{q:"Which system takes in oxygen and removes carbon dioxide?",o:["Respiratory","Digestive","Muscular","Reproductive"],a:0,e:"Gas exchange happens in the lungs."},
{q:"Which organs filter waste from the blood to make urine?",o:["Kidneys","Lungs","Heart","Stomach"],a:0,e:"Part of the excretory system."},
{q:"Which system controls and coordinates the body using nerves?",o:["Nervous","Endocrine","Skeletal","Circulatory"],a:0,e:"Brain, spinal cord and nerves."},
{q:"Hormones are produced by the…",o:["endocrine system","digestive system","skeletal system","respiratory system"],a:0,e:"Glands release hormones."},
{q:"What protects the brain?",o:["The skull","The ribs","The pelvis","The spine only"],a:0,e:"The skull."},
{q:"Which system breaks down food?",o:["Digestive","Excretory","Nervous","Muscular"],a:0,e:"The digestive system."},
{q:"Which organ pumps blood?",o:["Heart","Liver","Lungs","Kidney"],a:0,e:"The heart."},
{q:"Bones and muscles work together to cause…",o:["movement","digestion","breathing only","hormone release"],a:0,e:"Muscles pull on bones."}],
pq:[
{q:"Which organ is part of the nervous system?",o:["Brain","Stomach","Heart","Lung"],a:0,h:"It's the control centre.",e:"The brain."},
{q:"What protects the heart and lungs?",o:["The ribs","The skull","The kneecap","The jaw"],a:0,h:"A bony cage in the chest.",e:"The rib cage."},
{q:"Sweating is part of which system?",o:["Excretory","Digestive","Skeletal","Reproductive"],a:0,h:"Sweat removes waste and water.",e:"Excretory (skin)."},
{q:"Which system includes the trachea?",o:["Respiratory","Circulatory","Digestive","Nervous"],a:0,h:"It's the windpipe.",e:"Respiratory."},
{q:"Where are blood cells made?",o:["In the bone marrow","In the stomach","In the lungs","In the skin"],a:0,h:"Inside some bones.",e:"Bone marrow."}],
cq:[
{q:"During exercise, why does your heart beat faster?",o:["To deliver more oxygen to the muscles","Because you're scared","To digest food","To make urine"],a:0,e:"Working muscles need more oxygen."},
{q:"Which two systems work together to get oxygen to the cells?",o:["Respiratory and circulatory","Digestive and skeletal","Nervous and reproductive","Excretory and muscular"],a:0,e:"Lungs take it in; blood carries it."},
{q:"What is the difference between the nervous and endocrine systems?",o:["Nerves send fast electrical messages; hormones are slower chemical messages in the blood","They are the same","Only the endocrine system uses the brain","Hormones are electrical"],a:0,e:"Both coordinate the body in different ways."},
{q:"Why do you sweat when you exercise?",o:["To cool the body down","To get rid of oxygen","To make energy","To digest food"],a:0,e:"Evaporating sweat cools the skin."},
{q:"Damage to the spinal cord can stop movement. Why?",o:["Messages from the brain can't reach the muscles","The bones break","Blood stops","Lungs fail"],a:0,e:"The spinal cord carries nerve signals."}]},

{id:"g9-ns-reproduction",grade:9,term:1,subject:"ns",strand:"Life & living",title:"Human reproduction",
notes:`<h2>Puberty</h2>
<p>Puberty is when the body matures and becomes able to reproduce, usually between about 9 and 16. It is controlled by <b>hormones</b>.</p>
<ul><li>Both: growth spurt, body hair, skin changes (pimples), emotional changes.</li>
<li>Boys: testes produce <b>sperm</b> and <b>testosterone</b>; the voice deepens; shoulders broaden.</li>
<li>Girls: ovaries release <b>eggs (ova)</b> and produce <b>oestrogen</b>; breasts develop; hips widen; menstruation begins.</li></ul>
<h2>Reproductive organs</h2>
<div class="tbl"><table><tr><th>Male</th><th>Female</th></tr>
<tr><td>Testes: make sperm</td><td>Ovaries: release eggs</td></tr>
<tr><td>Sperm ducts: carry sperm</td><td>Oviducts (fallopian tubes): where fertilisation happens</td></tr>
<tr><td>Penis</td><td>Uterus: where a baby develops</td></tr>
<tr><td></td><td>Vagina</td></tr></table></div>
<h2>The menstrual cycle</h2>
<p>A cycle lasts about <b>28 days</b>. An egg is released (<b>ovulation</b>) around the middle of the cycle. The uterus lining thickens; if the egg is not fertilised, the lining breaks down and leaves the body as a <b>period (menstruation)</b>.</p>
<h2>Fertilisation and pregnancy</h2>
<ul><li><b>Fertilisation</b>: a sperm joins with an egg in the oviduct to form a <b>zygote</b>.</li>
<li>The zygote divides and <b>implants</b> in the lining of the uterus.</li>
<li>The developing baby gets oxygen and food through the <b>placenta</b> and <b>umbilical cord</b>.</li>
<li>Pregnancy lasts about <b>9 months</b> (about 40 weeks).</li></ul>
<div class="key">Only condoms protect against both pregnancy and sexually transmitted infections (STIs), including HIV.</div>`,
qs:[
{q:"What controls the changes of puberty?",o:["Hormones","Bones","Muscles","Lungs"],a:0,e:"Hormones are chemical messengers."},
{q:"Where are sperm made?",o:["Testes","Ovaries","Uterus","Kidneys"],a:0,e:"In the testes."},
{q:"What do the ovaries release?",o:["Eggs (ova)","Sperm","Blood","Milk"],a:0,e:"Ovaries release eggs."},
{q:"Where does fertilisation usually happen?",o:["In the oviduct (fallopian tube)","In the uterus","In the ovary","In the vagina"],a:0,e:"The sperm meets the egg in the oviduct."},
{q:"Where does a baby develop during pregnancy?",o:["Uterus","Ovary","Oviduct","Stomach"],a:0,e:"In the uterus (womb)."},
{q:"About how long is a menstrual cycle?",o:["28 days","7 days","9 months","1 year"],a:0,e:"About 28 days, though it varies."},
{q:"The release of an egg is called…",o:["ovulation","fertilisation","menstruation","implantation"],a:0,e:"Ovulation."},
{q:"A fertilised egg is called a…",o:["zygote","sperm","placenta","hormone"],a:0,e:"A zygote."},
{q:"How does a developing baby get food and oxygen?",o:["Through the placenta and umbilical cord","By breathing","By eating","Through the skin only"],a:0,e:"From the mother's blood."},
{q:"Which method protects against both pregnancy and STIs?",o:["Condoms","The pill","An injection","None"],a:0,e:"Only condoms form a barrier against infection."}],
pq:[
{q:"Which hormone is mainly produced by the testes?",o:["Testosterone","Oestrogen","Insulin","Adrenaline"],a:0,h:"Its name sounds like testes.",e:"Testosterone."},
{q:"Which hormone is mainly produced by the ovaries?",o:["Oestrogen","Testosterone","Insulin","Thyroxine"],a:0,h:"It controls female development.",e:"Oestrogen."},
{q:"About how long does a human pregnancy last?",o:["9 months","3 months","12 months","28 days"],a:0,h:"About 40 weeks.",e:"About 9 months."},
{q:"Menstruation happens when…",o:["the uterus lining breaks down because the egg was not fertilised","a baby is born","ovulation happens","the egg is fertilised"],a:0,h:"It's the shedding of the uterus lining.",e:"No fertilisation."},
{q:"Which change happens to both boys and girls during puberty?",o:["A growth spurt","The voice deepens","Periods start","Breasts develop"],a:0,h:"Everyone gets taller.",e:"A growth spurt."}],
cq:[
{q:"What happens after a zygote forms?",o:["It divides and implants in the uterus lining","It leaves the body","It becomes an egg again","It turns into sperm"],a:0,e:"Implantation starts the pregnancy."},
{q:"Why does the uterus lining thicken each month?",o:["To prepare for a fertilised egg to implant","To store food for the mother","To make sperm","To protect the ovaries"],a:0,e:"It prepares for a possible pregnancy."},
{q:"Why can harmful substances like alcohol affect an unborn baby?",o:["They pass from the mother's blood through the placenta","They don't","The baby drinks them","Through the skin"],a:0,e:"The placenta lets many substances through."},
{q:"Around which day of a 28-day cycle does ovulation usually happen?",o:["Around day 14","Day 1","Day 28","Day 7"],a:0,e:"About halfway."},
{q:"Why is puberty a time of emotional change too?",o:["Hormones affect moods and feelings","Bones grow","The stomach changes","It isn't"],a:0,e:"Hormones influence emotions."}]},

{id:"g9-ns-circulatory",grade:9,term:1,subject:"ns",strand:"Life & living",title:"Circulatory and respiratory systems",
notes:`<h2>The heart</h2>
<p>The heart is a muscular pump with <b>four chambers</b>: two atria (top) and two ventricles (bottom). The right side pumps blood to the lungs; the left side pumps oxygen-rich blood to the body.</p>
<h2>Blood vessels</h2>
<div class="tbl"><table><tr><th>Vessel</th><th>Carries blood</th><th>Features</th></tr>
<tr><td>Arteries</td><td><b>Away</b> from the heart</td><td>Thick, elastic walls; high pressure</td></tr>
<tr><td>Veins</td><td><b>Towards</b> the heart</td><td>Thinner walls; valves stop backflow</td></tr>
<tr><td>Capillaries</td><td>Between arteries and veins</td><td>Very thin walls; where exchange with cells happens</td></tr></table></div>
<h2>Blood</h2>
<ul><li><b>Red blood cells</b> carry oxygen (using haemoglobin).</li><li><b>White blood cells</b> fight infection.</li>
<li><b>Platelets</b> help blood clot.</li><li><b>Plasma</b> is the liquid that carries nutrients, hormones and waste.</li></ul>
<h2>The respiratory system</h2>
<p>Air path: nose → trachea (windpipe) → bronchi → bronchioles → <b>alveoli</b> (tiny air sacs in the lungs). In the alveoli, oxygen moves into the blood and carbon dioxide moves out.</p>
<p><b>Breathing in</b>: the diaphragm contracts and moves down, the ribs move up and out, and air rushes in. <b>Breathing out</b>: the opposite.</p>
<h2>Keeping them healthy</h2><p>Smoking damages the alveoli and blood vessels. Exercise, a healthy diet and not smoking protect the heart and lungs. TB and asthma affect the lungs.</p>`,
qs:[
{q:"How many chambers does the human heart have?",o:["Four","Two","Three","Six"],a:0,e:"Two atria and two ventricles."},
{q:"Arteries carry blood…",o:["away from the heart","towards the heart","only to the lungs","only in the legs"],a:0,e:"Arteries go away."},
{q:"Veins carry blood…",o:["towards the heart","away from the heart","only from the lungs","nowhere"],a:0,e:"Veins return blood."},
{q:"Why do veins have valves?",o:["To stop blood flowing backwards","To make blood","To add oxygen","To clot blood"],a:0,e:"Blood in veins is under low pressure."},
{q:"Where are substances exchanged between blood and cells?",o:["Capillaries","Arteries","Veins","The heart"],a:0,e:"Capillary walls are very thin."},
{q:"Which blood cells carry oxygen?",o:["Red blood cells","White blood cells","Platelets","Plasma"],a:0,e:"They contain haemoglobin."},
{q:"Which part of the blood helps it clot?",o:["Platelets","Red blood cells","Plasma","White blood cells"],a:0,e:"Platelets."},
{q:"Where does gas exchange take place in the lungs?",o:["Alveoli","Trachea","Nose","Bronchi"],a:0,e:"Tiny air sacs."},
{q:"What happens to the diaphragm when you breathe in?",o:["It contracts and moves down","It relaxes and moves up","Nothing","It disappears"],a:0,e:"This makes space for air to enter."},
{q:"What do white blood cells do?",o:["Fight infection","Carry oxygen","Clot blood","Digest food"],a:0,e:"They defend the body."}],
pq:[
{q:"What is the windpipe called?",o:["Trachea","Oesophagus","Artery","Bronchiole"],a:0,h:"It starts with T.",e:"The trachea."},
{q:"Plasma is…",o:["the liquid part of blood","a type of cell","a lung","a vessel"],a:0,h:"It's mostly water.",e:"The liquid part."},
{q:"Which side of the heart pumps blood to the lungs?",o:["Right side","Left side","Both equally","Neither"],a:0,h:"The side that receives blood from the body.",e:"The right side."},
{q:"Which gas moves from the alveoli into the blood?",o:["Oxygen","Carbon dioxide","Nitrogen","Methane"],a:0,h:"We breathe it in.",e:"Oxygen."},
{q:"Which vessels have the thickest walls?",o:["Arteries","Veins","Capillaries","All are the same"],a:0,h:"They carry blood under high pressure.",e:"Arteries."}],
cq:[
{q:"Why do capillaries have very thin walls?",o:["So substances can pass through easily","To carry high pressure","To stop blood","To make blood cells"],a:0,e:"Short distance for diffusion."},
{q:"How does smoking harm the respiratory system?",o:["It damages the alveoli, making gas exchange harder","It cleans the lungs","It strengthens the heart","It has no effect"],a:0,e:"Smoke damages lung tissue."},
{q:"Why are there millions of alveoli in the lungs?",o:["To give a huge surface area for gas exchange","To store air for days","To make blood","To filter food"],a:0,e:"More surface area means faster exchange."},
{q:"What is the correct path of air into the lungs?",o:["Nose → trachea → bronchi → bronchioles → alveoli","Mouth → stomach → lungs","Trachea → nose → alveoli → bronchi","Alveoli → bronchi → trachea"],a:0,e:"Air goes from large tubes to tiny sacs."},
{q:"Why is the left ventricle wall thicker than the right?",o:["It pumps blood to the whole body, which needs more force","It holds more blood","It pumps to the lungs","It isn't"],a:0,e:"The body circuit is much longer."}]},

{id:"g9-ns-digestive",grade:9,term:1,subject:"ns",strand:"Life & living",title:"The digestive system",
notes:`<h2>Nutrients</h2>
<p>A balanced diet contains <b>carbohydrates</b> (energy), <b>proteins</b> (growth and repair), <b>fats</b> (stored energy), <b>vitamins and minerals</b> (health), <b>fibre</b> (helps food move through the gut) and <b>water</b>.</p>
<h2>The path of food</h2>
<div class="tbl"><table><tr><th>Organ</th><th>What happens</th></tr>
<tr><td>Mouth</td><td>Teeth chew (mechanical digestion); saliva starts digesting starch</td></tr>
<tr><td>Oesophagus</td><td>Muscle waves (<b>peristalsis</b>) push food to the stomach</td></tr>
<tr><td>Stomach</td><td>Acid kills germs; enzymes start digesting protein; food is churned</td></tr>
<tr><td>Small intestine</td><td>Most digestion is completed; nutrients are <b>absorbed</b> into the blood through <b>villi</b></td></tr>
<tr><td>Large intestine</td><td>Water is absorbed</td></tr>
<tr><td>Rectum and anus</td><td>Waste (faeces) is stored and removed</td></tr></table></div>
<h2>Helper organs</h2>
<ul><li><b>Liver</b>: makes <b>bile</b>, which helps break down fats.</li>
<li><b>Gall bladder</b>: stores bile.</li><li><b>Pancreas</b>: makes digestive enzymes (and the hormone insulin).</li></ul>
<h2>Digestion</h2>
<p><b>Mechanical digestion</b> breaks food into smaller pieces (chewing, churning). <b>Chemical digestion</b> uses <b>enzymes</b> to break large molecules into small ones the body can absorb.</p>
<div class="key">Villi are tiny finger-like folds that give the small intestine a huge surface area for absorption.</div>`,
qs:[
{q:"Which nutrient is the main source of energy?",o:["Carbohydrates","Proteins","Vitamins","Water"],a:0,e:"Carbohydrates such as starch and sugar."},
{q:"Which nutrient is needed for growth and repair?",o:["Proteins","Fats","Fibre","Carbohydrates"],a:0,e:"Proteins build body tissue."},
{q:"Where does digestion begin?",o:["Mouth","Stomach","Small intestine","Large intestine"],a:0,e:"Chewing and saliva start it."},
{q:"What pushes food down the oesophagus?",o:["Peristalsis (muscle waves)","Gravity only","Bile","Villi"],a:0,e:"Muscles squeeze in waves."},
{q:"Where are most nutrients absorbed into the blood?",o:["Small intestine","Stomach","Large intestine","Mouth"],a:0,e:"Through the villi."},
{q:"What is the main job of the large intestine?",o:["Absorbing water","Digesting protein","Making bile","Chewing"],a:0,e:"It absorbs water."},
{q:"Which organ makes bile?",o:["Liver","Pancreas","Stomach","Kidney"],a:0,e:"The liver."},
{q:"What does bile help to break down?",o:["Fats","Proteins","Starch","Fibre"],a:0,e:"It breaks fat into small droplets."},
{q:"What do enzymes do?",o:["Break large food molecules into smaller ones","Make food bigger","Carry oxygen","Fight infection"],a:0,e:"Chemical digestion."},
{q:"Why is fibre important?",o:["It helps food move through the gut","It gives most energy","It builds muscle","It carries oxygen"],a:0,e:"It prevents constipation."}],
pq:[
{q:"Chewing food is an example of…",o:["mechanical digestion","chemical digestion","absorption","excretion"],a:0,h:"It physically breaks food into pieces.",e:"Mechanical."},
{q:"Which organ contains acid that kills germs?",o:["Stomach","Mouth","Liver","Large intestine"],a:0,h:"It churns food.",e:"The stomach."},
{q:"Which organ stores bile?",o:["Gall bladder","Liver","Pancreas","Stomach"],a:0,h:"It's a small sac under the liver.",e:"The gall bladder."},
{q:"What are villi?",o:["Tiny finger-like folds in the small intestine","Teeth","Enzymes","Blood cells"],a:0,h:"They increase surface area.",e:"Folds for absorption."},
{q:"Saliva starts the digestion of…",o:["starch","protein","fat","fibre"],a:0,h:"A cracker starts tasting sweet if you chew it long enough.",e:"Starch."}],
cq:[
{q:"What is the correct order of the digestive tract?",o:["Mouth → oesophagus → stomach → small intestine → large intestine → rectum","Mouth → stomach → oesophagus → large intestine → small intestine","Oesophagus → mouth → stomach → rectum","Stomach → mouth → small intestine → oesophagus"],a:0,e:"This is the path food takes."},
{q:"Why does the small intestine have villi?",o:["To give a large surface area for absorbing nutrients","To store food","To chew food","To make bile"],a:0,e:"More surface means faster absorption."},
{q:"What would happen if the large intestine didn't absorb water?",o:["Diarrhoea and dehydration","Constipation","Faster digestion","Nothing"],a:0,e:"Too much water would be lost."},
{q:"How does the pancreas help digestion?",o:["It makes digestive enzymes","It stores bile","It absorbs water","It chews food"],a:0,e:"Its enzymes act in the small intestine."},
{q:"What is the difference between mechanical and chemical digestion?",o:["Mechanical breaks food into pieces; chemical uses enzymes to break down molecules","They are the same","Chemical uses teeth","Mechanical uses enzymes"],a:0,e:"Both are needed."}]}
);
TOPICS.slice(-5).forEach(t=>TOPIC[t.id]=t);
