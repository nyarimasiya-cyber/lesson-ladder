/* Lesson Ladder app: family code, learners, notes, quizzes, weak-spot practice, parent report.
   Data lives in Firebase Firestore under families/{familyCode}/{learners|attempts|reads}. */

const S = {
  mode: "loading",           // loading | setup | nofamily | ready
  user: null, family: null,
  learners: [], attempts: [], reads: [],
  view: "home", learnerId: null, topicId: null, quiz: null, last: null,
  note: "", authTab: "join", parentOk: false
};
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const pref = { get(k){try{return localStorage.getItem(k)}catch{return null}}, set(k,v){try{localStorage.setItem(k,v)}catch{}}, del(k){try{localStorage.removeItem(k)}catch{}} };
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2,7);
const L = "ABCD";
S.learnerId = pref.get("ll-learner");

/* ---------- Firebase ---------- */
let auth, fs, famRef, unsubs = [];
const cfg = window.FIREBASE_CONFIG || {};
const configured = cfg.apiKey && !cfg.apiKey.startsWith("PASTE");

async function sha(text){
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,"0")).join("");
}

/* No emails or passwords: each device signs in anonymously and joins a family by its secret family code.
   The code is 12 random characters, so it can't be guessed; keep it private like a password. */
const CODE_CHARS = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
const newCode = () => { const r = crypto.getRandomValues(new Uint32Array(12)); return [...r].map(n=>CODE_CHARS[n % CODE_CHARS.length]).join(""); };
const cleanCode = s => String(s||"").toUpperCase().replace(/[^A-Z0-9]/g,"");
const showCode = c => c.match(/.{1,4}/g).join("-");

/* Device-only mode: used until Firebase is connected. Same calls as Firestore, saved in this browser.
   Progress then stays on this one device (the parent report works on the same device). */
const LOCAL = !configured || typeof firebase === "undefined";
function localStore(){
  const KEY = "ll-local-db";
  let store = {}; try{ store = JSON.parse(localStorage.getItem(KEY) || "{}"); }catch{}
  const subs = new Set();
  const save = () => { try{ localStorage.setItem(KEY, JSON.stringify(store)); }catch{} subs.forEach(f=>f()); };
  const docRef = path => ({
    get: async () => ({ exists: path in store, data: () => store[path] }),
    set: async d => { store[path] = JSON.parse(JSON.stringify(d)); setTimeout(save, 0); },
    delete: async () => { delete store[path]; setTimeout(save, 0); },
    collection: c => col(path + "/" + c),
    onSnapshot(cb){ const f = () => cb({ exists: path in store, data: () => store[path] }); subs.add(f); setTimeout(f, 0); return () => subs.delete(f); }
  });
  const col = path => ({
    doc: id => docRef(path + "/" + id),
    onSnapshot(cb){
      const f = () => cb({ docs: Object.keys(store).filter(k => k.startsWith(path + "/") && !k.slice(path.length + 1).includes("/")).map(k => ({ id: k.split("/").pop(), data: () => store[k] })) });
      subs.add(f); setTimeout(f, 0); return () => subs.delete(f);
    }
  });
  return { collection: col };
}

function startFirebase(){
  if(LOCAL){
    fs = localStore(); S.user = { uid: "this-device" };
    const code = pref.get("ll-family");
    if(code) openFamily(code); else { S.mode="nofamily"; render(); }
    return;
  }
  firebase.initializeApp(cfg);
  auth = firebase.auth(); fs = firebase.firestore();
  fs.enablePersistence({synchronizeTabs:true}).catch(()=>{});   // offline use where the browser allows
  auth.onAuthStateChanged(user=>{
    S.user = user;
    if(!user){ auth.signInAnonymously().catch(()=>{ S.note="Can't connect. Check your internet connection and reopen the app."; S.mode="nofamily"; render(); }); return; }
    const code = pref.get("ll-family");
    if(code) openFamily(code); else { S.mode="nofamily"; render(); }
  });
}
function openFamily(code){
  unsubs.forEach(u=>u()); unsubs=[];
  S.code = code; S.learners=[]; S.attempts=[]; S.reads=[]; S.lessons=[]; S.links=[];
  famRef = fs.collection("families").doc(code);
  S.parentOk = pref.get("ll-parent-device")===code;
  unsubs.push(famRef.onSnapshot(d=>{ S.family = d.exists ? d.data() : null; softRender(); }, onDbError));
  ["learners","attempts","reads","lessons","links"].forEach(kind=>{
    unsubs.push(famRef.collection(kind).onSnapshot(snap=>{
      S[kind] = snap.docs.map(d=>({id:d.id, ...d.data()}));
      if(kind==="links" && typeof syncLinks==="function") syncLinks();
      if(S.mode!=="ready"){ S.mode="ready"; render(); } else softRender();
    }, onDbError));
  });
}
function onDbError(e){ S.note = "Progress can't be loaded right now ("+(e && e.code || "error")+"). Check your internet connection."; render(); }

/* Writes are queued offline by Firestore and sync when the device is back online. */
function write(kind, id, data){
  famRef.collection(kind).doc(id).set(data).catch(()=>{ S.note = "A result didn't save. Check your connection."; render(); });
}

/* ---------- derived data ---------- */
const learner = () => S.learners.find(l=>l.id===S.learnerId);
const byTime = (a,b)=>a.at-b.at;
/* attempt kinds: "topic" = 10-question test, "chapter" = 20-question chapter test, "review" = weak-spot practice */
const kindOf = a => a.kind || "topic";
const attemptsFor = (lid,tid,kind="topic") => S.attempts.filter(a=>a.learnerId===lid && (tid ? a.topicId===tid && kindOf(a)===kind : true)).sort(byTime);
/* reads record finished steps: stage "notes" (Learn) or "practice" (Practise) */
const hasRead = (lid,tid,stage="notes") => S.reads.some(r=>r.learnerId===lid && r.topicId===tid && (r.stage||"notes")===stage);
const chapterBest = (lid,tid) => { const c = attemptsFor(lid,tid,"chapter"); return c.length ? Math.max(...c.map(a=>a.score)) : null; };
const topicsFor = l => { const order=Object.keys(SUBJECTS); return TOPICS.filter(t=>t.grade===+l.grade).sort((a,b)=>order.indexOf(a.subject)-order.indexOf(b.subject) || (a.term||9)-(b.term||9)); };

/* Every attempt stores items [{t: topicId, q: questionIndex, ok}]; older ones are rebuilt from `wrong`. */
function itemsOf(a){
  if(Array.isArray(a.items)) return a.items;
  if(a.topicId && Array.isArray(a.wrong)) return Array.from({length:10},(_,q)=>({t:a.topicId,q,ok:!a.wrong.includes(q)}));
  return [];
}
/* A question is a weak spot when the learner's most recent answer to it was wrong. */
function weakItems(lid){
  const last = {};
  S.attempts.filter(a=>a.learnerId===lid).sort(byTime).forEach(a=>{
    itemsOf(a).forEach(it=>{ last[it.t+"#"+it.q] = {...it, at:a.at}; });
  });
  return Object.values(last).filter(x=>!x.ok && getQ(x.t,x.q));
}
function weakByTopic(lid){
  const g = {};
  weakItems(lid).forEach(x=>{ (g[x.t] = g[x.t] || []).push(x); });
  return Object.entries(g).map(([t,items])=>({topic:TOPIC[t], items})).sort((a,b)=>b.items.length-a.items.length);
}
const fixedCount = lid => {
  // questions once wrong that are now right
  const seen = {}, fixed = new Set();
  S.attempts.filter(a=>a.learnerId===lid).sort(byTime).forEach(a=>itemsOf(a).forEach(it=>{
    const k=it.t+"#"+it.q; if(!it.ok) seen[k]=true; else if(seen[k]) fixed.add(k);
  }));
  weakItems(lid).forEach(x=>fixed.delete(x.t+"#"+x.q));
  return fixed.size;
};
function status(lid,tid){
  const at = attemptsFor(lid,tid);
  const weak = weakItems(lid).filter(x=>x.t===tid).length;
  if(!at.length) return hasRead(lid,tid) ? {cls:"p-read",label:"Notes read",weak} : {cls:"p-none",label:"Not started",weak};
  const best = Math.max(...at.map(a=>a.score));
  if(best>=8) return {cls:"p-good",label:`Mastered · best ${best}/10`,best,weak};
  if(best>=5) return {cls:"p-warn",label:`Getting there · best ${best}/10`,best,weak};
  return {cls:"p-bad",label:`Needs work · best ${best}/10`,best,weak};
}
const fmtDate = t => new Date(t).toLocaleDateString("en-ZA",{day:"numeric",month:"short"})+" "+new Date(t).toLocaleTimeString("en-ZA",{hour:"2-digit",minute:"2-digit"});

/* ---------- install ---------- */
let installEvt = null;
const standalone = () => window.matchMedia("(display-mode: standalone)").matches || navigator.standalone;
const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
window.addEventListener("beforeinstallprompt", e=>{ e.preventDefault(); installEvt=e; nav(); });
window.addEventListener("appinstalled", ()=>{ installEvt=null; nav(); });
const installTip = () => standalone() ? "" :
  isIOS ? `<div class="tip"><b>Add this app to your iPhone home screen</b> (open this page in <b>Safari</b> first)
  <p style="margin:8px 0 2px"><b>iPhones on iOS 26:</b></p><ol style="margin:0;padding-left:20px"><li>Tap the <b>☰</b> or <b>•••</b> button next to the web address.</li><li>Tap <b>Share</b>, then <b>Add to Home Screen</b>.</li><li>Leave <b>Open as Web App</b> on and tap <b>Add</b>.</li></ol>
  <p style="margin:8px 0 2px"><b>iPhones on iOS 18 or earlier:</b></p><ol style="margin:0;padding-left:20px"><li>Tap the <b>Share</b> button (square with an arrow) at the bottom.</li><li>Scroll down and tap <b>Add to Home Screen</b>, then <b>Add</b>.</li></ol>
  <p class="muted" style="margin:8px 0 0;font-size:14px">To check your version: Settings → General → About → iOS Version.</p></div>` :
  installEvt ? "" : `<p class="tip">Install: in Chrome or Edge, open the browser menu and choose <b>Install Lesson Ladder</b> (or <b>Add to Home screen</b> on Android).</p>`;

