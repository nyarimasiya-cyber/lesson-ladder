/* Grade 9 Mathematics, Terms 1–3 (Algebraic products & factorising is in content.js). */
const G9S = "Numbers, operations & relationships", G9P = "Patterns, functions & algebra", G9G = "Space & shape (geometry)";
TOPICS.push(
{id:"g9-math-whole",grade:9,term:1,subject:"math",strand:G9S,title:"Whole numbers, proportion and finance",
notes:`<h2>Number sets</h2>
<ul><li><b>Natural</b>: 1; 2; 3 … <b>Whole</b>: 0; 1; 2 … <b>Integers</b>: … −2; −1; 0; 1; 2 …</li>
<li><b>Rational</b> numbers can be written as a fraction a/b (b ≠ 0), including terminating and recurring decimals like 0,333…</li>
<li><b>Irrational</b> numbers can't: √2, π.</li></ul>
<h2>Proportion</h2>
<ul><li><b>Direct</b>: both increase together. 3 pens cost R24, so 7 pens cost 7 × R8 = R56.</li>
<li><b>Inverse</b>: one increases as the other decreases. 4 workers take 6 days, so 8 workers take 3 days.</li></ul>
<h2>Interest</h2>
<div class="tbl"><table><tr><th>Type</th><th>Formula</th><th>R1 000 at 10% for 2 years</th></tr>
<tr><td>Simple</td><td>A = P(1 + i × n)</td><td>R1 200</td></tr>
<tr><td>Compound</td><td>A = P(1 + i)ⁿ</td><td>R1 210</td></tr></table></div>
<p>Compound interest earns <b>interest on interest</b>, so it grows faster.</p>
<h2>Other finance</h2>
<ul><li><b>Commission</b>: a percentage of sales. 5% of R20 000 = R1 000.</li>
<li><b>Hire purchase</b>: a deposit plus monthly payments; it costs more than paying cash.</li>
<li><b>Exchange rates</b>: if €1 = R20, then R600 = €30.</li></ul>`,
qs:[
{q:"Which number is irrational?",o:["√2","0,5","−3","3/4"],a:0,e:"√2 can't be written as a fraction."},
{q:"A rational number is one that can be written as…",o:["a fraction a/b","a square root only","a negative number only","π"],a:0,e:"Rational comes from ratio."},
{q:"3 pens cost R24. What do 7 pens cost?",o:["R48","R56","R72","R31"],a:1,e:"R8 each × 7 = R56."},
{q:"4 workers take 6 days to build a wall. How long would 8 workers take?",o:["12 days","3 days","2 days","6 days"],a:1,e:"Inverse proportion: double the workers, half the time."},
{q:"Which formula is for compound interest?",o:["A = P(1 + i)ⁿ","A = P(1 + in)","A = P + i","A = Pin"],a:0,e:"The exponent n gives interest on interest."},
{q:"R1 000 is invested at 10% compound interest for 2 years. What is the final amount?",o:["R1 200","R1 210","R1 100","R1 020"],a:1,e:"1 000 × 1,1² = 1 210."},
{q:"R1 000 is invested at 10% simple interest for 2 years. What is the final amount?",o:["R1 200","R1 210","R2 000","R1 020"],a:0,e:"1 000 × (1 + 0,1 × 2) = 1 200."},
{q:"A salesperson earns 5% commission on R20 000 of sales. How much commission is that?",o:["R100","R1 000","R5 000","R10 000"],a:1,e:"0,05 × 20 000 = R1 000."},
{q:"A TV costs a R500 deposit plus 12 payments of R200. What is the total cost?",o:["R2 400","R2 900","R700","R3 400"],a:1,e:"500 + 2 400 = R2 900."},
{q:"If €1 = R20, how many euros is R600?",o:["€30","€12 000","€620","€3"],a:0,e:"600 ÷ 20 = 30."}],
pq:[
{q:"Which number is a whole number but not a natural number?",o:["0","1","−1","½"],a:0,h:"Whole numbers start one step earlier than natural numbers.",e:"0."},
{q:"Is −3 an integer?",o:["Yes","No","Only sometimes","Only if squared"],a:0,h:"Integers include negative whole numbers.",e:"Yes."},
{q:"What is 10% of R350?",o:["R3,50","R35","R350","R45"],a:1,h:"Move the comma one place left.",e:"R35."},
{q:"2 kg of apples cost R30. What do 6 kg cost?",o:["R60","R90","R180","R45"],a:1,h:"Find the cost of 1 kg first.",e:"R15 × 6 = R90."},
{q:"Is 0,333… (recurring) rational?",o:["Yes, it equals 1/3","No, it never ends","Only if rounded","It is irrational"],a:0,h:"Can you write it as a fraction?",e:"0,333… = 1/3."}],
cq:[
{q:"R5 000 is invested for 3 years at 10%. How much more does compound interest earn than simple interest?",o:["R155","R150","R1 655","R0"],a:0,e:"Simple: R1 500. Compound: 5 000 × 1,331 − 5 000 = R1 655. Difference R155."},
{q:"At 60 km/h a trip takes 4 hours. How long does it take at 80 km/h?",o:["5 hours","3 hours","3,5 hours","2 hours"],a:1,e:"Distance 240 km ÷ 80 = 3 hours."},
{q:"R1 200 is shared in the ratio 3 : 4 : 5. What is the largest share?",o:["R300","R400","R500","R600"],a:2,e:"12 parts of R100; 5 × R100 = R500."},
{q:"Cash price R4 000, or hire purchase with R600 deposit plus 12 × R350. How much extra does hire purchase cost?",o:["R800","R200","R4 800","R600"],a:0,e:"600 + 4 200 = R4 800, which is R800 more."},
{q:"Why does compound interest grow faster than simple interest?",o:["You earn interest on the interest already added","The rate is always higher","It is calculated monthly only","It doesn't"],a:0,e:"Interest is added to the amount each period."}]},

{id:"g9-math-integers",grade:9,term:1,subject:"math",strand:G9S,title:"Integers",
notes:`<h2>Properties</h2>
<div class="tbl"><table><tr><th>Property</th><th>Example</th></tr>
<tr><td>Commutative</td><td>−3 × 4 = 4 × (−3)</td></tr>
<tr><td>Associative</td><td>(−2 × 3) × 5 = −2 × (3 × 5)</td></tr>
<tr><td>Distributive</td><td>−2(3 − 7) = −6 + 14 = 8</td></tr>
<tr><td>Additive inverse</td><td>−7 + 7 = 0</td></tr>
<tr><td>Multiplicative inverse</td><td>5 × 1/5 = 1</td></tr>
<tr><td>Identity</td><td>a + 0 = a, a × 1 = a</td></tr></table></div>
<h2>Sign rules</h2><p>For × and ÷: same signs → positive; different signs → negative. An even number of negative factors gives a positive answer: (−1)¹⁰⁰ = 1.</p>
<h2>Powers and roots</h2><p>(−5)² = 25 · (−2)³ = −8 · ∛−64 = −4 · √((−6)²) = √36 = 6</p>
<h2>Order of operations</h2><p>−36 ÷ (−4) + 2 = 9 + 2 = <b>11</b>. Work out brackets first: (−4 + 10) ÷ (−3) = 6 ÷ (−3) = −2.</p>`,
qs:[
{q:"What is the additive inverse of −7?",o:["7","−7","1/7","0"],a:0,e:"−7 + 7 = 0."},
{q:"What is the multiplicative inverse of 5?",o:["−5","1/5","5","0"],a:1,e:"5 × 1/5 = 1."},
{q:"Calculate: (−3) × (−4) × (−2)",o:["24","−24","−9","9"],a:1,e:"Three negatives give a negative."},
{q:"Calculate: −36 ÷ (−4) + 2",o:["11","7","−7","−11"],a:0,e:"9 + 2 = 11."},
{q:"Calculate: (−5)² − (−5)",o:["20","30","−30","−20"],a:1,e:"25 + 5 = 30."},
{q:"What is ∛−64?",o:["4","−4","8","−8"],a:1,e:"(−4)³ = −64."},
{q:"−3 × 4 = 4 × (−3) shows which property?",o:["Commutative","Associative","Distributive","Inverse"],a:0,e:"Order doesn't matter."},
{q:"Calculate: −2(3 − 7)",o:["8","−8","20","−20"],a:0,e:"−2 × (−4) = 8."},
{q:"What is (−1)¹⁰⁰?",o:["1","−1","100","−100"],a:0,e:"An even power of −1 is 1."},
{q:"Which is the largest?",o:["−1","−5","−12","−3"],a:0,e:"−1 is closest to zero."}],
pq:[
{q:"Calculate: −8 + 8",o:["16","−16","0","8"],a:2,h:"A number plus its opposite.",e:"0."},
{q:"Calculate: −6 × −1",o:["6","−6","−7","5"],a:0,h:"Two negatives.",e:"6."},
{q:"Calculate: 4 − 11",o:["7","−7","15","−15"],a:1,h:"Start at 4 and move 11 left.",e:"−7."},
{q:"Calculate: (−2)²",o:["−4","4","−2","2"],a:1,h:"(−2) × (−2).",e:"4."},
{q:"Calculate: 0 × (−9)",o:["−9","9","0","1"],a:2,h:"Anything times zero.",e:"0."}],
cq:[
{q:"Calculate: (−2)³ × (−1)⁵",o:["8","−8","10","−10"],a:0,e:"−8 × −1 = 8."},
{q:"What is √((−6)²)?",o:["6","−6","36","±36"],a:0,e:"√36 = 6."},
{q:"Expand: −3(x − 4)",o:["−3x − 12","−3x + 12","3x − 12","−3x − 4"],a:1,e:"−3 × −4 = +12."},
{q:"The temperature ranges from −15 °C to 22 °C. What is the difference?",o:["7 °C","37 °C","−37 °C","−7 °C"],a:1,e:"22 − (−15) = 37."},
{q:"Calculate: (−4 + 10) ÷ (−3)",o:["2","−2","−18","18"],a:1,e:"6 ÷ (−3) = −2."}]},

{id:"g9-math-exponents",grade:9,term:1,subject:"math",strand:G9S,title:"Exponents",
notes:`<h2>Laws (same base)</h2>
<p>aᵐ × aⁿ = aᵐ⁺ⁿ · aᵐ ÷ aⁿ = aᵐ⁻ⁿ · (aᵐ)ⁿ = aᵐⁿ · (ab)ⁿ = aⁿbⁿ · a⁰ = 1</p>
<h2>Negative exponents</h2>
<div class="key">a⁻ⁿ = 1/aⁿ. So 2⁻³ = 1/8 and 10⁻² = 0,01.</div>
<h2>Scientific notation for small numbers</h2>
<p>0,00045 = 4,5 × 10⁻⁴ (the comma moves 4 places). Going back: 3,2 × 10⁻³ = 0,0032.</p>
<p>Multiplying: (4 × 10³)(2 × 10⁵) = 8 × 10⁸.</p>
<h2>Simple exponential equations</h2>
<p>Write both sides with the same base, then set the exponents equal.</p>
<div class="ex"><b>Examples</b>2ˣ = 16 = 2⁴ → x = 4 · 3ˣ = 1/9 = 3⁻² → x = −2 · 5ˣ⁺¹ = 125 = 5³ → x + 1 = 3 → x = 2</div>
<h2>With numbers and variables</h2><p>6x⁵ ÷ 2x² = 3x³ · (3x²)³ = 27x⁶ · (a²b³)² = a⁴b⁶</p>`,
qs:[
{q:"What is 2⁻³?",o:["−8","1/8","−6","8"],a:1,e:"2⁻³ = 1/2³ = 1/8."},
{q:"What is 10⁻²?",o:["−100","0,01","−20","0,1"],a:1,e:"1/100 = 0,01."},
{q:"Simplify: x⁻⁴ × x⁶",o:["x²","x¹⁰","x⁻²⁴","x⁻²"],a:0,e:"−4 + 6 = 2."},
{q:"Simplify: (a²b³)²",o:["a⁴b⁶","a⁴b⁵","a²b⁶","2a²b³"],a:0,e:"Multiply each exponent by 2."},
{q:"Write 0,00045 in scientific notation.",o:["4,5 × 10⁻⁴","4,5 × 10⁴","45 × 10⁻⁵","0,45 × 10⁻³"],a:0,e:"The comma moves 4 places right."},
{q:"Write 3,2 × 10⁻³ as an ordinary number.",o:["0,0032","3 200","0,032","0,00032"],a:0,e:"Move the comma 3 places left."},
{q:"Solve: 2ˣ = 16",o:["x = 4","x = 8","x = 3","x = 14"],a:0,e:"16 = 2⁴."},
{q:"Solve: 3ˣ = 1/9",o:["x = −2","x = 2","x = −3","x = 1/2"],a:0,e:"1/9 = 3⁻²."},
{q:"Simplify: 6x⁵ ÷ 2x²",o:["3x³","4x³","3x⁷","12x³"],a:0,e:"6 ÷ 2 = 3; x⁵⁻² = x³."},
{q:"Calculate: (2⁰ + 3⁰)²",o:["4","25","1","0"],a:0,e:"(1 + 1)² = 4."}],
pq:[
{q:"What is 5⁻¹?",o:["−5","1/5","5","0"],a:1,h:"A negative exponent means one over…",e:"1/5."},
{q:"Simplify: a³ × a⁴",o:["a⁷","a¹²","2a⁷","a"],a:0,h:"Add the exponents.",e:"a⁷."},
{q:"What is 10³?",o:["30","1 000","100","10 000"],a:1,h:"10 × 10 × 10.",e:"1 000."},
{q:"Solve: 4ˣ = 16",o:["x = 2","x = 4","x = 12","x = 8"],a:0,h:"16 = 4 to which power?",e:"x = 2."},
{q:"Simplify: (x²)³",o:["x⁵","x⁶","x⁸","3x²"],a:1,h:"Power of a power: multiply.",e:"x⁶."}],
cq:[
{q:"Calculate: 2³ × 2⁻⁵",o:["1/4","4","−4","2⁻¹⁵"],a:0,e:"2⁻² = 1/4."},
{q:"Simplify: (3x²)³",o:["9x⁶","27x⁶","27x⁵","3x⁶"],a:1,e:"3³ = 27; (x²)³ = x⁶."},
{q:"A dust particle has a mass of 0,000 000 3 kg. Write it in scientific notation.",o:["3 × 10⁻⁷ kg","3 × 10⁷ kg","3 × 10⁻⁶ kg","0,3 × 10⁻⁶ kg"],a:0,e:"The comma moves 7 places."},
{q:"Solve: 5ˣ⁺¹ = 125",o:["x = 2","x = 3","x = 4","x = 24"],a:0,e:"x + 1 = 3."},
{q:"Calculate: (4 × 10³) × (2 × 10⁵)",o:["8 × 10⁸","8 × 10¹⁵","6 × 10⁸","8 × 10²"],a:0,e:"4 × 2 = 8; 10³⁺⁵ = 10⁸."}]},

{id:"g9-math-patterns",grade:9,term:1,subject:"math",strand:G9P,title:"Numeric and geometric patterns",
notes:`<h2>Linear patterns</h2>
<p>Constant difference d → <b>Tₙ = dn + c</b>. Find c by checking the first term.</p>
<div class="ex"><b>Examples</b>5; 9; 13 … → Tₙ = 4n + 1 · 20; 17; 14 … → d = −3, so Tₙ = −3n + 23</div>
<h2>Using the rule</h2>
<ul><li>Find a term: T₂₀ = 4(20) + 1 = 81.</li>
<li>Find the position: 4n + 1 = 101 → n = 25.</li>
<li>Check if a number is in the pattern: 4n + 1 = 60 → n = 14,75, not a whole number, so 60 is <b>not</b> a term.</li></ul>
<h2>Other patterns</h2>
<ul><li>Squares: Tₙ = n². Cubes: Tₙ = n³.</li><li>Squares plus one: 2; 5; 10; 17 … → Tₙ = n² + 1.</li>
<li>Constant ratio: 3; 6; 12; 24 … (× 2); 128; 64; 32 … (÷ 2).</li>
<li>Triangular numbers: Tₙ = n(n + 1)/2.</li></ul>`,
qs:[
{q:"What is the rule for 5; 9; 13; …?",o:["Tₙ = 4n + 1","Tₙ = 5n","Tₙ = 4n + 5","Tₙ = n + 4"],a:0,e:"4(1) + 1 = 5 ✓."},
{q:"Using Tₙ = 4n + 1, what is T₂₀?",o:["80","81","84","21"],a:1,e:"80 + 1 = 81."},
{q:"In Tₙ = 4n + 1, which term equals 101?",o:["24th","25th","26th","100th"],a:1,e:"4n = 100."},
{q:"What is the rule for 20; 17; 14; …?",o:["Tₙ = −3n + 23","Tₙ = 3n + 17","Tₙ = −3n + 20","Tₙ = 20 − n"],a:0,e:"−3(1) + 23 = 20 ✓."},
{q:"Using Tₙ = −3n + 23, what is T₁₀?",o:["−7","7","53","−53"],a:0,e:"−30 + 23 = −7."},
{q:"In the pattern 1; 4; 9; 16; …, what is T₁₂?",o:["144","48","121","24"],a:0,e:"12² = 144."},
{q:"What is the next term? 3; 6; 12; 24; …",o:["30","36","48","27"],a:2,e:"Multiply by 2."},
{q:"What is the next term? 2; 5; 10; 17; …",o:["24","26","25","28"],a:1,e:"Tₙ = n² + 1: 5² + 1 = 26."},
{q:"A row of hexagons uses 6; 11; 16; … matchsticks. What is the rule?",o:["Tₙ = 5n + 1","Tₙ = 6n","Tₙ = 5n + 6","Tₙ = n + 5"],a:0,e:"5(1) + 1 = 6 ✓."},
{q:"Is 60 a term of Tₙ = 4n + 1?",o:["Yes, the 15th","No","Yes, the 14th","Yes, the 60th"],a:1,e:"4n = 59 doesn't give a whole number."}],
pq:[
{q:"What is the rule for 10; 20; 30; …?",o:["Tₙ = 10n","Tₙ = n + 10","Tₙ = 10n + 10","Tₙ = 20n"],a:0,h:"Each term is a multiple of 10.",e:"10n."},
{q:"What is the constant difference in 7; 9; 11; …?",o:["2","7","9","3"],a:0,h:"Subtract one term from the next.",e:"2."},
{q:"If Tₙ = 2n − 1, what is T₆?",o:["11","12","13","10"],a:0,h:"Replace n with 6.",e:"11."},
{q:"What is the next term? 1; 8; 27; …",o:["36","54","64","81"],a:2,h:"These are cube numbers.",e:"4³ = 64."},
{q:"What is the next term? 50; 45; 40; …",o:["30","35","45","38"],a:1,h:"It drops by 5.",e:"35."}],
cq:[
{q:"For Tₙ = 3n − 5, what is the first term greater than 100?",o:["T₃₅ = 100","T₃₆ = 103","T₃₄ = 97","T₁₀₀ = 295"],a:1,e:"3n − 5 > 100 means n > 35, so n = 36."},
{q:"For triangular numbers Tₙ = n(n + 1)/2, what is T₁₀?",o:["50","55","110","45"],a:1,e:"10 × 11 ÷ 2 = 55."},
{q:"For which n are Tₙ = 2n + 3 and Tₙ = 5n − 9 equal?",o:["n = 4","n = 3","n = 2","n = 12"],a:0,e:"2n + 3 = 5n − 9 gives 3n = 12."},
{q:"In the pattern 128; 64; 32; …, what is T₆?",o:["8","4","2","16"],a:1,e:"32, 16, 8, 4: the 6th term is 4."},
{q:"If Tₙ = n² − n, what is T₇?",o:["42","49","56","35"],a:0,e:"49 − 7 = 42."}]},

{id:"g9-math-equations",grade:9,term:2,subject:"math",strand:G9P,title:"Algebraic equations",
notes:`<h2>Linear equations</h2>
<ul><li>Remove brackets, collect like terms, then do the same to both sides.</li>
<li>5x − 7 = 18 → 5x = 25 → <b>x = 5</b>.</li>
<li>Variables on both sides: 4x + 3 = 2x + 11 → 2x = 8 → <b>x = 4</b>.</li></ul>
<h2>Equations with fractions</h2><p>Multiply every term by the LCD to clear fractions.</p>
<div class="ex"><b>Example</b>(x − 1)/2 = (x + 2)/3 → 3(x − 1) = 2(x + 2) → 3x − 3 = 2x + 4 → <b>x = 7</b></div>
<h2>Product equals zero</h2><div class="key">If A × B = 0, then A = 0 or B = 0. So x(x − 5) = 0 gives x = 0 or x = 5; (x + 2)(x − 3) = 0 gives x = −2 or x = 3.</div>
<p>x² = 49 gives x = 7 or x = −7.</p>
<h2>Exponential equations</h2><p>2ˣ = 32 = 2⁵ → x = 5.</p>
<h2>Word problems</h2><p>Let x be the unknown, write an equation, solve, and check. Two consecutive numbers add up to 47: x + (x + 1) = 47 → x = 23.</p>`,
qs:[
{q:"Solve: 5x − 7 = 18",o:["x = 5","x = 2,2","x = 25","x = 11"],a:0,e:"5x = 25."},
{q:"Solve: 3(x + 2) = 21",o:["x = 5","x = 7","x = 9","x = 6,3"],a:0,e:"3x + 6 = 21, so 3x = 15."},
{q:"Solve: 4x + 3 = 2x + 11",o:["x = 4","x = 7","x = 2","x = 14/6"],a:0,e:"2x = 8."},
{q:"Solve: x/3 + 2 = 6",o:["x = 12","x = 24","x = 4/3","x = 6"],a:0,e:"x/3 = 4."},
{q:"Solve: (x − 1)/2 = (x + 2)/3",o:["x = 7","x = 1","x = −7","x = 5"],a:0,e:"3x − 3 = 2x + 4."},
{q:"Solve: x(x − 5) = 0",o:["x = 0 or x = 5","x = 5 only","x = −5","x = 0 only"],a:0,e:"Either factor can be zero."},
{q:"Solve: (x + 2)(x − 3) = 0",o:["x = −2 or x = 3","x = 2 or x = −3","x = 6","x = −6"],a:0,e:"x + 2 = 0 or x − 3 = 0."},
{q:"Solve: 2ˣ = 32",o:["x = 5","x = 16","x = 6","x = 4"],a:0,e:"32 = 2⁵."},
{q:"Two consecutive numbers add up to 47. What is the smaller number?",o:["23","24","22","21"],a:0,e:"2x + 1 = 47 → x = 23."},
{q:"A rectangle has length 2x + 1, width x and perimeter 32. What is x?",o:["5","6","4","10"],a:0,e:"2(3x + 1) = 32 → 6x = 30."}],
pq:[
{q:"Solve: x + 9 = 4",o:["x = 13","x = −5","x = 5","x = −13"],a:1,h:"Subtract 9 from both sides.",e:"x = −5."},
{q:"Solve: 6x = −18",o:["x = 3","x = −3","x = −12","x = −108"],a:1,h:"Divide both sides by 6.",e:"x = −3."},
{q:"Solve: 2x − 1 = 9",o:["x = 4","x = 5","x = 10","x = 8"],a:1,h:"Add 1 first.",e:"2x = 10."},
{q:"Solve: x/4 = 5",o:["x = 1,25","x = 20","x = 9","x = 1"],a:1,h:"Multiply both sides by 4.",e:"x = 20."},
{q:"Solve: x² = 49",o:["x = 7 only","x = 7 or x = −7","x = 24,5","x = −7 only"],a:1,h:"Which numbers squared give 49? There are two.",e:"x = ±7."}],
cq:[
{q:"Solve: 2(x − 3) − (x + 1) = 4",o:["x = 11","x = 9","x = 3","x = 7"],a:0,e:"2x − 6 − x − 1 = 4 → x = 11."},
{q:"Solve: x/2 − x/5 = 3",o:["x = 10","x = 15","x = 30","x = 1"],a:0,e:"Multiply by 10: 5x − 2x = 30."},
{q:"Solve: x² − 9x = 0",o:["x = 0 or x = 9","x = 9 only","x = 3 or x = −3","x = 0 only"],a:0,e:"x(x − 9) = 0."},
{q:"A father is 3 times as old as his son. In 10 years their ages will add up to 76. How old is the son now?",o:["14","19","42","12"],a:0,e:"x + 3x + 20 = 76 → x = 14."},
{q:"Solve: 3ˣ⁻¹ = 27",o:["x = 4","x = 3","x = 2","x = 28"],a:0,e:"x − 1 = 3."}]},

{id:"g9-math-functions",grade:9,term:2,subject:"math",strand:G9P,title:"Functions and relationships",
notes:`<h2>Representations</h2><p>A relationship can be shown as words, a flow diagram, a table, a formula or a graph. They must all give the same input–output pairs.</p>
<h2>Linear functions: y = mx + c</h2>
<ul><li><b>m</b> is the constant difference in y when x increases by 1 (the gradient).</li>
<li><b>c</b> is the value of y when x = 0 (the y-intercept).</li></ul>
<div class="ex"><b>Example</b>x: 1, 2, 3 and y: 5, 8, 11 → m = 3. When x = 1, 3(1) + c = 5, so c = 2: <b>y = 3x + 2</b></div>
<h2>Solving for the input</h2><p>y = 3x − 6 and y = 0: 3x = 6, so x = 2.</p>
<h2>Linear or not?</h2><p>y = x² and y = 2ˣ are <b>not</b> linear: their differences are not constant.</p>
<h2>Real life</h2><p>A taxi charges R12 plus R9 per km: C = 9k + 12. For 8 km: 72 + 12 = R84.</p>`,
qs:[
{q:"If y = 2x − 3, what is y when x = −1?",o:["−5","−1","1","5"],a:0,e:"−2 − 3 = −5."},
{q:"x: 1, 2, 3 and y: 5, 8, 11. Which formula fits?",o:["y = 3x + 2","y = 2x + 3","y = 5x","y = x + 4"],a:0,e:"m = 3 and c = 2."},
{q:"If y = −4x + 1, what is y when x = 2?",o:["−7","9","7","−9"],a:0,e:"−8 + 1 = −7."},
{q:"If y = 3x − 6 and y = 0, what is x?",o:["2","−2","6","0"],a:0,e:"3x = 6."},
{q:"In y = mx + c, what does c tell you?",o:["The value of y when x = 0","The gradient","The x-intercept","The largest y"],a:0,e:"c is the y-intercept."},
{q:"In a table for y = mx + c, the constant difference in y gives…",o:["m","c","x","the origin"],a:0,e:"m is the change in y for each step in x."},
{q:"The rule is × (−2) then + 7. What is the output for input 4?",o:["−1","15","1","−15"],a:0,e:"−8 + 7 = −1."},
{q:"x: −1, 0, 1 and y: 4, 2, 0. Which formula fits?",o:["y = −2x + 2","y = 2x + 2","y = −2x","y = x + 2"],a:0,e:"c = 2 and y drops by 2 each step."},
{q:"A taxi charges R12 plus R9 per km. What does an 8 km trip cost?",o:["R84","R72","R96","R168"],a:0,e:"9 × 8 + 12 = R84."},
{q:"Which relationship is NOT linear?",o:["y = x²","y = 3x + 1","y = −x","y = 5"],a:0,e:"x² has no constant difference."}],
pq:[
{q:"If y = x + 4, what is y when x = −4?",o:["0","8","−8","4"],a:0,h:"−4 + 4.",e:"0."},
{q:"If y = 5x − 1, what is y when x = 2?",o:["9","11","10","7"],a:0,h:"5 × 2, then subtract 1.",e:"9."},
{q:"In y = 2x + 7, what is c?",o:["2","7","9","x"],a:1,h:"It's the number on its own.",e:"7."},
{q:"x: 0, 1, 2 and y: 3, 5, 7. What is m?",o:["2","3","5","7"],a:0,h:"How much does y increase each time?",e:"2."},
{q:"If y = 4x and y = 20, what is x?",o:["80","5","16","24"],a:1,h:"Divide by 4.",e:"5."}],
cq:[
{q:"For what x-value do y = 2x + 5 and y = −x + 11 give the same y?",o:["x = 2","x = 3","x = 6","x = −2"],a:0,e:"2x + 5 = −x + 11 → 3x = 6."},
{q:"A plan costs R99 per month plus R1,50 per SMS. Which formula gives the cost C for s messages?",o:["C = 1,5s + 99","C = 99s + 1,5","C = 100,5s","C = 99 − 1,5s"],a:0,e:"Fixed R99 plus R1,50 for each SMS."},
{q:"x: 2, 4, 6 and y: 1, 5, 9. Which formula fits?",o:["y = 2x − 3","y = 4x − 7","y = x − 1","y = 2x + 1"],a:0,e:"y rises 4 when x rises 2, so m = 2; 2(2) − 3 = 1 ✓."},
{q:"If y = −x² + 4, what is y when x = −3?",o:["−5","13","5","−13"],a:0,e:"−(9) + 4 = −5."},
{q:"A candle is 30 cm tall and burns 2 cm per hour. Which formula gives its height h after t hours?",o:["h = 30 − 2t","h = 2t + 30","h = 30t − 2","h = 28t"],a:0,e:"It starts at 30 and decreases by 2 each hour."}]},

{id:"g9-math-graphs",grade:9,term:3,subject:"math",strand:G9P,title:"Graphs",
notes:`<h2>Global graphs</h2><p>Describe graphs as increasing or decreasing, linear or non-linear, discrete or continuous, and identify maximum and minimum points.</p>
<h2>Straight-line graphs: y = mx + c</h2>
<ul><li><b>Gradient</b> m = rise ÷ run = (y₂ − y₁) ÷ (x₂ − x₁). Between (1; 2) and (3; 8): m = 6 ÷ 2 = 3.</li>
<li>Positive gradient: the line rises from left to right. Negative: it falls.</li>
<li><b>y-intercept</b>: put x = 0. For y = 3x + 2, it is 2.</li>
<li><b>x-intercept</b>: put y = 0. For y = 2x − 6: 0 = 2x − 6, so x = 3.</li></ul>
<h2>Special lines</h2>
<ul><li>y = 4 is a <b>horizontal</b> line with gradient 0.</li><li>x = −2 is a <b>vertical</b> line.</li>
<li><b>Parallel</b> lines have equal gradients: y = 2x + 1 is parallel to y = 2x − 4.</li></ul>
<h2>Drawing a line</h2><p>Find two points, such as the two intercepts, plot them and join them with a ruler. Check a point on the line: (2; 3) lies on y = −x + 5 because −2 + 5 = 3.</p>`,
qs:[
{q:"What is the gradient of y = 3x + 2?",o:["3","2","5","1/3"],a:0,e:"m is the coefficient of x."},
{q:"What is the y-intercept of y = 3x + 2?",o:["3","2","−2","0"],a:1,e:"c = 2."},
{q:"What is the x-intercept of y = 2x − 6?",o:["−6","3","−3","6"],a:1,e:"0 = 2x − 6 → x = 3."},
{q:"What is the gradient of the line through (1; 2) and (3; 8)?",o:["3","6","2","1/3"],a:0,e:"(8 − 2) ÷ (3 − 1) = 3."},
{q:"The line y = 4 is…",o:["horizontal","vertical","diagonal","curved"],a:0,e:"y is always 4."},
{q:"The line x = −2 is…",o:["horizontal","vertical","through the origin","curved"],a:1,e:"x is always −2."},
{q:"A line with a negative gradient…",o:["falls from left to right","rises from left to right","is horizontal","is vertical"],a:0,e:"y decreases as x increases."},
{q:"Which point lies on y = −x + 5?",o:["(2; 3)","(2; 7)","(3; 3)","(0; −5)"],a:0,e:"−2 + 5 = 3."},
{q:"Which line is parallel to y = 2x + 1?",o:["y = 2x − 4","y = −2x + 1","y = x + 2","y = ½x + 1"],a:0,e:"Parallel lines have the same gradient."},
{q:"What is the gradient of a horizontal line?",o:["0","1","undefined","−1"],a:0,e:"No rise."}],
pq:[
{q:"Which letter stands for the gradient in y = mx + c?",o:["m","c","x","y"],a:0,h:"It's the number in front of x.",e:"m."},
{q:"To find the y-intercept, you set…",o:["x = 0","y = 0","m = 0","c = 0"],a:0,h:"The y-axis is where x is zero.",e:"x = 0."},
{q:"To find the x-intercept, you set…",o:["y = 0","x = 0","m = 1","c = 1"],a:0,h:"The x-axis is where y is zero.",e:"y = 0."},
{q:"What is the gradient of y = −x + 4?",o:["−1","4","1","−4"],a:0,h:"The coefficient of x.",e:"−1."},
{q:"A line with a positive gradient…",o:["rises from left to right","falls from left to right","is flat","is vertical"],a:0,h:"Positive means going up.",e:"It rises."}],
cq:[
{q:"What are the intercepts of y = −2x + 4?",o:["x-intercept 2, y-intercept 4","x-intercept 4, y-intercept 2","x-intercept −2, y-intercept 4","Both 4"],a:0,e:"x = 0 gives 4; y = 0 gives x = 2."},
{q:"What is the equation of the line with gradient 3 through (0; −1)?",o:["y = 3x − 1","y = −x + 3","y = 3x + 1","y = x − 3"],a:0,e:"m = 3 and c = −1."},
{q:"What is the gradient of the line through (−1; 4) and (2; −2)?",o:["−2","2","−3","3"],a:0,e:"(−2 − 4) ÷ (2 − (−1)) = −6 ÷ 3."},
{q:"Where do y = x + 1 and y = −x + 5 intersect?",o:["(2; 3)","(3; 2)","(1; 2)","(4; 1)"],a:0,e:"x + 1 = −x + 5 → x = 2, y = 3."},
{q:"Which line passes through the origin?",o:["y = 3x","y = 3x + 1","y = 2","x = 4"],a:0,e:"c = 0, so it passes through (0; 0)."}]},

{id:"g9-math-lines",grade:9,term:3,subject:"math",strand:G9G,title:"Geometry of straight lines",
notes:`<h2>Facts to use (with reasons)</h2>
<div class="tbl"><table><tr><th>Fact</th><th>Reason to write</th></tr>
<tr><td>Angles on a straight line add up to 180°</td><td>∠s on a str line</td></tr>
<tr><td>Angles around a point add up to 360°</td><td>∠s around a pt</td></tr>
<tr><td>Vertically opposite angles are equal</td><td>vert opp ∠s</td></tr>
<tr><td>Corresponding angles are equal (if lines are parallel)</td><td>corresp ∠s, AB ∥ CD</td></tr>
<tr><td>Alternate angles are equal (if lines are parallel)</td><td>alt ∠s, AB ∥ CD</td></tr>
<tr><td>Co-interior angles add up to 180° (if lines are parallel)</td><td>co-int ∠s, AB ∥ CD</td></tr></table></div>
<h2>Solving step by step</h2>
<div class="ex"><b>Example</b>Angles 2x + 10° and 3x − 20° are vertically opposite: 2x + 10 = 3x − 20 → <b>x = 30°</b></div>
<h2>Proving lines are parallel</h2><p>If corresponding angles are equal, or alternate angles are equal, or co-interior angles add up to 180°, then the lines are parallel.</p>
<div class="key">Every statement needs a reason. Marks are given for reasons as well as answers.</div>`,
qs:[
{q:"Angles 2x + 10° and 3x − 20° are vertically opposite. What is x?",o:["30°","10°","20°","38°"],a:0,e:"2x + 10 = 3x − 20."},
{q:"x and 3x lie on a straight line. What is x?",o:["45°","60°","90°","30°"],a:0,e:"4x = 180°."},
{q:"With AB ∥ CD, co-interior angles are 2y and 3y. What is y?",o:["36°","45°","30°","72°"],a:0,e:"5y = 180°."},
{q:"With AB ∥ CD, alternate angles are x + 20° and 75°. What is x?",o:["55°","95°","75°","20°"],a:0,e:"x + 20 = 75."},
{q:"Angles around a point are x, 2x, 3x and 4x. What is x?",o:["36°","30°","45°","90°"],a:0,e:"10x = 360°."},
{q:"Which reason do you give when two angles form a Z-shape between parallel lines?",o:["alt ∠s","corresp ∠s","co-int ∠s","vert opp ∠s"],a:0,e:"Alternate angles."},
{q:"Which reason do you give for an F-shape between parallel lines?",o:["corresp ∠s","alt ∠s","co-int ∠s","∠s on a str line"],a:0,e:"Corresponding angles."},
{q:"Co-interior angles are 115° and 65°. What can you conclude?",o:["The lines are parallel","The lines are perpendicular","The lines meet","Nothing"],a:0,e:"115 + 65 = 180°."},
{q:"Corresponding angles are 70° and 75°. What can you conclude?",o:["The lines are not parallel","The lines are parallel","The angles are vertically opposite","The lines are perpendicular"],a:0,e:"Corresponding angles would be equal if the lines were parallel."},
{q:"One angle on a straight line is 3x and the other is 2x + 30°. What is x?",o:["30°","40°","50°","36°"],a:0,e:"5x + 30 = 180 → x = 30°."}],
pq:[
{q:"Vertically opposite angles are…",o:["equal","supplementary","complementary","right angles"],a:0,h:"They face each other across the crossing point.",e:"Equal."},
{q:"An angle on a straight line is 140°. What is the other one?",o:["40°","220°","140°","50°"],a:0,h:"Subtract from 180°.",e:"40°."},
{q:"Co-interior angles between parallel lines add up to…",o:["90°","180°","360°","they're equal"],a:1,h:"They form a C- or U-shape.",e:"180°."},
{q:"With parallel lines, a corresponding angle is 58°. What is the matching angle?",o:["58°","122°","32°","302°"],a:0,h:"Corresponding angles are equal.",e:"58°."},
{q:"What does the symbol ∥ mean?",o:["is parallel to","is perpendicular to","is equal to","is similar to"],a:0,h:"Two lines that never meet.",e:"Parallel."}],
cq:[
{q:"With AB ∥ CD, an angle is 4x − 10° and its corresponding angle is 2x + 30°. What is x?",o:["20°","10°","40°","70°"],a:0,e:"4x − 10 = 2x + 30 → 2x = 40."},
{q:"Three angles on a straight line are x, x + 20° and 2x. What is x?",o:["40°","50°","60°","35°"],a:0,e:"4x + 20 = 180."},
{q:"With AB ∥ CD, co-interior angles are 3x + 10° and 2x + 20°. What is x?",o:["30°","40°","25°","50°"],a:0,e:"5x + 30 = 180 → x = 30."},
{q:"Two lines cross. One angle is 72°. What are the other three angles?",o:["72°, 108°, 108°","72°, 72°, 72°","108°, 108°, 108°","18°, 72°, 18°"],a:0,e:"Vertically opposite: 72°; on a straight line: 108°."},
{q:"How can you prove that two lines are parallel?",o:["Show alternate angles are equal","Show they are both long","Show they cross","Show vertically opposite angles are equal"],a:0,e:"Equal alternate (or corresponding) angles prove parallel lines."}]},

{id:"g9-math-2d",grade:9,term:3,subject:"math",strand:G9G,title:"Geometry of 2D shapes and constructions",
notes:`<h2>Triangles</h2>
<ul><li>Interior angles add up to 180°. An exterior angle equals the sum of the two interior opposite angles.</li>
<li>Theorem of Pythagoras (right-angled triangles): hypotenuse² = sum of the squares of the other two sides.</li></ul>
<h2>Congruent and similar triangles</h2>
<ul><li><b>Congruent</b> (≡): SSS, SAS, AAS or RHS. Corresponding sides and angles are equal.</li>
<li><b>Similar</b> (|||): equal angles and sides in the same ratio. If ΔABC ||| ΔDEF with AB = 4, DE = 6 and BC = 8, then EF = 8 × 6/4 = 12.</li></ul>
<h2>Quadrilaterals</h2>
<div class="tbl"><table><tr><th>Shape</th><th>Key properties</th></tr>
<tr><td>Parallelogram</td><td>Opposite sides and angles equal; diagonals bisect each other</td></tr>
<tr><td>Rectangle</td><td>Parallelogram with 90° angles; diagonals equal</td></tr>
<tr><td>Rhombus</td><td>Parallelogram with 4 equal sides; diagonals bisect at 90°</td></tr>
<tr><td>Square</td><td>All the above</td></tr>
<tr><td>Kite</td><td>Two pairs of adjacent sides equal; diagonals meet at 90°</td></tr>
<tr><td>Trapezium</td><td>One pair of parallel sides</td></tr></table></div>
<h2>Constructions (compass and ruler)</h2>
<ul><li>Bisect a line segment (the <b>perpendicular bisector</b>) and bisect an angle.</li>
<li>Construct a <b>60° angle</b>: draw an arc from the vertex, then an arc of the same radius from where it crosses the arm.</li>
<li>Bisecting 60° gives 30°; bisecting 90° gives 45°.</li></ul>`,
qs:[
{q:"Which condition proves two right-angled triangles congruent using the hypotenuse?",o:["RHS","AAA","SSA","ASS"],a:0,e:"Right angle, hypotenuse, side."},
{q:"ΔABC ||| ΔDEF with AB = 4, DE = 6 and BC = 8. What is EF?",o:["12","10","16","5,3"],a:0,e:"The scale factor is 6/4 = 1,5; 8 × 1,5 = 12."},
{q:"Which quadrilateral has diagonals that bisect each other at 90° and four equal sides?",o:["Rhombus","Rectangle","Trapezium","Kite"],a:0,e:"That's a rhombus (or a square)."},
{q:"Which statement about a rectangle is true?",o:["Its diagonals are equal","Its diagonals meet at 90°","All its sides are equal","It has one pair of parallel sides"],a:0,e:"Rectangle diagonals are equal."},
{q:"A kite has…",o:["two pairs of adjacent sides equal","four equal sides","one pair of parallel sides","no equal sides"],a:0,e:"Adjacent pairs are equal."},
{q:"How do you construct a 60° angle?",o:["Draw two arcs with the same compass width to form an equilateral triangle","Use only a ruler","Bisect a 90° angle","Draw a circle only"],a:0,e:"An equilateral triangle has 60° angles."},
{q:"Bisecting a 90° angle gives…",o:["30°","45°","60°","180°"],a:1,e:"90° ÷ 2 = 45°."},
{q:"A perpendicular bisector…",o:["cuts a line segment in half at 90°","doubles a line","makes a 60° angle","is always horizontal"],a:0,e:"It bisects at right angles."},
{q:"A right-angled triangle has shorter sides of 9 and 12. How long is the hypotenuse?",o:["15","21","225","13"],a:0,e:"81 + 144 = 225, √225 = 15."},
{q:"A triangle has angles of 35° and 85°. What is the exterior angle at the third vertex?",o:["120°","60°","50°","95°"],a:0,e:"Exterior angle = 35 + 85."}],
pq:[
{q:"The symbol ≡ between triangles means…",o:["congruent","similar","parallel","equal area only"],a:0,h:"Identical in every way.",e:"Congruent."},
{q:"The symbol ||| between triangles means…",o:["similar","congruent","parallel","perpendicular"],a:0,h:"Same shape, maybe a different size.",e:"Similar."},
{q:"A trapezium has…",o:["one pair of parallel sides","two pairs of parallel sides","no parallel sides","four equal sides"],a:0,h:"It's the least “regular” four-sided shape.",e:"One pair."},
{q:"Which tool draws arcs for constructions?",o:["Compass","Protractor","Calculator","Set square"],a:0,h:"It has a point and a pencil.",e:"A compass."},
{q:"The diagonals of a parallelogram…",o:["bisect each other","are always equal","are perpendicular","never meet"],a:0,h:"They cut each other in half.",e:"Bisect each other."}],
cq:[
{q:"How do you construct a 30° angle?",o:["Construct 60° and bisect it","Bisect 90°","Bisect 45°","Draw a straight line"],a:0,e:"60° ÷ 2 = 30°."},
{q:"A 1,8 m pole casts a 3 m shadow. At the same time, a tree casts a 15 m shadow. How tall is the tree? (similar triangles)",o:["9 m","25 m","5 m","13,2 m"],a:0,e:"15 ÷ 3 = 5; 1,8 × 5 = 9 m."},
{q:"Which is NOT enough to prove two triangles congruent?",o:["AAA","SSS","SAS","RHS"],a:0,e:"Equal angles alone don't fix the size."},
{q:"A rhombus has diagonals of 6 cm and 8 cm. How long is each side?",o:["5 cm","7 cm","10 cm","14 cm"],a:0,e:"Half-diagonals 3 and 4 form a right angle: √(9 + 16) = 5."},
{q:"Which quadrilateral is a parallelogram with equal diagonals that are NOT perpendicular?",o:["Rectangle (not a square)","Rhombus","Kite","Trapezium"],a:0,e:"A rectangle's diagonals are equal but meet at 90° only if it's a square."}]}
);
TOPICS.slice(-9).forEach(t=>TOPIC[t.id]=t);
