/* Teacher lessons: notes, worked examples, 5 practice questions with hints, and a timed written test
   (questions only; the learner writes on paper and uploads photos). The memo is shown only to the teacher. */
const SVG_ABSENT = `<svg viewBox="0 0 360 230" class="lgraph" role="img" aria-label="Bar graph: learners absent each day. Monday 6, Tuesday 3, Wednesday 5, Thursday 2, Friday 9.">
<text x="180" y="16" text-anchor="middle" class="gt">Graph 1: Learners absent each day</text>
<g class="ax"><line x1="50" y1="190" x2="340" y2="190"/><line x1="50" y1="30" x2="50" y2="190"/></g>
<g class="grid">${[0,2,4,6,8,10].map(v=>`<line x1="50" x2="340" y1="${190-v*16}" y2="${190-v*16}"/><text x="42" y="${194-v*16}" text-anchor="end">${v}</text>`).join("")}</g>
${[["Mon",6],["Tue",3],["Wed",5],["Thu",2],["Fri",9]].map(([d,v],i)=>`<rect x="${68+i*55}" y="${190-v*16}" width="34" height="${v*16}" class="gbar"/><text x="${85+i*55}" y="206" text-anchor="middle">${d}</text>`).join("")}
<text x="14" y="110" transform="rotate(-90 14 110)" text-anchor="middle">Number of learners</text>
<text x="195" y="224" text-anchor="middle">Day of the week</text></svg>`;
const SVG_MISLEAD = `<svg viewBox="0 0 360 230" class="lgraph" role="img" aria-label="Bar graph: juice sales. Vertical axis starts at 490. Brand A 520, Brand B 500.">
<text x="180" y="16" text-anchor="middle" class="gt">Graph 2: "Brand A is the clear winner!"</text>
<g class="ax"><line x1="60" y1="190" x2="330" y2="190"/><line x1="60" y1="30" x2="60" y2="190"/></g>
<g class="grid">${[490,495,500,505,510,515,520,525].map(v=>`<line x1="60" x2="330" y1="${190-(v-490)*4.4}" y2="${190-(v-490)*4.4}"/><text x="52" y="${194-(v-490)*4.4}" text-anchor="end">${v}</text>`).join("")}</g>
<rect x="105" y="${190-30*4.4}" width="60" height="${30*4.4}" class="gbar"/><text x="135" y="206" text-anchor="middle">Brand A</text>
<rect x="225" y="${190-10*4.4}" width="60" height="${10*4.4}" class="gbar b2"/><text x="255" y="206" text-anchor="middle">Brand B</text>
<text x="14" y="110" transform="rotate(-90 14 110)" text-anchor="middle">Cartons sold</text></svg>`;