/* ---------- views ---------- */
function nav(){
  const n = document.getElementById("nav"); const l = learner();
  if(S.mode!=="ready"){ n.innerHTML = installEvt?`<button data-act="install">Install app</button>`:""; return; }
  n.innerHTML = `
    ${installEvt ? `<button data-act="install">Install app</button>` : ""}
    ${l ? `<button data-act="home" aria-pressed="${!["parent","pick","parentlock"].includes(S.view)}">${esc(l.name)} · Gr ${gradeLabel(l.grade)}</button>` : ""}
    <button data-act="pick" aria-pressed="${S.view==="pick"}">${l?"Switch":"Learners"}</button>
    <button data-act="parent" aria-pressed="${S.view==="parent"||S.view==="parentlock"}">Parent</button>`;
}

function vSetup(){
  return `<section class="hello"><span class="eyebrow">One-time setup</span><h1>Connect the database</h1>
  <p>This copy of Lesson Ladder isn't connected to Firebase yet. Paste your Firebase settings into <b>config.js</b> as described in the setup guide (README), then reload.</p></section>`;
}

function vAuth(){
  if(S.newCode) return `<div class="auth">
  <section class="hello"><span class="eyebrow">Family created</span><h1>Your family code</h1>
  <p class="muted">Type this code on each child's PC to connect it. Write it down and keep it private; anyone with the code can see your children's progress.</p></section>
  <div class="stat" style="text-align:center"><div class="v" style="font-size:clamp(26px,8vw,40px);letter-spacing:.06em">${showCode(S.newCode)}</div></div>
  <div class="row"><button class="btn ghost" data-act="copycode">Copy code</button><button class="btn" data-act="codedone">I've written it down</button></div></div>`;
  const join = S.authTab!=="new" && !LOCAL;
  if(LOCAL) S.authTab = "new";
  return `<div class="auth">
  <section class="hello"><span class="eyebrow">CAPS-aligned learning</span><h1>${join?"Connect this device":"Start a new family"}</h1>
  <p class="muted">${LOCAL?"Choose a parent PIN, then add your child. Their results and the parent report are kept on this device.":join?"Type the family code shown in the parent area on the parent's phone. You only do this once per device.":"A parent does this once, on their own phone. You'll get a family code to type on the kids' PCs."}</p></section>
  ${LOCAL?`<p class="tip">This copy isn't connected to the online database yet, so progress is saved on this device only. Set up the family here, on the device the child uses.</p>`:`<div class="tabs"><button data-act="authtab" data-tab="join" aria-pressed="${join}">Join with family code</button><button data-act="authtab" data-tab="new" aria-pressed="${!join}">New family</button></div>`}
  <form class="form" id="authForm" novalidate>
    ${join
      ? `<label for="a-code">Family code<input id="a-code" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="XXXX-XXXX-XXXX" maxlength="16" required></label>`
      : `<label for="a-pin">Choose a parent PIN (4 digits, keeps the report private from the kids)<input id="a-pin" inputmode="numeric" maxlength="4" autocomplete="off" required></label>`}
    <p class="err" id="a-err" role="alert"></p>
    <div><button class="btn" type="submit">${join?"Connect":"Create family"}</button></div>
  </form>
  ${installTip()}</div>`;
}

function vPick(){
  const list = S.learners.slice().sort((a,b)=>a.name.localeCompare(b.name));
  return `
  <section class="hello"><span class="eyebrow">CAPS-aligned learning</span><h1>Who's studying today?</h1>
  <p class="muted">Read the notes, then answer 10 questions. Questions you get wrong become weak spots to practise until you get them right.</p></section>
  ${list.length ? `<div class="learners">${list.map(l=>{const w=weakItems(l.id).length;return `
    <button class="lcard" data-act="choose" data-id="${esc(l.id)}"><b>${esc(l.name)}</b><span class="muted">Grade ${gradeLabel(l.grade)} · ${attemptsFor(l.id).length} ${isGradeR(l)?"activities":"quizzes"}${w?` · ${w} weak spot${w===1?"":"s"}`:""}</span></button>`}).join("")}</div>`
  : `<div class="empty" style="margin-bottom:20px">No learners yet. A parent can add each child in the <b>Parent</b> area.</div>`}
  ${installTip()}`;
}

function weakPanel(l){
  const groups = weakByTopic(l.id); const n = groups.reduce((s,g)=>s+g.items.length,0);
  if(!n) return "";
  const bySub = {}; groups.forEach(g=>{ bySub[g.topic.subject]=(bySub[g.topic.subject]||0)+g.items.length; });
  return `<section class="weakbox">
    <div class="row" style="justify-content:space-between;gap:10px"><b>Weak spots to fix</b><span class="pill p-bad">${n}</span></div>
    <div class="feed">${Object.keys(bySub).map(s=>`<div><span>${esc(sname(s,l.grade))}</span><span class="row" style="gap:12px"><span class="num">${bySub[s]}</span><button class="linkbtn" data-act="review" data-subj="${s}">Practise</button></span></div>`).join("")}</div>
    <div><button class="btn" data-act="review">Fix all my weak spots</button></div>
  </section>`;
}

/* Home → subject → term → topics. Only topics that are written are shown. */
const topicOrder = t => [t.term || 0, typeof curriculumIndex==="function" ? curriculumIndex(t.id) : 0];
const byTopicOrder = (a,b) => { const x=topicOrder(a), y=topicOrder(b); return x[0]-y[0] || x[1]-y[1]; };
const sname = (s,g) => typeof subjectName==="function" ? subjectName(s, g) : SUBJECTS[s].name;
function progressOf(lid, list){
  const tried = list.filter(t=>attemptsFor(lid,t.id).length).length;
  const weak = list.reduce((n,t)=>n+status(lid,t.id).weak,0);
  return {tried, weak};
}
function crumbs(parts){
  return `<nav class="crumbs" aria-label="Where you are">${parts.map((p,i)=>i<parts.length-1?`<button class="linkbtn" data-act="${p.act}" ${p.data||""}>${esc(p.label)}</button><span aria-hidden="true">›</span>`:`<span>${esc(p.label)}</span>`).join("")}</nav>`;
}

function vHome(){
  const l = learner(); if(!l) return vPick();
  if(isGradeR(l)) return vWriteHome();
  const mine = topicsFor(l);
  const done = mine.filter(t=>attemptsFor(l.id,t.id).length).length;
  const bests = mine.map(t=>status(l.id,t.id).best).filter(b=>b!=null);
  const avg = bests.length ? Math.round(bests.reduce((a,b)=>a+b,0)/bests.length*10) : null;
  const subs = Object.keys(SUBJECTS).filter(s=>mine.some(t=>t.subject===s));
  return `
  <section class="hello"><span class="eyebrow">Grade ${l.grade}</span><h1>Hi ${esc(l.name)}, pick a subject</h1></section>
  <div class="strip">
    <div class="stat"><div class="eyebrow">Topics tried</div><div class="v">${done}</div></div>
    <div class="stat"><div class="eyebrow">Best average</div><div class="v">${avg==null?"–":avg+"%"}</div></div>
    <div class="stat"><div class="eyebrow">Weak spots fixed</div><div class="v">${fixedCount(l.id)}</div></div>
  </div>
  ${typeof lessonCards==="function" ? lessonCards(l) : ""}
  <button class="mockbar" data-act="mocks"><span><b>Term 4 mock exams</b><span class="muted">Practise a full exam for every subject</span></span><span aria-hidden="true">›</span></button>
  ${weakPanel(l)}
  <div class="tiles">${subs.map(s=>{
    const list = mine.filter(t=>t.subject===s), pr = progressOf(l.id, list);
    return `<button class="tile" data-act="subject" data-s="${s}"><b>${esc(sname(s,l.grade))}</b>
      <span class="muted">${pr.tried} tried${pr.weak?` · <span class="warnword">${pr.weak} weak spot${pr.weak===1?"":"s"}</span>`:""}</span></button>`;}).join("")}</div>`;
}

function vSubject(){
  const l = learner(), s = S.subject;
  const list = topicsFor(l).filter(t=>t.subject===s);
  const terms = [...new Set(list.map(t=>t.term||0))].sort((a,b)=>a-b);
  if(terms.length===1){ S.term = terms[0]; return vTerm(); }
  return `${crumbs([{act:"home",label:"Subjects"},{label:sname(s,l.grade)}])}
  <h1 class="pagetitle">${esc(sname(s,l.grade))}</h1>
  <button class="mockbar small" data-act="mockintro" data-s="${s}"><span><b>${esc(sname(s,l.grade))} mock exam</b></span><span aria-hidden="true">›</span></button>
  <div class="tiles">${terms.map(term=>{
    const tl = list.filter(t=>(t.term||0)===term), pr = progressOf(l.id, tl);
    return `<button class="tile" data-act="term" data-t="${term}"><b>${term?`Term ${term}`:"All topics"}</b>
      <span class="muted">${tl.length} topic${tl.length===1?"":"s"} · ${pr.tried} tried${pr.weak?` · <span class="warnword">${pr.weak} weak</span>`:""}</span></button>`;}).join("")}</div>`;
}

function vTerm(){
  const l = learner(), s = S.subject, term = S.term;
  const all = topicsFor(l).filter(t=>t.subject===s);
  const list = all.filter(t=>(t.term||0)===term).sort(byTopicOrder);
  const multi = new Set(all.map(t=>t.term||0)).size>1;
  const label = term?`Term ${term}`:"Topics";
  return `${crumbs(multi?[{act:"home",label:"Subjects"},{act:"subject",data:`data-s="${s}"`,label:sname(s,l.grade)},{label}]:[{act:"home",label:"Subjects"},{label:sname(s,l.grade)}])}
  <h1 class="pagetitle">${esc(sname(s,l.grade))}${multi?` · ${label}`:""}</h1>
  ${multi?"":`<button class="mockbar small" data-act="mockintro" data-s="${s}"><span><b>${esc(sname(s,l.grade))} mock exam</b></span><span aria-hidden="true">›</span></button>`}
  <div class="topiclist">${list.map(t=>{const st=status(l.id,t.id);return `
    <button class="tcard" data-act="topic" data-id="${t.id}">
      <span class="eyebrow">${t.strand}</span><h3>${t.title}</h3>
      ${stepChips(l.id,t.id)}
      <span class="meta"><span class="muted">${st.weak?`${st.weak} weak spot${st.weak===1?"":"s"} to fix`:"&nbsp;"}</span><span class="pill ${st.cls}">${st.label}</span></span>
    </button>`}).join("")}</div>`;
}

/* ---------- a topic = four steps ---------- */
const STEPS = [["learn","Learn"],["practise","Practise"],["test","Test"],["chapter","Chapter test"]];
function stepState(lid,tid){
  const tests = attemptsFor(lid,tid), ch = attemptsFor(lid,tid,"chapter");
  return {
    learn: hasRead(lid,tid,"notes") ? "Done" : "",
    practise: hasRead(lid,tid,"practice") ? "Done" : "",
    test: tests.length ? `Best ${Math.max(...tests.map(a=>a.score))}/10` : "",
    chapter: ch.length ? `Best ${Math.max(...ch.map(a=>a.score))}/20` : (tests.length ? "" : "Locked")
  };
}
function stepChips(lid,tid){
  const st = stepState(lid,tid);
  return `<span class="chips">${STEPS.map(([k,label],i)=>`<span class="chip ${st[k]&&st[k]!=="Locked"?"on":""}">${i+1} ${label}${st[k]&&st[k]!=="Locked"&&st[k]!=="Done"?": "+st[k].replace("Best ",""):""}</span>`).join("")}</span>`;
}

/* Long notes are split into pages at their section headings (about one phone screen or two per page). */
function notePages(html){
  const parts = html.split(/(?=<h2[ >])/).filter(p=>p.trim());
  const pages = []; let cur = "";
  parts.forEach(p=>{ const len = s => s.replace(/<[^>]+>/g,"").length;
    if(cur && len(cur) + len(p) > 2400){ pages.push(cur); cur = p; } else cur += p; });
  if(cur) pages.push(cur);
  return pages.length ? pages : [html];
}
function notesPager(t){
  const pages = notePages(t.notes), n = pages.length;
  if(S.npageFor !== t.id){ S.npageFor = t.id; S.npage = 0; }
  const all = S.nall, i = Math.min(S.npage||0, n-1), last = all || i===n-1;
  const titles = pages.map(p=>{ const hs = [...p.matchAll(/<h2[^>]*>(.*?)<\/h2>/g)].map(m=>m[1].replace(/<[^>]+>/g,"").replace(/^\d+\.\s*/,""));
    const t = hs.join(" · ") || "Notes"; return t.length>70 ? t.slice(0,68)+"…" : t; });
  const nav = n>1 && !all ? `<div class="npager"><button class="btn ghost" data-act="npage" data-p="${i-1}" ${i===0?"disabled":""}>← Previous</button><span class="muted">Page ${i+1} of ${n}</span><button class="btn ${last?"ghost":""}" data-act="npage" data-p="${i+1}" ${last?"disabled":""}>Next →</button></div>` : "";
  return `${n>1?`<div class="ntoc"><label for="npick" class="muted">Pages</label><select id="npick" data-act-change="npick">${titles.map((x,k)=>`<option value="${k}" ${!all&&k===i?"selected":""}>Page ${k+1}: ${esc(x)}</option>`).join("")}${`<option value="all" ${all?"selected":""}>Show all pages</option>`}</select></div>`:""}
  <article class="notes">${all ? t.notes : pages[i]}</article>
  ${nav}
  ${last ? `<div class="cta"><button class="btn" data-act="learned">I understand · Go to practice</button></div>` : ""}`;
}

function vTopic(){
  const t = TOPIC[S.topicId], l = learner(), st = stepState(l.id,t.id);
  const step = S.step || "learn";
  const weak = weakItems(l.id).filter(x=>x.t===t.id);
  const tabs = `<nav class="steps" aria-label="Topic steps">${STEPS.map(([k,label],i)=>`
    <button data-act="step" data-step="${k}" aria-current="${step===k?"step":"false"}" class="${st[k]&&st[k]!=="Locked"?"done":""}">
      <span class="n">${st[k]&&st[k]!=="Locked"?"✓":i+1}</span><span><b>${label}</b><small>${st[k]||"&nbsp;"}</small></span></button>`).join("")}</nav>`;
  let body = "";
  if(step==="learn"){
    body = `${weak.length?`<div class="banner" style="margin-top:14px"><b>You got these wrong last time.</b> Look for the answers in the notes:<ul style="margin:6px 0 0;padding-left:20px">${weak.map(x=>`<li>${esc(getQ(t.id,x.q).q)}</li>`).join("")}</ul></div>`:""}
    ${notesPager(t)}`;
  } else if(step==="practise"){
    body = `<div class="panel"><h2>Practise first</h2>
      <p>Answer ${t.pq.length} practice questions. If you get one wrong, you'll get a hint and can try again until you get it right. Practice isn't marked.</p>
      <div class="row"><button class="btn" data-act="practice">Start practice</button><button class="btn ghost" data-act="step" data-step="learn">Read the notes again</button></div></div>`;
  } else if(step==="test"){
    const tests = attemptsFor(l.id,t.id);
    body = `<div class="panel"><h2>Test: 10 questions</h2>
      <p>This test is marked and saved for the parent report. You'll see the right answer and an explanation after each question. Questions you get wrong become weak spots to fix.</p>
      ${tests.length?`<p class="muted">Tries so far: ${tests.length} · best ${Math.max(...tests.map(a=>a.score))}/10 · latest ${tests[tests.length-1].score}/10</p>`:""}
      ${!hasRead(l.id,t.id,"practice")?`<p class="tip">Tip: do the practice step first. It makes the test easier.</p>`:""}
      <div class="row"><button class="btn" data-act="start">Start the test</button>
      ${weak.length?`<button class="btn ghost" data-act="review" data-topic="${t.id}">Fix my ${weak.length} weak spot${weak.length===1?"":"s"}</button>`:""}</div></div>`;
  } else {
    const ch = attemptsFor(l.id,t.id,"chapter"), unlocked = attemptsFor(l.id,t.id).length>0;
    body = `<div class="panel"><h2>Chapter test: 20 questions</h2>
      <p>The end-of-chapter test covers the whole chapter, exam style. You won't see whether you're right until the end, so take your time and check each answer.</p>
      ${ch.length?`<p class="muted">Tries so far: ${ch.length} · best ${Math.max(...ch.map(a=>a.score))}/20 · latest ${ch[ch.length-1].score}/20</p>`:""}
      ${unlocked?`<div><button class="btn" data-act="chapter">Start the chapter test</button></div>`
        :`<p class="tip">Do the 10-question test first to unlock the chapter test.</p><div><button class="btn ghost" data-act="step" data-step="test">Go to the test</button></div>`}</div>`;
  }
  return `<div class="narrow" style="margin:0 auto">
  <button class="crumb" data-act="backterm">← Back to topics</button>
  <span class="eyebrow">Grade ${t.grade} · ${SUBJECTS[t.subject].name}${t.term?` · Term ${t.term}`:""}</span>
  <h1 style="font-size:clamp(28px,5vw,38px);margin:4px 0 16px">${t.title}</h1>
  ${tabs}${body}</div>`;
}

/* ---------- Term 4 mock exams ----------
   Four fixed papers of 40 questions per subject. The subject's questions are interleaved by topic,
   and each paper starts a quarter further into that list, so every paper covers every topic and
   the papers overlap as little as the question bank allows. */
const MOCK_MAX = 40, PAPERS = 4;
const mockTopics = (l,s) => topicsFor(l).filter(t=>t.subject===s);
const mockAttempts = (lid,s,p) => S.attempts.filter(a=>a.learnerId===lid && a.kind==="mock" && a.subject===s && (p==null || a.paper===p)).sort(byTime);
const pctOf = a => { const its=itemsOf(a); return its.length ? Math.round(its.filter(x=>x.ok).length/its.length*100) : 0; };
function seeded(str){ let h=2166136261; for(const c of str) h=Math.imul(h^c.charCodeAt(0),16777619)>>>0; return ()=>{ h=Math.imul(h^(h>>>15),2246822507)>>>0; h=Math.imul(h^(h>>>13),3266489909)>>>0; h^=h>>>16; return (h>>>0)/4294967296; }; }
function mockBank(l,s){
  const tops = mockTopics(l,s).sort(byTopicOrder), rnd = seeded(`mock-${l.grade}-${s}`);
  const pools = tops.map(t=>{ const p=[...t.qs.map((_,q)=>q), ...t.pq.map((_,i)=>"p"+i), ...t.cq.map((_,i)=>"c"+i)];
    for(let i=p.length-1;i>0;i--){ const j=Math.floor(rnd()*(i+1)); [p[i],p[j]]=[p[j],p[i]]; } return p.map(q=>({t:t.id,q})); });
  const all = []; for(let r=0; pools.some(p=>p.length>r); r++) pools.forEach(p=>{ if(p[r]) all.push(p[r]); });
  return all;
}
function mockSize(l,s){ return Math.min(MOCK_MAX, mockBank(l,s).length); }
function buildMock(l,s,paper){
  const bank = mockBank(l,s), size = mockSize(l,s), items = [];
  const start = Math.floor((paper-1)*bank.length/PAPERS);   // spread the papers evenly through the bank
  for(let j=0;j<size;j++) items.push(bank[(start + j) % bank.length]);
  return items.sort((a,b)=>byTopicOrder(TOPIC[a.t],TOPIC[b.t]));
}
function startMock(s,paper){
  const l = learner(); if(!l) return;
  S.quiz = {kind:"mock", subject:s, paper, items:buildMock(l,s,paper), i:0, picked:null, checked:false, answers:[], started:Date.now()};
  go("quiz");
}
const mm = secs => `${Math.floor(secs/60)}:${String(secs%60).padStart(2,"0")}`;
function mockCard(l,s){
  const done = [1,2,3,4].filter(p=>mockAttempts(l.id,s,p).length).length, a = mockAttempts(l.id,s).filter(x=>x.paper), best = a.length ? Math.max(...a.map(pctOf)) : null;
  return `<button class="tile" data-act="mockintro" data-s="${s}"><b>${esc(sname(s,l.grade))}</b>
    <span class="muted">4 papers · ${mockSize(l,s)} questions each</span>
    <span>${done?`${done}/4 papers done · best ${best}%`:`<span class="muted">No papers written yet</span>`}</span></button>`;
}
function vMocks(){
  const l = learner(); if(!l) return vPick();
  const subs = Object.keys(SUBJECTS).filter(s=>mockTopics(l,s).length);
  return `${crumbs([{act:"home",label:"Subjects"},{label:"Mock exams"}])}
  <h1 class="pagetitle">Term 4 mock exams</h1>
  <p class="muted" style="margin:0 0 16px">Practise the real thing. Every subject has four papers covering the whole year's work. You only see your mark at the end, like in the exam.</p>
  <div class="tiles">${subs.map(s=>mockCard(l,s)).join("")}</div>`;
}
function vMockIntro(){
  const l = learner(), s = S.subject; if(!l || !s) return vMocks();
  const n = mockSize(l,s), tops = mockTopics(l,s).sort(byTopicOrder), bank = mockBank(l,s).length;
  return `${crumbs([{act:"home",label:"Subjects"},{act:"mocks",label:"Mock exams"},{label:sname(s,l.grade)}])}
  <h1 class="pagetitle">${esc(sname(s,l.grade))} mock exams</h1>
  <p class="muted" style="margin:0 0 14px">Four practice papers of ${n} questions, each covering all ${tops.length} topic${tops.length===1?"":"s"}. Aim for about ${Math.round(n*1.2)} minutes per paper. No answers are shown until the end, and you can go back to change answers.${bank<n*PAPERS?" Some questions appear in more than one paper.":""}</p>
  <div class="topiclist">${[1,2,3,4].map(p=>{ const a = mockAttempts(l.id,s,p), best = a.length ? Math.max(...a.map(pctOf)) : null, last = a[a.length-1];
    return `<button class="tcard" data-act="mockstart" data-s="${s}" data-p="${p}"><span class="meta"><b style="font-size:18px">Paper ${p}</b>${best==null?`<span class="pill p-none">Not written</span>`:`<span class="pill ${best>=50?"p-good":"p-bad"}">Best ${best}% · Level ${level(best)[0]}</span>`}</span>
      <span class="muted">${a.length?`${a.length} tr${a.length===1?"y":"ies"} · last ${pctOf(last)}% on ${fmtDate(last.at)}`:`${n} questions · tap to start`}</span></button>`;}).join("")}</div>
  <details class="more" style="margin-top:16px"><summary>Topics in these papers</summary><ul style="margin:0;padding-left:20px">${tops.map(t=>`<li>${t.term?`Term ${t.term}: `:""}${esc(t.title)}</li>`).join("")}</ul></details>`;
}
function topicBreakdown(items){
  const g = {}; items.forEach(x=>{ (g[x.t] = g[x.t] || {n:0,ok:0}); g[x.t].n++; if(x.ok) g[x.t].ok++; });
  return Object.entries(g).map(([t,v])=>({topic:TOPIC[t], ...v, pct:Math.round(v.ok/v.n*100)})).filter(x=>x.topic).sort((a,b)=>a.pct-b.pct);
}

function vQuiz(){
  const z = S.quiz, it = z.items[z.i], t = TOPIC[it.t], q = getQ(it.t,it.q), n = z.items.length;
  const { picked, checked } = z, tried = z.tried || [];
  const title = z.kind==="mock" ? `Mock Paper ${z.paper} · `+esc(sname(z.subject, t.grade)) : z.kind==="review" ? "Weak-spot practice · "+esc(t.title) : z.kind==="practice" ? "Practice · "+esc(t.title) : z.kind==="chapter" ? "Chapter test · "+esc(t.title) : "Test · "+esc(t.title);
  const exam = z.kind==="chapter" || z.kind==="mock";
  const opts = q.o.map((o,i)=>{
    let cls=""; if(checked){ if(i===q.a) cls="right"; else if(i===picked) cls="wrong"; }
    if(tried.includes(i)) cls="wrong";
    const off = checked || tried.includes(i);
    return `<button class="opt ${cls}" role="radio" aria-checked="${picked===i}" data-act="pickopt" data-i="${i}" ${off?"disabled":""}><span class="k">${L[i]}</span><span>${esc(o)}</span></button>`}).join("");
  let fb = "";
  const cheer = (list, k) => list[(z.i + k) % list.length];
  const GOOD = ["Excellent!","Well done!","Great work!","Spot on!","Super!"], TRIED = ["Well tried!","Good effort!","Nearly there!","Keep going!"];
  if(z.kind==="practice" && !checked && tried.length) fb = `<div class="fb hint"><b>${cheer(TRIED, tried.length)} Here's a hint:</b>${esc(q.h)} Try again.</div>`;
  else if(checked && !exam){
    const ok = z.kind==="practice" ? true : picked===q.a;
    const head = z.kind==="practice" ? (tried.length?`${cheer(TRIED,0)} You got it.`:`${cheer(GOOD,0)} Correct, first try.`) : ok ? (z.kind==="review"?`${cheer(GOOD,0)} That one is off your weak list.`:`${cheer(GOOD,0)} Correct.`) : `${cheer(TRIED,0)} The answer is ${L[q.a]}.`;
    fb = `<div class="fb ${ok?"ok":"no"}"><b>${head}</b>${esc(q.e)}</div>`;
  }
  const last = z.i===n-1;
  const btn = exam
    ? `<button class="btn" data-act="examnext" ${picked==null?"disabled":""}>${last?"Finish and see my mark":"Next question"}</button>`
    : checked ? `<button class="btn" data-act="next">${last?(z.kind==="practice"?"Finish practice":"See my score"):"Next question"}</button>`
    : `<button class="btn" data-act="check" ${picked==null?"disabled":""}>Check answer</button>`;
  return `<div class="narrow" style="margin:0 auto">
  <div class="qhead"><span class="eyebrow">${title}</span><span class="eyebrow" style="font-variant-numeric:tabular-nums">Question ${z.i+1} of ${n}${z.kind==="mock"?` · <span id="mocktime">${mm(Math.floor((Date.now()-z.started)/1000))}</span>`:""}</span></div>
  ${z.kind==="mock"?`<div class="muted" style="font-size:14px;margin:-4px 0 6px">${esc(t.title)}</div>`:""}
  <div class="bar"><i style="width:${(z.i+(checked?1:0))/n*100}%"></i></div>
  <div class="q">${esc(q.q)}</div>
  <div class="opts" role="radiogroup" aria-label="Answer options">${opts}</div>
  ${fb}
  <div class="cta">${exam&&z.i>0?`<button class="btn ghost" data-act="examback" style="margin-right:auto">Previous</button>`:""}${btn}</div></div>`;
}

