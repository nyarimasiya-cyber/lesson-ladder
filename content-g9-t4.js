/* Grade 9, Term 4 topics. */
TOPICS.push(
/* ===== Mathematics ===== */
{id:"g9-math-transform",grade:9,term:4,subject:"math",strand:"Space & shape (geometry)",title:"Transformation geometry",
notes:`<h2>Transformations on the Cartesian plane</h2>
<div class="tbl"><table><tr><th>Transformation</th><th>Rule</th><th>Example with (3; 4)</th></tr>
<tr><td>Reflect in the x-axis</td><td>(x; y) → (x; −y)</td><td>(3; −4)</td></tr>
<tr><td>Reflect in the y-axis</td><td>(x; y) → (−x; y)</td><td>(−3; 4)</td></tr>
<tr><td>Reflect in the line y = x</td><td>(x; y) → (y; x)</td><td>(4; 3)</td></tr>
<tr><td>Translate a right, b up</td><td>(x; y) → (x + a; y + b)</td><td>a = 1, b = −2: (4; 2)</td></tr>
<tr><td>Rotate 90° anticlockwise about the origin</td><td>(x; y) → (−y; x)</td><td>(−4; 3)</td></tr>
<tr><td>Rotate 90° clockwise about the origin</td><td>(x; y) → (y; −x)</td><td>(4; −3)</td></tr>
<tr><td>Rotate 180° about the origin</td><td>(x; y) → (−x; −y)</td><td>(−3; −4)</td></tr>
<tr><td>Enlarge by factor k from the origin</td><td>(x; y) → (kx; ky)</td><td>k = 2: (6; 8)</td></tr></table></div>
<h2>What stays the same</h2>
<ul><li>Translations, reflections and rotations keep size and shape: the image is <b>congruent</b>.</li>
<li>Enlargements and reductions keep shape but change size: the image is <b>similar</b>. A scale factor between 0 and 1 gives a reduction.</li></ul>
<h2>Area after enlargement</h2>
<div class="key">If lengths are multiplied by k, the area is multiplied by <b>k²</b>. A triangle of 6 cm² enlarged by factor 3 has area 6 × 9 = 54 cm².</div>`,
qs:[
{q:"Reflect (3; 4) in the x-axis.",o:["(3; −4)","(−3; 4)","(4; 3)","(−3; −4)"],a:0,e:"Reflecting in the x-axis changes the sign of y."},
{q:"Reflect (3; 4) in the y-axis.",o:["(3; −4)","(−3; 4)","(4; 3)","(−3; −4)"],a:1,e:"Reflecting in the y-axis changes the sign of x."},
{q:"Reflect (2; 5) in the line y = x.",o:["(5; 2)","(−2; 5)","(2; −5)","(−5; −2)"],a:0,e:"Swap x and y."},
{q:"Apply (x; y) → (x + 3; y − 4) to (1; 2).",o:["(4; −2)","(−2; 6)","(4; 6)","(3; −8)"],a:0,e:"1 + 3 = 4 and 2 − 4 = −2."},
{q:"Rotate (2; 3) through 180° about the origin.",o:["(−2; −3)","(3; 2)","(−3; 2)","(2; −3)"],a:0,e:"Both signs change."},
{q:"Enlarge (2; −1) by a factor of 3 from the origin.",o:["(6; −3)","(5; 2)","(6; 3)","(2/3; −1/3)"],a:0,e:"Multiply both coordinates by 3."},
{q:"The rule (x; y) → (x + 2; y) describes…",o:["a translation 2 units right","a reflection","a rotation","an enlargement"],a:0,e:"Only x increases by 2."},
{q:"An enlargement with scale factor ½ makes the image…",o:["twice as big","half the size","the same size","upside down"],a:1,e:"A factor between 0 and 1 is a reduction."},
{q:"Which transformation does NOT keep the size of a shape?",o:["Translation","Reflection","Rotation","Enlargement"],a:3,e:"Enlargement changes size."},
{q:"Rotate (1; 0) through 90° anticlockwise about the origin.",o:["(0; 1)","(0; −1)","(−1; 0)","(1; 1)"],a:0,e:"(x; y) → (−y; x) gives (0; 1)."}],
pq:[
{q:"When you reflect in the x-axis, which coordinate changes sign?",o:["x","y","both","neither"],a:1,h:"The x-axis is horizontal; points flip up and down.",e:"The y-coordinate changes sign."},
{q:"The rule (x; y) → (x; y + 5) moves a point…",o:["5 right","5 up","5 left","5 down"],a:1,h:"Which coordinate changes, and is it + or −?",e:"y increases by 5, so it moves up."},
{q:"Enlarging by a factor of 2 makes each side…",o:["half as long","twice as long","four times as long","the same"],a:1,h:"Multiply each length by the factor.",e:"Sides double."},
{q:"Reflect (4; 1) in the y-axis.",o:["(4; −1)","(−4; 1)","(1; 4)","(−4; −1)"],a:1,h:"The y-axis is vertical; points flip left and right.",e:"x changes sign: (−4; 1)."},
{q:"After a reflection, the image is…",o:["congruent to the original","bigger","smaller","a different shape"],a:0,h:"Does a mirror change your size?",e:"Reflections keep size and shape."}],
cq:[
{q:"A triangle with area 6 cm² is enlarged by a factor of 3. What is the new area?",o:["18 cm²","54 cm²","9 cm²","36 cm²"],a:1,e:"Area multiplies by 3² = 9: 6 × 9 = 54."},
{q:"Reflect (−3; 2) in the x-axis, then translate 4 units right. Where is the final image?",o:["(1; −2)","(−7; −2)","(1; 2)","(−3; 6)"],a:0,e:"(−3; −2), then (1; −2)."},
{q:"Which rule describes a reflection in the line y = x?",o:["(x; y) → (y; x)","(x; y) → (−x; y)","(x; y) → (x; −y)","(x; y) → (−y; −x)"],a:0,e:"Swap x and y."},
{q:"Rotate (4; −1) through 180° about the origin.",o:["(−4; 1)","(1; 4)","(−1; −4)","(4; 1)"],a:0,e:"Both signs change."},
{q:"A(2; 6) is enlarged by a factor of ½ from the origin. Where is A′?",o:["(1; 3)","(4; 12)","(2,5; 6,5)","(1; 6)"],a:0,e:"Multiply both coordinates by ½."}]},

{id:"g9-math-area",grade:9,term:4,subject:"math",strand:"Measurement",title:"Area and perimeter of 2D shapes",
notes:`<h2>Area formulas</h2>
<div class="tbl"><table><tr><th>Shape</th><th>Area</th></tr>
<tr><td>Square</td><td>s²</td></tr><tr><td>Rectangle</td><td>l × b</td></tr>
<tr><td>Triangle</td><td>½ × b × h</td></tr><tr><td>Parallelogram</td><td>b × h (perpendicular height)</td></tr>
<tr><td>Trapezium</td><td>½ × (sum of parallel sides) × h</td></tr>
<tr><td>Rhombus or kite</td><td>½ × diagonal₁ × diagonal₂</td></tr>
<tr><td>Circle</td><td>πr²</td></tr></table></div>
<h2>Perimeter and circumference</h2>
<p>Perimeter is the distance around. For a circle, circumference C = πd = 2πr. Use π ≈ 3,14.</p>
<div class="ex"><b>Example</b>Trapezium with parallel sides 8 cm and 12 cm, height 5 cm: ½ × 20 × 5 = <b>50 cm²</b></div>
<h2>Working backwards</h2>
<p>Triangle area 24 cm², base 8 cm: 24 = ½ × 8 × h, so h = <b>6 cm</b>. Circumference 31,4 cm: d = 31,4 ÷ 3,14 = 10, so r = <b>5 cm</b>.</p>
<h2>Units and scaling</h2>
<ul><li>1 m² = 10 000 cm², so 5 000 cm² = 0,5 m².</li>
<li>If all lengths are doubled, the area is multiplied by 4.</li></ul>
<h2>Composite shapes</h2><p>Break the shape into parts you know, then add or subtract. A semicircle is half a circle: ½πr².</p>`,
qs:[
{q:"A parallelogram has a base of 10 cm and a height of 6 cm. What is its area?",o:["16 cm²","30 cm²","60 cm²","32 cm²"],a:2,e:"b × h = 60 cm²."},
{q:"A trapezium has parallel sides of 8 cm and 12 cm and a height of 5 cm. What is its area?",o:["100 cm²","50 cm²","25 cm²","60 cm²"],a:1,e:"½ × (8 + 12) × 5 = 50 cm²."},
{q:"A rhombus has diagonals of 10 cm and 8 cm. What is its area?",o:["80 cm²","40 cm²","18 cm²","36 cm²"],a:1,e:"½ × 10 × 8 = 40 cm²."},
{q:"A kite has diagonals of 6 cm and 9 cm. What is its area?",o:["54 cm²","27 cm²","15 cm²","30 cm²"],a:1,e:"½ × 6 × 9 = 27 cm²."},
{q:"A circle has a radius of 5 cm. What is its area? (π ≈ 3,14)",o:["31,4 cm²","15,7 cm²","78,5 cm²","25 cm²"],a:2,e:"3,14 × 25 = 78,5 cm²."},
{q:"A circle has a diameter of 20 cm. What is its circumference? (π ≈ 3,14)",o:["62,8 cm","31,4 cm","314 cm","125,6 cm"],a:0,e:"3,14 × 20 = 62,8 cm."},
{q:"A square has sides of 7,5 cm. What is its perimeter?",o:["15 cm","30 cm","56,25 cm","22,5 cm"],a:1,e:"4 × 7,5 = 30 cm."},
{q:"A triangle has an area of 24 cm² and a base of 8 cm. What is its height?",o:["3 cm","6 cm","12 cm","16 cm"],a:1,e:"24 = ½ × 8 × h, so h = 6."},
{q:"If every length of a shape is doubled, its area is multiplied by…",o:["2","4","6","8"],a:1,e:"2 × 2 = 4."},
{q:"Convert 5 000 cm² to m².",o:["50 m²","5 m²","0,5 m²","0,05 m²"],a:2,e:"5 000 ÷ 10 000 = 0,5."}],
pq:[
{q:"Which formula gives the area of a parallelogram?",o:["b × h","½ × b × h","2(b + h)","πr²"],a:0,h:"A parallelogram can be rearranged into a rectangle.",e:"Area = base × perpendicular height."},
{q:"Which formula gives the area of a trapezium?",o:["½ × (a + b) × h","a × b × h","½ × a × b","(a + b) × h"],a:0,h:"Average the two parallel sides, then multiply by the height.",e:"½ × (sum of parallel sides) × h."},
{q:"Which formula gives the area of a kite?",o:["½ × d₁ × d₂","d₁ × d₂","d₁ + d₂","2 × d₁ × d₂"],a:0,h:"It's half the rectangle made by the diagonals.",e:"½ × d₁ × d₂."},
{q:"A circle has a radius of 6 cm. What is its diameter?",o:["3 cm","12 cm","36 cm","18,84 cm"],a:1,h:"The diameter is two radii.",e:"12 cm."},
{q:"What is the area of a rectangle 7 cm by 3 cm?",o:["10 cm²","20 cm²","21 cm²","42 cm²"],a:2,h:"Length × breadth.",e:"7 × 3 = 21 cm²."}],
cq:[
{q:"What is the area of a semicircle with a radius of 10 cm? (π ≈ 3,14)",o:["314 cm²","157 cm²","31,4 cm²","15,7 cm²"],a:1,e:"½ × 3,14 × 100 = 157 cm²."},
{q:"A 10 cm × 4 cm rectangle has a semicircle with diameter 4 cm on one short end. What is the total area? (π ≈ 3,14)",o:["46,28 cm²","52,56 cm²","40 cm²","44 cm²"],a:0,e:"40 + ½ × 3,14 × 2² = 40 + 6,28 = 46,28 cm²."},
{q:"A circle has a circumference of 31,4 cm. What is its radius? (π ≈ 3,14)",o:["10 cm","5 cm","3,14 cm","15,7 cm"],a:1,e:"d = 31,4 ÷ 3,14 = 10, so r = 5 cm."},
{q:"A wheel with a diameter of 0,5 m turns 100 times. How far does it roll? (π ≈ 3,14)",o:["50 m","157 m","314 m","78,5 m"],a:1,e:"One turn = 3,14 × 0,5 = 1,57 m; × 100 = 157 m."},
{q:"Lawn costs R25 per m². What does 50 m² cost?",o:["R75","R1 250","R2 500","R125"],a:1,e:"50 × 25 = R1 250."}]},

{id:"g9-math-volume",grade:9,term:4,subject:"math",strand:"Measurement",title:"Surface area and volume of 3D objects",
notes:`<h2>Volume of a prism</h2>
<div class="key">Volume of any prism = <b>area of the base × height</b> (or length).</div>
<ul><li>Rectangular prism: V = l × b × h. Cube: V = s³.</li>
<li>Triangular prism: V = (½ × b × h of the triangle) × length of the prism.</li>
<li>Cylinder: the base is a circle, so <b>V = πr²h</b>.</li></ul>
<h2>Surface area</h2>
<ul><li>Cube: 6s². Rectangular prism: 2(lb + lh + bh).</li>
<li>Triangular prism: 2 triangles + 3 rectangles (5 faces).</li>
<li>Closed cylinder: two circles + the curved surface: <b>SA = 2πr² + 2πrh</b>. The curved surface unrolls into a rectangle 2πr long and h high.</li></ul>
<h2>Capacity</h2><p>1 cm³ = 1 ml and 1 000 cm³ = 1 litre.</p>
<div class="ex"><b>Example</b>A cylinder with r = 2 cm and h = 10 cm: V = 3,14 × 4 × 10 = <b>125,6 cm³</b></div>
<h2>Scaling</h2><p>Doubling the height doubles the volume. Doubling the radius of a cylinder multiplies the volume by 4 (because r is squared).</p>`,
qs:[
{q:"The volume of any prism is…",o:["area of the base × height","perimeter × height","length + breadth + height","2 × base"],a:0,e:"Base area × height works for all prisms."},
{q:"A cylinder has r = 2 cm and h = 10 cm. What is its volume? (π ≈ 3,14)",o:["62,8 cm³","125,6 cm³","12,56 cm³","251,2 cm³"],a:1,e:"3,14 × 4 × 10 = 125,6 cm³."},
{q:"What is the volume of a cube with sides of 5 cm?",o:["25 cm³","125 cm³","150 cm³","15 cm³"],a:1,e:"5 × 5 × 5 = 125 cm³."},
{q:"A triangular prism has a triangle with base 4 cm and height 3 cm, and a length of 10 cm. What is its volume?",o:["120 cm³","60 cm³","17 cm³","30 cm³"],a:1,e:"½ × 4 × 3 = 6; 6 × 10 = 60 cm³."},
{q:"What is the surface area of a cube with sides of 3 cm?",o:["27 cm²","54 cm²","18 cm²","36 cm²"],a:1,e:"6 × 9 = 54 cm²."},
{q:"How many cm³ are in 1 litre?",o:["10","100","1 000","10 000"],a:2,e:"1 litre = 1 000 cm³."},
{q:"A container has a volume of 1 000 cm³. How much liquid does it hold?",o:["1 ml","100 ml","1 litre","10 litres"],a:2,e:"1 000 cm³ = 1 litre."},
{q:"What is the surface area of a box 5 cm × 2 cm × 3 cm?",o:["30 cm²","31 cm²","62 cm²","60 cm²"],a:2,e:"2(10 + 15 + 6) = 62 cm²."},
{q:"A cylinder has r = 1 cm and h = 10 cm. What is its curved surface area? (π ≈ 3,14)",o:["31,4 cm²","62,8 cm²","6,28 cm²","314 cm²"],a:1,e:"2 × 3,14 × 1 × 10 = 62,8 cm²."},
{q:"If the height of a cylinder is doubled, its volume is…",o:["the same","doubled","four times bigger","halved"],a:1,e:"V = πr²h, so doubling h doubles V."}],
pq:[
{q:"What shape is the base of a cylinder?",o:["Square","Triangle","Circle","Rectangle"],a:2,h:"Think of a tin can.",e:"A cylinder has circular ends."},
{q:"Which formula gives the volume of a cylinder?",o:["πr²h","2πr","l × b × h","½bh"],a:0,h:"Area of the circle base × height.",e:"V = πr²h."},
{q:"How many faces does a triangular prism have?",o:["3","4","5","6"],a:2,h:"2 triangles + 3 rectangles.",e:"5 faces."},
{q:"What is the volume of a box 2 cm × 3 cm × 4 cm?",o:["9 cm³","24 cm³","26 cm³","52 cm³"],a:1,h:"Multiply all three.",e:"24 cm³."},
{q:"How many litres are in 2 000 cm³?",o:["0,2 l","2 l","20 l","200 l"],a:1,h:"1 000 cm³ = 1 litre.",e:"2 litres."}],
cq:[
{q:"A water tank is a cylinder with r = 50 cm and h = 100 cm. How many litres does it hold? (π ≈ 3,14)",o:["78,5 l","785 l","7 850 l","15 700 l"],a:1,e:"3,14 × 2 500 × 100 = 785 000 cm³ = 785 litres."},
{q:"A closed cylinder has r = 2 cm and h = 5 cm. What is its total surface area? (π ≈ 3,14)",o:["62,8 cm²","87,92 cm²","25,12 cm²","100,48 cm²"],a:1,e:"2 × 3,14 × 4 + 2 × 3,14 × 2 × 5 = 25,12 + 62,8 = 87,92 cm²."},
{q:"If the radius of a cylinder is doubled (same height), the volume is multiplied by…",o:["2","4","6","8"],a:1,e:"r² becomes (2r)² = 4r²."},
{q:"Water from a full 10 cm × 10 cm × 10 cm box is poured into a box with a 20 cm × 10 cm base. How deep is the water?",o:["10 cm","5 cm","2 cm","20 cm"],a:1,e:"1 000 cm³ ÷ 200 cm² = 5 cm."},
{q:"A triangular prism has a right-angled triangle with legs 6 cm and 8 cm, and a length of 20 cm. What is its volume?",o:["960 cm³","480 cm³","240 cm³","280 cm³"],a:1,e:"½ × 6 × 8 = 24; 24 × 20 = 480 cm³."}]},

/* ===== Natural Sciences ===== */
{id:"g9-ns-earth",grade:9,term:4,subject:"ns",strand:"Planet Earth & beyond",title:"The Earth as a system and the lithosphere",
notes:`<h2>Earth's four spheres</h2>
<div class="tbl"><table><tr><th>Sphere</th><th>What it is</th></tr>
<tr><td>Lithosphere</td><td>The rocky outer layer: the crust and top of the mantle</td></tr>
<tr><td>Hydrosphere</td><td>All water: oceans, rivers, ice, groundwater</td></tr>
<tr><td>Atmosphere</td><td>The layer of gases around Earth</td></tr>
<tr><td>Biosphere</td><td>All living things</td></tr></table></div>
<p>The spheres interact. Example: rain (hydrosphere) erodes rock (lithosphere), and plants (biosphere) release oxygen into the atmosphere.</p>
<h2>Inside the Earth</h2>
<ul><li><b>Crust</b>: the thin, solid outer layer.</li><li><b>Mantle</b>: hot, mostly solid rock that flows very slowly.</li>
<li><b>Outer core</b>: liquid iron and nickel.</li><li><b>Inner core</b>: solid iron and nickel (very hot, but solid because of enormous pressure).</li></ul>
<h2>Three kinds of rock</h2>
<div class="tbl"><table><tr><th>Type</th><th>How it forms</th><th>Examples</th></tr>
<tr><td>Igneous</td><td>Magma or lava cools and hardens</td><td>Granite, basalt</td></tr>
<tr><td>Sedimentary</td><td>Layers of sediment are pressed and cemented together</td><td>Sandstone, shale, limestone</td></tr>
<tr><td>Metamorphic</td><td>Existing rock is changed by heat and pressure</td><td>Marble (from limestone), slate (from shale)</td></tr></table></div>
<p>Fossils are usually found in <b>sedimentary</b> rock.</p>
<h2>The rock cycle</h2>
<p>Rocks are broken down (<b>weathering</b>), carried away (<b>erosion</b>), dropped as layers (<b>deposition</b>), compacted into sedimentary rock, changed by heat and pressure into metamorphic rock, and melted into magma that cools into igneous rock.</p>`,
qs:[
{q:"The lithosphere is…",o:["the layer of gases","the rocky outer layer of Earth","all water","all living things"],a:1,e:"Litho- means stone."},
{q:"The hydrosphere includes…",o:["all water on Earth","rocks","air","animals only"],a:0,e:"Hydro- means water."},
{q:"The biosphere is…",o:["all living things","the core","the clouds","the crust"],a:0,e:"Bio- means life."},
{q:"Which layer lies just below the crust?",o:["Inner core","Outer core","Mantle","Atmosphere"],a:2,e:"The mantle is beneath the crust."},
{q:"The inner core is…",o:["liquid","solid","gas","made of water"],a:1,e:"Enormous pressure keeps it solid."},
{q:"Igneous rock forms when…",o:["magma or lava cools and hardens","layers of sand are pressed","rock is heated without melting","shells pile up"],a:0,e:"Igneous means formed from fire."},
{q:"Sedimentary rock forms when…",o:["lava cools","layers of sediment are pressed together","rock melts","rock is heated and squeezed"],a:1,e:"Sediments are compacted and cemented."},
{q:"Marble is a metamorphic rock formed from…",o:["granite","limestone","basalt","sandstone"],a:1,e:"Heat and pressure change limestone into marble."},
{q:"Granite is an example of which rock type?",o:["Igneous","Sedimentary","Metamorphic","Fossil"],a:0,e:"Granite forms from slowly cooling magma."},
{q:"Rocks breaking down where they are is called…",o:["erosion","deposition","weathering","melting"],a:2,e:"Weathering breaks rock down in place."}],
pq:[
{q:"The atmosphere is…",o:["the layer of gases around Earth","the rocky crust","the oceans","the core"],a:0,h:"It's the air we breathe.",e:"The atmosphere is made of gases."},
{q:"The crust is…",o:["the thin, solid outer layer","the hottest layer","liquid","the centre"],a:0,h:"It's the layer we live on.",e:"The crust is the thin outer layer."},
{q:"Sandstone is…",o:["igneous","sedimentary","metamorphic","a mineral only"],a:1,h:"It is made of grains of sand pressed together.",e:"Sandstone is sedimentary."},
{q:"Metamorphic rock forms through…",o:["heat and pressure","cooling lava","evaporation","plants"],a:0,h:"Meta- means change.",e:"Heat and pressure change existing rock."},
{q:"Erosion means…",o:["moving weathered material away","melting rock","forming crystals","volcanoes erupting"],a:0,h:"Wind, water and ice carry material away.",e:"Erosion transports broken rock."}],
cq:[
{q:"Which is an example of the spheres interacting?",o:["Rain eroding a mountainside","A rock sitting still","The Sun shining on space","A star forming"],a:0,e:"The hydrosphere (rain) changes the lithosphere (rock)."},
{q:"In which rock type are fossils usually found?",o:["Igneous","Sedimentary","Metamorphic","Magma"],a:1,e:"Living things are buried in sediment layers."},
{q:"Slate forms from which rock?",o:["Shale","Granite","Marble","Basalt"],a:0,e:"Heat and pressure change shale into slate."},
{q:"The outer core is…",o:["solid rock","liquid iron and nickel","gas","water"],a:1,e:"The outer core is liquid metal."},
{q:"Which sequence is part of the rock cycle?",o:["Weathering → erosion → deposition → sedimentary rock","Igneous → gas → water","Fossil → star → magma","Marble → plants → air"],a:0,e:"Broken rock is carried, dropped and compacted."}]},

{id:"g9-ns-mining",grade:9,term:4,subject:"ns",strand:"Planet Earth & beyond",title:"Mining of mineral resources",
notes:`<h2>South Africa's minerals</h2>
<div class="tbl"><table><tr><th>Mineral</th><th>Where</th><th>Used for</th></tr>
<tr><td>Gold</td><td>Witwatersrand (Gauteng, Free State)</td><td>Jewellery, electronics, reserves</td></tr>
<tr><td>Platinum</td><td>Bushveld Complex (North West, Limpopo)</td><td>Catalytic converters, jewellery</td></tr>
<tr><td>Coal</td><td>Mpumalanga, Limpopo</td><td>Electricity, steel-making</td></tr>
<tr><td>Diamonds</td><td>Kimberley, Northern Cape coast</td><td>Jewellery, cutting tools</td></tr>
<tr><td>Iron ore</td><td>Northern Cape (e.g. Sishen)</td><td>Making steel</td></tr></table></div>
<p>South Africa has the world's largest known platinum reserves. Most of our electricity comes from coal-fired power stations.</p>
<h2>Mining methods</h2>
<ul><li><b>Open-cast (surface) mining</b>: digging a huge pit from the surface. Used when minerals are near the surface; cheaper and safer.</li>
<li><b>Underground mining</b>: sinking <b>shafts</b> and <b>tunnels</b> to reach deep deposits, like Witwatersrand gold.</li></ul>
<h2>From ore to product</h2><p>Ore is mined, crushed, and the mineral is separated and <b>refined</b> (purified).</p>
<h2>Impacts</h2>
<ul><li><b>Positive</b>: jobs, income, exports, infrastructure.</li>
<li><b>Negative</b>: scarred land, dust, <b>acid mine drainage</b> (acidic, polluted water that harms rivers and life), large water use, and health risks such as lung disease from dust.</li>
<li><b>Rehabilitation</b> means restoring the land after mining (filling pits, replanting) and treating polluted water.</li></ul>
<div class="key">Minerals are <b>non-renewable</b>: once mined, they are gone.</div>`,
qs:[
{q:"Which mineral is mainly mined on the Witwatersrand?",o:["Coal","Gold","Platinum","Iron ore"],a:1,e:"The Witwatersrand is famous for gold."},
{q:"Where are South Africa's huge platinum reserves?",o:["Bushveld Complex","Table Mountain","Drakensberg","Karoo"],a:0,e:"The Bushveld Complex holds the world's largest platinum reserves."},
{q:"In which province is most coal mined?",o:["Western Cape","Mpumalanga","KwaZulu-Natal","Eastern Cape"],a:1,e:"Mpumalanga is the main coal province."},
{q:"Open-cast mining means…",o:["digging a large pit from the surface","sinking deep shafts","mining under the sea","panning in rivers"],a:0,e:"Open-cast mines are surface pits."},
{q:"Underground mining uses…",o:["shafts and tunnels","only bulldozers on the surface","boats","wind"],a:0,e:"Shafts reach deep deposits."},
{q:"Acid mine drainage is…",o:["acidic, polluted water from mines","fresh rainwater","a type of ore","a mining tool"],a:0,e:"It pollutes rivers and harms living things."},
{q:"Rehabilitation after mining means…",o:["restoring the land","digging deeper","selling the mine","building a road"],a:0,e:"Pits are filled and land replanted."},
{q:"Most of South Africa's electricity comes from burning…",o:["gold","coal","diamonds","platinum"],a:1,e:"Coal-fired power stations generate most of it."},
{q:"Which is a positive impact of mining?",o:["Jobs and income","Dust pollution","Polluted rivers","Scarred land"],a:0,e:"Mining creates jobs and earns money."},
{q:"Iron ore is used to make…",o:["steel","glass","paper","plastic"],a:0,e:"Iron is the main ingredient in steel."}],
pq:[
{q:"A mineral resource is…",o:["a natural material we mine, like gold","a factory","a type of plant","a river"],a:0,h:"It comes from the ground.",e:"Minerals are mined from the Earth."},
{q:"Which town is famous for diamonds?",o:["Kimberley","Durban","Polokwane","George"],a:0,h:"It has the Big Hole.",e:"Kimberley."},
{q:"Coal is a…",o:["fossil fuel","metal","renewable resource","gemstone"],a:0,h:"It formed from ancient plants.",e:"Coal is a fossil fuel."},
{q:"Which is a danger in underground mines?",o:["Rockfalls","Sunburn","Snow","Floods of honey"],a:0,h:"Think of what can collapse in a tunnel.",e:"Rockfalls are a serious risk."},
{q:"Refining means…",o:["purifying the mineral","digging a shaft","transporting ore","selling gold"],a:0,h:"It makes the mineral pure.",e:"Refining removes impurities."}],
cq:[
{q:"Why is open-cast mining used for coal near the surface?",o:["It is cheaper and safer","It is quieter","It uses no machines","It's the only legal method"],a:0,e:"No deep shafts are needed."},
{q:"How does acid mine drainage harm the environment?",o:["It pollutes rivers and kills aquatic life","It makes soil richer","It cleans water","It has no effect"],a:0,e:"Acidic water and metals poison ecosystems."},
{q:"Minerals are non-renewable. This means…",o:["they will eventually run out","they grow back","they are free","they never run out"],a:0,e:"They take millions of years to form."},
{q:"Breathing in mine dust over many years can cause…",o:["lung disease","better eyesight","stronger bones","nothing"],a:0,e:"Dust damages the lungs (for example, silicosis)."},
{q:"What is the best way to reduce mining's long-term damage?",o:["Rehabilitate the land and treat polluted water","Abandon the mine","Dig more pits","Dump waste in rivers"],a:0,e:"Rehabilitation repairs the environment."}]},

{id:"g9-ns-atmosphere",grade:9,term:4,subject:"ns",strand:"Planet Earth & beyond",title:"The atmosphere",
notes:`<h2>What air is made of</h2>
<div class="tbl"><table><tr><th>Gas</th><th>About</th></tr>
<tr><td>Nitrogen</td><td>78%</td></tr><tr><td>Oxygen</td><td>21%</td></tr><tr><td>Argon</td><td>0,9%</td></tr>
<tr><td>Carbon dioxide</td><td>0,04%</td></tr></table></div>
<p>There is also water vapour, which varies.</p>
<h2>Layers of the atmosphere (from the ground up)</h2>
<div class="tbl"><table><tr><th>Layer</th><th>Key facts</th></tr>
<tr><td>Troposphere</td><td>Lowest layer; all weather happens here; temperature drops as you go higher</td></tr>
<tr><td>Stratosphere</td><td>Contains the <b>ozone layer</b>, which absorbs harmful ultraviolet (UV) radiation; jets fly in its lower part</td></tr>
<tr><td>Mesosphere</td><td>Coldest layer; meteors burn up here</td></tr>
<tr><td>Thermosphere</td><td>Very thin air; very hot; auroras; the ISS orbits here</td></tr></table></div>
<h2>The greenhouse effect</h2>
<ul><li>Greenhouse gases (carbon dioxide, methane, water vapour) trap heat. Without this <b>natural greenhouse effect</b>, Earth would be too cold for life.</li>
<li>Burning fossil fuels and cutting down forests add more greenhouse gases. This <b>enhanced greenhouse effect</b> causes <b>global warming</b> and climate change.</li>
<li>We can reduce emissions by using renewable energy, saving electricity and planting trees.</li></ul>
<h2>Ozone depletion</h2>
<p>Chemicals called <b>CFCs</b> (once used in fridges and aerosol sprays) damaged the ozone layer, letting more UV radiation reach the ground. Many countries agreed to ban CFCs, and the ozone layer is slowly recovering.</p>`,
qs:[
{q:"Which gas makes up most of the air?",o:["Oxygen","Nitrogen","Carbon dioxide","Argon"],a:1,e:"About 78% of air is nitrogen."},
{q:"About what percentage of the air is oxygen?",o:["78%","21%","1%","50%"],a:1,e:"Oxygen is about 21%."},
{q:"In which layer does weather happen?",o:["Troposphere","Stratosphere","Mesosphere","Thermosphere"],a:0,e:"Clouds, rain and wind are in the troposphere."},
{q:"In which layer is the ozone layer?",o:["Troposphere","Stratosphere","Mesosphere","Thermosphere"],a:1,e:"The ozone layer is in the stratosphere."},
{q:"What does the ozone layer do?",o:["Absorbs harmful UV radiation","Makes rain","Produces oxygen","Causes wind"],a:0,e:"It protects us from UV rays."},
{q:"In which layer do meteors burn up?",o:["Troposphere","Stratosphere","Mesosphere","Thermosphere"],a:2,e:"Meteors burn up in the mesosphere."},
{q:"Which is a greenhouse gas?",o:["Carbon dioxide","Argon","Helium","Neon"],a:0,e:"CO₂ traps heat."},
{q:"The enhanced greenhouse effect causes…",o:["global warming","the ozone layer to grow","more oxygen","colder winters only"],a:0,e:"Extra greenhouse gases trap more heat."},
{q:"Which chemicals damaged the ozone layer?",o:["CFCs","Oxygen","Nitrogen","Water"],a:0,e:"CFCs break down ozone."},
{q:"In the troposphere, what happens to temperature as you go higher?",o:["It increases","It decreases","It stays the same","It doubles"],a:1,e:"Mountain tops are colder than valleys."}],
pq:[
{q:"The atmosphere is…",o:["the layer of gases around Earth","the ocean","the crust","the Sun's surface"],a:0,h:"It's the air.",e:"A layer of gases."},
{q:"Which is the lowest layer of the atmosphere?",o:["Troposphere","Stratosphere","Mesosphere","Thermosphere"],a:0,h:"We live in it.",e:"The troposphere."},
{q:"About what percentage of the air is carbon dioxide?",o:["0,04%","4%","21%","78%"],a:0,h:"It's a very small amount.",e:"About 0,04%."},
{q:"Burning fossil fuels releases…",o:["carbon dioxide","ozone","pure oxygen","nitrogen only"],a:0,h:"It's the main greenhouse gas from cars and power stations.",e:"Burning fuel releases CO₂."},
{q:"Auroras happen in the…",o:["troposphere","thermosphere","ocean","crust"],a:1,h:"It's the highest layer.",e:"Auroras glow in the thermosphere."}],
cq:[
{q:"Without the natural greenhouse effect, Earth would be…",o:["too cold for life","exactly the same","much hotter","full of ozone"],a:0,e:"Greenhouse gases keep Earth warm enough."},
{q:"Why do big passenger jets often fly in the lower stratosphere?",o:["To avoid most of the weather","Because it is hotter","To burn meteors","To touch the ozone"],a:0,e:"The weather is in the troposphere below."},
{q:"Which action reduces greenhouse gas emissions?",o:["Using solar and wind energy","Burning more coal","Cutting down forests","Leaving lights on"],a:0,e:"Renewable energy doesn't burn fossil fuels."},
{q:"Why is sun protection more important where the ozone layer is thinner?",o:["More UV radiation reaches the ground","It is colder there","There is more rain","There is less light"],a:0,e:"Less ozone means more UV gets through."},
{q:"Which order is correct, from the ground up?",o:["Troposphere, stratosphere, mesosphere, thermosphere","Stratosphere, troposphere, thermosphere, mesosphere","Mesosphere, troposphere, stratosphere, thermosphere","Thermosphere, mesosphere, stratosphere, troposphere"],a:0,e:"T, S, M, T from the bottom."}]},

{id:"g9-ns-stars",grade:9,term:4,subject:"ns",strand:"Planet Earth & beyond",title:"Birth, life and death of stars",
notes:`<h2>Birth</h2>
<p>Stars form in a <b>nebula</b>, a huge cloud of gas (mostly hydrogen) and dust. Gravity pulls the gas together into a hot, spinning ball called a <b>protostar</b>. When the centre is hot enough, <b>nuclear fusion</b> starts and a star is born.</p>
<h2>Life</h2>
<ul><li>In fusion, <b>hydrogen</b> nuclei join to form <b>helium</b>, releasing huge amounts of energy as light and heat.</li>
<li>For most of its life a star is stable: gravity pulling inwards is balanced by the outward pressure from fusion. This is the <b>main sequence</b> stage.</li>
<li>Our Sun is an average-sized main sequence star, about 4,6 billion years old.</li>
<li>Star colour shows temperature: <b>blue</b> stars are hottest, then white, yellow, orange, and <b>red</b> stars are coolest.</li>
<li>Big stars burn their fuel much faster, so smaller stars live longer.</li></ul>
<h2>Death</h2>
<div class="tbl"><table><tr><th>Average star (like the Sun)</th><th>Massive star</th></tr>
<tr><td>Runs out of hydrogen in its core → swells into a <b>red giant</b> → outer layers drift away as a planetary nebula → the core becomes a <b>white dwarf</b></td>
<td>Becomes a <b>red supergiant</b> → explodes in a <b>supernova</b> → leaves a <b>neutron star</b> or a <b>black hole</b></td></tr></table></div>
<p>A black hole's gravity is so strong that not even light can escape. Our Sun is not massive enough to become one.</p>
<div class="key">The elements in our bodies, like carbon, oxygen and iron, were made inside stars and spread by supernovae.</div>`,
qs:[
{q:"Where are stars born?",o:["In a nebula","In a black hole","On planets","In the ocean"],a:0,e:"Stars form from clouds of gas and dust."},
{q:"What process produces a star's energy?",o:["Nuclear fusion","Burning coal","Photosynthesis","Evaporation"],a:0,e:"Fusion in the core releases energy."},
{q:"In nuclear fusion in stars, hydrogen is changed into…",o:["oxygen","helium","carbon dioxide","iron"],a:1,e:"Hydrogen nuclei fuse into helium."},
{q:"What kind of star is the Sun?",o:["A red supergiant","An average-sized main sequence star","A white dwarf","A neutron star"],a:1,e:"The Sun is a middle-aged, average star."},
{q:"How does an average star like the Sun end its life?",o:["As a white dwarf","As a black hole","As a planet","As a comet"],a:0,e:"After the red giant stage, the core becomes a white dwarf."},
{q:"A massive star ends with a huge explosion called a…",o:["nebula","supernova","protostar","red giant"],a:1,e:"A supernova."},
{q:"What can be left after a supernova?",o:["A neutron star or a black hole","A planet","A main sequence star","A nebula only"],a:0,e:"The remaining core becomes a neutron star or black hole."},
{q:"Which colour star is hottest?",o:["Red","Orange","Yellow","Blue"],a:3,e:"Blue stars are hottest."},
{q:"A star becomes a red giant when…",o:["it runs out of hydrogen in its core and expands","it is first born","it explodes","it becomes a black hole"],a:0,e:"It swells as the core fuel runs out."},
{q:"Why is a black hole black?",o:["Its gravity is so strong that light can't escape","It is painted","It is very cold","It is behind the Sun"],a:0,e:"No light escapes it."}],
pq:[
{q:"A nebula is…",o:["a cloud of gas and dust","a dead star","a planet","a telescope"],a:0,h:"It's a stellar nursery.",e:"A nebula is a gas and dust cloud."},
{q:"Which force pulls gas together to form a star?",o:["Gravity","Magnetism","Friction","Wind"],a:0,h:"It also keeps you on the ground.",e:"Gravity."},
{q:"Which colour star is coolest?",o:["Blue","White","Yellow","Red"],a:3,h:"Think of how metal glows: red-hot is cooler than white-hot.",e:"Red stars are coolest."},
{q:"About how old is the Sun?",o:["4,6 billion years","4 600 years","46 million years","460 years"],a:0,h:"Billions of years.",e:"About 4,6 billion years."},
{q:"A protostar is…",o:["an early stage of a star","a dead star","a planet","a galaxy"],a:0,h:"Proto- means first.",e:"A young star still forming."}],
cq:[
{q:"Which order shows the life of an average star?",o:["Nebula → protostar → main sequence → red giant → white dwarf","Nebula → supernova → black hole → protostar","White dwarf → red giant → nebula","Protostar → black hole → nebula"],a:0,e:"This is the Sun's life cycle."},
{q:"Why won't the Sun become a black hole?",o:["It isn't massive enough","It is too young","It is too hot","It is too far away"],a:0,e:"Only very massive stars become black holes."},
{q:"Why do scientists say we are made of star stuff?",o:["The elements in our bodies were made inside stars","We glow at night","We were born in a nebula","Stars live on Earth"],a:0,e:"Stars make heavier elements and supernovae spread them."},
{q:"What stops a main sequence star from collapsing under gravity?",o:["Outward pressure from nuclear fusion","Wind","The Moon","Magnetism"],a:0,e:"The outward push from fusion balances gravity."},
{q:"Which stars live the longest?",o:["Small, low-mass stars","Huge, massive stars","Blue supergiants","They all live the same time"],a:0,e:"Small stars use their fuel slowly."}]},

/* ===== History ===== */
{id:"g9-his-1976",grade:9,term:4,subject:"his",strand:"History",title:"Turning points: 1976 and 1990",
notes:`<h2>Background: 1960</h2>
<p>On <b>21 March 1960</b>, police opened fire on people protesting against pass laws at <b>Sharpeville</b>. 69 people were killed. The government then <b>banned the ANC and PAC</b>, and they turned to armed struggle (the ANC formed Umkhonto we Sizwe).</p>
<h2>1976: the Soweto uprising</h2>
<ul><li>A 1974 decree forced black schools to teach some subjects in <b>Afrikaans</b>, a language many learners and teachers didn't speak well.</li>
<li>On <b>16 June 1976</b>, thousands of students in <b>Soweto</b> marched in protest. Police opened fire.</li>
<li>Young <b>Hector Pieterson</b> was among the first killed. A photograph of him by <b>Sam Nzima</b> shocked the world.</li>
<li>The uprising spread across the country, and hundreds were killed in the months that followed.</li>
<li>The students were influenced by <b>Black Consciousness</b>, led by <b>Steve Biko</b>, which taught black pride and self-reliance. Biko died in police detention in <b>1977</b>.</li>
<li>16 June is now <b>Youth Day</b>.</li></ul>
<h2>Why 1976 was a turning point</h2>
<p>Young people became a powerful force in the struggle, many joined the liberation movements in exile, and the world's attention turned to apartheid, leading to more sanctions.</p>
<h2>1990: the end of apartheid begins</h2>
<ul><li>By the late 1980s, apartheid faced pressure from mass resistance, international sanctions and a weak economy.</li>
<li>On <b>2 February 1990</b>, President <b>F.W. de Klerk</b> announced that the ANC, PAC, SACP and other organisations were <b>unbanned</b>.</li>
<li>On <b>11 February 1990</b>, <b>Nelson Mandela</b> was released after <b>27 years</b> in prison, most of them on Robben Island.</li>
<li>Negotiations (including <b>CODESA</b>) produced a new, democratic constitution.</li>
<li>On <b>27 April 1994</b>, South Africa held its first democratic election, and Mandela became president. We celebrate <b>Freedom Day</b> on 27 April.</li></ul>`,
qs:[
{q:"On what date did the Soweto uprising begin?",o:["21 March 1960","16 June 1976","11 February 1990","27 April 1994"],a:1,e:"Students marched on 16 June 1976."},
{q:"What were students protesting against in 1976?",o:["Being taught some subjects in Afrikaans","Sport rules","School uniforms","Holidays"],a:0,e:"The Afrikaans Medium Decree."},
{q:"Who took the famous photograph of Hector Pieterson?",o:["Sam Nzima","Steve Biko","F.W. de Klerk","Nelson Mandela"],a:0,e:"Sam Nzima's photo shocked the world."},
{q:"What is 16 June now commemorated as?",o:["Freedom Day","Youth Day","Heritage Day","Human Rights Day"],a:1,e:"Youth Day honours the 1976 students."},
{q:"Who led the Black Consciousness Movement?",o:["Steve Biko","Jan Smuts","Hendrik Verwoerd","P.W. Botha"],a:0,e:"Steve Biko led Black Consciousness."},
{q:"How did Steve Biko die?",o:["In police detention in 1977","In a car accident","In exile in 1990","In the 1976 march"],a:0,e:"He died in police custody in 1977."},
{q:"When was Nelson Mandela released from prison?",o:["11 February 1990","16 June 1976","27 April 1994","2 February 1980"],a:0,e:"He walked free on 11 February 1990."},
{q:"Who announced the unbanning of the liberation movements on 2 February 1990?",o:["F.W. de Klerk","Nelson Mandela","P.W. Botha","Thabo Mbeki"],a:0,e:"President F.W. de Klerk."},
{q:"About how long was Mandela in prison?",o:["10 years","18 years","27 years","40 years"],a:2,e:"He spent 27 years in prison."},
{q:"When was South Africa's first democratic election?",o:["27 April 1994","16 June 1976","11 February 1990","31 May 1961"],a:0,e:"27 April 1994, now Freedom Day."}],
pq:[
{q:"In which township did the 1976 uprising begin?",o:["Soweto","Sharpeville","Langa","Alexandra"],a:0,h:"Its name comes from South Western Townships.",e:"Soweto."},
{q:"When did the Sharpeville massacre happen?",o:["21 March 1960","16 June 1976","9 August 1956","11 February 1990"],a:0,h:"It's remembered on Human Rights Day.",e:"21 March 1960."},
{q:"On which date is Freedom Day?",o:["27 April","16 June","24 September","16 December"],a:0,h:"It marks the first democratic election.",e:"27 April."},
{q:"Which organisations were unbanned in 1990?",o:["ANC, PAC and SACP","SADC and SAHRC","NP and DP","VOC and LMS"],a:0,h:"They were the main liberation movements.",e:"The ANC, PAC and SACP."},
{q:"Where did Mandela spend most of his imprisonment?",o:["Robben Island","Kuruman","Soweto","Kliptown"],a:0,h:"It's an island off Cape Town.",e:"Robben Island."}],
cq:[
{q:"Why was 1976 a turning point?",o:["Youth became a major force in the struggle and the world turned against apartheid","Apartheid ended immediately","Mandela was released","Afrikaans became the only language"],a:0,e:"The uprising energised resistance and increased international pressure."},
{q:"What did Black Consciousness teach?",o:["Pride and self-reliance among black people","Support for apartheid","Only armed struggle","Leaving South Africa"],a:0,e:"It encouraged black people to reject feelings of inferiority."},
{q:"Why did F.W. de Klerk unban the liberation movements?",o:["Pressure from resistance, sanctions and a weak economy","Because apartheid was working","Britain ordered it","The ANC asked politely"],a:0,e:"Apartheid had become impossible to sustain."},
{q:"What was CODESA?",o:["Negotiations for a new democratic constitution","A mining company","A political party","A prison"],a:0,e:"The Convention for a Democratic South Africa."},
{q:"Which order is correct?",o:["Sharpeville (1960) → Soweto (1976) → Mandela released (1990) → first democratic election (1994)","Soweto → Sharpeville → election → Mandela released","Mandela released → Soweto → Sharpeville → election","Election → Mandela released → Soweto → Sharpeville"],a:0,e:"1960, 1976, 1990, 1994."}]},

/* ===== Geography ===== */
{id:"g9-geo-resources",grade:9,term:4,subject:"geo",strand:"Geography",title:"Resource use and sustainability",
notes:`<h2>Natural resources</h2>
<ul><li><b>Renewable resources</b> can be replaced naturally: sunlight, wind, water, and forests and fish if they are managed well.</li>
<li><b>Non-renewable resources</b> run out because they take millions of years to form: coal, oil, natural gas and minerals.</li></ul>
<h2>Sustainable development</h2>
<p>Using resources to meet our needs <b>today without harming the ability of future generations</b> to meet theirs.</p>
<h2>Water in South Africa</h2>
<p>South Africa is a <b>water-scarce</b> country: our average rainfall is well below the world average, and droughts are common. We save water by fixing leaks, harvesting rainwater, and using less in gardens and homes.</p>
<h2>Pressures on resources</h2>
<ul><li><b>Overgrazing</b> removes plant cover and leads to <b>soil erosion</b>.</li>
<li><b>Deforestation</b> (cutting down forests) destroys habitats and adds carbon dioxide to the air.</li>
<li><b>Overfishing</b> empties the oceans; <b>fishing quotas</b> limit how much may be caught.</li>
<li>Pollution of water, air and land.</li></ul>
<h2>Solutions</h2>
<ul><li>Reduce, reuse, recycle (the <b>3 Rs</b>).</li><li>Use renewable energy such as solar and wind.</li>
<li>Protect areas in national parks and marine reserves.</li>
<li>Reduce your <b>ecological footprint</b>: the amount of land and resources needed to support your lifestyle.</li></ul>`,
qs:[
{q:"Which is a renewable resource?",o:["Sunlight","Coal","Oil","Gold"],a:0,e:"The Sun keeps shining."},
{q:"Which is a non-renewable resource?",o:["Wind","Coal","Sunlight","Water"],a:1,e:"Coal takes millions of years to form."},
{q:"Sustainable development means…",o:["meeting today's needs without harming future generations","using everything now","never using resources","only using imported goods"],a:0,e:"It balances present and future needs."},
{q:"Why is South Africa called water-scarce?",o:["Its average rainfall is below the world average","It has no rivers","It is surrounded by desert","It rains every day"],a:0,e:"Rainfall is low and unreliable."},
{q:"Overgrazing leads to…",o:["soil erosion","more forests","cleaner rivers","more rain"],a:0,e:"Without plant cover, soil washes and blows away."},
{q:"What are the 3 Rs?",o:["Reduce, reuse, recycle","Read, write, revise","Rain, rivers, reservoirs","Roads, rail, routes"],a:0,e:"They cut waste."},
{q:"Fishing quotas are used to…",o:["prevent overfishing","catch more fish","close beaches","clean the sea"],a:0,e:"They limit catches so fish populations can recover."},
{q:"An ecological footprint measures…",o:["the land and resources needed to support a lifestyle","shoe size","the size of a park","how far you walk"],a:0,e:"It shows our demand on nature."},
{q:"Wind energy is…",o:["renewable","non-renewable","a fossil fuel","a mineral"],a:0,e:"Wind is constantly replenished."},
{q:"Deforestation means…",o:["cutting down forests","planting trees","building dams","recycling paper"],a:0,e:"Forests are cleared."}],
pq:[
{q:"Which resource can run out?",o:["Oil","Sunlight","Wind","Waves"],a:0,h:"It formed from ancient life underground.",e:"Oil is non-renewable."},
{q:"Which is a way to save water at home?",o:["Fix leaking taps","Leave taps running","Water the garden at noon","Take long baths"],a:0,h:"Stop the drip.",e:"Fixing leaks saves water."},
{q:"Recycling means…",o:["turning used materials into new products","throwing everything away","burning rubbish","buying more"],a:0,h:"Cycle means going round again.",e:"Recycling reuses materials."},
{q:"Forests are renewable only if…",o:["they are managed and replanted","they are cut down quickly","they burn","no one uses them"],a:0,h:"Trees must be allowed to grow back.",e:"Good management keeps them renewable."},
{q:"National parks help to…",o:["protect natural areas and wildlife","build factories","increase mining","drain wetlands"],a:0,h:"Think of Kruger.",e:"They conserve nature."}],
cq:[
{q:"Why is burning coal not sustainable?",o:["Coal runs out and adds greenhouse gases","Coal grows back","It cleans the air","It saves water"],a:0,e:"It's non-renewable and polluting."},
{q:"How does deforestation contribute to climate change?",o:["Fewer trees absorb carbon dioxide","It adds oxygen","It cools the Earth","It has no effect"],a:0,e:"Trees store carbon; cutting them releases it."},
{q:"A farmer keeps too many cattle on a small piece of land. What is the likely result?",o:["Soil erosion","More grass","More rain","Better soil"],a:0,e:"Overgrazing strips plant cover."},
{q:"Which choice reduces your ecological footprint?",o:["Walking or cycling short distances","Driving everywhere","Wasting food","Leaving lights on"],a:0,e:"It uses less energy and fuel."},
{q:"Which is the best long-term energy solution for South Africa's sunny climate?",o:["Solar power","More coal","Burning wood","Oil imports only"],a:0,e:"South Africa has excellent sunshine for solar power."}]},

/* ===== Life Orientation ===== */
{id:"g9-lo-religion",grade:9,term:4,subject:"lo",strand:"Constitutional rights & responsibilities",title:"Religions and sport ethics",
notes:`<h2>Freedom of religion</h2>
<p>South Africa's Constitution protects <b>freedom of religion, belief and opinion</b>. People may follow any religion or none, and must respect others' beliefs.</p>
<h2>Religions in South Africa</h2>
<p>Christianity is followed by most South Africans. Other religions include Islam, Hinduism, Judaism and African Traditional Religion.</p>
<h2>How religions contribute to society</h2>
<ul><li>Teaching values such as honesty, kindness and respect.</li>
<li>Running schools, clinics, orphanages and feeding schemes.</li>
<li>Counselling and support during crises and disasters.</li>
<li>Leaders of many faiths, such as Archbishop Desmond Tutu, spoke out against apartheid.</li></ul>
<h2>Ethics in sport</h2>
<p><b>Ethics</b> are moral principles about right and wrong. In sport, this is called <b>fair play</b>:</p>
<ul><li>Follow the rules and respect the referee's decisions.</li>
<li>Respect opponents, teammates and spectators.</li>
<li>No <b>doping</b> (using banned performance-enhancing drugs).</li>
<li>No <b>match-fixing</b> (deliberately arranging a result, often for money).</li>
<li>Win and lose gracefully.</li></ul>
<div class="key">Cheating may win a game, but it damages trust, health and the sport itself.</div>`,
qs:[
{q:"What does the Constitution say about religion?",o:["Everyone has freedom of religion and belief","Everyone must follow one religion","Religion is banned","Only adults may have a religion"],a:0,e:"Freedom of religion is a constitutional right."},
{q:"Which religion do most South Africans follow?",o:["Christianity","Hinduism","Judaism","Buddhism"],a:0,e:"Christianity is the largest religion in South Africa."},
{q:"Which is a way religious organisations contribute to society?",o:["Running feeding schemes and clinics","Making laws","Collecting taxes","Running elections"],a:0,e:"Faith groups provide many social services."},
{q:"Which religious leader was famous for speaking out against apartheid?",o:["Archbishop Desmond Tutu","F.W. de Klerk","Jan van Riebeeck","Cecil Rhodes"],a:0,e:"Tutu won the Nobel Peace Prize in 1984."},
{q:"Fair play in sport means…",o:["following the rules and respecting others","winning at any cost","arguing with the referee","ignoring opponents"],a:0,e:"Fair play is ethical behaviour in sport."},
{q:"Doping means…",o:["using banned drugs to improve performance","training hard","eating healthily","resting before a game"],a:0,e:"Doping is cheating and dangerous."},
{q:"Match-fixing means…",o:["deliberately arranging the result of a match","fixing the pitch","repairing equipment","scheduling games"],a:0,e:"It is corruption, often for money."},
{q:"Ethics are…",o:["moral principles about right and wrong","sports equipment","religious buildings","school subjects only"],a:0,e:"Ethics guide how we should behave."},
{q:"How should a good sportsperson react to losing?",o:["Congratulate the winners and learn from it","Blame the referee","Refuse to shake hands","Quit the team"],a:0,e:"Losing gracefully shows respect."},
{q:"Why is cheating in sport harmful?",o:["It damages trust, health and the sport","It makes games fairer","It helps everyone","It has no effect"],a:0,e:"Cheating hurts players and the sport."}],
pq:[
{q:"Which is a religion practised in South Africa?",o:["Islam","Rugby","Democracy","Geography"],a:0,h:"Its followers pray in mosques.",e:"Islam is one of South Africa's religions."},
{q:"Respecting others' beliefs means…",o:["accepting their right to believe differently","making fun of them","forcing them to change","ignoring the law"],a:0,h:"Freedom of religion goes both ways.",e:"Respect their right to their beliefs."},
{q:"A referee makes a decision you disagree with. What does fair play require?",o:["Respect the decision","Shout at the referee","Walk off the field","Push the referee"],a:0,h:"Sport depends on accepting officials' calls.",e:"Respect the referee."},
{q:"Which is an example of good sportsmanship?",o:["Helping an injured opponent up","Faking an injury","Taunting the other team","Breaking the rules"],a:0,h:"Think of kindness and respect.",e:"Helping an opponent shows respect."},
{q:"African Traditional Religion often includes…",o:["respect for ancestors","no beliefs","only sport","banking"],a:0,h:"It connects the living with those who came before.",e:"Ancestors are central in many traditions."}],
cq:[
{q:"A teammate offers you pills that will make you run faster. What should you do?",o:["Refuse and tell the coach","Take them secretly","Sell them","Share them with the team"],a:0,e:"Doping is cheating and can damage your health."},
{q:"Why is match-fixing a serious problem?",o:["It's dishonest and destroys trust in sport","It makes games more exciting","It is allowed in finals","It helps fans"],a:0,e:"Fans and players lose trust."},
{q:"How did religious leaders help during apartheid?",o:["They spoke out against injustice and supported victims","They supported apartheid laws","They stayed silent","They ran the police"],a:0,e:"Many faith leaders opposed apartheid."},
{q:"Which right protects a learner who wears religious dress to school (within school policy)?",o:["Freedom of religion","Freedom of movement","Right to vote","Right to property"],a:0,e:"Religious expression is protected."},
{q:"Which statement shows respect for diversity in sport?",o:["Welcoming players of all religions and cultures","Excluding players who are different","Mocking players' beliefs","Only allowing one language"],a:0,e:"Sport should include everyone."}]},

{id:"g9-lo-challenges",grade:9,term:4,subject:"lo",strand:"Development of the self in society",title:"Coping with challenging situations",
notes:`<h2>Challenging situations</h2>
<p>Everyone faces hard times: losing someone, family problems, trauma (a frightening or shocking event), or a crisis. Feeling upset is normal. What matters is getting support.</p>
<h2>Depression</h2>
<p>Depression is more than a bad day. Signs that last for weeks can include:</p>
<ul><li>Feeling sad, empty or hopeless most of the time</li><li>Losing interest in things you used to enjoy</li>
<li>Sleeping or eating much more or less than usual</li><li>Pulling away from friends and family</li><li>Finding it hard to concentrate</li></ul>
<p>Depression is a health condition that can be treated. It is not a weakness.</p>
<h2>Grief and loss</h2>
<p>Grief is the pain of losing someone or something important. People often go through feelings such as <b>denial, anger, bargaining, sadness and acceptance</b>, not always in that order. There's no “right” way or time to grieve.</p>
<h2>Healthy ways to cope</h2>
<ul><li>Talk to someone you trust: a parent, teacher, school counsellor or friend.</li>
<li>Keep a routine, sleep well, eat healthily and exercise.</li><li>Write down your feelings or do something creative.</li>
<li>Avoid unhealthy coping like alcohol or drugs, which make things worse.</li>
<li>Ask for professional help when feelings don't improve.</li></ul>
<h2>Helping a friend</h2><p>Listen without judging, take them seriously, and encourage them to talk to a trusted adult. Don't keep it a secret if they are unsafe.</p>
<div class="key">You don't have to cope alone. Talk to a trusted adult, or call <b>Childline on 116</b> (free, 24 hours).</div>`,
qs:[
{q:"Which is a possible sign of depression?",o:["Losing interest in things you used to enjoy for weeks","Feeling happy after a good mark","Being tired after sport","Enjoying time with friends"],a:0,e:"Long-lasting loss of interest can be a sign."},
{q:"Depression is…",o:["a health condition that can be treated","a sign of weakness","the same as a bad mood for a day","something to ignore"],a:0,e:"It is a real, treatable condition."},
{q:"Grief is…",o:["the pain of losing someone or something important","a type of exercise","a school subject","a sports injury"],a:0,e:"Grief follows loss."},
{q:"Which is a healthy way to cope with stress?",o:["Talking to someone you trust","Drinking alcohol","Isolating yourself","Skipping sleep"],a:0,e:"Sharing feelings helps."},
{q:"Trauma is…",o:["a deeply frightening or shocking experience","a holiday","a good mark","a sport"],a:0,e:"Trauma can have lasting effects."},
{q:"What is the free Childline number?",o:["116","10111","1020","999"],a:0,e:"Childline is 116."},
{q:"A friend seems very down and withdrawn. What should you do first?",o:["Listen without judging and encourage them to talk to a trusted adult","Ignore them","Tell everyone","Make jokes about it"],a:0,e:"Listening and connecting them to help matters most."},
{q:"Which is an unhealthy way of coping?",o:["Using drugs or alcohol","Exercising","Writing in a journal","Talking to a counsellor"],a:0,e:"Substances make problems worse."},
{q:"Is there one right way to grieve?",o:["No, everyone grieves differently","Yes, everyone must cry","Yes, it must take one week","Yes, you must stay silent"],a:0,e:"Grief is personal."},
{q:"Who can you talk to at school if you're struggling?",o:["A teacher or school counsellor","Nobody","Only the principal's car","The tuck shop"],a:0,e:"Schools have people who can help."}],
pq:[
{q:"Feeling upset during a hard time is…",o:["normal","wrong","weak","rare"],a:0,h:"Everyone feels this sometimes.",e:"It is a normal reaction."},
{q:"Which daily habit helps you cope?",o:["Getting enough sleep","Skipping meals","Staying up all night","Avoiding everyone"],a:0,h:"Your body and mind need rest.",e:"Sleep supports your mood."},
{q:"A crisis is…",o:["a sudden, serious, difficult situation","a fun event","a test result","a sport"],a:0,h:"It needs urgent attention.",e:"A crisis is a serious event."},
{q:"Writing down your feelings can…",o:["help you understand and release them","make things worse","be dangerous","replace sleep"],a:0,h:"It's a way of getting thoughts out of your head.",e:"Journalling helps process feelings."},
{q:"If sad feelings last for weeks, you should…",o:["ask for professional help","wait for years","hide it","blame yourself"],a:0,h:"Long-lasting feelings need support.",e:"A professional can help."}],
cq:[
{q:"A friend tells you they feel unsafe but asks you to keep it secret. What should you do?",o:["Tell a trusted adult so they can get help","Keep the secret","Post about it","Ignore it"],a:0,e:"Safety is more important than secrecy."},
{q:"Why is talking about feelings helpful?",o:["Others can support you and you feel less alone","It makes feelings disappear instantly","It is a sign of weakness","It has no effect"],a:0,e:"Support makes hard times easier."},
{q:"Which feelings are common in grief?",o:["Denial, anger, sadness and acceptance","Only happiness","Only boredom","None at all"],a:0,e:"Grief brings many feelings."},
{q:"Why can exercise help when you feel low?",o:["It improves mood and reduces stress","It replaces sleep","It cures everything immediately","It makes you tired forever"],a:0,e:"Exercise releases chemicals that lift mood."},
{q:"Which statement is true?",o:["Asking for help is a sign of strength","Strong people never feel sad","Depression always goes away on its own","Only adults get depressed"],a:0,e:"Reaching out takes courage."}]},

{id:"g9-lo-study",grade:9,term:4,subject:"lo",strand:"World of work",title:"Study skills and careers",
notes:`<h2>Preparing for exams</h2>
<ul><li>Make a <b>study timetable</b> that covers every subject, starting weeks before exams.</li>
<li>Study in short sessions (30–45 minutes) with short breaks.</li>
<li>Use active methods: summaries in your own words, mind maps, flash cards and past papers.</li>
<li>Sleep well and eat properly before exams.</li></ul>
<h2>The SQ3R method</h2>
<div class="tbl"><table><tr><th>Step</th><th>What you do</th></tr>
<tr><td><b>S</b>urvey</td><td>Skim headings, pictures and summaries to get an overview</td></tr>
<tr><td><b>Q</b>uestion</td><td>Turn headings into questions</td></tr>
<tr><td><b>R</b>ead</td><td>Read carefully to answer your questions</td></tr>
<tr><td><b>R</b>ecite</td><td>Say or write the answers from memory</td></tr>
<tr><td><b>R</b>eview</td><td>Go over everything again later</td></tr></table></div>
<h2>After Grade 9</h2>
<ul><li>Continue at school to Grade 12 and the <b>National Senior Certificate (NSC)</b>.</li>
<li>Or study at a <b>TVET college</b> (Technical and Vocational Education and Training) for practical, job-focused qualifications.</li></ul>
<h2>After Grade 12</h2>
<p>Universities offer degrees; universities of technology and TVET colleges offer diplomas and certificates; learnerships and apprenticeships combine work and study.</p>
<h2>Paying for study</h2>
<p><b>Bursaries</b> and <b>scholarships</b> pay for study and don't have to be paid back (some ask you to work for the sponsor afterwards). <b>Student loans</b> must be repaid. NSFAS provides financial aid to qualifying students.</p>`,
qs:[
{q:"What does the S in SQ3R stand for?",o:["Survey","Study","Summarise","Sleep"],a:0,e:"Survey: get an overview first."},
{q:"What is the last step of SQ3R?",o:["Review","Read","Recite","Question"],a:0,e:"Review everything again later."},
{q:"How long should one study session usually be?",o:["About 30–45 minutes","5 hours without a break","2 minutes","All night"],a:0,e:"Short sessions with breaks work best."},
{q:"Which is an active study method?",o:["Doing past exam papers","Reading the same page ten times","Watching TV","Highlighting every word"],a:0,e:"Practice questions test what you know."},
{q:"What does TVET stand for?",o:["Technical and Vocational Education and Training","Teaching Very Early Teens","Tertiary Visa Entry Test","Total Value Education Tax"],a:0,e:"TVET colleges offer practical qualifications."},
{q:"What is the school-leaving certificate in South Africa?",o:["National Senior Certificate (NSC)","Grade 9 report","Driver's licence","Matric dance ticket"],a:0,e:"The NSC is earned in Grade 12."},
{q:"A bursary is…",o:["money for studying that usually doesn't have to be repaid","a loan with interest","a school fee","a type of exam"],a:0,e:"Bursaries fund study."},
{q:"Which must be paid back?",o:["A student loan","A bursary","A scholarship","A prize"],a:0,e:"Loans must be repaid."},
{q:"What helps most the night before an exam?",o:["Getting a good night's sleep","Studying until 3 a.m.","Skipping supper","Playing games all night"],a:0,e:"Sleep helps memory."},
{q:"A learnership combines…",o:["work and study","sport and music","holidays and travel","nothing"],a:0,e:"Learners earn while they learn."}],
pq:[
{q:"In SQ3R, what does Q stand for?",o:["Question","Quiet","Quick","Quiz"],a:0,h:"Turn headings into these.",e:"Question."},
{q:"Why make a study timetable?",o:["To cover all subjects and avoid cramming","To skip subjects","To waste time","To impress friends"],a:0,h:"It spreads work out.",e:"Planning prevents cramming."},
{q:"Where can you study after Grade 9 besides school?",o:["A TVET college","Nowhere","Only at university","Only overseas"],a:0,h:"It offers practical training.",e:"TVET colleges accept learners after Grade 9."},
{q:"Which organisation gives financial aid to qualifying students?",o:["NSFAS","SADC","SAHRC","SKA"],a:0,h:"Its name includes “Financial Aid”.",e:"NSFAS: National Student Financial Aid Scheme."},
{q:"A mind map is useful for…",o:["showing how ideas link","measuring angles","counting money","exercising"],a:0,h:"Branches spread from a central idea.",e:"Mind maps show connections."}],
cq:[
{q:"You have three exams in one week. What is the best plan?",o:["Make a timetable now and spread revision over the days","Study only the last subject","Cram everything the night before","Don't study"],a:0,e:"Spreading revision improves memory."},
{q:"What's the difference between a bursary and a loan?",o:["A bursary usually isn't repaid; a loan must be","They are the same","A loan is free","A bursary must be repaid with interest"],a:0,e:"Loans must be repaid."},
{q:"Why use active study methods instead of only re-reading?",o:["They make you use the information, so you remember it better","They are slower","They are less work","They avoid thinking"],a:0,e:"Active recall strengthens memory."},
{q:"A learner loves practical, hands-on work like electrical wiring. Which option suits them?",o:["A TVET college course","Only a law degree","No further study","Only a music school"],a:0,e:"TVET colleges focus on practical skills."},
{q:"What should you do in the Recite step of SQ3R?",o:["Say or write the answers from memory","Skim headings","Read every word","Sleep"],a:0,e:"Reciting tests your recall."}]}
);
TOPICS.slice(-12).forEach(t=>TOPIC[t.id]=t);
