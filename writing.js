/* ---------- Grade R: learning to write ----------
   Each shape is drawn in a 100 × 120 box: top line y=20, middle line y=55, base line y=90, tail line y=115.
   Paths are in stroke order: every "M" starts a new stroke. */
const WR_LOWER = {
a:"M67 62 C61 53 40 53 35 62 C30 70 30 76 35 83 C40 92 61 92 67 83 M67 55 L67 90",
b:"M34 20 L34 90 M34 74 C34 62 41 55 50 55 C61 55 67 63 67 72.5 C67 82 61 90 50 90 C41 90 34 84 34 76",
c:"M66 61 C60 53 40 53 35 62 C30 70 30 76 35 83 C40 92 60 92 66 84",
d:"M67 62 C61 53 40 53 35 62 C30 70 30 76 35 83 C40 92 61 92 67 83 M67 20 L67 90",
e:"M33 72 L67 72 C67 60 60 55 50 55 C38 55 32 64 32 72.5 C32 82 38 90 50 90 C58 90 63 87 66 83",
f:"M64 24 C58 18 48 19 46 28 L46 90 M34 55 L60 55",
g:"M67 62 C61 53 40 53 35 62 C30 70 30 76 35 83 C40 92 61 92 67 83 M67 55 L67 105 C67 116 45 118 36 110",
h:"M36 20 L36 90 M36 68 C38 58 46 55 52 55 C60 55 64 60 64 68 L64 90",
i:"M50 55 L50 90 M50 40 L50 41",
j:"M54 55 L54 105 C54 116 42 117 36 110 M54 40 L54 41",
k:"M36 20 L36 90 M64 55 L36 75 M44 69 L66 90",
l:"M50 20 L50 90",
m:"M28 55 L28 90 M28 66 C30 58 34 55 39 55 C45 55 49 59 49 66 L49 90 M49 66 C51 58 55 55 60 55 C66 55 70 59 70 66 L70 90",
n:"M36 55 L36 90 M36 68 C38 58 46 55 52 55 C60 55 64 60 64 68 L64 90",
o:"M50 55 C38 55 32 64 32 72.5 C32 82 38 90 50 90 C62 90 68 82 68 72.5 C68 64 62 55 50 55",
p:"M34 55 L34 115 M34 74 C34 62 41 55 50 55 C61 55 67 63 67 72.5 C67 82 61 90 50 90 C41 90 34 84 34 76",
q:"M67 62 C61 53 40 53 35 62 C30 70 30 76 35 83 C40 92 61 92 67 83 M67 55 L67 115",
r:"M38 55 L38 90 M38 68 C42 58 52 54 64 58",
s:"M65 60 C60 54 40 53 37 61 C34 69 48 71 52 72 C64 74 68 82 62 87 C56 92 40 92 34 85",
t:"M48 30 L48 84 C48 90 54 91 60 88 M36 55 L62 55",
u:"M36 55 L36 77 C36 86 42 90 50 90 C58 90 64 86 64 77 M64 55 L64 90",
v:"M33 55 L50 90 L67 55",
w:"M24 55 L36 90 L50 60 L64 90 L76 55",
x:"M34 55 L66 90 M66 55 L34 90",
y:"M34 55 L51 87 M67 55 L42 115",
z:"M34 55 L66 55 L34 90 L66 90"
};
const WR_UPPER = {
A:"M50 20 L30 90 M50 20 L70 90 M37 66 L63 66",
B:"M34 20 L34 90 M34 20 L52 20 C62 20 66 26 66 36 C66 46 60 54 50 54 L34 54 M50 54 C62 54 68 62 68 72 C68 84 60 90 50 90 L34 90",
C:"M68 30 C62 22 56 20 50 20 C38 20 30 34 30 55 C30 76 38 90 50 90 C57 90 63 87 68 80",
D:"M34 20 L34 90 M34 20 L46 20 C62 20 70 36 70 55 C70 74 62 90 46 90 L34 90",
E:"M36 20 L36 90 M36 20 L66 20 M36 55 L60 55 M36 90 L66 90",
F:"M36 20 L36 90 M36 20 L66 20 M36 55 L60 55",
G:"M68 30 C62 22 56 20 50 20 C38 20 30 34 30 55 C30 76 38 90 50 90 C62 90 68 80 68 66 L68 58 L54 58",
H:"M32 20 L32 90 M68 20 L68 90 M32 55 L68 55",
I:"M50 20 L50 90 M38 20 L62 20 M38 90 L62 90",
J:"M62 20 L62 72 C62 84 56 90 48 90 C40 90 35 85 34 78",
K:"M34 20 L34 90 M66 20 L34 60 M46 46 L68 90",
L:"M36 20 L36 90 L66 90",
M:"M26 90 L26 20 L50 64 L74 20 L74 90",
N:"M32 90 L32 20 L68 90 L68 20",
O:"M50 20 C36 20 30 38 30 55 C30 72 36 90 50 90 C64 90 70 72 70 55 C70 38 64 20 50 20",
P:"M34 20 L34 90 M34 20 L52 20 C62 20 68 28 68 38 C68 48 62 56 52 56 L34 56",
Q:"M50 20 C36 20 30 38 30 55 C30 72 36 90 50 90 C64 90 70 72 70 55 C70 38 64 20 50 20 M56 74 L70 92",
R:"M34 20 L34 90 M34 20 L52 20 C62 20 68 28 68 38 C68 48 62 56 52 56 L34 56 M50 56 L68 90",
S:"M66 30 C62 22 56 20 50 20 C40 20 34 26 34 36 C34 48 48 52 52 54 C62 58 68 62 68 74 C68 84 60 90 50 90 C42 90 36 86 33 80",
T:"M30 20 L70 20 M50 20 L50 90",
U:"M32 20 L32 70 C32 84 40 90 50 90 C60 90 68 84 68 70 L68 20",
V:"M30 20 L50 90 L70 20",
W:"M22 20 L34 90 L50 40 L66 90 L78 20",
X:"M32 20 L68 90 M68 20 L32 90",
Y:"M32 20 L50 54 M68 20 L50 54 L50 90",
Z:"M32 20 L68 20 L32 90 L68 90"
};
const WR_DIGITS = {
"0":"M50 20 C36 20 30 38 30 55 C30 72 36 90 50 90 C64 90 70 72 70 55 C70 38 64 20 50 20",
"1":"M38 32 L52 20 L52 90",
"2":"M33 34 C36 22 46 20 51 20 C62 20 68 28 67 38 C66 50 50 64 33 90 L69 90",
"3":"M34 28 C40 20 62 18 64 34 C66 46 54 54 46 54 C58 54 68 60 67 73 C66 92 40 94 33 82",
"4":"M56 20 L32 66 L70 66 M58 46 L58 90",
"5":"M64 20 L38 20 L35 50 C42 44 54 43 61 48 C70 55 70 78 61 85 C52 93 38 90 33 82",
"6":"M63 24 C56 18 42 18 36 30 C30 42 30 62 34 75 C38 88 46 90 51 90 C62 90 68 82 68 70 C68 58 60 52 51 52 C42 52 34 58 33 68",
"7":"M32 20 L68 20 L44 90",
"8":"M62 30 C60 22 54 20 50 20 C42 20 36 26 36 34 C36 44 46 50 50 54 C56 58 66 64 66 74 C66 84 58 90 50 90 C42 90 34 84 34 74 C34 64 44 58 50 54 C56 50 64 44 64 34",
"9":"M67 40 C67 28 60 20 50 20 C40 20 33 27 33 38 C33 50 41 56 50 56 C60 56 67 49 67 40 L67 90"
};
const WR_PATTERNS = [
{id:"down",  label:"Lines down",   emoji:"🌧️", say:"Draw lines from the top down, like falling rain.", path:"M20 25 L20 90 M40 25 L40 90 M60 25 L60 90 M80 25 L80 90"},
{id:"across",label:"Lines across", emoji:"🛤️", say:"Draw lines from left to right.", path:"M12 30 L88 30 M12 55 L88 55 M12 80 L88 80"},
{id:"zigzag",label:"Zigzag",       emoji:"⛰️", say:"Up and down like mountains. Zig zag!", path:"M8 85 L22 35 L36 85 L50 35 L64 85 L78 35 L92 85"},
{id:"waves", label:"Waves",        emoji:"🌊", say:"Make waves like the sea.", path:"M8 60 C16 36 26 36 34 60 C42 84 52 84 60 60 C68 36 78 36 86 60 C88 66 90 70 92 72"},
{id:"bridges",label:"Bridges",     emoji:"🌉", say:"Up and over, like little bridges.", path:"M8 88 C8 40 34 40 34 88 C34 40 60 40 60 88 C60 40 86 40 86 88"},
{id:"circles",label:"Circles",     emoji:"⚪", say:"Go round and round. Start at the top and go this way.", path:"M30 40 C18 40 12 50 12 60 C12 72 20 80 30 80 C40 80 48 72 48 60 C48 50 42 40 30 40 M72 40 C60 40 54 50 54 60 C54 72 62 80 72 80 C82 80 90 72 90 60 C90 50 84 40 72 40"}
];
const WR_PIC = {a:["apple","🍎"],b:["ball","⚽"],c:["cat","🐱"],d:["dog","🐶"],e:["egg","🥚"],f:["fish","🐟"],g:["goat","🐐"],h:["hat","🎩"],i:["insect","🐞"],j:["juice","🧃"],k:["kite","🪁"],l:["lion","🦁"],m:["moon","🌙"],n:["nose","👃"],o:["orange","🍊"],p:["pig","🐷"],q:["queen","👸"],r:["rabbit","🐰"],s:["sun","☀️"],t:["tree","🌳"],u:["umbrella","☂️"],v:["van","🚐"],w:["water","💧"],x:["box","📦"],y:["yellow","💛"],z:["zebra","🦓"]};
const WR_NUM = ["zero","one","two","three","four","five","six","seven","eight","nine"];
const WR_WORDS = [["cat","🐱"],["dog","🐶"],["sun","☀️"],["hat","🎩"],["pig","🐷"],["bus","🚌"],["mom","👩"],["dad","👨"],["big","🐘"],["love","❤️"]];
const WR_CVC = [["cat","🐱"],["dog","🐶"],["sun","☀️"],["pig","🐷"],["hat","🎩"],["bed","🛏️"],["cup","☕"],["bus","🚌"],["fox","🦊"],["hen","🐔"],["map","🗺️"],["pen","🖊️"],["box","📦"],["bag","👜"],["leg","🦵"],["net","🥅"],["rat","🐀"],["web","🕸️"],["van","🚐"],["bat","🦇"],["log","🪵"],["six","6️⃣"],["ten","🔟"],["red","🔴"]];
const WR_SIGHT = ["I","a","the","see","can","my","is","like","go","we","and","it","to","me","you","look"];
const WR_SENT = [["I see a cat.","🐱"],["I can run.","🏃"],["My dog is big.","🐶"],["I like the sun.","☀️"],["We can go.","🚶"],["Look at me.","🙋"],["The pig is pink.","🐷"],["I see a red bus.","🚌"],["Mom can see me.","👩"],["I like my hat.","🎩"],["The fox can run.","🦊"],["I love you.","❤️"]];
const WR_START = [["patterns","Patterns","✏️"],["letters","Small letters","🔤"],["numbers","Numbers","🔢"],["name","My name","😊"]];
const WR_NEXT = [["capitals","Capital letters","🔠"],["sounds","Letter sounds","👂"],["sight","Sight words","👀"],["spell","Spell words","🧩"],["sentences","Sentences","📝"]];
const WR_SECTIONS = [...WR_START, ...WR_NEXT, ["words","Words","📖"]];

