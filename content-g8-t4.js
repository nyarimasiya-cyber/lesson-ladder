/* Grade 8, Term 4 topics. */
TOPICS.push(
/* ===== Mathematics ===== */
{id:"g8-math-graphs",grade:8,term:4,subject:"math",strand:"Patterns, functions & algebra",title:"Graphs",
notes:`<h2>The Cartesian plane</h2>
<ul><li>The <b>x-axis</b> is horizontal and the <b>y-axis</b> is vertical. They cross at the <b>origin (0; 0)</b>.</li>
<li>A point (3; −2) means: go 3 right, then 2 down. The x-value always comes first.</li>
<li>The axes divide the plane into four <b>quadrants</b>, numbered anticlockwise from the top right: (+;+) is the 1st, (−;+) the 2nd, (−;−) the 3rd and (+;−) the 4th.</li></ul>
<h2>Describing a graph</h2>
<div class="tbl"><table><tr><th>Word</th><th>Meaning</th></tr>
<tr><td>Increasing</td><td>Goes up from left to right</td></tr><tr><td>Decreasing</td><td>Goes down from left to right</td></tr>
<tr><td>Constant</td><td>Flat (horizontal): no change</td></tr><tr><td>Linear</td><td>A straight line</td></tr>
<tr><td>Non-linear</td><td>A curve</td></tr><tr><td>Maximum / minimum</td><td>The highest / lowest point</td></tr>
<tr><td>Discrete</td><td>Separate points (things you count: people, cars)</td></tr><tr><td>Continuous</td><td>An unbroken line (things you measure: time, temperature)</td></tr></table></div>
<h2>Reading story graphs</h2>
<p>On a distance–time graph, a <b>flat</b> section means the person stopped. A <b>steeper</b> section means faster movement.</p>
<h2>Drawing a graph from a table or formula</h2>
<div class="ex"><b>Example</b>y = 2x + 1. x = 0 → y = 1; x = 1 → y = 3; x = 2 → y = 5. Plot (0; 1), (1; 3), (2; 5). They lie on a straight line, so the graph is <b>linear</b>.</div>
<p>Where a graph crosses the y-axis, x = 0. Where it crosses the x-axis, y = 0.</p>`,
qs:[
{q:"A graph that goes up from left to right is…",o:["decreasing","increasing","constant","discrete"],a:1,e:"Going up means the values are increasing."},
{q:"A horizontal (flat) part of a graph shows that the value is…",o:["increasing","decreasing","constant","at a minimum"],a:2,e:"Flat means no change: constant."},
{q:"A graph that forms a straight line is…",o:["linear","non-linear","discrete","curved"],a:0,e:"Straight-line graphs are linear."},
{q:"To plot the point (3; −2), you go…",o:["3 right, 2 down","3 left, 2 up","2 right, 3 down","3 up, 2 left"],a:0,e:"x first (3 right), then y (2 down)."},
{q:"In which quadrant is the point (−4; 5)?",o:["1st","2nd","3rd","4th"],a:1,e:"Negative x and positive y: the 2nd quadrant."},
{q:"Which data is discrete?",o:["The number of learners in a class","Temperature during a day","Time taken to run","A person's height"],a:0,e:"You count learners in whole numbers."},
{q:"The highest point on a graph is called the…",o:["minimum","origin","maximum","intercept"],a:2,e:"The highest point is the maximum."},
{q:"On a distance–time graph, a flat section means the person…",o:["ran faster","stopped","turned back","sped up"],a:1,e:"Distance doesn't change, so they weren't moving."},
{q:"x: 0, 1, 2 and y: 1, 3, 5. What kind of graph do these points make?",o:["Linear","Non-linear","Constant","Decreasing"],a:0,e:"y goes up by 2 each time, so the points lie on a straight line."},
{q:"Where a graph crosses the y-axis, x is…",o:["1","0","the same as y","negative"],a:1,e:"Every point on the y-axis has x = 0."}],
pq:[
{q:"Which axis is horizontal?",o:["x-axis","y-axis","Both","Neither"],a:0,h:"Think “x is a cross”: it runs across.",e:"The x-axis is horizontal."},
{q:"What are the coordinates of the origin?",o:["(1; 1)","(0; 0)","(0; 1)","(1; 0)"],a:1,h:"It is where both axes start.",e:"The origin is (0; 0)."},
{q:"A graph that goes down from left to right is…",o:["increasing","decreasing","constant","linear only"],a:1,h:"Read it like a hill from left to right.",e:"Going down means decreasing."},
{q:"A graph that is a curve is…",o:["linear","non-linear","constant","discrete"],a:1,h:"Linear means straight.",e:"Curves are non-linear."},
{q:"In the point (5; 2), what is the x-value?",o:["2","5","7","3"],a:1,h:"The first number is always x.",e:"x = 5."}],
cq:[
{q:"A tank fills at a steady rate, then the tap is closed. What does the volume–time graph look like?",o:["A straight line going up, then a flat line","A curve going down","A flat line, then a line going up","A straight line going down"],a:0,e:"Steady filling is a rising straight line; when the tap closes, the volume stays constant."},
{q:"Which point lies on the graph of y = 2x + 1?",o:["(2; 4)","(2; 5)","(3; 6)","(1; 2)"],a:1,e:"2 × 2 + 1 = 5."},
{q:"A temperature graph peaks at 14:00. What does this mean?",o:["The lowest temperature was at 14:00","The highest temperature was at 14:00","The temperature was constant","It rained at 14:00"],a:1,e:"The peak is the maximum."},
{q:"Which data is continuous?",o:["Temperature over a day","Number of goals","Number of pets","Shoe sizes"],a:0,e:"Temperature can take any value and changes smoothly."},
{q:"On a distance–time graph, a steeper section means…",o:["slower movement","faster movement","stopping","going backwards"],a:1,e:"More distance in the same time means faster."}]},

{id:"g8-math-pythagoras",grade:8,term:4,subject:"math",strand:"Space & shape (geometry)",title:"Theorem of Pythagoras",
notes:`<h2>Right-angled triangles</h2>
<p>The <b>hypotenuse</b> is the side opposite the right angle. It is always the <b>longest side</b>.</p>
<h2>The theorem</h2>
<div class="key">In a right-angled triangle: <b>hypotenuse² = side² + side²</b>, or c² = a² + b².</div>
<p>It only works for <b>right-angled</b> triangles.</p>
<h2>Finding the hypotenuse</h2>
<div class="ex"><b>Example</b>Sides 6 cm and 8 cm: c² = 36 + 64 = 100, so c = √100 = <b>10 cm</b></div>
<h2>Finding a shorter side</h2>
<div class="ex"><b>Example</b>Hypotenuse 10, one side 6: b² = 100 − 36 = 64, so b = <b>8</b></div>
<h2>Is the triangle right-angled?</h2>
<p>Check whether the longest side squared equals the sum of the other two squares. 7, 24, 25: 49 + 576 = 625 = 25² ✓ right-angled. 4, 5, 6: 16 + 25 = 41, but 6² = 36 ✗ not right-angled.</p>
<h2>Useful sets (Pythagorean triples)</h2>
<p>3, 4, 5 · 6, 8, 10 · 5, 12, 13 · 8, 15, 17 · 9, 12, 15</p>
<h2>Real life</h2>
<p>A 5 m ladder with its foot 3 m from a wall reaches 4 m up the wall: 5² − 3² = 16, √16 = 4.</p>`,
qs:[
{q:"Which side is the hypotenuse?",o:["The shortest side","The side opposite the right angle","Any side","The base"],a:1,e:"The hypotenuse is opposite the 90° angle and is the longest side."},
{q:"Which statement is the Theorem of Pythagoras?",o:["c = a + b","c² = a² + b²","c² = a² − b²","c = a × b"],a:1,e:"The square on the hypotenuse equals the sum of the squares on the other sides."},
{q:"The two shorter sides are 3 cm and 4 cm. How long is the hypotenuse?",o:["5 cm","7 cm","25 cm","12 cm"],a:0,e:"9 + 16 = 25, √25 = 5."},
{q:"The two shorter sides are 6 and 8. How long is the hypotenuse?",o:["14","10","100","48"],a:1,e:"36 + 64 = 100, √100 = 10."},
{q:"The two shorter sides are 5 and 12. How long is the hypotenuse?",o:["13","17","169","7"],a:0,e:"25 + 144 = 169, √169 = 13."},
{q:"The hypotenuse is 10 and one side is 6. How long is the other side?",o:["4","8","16","64"],a:1,e:"100 − 36 = 64, √64 = 8."},
{q:"Is a triangle with sides 7, 24 and 25 right-angled?",o:["Yes","No","Only if it is isosceles","You can't tell"],a:0,e:"49 + 576 = 625 = 25²."},
{q:"Is a triangle with sides 4, 5 and 6 right-angled?",o:["Yes","No","Only sometimes","Yes, because 4 + 5 > 6"],a:1,e:"16 + 25 = 41, but 6² = 36."},
{q:"The Theorem of Pythagoras works for…",o:["all triangles","only right-angled triangles","only equilateral triangles","squares"],a:1,e:"It needs a right angle."},
{q:"A 5 m ladder has its foot 3 m from a wall. How high up the wall does it reach?",o:["2 m","4 m","8 m","5,8 m"],a:1,e:"25 − 9 = 16, √16 = 4 m."}],
pq:[
{q:"Calculate: 3² + 4²",o:["7","14","25","49"],a:2,h:"Square each number first: 9 and 16.",e:"9 + 16 = 25."},
{q:"What is √25?",o:["5","12,5","625","25"],a:0,h:"Which number times itself is 25?",e:"5 × 5 = 25."},
{q:"In a right-angled triangle, the longest side is…",o:["the base","the hypotenuse","the height","always 10 cm"],a:1,h:"It is opposite the right angle.",e:"The hypotenuse is the longest side."},
{q:"The two shorter sides are 9 and 12. How long is the hypotenuse?",o:["21","15","225","3"],a:1,h:"81 + 144 = ?",e:"225, and √225 = 15."},
{q:"The hypotenuse is 13 and one side is 5. How long is the other side?",o:["8","12","18","144"],a:1,h:"Subtract: 169 − 25.",e:"144, and √144 = 12."}],
cq:[
{q:"A rectangle is 8 cm long and 6 cm wide. How long is its diagonal?",o:["14 cm","10 cm","48 cm","12 cm"],a:1,e:"64 + 36 = 100, √100 = 10."},
{q:"A screen is 40 cm wide and 30 cm high. How long is its diagonal?",o:["70 cm","50 cm","35 cm","60 cm"],a:1,e:"1 600 + 900 = 2 500, √2 500 = 50."},
{q:"The hypotenuse is 17 and one side is 8. How long is the other side?",o:["9","15","25","289"],a:1,e:"289 − 64 = 225, √225 = 15."},
{q:"A square has sides of 1 m. About how long is its diagonal?",o:["1 m","1,41 m","2 m","0,5 m"],a:1,e:"1 + 1 = 2, √2 ≈ 1,41."},
{q:"Sipho walks 9 km north, then 12 km east. How far is he in a straight line from his start?",o:["21 km","15 km","3 km","225 km"],a:1,e:"81 + 144 = 225, √225 = 15 km."}]},

{id:"g8-math-area",grade:8,term:4,subject:"math",strand:"Measurement",title:"Area and perimeter of 2D shapes",
notes:`<h2>Formulas you need</h2>
<div class="tbl"><table><tr><th>Shape</th><th>Perimeter</th><th>Area</th></tr>
<tr><td>Square</td><td>4s</td><td>s²</td></tr>
<tr><td>Rectangle</td><td>2(l + b)</td><td>l × b</td></tr>
<tr><td>Triangle</td><td>add the three sides</td><td>½ × b × h</td></tr>
<tr><td>Circle</td><td>C = πd = 2πr</td><td>A = πr²</td></tr></table></div>
<h2>Circles</h2>
<ul><li>The <b>radius</b> (r) goes from the centre to the edge. The <b>diameter</b> (d) goes right across through the centre: <b>d = 2r</b>.</li>
<li>The perimeter of a circle is called its <b>circumference</b>.</li>
<li>Use <b>π ≈ 3,14</b> unless told otherwise.</li></ul>
<div class="ex"><b>Example</b>r = 7 cm: C = 2 × 3,14 × 7 = <b>43,96 cm</b>. r = 10 cm: A = 3,14 × 10 × 10 = <b>314 cm²</b></div>
<div class="key">If you're given the diameter, halve it before using A = πr².</div>
<h2>Units</h2>
<p>1 cm² = 100 mm² · 1 m² = 10 000 cm²</p>
<h2>Composite shapes</h2>
<p>Add or subtract simple shapes. A 12 cm × 8 cm rectangle with a circle of radius 2 cm cut out: 96 − 12,56 = <b>83,44 cm²</b>.</p>
<h2>Scaling</h2>
<p>If you double the radius (or any length), the area becomes 2 × 2 = <b>4 times</b> bigger.</p>`,
qs:[
{q:"What is the area of a rectangle 9 cm by 4 cm?",o:["13 cm²","26 cm²","36 cm²","72 cm²"],a:2,e:"9 × 4 = 36 cm²."},
{q:"What is the area of a triangle with base 12 cm and height 5 cm?",o:["60 cm²","30 cm²","17 cm²","34 cm²"],a:1,e:"½ × 12 × 5 = 30 cm²."},
{q:"Which formula gives the circumference of a circle?",o:["πr²","πd","2r","l × b"],a:1,e:"C = πd (or 2πr)."},
{q:"A circle has a radius of 7 cm. What is its circumference? (π ≈ 3,14)",o:["21,98 cm","43,96 cm","153,86 cm","14 cm"],a:1,e:"2 × 3,14 × 7 = 43,96 cm."},
{q:"A circle has a radius of 10 cm. What is its area? (π ≈ 3,14)",o:["31,4 cm²","62,8 cm²","314 cm²","100 cm²"],a:2,e:"3,14 × 10 × 10 = 314 cm²."},
{q:"A square has a perimeter of 48 cm. How long is each side?",o:["12 cm","24 cm","16 cm","6,9 cm"],a:0,e:"48 ÷ 4 = 12 cm."},
{q:"How is the diameter related to the radius?",o:["d = r","d = 2r","d = r²","d = πr"],a:1,e:"The diameter is twice the radius."},
{q:"How many cm² are in 1 m²?",o:["100","1 000","10 000","1 000 000"],a:2,e:"100 × 100 = 10 000."},
{q:"What is the area of a square with sides of 2,5 m?",o:["5 m²","6,25 m²","10 m²","12,5 m²"],a:1,e:"2,5 × 2,5 = 6,25 m²."},
{q:"A circle has a diameter of 10 cm. What is its area? (π ≈ 3,14)",o:["314 cm²","78,5 cm²","31,4 cm²","15,7 cm²"],a:1,e:"r = 5: 3,14 × 5 × 5 = 78,5 cm²."}],
pq:[
{q:"A circle has a radius of 4 cm. What is its diameter?",o:["2 cm","8 cm","16 cm","12,56 cm"],a:1,h:"The diameter is two radii.",e:"2 × 4 = 8 cm."},
{q:"What value do we usually use for π?",o:["3","3,14","22","1,41"],a:1,h:"It's a little more than 3.",e:"π ≈ 3,14."},
{q:"Which formula gives the area of a circle?",o:["πd","πr²","2πr","½bh"],a:1,h:"Area formulas have a squared unit.",e:"A = πr²."},
{q:"What is the perimeter of a rectangle 6 cm by 5 cm?",o:["11 cm","22 cm","30 cm","30 cm²"],a:1,h:"Add all four sides: 6 + 5 + 6 + 5.",e:"22 cm."},
{q:"A triangle has a base of 8 cm and a height of 3 cm. What is its area?",o:["24 cm²","12 cm²","11 cm²","48 cm²"],a:1,h:"Remember the ½.",e:"½ × 8 × 3 = 12 cm²."}],
cq:[
{q:"A circular garden has a radius of 3 m. How much edging goes around it? (π ≈ 3,14)",o:["9,42 m","18,84 m","28,26 m","6 m"],a:1,e:"2 × 3,14 × 3 = 18,84 m."},
{q:"A pizza has a diameter of 30 cm. What is its area? (π ≈ 3,14)",o:["94,2 cm²","706,5 cm²","2 826 cm²","47,1 cm²"],a:1,e:"r = 15: 3,14 × 225 = 706,5 cm²."},
{q:"A 12 cm × 8 cm card has a hole with radius 2 cm cut out. What area is left? (π ≈ 3,14)",o:["96 cm²","83,44 cm²","84 cm²","108,56 cm²"],a:1,e:"96 − 12,56 = 83,44 cm²."},
{q:"A square has an area of 81 cm². What is its perimeter?",o:["9 cm","36 cm","81 cm","18 cm"],a:1,e:"Side = 9 cm, so P = 36 cm."},
{q:"If the radius of a circle is doubled, its area is multiplied by…",o:["2","3","4","8"],a:2,e:"r becomes 2r, so r² becomes 4r²."}]},

/* ===== Natural Sciences ===== */
{id:"g8-ns-solar",grade:8,term:4,subject:"ns",strand:"Planet Earth & beyond",title:"The solar system",
notes:`<h2>The Sun</h2>
<p>The Sun is a <b>star</b> at the centre of our solar system. It gives out light and heat, and its <b>gravity</b> keeps the planets in their orbits.</p>
<h2>The eight planets</h2>
<p>In order from the Sun: <b>Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune</b>. (Memory aid: My Very Easy Method Just Speeds Up Naming.)</p>
<ul><li><b>Inner planets</b> (Mercury to Mars) are small and rocky.</li>
<li><b>Outer planets</b> (Jupiter to Neptune) are giants made mostly of gas and ice. <b>Jupiter</b> is the largest planet.</li>
<li>The <b>asteroid belt</b> lies between Mars and Jupiter.</li>
<li><b>Pluto</b> is now classified as a dwarf planet.</li></ul>
<h2>Earth's movements</h2>
<div class="tbl"><table><tr><th>Movement</th><th>Time</th><th>Result</th></tr>
<tr><td>Rotation (spinning on its axis)</td><td>24 hours</td><td>Day and night</td></tr>
<tr><td>Revolution (orbit around the Sun)</td><td>365¼ days</td><td>One year</td></tr></table></div>
<p>Earth's axis is tilted (about 23,5°). This tilt causes the <b>seasons</b>. In December the Southern Hemisphere is tilted towards the Sun, so South Africa has summer.</p>
<h2>The Moon</h2>
<ul><li>The Moon is Earth's natural <b>satellite</b>. It reflects light from the Sun.</li>
<li>Its <b>phases</b> happen because we see different amounts of its sunlit side as it orbits Earth (about 29,5 days from new moon to new moon).</li>
<li>The Moon's gravity is the main cause of <b>tides</b>.</li></ul>
<h2>Other objects</h2><p>Comets (ice and dust with glowing tails), asteroids (rocky bodies) and meteoroids also orbit the Sun.</p>`,
qs:[
{q:"What is at the centre of our solar system?",o:["Earth","The Moon","The Sun","Jupiter"],a:2,e:"All the planets orbit the Sun."},
{q:"How many planets are in our solar system?",o:["7","8","9","10"],a:1,e:"There are eight planets."},
{q:"Which planet is closest to the Sun?",o:["Venus","Earth","Mercury","Mars"],a:2,e:"Mercury is the first planet."},
{q:"Which is the largest planet?",o:["Saturn","Jupiter","Neptune","Earth"],a:1,e:"Jupiter is the biggest."},
{q:"Where is the asteroid belt?",o:["Between Earth and Mars","Between Mars and Jupiter","Beyond Neptune","Around the Sun's surface"],a:1,e:"It lies between Mars and Jupiter."},
{q:"How long does Earth take to orbit the Sun?",o:["24 hours","29,5 days","365¼ days","12 years"],a:2,e:"One revolution is one year."},
{q:"What causes day and night?",o:["Earth's orbit around the Sun","Earth's rotation on its axis","The Moon's orbit","The tilt of the axis"],a:1,e:"As Earth spins, each side faces towards and away from the Sun."},
{q:"What causes the seasons?",o:["Earth's distance from the Moon","The tilt of Earth's axis","Clouds","Earth's rotation"],a:1,e:"The tilt changes how directly sunlight hits each hemisphere."},
{q:"What is Pluto classified as today?",o:["A planet","A moon","A dwarf planet","A star"],a:2,e:"Pluto was reclassified as a dwarf planet."},
{q:"Which force keeps the planets in their orbits?",o:["Magnetism","Friction","Gravity","Electricity"],a:2,e:"The Sun's gravity holds the planets in orbit."}],
pq:[
{q:"The Sun is a…",o:["planet","star","moon","comet"],a:1,h:"It makes its own light.",e:"The Sun is a star."},
{q:"Earth is which planet from the Sun?",o:["2nd","3rd","4th","5th"],a:1,h:"Mercury, Venus, then…",e:"Earth is third."},
{q:"Which planet is a gas giant?",o:["Mars","Venus","Saturn","Mercury"],a:2,h:"Gas giants are the outer planets.",e:"Saturn is a gas giant."},
{q:"How long does Earth take to rotate once?",o:["1 hour","24 hours","7 days","365 days"],a:1,h:"One day and one night together.",e:"About 24 hours."},
{q:"The Moon is Earth's…",o:["star","natural satellite","planet","asteroid"],a:1,h:"It orbits Earth.",e:"The Moon is a natural satellite."}],
cq:[
{q:"What do the inner planets have in common?",o:["They are rocky","They are gas giants","They have rings","They are stars"],a:0,e:"Mercury, Venus, Earth and Mars are rocky planets."},
{q:"Why does the Moon seem to change shape during the month?",o:["Earth's shadow covers it","We see different amounts of its sunlit side","It shrinks and grows","Clouds cover it"],a:1,e:"As it orbits Earth, we see more or less of its lit half."},
{q:"What mainly causes ocean tides?",o:["Wind","The Moon's gravity","Earth's rotation alone","Rain"],a:1,e:"The Moon's gravity pulls on the oceans."},
{q:"Which order is correct, starting nearest the Sun?",o:["Mercury, Venus, Earth, Mars","Venus, Mercury, Mars, Earth","Earth, Mars, Venus, Mercury","Mars, Earth, Venus, Mercury"],a:0,e:"My Very Easy Method…"},
{q:"Why does South Africa have summer in December?",o:["The Southern Hemisphere is tilted towards the Sun","Earth is closest to the Moon","The Sun is hotter in December","The Northern Hemisphere is tilted towards the Sun"],a:0,e:"Our hemisphere receives more direct sunlight then."}]},

{id:"g8-ns-space",grade:8,term:4,subject:"ns",strand:"Planet Earth & beyond",title:"Beyond the solar system and looking into space",
notes:`<h2>Stars and galaxies</h2>
<ul><li><b>Stars</b> are huge balls of hot gas that make their own light. The Sun is our nearest star. The next nearest is <b>Proxima Centauri</b>, about 4,2 light-years away.</li>
<li>A <b>galaxy</b> is an enormous group of stars, gas and dust held together by gravity. Our galaxy is the <b>Milky Way</b>, a spiral galaxy with billions of stars.</li>
<li>Other galaxies include <b>Andromeda</b>, our nearest large galaxy.</li></ul>
<h2>The light-year</h2>
<p>Distances in space are so huge that we use the <b>light-year</b>: the distance light travels in one year (about 9,5 million million km). It measures <b>distance</b>, not time. If a star is 4 light-years away, the light we see left it 4 years ago.</p>
<h2>Constellations</h2>
<p>A <b>constellation</b> is a pattern of stars. The <b>Southern Cross</b> (Crux) helps people in the Southern Hemisphere find <b>south</b>.</p>
<h2>Looking into space</h2>
<ul><li><b>Optical telescopes</b> collect visible light. South Africa's <b>SALT</b> (Southern African Large Telescope) is at <b>Sutherland</b> in the Northern Cape.</li>
<li><b>Radio telescopes</b> detect radio waves from space and can work in daytime and through clouds. <b>MeerKAT</b> in the Karoo is part of the <b>Square Kilometre Array (SKA)</b>, shared by South Africa and Australia.</li>
<li>Telescopes are built in the Karoo because the skies are dark and dry, with little radio interference.</li>
<li><b>Artificial satellites</b> orbit Earth for communication, weather and navigation (GPS). The <b>International Space Station (ISS)</b> is a laboratory where astronauts live in orbit.</li></ul>`,
qs:[
{q:"What is the name of our galaxy?",o:["Andromeda","The Milky Way","The Southern Cross","The solar system"],a:1,e:"We live in the Milky Way."},
{q:"A light-year measures…",o:["time","distance","brightness","speed"],a:1,e:"It is the distance light travels in a year."},
{q:"Which is the nearest star to Earth?",o:["Proxima Centauri","The Sun","Sirius","The Moon"],a:1,e:"The Sun is a star, and it's the closest."},
{q:"After the Sun, which is the nearest star?",o:["Proxima Centauri","Polaris","Andromeda","Jupiter"],a:0,e:"Proxima Centauri is about 4,2 light-years away."},
{q:"A pattern of stars in the sky is called a…",o:["galaxy","constellation","planet","nebula"],a:1,e:"Constellations are star patterns."},
{q:"The Southern Cross helps you find which direction?",o:["North","East","South","West"],a:2,e:"It points towards the south."},
{q:"Where is SALT, South Africa's large optical telescope?",o:["Sutherland, Northern Cape","Durban","Pretoria","Cape Town harbour"],a:0,e:"SALT is near Sutherland."},
{q:"What kind of telescope is MeerKAT?",o:["Optical","Radio","Solar","Underwater"],a:1,e:"MeerKAT is a radio telescope."},
{q:"What shape is the Milky Way?",o:["Spiral","Square","Ring","Triangle"],a:0,e:"It is a spiral galaxy."},
{q:"Which is an artificial satellite?",o:["The Moon","A weather satellite","Mars","A comet"],a:1,e:"People build and launch artificial satellites."}],
pq:[
{q:"A galaxy is…",o:["a single star","a huge group of stars, gas and dust","a planet's moon","a telescope"],a:1,h:"The Milky Way is one.",e:"Galaxies contain billions of stars."},
{q:"What does a telescope do?",o:["Makes distant objects look clearer and closer","Measures temperature","Creates stars","Launches rockets"],a:0,h:"Think of what you'd use to look at the Moon's craters.",e:"Telescopes collect light (or radio waves) from far away."},
{q:"Andromeda is a…",o:["planet","galaxy","constellation","moon"],a:1,h:"It's our nearest large neighbour, like the Milky Way.",e:"Andromeda is a galaxy."},
{q:"Stars…",o:["reflect light from the Sun","make their own light","are made of rock","orbit the Moon"],a:1,h:"The Sun is a star. Does it make light?",e:"Stars produce their own light."},
{q:"What does ISS stand for?",o:["International Space Station","Inner Solar System","Indian Satellite Service","Interstellar Ship"],a:0,h:"Astronauts live and work there.",e:"The International Space Station."}],
cq:[
{q:"Why do astronomers use light-years instead of kilometres?",o:["Space distances are so huge that kilometres are impractical","Light-years are shorter","Kilometres don't work in space","It's a tradition"],a:0,e:"The numbers in kilometres would be enormous."},
{q:"What is an advantage of radio telescopes?",o:["They work in daytime and through clouds","They only work at night","They show colours better","They are small"],a:0,e:"Radio waves pass through clouds."},
{q:"Why were telescopes like SALT and MeerKAT built in the Karoo?",o:["Dark, dry skies and little radio interference","It's close to the sea","It's the highest place on Earth","It's near a big city"],a:0,e:"Remote, dry areas give clear observations."},
{q:"A star is 4 light-years away. The light we see from it left the star…",o:["4 seconds ago","4 days ago","4 years ago","just now"],a:2,e:"Light takes 4 years to cover 4 light-years."},
{q:"What is the SKA?",o:["A radio telescope project shared by South Africa and Australia","A space station","A galaxy","A rocket"],a:0,e:"The Square Kilometre Array links many radio dishes."}]},

/* ===== History ===== */
{id:"g8-his-ww1",grade:8,term:4,subject:"his",strand:"History",title:"World War I (1914–1918)",
notes:`<h2>Causes: remember MAIN</h2>
<ul><li><b>M</b>ilitarism: countries built up big armies and navies.</li>
<li><b>A</b>lliances: countries promised to defend each other.</li>
<li><b>I</b>mperialism: competition for colonies and power.</li>
<li><b>N</b>ationalism: strong pride in one's own nation.</li></ul>
<h2>The trigger</h2>
<p>On <b>28 June 1914</b>, <b>Archduke Franz Ferdinand</b> of Austria-Hungary was assassinated in <b>Sarajevo</b> by Gavrilo Princip. Austria-Hungary declared war on Serbia, and the alliances pulled other countries in.</p>
<h2>The two sides</h2>
<div class="tbl"><table><tr><th>Allies (Triple Entente)</th><th>Central Powers</th></tr>
<tr><td>Britain, France, Russia (later the USA, from 1917)</td><td>Germany, Austria-Hungary, the Ottoman Empire</td></tr></table></div>
<h2>How the war was fought</h2>
<ul><li>On the Western Front, armies dug long lines of <b>trenches</b>. Conditions were terrible: mud, rats, disease and constant shelling.</li>
<li>New weapons included <b>machine guns, poison gas, tanks and aircraft</b>.</li></ul>
<h2>South Africa's role</h2>
<ul><li>South Africa was part of the British Empire, so it joined the war on Britain's side.</li>
<li>In 1915 South African forces invaded <b>German South West Africa</b> (now Namibia).</li>
<li>Some Afrikaners opposed the war and rose up in the <b>1914 Rebellion</b>.</li>
<li>South African troops fought at <b>Delville Wood</b> (1916) in France.</li>
<li>Black South Africans served in the <b>South African Native Labour Contingent</b>. On <b>21 February 1917</b> the troopship <b>SS Mendi</b> sank in the English Channel, and more than 600 men died.</li></ul>
<h2>The end</h2>
<p>An <b>armistice</b> (ceasefire) began on <b>11 November 1918</b>. The <b>Treaty of Versailles</b> (1919) blamed Germany for the war, made it pay reparations and took away land and colonies.</p>`,
qs:[
{q:"When was World War I fought?",o:["1899–1902","1914–1918","1939–1945","1948–1994"],a:1,e:"WWI lasted from 1914 to 1918."},
{q:"Whose assassination triggered the war?",o:["Archduke Franz Ferdinand","Kaiser Wilhelm","Gavrilo Princip","Jan Smuts"],a:0,e:"Franz Ferdinand of Austria-Hungary was killed in 1914."},
{q:"Where was Franz Ferdinand assassinated?",o:["Paris","Berlin","Sarajevo","London"],a:2,e:"He was shot in Sarajevo."},
{q:"In MAIN, what does the A stand for?",o:["Armies","Alliances","Austria","Africa"],a:1,e:"Militarism, Alliances, Imperialism, Nationalism."},
{q:"Which countries formed the Triple Entente?",o:["Britain, France and Russia","Germany, Austria-Hungary and Italy","USA, Japan and China","South Africa, Namibia and Botswana"],a:0,e:"Britain, France and Russia were the Entente."},
{q:"Which country was one of the Central Powers?",o:["France","Germany","Britain","Russia"],a:1,e:"Germany led the Central Powers."},
{q:"Fighting from long ditches dug in the ground is called…",o:["guerrilla warfare","trench warfare","naval warfare","air warfare"],a:1,e:"Trench warfare dominated the Western Front."},
{q:"Which territory did South Africa invade in 1915?",o:["Mozambique","German South West Africa","Egypt","Lesotho"],a:1,e:"German South West Africa is now Namibia."},
{q:"What happened to the SS Mendi in 1917?",o:["It sank, and more than 600 men of the SA Native Labour Contingent died","It won a sea battle","It carried gold to Britain","It brought the armistice news"],a:0,e:"The Mendi sank in the English Channel on 21 February 1917."},
{q:"Which treaty ended World War I?",o:["Treaty of Vereeniging","Treaty of Versailles","Freedom Charter","Treaty of Rome"],a:1,e:"The Treaty of Versailles was signed in 1919."}],
pq:[
{q:"Nationalism means…",o:["strong pride in your own nation","building big armies","making alliances","owning colonies"],a:0,h:"It contains the word “nation”.",e:"Nationalism is strong national pride."},
{q:"Who assassinated Franz Ferdinand?",o:["Gavrilo Princip","Louis Botha","Winston Churchill","Paul Kruger"],a:0,h:"He was a young Bosnian Serb.",e:"Gavrilo Princip fired the shots."},
{q:"Which was a new weapon in World War I?",o:["Bows and arrows","Poison gas","Spears","Catapults"],a:1,h:"It drifted across the trenches in clouds.",e:"Poison gas was first used on a large scale in WWI."},
{q:"At which battle in France did South African troops fight in 1916?",o:["Delville Wood","Isandlwana","Blood River","Majuba"],a:0,h:"Its name includes the word “Wood”.",e:"South Africans fought at Delville Wood."},
{q:"On which date did the armistice begin?",o:["11 November 1918","28 June 1914","31 May 1910","21 March 1960"],a:0,h:"The 11th hour of the 11th day of the 11th month.",e:"11 November 1918."}],
cq:[
{q:"How did alliances turn a local conflict into a world war?",o:["Countries joined in to support their allies","Alliances stopped the war","Only two countries fought","Alliances only applied to trade"],a:0,e:"Each declaration of war pulled in allies on both sides."},
{q:"Why did South Africa take part in World War I?",o:["It was part of the British Empire","It was attacked by Russia","It wanted to join Germany","It was forced by France"],a:0,e:"As a British dominion, South Africa joined Britain's side."},
{q:"What did the Treaty of Versailles do to Germany?",o:["Blamed it for the war, made it pay reparations and took land","Gave it new colonies","Made it the leader of Europe","Nothing"],a:0,e:"These harsh terms caused bitterness in Germany."},
{q:"Why did soldiers in the trenches suffer so much?",o:["Mud, rats, disease and constant shelling","They had too much food","The trenches were warm and dry","There was no fighting"],a:0,e:"Trench conditions were miserable and deadly."},
{q:"Which order is correct?",o:["Assassination (1914) → SS Mendi sinks (1917) → armistice (1918) → Versailles (1919)","SS Mendi → assassination → Versailles → armistice","Armistice → assassination → SS Mendi → Versailles","Versailles → armistice → SS Mendi → assassination"],a:0,e:"1914, 1917, 1918, 1919."}]},

/* ===== Geography ===== */
{id:"g8-geo-transport",grade:8,term:4,subject:"geo",strand:"Geography",title:"Transport and trade",
notes:`<h2>Trade</h2>
<ul><li><b>Trade</b> is the buying and selling of goods and services.</li>
<li><b>Exports</b> are goods sold to other countries. <b>Imports</b> are goods bought from other countries.</li>
<li>South Africa exports minerals (platinum, gold, coal, iron ore), fruit (citrus, grapes) and manufactured goods such as cars.</li>
<li>When a country exports more than it imports, it has a <b>trade surplus</b>; when it imports more, it has a <b>trade deficit</b>.</li></ul>
<h2>Raw materials and manufactured goods</h2>
<p><b>Raw materials</b> (iron ore, cotton) are unprocessed. <b>Manufactured goods</b> (steel, cars, clothing) are made from them. Exporting manufactured goods earns more money and creates more jobs.</p>
<h2>Transport</h2>
<div class="tbl"><table><tr><th>Type</th><th>Best for</th></tr>
<tr><td>Road (trucks)</td><td>Door-to-door delivery, shorter distances</td></tr>
<tr><td>Rail</td><td>Heavy, bulky goods like coal and ore over land</td></tr>
<tr><td>Sea (ships)</td><td>Bulky goods over long distances; the cheapest per tonne</td></tr>
<tr><td>Air</td><td>Fast transport of light, valuable or perishable goods (flowers, medicines)</td></tr>
<tr><td>Pipelines</td><td>Oil, gas and water</td></tr></table></div>
<h2>South Africa's ports</h2>
<p><b>Durban</b> is the busiest container port. <b>Richards Bay</b> exports huge amounts of coal. Other ports include Cape Town, Ngqura (Coega) and Saldanha Bay (iron ore). Landlocked neighbours like Lesotho and Botswana rely on South African ports.</p>
<h2>Trade rules</h2>
<ul><li>A <b>tariff</b> is a tax on imports. A <b>quota</b> limits how much of a product may be imported.</li>
<li><b>Trade blocs</b> like <b>SADC</b> (Southern African Development Community) make trade between members easier.</li>
<li><b>Fair trade</b> aims to pay producers in poorer countries a fair price.</li></ul>`,
qs:[
{q:"Goods sold to other countries are called…",o:["imports","exports","tariffs","quotas"],a:1,e:"Exports go out of the country."},
{q:"Goods bought from other countries are called…",o:["exports","imports","raw materials","trade blocs"],a:1,e:"Imports come into the country."},
{q:"Which transport is cheapest for moving bulky goods over long distances?",o:["Air","Sea","Taxi","Bicycle"],a:1,e:"Ships carry large loads at the lowest cost per tonne."},
{q:"Which transport is fastest for urgent, light goods?",o:["Sea","Rail","Air","Pipeline"],a:2,e:"Air transport is the fastest."},
{q:"Which is South Africa's busiest container port?",o:["Durban","Bloemfontein","Kimberley","Polokwane"],a:0,e:"Durban handles the most containers."},
{q:"Richards Bay is known for exporting…",o:["flowers","coal","cars","wine"],a:1,e:"Richards Bay has a huge coal terminal."},
{q:"A tax on imported goods is called a…",o:["quota","tariff","subsidy","surplus"],a:1,e:"Tariffs make imports more expensive."},
{q:"What does SADC stand for?",o:["Southern African Development Community","South African Defence Council","Southern Africa Diamond Company","South African Department of Commerce"],a:0,e:"SADC is a regional trade and development bloc."},
{q:"Fair trade aims to…",o:["pay producers a fair price","stop all trade","make goods cheaper for rich countries","ban exports"],a:0,e:"Fair trade supports producers in poorer countries."},
{q:"Which is a South African mineral export?",o:["Platinum","Bananas from Ecuador","Oil from Saudi Arabia","Tea from Kenya"],a:0,e:"South Africa is the world's leading platinum producer."}],
pq:[
{q:"What do pipelines usually carry?",o:["Cars","Oil, gas and water","People","Fruit"],a:1,h:"They carry liquids and gases.",e:"Pipelines transport oil, gas and water."},
{q:"Trade means…",o:["buying and selling goods and services","only exporting","building roads","growing food"],a:0,h:"It involves both buyers and sellers.",e:"Trade is buying and selling."},
{q:"Trucks are an example of which type of transport?",o:["Road","Rail","Sea","Air"],a:0,h:"They drive on highways.",e:"Trucks are road transport."},
{q:"Which is a manufactured good?",o:["Iron ore","Cotton","A car","Coal"],a:2,h:"It is made in a factory.",e:"A car is manufactured."},
{q:"Which is a raw material?",o:["Steel","Iron ore","A shirt","A phone"],a:1,h:"It comes straight from nature.",e:"Iron ore is unprocessed."}],
cq:[
{q:"A country exports more than it imports. It has a…",o:["trade deficit","trade surplus","quota","tariff"],a:1,e:"More money comes in than goes out."},
{q:"Why does Lesotho depend on South African ports?",o:["It is landlocked","It has too many ports","It doesn't trade","It is an island"],a:0,e:"Lesotho has no coastline."},
{q:"Why are cut flowers exported by air?",o:["They are perishable and must arrive quickly","They are very heavy","Ships don't carry plants","Air transport is cheapest"],a:0,e:"Flowers wilt if transport is slow."},
{q:"Why is exporting manufactured goods better than exporting raw materials?",o:["It earns more money and creates more jobs","It uses fewer workers","Raw materials are worth more","It stops imports"],a:0,e:"Processing adds value and creates jobs."},
{q:"What is a quota?",o:["A limit on how much of a product may be imported","A tax on exports","A type of ship","A trade bloc"],a:0,e:"Quotas limit import quantities."}]},

/* ===== Life Orientation ===== */
{id:"g8-lo-rights",grade:8,term:4,subject:"lo",strand:"Constitutional rights & responsibilities",title:"Human rights, gender equity and gender-based violence",
notes:`<h2>Human rights</h2>
<ul><li>South Africa's <b>Bill of Rights</b> (Chapter 2 of the Constitution) protects everyone's rights, such as equality, dignity, life, freedom and security, and education.</li>
<li>Children have extra rights, such as the right to be protected from abuse, neglect and exploitative labour.</li>
<li>The <b>South African Human Rights Commission (SAHRC)</b> protects and promotes human rights.</li></ul>
<h2>Human rights violations</h2>
<p>A violation happens when someone's rights are ignored or abused. Examples: discrimination because of race, gender or religion; bullying; <b>xenophobia</b> (hatred or fear of foreigners); child labour; abuse.</p>
<h2>Fighting violations</h2>
<ul><li>Speak up and be an <b>upstander</b>, not a bystander.</li>
<li>Report it to a trusted adult, teacher, the police or an organisation like the SAHRC.</li>
<li>Learn about your rights and respect others' rights.</li></ul>
<h2>Gender equity in sport</h2>
<p><b>Gender equity</b> means everyone gets fair treatment and opportunities, whatever their gender. In sport, inequity can look like girls' teams getting less funding, worse facilities or less media coverage than boys' teams.</p>
<h2>Gender-based violence (GBV)</h2>
<ul><li>GBV is violence aimed at someone because of their gender. It can be <b>physical, emotional, sexual or economic</b> (controlling someone's money).</li>
<li>It harms victims' health, confidence and schooling, and makes whole communities unsafe.</li>
<li>Prevention starts with respect, equality, and refusing to joke about or excuse violence.</li></ul>
<h2>Where to get help</h2>
<div class="key">Tell a trusted adult. <b>Childline: 116</b> (free) · <b>GBV Command Centre: 0800 428 428</b> · <b>Police emergency: 10111</b></div>`,
qs:[
{q:"Where in South Africa's Constitution are human rights set out?",o:["The Bill of Rights","The Freedom Charter","The school rules","The Treaty of Versailles"],a:0,e:"The Bill of Rights is Chapter 2 of the Constitution."},
{q:"Which is an example of a human rights violation?",o:["Refusing to serve someone because of their race","Voting in an election","Going to school","Joining a sports team"],a:0,e:"Discrimination violates the right to equality."},
{q:"Gender equity means…",o:["fair treatment and opportunities for all genders","only boys can play sport","girls must play netball","nothing changes"],a:0,e:"Equity is about fairness for everyone."},
{q:"Gender-based violence is…",o:["violence aimed at someone because of their gender","a type of sport","a school rule","a legal punishment"],a:0,e:"GBV targets people because of their gender."},
{q:"Which is an example of emotional abuse?",o:["Constant insults and threats","Helping with homework","Playing a game","Giving advice"],a:0,e:"Emotional abuse damages a person's sense of worth and safety."},
{q:"What is the free helpline number for Childline?",o:["116","10111","112","911"],a:0,e:"Childline is 116."},
{q:"What is the South African police emergency number?",o:["116","10111","999","0800 428 428"],a:1,e:"SAPS emergency is 10111."},
{q:"Which is a good way to counter a human rights violation?",o:["Report it to a trusted adult or the authorities","Ignore it","Join in","Post about it to embarrass the victim"],a:0,e:"Reporting gets help and stops the harm."},
{q:"Which is an example of gender inequity in sport?",o:["Women's teams getting much less funding and coverage","Both teams sharing the field","Equal prize money","Mixed teams"],a:0,e:"Unequal resources are unfair."},
{q:"Xenophobia is…",o:["hatred or fear of foreigners","love of sport","a type of virus","fear of heights"],a:0,e:"Xenophobia targets people from other countries."}],
pq:[
{q:"Which right does everyone have under the Bill of Rights?",o:["Equality and dignity","Free cars","Never doing homework","Owning someone else's property"],a:0,h:"Think of rights that protect every person's worth.",e:"Equality and dignity are basic rights."},
{q:"Which organisation protects human rights in South Africa?",o:["SAHRC","SADC","SALT","SKA"],a:0,h:"Its name includes “Human Rights”.",e:"The South African Human Rights Commission."},
{q:"Bullying is a violation of…",o:["a person's dignity","the speed limit","school hours","sports rules"],a:0,h:"It makes someone feel worthless.",e:"Bullying attacks a person's dignity."},
{q:"Gender equity in sport means…",o:["girls and boys get fair opportunities to play","only boys get coaching","girls may only watch","no one plays"],a:0,h:"Equity is about fairness.",e:"Everyone gets fair access."},
{q:"GBV can be…",o:["physical, emotional, sexual or economic","only physical","only verbal","harmless teasing"],a:0,h:"Violence isn't only hitting.",e:"GBV takes many forms."}],
cq:[
{q:"A friend tells you they are being hurt at home. What should you do?",o:["Tell a trusted adult and help them get support","Keep it a secret forever","Tell everyone at school","Ignore it"],a:0,e:"A trusted adult can help keep your friend safe."},
{q:"Why is child labour a human rights violation?",o:["Children have the right to be protected and to go to school","Children enjoy working","It is good for the economy","It is always legal"],a:0,e:"Children must be protected from exploitative work."},
{q:"Why does GBV affect whole communities?",o:["It harms health, breaks families and makes people afraid","It only affects one person","It improves safety","It has no effects"],a:0,e:"Violence spreads fear and harm beyond the victim."},
{q:"Which is NOT a human right?",o:["The right to harm others","The right to education","The right to equality","The right to life"],a:0,e:"No one has a right to harm others."},
{q:"An upstander is someone who…",o:["speaks up or acts against injustice","watches and does nothing","starts the bullying","stands up in class"],a:0,e:"Upstanders help instead of staying silent."}]},

{id:"g8-lo-diversity",grade:8,term:4,subject:"lo",strand:"Health, social & environmental responsibility",title:"Cultural diversity in South Africa",
notes:`<h2>What is culture?</h2>
<p><b>Culture</b> is a group's shared way of life: beliefs, values, customs, language, food, dress, music and celebrations. <b>Cultural norms</b> are the unwritten rules about how people in a culture are expected to behave.</p>
<h2>A diverse country</h2>
<ul><li>South Africa has <b>12 official languages</b>, including South African Sign Language (added in 2023).</li>
<li>We are often called the “rainbow nation”. Our motto, <i>!ke e: /xarra //ke</i>, means “diverse people unite”.</li>
<li><b>Heritage Day</b> on <b>24 September</b> celebrates our different cultures.</li></ul>
<h2>How culture influences behaviour</h2>
<p>Culture shapes how we greet people, show respect to elders, dress, eat and celebrate. Different does not mean wrong.</p>
<h2>Stereotypes and prejudice</h2>
<ul><li>A <b>stereotype</b> is an oversimplified idea about a whole group (“all … are …”).</li>
<li><b>Prejudice</b> is a negative opinion formed without real knowledge.</li>
<li>These can lead to <b>discrimination</b>: treating people unfairly because of their group.</li></ul>
<h2>Unity in diversity</h2>
<p>We build unity by being curious, asking respectfully, learning other languages and customs, and challenging stereotypes.</p>
<h2>Religious organisations</h2>
<p>Churches, mosques, temples, synagogues and other faith groups contribute to society through schools, hospitals, feeding schemes, counselling and disaster relief.</p>`,
qs:[
{q:"Culture includes…",o:["beliefs, customs and language","only food","only money","only sport"],a:0,e:"Culture is a whole shared way of life."},
{q:"How many official languages does South Africa have?",o:["9","11","12","15"],a:2,e:"South African Sign Language became the 12th in 2023."},
{q:"On which date is Heritage Day?",o:["27 April","16 June","24 September","16 December"],a:2,e:"Heritage Day is 24 September."},
{q:"A stereotype is…",o:["an oversimplified idea about a whole group","a type of music","a law","a celebration"],a:0,e:"Stereotypes lump everyone in a group together."},
{q:"Prejudice is…",o:["a negative opinion formed without real knowledge","a fair judgement","a sports rule","a holiday"],a:0,e:"Pre-judging without knowing people."},
{q:"“Unity in diversity” means…",o:["different cultures living together with respect","everyone must be the same","cultures must stay apart","only one language is allowed"],a:0,e:"We can be different and still united."},
{q:"How do religious organisations contribute to society?",o:["Running schools, feeding schemes and counselling","Collecting taxes","Making laws","Running the army"],a:0,e:"Faith groups provide many social services."},
{q:"Which was the newest official language added in 2023?",o:["English","South African Sign Language","Afrikaans","isiZulu"],a:1,e:"SASL became official in 2023."},
{q:"A cultural norm is…",o:["an unwritten rule of behaviour in a culture","a law passed by parliament","a sports score","a type of food"],a:0,e:"Norms guide expected behaviour."},
{q:"Someone's custom is different from yours. The best response is to…",o:["respect it and learn about it","laugh at it","tell them to stop","ignore them"],a:0,e:"Respect and curiosity build unity."}],
pq:[
{q:"South Africa is often called the…",o:["rainbow nation","golden nation","island nation","silent nation"],a:0,h:"Think of many colours together.",e:"The rainbow nation."},
{q:"Discrimination means…",o:["treating people unfairly because of their group","celebrating together","learning languages","sharing food"],a:0,h:"It is unfair treatment.",e:"Discrimination is unfair treatment."},
{q:"Which is an example of culture?",o:["Traditional dress and music","A maths formula","The weather","A road sign"],a:0,h:"Something a group shares and passes on.",e:"Dress and music are part of culture."},
{q:"What does Heritage Day celebrate?",o:["Our different cultures","The end of school","A sports win","Winter"],a:0,h:"Heritage means what is passed down to us.",e:"It celebrates cultural heritage."},
{q:"How can you challenge a stereotype?",o:["Get to know people as individuals","Repeat it","Avoid other groups","Laugh at it"],a:0,h:"Stereotypes break down when you know real people.",e:"Knowing individuals breaks stereotypes."}],
cq:[
{q:"How can culture influence behaviour?",o:["It shapes how we greet, dress, eat and show respect","It has no influence","It only affects sport","It only affects money"],a:0,e:"Culture shapes daily behaviour."},
{q:"How can stereotypes lead to harm?",o:["They can lead to prejudice and discrimination","They make people kinder","They are always true","They stop bullying"],a:0,e:"Stereotypes feed unfair treatment."},
{q:"What does South Africa's motto mean?",o:["Diverse people unite","One language for all","Gold is power","Peace through strength"],a:0,e:"!ke e: /xarra //ke means diverse people unite."},
{q:"Which action best promotes unity in diversity?",o:["Learning a greeting in a classmate's home language","Mocking accents","Sitting only with your own group","Banning traditional dress"],a:0,e:"Learning about others builds respect."},
{q:"Different does not mean…",o:["wrong","special","interesting","valuable"],a:0,e:"Other cultures' ways aren't wrong because they differ from ours."}]}
);
TOPICS.slice(-9).forEach(t=>TOPIC[t.id]=t);
