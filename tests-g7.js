/* Grade 7 timed tests: Mathematics and Social Sciences, Terms 3 and 4.
   Tests 1 and 2 of each subject are multiple choice (marked automatically).
   Tests 3 and 4 are "show your method" (typed on screen or written on paper; the teacher marks them). */
SUBJECTS.ss = SUBJECTS.ss || {name:"Social Sciences"};

/* M(question, correct answer, [three wrong answers], explanation) – the position of the correct answer is spread over A–D below */
const M = (q, right, wrong, e) => ({q, right, wrong, e});
const SPREAD = [2,0,3,1,3,1,0,2,1,3,0,2,3,0,1,2,0,3,2,1,1,3,0,2,3];
function placeMC(list, shift){
  let n = 0;
  return list.map(it=>{ if(it.head) return it; const pos = SPREAD[(n++ + shift) % SPREAD.length], o = it.wrong.slice(); o.splice(pos, 0, it.right); return {q:it.q, o, a:pos, e:it.e}; });
}
const MC_INTRO = (what) => `<p>This is a <b>30-minute multiple-choice test</b> on ${what}.</p><ul><li>Read each question carefully, then tap the answer you choose.</li><li>Work out calculations on rough paper first. Don't guess when you can calculate.</li><li>You can change an answer until you hand in. Check your answers before you hand in.</li><li>When the time is up, your answers are handed in automatically.</li><li>Your mark comes up straight away, with every question you got wrong and the correct answer. <b>Your goal is 80%.</b></li></ul>`;
const WR_INTRO_MATH = (what) => `<p>This is a <b>30-minute test</b> on ${what}. It is out of <b>30 marks</b>.</p><ul><li><b>Method is everything.</b> Show every step: write the formula, put in the numbers, then work it out. Give units (cm, m², cm³) in your answer.</li><li>An answer without working may get no marks, even if it is right.</li><li>Type your answer and working in the box under each question, or write on paper and upload clear photos at the bottom. You can do both.</li><li>The marks for each question are in brackets, for example (2).</li><li><b>Your goal is 80%.</b></li></ul>`;
const WR_INTRO_SS = (what) => `<p>This is a <b>30-minute test</b> on ${what}. It is out of <b>30 marks</b>.</p><ul><li><b>Answer every question in full sentences.</b> One-word answers and lists will not get full marks. Start your answer with the words of the question, and explain with "because" or "so".</li><li>The marks are in brackets, for example (2). Give one explained fact for every mark.</li><li>Type your answers in the box under each question, or write on paper and upload clear photos at the bottom.</li><li>Spell names correctly and use capital letters for names of people, places and groups.</li><li><b>Your goal is 80%.</b></li></ul>`;