const gradeLabel = g => +g===0 ? "R" : g;
const isGradeR = l => l && +l.grade===0;

/* ----- shapes and layout ----- */
function glyphFor(ch){
  if(WR_LOWER[ch]) return {path:WR_LOWER[ch], l:/[mw]/.test(ch)?22:30, r:/[mw]/.test(ch)?78:70};
  if(WR_UPPER[ch]) return {path:WR_UPPER[ch], l:/[MW]/.test(ch)?22:28, r:/[MW]/.test(ch)?78:72};
  if(WR_DIGITS[ch]) return {path:WR_DIGITS[ch], l:28, r:72};
  if(ch===".") return {path:"M50 88 L50 89", l:44, r:56};
  return null;
}
function nameText(l){ const s = (l.name||"").replace(/[^A-Za-z]/g,""); return s ? s[0].toUpperCase()+s.slice(1).toLowerCase() : ""; }
function wItem(key, l){
  const [type, val] = key.split(":");
  if(type==="p"){ const p = WR_PATTERNS.find(x=>x.id===val); return {key, type, label:p.label, emoji:p.emoji, say:p.say, glyphs:[{path:p.path, l:4, r:96}]}; }
  if(type==="l"){ const [w,e] = WR_PIC[val]; return {key, type, label:val, emoji:e, say:`This is the letter ${val}. ${val} for ${w}.`, glyphs:[glyphFor(val)]}; }
  if(type==="n"){ return {key, type, label:val, emoji:"", say:`This is the number ${WR_NUM[+val]}.`, glyphs:[glyphFor(val)]}; }
  if(type==="w"){ const w = WR_WORDS.find(x=>x[0]===val); return {key, type, label:val, emoji:w[1], say:`This word says ${val}. ${[...val].join(", ")}.`, glyphs:[...val].map(glyphFor)}; }
  if(type==="u"){ const [w,e] = WR_PIC[val.toLowerCase()]; return {key, type, label:val, emoji:e, say:`This is capital ${val}. Capital ${val} for ${w}.`, glyphs:[glyphFor(val)]}; }
  if(type==="s"){ return {key, type, label:val, emoji:"", say:`This word is ${val}.`, glyphs:[...val].map(glyphFor)}; }
  if(type==="c"){ const w = WR_CVC.find(x=>x[0]===val); return {key, type, label:val, emoji:w[1], word:val, say:`${val}. Let's spell ${val}.`, glyphs:[...val].map(glyphFor)}; }
  if(type==="t"){ const [sent,e] = WR_SENT[+val], words = sent.split(" "), wi = Math.min(S.wword||0, words.length-1);
    return {key, type, label:sent, emoji:e, words, say:sent, glyphs:[...words[wi]].map(glyphFor)}; }
  if(type==="name"){ const n = nameText(l); return {key, type, label:n, emoji:"😊", say:`This is your name. ${n}. ${[...n.toLowerCase()].join(", ")}.`, glyphs:[...n].map(glyphFor).filter(Boolean)}; }
  return null;
}
function sectionKeys(sec, l){
  if(sec==="patterns") return WR_PATTERNS.map(p=>"p:"+p.id);
  if(sec==="letters") return Object.keys(WR_LOWER).map(c=>"l:"+c);
  if(sec==="numbers") return Object.keys(WR_DIGITS).map(c=>"n:"+c);
  if(sec==="words") return WR_WORDS.map(w=>"w:"+w[0]);
  if(sec==="name") return nameText(l) ? ["name"] : [];
  if(sec==="capitals") return Object.keys(WR_UPPER).map(c=>"u:"+c);
  if(sec==="sight") return WR_SIGHT.map(w=>"s:"+w);
  if(sec==="spell") return WR_CVC.map(w=>"c:"+w[0]);
  if(sec==="sentences") return WR_SENT.map((_,i)=>"t:"+i);
  if(sec==="sounds") return Object.keys(WR_PIC).filter(c=>c!=="x").map(c=>"f:"+c);
  return [];
}
function layout(item){
  let x = 8; const parts = item.glyphs.map(g=>{ const tx = x - g.l; x += (g.r-g.l) + 8; return {path:g.path, tx}; });
  const w = Math.max(100, x), shift = (w - x)/2;   // centre short items in the box
  parts.forEach(p=>p.tx += shift);
  return {parts, w};
}

