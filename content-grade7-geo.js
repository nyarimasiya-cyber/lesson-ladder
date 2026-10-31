/* Grade 7 Social Sciences: Geography, Terms 1–4. */
TOPICS.push(
{id:"g7-geo-maps",grade:7,term:1,subject:"geo",strand:"Geography",title:"Map skills",
notes:`<h2>Compass directions</h2>
<p>There are <b>eight compass points</b>: north (N), north-east (NE), east (E), south-east (SE), south (S), south-west (SW), west (W) and north-west (NW). On most maps, north is at the top.</p>
<div class="ex"><b>Tip</b>Opposite directions: N ↔ S, E ↔ W, NE ↔ SW, NW ↔ SE. If you face north and turn right, you face east.</div>
<h2>Sketch maps and routes</h2>
<ul><li>A <b>sketch map</b> is a simple drawing of an area showing the main features, like your route to school.</li>
<li>To describe a route, give directions and landmarks: “Walk north past the clinic, then turn east at the church.”</li></ul>
<h2>Symbols, keys and grids</h2>
<ul><li><b>Symbols</b> are small pictures, letters or colours that stand for real features. The <b>key</b> (legend) explains what each symbol means.</li>
<li>Street maps use a <b>grid</b> of letters and numbers. <b>B3</b> means column B, row 3.</li>
<li>The <b>index</b> of a map book lists places alphabetically with their page and grid reference.</li></ul>
<h2>Scale</h2>
<ul><li><b>Word scale</b>: “1 cm represents 2 km”. <b>Line scale</b>: a ruled bar marked in distances.</li>
<li>A <b>large-scale</b> map (like a street map) shows a small area in a lot of detail. A <b>small-scale</b> map (like a world map) shows a large area with little detail.</li></ul>
<div class="ex"><b>Example</b>Scale 1 cm = 2 km. Two towns are 4,5 cm apart on the map: 4,5 × 2 = <b>9 km</b></div>
<h2>Direct and indirect distance</h2>
<p><b>Direct</b> distance is the straight line between two places (“as the crow flies”). <b>Indirect</b> distance follows the roads or paths, so it is always the same or longer. Measure indirect distance with a piece of string along the road.</p>`,
qs:[
{q:"Which direction is halfway between north and east?",o:["North-west","North-east","South-east","East-north"],a:1,e:"Between N and E is NE."},
{q:"What is the opposite direction to south-west?",o:["North-east","North-west","South-east","East"],a:0,e:"SW ↔ NE."},
{q:"What does a map's key (legend) do?",o:["Explains what the symbols mean","Shows the scale only","Lists street names","Shows north"],a:0,e:"The key tells you what each symbol stands for."},
{q:"What does the grid reference B3 mean?",o:["Column B, row 3","Row B, column 3","Page B, line 3","3 km from B"],a:0,e:"Letter first (column), then number (row)."},
{q:"The scale is “1 cm represents 1 km”. Two places are 5 cm apart. What is the real distance?",o:["1 km","5 km","50 km","0,5 km"],a:1,e:"5 × 1 km = 5 km."},
{q:"A large-scale map shows…",o:["a small area in great detail","the whole world","no detail","only the sea"],a:0,e:"Street maps are large-scale maps."},
{q:"Direct distance is…",o:["the straight-line distance","the distance along roads","always longer","measured in hours"],a:0,e:"Direct distance is “as the crow flies”."},
{q:"Indirect distance is…",o:["the distance along roads or paths","a straight line","always shorter","not measurable"],a:0,e:"It follows the route you would travel."},
{q:"The scale is 1 cm = 2 km. Two towns are 4,5 cm apart. How far apart are they really?",o:["6,5 km","9 km","2,25 km","45 km"],a:1,e:"4,5 × 2 = 9 km."},
{q:"What does a map book's index help you do?",o:["Find a place's page and grid reference","Measure distance","Draw symbols","Read the key"],a:0,e:"The index lists places alphabetically with their location."}],
pq:[
{q:"How many compass points are there in total (including NE, SE, SW and NW)?",o:["4","6","8","16"],a:2,h:"4 main points plus 4 in-between points.",e:"8 compass points."},
{q:"Which direction is opposite east?",o:["North","West","South","North-east"],a:1,h:"The Sun rises in the east and sets in the…",e:"West."},
{q:"A sketch map is…",o:["a simple drawing of an area","a satellite photo","a globe","a table of distances"],a:0,h:"You could draw one of your route to school.",e:"A simple drawing showing the main features."},
{q:"Map symbols are…",o:["small pictures or signs that stand for real features","the map's title","the scale bar","street names only"],a:0,h:"A small cross might stand for a church.",e:"Symbols represent real features."},
{q:"On most maps, north is at the…",o:["top","bottom","left","right"],a:0,h:"Look for the north arrow.",e:"North is usually at the top."}],
cq:[
{q:"The scale is 1 cm = 500 m. A road is 6 cm long on the map. How long is it really?",o:["300 m","3 km","30 km","506 m"],a:1,e:"6 × 500 m = 3 000 m = 3 km."},
{q:"Which is usually longer between two towns?",o:["The indirect distance along roads","The direct distance","They are always equal","Neither can be measured"],a:0,e:"Roads bend, so the route is longer than a straight line."},
{q:"You face north and turn 90° to the right. Which way do you face?",o:["West","East","South","North-east"],a:1,e:"A quarter turn clockwise from north is east."},
{q:"A map of the whole world is a…",o:["small-scale map","large-scale map","street map","sketch map"],a:0,e:"It shows a huge area with little detail."},
{q:"Which is the best route description?",o:["Walk north past the clinic, then turn east at the church","Go that way","Walk for a while","Follow the road"],a:0,e:"Good directions use compass points and landmarks."}]},

{id:"g7-geo-hazards",grade:7,term:2,subject:"geo",strand:"Geography",title:"Volcanoes, earthquakes and floods",
notes:`<h2>Structure of the Earth</h2>
<p>Earth has a thin <b>crust</b>, a thick hot <b>mantle</b>, and a <b>core</b>. The crust is broken into huge pieces called <b>tectonic plates</b>, which move very slowly (a few centimetres a year) on the mantle. Most volcanoes and earthquakes happen at <b>plate boundaries</b>, especially around the Pacific Ocean in the <b>Ring of Fire</b>.</p>
<h2>Volcanoes</h2>
<ul><li>Hot melted rock (<b>magma</b>) rises through cracks in the crust. When it erupts at the surface, it is called <b>lava</b>. Volcanoes also throw out ash and gases.</li>
<li><b>Active</b> volcanoes erupt often, <b>dormant</b> ones are “sleeping” but could erupt again, and <b>extinct</b> ones will not erupt again.</li>
<li>Volcanic soil is very fertile, so many farmers live near volcanoes despite the danger.</li></ul>
<h2>Earthquakes</h2>
<ul><li>An earthquake is a sudden shaking of the ground when rocks move along a crack called a <b>fault</b>.</li>
<li>The point on the surface directly above where it starts is the <b>epicentre</b>. A <b>seismograph</b> measures the shaking; strength is given as a <b>magnitude</b> (for example on the Richter scale).</li>
<li>Undersea earthquakes can cause giant waves called <b>tsunamis</b>.</li>
<li>Reduce the impact: earthquake-resistant buildings, drills (“drop, cover and hold on”), and warning systems.</li></ul>
<h2>Floods</h2>
<ul><li><b>Causes</b>: very heavy rain, tropical cyclones, blocked drains, building on <b>floodplains</b>, and removing plants and wetlands that slow water down.</li>
<li><b>Effects</b>: deaths, destroyed homes, roads and bridges, lost crops, and disease from dirty water.</li>
<li><b>Reducing the impact</b>: early warnings, clean drains, dams, protecting wetlands, and not building on floodplains.</li></ul>
<h2>Case study: KwaZulu-Natal floods, April 2022</h2>
<p>Extremely heavy rain caused floods and mudslides around Durban (eThekwini). More than 400 people died, and thousands of homes, roads and bridges were destroyed. Many homes had been built in low-lying areas and on steep slopes near rivers.</p>`,
qs:[
{q:"What is the outer layer of the Earth called?",o:["Mantle","Core","Crust","Magma"],a:2,e:"The crust is the thin outer layer."},
{q:"Huge moving pieces of the Earth's crust are called…",o:["tectonic plates","faults","epicentres","craters"],a:0,e:"Tectonic plates move slowly on the mantle."},
{q:"Where do most volcanoes and earthquakes happen?",o:["At plate boundaries","In the middle of plates","Only in Africa","At the poles"],a:0,e:"Plates meet, pull apart or slide past each other there."},
{q:"What is magma called once it erupts at the surface?",o:["Ash","Lava","Crust","Steam"],a:1,e:"Magma becomes lava at the surface."},
{q:"A volcano that has not erupted for a long time but could erupt again is…",o:["active","dormant","extinct","fertile"],a:1,e:"Dormant means sleeping."},
{q:"The point on the surface directly above where an earthquake starts is the…",o:["fault","epicentre","crater","core"],a:1,e:"The epicentre is above the starting point."},
{q:"Which instrument measures earthquakes?",o:["Barometer","Thermometer","Seismograph","Rain gauge"],a:2,e:"A seismograph records ground shaking."},
{q:"An undersea earthquake can cause a giant wave called a…",o:["cyclone","tsunami","flood plain","lava flow"],a:1,e:"Tsunamis can travel across oceans."},
{q:"Which is a cause of floods?",o:["Very heavy rain","Sunny weather","Low temperatures","Strong friendships"],a:0,e:"Too much rain in a short time overwhelms rivers and drains."},
{q:"Which is a good way to reduce flood damage?",o:["Don't build on floodplains","Block the drains","Remove wetlands","Build houses on riverbanks"],a:0,e:"Floodplains flood naturally."}],
pq:[
{q:"Which layer lies under the crust?",o:["Core","Mantle","Atmosphere","Lava"],a:1,h:"It's thick and very hot.",e:"The mantle."},
{q:"The area around the Pacific Ocean with many volcanoes is called the…",o:["Ring of Fire","Great Rift","Cape Fold","Tropic of Capricorn"],a:0,h:"It sounds like a burning circle.",e:"The Ring of Fire."},
{q:"An earthquake is…",o:["sudden shaking of the ground","heavy rain","a type of volcano","a strong wind"],a:0,h:"The ground moves.",e:"Rocks moving along a fault shake the ground."},
{q:"Why do many farmers live near volcanoes?",o:["The soil is very fertile","It is always cool","There are no earthquakes","Land is free"],a:0,h:"Volcanic ash enriches the soil.",e:"Volcanic soil grows good crops."},
{q:"What is the best action during an earthquake drill?",o:["Drop, cover and hold on","Run into the street","Stand by a window","Use the lift"],a:0,h:"Protect your head under a sturdy table.",e:"Drop, cover and hold on."}],
cq:[
{q:"Why did the 2022 KwaZulu-Natal floods cause so much damage?",o:["Extremely heavy rain fell, and many homes were in low-lying areas or on steep slopes","It was a volcanic eruption","There was no rain","It was a tsunami"],a:0,e:"Heavy rain plus homes in risky areas led to great loss."},
{q:"How can wetlands reduce flooding?",o:["They soak up and slow down water","They make rivers faster","They block rain","They cause floods"],a:0,e:"Wetlands act like sponges."},
{q:"Which is a health effect after a flood?",o:["Disease from dirty water","Better water supply","Fewer mosquitoes","Cleaner streets"],a:0,e:"Floodwater spreads waterborne diseases."},
{q:"How can buildings reduce earthquake damage?",o:["Using earthquake-resistant designs","Building taller with no supports","Using only glass","Building on loose sand"],a:0,e:"Flexible, reinforced buildings survive shaking."},
{q:"A volcano that will never erupt again is…",o:["active","dormant","extinct","erupting"],a:2,e:"Extinct volcanoes are no longer active."}]},

{id:"g7-geo-population",grade:7,term:3,subject:"geo",strand:"Geography",title:"Population change and growth",
notes:`<h2>Key population terms</h2>
<div class="tbl"><table><tr><th>Term</th><th>Meaning</th></tr>
<tr><td>Birth rate</td><td>Number of babies born per 1 000 people in a year</td></tr>
<tr><td>Death rate</td><td>Number of deaths per 1 000 people in a year</td></tr>
<tr><td>Natural increase</td><td>Birth rate − death rate</td></tr>
<tr><td>Population growth rate</td><td>How fast a population is growing, usually as a percentage per year</td></tr>
<tr><td>Infant mortality rate</td><td>Number of babies who die before their first birthday, per 1 000 live births</td></tr>
<tr><td>Life expectancy</td><td>The average number of years a person is expected to live</td></tr></table></div>
<div class="ex"><b>Example</b>Birth rate 20, death rate 8: natural increase = 20 − 8 = <b>12 per 1 000</b> people per year</div>
<h2>World population growth</h2>
<ul><li>For most of history the world's population grew very slowly, because many babies died and diseases killed many people.</li>
<li>The world reached about 1 billion people around 1800. After that it grew very fast (a <b>population explosion</b>), passing <b>8 billion in 2022</b>.</li></ul>
<h2>What affects population growth</h2>
<ul><li><b>Pandemics and disease</b>: the Black Death in the 1300s and the Spanish flu of 1918 killed millions.</li>
<li><b>War and conflict</b>: raise death rates and force people to move.</li>
<li><b>Scientific developments and better healthcare</b>: vaccines, antibiotics, clean water and better food production lowered death rates and infant mortality, so populations grew fast.</li>
<li><b>Economic status</b>: in richer countries, families tend to have fewer children and people live longer.</li></ul>`,
qs:[
{q:"Birth rate is the number of births per…",o:["1 000 people per year","100 people per day","person per year","country"],a:0,e:"It's measured per 1 000 people per year."},
{q:"Death rate is the number of deaths per…",o:["1 000 people per year","family","hospital","1 million people per day"],a:0,e:"Also per 1 000 people per year."},
{q:"How do you work out natural increase?",o:["Birth rate − death rate","Birth rate + death rate","Death rate × 2","Births ÷ deaths"],a:0,e:"Births minus deaths."},
{q:"Birth rate is 20 and death rate is 8. What is the natural increase?",o:["28 per 1 000","12 per 1 000","160 per 1 000","2,5 per 1 000"],a:1,e:"20 − 8 = 12."},
{q:"Infant mortality rate counts babies who die…",o:["before their first birthday","before age 10","at birth only","after age 1"],a:0,e:"Per 1 000 live births."},
{q:"Life expectancy is…",o:["the average number of years a person is expected to live","the age you start school","the number of children per family","the birth rate"],a:0,e:"It shows how long people live on average."},
{q:"About when did the world reach 1 billion people?",o:["Around 1800","In 1 AD","In 2022","In 1500"],a:0,e:"Around 1800."},
{q:"In which year did the world population pass 8 billion?",o:["1900","2000","2022","2010"],a:2,e:"The world reached 8 billion in 2022."},
{q:"Which pandemic of 1918 killed millions of people?",o:["The Spanish flu","COVID-19","The Black Death","Measles"],a:0,e:"The 1918 Spanish flu."},
{q:"Why did the world's population grow so fast after 1800?",o:["Better healthcare, vaccines and food lowered death rates","More wars","More pandemics","Fewer babies were born"],a:0,e:"Death rates fell while birth rates stayed high."}],
pq:[
{q:"Which is a measure of how long people live?",o:["Life expectancy","Birth rate","Infant mortality","Natural increase"],a:0,h:"It is about how long people can expect to live.",e:"Life expectancy."},
{q:"A population explosion means…",o:["a very rapid increase in population","a population decrease","a war","a natural disaster"],a:0,h:"Explosion means sudden and big.",e:"Very fast growth."},
{q:"Vaccines help population growth because they…",o:["prevent deaths from disease","increase wars","reduce food","cause pandemics"],a:0,h:"They protect people from illness.",e:"Fewer people die of disease."},
{q:"The Black Death happened in the…",o:["1300s","1900s","2000s","100s"],a:0,h:"It was in the Middle Ages.",e:"In the 1300s."},
{q:"If the death rate is higher than the birth rate, the population…",o:["decreases","increases","stays exactly the same","doubles"],a:0,h:"More people die than are born.",e:"The population shrinks."}],
cq:[
{q:"Why do richer countries often have lower birth rates?",o:["Families tend to have fewer children when healthcare and education are better","They have more wars","They have no hospitals","They ban children"],a:0,e:"Economic development changes family size."},
{q:"How does war affect population?",o:["It raises death rates and forces people to move","It increases life expectancy","It has no effect","It lowers infant mortality"],a:0,e:"Conflict kills and displaces people."},
{q:"A country's infant mortality rate falls. This is usually a sign of…",o:["better healthcare","more war","worse food","more pandemics"],a:0,e:"More babies survive with good care."},
{q:"Birth rate is 30 and death rate is 30. What happens to the population (ignoring migration)?",o:["It stays about the same","It grows quickly","It falls quickly","It doubles"],a:0,e:"Natural increase is zero."},
{q:"Why did population grow so slowly for most of history?",o:["Many babies died and diseases killed many people","People had no children","There was too much food","Everyone lived to 100"],a:0,e:"High death rates held growth back."}]},

{id:"g7-geo-resources",grade:7,term:4,subject:"geo",strand:"Geography",title:"Natural resources and conservation in South Africa",
notes:`<h2>Natural resources</h2>
<p>Natural resources are things from nature that people use: <b>water, soil, air, sunlight, plants, animals and minerals</b>.</p>
<h2>Use and misuse</h2>
<div class="tbl"><table><tr><th>Resource</th><th>Good use</th><th>Misuse</th></tr>
<tr><td>Water</td><td>Drinking, farming, industry</td><td>Pollution, wasting water</td></tr>
<tr><td>Soil</td><td>Growing food</td><td>Overgrazing and poor farming cause soil erosion</td></tr>
<tr><td>Fish</td><td>Food and jobs</td><td>Overfishing</td></tr>
<tr><td>Wild animals</td><td>Tourism</td><td>Poaching (for example, rhino horn)</td></tr></table></div>
<h2>Conservation</h2>
<ul><li><b>Conservation</b> means protecting natural resources and using them wisely so they last.</li>
<li><b>Conservation areas</b> include national parks such as the <b>Kruger National Park</b>, nature reserves and marine protected areas. Transfrontier parks, like the Great Limpopo Transfrontier Park, cross country borders.</li>
<li><b>Community conservation projects</b> let local people help protect nature and benefit from it.</li>
<li><b>Eco-tourism</b> is tourism that protects nature and benefits local communities, for example lodges that employ local people and support conservation.</li></ul>
<h2>Water in South Africa</h2>
<ul><li>South Africa is a <b>water-scarce</b> country: rainfall is low and unreliable.</li>
<li><b>Agriculture</b> (irrigation) uses the most water, followed by homes and towns, industry and mining.</li>
<li>Healthy rivers have clean water and many kinds of plants and animals. Pollution and invasive alien plants harm them.</li>
<li>A <b>catchment area</b> is all the land that drains into a river. We care for catchments by not dumping waste, removing alien plants and protecting wetlands.</li></ul>`,
qs:[
{q:"Which is a natural resource?",o:["Water","A car","A computer","A building"],a:0,e:"Water comes from nature."},
{q:"Conservation means…",o:["protecting resources and using them wisely","using everything up","building factories","hunting animals"],a:0,e:"Conservation helps resources last."},
{q:"Which is a famous South African national park?",o:["Kruger National Park","Table Mountain Mall","Soweto","Kimberley Big Hole"],a:0,e:"Kruger is South Africa's best-known national park."},
{q:"Eco-tourism is tourism that…",o:["protects nature and benefits local communities","damages nature","only happens in cities","uses lots of cars"],a:0,e:"It supports conservation and local people."},
{q:"Which sector uses the most water in South Africa?",o:["Agriculture (irrigation)","Mining","Schools","Tourism"],a:0,e:"Farming uses the largest share."},
{q:"A catchment area is…",o:["all the land that drains into a river","a fishing net","a city","a dam wall"],a:0,e:"Rain falling in a catchment flows into one river system."},
{q:"Overgrazing leads to…",o:["soil erosion","more grass","cleaner water","more rain"],a:0,e:"Animals strip plants, and soil washes away."},
{q:"Which is a misuse of a natural resource?",o:["Overfishing","Planting trees","Saving water","Recycling"],a:0,e:"Overfishing empties the sea."},
{q:"Why is South Africa called water-scarce?",o:["Rainfall is low and unreliable","It has too many rivers","It rains every day","It has no people"],a:0,e:"We don't get much reliable rain."},
{q:"A park that crosses country borders is called a…",o:["transfrontier park","city park","marine reserve","farm"],a:0,e:"Like the Great Limpopo Transfrontier Park."}],
pq:[
{q:"Which is NOT a natural resource?",o:["Plastic bottle","Soil","Sunlight","Air"],a:0,h:"Which one is made in a factory?",e:"Plastic bottles are manufactured."},
{q:"Poaching means…",o:["illegally hunting animals","cooking eggs","planting crops","fishing legally"],a:0,h:"It's a crime against wildlife.",e:"Poaching is illegal hunting."},
{q:"How can you save water at home?",o:["Turn off the tap while brushing teeth","Leave taps running","Water the garden at midday","Wash the car every day"],a:0,h:"Stop water running when you don't need it.",e:"Small habits save water."},
{q:"Invasive alien plants harm rivers because they…",o:["use a lot of water and push out indigenous plants","clean the water","make fish grow","stop erosion"],a:0,h:"They don't belong there.",e:"They use lots of water."},
{q:"A community conservation project…",o:["involves local people in protecting nature","is run only by foreign companies","destroys habitats","is a type of mine"],a:0,h:"Community means local people.",e:"Locals help protect and benefit."}],
cq:[
{q:"How can eco-tourism help a rural community?",o:["It creates jobs and income while protecting nature","It destroys local jobs","It pollutes rivers","It removes people from the land"],a:0,e:"Tourists pay to see protected nature."},
{q:"What harms river health?",o:["Pollution and alien plants","Protecting wetlands","Planting indigenous trees","Picking up litter"],a:0,e:"These reduce water quality and life in rivers."},
{q:"Why should we protect catchment areas?",o:["They supply the water for our rivers and dams","They are only for tourists","They have no use","They produce oil"],a:0,e:"Healthy catchments mean clean water."},
{q:"Why is rhino poaching a serious problem?",o:["It could make rhinos extinct","It helps rhinos","It's good for tourism","It cleans the bush"],a:0,e:"Poaching threatens rhino survival."},
{q:"Which action best conserves soil on a farm?",o:["Not keeping too many animals on the land","Removing all plants","Ploughing down slopes","Letting cattle overgraze"],a:0,e:"Keeping plant cover prevents erosion."}]}
);
TOPICS.slice(-4).forEach(t=>TOPIC[t.id]=t);