/* ===================== MATHEMATICS ===================== */
defineTest("g7-math-t1", {grade:7, subject:"math", kind:"mc", minutes:30,
  title:"Maths Test 1 · Multiple choice · Term 3: Geometry and transformations",
  intro:MC_INTRO("Term 3 work: angles and constructions, triangles and quadrilaterals, and transformation geometry"),
  mc:placeMC([
{head:"<h3>Section A: Angles and constructions</h3>"},
M("An angle of 135° is …","an obtuse angle",["an acute angle","a right angle","a reflex angle"],"Obtuse angles are more than 90° and less than 180°."),
M("An angle of 210° is …","a reflex angle",["an obtuse angle","a straight angle","a revolution"],"Reflex angles are more than 180° and less than 360°."),
M("Two angles lie next to each other on a straight line. One angle is 65°. What is the other angle?","115°",["25°","125°","295°"],"Angles on a straight line add up to 180°: 180° − 65° = 115°."),
M("Two lines that meet at a right angle (90°) are called …","perpendicular lines",["parallel lines","line segments","rays"],"Perpendicular (⊥) lines meet at 90°. Parallel lines never meet."),
M("You bisect an angle of 80°. How big is each of the two new angles?","40°",["160°","20°","80°"],"To bisect means to cut into two equal parts: 80° ÷ 2 = 40°."),
M("You bisect a line segment 12 cm long with a compass and ruler. What do you get?","Two parts of 6 cm, and the bisector meets the line at 90°",["Two parts of 6 cm, and the bisector meets the line at 45°","Two parts of 12 cm","Three parts of 4 cm"],"Bisecting a line cuts it in half (12 ÷ 2 = 6 cm) at a right angle."),
M("Which tool do you use to draw arcs and circles?","a compass",["a protractor","a ruler","a calculator"],"A compass draws circles and arcs. A protractor measures angles."),
M("A ray …","has one endpoint and goes on forever in one direction",["has two endpoints","goes on forever in both directions","is always 90°"],"A line segment has two endpoints, a ray has one, and a line has none."),
{head:"<h3>Section B: Triangles and quadrilaterals</h3>"},
M("A triangle with exactly two equal sides is …","isosceles",["equilateral","scalene","right-angled"],"Isosceles: two equal sides. Equilateral: three. Scalene: none."),
M("Two angles of a triangle are 50° and 60°. What is the third angle?","70°",["80°","90°","110°"],"The angles of a triangle add up to 180°: 180° − 50° − 60° = 70°."),
M("In an isosceles triangle, the angle between the two equal sides is 40°. How big is each base angle?","70°",["40°","140°","50°"],"180° − 40° = 140°, and the two base angles are equal: 140° ÷ 2 = 70°."),
M("How big is each angle of an equilateral triangle?","60°",["45°","90°","30°"],"All three angles are equal: 180° ÷ 3 = 60°."),
M("Which quadrilateral has exactly one pair of parallel sides?","a trapezium",["a parallelogram","a rhombus","a kite"],"A trapezium has exactly one pair of parallel sides."),
M("Which statement is TRUE?","A square is a special rhombus",["Every rectangle is a square","A kite has two pairs of parallel sides","A trapezium has four right angles"],"A square has 4 equal sides with opposite sides parallel, like a rhombus, plus 4 right angles."),
M("How many sides does a hexagon have?","6",["5","7","8"],"Pentagon 5, hexagon 6, octagon 8."),
M("Two shapes have the same shape AND the same size. They are …","congruent",["similar but not congruent","enlargements of each other","reflex"],"Congruent means same shape and same size."),
M("A photo 10 cm × 15 cm is enlarged to 20 cm × 30 cm. The two photos are …","similar",["congruent","exactly the same size","neither similar nor congruent"],"Same shape, different size means similar. Both sides were multiplied by 2."),
{head:"<h3>Section C: Transformation geometry</h3>"},
M("Sliding a shape to a new position without turning or flipping it is called …","a translation",["a reflection","a rotation","an enlargement"],"Translation = slide. Reflection = flip. Rotation = turn."),
M("The point (2; 3) is translated 3 units to the right and 2 units down. Where does it end up?","(5; 1)",["(−1; 5)","(5; 5)","(−1; 1)"],"Right adds to the first number: 2 + 3 = 5. Down subtracts from the second: 3 − 2 = 1."),
M("A shape is reflected in a mirror line. Point P is 3 squares to the left of the line. Where is its image P′?","3 squares to the right of the line",["6 squares to the right of the line","on the mirror line","3 squares to the left of the line"],"In a reflection each point ends up the same distance from the mirror line, on the other side."),
M("A quarter turn is a rotation of …","90°",["45°","180°","360°"],"A quarter of 360° is 90°. A half turn is 180°."),
M("A triangle with sides 4 cm, 5 cm and 6 cm is enlarged by a scale factor of 3. How long is the longest side of the image?","18 cm",["9 cm","15 cm","12 cm"],"Every side is multiplied by 3: 6 cm × 3 = 18 cm."),
M("A square with sides of 8 cm is reduced by a scale factor of ½. How long is each new side?","4 cm",["16 cm","2 cm","6 cm"],"Scale factor ½ halves each side: 8 ÷ 2 = 4 cm."),
M("The sides of a shape are all multiplied by 2. Its area is multiplied by …","4",["2","6","8"],"Area is multiplied by the scale factor twice: 2 × 2 = 4."),
M("How many lines of symmetry does a rectangle (that is not a square) have?","2",["0","1","4"],"A rectangle has 2 lines of symmetry: one across and one down the middle. A square has 4.")
  ], 0)});

