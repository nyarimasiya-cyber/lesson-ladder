/* Grade 8 Mathematics, Terms 1–3 (Algebraic expressions & equations is in content.js). */
const G8S = "Numbers, operations & relationships", G8P = "Patterns, functions & algebra", G8G = "Space & shape (geometry)";
TOPICS.push(
{id:"g8-math-whole",grade:8,term:1,subject:"math",strand:G8S,title:"Whole numbers",
notes:`<h2>HCF and LCM with prime factors</h2>
<p>Write each number as a product of primes. 36 = 2² × 3² and 48 = 2⁴ × 3. The <b>HCF</b> uses the lowest powers of common primes: 2² × 3 = <b>12</b>. The <b>LCM</b> uses the highest powers of all primes: for 12 and 18 it is 2² × 3² = <b>36</b>.</p>
<h2>Ratio</h2>
<ul><li>Simplify a ratio like a fraction: 15 : 25 = 3 : 5.</li>
<li>To share in a ratio, add the parts. R120 in the ratio 1 : 3 → 4 parts, each R30 → <b>R30 and R90</b>.</li></ul>
<h2>Rate</h2><p>A rate compares different units: 240 km in 3 hours = <b>80 km/h</b>; 5 kg for R60 = <b>R12/kg</b>. Use unit rates to find the better buy.</p>
<h2>Financial maths</h2>
<div class="tbl"><table><tr><th>Idea</th><th>How</th></tr>
<tr><td>Profit / loss</td><td>Selling price − cost price (negative = loss)</td></tr>
<tr><td>Discount</td><td>10% off R250 → R250 − R25 = R225</td></tr>
<tr><td>Increase</td><td>R400 + 15% → R400 × 1,15 = R460</td></tr>
<tr><td>Simple interest</td><td><b>SI = P × r × t</b>. R2 000 at 5% for 3 years: 2 000 × 0,05 × 3 = R300</td></tr>
<tr><td>Exchange rate</td><td>If $1 = R18, then $50 = R900</td></tr></table></div>`,
qs:[
{q:"What is the HCF of 36 and 48?",o:["6","12","18","144"],a:1,e:"36 = 2² × 3², 48 = 2⁴ × 3, so HCF = 2² × 3 = 12."},
{q:"What is the LCM of 12 and 18?",o:["6","36","72","216"],a:1,e:"12 = 2² × 3, 18 = 2 × 3², so LCM = 2² × 3² = 36."},
{q:"Simplify the ratio 15 : 25.",o:["3 : 5","5 : 3","1 : 2","15 : 5"],a:0,e:"Divide both by 5."},
{q:"R120 is shared in the ratio 1 : 3. What is the larger share?",o:["R30","R40","R90","R80"],a:2,e:"4 parts of R30: the larger share is 3 × R30 = R90."},
{q:"A car travels 240 km in 3 hours. What is its average speed?",o:["60 km/h","80 km/h","720 km/h","243 km/h"],a:1,e:"240 ÷ 3 = 80 km/h."},
{q:"Goods bought for R80 are sold for R100. What is the profit?",o:["R20","R180","R80","25%"],a:0,e:"100 − 80 = R20."},
{q:"A R250 item has a 10% discount. What do you pay?",o:["R240","R225","R25","R275"],a:1,e:"R250 − R25 = R225."},
{q:"What is the simple interest on R2 000 at 5% per year for 3 years?",o:["R100","R300","R600","R2 300"],a:1,e:"2 000 × 0,05 × 3 = R300."},
{q:"If $1 = R18, how many rand is $50?",o:["R68","R900","R2,78","R180"],a:1,e:"50 × 18 = R900."},
{q:"Write 60 as a product of prime factors.",o:["2² × 3 × 5","6 × 10","2 × 30","4 × 15"],a:0,e:"60 = 2 × 2 × 3 × 5."}],
pq:[
{q:"Simplify the ratio 4 : 8.",o:["1 : 2","2 : 1","4 : 2","1 : 4"],a:0,h:"Divide both sides by the same number.",e:"Divide by 4: 1 : 2."},
{q:"What is the HCF of 8 and 12?",o:["2","4","24","96"],a:1,h:"The biggest number that divides both.",e:"4."},
{q:"5 kg costs R60. What is the price per kg?",o:["R12","R300","R55","R6"],a:0,h:"Divide the cost by the mass.",e:"60 ÷ 5 = R12/kg."},
{q:"Bought for R50, sold for R40. What is the result?",o:["R10 profit","R10 loss","R90 profit","No change"],a:1,h:"Is the selling price more or less than the cost?",e:"40 − 50 = −10, a loss of R10."},
{q:"What is 25% of R80?",o:["R25","R20","R40","R8"],a:1,h:"25% is a quarter.",e:"80 ÷ 4 = R20."}],
cq:[
{q:"R560 is shared in the ratio 2 : 5. What is the smaller share?",o:["R160","R400","R112","R280"],a:0,e:"7 parts of R80: 2 × R80 = R160."},
{q:"R5 000 is invested at 8% simple interest for 2 years. What is the total amount at the end?",o:["R800","R5 400","R5 800","R5 080"],a:2,e:"SI = 5 000 × 0,08 × 2 = R800; total = R5 800."},
{q:"Which is the better buy: 2 kg for R50 or 5 kg for R115?",o:["2 kg for R50","5 kg for R115","They are the same","You can't tell"],a:1,e:"R25/kg versus R23/kg."},
{q:"A tap fills 600 litres in 20 minutes. What is the rate?",o:["30 ℓ/min","12 000 ℓ/min","3 ℓ/min","620 ℓ/min"],a:0,e:"600 ÷ 20 = 30 ℓ/min."},
{q:"A price of R400 increases by 15%. What is the new price?",o:["R415","R460","R340","R600"],a:1,e:"400 × 1,15 = R460."}]},

{id:"g8-math-integers",grade:8,term:1,subject:"math",strand:G8S,title:"Integers",
notes:`<h2>Adding and subtracting</h2>
<p>Use the number line. Subtracting a negative is the same as adding: 5 − (−8) = 5 + 8 = 13.</p>
<h2>Multiplying and dividing</h2>
<div class="tbl"><table><tr><th>Signs</th><th>Answer</th><th>Example</th></tr>
<tr><td>+ × + or − × −</td><td>positive</td><td>−5 × −3 = 15</td></tr>
<tr><td>+ × − or − × +</td><td>negative</td><td>−6 × 4 = −24</td></tr></table></div>
<p>Division follows the same sign rules: −24 ÷ −6 = 4 and 18 ÷ −3 = −6.</p>
<div class="key">Count the negatives: an even number of negatives gives a positive answer; an odd number gives a negative answer. −2 × −3 × −1 = −6.</div>
<h2>Squares, cubes and roots</h2>
<ul><li>(−4)² = 16 (positive). (−2)³ = −8 (negative).</li>
<li>∛−27 = −3, because (−3)³ = −27.</li>
<li>Any number × 0 = 0.</li></ul>
<h2>Order of operations</h2><p>Brackets, then powers and roots, then × and ÷, then + and −: −12 ÷ 3 + (−2) × 5 = −4 − 10 = −14.</p>`,
qs:[
{q:"Calculate: −6 × 4",o:["24","−24","−10","−2"],a:1,e:"Different signs give a negative."},
{q:"Calculate: −5 × −3",o:["−15","15","−8","8"],a:1,e:"Two negatives give a positive."},
{q:"Calculate: −24 ÷ −6",o:["−4","4","−18","144"],a:1,e:"Same signs give a positive."},
{q:"Calculate: 18 ÷ −3",o:["6","−6","15","−21"],a:1,e:"Different signs give a negative."},
{q:"Calculate: −7 + 12",o:["−19","5","19","−5"],a:1,e:"Start at −7 and move 12 right."},
{q:"Calculate: −3 − 9",o:["6","−6","−12","12"],a:2,e:"−3 + (−9) = −12."},
{q:"Calculate: (−4)²",o:["−16","16","−8","8"],a:1,e:"(−4) × (−4) = 16."},
{q:"Calculate: (−2)³",o:["8","−8","−6","6"],a:1,e:"(−2) × (−2) × (−2) = −8."},
{q:"Calculate: 5 − (−8)",o:["−3","3","13","−13"],a:2,e:"5 + 8 = 13."},
{q:"Calculate: −2 × −3 × −1",o:["6","−6","5","−5"],a:1,e:"Three negatives give a negative."}],
pq:[
{q:"Calculate: −2 × 5",o:["10","−10","3","−3"],a:1,h:"One negative sign: is the answer positive or negative?",e:"−10."},
{q:"Calculate: −8 ÷ 2",o:["4","−4","−16","−6"],a:1,h:"Different signs.",e:"−4."},
{q:"Calculate: −4 + (−6)",o:["2","−2","10","−10"],a:3,h:"Adding a negative moves you further left.",e:"−10."},
{q:"Calculate: (−3)²",o:["−9","9","−6","6"],a:1,h:"Negative × negative.",e:"9."},
{q:"Calculate: −10 − (−4)",o:["−14","−6","6","14"],a:1,h:"Subtracting a negative means adding.",e:"−10 + 4 = −6."}],
cq:[
{q:"Calculate: (−3)² − 2 × (−4)",o:["1","17","−17","−1"],a:1,e:"9 − (−8) = 17."},
{q:"What is ∛−27?",o:["3","−3","9","−9"],a:1,e:"(−3)³ = −27."},
{q:"The temperature is −8 °C and drops by 5 degrees. What is it now?",o:["−3 °C","3 °C","−13 °C","13 °C"],a:2,e:"−8 − 5 = −13."},
{q:"Calculate: −12 ÷ 3 + (−2) × 5",o:["−14","−6","14","6"],a:0,e:"−4 + (−10) = −14."},
{q:"Which statement is true?",o:["−5 × 0 = 0","−5 × 0 = −5","−5 × 0 = 5","−5 ÷ 0 = 0"],a:0,e:"Any number times zero is zero."}]},

{id:"g8-math-fractions",grade:8,term:1,subject:"math",strand:G8S,title:"Common fractions",
notes:`<h2>Adding and subtracting</h2><p>Use the lowest common denominator: 2/3 + 1/4 = 8/12 + 3/12 = <b>11/12</b>.</p>
<h2>Multiplying</h2><p>Multiply tops and bottoms, simplifying first if you can: 3/4 × 2/9 = 6/36 = <b>1/6</b>. Change mixed numbers to improper fractions first: 1½ × 2⅔ = 3/2 × 8/3 = <b>4</b>.</p>
<h2>Dividing</h2><div class="key">To divide, multiply by the reciprocal (flip the second fraction): 2/3 ÷ 4/9 = 2/3 × 9/4 = 18/12 = <b>1½</b>.</div>
<h2>Squares and roots</h2><p>(2/3)² = 4/9 · √(9/16) = 3/4 · (1/2)³ = 1/8</p>
<h2>Percentages</h2>
<ul><li>3/5 = 60/100 = 60%.</li>
<li>Increase R200 by 10%: 200 × 1,1 = R220. Decrease 80 by 25%: 80 × 0,75 = 60.</li>
<li>Percentage change = change ÷ original × 100. R80 → R100 is a 20/80 = <b>25%</b> increase.</li></ul>`,
qs:[
{q:"Calculate: 2/3 + 1/4",o:["3/7","11/12","3/12","2/12"],a:1,e:"8/12 + 3/12 = 11/12."},
{q:"Calculate: 5/6 − 1/2",o:["4/4","1/3","2/3","4/6"],a:1,e:"5/6 − 3/6 = 2/6 = 1/3."},
{q:"Calculate: 3/4 × 2/9",o:["5/13","1/6","6/13","27/8"],a:1,e:"6/36 = 1/6."},
{q:"Calculate: 2/3 ÷ 4/9",o:["8/27","1½","2/3","6/12"],a:1,e:"2/3 × 9/4 = 18/12 = 1½."},
{q:"Calculate: (2/3)²",o:["4/6","4/9","2/9","4/3"],a:1,e:"2²/3² = 4/9."},
{q:"Calculate: √(9/16)",o:["3/4","9/4","3/16","81/256"],a:0,e:"√9/√16 = 3/4."},
{q:"Calculate: 1½ × 2⅔",o:["2⅓","3","4","2"],a:2,e:"3/2 × 8/3 = 24/6 = 4."},
{q:"Increase R200 by 10%.",o:["R210","R220","R20","R180"],a:1,e:"200 × 1,1 = R220."},
{q:"Decrease 80 by 25%.",o:["20","55","60","100"],a:2,e:"80 × 0,75 = 60."},
{q:"Write 3/5 as a percentage.",o:["35%","60%","53%","30%"],a:1,e:"3/5 = 60/100."}],
pq:[
{q:"Calculate: 1/2 + 1/3",o:["2/5","5/6","1/6","2/6"],a:1,h:"Use sixths.",e:"3/6 + 2/6 = 5/6."},
{q:"Calculate: 3/5 × 5/6",o:["1/2","15/11","8/11","18/25"],a:0,h:"The 5s cancel.",e:"3/6 = 1/2."},
{q:"Calculate: 1 ÷ 1/4",o:["1/4","4","2","1/2"],a:1,h:"How many quarters fit into 1?",e:"4."},
{q:"What is 2/5 of 30?",o:["6","12","15","75"],a:1,h:"Find 1/5 first.",e:"30 ÷ 5 × 2 = 12."},
{q:"Write 40% as a common fraction.",o:["4/10","2/5","40/10","1/4"],a:1,h:"40/100, then simplify fully.",e:"2/5."}],
cq:[
{q:"Calculate: 2½ ÷ 1¼",o:["2","2½","3⅛","½"],a:0,e:"5/2 ÷ 5/4 = 5/2 × 4/5 = 2."},
{q:"A price goes from R80 to R100. What is the percentage increase?",o:["20%","25%","80%","125%"],a:1,e:"20 ÷ 80 × 100 = 25%."},
{q:"Calculate: (1/2)³",o:["1/6","1/8","3/2","1/4"],a:1,e:"1/2 × 1/2 × 1/2 = 1/8."},
{q:"Calculate: 3/4 − 2/3 + 1/6",o:["1/4","2/13","1/12","5/12"],a:0,e:"9/12 − 8/12 + 2/12 = 3/12 = 1/4."},
{q:"Thandi gets R600. She spends 1/3 on transport and 1/4 on food. How much is left?",o:["R250","R350","R150","R200"],a:0,e:"600 − 200 − 150 = R250."}]},

{id:"g8-math-decimals",grade:8,term:1,subject:"math",strand:G8S,title:"Decimal fractions",
notes:`<h2>Multiplying decimals</h2><p>Multiply as whole numbers, then count the total decimal places: 2,5 × 1,2 → 25 × 12 = 300, two places → <b>3,00</b>. 0,05 × 0,04 → 5 × 4 = 20, four places → <b>0,0020</b>.</p>
<h2>Dividing by a decimal</h2><p>Multiply both numbers by 10, 100 … until you divide by a whole number: 4,8 ÷ 0,6 = 48 ÷ 6 = <b>8</b>. 2,4 ÷ 0,08 = 240 ÷ 8 = <b>30</b>.</p>
<h2>Squares, cubes and roots</h2><p>0,3² = 0,09 · 0,2³ = 0,008 · √0,49 = 0,7 · √1,44 = 1,2</p>
<div class="key">Squaring a decimal less than 1 makes it smaller: 0,3² = 0,09.</div>
<h2>Rounding and converting</h2>
<ul><li>3,14159 rounded to 2 decimal places = 3,14.</li><li>0,125 = 125/1 000 = 1/8 · 0,6 = 60%.</li>
<li>÷ 100 moves digits two places right: 3,6 ÷ 100 = 0,036.</li></ul>`,
qs:[
{q:"Calculate: 2,5 × 1,2",o:["3","30","0,3","2,7"],a:0,e:"25 × 12 = 300, two decimal places: 3,00."},
{q:"Calculate: 4,8 ÷ 0,6",o:["0,8","8","80","2,88"],a:1,e:"48 ÷ 6 = 8."},
{q:"Calculate: 0,3²",o:["0,9","0,09","0,6","0,009"],a:1,e:"0,3 × 0,3 = 0,09."},
{q:"Calculate: √0,49",o:["0,7","0,07","7","0,245"],a:0,e:"0,7 × 0,7 = 0,49."},
{q:"Calculate: 0,2³",o:["0,6","0,008","0,08","0,8"],a:1,e:"0,2 × 0,2 × 0,2 = 0,008."},
{q:"Round 3,14159 to two decimal places.",o:["3,1","3,14","3,15","3,142"],a:1,e:"The third decimal is 1, so round down."},
{q:"Calculate: 7,05 − 2,6",o:["4,45","5,45","4,99","4,65"],a:0,e:"7,05 − 2,60 = 4,45."},
{q:"Write 0,125 as a common fraction.",o:["1/8","1/4","12/5","1/125"],a:0,e:"125/1 000 = 1/8."},
{q:"Calculate: 3,6 ÷ 100",o:["0,36","0,036","360","36"],a:1,e:"Move the digits two places right."},
{q:"Which list is ordered from smallest to largest?",o:["0,07; 0,7; 0,707; 0,77","0,7; 0,07; 0,77; 0,707","0,77; 0,707; 0,7; 0,07","0,07; 0,707; 0,7; 0,77"],a:0,e:"0,070 < 0,700 < 0,707 < 0,770."}],
pq:[
{q:"Calculate: 1,5 + 2,75",o:["4,25","3,25","4,2","17,75"],a:0,h:"Line up the commas: 1,50 + 2,75.",e:"4,25."},
{q:"Calculate: 0,4 × 0,5",o:["2","0,2","0,02","0,9"],a:1,h:"4 × 5 = 20, then count two decimal places.",e:"0,20."},
{q:"Calculate: 6 ÷ 0,5",o:["3","12","0,3","30"],a:1,h:"How many halves are in 6?",e:"12."},
{q:"Write 0,6 as a percentage.",o:["6%","60%","0,6%","600%"],a:1,h:"Multiply by 100.",e:"60%."},
{q:"Calculate: 1,2²",o:["1,44","2,4","14,4","1,4"],a:0,h:"1,2 × 1,2.",e:"1,44."}],
cq:[
{q:"Petrol costs R23,50 per litre. What do 40 litres cost?",o:["R940","R94","R9 400","R63,50"],a:0,e:"23,5 × 40 = 940."},
{q:"Calculate: √1,44",o:["1,2","0,12","12","0,72"],a:0,e:"1,2² = 1,44."},
{q:"Calculate: 0,05 × 0,04",o:["0,2","0,02","0,002","0,0002"],a:2,e:"5 × 4 = 20, four decimal places: 0,0020."},
{q:"Calculate: (0,1)² + 0,1",o:["0,2","0,11","0,01","0,12"],a:1,e:"0,01 + 0,1 = 0,11."},
{q:"Calculate: 2,4 ÷ 0,08",o:["3","30","0,3","300"],a:1,e:"240 ÷ 8 = 30."}]},

{id:"g8-math-exponents",grade:8,term:2,subject:"math",strand:G8S,title:"Exponents",
notes:`<h2>Laws of exponents</h2>
<div class="tbl"><table><tr><th>Law</th><th>Example</th></tr>
<tr><td>aᵐ × aⁿ = aᵐ⁺ⁿ (add exponents)</td><td>2³ × 2⁴ = 2⁷</td></tr>
<tr><td>aᵐ ÷ aⁿ = aᵐ⁻ⁿ (subtract exponents)</td><td>5⁶ ÷ 5² = 5⁴</td></tr>
<tr><td>(aᵐ)ⁿ = aᵐⁿ (multiply exponents)</td><td>(3²)³ = 3⁶</td></tr>
<tr><td>(ab)ⁿ = aⁿbⁿ</td><td>(2x)² = 4x²</td></tr>
<tr><td>a⁰ = 1 (a ≠ 0)</td><td>7⁰ = 1</td></tr></table></div>
<div class="key">The laws only work when the bases are the same. Multiply the numbers in front: 3x² × 4x³ = 12x⁵.</div>
<h2>Scientific notation</h2>
<p>Write large numbers as a number between 1 and 10 times a power of 10: 4 500 000 = <b>4,5 × 10⁶</b>. Going back: 3,2 × 10⁴ = 32 000.</p>
<h2>Negative bases</h2><p>(−2)⁴ = 16 (even power → positive). (−2)³ = −8 (odd power → negative).</p>`,
qs:[
{q:"Simplify: 2³ × 2⁴",o:["2⁷","2¹²","4⁷","2¹"],a:0,e:"Add the exponents."},
{q:"Simplify: 5⁶ ÷ 5²",o:["5³","5⁴","5⁸","1⁴"],a:1,e:"Subtract the exponents."},
{q:"Simplify: (3²)³",o:["3⁵","3⁶","3⁸","9³"],a:1,e:"Multiply the exponents. (9³ is equal in value, but 3⁶ is the simplified form.)"},
{q:"What is 7⁰?",o:["0","1","7","70"],a:1,e:"Any non-zero number to the power 0 is 1."},
{q:"Simplify: x⁵ × x³",o:["x¹⁵","x⁸","x²","2x⁸"],a:1,e:"Add the exponents."},
{q:"Write 4 500 000 in scientific notation.",o:["45 × 10⁵","4,5 × 10⁶","4,5 × 10⁵","0,45 × 10⁷"],a:1,e:"The number in front must be between 1 and 10."},
{q:"Write 3,2 × 10⁴ as an ordinary number.",o:["3 200","32 000","320 000","320"],a:1,e:"Move the comma four places right."},
{q:"Simplify: (2x)²",o:["2x²","4x²","4x","2x⁴"],a:1,e:"Both 2 and x are squared."},
{q:"Calculate: √64 + ∛64",o:["16","12","8","32"],a:1,e:"8 + 4 = 12."},
{q:"Simplify: a⁸ ÷ a⁸",o:["0","1","a","a¹⁶"],a:1,e:"a⁰ = 1."}],
pq:[
{q:"Simplify: 10² × 10³",o:["10⁵","10⁶","100⁵","10¹"],a:0,h:"Same base: add the exponents.",e:"10⁵."},
{q:"Simplify: y⁶ ÷ y²",o:["y³","y⁴","y⁸","y¹²"],a:1,h:"Same base: subtract the exponents.",e:"y⁴."},
{q:"Simplify: (a³)²",o:["a⁵","a⁶","a⁹","2a³"],a:1,h:"Power of a power: multiply.",e:"a⁶."},
{q:"Calculate: 5⁰ + 1",o:["1","2","6","5"],a:1,h:"5⁰ is…",e:"1 + 1 = 2."},
{q:"Calculate: 2⁴",o:["8","16","6","32"],a:1,h:"2 × 2 × 2 × 2.",e:"16."}],
cq:[
{q:"Calculate: (2³)² ÷ 2⁴",o:["2","4","8","16"],a:1,e:"2⁶ ÷ 2⁴ = 2² = 4."},
{q:"Simplify: 3x² × 4x³",o:["7x⁵","12x⁶","12x⁵","7x⁶"],a:2,e:"3 × 4 = 12; x² × x³ = x⁵."},
{q:"Write 6 × 10⁵ as an ordinary number.",o:["60 000","600 000","6 000 000","65"],a:1,e:"Six followed by five zeros."},
{q:"Calculate: (−2)⁴",o:["−16","16","−8","8"],a:1,e:"An even power of a negative is positive."},
{q:"Earth is about 150 000 000 km from the Sun. Write this in scientific notation.",o:["15 × 10⁷ km","1,5 × 10⁸ km","1,5 × 10⁷ km","150 × 10⁶ km"],a:1,e:"1,5 × 100 000 000."}]},

{id:"g8-math-patterns",grade:8,term:2,subject:"math",strand:"Patterns, functions & algebra",title:"Numeric and geometric patterns",
notes:`<h2>Finding the general rule (Tₙ)</h2>
<p>For a pattern with a constant difference d, the rule is <b>Tₙ = d × n + (adjustment)</b>.</p>
<div class="ex"><b>Example</b>3; 7; 11; 15 … The difference is 4, so start with 4n. For n = 1, 4 × 1 = 4, but T₁ = 3, so subtract 1: <b>Tₙ = 4n − 1</b>. Then T₁₀ = 39.</div>
<h2>Using the rule</h2>
<ul><li>To find a term: substitute n. Tₙ = 3n + 2 → T₁₀ = 32.</li>
<li>To find which term has a value: solve the equation. 3n + 2 = 50 → n = 16, the 16th term.</li></ul>
<h2>Other patterns</h2>
<ul><li>Constant ratio: 2; 4; 8; 16 … (× 2).</li><li>Square numbers: Tₙ = n² → 1; 4; 9; 16 …</li>
<li>Triangular numbers: 1; 3; 6; 10; 15 … (add 2, 3, 4, 5 …).</li><li>Decreasing patterns: −2; −5; −8 … (difference −3).</li></ul>`,
qs:[
{q:"What is the next term? 3; 7; 11; 15; …",o:["18","19","20","21"],a:1,e:"Add 4."},
{q:"What is the general rule for 3; 7; 11; 15; …?",o:["Tₙ = 4n − 1","Tₙ = 4n + 3","Tₙ = 3n + 4","Tₙ = n + 4"],a:0,e:"4 × 1 − 1 = 3 ✓."},
{q:"Using Tₙ = 4n − 1, what is T₁₀?",o:["39","40","41","36"],a:0,e:"40 − 1 = 39."},
{q:"What is the next term? 2; 4; 8; 16; …",o:["18","24","32","20"],a:2,e:"Multiply by 2."},
{q:"What is the rule for 5; 8; 11; …?",o:["Tₙ = 3n + 2","Tₙ = 5n","Tₙ = 3n + 5","Tₙ = n + 3"],a:0,e:"3 × 1 + 2 = 5 ✓."},
{q:"In Tₙ = 3n + 2, which term equals 50?",o:["15th","16th","17th","48th"],a:1,e:"3n = 48, so n = 16."},
{q:"What is the rule for 1; 4; 9; 16; …?",o:["Tₙ = n²","Tₙ = 3n + 1","Tₙ = 2n","Tₙ = n + 3"],a:0,e:"Square numbers."},
{q:"What is the next triangular number? 1; 3; 6; 10; …",o:["14","15","16","13"],a:1,e:"Add 5."},
{q:"What is the next term? −2; −5; −8; …",o:["−10","−11","−12","−5"],a:1,e:"Subtract 3."},
{q:"A matchstick pattern has rule 2n + 1. How many sticks are in pattern 15?",o:["30","31","32","17"],a:1,e:"2 × 15 + 1 = 31."}],
pq:[
{q:"What is the next term? 6; 12; 18; …",o:["20","24","30","36"],a:1,h:"Add the same amount each time.",e:"24."},
{q:"What is the constant difference in 2; 9; 16; …?",o:["2","7","9","16"],a:1,h:"Subtract consecutive terms.",e:"7."},
{q:"What is the next term? 100; 95; 90; …",o:["80","85","89","95"],a:1,h:"It goes down by 5.",e:"85."},
{q:"If Tₙ = 2n + 3, what is T₅?",o:["10","13","8","25"],a:1,h:"Replace n with 5.",e:"13."},
{q:"What is the next term? 1; 3; 9; …",o:["12","18","27","15"],a:2,h:"Multiply each time.",e:"× 3: 27."}],
cq:[
{q:"If Tₙ = −3n + 10, what is T₂₀?",o:["−50","50","−70","70"],a:0,e:"−60 + 10 = −50."},
{q:"Is 100 a term of Tₙ = 3n + 1? If so, which one?",o:["Yes, the 33rd","Yes, the 30th","No","Yes, the 100th"],a:0,e:"3n = 99, so n = 33."},
{q:"If Tₙ = n² + 1, what is T₆?",o:["37","13","36","49"],a:0,e:"36 + 1 = 37."},
{q:"What is the next term? 2; 6; 12; 20; 30; …",o:["40","42","38","36"],a:1,e:"Tₙ = n(n + 1): 6 × 7 = 42."},
{q:"A tile pattern grows 5; 9; 13; … How many tiles are in pattern 25?",o:["100","101","105","125"],a:1,e:"Tₙ = 4n + 1, so 4 × 25 + 1 = 101."}]},

{id:"g8-math-functions",grade:8,term:2,subject:"math",strand:"Patterns, functions & algebra",title:"Functions and relationships",
notes:`<h2>One relationship, many forms</h2><p>A rule can be shown in words, a flow diagram, a table, a formula or a graph. “Triple x and add 2” is the same as <b>y = 3x + 2</b>.</p>
<h2>Substituting</h2><p>y = −2x + 5 with x = 3: y = −6 + 5 = <b>−1</b>. Put negative inputs in brackets: y = x² with x = −2 gives (−2)² = 4.</p>
<h2>Finding the formula from a table</h2>
<div class="ex"><b>Example</b>x: 1, 2, 3 and y: 4, 7, 10. y increases by 3 when x increases by 1, so start with 3x. For x = 1, 3 × 1 = 3, but y = 4, so add 1: <b>y = 3x + 1</b>.</div>
<p>If y goes <i>down</i> as x goes up, the number in front of x is negative: x: 0, 1, 2 and y: 10, 8, 6 gives y = −2x + 10.</p>
<h2>Working backwards</h2><p>y = 5x and y = 35 → x = 7. Flow diagram ×4 then −3 with output 17: add 3 → 20, divide by 4 → <b>5</b>.</p>
<h2>Real-life formulas</h2><p>A plumber charges a R300 call-out fee plus R250 per hour: <b>C = 250h + 300</b>. For 3 hours: 750 + 300 = R1 050.</p>`,
qs:[
{q:"If y = 3x − 2, what is y when x = 4?",o:["10","14","12","2"],a:0,e:"12 − 2 = 10."},
{q:"If y = −2x + 5, what is y when x = 3?",o:["11","−1","1","−11"],a:1,e:"−6 + 5 = −1."},
{q:"x: 1, 2, 3 and y: 4, 7, 10. Which formula fits?",o:["y = 3x + 1","y = x + 3","y = 4x","y = 2x + 2"],a:0,e:"3 × 1 + 1 = 4 ✓."},
{q:"If y = 5x and y = 35, what is x?",o:["7","175","30","40"],a:0,e:"35 ÷ 5 = 7."},
{q:"If y = x², what is y when x = −2?",o:["−4","4","−2","2"],a:1,e:"(−2)² = 4."},
{q:"The rule is × 4 then − 3, and the output is 17. What was the input?",o:["5","65","3,5","20"],a:0,e:"17 + 3 = 20, 20 ÷ 4 = 5."},
{q:"If y = 2x + 1, what is y when x = 0?",o:["0","1","2","3"],a:1,e:"0 + 1 = 1."},
{q:"Which formula means “triple x and add 2”?",o:["y = 3x + 2","y = 2x + 3","y = 3(x + 2)","y = x + 32"],a:0,e:"Triple first, then add 2."},
{q:"A phone contract costs R50 plus R2 per minute. What do 30 minutes cost?",o:["R60","R80","R110","R1 500"],a:2,e:"50 + 2 × 30 = R110."},
{q:"x: 0, 1, 2 and y: 10, 8, 6. Which formula fits?",o:["y = −2x + 10","y = 2x + 10","y = 10x","y = x − 2"],a:0,e:"y drops by 2 each time from 10."}],
pq:[
{q:"If y = x + 7, what is y when x = 3?",o:["4","10","21","37"],a:1,h:"Replace x with 3.",e:"10."},
{q:"If y = 4x, what is y when x = −1?",o:["4","−4","3","−5"],a:1,h:"4 × (−1).",e:"−4."},
{q:"The rule is × 2 and the output is 14. What was the input?",o:["28","7","12","16"],a:1,h:"Do the opposite of × 2.",e:"7."},
{q:"If y = 10 − x, what is y when x = 4?",o:["14","6","−6","40"],a:1,h:"10 minus 4.",e:"6."},
{q:"If y = x², what is y when x = 3?",o:["6","9","5","27"],a:1,h:"3 × 3.",e:"9."}],
cq:[
{q:"If y = ½x + 3, what is y when x = 8?",o:["7","11","4","19"],a:0,e:"4 + 3 = 7."},
{q:"For which x-value do y = 3x − 4 and y = 2x + 1 give the same y?",o:["x = 5","x = 3","x = −5","x = 1"],a:0,e:"3x − 4 = 2x + 1 gives x = 5."},
{q:"x: 1, 2, 3, 4 and y: 1, 4, 9, 16. Which formula fits?",o:["y = x²","y = 3x − 2","y = 4x","y = x + 3"],a:0,e:"Each y is x squared."},
{q:"A plumber charges R300 call-out plus R250 per hour. Which formula gives the cost C for h hours?",o:["C = 300h + 250","C = 250h + 300","C = 550h","C = 250 + h"],a:1,e:"R250 for every hour plus a fixed R300."},
{q:"Using C = 250h + 300, what does a 3-hour job cost?",o:["R1 050","R1 200","R850","R1 650"],a:0,e:"750 + 300 = R1 050."}]},

{id:"g8-math-lines",grade:8,term:3,subject:"math",strand:G8G,title:"Geometry of straight lines",
notes:`<h2>Angle facts</h2>
<div class="tbl"><table><tr><th>Fact</th><th>Rule</th></tr>
<tr><td>Angles on a straight line</td><td>add up to 180°</td></tr>
<tr><td>Angles around a point</td><td>add up to 360°</td></tr>
<tr><td>Vertically opposite angles</td><td>are equal</td></tr>
<tr><td>Complementary angles</td><td>add up to 90°</td></tr>
<tr><td>Supplementary angles</td><td>add up to 180°</td></tr></table></div>
<h2>Parallel lines cut by a transversal</h2>
<ul><li><b>Corresponding angles</b> are equal (F-shape).</li>
<li><b>Alternate angles</b> are equal (Z-shape).</li>
<li><b>Co-interior angles</b> add up to 180° (C- or U-shape).</li>
<li>If corresponding or alternate angles are equal, the lines are parallel.</li></ul>
<div class="key">In geometry answers, always give a <b>reason</b>, for example: x = 72° (alternate angles, AB ∥ CD).</div>
<h2>Solving with algebra</h2><p>Angles x and 2x on a straight line: 3x = 180°, so x = 60°.</p>`,
qs:[
{q:"Angles on a straight line add up to…",o:["90°","180°","270°","360°"],a:1,e:"A straight angle is 180°."},
{q:"Vertically opposite angles are…",o:["equal","supplementary","complementary","always 90°"],a:0,e:"They are equal."},
{q:"Angles around a point add up to…",o:["180°","270°","360°","90°"],a:2,e:"A full turn is 360°."},
{q:"With parallel lines, corresponding angles are…",o:["equal","supplementary","always 90°","unrelated"],a:0,e:"F-shape angles are equal."},
{q:"With parallel lines, alternate angles are…",o:["equal","supplementary","complementary","always acute"],a:0,e:"Z-shape angles are equal."},
{q:"With parallel lines, co-interior angles…",o:["are equal","add up to 180°","add up to 90°","add up to 360°"],a:1,e:"C-shape angles are supplementary."},
{q:"One angle on a straight line is 65°. What is the other?",o:["25°","115°","295°","65°"],a:1,e:"180° − 65° = 115°."},
{q:"An angle is 48°. What is the angle vertically opposite it?",o:["42°","48°","132°","312°"],a:1,e:"Vertically opposite angles are equal."},
{q:"Angles around a point are 100°, 120° and x. What is x?",o:["140°","160°","40°","220°"],a:0,e:"360° − 220° = 140°."},
{q:"Two co-interior angles between parallel lines: one is 70°. What is the other?",o:["70°","110°","20°","290°"],a:1,e:"180° − 70° = 110°."}],
pq:[
{q:"Complementary angles add up to…",o:["90°","180°","360°","45°"],a:0,h:"Think of a right angle.",e:"90°."},
{q:"Supplementary angles add up to…",o:["90°","180°","360°","120°"],a:1,h:"Think of a straight line.",e:"180°."},
{q:"What is the complement of 30°?",o:["60°","150°","330°","30°"],a:0,h:"90° minus 30°.",e:"60°."},
{q:"What is the supplement of 130°?",o:["50°","40°","230°","130°"],a:0,h:"180° minus 130°.",e:"50°."},
{q:"Perpendicular lines meet at…",o:["45°","90°","180°","60°"],a:1,h:"They form a right angle.",e:"90°."}],
cq:[
{q:"Angles x and 2x lie on a straight line. What is x?",o:["45°","60°","90°","120°"],a:1,e:"3x = 180°."},
{q:"AB ∥ CD and an angle alternate to x is 72°. What is x, and why?",o:["72°, alternate angles","108°, co-interior angles","72°, vertically opposite angles","18°, complementary angles"],a:0,e:"Alternate angles between parallel lines are equal."},
{q:"Angles of 30°, x and 2x lie on a straight line. What is x?",o:["50°","60°","75°","40°"],a:0,e:"30 + 3x = 180, so 3x = 150 and x = 50°."},
{q:"Vertically opposite angles are 3x and 120°. What is x?",o:["40°","60°","20°","120°"],a:0,e:"3x = 120, so x = 40°."},
{q:"If corresponding angles are equal, then the lines are…",o:["parallel","perpendicular","curved","the same line"],a:0,e:"This is how we prove lines are parallel."}]},

{id:"g8-math-2d",grade:8,term:3,subject:"math",strand:G8G,title:"Geometry of 2D shapes",
notes:`<h2>Triangles</h2>
<ul><li>The interior angles of a triangle add up to <b>180°</b>.</li>
<li>An <b>exterior angle</b> equals the sum of the two interior opposite angles.</li>
<li>Isosceles triangle: the base angles are equal. Equilateral: all angles are 60°.</li></ul>
<h2>Quadrilaterals</h2>
<ul><li>The interior angles of any quadrilateral add up to <b>360°</b>.</li>
<li>Parallelogram: opposite sides equal and parallel; opposite angles equal; adjacent angles add to 180°.</li>
<li>Rhombus: diagonals bisect each other at 90°. Square: diagonals are equal and perpendicular.</li></ul>
<h2>Congruent triangles (identical)</h2>
<div class="tbl"><table><tr><th>Condition</th><th>Meaning</th></tr>
<tr><td>SSS</td><td>three sides equal</td></tr><tr><td>SAS</td><td>two sides and the included angle equal</td></tr>
<tr><td>AAS</td><td>two angles and a matching side equal</td></tr><tr><td>RHS</td><td>right angle, hypotenuse and one side equal</td></tr></table></div>
<p>AAA is <b>not</b> a congruence condition: triangles with the same angles can be different sizes.</p>
<h2>Similar triangles</h2><p>Similar triangles have <b>equal angles</b> and sides <b>in proportion</b>. If 3, 4, 5 is similar to 6, 8, ?, the missing side is 10 (all doubled).</p>`,
qs:[
{q:"The interior angles of a triangle add up to…",o:["90°","180°","270°","360°"],a:1,e:"Always 180°."},
{q:"An exterior angle of a triangle equals…",o:["the sum of the two interior opposite angles","180°","the adjacent angle","90°"],a:0,e:"Exterior angle theorem."},
{q:"Two angles of a triangle are 45° and 75°. What is the third?",o:["60°","70°","120°","90°"],a:0,e:"180 − 120 = 60°."},
{q:"The interior opposite angles are 50° and 60°. What is the exterior angle?",o:["70°","110°","130°","10°"],a:1,e:"50 + 60 = 110°."},
{q:"An isosceles triangle has a vertex angle of 40°. What is each base angle?",o:["40°","70°","140°","50°"],a:1,e:"(180 − 40) ÷ 2 = 70°."},
{q:"The interior angles of a quadrilateral add up to…",o:["180°","270°","360°","540°"],a:2,e:"Always 360°."},
{q:"The diagonals of a rhombus…",o:["bisect each other at 90°","are always equal","never meet","are parallel"],a:0,e:"They cross at right angles and halve each other."},
{q:"SSS means two triangles have…",o:["three equal sides","three equal angles","two equal sides","one right angle"],a:0,e:"Side, side, side."},
{q:"The RHS condition applies to…",o:["right-angled triangles","any triangle","quadrilaterals","circles"],a:0,e:"Right angle, hypotenuse, side."},
{q:"Similar triangles have…",o:["equal angles and sides in proportion","equal sides only","different angles","the same area"],a:0,e:"Same shape, possibly different size."}],
pq:[
{q:"Each angle of an equilateral triangle is…",o:["45°","60°","90°","180°"],a:1,h:"180° shared equally between three angles.",e:"60°."},
{q:"A quadrilateral has angles of 90°, 90° and 100°. What is the fourth angle?",o:["80°","90°","100°","70°"],a:0,h:"All four add up to 360°.",e:"360 − 280 = 80°."},
{q:"In a parallelogram, opposite angles are…",o:["equal","supplementary","complementary","always 90°"],a:0,h:"Look across the shape.",e:"Equal."},
{q:"Congruent shapes are…",o:["the same shape and size","the same shape only","different","always triangles"],a:0,h:"Like two photocopies.",e:"Identical."},
{q:"The diagonals of a square are…",o:["equal and perpendicular","unequal","parallel","curved"],a:0,h:"A square is both a rectangle and a rhombus.",e:"Equal and at 90°."}],
cq:[
{q:"An isosceles triangle has base angles of 52°. What is the vertex angle?",o:["76°","52°","128°","104°"],a:0,e:"180 − 104 = 76°."},
{q:"A triangle's angles are x, 2x and 3x. What is x?",o:["30°","36°","60°","20°"],a:0,e:"6x = 180°."},
{q:"A triangle with sides 3, 4, 5 is similar to one with sides 6, 8 and ?. What is the missing side?",o:["9","10","7","12"],a:1,e:"Every side is doubled."},
{q:"One angle of a parallelogram is 65°. What is the angle next to it?",o:["65°","115°","25°","295°"],a:1,e:"Adjacent angles add up to 180°."},
{q:"Which is NOT a condition for congruent triangles?",o:["AAA","SSS","SAS","RHS"],a:0,e:"Equal angles alone don't guarantee equal size."}]}
);
TOPICS.slice(-9).forEach(t=>TOPIC[t.id]=t);
