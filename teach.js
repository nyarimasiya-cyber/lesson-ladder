/* ---------- Teacher lessons ----------
   A lesson is assigned to one learner and stored in that learner's family (families/{code}/lessons),
   so the learner and their parent see it. Photos of written work are stored as page documents
   (families/{code}/pages). The teacher works from the Parent area of their own device and can link
   other families by their family code. */
const famDoc = code => fs.collection("families").doc(code);
const T = { fams:{}, pages:{}, files:[], busy:false };   // linked families' data, loaded page images

/* ----- linked families (teacher device) ----- */
function syncLinks(){
  const want = new Set((S.links||[]).map(x=>x.id));
  Object.keys(T.fams).forEach(c=>{ if(!want.has(c)){ T.fams[c].unsubs.forEach(u=>u()); delete T.fams[c]; } });
  want.forEach(c=>{
    if(T.fams[c] || c===S.code) return;
    const f = T.fams[c] = {learners:[], lessons:[], attempts:[], reads:[], unsubs:[]};
    ["learners","lessons","attempts","reads"].forEach(kind=>{
      f.unsubs.push(famDoc(c).collection(kind).onSnapshot(snap=>{ f[kind] = snap.docs.map(d=>({id:d.id, ...d.data()})); if(["teacher","tmark"].includes(S.view)) softRender(); }, ()=>{}));
    });
  });
}
function allStudents(){
  const out = S.learners.map(l=>({code:S.code, fam:"Your family", l}));
  (S.links||[]).forEach(x=>{ const f = T.fams[x.id]; if(f) f.learners.forEach(l=>out.push({code:x.id, fam:x.label||"Linked family", l})); });
  return out;
}
const lessonsOf = code => (code===S.code ? (S.lessons||[]) : (T.fams[code]?.lessons || [])).filter(x=>LESSONS[x.lessonKey]);
function allLessons(){ const out=[]; allStudents().forEach(s=>lessonsOf(s.code).filter(x=>x.learnerId===s.l.id).forEach(x=>out.push({...s, x}))); return out.sort((a,b)=>(b.x.assignedAt||0)-(a.x.assignedAt||0)); }
function saveLesson(code, x){ const {id, ...data} = x; famDoc(code).collection("lessons").doc(id).set(data).catch(()=>{ S.note="The lesson didn't save. Check your connection."; render(); }); }

/* ----- status ----- */
const LSTATUS = {assigned:["New","p-warn"], started:["In progress","p-warn"], submitted:["Waiting for marking","p-none"], marked:["Marked","p-good"], redo:["Redo requested","p-bad"]};
const notSent = x => (x.pages||[]).length>0 && !["submitted","marked"].includes(x.status);
const lstatus = x => notSent(x) ? ["Pages uploaded, not submitted","p-bad"] : (LSTATUS[x.status] || LSTATUS.assigned);
/* test time excludes pauses (toilet breaks); pauses are counted so the teacher and parent can see them */
const pausedNow = x => x.pausedAt ? Date.now() - x.pausedAt : 0;
const usedMs = x => (x.submittedAt || Date.now()) - x.testStartedAt - (x.pausedMs||0) - pausedNow(x);
const minsTaken = x => x.testStartedAt && x.submittedAt && x.submittedBy!=="teacher" ? Math.round(usedMs(x)/60000) : null;
const pauseNote = x => x.pauses ? `paused ${x.pauses} time${x.pauses===1?"":"s"} (${Math.round((x.pausedMs||0)/60000)} min)` : "";
function praiseFor(pct){ return pct>=80 ? "Excellent work!" : pct>=60 ? "Good work!" : pct>=40 ? "Well tried, keep practising!" : "Good effort. Go over the notes and try again."; }