defineTest("g7-math-t2", {grade:7, subject:"math", kind:"mc", minutes:30,
  title:"Maths Test 2 · Multiple choice · Term 4: Measurement and data",
  intro:MC_INTRO("Term 4 work: area and perimeter, surface area and volume, and data handling"),
  mc:placeMC([
{head:"<h3>Section A: Area and perimeter</h3>"},
M("What is the perimeter of a rectangle 8 cm long and 5 cm wide?","26 cm",["13 cm","40 cm","40 cm²"],"P = 2 × (l + b) = 2 × (8 + 5) = 2 × 13 = 26 cm."),
M("What is the area of a rectangle 8 cm long and 5 cm wide?","40 cm²",["26 cm²","40 cm","13 cm²"],"A = l × b = 8 × 5 = 40 cm². Area is in square units."),
M("What is the perimeter of a square with sides of 9 m?","36 m",["81 m","18 m","81 m²"],"P = 4 × s = 4 × 9 = 36 m."),
M("What is the area of a square with sides of 9 m?","81 m²",["36 m²","18 m²","81 m"],"A = s × s = 9 × 9 = 81 m²."),
M("A triangle has a base of 10 cm and a height of 6 cm. What is its area?","30 cm²",["60 cm²","16 cm²","32 cm²"],"A = ½ × base × height = ½ × 10 × 6 = 30 cm²."),
M("A square has a perimeter of 28 cm. How long is one side?","7 cm",["14 cm","4 cm","24 cm"],"A square has 4 equal sides: 28 ÷ 4 = 7 cm."),
M("1 cm² = … mm²","100",["10","1 000","1"],"1 cm = 10 mm, so 1 cm² = 10 × 10 = 100 mm²."),
M("3 m² = … cm²","30 000",["300","3 000","300 000"],"1 m² = 100 × 100 = 10 000 cm², so 3 m² = 30 000 cm²."),
M("A rectangle 12 m by 8 m has a 5 m by 3 m rectangle cut out of one corner. What is the area of the shape that is left?","81 m²",["96 m²","111 m²","71 m²"],"12 × 8 = 96 m², and 5 × 3 = 15 m². 96 − 15 = 81 m²."),
M("A rectangle has an area of 48 cm² and a length of 8 cm. What is its breadth?","6 cm",["4 cm","12 cm","40 cm"],"A = l × b, so b = 48 ÷ 8 = 6 cm."),
{head:"<h3>Section B: Surface area and volume</h3>"},
M("What is the volume of a box 5 cm × 4 cm × 3 cm?","60 cm³",["12 cm³","94 cm³","600 cm³"],"V = l × b × h = 5 × 4 × 3 = 60 cm³."),
M("What is the volume of a cube with sides of 4 cm?","64 cm³",["12 cm³","16 cm³","96 cm³"],"V = s × s × s = 4 × 4 × 4 = 64 cm³."),
M("What is the surface area of a cube with sides of 4 cm?","96 cm²",["64 cm²","16 cm²","24 cm²"],"A cube has 6 square faces: 6 × (4 × 4) = 6 × 16 = 96 cm²."),
M("1 litre = … cm³","1 000",["100","10","10 000"],"1 000 cm³ = 1 litre, and 1 cm³ = 1 ml."),
M("A fish tank is 40 cm × 25 cm × 20 cm. How many litres of water can it hold?","20 litres",["200 litres","2 litres","2 000 litres"],"V = 40 × 25 × 20 = 20 000 cm³. 20 000 ÷ 1 000 = 20 litres."),
M("How many faces, edges and vertices does a rectangular prism have?","6 faces, 12 edges, 8 vertices",["6 faces, 8 edges, 12 vertices","8 faces, 12 edges, 6 vertices","4 faces, 6 edges, 4 vertices"],"A box (and a cube) has 6 faces, 12 edges and 8 vertices (corners)."),
M("What is the surface area of a rectangular prism 5 cm × 3 cm × 2 cm?","62 cm²",["30 cm²","31 cm²","60 cm²"],"SA = 2(l×b + l×h + b×h) = 2(15 + 10 + 6) = 2 × 31 = 62 cm²."),
M("Which unit is used to measure volume?","cm³",["cm","cm²","kg"],"Volume is measured in cubic units, such as cm³ and m³."),
{head:"<h3>Section C: Data handling</h3><p>Use this data set for questions 19 to 22. Number of books read by 8 learners: <b>4, 7, 7, 9, 3, 6, 7, 5</b></p>"},
M("What is the mode of the data set?","7",["6","6,5","9"],"The mode is the value that occurs most often: 7 occurs three times."),
M("What is the mean of the data set?","6",["6,5","7","8"],"Sum = 4 + 7 + 7 + 9 + 3 + 6 + 7 + 5 = 48. Mean = 48 ÷ 8 = 6."),
M("What is the median of the data set?","6,5",["6","7","5"],"In order: 3, 4, 5, 6, 7, 7, 7, 9. The two middle values are 6 and 7: (6 + 7) ÷ 2 = 6,5."),
M("What is the range of the data set?","6",["3","9","12"],"Range = highest − lowest = 9 − 3 = 6."),
M("In a survey, 20 of the 60 learners chose red as their favourite colour. What angle should red have in a pie chart?","120°",["20°","60°","33°"],"20 ÷ 60 × 360° = 120°."),
M("Which graph is best for showing how the temperature changed during a week?","a line graph",["a pie chart","a stem-and-leaf display","a tally table"],"A line graph shows change over time (trends)."),
M("To find out the favourite sport of a whole school, someone asks only Grade 7 boys. What is wrong with this survey?","The sample is not representative of the school",["The sample is too big","The question is leading","Nothing: the survey is fair"],"Only one group was asked. A fair sample includes all grades, and boys and girls.")
  ], 5)});