/* ----- progress ----- */
const wRecs = lid => S.attempts.filter(a=>a.learnerId===lid && a.kind==="write");
function wStars(lid, key){
  const r = wRecs(lid).filter(a=>a.item===key);
  if(r.some(a=>a.mode==="spell"||a.mode==="sentence")) return 2;
  return (r.some(a=>a.mode==="trace") ? 1 : 0) + (r.some(a=>a.mode==="own") ? 1 : 0);
}
function soundsKnown(lid){
  const last = {}; wRecs(lid).filter(a=>a.mode==="sound" && a.res).sort((a,b)=>a.at-b.at).forEach(a=>Object.assign(last, a.res));
  return last;
}
const starTxt = n => `<span class="wstars" aria-label="${n} of 2 stars">${"⭐".repeat(n)}${"<span class='dim'>⭐</span>".repeat(2-n)}</span>`;
function wSave(mode){
  const l = learner(), key = S.witem; if(!l || !key) return;
  const id = uid(), rec = {learnerId:l.id, kind:"write", item:key, label:wItem(key,l).label, mode, ok:true, at:Date.now()};
  S.attempts.push({id, ...rec}); write("attempts", id, rec);
}

/* ----- speech ----- */
function say(text){
  try{
    if(!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text), vs = speechSynthesis.getVoices();
    u.voice = vs.find(v=>/en-ZA/i.test(v.lang)) || vs.find(v=>/en-GB/i.test(v.lang)) || vs.find(v=>/^en/i.test(v.lang)) || null;
    u.rate = 0.85; u.pitch = 1.1; speechSynthesis.speak(u);
  }catch(e){}
}