/* ---------- learner side ---------- */
function lessonCards(l){
  const mine = (S.lessons||[]).filter(x=>x.learnerId===l.id && LESSONS[x.lessonKey]).sort((a,b)=>b.assignedAt-a.assignedAt);
  if(!mine.length) return "";
  return `<h2 class="h2s">📘 From your teacher</h2><div class="topiclist" style="margin-bottom:20px">${mine.slice(0,4).map(x=>{ const L = lessonOf(x); const [st,cls] = lstatus(x);
    return `<button class="tcard" data-act="l-open" data-id="${esc(x.id)}"><span class="eyebrow">${esc(sname(L.subject, l.grade))} · teacher lesson</span><h3>${esc(L.title)}</h3>
      <span class="meta"><span class="muted">${x.status==="marked"?`Mark: ${x.mark}/${L.outOf}`:fmtDate(x.assignedAt)}</span><span class="pill ${cls}">${st}</span></span></button>`;}).join("")}</div>`;
}
function curLesson(){ return (S.lessons||[]).find(x=>x.id===S.lessonId); }
function vLesson(){
  const x = curLesson(), l = learner(); if(!x || !l) return vHome();
  const L = lessonOf(x), tab = S.ltab || "notes";
  const tabs = [["notes","1","Notes"],["examples","2","Worked examples"],["practice","3","Practice"],["test","4","Test"]];
  return `<button class="crumb" data-act="home">← Back</button>
  <span class="eyebrow">${esc(sname(L.subject,l.grade))} · Lesson from your teacher</span>
  <h1 class="pagetitle">${esc(L.title)}</h1>
  ${x.msg?`<div class="banner"><b>Message from your teacher:</b> ${esc(x.msg)}</div>`:""}
  <div class="steps">${tabs.map(([k,n,label])=>`<button class="step ${tab===k?"on":""}" data-act="l-tab" data-t="${k}"><span class="n">${n}</span><span><b>${label}</b>${k==="practice"?`<small>${Object.keys(x.ex||{}).length}/5 done</small>`:k==="test"?`<small>${lstatus(x)[0]}</small>`:""}</span></button>`).join("")}</div>
  ${tab==="notes" ? lessonNotes(L) : tab==="examples" ? `<article class="notes"><h2>Worked examples</h2><p class="muted">Study each example step by step. Copy the method into your book.</p>${L.examples}</article><div class="cta"><button class="btn" data-act="l-tab" data-t="practice">Go to practice →</button></div>`
   : tab==="practice" ? lessonPractice(x, L) : lessonTest(x, L)}`;
}
function lessonNotes(L){
  const pages = notePages(L.notes), n = pages.length, i = Math.min(S.lnpage||0, n-1);
  return `<p class="muted">${esc(L.intro)}</p><article class="notes">${pages[i]}</article>
  <div class="npager"><button class="btn ghost" data-act="l-npage" data-p="${i-1}" ${i===0?"disabled":""}>← Previous</button><span class="muted">Page ${i+1} of ${n}</span>
  ${i<n-1?`<button class="btn" data-act="l-npage" data-p="${i+1}">Next →</button>`:`<button class="btn" data-act="l-tab" data-t="examples">Worked examples →</button>`}</div>`;
}
const L_OK = ["Excellent!","Well done!","Great thinking!","Spot on!","Super!"], L_TRY = ["Well tried!","Good effort!","Nearly there!","Keep going!"];
function lessonPractice(x, L){
  const ex = x.ex || {}, tried = S.ltried || {};
  return `<p class="muted">Five questions to practise. If you get one wrong you'll get a hint, so try again. After this you're on your own in the test.</p>
  ${L.practice.map((q,qi)=>{ const done = qi in ex, wrong = tried[qi] || [];
    return `<div class="panel lq"><b>${qi+1}. ${esc(q.q)}</b>
      <div class="opts">${q.o.map((o,oi)=>`<button class="opt ${done&&oi===q.a?"right":wrong.includes(oi)?"wrong":""}" data-act="l-pick" data-q="${qi}" data-o="${oi}" ${done||wrong.includes(oi)?"disabled":""}><span class="k">${"ABCD"[oi]}</span><span>${esc(o)}</span></button>`).join("")}</div>
      ${done ? `<div class="fb ok"><b>${ex[qi] ? L_OK[qi%L_OK.length] : L_TRY[qi%L_TRY.length]+" You got there."}</b>${esc(q.e)}</div>`
        : wrong.length ? `<div class="fb hint"><b>${L_TRY[(qi+wrong.length)%L_TRY.length]} Here's a hint:</b>${esc(q.h)}</div>` : ""}
    </div>`;}).join("")}
  ${Object.keys(ex).length===5 ? `<div class="banner">${(()=>{const n=Object.values(ex).filter(Boolean).length; return `${n} of 5 right first time. ${praiseFor(n*20)}`})()} Now you're ready for the test.</div><div class="cta"><button class="btn" data-act="l-tab" data-t="test">Go to the test →</button></div>` : ""}`;
}
function timeLeft(x, L){ return Math.max(0, Math.round(L.minutes*60 - usedMs(x)/1000)); }
function lessonTest(x, L){
  const items = lessonTestItems(L), pages = x.pages || [];
  if(x.status==="marked"){
    const pct = Math.round(x.mark/L.outOf*100);
    return `<div class="score"><div class="big">${x.mark}<small>/${L.outOf}</small></div><div><div style="font-weight:700;font-size:20px">${pct}% · Level ${level(pct)[0]}</div><div class="muted">${praiseFor(pct)} Marked on ${fmtDate(x.markedAt)}.</div></div></div>
    ${markSummary(x)}${qBreakdown(x, L)}${pageStrip(x)}`;
  }
  if(x.status==="submitted") return `<div class="banner"><b>Submitted.</b> You handed in ${pages.length} page${pages.length===1?"":"s"} on ${fmtDate(x.submittedAt)}${minsTaken(x)!=null?`, after ${minsTaken(x)} minutes`:""}. Your teacher will mark it and you'll see your mark and comments here.</div>${pageStrip(x)}`;
  if(!x.testStartedAt && x.status!=="redo") return `<article class="notes">${L.testIntro}</article>
    <div class="banner"><b>Method is everything.</b> Show every step. Your work must be neat.</div>
    <div class="cta"><button class="btn" data-act="l-start">Start the ${L.minutes}-minute test</button></div>
    <p class="muted">The timer starts when you press the button. Have paper, a pen, a pencil, a ruler and a protractor ready.</p>`;
  const left = x.status==="redo" ? null : timeLeft(x, L);
  if(x.pausedAt && x.status!=="redo") return `<div class="timer paused" aria-live="polite"><span>⏸</span><b>Paused</b><span class="muted">for <span id="lpause">${mm(Math.round(pausedNow(x)/1000))}</span></span></div>
    <div class="banner"><b>Your test is paused.</b> The questions are hidden and the clock has stopped. You still have <b>${mm(left)}</b> left. Your teacher can see how many times and how long you paused.</div>
    <div class="cta"><button class="btn" data-act="l-resume">▶ Carry on with the test</button></div>`;
  return `${x.status==="redo"?`<div class="banner"><b>Your teacher asked you to redo this.</b> ${esc(x.feedback||"")} Fix your work, take new photos and submit again.</div>`
    : `<div class="timer ${left===0?"over":""}" aria-live="polite"><span>⏱</span><b id="ltimer">${left===0?"Time is up":mm(left)}</b><span class="muted">${left===0?"Put your pen down and upload your pages.":"left"}</span>${left>0?`<button class="btn ghost small" data-act="l-pause">⏸ Pause</button>`:""}</div>${x.pauses?`<p class="muted" style="font-size:14px;margin:-4px 0 10px">You have ${pauseNote(x)}.</p>`:""}`}
  <article class="notes ltest">${L.testIntro}${items.map(it=>it.head ? it.head : `<p class="tq"><b>${it.n}.</b> ${it.q}</p>`).join("")}</article>
  <h2 class="h2s" id="lup">Upload your written work</h2>
  ${pages.length?`<div class="banner"><b>Not handed in yet.</b> When all your pages are added, press <b>Submit my test</b> at the bottom, or your teacher won't get your work.</div>`:""}
  <p class="muted">Take a clear, well-lit photo of each page, in order. Make sure the whole page is in the photo and the writing is sharp.</p>
  ${pageStrip(x, true)}
  <label class="btn ghost upl">📷 Add a photo of a page<input type="file" id="lupload" accept="image/*" multiple hidden></label>
  ${T.busy?`<p class="muted">Uploading…</p>`:""}
  <div class="cta"><button class="btn" data-act="l-submit" ${pages.length?"":"disabled"}>Submit my test (${pages.length} page${pages.length===1?"":"s"})</button></div>`;
}
function pageStrip(x, canRemove){
  const pages = x.pages || []; if(!pages.length) return "";
  loadPages(S.code, pages);
  return `<div class="pages">${pages.map((p,i)=>`<figure>${pageImg(p,i)}<figcaption>Page ${i+1}${canRemove?` · <button class="linkbtn" data-act="l-rmpage" data-p="${p}">Remove</button>`:""}</figcaption></figure>`).join("")}</div>`;
}
/* ----- marks per question ----- */
const qMax = q => { const m = String(q).match(/\((\d+)\)\s*$/); return m ? +m[1] : 1; };
const qText = q => String(q).replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();
function qBreakdown(x, L){
  const qm = x.qmarks || {}; if(!Object.keys(qm).length) return "";
  const items = lessonTestItems(L).filter(it=>!it.head), qn = x.qnotes || {};
  const right = items.filter(it=>qm[it.n]===qMax(it.q)).length, wrong = items.filter(it=>qm[it.n]===0).length, part = items.length - right - wrong;
  return `<h3 class="h2s" style="margin-top:18px">Every question: what you got right and wrong</h3>
  <div class="qkey"><span class="qk good">✔ ${right} right</span>${part?`<span class="qk part">½ ${part} partly right</span>`:""}<span class="qk bad">✗ ${wrong} wrong or not answered</span></div>
  <div class="qlist">${items.map(it=>{ const mx = qMax(it.q), g = qm[it.n], cls = g==null?"":g===mx?"good":g>0?"part":"bad", ic = g==null?"–":g===mx?"✔":g>0?"½":"✗";
    return `<div class="qi ${cls}"><div class="qtop"><span class="qic" aria-hidden="true">${ic}</span><span class="qq"><b>${it.n}.</b> ${esc(qText(it.q))}</span><span class="qm">${g==null?"–":g}/${mx}</span></div>
      ${qn[it.n]?`<p class="qnote"><b>Teacher:</b> ${esc(qn[it.n])}</p>`:""}
      ${g!==mx && L.memo[it.n-1]?`<p class="qans"><b>Correct answer:</b> ${esc(L.memo[it.n-1].split(" WHOLE TEST:")[0])}</p>`:""}</div>`;}).join("")}</div>`;
}
function qMarkRows(x, L){
  const items = lessonTestItems(L).filter(it=>!it.head), qm = x.qmarks || {}, qn = x.qnotes || {};
  return `<h3 style="margin:4px 0 0">Mark each question</h3>
  <p class="muted" style="margin:0;font-size:14px">Tap the mark for each question. The total adds up by itself. The student and parent will see every question, your comment and the correct answer.</p>
  <div class="qmark">${items.map(it=>{ const mx = qMax(it.q);
    return `<div class="qrow"><div><b>${it.n}.</b> ${esc(qText(it.q))}</div><div class="muted" style="font-size:13px">Memo: ${esc(L.memo[it.n-1]||"")}</div>
      <div class="seg" role="group" aria-label="Mark for question ${it.n}">${Array.from({length:mx+1},(_,v)=>`<button type="button" class="${qm[it.n]===v?"on":""}" data-act="t-q" data-n="${it.n}" data-v="${v}">${v===mx?`✔ ${v}`:v===0?"✗ 0":v}</button>`).join("")}</div>
      <input class="qnote-in" data-n="${it.n}" maxlength="200" placeholder="Comment on this question (optional)" value="${esc(qn[it.n]||"")}" aria-label="Comment on question ${it.n}"></div>`;}).join("")}</div>
  <p class="qtotal">Total from questions: <b id="qtotal">${Object.values(qm).reduce((a,b)=>a+b,0)}</b> / ${L.outOf} <span class="muted" id="qleft"></span></p>`;
}
function readQMarks(){
  const qm = {}, qn = {};
  document.querySelectorAll(".seg button.on").forEach(b=>qm[b.dataset.n] = +b.dataset.v);
  document.querySelectorAll(".qnote-in").forEach(i=>{ if(i.value.trim()) qn[i.dataset.n] = i.value.trim(); });
  return {qm, qn};
}
function markSummary(x){
  return `<div class="panel"><h3 style="margin:0 0 6px">Teacher's feedback</h3>
    ${x.method?`<p style="margin:0"><b>Method:</b> ${esc(x.method)}</p>`:""}${x.neatness?`<p style="margin:0"><b>Neatness:</b> ${esc(x.neatness)}</p>`:""}
    ${x.feedback?`<p style="margin:8px 0 0">${esc(x.feedback)}</p>`:""}</div>`;
}

const pageImg = (p,i) => T.pages[p]==="missing" ? `<div class="ph">This photo didn't upload. Ask for it to be added again.</div>` : T.pages[p] ? `<a href="#" data-act="l-zoom" data-p="${p}"><img src="${T.pages[p]}" alt="Page ${i+1}"></a>` : `<div class="ph">Loading…</div>`;
/* load page images from any family on demand */
function loadPages(code, ids){
  const need = ids.filter(p=>!(p in T.pages)); if(!need.length) return;
  need.forEach(p=>{ T.pages[p] = null;
    famDoc(code).collection("pages").doc(p).get().then(d=>{ T.pages[p] = d.exists ? d.data().img : "missing"; render(); }).catch(()=>{ delete T.pages[p]; setTimeout(render, 4000); }); });
}

/* shrink photos so each fits in one database document */
function compress(file){
  return new Promise((res, rej)=>{
    const img = new Image(), url = URL.createObjectURL(file);
    img.onload = ()=>{
      const go = (max, q)=>{ const k = Math.min(1, max/Math.max(img.width, img.height)), c = document.createElement("canvas");
        c.width = Math.round(img.width*k); c.height = Math.round(img.height*k);
        const g = c.getContext("2d"); g.fillStyle="#fff"; g.fillRect(0,0,c.width,c.height); g.drawImage(img,0,0,c.width,c.height);
        return c.toDataURL("image/jpeg", q); };
      let d = go(1600, .7); if(d.length > 850000) d = go(1300, .55); if(d.length > 850000) d = go(1000, .5);
      URL.revokeObjectURL(url); res(d);
    };
    img.onerror = ()=>{ URL.revokeObjectURL(url); rej(new Error("not an image")); };
    img.src = url;
  });
}
document.addEventListener("change", async e=>{
  if(e.target.id==="tupload"){
    const {code,id} = S.tsel || {}, x = findLesson(code,id); if(!x) return;
    const files = [...e.target.files]; if(!files.length) return;
    T.busy = true; render(); let added = 0;
    for(const f of files){
      try{ const img = await compress(f), pid = `${x.id}_${uid()}`;
        T.pages[pid] = img;
        await famDoc(code).collection("pages").doc(pid).set({lessonId:x.id, img, at:Date.now(), by:"teacher"});
        x.pages = [...(x.pages||[]), pid]; added++;
      }catch(err){ S.note = "One photo couldn't be added. Try again."; }
    }
    if(added){
      if(!["submitted","marked"].includes(x.status)){ x.status = "submitted"; x.submittedAt = Date.now(); x.submittedBy = "teacher"; }
      saveLesson(code, x); S.note = `${added} page${added===1?"":"s"} added. The work is handed in and ready to mark.`;
    }
    T.busy = false; render(); return;
  }
  if(e.target.id!=="lupload") return;
  const x = curLesson(); if(!x) return;
  const files = [...e.target.files]; if(!files.length) return;
  T.busy = true; render();
  for(const f of files){
    try{ const img = await compress(f), pid = `${x.id}_${uid()}`;
      T.pages[pid] = img;
      await famRef.collection("pages").doc(pid).set({lessonId:x.id, img, at:Date.now()});
      const cur = curLesson() || x; cur.pages = [...new Set([...(cur.pages||[]), ...(x.pages||[]), pid])]; x.pages = cur.pages; saveLesson(S.code, cur);
    }catch(err){ S.note = "One photo couldn't be added. Try taking it again."; }
  }
  T.busy = false; render(); document.querySelector("[data-act=l-submit]")?.scrollIntoView({block:"center"});
});

/* ---------- teacher workspace (a device that only teaches) ---------- */
function vTeacherAuth(){
  const open = S.tauth==="open";
  return `<div class="auth">
  <section class="hello"><span class="eyebrow">Teacher</span><h1>${open?"Open your teacher workspace":"Create a teacher workspace"}</h1>
  <p class="muted">${open?"Type your teacher code and PIN.":"For a teacher who gives lessons to children in different families. Parents give you their family code so you can see their child's progress, give work and mark it."}</p></section>
  <div class="tabs"><button data-act="authtab" data-tab="join" aria-pressed="false">Join with family code</button><button data-act="authtab" data-tab="new" aria-pressed="false">New family</button><button data-act="authtab" data-tab="teacher" aria-pressed="true">Teacher</button></div>
  <div class="tabs" style="margin-top:8px"><button data-act="t-authmode" data-m="new" aria-pressed="${!open}">New workspace</button><button data-act="t-authmode" data-m="open" aria-pressed="${open}">I already have one</button></div>
  <form class="form" id="tauthForm" novalidate>
    ${open?`<label for="ta-code">Teacher code<input id="ta-code" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="XXXX-XXXX-XXXX" maxlength="16" required></label>`:""}
    <label for="ta-pin">${open?"Teacher PIN":"Choose a teacher PIN (4 digits)"}<input id="ta-pin" inputmode="numeric" maxlength="4" autocomplete="off" required></label>
    <p class="err" id="ta-err" role="alert"></p>
    <div><button class="btn" type="submit">${open?"Open workspace":"Create workspace"}</button></div>
  </form></div>`;
}
/* run fn with a linked family's data in place of the current family's */
function withFam(f, fn){ const keep = [S.attempts, S.reads, S.lessons]; S.attempts = f.attempts||[]; S.reads = f.reads||[]; S.lessons = f.lessons||[]; try{ return fn(); } finally{ [S.attempts, S.reads, S.lessons] = keep; } }
function famProgress(){
  const fams = [];
  if(S.learners.length) fams.push({code:S.code, label:"Your family", f:{learners:S.learners, attempts:S.attempts, reads:S.reads, lessons:S.lessons}});
  (S.links||[]).forEach(x=>{ if(T.fams[x.id]) fams.push({code:x.id, label:x.label||"Linked family", f:T.fams[x.id]}); });
  if(!fams.length) return `<p class="muted">No families linked yet. Link a family below to see its children here.</p>`;
  return fams.map(({code,label,f})=>`<div class="famcard"><h3>${esc(label)}</h3>
    ${f.learners.length ? f.learners.slice().sort((a,b)=>a.name.localeCompare(b.name)).map(k=>withFam(f, ()=>{
      const v = effortVerdict(k.id), tests = S.attempts.filter(a=>a.learnerId===k.id && (kindOf(a)==="topic"||a.kind==="chapter"||a.kind==="mock") && a.at > Date.now()-28*86400000);
      const avg = tests.length ? Math.round(tests.reduce((s,a)=>s+pctOf(a),0)/tests.length) : null;
      const les = S.lessons.filter(x=>x.learnerId===k.id), waiting = les.filter(x=>x.status==="submitted").length, open = les.filter(x=>["assigned","started","redo"].includes(x.status)).length;
      return `<button class="kidrow" data-act="t-view" data-c="${code}" data-id="${esc(k.id)}">
        <span><b>${esc(k.name)}</b> <span class="muted">Grade ${gradeLabel(k.grade)}</span><br><span class="effline ${v.cls}">${weekDots(k.id)}<span>${v.head}: ${v.last14}/14 days</span></span></span>
        <span class="kidnums"><span>${avg==null?"No tests":`Avg ${avg}%`}</span><span class="muted">${weakItems(k.id).length} weak</span>${waiting?`<span class="pill p-bad">${waiting} to mark</span>`:open?`<span class="pill p-warn">${open} lesson${open===1?"":"s"} open</span>`:""}</span></button>`; })).join("")
      : `<p class="muted">No children added in this family yet.</p>`}</div>`).join("");
}
function teachView(code, lid){
  S.tview = {home:S.code};
  openFamily(code); S.parentOk = true; S.pkid = lid; S.view = "pchild"; render(); window.scrollTo(0,0);
}

/* ---------- teacher side ---------- */
function vTeacher(){
  const studs = allStudents(), lessons = allLessons(), toMark = lessons.filter(o=>o.x.status==="submitted" || notSent(o.x));
  const opts = studs.map((s,i)=>`<option value="${i}">${esc(s.l.name)} (Grade ${gradeLabel(s.l.grade)}) · ${esc(s.fam)}</option>`).join("");
  const sel = studs[+(S.tstud||0)];
  const lopts = Object.entries(LESSONS).filter(([k,L])=>!sel || +sel.l.grade===L.grade).map(([k,L])=>`<option value="${k}">${esc(L.title)}</option>`).join("");
  return `${S.family&&S.family.teacher?"":crumbs([{act:"parent",label:"Parent"},{label:"Teacher"}])}
  <h1 class="pagetitle">Teacher</h1>
  <h2 class="h2s">Progress by family</h2>
  <p class="muted" style="margin:0 0 10px">Tap a child to see their full progress report: practice calendar, subjects, tests, weak spots and lessons.</p>
  ${famProgress()}
  <h2 class="h2s">Work to mark ${toMark.length?`<span class="pill p-bad">${toMark.length}</span>`:""}</h2>
  ${toMark.length?`<div class="topiclist">${toMark.map(o=>`<button class="tcard" data-act="t-mark" data-c="${o.code}" data-id="${esc(o.x.id)}"><b>${esc(o.l.name)}</b><span class="muted">${esc(lessonOf(o.x).title)}</span><span class="muted">${notSent(o.x)?`<span class="warnword">Not submitted yet</span>`:`Submitted ${fmtDate(o.x.submittedAt)}`} · ${(o.x.pages||[]).length} pages${minsTaken(o.x)!=null?` · ${minsTaken(o.x)} min`:""}</span></button>`).join("")}</div>`:`<p class="muted">Nothing to mark right now.</p>`}
  <h2 class="h2s">Give a lesson</h2>
  ${studs.length?`<form class="form" id="assignForm">
    <label for="t-stud">Student<select id="t-stud">${opts}</select></label>
    <label for="t-lesson">Lesson<select id="t-lesson">${lopts||`<option value="">No lessons for this grade yet</option>`}</select></label>
    <label for="t-msg">Message to the student (optional)<textarea id="t-msg" rows="2" maxlength="300" placeholder="e.g. Do this before Friday. Remember: neat work and show your method."></textarea></label>
    <div><button class="btn" type="submit" ${lopts?"":"disabled"}>Give this lesson</button></div></form>`:`<p class="muted">Add a learner or link a family first.</p>`}
  ${lessons.length?`<h2 class="h2s">All lessons</h2><div class="feed">${lessons.map(o=>{const [st,cls]=lstatus(o.x), L=lessonOf(o.x); return `<div><span><b>${esc(o.l.name)}</b> · ${esc(L.title.split(":")[0])}<br><span class="muted" style="font-size:13px">Given ${fmtDate(o.x.assignedAt)}${(o.x.pages||[]).length?` · ${o.x.pages.length} page${o.x.pages.length===1?"":"s"} uploaded`:""}${o.x.status==="marked"?` · ${o.x.mark}/${L.outOf}`:""}</span></span><span class="row" style="gap:8px;flex-wrap:wrap;justify-content:flex-end"><span class="pill ${cls}">${st}</span><button class="linkbtn" data-act="t-mark" data-c="${o.code}" data-id="${esc(o.x.id)}">${o.x.status==="submitted"?"Mark":"Open"}</button>${S.tdel===o.x.id?`<span class="delask">Delete? <button class="linkbtn danger" data-act="t-delyes" data-c="${o.code}" data-id="${esc(o.x.id)}">Yes, delete</button> <button class="linkbtn" data-act="t-delno">Cancel</button></span>`:`<button class="linkbtn danger" data-act="t-del" data-id="${esc(o.x.id)}">Delete</button>`}</span></div>`;}).join("")}</div>`:""}
  <h2 class="h2s">Students in other families</h2>
  <p class="muted" style="margin:0 0 10px">To teach a child from another family, ask their parent for their family code (Parent → Family code on their device). Their parent will see the lessons and marks in their own app.</p>
  ${(S.links||[]).length?`<div class="feed" style="margin-bottom:12px">${S.links.map(x=>`<div><span><b>${esc(x.label||"Linked family")}</b> · ${(T.fams[x.id]?.learners||[]).map(l=>esc(l.name)).join(", ")||"loading…"}</span><button class="linkbtn" data-act="t-unlink" data-c="${x.id}">Remove</button></div>`).join("")}</div>`:""}
  <form class="form" id="linkForm"><label for="t-code">Their family code<input id="t-code" autocomplete="off" placeholder="XXXX-XXXX-XXXX" maxlength="14"></label>
  <label for="t-label">Name for this family (only you see it)<input id="t-label" maxlength="30" placeholder="e.g. Percy's family"></label>
  <div><button class="btn ghost" type="submit">Link family</button></div></form>`;
}
function findLesson(code, id){ return lessonsOf(code).find(x=>x.id===id); }
function vTMark(){
  const {code, id} = S.tsel || {}, x = findLesson(code, id); if(!x) return vTeacher();
  if(S.tedit===id) return vTEdit(code, x);
  const st = allStudents().find(s=>s.code===code && s.l.id===x.learnerId), L = lessonOf(x);
  loadPages(code, x.pages||[]);
  const ex = x.ex || {}, exN = Object.keys(ex).length, exR = Object.values(ex).filter(Boolean).length;
  const CHIPS = ["Excellent work!","Good work!","Well tried!","Show all your method.","Work must be neat.","Use a ruler for graphs and tables.","Check your calculations.","Label your graph and give it a title.","Do your corrections."];
  const over = minsTaken(x)!=null && minsTaken(x) > L.minutes;
  return `${crumbs([...(S.family&&S.family.teacher?[]:[{act:"parent",label:"Parent"}]),{act:"teacher",label:"Teacher"},{label:st?st.l.name:"Lesson"}])}
  <h1 class="pagetitle">${esc(st?st.l.name:"")} · ${esc(L.title.split(":")[0])}</h1>
  <div class="row" style="margin:0 0 12px"><a class="btn" href="#markhere">✔ Mark this work</a></div>
  <div class="strip">
    <div class="stat"><div class="eyebrow">Practice</div><div class="v">${exR}/5</div><div class="muted" style="font-size:13px">right first time (${exN}/5 done)</div></div>
    <div class="stat"><div class="eyebrow">Test time</div><div class="v">${minsTaken(x)!=null?minsTaken(x)+" min":"–"}</div><div class="muted" style="font-size:13px">${over?`<span class="warnword">over the ${L.minutes} min</span>`:`limit ${L.minutes} min`}${x.pauses?`<br>${pauseNote(x)}`:""}</div></div>
    <div class="stat"><div class="eyebrow">Pages</div><div class="v">${(x.pages||[]).length}</div></div>
  </div>
  <h2 class="h2s">His written work</h2>
  ${(x.pages||[]).length?`<div class="pages big">${x.pages.map((p,i)=>`<figure>${pageImg(p,i)}<figcaption>Page ${i+1} · tap to enlarge · <button class="linkbtn" data-act="t-rmpage" data-p="${p}">Remove</button></figcaption></figure>`).join("")}</div>`:`<p class="muted">No pages uploaded yet.</p>`}
  ${x.submittedBy==="teacher"?`<p class="muted" style="font-size:14px">You added these pages and handed in the work for ${esc(st?st.l.name:"the student")}.</p>`:""}
  <p class="muted" style="margin:10px 0 6px">Did ${esc(st?st.l.name:"the student")} send you the photos another way, for example on WhatsApp? Save them to your phone, then add them here. This hands in the work for ${esc(st?st.l.name:"the student")}, and his parent will see it.</p>
  <label class="btn ghost upl">📷 Add pages he sent me<input type="file" id="tupload" accept="image/*" multiple hidden></label>
  ${T.busy?`<p class="muted">Uploading…</p>`:""}
  ${["submitted","marked","redo"].includes(x.status)?"":notSent(x)?`<div class="banner">${esc(st?st.l.name:"The student")} uploaded ${x.pages.length} page${x.pages.length===1?"":"s"} but didn't press Submit. You can still mark the work now.</div>`:`<p class="muted">${esc(st?st.l.name:"The student")} hasn't uploaded any pages yet.</p>`}
  <h2 class="h2s" id="markhere">Mark each question and give feedback</h2>
  <form class="form wide" id="markForm">
    ${qMarkRows(x, L)}
    <label for="m-mark">Mark out of ${L.outOf}<input id="m-mark" type="number" min="0" max="${L.outOf}" inputmode="numeric" value="${x.mark??""}" required></label>
    <label for="m-method">Method<select id="m-method">${["","Shown clearly","Partly shown","Not shown"].map(v=>`<option ${x.method===v?"selected":""} value="${v}">${v||"Choose…"}</option>`).join("")}</select></label>
    <label for="m-neat">Neatness<select id="m-neat">${["","Neat","Fairly neat","Untidy"].map(v=>`<option ${x.neatness===v?"selected":""} value="${v}">${v||"Choose…"}</option>`).join("")}</select></label>
    <div class="chips">${CHIPS.map(c=>`<button type="button" class="chip" data-act="t-chip" data-t="${esc(c)}">${esc(c)}</button>`).join("")}</div>
    <label for="m-fb">Comments for the student and parent<textarea id="m-fb" rows="4" maxlength="1000">${esc(x.feedback||"")}</textarea></label>
    <div class="row"><button class="btn" type="submit">Save mark</button><button class="btn ghost" type="button" data-act="t-redo">Ask him to redo it</button></div>
  </form>
  <h2 class="h2s">More</h2>
  <details class="more"><summary>Memo (answers for marking)</summary><ol class="memo">${L.memo.map(m=>`<li>${esc(m)}</li>`).join("")}</ol></details>
  <div class="row" style="margin:14px 0"><button class="btn" data-act="t-edit">✏️ Edit this lesson</button></div>
  <details class="more"><summary>See the lesson as the student sees it</summary><article class="notes"><p class="muted">${esc(L.intro)}</p>${L.notes}<h2>Worked examples</h2>${L.examples}<h2>Practice</h2><ol>${L.practice.map(q=>`<li>${esc(q.q)}<br><span class="muted">Hint: ${esc(q.h)}</span></li>`).join("")}</ol><h2>Test</h2>${L.testIntro}${lessonTestItems(L).map(t=>t.head?t.head:`<p><b>${t.n}.</b> ${esc(t.q)}</p>`).join("")}</article></details>
  <h2 class="h2s">Message to the student</h2>
  <form class="form" id="msgForm"><label for="t-editmsg">Change the message they see at the top of the lesson<textarea id="t-editmsg" rows="2" maxlength="300">${esc(x.msg||"")}</textarea></label><div><button class="btn ghost" type="submit">Save message</button></div></form>
  <h2 class="h2s">Delete this lesson</h2>
  <p class="muted" style="margin:0 0 10px">Removes the lesson and any uploaded pages from the student's and parent's app. This can't be undone.</p>
  ${S.tdel===x.id?`<div class="row"><button class="btn ghost danger" data-act="t-delyes" data-c="${code}" data-id="${esc(x.id)}">Yes, delete it</button><button class="btn ghost" data-act="t-delno">Cancel</button></div>`:`<div><button class="btn ghost danger" data-act="t-del" data-id="${esc(x.id)}">Delete lesson</button></div>`}`;
}

/* ---------- lesson editor (teacher) ---------- */
const TB = `<div class="etools"><button type="button" data-act="t-fmt" data-f="bold"><b>B</b></button><button type="button" data-act="t-fmt" data-f="italic"><i>I</i></button><button type="button" data-act="t-fmt" data-f="h2">Heading</button><button type="button" data-act="t-fmt" data-f="insertUnorderedList">• List</button><button type="button" data-act="t-fmt" data-f="insertOrderedList">1. List</button></div>`;
function vTEdit(code, x){
  const L = lessonOf(x), st = allStudents().find(s=>s.code===code && s.l.id===x.learnerId);
  let n = 0;
  const testRows = L.test.map((t,i)=> t.startsWith("<h3>")
    ? (t.includes("<svg") ? `<div class="ehead">${t}<p class="muted" style="font-size:13px">This graph can't be edited here.</p></div>`
       : `<div class="ehead"><div class="edit small" contenteditable="true" data-ti="${i}">${t}</div></div>`)
    : `<label>Question ${++n}<textarea rows="2" data-ti="${i}">${esc(t)}</textarea></label>`).join("");
  return `${crumbs([...(S.family&&S.family.teacher?[]:[{act:"parent",label:"Parent"}]),{act:"teacher",label:"Teacher"},{label:"Edit lesson"}])}
  <h1 class="pagetitle">Edit lesson</h1>
  <p class="muted">Changes apply only to the copy you gave ${esc(st?st.l.name:"this student")}. Tap into any text to change it, then press <b>Save changes</b> at the bottom.</p>
  <form class="form wide" id="editForm">
    <label for="e-title">Title<input id="e-title" maxlength="140" value="${esc(L.title)}"></label>
    <label for="e-intro">Introduction<textarea id="e-intro" rows="3">${esc(L.intro)}</textarea></label>
    <h2 class="h2s">Notes</h2>${TB}<div class="edit notes" id="e-notes" contenteditable="true">${L.notes}</div>
    <h2 class="h2s">Worked examples</h2>${TB}<div class="edit notes" id="e-examples" contenteditable="true">${L.examples}</div>
    <h2 class="h2s">Practice questions</h2>
    ${L.practice.map((q,i)=>`<fieldset class="efs"><legend>Practice ${i+1}</legend>
      <label>Question<textarea rows="2" data-pq="${i}">${esc(q.q)}</textarea></label>
      ${q.o.map((o,j)=>`<label class="eopt"><input type="radio" name="pa${i}" value="${j}" ${q.a===j?"checked":""} aria-label="Correct answer"> <input data-po="${i}-${j}" value="${esc(o)}" aria-label="Option ${j+1}"></label>`).join("")}
      <p class="muted" style="font-size:13px;margin:0">Tick the circle next to the correct answer.</p>
      <label>Hint<input data-ph="${i}" value="${esc(q.h)}"></label>
      <label>Explanation shown after answering<input data-pe="${i}" value="${esc(q.e||"")}"></label></fieldset>`).join("")}
    <h2 class="h2s">Test</h2>${testRows}
    <h2 class="h2s">Memo (only you see this)</h2>
    ${L.memo.map((m,i)=>`<label>Answer ${i+1}<textarea rows="2" data-mi="${i}">${esc(m)}</textarea></label>`).join("")}
    <div class="row sticky-save"><button class="btn" type="submit">Save changes</button><button class="btn ghost" type="button" data-act="t-editno">Cancel</button></div>
    ${x.custom?`<p class="muted" style="font-size:14px">Want the original back? <button type="button" class="linkbtn danger" data-act="t-editreset">Undo all my changes</button></p>`:""}
  </form>`;
}
function cleanHtml(h){ const d = document.createElement("div"); d.innerHTML = h; d.querySelectorAll("script,style,iframe,object").forEach(n=>n.remove()); d.querySelectorAll("*").forEach(n=>[...n.attributes].forEach(a=>{ if(/^on/i.test(a.name) || /javascript:/i.test(a.value)) n.removeAttribute(a.name); })); return d.innerHTML; }
function readEdits(x){
  const L = LESSONS[x.lessonKey], q = s => document.querySelector(s), all = s => [...document.querySelectorAll(s)];
  const test = L.test.slice(); const cur = lessonOf(x);
  cur.test.forEach((t,i)=>test[i]=t);
  all("[data-ti]").forEach(el=>{ const i = +el.dataset.ti; test[i] = el.tagName==="TEXTAREA" ? el.value.trim() : cleanHtml(el.innerHTML); });
  return {
    title: q("#e-title").value.trim() || L.title, intro: q("#e-intro").value.trim(),
    notes: cleanHtml(q("#e-notes").innerHTML), examples: cleanHtml(q("#e-examples").innerHTML),
    practice: L.practice.map((p,i)=>({q:q(`[data-pq="${i}"]`).value.trim(), o:p.o.map((_,j)=>q(`[data-po="${i}-${j}"]`).value.trim()), a:+(q(`input[name="pa${i}"]:checked`)?.value ?? p.a), h:q(`[data-ph="${i}"]`).value.trim(), e:q(`[data-pe="${i}"]`).value.trim()})),
    test, memo: all("[data-mi]").map(el=>el.value.trim())
  };
}

/* ---------- parent view ---------- */
function vPLessons(k){
  const mine = (S.lessons||[]).filter(x=>x.learnerId===k.id && LESSONS[x.lessonKey]).sort((a,b)=>b.assignedAt-a.assignedAt);
  if(!mine.length) return "";
  return `<h2 class="h2s">Lessons from the teacher</h2><div class="topiclist">${mine.map(x=>{ const L = lessonOf(x), [st,cls] = lstatus(x), ex = x.ex||{};
    const open = S.plopen===x.id;
    return `<div class="tcard static"><span class="meta"><b>${esc(L.title)}</b><span class="pill ${cls}">${st}</span></span>
      <span class="muted" style="font-size:14px">Given ${fmtDate(x.assignedAt)} · practice ${Object.values(ex).filter(Boolean).length}/5 right first time${minsTaken(x)!=null?` · test took ${minsTaken(x)} min${x.pauses?`, ${pauseNote(x)}`:""}`:""}${x.status==="marked"?` · <b>Mark ${x.mark}/${L.outOf} (${Math.round(x.mark/L.outOf*100)}%)</b>`:""}</span>
      ${x.status==="marked"||x.status==="redo" ? markSummary(x) : ""}
      ${(x.status==="marked"||x.status==="redo") && x.qmarks && Object.keys(x.qmarks).length ? `<details class="more"><summary>See every question: right and wrong</summary>${qBreakdown(x, L)}</details>` : ""}
      ${(x.pages||[]).length ? (open ? pageStrip(x) : `<button class="linkbtn" data-act="p-pages" data-id="${esc(x.id)}">See his written work (${x.pages.length} pages)</button>`) : ""}
    </div>`;}).join("")}</div>`;
}

/* ---------- events ---------- */
document.addEventListener("click", e=>{
  const b = e.target.closest("[data-act^='l-'],[data-act^='t-'],[data-act^='p-pages'],[data-act='teachback']"); if(!b) return;
  const act = b.dataset.act;
  if(act==="teachback"){ const home = S.tview && S.tview.home; S.tview = null; if(home){ openFamily(home); S.parentOk = true; } go("teacher"); return; }
  if(act==="t-view"){ teachView(b.dataset.c, b.dataset.id); return; }
  if(act==="t-authmode"){ S.tauth = b.dataset.m; render(); return; }
  if(act==="l-open"){ S.lessonId = b.dataset.id; S.ltab = "notes"; S.lnpage = 0; S.ltried = {}; go("lesson"); }
  else if(act==="l-tab"){ S.ltab = b.dataset.t; render(); window.scrollTo(0,0); }
  else if(act==="l-npage"){ S.lnpage = +b.dataset.p; render(); document.querySelector(".notes")?.scrollIntoView({block:"start"}); }
  else if(act==="l-pick"){
    const x = curLesson(), L = lessonOf(x), qi = +b.dataset.q, oi = +b.dataset.o, q = L.practice[qi];
    S.ltried = S.ltried || {}; const tr = S.ltried[qi] = S.ltried[qi] || [];
    if(oi===q.a){ x.ex = {...(x.ex||{}), [qi]: tr.length===0}; if(x.status==="assigned") x.status = "started"; saveLesson(S.code, x); }
    else tr.push(oi);
    render();
  }
  else if(act==="l-start"){ const x = curLesson(); x.testStartedAt = Date.now(); x.status = "started"; saveLesson(S.code, x); render(); window.scrollTo(0,0); }
  else if(act==="l-rmpage"){ const x = curLesson(), p = b.dataset.p; x.pages = (x.pages||[]).filter(i=>i!==p); saveLesson(S.code, x); famRef.collection("pages").doc(p).delete().catch(()=>{}); render(); }
  else if(act==="l-pause"){ const x = curLesson(); if(x.pausedAt) return; x.pausedAt = Date.now(); x.pauses = (x.pauses||0)+1; saveLesson(S.code, x); render(); window.scrollTo(0,0); }
  else if(act==="l-resume"){ const x = curLesson(); if(!x.pausedAt) return; x.pausedMs = (x.pausedMs||0) + (Date.now() - x.pausedAt); x.pausedAt = null; saveLesson(S.code, x); render(); window.scrollTo(0,0); }
  else if(act==="l-submit"){ const x = curLesson(); if(!(x.pages||[]).length) return; x.status = "submitted"; x.submittedAt = Date.now(); saveLesson(S.code, x); render(); window.scrollTo(0,0); }
  else if(act==="l-zoom"){ e.preventDefault(); const src = T.pages[b.dataset.p]; if(src){ S.zoom = src; render(); } }
  else if(act==="t-zoomclose"){ S.zoom = null; render(); }
  else if(act==="t-mark"){ S.tedit = null; S.tsel = {code:b.dataset.c, id:b.dataset.id}; go("tmark"); }
  else if(act==="t-chip"){ const ta = document.getElementById("m-fb"); ta.value = (ta.value ? ta.value.trim()+" " : "") + b.dataset.t; }
  else if(act==="t-redo"){ const {code,id} = S.tsel, x = findLesson(code,id); { const {qm, qn} = readQMarks(); x.qmarks = qm; x.qnotes = qn; } x.status = "redo"; x.feedback = document.getElementById("m-fb").value.trim(); x.method = document.getElementById("m-method").value; x.neatness = document.getElementById("m-neat").value; saveLesson(code, x); go("teacher"); S.note = "Sent back for redoing."; render(); }
  else if(act==="t-edit"){ S.tedit = S.tsel && S.tsel.id; render(); window.scrollTo(0,0); }
  else if(act==="t-editno"){ S.tedit = null; render(); window.scrollTo(0,0); }
  else if(act==="t-editreset"){ const {code,id} = S.tsel, x = findLesson(code,id); delete x.custom; saveLesson(code, x); S.tedit = null; S.note = "The lesson is back to the original."; render(); window.scrollTo(0,0); }
  else if(act==="t-fmt"){ e.preventDefault(); const f = b.dataset.f; if(f==="h2") document.execCommand("formatBlock", false, "h3"); else document.execCommand(f); }
  else if(act==="t-q"){ const n = b.dataset.n; b.parentNode.querySelectorAll("button").forEach(o=>o.classList.toggle("on", o===b));
    const {qm} = readQMarks(), tot = Object.values(qm).reduce((a,c)=>a+c,0), L = lessonOf(findLesson(S.tsel.code, S.tsel.id)), all = lessonTestItems(L).filter(it=>!it.head).length, done = Object.keys(qm).length;
    document.getElementById("qtotal").textContent = tot; document.getElementById("m-mark").value = tot;
    document.getElementById("qleft").textContent = done<all ? `(${all-done} question${all-done===1?"":"s"} still to mark)` : "(all marked)"; }
  else if(act==="t-del"){ S.tdel = b.dataset.id; render(); }
  else if(act==="t-delno"){ S.tdel = null; render(); }
  else if(act==="t-delyes"){
    const code = b.dataset.c, id = b.dataset.id, x = findLesson(code, id);
    (x && x.pages || []).forEach(p=>famDoc(code).collection("pages").doc(p).delete().catch(()=>{}));
    famDoc(code).collection("lessons").doc(id).delete().then(()=>{ S.tdel = null; S.note = "Lesson deleted."; if(S.view==="tmark") go("teacher"); else render(); })
      .catch(()=>{ S.note = "The lesson wasn't deleted. Check your connection."; render(); });
  }
  else if(act==="t-rmpage"){ const {code,id} = S.tsel, x = findLesson(code,id), p = b.dataset.p; x.pages = (x.pages||[]).filter(i=>i!==p); saveLesson(code, x); famDoc(code).collection("pages").doc(p).delete().catch(()=>{}); render(); }
  else if(act==="t-unlink"){ famRef.collection("links").doc(b.dataset.c).delete().catch(()=>{}); }
  else if(act==="p-pages"){ S.plopen = b.dataset.id; render(); }
});
document.addEventListener("mousedown", e=>{ if(e.target.closest(".etools button")) e.preventDefault(); });
document.addEventListener("change", e=>{ if(e.target.id==="t-stud"){ S.tstud = +e.target.value; render(); } });
document.addEventListener("submit", async e=>{
  if(e.target.id==="tauthForm"){
    e.preventDefault();
    const err = document.getElementById("ta-err"), pin = document.getElementById("ta-pin").value.trim();
    if(!S.user){ err.textContent = "Still connecting. Check your internet connection and try again."; return; }
    if(!/^\d{4}$/.test(pin)){ err.textContent = "The PIN must be 4 digits."; return; }
    try{
      if(S.tauth==="open"){
        const code = cleanCode(document.getElementById("ta-code").value);
        if(code.length!==12){ err.textContent = "The teacher code has 12 letters and numbers."; return; }
        const d = await famDoc(code).get();
        if(!d.exists || !d.data().teacher){ err.textContent = "No teacher workspace found with that code."; return; }
        if(await sha(code+":"+pin) !== d.data().pinHash){ err.textContent = "That PIN isn't right."; return; }
        pref.set("ll-family", code); pref.set("ll-parent-device", code); S.view = "teacher"; openFamily(code); S.parentOk = true;
      } else {
        const code = newCode();
        await famDoc(code).set({pinHash: await sha(code+":"+pin), teacher:true, createdAt:Date.now()});
        S.newCode = code; S.newTeacher = true; S.parentOk = true; render();
      }
    }catch(x){ err.textContent = "That didn't work. Check your connection and try again."; }
    return;
  }
  if(e.target.id==="assignForm"){
    e.preventDefault();
    const s = allStudents()[+document.getElementById("t-stud").value], key = document.getElementById("t-lesson").value;
    if(!s || !LESSONS[key]) return;
    if(lessonsOf(s.code).some(o=>o.learnerId===s.l.id && o.lessonKey===key && o.status!=="marked")){ S.note = `${s.l.name} already has this lesson and hasn't finished it. Open it under All lessons to change the message, or delete it first.`; render(); return; }
    const x ={id:uid(), learnerId:s.l.id, lessonKey:key, msg:document.getElementById("t-msg").value.trim(), assignedAt:Date.now(), status:"assigned", ex:{}, pages:[]};
    saveLesson(s.code, x); S.note = `Lesson given to ${s.l.name}. They'll see it on their home screen.`; render();
  }
  if(e.target.id==="linkForm"){
    e.preventDefault();
    const code = cleanCode(document.getElementById("t-code").value), label = document.getElementById("t-label").value.trim();
    if(code.length!==12){ S.note = "A family code has 12 letters and numbers."; render(); return; }
    if(code===S.code){ S.note = "That's your own family. Its learners are already listed."; render(); return; }
    try{ const d = await famDoc(code).get(); if(!d.exists){ S.note = "No family found with that code. Check it and try again."; render(); return; } }
    catch(err){ S.note = "Couldn't check that code. Check your connection."; render(); return; }
    famRef.collection("links").doc(code).set({label, at:Date.now()}); S.note = "Family linked. Their learners now appear in the student list."; render();
  }
  if(e.target.id==="editForm"){
    e.preventDefault();
    const {code,id} = S.tsel || {}, x = findLesson(code,id); if(!x) return;
    x.custom = readEdits(x); x.editedAt = Date.now(); saveLesson(code, x); S.tedit = null; S.note = "Changes saved. The student sees the new version now."; render(); window.scrollTo(0,0);
    return;
  }
  if(e.target.id==="msgForm"){
    e.preventDefault();
    const {code,id} = S.tsel || {}, x = findLesson(code,id); if(!x) return;
    x.msg = document.getElementById("t-editmsg").value.trim(); saveLesson(code, x); S.note = "Message saved."; render();
    return;
  }
  if(e.target.id==="markForm"){
    e.preventDefault();
    const {code,id} = S.tsel, x = findLesson(code,id), L = lessonOf(x), m = Math.max(0, Math.min(L.outOf, Math.round(+document.getElementById("m-mark").value)));
    const {qm, qn} = readQMarks(); x.qmarks = qm; x.qnotes = qn;
    Object.assign(x, {mark:m, method:document.getElementById("m-method").value, neatness:document.getElementById("m-neat").value, feedback:document.getElementById("m-fb").value.trim(), status:"marked", markedAt:Date.now()});
    saveLesson(code, x); go("teacher"); S.note = "Mark saved. The student and parent can see it now."; render();
  }
});
/* live test timer */
setInterval(()=>{ const pe = document.getElementById("lpause"); if(pe){ const x = curLesson(); if(x && x.pausedAt) pe.textContent = mm(Math.round(pausedNow(x)/1000)); } const el = document.getElementById("ltimer"); if(!el) return; const x = curLesson(); if(!x || !x.testStartedAt) return; const L = lessonOf(x), left = timeLeft(x, L);
  if(left===0 && el.textContent!=="Time is up"){ render(); try{ say("Time is up. Put your pen down and upload your pages."); }catch(e){} } else if(left>0) el.textContent = mm(left); }, 1000);
function zoomLayer(){ return S.zoom ? `<div class="zoom" role="dialog" aria-label="Page photo"><button class="btn" data-act="t-zoomclose">Close</button><img src="${S.zoom}" alt="Page photo"></div>` : ""; }