defineTest("g7-math-t3", {grade:7, subject:"math", kind:"written", minutes:30, outOf:30,
  title:"Maths Test 3 · Show your method · Term 3: Geometry and transformations",
  intro:WR_INTRO_MATH("Term 3 work: angles and constructions, triangles and quadrilaterals, and transformation geometry"),
  test:[
"<h3>Section A: Angles and constructions (8 marks)</h3>",
"Two angles lie next to each other on a straight line. One angle is 48° and the other is x. Calculate x. Show your working and give a reason. (2)",
"Name the type of each angle: (a) 90° (b) 172° (c) 305° (3)",
"Describe, step by step, how to bisect a line segment AB using only a compass and a ruler. (3)",
"<h3>Section B: Triangles and quadrilaterals (10 marks)</h3>",
"In triangle PQR, angle P = 47° and angle Q = 68°. Calculate angle R. Show your working. (2)",
"Triangle ABC is isosceles with AB = AC. Angle A = 50°. Calculate angle B and angle C. Show your working and give a reason. (3)",
"Give TWO properties that a square and a rhombus both have, and ONE property that a square always has but a rhombus does not always have. (3)",
"Explain the difference between congruent shapes and similar shapes. (2)",
"<h3>Section C: Transformation geometry (12 marks)</h3>",
"Point A(1; 2) is translated 4 units to the right and 3 units up. Give the coordinates of the image A′ and show how you got them. (2)",
"A rectangle 3 cm by 5 cm is enlarged by a scale factor of 4. (a) Give the length and breadth of the image. (b) Calculate the area of the original rectangle. (c) Calculate the area of the image. (d) How many times bigger is the area of the image? (5)",
"A triangle is rotated 180° about a point. Is the image congruent to the original triangle? Explain. (2)",
"How many lines of symmetry does each of these have? (a) a square (b) an equilateral triangle (c) the capital letter A (3)"
  ],
  memo:[
"x = 180° − 48° ✔ = 132° ✔. Reason: angles on a straight line add up to 180°.",
"(a) right angle ✔ (b) obtuse angle ✔ (c) reflex angle ✔",
"Open the compass to more than half the length of AB and draw arcs above and below the line from A ✔. Keep the same width and draw arcs from B so that they cross the first arcs ✔. Join the two crossing points with a ruler: this line cuts AB in half at 90° ✔.",
"R = 180° − 47° − 68° ✔ = 65° ✔ (angles of a triangle add up to 180°).",
"B + C = 180° − 50° = 130° ✔. B = C because base angles of an isosceles triangle are equal ✔, so B = C = 130° ÷ 2 = 65° ✔.",
"Both: all 4 sides equal ✔; opposite sides parallel ✔ (also: opposite angles equal, diagonals cross at 90°). Square only: 4 right angles (or equal diagonals) ✔.",
"Congruent shapes have the same shape and the same size ✔. Similar shapes have the same shape but can be different sizes ✔.",
"A′(5; 5) ✔: 1 + 4 = 5 and 2 + 3 = 5 ✔.",
"(a) 3 × 4 = 12 cm and 5 × 4 = 20 cm ✔✔ (b) 3 × 5 = 15 cm² ✔ (c) 12 × 20 = 240 cm² ✔ (d) 240 ÷ 15 = 16 times (= 4 × 4) ✔",
"Yes ✔. A rotation only turns the shape; it does not change its shape or size ✔.",
"(a) 4 ✔ (b) 3 ✔ (c) 1 ✔"
  ]});

defineTest("g7-math-t4", {grade:7, subject:"math", kind:"written", minutes:30, outOf:30,
  title:"Maths Test 4 · Show your method · Term 4: Measurement and data",
  intro:WR_INTRO_MATH("Term 4 work: area and perimeter, surface area and volume, and data handling"),
  test:[
"<h3>Section A: Area and perimeter (11 marks)</h3><p>A rectangular garden is 15 m long and 9 m wide.</p>",
"Calculate the perimeter of the garden. Write the formula first. (2)",
"Calculate the area of the garden. (2)",
"Fencing costs R45 per metre. How much will it cost to put a fence all the way around the garden? (2)",
"Calculate the area of a triangle with a base of 14 cm and a height of 9 cm. (2)",
"A rectangle 10 m by 7 m has a smaller rectangle 4 m by 3 m cut out of one corner, making an L-shape. Calculate the area of the L-shape. (3)",
"<h3>Section B: Surface area and volume (10 marks)</h3><p>A box (rectangular prism) is 20 cm long, 10 cm wide and 8 cm high.</p>",
"Calculate the volume of the box. (2)",
"How much water can the box hold? Give your answer in millilitres and in litres. (2)",
"Calculate the surface area of the box. (3)",
"A cube has a volume of 125 cm³. Find the length of one side, then calculate the surface area of the cube. (3)",
"<h3>Section C: Data handling (9 marks)</h3><p>Goals scored by a soccer team in 9 matches: <b>2, 0, 3, 1, 2, 4, 2, 1, 3</b></p>",
"Arrange the data in order from smallest to biggest, and find the median. (2)",
"Calculate the mean number of goals. (2)",
"Give the mode and calculate the range. (2)",
"In the 10th match the team scores 12 goals. Calculate the new mean and the new median. Which one changed more? Explain why. (3)"
  ],
  memo:[
"P = 2 × (l + b) = 2 × (15 + 9) ✔ = 48 m ✔",
"A = l × b = 15 × 9 ✔ = 135 m² ✔",
"48 × R45 ✔ = R2 160 ✔",
"A = ½ × b × h = ½ × 14 × 9 ✔ = 63 cm² ✔",
"Big rectangle: 10 × 7 = 70 m² ✔. Piece cut out: 4 × 3 = 12 m² ✔. L-shape: 70 − 12 = 58 m² ✔",
"V = l × b × h = 20 × 10 × 8 ✔ = 1 600 cm³ ✔",
"1 600 cm³ = 1 600 ml ✔ = 1,6 litres ✔",
"SA = 2(l×b + l×h + b×h) = 2(200 + 160 + 80) ✔ = 2 × 440 ✔ = 880 cm² ✔",
"5 × 5 × 5 = 125, so the side is 5 cm ✔. SA = 6 × (5 × 5) ✔ = 150 cm² ✔",
"0, 1, 1, 2, 2, 2, 3, 3, 4 ✔. Median = 5th value = 2 ✔",
"Sum = 18 ✔. Mean = 18 ÷ 9 = 2 ✔",
"Mode = 2 ✔. Range = 4 − 0 = 4 ✔",
"New mean = 30 ÷ 10 = 3 ✔. New median = (2 + 2) ÷ 2 = 2 ✔ (unchanged). The mean changed more because 12 is an outlier, which pulls the mean up but hardly changes the middle value ✔."
  ]});