/* ----- views ----- */
function smallGlyph(item){
  const lay = layout(item);
  return `<svg viewBox="0 0 ${lay.w} 120" class="wmini" aria-hidden="true">${lay.parts.map(p=>`<path d="${p.path}" transform="translate(${p.tx} 0)"/>`).join("")}</svg>`;
}
function vWriteHome(){
  const l = learner();
  return `<section class="hello"><span class="eyebrow">Grade R</span><h1>Hi ${esc(l.name)}! Let's write ✏️</h1></section>
  <button class="wbig say" data-act="w-say" data-text="Hi ${esc(l.name)}! Let's write. Pick what you want to practise.">🔊 Listen</button>
  ${secTiles(l, WR_NEXT, "Next level 🚀")}
  ${secTiles(l, WR_START, "Warm up")}`;
}
function secDone(l, id){ const keys = sectionKeys(id,l); if(id==="sounds"){ const k = soundsKnown(l.id); return [keys.filter(x=>k[x.slice(2)]).length, keys.length]; } return [keys.filter(k=>wStars(l.id,k)>0).length, keys.length]; }
function secTiles(l, list, title){
  return `<h2 class="h2s">${title}</h2><div class="wsecs">${list.map(([id,label,em])=>{ const [d,n] = secDone(l,id);
    return `<button class="wsec" data-act="${id==="sounds"?"w-sounds":"w-sec"}" data-s="${id}"><span class="em">${em}</span><b>${label}</b><span class="muted">${n?`${d} of ${n}`:""}</span></button>`;}).join("")}</div>`;
}
function vWriteSection(){
  const l = learner(), sec = S.wsec, info = WR_SECTIONS.find(x=>x[0]===sec), keys = sectionKeys(sec,l);
  return `${crumbs([{act:"home",label:"Writing"},{label:info[1]}])}
  <h1 class="pagetitle">${info[2]} ${info[1]}</h1>
  ${sec==="spell"?`<p class="muted" style="margin:0 0 12px">Tap a picture. Listen to the word, build it with letters, then write it.</p>`:sec==="sentences"?`<p class="muted" style="margin:0 0 12px">Listen to the sentence, put the words in order, then write it word by word.</p>`:""}
  ${keys.length?`<div class="wgrid ${["words","name","patterns","sight"].includes(sec)?"wide":""} ${sec==="sentences"?"one":""}">${keys.map(k=>{ const it = wItem(k,l);
    const face = it.type==="c" ? `<span class="em big">${it.emoji}</span>` : it.type==="t" ? `<span class="em big">${it.emoji}</span><span class="stext">${esc(it.label)}</span>` : smallGlyph(it)+(it.emoji?`<span class="em">${it.emoji}</span>`:"");
    return `<button class="witem" data-act="w-item" data-k="${k}" aria-label="${esc(it.type==="c"?"picture word":it.label)}">${face}${starTxt(wStars(l.id,k))}</button>`;}).join("")}</div>`
  : `<div class="empty">Add letters to the learner's name in the parent area to practise it.</div>`}`;
}
function vWriteItem(){
  const l = learner(), it = wItem(S.witem, l); if(!it) return vWriteHome();
  const task = it.type==="c" || it.type==="t";
  if(task && S.wphase!=="write") return vBuild(it);
  if(task) S.wmode = "own";
  const mode = S.wmode || "watch", lay = layout(it), keys = sectionKeys(S.wsec,l), idx = keys.indexOf(S.witem);
  const info = WR_SECTIONS.find(x=>x[0]===S.wsec);
  const lines = `<line x1="0" x2="${lay.w}" y1="20" y2="20" class="ln"/><line x1="0" x2="${lay.w}" y1="55" y2="55" class="ln mid"/><line x1="0" x2="${lay.w}" y1="90" y2="90" class="ln base"/><line x1="0" x2="${lay.w}" y1="115" y2="115" class="ln"/>`;
  const guide = mode==="own" ? lay.parts.map(p=>`<path d="${p.path}" transform="translate(${p.tx} 0)" class="ghost"/>`).join("") : lay.parts.map(p=>`<g transform="translate(${p.tx} 0)"><path d="${p.path}" class="gw"/><path d="${p.path}" class="gd"/></g>`).join("");
  const starts = mode==="trace" ? lay.parts.map(p=>strokes(p.path).map((s,i)=>{ const m=/M\s*([\d.]+)\s+([\d.]+)/.exec(s); return `<g class="sdot"><circle cx="${+m[1]+p.tx}" cy="${m[2]}" r="5"/><text x="${+m[1]+p.tx}" y="${+m[2]+2.2}">${i+1}</text></g>`; }).join("")).join("") : "";
  return `${crumbs([{act:"home",label:"Writing"},{act:"w-sec",data:`data-s="${S.wsec}"`,label:info[1]},{label:it.label}])}
  ${task ? `<div class="whead"><span class="wlabel">${it.emoji}</span>${starTxt(wStars(l.id,S.witem))}</div>
    ${it.type==="t" ? `<div class="wsent">${it.words.map((w,i)=>`<span class="${i===(S.wword||0)?"cur":i<(S.wword||0)?"done":""}">${esc(w)}</span>`).join(" ")}</div>` : ""}
    <p class="wtip" style="margin:0 0 8px">${it.type==="t"?`Write the word <b>${esc(it.words[S.wword||0])}</b> on the lines.`:`Now write <b>${esc(it.word)}</b> on the lines.`}</p>` : `<div class="whead"><span class="wlabel">${esc(it.label)} ${it.emoji}</span>${starTxt(wStars(l.id,S.witem))}</div>
  <div class="wsteps" role="tablist">
    <button role="tab" aria-selected="${mode==="watch"}" data-act="w-mode" data-m="watch">👀 Watch</button>
    <button role="tab" aria-selected="${mode==="trace"}" data-act="w-mode" data-m="trace">✏️ Trace</button>
    <button role="tab" aria-selected="${mode==="own"}" data-act="w-mode" data-m="own">🌟 On my own</button></div>`}
  ${mode==="own" && !task?`<div class="wmodel"><span class="muted">Look:</span>${smallGlyph(it)}</div>`:""}
  <div class="wscroll"><div class="wpad" style="aspect-ratio:${lay.w}/120;min-width:${Math.min(lay.w*2.6, 340)}px;max-width:min(${lay.w*4.2}px, calc(56vh * ${(lay.w/120).toFixed(3)}))">
    <svg viewBox="0 0 ${lay.w} 120" id="wsvg">${lines}${guide}${starts}<g id="wanim"></g></svg>
    <canvas id="wcanvas" ${mode==="watch"?'style="pointer-events:none"':""}></canvas>
    <div class="wcheer" id="wcheer" hidden>⭐</div></div></div>
  <div class="wtools">
    <button class="wbtn" data-act="w-say" data-text="${esc(it.type==="t" ? it.words[S.wword||0].replace(".","") : it.say)}" aria-label="Listen">🔊</button>
    ${mode==="watch"?`<button class="wbtn go" data-act="w-play" aria-label="Show me">▶️</button><button class="wbtn" data-act="w-mode" data-m="trace" aria-label="Now you try">✏️ Now you</button>`
    :`<button class="wbtn" data-act="w-clear" aria-label="Clear">🧽</button><button class="wbtn go" data-act="w-done" aria-label="I'm done">✅</button>`}
    ${idx<keys.length-1 && !task?`<button class="wbtn" data-act="w-item" data-k="${keys[idx+1]}" aria-label="Next">➡️</button>`:""}</div>
  <p class="muted wtip">${task?"When you finish, press ✅ to check.":mode==="watch"?"Press ▶️ to see how it's written.":mode==="trace"?"Start at the green dot 1. Follow the grey line with your finger.":"Now write it by yourself on the lines."}</p>`;
}
const strokes = d => d.split(/(?=M)/).map(s=>s.trim()).filter(Boolean);