function vPracticeDone(){
  const t = TOPIC[S.topicId], r = S.last;
  return `<div class="narrow" style="margin:0 auto">
  <span class="eyebrow">Practice · ${esc(t.title)}</span>
  <div class="score"><div class="big">${r.first}<small>/${r.n}</small></div>
    <div><div style="font-weight:700;font-size:20px">right on the first try</div>
    <div class="muted">${r.first===r.n?"You're ready for the test.":"Good work getting there. Re-read the notes for the ones that needed a hint, then take the test."}</div></div></div>
  <div class="row"><button class="btn" data-act="start">Take the 10-question test</button><button class="btn ghost" data-act="practice">Practise again</button><button class="btn ghost" data-act="step" data-step="learn">Re-read notes</button></div></div>`;
}

function vMockResult(){
  const r = S.last, n = r.items.length, score = r.items.filter(x=>x.ok).length, pct = Math.round(score/n*100), [lv,ln] = level(pct);
  const l = learner(), g = l ? +l.grade : r.grade, bd = topicBreakdown(r.items), wrong = r.items.filter(x=>!x.ok);
  const revise = bd.filter(x=>x.pct<60);
  return `<div class="narrow" style="margin:0 auto">
  <span class="eyebrow">Mock Paper ${r.paper||1} · ${esc(sname(r.subject,g))}</span>
  <div class="score"><div class="big">${pct}<small>%</small></div>
    <div><div style="font-weight:700;font-size:20px">${score}/${n} · Level ${lv}: ${ln}</div>
    <div style="font-weight:600">${praiseFor(pct)}</div>
    <div class="muted">${pct>=50?"That's a pass. ":"Not a pass yet, keep going. "}Time: ${mm(r.secs||0)}. Saved for the parent report.</div></div></div>
  ${revise.length?`<div class="banner"><b>Revise these first:</b> ${revise.map(x=>esc(x.topic.title)).join(", ")}</div>`:`<p>No topic below 60%. Well done.</p>`}
  <h2 class="h2s">Marks per topic</h2>
  <div class="topiclist">${bd.map(x=>`<div class="tcard static"><span class="meta"><b>${esc(x.topic.title)}</b><span class="pill ${x.pct>=80?"p-good":x.pct>=50?"p-warn":"p-bad"}">${x.ok}/${x.n}</span></span>
    ${x.pct<80?`<span class="row" style="gap:14px"><button class="linkbtn" data-act="topic" data-id="${x.topic.id}">Re-read notes</button><button class="linkbtn" data-act="review" data-topic="${x.topic.id}">Practise my mistakes</button></span>`:""}</div>`).join("")}</div>
  ${wrong.length?`<details class="more" style="margin-top:16px"><summary>See the ${wrong.length} question${wrong.length===1?"":"s"} you got wrong</summary><div class="miss">${wrong.map(x=>{const q=getQ(x.t,x.q);return `<div><b>${esc(q.q)}</b><br>Answer: ${esc(q.o[q.a])}<br><span class="muted">${esc(q.e)}</span></div>`}).join("")}</div></details>`:""}
  <div class="row" style="margin-top:20px">
    ${wrong.length?`<button class="btn" data-act="review" data-subj="${r.subject}">Fix my mistakes</button>`:""}
    ${(r.paper||1)<4?`<button class="btn ${wrong.length?"ghost":""}" data-act="mockstart" data-s="${r.subject}" data-p="${(r.paper||1)+1}">Write Paper ${(r.paper||1)+1}</button>`:""}
    <button class="btn ghost" data-act="mockstart" data-s="${r.subject}" data-p="${r.paper||1}">Redo Paper ${r.paper||1}</button>
    <button class="btn ghost" data-act="mockintro" data-s="${r.subject}">All ${esc(sname(r.subject,g))} papers</button></div></div>`;
}
function vResult(){
  const r = S.last;
  if(r && r.kind==="mock") return vMockResult();
  const n = r.items.length, score = r.items.filter(x=>x.ok).length, pct = Math.round(score/n*100), [lv,ln] = level(pct);
  const wrong = r.items.filter(x=>!x.ok);
  const l = learner(); const left = l ? weakItems(l.id).length : 0;
  const isReview = r.kind==="review", isChapter = r.kind==="chapter";
  const t = r.topicId ? TOPIC[r.topicId] : null;
  return `<div class="narrow" style="margin:0 auto">
  <span class="eyebrow">${isReview?"Weak-spot practice":(isChapter?"Chapter test · ":"Test · ")+esc(t.title)}</span>
  <div class="score"><div class="big">${score}<small>/${n}</small></div>
    <div><div style="font-weight:700;font-size:20px">${isReview?`${score} fixed, ${n-score} still to fix`:`${pct}% · Level ${lv}: ${ln}`}</div>
    <div style="font-weight:600">${isReview ? (score===n?"Excellent! All fixed.":score?"Well done, keep going!":"Well tried! Have another go.") : praiseFor(pct)}</div>
    <div class="muted">Saved for the parent report. ${left?`You have ${left} weak spot${left===1?"":"s"} left.`:"You have no weak spots left."}</div></div></div>
  ${wrong.length?`<h2 style="font-size:20px">${isChapter?"Questions you got wrong":"Still to fix"}</h2><div class="miss">${wrong.map(x=>{const q=getQ(x.t,x.q);return `<div><b>${esc(q.q)}</b><br>Answer: ${esc(q.o[q.a])}<br><span class="muted">${esc(q.e)}</span></div>`}).join("")}</div>`:`<p>You got every question right.</p>`}
  <div class="row" style="margin-top:20px">
    ${left?`<button class="btn" data-act="review">Fix my weak spots</button>`:""}
    ${!isReview && !isChapter?`<button class="btn ${left?"ghost":""}" data-act="chapter">Go to the chapter test</button><button class="btn ghost" data-act="start">Try the test again</button>`:""}
    ${isChapter?`<button class="btn ${left?"ghost":""}" data-act="chapter">Try the chapter test again</button>`:""}
    ${t?`<button class="btn ghost" data-act="topic" data-id="${t.id}">Back to the topic</button>`:""}
    <button class="btn ghost" data-act="home">All topics</button></div></div>`;
}