/* ===================== SOCIAL SCIENCES ===================== */
defineTest("g7-ss-t1", {grade:7, subject:"ss", kind:"mc", minutes:30,
  title:"Social Sciences Test 1 · Multiple choice · Term 3: Colonisation of the Cape and Population",
  intro:MC_INTRO("Term 3 work: History (colonisation of the Cape in the 17th and 18th centuries) and Geography (population change and growth)"),
  mc:placeMC([
{head:"<h3>Section A: History: Colonisation of the Cape</h3>"},
M("In which year did Jan van Riebeeck set up a refreshment station at the Cape?","1652",["1488","1688","1806"],"The VOC sent Van Riebeeck with about 90 men to Table Bay in 1652."),
M("The VOC (Dutch East India Company) was …","a powerful Dutch trading company",["the British army","a Portuguese explorer's ship","a Khoikhoi chiefdom"],"The VOC controlled the spice trade with the East Indies (Indonesia)."),
M("Why did the VOC set up a station at the Cape?","To supply passing ships with fresh food, water and meat",["To mine gold","To start a big colony of farmers","To send slaves to Europe"],"It wanted a cheap refreshment station for ships sailing between the Netherlands and Asia."),
M("Many sailors on the long voyages died of scurvy. Scurvy is caused by …","a lack of fresh fruit and vegetables",["drinking sea water","cold weather","smallpox"],"That is why the Dutch planted a large vegetable garden at the Cape."),
M("Before 1652, the Khoikhoi were mainly …","herders of cattle and sheep",["hunter-gatherers who kept no animals","gold miners","sailors"],"The Khoikhoi kept cattle and fat-tailed sheep and moved with the seasons to find grazing."),
M("The San were …","hunter-gatherers",["cattle herders","wheat farmers","traders from the East"],"The San hunted animals and gathered plants, and lived in small family bands."),
M("Why was Krotoa (called Eva by the Dutch) important?","She was an interpreter (go-between) for the Dutch and the Khoikhoi",["She led the First Khoikhoi–Dutch War","She was the first governor of the Cape","She founded Stellenbosch"],"Krotoa grew up in Van Riebeeck's household, learnt Dutch and Portuguese, and became a key go-between."),
M("In 1657 the VOC released some employees as free burghers. Why?","To farm their own land and grow more food for the Company",["To go back to the Netherlands","To become soldiers","To build ships"],"Company farming did not produce enough food, so free burghers farmed along the Liesbeek River."),
M("The main cause of the First Khoikhoi–Dutch War (1659–1660) was that …","the free burgher farms were on Khoikhoi grazing land",["the Khoikhoi wanted to join the VOC","the Dutch refused to buy any cattle","gold was found at the Cape"],"The Dutch stopped the Khoikhoi from using their grazing land, and the Khoikhoi saw this as theft."),
M("Enslaved people were brought to the Cape from places such as …","Madagascar, Mozambique, India and Indonesia",["Britain and France","China and Japan","North and South America"],"They also came from West Africa (Angola) and Sri Lanka."),
M("The French Huguenots who arrived in 1688 helped to develop …","wine farming",["gold mining","sugar cane farming","whaling"],"Many settled in Franschhoek (\"French corner\")."),
M("Trekboers were …","farmers who moved inland with their cattle and sheep, looking for grazing",["enslaved people who ran away to the mountains","VOC sailors","missionaries"],"\"Trek\" means to move and \"boer\" means farmer."),
M("What happened in the smallpox epidemic of 1713?","It killed many Khoikhoi, who had no resistance to the disease",["It only affected the Dutch","The San found a cure","It happened only in the Netherlands"],"The disease came on a passing ship, and whole Khoikhoi groups were destroyed."),
{head:"<h3>Section B: Geography: Population change and growth</h3>"},
M("Birth rate means …","the number of babies born per 1 000 people in a year",["the total number of babies born in a country","the number of deaths per 1 000 people","how long people live"],"Birth and death rates are always given per 1 000 people per year."),
M("A country has a birth rate of 30 and a death rate of 10. What is the natural increase?","20 per 1 000 people",["40 per 1 000 people","3 per 1 000 people","300 per 1 000 people"],"Natural increase = birth rate − death rate = 30 − 10 = 20 per 1 000 (that is 2%)."),
M("If the death rate is higher than the birth rate, the population …","decreases",["increases","stays exactly the same","doubles"],"More people die than are born, so the population gets smaller."),
M("Life expectancy is …","the average number of years a person is expected to live",["the age at which people retire","the number of children in a family","the age of the oldest person"],"Better healthcare usually raises life expectancy."),
M("In about 1800 the world population was about …","1 billion",["8 billion","100 million","6 billion"],"It was about 1 billion in 1800 and about 8 billion in 2022."),
M("A pandemic is …","a disease that spreads across many countries",["a war between countries","a food shortage in one village","an official count of the population"],"Examples: the Spanish flu of 1918, HIV and AIDS, and COVID-19."),
M("In the 1990s and 2000s, life expectancy in South Africa fell mainly because of …","HIV and AIDS",["the Black Death","World War II","too many vaccines"],"It fell from about 62 to about 53 years, and rose again once ARVs became widely available."),
M("Which development helped death rates to fall?","vaccines and antibiotics",["more wars","less clean water","famine"],"Vaccines prevent diseases and antibiotics cure infections."),
M("Why do families in richer countries usually have fewer children?","Healthcare is good so most children survive, and more women study and work",["They are not allowed to have children","They need children to work on farms","There are no schools"],"Contraception is also available, and education is expensive."),
M("50 000 people live in an area of 250 km². What is the population density?","200 people per km²",["20 people per km²","2 000 people per km²","50 people per km²"],"Density = people ÷ area = 50 000 ÷ 250 = 200 people per km²."),
M("Which of these is a PUSH factor?","no jobs and poverty",["good schools","higher wages","safety"],"Push factors make people leave a place. The others are pull factors."),
M("Urbanisation means …","people moving from rural areas to towns and cities",["people moving from cities to farms","building more farms","counting the population"],"In South Africa many people move to Gauteng and the Western Cape.")
  ], 11)});

