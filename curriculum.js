/* The full CAPS topic list per grade, subject and term (2024 term planners).
   Each entry: [grade, subject, term, topic id, title]. Topics whose id isn't written yet show as "Coming soon".
   Load this file after all content files. */
const CURRICULUM = [
/* ---------- Grade 7 ---------- */
[7,"math",1,"g7-math-whole","Whole numbers"],[7,"math",1,"g7-math-fractions","Common fractions and percentages"],[7,"math",1,"g7-math-decimals","Decimal fractions"],
[7,"math",2,"g7-math-exponents","Exponents"],[7,"math",2,"g7-math-integers","Integers"],[7,"math",2,"g7-math-patterns","Numeric and geometric patterns"],[7,"math",2,"g7-math-functions","Functions and relationships"],
[7,"math",3,"g7-math-construction","Construction of geometric figures"],[7,"math",3,"g7-math-2d","Geometry of 2D shapes"],[7,"math",3,"g7-math-transform","Transformation geometry"],
[7,"math",4,"g7-math-area","Area and perimeter of 2D shapes"],[7,"math",4,"g7-math-volume","Surface area and volume of 3D objects"],[7,"math",4,"g7-math-data","Data handling"],
[7,"his",1,"g7-his-mali","The Kingdom of Mali and the city of Timbuktu"],[7,"his",2,"g7-his-slavetrade","The Transatlantic slave trade"],[7,"his",3,"g7-his-cape","Colonisation of the Cape: 17th–18th centuries"],[7,"his",4,"g7-his-frontiers","Co-operation and conflict on the frontiers of the Cape Colony"],
[7,"ns",1,"g7-ns-biosphere","The biosphere"],[7,"ns",1,"g7-ns-biodiversity","Biodiversity"],[7,"ns",1,"g7-ns-reproduction","Sexual reproduction"],[7,"ns",1,"g7-ns-variation","Variation"],
[7,"ns",2,"g7-ns-materials","Properties of materials"],[7,"ns",2,"g7-ns-mixtures","Separating mixtures"],[7,"ns",2,"g7-ns-acids","Acids, bases and neutrals"],[7,"ns",2,"g7-ns-periodic","Introduction to the Periodic Table"],
[7,"ns",3,"g7-ns-energy-sources","Sources of energy"],[7,"ns",3,"g7-ns-kinetic","Potential and kinetic energy"],[7,"ns",3,"g8-ns-heat","Heat transfer"],[7,"ns",3,"g7-ns-insulation","Insulation and energy saving"],[7,"ns",3,"g7-ns-surroundings","Energy transfer to surroundings"],[7,"ns",3,"g7-ns-grid","The national electricity supply system"],
[7,"ns",4,"g7-ns-sun","The Sun and the Earth"],[7,"ns",4,"g7-ns-moon","The Moon and the Earth"],[7,"ns",4,"g7-ns-astronomy","Historical development of astronomy"],
[7,"geo",1,"g7-geo-maps","Map skills"],[7,"geo",2,"g7-geo-hazards","Volcanoes, earthquakes and floods"],[7,"geo",3,"g7-geo-population","Population change and growth"],[7,"geo",4,"g7-geo-resources","Natural resources and conservation in South Africa"],

/* ---------- Grade 8 ---------- */
[8,"math",1,"g8-math-whole","Whole numbers"],[8,"math",1,"g8-math-integers","Integers"],[8,"math",1,"g8-math-fractions","Common fractions"],[8,"math",1,"g8-math-decimals","Decimal fractions"],
[8,"math",2,"g8-math-exponents","Exponents"],[8,"math",2,"g8-math-patterns","Numeric and geometric patterns"],[8,"math",2,"g8-math-functions","Functions and relationships"],
[8,"math",3,"g8-math-algebra","Algebraic expressions & equations"],[8,"math",3,"g8-math-lines","Geometry of straight lines"],[8,"math",3,"g8-math-2d","Geometry of 2D shapes"],
[8,"math",4,"g8-math-graphs","Graphs"],[8,"math",4,"g8-math-pythagoras","Theorem of Pythagoras"],[8,"math",4,"g8-math-area","Area and perimeter of 2D shapes"],
[8,"ns",1,"g8-ns-photosynthesis","Photosynthesis and respiration"],[8,"ns",1,"g8-ns-ecosystems","Interactions and interdependence in ecosystems"],[8,"ns",1,"g8-ns-microorganisms","Micro-organisms"],
[8,"ns",2,"g8-ns-atoms","Atoms"],[8,"ns",2,"g8-ns-particles","The particle model of matter"],[8,"ns",2,"g8-ns-reactions","Chemical reactions"],
[8,"ns",3,"g8-ns-static","Static electricity"],[8,"ns",3,"g8-ns-electrical","Energy transfer in electrical systems"],[8,"ns",3,"g8-ns-circuits","Series and parallel circuits"],[8,"ns",3,"g8-ns-light","Visible light"],
[8,"ns",4,"g8-ns-solar","The solar system"],[8,"ns",4,"g8-ns-space","Beyond the solar system and looking into space"],
[8,"eng",0,"g8-eng-grammar","Parts of speech & sentence types"],[8,"eng",0,"g8-eng-tenses","Tenses and concord"],[8,"eng",0,"g8-eng-punctuation","Punctuation"],[8,"eng",0,"g8-eng-speech","Direct and indirect speech"],[8,"eng",0,"g8-eng-voice","Active and passive voice"],[8,"eng",0,"g8-eng-poetry","Poetry and figures of speech"],[8,"eng",0,"g8-eng-comprehension","Comprehension and summary"],[8,"eng",0,"g8-eng-writing","Transactional writing"],
[8,"afr",0,"g8-afr-tye","Tye: hede, verlede en toekoms"],[8,"afr",0,"g8-afr-woordsoorte","Woordsoorte"],[8,"afr",0,"g8-afr-meervoude","Meervoude en verkleinwoorde"],[8,"afr",0,"g8-afr-rede","Direkte en indirekte rede"],[8,"afr",0,"g8-afr-leesbegrip","Leesbegrip"],[8,"afr",0,"g8-afr-skryf","Kort transaksionele tekste"],
[8,"his",1,"g8-his-industrial","The Industrial Revolution in Britain and southern Africa"],[8,"his",2,"g8-his-minerals","The Mineral Revolution in South Africa"],[8,"his",3,"g8-his-scramble","The Scramble for Africa"],[8,"his",4,"g8-his-ww1","World War I (1914–1918)"],
[8,"geo",1,"g8-geo-maps","Maps & globes: latitude, longitude and time"],[8,"geo",2,"g8-geo-climate","Climate regions"],[8,"geo",3,"g8-geo-settlement","Settlement"],[8,"geo",4,"g8-geo-transport","Transport and trade"],
[8,"lo",1,"g8-lo-self","Self-concept and self-motivation"],[8,"lo",1,"g8-lo-relationships","Relationships and friendships"],[8,"lo",1,"g8-lo-study","Study skills & goal setting"],
[8,"lo",2,"g8-lo-careers","The six career categories"],[8,"lo",2,"g8-lo-substances","Substance abuse"],
[8,"lo",3,"g8-lo-environment","Environmental health"],[8,"lo",3,"g8-lo-nation","Nation building"],
[8,"lo",4,"g8-lo-rights","Human rights, gender equity and gender-based violence"],[8,"lo",4,"g8-lo-diversity","Cultural diversity in South Africa"],

/* ---------- Grade 9 ---------- */
[9,"math",1,"g9-math-whole","Whole numbers"],[9,"math",1,"g9-math-integers","Integers"],[9,"math",1,"g9-math-exponents","Exponents"],[9,"math",1,"g9-math-patterns","Numeric and geometric patterns"],
[9,"math",2,"g9-math-factor","Algebraic products & factorising"],[9,"math",2,"g9-math-equations","Algebraic equations"],[9,"math",2,"g9-math-functions","Functions and relationships"],
[9,"math",3,"g9-math-graphs","Graphs"],[9,"math",3,"g9-math-lines","Geometry of straight lines"],[9,"math",3,"g9-math-2d","Geometry of 2D shapes and constructions"],
[9,"math",4,"g9-math-transform","Transformation geometry"],[9,"math",4,"g9-math-area","Area and perimeter of 2D shapes"],[9,"math",4,"g9-math-volume","Surface area and volume of 3D objects"],
[9,"ns",1,"g9-ns-cells","Cells as the basic units of life"],[9,"ns",1,"g9-ns-body","Systems in the human body"],[9,"ns",1,"g9-ns-reproduction","Human reproduction"],[9,"ns",1,"g9-ns-circulatory","Circulatory and respiratory systems"],[9,"ns",1,"g9-ns-digestive","Digestive system"],
[9,"ns",2,"g9-ns-compounds","Compounds"],[9,"ns",2,"g9-ns-reactions","Chemical reactions"],[9,"ns",2,"g9-ns-oxygen","Reactions of metals and non-metals with oxygen"],[9,"ns",2,"g9-ns-acids","Acids, bases and pH"],[9,"ns",2,"g9-ns-acidreactions","Reactions of acids with bases and metals"],
[9,"ns",3,"g9-ns-forces","Forces"],[9,"ns",3,"g9-ns-cells-electric","Electric cells as energy systems"],[9,"ns",3,"g9-ns-circuits","Electric circuits"],[9,"ns",3,"g9-ns-safety","Safety with electricity"],[9,"ns",3,"g9-ns-grid","Energy and the national electricity grid"],
[9,"ns",4,"g9-ns-earth","The Earth as a system and the lithosphere"],[9,"ns",4,"g9-ns-mining","Mining of mineral resources"],[9,"ns",4,"g9-ns-atmosphere","The atmosphere"],[9,"ns",4,"g9-ns-stars","Birth, life and death of stars"],
[9,"eng",0,"g9-eng-figures","Figures of speech"],[9,"eng",0,"g9-eng-clauses","Sentence structure and clauses"],[9,"eng",0,"g9-eng-speech","Direct and indirect speech"],[9,"eng",0,"g9-eng-voice","Active and passive voice"],[9,"eng",0,"g9-eng-punctuation","Punctuation and spelling"],[9,"eng",0,"g9-eng-poetry","Poetry analysis"],[9,"eng",0,"g9-eng-literature","Novel and drama elements"],[9,"eng",0,"g9-eng-writing","Transactional writing"],
[9,"afr",0,"g9-afr-ontkenning","Die ontkenning"],[9,"afr",0,"g9-afr-lydend","Lydende en bedrywende vorm"],[9,"afr",0,"g9-afr-rede","Direkte en indirekte rede"],[9,"afr",0,"g9-afr-trappe","Trappe van vergelyking"],[9,"afr",0,"g9-afr-voegwoorde","Voegwoorde en woordorde"],[9,"afr",0,"g9-afr-leesbegrip","Leesbegrip en opsomming"],
[9,"his",1,"g9-his-ww2","World War II"],[9,"his",2,"g9-his-coldwar","The Nuclear Age and the Cold War"],[9,"his",3,"g9-his-1948","Turning points: 1948 and the 1950s"],[9,"his",4,"g9-his-1976","Turning points: 1976 and 1990"],
[9,"geo",1,"g9-geo-topo","Map scale & topographic maps"],[9,"geo",2,"g9-geo-development","Development"],[9,"geo",3,"g9-geo-surface","Surface forces that shape the earth"],[9,"geo",4,"g9-geo-resources","Resource use and sustainability"],
[9,"lo",1,"g9-lo-lifestyle","Personal lifestyle choices"],[9,"lo",1,"g9-lo-time","Time management"],
[9,"lo",2,"g9-lo-rights","Constitutional rights and values"],[9,"lo",2,"g9-lo-options","Options after Grade 9"],
[9,"lo",3,"g9-lo-careers","Subject choice & careers"],[9,"lo",3,"g9-lo-volunteer","Volunteerism"],[9,"lo",3,"g9-lo-violence","Health and safety: violence"],
[9,"lo",4,"g9-lo-religion","Religions and sport ethics"],[9,"lo",4,"g9-lo-challenges","Coping with challenging situations"],[9,"lo",4,"g9-lo-study","Study skills and careers"]
];