function vParentLock(){
  return `<div class="auth"><section class="hello"><span class="eyebrow">Parent area</span><h1>Enter the parent PIN</h1></section>
  <form class="form" id="pinForm">
    <label for="p-pin">Parent PIN<input id="p-pin" inputmode="numeric" maxlength="4" autocomplete="off" required></label>
    <label class="check" for="p-remember"><input type="checkbox" id="p-remember"> Remember this phone as a parent device</label>
    <p class="err" id="p-err" role="alert"></p>
    <div><button class="btn" type="submit">Open report</button></div>
  </form></div>`;
}

function kidSummary(k, list){
  const bests = list.map(t=>status(k.id,t.id).best).filter(b=>b!=null);
  const avg = bests.length ? Math.round(bests.reduce((a,b)=>a+b,0)/bests.length*10) : null;
  const weak = list.reduce((n,t)=>n+status(k.id,t.id).weak,0);
  return {tried:bests.length, total:list.length, avg, weak};
}
const avgTxt = a => a==null ? "No tests yet" : `${a}% · Level ${level(a)[0]}`;
function pkid(){ return S.learners.find(x=>x.id===S.pkid); }
function pcrumbs(extra){ return crumbs([{act:"parent",label:"Parent"}, ...extra]); }

function vParent(){
  const kids = S.learners.slice().sort((a,b)=>a.name.localeCompare(b.name));
  const recent = S.attempts.slice().sort((a,b)=>b.at-a.at).filter(a=>S.learners.some(k=>k.id===a.learnerId)).slice(0,5);
  return `<section class="hello"><span class="eyebrow">Parent area</span><h1>Progress report</h1></section>
  ${!kids.length?`<div class="empty" style="margin-bottom:20px">No learners yet. Add each child below.</div>`:""}
  <div class="tiles">${kids.map(k=>{
    const sm = kidSummary(k, topicsFor(k)); const all = attemptsFor(k.id); const lastAt = all.length ? all[all.length-1].at : null;
    return `<button class="tile" data-act="pkid" data-id="${esc(k.id)}"><b>${esc(k.name)}</b>
      <span class="muted">Grade ${gradeLabel(k.grade)} · last active ${lastAt?fmtDate(lastAt):"never"}</span>
      <span>${isGradeR(k)?`Writing: ${wRecs(k.id).length} exercises`:avgTxt(sm.avg)}</span>
      <span class="muted">Today: ${(n=>n?`${n} activit${n===1?"y":"ies"}`:"nothing yet")(eventsIn(k.id,"today").length)}</span>
      ${isGradeR(k)?"":`<span class="muted">${sm.tried} topics tested${sm.weak?` · <span class="warnword">${sm.weak} weak spot${sm.weak===1?"":"s"}</span>`:""}</span>`}</button>`;}).join("")}</div>
  <button class="mockbar" data-act="teacher"><span><b>👩‍🏫 Teacher</b><span class="muted">Give lessons, mark written tests, link other families</span></span><span aria-hidden="true">›</span></button>
  ${recent.length?`<h2 class="h2s">Recent activity</h2><div class="feed" style="margin-bottom:24px">${recent.map(a=>{const k=S.learners.find(x=>x.id===a.learnerId); const ev=evOf(a); return `<div><span><b>${esc(k.name)}</b> · ${esc(ev.title)}</span><span class="num">${ev.score||esc(ev.label)}</span></div>`}).join("")}</div>`:""}
  <details class="more" ${kids.length?"":"open"}><summary>Add a learner</summary>
  <form class="form" id="addForm">
    <label for="new-name">First name<input id="new-name" required maxlength="30" autocomplete="off"></label>
    <label for="new-grade">Grade<select id="new-grade"><option value="0">Grade R</option><option value="7">Grade 7</option><option value="8" selected>Grade 8</option><option value="9">Grade 9</option></select></label>
    <div><button class="btn" type="submit">Add learner</button></div>
  </form></details>
  <details class="more"><summary>Family code</summary>
    <p class="muted" style="margin:0">Type this on a new device to connect it to your family. Keep it private.</p>
    <div class="row"><span class="v" style="font-family:var(--display);font-weight:800;font-size:24px;letter-spacing:.06em">${showCode(S.code)}</span><button class="btn ghost" data-act="copycode">Copy</button></div></details>
  <details class="more"><summary>What the CAPS levels mean</summary>
    <p class="levels" style="margin:0">7 Outstanding 80–100% · 6 Meritorious 70–79 · 5 Substantial 60–69 · 4 Adequate 50–59 · 3 Moderate 40–49 · 2 Elementary 30–39 · 1 Not achieved 0–29</p></details>
  <div class="tools"><button class="btn ghost" data-act="lockparent">Lock parent area</button>${S.confirmLeave
    ? `<span>Disconnect this device? You'll need the family code to connect it again.</span><button class="btn ghost danger" data-act="leave">Yes, disconnect</button><button class="btn ghost" data-act="cancelleave">Cancel</button>`
    : `<button class="btn ghost" data-act="askleave">Disconnect this device</button>`}</div>`;
}

function vPChild(){
  const k = pkid(); if(!k) return vParent();
  const mine = topicsFor(k), sm = kidSummary(k, mine);
  const subs = Object.keys(SUBJECTS).filter(s=>mine.some(t=>t.subject===s));
  return `${pcrumbs([{label:k.name}])}
  <h1 class="pagetitle">${esc(k.name)} <span class="muted" style="font-size:18px">Grade ${gradeLabel(k.grade)}</span></h1>
  ${isGradeR(k)?"":`<div class="strip">
    <div class="stat"><div class="eyebrow">Topics tested</div><div class="v">${sm.tried}/${sm.total}</div></div>
    <div class="stat"><div class="eyebrow">Best average</div><div class="v">${sm.avg==null?"–":sm.avg+"%"}</div><div class="muted" style="font-size:13px">${sm.avg==null?"":"Level "+level(sm.avg)[0]+" · "+level(sm.avg)[1]}</div></div>
    <div class="stat"><div class="eyebrow">Weak spots</div><div class="v">${sm.weak}</div><div class="muted" style="font-size:13px">${fixedCount(k.id)} fixed</div></div>
  </div>`}
  ${typeof vPLessons==="function" ? vPLessons(k) : ""}
  <h2 class="h2s">What ${esc(k.name)} did</h2>
  <div class="tiles periods">${PERIODS.map(([p,label])=>{ const ev=eventsIn(k.id,p), days=new Set(ev.map(e=>dayKey(e.at))).size;
    return `<button class="tile" data-act="pper" data-p="${p}"><b>${label}</b><span class="muted">${ev.length?`${ev.length} activit${ev.length===1?"y":"ies"} · ${days} day${days===1?"":"s"}`:"Nothing yet"}</span></button>`;}).join("")}</div>
  ${isGradeR(k) ? vPWriting(k) : (()=>{ const ms = subs.filter(s=>mockAttempts(k.id,s).length); return `<h2 class="h2s">Mock exams</h2>${ms.length?`<div class="feed">${ms.map(s=>{const a=mockAttempts(k.id,s), best=Math.max(...a.map(pctOf)), last=a[a.length-1]; return `<div><span>${esc(sname(s,k.grade))}<br><span class="muted" style="font-size:13px">${[1,2,3,4].filter(p=>mockAttempts(k.id,s,p).length).length}/4 papers · ${a.length} tr${a.length===1?"y":"ies"} · last ${pctOf(last)}% on ${fmtDate(last.at).split(" ").slice(0,2).join(" ")}</span></span><span class="pill ${best>=50?"p-good":"p-bad"}">Best ${best}%</span></div>`;}).join("")}</div>`:`<p class="muted" style="margin:0">No mock exams written yet.</p>`}`; })()}
  ${subs.length?`<h2 class="h2s">Subjects</h2>`:""}
  <div class="tiles">${subs.map(s=>{
    const x = kidSummary(k, mine.filter(t=>t.subject===s));
    return `<button class="tile" data-act="psubj" data-s="${s}"><b>${esc(sname(s,k.grade))}</b>
      <span class="muted">${x.tried}/${x.total} tested · ${x.avg==null?"no tests yet":x.avg+"%"}${x.weak?` · <span class="warnword">${x.weak} weak</span>`:""}</span></button>`;}).join("")}</div>
  <div class="tools">${S.confirmRemove===k.id
    ? `<span>Remove ${esc(k.name)}? Their results are kept but hidden.</span><button class="btn ghost danger" data-act="remove" data-id="${esc(k.id)}">Yes, remove</button><button class="btn ghost" data-act="cancelremove">Cancel</button>`
    : `<button class="btn ghost danger" data-act="askremove" data-id="${esc(k.id)}">Remove learner</button>`}</div>`;
}

function vPSubject(){
  const k = pkid(); if(!k) return vParent();
  const s = S.psub, list = topicsFor(k).filter(t=>t.subject===s);
  const terms = [...new Set(list.map(t=>t.term||0))].sort((a,b)=>a-b);
  if(terms.length===1){ S.pterm = terms[0]; return vPTerm(); }
  return `${pcrumbs([{act:"pkid",data:`data-id="${esc(k.id)}"`,label:k.name},{label:sname(s,k.grade)}])}
  <h1 class="pagetitle">${esc(sname(s,k.grade))}</h1>
  <div class="tiles">${terms.map(term=>{
    const x = kidSummary(k, list.filter(t=>(t.term||0)===term));
    return `<button class="tile" data-act="pterm" data-t="${term}"><b>${term?`Term ${term}`:"All topics"}</b>
      <span class="muted">${x.tried}/${x.total} tested · ${x.avg==null?"no tests yet":x.avg+"%"}${x.weak?` · <span class="warnword">${x.weak} weak</span>`:""}</span></button>`;}).join("")}</div>`;
}

function vPTerm(){
  const k = pkid(); if(!k) return vParent();
  const s = S.psub, term = S.pterm;
  const all = topicsFor(k).filter(t=>t.subject===s);
  const list = all.filter(t=>(t.term||0)===term).sort(byTopicOrder);
  const multi = new Set(all.map(t=>t.term||0)).size>1, label = term?`Term ${term}`:"Topics";
  const path = [{act:"pkid",data:`data-id="${esc(k.id)}"`,label:k.name}];
  if(multi) path.push({act:"psubj",data:`data-s="${s}"`,label:sname(s,k.grade)});
  path.push({label: multi?label:sname(s,k.grade)});
  const weakMap = {}; weakByTopic(k.id).forEach(g=>weakMap[g.topic.id]=g.items);
  return `${pcrumbs(path)}
  <h1 class="pagetitle">${esc(sname(s,k.grade))}${multi?` · ${label}`:""}</h1>
  <div class="topiclist">${list.map(t=>{
    const st = status(k.id,t.id), a = attemptsFor(k.id,t.id), lt = a[a.length-1], cb = chapterBest(k.id,t.id), w = weakMap[t.id]||[];
    return `<div class="tcard static">
      <span class="eyebrow">${t.strand}</span><h3>${t.title}</h3>
      ${stepChips(k.id,t.id)}
      <span class="muted" style="font-size:14px">Test: ${st.best!=null?`best ${st.best}/10, ${a.length} tr${a.length===1?"y":"ies"}`:"not yet"}${lt?` · last ${fmtDate(lt.at)}`:""} · Chapter test: ${cb!=null?cb+"/20":"not yet"}</span>
      <span class="meta"><span class="muted">${w.length?`<span class="warnword">${w.length} weak spot${w.length===1?"":"s"}</span>`:"&nbsp;"}</span><span class="pill ${st.cls}">${st.label.split(" · ")[0]}</span></span>
      ${w.length?`<details class="more"><summary>Questions still wrong</summary><ul style="margin:6px 0 0;padding-left:20px">${w.map(x=>{const q=getQ(t.id,x.q);return `<li>${esc(q.q)} <span class="muted">(answer: ${esc(q.o[q.a])})</span></li>`}).join("")}</ul></details>`:""}
    </div>`;}).join("")}</div>`;
}

/* ---------- activity by day / week / month / term ---------- */
/* 2026 public-school terms (DBE calendar). Outside a term, "This term" means the most recent one. */
const SCHOOL_TERMS = [["2026-01-14","2026-03-27"],["2026-04-08","2026-06-26"],["2026-07-21","2026-09-23"],["2026-10-06","2026-12-09"]];
const PERIODS = [["today","Today"],["week","This week"],["month","This month"],["term","This term"]];
const pad = n => String(n).padStart(2,"0");
const dayKey = t => { const d=new Date(t); return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; };
const keyDate = k => { const [y,m,d]=k.split("-").map(Number); return new Date(y,m-1,d); };
const dayLabel = k => keyDate(k).toLocaleDateString("en-ZA",{weekday:"short",day:"numeric",month:"short"});
const timeOf = t => new Date(t).toLocaleTimeString("en-ZA",{hour:"2-digit",minute:"2-digit"});
function periodStart(p){
  const now = new Date(), d = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if(p==="week"){ d.setDate(d.getDate()-((d.getDay()+6)%7)); return d; }
  if(p==="month"){ d.setDate(1); return d; }
  if(p==="term"){
    const today = dayKey(now); let start = null;
    SCHOOL_TERMS.forEach(([s])=>{ if(s<=today) start=s; });
    if(start) return keyDate(start);
    d.setDate(1); return d;   // before the first listed term
  }
  return d;
}
function evOf(a){
  if(kindOf(a)==="write"){
    const lab = {own:"Wrote on her own", trace:"Traced", spell:"Built and wrote a word", sentence:"Wrote a sentence", sound:"Letter sounds game"}[a.mode] || "Writing";
    return {at:a.at, kind:"write", label:lab, subject:"Writing", title: a.mode==="sound" ? "Letter sounds" : `Writing: ${a.label||""}`, score: a.mode==="sound" ? `${a.score}/${a.total}` : ""};
  }
  const t = TOPIC[a.topicId], k = a.stage ? a.stage : kindOf(a), sub = t ? sname(t.subject, t.grade) : "";
  const its = itemsOf(a), sc = its.length ? `${its.filter(x=>x.ok).length}/${its.length}` : (a.total ? `${a.score}/${a.total} first try` : "");
  const label = {notes:"Read the notes", practice:"Did practice", topic:"Test", chapter:"Chapter test", review:"Weak-spot practice", mock:"Mock exam"}[k] || "Activity";
  const msub = k==="mock" ? sname(a.subject, a.grade) : "";
  return {at:a.at, kind:k, label, subject: k==="review" ? "Mixed subjects" : (k==="mock" ? msub : sub), title: k==="review" ? "Weak-spot practice" : k==="mock" ? `Mock Paper ${a.paper||1}: `+msub : (t?.title || ""), score: (k==="topic"||k==="chapter"||k==="review"||k==="mock") ? sc : (k==="practice" && a.total ? sc : "")};
}
function eventsFor(lid){
  const reads = S.reads.filter(r=>r.learnerId===lid && r.at && TOPIC[r.topicId]);
  const atts = S.attempts.filter(a=>a.learnerId===lid && a.at);
  const les = (S.lessons||[]).filter(x=>x.learnerId===lid && x.submittedAt && typeof LESSONS==="object" && LESSONS[x.lessonKey]).map(x=>({at:x.submittedAt, kind:"lesson", label:"Teacher lesson test handed in", subject:sname(LESSONS[x.lessonKey].subject, LESSONS[x.lessonKey].grade), title:LESSONS[x.lessonKey].title, score: x.status==="marked" ? `${x.mark}/${LESSONS[x.lessonKey].outOf}` : ""}));
  return [...reads, ...atts].map(evOf).concat(les).sort((a,b)=>b.at-a.at);
}
const eventsIn = (lid,p) => { const from = periodStart(p).getTime(); return eventsFor(lid).filter(e=>e.at>=from); };
function daySummary(ev){
  const n = k => ev.filter(e=>e.kind===k).length;
  const tests = ev.filter(e=>e.kind==="topic");
  const parts = [];
  if(n("notes")) parts.push(`read ${n("notes")} topic${n("notes")===1?"":"s"}`);
  if(n("practice")) parts.push(`${n("practice")} practice round${n("practice")===1?"":"s"}`);
  if(tests.length){ const avg = Math.round(tests.reduce((s,e)=>{const [a,b]=e.score.split("/").map(Number); return s+a/b;},0)/tests.length*100); parts.push(`${tests.length} test${tests.length===1?"":"s"} · avg ${avg}%`); }
  if(n("chapter")) parts.push(`${n("chapter")} chapter test${n("chapter")===1?"":"s"}`);
  if(n("write")) parts.push(`${n("write")} writing exercise${n("write")===1?"":"s"}`);
  if(n("review")) parts.push(`${n("review")} weak-spot round${n("review")===1?"":"s"}`);
  ev.filter(e=>e.kind==="mock").forEach(e=>{ const [a,b]=e.score.split("/").map(Number); parts.push(`mock exam ${Math.round(a/b*100)}%`); });
  return parts.join(" · ");
}

function vPActivity(){
  const k = pkid(); if(!k) return vParent();
  const p = S.pper || "week", plabel = PERIODS.find(x=>x[0]===p)[1];
  if(p==="today"){ S.pday = dayKey(Date.now()); return vPDay(true); }
  const ev = eventsIn(k.id, p);
  const byDay = {}; ev.forEach(e=>{ (byDay[dayKey(e.at)] = byDay[dayKey(e.at)] || []).push(e); });
  // every day from the start of the period up to today, newest first
  const days = []; for(let d=new Date(); d>=periodStart(p); d.setDate(d.getDate()-1)) days.push(dayKey(d));
  const active = days.filter(d=>byDay[d]);
  const tests = ev.filter(e=>e.kind==="topic"||e.kind==="chapter");
  const avg = tests.length ? Math.round(tests.reduce((s,e)=>{const [a,b]=e.score.split("/").map(Number); return s+a/b;},0)/tests.length*100) : null;
  const shown = p==="week" ? days : active;
  return `${pcrumbs([{act:"pkid",data:`data-id="${esc(k.id)}"`,label:k.name},{label:plabel}])}
  <h1 class="pagetitle">${esc(k.name)} · ${plabel}</h1>
  ${periodChips(p)}
  <div class="strip">
    <div class="stat"><div class="eyebrow">Days worked</div><div class="v">${active.length}/${days.length}</div></div>
    <div class="stat"><div class="eyebrow">Tests taken</div><div class="v">${tests.length}</div><div class="muted" style="font-size:13px">${avg==null?"":"average "+avg+"%"}</div></div>
    <div class="stat"><div class="eyebrow">Notes &amp; practice</div><div class="v">${ev.filter(e=>e.kind==="notes"||e.kind==="practice").length}</div></div>
  </div>
  ${subjectBreakdown(ev, k)}
  <h2 class="h2s">Day by day</h2>
  ${shown.length?`<div class="topiclist">${shown.map(d=>byDay[d]
    ? `<button class="tcard" data-act="pday" data-d="${d}"><span class="meta"><b>${dayLabel(d)}</b><span class="pill p-good">${byDay[d].length} activit${byDay[d].length===1?"y":"ies"}</span></span><span class="muted">${daySummary(byDay[d])}</span></button>`
    : `<div class="tcard static idle"><span class="meta"><b>${dayLabel(d)}</b><span class="pill p-none">Nothing done</span></span></div>`).join("")}</div>`
    : `<div class="empty">No work done yet in this period.</div>`}
  ${p!=="week" && active.length<days.length ? `<p class="muted">${days.length-active.length} day${days.length-active.length===1?"":"s"} with nothing done are not listed.</p>` : ""}`;
}
function periodChips(p){
  return `<div class="pchips" role="tablist">${PERIODS.map(([q,label])=>`<button class="pchip" role="tab" aria-selected="${q===p}" data-act="pper" data-p="${q}">${label}</button>`).join("")}</div>`;
}
function subjectBreakdown(ev, k){
  const g = {}; ev.forEach(e=>{ if(e.kind!=="review") (g[e.subject] = g[e.subject] || []).push(e); });
  const keys = Object.keys(g); if(!keys.length) return "";
  return `<h2 class="h2s">By subject</h2><div class="feed stack">${keys.map(s=>`<div><b>${esc(s)}</b><span class="muted">${daySummary(g[s])}</span></div>`).join("")}</div>`;
}
function vPDay(isToday){
  const k = pkid(); if(!k) return vParent();
  const d = S.pday, ev = eventsFor(k.id).filter(e=>dayKey(e.at)===d);
  const path = [{act:"pkid",data:`data-id="${esc(k.id)}"`,label:k.name}];
  if(!isToday) path.push({act:"pper",data:`data-p="${S.pper||"week"}"`,label:PERIODS.find(x=>x[0]===(S.pper||"week"))[1]});
  path.push({label: isToday ? "Today" : dayLabel(d)});
  return `${pcrumbs(path)}
  <h1 class="pagetitle">${esc(k.name)} · ${isToday?"Today":dayLabel(d)}</h1>
  ${isToday?periodChips("today"):""}
  ${ev.length ? `<p class="muted" style="margin:0 0 12px">${daySummary(ev)}</p>
  <div class="timeline">${ev.map(e=>`<div><span class="num tm">${timeOf(e.at)}</span><span><b>${esc(e.label)}</b>${e.score?` <span class="pill ${scoreCls(e.score)}">${esc(e.score)}</span>`:""}<br><span class="muted">${esc(e.subject)}${e.title&&e.kind!=="review"?" · "+esc(e.title):""}</span></span></div>`).join("")}</div>`
  : `<div class="empty">Nothing done ${isToday?"yet today":"on this day"}.</div>`}`;
}
const scoreCls = s => { const [a,b]=s.split("/").map(parseFloat); if(!b) return "p-none"; const r=a/b; return r>=.8?"p-good":r>=.5?"p-warn":"p-bad"; };

function render(){
  nav();
  const app = document.getElementById("app");
  const draft = document.getElementById("new-name")?.value;
  let html = S.note ? `<div class="banner" role="status">${esc(S.note)}</div>` : "";
  if(S.mode==="loading") html += `<p class="muted">Loading…</p>`;
  else if(S.mode==="setup") html += vSetup();
  else if(S.mode==="nofamily") html += vAuth();
  else if(["parent","pchild","psubject","pterm","pact","pday","teacher","tmark"].includes(S.view)) html += !S.parentOk ? vParentLock() : S.view==="teacher" ? vTeacher() : S.view==="tmark" ? vTMark() : S.view==="pact" ? vPActivity() : S.view==="pday" ? vPDay(false) : S.view==="pchild" ? vPChild() : S.view==="psubject" ? vPSubject() : S.view==="pterm" ? vPTerm() : vParent();
  else if(S.view==="pick" || !learner()) html += vPick();
  else if(S.view==="subject") html += vSubject();
  else if(S.view==="term") html += vTerm();
  else if(S.view==="topic") html += vTopic();
  else if(S.view==="quiz") html += vQuiz();
  else if(S.view==="result") html += vResult();
  else if(S.view==="mocks") html += vMocks();
  else if(S.view==="lesson") html += vLesson();
  else if(S.view==="wsec") html += vWriteSection();
  else if(S.view==="write") html += vWriteItem();
  else if(S.view==="sounds") html += vSounds();
  else if(S.view==="mockintro") html += vMockIntro();
  else if(S.view==="practicedone") html += vPracticeDone();
  else html += vHome();
  if(S.mode==="ready") html += `<p class="foot">${LOCAL?"Progress is saved on this device only. Once the online database is connected, it will sync between devices.":navigator.onLine?`Progress syncs to every device signed in to this family. Family code ends in ‑${showCode(S.code).slice(-4)}.`:"You're offline. Results are kept on this device and sync when you reconnect."}</p>`;
  if(typeof zoomLayer==="function") html += zoomLayer();
  app.innerHTML = html;
  if(S.view==="write" && typeof padSetup==="function") setTimeout(padSetup, 0);
  if(draft){ const i=document.getElementById("new-name"); if(i) i.value=draft; }
}
setInterval(()=>{ const el=document.getElementById("mocktime"); if(el && S.quiz && S.quiz.started) el.textContent = mm(Math.floor((Date.now()-S.quiz.started)/1000)); }, 1000);
function softRender(){ if(S.view==="quiz" || S.view==="write"){ nav(); return; } if(document.activeElement && document.activeElement.matches("input,select,textarea")) { nav(); return; } render(); }
function go(view){ S.view=view; S.note=""; render(); window.scrollTo(0,0); }

/* ---------- quizzes ---------- */
const shuffle = a => { for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
function startTopicQuiz(tid){
  S.quiz = {kind:"topic", topicId:tid, items:TOPIC[tid].qs.map((_,q)=>({t:tid,q})), i:0, picked:null, checked:false, answers:[]};
  go("quiz");
}
function startPractice(tid){
  S.quiz = {kind:"practice", topicId:tid, items:TOPIC[tid].pq.map((_,i)=>({t:tid,q:"p"+i})), i:0, picked:null, checked:false, answers:[], tried:[], firstTry:0};
  go("quiz");
}
/* Chapter test: the 10 test questions + 5 practice + 5 chapter-only questions, in random order. */
function startChapter(tid){
  const T = TOPIC[tid];
  const items = shuffle([...T.qs.map((_,q)=>({t:tid,q})), ...T.pq.map((_,i)=>({t:tid,q:"p"+i})), ...T.cq.map((_,i)=>({t:tid,q:"c"+i}))]);
  S.quiz = {kind:"chapter", topicId:tid, items, i:0, picked:null, checked:false, answers:[]};
  go("quiz");
}
function startReview(onlyTopic, onlySubj){
  const l = learner(); if(!l) return;
  let pool = weakItems(l.id);
  if(onlyTopic) pool = pool.filter(x=>x.t===onlyTopic);
  if(onlySubj) pool = pool.filter(x=>TOPIC[x.t]?.subject===onlySubj);
  if(!pool.length) return;
  // most-missed topics first, then shuffle within the first 10
  const counts = {}; pool.forEach(x=>counts[x.t]=(counts[x.t]||0)+1);
  pool.sort((a,b)=>counts[b.t]-counts[a.t] || a.at-b.at);
  const items = pool.slice(0,10).map(x=>({t:x.t,q:x.q}));
  for(let i=items.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [items[i],items[j]]=[items[j],items[i]]; }
  S.quiz = {kind:"review", topicId:null, items, i:0, picked:null, checked:false, answers:[]};
  go("quiz");
}
/* Repeat reads and practice rounds are saved as attempts with no items, so they never affect scores or weak spots. */
function logActivity(lid, tid, kind, extra={}){
  const id = uid(), rec = {learnerId:lid, kind, topicId:tid, subject:TOPIC[tid].subject, at:Date.now(), ...extra};
  S.attempts.push({id, ...rec}); write("attempts", id, rec);
}
function finishQuiz(){
  const z = S.quiz, l = learner();
  if(z.kind==="practice"){
    const tid = z.topicId, rid = `${l.id}__${tid}__practice`;
    if(!hasRead(l.id,tid,"practice")){ S.reads.push({id:rid,learnerId:l.id,topicId:tid,stage:"practice",at:Date.now()}); write("reads", rid, {learnerId:l.id, topicId:tid, stage:"practice", at:Date.now()}); }
    else logActivity(l.id, tid, "practice", {score:z.firstTry, total:z.items.length});
    S.last = {first:z.firstTry, n:z.items.length}; go("practicedone"); return;
  }
  const items = z.items.map((it,i)=>({t:it.t, q:it.q, ok: z.answers[i]===getQ(it.t,it.q).a}));
  const rec = { learnerId:l.id, kind:z.kind, at:Date.now(), items, total:items.length, score:items.filter(x=>x.ok).length };
  if(z.kind==="mock"){ rec.subject=z.subject; rec.paper=z.paper; rec.grade=+l.grade; rec.secs=Math.round((Date.now()-z.started)/1000); }
  if(z.kind==="chapter"){ rec.topicId=z.topicId; rec.subject=TOPIC[z.topicId].subject; rec.grade=TOPIC[z.topicId].grade; }
  if(z.kind==="topic"){ rec.topicId=z.topicId; rec.subject=TOPIC[z.topicId].subject; rec.grade=TOPIC[z.topicId].grade; rec.wrong=items.map((x,i)=>x.ok?null:i).filter(i=>i!=null); }
  const id = uid();
  S.attempts.push({id, ...rec});       // show immediately; the snapshot confirms it
  write("attempts", id, rec);
  S.last = rec; go("result");
}

/* ---------- events ---------- */
document.addEventListener("click", async e=>{
  const b = e.target.closest("[data-act]"); if(!b) return;
  const act = b.dataset.act, l = learner();
  if(act==="install"){ if(installEvt){ installEvt.prompt(); await installEvt.userChoice.catch(()=>{}); installEvt=null; nav(); } }
  else if(act==="authtab"){ S.authTab=b.dataset.tab; render(); }
  else if(act==="copycode"){
    const text = showCode(S.newCode || S.code);
    try{ await navigator.clipboard.writeText(text); b.textContent="Copied"; }catch{ b.textContent=text; }
  }
  else if(act==="codedone"){ const c=S.newCode; S.newCode=null; pref.set("ll-family",c); pref.set("ll-parent-device",c); S.view="parent"; openFamily(c); }
  else if(act==="home"){ go(l?"home":"pick"); }
  else if(act==="pick"){ go("pick"); }
  else if(act==="parent"){ go("parent"); }
  else if(act==="teacher"){ go("teacher"); }
  else if(act==="choose"){ S.learnerId=b.dataset.id; pref.set("ll-learner",S.learnerId); go("home"); }
  else if(act==="subject"){ if(b.dataset.s) S.subject=b.dataset.s; go("subject"); }
  else if(act==="term"){ S.term=+b.dataset.t; go("term"); }
  else if(act==="pkid"){ S.pkid=b.dataset.id; go("pchild"); }
  else if(act==="pper"){ S.pper=b.dataset.p; go("pact"); }
  else if(act==="pday"){ S.pday=b.dataset.d; go("pday"); }
  else if(act==="psubj"){ S.psub=b.dataset.s; go("psubject"); }
  else if(act==="pterm"){ S.pterm=+b.dataset.t; go("pterm"); }
  else if(act==="backterm"){ go(S.subject?"term":"home"); }
  else if(act==="topic"){ const tt=TOPIC[b.dataset.id]; if(tt){ S.subject=tt.subject; S.term=tt.term||0; } }
  if(act==="topic"){ S.topicId=b.dataset.id; S.step=null; if(l){ const st=stepState(l.id,S.topicId); S.step = !st.learn?"learn":!st.practise?"practise":!st.test?"test":"chapter"; } go("topic"); }
  else if(act==="step"){ S.step=b.dataset.step; go("topic"); }
  else if(act==="npage"){ S.npage=+b.dataset.p; S.nall=false; render(); document.querySelector(".notes")?.scrollIntoView({block:"start"}); }
  else if(act==="learned"){
    const tid=S.topicId;
    if(l && !hasRead(l.id,tid)){ const rid=`${l.id}__${tid}`; S.reads.push({id:rid,learnerId:l.id,topicId:tid,stage:"notes",at:Date.now()}); write("reads", rid, {learnerId:l.id, topicId:tid, stage:"notes", at:Date.now()}); }
    else if(l) logActivity(l.id, tid, "notes");
    S.step="practise"; go("topic");
  }
  else if(act==="practice"){ startPractice(S.topicId); }
  else if(act==="chapter"){ const tid=S.topicId||S.last?.topicId; S.topicId=tid; startChapter(tid); }
  else if(act==="mocks"){ go("mocks"); }
  else if(act==="mockintro"){ S.subject=b.dataset.s; go("mockintro"); }
  else if(act==="mockstart"){ S.subject=b.dataset.s; startMock(b.dataset.s, +b.dataset.p || 1); }
  else if(act==="examnext"){ const z=S.quiz; if(z.picked==null) return; z.answers[z.i]=z.picked;
    if(z.i<z.items.length-1){ z.i++; z.picked = z.answers[z.i] ?? null; render(); window.scrollTo(0,0); } else finishQuiz(); }
  else if(act==="examback"){ const z=S.quiz; if(z.picked!=null) z.answers[z.i]=z.picked; z.i--; z.picked=z.answers[z.i] ?? null; render(); }
  else if(act==="start"){
    const tid = S.topicId || S.last?.topicId; S.topicId = tid;
    startTopicQuiz(tid);
  }
  else if(act==="review"){ startReview(b.dataset.topic, b.dataset.subj); }
  else if(act==="pickopt"){ if(!S.quiz.checked){ S.quiz.picked=+b.dataset.i; render(); } }
  else if(act==="check"){
    const z=S.quiz; if(z.picked==null) return;
    if(z.kind==="practice"){
      const q=getQ(z.items[z.i].t, z.items[z.i].q);
      if(z.picked===q.a){ if(!z.tried.length) z.firstTry++; z.checked=true; }
      else { z.tried.push(z.picked); z.picked=null; }
      render(); return;
    }
    z.checked=true; z.answers[z.i]=z.picked; render();
  }
  else if(act==="next"){
    const z=S.quiz;
    if(z.i<z.items.length-1){ z.i++; z.picked=null; z.checked=false; z.tried=[]; render(); window.scrollTo(0,0); }
    else finishQuiz();
  }
  else if(act==="askremove"){ S.confirmRemove=b.dataset.id; render(); }
  else if(act==="cancelremove"){ S.confirmRemove=null; render(); }
  else if(act==="remove"){ const id=b.dataset.id; S.confirmRemove=null; famRef.collection("learners").doc(id).delete().catch(()=>{}); if(S.learnerId===id){ S.learnerId=null; pref.del("ll-learner"); } }
  else if(act==="lockparent"){ S.parentOk=false; pref.del("ll-parent-device"); go(learner()?"home":"pick"); }
  else if(act==="askleave"){ S.confirmLeave=true; render(); }
  else if(act==="cancelleave"){ S.confirmLeave=false; render(); }
  else if(act==="leave"){
    unsubs.forEach(u=>u()); unsubs=[];
    ["ll-family","ll-parent-device","ll-learner"].forEach(k=>pref.del(k));
    Object.assign(S,{confirmLeave:false, code:null, family:null, learnerId:null, learners:[], attempts:[], reads:[], parentOk:false, view:"home", mode:"nofamily", authTab:"join"});
    render();
  }
});

document.addEventListener("submit", async e=>{
  e.preventDefault();
  const f = e.target;
  if(f.id==="authForm"){
    const err=document.getElementById("a-err"); err.textContent="";
    if(!S.user){ err.textContent="Still connecting. Check your internet connection and try again."; return; }
    try{
      if(S.authTab==="new"){
        const pin=document.getElementById("a-pin").value.trim();
        if(!/^\d{4}$/.test(pin)){ err.textContent="The parent PIN must be 4 digits."; return; }
        const code = newCode();
        await fs.collection("families").doc(code).set({pinHash: await sha(code+":"+pin), createdAt:Date.now()});
        S.newCode = code; S.parentOk = true; render();
      } else {
        const code = cleanCode(document.getElementById("a-code").value);
        if(code.length!==12){ err.textContent="The family code has 12 letters and numbers, like K7PM-29QX-HT4R."; return; }
        const d = await fs.collection("families").doc(code).get();
        if(!d.exists){ err.textContent="No family found with that code. Check it and try again."; return; }
        pref.set("ll-family", code); S.view="pick"; openFamily(code);
      }
    }catch(x){ err.textContent = (x && String(x.code||"").includes("unavailable")) ? "No internet connection. Connect and try again." : "That didn't work. Check your connection and try again."; }
  }
  else if(f.id==="pinForm"){
    const pin=document.getElementById("p-pin").value.trim(), err=document.getElementById("p-err");
    if(!S.family || !S.family.pinHash){ err.textContent="No PIN found for this family yet. Check your connection."; return; }
    if(await sha(S.code+":"+pin) === S.family.pinHash){
      S.parentOk = true;
      if(document.getElementById("p-remember").checked) pref.set("ll-parent-device", S.code);
      render();
    } else err.textContent = "That PIN isn't right.";
  }
  else if(f.id==="addForm"){
    const name=document.getElementById("new-name").value.trim(), grade=+document.getElementById("new-grade").value;
    if(!name) return;
    const id=uid(); document.getElementById("new-name").value="";
    S.learners.push({id,name,grade}); write("learners", id, {name, grade, createdAt:Date.now()}); render();
  }
});
window.addEventListener("online", ()=>softRender());
window.addEventListener("offline", ()=>softRender());

if("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js").catch(()=>{});
startFirebase();

document.addEventListener("change", e=>{
  if(e.target.id!=="npick") return;
  if(e.target.value==="all"){ S.nall = true; } else { S.nall = false; S.npage = +e.target.value; }
  render(); document.querySelector(".notes")?.scrollIntoView({block:"start"});
});