/* ----- drawing pad ----- */
const W = { ink:[], cur:null, busy:false };
function padSetup(){
  const c = document.getElementById("wcanvas"); if(!c) return;
  const r = c.getBoundingClientRect(), dpr = window.devicePixelRatio||1;
  c.width = Math.round(r.width*dpr); c.height = Math.round(r.height*dpr);
  W.ink = []; W.cur = null; W.busy = false; drawInk();
}
function vbScale(){ const c = document.getElementById("wcanvas"), svg = document.getElementById("wsvg"); const vb = svg.viewBox.baseVal; return {c, sx: c.width/vb.width, sy: c.height/vb.height, vb}; }
function toVB(e){ const c = document.getElementById("wcanvas"), r = c.getBoundingClientRect(), vb = document.getElementById("wsvg").viewBox.baseVal; return {x:(e.clientX-r.left)/r.width*vb.width, y:(e.clientY-r.top)/r.height*vb.height}; }
function drawInk(){
  const {c, sx, sy} = vbScale(), g = c.getContext("2d");
  g.clearRect(0,0,c.width,c.height); g.lineCap="round"; g.lineJoin="round"; g.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--ink-pen").trim() || "#1f4fd1"; g.lineWidth = 6*sx;
  W.ink.forEach(st=>{ g.beginPath(); st.forEach((p,i)=> i ? g.lineTo(p.x*sx,p.y*sy) : g.moveTo(p.x*sx,p.y*sy)); if(st.length===1) g.lineTo(st[0].x*sx+0.1, st[0].y*sy); g.stroke(); });
}
document.addEventListener("pointerdown", e=>{
  if(e.target.id!=="wcanvas") return; e.preventDefault();
  e.target.setPointerCapture(e.pointerId); W.cur = [toVB(e)]; W.ink.push(W.cur); drawInk();
});
document.addEventListener("pointermove", e=>{
  if(!W.cur || e.target.id!=="wcanvas") return; e.preventDefault();
  const p = toVB(e), q = W.cur[W.cur.length-1], d = Math.hypot(p.x-q.x, p.y-q.y);
  for(let k=1;k<=Math.ceil(d/1.5);k++){ const t=k/Math.ceil(d/1.5); W.cur.push({x:q.x+(p.x-q.x)*t, y:q.y+(p.y-q.y)*t}); }
  drawInk();
});
document.addEventListener("pointerup", ()=>{ if(!W.cur) return; W.cur = null; if((S.wmode||"watch")==="trace") checkTrace(false); });

