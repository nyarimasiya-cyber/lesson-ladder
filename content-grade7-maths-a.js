/* Grade 7 Mathematics, Terms 1–2 (Integers is in content-grade7.js). */
const G7S = "Numbers, operations & relationships", G7P = "Patterns, functions & algebra";
TOPICS.push(
{id:"g7-math-whole",grade:7,term:1,subject:"math",strand:G7S,title:"Whole numbers",
notes:`<h2>Place value</h2>
<p>Each digit's value depends on its place. In <b>4 725 863</b> the 7 is in the hundred thousands place, so its value is <b>700 000</b>. We write large numbers in groups of three with spaces: 4 725 863.</p>
<h2>Rounding</h2>
<p>Look at the digit to the right of the place you are rounding to. If it is 5 or more, round up; if it is less than 5, round down.</p>
<div class="ex"><b>Example</b>3 648 to the nearest 100: the tens digit is 4, so round down → <b>3 600</b></div>
<h2>Properties of operations</h2>
<ul><li><b>Commutative</b>: order doesn't matter for + and ×: 4 × 7 = 7 × 4.</li>
<li><b>Associative</b>: grouping doesn't matter for + and ×: (25 × 4) × 7 = 25 × (4 × 7).</li>
<li><b>Distributive</b>: 6 × (10 + 3) = 6 × 10 + 6 × 3 = 78.</li></ul>
<h2>Multiples, factors and primes</h2>
<ul><li><b>Multiples</b> of 4: 4, 8, 12, 16 … <b>Factors</b> of 12: 1, 2, 3, 4, 6, 12.</li>
<li>A <b>prime number</b> has exactly two factors, 1 and itself: 2, 3, 5, 7, 11, 13 … (1 is not prime.)</li>
<li><b>HCF</b> (highest common factor) of 12 and 18 is 6. <b>LCM</b> (lowest common multiple) of 4 and 6 is 12.</li>
<li>Prime factors: 20 = 2 × 2 × 5.</li></ul>
<h2>Divisibility rules</h2>
<div class="tbl"><table><tr><th>Divisible by</th><th>Rule</th></tr>
<tr><td>2</td><td>Last digit is even</td></tr><tr><td>3</td><td>Sum of digits is divisible by 3</td></tr>
<tr><td>4</td><td>Last two digits form a number divisible by 4</td></tr><tr><td>5</td><td>Last digit is 0 or 5</td></tr>
<tr><td>9</td><td>Sum of digits is divisible by 9</td></tr><tr><td>10</td><td>Last digit is 0</td></tr></table></div>
<div class="key">For word problems: underline what is asked, choose the operation, then check that your answer makes sense.</div>`,
qs:[
{q:"What is the value of the 7 in 4 725 863?",o:["7","7 000","70 000","700 000"],a:3,e:"The 7 is in the hundred thousands place."},
{q:"Round 3 648 to the nearest 100.",o:["3 600","3 700","3 650","4 000"],a:0,e:"The tens digit is 4 (less than 5), so round down."},
{q:"Which number is prime?",o:["9","13","15","21"],a:1,e:"13 has only two factors: 1 and 13."},
{q:"Which list shows all the factors of 12?",o:["1, 2, 3, 4, 6, 12","2, 4, 6, 8, 10, 12","1, 12","12, 24, 36"],a:0,e:"These are all the numbers that divide 12 exactly."},
{q:"What is the HCF of 12 and 18?",o:["2","3","6","36"],a:2,e:"6 is the biggest number that divides both."},
{q:"What is the LCM of 4 and 6?",o:["2","12","24","10"],a:1,e:"12 is the smallest number in both times tables."},
{q:"Which number is divisible by 3?",o:["470","471","472","475"],a:1,e:"4 + 7 + 1 = 12, which is divisible by 3."},
{q:"Calculate: 25 × 4 × 7",o:["700","175","2 800","107"],a:0,e:"25 × 4 = 100, and 100 × 7 = 700."},
{q:"6 × (10 + 3) = 6 × 10 + 6 × 3 shows which property?",o:["Commutative","Associative","Distributive","Prime"],a:2,e:"Multiplying over brackets is the distributive property."},
{q:"Calculate: 3 456 ÷ 12",o:["288","298","278","2 880"],a:0,e:"12 × 288 = 3 456."}],
pq:[
{q:"Round 4 372 to the nearest 10.",o:["4 370","4 380","4 300","4 400"],a:0,h:"Look at the units digit: 2. Is it 5 or more?",e:"2 is less than 5, so round down to 4 370."},
{q:"Which number is a multiple of 5?",o:["32","35","52","53"],a:1,h:"Multiples of 5 end in 0 or 5.",e:"35 ends in 5."},
{q:"Write 20 as a product of prime factors.",o:["4 × 5","2 × 10","2 × 2 × 5","1 × 20"],a:2,h:"Keep splitting until every factor is prime.",e:"20 = 2 × 2 × 5."},
{q:"Calculate: 125 × 8",o:["1 000","800","1 250","100"],a:0,h:"125 is one eighth of 1 000.",e:"125 × 8 = 1 000."},
{q:"Which number is divisible by 4?",o:["314","316","318","322"],a:1,h:"Check if the last two digits divide by 4.",e:"16 ÷ 4 = 4, so 316 is divisible by 4."}],
cq:[
{q:"What is the LCM of 6 and 8?",o:["2","48","24","14"],a:2,e:"Multiples of 8: 8, 16, 24. 24 is also a multiple of 6."},
{q:"Thabo shares 156 sweets equally among 12 friends. How many does each get?",o:["12","13","14","144"],a:1,e:"156 ÷ 12 = 13."},
{q:"What is the HCF of 24 and 36?",o:["6","12","4","72"],a:1,e:"12 divides both 24 and 36."},
{q:"A school bus carries 48 learners. How many buses are needed for 500 learners?",o:["10","11","12","9"],a:1,e:"500 ÷ 48 ≈ 10,4, so 11 buses are needed to fit everyone."},
{q:"Calculate: 23 × 47",o:["1 081","1 071","981","1 181"],a:0,e:"23 × 47 = 920 + 161 = 1 081."}]},

{id:"g7-math-fractions",grade:7,term:1,subject:"math",strand:G7S,title:"Common fractions and percentages",
notes:`<h2>Parts of a fraction</h2>
<p>In ¾ the <b>numerator</b> (3) is the number of parts we have; the <b>denominator</b> (4) is the number of equal parts in the whole.</p>
<h2>Equivalent fractions and simplifying</h2>
<ul><li>Multiply or divide the top and bottom by the same number: 3/4 = 9/12.</li>
<li>To <b>simplify</b>, divide both by their HCF: 12/18 = 2/3 (divide by 6).</li></ul>
<h2>Comparing fractions</h2>
<p>Write them with the same denominator. 3/5 = 9/15 and 2/3 = 10/15, so <b>2/3 is bigger</b>.</p>
<h2>Mixed numbers</h2>
<p>2⅓ = (2 × 3 + 1)/3 = <b>7/3</b>. And 11/4 = 2¾.</p>
<h2>Adding and subtracting</h2>
<p>Use a common denominator, then add or subtract the numerators.</p>
<div class="ex"><b>Example</b>½ + ⅓ = 3/6 + 2/6 = <b>5/6</b></div>
<h2>Multiplying</h2>
<p>Multiply top by top and bottom by bottom: 2/3 × 3/5 = 6/15 = <b>2/5</b>. “Of” means multiply: ¾ of 36 = 27.</p>
<h2>Percentages</h2>
<ul><li>Per cent means “out of 100”: 25% = 25/100 = ¼.</li>
<li>To find a percentage of an amount: 20% of R150 = 20/100 × 150 = <b>R30</b>.</li>
<li>To write a mark as a percentage: 18 out of 24 = 18/24 × 100 = <b>75%</b>.</li></ul>`,
qs:[
{q:"Simplify 12/18.",o:["6/9","2/3","3/4","4/6"],a:1,e:"Divide top and bottom by 6."},
{q:"Which fraction is equivalent to 3/4?",o:["6/12","9/12","3/8","4/3"],a:1,e:"3/4 × 3/3 = 9/12."},
{q:"Which is larger: 3/5 or 2/3?",o:["3/5","2/3","They are equal","You can't compare them"],a:1,e:"3/5 = 9/15 and 2/3 = 10/15."},
{q:"Calculate: 1/4 + 2/4",o:["3/8","3/4","2/4","1/2"],a:1,e:"Same denominator: add the numerators."},
{q:"Calculate: 1/2 + 1/3",o:["2/5","5/6","1/6","2/6"],a:1,e:"3/6 + 2/6 = 5/6."},
{q:"Write 2⅓ as an improper fraction.",o:["5/3","6/3","7/3","2/3"],a:2,e:"2 × 3 + 1 = 7, so 7/3."},
{q:"Calculate: 2/3 × 3/5",o:["2/5","5/8","6/8","1"],a:0,e:"6/15 simplifies to 2/5."},
{q:"What is ¾ of 36?",o:["9","27","24","12"],a:1,e:"36 ÷ 4 × 3 = 27."},
{q:"Write 25% as a common fraction.",o:["1/25","1/4","2/5","1/2"],a:1,e:"25/100 = 1/4."},
{q:"What is 20% of R150?",o:["R20","R30","R15","R130"],a:1,e:"20/100 × 150 = 30."}],
pq:[
{q:"Simplify 6/8.",o:["3/4","2/3","1/2","6/8 can't be simplified"],a:0,h:"What number divides both 6 and 8?",e:"Divide by 2: 3/4."},
{q:"Calculate: 5/6 − 1/6",o:["1/6","2/3","4/12","1"],a:1,h:"Subtract the numerators, then simplify.",e:"4/6 = 2/3."},
{q:"What is 1/5 of 40?",o:["5","8","10","200"],a:1,h:"Finding a fifth means dividing by 5.",e:"40 ÷ 5 = 8."},
{q:"What is 50% of 84?",o:["42","48","34","168"],a:0,h:"50% is the same as half.",e:"Half of 84 is 42."},
{q:"Write 11/4 as a mixed number.",o:["2¾","3¼","2¼","4 1/11"],a:0,h:"How many whole 4s fit into 11, and what is left?",e:"11 ÷ 4 = 2 remainder 3, so 2¾."}],
cq:[
{q:"Calculate: 3/4 − 1/3",o:["2/1","5/12","1/12","2/7"],a:1,e:"9/12 − 4/12 = 5/12."},
{q:"Calculate: 1½ + 2⅔",o:["3 1/6","4 1/6","3 5/6","4"],a:1,e:"1½ + 2⅔ = 3 + 3/6 + 4/6 = 3 + 7/6 = 4 1/6."},
{q:"A learner scores 18 out of 24. What is the percentage?",o:["18%","72%","75%","80%"],a:2,e:"18/24 = 3/4 = 75%."},
{q:"Which list is ordered from smallest to largest?",o:["1/2; 3/5; 2/3; 3/4","3/4; 2/3; 3/5; 1/2","3/5; 1/2; 3/4; 2/3","1/2; 2/3; 3/5; 3/4"],a:0,e:"As decimals: 0,5; 0,6; 0,67; 0,75."},
{q:"Calculate: 3 × 2/5",o:["6/15","1 1/5","5/6","3 2/5"],a:1,e:"3 × 2/5 = 6/5 = 1 1/5."}]},

{id:"g7-math-decimals",grade:7,term:1,subject:"math",strand:G7S,title:"Decimal fractions",
notes:`<h2>Place value after the comma</h2>
<p>In South Africa we use a decimal comma. In <b>3,045</b>: 0 tenths, 4 <b>hundredths</b>, 5 thousandths.</p>
<h2>Comparing decimals</h2>
<p>Compare digit by digit from the left. Add zeros to help: 0,5 = 0,500 is bigger than 0,450. So 0,5 &gt; 0,45 &gt; 0,405 &gt; 0,054.</p>
<h2>Converting</h2>
<ul><li>0,75 = 75/100 = ¾ = 75%</li><li>2/5 = 4/10 = 0,4</li><li>3/8 = 0,375 (divide 3 by 8)</li></ul>
<h2>Rounding</h2>
<p>4,678 rounded to 1 decimal place is <b>4,7</b> (the next digit, 7, is 5 or more).</p>
<h2>Adding and subtracting</h2>
<p>Line up the commas, fill gaps with zeros.</p>
<div class="ex"><b>Example</b>3,60 + 2,45 = <b>6,05</b> · 5,00 − 1,25 = <b>3,75</b></div>
<h2>Multiplying and dividing</h2>
<ul><li>× 10, 100, 1 000 moves the digits 1, 2 or 3 places left: 0,36 × 100 = 36.</li>
<li>To multiply decimals, multiply as whole numbers, then count the decimal places: 0,3 × 0,2 → 3 × 2 = 6, two decimal places → <b>0,06</b>.</li>
<li>To divide by a whole number, divide as usual and keep the comma in place: 7,5 ÷ 3 = 2,5.</li></ul>`,
qs:[
{q:"What is the value of the 4 in 3,045?",o:["4 tenths","4 hundredths","4 thousandths","4 units"],a:1,e:"The 4 is in the second place after the comma."},
{q:"Which is the largest?",o:["0,45","0,405","0,5","0,054"],a:2,e:"0,5 = 0,500, which is bigger than the others."},
{q:"Write 0,75 as a common fraction.",o:["7/5","3/4","75/10","1/75"],a:1,e:"75/100 = 3/4."},
{q:"Write 2/5 as a decimal.",o:["0,25","0,4","2,5","0,2"],a:1,e:"2/5 = 4/10 = 0,4."},
{q:"Calculate: 3,6 + 2,45",o:["5,81","6,05","6,5","3,85"],a:1,e:"3,60 + 2,45 = 6,05."},
{q:"Calculate: 5 − 1,25",o:["4,25","3,75","4,75","3,25"],a:1,e:"5,00 − 1,25 = 3,75."},
{q:"Calculate: 0,36 × 100",o:["3,6","36","360","0,0036"],a:1,e:"Move the digits two places left."},
{q:"Calculate: 0,3 × 0,2",o:["0,6","0,06","6","0,006"],a:1,e:"3 × 2 = 6, with two decimal places: 0,06."},
{q:"Round 4,678 to one decimal place.",o:["4,6","4,7","4,68","5"],a:1,e:"The hundredths digit is 7, so round up."},
{q:"Calculate: 7,5 ÷ 3",o:["2,5","25","0,25","2,05"],a:0,e:"7,5 ÷ 3 = 2,5."}],
pq:[
{q:"Write 0,7 as a fraction.",o:["7/100","7/10","1/7","70/10"],a:1,h:"The 7 is in the tenths place.",e:"0,7 = 7/10."},
{q:"Write 0,25 as a percentage.",o:["2,5%","25%","0,25%","250%"],a:1,h:"Multiply by 100.",e:"0,25 × 100 = 25%."},
{q:"Calculate: 4,3 × 10",o:["43","4,30","430","0,43"],a:0,h:"Multiplying by 10 moves the digits one place left.",e:"4,3 × 10 = 43."},
{q:"Which is smaller: 0,09 or 0,1?",o:["0,09","0,1","They are equal","Can't tell"],a:0,h:"Write 0,1 as 0,10 and compare.",e:"0,09 < 0,10."},
{q:"Calculate: 1,2 + 0,35",o:["1,37","1,55","4,7","0,47"],a:1,h:"Line up the commas: 1,20 + 0,35.",e:"1,20 + 0,35 = 1,55."}],
cq:[
{q:"Bread costs R18,50 and milk costs R24,95. What is the total?",o:["R42,45","R43,45","R43,35","R42,95"],a:1,e:"18,50 + 24,95 = 43,45."},
{q:"Calculate: 1,5 × 0,4",o:["6","0,6","0,06","60"],a:1,e:"15 × 4 = 60, with two decimal places: 0,60."},
{q:"Write 3/8 as a decimal.",o:["0,38","0,375","3,8","0,83"],a:1,e:"3 ÷ 8 = 0,375."},
{q:"Calculate: 12,6 ÷ 0,3",o:["4,2","42","420","0,42"],a:1,e:"Multiply both by 10: 126 ÷ 3 = 42."},
{q:"Which list is ordered from smallest to largest?",o:["0,305; 0,35; 0,53; 3,05","0,35; 0,305; 0,53; 3,05","3,05; 0,53; 0,35; 0,305","0,53; 0,35; 0,305; 3,05"],a:0,e:"0,305 < 0,350 < 0,530 < 3,050."}]},

{id:"g7-math-exponents",grade:7,term:2,subject:"math",strand:G7S,title:"Exponents",
notes:`<h2>What an exponent means</h2>
<p>An exponent shows repeated multiplication. In <b>2⁵</b>, 2 is the <b>base</b> and 5 is the <b>exponent</b>: 2 × 2 × 2 × 2 × 2 = 32.</p>
<h2>Squares and cubes</h2>
<div class="tbl"><table><tr><th>n</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr>
<tr><td>n²</td><td>1</td><td>4</td><td>9</td><td>16</td><td>25</td><td>36</td><td>49</td><td>64</td><td>81</td><td>100</td></tr>
<tr><td>n³</td><td>1</td><td>8</td><td>27</td><td>64</td><td>125</td><td>216</td><td>343</td><td>512</td><td>729</td><td>1 000</td></tr></table></div>
<h2>Roots</h2>
<ul><li>The <b>square root</b> undoes squaring: √81 = 9 because 9² = 81.</li>
<li>The <b>cube root</b> undoes cubing: ∛27 = 3 because 3³ = 27.</li></ul>
<h2>Powers of 10</h2>
<p>10² = 100, 10³ = 1 000. So 4 × 10³ + 5 × 10² = 4 000 + 500 = <b>4 500</b>.</p>
<h2>Order of operations</h2>
<p>Brackets first, then exponents (and roots), then × and ÷, then + and −.</p>
<div class="ex"><b>Example</b>(2 + 3)² = 5² = <b>25</b>, but 2 + 3² = 2 + 9 = <b>11</b></div>`,
qs:[
{q:"What is 2⁵?",o:["10","25","32","7"],a:2,e:"2 × 2 × 2 × 2 × 2 = 32."},
{q:"In 7³, what is the base?",o:["3","7","21","343"],a:1,e:"The base is the number being multiplied: 7."},
{q:"What is 5²?",o:["10","25","7","52"],a:1,e:"5 × 5 = 25."},
{q:"What is 4³?",o:["12","16","64","43"],a:2,e:"4 × 4 × 4 = 64."},
{q:"What is √81?",o:["9","8","40,5","27"],a:0,e:"9 × 9 = 81."},
{q:"What is ∛27?",o:["9","3","13,5","81"],a:1,e:"3 × 3 × 3 = 27."},
{q:"Write 3 × 3 × 3 × 3 in exponential form.",o:["3⁴","4³","3 × 4","12"],a:0,e:"3 multiplied 4 times is 3⁴."},
{q:"What is 10³?",o:["30","100","1 000","10 000"],a:2,e:"10 × 10 × 10 = 1 000."},
{q:"Calculate: 2³ + 3²",o:["17","12","36","13"],a:0,e:"8 + 9 = 17."},
{q:"Which is greater: 2⁴ or 4²?",o:["2⁴","4²","They are equal","You can't tell"],a:2,e:"Both equal 16."}],
pq:[
{q:"What is 6²?",o:["12","36","62","8"],a:1,h:"6² means 6 × 6.",e:"6 × 6 = 36."},
{q:"What is √49?",o:["7","24,5","49","9"],a:0,h:"Which number times itself gives 49?",e:"7 × 7 = 49."},
{q:"What is 1⁵?",o:["5","1","15","0"],a:1,h:"1 times itself any number of times is…",e:"1 × 1 × 1 × 1 × 1 = 1."},
{q:"Write 5 × 5 in exponential form.",o:["5²","2⁵","10","5 + 5"],a:0,h:"Base 5, used twice.",e:"5 × 5 = 5²."},
{q:"What is 10²?",o:["20","100","1 000","12"],a:1,h:"10 × 10.",e:"10 × 10 = 100."}],
cq:[
{q:"Calculate: (2 + 3)²",o:["13","25","10","11"],a:1,e:"Brackets first: 5² = 25."},
{q:"Calculate: 3² × 2³",o:["72","36","30","54"],a:0,e:"9 × 8 = 72."},
{q:"Calculate: √(36 + 64)",o:["14","10","100","50"],a:1,e:"√100 = 10. (Note: √36 + √64 = 14, which is different.)"},
{q:"Which number is a perfect cube?",o:["100","125","150","81"],a:1,e:"5³ = 125."},
{q:"Calculate: 4 × 10³ + 5 × 10²",o:["4 500","45","450","40 500"],a:0,e:"4 000 + 500 = 4 500."}]},

{id:"g7-math-patterns",grade:7,term:2,subject:"math",strand:G7P,title:"Numeric and geometric patterns",
notes:`<h2>Number patterns</h2>
<p>A pattern (sequence) follows a rule. Each number is a <b>term</b>, and its <b>position</b> is 1st, 2nd, 3rd …</p>
<ul><li><b>Constant difference</b>: add or subtract the same number each time: 4, 7, 10, 13 … (add 3).</li>
<li><b>Constant ratio</b>: multiply by the same number each time: 3, 6, 12, 24 … (× 2).</li>
<li>Other patterns: square numbers 1, 4, 9, 16 …; the gap grows by one: 1, 2, 4, 7, 11 …</li></ul>
<h2>Rules using the position</h2>
<p>A rule like <b>term = 3 × position + 1</b> lets you find any term without listing them all.</p>
<div class="ex"><b>Example</b>For 7, 9, 11, 13 … the difference is 2, so start with 2 × position. Position 1: 2 × 1 = 2, but the term is 7, so add 5. Rule: <b>term = 2n + 5</b>. Check: 2 × 4 + 5 = 13 ✓</div>
<h2>Geometric patterns</h2>
<p>Shapes made with matchsticks or dots also grow by a rule. Squares in a row: 4, 7, 10, 13 matchsticks … The first square needs 4, and each new square adds 3. Rule: <b>3n + 1</b>.</p>
<div class="key">To find a rule: work out the difference, multiply the position by it, then adjust with + or −.</div>`,
qs:[
{q:"What is the next term? 4; 7; 10; 13; …",o:["15","16","17","26"],a:1,e:"Add 3 each time: 13 + 3 = 16."},
{q:"What is the next term? 3; 6; 12; 24; …",o:["30","36","48","27"],a:2,e:"Multiply by 2: 24 × 2 = 48."},
{q:"Which rule gives 5; 10; 15; 20; …?",o:["Position + 5","Position × 5","Position × 10","Position + 4"],a:1,e:"1 × 5 = 5, 2 × 5 = 10, and so on."},
{q:"What is the next term? 50; 44; 38; 32; …",o:["28","26","30","24"],a:1,e:"Subtract 6: 32 − 6 = 26."},
{q:"Find the missing term: 2; 5; __; 11; 14",o:["7","8","9","10"],a:1,e:"Add 3: 5 + 3 = 8."},
{q:"The rule is term = 3n + 1. What is the 10th term?",o:["13","30","31","40"],a:2,e:"3 × 10 + 1 = 31."},
{q:"What is the next term? 1; 4; 9; 16; …",o:["20","25","23","32"],a:1,e:"These are square numbers: 5² = 25."},
{q:"1 square uses 4 matchsticks, 2 squares in a row use 7, 3 squares use 10. How many for 4 squares?",o:["12","13","14","16"],a:1,e:"Each new square adds 3: 10 + 3 = 13."},
{q:"Which rule gives 7; 9; 11; 13; …?",o:["2n + 5","2n + 7","n + 6","5n + 2"],a:0,e:"2 × 1 + 5 = 7, 2 × 2 + 5 = 9 ✓."},
{q:"What is the next term? 1; 1; 2; 3; 5; 8; …",o:["11","12","13","16"],a:2,e:"Each term is the sum of the two before it: 5 + 8 = 13."}],
pq:[
{q:"What is the next term? 2; 4; 6; 8; …",o:["9","10","12","16"],a:1,h:"How much is added each time?",e:"Add 2: 10."},
{q:"What is the next term? 100; 90; 80; …",o:["60","70","75","90"],a:1,h:"The numbers go down by the same amount.",e:"Subtract 10: 70."},
{q:"What is the next term? 1; 3; 9; 27; …",o:["30","54","81","36"],a:2,h:"Each term is multiplied by the same number.",e:"Multiply by 3: 81."},
{q:"What is the constant difference in 5; 11; 17; 23?",o:["5","6","11","7"],a:1,h:"Subtract one term from the next.",e:"11 − 5 = 6."},
{q:"What is the next term? 1; 2; 4; 7; 11; …",o:["15","16","14","22"],a:1,h:"Look at the gaps: +1, +2, +3, +4 …",e:"Add 5: 16."}],
cq:[
{q:"The rule is term = 4n − 1. What is the 20th term?",o:["79","80","81","19"],a:0,e:"4 × 20 − 1 = 79."},
{q:"Triangles in a row use 3, 5, 7 … matchsticks (rule 2n + 1). How many for 10 triangles?",o:["20","21","30","19"],a:1,e:"2 × 10 + 1 = 21."},
{q:"In the pattern 5; 10; 15; 20; … which position has the value 50?",o:["5th","10th","50th","45th"],a:1,e:"Term = 5n, so 5n = 50 and n = 10."},
{q:"The pattern 2; 6; 18; 54; … multiplies by 3. What is the 6th term?",o:["162","486","216","108"],a:1,e:"54 × 3 = 162 (5th), 162 × 3 = 486 (6th)."},
{q:"The rule is term = 3n + 2. Which position gives 47?",o:["15th","16th","45th","It is not in the pattern"],a:0,e:"3n + 2 = 47, so 3n = 45 and n = 15."}]},

{id:"g7-math-functions",grade:7,term:2,subject:"math",strand:G7P,title:"Functions and relationships",
notes:`<h2>Input, rule, output</h2>
<p>A function takes an <b>input</b>, applies a <b>rule</b>, and gives an <b>output</b>.</p>
<div class="ex"><b>Flow diagram</b>input 4 → × 3 → + 2 → output <b>14</b></div>
<h2>The same relationship in different forms</h2>
<ul><li><b>Words</b>: multiply the input by 2 and add 3.</li>
<li><b>Formula</b>: y = 2x + 3</li>
<li><b>Table</b>:<div class="tbl"><table><tr><th>x</th><td>1</td><td>2</td><td>3</td><td>6</td></tr><tr><th>y</th><td>5</td><td>7</td><td>9</td><td>15</td></tr></table></div></li></ul>
<h2>Finding the rule from a table</h2>
<p>Look at how y changes when x goes up by 1. If y goes up by 2 each time, the rule starts with 2x. Then adjust: for x = 1, 2 × 1 = 2, but y = 3, so add 1 → <b>y = 2x + 1</b>.</p>
<h2>Working backwards</h2>
<p>To find the input from an output, do the opposite operations in reverse order.</p>
<div class="ex"><b>Example</b>y = 3x − 4 and y = 11: add 4 → 15, divide by 3 → <b>x = 5</b></div>
<h2>Real-life formulas</h2>
<p>A taxi charges R20 plus R12 per km: <b>C = 12k + 20</b>. For 5 km: 12 × 5 + 20 = <b>R80</b>.</p>`,
qs:[
{q:"The rule is × 3 then + 2. What is the output for input 4?",o:["14","18","9","10"],a:0,e:"4 × 3 = 12, 12 + 2 = 14."},
{q:"Input 5 gives output 20, and input 6 gives 24. What is the rule?",o:["+ 15","× 4","× 5","+ 18"],a:1,e:"5 × 4 = 20 and 6 × 4 = 24."},
{q:"If y = 2x + 3, what is y when x = 6?",o:["11","15","12","18"],a:1,e:"2 × 6 + 3 = 15."},
{q:"The rule is + 7 and the output is 15. What was the input?",o:["22","8","7","105"],a:1,e:"15 − 7 = 8."},
{q:"The rule is × 2 then − 1. What is the output for input 10?",o:["19","20","18","21"],a:0,e:"10 × 2 = 20, 20 − 1 = 19."},
{q:"x: 1, 2, 3 and y: 5, 10, 15. Which formula fits?",o:["y = x + 4","y = 5x","y = x + 5","y = 10x"],a:1,e:"Each y is 5 times x."},
{q:"x: 1, 2, 3 and y: 3, 5, 7. Which formula fits?",o:["y = 2x + 1","y = x + 2","y = 3x","y = 2x + 3"],a:0,e:"2 × 1 + 1 = 3, 2 × 2 + 1 = 5 ✓."},
{q:"If y = 3x − 4 and y = 11, what is x?",o:["5","29","7","3"],a:0,e:"11 + 4 = 15, 15 ÷ 3 = 5."},
{q:"A taxi charges R20 plus R12 per km. What does a 5 km trip cost?",o:["R60","R80","R32","R100"],a:1,e:"12 × 5 + 20 = 80."},
{q:"Which words describe y = x + 5?",o:["Add 5 to the input","Multiply the input by 5","Subtract 5 from the input","Divide the input by 5"],a:0,e:"x + 5 means add 5 to x."}],
pq:[
{q:"The rule is + 4. What is the output for input 9?",o:["13","36","5","94"],a:0,h:"Add 4 to 9.",e:"9 + 4 = 13."},
{q:"The rule is × 5. What is the output for input 3?",o:["8","15","53","35"],a:1,h:"Multiply 3 by 5.",e:"3 × 5 = 15."},
{q:"If y = x − 2, what is y when x = 10?",o:["12","8","20","5"],a:1,h:"Replace x with 10.",e:"10 − 2 = 8."},
{q:"The rule is × 2 and the output is 18. What was the input?",o:["36","9","16","20"],a:1,h:"Do the opposite of × 2.",e:"18 ÷ 2 = 9."},
{q:"Inputs 1, 2, 3 give outputs 6, 7, 8. What is the rule?",o:["× 6","+ 5","+ 6","× 5"],a:1,h:"Subtract the input from the output each time.",e:"1 + 5 = 6, 2 + 5 = 7."}],
cq:[
{q:"If y = 4x − 3, what is y when x = 0?",o:["−3","3","1","0"],a:0,e:"4 × 0 − 3 = −3."},
{q:"A taxi charges R15 to start plus R8 per km. Which formula gives the cost C for k km?",o:["C = 15k + 8","C = 8k + 15","C = 23k","C = 8 + k"],a:1,e:"R8 for each km plus a fixed R15."},
{q:"Using C = 8k + 15, what does a 10 km trip cost?",o:["R95","R80","R105","R158"],a:0,e:"8 × 10 + 15 = 95."},
{q:"The rule is ÷ 2 then + 3. What is the output for input 14?",o:["10","8,5","7","17"],a:0,e:"14 ÷ 2 = 7, 7 + 3 = 10."},
{q:"x: 2, 4, 6 and y: 7, 13, 19. Which formula fits?",o:["y = 3x + 1","y = 2x + 3","y = x + 5","y = 3x − 1"],a:0,e:"3 × 2 + 1 = 7, 3 × 4 + 1 = 13 ✓."}]}
);
TOPICS.slice(-6).forEach(t=>TOPIC[t.id]=t);