const LESSONS = {
"g7-math-data": {
  grade:7, subject:"math", title:"Data handling: interpreting and analysing data (bias and critical analysis)",
  minutes:40, outOf:30,
  intro:`This lesson covers everything in Grade 7 data handling, with extra focus on this week's work: interpreting data, bias, and critical analysis. Read the notes, study the worked examples, do the 5 practice questions, then write the 40-minute test on paper.`,
  notes:`<h2>1. The data cycle</h2>
<p>Statistics is about answering questions using <b>data</b> (information, facts or numbers collected to answer a question). We always follow the <b>data cycle</b>:</p>
<ol><li><b>Pose a question</b> (e.g. "Which sport do Grade 7 learners like most?").</li>
<li><b>Collect</b> the data (survey, questionnaire, observation, experiment, or existing sources such as Stats SA).</li>
<li><b>Organise</b> the data (tally tables, frequency tables, stem-and-leaf displays).</li>
<li><b>Represent</b> the data (bar graphs, histograms, pie charts, line graphs).</li>
<li><b>Summarise</b> the data (mean, median, mode, range).</li>
<li><b>Interpret and analyse</b> the data (what does it show? is it reliable? is it biased?).</li>
<li><b>Report</b> the findings, and maybe pose a new question.</li></ol>

<h2>2. Key words</h2>
<div class="tbl"><table><tr><th>Word</th><th>Meaning</th></tr>
<tr><td><b>Population</b></td><td>The whole group you want to know about (e.g. all 600 learners in a school).</td></tr>
<tr><td><b>Sample</b></td><td>A smaller part of the population that you actually ask or measure (e.g. 60 learners).</td></tr>
<tr><td><b>Representative sample</b></td><td>A sample that is like the population: it includes all kinds of people in the right proportions (all grades, boys and girls, etc.).</td></tr>
<tr><td><b>Survey / questionnaire</b></td><td>Asking people questions to collect data.</td></tr>
<tr><td><b>Categorical data</b></td><td>Data in groups or words: favourite sport, eye colour, type of transport.</td></tr>
<tr><td><b>Numerical data</b></td><td>Data that are numbers. <b>Discrete</b>: counted, whole numbers (number of siblings). <b>Continuous</b>: measured, can have decimals (height, mass, time).</td></tr>
<tr><td><b>Frequency</b></td><td>How many times something occurs.</td></tr>
<tr><td><b>Outlier</b></td><td>A value much bigger or smaller than the rest.</td></tr></table></div>

<h2>3. Organising data</h2>
<h3>Tally and frequency tables</h3>
<p>A <b>tally</b> uses strokes, grouped in fives (four strokes crossed by a fifth: 𝍸). The <b>frequency</b> column gives the total for each row. The frequencies must add up to the total number of data values: always check this.</p>
<div class="tbl"><table><tr><th>Transport to school</th><th>Tally</th><th>Frequency</th></tr>
<tr><td>Walk</td><td>𝍸 𝍸 ||</td><td>12</td></tr>
<tr><td>Taxi</td><td>𝍸 |||</td><td>8</td></tr>
<tr><td>Car</td><td>𝍸</td><td>5</td></tr>
<tr><td><b>Total</b></td><td></td><td><b>25</b></td></tr></table></div>
<h3>Grouped data</h3>
<p>When there are many different numbers, we group them in <b>intervals</b> (class intervals) of equal width, e.g. 0–9, 10–19, 20–29. Intervals must not overlap, and every value must fit in exactly one interval.</p>
<h3>Stem-and-leaf displays</h3>
<p>A <b>stem-and-leaf display</b> organises numbers while keeping every value. For two-digit numbers, the <b>stem</b> is the tens digit and the <b>leaf</b> is the units digit. Leaves are written in order, and a key explains how to read it.</p>
<div class="ex"><b>Example</b>Data: 23, 31, 27, 45, 38, 31, 29, 40<br><pre>Stem | Leaf
  2  | 3 7 9
  3  | 1 1 8
  4  | 0 5
Key: 2 | 3 means 23</pre></div>

<h2>4. Summarising data: mean, median, mode, range</h2>
<div class="tbl"><table><tr><th>Measure</th><th>How to find it</th><th>Tells you</th></tr>
<tr><td><b>Mean</b> (average)</td><td>Add all the values, then divide by how many values there are</td><td>The typical value if everything were shared equally</td></tr>
<tr><td><b>Median</b></td><td>Arrange the values in order. The median is the <b>middle</b> value. If there are two middle values, add them and divide by 2</td><td>The middle; not affected much by outliers</td></tr>
<tr><td><b>Mode</b></td><td>The value that occurs <b>most often</b>. There can be more than one mode, or no mode</td><td>The most common value; works for categorical data too</td></tr>
<tr><td><b>Range</b></td><td>Highest value − lowest value</td><td>How spread out the data are</td></tr></table></div>
<ul><li>Mean, median and mode are <b>measures of central tendency</b> (they describe the centre). Range is a <b>measure of spread</b>.</li>
<li>To find the position of the median in an ordered list of n values: position = (n + 1) ÷ 2. For 15 values, the median is the 8th value.</li>
<li>An <b>outlier</b> pulls the mean towards it, but hardly changes the median. So when there are outliers, the median often describes the data better.</li>
<li>For categorical data (e.g. favourite colour), you can only use the <b>mode</b>.</li></ul>

<h2>5. Representing data: graphs</h2>
<h3>Rules for every graph (method marks!)</h3>
<ul><li>A <b>title</b> that says what the graph shows.</li>
<li><b>Labels</b> on both axes (with units if needed).</li>
<li>An <b>even scale</b> on the number axis that starts at <b>0</b>.</li>
<li>Bars of equal width; use a ruler and pencil; a key if there is more than one data set.</li></ul>
<h3>Bar graphs</h3>
<p>Used for <b>categorical</b> or discrete data. The bars are separate, with <b>equal gaps</b> between them. The height of each bar shows the frequency. A <b>double bar graph</b> compares two sets of data side by side (e.g. boys and girls), with a key.</p>
<h3>Histograms</h3>
<p>Used for <b>grouped numerical</b> data (intervals). The bars touch (<b>no gaps</b>) because the intervals follow on from each other.</p>
<h3>Pie charts</h3>
<ul><li>A circle divided into sectors, showing each category as a <b>part of the whole</b>.</li>
<li>The whole circle = <b>360°</b>. Angle of a sector = (frequency ÷ total) × 360°.</li>
<li>Check: all the angles must add up to 360°. Draw with a protractor, label each sector (or use a key), and give a title.</li>
<li>Percentage of a sector = (frequency ÷ total) × 100%.</li></ul>
<h3>Line graphs</h3>
<p>Used to show how something <b>changes over time</b> (e.g. temperature during a week). Points are plotted and joined with straight lines, so you can see <b>trends</b> (increasing, decreasing, staying the same).</p>
<h3>Pictographs</h3>
<p>Use pictures or symbols, with a key such as "1 symbol = 5 learners".</p>

<h2>6. Interpreting data</h2>
<p>To <b>interpret</b> means to read and explain what the data show.</p>
<ul><li>Read values off a graph carefully, using the scale.</li>
<li>Find the highest and lowest, totals, differences, and fractions or percentages of the total.</li>
<li>Describe <b>trends</b> and patterns: "Absences increased towards the end of the week."</li>
<li>Compare groups: "More boys than girls chose soccer."</li>
<li>Give possible <b>reasons</b> for patterns, but be careful: data can show <i>what</i> happened but don't always show <i>why</i>.</li>
<li>Answer in full sentences, using the numbers as evidence.</li></ul>

<h2>7. Analysing data: bias</h2>
<p>Data or a conclusion is <b>biased</b> when it is unfair or one-sided, so it does not give a true picture. Bias can enter at every stage of the data cycle.</p>
<h3>Sampling bias (who was asked)</h3>
<ul><li>The sample is <b>too small</b> (e.g. asking 5 people to decide for a whole school).</li>
<li>The sample is <b>not representative</b>: only one group is asked (e.g. asking only Grade 7s about the menu for the whole school; asking only people at a gym how much people exercise).</li>
<li><b>Convenience sampling</b>: asking whoever is easiest to reach (your friends).</li>
<li><b>Voluntary response</b>: only people with strong opinions choose to answer.</li></ul>
<h3>Question bias (how it was asked)</h3>
<ul><li>A <b>leading question</b> pushes people towards an answer: "Don't you agree that homework is a waste of time?"</li>
<li>A fair question is neutral: "How do you feel about homework? (Helpful / Not helpful / Not sure)".</li>
<li>Questions should be clear and not confusing, and answer options should cover all possibilities.</li></ul>
<h3>Source bias (who collected it and why)</h3>
<p>A company that sells a product, or a group that wants a certain result, may collect or report data in a way that supports what it wants. Always ask <b>who</b> did the survey and <b>why</b>.</p>
<h3>Reporting bias</h3>
<ul><li>Only showing results that support a claim and leaving out the rest.</li>
<li>Giving percentages without saying how many people were asked ("80% prefer…" might mean 4 out of 5!).</li>
<li>Using the measure (mean, median or mode) that makes the result look best.</li></ul>
<h3>Misleading graphs</h3>
<ul><li>The vertical axis <b>does not start at 0</b> (a "broken" or truncated axis), so small differences look huge.</li>
<li><b>Uneven scales</b> (e.g. 0, 10, 20, 50, 100).</li>
<li>Pictures or 3-D shapes where the size grows in two directions, so differences look bigger.</li>
<li>Missing titles, labels or scales.</li>
<li>Pie charts whose percentages do not add up to 100%.</li></ul>

<h2>8. Developing critical analysis skills</h2>
<p>To <b>critically analyse</b> data means to question it before you believe it. Ask:</p>
<ol><li><b>Who</b> collected the data, and <b>why</b>? Could they gain from a certain result?</li>
<li><b>How many</b> people or things were in the sample? Is it big enough?</li>
<li><b>How</b> was the sample chosen? Is it representative of the population?</li>
<li><b>What questions</b> were asked? Were they leading?</li>
<li><b>When and where</b> was the data collected? Is it still relevant?</li>
<li>Is the <b>graph</b> drawn fairly (scale from 0, even scale, labels)?</li>
<li>Does the <b>conclusion</b> really follow from the data, or is it exaggerated?</li></ol>
<p>Then <b>suggest improvements</b>: a bigger, random, representative sample; neutral questions; an independent researcher; a fairly drawn graph.</p>

<h2>9. Writing up an answer</h2>
<ul><li>Show every step of your method: write the values you use, the operation, and the answer with units.</li>
<li>For "explain" questions, give a reason using evidence from the data.</li>
<li>Round only at the end, and say what you rounded to (e.g. 1 decimal place).</li></ul>`,
  examples:`<div class="ex"><b>Worked example 1: mean, median, mode and range</b>
Data: 8, 3, 7, 5, 7, 10, 2<br>
<b>Order first:</b> 2, 3, 5, 7, 7, 8, 10 (7 values)<br>
<b>Mean</b> = (2 + 3 + 5 + 7 + 7 + 8 + 10) ÷ 7 = 42 ÷ 7 = <b>6</b><br>
<b>Median</b>: position (7 + 1) ÷ 2 = 4th value = <b>7</b><br>
<b>Mode</b> = <b>7</b> (appears twice)<br>
<b>Range</b> = 10 − 2 = <b>8</b></div>

<div class="ex"><b>Worked example 2: median with an even number of values</b>
Data: 12, 5, 9, 14, 6, 10 → ordered: 5, 6, 9, 10, 12, 14<br>
The two middle values are 9 and 10. Median = (9 + 10) ÷ 2 = 19 ÷ 2 = <b>9,5</b></div>

<div class="ex"><b>Worked example 3: the effect of an outlier</b>
Pocket money of 5 learners: R20, R25, R25, R30, R200<br>
Mean = 300 ÷ 5 = <b>R60</b>. Median = <b>R25</b>.<br>
The outlier R200 pulls the mean up to R60, which is more than four of the five learners get. The <b>median (R25) describes the typical learner better</b>.</div>

<div class="ex"><b>Worked example 4: grouped frequency table</b>
Test marks: 4, 12, 15, 7, 18, 11, 9, 16, 13, 19<br>
<pre>Interval | Tally | Frequency
 0 – 9   | |||   | 3   (4, 7, 9)
10 – 14  | |||   | 3   (12, 11, 13)
15 – 19  | ||||  | 4   (15, 18, 16, 19)
Total               10  ✔</pre></div>

<div class="ex"><b>Worked example 5: pie chart angles</b>
30 learners chose their favourite fruit: apple 12, banana 9, orange 6, grapes 3.<br>
Apple: 12 ÷ 30 × 360° = <b>144°</b><br>
Banana: 9 ÷ 30 × 360° = <b>108°</b><br>
Orange: 6 ÷ 30 × 360° = <b>72°</b><br>
Grapes: 3 ÷ 30 × 360° = <b>36°</b><br>
Check: 144 + 108 + 72 + 36 = 360° ✔ &nbsp; Percentage apple = 12 ÷ 30 × 100% = <b>40%</b></div>

<div class="ex"><b>Worked example 6: reading a bar graph</b>
A bar graph shows books read: Thabo 4, Lerato 7, Sipho 3. <br>
Total = 4 + 7 + 3 = 14 books. Lerato read 7 − 3 = <b>4 more</b> than Sipho. Mean = 14 ÷ 3 = <b>4,7 books</b> (1 decimal place).</div>

<div class="ex"><b>Worked example 7: spotting sampling bias</b>
A cellphone shop asks 20 customers in its own shop, "Is our shop the best?" and advertises "95% say we're the best!"<br>
<b>Bias:</b> (1) the sample is only the shop's own customers (not representative); (2) the sample is small; (3) the shop did the survey and gains from a good result; (4) the question is leading.<br>
<b>Better:</b> an independent person asks a large random sample of people in different places a neutral question such as "Which cellphone shop do you prefer?"</div>

<div class="ex"><b>Worked example 8: a misleading graph</b>
A graph shows Team A scored 61 points and Team B 59, but the vertical axis starts at 58. Team A's bar looks three times taller.<br>
<b>Why misleading:</b> the axis does not start at 0, so a small difference (2 points) looks huge.<br>
<b>Real difference:</b> 61 − 59 = 2 points, which is only about 3% of 59. The teams scored almost the same.</div>

<div class="ex"><b>Worked example 9: rewriting a leading question</b>
Leading: "Wouldn't you agree that the tuckshop is too expensive?"<br>
Fair: "How do you rate the tuckshop's prices? (Too expensive / About right / Cheap)"</div>`,
  practice:[
{q:"What is the mean of 4, 6, 8, 10 and 12?",o:["8","6","10","40"],a:0,h:"Add all five numbers, then divide by 5.",e:"4 + 6 + 8 + 10 + 12 = 40, and 40 ÷ 5 = 8."},
{q:"What is the median of 3, 9, 5 and 7?",o:["6","5","7","24"],a:0,h:"First put them in order. With an even number of values, find the two middle values and halve their sum.",e:"Ordered: 3, 5, 7, 9. The middle values are 5 and 7, so (5 + 7) ÷ 2 = 6."},
{q:"In a survey of 30 learners, 10 chose rugby. What angle should rugby have in a pie chart?",o:["120°","100°","10°","36°"],a:0,h:"Angle = (frequency ÷ total) × 360°.",e:"10 ÷ 30 × 360° = 120°."},
{q:"Which of these surveys has sampling bias?",o:["Asking only people at a gym how often people exercise","Asking a random sample of 200 people in a town","Asking every learner in the school","Asking 50 randomly chosen learners from every grade"],a:0,h:"Which sample is not like the whole population?",e:"People at a gym exercise more than most people, so they are not a representative sample."},
{q:"A bar graph's vertical axis starts at 80 instead of 0. What is the effect?",o:["Differences between the bars look bigger than they really are","The bars look the same height","The graph becomes more accurate","The total becomes larger"],a:0,h:"Imagine cutting off the bottom of every bar.",e:"Cutting off the bottom makes small differences look large, which is misleading."}],
  testIntro:`<p><b>Instructions</b></p><ul><li>Write all your answers on paper. Write your name, the date and "Data handling test" at the top.</li><li>Number your answers exactly as the questions are numbered.</li><li><b>Method is everything: show all your working.</b> An answer without working may not get the mark.</li><li><b>Your work must be neat</b>: write clearly, use a ruler and pencil for graphs and tables, and cross out mistakes with one neat line.</li><li>You have <b>40 minutes</b>. Each question is worth 1 mark (30 marks).</li><li>When you finish, take a clear photo of every page and upload them below, then press Submit.</li></ul>`,
  test:[
`<h3>Section A: Data set A</h3><p>Maths marks (out of 20) of 15 learners:</p><p class="data">12, 15, 9, 18, 15, 11, 14, 15, 7, 16, 13, 20, 10, 15, 14</p>`,
"Arrange the marks in data set A in ascending order (smallest to largest).",
"What is the mode of data set A?",
"What is the median of data set A? Show how you found it.",
"Calculate the mean of data set A. Round your answer to 1 decimal place.",
"Calculate the range of data set A.",
"The teacher adds a mark of 0 for a learner who was absent. Which measure will change more: the mean or the median? Explain why.",
"Draw a stem-and-leaf display for data set A. Include a key.",
"How many learners scored more than 10 out of 20?",
"What percentage of the learners scored 15 or more? Round to 1 decimal place.",
"Copy and complete a grouped frequency table for data set A with the intervals 5–9, 10–14 and 15–20 (tally and frequency columns).",
`<h3>Section B: Data set B</h3><p>Grade 7 learners were asked to name their favourite sport.</p><div class="tbl"><table><tr><th>Sport</th><th>Number of learners</th></tr><tr><td>Soccer</td><td>14</td></tr><tr><td>Netball</td><td>8</td></tr><tr><td>Rugby</td><td>6</td></tr><tr><td>Cricket</td><td>4</td></tr><tr><td>Athletics</td><td>8</td></tr></table></div>`,
"How many learners were asked altogether?",
"What fraction of the learners chose netball? Give your answer in its simplest form.",
"What percentage of the learners chose soccer?",
"Calculate the angle for soccer if the data is drawn as a pie chart.",
"Calculate the angle for cricket in the pie chart.",
"Draw a neat bar graph of data set B. Include a title, labels on both axes and an even scale starting at 0.",
"Is data set B categorical or numerical data? Give a reason.",
`<h3>Section C: Graph 1</h3>${SVG_ABSENT}`,
"On which day were the most learners absent?",
"What was the total number of absences for the whole week?",
"Calculate the mean number of learners absent per day.",
"Give one possible reason why Friday had the most absences.",
`<h3>Section D: Data set C</h3><p>Midday temperatures (°C) for one week: Monday 18, Tuesday 21, Wednesday 24, Thursday 19, Friday 16, Saturday 22, Sunday 25.</p>`,
"Which type of graph is best for showing how the temperature changed during the week? Give a reason.",
"Calculate the range of the temperatures.",
"Calculate the mean temperature for the week. Round to 1 decimal place.",
`<h3>Section E: Bias and critical analysis</h3>${SVG_MISLEAD}`,
"Look at Graph 2. Explain why the graph is misleading.",
"How many more cartons did Brand A sell than Brand B? Is the claim \"Brand A is the clear winner\" true? Explain.",
"A company that makes the cold drink FizzUp asked 10 learners at its own stall: \"You love FizzUp, don't you?\" It then advertised: \"90% of learners prefer FizzUp!\" Give TWO reasons why this result is biased.",
"Describe a fairer way to find out which cold drink learners prefer.",
"Rewrite this leading question as a fair question: \"Don't you agree that school uniforms are boring?\"",
"A school has 600 learners. The principal asks 30 Grade 7 learners what food the tuckshop should sell to the whole school. Is this sample representative? Explain, and say how to improve it."
  ],
  memo:[
"7, 9, 10, 11, 12, 13, 14, 14, 15, 15, 15, 15, 16, 18, 20",
"15 (appears 4 times)",
"15 values → 8th value = 14",
"Sum = 204; 204 ÷ 15 = 13,6",
"20 − 7 = 13",
"The mean changes more. Mean: 204 ÷ 16 = 12,75 (down from 13,6). Median: the 8th and 9th of 16 values are 14 and 14, so it stays 14. The 0 is an outlier that pulls the mean down.",
"Stems 0, 1, 2: 0 | 7 9; 1 | 0 1 2 3 4 4 5 5 5 5 6 8; 2 | 0. Key e.g. 1 | 2 means 12",
"12 learners (11, 12, 13, 14, 14, 15, 15, 15, 15, 16, 18, 20)",
"7 learners (15, 15, 15, 15, 16, 18, 20); 7 ÷ 15 × 100 = 46,7%",
"5–9: 2; 10–14: 6; 15–20: 7 (total 15)",
"14 + 8 + 6 + 4 + 8 = 40",
"8/40 = 1/5",
"14 ÷ 40 × 100 = 35%",
"14 ÷ 40 × 360° = 126°",
"4 ÷ 40 × 360° = 36°",
"Title; axes labelled (Sport, Number of learners); even scale from 0; equal-width bars with equal gaps; correct heights 14, 8, 6, 4, 8; drawn with a ruler",
"Categorical: the data are names of sports (categories), not numbers",
"Friday (9)",
"6 + 3 + 5 + 2 + 9 = 25",
"25 ÷ 5 = 5 learners per day",
"Any sensible reason, e.g. learners leave early for the weekend, sport trips, illness spreading during the week",
"A line graph: it shows change (trends) over time",
"25 − 16 = 9 °C",
"145 ÷ 7 = 20,7 °C",
"The vertical axis starts at 490, not 0, so the small difference looks very large (Brand A's bar looks 3 times taller)",
"520 − 500 = 20 more (only 4% more than B). No: the brands sold almost the same; the graph exaggerates the difference",
"Any two: the company did the survey and gains from the result; the sample is very small (10); only learners at its own stall (not representative); the question is leading",
"An independent person asks a large, random sample of learners from different grades/schools a neutral question, e.g. \"Which cold drink do you prefer?\" with several options",
"e.g. \"What do you think of the school uniform? (I like it / It's OK / I don't like it)\"",
"No: only Grade 7s and only 30 of 600 learners; other grades may want different food. Improve: ask a bigger random sample from every grade (e.g. 10 learners from each class)"
  ]
}
};
/* Numbered test questions: section headers (strings starting with "<h3>") are not numbered. */
function lessonTestItems(L){ let n = 0; return L.test.map(t => t.startsWith("<h3>") ? {head:t} : {n:++n, q:t}); }

/* A given lesson can carry the teacher's own edits (x.custom); they apply to that lesson only. */
function lessonOf(x){
  const B = LESSONS[x.lessonKey]; if(!B) return null;
  const c = x.custom || {};
  return {...B, title:c.title||B.title, intro:c.intro??B.intro, notes:c.notes??B.notes, examples:c.examples??B.examples,
    practice:B.practice.map((p,i)=>({...p, ...((c.practice||[])[i]||{})})),
    test:B.test.map((t,i)=>(c.test||[])[i] ?? t), memo:B.memo.map((m,i)=>(c.memo||[])[i] ?? m)};
}