defineTest("g7-ss-t2", {grade:7, subject:"ss", kind:"mc", minutes:30,
  title:"Social Sciences Test 2 · Multiple choice · Term 4: The frontiers and Natural resources",
  intro:MC_INTRO("Term 4 work: History (co-operation and conflict on the frontiers of the Cape Colony) and Geography (natural resources and conservation in South Africa)"),
  mc:placeMC([
{head:"<h3>Section A: History: The frontiers of the Cape Colony</h3>"},
M("Britain took the Cape for the second time in 1806 mainly to …","protect the sea route to India and keep the Cape from France",["find gold","free the slaves","start wine farms"],"The Cape was an important stop on the trade route to the East."),
M("A frontier is …","an area where groups meet and compete for land, and which can move",["a fixed border agreed on and drawn on a map","a type of fort","a mission station"],"A border is a fixed line. A frontier is a wide zone that keeps moving."),
M("To the Xhosa, cattle were …","their wealth, used for lobola, food and ceremonies",["only something to sell","not important","used only for ploughing"],"A person's wealth was measured by the number of cattle he had."),
M("How many frontier wars were fought between 1779 and 1879?","nine",["three","five","seven"],"Nine wars over about 100 years."),
M("In 1811 Colonel John Graham forced the Xhosa …","beyond the Fish River",["across the Orange River","into the Cape Peninsula","to the Limpopo River"],"The Fish River became the border, guarded by forts."),
M("Grahamstown (1812) was set up as …","the British military headquarters on the frontier",["a mission station","a Xhosa capital","a port for slave ships"],"It was named after Colonel John Graham."),
M("The 1820 Settlers came from …","Britain",["the Netherlands","France","Portugal"],"About 4 000 British settlers landed at Algoa Bay and were given farms in the Zuurveld."),
M("Chief Maqoma and his people were expelled from the Kat River valley in …","1829",["1652","1806","1873"],"Losing this land made Maqoma a determined enemy of colonial rule. He died on Robben Island in 1873."),
M("How did Maqoma fight much larger British armies?","With guerrilla warfare: surprise attacks from the forests and valleys",["With warships","Only in open battles on flat plains","With cannons"],"His fighters knew the thick bush along the Fish River, hid there and attacked suddenly."),
M("Slavery ended in the Cape Colony on …","1 December 1834",["6 April 1652","1 January 1806","31 May 1910"],"Freed people then had to work as \"apprentices\" until 1 December 1838."),
M("Which was a reason the Voortrekkers left the Cape in the Great Trek?","They were angry about the end of slavery and felt unprotected on the frontier",["They wanted to go back to Europe","The British gave them free land in Cape Town","They wanted to become missionaries"],"They also lacked land for their sons, and were angry about Ordinance 50 and the low compensation."),
M("Robert Moffat translated the Bible into …","Setswana",["isiXhosa","Afrikaans","isiZulu"],"He worked at Kuruman among the Batlhaping and finished the Bible in 1857."),
M("At the Battle of Dithakong (1823), the Batlhaping won with the help of …","armed Griqua horsemen",["the British navy","the Xhosa army","King Mzilikazi's army"],"Moffat called on the Griqua; Adam Kok and others brought over 100 men with guns and horses."),
{head:"<h3>Section B: Geography: Natural resources and conservation</h3>"},
M("Which of these is a NON-renewable resource?","coal",["wind","sunlight","forests"],"Coal, oil, gas and minerals are used up and cannot be replaced in our lifetime."),
M("Which of these is a renewable resource?","wind",["gold","coal","oil"],"Renewable resources are replaced naturally if we use them wisely."),
M("Overgrazing (too many animals on the land) can lead to …","soil erosion",["more rain","more fish in the rivers","cleaner rivers"],"Without plant cover, wind and water wash the fertile topsoil away."),
M("Poaching means …","hunting animals illegally",["planting trees","protecting animals in parks","cleaning rivers"],"For example, killing rhinos for their horns."),
M("South Africa is the world's largest producer of …","platinum",["oil","copper","silver"],"Platinum is mined in the Bushveld area."),
M("Most of South Africa's electricity comes from …","burning coal in power stations",["solar panels","wind farms","the sea"],"Eskom's coal power stations, mainly in Mpumalanga, cause air pollution."),
M("Conservation means …","protecting natural resources and using them wisely so they last for future generations",["using resources as fast as possible","selling resources to other countries","building more factories"],"Using resources without destroying them is called sustainable use."),
M("A transfrontier park is …","a park that crosses the borders of two or more countries",["a park inside a city","a park used for farming","a park only for fish"],"Example: the Great Limpopo Transfrontier Park (South Africa, Mozambique and Zimbabwe)."),
M("Eco-tourism is tourism that …","protects nature and benefits local communities",["builds big hotels in national parks","allows hunting of endangered animals","only happens in cities"],"It creates jobs in rural areas while keeping nature intact."),
M("Which sector uses the MOST water in South Africa?","agriculture (irrigation)",["homes","mining","factories"],"Farming uses about 60% of our water."),
M("South Africa is called a water-scarce country because …","rainfall is low and unreliable, about half the world average",["it has too many rivers","it rains every day","it has no dams at all"],"Much of the water also evaporates because of the heat, and droughts are common."),
M("Invasive alien plants such as wattle are a problem because they …","use a lot of water and push out indigenous plants",["make rivers cleaner","are protected by law","feed endangered animals"],"The Working for Water programme employs people to remove them.")
  ], 17)});