/* Trace check: how much of the grey line is covered, and how much ink stays near it. */
function guideSamples(){
  const out = [];
  document.querySelectorAll("#wsvg .gd").forEach(p=>{
    const tx = +(p.parentNode.getAttribute("transform").match(/translate\(([-\d.]+)/)[1]);
    strokes(p.getAttribute("d")).forEach(d=>{
      const tmp = document.createElementNS("http://www.w3.org/2000/svg","path"); tmp.setAttribute("d", d); p.parentNode.appendChild(tmp);
      const L = tmp.getTotalLength(); for(let s=0; s<=L; s+=2){ const pt = tmp.getPointAtLength(s); out.push({x:pt.x+tx, y:pt.y}); }
      tmp.remove();
    });
  });
  return out;
}
function nearAny(points, cell){
  const grid = new Map(), key = (x,y)=>`${Math.floor(x/cell)},${Math.floor(y/cell)}`;
  points.forEach(p=>{ const k=key(p.x,p.y); (grid.get(k)||grid.set(k,[]).get(k)).push(p); });
  return (p, r) => { const cx=Math.floor(p.x/cell), cy=Math.floor(p.y/cell);
    for(let i=-1;i<=1;i++) for(let j=-1;j<=1;j++){ const a = grid.get(`${cx+i},${cy+j}`); if(a && a.some(q=>Math.hypot(q.x-p.x,q.y-p.y)<=r)) return true; } return false; };
}
function checkTrace(pressedDone){
  const ink = W.ink.flat(); if(!ink.length){ if(pressedDone) say("Use your finger to follow the grey line."); return; }
  const g = guideSamples(), nearInk = nearAny(ink, 10), nearGuide = nearAny(g, 10);
  const cover = g.filter(p=>nearInk(p, 8)).length / g.length;
  const stay = ink.filter(p=>nearGuide(p, 10)).length / ink.length;
  if(cover>=0.8 && stay>=0.7){ success("trace"); }
  else if(pressedDone){ say(cover<0.8 ? "Nearly! Keep going along the grey line." : "Try to stay on the grey line. Let's try again."); }
}
function success(mode){
  if(W.busy) return; W.busy = true;
  const it = wItem(S.witem, learner());
  if(mode==="own") document.querySelectorAll("#wsvg .ghost").forEach(g=>g.classList.add("show"));
  if(it && it.type==="t" && (S.wword||0) < it.words.length-1){
    say(it.words[S.wword||0].replace(".","")+"! Next word.");
    setTimeout(()=>{ W.busy=false; S.wword=(S.wword||0)+1; render(); }, 1700); return;
  }
  if(it && (it.type==="c" || it.type==="t")){
    wSave(it.type==="c" ? "spell" : "sentence"); say(it.type==="t" ? `${it.label} You wrote a whole sentence!` : `${it.word}! Well done!`);
    const ch = document.getElementById("wcheer"); if(ch) ch.hidden = false;
    setTimeout(()=>{ W.busy=false; const keys = sectionKeys(S.wsec, learner()), i = keys.indexOf(S.witem);
      if(i < keys.length-1) openItem(keys[i+1]); else go("wsec"); }, 2300); return;
  }
  wSave(mode);
  const msgs = ["Well done!","Super!","Great writing!","You did it!","Wow, beautiful!"];
  say(msgs[Math.floor(Math.random()*msgs.length)]);
  const ch = document.getElementById("wcheer"); if(ch){ ch.hidden = false; }
  setTimeout(()=>{ W.busy=false; if(mode==="trace"){ S.wmode="own"; } render(); }, mode==="own" ? 2200 : 1600);
}

/* Watch: draw each stroke in order with a moving pencil dot. */
function playDemo(){
  const g = document.getElementById("wanim"); if(!g || W.busy) return; W.busy = true; g.innerHTML = "";
  const it = wItem(S.witem, learner()), lay = layout(it), queue = [];
  lay.parts.forEach(p=>strokes(p.path).forEach(d=>queue.push({d, tx:p.tx})));
  say(it.say);
  const NS = "http://www.w3.org/2000/svg", dot = document.createElementNS(NS,"circle"); dot.setAttribute("r","4"); dot.setAttribute("class","pencil");
  let i = 0;
  const next = ()=>{
    if(i>=queue.length || !document.getElementById("wanim")){ W.busy=false; dot.remove(); return; }
    const {d, tx} = queue[i++], path = document.createElementNS(NS,"path");
    path.setAttribute("d", d); path.setAttribute("transform", `translate(${tx} 0)`); path.setAttribute("class","anim"); g.appendChild(path); g.appendChild(dot);
    const L = Math.max(1, path.getTotalLength()), dur = Math.max(450, L*22), t0 = performance.now();
    path.style.strokeDasharray = L; path.style.strokeDashoffset = L;
    const step = now=>{ const k = Math.min(1,(now-t0)/dur); path.style.strokeDashoffset = L*(1-k); const pt = path.getPointAtLength(L*k); dot.setAttribute("cx", pt.x+tx); dot.setAttribute("cy", pt.y);
      if(k<1) requestAnimationFrame(step); else setTimeout(next, 250); };
    requestAnimationFrame(step);
  };
  next();
}

function openItem(k){
  S.witem = k; S.wmode = "watch"; S.wphase = "build"; S.wword = 0; S.wbuilt = []; S.wtiles = null;
  const it = wItem(k, learner());
  go("write");
  if(it.type==="c" || it.type==="t") setTimeout(()=>say(it.type==="c" ? `${it.word}. Can you build the word ${it.word}?` : `${it.label} Put the words in the right order.`), 80);
  else setTimeout(()=>{ padSetup(); playDemo(); }, 60);
}

/* ----- build a word from letter tiles, or a sentence from word cards ----- */
function tilesFor(it){
  if(S.wtiles) return S.wtiles;
  let tiles;
  if(it.type==="c"){ const pool = "abcdefghijklmnoprstuvwy".split("").filter(c=>!it.word.includes(c)); const extra = shuffle(pool).slice(0,2); tiles = shuffle([...it.word, ...extra]); }
  else tiles = shuffle(it.words.slice());
  return (S.wtiles = tiles.map(v=>({v, used:false})));
}
function vBuild(it){
  const target = it.type==="c" ? [...it.word] : it.words, tiles = tilesFor(it), built = S.wbuilt || [];
  return `${crumbs([{act:"home",label:"Writing"},{act:"w-sec",data:`data-s="${S.wsec}"`,label:WR_SECTIONS.find(x=>x[0]===S.wsec)[1]},{label:it.type==="c"?"Build it":"Sentence"}])}
  <div class="wbuild">
    <button class="wpic" data-act="w-say" data-text="${esc(it.type==="c"?it.word:it.label)}" aria-label="Listen">${it.emoji}<span>🔊</span></button>
    <div class="wslots ${it.type==="t"?"words":""}">${target.map((v,i)=>`<span class="wslot ${built[i]!=null?"on":""}">${built[i]!=null?esc(target[i]):""}</span>`).join("")}</div>
    <div class="wtiles ${it.type==="t"?"words":""}">${tiles.map((t,i)=>`<button class="wtile" data-act="w-tile" data-i="${i}" ${t.used?"disabled":""}>${esc(t.v)}</button>`).join("")}</div>
    <p class="wtip">${it.type==="c"?"Listen, then tap the letters in order.":"Listen, then tap the words in order."}</p>
  </div>`;
}
function pickTile(i){
  const it = wItem(S.witem, learner()), target = it.type==="c" ? [...it.word] : it.words, tiles = tilesFor(it), t = tiles[i];
  if(!t || t.used || W.busy) return;
  S.wbuilt = S.wbuilt || [];
  const need = target[S.wbuilt.length];
  if(t.v===need){
    t.used = true; S.wbuilt.push(t.v); render();
    if(S.wbuilt.length===target.length){
      W.busy = true; say(it.type==="c" ? `${[...it.word].join(", ")}. ${it.word}! Now write it.` : `${it.label} Now write it.`);
      setTimeout(()=>{ W.busy=false; S.wphase="write"; S.wword=0; render(); }, 2200);
    } else say(t.v.replace(".",""));
  } else {
    const el = document.querySelectorAll(".wtile")[i]; if(el){ el.classList.remove("shake"); void el.offsetWidth; el.classList.add("shake"); }
    say(it.type==="c" ? `Listen again. ${it.word}. What comes next?` : `Not that one. Listen: ${it.label}`);
  }
}

/* ----- letter sounds game: which letter does the word start with? ----- */
function startSounds(){
  const l = learner(), known = soundsKnown(l.id), letters = Object.keys(WR_PIC).filter(c=>c!=="x");
  const unknown = shuffle(letters.filter(c=>!known[c])), rest = shuffle(letters.filter(c=>known[c]));
  const qs = [...unknown, ...rest].slice(0,10).map(c=>{ const opts = shuffle([c, ...shuffle(letters.filter(x=>x!==c)).slice(0,3)]); return {c, opts}; });
  S.wsnd = {qs, i:0, res:{}, right:0, picked:null};
  go("sounds"); setTimeout(()=>askSound(), 80);
}
function askSound(){ const q = S.wsnd.qs[S.wsnd.i], w = WR_PIC[q.c][0]; say(`${w}. Which letter does ${w} start with?`); }
function answerSound(c){
  const z = S.wsnd, q = z.qs[z.i]; if(!q || z.picked) return;
  const w = WR_PIC[q.c][0], ok = c===q.c; z.picked = c;
  if(!(q.c in z.res)) z.res[q.c] = ok;
  if(ok) z.right++;
  say(ok ? `Yes! ${w} starts with ${q.c}.` : `Not quite. ${w} starts with ${q.c}.`);
  render();
  setTimeout(()=>{ z.picked = null; z.i++; if(z.i>=z.qs.length) finishSounds(); else { render(); askSound(); } }, ok ? 1600 : 2600);
}
function finishSounds(){
  const l = learner(), z = S.wsnd, id = uid();
  const rec = {learnerId:l.id, kind:"write", item:"sounds", label:"Letter sounds", mode:"sound", res:z.res, score:z.right, total:z.qs.length, ok:true, at:Date.now()};
  S.attempts.push({id, ...rec}); write("attempts", id, rec);
  render(); say(`You got ${z.right} out of ${z.qs.length}!`);
}
function vSounds(){
  const z = S.wsnd; if(!z) return vWriteHome();
  if(z.i>=z.qs.length) return `${crumbs([{act:"home",label:"Writing"},{label:"Letter sounds"}])}
    <div class="wdone"><div class="em">${z.right>=8?"🏆":z.right>=5?"🌟":"👍"}</div><h1>${z.right} out of ${z.qs.length}</h1>
    <div class="wtools"><button class="wbtn go" data-act="w-sounds">🔁 Play again</button><button class="wbtn" data-act="home">🏠</button></div></div>`;
  const q = z.qs[z.i], [w,e] = WR_PIC[q.c];
  return `${crumbs([{act:"home",label:"Writing"},{label:"Letter sounds"}])}
  <div class="qhead"><span class="eyebrow">Letter sounds</span><span class="eyebrow">${z.i+1} of ${z.qs.length}</span></div>
  <div class="wbuild">
    <button class="wpic" data-act="w-say" data-text="${w}. Which letter does ${w} start with?" aria-label="Listen">${e}<span>🔊</span></button>
    <div class="wtiles big">${q.opts.map(c=>`<button class="wtile ${z.picked ? (c===q.c?"right":c===z.picked?"wrong":"") : ""}" data-act="w-sans" data-c="${c}" ${z.picked?"disabled":""}>${c}</button>`).join("")}</div>
    <p class="wtip">Which letter does it start with?</p></div>`;
}

/* ----- events ----- */
document.addEventListener("click", e=>{
  const b = e.target.closest("[data-act^='w-']"); if(!b) return;
  const act = b.dataset.act;
  if(act==="w-say"){ say(b.dataset.text); }
  else if(act==="w-sec"){ S.wsec = b.dataset.s; go("wsec"); }
  else if(act==="w-item"){ openItem(b.dataset.k); }
  else if(act==="w-sounds"){ startSounds(); }
  else if(act==="w-tile"){ pickTile(+b.dataset.i); }
  else if(act==="w-sans"){ answerSound(b.dataset.c); }
  else if(act==="w-mode"){ S.wmode = b.dataset.m; W.busy = false; render(); setTimeout(()=>{ padSetup(); if(S.wmode==="watch") playDemo(); else say(S.wmode==="trace" ? "Now you try. Start at the green dot." : "Now write it all by yourself."); }, 30); }
  else if(act==="w-play"){ const g=document.getElementById("wanim"); if(g) g.innerHTML=""; W.busy=false; playDemo(); }
  else if(act==="w-clear"){ W.ink = []; drawInk(); }
  else if(act==="w-done"){
    if((S.wmode||"watch")==="trace") checkTrace(true);
    else { const n = W.ink.flat().length; if(n<15) say("Write it on the lines first."); else success("own"); }
  }
});
window.addEventListener("resize", ()=>{ if(S.view==="write"){ const keep = W.ink; padSetup(); W.ink = keep; drawInk(); } });

/* ----- parent report for a Grade R learner ----- */
function vPWriting(k){
  const recs = wRecs(k.id);
  const sec = (id,label)=>{ const keys = sectionKeys(id,k); if(!keys.length) return ""; const done = keys.filter(x=>wStars(k.id,x)>0).length;
    return `<details class="more"><summary>${label}: ${done} of ${keys.length} practised</summary><div class="wlist">${keys.map(x=>{ const it = wItem(x,k), n = wStars(k.id,x);
      return `<span class="wchip ${n?"on":""}" title="${n===2?"Traced and written on her own":n?"Traced":"Not yet"}">${esc(it.label)} ${n?"⭐".repeat(n):""}</span>`; }).join("")}</div></details>`; };
  return `<h2 class="h2s">Writing</h2>
  <p class="muted" style="margin:0 0 10px">⭐ = traced correctly · ⭐⭐ = also written on her own. ${recs.length} writing exercises so far.</p>
  ${(()=>{ const k2 = soundsKnown(k.id), keys = Object.keys(WR_PIC).filter(c=>c!=="x"), tried = keys.filter(c=>c in k2);
    return `<details class="more"><summary>Letter sounds: knows ${tried.filter(c=>k2[c]).length} of ${keys.length}</summary><div class="wlist">${keys.map(c=>`<span class="wchip ${k2[c]?"on":c in k2?"miss":""}" title="${k2[c]?"Knows it":c in k2?"Got it wrong last time":"Not tried"}">${c}</span>`).join("")}</div></details>`; })()}
  ${sec("spell","Spell words")}${sec("sentences","Sentences")}${sec("sight","Sight words")}${sec("capitals","Capital letters")}
  ${sec("patterns","Patterns")}${sec("letters","Small letters")}${sec("numbers","Numbers")}${sec("name","Name")}`;
}
