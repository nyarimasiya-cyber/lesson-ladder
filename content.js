/* Lesson Ladder content. To add a topic, copy one block inside TOPICS and change it. */
/* ---------- CAPS content: Grade 8 & 9 ---------- */
const SUBJECTS = {
  math:{name:"Mathematics"}, ns:{name:"Natural Sciences"},
  eng:{name:"English Home Language"}, afr:{name:"Afrikaans First Additional Language"},
  his:{name:"Social Sciences: History"}, geo:{name:"Social Sciences: Geography"}, lo:{name:"Life Orientation"}
};
const TOPICS = [
/* ===== GRADE 8 ===== */
{id:"g8-math-algebra",grade:8,subject:"math",strand:"Patterns, functions & algebra",title:"Algebraic expressions & equations",
notes:`<h2>The language of algebra</h2>
<p>Algebra uses letters (<b>variables</b>) to stand for numbers we don't know yet or that can change.</p>
<ul><li>A <b>term</b> is a number, a variable, or numbers and variables multiplied together: <i>5x</i>, <i>−3</i>, <i>4ab</i>.</li>
<li>An <b>expression</b> is terms joined by + or −: <i>5x² − 3x + 7</i> has three terms.</li>
<li>The <b>coefficient</b> is the number in front of the variable. In <i>−3x</i> the coefficient is <b>−3</b> (the sign belongs to it).</li>
<li>A <b>constant</b> is a term with no variable, like <i>+7</i>.</li></ul>
<h2>Like terms</h2>
<p>Like terms have exactly the same variables with the same exponents. Only like terms can be added or subtracted.</p>
<div class="ex"><b>Example</b>3x + 5y − x + 2y = (3x − x) + (5y + 2y) = <b>2x + 7y</b></div>
<p><i>3x</i> and <i>3x²</i> are <b>not</b> like terms.</p>
<h2>Substitution</h2>
<p>Replace the variable with its value, then follow BODMAS. Put negative numbers in brackets.</p>
<div class="ex"><b>Example</b>If a = −2: a² + 3a = (−2)² + 3(−2) = 4 − 6 = <b>−2</b></div>
<h2>Removing brackets</h2>
<p>Multiply every term inside the bracket by the term outside: 2(a + 4) = 2a + 8.</p>
<h2>Solving equations</h2>
<p>An equation is balanced like a scale. Do the same operation to both sides to get the variable alone.</p>
<div class="ex"><b>Example</b>3x − 5 = 16 → add 5: 3x = 21 → divide by 3: <b>x = 7</b></div>
<div class="key">Always check: put your answer back into the original equation. 3(7) − 5 = 16 ✓</div>`,
qs:[
{q:"In the expression 5x² − 3x + 7, what is the coefficient of x?",o:["5","3","−3","7"],a:2,e:"The coefficient is the number in front of x, including its sign: −3."},
{q:"How many terms are there in 4a + 3b − 2?",o:["2","3","4","9"],a:1,e:"Terms are separated by + and − signs: 4a, 3b and −2."},
{q:"Simplify: 3x + 5y − x + 2y",o:["2x + 7y","4x + 7y","9xy","2x + 3y"],a:0,e:"Group like terms: 3x − x = 2x and 5y + 2y = 7y."},
{q:"If x = 3, what is the value of 2x²?",o:["12","36","18","9"],a:2,e:"Square first: 3² = 9, then multiply by 2 to get 18."},
{q:"Solve for x: x + 9 = 15",o:["24","6","−6","9"],a:1,e:"Subtract 9 from both sides: x = 6."},
{q:"Solve for x: 4x = 28",o:["7","24","32","112"],a:0,e:"Divide both sides by 4: x = 7."},
{q:"Solve for x: 3x − 5 = 16",o:["11/3","3","7","21"],a:2,e:"Add 5: 3x = 21. Divide by 3: x = 7."},
{q:"Remove the brackets: 2(a + 4)",o:["2a + 4","a + 8","2a + 8","2a + 6"],a:2,e:"Multiply both terms by 2: 2 × a + 2 × 4 = 2a + 8."},
{q:"If a = −2, what is a² + 3a?",o:["10","−10","2","−2"],a:3,e:"(−2)² = 4 and 3(−2) = −6, so 4 − 6 = −2."},
{q:"Solve for x: x ÷ 5 = 4",o:["20","9","0,8","1"],a:0,e:"Multiply both sides by 5: x = 20."}]},

{id:"g8-ns-heat",grade:8,subject:"ns",strand:"Energy & change",title:"Heat transfer",
notes:`<h2>Heat and temperature</h2>
<ul><li><b>Heat</b> is energy that moves from a hotter object to a colder one.</li>
<li><b>Temperature</b> tells us how hot or cold something is. We measure it with a thermometer in degrees Celsius (°C).</li>
<li>Heat always flows from <b>hot to cold</b> until both objects reach the same temperature.</li></ul>
<h2>Three ways heat moves</h2>
<div class="tbl"><table><tr><th>Method</th><th>How it works</th><th>Where it happens</th><th>Everyday example</th></tr>
<tr><td><b>Conduction</b></td><td>Particles vibrate and pass energy to particles next to them through contact</td><td>Mainly solids</td><td>A metal spoon in hot tea gets hot</td></tr>
<tr><td><b>Convection</b></td><td>Warm fluid expands, becomes less dense and rises; cooler fluid sinks to take its place, forming a current</td><td>Liquids and gases</td><td>Warm air rising from a heater; water circulating in a pot</td></tr>
<tr><td><b>Radiation</b></td><td>Energy travels as waves; needs no particles</td><td>Through space or air</td><td>The Sun warming the Earth; feeling heat from a braai fire</td></tr></table></div>
<h2>Conductors and insulators</h2>
<ul><li><b>Conductors</b> let heat pass through easily: metals like copper, aluminium and iron.</li>
<li><b>Insulators</b> slow heat transfer: wood, plastic, wool, polystyrene and trapped air.</li>
<li>Pot handles are plastic or wood because these are insulators, so you don't burn your hand.</li></ul>
<h2>Surfaces and radiation</h2>
<p><b>Dull, dark</b> surfaces absorb and give off radiant heat best. <b>Shiny, light</b> surfaces reflect it. That's why solar water heater panels are black and emergency blankets are shiny.</p>
<div class="key">Ceiling insulation and double-walled flasks work by trapping air or creating a vacuum, which reduces conduction and convection.</div>`,
qs:[
{q:"Heat moving through a metal rod by particles passing energy to their neighbours is called…",o:["convection","radiation","conduction","evaporation"],a:2,e:"Conduction transfers heat through contact between particles, mostly in solids."},
{q:"Warm air rising from a heater and cool air sinking is an example of…",o:["conduction","convection","radiation","insulation"],a:1,e:"Convection currents form in liquids and gases as warm fluid rises and cool fluid sinks."},
{q:"How does the Sun's heat reach the Earth?",o:["Conduction","Convection","Radiation","Reflection"],a:2,e:"Space has almost no particles, so only radiation can carry heat across it."},
{q:"Which material is the best conductor of heat?",o:["Wood","Copper","Plastic","Wool"],a:1,e:"Metals such as copper are good conductors. The others are insulators."},
{q:"Why are pot handles often made of plastic?",o:["Plastic is a good conductor","Plastic is an insulator","Plastic reflects radiation","Plastic is cheaper than metal"],a:1,e:"Plastic slows heat transfer, so the handle stays cool enough to hold."},
{q:"In which direction does heat always flow?",o:["From cold to hot","From hot to cold","Upwards only","From big objects to small objects"],a:1,e:"Heat moves from the hotter object to the colder one until they reach the same temperature."},
{q:"Convection can take place in…",o:["solids only","liquids and gases","a vacuum","metals only"],a:1,e:"Convection needs particles that can move, so it happens in fluids: liquids and gases."},
{q:"Which surface absorbs radiant heat best?",o:["Shiny silver","Dull black","Glossy white","Mirror glass"],a:1,e:"Dull, dark surfaces are the best absorbers of radiation."},
{q:"Which instrument and unit do we use to measure temperature?",o:["Thermometer, °C","Barometer, hPa","Ammeter, A","Ruler, cm"],a:0,e:"A thermometer measures temperature, usually in degrees Celsius."},
{q:"Ceiling insulation keeps a house warm in winter mainly because it…",o:["produces heat","traps air, which is a poor conductor","reflects sunlight into the house","conducts heat into the roof"],a:1,e:"Trapped air is an insulator, so less heat escapes through the ceiling."}]},

{id:"g8-eng-grammar",grade:8,subject:"eng",strand:"Language structures & conventions",title:"Parts of speech & sentence types",
notes:`<h2>Parts of speech</h2>
<div class="tbl"><table><tr><th>Part</th><th>Job</th><th>Examples</th></tr>
<tr><td><b>Noun</b></td><td>Names a person, place, thing or idea</td><td>Common: <i>school</i>. Proper: <i>Durban</i>. Collective: <i>a swarm</i> of bees. Abstract: <i>courage</i>, <i>joy</i></td></tr>
<tr><td><b>Pronoun</b></td><td>Replaces a noun</td><td>he, she, they, it, her, them</td></tr>
<tr><td><b>Verb</b></td><td>Shows an action or state</td><td>run, write, is, seem</td></tr>
<tr><td><b>Adjective</b></td><td>Describes a noun</td><td>a <i>tall</i> tree, <i>three</i> books</td></tr>
<tr><td><b>Adverb</b></td><td>Describes a verb, adjective or another adverb (how, when, where)</td><td>sang <i>loudly</i>, arrived <i>yesterday</i></td></tr>
<tr><td><b>Preposition</b></td><td>Shows position or relationship</td><td>under, on, between, after</td></tr>
<tr><td><b>Conjunction</b></td><td>Joins words or clauses</td><td>and, but, or, because, although</td></tr></table></div>
<h2>Degrees of comparison</h2>
<p>Adjectives change to compare: tall → taller → tallest. Some are irregular: good → <b>better</b> → best; bad → worse → worst.</p>
<h2>Sentence types</h2>
<ul><li><b>Simple</b>: one main clause. <i>Lerato reads every night.</i></li>
<li><b>Compound</b>: two main clauses joined by and, but or or. <i>Thabo cooked and Lerato washed the dishes.</i></li>
<li><b>Complex</b>: a main clause plus a dependent clause that cannot stand alone. <i>Although it rained, we played soccer.</i></li></ul>
<h2>Tense</h2>
<p>Present: <i>The learners write the test.</i> Past: <i>The learners <b>wrote</b> the test.</i> Future: <i>The learners will write the test.</i></p>
<div class="key">Tip: find the verb first. Then ask “who or what?” to find the subject.</div>`,
qs:[
{q:"In “a swarm of bees”, the word “swarm” is a…",o:["proper noun","collective noun","verb","adjective"],a:1,e:"A collective noun names a group: a swarm of bees, a team of players."},
{q:"Which word is an abstract noun?",o:["table","Johannesburg","courage","teacher"],a:2,e:"Abstract nouns name ideas or feelings you can't touch, like courage."},
{q:"In “She sang loudly”, the word “loudly” is an…",o:["adjective","adverb","pronoun","conjunction"],a:1,e:"“Loudly” tells us how she sang, so it describes the verb. It is an adverb."},
{q:"Find the preposition: “The cat hid under the table.”",o:["cat","hid","under","table"],a:2,e:"“Under” shows the position of the cat in relation to the table."},
{q:"Which word is the conjunction in: “I was tired, but I finished my homework.”?",o:["tired","but","finished","my"],a:1,e:"“But” joins the two clauses."},
{q:"Which is a compound sentence?",o:["Thabo cooked supper.","Thabo cooked and Lerato washed the dishes.","Because he was hungry, Thabo cooked.","Cooking supper."],a:1,e:"Two main clauses joined by “and” make a compound sentence."},
{q:"Which is a complex sentence?",o:["We played soccer.","It rained and we played.","Although it rained, we played soccer.","Rain!"],a:2,e:"“Although it rained” is a dependent clause attached to a main clause."},
{q:"Find the pronoun: “Give the book to her.”",o:["Give","book","to","her"],a:3,e:"“Her” replaces the name of a person."},
{q:"What is the comparative form of “good”?",o:["gooder","more good","better","best"],a:2,e:"“Good” is irregular: good, better, best."},
{q:"Change to the past tense: “The learners write the test.”",o:["The learners writed the test.","The learners wrote the test.","The learners will write the test.","The learners written the test."],a:1,e:"“Write” is irregular. Its past tense is “wrote”."}]},

{id:"g8-geo-maps",grade:8,subject:"geo",strand:"Geography: map skills",title:"Maps & globes: latitude, longitude and time",
notes:`<h2>Lines on the globe</h2>
<ul><li><b>Lines of latitude</b> run east–west around the globe. They measure how far north or south a place is from the <b>Equator (0°)</b>, up to 90°N or 90°S.</li>
<li><b>Lines of longitude</b> (meridians) run from pole to pole. They measure how far east or west a place is from the <b>Prime Meridian (0°)</b>, which passes through Greenwich in London, up to 180°.</li>
<li>Important lines of latitude: Tropic of Cancer (23,5°N), <b>Tropic of Capricorn (23,5°S)</b>, which passes through Limpopo, the Arctic Circle and the Antarctic Circle.</li></ul>
<h2>Hemispheres</h2>
<p>The Equator splits Earth into the Northern and Southern Hemispheres. The Prime Meridian splits it into the Eastern and Western Hemispheres. South Africa lies in the <b>Southern and Eastern</b> Hemispheres.</p>
<h2>Giving a position</h2>
<p>Write latitude first, then longitude. Cape Town is roughly <b>34°S 18°E</b>. Johannesburg is roughly 26°S 28°E.</p>
<h2>Time zones</h2>
<ul><li>Earth turns 360° in 24 hours, so every <b>15° of longitude = 1 hour</b>.</li>
<li>Places to the <b>east</b> of Greenwich are <b>ahead</b> in time; places to the west are behind.</li>
<li>South African Standard Time uses 30°E, so we are <b>2 hours ahead</b> of Greenwich.</li>
<li>The <b>International Date Line</b> roughly follows 180°. Crossing it changes the date by one day.</li></ul>
<div class="ex"><b>Example</b>It is 12:00 at Greenwich. At 45°E: 45 ÷ 15 = 3 hours ahead, so it is <b>15:00</b>.</div>
<h2>Globes and flat maps</h2>
<p>A globe shows shapes and sizes accurately because it is round like Earth. A flat map always distorts something. The Mercator projection, for example, makes Greenland and areas near the poles look much bigger than they are.</p>`,
qs:[
{q:"What is the latitude of the Equator?",o:["0°","90°N","23,5°S","180°"],a:0,e:"The Equator is the starting line for latitude: 0°."},
{q:"The Prime Meridian passes through…",o:["Cape Town","Greenwich, London","the North Pole only","the Equator only"],a:1,e:"The Prime Meridian (0° longitude) runs through Greenwich in London."},
{q:"Lines of latitude…",o:["run from pole to pole","run east–west and measure distance north or south","measure time only","are all the same length as meridians"],a:1,e:"Latitude lines run east–west and measure how far north or south of the Equator a place is."},
{q:"South Africa lies in which hemispheres?",o:["Northern and Eastern","Southern and Western","Southern and Eastern","Northern and Western"],a:2,e:"South Africa is south of the Equator and east of the Prime Meridian."},
{q:"How many degrees of longitude equal one hour of time?",o:["10°","15°","24°","30°"],a:1,e:"360° ÷ 24 hours = 15° per hour."},
{q:"It is 12:00 at Greenwich. What time is it at 30°E?",o:["10:00","12:30","14:00","18:00"],a:2,e:"30 ÷ 15 = 2 hours. East is ahead, so 12:00 + 2 = 14:00."},
{q:"Which is the closest position for Cape Town?",o:["34°N 18°W","34°S 18°E","18°S 34°E","26°S 28°E"],a:1,e:"Cape Town is about 34° south and 18° east. (26°S 28°E is near Johannesburg.)"},
{q:"The International Date Line roughly follows which line of longitude?",o:["0°","90°E","180°","23,5°"],a:2,e:"The Date Line is roughly opposite the Prime Meridian, at 180°."},
{q:"Which important line of latitude passes through Limpopo?",o:["The Equator","Tropic of Cancer","Tropic of Capricorn","Antarctic Circle"],a:2,e:"The Tropic of Capricorn (23,5°S) crosses northern South Africa."},
{q:"Why does the Mercator map make Greenland look huge?",o:["Greenland is bigger than Africa","Flat maps distort areas near the poles","Globes are inaccurate","The map uses a small scale"],a:1,e:"Turning a round Earth into a flat map stretches areas near the poles."}]},

/* ===== GRADE 9 ===== */
{id:"g9-math-factor",grade:9,subject:"math",strand:"Patterns, functions & algebra",title:"Algebraic products & factorising",
notes:`<h2>Multiplying out (products)</h2>
<ul><li><b>Monomial × binomial</b>: multiply each term. 3x(2x − 5) = 6x² − 15x</li>
<li><b>Binomial × binomial</b>: multiply every term in the first bracket by every term in the second (First, Outer, Inner, Last).</li></ul>
<div class="ex"><b>Example</b>(x + 3)(x + 4) = x² + 4x + 3x + 12 = <b>x² + 7x + 12</b></div>
<ul><li><b>Square of a binomial</b>: (a + b)² = a² + 2ab + b² and (a − b)² = a² − 2ab + b². So (x − 5)² = x² − 10x + 25. It is <b>not</b> x² + 25.</li>
<li><b>Sum × difference</b>: (a + b)(a − b) = a² − b². So (2x + 1)(2x − 1) = 4x² − 1.</li></ul>
<h2>Factorising: the reverse</h2>
<p>Always take out the <b>highest common factor (HCF)</b> first.</p>
<div class="ex"><b>Example</b>12x²y and 18xy²: HCF of 12 and 18 is 6, common variables x and y, so HCF = <b>6xy</b></div>
<ul><li><b>Common factor</b>: 6a + 9 = 3(2a + 3)</li>
<li><b>Difference of two squares</b>: x² − 49 = (x − 7)(x + 7)</li>
<li><b>Trinomials x² + bx + c</b>: find two numbers that <b>multiply to c</b> and <b>add to b</b>.</li></ul>
<div class="ex"><b>Example</b>x² − x − 12: numbers that multiply to −12 and add to −1 are −4 and 3, so <b>(x − 4)(x + 3)</b></div>
<div class="key">Factorise fully: 2x² − 18 = 2(x² − 9) = 2(x − 3)(x + 3). Check by multiplying back out.</div>`,
qs:[
{q:"Expand: 3x(2x − 5)",o:["6x − 15x","6x² − 15x","5x² − 15","6x² − 5"],a:1,e:"3x × 2x = 6x² and 3x × (−5) = −15x."},
{q:"Expand: (x + 3)(x + 4)",o:["x² + 12","x² + 7x + 7","x² + 7x + 12","x² + 12x + 7"],a:2,e:"x² + 4x + 3x + 12 = x² + 7x + 12."},
{q:"Expand: (x − 5)²",o:["x² − 25","x² + 25","x² − 10x + 25","x² − 10x − 25"],a:2,e:"(a − b)² = a² − 2ab + b², so x² − 10x + 25."},
{q:"Expand: (2x + 1)(2x − 1)",o:["4x² − 1","4x² + 1","4x² − 4x − 1","2x² − 1"],a:0,e:"Sum × difference gives a² − b²: (2x)² − 1² = 4x² − 1."},
{q:"Factorise: 6a + 9",o:["6(a + 9)","3(2a + 3)","3(2a + 9)","9(a + 1)"],a:1,e:"The HCF of 6 and 9 is 3."},
{q:"Factorise: x² − 49",o:["(x − 7)²","(x + 7)²","(x − 7)(x + 7)","x(x − 49)"],a:2,e:"Difference of two squares: a² − b² = (a − b)(a + b)."},
{q:"Factorise: x² + 5x + 6",o:["(x + 1)(x + 6)","(x + 2)(x + 3)","(x − 2)(x − 3)","(x + 5)(x + 1)"],a:1,e:"2 × 3 = 6 and 2 + 3 = 5."},
{q:"Factorise: x² − x − 12",o:["(x − 4)(x + 3)","(x + 4)(x − 3)","(x − 6)(x + 2)","(x − 12)(x + 1)"],a:0,e:"−4 × 3 = −12 and −4 + 3 = −1."},
{q:"What is the HCF of 12x²y and 18xy²?",o:["6x²y²","3xy","6xy","36xy"],a:2,e:"HCF of 12 and 18 is 6; the lowest power of x and of y is 1, so 6xy."},
{q:"Factorise fully: 2x² − 18",o:["2(x² − 9)","2(x − 3)(x + 3)","(2x − 6)(x + 3)","2(x − 9)(x + 1)"],a:1,e:"Take out 2, then x² − 9 is a difference of squares. Answer A is not fully factorised."}]},

{id:"g9-ns-circuits",grade:9,subject:"ns",strand:"Energy & change",title:"Electric circuits",
notes:`<h2>What a circuit needs</h2>
<p>A circuit is a complete path for electric current. It needs an energy source (cell or battery), conducting wires, and a load such as a bulb or resistor. A switch opens or closes the path.</p>
<h2>Key quantities</h2>
<div class="tbl"><table><tr><th>Quantity</th><th>Meaning</th><th>Unit</th><th>Measured with</th></tr>
<tr><td><b>Current (I)</b></td><td>Rate of flow of charge</td><td>ampere (A)</td><td>Ammeter, connected in <b>series</b></td></tr>
<tr><td><b>Potential difference (V)</b></td><td>Energy given to the charges (“voltage”)</td><td>volt (V)</td><td>Voltmeter, connected in <b>parallel</b></td></tr>
<tr><td><b>Resistance (R)</b></td><td>How much a component opposes current</td><td>ohm (Ω)</td><td>Calculated or ohmmeter</td></tr></table></div>
<h2>Series circuits</h2>
<ul><li>Components are in one loop, one after another.</li>
<li>The <b>current is the same</b> everywhere in the loop.</li>
<li>Adding more bulbs <b>increases resistance</b>, so current drops and each bulb gets <b>dimmer</b>.</li>
<li>If one bulb breaks, the whole circuit stops.</li></ul>
<h2>Parallel circuits</h2>
<ul><li>Each component is on its own branch.</li>
<li>If one bulb breaks, the others <b>stay on</b>. House wiring is parallel for this reason.</li></ul>
<h2>Resistance and effects of current</h2>
<p>With the same battery, <b>more resistance means less current</b>. Copper wire is a good conductor with low resistance. Current has a <b>heating effect</b> (kettle element, toaster), a <b>lighting effect</b> (bulbs) and a <b>magnetic effect</b> (electromagnets, motors).</p>
<div class="key">Memory trick: Ammeter in a <b>line</b> (series); Voltmeter <b>across</b> (parallel).</div>`,
qs:[
{q:"What is the unit of electric current?",o:["volt","ohm","ampere","watt"],a:2,e:"Current is measured in amperes (A)."},
{q:"How is an ammeter connected in a circuit?",o:["In series","In parallel","Across the battery only","It is not connected"],a:0,e:"An ammeter must be in the loop so all the current flows through it."},
{q:"How is a voltmeter connected?",o:["In series","In parallel across the component","Between two switches","Inside the battery"],a:1,e:"A voltmeter measures the difference across a component, so it goes in parallel."},
{q:"You add more bulbs in series. What happens to their brightness?",o:["They get brighter","They stay the same","They get dimmer","They explode"],a:2,e:"More bulbs in series add resistance, so less current flows."},
{q:"One bulb in a parallel circuit breaks. The other bulbs…",o:["all go off","stay on","get dimmer","flicker"],a:1,e:"Each bulb has its own branch, so the others still have a complete path."},
{q:"Resistance is measured in…",o:["amperes","ohms","volts","joules"],a:1,e:"The unit of resistance is the ohm (Ω)."},
{q:"Which material is a good conductor?",o:["Rubber","Glass","Copper wire","Dry wood"],a:2,e:"Metals like copper conduct electricity well."},
{q:"What is true about current in a series circuit?",o:["It is the same everywhere","It is highest at the last bulb","It is zero at the switch","It splits between branches"],a:0,e:"There is only one path, so the same current flows through every component."},
{q:"A kettle element uses which effect of electric current?",o:["Magnetic effect","Heating effect","Chemical effect","Lighting effect"],a:1,e:"The element has resistance and gets hot when current flows."},
{q:"With the same battery, you increase the resistance. The current…",o:["increases","decreases","stays the same","reverses"],a:1,e:"More opposition to flow means less current."}]},

{id:"g9-eng-figures",grade:9,subject:"eng",strand:"Literature & language",title:"Figures of speech",
notes:`<h2>Why writers use them</h2>
<p>Figures of speech create pictures in the reader's mind, add emphasis and make writing memorable. In exams you must <b>name</b> the figure of speech and <b>explain its effect</b>.</p>
<h2>Comparisons</h2>
<ul><li><b>Simile</b>: compares two things using <b>like</b> or <b>as</b>. <i>Her smile was as bright as the sun.</i></li>
<li><b>Metaphor</b>: says one thing <b>is</b> another, without like or as. <i>The classroom was a zoo.</i></li>
<li><b>Personification</b>: gives human qualities to non-human things. <i>The wind whispered through the trees.</i></li></ul>
<h2>Sound devices</h2>
<ul><li><b>Alliteration</b>: repeated consonant sounds at the start of nearby words. <i>Sipho saw six silver snakes.</i></li>
<li><b>Onomatopoeia</b>: words that sound like what they mean. <i>buzz, crash, sizzle</i></li></ul>
<h2>Exaggeration and contrast</h2>
<ul><li><b>Hyperbole</b>: deliberate exaggeration for effect. <i>I've told you a million times.</i></li>
<li><b>Oxymoron</b>: two opposite words side by side. <i>deafening silence, bittersweet</i></li>
<li><b>Irony</b>: the opposite of what is expected. Situational irony: <i>a fire station burns down.</i></li></ul>
<div class="key">Answer pattern: Name it → quote it → explain what is compared or stressed → say how it makes the reader feel or see.</div>
<div class="ex"><b>Example answer</b>“Time is a thief” is a metaphor. Time is compared to a thief to show that it quietly steals our moments before we notice.</div>`,
qs:[
{q:"“Her smile was as bright as the sun.” This is a…",o:["metaphor","simile","hyperbole","oxymoron"],a:1,e:"It compares using “as”, so it is a simile."},
{q:"“The classroom was a zoo.” This is a…",o:["simile","metaphor","onomatopoeia","alliteration"],a:1,e:"It says the classroom is a zoo, without like or as."},
{q:"“The wind whispered through the trees.” This is…",o:["personification","irony","hyperbole","simile"],a:0,e:"Whispering is a human action given to the wind."},
{q:"“I've told you a million times!” This is…",o:["a simile","an oxymoron","hyperbole","personification"],a:2,e:"It is a deliberate exaggeration for emphasis."},
{q:"“Sipho saw six silver snakes.” This is…",o:["onomatopoeia","alliteration","metaphor","irony"],a:1,e:"The “s” sound is repeated at the start of nearby words."},
{q:"“The bees buzzed in the garden.” Which word is onomatopoeia?",o:["bees","buzzed","garden","the"],a:1,e:"“Buzzed” imitates the sound it describes."},
{q:"Which phrase is an oxymoron?",o:["deafening silence","busy bee","cold ice","bright sun"],a:0,e:"“Deafening” and “silence” are opposites placed together."},
{q:"A fire station burns down. This is an example of…",o:["situational irony","personification","simile","alliteration"],a:0,e:"The opposite of what we expect happens: a place that fights fires catches fire."},
{q:"What is the main difference between a simile and a metaphor?",o:["A metaphor rhymes","A simile uses “like” or “as”","A simile is always longer","There is no difference"],a:1,e:"A simile compares with like or as; a metaphor says one thing is another."},
{q:"“Time is a thief.” What does this metaphor suggest?",o:["Time moves slowly","Time steals moments from us without us noticing","Thieves have lots of time","Clocks are valuable"],a:1,e:"Time is compared to a thief to show how it quietly takes moments away."}]},

{id:"g9-geo-topo",grade:9,subject:"geo",strand:"Geography: map skills",title:"Map scale & topographic maps",
notes:`<h2>Three ways to show scale</h2>
<ul><li><b>Word scale</b>: “1 cm represents 500 m”.</li>
<li><b>Ratio (numerical) scale</b>: 1:50 000 means 1 unit on the map = 50 000 of the same units on the ground.</li>
<li><b>Line (bar) scale</b>: a ruled line divided into distances.</li></ul>
<h2>Calculating real distance (1:50 000)</h2>
<p>1 cm = 50 000 cm = 500 m = <b>0,5 km</b>.</p>
<div class="ex"><b>Example</b>4 cm on the map × 0,5 km = <b>2 km</b> on the ground. To go the other way: 3 km ÷ 0,5 = 6 cm on the map.</div>
<h2>Large and small scale</h2>
<p>A <b>large-scale</b> map (1:10 000) covers a small area in great detail. A <b>small-scale</b> map (1:250 000) covers a big area with less detail. The smaller the number after the colon, the larger the scale.</p>
<h2>Reading height on topographic maps</h2>
<ul><li><b>Contour lines</b> join points of equal height above sea level.</li>
<li>On South African 1:50 000 topographic maps, the <b>contour interval</b> is usually <b>20 m</b>.</li>
<li>Lines <b>close together</b> = steep slope. Lines <b>far apart</b> = gentle slope.</li>
<li>A <b>spot height</b> is a dot with a number giving the exact height of that point. A <b>trigonometrical station</b> is a triangle with a height.</li></ul>
<h2>Gradient and direction</h2>
<p>Gradient = vertical interval (VI) ÷ horizontal equivalent (HE), written as 1 : HE/VI. A <b>true bearing</b> is measured clockwise from true north: 90° = east, 180° = south, 270° = west.</p>`,
qs:[
{q:"On a 1:50 000 map, 1 cm represents…",o:["50 m","500 m","5 km","50 km"],a:1,e:"50 000 cm = 500 m."},
{q:"Two places are 4 cm apart on a 1:50 000 map. What is the real distance?",o:["200 m","2 km","20 km","4 km"],a:1,e:"4 × 0,5 km = 2 km."},
{q:"Which map shows more detail of a small area?",o:["1:250 000","1:50 000","1:10 000","1:1 000 000"],a:2,e:"1:10 000 is the largest scale here, so it shows the most detail."},
{q:"Contour lines join points of…",o:["equal rainfall","equal height above sea level","equal temperature","equal distance from the coast"],a:1,e:"Contours connect places at the same height."},
{q:"Contour lines that are very close together show…",o:["flat land","a gentle slope","a steep slope","a river"],a:2,e:"Height changes quickly over a short distance, so the slope is steep."},
{q:"What is the usual contour interval on SA 1:50 000 topographic maps?",o:["5 m","10 m","20 m","100 m"],a:2,e:"South African 1:50 000 maps normally use a 20 m interval."},
{q:"A dot with a number next to it on a topographic map is a…",o:["trigonometrical station","spot height","dam","bench mark"],a:1,e:"A spot height marks the exact height of that point."},
{q:"A true bearing of 180° points…",o:["north","east","south","west"],a:2,e:"Bearings run clockwise from north: 90° east, 180° south."},
{q:"Gradient is calculated as…",o:["HE ÷ VI","VI ÷ HE","VI × HE","distance ÷ time"],a:1,e:"Gradient = vertical interval ÷ horizontal equivalent."},
{q:"On a 1:50 000 map, how long would a 3 km road measure?",o:["3 cm","6 cm","1,5 cm","15 cm"],a:1,e:"3 km ÷ 0,5 km per cm = 6 cm."}]},

/* ===== AFRIKAANS FAL ===== */
{id:"g8-afr-tye",grade:8,subject:"afr",strand:"Taalstrukture en -konvensies",title:"Tye: hede, verlede en toekoms",
notes:`<h2>Die hede (present tense)</h2>
<p>Die werkwoord bly dieselfde vir almal: <i>Ek eet. Hy eet. Ons eet.</i> Afrikaans has no “-s” endings like English.</p>
<h2>Die verlede tyd (past tense)</h2>
<p>Gebruik <b>het + ge- + werkwoord</b>. Die werkwoord skuif na die einde van die sin.</p>
<div class="ex"><b>Voorbeeld</b>Ek eet brood. → Ek <b>het</b> brood <b>geëet</b>.<br>Hy speel sokker. → Hy <b>het</b> sokker <b>gespeel</b>.</div>
<ul><li>Werkwoorde wat begin met <b>be-, ge-, her-, er-, ont-, ver-</b> kry nie ’n ekstra ge- nie: <i>Ek verstaan → Ek het verstaan.</i></li>
<li>Sommige werkwoorde verander heeltemal (onreëlmatig):
<div class="tbl"><table><tr><th>Hede</th><th>Verlede</th></tr><tr><td>is</td><td>was</td></tr><tr><td>het (own)</td><td>het … gehad</td></tr><tr><td>kan</td><td>kon</td></tr><tr><td>moet</td><td>moes</td></tr><tr><td>wil</td><td>wou</td></tr><tr><td>sal</td><td>sou</td></tr></table></div></li></ul>
<h2>Die toekoms (future tense)</h2>
<p>Gebruik <b>sal</b> + werkwoord aan die einde: <i>Ek sal brood eet.</i></p>
<h2>Woordorde</h2>
<p>Die eerste werkwoord staan altyd op <b>plek 2</b>. As ’n sin met ’n tydsbepaling begin, kom die werkwoord voor die onderwerp.</p>
<div class="ex"><b>Voorbeeld</b>Ek het gister sokker gespeel. → <b>Gister het ek</b> sokker gespeel.</div>
<div class="key">Volgorde om te onthou: onderwerp – werkwoord 1 – tyd – objek – manier – plek – werkwoord 2.</div>`,
qs:[
{q:"Skryf in die verlede tyd: “Ek eet brood.”",o:["Ek eet brood gister.","Ek het brood geëet.","Ek het brood eet.","Ek sal brood eet."],a:1,e:"Verlede tyd: het + ge- + werkwoord aan die einde."},
{q:"Skryf in die toekoms: “Ek eet brood.”",o:["Ek het brood geëet.","Ek sal brood eet.","Ek eet sal brood.","Ek gaan geëet brood."],a:1,e:"Toekoms: sal + werkwoord aan die einde."},
{q:"Skryf in die verlede tyd: “Hy speel sokker.”",o:["Hy het sokker gespeel.","Hy speel sokker gehad.","Hy was sokker speel.","Hy het gespeel sokker."],a:0,e:"Het kom op plek 2 en gespeel gaan na die einde."},
{q:"Skryf in die verlede tyd: “Ek verstaan die werk.”",o:["Ek het die werk geverstaan.","Ek het die werk verstaan.","Ek verstaan die werk gehad.","Ek was die werk verstaan."],a:1,e:"Werkwoorde wat met ver- begin, kry nie ge- nie."},
{q:"Skryf in die verlede tyd: “Sy is siek.”",o:["Sy het siek.","Sy het siek gewees.","Sy was siek.","Sy is siek gehad."],a:2,e:"Is word was in die verlede tyd."},
{q:"Skryf in die verlede tyd: “Ons het ’n hond.”",o:["Ons het ’n hond gehad.","Ons het ’n hond.","Ons was ’n hond.","Ons het ’n hond geheb."],a:0,e:"As het “own” beteken, word die verlede tyd het … gehad."},
{q:"Watter sin het die korrekte woordorde?",o:["Gister ek het sokker gespeel.","Gister het ek sokker gespeel.","Gister het sokker ek gespeel.","Ek gister het sokker gespeel."],a:1,e:"Die eerste werkwoord (het) moet op plek 2 staan."},
{q:"Watter woord wys dat ’n sin in die toekoms is?",o:["het","was","sal","ge-"],a:2,e:"Sal word gebruik vir die toekoms."},
{q:"Skryf in die verlede tyd: “Hulle kan swem.”",o:["Hulle het kan swem.","Hulle kon swem.","Hulle sal swem.","Hulle het geswem kan."],a:1,e:"Kan word kon in die verlede tyd."},
{q:"Skryf in die verlede tyd: “Die kinders lees boeke.”",o:["Die kinders het boeke gelees.","Die kinders lees boeke gehad.","Die kinders het gelees boeke.","Die kinders sal boeke lees."],a:0,e:"Het op plek 2, gelees aan die einde."}]},

{id:"g9-afr-ontkenning",grade:9,subject:"afr",strand:"Taalstrukture en -konvensies",title:"Die ontkenning",
notes:`<h2>Die basiese reël</h2>
<p>Afrikaans uses a <b>double negative</b>. The first <b>nie</b> comes after the verb, and a second <b>nie</b> goes at the end of the sentence.</p>
<div class="ex"><b>Voorbeeld</b>Ek hou van vis. → Ek hou <b>nie</b> van vis <b>nie</b>.</div>
<p>As die sin net ’n onderwerp en werkwoord het, is een nie genoeg: <i>Hy speel. → Hy speel nie.</i></p>
<h2>Woorde wat verander</h2>
<div class="tbl"><table><tr><th>Positief</th><th>Negatief</th></tr>
<tr><td>iemand / almal</td><td>niemand</td></tr><tr><td>iets / alles</td><td>niks</td></tr>
<tr><td>altyd</td><td>nooit</td></tr><tr><td>iewers / oral</td><td>nêrens</td></tr>
<tr><td>al</td><td>nog nie</td></tr><tr><td>ook</td><td>ook nie</td></tr></table></div>
<p>Die tweede <b>nie</b> bly steeds aan die einde: <i>Daar is iemand by die deur. → Daar is <b>niemand</b> by die deur <b>nie</b>.</i></p>
<div class="ex"><b>Voorbeeld</b>Ek het al geëet. → Ek het <b>nog nie</b> geëet <b>nie</b>.</div>
<h2>Bevele (commands)</h2>
<p>Gebruik <b>moenie … nie</b>: <i>Rook! → Moenie rook nie!</i></p>
<div class="key">Kontroleer altyd: is daar ’n nie aan die einde van die sin?</div>`,
qs:[
{q:"Ontken: “Ek hou van vis.”",o:["Ek hou nie van vis.","Ek hou nie van vis nie.","Ek nie hou van vis nie.","Ek hou van vis nie."],a:1,e:"Dubbele ontkenning: nie na die werkwoord en nie aan die einde."},
{q:"Ontken: “Hy speel.”",o:["Hy speel nie.","Hy speel nie nie.","Hy nie speel.","Hy speel nooit nie nie."],a:0,e:"Met net ’n onderwerp en werkwoord is een nie genoeg."},
{q:"Ontken: “Daar is iemand by die deur.”",o:["Daar is nie iemand by die deur.","Daar is niemand by die deur nie.","Daar is niks by die deur nie.","Niemand is daar by die deur."],a:1,e:"Iemand word niemand, en nie gaan aan die einde."},
{q:"Ontken: “Sy het iets gekoop.”",o:["Sy het niks gekoop nie.","Sy het nie iets gekoop.","Sy het niemand gekoop nie.","Sy het iets nie gekoop."],a:0,e:"Iets word niks."},
{q:"Ontken: “Ons gaan altyd strand toe.”",o:["Ons gaan nie altyd strand toe.","Ons gaan nooit strand toe nie.","Ons gaan nêrens strand toe nie.","Ons nooit gaan strand toe."],a:1,e:"Altyd word nooit."},
{q:"Ontken: “Ek het al geëet.”",o:["Ek het al nie geëet nie.","Ek het nog nie geëet nie.","Ek het nooit al geëet.","Ek het niks geëet nie."],a:1,e:"Al word nog nie."},
{q:"Wat is die negatief van “iewers”?",o:["niks","niemand","nêrens","nooit"],a:2,e:"Iewers (somewhere) word nêrens (nowhere)."},
{q:"Ontken: “Hulle is ook hier.”",o:["Hulle is ook nie hier nie.","Hulle is nie ook hier.","Hulle is ook hier nie.","Hulle is nooit hier nie."],a:0,e:"Ook word ook nie, met nie aan die einde."},
{q:"Ontken die bevel: “Rook!”",o:["Rook nie!","Nie rook nie!","Moenie rook nie!","Rook nooit!"],a:2,e:"Bevele word ontken met moenie … nie."},
{q:"Ontken: “Almal het gekom.”",o:["Almal het nie gekom nie.","Niemand het gekom nie.","Niks het gekom nie.","Almal het nooit gekom."],a:1,e:"Almal word niemand."}]},

/* ===== SOCIAL SCIENCES: HISTORY ===== */
{id:"g8-his-minerals",grade:8,subject:"his",strand:"History",title:"The Mineral Revolution in South Africa",
notes:`<h2>Diamonds: 1867</h2>
<ul><li>In <b>1867</b> a diamond was found near Hopetown on the Orange River. More finds led to the growth of <b>Kimberley</b>, where the “Big Hole” was dug.</li>
<li>Small claims were bought up by large companies. In <b>1888</b> Cecil John Rhodes formed <b>De Beers Consolidated Mines</b>, which controlled almost all diamond production.</li></ul>
<h2>Gold: 1886</h2>
<ul><li>In <b>1886</b> gold was discovered on the <b>Witwatersrand</b>. <b>Johannesburg</b> was founded that year and grew rapidly.</li>
<li>The gold lay deep underground in low-grade ore, so <b>deep-level mining</b> needed expensive machinery and huge amounts of capital. Wealthy mine owners became known as the <b>Randlords</b>.</li></ul>
<h2>Effects on workers</h2>
<ul><li><b>Migrant labour</b>: black men left their homes for contracts on the mines, often for months, and sent wages home.</li>
<li><b>Closed compounds</b>: workers were housed in fenced compounds, partly to control them and prevent diamond theft.</li>
<li><b>Pass laws</b> controlled where black workers could move and work.</li>
<li>Black workers were paid far less than white workers and did the most dangerous jobs.</li></ul>
<h2>Wider effects</h2>
<p>Mining brought railways, banks and new industries. Britain's interest in the gold of the Zuid-Afrikaansche Republiek increased tension with the Boer republics and contributed to the <b>South African War (1899–1902)</b>.</p>
<div class="key">Exam tip: link each discovery to a consequence: economic, social and political.</div>`,
qs:[
{q:"In which year were diamonds discovered near Hopetown?",o:["1652","1867","1886","1910"],a:1,e:"The first significant diamond find was in 1867."},
{q:"Which town grew around the diamond diggings?",o:["Johannesburg","Kimberley","Durban","Pretoria"],a:1,e:"Kimberley grew around the diamond mines, including the Big Hole."},
{q:"Gold was discovered on the Witwatersrand in…",o:["1867","1886","1899","1948"],a:1,e:"The Witwatersrand gold discovery was in 1886."},
{q:"Who formed De Beers Consolidated Mines in 1888?",o:["Paul Kruger","Cecil John Rhodes","Jan Smuts","Shaka"],a:1,e:"Rhodes combined the diamond companies into De Beers."},
{q:"Why did gold mining on the Witwatersrand need so much money?",o:["The gold was on the surface","The gold was deep underground and needed costly machinery","Workers were paid very high wages","There was no water"],a:1,e:"Deep-level, low-grade ore required heavy investment in machinery."},
{q:"What was the migrant labour system?",o:["Workers moving permanently to Europe","Men leaving home on contracts to work on the mines","Farmers moving to the coast","Miners working only in winter"],a:1,e:"Men left their families for contract work and returned home afterwards."},
{q:"One reason for closed compounds was to…",o:["give workers more freedom","prevent diamond theft and control workers","house mine owners","store machinery"],a:1,e:"Compounds controlled workers and reduced diamond smuggling."},
{q:"Pass laws were used to…",o:["help people travel freely","control the movement of black workers","give passports to miners","pay workers"],a:1,e:"Passes restricted where black people could live and work."},
{q:"The wealthy owners of the gold mines were called…",o:["Voortrekkers","Randlords","Uitlanders","Trekboers"],a:1,e:"Mine magnates on the Rand were known as Randlords."},
{q:"Which war was partly linked to British interest in the gold fields?",o:["World War I","The South African War (1899–1902)","The Cold War","The Frontier Wars"],a:1,e:"Tension over the gold-rich ZAR contributed to the South African War."}]},

{id:"g9-his-1948",grade:9,subject:"his",strand:"History",title:"Turning points: 1948 and the 1950s",
notes:`<h2>1948: the National Party wins</h2>
<p>In the <b>1948</b> election, only white voters could vote. The National Party under <b>D.F. Malan</b> won and began building <b>apartheid</b>, a system of legal racial separation.</p>
<h2>Key apartheid laws</h2>
<div class="tbl"><table><tr><th>Year</th><th>Law</th><th>What it did</th></tr>
<tr><td class="num">1950</td><td>Population Registration Act</td><td>Classified every person by race</td></tr>
<tr><td class="num">1950</td><td>Group Areas Act</td><td>Forced racial groups to live in separate areas; led to forced removals</td></tr>
<tr><td class="num">1953</td><td>Bantu Education Act</td><td>Gave black learners an inferior, separate education</td></tr>
<tr><td class="num">1953</td><td>Reservation of Separate Amenities Act</td><td>Separate beaches, buses, toilets and parks (“petty apartheid”)</td></tr></table></div>
<h2>Resistance in the 1950s</h2>
<ul><li><b>1952 Defiance Campaign</b>: volunteers led by the ANC and allies deliberately broke unjust laws, such as using “whites only” facilities.</li>
<li><b>1955 Freedom Charter</b>: adopted at the Congress of the People in <b>Kliptown</b>, Soweto. It begins with the idea that South Africa belongs to all who live in it.</li>
<li><b>9 August 1956 Women's March</b>: about 20 000 women marched to the Union Buildings in Pretoria against pass laws for women. We remember it on National Women's Day.</li>
<li><b>1956–1961 Treason Trial</b>: 156 leaders were charged with treason. All were eventually found not guilty.</li></ul>
<div class="key">When you read a source, ask: who wrote it, when, and why?</div>`,
qs:[
{q:"Which party won the 1948 election and introduced apartheid?",o:["The ANC","The United Party","The National Party","The PAC"],a:2,e:"The National Party under D.F. Malan won in 1948."},
{q:"Who led the National Party government in 1948?",o:["D.F. Malan","Nelson Mandela","Jan Smuts","F.W. de Klerk"],a:0,e:"D.F. Malan became prime minister in 1948."},
{q:"Which law classified every South African by race?",o:["Group Areas Act","Population Registration Act","Bantu Education Act","Land Act"],a:1,e:"The Population Registration Act of 1950 classified people by race."},
{q:"The Group Areas Act (1950) led to…",o:["free movement","forced removals into separate residential areas","better schools","the vote for all"],a:1,e:"It enforced separate living areas and forced people out of their homes."},
{q:"Separate beaches, buses and toilets were enforced by the…",o:["Reservation of Separate Amenities Act","Freedom Charter","Defiance Campaign","Treason Trial"],a:0,e:"This 1953 act created so-called petty apartheid."},
{q:"What was the Defiance Campaign of 1952?",o:["An armed uprising","Deliberately breaking unjust laws peacefully","A sports boycott","An election campaign"],a:1,e:"Volunteers broke apartheid laws non-violently and accepted arrest."},
{q:"Where was the Freedom Charter adopted in 1955?",o:["Kliptown","Sharpeville","Robben Island","Kimberley"],a:0,e:"The Congress of the People met at Kliptown, Soweto."},
{q:"On 9 August 1956, women marched to the Union Buildings to protest against…",o:["Bantu Education","pass laws for women","high taxes","the Treason Trial"],a:1,e:"About 20 000 women protested against passes for women."},
{q:"What is 9 August now commemorated as?",o:["Freedom Day","Heritage Day","National Women's Day","Youth Day"],a:2,e:"National Women's Day honours the 1956 march."},
{q:"How did the Treason Trial (1956–1961) end?",o:["All accused were found guilty","All accused were found not guilty","It never finished","It moved to Britain"],a:1,e:"After years of trial, all the accused were acquitted."}]},

/* ===== LIFE ORIENTATION ===== */
{id:"g8-lo-study",grade:8,subject:"lo",strand:"World of work",title:"Study skills & goal setting",
notes:`<h2>Set SMART goals</h2>
<div class="tbl"><table><tr><th>Letter</th><th>Meaning</th><th>Ask yourself</th></tr>
<tr><td><b>S</b></td><td>Specific</td><td>What exactly do I want?</td></tr>
<tr><td><b>M</b></td><td>Measurable</td><td>How will I know I've done it?</td></tr>
<tr><td><b>A</b></td><td>Achievable</td><td>Can I really do this?</td></tr>
<tr><td><b>R</b></td><td>Realistic / relevant</td><td>Does it fit my situation?</td></tr>
<tr><td><b>T</b></td><td>Time-bound</td><td>By when?</td></tr></table></div>
<div class="ex"><b>Example</b>Weak goal: “I want to do better in Maths.” SMART goal: “I will raise my Maths mark from 55% to 65% by the end of Term 4 by doing 20 minutes of practice every weekday.”</div>
<h2>Study methods that work</h2>
<ul><li><b>Summaries</b>: write the key points in your own words. This is active study, not just re-reading.</li>
<li><b>Mind maps</b>: put the main idea in the middle and branch out. Good for showing how ideas link.</li>
<li><b>Mnemonics</b>: memory aids, like a sentence where each word starts with a letter you must remember.</li>
<li><b>Test yourself</b>: answer questions without looking at the notes, then check.</li></ul>
<h2>Plan your time</h2>
<ul><li>Make a <b>study timetable</b> so every subject gets time, starting weeks before exams.</li>
<li><b>Spaced revision</b> (a little often) beats <b>cramming</b> the night before.</li>
<li>Study for about 30–45 minutes, then take a short 5–10 minute break.</li>
<li>Choose a quiet, well-lit place. Put your phone away.</li></ul>
<h2>In the exam</h2>
<p>Read through the whole paper first. Use the <b>mark allocation</b> to decide how much to write: a 4-mark question usually needs four points.</p>`,
qs:[
{q:"In a SMART goal, what does the S stand for?",o:["Simple","Specific","Smart","Short"],a:1,e:"S stands for Specific: say exactly what you want to achieve."},
{q:"Which is a SMART goal?",o:["I want to do better.","I will try hard this year.","I will raise my Maths mark from 55% to 65% by the end of Term 4.","School is important."],a:2,e:"It is specific, measurable and has a deadline."},
{q:"Which study method is best for showing how ideas link to a main topic?",o:["Mind map","Cramming","Highlighting everything","Reading aloud once"],a:0,e:"Mind maps branch out from a central idea, showing connections."},
{q:"A mnemonic is…",o:["a type of test","a memory aid","a timetable","a summary"],a:1,e:"Mnemonics help you remember lists or steps."},
{q:"Which revision approach usually works best?",o:["Cramming the night before","Spaced revision over several weeks","Only reading the textbook once","Studying with the TV on"],a:1,e:"Short, repeated sessions help you remember for longer."},
{q:"Which is an example of active studying?",o:["Re-reading notes many times","Writing a summary in your own words","Copying the textbook word for word","Listening to music"],a:1,e:"Putting ideas in your own words makes your brain work with the content."},
{q:"What is the main purpose of a study timetable?",o:["To decorate your room","To make sure every subject gets enough time","To skip difficult subjects","To impress your friends"],a:1,e:"A timetable spreads your time across all subjects."},
{q:"After about 30–45 minutes of study you should…",o:["stop for the day","take a short 5–10 minute break","switch to social media for an hour","start a new subject immediately"],a:1,e:"Short breaks help you stay focused."},
{q:"In an exam, the mark allocation tells you…",o:["how long the paper is","how much detail an answer needs","who marked it","your final result"],a:1,e:"A 4-mark question usually needs four separate points."},
{q:"Which is the best place to study?",o:["In front of the TV","A quiet, well-lit place with your phone away","In bed with the lights off","On a noisy bus"],a:1,e:"Fewer distractions means better concentration."}]},

{id:"g9-lo-careers",grade:9,subject:"lo",strand:"World of work",title:"Subject choice & careers",
notes:`<h2>Why Grade 9 matters</h2>
<p>At the end of Grade 9 you choose your subjects for Grades 10 to 12 (the FET phase). These choices affect which careers and further studies are open to you.</p>
<h2>What every learner takes</h2>
<p>For the National Senior Certificate (NSC) you take <b>seven subjects</b>:</p>
<ul><li><b>Two official languages</b>: one at Home Language level and one at Home Language or First Additional Language level.</li>
<li><b>Mathematics</b> or <b>Mathematical Literacy</b>.</li>
<li><b>Life Orientation</b> (compulsory).</li>
<li><b>Three elective subjects</b> you choose, such as Physical Sciences, Accounting, Geography or History.</li></ul>
<div class="key">Many science, engineering, medicine and accounting degrees require Mathematics, not Mathematical Literacy. Engineering and medicine usually also need Physical Sciences.</div>
<h2>Know yourself</h2>
<ul><li><b>Interests</b>: what you enjoy doing.</li>
<li><b>Aptitude</b>: what you are naturally good at.</li>
<li><b>Values</b>: what matters to you in work, such as helping people, security or creativity.</li></ul>
<h2>Research careers</h2>
<p>Talk to a teacher or career counsellor, read university and college prospectuses, and speak to people who do the job. You can also work for yourself as an <b>entrepreneur</b>.</p>
<h2>Poor reasons to choose a subject</h2>
<p>Because your friends take it, because you like the teacher, or because you think it is “easy”. Choose based on your interests, ability and career plans.</p>`,
qs:[
{q:"How many subjects do learners take for the NSC in Grades 10–12?",o:["5","6","7","9"],a:2,e:"The NSC requires seven subjects."},
{q:"Which subject is compulsory for every learner in Grades 10–12?",o:["Physical Sciences","Life Orientation","Accounting","History"],a:1,e:"Life Orientation is compulsory."},
{q:"Every learner must take…",o:["both Maths and Maths Literacy","either Mathematics or Mathematical Literacy","neither","only Maths Literacy"],a:1,e:"You choose one of the two."},
{q:"How many official languages must a learner take?",o:["One","Two","Three","Four"],a:1,e:"Two official languages, one at Home Language level."},
{q:"A learner wants to study engineering. Which combination is most useful?",o:["Maths Literacy and Tourism","Mathematics and Physical Sciences","History and Geography","Life Orientation only"],a:1,e:"Engineering degrees usually require Mathematics and Physical Sciences."},
{q:"Your natural ability to do something well is called your…",o:["interest","aptitude","value","hobby"],a:1,e:"Aptitude means natural ability or talent."},
{q:"Which is a good source of career information?",o:["A rumour on social media","A school career counsellor","Guessing","A friend's sibling's opinion only"],a:1,e:"Counsellors and prospectuses give reliable information."},
{q:"An entrepreneur is someone who…",o:["works only for government","starts and runs their own business","studies for ten years","never takes risks"],a:1,e:"Entrepreneurs create and run their own businesses."},
{q:"Which is a poor reason to choose a subject?",o:["It links to your career plan","You are good at it","Your friends are taking it","You enjoy it"],a:2,e:"Your friends' choices may not suit your abilities or goals."},
{q:"In career planning, your “values” are…",o:["your marks","what matters most to you in work","your salary","your school uniform"],a:1,e:"Values are what is important to you, such as helping others or job security."}]}
];
const TOPIC = Object.fromEntries(TOPICS.map(t=>[t.id,t]));

/* ---------- CAPS achievement levels ---------- */
function level(p){
  if(p>=80) return [7,"Outstanding"]; if(p>=70) return [6,"Meritorious"]; if(p>=60) return [5,"Substantial"];
  if(p>=50) return [4,"Adequate"]; if(p>=40) return [3,"Moderate"]; if(p>=30) return [2,"Elementary"]; return [1,"Not achieved"];
}