defineTest("g7-ss-t3", {grade:7, subject:"ss", kind:"written", minutes:30, outOf:30,
  title:"Social Sciences Test 3 · Full sentences · Term 3: Colonisation of the Cape and Population",
  intro:WR_INTRO_SS("Term 3 work: History (colonisation of the Cape) and Geography (population change and growth)"),
  test:[
"<h3>Section A: History: Colonisation of the Cape (15 marks)</h3>",
"Explain why the VOC set up a refreshment station at the Cape in 1652. (2)",
"Describe how the Khoikhoi and the San lived before 1652. Give TWO facts about each group. (4)",
"Explain why the arrival of the free burghers in 1657 led to conflict with the Khoikhoi. (3)",
"Name TWO places that enslaved people were brought from, and explain TWO ways in which enslaved people shaped Cape culture. (4)",
"Explain how the Khoikhoi lost their land and their cattle. (2)",
"<h3>Section B: Geography: Population change and growth (15 marks)</h3>",
"Explain the difference between birth rate and death rate. (2)",
"A country has a birth rate of 25 and a death rate of 9 per 1 000 people. Calculate the natural increase, then write it as a percentage. Show your working. (3)",
"Explain TWO ways in which HIV and AIDS affected South Africa's population. (2)",
"Explain why the world population grew so fast after 1800. Give TWO reasons. (2)",
"Give TWO push factors and TWO pull factors that make people move from rural areas to cities. (4)",
"Write a short paragraph (at least 3 sentences) about the problems that rapid population growth causes in a city. (2)"
  ],
  memo:[
"To supply passing VOC ships with fresh food, water and meat, and to repair them ✔; because sailors on the long voyage between the Netherlands and the East (spice trade) were dying of scurvy ✔.",
"Khoikhoi (any 2): herders of cattle and fat-tailed sheep; moved with the seasons for grazing and water; dome-shaped reed-mat huts; groups led by chiefs; cattle were their wealth; land used by the group ✔✔. San (any 2): hunter-gatherers; small family bands of 20 to 50; bows and poisoned arrows; shared food; rock paintings; oldest inhabitants ✔✔.",
"The free burgher farms along the Liesbeek River were on Khoikhoi grazing land ✔. The Dutch stopped the Khoikhoi from using it, and the Khoikhoi saw this as theft ✔. This led to the First Khoikhoi–Dutch War of 1659–1660 ✔.",
"Places (any 2): Madagascar, Mozambique, West Africa (Angola), India, Sri Lanka, Indonesia (East Indies) ✔✔. Culture (any 2, explained): food such as bobotie and sosaties; music; their language helped Afrikaans develop; they brought Islam (e.g. Sheikh Yusuf); skilled craftsmen built roads, buildings and harbours ✔✔.",
"Any 2: wars with the Dutch took their cattle (e.g. 1673–1677); unfair trade; settlers took their grazing land; the smallpox epidemic of 1713 killed many; without land and cattle they had to work on settler farms ✔✔.",
"Birth rate is the number of babies born per 1 000 people in a year ✔. Death rate is the number of people who die per 1 000 people in a year ✔.",
"Natural increase = 25 − 9 ✔ = 16 per 1 000 people ✔. As a percentage: 16 ÷ 1 000 × 100 = 1,6% ✔.",
"Any 2: it killed many young adults; life expectancy fell (from about 62 to about 53 years); many children became orphans; grandparents had to care for children ✔✔.",
"Any 2: vaccines and antibiotics; clean water and sanitation; better food production; better care for mothers and babies. So death rates fell while birth rates stayed high ✔✔.",
"Push (any 2): no jobs; poverty; drought; poor schools and clinics; crime ✔✔. Pull (any 2): jobs; higher wages; schools; hospitals; safety; family already there ✔✔.",
"Any 2 problems in full sentences: pressure on schools, clinics, housing, water and electricity; not enough jobs; informal settlements and overcrowding; more waste and pollution ✔✔. Deduct if not written as a paragraph."
  ]});

