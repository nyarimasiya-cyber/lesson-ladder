/* Grade 7 Mathematics, Terms 3–4. */
const G7G = "Space & shape (geometry)", G7M = "Measurement", G7D = "Data handling";
TOPICS.push(
{id:"g7-math-construction",grade:7,term:3,subject:"math",strand:G7G,title:"Construction of geometric figures",
notes:`<h2>Lines</h2>
<ul><li>A <b>line segment</b> has two endpoints. A <b>ray</b> has one endpoint and goes on forever in one direction. A <b>line</b> goes on forever both ways.</li>
<li><b>Parallel</b> lines (∥) never meet and stay the same distance apart.</li>
<li><b>Perpendicular</b> lines (⊥) meet at a right angle (90°).</li></ul>
<h2>Types of angles</h2>
<div class="tbl"><table><tr><th>Angle</th><th>Size</th></tr>
<tr><td>Acute</td><td>more than 0° and less than 90°</td></tr><tr><td>Right</td><td>exactly 90°</td></tr>
<tr><td>Obtuse</td><td>more than 90° and less than 180°</td></tr><tr><td>Straight</td><td>exactly 180°</td></tr>
<tr><td>Reflex</td><td>more than 180° and less than 360°</td></tr><tr><td>Revolution</td><td>exactly 360°</td></tr></table></div>
<h2>Tools</h2>
<ul><li>A <b>protractor</b> measures and draws angles. Put its centre on the vertex and its zero line on one arm.</li>
<li>A <b>compass</b> draws circles and arcs, which we use for constructions.</li></ul>
<h2>Constructions with a compass and ruler</h2>
<ul><li><b>Bisect a line</b>: draw equal arcs from both ends above and below the line; join where they cross. This cuts the line in half at 90°.</li>
<li><b>Bisect an angle</b>: cut it into two equal angles. Bisecting 60° gives two angles of 30°.</li>
<li>Angles on a straight line add up to 180°.</li></ul>
<div class="key">Always keep your compass width the same when drawing matching arcs.</div>`,
qs:[
{q:"What type of angle is 35°?",o:["Acute","Right","Obtuse","Reflex"],a:0,e:"It is less than 90°."},
{q:"An angle of exactly 90° is…",o:["acute","a right angle","obtuse","straight"],a:1,e:"90° is a right angle."},
{q:"What type of angle is 120°?",o:["Acute","Obtuse","Reflex","Straight"],a:1,e:"It is between 90° and 180°."},
{q:"What type of angle is 200°?",o:["Obtuse","Straight","Reflex","Revolution"],a:2,e:"It is between 180° and 360°."},
{q:"How big is a straight angle?",o:["90°","180°","270°","360°"],a:1,e:"A straight angle is 180°."},
{q:"Lines that never meet are…",o:["perpendicular","parallel","intersecting","curved"],a:1,e:"Parallel lines never meet."},
{q:"Lines that meet at 90° are…",o:["parallel","perpendicular","reflex","acute"],a:1,e:"Perpendicular lines meet at right angles."},
{q:"Which tool measures angles?",o:["Ruler","Compass","Protractor","Set of scales"],a:2,e:"A protractor measures angles."},
{q:"What is a ray?",o:["A line with two endpoints","A line with one endpoint that goes on forever in one direction","A curved line","A circle"],a:1,e:"A ray starts at a point and goes on forever."},
{q:"How many degrees are in a full revolution?",o:["180°","270°","360°","90°"],a:2,e:"A full turn is 360°."}],
pq:[
{q:"What type of angle is 89°?",o:["Acute","Right","Obtuse","Straight"],a:0,h:"Is it less than, equal to, or more than 90°?",e:"89° is just under 90°, so it is acute."},
{q:"What type of angle is 180°?",o:["Reflex","Straight","Obtuse","Revolution"],a:1,h:"It looks like a straight line.",e:"180° is a straight angle."},
{q:"Which tool draws circles and arcs?",o:["Protractor","Compass","Ruler","Calculator"],a:1,h:"It has a sharp point and a pencil.",e:"A compass draws circles and arcs."},
{q:"What does the symbol ∥ mean?",o:["Perpendicular","Parallel","Equal","Right angle"],a:1,h:"The two lines in the symbol never meet.",e:"∥ means parallel."},
{q:"What type of angle is 270°?",o:["Obtuse","Reflex","Straight","Acute"],a:1,h:"It is bigger than a straight angle.",e:"270° is between 180° and 360°, so it is reflex."}],
cq:[
{q:"What does it mean to bisect an angle?",o:["Double it","Divide it into two equal angles","Measure it","Make it 90°"],a:1,e:"Bi- means two; bisecting cuts it into two equal parts."},
{q:"An angle of 60° is bisected. How big is each new angle?",o:["120°","30°","20°","60°"],a:1,e:"60° ÷ 2 = 30°."},
{q:"What is the angle between the hands of a clock at 3:00?",o:["30°","90°","180°","45°"],a:1,e:"The hands point to 12 and 3: a quarter turn, 90°."},
{q:"Two angles lie on a straight line. One is 110°. What is the other?",o:["70°","80°","250°","110°"],a:0,e:"Angles on a straight line add up to 180°: 180° − 110° = 70°."},
{q:"Which has exactly two endpoints?",o:["A line","A ray","A line segment","A circle"],a:2,e:"A line segment has a start and an end."}]},

{id:"g7-math-2d",grade:7,term:3,subject:"math",strand:G7G,title:"Geometry of 2D shapes",
notes:`<h2>Triangles by sides</h2>
<ul><li><b>Equilateral</b>: all three sides equal (and all angles 60°).</li>
<li><b>Isosceles</b>: two sides equal; the angles opposite them (base angles) are equal.</li>
<li><b>Scalene</b>: no sides equal.</li></ul>
<h2>Triangles by angles</h2>
<p><b>Acute-angled</b> (all angles less than 90°), <b>right-angled</b> (one 90° angle), <b>obtuse-angled</b> (one angle more than 90°). The angles of any triangle add up to <b>180°</b>.</p>
<h2>Quadrilaterals (4 sides)</h2>
<div class="tbl"><table><tr><th>Shape</th><th>Properties</th></tr>
<tr><td>Square</td><td>4 equal sides, 4 right angles</td></tr>
<tr><td>Rectangle</td><td>opposite sides equal, 4 right angles, equal diagonals</td></tr>
<tr><td>Parallelogram</td><td>opposite sides equal and parallel</td></tr>
<tr><td>Rhombus</td><td>4 equal sides, opposite sides parallel</td></tr>
<tr><td>Trapezium</td><td>exactly one pair of parallel sides</td></tr>
<tr><td>Kite</td><td>two pairs of adjacent (next to each other) sides equal</td></tr></table></div>
<p>A square is a special rectangle and a special rhombus.</p>
<h2>Other polygons</h2><p>Pentagon (5 sides), hexagon (6), octagon (8).</p>
<h2>Similar and congruent</h2>
<ul><li><b>Congruent</b> shapes have the same shape <b>and</b> the same size.</li>
<li><b>Similar</b> shapes have the same shape, but may be different sizes (like a photo and its enlargement).</li></ul>`,
qs:[
{q:"A triangle with all three sides equal is…",o:["isosceles","scalene","equilateral","right-angled"],a:2,e:"Equi- means equal: all sides are the same."},
{q:"A triangle with exactly two equal sides is…",o:["equilateral","isosceles","scalene","obtuse"],a:1,e:"Isosceles triangles have two equal sides."},
{q:"A triangle with no equal sides is…",o:["scalene","isosceles","equilateral","acute"],a:0,e:"Scalene triangles have three different side lengths."},
{q:"A triangle with one 90° angle is…",o:["acute-angled","right-angled","obtuse-angled","equilateral"],a:1,e:"It has a right angle."},
{q:"A quadrilateral with exactly one pair of parallel sides is a…",o:["parallelogram","trapezium","rhombus","kite"],a:1,e:"A trapezium has one pair of parallel sides."},
{q:"A quadrilateral with 4 equal sides but no right angles is a…",o:["square","rectangle","rhombus","trapezium"],a:2,e:"A rhombus has 4 equal sides."},
{q:"Congruent shapes are…",o:["the same shape and the same size","the same shape but different sizes","different shapes","always triangles"],a:0,e:"Congruent means identical in shape and size."},
{q:"Similar shapes are…",o:["always the same size","the same shape but can be different sizes","different shapes","always squares"],a:1,e:"Similar shapes have equal angles and proportional sides."},
{q:"What is true about the diagonals of a rectangle?",o:["They are equal in length","They are always 90° apart","There is only one","They are parallel"],a:0,e:"A rectangle's diagonals are equal."},
{q:"Which shape has two pairs of adjacent sides equal?",o:["Kite","Trapezium","Rectangle","Scalene triangle"],a:0,e:"That is the property of a kite."}],
pq:[
{q:"Which shape has 4 equal sides and 4 right angles?",o:["Rhombus","Square","Kite","Trapezium"],a:1,h:"Think of a chessboard block.",e:"A square has both."},
{q:"A triangle with one angle greater than 90° is…",o:["acute-angled","right-angled","obtuse-angled","equilateral"],a:2,h:"An angle greater than 90° is called…",e:"It has an obtuse angle."},
{q:"How many sides does a quadrilateral have?",o:["3","4","5","6"],a:1,h:"Quad- means four.",e:"A quadrilateral has 4 sides."},
{q:"What is true about the opposite sides of a parallelogram?",o:["They are equal and parallel","They are perpendicular","Only one pair is parallel","They are all different"],a:0,h:"The name has “parallel” in it.",e:"Opposite sides are equal and parallel."},
{q:"How many sides does a hexagon have?",o:["5","6","7","8"],a:1,h:"A honeycomb cell has this shape.",e:"A hexagon has 6 sides."}],
cq:[
{q:"Two angles of a triangle are 50° and 60°. What is the third angle?",o:["70°","80°","90°","110°"],a:0,e:"180° − 50° − 60° = 70°."},
{q:"In an isosceles triangle, the base angles are…",o:["equal","always 90°","always different","always 60°"],a:0,e:"The angles opposite the equal sides are equal."},
{q:"Every square is also a…",o:["trapezium","rectangle","kite only","triangle"],a:1,e:"A square has all the properties of a rectangle (and of a rhombus)."},
{q:"A photo is enlarged so that every side doubles. The two photos are…",o:["congruent","similar","neither","the same size"],a:1,e:"Same shape, different size: similar."},
{q:"How big is each angle of an equilateral triangle?",o:["45°","60°","90°","180°"],a:1,e:"180° ÷ 3 = 60°."}]},

{id:"g7-math-transform",grade:7,term:3,subject:"math",strand:G7G,title:"Transformation geometry",
notes:`<h2>Three transformations that keep size</h2>
<ul><li><b>Translation</b>: a slide. Every point moves the same distance in the same direction.</li>
<li><b>Reflection</b>: a flip in a mirror line. Each point ends up the same distance on the other side of the line.</li>
<li><b>Rotation</b>: a turn about a fixed point. A quarter turn is 90°, a half turn is 180°.</li></ul>
<p>After these, the image is <b>congruent</b> to the original: same shape and size.</p>
<h2>Enlargements and reductions</h2>
<ul><li>These change the size but keep the shape, so the image is <b>similar</b>.</li>
<li>The <b>scale factor</b> tells you how much: scale factor 2 doubles every side (3 cm → 6 cm); scale factor ½ halves it (10 cm → 5 cm).</li>
<li>If the sides are multiplied by 3, the area is multiplied by 3 × 3 = 9.</li></ul>
<h2>Symmetry</h2>
<p>A <b>line of symmetry</b> divides a shape into two mirror halves. A square has 4, a rectangle has 2, an equilateral triangle has 3, and the letter A has 1.</p>
<h2>On a grid</h2>
<div class="ex"><b>Example</b>Translate the point (1; 4) two units left and three units down → <b>(−1; 1)</b></div>`,
qs:[
{q:"A slide is called a…",o:["reflection","rotation","translation","enlargement"],a:2,e:"A translation slides a shape."},
{q:"A flip in a mirror line is called a…",o:["reflection","translation","rotation","reduction"],a:0,e:"A reflection flips a shape."},
{q:"A turn about a point is called a…",o:["translation","rotation","reflection","enlargement"],a:1,e:"A rotation turns a shape."},
{q:"After a translation, the image is…",o:["bigger","smaller","congruent to the original","a different shape"],a:2,e:"Translations keep size and shape."},
{q:"A side of 3 cm is enlarged by a scale factor of 2. How long is it now?",o:["5 cm","6 cm","1,5 cm","9 cm"],a:1,e:"3 × 2 = 6 cm."},
{q:"A side of 10 cm is reduced by a scale factor of ½. How long is it now?",o:["20 cm","5 cm","9,5 cm","2 cm"],a:1,e:"10 × ½ = 5 cm."},
{q:"How many lines of symmetry does a square have?",o:["1","2","4","8"],a:2,e:"2 through the middles of the sides and 2 along the diagonals."},
{q:"The point (2; 3) is translated 4 units to the right. Where is the image?",o:["(6; 3)","(2; 7)","(−2; 3)","(6; 7)"],a:0,e:"Only the x-value changes: 2 + 4 = 6."},
{q:"A point is 3 cm to the right of a mirror line. Where is its reflection?",o:["3 cm to the left of the line","On the line","6 cm to the right","3 cm above the line"],a:0,e:"A reflection is the same distance on the other side."},
{q:"A rotation of 180° is a…",o:["quarter turn","half turn","full turn","three-quarter turn"],a:1,e:"180° is half of 360°."}],
pq:[
{q:"Your image in a mirror is an example of a…",o:["translation","reflection","rotation","enlargement"],a:1,h:"A mirror flips things.",e:"A mirror image is a reflection."},
{q:"The hands of a clock move by…",o:["translation","reflection","rotation","reduction"],a:2,h:"They turn around the centre of the clock.",e:"They rotate."},
{q:"How many lines of symmetry does the capital letter A have?",o:["0","1","2","4"],a:1,h:"Can you fold it in half from top to bottom?",e:"A has one vertical line of symmetry."},
{q:"A 2 cm side is enlarged by a scale factor of 3. How long is it now?",o:["5 cm","6 cm","8 cm","1 cm"],a:1,h:"Multiply by the scale factor.",e:"2 × 3 = 6 cm."},
{q:"How many lines of symmetry does a rectangle (that isn't a square) have?",o:["1","2","4","0"],a:1,h:"Fold it lengthwise and widthwise. The diagonals don't work.",e:"A rectangle has 2."}],
cq:[
{q:"A square with sides of 2 cm is enlarged by a scale factor of 3. What is its new area?",o:["12 cm²","18 cm²","36 cm²","6 cm²"],a:2,e:"New side 6 cm, area 6 × 6 = 36 cm²."},
{q:"Which transformation changes the size of a shape?",o:["Translation","Reflection","Rotation","Enlargement"],a:3,e:"Only enlargement or reduction changes size."},
{q:"How many degrees is a quarter turn?",o:["45°","90°","180°","270°"],a:1,e:"360° ÷ 4 = 90°."},
{q:"How many lines of symmetry does an equilateral triangle have?",o:["1","2","3","6"],a:2,e:"One from each corner to the middle of the opposite side."},
{q:"Translate (1; 4) two units left and three units down. Where is the image?",o:["(3; 1)","(−1; 1)","(−1; 7)","(3; 7)"],a:1,e:"1 − 2 = −1 and 4 − 3 = 1."}]},

{id:"g7-math-area",grade:7,term:4,subject:"math",strand:G7M,title:"Area and perimeter of 2D shapes",
notes:`<h2>Perimeter</h2>
<p>Perimeter is the <b>distance around</b> a shape. Add all the sides. It is measured in mm, cm, m or km.</p>
<ul><li>Square: P = 4 × s</li><li>Rectangle: P = 2 × (l + b)</li></ul>
<h2>Area</h2>
<p>Area is the <b>space inside</b> a shape, measured in square units: mm², cm², m².</p>
<div class="tbl"><table><tr><th>Shape</th><th>Area formula</th></tr>
<tr><td>Square</td><td>A = s × s = s²</td></tr><tr><td>Rectangle</td><td>A = l × b</td></tr>
<tr><td>Triangle</td><td>A = ½ × base × height</td></tr></table></div>
<p>The height of a triangle is measured at right angles (90°) to the base.</p>
<h2>Converting units of area</h2>
<ul><li>1 cm = 10 mm, so 1 cm² = 10 × 10 = <b>100 mm²</b>.</li>
<li>1 m = 100 cm, so 1 m² = 100 × 100 = <b>10 000 cm²</b>.</li></ul>
<h2>Composite shapes</h2>
<p>Split an L-shape into rectangles, or take the area of the big rectangle and subtract the missing piece.</p>
<div class="ex"><b>Example</b>A 10 m by 6 m rectangle with a 4 m by 3 m corner cut out: 60 − 12 = <b>48 m²</b></div>`,
qs:[
{q:"What is the perimeter of a rectangle 8 cm long and 5 cm wide?",o:["13 cm","26 cm","40 cm","40 cm²"],a:1,e:"2 × (8 + 5) = 26 cm."},
{q:"What is the area of a rectangle 8 cm long and 5 cm wide?",o:["13 cm²","26 cm²","40 cm²","80 cm²"],a:2,e:"8 × 5 = 40 cm²."},
{q:"What is the perimeter of a square with sides of 6 cm?",o:["12 cm","24 cm","36 cm","36 cm²"],a:1,e:"4 × 6 = 24 cm."},
{q:"What is the area of a square with sides of 6 cm?",o:["24 cm²","12 cm²","36 cm²","6 cm²"],a:2,e:"6 × 6 = 36 cm²."},
{q:"A triangle has a base of 10 cm and a height of 4 cm. What is its area?",o:["40 cm²","20 cm²","14 cm²","28 cm²"],a:1,e:"½ × 10 × 4 = 20 cm²."},
{q:"How many cm² are in 1 m²?",o:["100","1 000","10 000","1 000 000"],a:2,e:"100 cm × 100 cm = 10 000 cm²."},
{q:"How many mm² are in 1 cm²?",o:["10","100","1 000","1"],a:1,e:"10 mm × 10 mm = 100 mm²."},
{q:"A square has a perimeter of 36 cm. How long is each side?",o:["6 cm","9 cm","12 cm","18 cm"],a:1,e:"36 ÷ 4 = 9 cm."},
{q:"A rectangle has an area of 48 cm² and a length of 8 cm. What is its breadth?",o:["6 cm","40 cm","5 cm","56 cm"],a:0,e:"48 ÷ 8 = 6 cm."},
{q:"How much fencing is needed for a garden 12 m by 7 m?",o:["19 m","38 m","84 m","84 m²"],a:1,e:"2 × (12 + 7) = 38 m."}],
pq:[
{q:"Perimeter is…",o:["the space inside a shape","the distance around a shape","the height of a shape","the number of corners"],a:1,h:"Think of walking around the edge of a field.",e:"Perimeter is the distance around."},
{q:"Which unit is used for area?",o:["cm","cm²","cm³","litres"],a:1,h:"Area is measured in square units.",e:"Area uses square units like cm²."},
{q:"What is the area of a rectangle 4 cm by 3 cm?",o:["7 cm²","12 cm²","14 cm²","24 cm²"],a:1,h:"Area of a rectangle = length × breadth.",e:"4 × 3 = 12 cm²."},
{q:"What is the perimeter of a square with sides of 5 cm?",o:["10 cm","20 cm","25 cm","15 cm"],a:1,h:"A square has 4 equal sides.",e:"4 × 5 = 20 cm."},
{q:"What is the formula for the area of a triangle?",o:["base × height","½ × base × height","2 × base × height","base + height"],a:1,h:"A triangle is half of a rectangle.",e:"A = ½ × b × h."}],
cq:[
{q:"A floor is 5 m by 4 m. Tiles cost R120 per m². What do the tiles cost?",o:["R2 400","R1 080","R240","R2 160"],a:0,e:"Area 20 m² × R120 = R2 400."},
{q:"A triangle has a base of 7 cm and a height of 6 cm. What is its area?",o:["42 cm²","21 cm²","13 cm²","26 cm²"],a:1,e:"½ × 7 × 6 = 21 cm²."},
{q:"A 10 m by 6 m rectangle has a 4 m by 3 m corner cut out. What is the area of the L-shape?",o:["60 m²","48 m²","72 m²","32 m²"],a:1,e:"60 − 12 = 48 m²."},
{q:"Convert 3 m² to cm².",o:["300 cm²","3 000 cm²","30 000 cm²","300 000 cm²"],a:2,e:"3 × 10 000 = 30 000 cm²."},
{q:"A square has an area of 64 cm². What is its perimeter?",o:["16 cm","32 cm","64 cm","8 cm"],a:1,e:"Side = √64 = 8 cm, so P = 4 × 8 = 32 cm."}]},

{id:"g7-math-volume",grade:7,term:4,subject:"math",strand:G7M,title:"Surface area and volume of 3D objects",
notes:`<h2>Volume</h2>
<p>Volume is the <b>space inside</b> a 3D object, measured in cubic units: cm³, m³.</p>
<ul><li>Rectangular prism (box): <b>V = l × b × h</b></li><li>Cube: <b>V = s × s × s = s³</b></li></ul>
<h2>Volume and capacity</h2>
<ul><li>1 cm³ = 1 ml</li><li>1 000 cm³ = 1 litre</li></ul>
<div class="ex"><b>Example</b>A tank 50 cm × 40 cm × 30 cm holds 60 000 cm³ = <b>60 litres</b></div>
<h2>Surface area</h2>
<p>Surface area is the <b>total area of all the faces</b>, measured in cm² or m².</p>
<ul><li>Cube: 6 equal square faces, so <b>SA = 6 × s²</b></li>
<li>Rectangular prism: 3 pairs of matching faces, so <b>SA = 2(l × b + l × h + b × h)</b></li></ul>
<h2>Nets</h2>
<p>A <b>net</b> is a flat shape that folds up to make a 3D object. A cube's net has 6 squares. Drawing the net helps you find the surface area.</p>
<h2>Faces, edges and vertices</h2>
<p>A cube and a rectangular prism each have <b>6 faces, 12 edges and 8 vertices</b> (corners).</p>`,
qs:[
{q:"What is the volume of a box 5 cm × 4 cm × 3 cm?",o:["12 cm³","47 cm³","60 cm³","60 cm²"],a:2,e:"5 × 4 × 3 = 60 cm³."},
{q:"What is the volume of a cube with sides of 3 cm?",o:["9 cm³","27 cm³","18 cm³","12 cm³"],a:1,e:"3 × 3 × 3 = 27 cm³."},
{q:"How many faces does a cube have?",o:["4","6","8","12"],a:1,e:"A cube has 6 square faces."},
{q:"What is the surface area of a cube with sides of 2 cm?",o:["8 cm²","12 cm²","24 cm²","16 cm²"],a:2,e:"6 × 2 × 2 = 24 cm²."},
{q:"1 cm³ holds how much liquid?",o:["1 ml","10 ml","1 litre","100 ml"],a:0,e:"1 cm³ = 1 ml."},
{q:"How many cm³ are in 1 litre?",o:["100","1 000","10 000","10"],a:1,e:"1 litre = 1 000 cm³."},
{q:"How many faces does a rectangular prism have?",o:["4","5","6","8"],a:2,e:"It has 6 rectangular faces."},
{q:"What is the surface area of a box 4 cm × 3 cm × 2 cm?",o:["24 cm²","26 cm²","52 cm²","48 cm²"],a:2,e:"2(12 + 8 + 6) = 52 cm²."},
{q:"What is a net?",o:["A flat shape that folds into a 3D object","A type of graph","A 3D object","A unit of volume"],a:0,e:"A net folds up to form a 3D shape."},
{q:"A tank is 50 cm × 40 cm × 30 cm. How many litres does it hold?",o:["6 litres","60 litres","600 litres","120 litres"],a:1,e:"60 000 cm³ = 60 litres."}],
pq:[
{q:"Which formula gives the volume of a rectangular prism?",o:["l + b + h","l × b × h","2(l + b)","l × b"],a:1,h:"Volume uses all three measurements multiplied together.",e:"V = l × b × h."},
{q:"What is the volume of a cube with sides of 2 cm?",o:["4 cm³","6 cm³","8 cm³","12 cm³"],a:2,h:"Multiply 2 × 2 × 2.",e:"2³ = 8 cm³."},
{q:"Which unit is used for volume?",o:["cm","cm²","cm³","kg"],a:2,h:"Volume uses cubic units.",e:"Volume is measured in cm³."},
{q:"How many edges does a cube have?",o:["6","8","12","4"],a:2,h:"Count 4 on top, 4 at the bottom and 4 going up the sides.",e:"A cube has 12 edges."},
{q:"What is the surface area of a cube with sides of 1 cm?",o:["1 cm²","4 cm²","6 cm²","8 cm²"],a:2,h:"6 faces, each 1 cm × 1 cm.",e:"6 × 1 = 6 cm²."}],
cq:[
{q:"A cube has a volume of 64 cm³. How long is each side?",o:["8 cm","4 cm","16 cm","21 cm"],a:1,e:"4 × 4 × 4 = 64."},
{q:"A fish tank is 60 cm × 30 cm × 40 cm. How many litres does it hold?",o:["7,2 litres","72 litres","720 litres","130 litres"],a:1,e:"60 × 30 × 40 = 72 000 cm³ = 72 litres."},
{q:"A box is 10 cm × 5 cm × 4 cm. What area of paper covers all its faces exactly?",o:["200 cm²","110 cm²","220 cm²","19 cm²"],a:2,e:"2(50 + 40 + 20) = 220 cm²."},
{q:"How many 1 cm cubes fit into a box 4 cm × 3 cm × 2 cm?",o:["9","24","12","26"],a:1,e:"4 × 3 × 2 = 24."},
{q:"If every side of a cube is doubled, the volume is multiplied by…",o:["2","4","6","8"],a:3,e:"2 × 2 × 2 = 8."}]},

{id:"g7-math-data",grade:7,term:4,subject:"math",strand:G7D,title:"Data handling",
notes:`<h2>The data cycle</h2>
<p>Ask a question → collect data → organise it → summarise it → represent it → interpret it and report.</p>
<h2>Collecting and organising</h2>
<ul><li>Collect data with surveys, questionnaires, observations or experiments. Good questions are clear and don't push people towards an answer.</li>
<li><b>Tally marks</b> are grouped in fives: four lines with a fifth across them. A <b>frequency table</b> shows how often each value appears.</li>
<li><b>Categorical</b> data is in groups (favourite colour, sport). <b>Numerical</b> data is numbers (height, marks).</li></ul>
<h2>Summarising data</h2>
<div class="tbl"><table><tr><th>Measure</th><th>How to find it</th><th>Example: 2; 4; 7; 8; 10</th></tr>
<tr><td><b>Mean</b> (average)</td><td>Add all the values and divide by how many there are</td><td>31 ÷ 5 = 6,2</td></tr>
<tr><td><b>Median</b></td><td>The middle value when ordered (for an even count, halfway between the two middle values)</td><td>7</td></tr>
<tr><td><b>Mode</b></td><td>The value that appears most often</td><td>none</td></tr>
<tr><td><b>Range</b></td><td>Highest − lowest</td><td>10 − 2 = 8</td></tr></table></div>
<p>The mean is the measure most affected by one very large or very small value.</p>
<h2>Representing data</h2>
<ul><li><b>Bar graphs</b> compare categories.</li>
<li><b>Pie charts</b> show parts of a whole. The whole circle is 360°, so a 90° sector is ¼ = 25%.</li>
<li><b>Histograms</b> show numerical data in intervals.</li></ul>`,
qs:[
{q:"What is the mode of 3; 5; 5; 7; 9?",o:["3","5","7","9"],a:1,e:"5 appears most often."},
{q:"What is the median of 2; 4; 7; 8; 10?",o:["4","6,2","7","8"],a:2,e:"7 is the middle value."},
{q:"What is the mean of 4; 6; 8?",o:["6","18","8","5"],a:0,e:"(4 + 6 + 8) ÷ 3 = 6."},
{q:"What is the range of 3; 9; 12; 5?",o:["9","12","3","29"],a:0,e:"12 − 3 = 9."},
{q:"What is the median of 2; 4; 6; 8?",o:["4","5","6","20"],a:1,e:"Halfway between 4 and 6 is 5."},
{q:"A group of tally marks with four lines and a fifth line across them stands for…",o:["4","5","6","10"],a:1,e:"Tally marks are grouped in fives."},
{q:"Which graph best shows parts of a whole?",o:["Pie chart","Line graph","Histogram","Tally table"],a:0,e:"A pie chart shows how a whole is divided."},
{q:"Which is categorical data?",o:["Learners' heights","Favourite colours","Test marks","Ages"],a:1,e:"Colours are categories, not numbers."},
{q:"What makes a good survey question?",o:["It is clear and doesn't push people towards an answer","It is very long","It has only one possible answer","It uses difficult words"],a:0,e:"Good questions are clear and unbiased."},
{q:"What is the mean of 6; 7; 8; 9; 10?",o:["7","8","9","40"],a:1,e:"40 ÷ 5 = 8."}],
pq:[
{q:"The mode is…",o:["the middle value","the value that appears most often","the average","the highest minus the lowest"],a:1,h:"Mode sounds like “most”.",e:"The mode is the most frequent value."},
{q:"The median is…",o:["the middle value when the data is ordered","the most common value","the total","the biggest value"],a:0,h:"Like the median strip in the middle of a road.",e:"The median is the middle value."},
{q:"How do you find the range?",o:["Highest − lowest","Add all values","Find the middle","Count the values"],a:0,h:"It tells you how spread out the data is.",e:"Range = highest − lowest."},
{q:"How do you find the mean?",o:["Add the values and divide by how many there are","Pick the middle value","Pick the most common value","Subtract the lowest from the highest"],a:0,h:"It is what most people call the average.",e:"Mean = total ÷ number of values."},
{q:"A frequency table shows…",o:["how often each value appears","only the biggest value","a pie chart","the mean only"],a:0,h:"Frequency means how often.",e:"It shows how often each value occurs."}],
cq:[
{q:"What is the mean of 12; 15; 15; 18; 20?",o:["15","16","17","18"],a:1,e:"80 ÷ 5 = 16."},
{q:"In a pie chart, a sector of 90° represents what percentage?",o:["9%","25%","50%","90%"],a:1,e:"90° is ¼ of 360°, which is 25%."},
{q:"The mean of 5 numbers is 10. What is their total?",o:["2","15","50","10"],a:2,e:"Total = mean × number of values = 10 × 5."},
{q:"What is the median of 3; 7; 7; 2; 9; 7; 4?",o:["4","5,6","7","9"],a:2,e:"Ordered: 2; 3; 4; 7; 7; 7; 9. The middle value is 7."},
{q:"Which measure is most affected by one very large value?",o:["Mode","Median","Mean","None of them"],a:2,e:"The mean adds up every value, so one extreme value pulls it up."}]}
);
TOPICS.slice(-6).forEach(t=>TOPIC[t.id]=t);