/* Give written topics their term from the map. Heat transfer is Grade 7 Natural Sciences (Term 3) in CAPS. */
(function(){
  const h = TOPIC["g8-ns-heat"];
  if(h){ h.grade = 7; h.term = 3; }
  CURRICULUM.forEach(([g,s,term,id])=>{ const t = TOPIC[id]; if(t && t.term==null && term) t.term = term; });
})();
/* Topics in the map for this grade that aren't written yet. */
const comingSoon = grade => CURRICULUM.filter(([g,,,id])=>g===+grade && !TOPIC[id]).map(([g,subject,term,id,title])=>({id,grade:g,subject,term,title}));

/* ---------- Subjects for every grade (CAPS phases) ---------- */
Object.assign(SUBJECTS, {
  ems:{name:"Economic and Management Sciences"}, tech:{name:"Technology"}, arts:{name:"Creative Arts"},
  lifeskills:{name:"Life Skills"}, nst:{name:"Natural Sciences and Technology"},
  mlit:{name:"Mathematical Literacy"}, phys:{name:"Physical Sciences"}, lifesci:{name:"Life Sciences"},
  acc:{name:"Accounting"}, bus:{name:"Business Studies"}, econ:{name:"Economics"},
  cat:{name:"Computer Applications Technology"}, egd:{name:"Engineering Graphics and Design"},
  tour:{name:"Tourism"}, agri:{name:"Agricultural Sciences"}
});
function subjectsForGrade(g){
  g = +g;
  if(g <= 3) return ["eng","afr","math","lifeskills"];
  if(g <= 6) return ["eng","afr","math","nst","his","geo","lifeskills"];
  if(g <= 9) return ["eng","afr","math","ns","his","geo","lo","ems","tech","arts"];
  return ["eng","afr","math","mlit","phys","lifesci","acc","bus","econ","geo","his","lo","cat","egd","tour","agri"];
}
function subjectName(s, g){
  g = +g;
  if(g >= 10 && s === "his") return "History";
  if(g >= 10 && s === "geo") return "Geography";
  return (SUBJECTS[s] || {name:s}).name;
}
const CURRICULUM_INDEX = Object.fromEntries(CURRICULUM.map((c,i)=>[c[3], i]));
const curriculumIndex = id => CURRICULUM_INDEX[id] ?? 9999;