defineTest("g7-ss-t4", {grade:7, subject:"ss", kind:"written", minutes:30, outOf:30,
  title:"Social Sciences Test 4 · Full sentences · Term 4: The frontiers and Natural resources",
  intro:WR_INTRO_SS("Term 4 work: History (co-operation and conflict on the frontiers of the Cape Colony) and Geography (natural resources and conservation)"),
  test:[
"<h3>Section A: History: The frontiers of the Cape Colony (15 marks)</h3>",
"Explain the difference between a frontier and a border. (2)",
"Explain how the Xhosa and the colonists had different ideas about land. (2)",
"Give THREE causes of the frontier wars, then explain ONE of them in more detail. (4)",
"Give TWO examples of co-operation between groups on the eastern frontier. (2)",
"Write a paragraph of at least 5 sentences about Chief Maqoma. Say who he was, why and how he fought the British, what happened to him, and how he is remembered today. (5)",
"<h3>Section B: Geography: Natural resources and conservation (15 marks)</h3>",
"Explain the difference between renewable and non-renewable resources. Give ONE example of each. (4)",
"Choose ONE resource: water, soil or fish. Give one good use of it, one way people misuse it, and one way to conserve it. (3)",
"Explain why rhino poaching is a serious problem, and give TWO ways in which it is being fought. (3)",
"Explain why South Africa is called a water-scarce country. (2)",
"Give THREE things you can do at home or at school to save water or energy. (3)"
  ],
  memo:[
"A frontier is a wide area where groups meet and compete for land, and it keeps moving ✔. A border is a fixed line that is agreed on and drawn on a map ✔.",
"The Xhosa believed land belonged to the whole community; the chief gave families land to use, and it could not be bought or sold ✔. The colonists saw land as private property that a person could own, fence, buy and sell ✔.",
"Causes (any 3): competition for land, water and grazing; cattle raiding by both sides; the colony trying to fix a border and push the Xhosa east; different ideas about land; divisions among Xhosa chiefs; drought ✔✔✔. One cause explained properly in full sentences ✔.",
"Any 2: trade (cattle, ivory and hides for beads, copper, cloth and tobacco); Xhosa and Khoikhoi working on settler farms; learning each other's languages and farming methods; missionaries teaching at schools; treaties to keep the peace ✔✔.",
"Any 4 facts (4 marks) + 1 mark for structure (topic sentence, full sentences, concluding sentence). Facts: Xhosa leader, son of Ngqika; his people were expelled from the Kat River valley in 1829; fought to protect his people's land; led resistance in the war of 1850–1853; guerrilla warfare in the forests and valleys along the Fish River; defeated much larger British armies; died a prisoner on Robben Island in 1873; remembered as a hero of African resistance.",
"Renewable resources can be replaced naturally if we use them wisely ✔, e.g. sunlight, wind, water, forests, fish ✔. Non-renewable resources are used up and cannot be replaced in our lifetime ✔, e.g. coal, oil, gas, gold ✔.",
"Water: drinking/farming; pollution/wasting/leaks; save water, fix leaks, don't dump waste. Soil: growing food; overgrazing/ploughing slopes causing erosion; plant cover, fewer animals. Fish: food and jobs; overfishing/illegal fishing; marine protected areas, catch limits. One mark each for use ✔, misuse ✔ and conservation ✔.",
"Criminal gangs kill rhinos for their horns, which are sold illegally in Asia; thousands have been killed since 2008, so rhinos could become extinct ✔. Ways (any 2): anti-poaching units; dehorning; tracking dogs; stricter laws ✔✔.",
"Any 2: rainfall is low (about 450–500 mm, half the world average) and unreliable; it falls unevenly (wet east, dry west); much water evaporates because of the heat; droughts are common (e.g. Day Zero in Cape Town) ✔✔.",
"Any 3: turn off the tap while brushing teeth; short showers; fix leaks; reuse grey water; collect rainwater; switch off lights and appliances; plant indigenous plants; reduce, reuse, recycle ✔✔✔."
  ]});
