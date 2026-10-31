/* Practice questions (pq, each with a hint h) and extra chapter-test questions (cq) for every topic.
   The chapter test uses the topic's 10 test questions + these 5 practice questions + these 5 chapter questions. */
const EXTRA = {
"g8-math-algebra":{
pq:[
{q:"What is the coefficient of y in 7y² − 4y + 1?",o:["7","−4","4","1"],a:1,h:"Look only at the term with y (not y²). Keep the sign in front of it.",e:"The y-term is −4y, so the coefficient is −4."},
{q:"Simplify: 6a − 2b + 3a + 5b",o:["9a + 3b","9a + 7b","3a + 3b","12ab"],a:0,h:"Put the a-terms together and the b-terms together.",e:"6a + 3a = 9a and −2b + 5b = 3b."},
{q:"If m = 4, what is 3m + 2?",o:["9","14","34","12"],a:1,h:"3m means 3 × m. Replace m with 4 first.",e:"3 × 4 + 2 = 12 + 2 = 14."},
{q:"Solve for x: x − 7 = 12",o:["5","19","−5","84"],a:1,h:"Undo the −7 by doing the opposite to both sides.",e:"Add 7 to both sides: x = 19."},
{q:"Solve for x: 2x + 3 = 11",o:["7","4","5,5","8"],a:1,h:"First remove the +3, then divide.",e:"2x = 8, so x = 4."}],
cq:[
{q:"Solve for x: 5x + 4 = 2x + 19",o:["x = 5","x = 3","x = 23/7","x = 7"],a:0,e:"Subtract 2x: 3x + 4 = 19. Subtract 4: 3x = 15. So x = 5."},
{q:"Simplify: 3(x − 2) + 4x",o:["7x − 2","7x − 6","3x − 6","7x + 6"],a:1,e:"3x − 6 + 4x = 7x − 6."},
{q:"If p = −3, what is 2p² − p?",o:["15","21","−21","39"],a:1,e:"2 × 9 − (−3) = 18 + 3 = 21."},
{q:"When a number is doubled and 5 is added, the answer is 17. What is the number?",o:["11","6","8,5","12"],a:1,e:"2x + 5 = 17, so 2x = 12 and x = 6."},
{q:"Solve for x: 2(x + 3) = 20",o:["x = 7","x = 8,5","x = 10","x = 17"],a:0,e:"2x + 6 = 20, so 2x = 14 and x = 7."}]},

"g9-math-factor":{
pq:[
{q:"Expand: 2a(a + 4)",o:["2a² + 4","2a² + 8a","2a + 8a","a² + 8a"],a:1,h:"Multiply 2a by each term inside the bracket.",e:"2a × a = 2a² and 2a × 4 = 8a."},
{q:"Expand: (x + 2)(x + 5)",o:["x² + 10","x² + 7x + 10","x² + 10x + 7","x² + 7x + 7"],a:1,h:"Use First, Outer, Inner, Last, then add the middle terms.",e:"x² + 5x + 2x + 10 = x² + 7x + 10."},
{q:"Factorise: 5x − 15",o:["5(x − 15)","5(x − 3)","x(5 − 15)","15(x − 1)"],a:1,h:"What is the biggest number that divides both 5 and 15?",e:"The HCF is 5: 5(x − 3)."},
{q:"Factorise: a² − 16",o:["(a − 4)²","(a − 8)(a + 8)","(a − 4)(a + 4)","a(a − 16)"],a:2,h:"Both terms are perfect squares with a minus between them.",e:"Difference of squares: (a − 4)(a + 4)."},
{q:"Factorise: x² + 7x + 12",o:["(x + 3)(x + 4)","(x + 2)(x + 6)","(x + 1)(x + 12)","(x + 7)(x + 12)"],a:0,h:"Find two numbers that multiply to 12 and add to 7.",e:"3 × 4 = 12 and 3 + 4 = 7."}],
cq:[
{q:"Expand: (2x − 3)²",o:["4x² − 9","4x² − 12x + 9","4x² − 6x + 9","2x² − 12x + 9"],a:1,e:"(2x)² − 2(2x)(3) + 3² = 4x² − 12x + 9."},
{q:"Factorise: 3x² − 12x",o:["3(x² − 4x)","3x(x − 4)","x(3x − 12)","3x(x − 12)"],a:1,e:"The HCF is 3x, giving 3x(x − 4). The other forms are not fully factorised or wrong."},
{q:"Factorise: x² − 2x − 15",o:["(x − 5)(x + 3)","(x + 5)(x − 3)","(x − 15)(x + 1)","(x − 5)(x − 3)"],a:0,e:"−5 × 3 = −15 and −5 + 3 = −2."},
{q:"Factorise fully: 5x² − 45",o:["5(x² − 9)","5(x − 3)(x + 3)","(5x − 15)(x + 3)","5(x − 9)(x + 1)"],a:1,e:"Take out 5, then x² − 9 = (x − 3)(x + 3)."},
{q:"Simplify: (x + 4)(x − 4) − x²",o:["−16","16","−8x","2x² − 16"],a:0,e:"(x + 4)(x − 4) = x² − 16, so x² − 16 − x² = −16."}]},

"g8-ns-heat":{
pq:[
{q:"Which material is an insulator?",o:["Aluminium","Polystyrene","Iron","Copper"],a:1,h:"Insulators slow heat down. Think of what cooler boxes are made of.",e:"Polystyrene traps air, so it is a good insulator."},
{q:"Hot water at the bottom of a pot rises to the top. This is…",o:["conduction","convection","radiation","insulation"],a:1,h:"The water itself is moving and carrying the heat.",e:"Moving currents in a liquid are convection."},
{q:"A metal spoon left in a pot of soup gets hot along its handle because of…",o:["convection","radiation","conduction","evaporation"],a:2,h:"The heat passes through a solid, particle to particle.",e:"Heat travels through the solid metal by conduction."},
{q:"You feel the heat of a braai fire on your face from a metre away. This heat reaches you by…",o:["conduction","convection","radiation","reflection"],a:2,h:"You aren't touching the fire, and the heat comes straight at you, not up.",e:"Heat travelling across the gap as waves is radiation."},
{q:"Solar water heater panels are painted black because black surfaces…",o:["reflect heat","absorb radiant heat well","are good conductors","stay cool"],a:1,h:"Think about which colour gets hottest in the sun.",e:"Dull, dark surfaces absorb radiation best."}],
cq:[
{q:"A vacuum flask keeps tea hot mainly because…",o:["the vacuum stops conduction and convection, and shiny walls reduce radiation","the glass produces heat","the lid conducts heat in","the tea stops moving"],a:0,e:"No particles in the vacuum means no conduction or convection; the silvered walls reflect radiation."},
{q:"To heat a room best by convection, a heater should be placed…",o:["near the ceiling","near the floor","outside the window","inside a cupboard"],a:1,e:"Warm air rises from the heater, and cooler air sinks to replace it, so the whole room circulates."},
{q:"An air-conditioner that cools a room works best when placed…",o:["near the floor","high up on the wall","under a table","behind the door"],a:1,e:"Cool air is denser and sinks, setting up a convection current through the room."},
{q:"Why are many roofs in hot areas painted white?",o:["White absorbs more heat","White reflects radiant heat","White is a conductor","White stops convection"],a:1,e:"Light, shiny surfaces reflect radiation, keeping the house cooler."},
{q:"Which statement is correct?",o:["Heat and temperature are the same thing","Heat is energy transferred because of a temperature difference","Cold flows from cold objects to hot objects","Temperature is measured in joules"],a:1,e:"Heat is energy on the move; temperature measures how hot something is, in °C."}]},

"g9-ns-circuits":{
pq:[
{q:"What is the unit of potential difference (voltage)?",o:["ampere","ohm","volt","watt"],a:2,h:"The unit sounds like the word “voltage”.",e:"Potential difference is measured in volts (V)."},
{q:"Which component opens or closes a circuit?",o:["Resistor","Switch","Cell","Bulb"],a:1,h:"You flick this on a wall to turn on a light.",e:"A switch breaks or completes the path."},
{q:"For current to flow, a circuit must be…",o:["open","closed (complete)","broken","made of plastic"],a:1,h:"Charges need a full loop to travel around.",e:"Current only flows in a complete, closed circuit."},
{q:"Lights in a house are wired in…",o:["series","parallel","a single loop","no circuit"],a:1,h:"When one bulb blows at home, do the others go off?",e:"Parallel wiring keeps the other lights working."},
{q:"An electromagnet works because of the… of electric current.",o:["heating effect","lighting effect","magnetic effect","chemical effect"],a:2,h:"The name of the device gives it away.",e:"Current through a coil creates a magnetic field."}],
cq:[
{q:"Two identical bulbs are moved from series to parallel with the same battery. The bulbs will be…",o:["dimmer","brighter","the same","off"],a:1,e:"In parallel each bulb gets the full battery voltage, so more current flows through each."},
{q:"An ammeter reads 0,5 A before a bulb in a series circuit. What does it read after the bulb?",o:["0 A","0,25 A","0,5 A","1 A"],a:2,e:"Current is the same everywhere in a series circuit."},
{q:"A 6 V battery is connected to two identical bulbs in series. What is the voltage across each bulb?",o:["6 V","3 V","12 V","2 V"],a:1,e:"The battery's voltage is shared equally between identical bulbs in series."},
{q:"Why are electrical wires covered in rubber or plastic?",o:["To conduct better","Because these are insulators that keep us safe","To make them heavier","To increase current"],a:1,e:"Insulating covers stop current reaching people and other conductors."},
{q:"Which change will increase the current in a simple circuit?",o:["Add another bulb in series","Add another cell in series","Use a longer thin wire","Open the switch"],a:1,e:"More cells means a bigger voltage, which pushes more current."}]},

"g8-eng-grammar":{
pq:[
{q:"Which word is a proper noun?",o:["city","Durban","river","teacher"],a:1,h:"Proper nouns name a specific person or place and start with a capital letter.",e:"Durban is the name of a specific city."},
{q:"Find the verb: “The dog barked at the gate.”",o:["dog","barked","at","gate"],a:1,h:"Which word shows the action?",e:"“Barked” is what the dog did."},
{q:"Find the adjective: “She wore a red dress.”",o:["She","wore","red","dress"],a:2,h:"Which word describes the dress?",e:"“Red” describes the noun “dress”."},
{q:"What is the superlative form of “tall”?",o:["taller","more tall","tallest","most tallest"],a:2,h:"Superlative compares three or more: the most.",e:"tall → taller → tallest."},
{q:"Which is a simple sentence?",o:["Lerato reads every night.","Lerato reads and Thabo sleeps.","When it is late, Lerato reads.","Reading at night."],a:0,h:"A simple sentence has only one main clause.",e:"It has one subject and one verb, so it is simple."}],
cq:[
{q:"In “Happiness is important”, the word “happiness” is…",o:["a common noun","an abstract noun","a verb","an adjective"],a:1,e:"Happiness is a feeling you can't touch, so it is abstract."},
{q:"Find the adverb of time: “We will travel tomorrow.”",o:["We","will","travel","tomorrow"],a:3,e:"“Tomorrow” tells us when."},
{q:"Join into one complex sentence: “It was cold. We went outside.”",o:["It was cold we went outside.","Although it was cold, we went outside.","It was cold and we went outside.","Cold, outside."],a:1,e:"“Although” starts a dependent clause, making a complex sentence."},
{q:"Which word is a conjunction?",o:["because","quickly","under","they"],a:0,e:"“Because” joins clauses. The others are an adverb, a preposition and a pronoun."},
{q:"Change to the past tense: “She goes to school.”",o:["She goed to school.","She went to school.","She gone to school.","She will go to school."],a:1,e:"“Go” is irregular: go, went, gone."}]},

"g9-eng-figures":{
pq:[
{q:"“He ran like the wind.” This is a…",o:["metaphor","simile","oxymoron","pun"],a:1,h:"Look for the comparing word “like” or “as”.",e:"The comparison uses “like”, so it is a simile."},
{q:"“Her voice is music to my ears.” This is a…",o:["simile","metaphor","hyperbole","onomatopoeia"],a:1,h:"Her voice is said to BE music, without like or as.",e:"A direct comparison without like or as is a metaphor."},
{q:"“The sun smiled down on us.” This is…",o:["personification","alliteration","irony","simile"],a:0,h:"Can the sun really smile?",e:"Smiling is a human action given to the sun."},
{q:"“Crash! went the plate.” The word “crash” is…",o:["hyperbole","onomatopoeia","metaphor","oxymoron"],a:1,h:"Say the word aloud. Does it sound like the noise?",e:"Words that imitate sounds are onomatopoeia."},
{q:"Which word is an oxymoron?",o:["bittersweet","sweetheart","rainbow","sunlight"],a:0,h:"Look for two opposite ideas joined together.",e:"Bitter and sweet are opposites."}],
cq:[
{q:"“The thunder grumbled angrily.” What effect does this personification create?",o:["It makes the storm sound calm","It makes the storm sound threatening, like an angry person","It shows the thunder is quiet","It compares thunder to music"],a:1,e:"Giving thunder an angry human voice makes the storm feel menacing."},
{q:"“Peter Piper picked a peck of pickled peppers” uses…",o:["alliteration","onomatopoeia","irony","simile"],a:0,e:"The “p” sound is repeated at the start of the words."},
{q:"“This bag weighs a ton!” This is…",o:["a metaphor","hyperbole","personification","an oxymoron"],a:1,e:"The bag doesn't really weigh a ton; it is exaggeration."},
{q:"A traffic officer gets a speeding ticket. This is…",o:["situational irony","a simile","alliteration","a metaphor"],a:0,e:"The person who enforces the rule is caught breaking it."},
{q:"“Life is a rollercoaster.” What does the metaphor suggest?",o:["Life is dangerous","Life has ups and downs","Life is short","Life is boring"],a:1,e:"Like a rollercoaster ride, life has high and low moments."}]},

"g8-afr-tye":{
pq:[
{q:"Verlede tyd: “Ek drink water.”",o:["Ek het water gedrink.","Ek drink water gehad.","Ek het gedrink water.","Ek sal water drink."],a:0,h:"Gebruik het op plek 2 en ge- + werkwoord aan die einde.",e:"Ek het water gedrink."},
{q:"Toekoms: “Hulle speel.”",o:["Hulle het gespeel.","Hulle sal speel.","Hulle speel sal.","Hulle was speel."],a:1,h:"Watter woord gebruik ons vir die toekoms?",e:"Sal + werkwoord: Hulle sal speel."},
{q:"Verlede tyd: “Sy moet werk.”",o:["Sy het moet werk.","Sy moes werk.","Sy moet gewerk.","Sy sal werk."],a:1,h:"Moet is onreëlmatig. Kyk na die tabel in die notas.",e:"Moet word moes."},
{q:"Verlede tyd: “Ons wil gaan.”",o:["Ons wou gaan.","Ons het wil gaan.","Ons wil gegaan.","Ons sal gaan."],a:0,h:"Wil verander net soos kan → kon.",e:"Wil word wou."},
{q:"Vul in: “Môre ___ ek skool toe.”",o:["ek gaan","gaan","gegaan","het"],a:1,h:"Die werkwoord moet op plek 2 staan, direk na “Môre”.",e:"Môre gaan ek skool toe."}],
cq:[
{q:"Verlede tyd: “Die seun begin die toets.”",o:["Die seun het die toets gebegin.","Die seun het die toets begin.","Die seun begin die toets gehad.","Die seun was die toets begin."],a:1,e:"Werkwoorde met be- kry nie ge- nie."},
{q:"Verlede tyd: “Ek is moeg en ek het honger.”",o:["Ek was moeg en ek het honger gehad.","Ek het moeg en ek was honger.","Ek is moeg gewees en ek het honger.","Ek was moeg en ek het honger."],a:0,e:"Is → was; het (have) → het … gehad."},
{q:"Toekoms: “Ons kyk televisie.”",o:["Ons sal televisie kyk.","Ons kyk sal televisie.","Ons het televisie gekyk.","Ons sal kyk televisie."],a:0,e:"Sal op plek 2, kyk aan die einde."},
{q:"Begin met “Gister”: “Ek het my ouma besoek.”",o:["Gister ek het my ouma besoek.","Gister het ek my ouma besoek.","Gister het my ouma ek besoek.","Gister ek my ouma het besoek."],a:1,e:"Die werkwoord (het) bly op plek 2."},
{q:"Verlede tyd: “Thabo kan nie swem nie.”",o:["Thabo het nie kan swem nie.","Thabo kon nie swem nie.","Thabo kan nie geswem nie.","Thabo sal nie swem nie."],a:1,e:"Kan word kon."}]},

"g9-afr-ontkenning":{
pq:[
{q:"Ontken: “Ek eet.”",o:["Ek eet nie.","Ek eet nie nie.","Ek nie eet.","Ek eet niks nie nie."],a:0,h:"Net ’n onderwerp en werkwoord? Dan is een nie genoeg.",e:"Ek eet nie."},
{q:"Ontken: “Sy lees die boek.”",o:["Sy lees nie die boek.","Sy lees nie die boek nie.","Sy nie lees die boek nie.","Sy lees die boek nie nie."],a:1,h:"Een nie na die werkwoord, een nie aan die einde.",e:"Sy lees nie die boek nie."},
{q:"Ontken: “Hy het iets gesê.”",o:["Hy het niks gesê nie.","Hy het nie iets gesê.","Hy het niemand gesê nie.","Hy het iets nie gesê."],a:0,h:"Wat word iets in die negatief?",e:"Iets word niks."},
{q:"Wat is die negatief van “altyd”?",o:["nêrens","niks","nooit","niemand"],a:2,h:"Altyd gaan oor tyd. Watter woord sê “op geen tyd nie”?",e:"Altyd word nooit."},
{q:"Ontken die bevel: “Skryf!”",o:["Skryf nie!","Moenie skryf nie!","Nie skryf nie!","Skryf nooit nie nie!"],a:1,h:"Bevele gebruik ’n spesiale woord vir “don't”.",e:"Moenie skryf nie!"}],
cq:[
{q:"Ontken: “Ek het al my huiswerk gedoen.”",o:["Ek het al nie my huiswerk gedoen nie.","Ek het nog nie my huiswerk gedoen nie.","Ek het nooit al my huiswerk gedoen.","Ek het niks my huiswerk gedoen nie."],a:1,e:"Al word nog nie, met nie aan die einde."},
{q:"Ontken: “Ons het die kat oral gesoek.”",o:["Ons het die kat nêrens gesoek nie.","Ons het die kat nie oral gesoek.","Ons het die kat nooit gesoek nie.","Ons het niemand gesoek nie."],a:0,e:"Oral word nêrens."},
{q:"Ontken: “Almal hou van sokker.”",o:["Almal hou nie van sokker nie.","Niemand hou van sokker nie.","Niks hou van sokker nie.","Almal hou nooit van sokker."],a:1,e:"Almal word niemand."},
{q:"Ontken: “Sy gaan ook saam.”",o:["Sy gaan ook nie saam nie.","Sy gaan nie ook saam.","Sy gaan ook saam nie.","Sy gaan nooit ook saam nie."],a:0,e:"Ook word ook nie, met nie aan die einde."},
{q:"Ontken: “Hulle het alles geëet.”",o:["Hulle het nie alles geëet.","Hulle het niks geëet nie.","Hulle het niemand geëet nie.","Hulle het alles nie geëet nie."],a:1,e:"Alles word niks."}]},

"g8-his-minerals":{
pq:[
{q:"Johannesburg grew quickly after 1886 because of…",o:["the discovery of diamonds","the discovery of gold","a new harbour","farming"],a:1,h:"Think about what was found on the Witwatersrand.",e:"The gold discovery on the Witwatersrand created Johannesburg."},
{q:"The “Big Hole” is in…",o:["Johannesburg","Kimberley","Pretoria","Cape Town"],a:1,h:"It was dug by hand by diamond diggers.",e:"The Big Hole is the old diamond mine in Kimberley."},
{q:"Men who left home on contracts to work far away on the mines were part of the…",o:["migrant labour system","Great Trek","Defiance Campaign","Frontier Wars"],a:0,h:"They migrated for labour and then returned home.",e:"This was the migrant labour system."},
{q:"Who were the Randlords?",o:["Boer generals","Wealthy owners of the gold mines","Mine workers","British soldiers"],a:1,h:"“Rand” refers to the Witwatersrand.",e:"Randlords were the rich mining magnates."},
{q:"The first diamonds were found near which river?",o:["Limpopo","Vaal","Orange","Tugela"],a:2,h:"Hopetown lies on this river.",e:"The first diamond was found near Hopetown on the Orange River."}],
cq:[
{q:"Which order is correct?",o:["Gold 1886 → Diamonds 1867 → South African War","Diamonds 1867 → Gold 1886 → South African War 1899","South African War → Diamonds → Gold","Diamonds 1886 → Gold 1867 → South African War"],a:1,e:"Diamonds (1867) came first, then gold (1886), then the war (1899–1902)."},
{q:"Why did many small diggers in Kimberley lose their claims?",o:["The diamonds ran out","Deeper mining needed machinery and money, so big companies bought them out","The government banned digging","The river flooded"],a:1,e:"As the mines went deeper, only companies with capital could continue."},
{q:"Which was a social effect of the Mineral Revolution?",o:["Families were split up by migrant labour","Fewer people moved to towns","Black workers received equal pay","Farming stopped completely"],a:0,e:"Men were away from home for long periods, breaking up family life."},
{q:"Which was an economic effect of the Mineral Revolution?",o:["Railways, banks and industries developed","Trade with Britain stopped","South Africa became poorer","No new towns were built"],a:0,e:"Mining brought investment, railways and new industries."},
{q:"Which was a political effect of the gold discoveries?",o:["Tension grew between Britain and the Boer republics","The Boer republics joined Britain peacefully","Apartheid began immediately","Britain left southern Africa"],a:0,e:"British interest in the ZAR's gold increased conflict, leading to the South African War."}]},

"g9-his-1948":{
pq:[
{q:"The Afrikaans word “apartheid” means…",o:["togetherness","separateness","freedom","equality"],a:1,h:"Think of the English word “apart”.",e:"Apartheid means separateness."},
{q:"Who could vote in the 1948 election?",o:["All adults","Only white voters","Only black voters","Only men over 50"],a:1,h:"Most South Africans were excluded.",e:"Only white South Africans could vote."},
{q:"In which year was the Bantu Education Act passed?",o:["1948","1950","1953","1960"],a:2,h:"It was the same year as the Separate Amenities Act.",e:"The Bantu Education Act was passed in 1953."},
{q:"In which year was the Freedom Charter adopted?",o:["1952","1955","1956","1961"],a:1,h:"It was a year before the Women's March.",e:"It was adopted at Kliptown in 1955."},
{q:"About how many women marched to the Union Buildings in 1956?",o:["2 000","20 000","200 000","500"],a:1,h:"Twenty thousand.",e:"About 20 000 women took part."}],
cq:[
{q:"Which order is correct?",o:["Freedom Charter → NP wins → Women's March → Defiance Campaign","NP wins (1948) → Defiance Campaign (1952) → Freedom Charter (1955) → Women's March (1956)","Women's March → Defiance Campaign → NP wins → Freedom Charter","Defiance Campaign → NP wins → Women's March → Freedom Charter"],a:1,e:"1948, 1952, 1955, 1956."},
{q:"Forced removals from places such as District Six happened under which law?",o:["Bantu Education Act","Group Areas Act","Freedom Charter","Population Registration Act"],a:1,e:"The Group Areas Act declared areas for one race and forced others out."},
{q:"The government designed Bantu Education to…",o:["give all learners equal schooling","prepare black learners mainly for limited, low-paid work","teach only in English","close all schools"],a:1,e:"It deliberately gave black learners an inferior education."},
{q:"“Petty apartheid” refers to…",o:["separation of everyday facilities like benches, buses and toilets","the creation of homelands","the 1948 election","the Treason Trial"],a:0,e:"The Separate Amenities Act segregated daily facilities."},
{q:"The Defiance Campaign used which method of protest?",o:["Armed attacks","Non-violent breaking of unjust laws","Voting in elections","Leaving the country"],a:1,e:"Volunteers peacefully broke apartheid laws and accepted arrest."}]},

"g8-geo-maps":{
pq:[
{q:"What is the latitude of the North Pole?",o:["0°","45°N","90°N","180°"],a:2,h:"Latitude goes from 0° at the Equator to the poles.",e:"The North Pole is 90°N."},
{q:"Lines of longitude are also called…",o:["parallels","meridians","tropics","contours"],a:1,h:"The Prime one passes through Greenwich.",e:"Lines of longitude are meridians."},
{q:"It is 12:00 at Greenwich. What time is it at 15°W?",o:["11:00","13:00","12:15","10:00"],a:0,h:"Every 15° is one hour. West is behind.",e:"15°W is one hour behind: 11:00."},
{q:"Which line divides Earth into the Northern and Southern Hemispheres?",o:["Prime Meridian","Equator","International Date Line","Tropic of Cancer"],a:1,h:"It is the 0° line of latitude.",e:"The Equator splits north from south."},
{q:"Which is the closest position for Johannesburg?",o:["26°S 28°E","26°N 28°W","34°S 18°E","28°S 26°W"],a:0,h:"It is south of the Equator and east of Greenwich, inland from Cape Town.",e:"Johannesburg is about 26°S 28°E."}],
cq:[
{q:"It is 12:00 at Greenwich. What time is it at 60°E?",o:["08:00","14:00","16:00","18:00"],a:2,e:"60 ÷ 15 = 4 hours ahead: 16:00."},
{q:"It is 10:00 in South Africa (30°E). What time is it at Greenwich?",o:["08:00","12:00","10:30","07:00"],a:0,e:"Greenwich is 2 hours behind South Africa."},
{q:"A ship crosses the International Date Line travelling west. The date…",o:["moves forward one day","moves back one day","stays the same","moves forward one hour"],a:0,e:"Crossing the Date Line westward, you add a day."},
{q:"South Africa stretches from about 16°E to 33°E but uses one time zone because…",o:["all places have the same sunrise","one standard meridian (30°E) is used for convenience","the Equator passes through it","time zones only exist in Europe"],a:1,e:"Countries choose a standard meridian so the whole country shares one time."},
{q:"A place at 40°S 20°W is in which hemispheres?",o:["Northern and Eastern","Southern and Western","Southern and Eastern","Northern and Western"],a:1,e:"S means south of the Equator; W means west of Greenwich."}]},

"g9-geo-topo":{
pq:[
{q:"On a 1:50 000 map, 2 cm represents…",o:["100 m","1 km","10 km","2 km"],a:1,h:"1 cm = 0,5 km. Now double it.",e:"2 × 0,5 km = 1 km."},
{q:"A line scale is also called a…",o:["word scale","bar scale","ratio scale","grid scale"],a:1,h:"It looks like a ruler or a bar.",e:"A line scale is also called a bar scale."},
{q:"Contour lines that are far apart show…",o:["a steep slope","a cliff","a gentle slope","a river"],a:2,h:"The height changes slowly over a long distance.",e:"Wide spacing means a gentle slope."},
{q:"A true bearing of 90° points…",o:["north","east","south","west"],a:1,h:"Start at north (0°) and turn clockwise a quarter turn.",e:"90° is east."},
{q:"A small triangle with a height next to it on a topographic map is a…",o:["spot height","trigonometrical station","church","dam"],a:1,h:"Its name comes from triangles in maths.",e:"A triangle marks a trigonometrical (trig) station."}],
cq:[
{q:"Two places are 7 cm apart on a 1:50 000 map. What is the real distance?",o:["35 km","3,5 km","7 km","0,35 km"],a:1,e:"7 × 0,5 km = 3,5 km."},
{q:"Vertical interval = 100 m and horizontal equivalent = 2 000 m. What is the gradient?",o:["1:20","1:200","20:1","1:2 000"],a:0,e:"2 000 ÷ 100 = 20, so the gradient is 1:20."},
{q:"Point A is at 1 400 m and point B at 1 200 m. What is the vertical interval?",o:["2 600 m","200 m","1 200 m","20 m"],a:1,e:"1 400 − 1 200 = 200 m."},
{q:"On a 1:250 000 map, 1 cm represents…",o:["250 m","2,5 km","25 km","0,25 km"],a:1,e:"250 000 cm = 2 500 m = 2,5 km."},
{q:"A true bearing of 225° points…",o:["north-east","south-east","south-west","north-west"],a:2,e:"225° is halfway between south (180°) and west (270°)."}]},

"g8-lo-study":{
pq:[
{q:"In a SMART goal, what does M stand for?",o:["Memorable","Measurable","Meaningful","Monthly"],a:1,h:"How will you know you've reached it? You can measure it.",e:"M stands for Measurable."},
{q:"In a SMART goal, what does T stand for?",o:["Tough","Time-bound","Total","Tested"],a:1,h:"It answers the question “by when?”.",e:"T stands for Time-bound."},
{q:"Re-reading your notes over and over is an example of…",o:["active study","passive study","a mnemonic","a mind map"],a:1,h:"Are you doing anything with the information, or just looking at it?",e:"Just re-reading is passive; summarising or testing yourself is active."},
{q:"A good reason to make a study timetable is to…",o:["avoid last-minute cramming","study only one subject","skip breaks","impress your teacher"],a:0,h:"It spreads the work over time.",e:"Planning ahead stops you from cramming."},
{q:"What should you do first in an exam?",o:["Answer the hardest question","Read the instructions and look through all the questions","Write as fast as possible","Ask a friend"],a:1,h:"Get an overview before you start writing.",e:"Reading through helps you plan your time."}],
cq:[
{q:"Which goal is NOT time-bound?",o:["I will read 2 books by December.","I will read more books.","I will finish this chapter by Friday.","I will revise for 30 minutes every day this week."],a:1,e:"“I will read more books” gives no deadline."},
{q:"Thandi has three tests next week and hasn't started studying. What is her best plan?",o:["Study everything the night before","Make a timetable now and spread her revision over the days","Study only the subject she likes","Wait for the teacher to give answers"],a:1,e:"Spreading revision with a plan is far more effective than cramming."},
{q:"What is the best way to remember a list of eight terms in order?",o:["A mnemonic","Reading once","Highlighting the whole page","Copying the textbook"],a:0,e:"A mnemonic links each item to an easy-to-remember word or phrase."},
{q:"How should your answer to a 10-mark question differ from a 2-mark question?",o:["It should be shorter","It needs more points and detail","There is no difference","Skip it"],a:1,e:"The mark allocation shows roughly how many points are needed."},
{q:"You get stuck on a question in an exam. What should you do?",o:["Leave the exam","Move on and come back to it later","Keep staring at it until time runs out","Copy from someone"],a:1,e:"Moving on saves time for questions you can answer."}]},

"g9-lo-careers":{
pq:[
{q:"The FET phase covers which grades?",o:["Grades 7–9","Grades 10–12","Grades 1–3","Grades 4–6"],a:1,h:"It is the phase you enter after Grade 9.",e:"FET (Further Education and Training) is Grades 10 to 12."},
{q:"How many elective subjects does a learner choose for the NSC?",o:["One","Two","Three","Five"],a:2,h:"Seven subjects minus two languages, Maths or Maths Lit, and LO.",e:"Learners choose three electives."},
{q:"Your “interests” are…",o:["things you enjoy doing","your marks","your salary","your school"],a:0,h:"What do you like spending time on?",e:"Interests are what you enjoy."},
{q:"Which subjects are most useful for studying medicine?",o:["Mathematics, Physical Sciences and Life Sciences","Tourism and Maths Literacy","History and Geography only","Art and Music"],a:0,h:"Doctors need science and maths.",e:"Medicine usually needs Maths, Physical Sciences and Life Sciences."},
{q:"NSC stands for…",o:["National School Course","National Senior Certificate","New Study Certificate","National Science Club"],a:1,h:"It's the certificate you get at the end of Grade 12.",e:"NSC means National Senior Certificate."}],
cq:[
{q:"A learner loves drawing, is good at Maths and wants to design buildings. Which subjects suit them best?",o:["Mathematics and Engineering Graphics and Design","Maths Literacy and Tourism","History and Life Sciences","Consumer Studies only"],a:0,e:"Architecture and design need Maths and technical drawing skills."},
{q:"Which subjects are recommended for someone who wants to be an accountant?",o:["Accounting and Mathematics","Tourism and Geography","Dramatic Arts","Agricultural Sciences"],a:0,e:"Accounting and Mathematics give the best preparation."},
{q:"Choosing Maths Literacy instead of Mathematics may…",o:["limit entry to some university courses","guarantee a bursary","make LO optional","have no effect on careers"],a:0,e:"Many degree courses require Mathematics, not Maths Literacy."},
{q:"Job shadowing means…",o:["spending time watching someone do their job","working without pay forever","following someone home","doing a job in the dark"],a:0,e:"Job shadowing lets you see what a career is really like."},
{q:"Which is an example of a work value?",o:["Wanting to help people","Being 15 years old","Living in Durban","Having brown eyes"],a:0,e:"Values are what matter to you in work, like helping others."}]}
};
TOPICS.forEach(t=>{ if(EXTRA[t.id]) Object.assign(t, EXTRA[t.id]); });

/* Look up any question by its key: a number = test question, "p2" = practice question, "c4" = chapter question. */
function getQ(t, key){
  const T = TOPIC[t]; if(!T) return null;
  if(typeof key==="number") return T.qs[key];
  const n = +String(key).slice(1);
  return String(key)[0]==="p" ? (T.pq||[])[n] : String(key)[0]==="c" ? (T.cq||[])[n] : null;
}
