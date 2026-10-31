/* Grade 7 English Home Language: language structures, comprehension and writing (all terms, year-end exam). */
/* Shared by the Grade 7 subject files: place each correct answer in a fixed, varied position
   (stable on every device, so saved results and weak spots stay valid). */
function mixOpts(t){
  ["qs","pq","cq"].forEach(k=>(t[k]||[]).forEach((q,i)=>{
    let h=0; for(const c of t.id+k+i) h=(h*31+c.charCodeAt(0))>>>0;
    const n=q.o.length, r=h%n; if(!r) return;
    const right=q.o[q.a]; q.o=q.o.slice(r).concat(q.o.slice(0,r)); q.a=q.o.indexOf(right);
  }));
}
[
{id:"g7-eng-nouns",grade:7,term:0,subject:"eng",strand:"Language structures",title:"Nouns, pronouns and adjectives",
notes:`<h2>Nouns: naming words</h2>
<ul><li><b>Common nouns</b> name ordinary things: <i>dog, school, river</i>.</li>
<li><b>Proper nouns</b> name a particular person, place or thing and start with a capital letter: <i>Thabo, Durban, the Orange River</i>.</li>
<li><b>Collective nouns</b> name a group: a <i>herd</i> of cattle, a <i>swarm</i> of bees, a <i>pride</i> of lions, a <i>flock</i> of sheep.</li>
<li><b>Abstract nouns</b> name feelings, ideas or qualities you can't touch: <i>happiness, courage, freedom</i>.</li></ul>
<h2>Plurals</h2>
<ul><li>Most nouns add <b>-s</b>: book → books. Nouns ending in -s, -sh, -ch, -x add <b>-es</b>: box → boxes.</li>
<li>Consonant + y → <b>-ies</b>: baby → babies. Vowel + y → just -s: key → keys.</li>
<li>Some are irregular: child → children, mouse → mice, tooth → teeth, sheep → sheep.</li></ul>
<h2>Pronouns</h2>
<p>A pronoun replaces a noun so we don't repeat it.</p>
<div class="tbl"><table><tr><th>Type</th><th>Examples</th></tr>
<tr><td>Personal</td><td>I, you, he, she, it, we, they / me, him, her, us, them</td></tr>
<tr><td>Possessive</td><td>mine, yours, his, hers, ours, theirs</td></tr>
<tr><td>Reflexive</td><td>myself, yourself, himself, ourselves, themselves</td></tr>
<tr><td>Relative</td><td>who, whom, whose, which, that</td></tr>
<tr><td>Demonstrative</td><td>this, that, these, those</td></tr></table></div>
<h2>Adjectives</h2>
<p>Adjectives describe nouns: a <i>tall</i> tree, <i>three</i> apples.</p>
<p><b>Degrees of comparison:</b> tall → taller → tallest; beautiful → more beautiful → most beautiful; good → better → best; bad → worse → worst.</p>
<div class="key">Use the comparative (-er / more) for two things and the superlative (-est / most) for three or more.</div>`,
qs:[
{q:"Which word is a proper noun?",o:["city","Polokwane","river","teacher"],a:1,e:"Polokwane names a particular place, so it is a proper noun and has a capital letter."},
{q:"What is the collective noun: a ___ of lions?",o:["herd","flock","pride","swarm"],a:2,e:"A group of lions is a pride."},
{q:"Which word is an abstract noun?",o:["table","honesty","chair","window"],a:1,e:"Honesty is a quality you can't touch, so it is abstract."},
{q:"What is the plural of 'child'?",o:["childs","childes","children","childrens"],a:2,e:"Child has an irregular plural: children."},
{q:"What is the plural of 'city'?",o:["citys","cities","cityes","citi"],a:1,e:"Consonant + y changes to -ies: cities."},
{q:"Choose the correct pronoun: Lerato and ___ went to the shop.",o:["me","I","myself","mine"],a:1,e:"It is the subject of the sentence (I went), so use 'I'."},
{q:"In 'The boy hurt himself', 'himself' is a…",o:["possessive pronoun","reflexive pronoun","relative pronoun","demonstrative pronoun"],a:1,e:"Pronouns ending in -self/-selves are reflexive."},
{q:"Choose the correct form: This is the ___ day of the year.",o:["hot","hotter","hottest","most hot"],a:2,e:"Comparing one day with all the others needs the superlative: hottest."},
{q:"Choose the correct form: Sipho is ___ than his brother.",o:["good","better","best","more good"],a:1,e:"Comparing two people uses the comparative. Good → better."},
{q:"In 'The girl whose bag was stolen cried', 'whose' is a…",o:["relative pronoun","reflexive pronoun","personal pronoun","adjective"],a:0,e:"Who, whom, whose, which and that link a clause to a noun: relative pronouns."}],
pq:[
{q:"Which word is a common noun?",o:["Monday","Cape Town","dog","Nomsa"],a:2,h:"Common nouns don't need a capital letter.",e:"Dog is an ordinary thing, so it is a common noun."},
{q:"A ___ of bees.",o:["swarm","pride","herd","pack"],a:0,h:"Picture a buzzing cloud of insects.",e:"A group of bees is a swarm."},
{q:"What is the plural of 'box'?",o:["boxs","boxes","boxies","boxen"],a:1,h:"Words ending in x add two letters.",e:"Nouns ending in -x add -es: boxes."},
{q:"Which is a possessive pronoun?",o:["they","theirs","themselves","them"],a:1,h:"It shows something belongs to someone.",e:"Theirs shows ownership: The house is theirs."},
{q:"bad → worse → ___",o:["badder","worst","baddest","more bad"],a:1,h:"It's irregular, like good → better → best.",e:"Bad, worse, worst."}],
cq:[
{q:"Which sentence uses the comparative correctly?",o:["She is the more clever of all.","She is cleverer than her sister.","She is cleverest than me.","She is more cleverer."],a:1,e:"Comparing two people: cleverer than. Never use 'more' and '-er' together."},
{q:"What is the plural of 'tooth'?",o:["tooths","teeths","teeth","toothes"],a:2,e:"Tooth has an irregular plural: teeth."},
{q:"'Freedom' is which kind of noun?",o:["Abstract","Collective","Proper","Common concrete"],a:0,e:"Freedom is an idea, so it is abstract."},
{q:"Choose the correct pronoun: The teacher gave the books to Ayanda and ___.",o:["I","me","myself","mine"],a:1,e:"After 'to' the pronoun is an object, so use 'me'."},
{q:"In 'Those shoes are mine', 'those' is a…",o:["demonstrative","reflexive pronoun","relative pronoun","possessive pronoun"],a:0,e:"This, that, these and those point things out: demonstratives."}]},

{id:"g7-eng-verbs",grade:7,term:0,subject:"eng",strand:"Language structures",title:"Verbs, tenses and concord",
notes:`<h2>Verbs</h2>
<p>A verb is a doing or being word: <i>run, think, is, have</i>. Every sentence needs a verb.</p>
<h2>The main tenses</h2>
<div class="tbl"><table><tr><th>Tense</th><th>Example</th></tr>
<tr><td>Simple present</td><td>She <b>walks</b> to school.</td></tr>
<tr><td>Present continuous</td><td>She <b>is walking</b> to school.</td></tr>
<tr><td>Simple past</td><td>She <b>walked</b> to school.</td></tr>
<tr><td>Past continuous</td><td>She <b>was walking</b> to school.</td></tr>
<tr><td>Present perfect</td><td>She <b>has walked</b> to school.</td></tr>
<tr><td>Simple future</td><td>She <b>will walk</b> to school.</td></tr></table></div>
<h2>Irregular verbs</h2>
<p>Some verbs don't add -ed in the past: go → <b>went</b> → (has) <b>gone</b>; eat → ate → eaten; write → wrote → written; swim → swam → swum; buy → bought → bought; see → saw → seen.</p>
<h2>Concord (subject–verb agreement)</h2>
<ul><li>A singular subject takes a singular verb: <i>The dog <b>barks</b>.</i></li>
<li>A plural subject takes a plural verb: <i>The dogs <b>bark</b>.</i></li>
<li><i>Each, every, everyone, nobody, either, neither</i> are singular: <i>Everyone <b>is</b> here.</i></li>
<li>Ignore words between the subject and the verb: <i>The box of apples <b>is</b> heavy.</i> (the box is)</li></ul>
<div class="key">To find the tense, look at the verb and any helping verb (is, was, has, will).</div>`,
qs:[
{q:"Which tense is used: 'They are playing soccer.'",o:["Simple present","Present continuous","Past continuous","Simple future"],a:1,e:"am/is/are + -ing is the present continuous."},
{q:"Change to the simple past: 'I eat an apple.'",o:["I eaten an apple.","I ate an apple.","I have eat an apple.","I eated an apple."],a:1,e:"Eat is irregular: the simple past is ate."},
{q:"Which is the past participle of 'write'?",o:["wrote","writed","written","writing"],a:2,e:"write → wrote → (has) written."},
{q:"Choose the correct verb: Everyone ___ excited about the trip.",o:["are","is","were","be"],a:1,e:"Everyone is singular, so it takes 'is'."},
{q:"Choose the correct verb: The box of pencils ___ on the desk.",o:["are","were","is","be"],a:2,e:"The subject is 'box' (singular), so use 'is'."},
{q:"Change to the future tense: 'We visit Gogo.'",o:["We visited Gogo.","We will visit Gogo.","We are visiting Gogo.","We have visited Gogo."],a:1,e:"The simple future uses will + verb."},
{q:"Which tense: 'She has finished her homework.'",o:["Present perfect","Simple past","Past continuous","Simple present"],a:0,e:"has/have + past participle is the present perfect."},
{q:"Which sentence is correct?",o:["The children was singing.","The children were singing.","The children is singing.","The children be singing."],a:1,e:"Children is plural, so use 'were'."},
{q:"What is the past tense of 'buy'?",o:["buyed","bought","brought","buys"],a:1,e:"buy → bought. (Brought is the past of bring.)"},
{q:"Which sentence is in the past continuous tense?",o:["He runs fast.","He was running fast.","He has run fast.","He will run fast."],a:1,e:"was/were + -ing is the past continuous."}],
pq:[
{q:"Which word is a verb?",o:["quickly","jump","happy","table"],a:1,h:"It's something you can do.",e:"Jump is an action, so it is a verb."},
{q:"Past tense of 'go'?",o:["goed","gone","went","going"],a:2,h:"It's irregular and looks nothing like 'go'.",e:"go → went → gone."},
{q:"The dogs ___ loudly.",o:["barks","bark","is barking","has barked"],a:1,h:"Dogs is plural.",e:"A plural subject takes the plural verb: bark."},
{q:"'I will help you.' Which tense?",o:["Simple future","Simple past","Present perfect","Present continuous"],a:0,h:"Look at the helping verb 'will'.",e:"will + verb is the simple future."},
{q:"Neither of the boys ___ ready.",o:["are","is","were","be"],a:1,h:"Neither means 'not one', which is singular.",e:"Neither is singular: is."}],
cq:[
{q:"Change to the present perfect: 'He sees the movie.'",o:["He saw the movie.","He has seen the movie.","He has saw the movie.","He is seeing the movie."],a:1,e:"has + past participle (seen)."},
{q:"Choose the correct verb: Each of the learners ___ a book.",o:["have","has","are having","were having"],a:1,e:"Each is singular, so 'has'."},
{q:"Past participle of 'swim'?",o:["swam","swimmed","swum","swimming"],a:2,e:"swim → swam → (has) swum."},
{q:"Which sentence has an error in concord?",o:["My friends are kind.","The team is winning.","She play netball.","They play netball."],a:2,e:"She is singular, so it should be 'She plays'."},
{q:"'We were eating when the lights went out.' 'were eating' is in the…",o:["past continuous","simple past","present perfect","future"],a:0,e:"were + -ing shows an action in progress in the past."}]},

{id:"g7-eng-punctuation",grade:7,term:0,subject:"eng",strand:"Language structures",title:"Punctuation and sentence types",
notes:`<h2>Four kinds of sentences</h2>
<div class="tbl"><table><tr><th>Type</th><th>Job</th><th>Ends with</th><th>Example</th></tr>
<tr><td>Statement</td><td>Gives information</td><td>.</td><td>The bus is late.</td></tr>
<tr><td>Question</td><td>Asks something</td><td>?</td><td>Is the bus late?</td></tr>
<tr><td>Command</td><td>Gives an instruction</td><td>. or !</td><td>Close the door.</td></tr>
<tr><td>Exclamation</td><td>Shows strong feeling</td><td>!</td><td>What a lovely day!</td></tr></table></div>
<h2>Simple, compound and complex sentences</h2>
<ul><li><b>Simple:</b> one main clause. <i>I ran.</i></li>
<li><b>Compound:</b> two main clauses joined by <i>and, but, or, so</i>. <i>I ran, but I missed the bus.</i></li>
<li><b>Complex:</b> a main clause + a dependent clause (because, when, although, if). <i>I ran because I was late.</i></li></ul>
<h2>Punctuation marks</h2>
<ul><li><b>Capital letter</b>: start of a sentence, names, the word I.</li>
<li><b>Comma ,</b> separates items in a list, and goes after an introductory word: <i>Yes, I'm coming.</i></li>
<li><b>Apostrophe '</b> shows (1) <b>contraction</b>: do not → don't, it is → it's; (2) <b>possession</b>: the girl's bag (one girl), the girls' bags (more than one girl).</li>
<li><b>Inverted commas " "</b> go around the exact words someone says.</li>
<li><b>Colon :</b> introduces a list. <b>Brackets ( )</b> add extra information.</li></ul>
<div class="key">its = belonging to it (the dog wagged its tail). it's = it is.</div>`,
qs:[
{q:"What kind of sentence is 'Please sit down.'?",o:["Statement","Question","Command","Exclamation"],a:2,e:"It gives an instruction, so it is a command."},
{q:"Which sentence is punctuated correctly?",o:["where are you going.","Where are you going?","where are you going?","Where are you going!"],a:1,e:"A question starts with a capital letter and ends with a question mark."},
{q:"Which shows possession correctly for ONE boy?",o:["the boys bike","the boy's bike","the boys' bike","the boy,s bike"],a:1,e:"For one owner, add 's: the boy's bike."},
{q:"Which shows the bags of MANY girls?",o:["the girl's bags","the girls' bags","the girls bag's","the girl bags'"],a:1,e:"Plural ending in s: put the apostrophe after the s."},
{q:"Choose the correct word: The cat licked ___ paw.",o:["it's","its","its'","it is"],a:1,e:"'Its' (no apostrophe) means belonging to it."},
{q:"What is the contraction of 'they are'?",o:["their","there","they're","theyr'e"],a:2,e:"they are → they're. The apostrophe replaces the a."},
{q:"'I was hungry, so I made a sandwich.' This is a…",o:["simple sentence","compound sentence","complex sentence","question"],a:1,e:"Two main clauses joined by 'so' make a compound sentence."},
{q:"'She stayed home because she was sick.' This is a…",o:["simple sentence","compound sentence","complex sentence","command"],a:2,e:"'Because she was sick' is a dependent clause, so the sentence is complex."},
{q:"Which punctuation mark introduces a list?",o:["Colon","Apostrophe","Brackets","Question mark"],a:0,e:"A colon introduces a list: Bring the following: a pen, a ruler and glue."},
{q:"Where do the commas go? 'We bought eggs milk bread and jam.'",o:["eggs, milk, bread and jam","eggs milk, bread, and, jam","eggs, milk bread and, jam","No commas needed"],a:0,e:"Commas separate items in a list; there's usually no comma before 'and'."}],
pq:[
{q:"Which ends with an exclamation mark?",o:["What time is it","Wow, that was amazing","I live in Soweto","Can you help me"],a:1,h:"Which one shows strong feeling?",e:"Wow, that was amazing! shows strong feeling."},
{q:"Contraction of 'do not'?",o:["dont","do'nt","don't","dont'"],a:2,h:"The apostrophe replaces the missing letter o.",e:"do not → don't."},
{q:"Which word always needs a capital letter?",o:["school","Monday","dog","river"],a:1,h:"Days of the week are names.",e:"Monday is a proper noun."},
{q:"'It's raining.' What does it's mean?",o:["belonging to it","it is","it was","its own"],a:1,h:"Expand the contraction.",e:"it's = it is."},
{q:"A sentence with only one main clause is…",o:["simple","compound","complex","a phrase"],a:0,h:"It's the most basic kind.",e:"One main clause = simple sentence."}],
cq:[
{q:"Which sentence is correct?",o:["The dog wagged it's tail.","Its going to rain.","It's a lovely day.","The cat lost it's collar."],a:2,e:"It's = it is. 'It is a lovely day' makes sense."},
{q:"Choose the correctly punctuated sentence.",o:["The learners' books were collected.","The learner's' books were collected.","The learners books' were collected.","The learners's books were collected."],a:0,e:"Many learners own the books: learners'."},
{q:"Which word turns two simple sentences into a complex sentence?",o:["and","but","although","or"],a:2,e:"Although starts a dependent clause, making a complex sentence."},
{q:"What are brackets used for?",o:["To end a question","To add extra information","To show possession","To join two sentences"],a:1,e:"Brackets hold extra information: Mr Dube (our coach) was proud."},
{q:"'Stop!' shouted the guard. 'Stop' here is a…",o:["statement","question","command","complex sentence"],a:2,e:"It gives an order, so it is a command."}]},

{id:"g7-eng-speech",grade:7,term:0,subject:"eng",strand:"Language structures",title:"Direct and indirect speech",
notes:`<h2>Direct speech</h2>
<p>Direct speech gives the <b>exact words</b> spoken, inside inverted commas.</p>
<div class="ex"><b>Example</b>"I am tired," said Thandi.<br>Mother asked, "Where are you going?"</div>
<ul><li>Start the spoken words with a capital letter.</li>
<li>Punctuation that belongs to the speech goes <b>inside</b> the inverted commas.</li>
<li>Start a new paragraph each time a new person speaks.</li></ul>
<h2>Indirect (reported) speech</h2>
<p>Indirect speech reports what was said, without inverted commas, usually after <i>that</i>.</p>
<div class="tbl"><table><tr><th>Change</th><th>Direct</th><th>Indirect</th></tr>
<tr><td>Tense goes one step back</td><td>am / is</td><td>was</td></tr>
<tr><td></td><td>walk</td><td>walked</td></tr>
<tr><td></td><td>will</td><td>would</td></tr>
<tr><td></td><td>can</td><td>could</td></tr>
<tr><td>Pronouns change</td><td>I, my</td><td>he/she, his/her</td></tr>
<tr><td>Time and place words</td><td>today, tomorrow, now, here, this</td><td>that day, the next day, then, there, that</td></tr></table></div>
<div class="ex"><b>Example</b>"I will come tomorrow," said Bongani.<br>→ Bongani said that he <b>would</b> come <b>the next day</b>.</div>
<h2>Questions and commands</h2>
<ul><li>Questions: use <i>asked if/whether</i> or the question word, and drop the question mark. "Are you ready?" she asked. → She asked <b>if I was</b> ready.</li>
<li>Commands: use <i>told/ordered … to</i>. "Sit down," said the teacher. → The teacher told us <b>to sit</b> down.</li></ul>`,
qs:[
{q:"Which sentence is correctly punctuated direct speech?",o:["\"I am hungry, said Musa.\"","\"I am hungry,\" said Musa.","I am hungry, \"said Musa.\"","\"I am hungry\" said Musa,"],a:1,e:"Only the spoken words go inside the inverted commas, with the comma inside."},
{q:"Change to indirect speech: \"I am tired,\" said Lindi.",o:["Lindi said that she is tired.","Lindi said that I was tired.","Lindi said that she was tired.","Lindi said that she will be tired."],a:2,e:"I → she, am → was."},
{q:"In indirect speech, 'will' usually becomes…",o:["shall","would","was","can"],a:1,e:"The tense goes one step back: will → would."},
{q:"In indirect speech, 'tomorrow' becomes…",o:["today","the next day","yesterday","the day before"],a:1,e:"tomorrow → the next day (or the following day)."},
{q:"Change to indirect speech: \"Can you swim?\" Sipho asked me.",o:["Sipho asked me can I swim.","Sipho asked me if I could swim.","Sipho asked me if I can swim?","Sipho asked me that I could swim."],a:1,e:"Questions use 'if', the tense goes back (can → could) and the question mark falls away."},
{q:"Change to indirect speech: \"Close the window,\" said the teacher.",o:["The teacher said close the window.","The teacher told us to close the window.","The teacher told us that we closed the window.","The teacher asked if we close the window."],a:1,e:"Commands become told + to + verb."},
{q:"In indirect speech, 'here' becomes…",o:["there","now","this","then"],a:0,e:"here → there."},
{q:"Change to direct speech: Ayanda said that she liked music.",o:["Ayanda said, \"She liked music.\"","Ayanda said, \"I like music.\"","Ayanda said, \"I liked music\".","Ayanda said \"she likes music.\""],a:1,e:"Return to the speaker's own words: she → I, liked → like."},
{q:"When do you start a new paragraph in a dialogue?",o:["After every sentence","When a new person speaks","Only at the end","Never"],a:1,e:"Each new speaker gets a new paragraph."},
{q:"\"We play soccer every day,\" said the boys. Indirect:",o:["The boys said that they played soccer every day.","The boys said that we play soccer every day.","The boys said that they will play soccer.","The boys said they plays soccer every day."],a:0,e:"we → they, play → played."}],
pq:[
{q:"What do inverted commas show?",o:["A list","The exact words spoken","A question","Possession"],a:1,h:"They are also called speech marks.",e:"Inverted commas surround the speaker's exact words."},
{q:"In indirect speech, 'is' becomes…",o:["are","was","will be","be"],a:1,h:"Move the tense one step into the past.",e:"is → was."},
{q:"Indirect: \"My bag is heavy,\" said Zola. → Zola said that ___ bag was heavy.",o:["my","her","your","their"],a:1,h:"Zola is reporting about herself in the third person.",e:"my → her."},
{q:"In indirect speech, 'now' becomes…",o:["then","today","there","soon"],a:0,h:"It's no longer the moment of speaking.",e:"now → then."},
{q:"Which word often introduces reported speech?",o:["but","that","because","although"],a:1,h:"He said ___ he was late.",e:"He said that he was late."}],
cq:[
{q:"Change to indirect: \"I will phone you today,\" Mom told me.",o:["Mom told me that she would phone me that day.","Mom told me that I will phone you today.","Mom told me she will phone me today.","Mom told me that she would phone you that day."],a:0,e:"I → she, will → would, you → me, today → that day."},
{q:"Change to indirect: \"Where do you live?\" he asked.",o:["He asked where did I live.","He asked where I lived.","He asked where do I live?","He asked that where I lived."],a:1,e:"Use normal word order, past tense, no question mark."},
{q:"Which direct speech sentence is correct?",o:["Dad asked, \"are you ready?\"","Dad asked, \"Are you ready?\"","Dad asked \"Are you ready\"?","Dad asked, \"Are you ready\"?"],a:1,e:"Comma before the speech, capital letter, question mark inside the inverted commas."},
{q:"In indirect speech, 'this' becomes…",o:["these","that","those","the"],a:1,e:"this → that."},
{q:"Change to indirect: \"Don't run!\" said the coach.",o:["The coach told us not to run.","The coach said don't run.","The coach told us to not running.","The coach asked if we ran."],a:0,e:"Negative commands become told … not to + verb."}]},

{id:"g7-eng-voice",grade:7,term:0,subject:"eng",strand:"Language structures",title:"Active and passive voice",
notes:`<h2>Active voice</h2>
<p>In the active voice, the <b>subject does the action</b>.</p>
<div class="ex"><b>Example</b><b>The dog</b> chased the cat. (The dog does the chasing.)</div>
<h2>Passive voice</h2>
<p>In the passive voice, the subject <b>receives the action</b>. Use a form of <b>to be</b> + the <b>past participle</b>, and often <i>by</i>.</p>
<div class="ex"><b>Example</b><b>The cat</b> was chased by the dog.</div>
<h2>How to change active to passive</h2>
<ol><li>Find the object (who/what receives the action) and make it the new subject.</li>
<li>Keep the <b>same tense</b> by choosing the right form of 'to be'.</li>
<li>Add the past participle of the main verb.</li>
<li>Put the old subject after <i>by</i> (you can leave it out if it isn't important).</li></ol>
<div class="tbl"><table><tr><th>Tense</th><th>Active</th><th>Passive</th></tr>
<tr><td>Simple present</td><td>Thabo <b>writes</b> a letter.</td><td>A letter <b>is written</b> by Thabo.</td></tr>
<tr><td>Simple past</td><td>Thabo <b>wrote</b> a letter.</td><td>A letter <b>was written</b> by Thabo.</td></tr>
<tr><td>Simple future</td><td>Thabo <b>will write</b> a letter.</td><td>A letter <b>will be written</b> by Thabo.</td></tr>
<tr><td>Present continuous</td><td>Thabo <b>is writing</b> a letter.</td><td>A letter <b>is being written</b> by Thabo.</td></tr>
<tr><td>Present perfect</td><td>Thabo <b>has written</b> a letter.</td><td>A letter <b>has been written</b> by Thabo.</td></tr></table></div>
<div class="key">If the object is plural, use the plural verb: The windows <b>were</b> broken by the storm.</div>`,
qs:[
{q:"Which sentence is in the passive voice?",o:["The girl kicked the ball.","The ball was kicked by the girl.","The girl is kicking the ball.","The girl will kick the ball."],a:1,e:"The ball receives the action, with was + past participle."},
{q:"Change to passive: 'The chef cooks the meal.'",o:["The meal was cooked by the chef.","The meal is cooked by the chef.","The meal cooks the chef.","The meal is cooking by the chef."],a:1,e:"Simple present active → is + past participle."},
{q:"Change to passive: 'The learners cleaned the classroom.'",o:["The classroom is cleaned by the learners.","The classroom was cleaned by the learners.","The classroom has cleaned the learners.","The classroom were cleaned by the learners."],a:1,e:"Simple past active → was + past participle; classroom is singular."},
{q:"Change to passive: 'The farmer will sell the eggs.'",o:["The eggs will be sold by the farmer.","The eggs will sold by the farmer.","The eggs are sold by the farmer.","The eggs would be sell by the farmer."],a:0,e:"Future → will be + past participle."},
{q:"Change to active: 'The song was sung by the choir.'",o:["The choir sings the song.","The choir sang the song.","The choir has sung the song.","The song sang the choir."],a:1,e:"was sung (past) → sang (past)."},
{q:"Change to passive: 'Mom has baked a cake.'",o:["A cake was baked by Mom.","A cake has been baked by Mom.","A cake is baked by Mom.","A cake has baked by Mom."],a:1,e:"Present perfect → has been + past participle."},
{q:"Change to passive: 'Someone is painting the house.'",o:["The house is painted.","The house is being painted.","The house was being painted.","The house has painted."],a:1,e:"Present continuous → is being + past participle. 'Someone' can be left out."},
{q:"In 'The windows were broken by the storm', who did the action?",o:["the windows","the storm","nobody","the builder"],a:1,e:"The doer comes after 'by': the storm."},
{q:"Change to passive: 'The dog bit the postman.'",o:["The postman was bitten by the dog.","The postman was bit by the dog.","The postman bitten the dog.","The postman is bitten by the dog."],a:0,e:"bit → was bitten (past participle of bite)."},
{q:"Which form of 'to be' is correct? 'The letters ___ posted yesterday.'",o:["was","were","is","be"],a:1,e:"Letters is plural and it's past tense: were."}],
pq:[
{q:"In the active voice, the subject…",o:["receives the action","does the action","is left out","is always plural"],a:1,h:"Active = the subject is active.",e:"In active voice the subject performs the action."},
{q:"The passive voice uses 'to be' + …",o:["the -ing form","the past participle","the base verb","an adjective"],a:1,h:"Like eaten, written, broken.",e:"Passive = to be + past participle."},
{q:"Which word often shows the doer in a passive sentence?",o:["by","to","for","with"],a:0,h:"The cake was eaten ___ the children.",e:"'by' introduces the doer."},
{q:"Passive: 'Zanele opens the door.' → The door ___ by Zanele.",o:["was opened","is opened","opens","will open"],a:1,h:"The active is in the simple present.",e:"Simple present → is opened."},
{q:"Which sentence is passive?",o:["Dad washed the car.","The car was washed.","Dad is washing the car.","Dad will wash the car."],a:1,h:"Find the subject that isn't doing anything.",e:"The car receives the action, so it's passive."}],
cq:[
{q:"Change to passive: 'The teacher will mark the tests.'",o:["The tests will be marked by the teacher.","The tests will marked by the teacher.","The tests are marked by the teacher.","The tests were marked by the teacher."],a:0,e:"Future → will be + marked."},
{q:"Change to active: 'The match was won by our team.'",o:["Our team wins the match.","Our team won the match.","Our team has won the match.","The match won our team."],a:1,e:"was won → won (simple past)."},
{q:"Change to passive: 'The boys are building a fort.'",o:["A fort is built by the boys.","A fort is being built by the boys.","A fort was built by the boys.","A fort are being built by the boys."],a:1,e:"Present continuous → is being built."},
{q:"Change to passive: 'Lerato wrote these poems.'",o:["These poems was written by Lerato.","These poems were written by Lerato.","These poems are written by Lerato.","These poems were wrote by Lerato."],a:1,e:"Plural subject, past tense: were written."},
{q:"Why might a writer use the passive voice?",o:["When the doer is unknown or unimportant","To make every sentence shorter","To change the tense","To ask a question"],a:0,e:"E.g. 'My phone was stolen' when we don't know who did it."}]},

{id:"g7-eng-figures",grade:7,term:0,subject:"eng",strand:"Literature",title:"Figures of speech and poetry",
notes:`<h2>Figures of speech</h2>
<div class="tbl"><table><tr><th>Figure</th><th>What it is</th><th>Example</th></tr>
<tr><td><b>Simile</b></td><td>Compares using <i>like</i> or <i>as</i></td><td>She is as brave as a lion.</td></tr>
<tr><td><b>Metaphor</b></td><td>Says one thing <i>is</i> another</td><td>The classroom was a zoo.</td></tr>
<tr><td><b>Personification</b></td><td>Gives human qualities to a non-human thing</td><td>The wind whispered through the trees.</td></tr>
<tr><td><b>Hyperbole</b></td><td>Huge exaggeration</td><td>I've told you a million times!</td></tr>
<tr><td><b>Alliteration</b></td><td>Same consonant sound at the start of nearby words</td><td>Sizzling sausages sang softly.</td></tr>
<tr><td><b>Onomatopoeia</b></td><td>A word that sounds like its meaning</td><td>buzz, bang, splash, hiss</td></tr>
<tr><td><b>Oxymoron</b></td><td>Two opposite words together</td><td>deafening silence</td></tr></table></div>
<h2>Parts of a poem</h2>
<ul><li><b>Stanza</b>: a group of lines (like a paragraph in a poem).</li>
<li><b>Rhyme scheme</b>: the pattern of rhyming end words, labelled a, b, c… e.g. <i>aabb</i> or <i>abab</i>.</li>
<li><b>Rhythm</b>: the beat of the poem. <b>Repetition</b> stresses an idea.</li>
<li><b>Tone</b>: the poet's attitude (angry, joyful, sad). <b>Mood</b>: the feeling the reader gets.</li>
<li><b>Theme</b>: the main message of the poem.</li></ul>
<div class="key">In an exam, name the figure of speech AND say what it shows or why the poet used it.</div>`,
qs:[
{q:"'Her smile was as bright as the sun.' This is a…",o:["metaphor","simile","personification","hyperbole"],a:1,e:"It compares using 'as', so it's a simile."},
{q:"'Time is a thief.' This is a…",o:["simile","metaphor","onomatopoeia","alliteration"],a:1,e:"It says time IS a thief, without like or as: a metaphor."},
{q:"'The old car groaned up the hill.' This is…",o:["personification","simile","hyperbole","oxymoron"],a:0,e:"A car can't groan like a person, so it's personification."},
{q:"'I'm so hungry I could eat a horse.' This is…",o:["alliteration","hyperbole","metaphor","onomatopoeia"],a:1,e:"It's a huge exaggeration: hyperbole."},
{q:"Which is an example of onomatopoeia?",o:["sizzle","beautiful","quickly","enormous"],a:0,e:"Sizzle sounds like the noise it describes."},
{q:"'Peter Piper picked a peck of pickled peppers' shows…",o:["alliteration","simile","oxymoron","personification"],a:0,e:"The repeated p sound is alliteration."},
{q:"What is a stanza?",o:["A rhyming word","A group of lines in a poem","The title of a poem","The poet's name"],a:1,e:"A stanza is a group of lines, like a paragraph."},
{q:"A poem's end words go: day, play, night, light. The rhyme scheme is…",o:["abab","aabb","abba","abcd"],a:1,e:"day/play rhyme (a a), night/light rhyme (b b): aabb."},
{q:"'Bittersweet' is an example of…",o:["onomatopoeia","oxymoron","simile","hyperbole"],a:1,e:"Bitter and sweet are opposites put together: oxymoron."},
{q:"The main message of a poem is its…",o:["rhyme","theme","stanza","rhythm"],a:1,e:"The theme is the central message."}],
pq:[
{q:"Which word signals a simile?",o:["is","like","was","very"],a:1,h:"Similes use 'like' or 'as'.",e:"Like (or as) signals a simile."},
{q:"'The stars danced in the sky.' Which figure?",o:["Personification","Simile","Alliteration","Hyperbole"],a:0,h:"Can stars really dance?",e:"Stars are given a human action."},
{q:"Which is onomatopoeia?",o:["bang","quiet","run","tree"],a:0,h:"Say it aloud: does it sound like the noise?",e:"Bang imitates a loud noise."},
{q:"'He is a rock.' What is the figure of speech?",o:["Metaphor","Simile","Onomatopoeia","Oxymoron"],a:0,h:"There's no 'like' or 'as'.",e:"Saying he IS a rock is a metaphor."},
{q:"The feeling a poem creates in the reader is the…",o:["mood","stanza","rhyme","title"],a:0,h:"It's about how you feel when reading.",e:"Mood is the feeling the reader gets."}],
cq:[
{q:"'The leaves were a golden carpet.' What does the metaphor suggest?",o:["The leaves covered the ground thickly","The leaves were made of gold","The leaves were sold in a shop","The leaves were small"],a:0,e:"Like a carpet, the leaves covered the ground."},
{q:"'Wild winds whipped the walls.' Which TWO devices are used?",o:["Alliteration and personification","Simile and hyperbole","Oxymoron and simile","Onomatopoeia and metaphor"],a:0,e:"Repeated w sound (alliteration); winds 'whipping' is a human action (personification)."},
{q:"Rhyme scheme of: cat, sun, hat, fun?",o:["aabb","abab","abba","aaaa"],a:1,e:"cat/hat = a, sun/fun = b: abab."},
{q:"'I waited forever for the bus.' Why does the writer use hyperbole?",o:["To stress how long and frustrating the wait felt","To show the bus was fast","To compare the bus to time","To make a sound"],a:0,e:"The exaggeration stresses the frustration."},
{q:"The poet's attitude towards the subject is called the…",o:["tone","mood","theme","stanza"],a:0,e:"Tone is the poet's attitude; mood is the reader's feeling."}]},

{id:"g7-eng-comprehension",grade:7,term:0,subject:"eng",strand:"Reading",title:"Comprehension and summary",
notes:`<h2>Reading for comprehension</h2>
<ol><li>Read the questions first so you know what to look for.</li>
<li>Read the whole passage once for the general idea, then again carefully.</li>
<li>Look at the marks: 2 marks usually need two points.</li></ol>
<h2>Kinds of questions</h2>
<ul><li><b>Literal</b>: the answer is written in the text. "When did the storm start?"</li>
<li><b>Inferential</b>: read between the lines. "Why do you think the girl was nervous?"</li>
<li><b>Evaluative</b>: give your opinion with a reason from the text. "Do you agree with the farmer? Explain."</li>
<li><b>Vocabulary</b>: find a word that means… or explain a word using the context (the words around it).</li></ul>
<h2>Answering well</h2>
<ul><li>Answer in full sentences unless told otherwise. Use your own words when asked.</li>
<li>"Quote" means copy the exact words, in inverted commas.</li>
<li>Fact = can be proved. Opinion = what someone thinks or feels.</li></ul>
<h2>Writing a summary</h2>
<ol><li>Find the <b>main points</b> only. Leave out examples, details, repetition and figures of speech.</li>
<li>Write the points in <b>your own words</b>, in full sentences.</li>
<li>Keep to the <b>word limit</b> and write the word count at the end.</li></ol>
<div class="key">A topic sentence (often the first sentence of a paragraph) usually holds that paragraph's main idea.</div>`,
qs:[
{q:"A question whose answer is written directly in the text is…",o:["literal","inferential","evaluative","creative"],a:0,e:"Literal questions ask for facts stated in the passage."},
{q:"'Why do you think the boy hid behind the door?' This is…",o:["literal","inferential","a vocabulary question","a summary"],a:1,e:"You have to work out the reason: inferential."},
{q:"What does 'quote' mean in a comprehension question?",o:["Use your own words","Copy the exact words from the text","Give your opinion","Draw a picture"],a:1,e:"Quoting means copying the exact words in inverted commas."},
{q:"Which is a FACT?",o:["Soccer is the best sport.","Johannesburg is in Gauteng.","Winter is the nicest season.","Maths is boring."],a:1,e:"It can be checked and proved."},
{q:"Which is an OPINION?",o:["Water boils at 100 °C at sea level.","Pretoria is a city.","Pizza is the tastiest food.","A week has seven days."],a:2,e:"'Tastiest' is a personal view, not provable."},
{q:"What should you leave OUT of a summary?",o:["Main points","Examples and repetition","Full sentences","The word count"],a:1,e:"Summaries keep only the main points."},
{q:"Where is the main idea of a paragraph often found?",o:["In the topic sentence","In the last word","In the title only","In brackets"],a:0,e:"The topic sentence, often first, states the main idea."},
{q:"A question worth 2 marks usually needs…",o:["one word","two points","a drawing","a quote only"],a:1,e:"Marks usually show how many points you need."},
{q:"Using the words around an unfamiliar word to work out its meaning is called using…",o:["context","a summary","a quote","the title"],a:0,e:"Context clues help you find the meaning."},
{q:"'Do you agree with how the mayor acted? Give a reason.' This is…",o:["literal","evaluative","a vocabulary question","a summary"],a:1,e:"You judge and give your opinion with a reason: evaluative."}],
pq:[
{q:"What should you read first in a comprehension test?",o:["The questions","Only the last paragraph","The mark total","Nothing"],a:0,h:"It helps you know what to look for.",e:"Reading the questions first focuses your reading."},
{q:"A summary should be written in…",o:["point form copied from the text","your own words, in full sentences","bullet points with examples","direct speech"],a:1,h:"Don't copy whole sentences.",e:"Use your own words and full sentences."},
{q:"Which one is a fact?",o:["Blue is the best colour.","The sky is blue on a clear day.","Clear days are boring.","Everyone loves the sky."],a:1,h:"Which can be checked?",e:"It can be observed, so it's a fact."},
{q:"At the end of a summary you should write…",o:["your name","the word count","a title in capitals","a question"],a:1,h:"Teachers check you kept to the limit.",e:"Write the number of words you used."},
{q:"'Why was the girl nervous?' The text doesn't say it directly. This is…",o:["inferential","literal","a vocabulary question","a summary"],a:0,h:"You must read between the lines.",e:"You infer the answer from clues."}],
cq:[
{q:"The text says 'Sipho's hands shook as he walked on stage.' What can you infer?",o:["Sipho was nervous","Sipho was cold","Sipho was angry","Sipho was bored"],a:0,e:"Shaking hands before going on stage suggests nerves."},
{q:"Which belongs in a summary?",o:["'For example, he once…'","The main point of each paragraph","A simile from the text","The same idea repeated"],a:1,e:"Only main points go in a summary."},
{q:"'Explain in your own words' means you should…",o:["quote the text","rephrase the idea yourself","answer yes or no","write one word"],a:1,e:"Rephrase rather than copy."},
{q:"Which statement is an opinion?",o:["Lions are carnivores.","The Kruger Park is in South Africa.","Lions are the most beautiful animals.","Lions live in prides."],a:2,e:"'Most beautiful' is a personal view."},
{q:"A summary has a 50-word limit. What should you do?",o:["Write as much as you like","Keep to about 50 words and give the count","Write only 10 words","Copy the first 50 words"],a:1,e:"Keep within the limit and show the word count."}]},

{id:"g7-eng-writing",grade:7,term:0,subject:"eng",strand:"Writing",title:"Transactional writing: letters, diaries and invitations",
notes:`<h2>What is transactional writing?</h2>
<p>Writing with a practical purpose, for a specific reader. Know the <b>format</b>, the <b>purpose</b> and the <b>audience</b>.</p>
<h2>Friendly (informal) letter</h2>
<ul><li>Your address top right, then the date underneath.</li>
<li>Greeting: <i>Dear Lindiwe,</i></li>
<li>Body in paragraphs: introduction, news, ending. Friendly, chatty language.</li>
<li>Ending: <i>Your friend,</i> / <i>Love,</i> then your first name.</li></ul>
<h2>Formal letter</h2>
<ul><li>Your address and the date, then the recipient's title and address on the left.</li>
<li>Greeting: <i>Dear Sir/Madam</i> or <i>Dear Mr Dlamini</i>.</li>
<li>A subject line, e.g. <b>RE: REQUEST FOR A SCHOOL TRIP</b>.</li>
<li>Polite, formal language; no slang or contractions.</li>
<li>Ending: <i>Yours faithfully</i> (Sir/Madam) or <i>Yours sincerely</i> (when you used a name), then signature and full name.</li></ul>
<h2>Diary entry</h2>
<ul><li>Day and date at the top, e.g. <i>Friday, 14 November</i>.</li>
<li>Written in the first person (I), mostly in the past tense, about events and <b>feelings</b>.</li></ul>
<h2>Invitation</h2>
<p>Must answer: <b>Who</b> is invited, by whom, <b>what</b> the event is, <b>when</b> (date and time), <b>where</b>, and <b>RSVP</b> (reply by a date, with a contact number).</p>
<div class="key">RSVP means "please reply". It tells the host how many people are coming.</div>`,
qs:[
{q:"Which ending suits a formal letter that began 'Dear Sir/Madam'?",o:["Love,","Yours faithfully,","Your friend,","Cheers,"],a:1,e:"Dear Sir/Madam → Yours faithfully."},
{q:"Which ending suits a formal letter that began 'Dear Mrs Naidoo'?",o:["Yours sincerely,","Yours faithfully,","Love,","Bye,"],a:0,e:"When you use the person's name → Yours sincerely."},
{q:"Where does your address go in a friendly letter?",o:["Top right","Bottom left","Middle of the page","After the greeting"],a:0,e:"Your address goes at the top right."},
{q:"A diary entry is usually written in the…",o:["first person","third person","future tense only","form of a list"],a:0,e:"Diaries are personal: I, me, my."},
{q:"What does RSVP mean on an invitation?",o:["Bring a present","Please reply","Dress code","Party starts"],a:1,e:"RSVP asks the guest to reply."},
{q:"Which detail MUST an invitation include?",o:["The weather","Date, time and place","The guest list","A poem"],a:1,e:"Guests need to know when and where."},
{q:"Which language suits a formal letter?",o:["Hey, what's up?","I would like to request permission…","Gonna come by later","LOL"],a:1,e:"Formal letters use polite, complete language without slang."},
{q:"What is the subject line in a formal letter for?",o:["To say what the letter is about","To greet the reader","To sign off","To give the date"],a:0,e:"It states the purpose in a few words."},
{q:"Who is the audience of a letter to the school principal?",o:["A friend","The principal","Your diary","Your classmates"],a:1,e:"The audience is the person you write to."},
{q:"Which belongs at the top of a diary entry?",o:["Dear Sir","The day and date","Yours faithfully","RSVP"],a:1,e:"Diary entries are dated."}],
pq:[
{q:"A friendly letter is written to…",o:["a friend or family member","a company","a newspaper editor","the mayor"],a:0,h:"Friendly = informal.",e:"Friendly letters go to people you know well."},
{q:"How does a friendly letter usually end?",o:["Yours faithfully","Your friend, + first name","Signature and full name","RE:"],a:1,h:"It's warm and informal.",e:"e.g. Your friend, Thabo."},
{q:"A diary entry focuses on events and…",o:["feelings","prices","addresses","RSVPs"],a:0,h:"It's private and personal.",e:"Diaries describe what happened and how you felt."},
{q:"Which is NOT needed on an invitation?",o:["Venue","Time","Your favourite colour","RSVP"],a:2,h:"What does a guest need to know?",e:"Your favourite colour isn't needed."},
{q:"Which greeting suits a formal letter to an unknown person?",o:["Dear Sir/Madam","Hi there","Dear friend","Yo"],a:0,h:"You don't know their name.",e:"Dear Sir/Madam."}],
cq:[
{q:"You write to the municipality about potholes. Which is correct?",o:["Friendly letter ending 'Love'","Formal letter with a subject line","Diary entry","Invitation"],a:1,e:"A complaint to an organisation is a formal letter."},
{q:"Which sentence is too informal for a formal letter?",o:["I am writing to complain about…","Your guys' service is totally rubbish.","I look forward to your reply.","Thank you for your attention."],a:1,e:"Slang and rudeness don't belong in formal letters."},
{q:"A diary entry about a school trip should mainly use the…",o:["future tense","past tense","command form","passive voice only"],a:1,e:"You write about what happened earlier that day."},
{q:"An invitation says 'RSVP by 5 December to 082 123 4567'. What must guests do?",o:["Arrive on 5 December","Reply by 5 December","Bring R5","Phone after the party"],a:1,e:"They must let the host know if they're coming by that date."},
{q:"In which order do the parts of a friendly letter come?",o:["Greeting, address, body, ending","Address and date, greeting, body, ending","Body, greeting, ending, address","Ending, body, greeting, date"],a:1,e:"Address and date first, then greeting, body and ending."}]}
].forEach(t=>{ mixOpts(t); TOPICS.push(t); TOPIC[t.id]=t; });
