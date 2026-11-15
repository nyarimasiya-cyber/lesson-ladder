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
    const f = T.fams[c] = {learners:[], lessons:[], attempts:[], reads:[], unsubs:[], loaded:false, error:"", tries:0};
    subscribeFam(c, f);
  });
}
function subscribeFam(c, f){
  f.unsubs.forEach(u=>u()); f.unsubs = [];
  ["learners","lessons","attempts","reads"].forEach(kind=>{
    f.unsubs.push(famDoc(c).collection(kind).onSnapshot(snap=>{
      f[kind] = snap.docs.map(d=>({id:d.id, ...d.data()})); if(kind==="learners"){ f.loaded = true; f.error = ""; }
      if(["teacher","tmark"].includes(S.view)) softRender();
    }, err=>{
      f.error = (err && err.code) || "unavailable";
      if(f.tries++ < 5) setTimeout(()=>{ if(T.fams[c]===f) subscribeFam(c, f); }, 3000 * f.tries);
      if(["teacher","tmark"].includes(S.view)) softRender();
    }));
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
const PASS = 60, GOAL = 80;
const lessonPct = x => { const L = lessonOf(x); return L && L.outOf ? Math.round((x.mark||0)/L.outOf*100) : 0; };
const lstatus = x => {
  if(notSent(x)) return ["Pages uploaded, not submitted","p-bad"];
  if(x.status==="marked"){ const p = lessonPct(x); return p<PASS ? [`Fail · ${p}%`,"p-bad"] : p<GOAL ? [`Pass · ${p}%`,"p-warn"] : [`${p}% · goal reached`,"p-good"]; }
  return LSTATUS[x.status] || LSTATUS.assigned;
};
const attemptsLine = x => (x.attempts||[]).length ? `Attempt ${x.attempts.length+1}. Earlier: ${x.attempts.map(a=>a.pct+"%").join(", ")}.` : "";
const GOOD_MSG = [n=>`Excellent work, ${n}! You reached the 80% goal. Your hard work is paying off.`, n=>`Outstanding, ${n}! This is what putting in the work looks like. Keep it up!`, n=>`Well done, ${n}! You clearly studied for this. Keep working like this and you'll pass your exams with ease.`];
function autoFeedback(mark, outOf, name){ const pct = Math.round(mark/outOf*100), n = name || "you";
  return pct<PASS ? `Fail. You got ${mark} out of ${outOf} (${pct}%). You need at least ${PASS}% to pass. Go back to your notes, study the correct answers, and take the test again.`
    : pct<GOAL ? `Pass. You got ${mark} out of ${outOf} (${pct}%). Good effort, ${n}, but your goal is ${GOAL}%. Learn the questions you got wrong and try again to reach ${GOAL}%.`
    : `${GOOD_MSG[mark%GOOD_MSG.length](n)} You got ${mark} out of ${outOf} (${pct}%).`; }
function resultBanner(x, L, name){
  const pct = Math.round(x.mark/L.outOf*100), retake = L.kind ? `<button class="btn" data-act="l-retake">↻ Take the test again</button>` : "";
  const hist = attemptsLine(x);
  if(pct<PASS) return `<div class="verdict fail"><b>❌ FAIL · ${pct}%</b><p>You need at least ${PASS}% to pass. Go back to your notes, study every correct answer below, then take the test again.</p>${hist?`<p class="muted">${hist}</p>`:""}${L.kind?retake:`<p>Do your corrections and ask your teacher for a redo.</p>`}</div>`;
  if(pct<GOAL) return `<div class="verdict pass"><b>✔ PASS · ${pct}%</b><p>Good effort, ${esc(name)}. You're not at the ${GOAL}% goal yet. Study the questions you got wrong, then try again to reach ${GOAL}%.</p>${hist?`<p class="muted">${hist}</p>`:""}${L.kind?retake.replace("Take the test again","Try again for 80%").replace('class="btn"','class="btn ghost"'):""}</div>`;
  return `<div class="verdict great"><b>🎯 EXCELLENT · ${pct}%</b><p>${esc(GOOD_MSG[x.mark%GOOD_MSG.length](name))}</p>${hist?`<p class="muted">${hist}</p>`:""}</div>`;
}
/* test time excludes pauses (toilet breaks); pauses are counted so the teacher and parent can see them */
const pausedNow = x => x.pausedAt ? Date.now() - x.pausedAt : 0;
const usedMs = x => (x.submittedAt || Date.now()) - x.testStartedAt - (x.pausedMs||0) - pausedNow(x);
const minsTaken = x => x.testStartedAt && x.submittedAt && x.submittedBy!=="teacher" ? Math.round(usedMs(x)/60000) : null;
const pauseNote = x => x.pauses ? `paused ${x.pauses} time${x.pauses===1?"":"s"} (${Math.round((x.pausedMs||0)/60000)} min)` : "";
function praiseFor(pct){ return pct>=80 ? "Excellent work!" : pct>=60 ? "Good work!" : pct>=40 ? "Well tried, keep practising!" : "Good effort. Go over the notes and try again."; }

/* ---------- learner side ---------- */
function lessonCards(l){
  const all = (S.lessons||[]).filter(x=>x.learnerId===l.id && LESSONS[x.lessonKey]);
  if(!all.length) return "";
  /* everything still to do (in the order given), then the 3 most recently marked */
  const todo = all.filter(x=>x.status!=="marked").sort((a,b)=>a.assignedAt-b.assignedAt), done = all.filter(x=>x.status==="marked").sort((a,b)=>(b.markedAt||0)-(a.markedAt||0)).slice(0,3);
  const mine = [...todo, ...done];
  return `<h2 class="h2s">📘 From your teacher ${todo.length?`<span class="pill p-warn">${todo.length} to do</span>`:""}</h2><div class="topiclist" style="margin-bottom:20px">${mine.map(x=>{ const L = lessonOf(x); const [st,cls] = lstatus(x);
    return `<button class="tcard" data-act="l-open" data-id="${esc(x.id)}"><span class="eyebrow">${esc(sname(L.subject, l.grade))} · ${L.kind?`test · ${L.minutes} min`:"teacher lesson"}</span><h3>${esc(L.title)}</h3>
      <span class="meta"><span class="muted">${x.status==="marked"?`Mark: ${x.mark}/${L.outOf}`:fmtDate(x.assignedAt)}</span><span class="pill ${cls}">${st}</span></span></button>`;}).join("")}</div>`;
}
function curLesson(){ return (S.lessons||[]).find(x=>x.id===S.lessonId); }
function vLesson(){
  const x = curLesson(), l = learner(); if(!x || !l) return vHome();
  const L = lessonOf(x), tab = S.ltab || "notes";
  if(L.kind) return vTestOnly(x, L, l);
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
function pauseScreen(x, left){
  return `<div class="timer paused" aria-live="polite"><span>⏸</span><b>Paused</b><span class="muted">for <span id="lpause">${mm(Math.round(pausedNow(x)/1000))}</span></span></div>
    <div class="banner"><b>Your test is paused.</b> The questions are hidden and the clock has stopped. You still have <b>${mm(left)}</b> left. Your teacher can see how many times and how long you paused.</div>
    <div class="cta"><button class="btn" data-act="l-resume">▶ Carry on with the test</button></div>`;
}
function timerBar(x, left, upMsg){
  return `<div class="timer ${left===0?"over":""}" aria-live="polite"><span>⏱</span><b id="ltimer">${left===0?"Time is up":mm(left)}</b><span class="muted">${left===0?upMsg:"left"}</span>${left>0?`<button class="btn ghost small" data-act="l-pause">⏸ Pause</button>`:""}</div>${x.pauses?`<p class="muted" style="font-size:14px;margin:-4px 0 10px">You have ${pauseNote(x)}.</p>`:""}`;
}
/* ----- timed tests (multiple choice, or written with method) ----- */
function vTestOnly(x, L, l){
  return `<button class="crumb" data-act="home">← Back</button>
  <span class="eyebrow">${esc(sname(L.subject,l.grade))} · Test from your teacher · ${L.kind==="mc"?"multiple choice":"show your method"}</span>
  <h1 class="pagetitle">${esc(L.title)}</h1>
  ${x.msg?`<div class="banner"><b>Message from your teacher:</b> ${esc(x.msg)}</div>`:""}
  ${testBody(x, L)}`;
}
/* multiple-choice options are shown in a different order on each new attempt, so a retake can't be done from memory of letters */
function optOrder(x, n){ const k = (x.attempts||[]).length, r = k ? 1 + ((k*2 + n) % 3) : 0; return [0,1,2,3].map(i=>(i + r) % 4); }
function submitMC(x, L){
  if(x.status==="marked") return;
  const qs = mcQs(L), ans = x.answers || {}, qm = {};
  qs.forEach((q,i)=>{ if(!q.removed) qm[i+1] = ans[i+1]===q.a ? 1 : 0; });
  const mark = Object.values(qm).reduce((a,b)=>a+b,0);
  if(x.pausedAt){ x.pausedMs = (x.pausedMs||0) + (Date.now()-x.pausedAt); x.pausedAt = null; }
  Object.assign(x, {qmarks:qm, mark, status:"marked", submittedAt:Date.now(), markedAt:Date.now(), autoMarked:true, feedback:autoFeedback(mark, L.outOf, (learner()||{}).name)});
  saveLesson(S.code, x);
}
function readTyped(x){ const t = {...(x.typed||{})}; document.querySelectorAll("[data-ta]").forEach(el=>{ t[el.dataset.ta] = el.value; }); x.typed = t; return t; }
function typedCount(x){ return Object.values(x.typed||{}).filter(v=>String(v).trim()).length; }
function testBody(x, L){
  const mc = L.kind==="mc", items = lessonTestItems(L), pages = x.pages || [], qN = items.filter(it=>!it.head && !isRem(it.q)).length;
  if(x.status==="marked"){
    const pct = Math.round(x.mark/L.outOf*100);
    return `${resultBanner(x, L, (learner()||{}).name||"")}<div class="score"><div class="big">${x.mark}<small>/${L.outOf}</small></div><div><div style="font-weight:700;font-size:20px">${pct}% · Level ${level(pct)[0]}</div><div class="muted">Pass mark ${PASS}% · Goal ${GOAL}% · ${mc?"Marked automatically":"Marked"} on ${fmtDate(x.markedAt)}.</div></div></div>
    ${markSummary(x)}${qBreakdown(x, L)}${pageStrip(x)}${pastAttempts(x, L)}`;
  }
  if(x.status==="submitted") return `<div class="banner"><b>Handed in.</b> You handed in your test on ${fmtDate(x.submittedAt)}${minsTaken(x)!=null?`, after ${minsTaken(x)} minutes`:""}. Your teacher will mark it, and you'll see your mark and every question here.</div>${typedList(x, L)}${pageStrip(x)}${pastAttempts(x, L)}`;
  if(!x.testStartedAt && x.status!=="redo") return `${(x.attempts||[]).length?`<div class="banner"><b>Before you start again:</b> open your last attempt below, read every question you got wrong and learn the correct answer.</div>${pastAttempts(x, L, null, true)}<h2 class="h2s">Attempt ${x.attempts.length+1}</h2>`:""}<article class="notes">${L.intro}</article>
    <div class="banner"><b>${L.minutes} minutes. ${mc?`${qN} questions, 1 mark each.`:`${L.outOf} marks.`}</b> ${mc?"Tap the answer you choose. You can change an answer until you hand in. Your mark comes up straight away.":"Show every step of your method. Type your answer and working under each question, or write on paper and upload photos, or both."} If you need a toilet break, press <b>Pause</b>: the questions are hidden and the clock stops.</div>
    <div class="cta"><button class="btn" data-act="l-start">Start the ${L.minutes}-minute test</button></div>
    <p class="muted">The timer starts when you press the button.${mc?" Have a pen and rough paper ready for working out.":" Have paper, a pen, a pencil and a ruler ready."}</p>`;
  const left = x.status==="redo" ? null : timeLeft(x, L);
  if(x.pausedAt && x.status!=="redo") return pauseScreen(x, left);
  if(mc){
    if(left===0){ setTimeout(()=>{ submitMC(x, L); render(); }, 0); return `<div class="banner">Time is up. Handing in your answers…</div>`; }
    const qs = mcQs(L), ans = x.answers || {}, done = Object.keys(ans).filter(n=>qs[n-1] && !qs[n-1].removed).length;
    return `${timerBar(x, left, "")}
    <div class="banner">Tap the answer you choose. You can change it until you hand in. <b>${done} of ${qN} answered.</b></div>
    ${items.map(it=>it.head ? `<div class="notes">${it.head}</div>` : isRem(it.q) ? REMOVED(it.n) : `<div class="panel lq" id="q${it.n}"><div class="tq"><b>${it.n}.</b> ${it.q}</div>
      <div class="opts">${optOrder(x, it.n).map((oi,pos)=>`<button class="opt ${ans[it.n]===oi?"chosen":""}" data-act="l-mc" data-n="${it.n}" data-o="${oi}" aria-pressed="${ans[it.n]===oi}"><span class="k">${"ABCD"[pos]}</span><span>${esc(qs[it.n-1].o[oi])}</span></button>`).join("")}</div></div>`).join("")}
    ${S.mcconfirm && done<qN ? `<div class="banner"><b>You haven't answered ${qN-done} question${qN-done===1?"":"s"}.</b> Go back and answer ${qN-done===1?"it":"them"}, or tap the button again to hand in anyway.</div>` : ""}
    <div class="cta"><button class="btn" data-act="l-mcsubmit">Hand in my test (${done}/${qN} answered)</button></div>`;
  }
  const typed = x.typed || {};
  return `${x.status==="redo"?`<div class="banner"><b>Your teacher asked you to redo this.</b> ${esc(x.feedback||"")} Fix your answers and hand in again.</div>`:timerBar(x, left, "Finish the line you are on and hand in now.")}
  <article class="notes">${L.testIntro||""}</article>
  ${items.map(it=>it.head ? `<div class="notes">${it.head}</div>` : isRem(it.q) ? REMOVED(it.n) : `<div class="panel tqa"><div class="tq"><b>${it.n}.</b> ${it.q}</div>
    <textarea data-ta="${it.n}" rows="${qMax(it.q)>=3?6:4}" placeholder="Type your answer and working here" aria-label="Answer to question ${it.n}">${esc(typed[it.n]||"")}</textarea></div>`).join("")}
  <p class="muted" id="lsaved" style="font-size:14px">Your typed answers save automatically.</p>
  <h2 class="h2s" id="lup">Wrote on paper? Upload photos (optional)</h2>
  <p class="muted">Take a clear photo of each page, in order. You can type some answers and write others on paper.</p>
  ${pageStrip(x, true)}
  <label class="btn ghost upl">📷 Add a photo of a page<input type="file" id="lupload" accept="image/*" multiple hidden></label>
  ${T.busy?`<p class="muted">Uploading…</p>`:""}
  <div class="cta"><button class="btn" data-act="l-hand">Hand in my test</button></div>`;
}
function typedList(x, L){
  const t = x.typed || {}; if(!typedCount(x)) return "";
  return `<h3 class="h2s">Your typed answers</h3><div class="qlist">${lessonTestItems(L).filter(it=>!it.head && !isRem(it.q)).map(it=>`<div class="qi"><div class="qq"><b>${it.n}.</b> ${esc(qText(it.q))}</div><div class="typed">${t[it.n]&&t[it.n].trim()?esc(t[it.n]):`<span class="muted">No typed answer</span>`}</div></div>`).join("")}</div>`;
}
function timeLeft(x, L){ return Math.max(0, Math.round(L.minutes*60 - usedMs(x)/1000)); }
function lessonTest(x, L){
  const items = lessonTestItems(L), pages = x.pages || [];
  if(x.status==="marked"){
    const pct = Math.round(x.mark/L.outOf*100);
    return `${resultBanner(x, L, (learner()||{}).name||"")}<div class="score"><div class="big">${x.mark}<small>/${L.outOf}</small></div><div><div style="font-weight:700;font-size:20px">${pct}% · Level ${level(pct)[0]}</div><div class="muted">Pass mark ${PASS}% · Goal ${GOAL}% · Marked on ${fmtDate(x.markedAt)}.</div></div></div>
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
  <article class="notes ltest">${L.testIntro}${items.map(it=>it.head ? it.head : isRem(it.q) ? `<p class="tq"><b>${it.n}.</b> <i>Your teacher removed this question. Skip it.</i></p>` : `<p class="tq"><b>${it.n}.</b> ${it.q}</p>`).join("")}</article>
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
const isRem = q => String(q).startsWith("⊘"), unrem = q => String(q).replace(/^⊘/,"");
const REMOVED = n => `<div class="panel lq removedq"><b>${n}.</b> <i>Your teacher removed this question. Skip it.</i></div>`;
const qMax = q => { if(isRem(q)) return 0; const m = String(q).match(/\((\d+)\)\s*$/); return m ? +m[1] : 1; };
const qText = q => String(q).replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();
function qBreakdown(x, L){
  const qm = x.qmarks || {}; if(!Object.keys(qm).length) return "";
  const items = lessonTestItems(L).filter(it=>!it.head && !isRem(it.q)), qn = x.qnotes || {};
  const right = items.filter(it=>qm[it.n]===qMax(it.q)).length, wrong = items.filter(it=>qm[it.n]===0).length, part = items.length - right - wrong;
  return `<h3 class="h2s" style="margin-top:18px">Every question: what you got right and wrong</h3>
  <div class="qkey"><span class="qk good">✔ ${right} right</span>${part?`<span class="qk part">½ ${part} partly right</span>`:""}<span class="qk bad">✗ ${wrong} wrong or not answered</span></div>
  <div class="qlist">${items.map(it=>{ const mx = qMax(it.q), g = qm[it.n], cls = g==null?"":g===mx?"good":g>0?"part":"bad", ic = g==null?"–":g===mx?"✔":g>0?"½":"✗";
    return `<div class="qi ${cls}"><div class="qtop"><span class="qic" aria-hidden="true">${ic}</span><span class="qq"><b>${it.n}.</b> ${esc(qText(it.q))}</span><span class="qm">${g==null?"–":g}/${mx}</span></div>
      ${yourAnswer(x, L, it.n, "Your answer")}
      ${qn[it.n]?`<p class="qnote"><b>Teacher:</b> ${esc(qn[it.n])}</p>`:""}
      ${g!==mx && L.memo[it.n-1]?`<p class="qans"><b>Correct answer:</b> ${esc(L.kind==="mc" ? (q=>`${"ABCD"[optOrder(x,it.n).indexOf(q.a)]}. ${q.o[q.a]}. ${q.e||""}`)(mcQs(L)[it.n-1]) : L.memo[it.n-1].split(" WHOLE TEST:")[0])}</p>`:""}</div>`;}).join("")}</div>`;
}
function yourAnswer(x, L, n, label){
  if(L.kind==="mc"){ const a = (x.answers||{})[n], q = mcQs(L)[n-1], ord = optOrder(x, n); return `<p class="qyour"><b>${label}:</b> ${a==null?`<span class="muted">Not answered</span>`:esc(`${"ABCD"[ord.indexOf(a)]}. ${q.o[a]}`)}</p>`; }
  const t = (x.typed||{})[n]; return t && t.trim() ? `<div class="qyour"><b>${label}:</b><div class="typed">${esc(t)}</div></div>` : "";
}
function qMarkRows(x, L){
  const items = lessonTestItems(L).filter(it=>!it.head && !isRem(it.q)), qm = x.qmarks || {}, qn = x.qnotes || {};
  return `<h3 style="margin:4px 0 0">Mark each question</h3>
  <p class="muted" style="margin:0;font-size:14px">Tap the mark for each question. The total adds up by itself. The student and parent will see every question, your comment and the correct answer.</p>
  <div class="qmark">${items.map(it=>{ const mx = qMax(it.q);
    return `<div class="qrow"><div><b>${it.n}.</b> ${esc(qText(it.q))}</div>${yourAnswer(x, L, it.n, "His answer")}<div class="muted" style="font-size:13px">Memo: ${esc(L.memo[it.n-1]||"")}</div>
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
/* every earlier attempt, with his answers, right/wrong and the correct answers */
function pastAttempts(x, L, code, open){
  const at = x.attempts || []; if(!at.length) return "";
  return `<h3 class="h2s">${at.length===1?"Earlier attempt":"Earlier attempts"}</h3>` + at.map((a,i)=>{
    const p = a.pct, tag = p<PASS?"❌ Fail":p<GOAL?"⚠️ Pass":"✅ Goal reached", px = {...a, attempts:at.slice(0,i)};
    if((a.pages||[]).length) loadPages(code || S.code, a.pages);
    const right = a.qmarks ? lessonTestItems(L).filter(it=>!it.head && !isRem(it.q) && a.qmarks[it.n]===qMax(it.q)).length : null;
    return `<details class="more attempt" ${open && i===at.length-1 ? "open" : ""}><summary><b>Attempt ${i+1}:</b> ${a.mark}/${a.outOf} (${p}%) ${tag}${right!=null?` · ${right} right`:""} · ${fmtDate(a.at)}</summary>
      ${a.qmarks ? `${a.feedback?`<p style="margin:8px 0">${esc(a.feedback)}</p>`:""}${qBreakdown(px, L)}${(a.pages||[]).length?`<div class="pages">${a.pages.map((pid,j)=>`<figure>${pageImg(pid,j)}<figcaption>Page ${j+1}</figcaption></figure>`).join("")}</div>`:""}`
        : `<p class="muted">Only the mark was saved for this attempt; the question-by-question details were not kept.</p>`}</details>`;
  }).join("");
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
  return fams.map(({code,label,f})=>`<div class="famcard"><h3>${esc(label)} <span class="muted" style="font-size:13px;font-weight:600">· code ending ${esc(code.slice(-4))}</span></h3>
    ${f.learners.length ? f.learners.slice().sort((a,b)=>a.name.localeCompare(b.name)).map(k=>withFam(f, ()=>{
      const v = effortVerdict(k.id), tests = S.attempts.filter(a=>a.learnerId===k.id && (kindOf(a)==="topic"||a.kind==="chapter"||a.kind==="mock") && a.at > Date.now()-28*86400000);
      const avg = tests.length ? Math.round(tests.reduce((s,a)=>s+pctOf(a),0)/tests.length) : null;
      const les = S.lessons.filter(x=>x.learnerId===k.id), waiting = les.filter(x=>x.status==="submitted").length, open = les.filter(x=>["assigned","started","redo"].includes(x.status)).length;
      return `<button class="kidrow" data-act="t-view" data-c="${code}" data-id="${esc(k.id)}">
        <span><b>${esc(k.name)}</b> <span class="muted">Grade ${gradeLabel(k.grade)}</span><br><span class="effline ${v.cls}">${weekDots(k.id)}<span>${v.head}: ${v.last14}/14 days</span></span></span>
        <span class="kidnums"><span>${avg==null?"No tests":`Avg ${avg}%`}</span><span class="muted">${weakItems(k.id).length} weak</span>${waiting?`<span class="pill p-bad">${waiting} to mark</span>`:open?`<span class="pill p-warn">${open} lesson${open===1?"":"s"} open</span>`:""}</span></button>`; })).join("")
      : f.error && !f.loaded ? `<p class="muted">Couldn't load this family yet (${esc(f.error)}). Trying again… If this stays, close the app and open it again.</p> <button class="linkbtn" data-act="t-reload" data-c="${code}">Try again now</button>`
      : f.loaded===false ? `<p class="muted">Loading…</p>`
      : `<p class="muted">No children in this family yet. The parent must open Lesson Ladder with this family code (ending <b>${esc(code.slice(-4))}</b>) and tap <b>Add a learner</b>. If their code ends differently, link their code instead.</p>`}</div>`).join("");
}
function teachView(code, lid){
  S.tview = {home:S.code};
  openFamily(code); S.parentOk = true; S.pkid = lid; S.view = "pchild"; render(); window.scrollTo(0,0);
}

/* ---------- progress reports to parents (sent by WhatsApp from the teacher's phone) ---------- */
const repKey = (code, lid) => `${code}_${lid}`;
const repOf = (code, lid) => (S.reports||[]).find(r=>r.id===repKey(code, lid)) || {};
const cleanPhone = p => String(p||"").replace(/[^0-9]/g,"");
const dayName = d => d.toLocaleDateString("en-ZA",{weekday:"short", day:"numeric", month:"short"});
const isoDay = d => dayKey(d.getTime ? d.getTime() : d);
function famOf(code){ return code===S.code ? {learners:S.learners, attempts:S.attempts, reads:S.reads, lessons:S.lessons} : T.fams[code]; }
function daysBetween(from, to){ const out = [], d = new Date(from); d.setHours(12,0,0,0); const end = new Date(to); end.setHours(12,0,0,0); while(d<=end && out.length<400){ out.push(new Date(d)); d.setDate(d.getDate()+1); } return out; }
/* the report period the teacher picked; by default, since the last report (or the last 7 days) up to today */
function repRange(code, lid){
  const r = repOf(code, lid), today = new Date();
  const defFrom = r.lastSentAt && Date.now() - r.lastSentAt < 31*86400000 ? new Date(r.lastSentAt) : new Date(Date.now() - 6*86400000);
  const from = S.repFrom ? keyDate(S.repFrom) : defFrom, to = S.repTo ? keyDate(S.repTo) : today;
  return from <= to ? [from, to] : [to, from];
}
function buildReport(code, k, note){
  const f = famOf(code); if(!f) return "";
  return withFam(f, ()=>{
    const r = repOf(code, k.id), [from, to] = repRange(code, k.id);
    const t0 = new Date(from).setHours(0,0,0,0), t1 = new Date(to).setHours(23,59,59,999), inP = t => t && t >= t0 && t <= t1;
    const days = daysBetween(from, to), periodDays = days.length, endsToday = isoDay(to)===isoDay(new Date());
    const ev = eventsFor(k.id).filter(e=>inP(e.at));
    const c = {}; ev.forEach(e=>{ const key = dayKey(e.at); c[key] = (c[key]||0) + 1; });
    const wm = r.withMe, sup = d => wm!=null && wm!=="" && d.getDay()===+wm;
    const wd = wm!=null && wm!=="" ? ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][+wm] : "";
    const ownDays = days.filter(d=>!sup(d)), active = ownDays.filter(d=>c[dayKey(d)]).length;
    const supDays = days.filter(sup), supDone = supDays.filter(d=>c[dayKey(d)]).length;
    const share = ownDays.length ? active/ownDays.length : 0, aim = Math.max(1, Math.round(ownDays.length*5/6));
    const verdict = share>=2/3 ? "✅ *Practising regularly*" : share>=1/3 ? "⚠️ *Some practice, not enough*" : active ? "❌ *Very little practice*" : "❌ *No practice at all*";
    const mk = d => sup(d) ? (c[dayKey(d)]?"👩‍🏫":"❌") : c[dayKey(d)]?"✅":"❌";
    const grid = periodDays<=14 ? days.map(d=>`${d.toLocaleDateString("en-ZA",{weekday:"short"})}\u00a0${mk(d)}`).join("  ")
      : (()=>{ const w = []; for(let i=0;i<days.length;i+=7){ const o = days.slice(i,i+7).filter(d=>!sup(d)); w.push(`${o.filter(d=>c[dayKey(d)]).length}/${o.length}`); } return `Days on his own, week by week: ${w.join(" · ")}`; })();
    /* subjects worked on in the period */
    /* what he did, one line per topic, with how he did: "• History: The Great Trek: notes read, test 7/10" */
    const ACT = {notes:"notes read", practice:"practice", topic:"test", chapter:"chapter test", review:"weak-spot practice", mock:"mock exam", lesson:"handed in"};
    const actLines = evs => { const by = {}; evs.forEach(e=>{ const key = e.title || e.label; const g = by[key] = by[key] || {sub:(e.subject||"").replace("Mathematics","Maths").replace("Social Sciences: ",""), title:e.title||e.label, parts:[]};
        const sc = e.score ? ` ${String(e.score).replace(" first try"," first try")}` : ""; g.parts.push((ACT[e.kind]||e.label.toLowerCase()) + sc); });
      return Object.values(by).map(g=>`• ${g.sub && g.sub!=="Mixed subjects" && !g.title.startsWith(g.sub) ? `${g.sub}: ` : ""}${g.title}: ${[...new Set(g.parts)].join(", ")}`); };
    const tm = t => new Date(t).toLocaleTimeString("en-ZA",{hour:"2-digit", minute:"2-digit"});
    const span = list => { if(!list.length) return ""; const d0 = new Date(list[0].at).setHours(0,0,0,0), a = Math.min(...list.map(e=>e.start && e.start>=d0 ? e.start : e.at)), z = Math.max(...list.map(e=>e.at)); return tm(a)===tm(z) ? `at ${tm(a)}` : `${tm(a)} to ${tm(z)}`; };
    const ownEv = ev.filter(e=>!sup(new Date(e.at)));
    const subj = {}; ownEv.forEach(e=>{ const [main, part] = (e.subject||"Other").replace("Mathematics","Maths").split(": "); const x = subj[main] = subj[main] || {d:new Set(), parts:new Set()}; x.d.add(dayKey(e.at)); if(part) x.parts.add(part); });
    const subjLines = Object.entries(subj).sort((a,b)=>b[1].d.size-a[1].d.size).map(([n,x])=>`• ${n}${x.parts.size?` (${[...x.parts].join(", ")})`:""}: ${x.d.size} day${x.d.size===1?"":"s"}`);
    /* teacher's work, as it stood at the end of the period */
    const at = (t) => t && t <= t1;
    const les = S.lessons.filter(x=>x.learnerId===k.id && LESSONS[x.lessonKey] && (inP(x.assignedAt) || inP(x.testStartedAt) || inP(x.submittedAt) || inP(x.markedAt) || (x.attempts||[]).some(a=>inP(a.at))));
    const short = x => lessonOf(x).kind ? lessonOf(x).title.split(" · ")[0] : lessonOf(x).title.split(":")[0] + " lesson";
    const doneL = [], waitL = [], goingL = [], notL = [];
    les.forEach(x=>{
      if(x.submittedAt && inP(x.submittedAt) && sup(new Date(x.submittedAt))) return;
      const L = lessonOf(x), qN = lessonTestItems(L).filter(it=>!it.head && !isRem(it.q)), rightOf = qm => qm ? qN.filter(it=>qm[it.n]===qMax(it.q)).length : null;
      const ic = p => p<PASS?"❌":p<GOAL?"⚠️":"✅", one = (p, qm) => { const rt = rightOf(qm); return `${p}%${p<PASS?" FAIL":""}${rt!=null?` (${rt} of ${qN.length} right)`:""}`; };
      const tries = (x.attempts||[]).filter(a=>inP(a.at)).map(a=>({p:a.pct, qm:a.qmarks}));
      if(at(x.markedAt) && x.status==="marked") tries.push({p:lessonPct(x), qm:x.qmarks});
      if(tries.length){ const last = tries[tries.length-1];
        doneL.push(tries.length===1 ? `${ic(last.p)} ${short(x)}: ${one(last.p, last.qm)}` : `${ic(last.p)} ${short(x)}: ${tries.map((t,i)=>`try ${i+1} ${t.p}%`).join(" → ")}${last.p<PASS?" FAIL":""}`); }
      else if(at(x.submittedAt)) waitL.push(short(x));
      else if(at(x.testStartedAt)) goingL.push(short(x));
      else if(at(x.assignedAt)) notL.push(short(x));
    });
    /* "Maths Test 2, Maths Test 3" -> "Maths Tests 2, 3" */
    const group = list => { const g = {}, rest = []; list.forEach(t=>{ const m = t.match(/^(.*) Test (\d+)$/); if(m) (g[m[1]] = g[m[1]] || []).push(m[2]); else rest.push(t); });
      return [...Object.entries(g).map(([n,nums])=>nums.length>1 ? `${n} Tests ${nums.join(", ")}` : `${n} Test ${nums[0]}`), ...rest].join("; "); };
    const scoreTxt = sc => { const m = String(sc||"").match(/(\d+)\s*\/\s*(\d+)/); if(!m || !+m[2]) return ""; const p = Math.round(m[1]/m[2]*100); return `${m[1]}/${m[2]} (${p}%) ${p<PASS?"❌":p<GOAL?"⚠️":"✅"}`; };
    const lessonSummary = d => {
      const de = ev.filter(e=>dayKey(e.at)===dayKey(d) && e.kind!=="lesson").sort((a,b)=>a.at-b.at);
      const tests = S.lessons.filter(x=>x.learnerId===k.id && LESSONS[x.lessonKey] && x.submittedAt && dayKey(x.submittedAt)===dayKey(d));
      const topics = [], subs = [];
      de.forEach(e=>{ if(e.kind==="review" || e.kind==="mock") return; const t = e.title || e.label; if(!topics.includes(t)) topics.push(t); const sb = (e.subject||"").replace("Mathematics","Maths").replace("Social Sciences: ",""); if(sb && !subs.includes(sb)) subs.push(sb); });
      tests.forEach(x=>{ const L = lessonOf(x); let sb = sname(L.subject, k.grade).replace("Mathematics","Maths");
        if(sb==="Social Sciences" && /^History/.test(L.title)) sb = "History";
        if(sb==="Social Sciences" && subs.some(v=>v==="History" || v==="Geography")) return;
        if(sb && !subs.includes(sb)) subs.push(sb); });
      const out = [];
      if(subs.length) out.push(`We worked on ${subs.join(" and ")}.`);
      topics.forEach(t=>{ const kinds = new Set(de.filter(e=>(e.title||e.label)===t).map(e=>e.kind)), did = [];
        if(kinds.has("notes")) did.push("read the notes"); if(kinds.has("practice")) did.push("did the practice questions");
        if(kinds.has("topic")) did.push("wrote the topic test"); if(kinds.has("chapter")) did.push("wrote the chapter test");
        if(did.length) out.push(`• ${t}: ${did.join(", ")}`); });
      const marks = [];
      de.filter(e=>["topic","chapter","mock","review"].includes(e.kind)).forEach(e=>{ const sc = scoreTxt(e.score); if(sc) marks.push(`• ${({topic:"Topic test",chapter:"Chapter test",mock:"Mock exam",review:"Weak-spot practice"})[e.kind]}${e.kind==="review"?"":` (${e.title})`}: ${sc}`); });
      tests.forEach(x=>{ const L = lessonOf(x); if(x.status==="marked"){ const p = lessonPct(x); marks.push(`• ${short(x)}: ${x.mark}/${L.outOf} (${p}%) ${p<PASS?"❌ Fail":p<GOAL?"⚠️ Pass":"✅"}`); } else marks.push(`• ${short(x)}: done, I'm still marking it`); });
      if(marks.length) out.push(`*His marks*`, ...marks);
      return {has: de.length || tests.length, span: span(de.length ? de : tests.map(x=>({at:x.submittedAt, start:x.testStartedAt}))), lines: out};
    };
    const supBlocks = supDays.map(d=>({d, s:lessonSummary(d)})).filter(o=>o.s.has).map(({d,s})=>`👩‍🏫 *Lesson with me: ${dayName(d)}* (${s.span})\n${s.lines.join("\n")}`);
    if(periodDays===1 && sup(days[0])){
      const s1 = lessonSummary(days[0]);
      return [`*${k.name}: lesson with me on ${dayName(days[0])}*`, s1.has ? `👩‍🏫 ${s1.span}` : null, ``, ...(s1.has ? s1.lines : ["We did not have a lesson on this day."]),
        note && note.trim() ? `\n*Note:* ${note.trim()}` : null, ``, `Details: ${location.origin}${location.pathname.replace(/index\.html$/,"")}`].filter(l=>l!==null).join("\n").replace(/\n{3,}/g,"\n\n");
    }
    if(periodDays===1){
      /* one day: only what was done, nothing about what wasn't */
      const d = days[0], mine = ev.filter(e=>e.kind!=="lesson").sort((a,b)=>a.at-b.at), link = `${location.origin}${location.pathname.replace(/index\.html$/,"")}`;
      const subLines = actLines(mine);

      const all = ev.slice().sort((a,b)=>a.at-b.at);
      const dStart = new Date(d).setHours(0,0,0,0), first = all.length ? Math.min(...all.map(e=>e.start && e.start>=dStart ? e.start : e.at)) : 0, lastT = all.length ? all[all.length-1].at : 0;
      return [
`*${k.name}: work on ${dayName(d)}*`,
all.length ? `${sup(d) ? "👩‍🏫 Worked with me" : "✅ Worked on his own"}, ${tm(first)===tm(lastT) ? `at ${tm(first)}` : `between ${tm(first)} and ${tm(lastT)}`}` : null,
``,
subLines.length ? subLines.join("\n") : (doneL.length || waitL.length ? null : `No work was done on this day.`),
doneL.length || waitL.length ? `` : null,
doneL.length || waitL.length ? `*Tests*` : null,
...doneL,
waitL.length ? `⏳ Handed in, waiting for marking: ${group(waitL)}` : null,
note && note.trim() ? `\n*Note:* ${note.trim()}` : null,
``,
`Details: ${link}`
      ].filter(l=>l!==null).join("\n").replace(/\n{3,}/g,"\n\n");
    }
    const fails = doneL.filter(l=>l.startsWith("❌")).length;
    const todo = [];
    if(share < 2/3) todo.push(`work at home every day for 30 minutes`);
    if(notL.length) todo.push(notL.length===1 ? `start the test he hasn't opened` : `start the ${notL.length} tests he hasn't opened`);
    if(goingL.length) todo.push(`finish what he started`);
    if(fails) todo.push(`retake the failed test${fails===1?"":"s"}`);
    const lastOwn = eventsFor(k.id).find(e=>!sup(new Date(e.at)) && e.at <= t1), agoN = lastOwn ? Math.floor((new Date().setHours(0,0,0,0) - new Date(lastOwn.at).setHours(0,0,0,0))/86400000) : null;
    return [
`*${k.name}: progress report*`,
`${dayName(from)} to ${dayName(to)}`,
``,
verdict,
`On his own: *${active} of ${ownDays.length} days* (aim ${aim})`,
supDays.length ? `${wd}s with me: ${supDone} of ${supDays.length}${supDone?" 👩‍🏫":""}` : null,
grid,
endsToday && agoN!=null && agoN>1 ? `Last worked on his own ${agoN} days ago.` : endsToday && agoN==null ? `He has not worked on his own yet.` : null,
``,
supBlocks.length ? `*Lessons with me*\n${supBlocks.join("\n\n")}\n` : null,
wd ? `*On his own, he worked on*` : `*Subjects*`,
subjLines.length ? subjLines.join("\n") : (wd ? `Nothing. He did not work on his own in this period.` : `None. No work done in this period.`),
``,
(doneL.length || waitL.length || goingL.length || notL.length) ? `*Tests from me*` : null,
...doneL,
waitL.length ? `⏳ Waiting for marking: ${group(waitL)}` : null,
goingL.length ? `✏️ Started, not finished: ${group(goingL)}` : null,
notL.length ? `🚫 Not started: ${group(notL)}` : null,
(doneL.length || waitL.length || goingL.length || notL.length) ? `` : null,
note && note.trim() ? `*Note:* ${note.trim()}\n` : null,
todo.length ? `*He needs to:* ${todo.join(", ")}. Goal: 80%.` : `*Well done.* Please encourage him to keep going.`,
``,
`Details: ${location.origin}${location.pathname.replace(/index\.html$/,"")}`
    ].filter(l=>l!==null).join("\n").replace(/\n{3,}/g,"\n\n");
  });
}
function reportsSection(){
  const studs = allStudents(); if(!studs.length) return "";
  return `<h2 class="h2s">Progress reports to parents</h2>
  <p class="muted" style="margin:0 0 10px">Send a parent a report whenever you like, for any dates you choose. It shows how many days their child practised, what they did each day, their marks, and which tests they haven't started.</p>
  <div class="topiclist">${studs.map(s=>{ const r = repOf(s.code, s.l.id), key = repKey(s.code, s.l.id), open = S.trep===key, due = false, [rf, rt] = repRange(s.code, s.l.id);
    return `<div class="tcard static repcard ${due?"due":""}"><span class="meta"><b>${esc(s.l.name)}</b>${due?`<span class="pill p-bad">Report due today</span>`:r.lastSentAt?`<span class="muted" style="font-size:13px">Last sent ${fmtDate(r.lastSentAt)}</span>`:""}</span>
      ${r.phone && !S.repEditPhone?.[key] ? `<span class="muted" style="font-size:14px">Parent's WhatsApp: +${esc(r.phone)} · <button class="linkbtn" data-act="t-repphone" data-k="${key}">Change</button></span>`
        : `<form class="form" data-repform="${key}" data-c="${s.code}" data-l="${esc(s.l.id)}"><label>Parent's WhatsApp number, with country code<input name="phone" inputmode="tel" placeholder="e.g. +27 82 123 4567" value="${r.phone?"+"+esc(r.phone):""}"></label><div><button class="btn ghost" type="submit">Save number</button></div></form>`}
      ${r.phone ? `<label class="muted wmsel" style="font-size:14px">Day ${esc(s.l.name)} is with you (you make him work, so it isn't counted as his own practice)<select data-wm="${key}" data-c="${s.code}" data-l="${esc(s.l.id)}"><option value="">None</option>${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map((d,i)=>`<option value="${i}" ${r.withMe!=null&&r.withMe!==""&&+r.withMe===i?"selected":""}>${d}</option>`).join("")}</select></label>` : ""}
      ${r.phone ? (open ? `<div class="repdates"><label>From<input type="date" id="rep-from" value="${isoDay(rf)}" max="${isoDay(new Date())}"></label><label>To<input type="date" id="rep-to" value="${isoDay(rt)}" max="${isoDay(new Date())}"></label></div>
        <div class="row repquick" style="flex-wrap:wrap;gap:6px">${[["0","Today"],["1","Yesterday"],["7","Last 7 days"],["14","Last 2 weeks"],["month","This month"],["term","Last 3 months"]].concat(r.lastSentAt?[["last","Since last report"]]:[]).map(([v,lab])=>`<button class="chip" data-act="t-repq" data-v="${v}" data-k="${key}">${lab}</button>`).join("")}</div>
        <label class="muted" style="font-size:14px">Add a note for the parent (optional)<textarea id="rep-note" rows="2" maxlength="400" placeholder="e.g. He did not open the app at all this week.">${esc(S.repNote||"")}</textarea></label>
        <button class="linkbtn" data-act="t-repbuild" data-k="${key}" data-c="${s.code}" data-l="${esc(s.l.id)}">Add note to the report</button>
        <label class="muted" style="font-size:14px">The report (you can edit it before sending)<textarea id="rep-text" rows="18">${esc(buildReport(s.code, s.l, S.repNote))}</textarea></label>
        <div class="row" style="flex-wrap:wrap;gap:8px"><button class="btn" data-act="t-repsend" data-k="${key}" data-c="${s.code}" data-l="${esc(s.l.id)}">Send on WhatsApp</button><button class="btn ghost" data-act="t-repclose">Close</button></div>
        <p class="muted" style="font-size:13px;margin:0">WhatsApp opens with the message ready. Check it, then press send in WhatsApp.</p>`
        : `<div><button class="btn" data-act="t-repopen" data-k="${key}">📨 Make a report</button></div>`) : ""}
    </div>`;}).join("")}</div>`;
}

/* ---------- teacher side ---------- */
function vTeacher(){
  if(S.ttpl) return vTEdit(null, {id:"tpl", lessonKey:S.ttpl, custom:tplOf(S.ttpl)});
  if(S.tprev) return vTPreview(S.tprev);
  const studs = allStudents(), lessons = allLessons(), toMark = lessons.filter(o=>o.x.status==="submitted" || notSent(o.x));
  const tsi = Math.min(+(S.tstud||0), Math.max(studs.length-1,0));
  const opts = studs.map((s,i)=>`<option value="${i}" ${i===tsi?"selected":""}>${esc(s.l.name)} (Grade ${gradeLabel(s.l.grade)}) · ${esc(s.fam)}</option>`).join("");
  const sel = studs[tsi];
  const lopts = Object.entries(LESSONS).filter(([k,L])=>!sel || +sel.l.grade===L.grade).map(([k,L])=>`<label class="chk"><input type="checkbox" name="t-lesson" value="${k}" ${(S.tgive||[]).includes(k)?"checked":""}><span>${esc(L.title)}<small class="muted">${L.kind?`${L.kind==="mc"?"Multiple choice, marked automatically":"Show your method, you mark it"} · ${L.minutes} min · ${L.outOf} marks`:`Lesson: notes, examples, practice and a ${L.minutes}-min test`}${tplOf(k)?" · <b>edited by you</b>":""}</small><span class="chklinks"><button type="button" class="linkbtn" data-act="t-prev" data-k="${k}">Open</button><button type="button" class="linkbtn" data-act="t-tpl" data-k="${k}">Edit</button></span></span></label>`).join("");
  return `${S.family&&S.family.teacher?"":crumbs([{act:"parent",label:"Parent"},{label:"Teacher"}])}
  <h1 class="pagetitle">Teacher</h1>
  <h2 class="h2s">Progress by family</h2>
  <p class="muted" style="margin:0 0 10px">Tap a child to see their full progress report: practice calendar, subjects, tests, weak spots and lessons.</p>
  ${famProgress()}
  <div id="reports">${reportsSection()}</div>
  <h2 class="h2s">Work to mark ${toMark.length?`<span class="pill p-bad">${toMark.length}</span>`:""}</h2>
  ${toMark.length?`<div class="topiclist">${toMark.map(o=>`<button class="tcard" data-act="t-mark" data-c="${o.code}" data-id="${esc(o.x.id)}"><b>${esc(o.l.name)}</b><span class="muted">${esc(lessonOf(o.x).title)}</span><span class="muted">${notSent(o.x)?`<span class="warnword">Not submitted yet</span>`:`Submitted ${fmtDate(o.x.submittedAt)}`} · ${(o.x.pages||[]).length} pages${minsTaken(o.x)!=null?` · ${minsTaken(o.x)} min`:""}</span></button>`).join("")}</div>`:`<p class="muted">Nothing to mark right now.</p>`}
  <h2 class="h2s">Give a lesson</h2>
  ${studs.length?`<form class="form" id="assignForm">
    <label for="t-stud">Student<select id="t-stud">${opts}</select></label>
    ${sel?`<label for="t-grade" class="muted" style="font-size:14px">${esc(sel.l.name)}'s grade (change it if it's wrong)<select id="t-grade">${[0,1,2,3,4,5,6,7,8,9,10,11,12].map(g=>`<option value="${g}" ${+sel.l.grade===g?"selected":""}>Grade ${gradeLabel(g)}</option>`).join("")}</select></label>`:""}
    <fieldset class="pickl"><legend>Lessons and tests <span class="muted">(tick one or more)</span></legend>${lopts||`<p class="muted">No lessons for this grade yet.</p>`}</fieldset>
    <label for="t-msg">Message to the student (optional)<textarea id="t-msg" rows="2" maxlength="300" placeholder="e.g. Do this before Friday. Remember: neat work and show your method."></textarea></label>
    <div><button class="btn" type="submit" ${lopts?"":"disabled"}>Give to this student</button></div></form>`:`<p class="muted">Add a learner or link a family first.</p>`}
  ${lessons.length?`<h2 class="h2s">All lessons</h2><div class="feed">${lessons.map(o=>{const [st,cls]=lstatus(o.x), L=lessonOf(o.x); return `<div><span><b>${esc(o.l.name)}</b> · ${esc(L.title.split(":")[0])}<br><span class="muted" style="font-size:13px">Given ${fmtDate(o.x.assignedAt)}${(o.x.attempts||[]).length?` · 🔁 attempt ${o.x.attempts.length+1} (before: ${o.x.attempts.map(t=>t.pct+"%").join(", ")})`:""}${(o.x.pages||[]).length?` · ${o.x.pages.length} page${o.x.pages.length===1?"":"s"} uploaded`:""}${o.x.status==="marked"?` · ${o.x.mark}/${L.outOf}`:""}</span></span><span class="row" style="gap:8px;flex-wrap:wrap;justify-content:flex-end"><span class="pill ${cls}">${st}</span><button class="linkbtn" data-act="t-mark" data-c="${o.code}" data-id="${esc(o.x.id)}">${o.x.status==="submitted"?"Mark":"Open"}</button>${S.tdel===o.x.id?`<span class="delask">Delete? <button class="linkbtn danger" data-act="t-delyes" data-c="${o.code}" data-id="${esc(o.x.id)}">Yes, delete</button> <button class="linkbtn" data-act="t-delno">Cancel</button></span>`:`<button class="linkbtn danger" data-act="t-del" data-id="${esc(o.x.id)}">Delete</button>`}</span></div>`;}).join("")}</div>`:""}
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
  const CHIPS = ["Fail. Study your notes and take the test again.","Excellent work!","Good work!","Well tried!","Show all your method.","Work must be neat.","Use a ruler for graphs and tables.","Check your calculations.","Label your graph and give it a title.","Do your corrections."];
  const over = minsTaken(x)!=null && minsTaken(x) > L.minutes;
  return `${crumbs([...(S.family&&S.family.teacher?[]:[{act:"parent",label:"Parent"}]),{act:"teacher",label:"Teacher"},{label:st?st.l.name:"Lesson"}])}
  <h1 class="pagetitle">${esc(st?st.l.name:"")} · ${esc(L.title.split(":")[0])}</h1>
  <div class="row" style="margin:0 0 12px"><a class="btn" href="#markhere">✔ Mark this work</a></div>
  <div class="strip">
    ${L.kind?`<div class="stat"><div class="eyebrow">${L.kind==="mc"?"Answered":"Typed answers"}</div><div class="v">${L.kind==="mc"?Object.keys(x.answers||{}).length:typedCount(x)}/${lessonTestItems(L).filter(it=>!it.head).length}</div><div class="muted" style="font-size:13px">${L.kind==="mc"?"marked automatically":"questions"}</div></div>`
    :`<div class="stat"><div class="eyebrow">Practice</div><div class="v">${exR}/5</div><div class="muted" style="font-size:13px">right first time (${exN}/5 done)</div></div>`}
    <div class="stat"><div class="eyebrow">Test time</div><div class="v">${minsTaken(x)!=null?minsTaken(x)+" min":"–"}</div><div class="muted" style="font-size:13px">${over?`<span class="warnword">over the ${L.minutes} min</span>`:`limit ${L.minutes} min`}${x.pauses?`<br>${pauseNote(x)}`:""}</div></div>
    <div class="stat"><div class="eyebrow">Pages</div><div class="v">${(x.pages||[]).length}</div></div>
  </div>
  ${pastAttempts(x, L, code)}
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
  <div class="row" style="margin:14px 0"><button class="btn" data-act="t-edit">✏️ Edit this ${L.kind?"test":"lesson"}</button></div>
  <details class="more" ${L.kind?"hidden":""}><summary>See the lesson as the student sees it</summary><article class="notes"><p class="muted">${esc(L.intro)}</p>${L.notes}<h2>Worked examples</h2>${L.examples}<h2>Practice</h2><ol>${L.practice.map(q=>`<li>${esc(q.q)}<br><span class="muted">Hint: ${esc(q.h)}</span></li>`).join("")}</ol><h2>Test</h2>${L.testIntro}${lessonTestItems(L).map(t=>t.head?t.head:`<p><b>${t.n}.</b> ${esc(t.q)}</p>`).join("")}</article></details>
  <h2 class="h2s">Message to the student</h2>
  <form class="form" id="msgForm"><label for="t-editmsg">Change the message they see at the top of the lesson<textarea id="t-editmsg" rows="2" maxlength="300">${esc(x.msg||"")}</textarea></label><div><button class="btn ghost" type="submit">Save message</button></div></form>
  <h2 class="h2s">Delete this lesson</h2>
  <p class="muted" style="margin:0 0 10px">Removes the lesson and any uploaded pages from the student's and parent's app. This can't be undone.</p>
  ${S.tdel===x.id?`<div class="row"><button class="btn ghost danger" data-act="t-delyes" data-c="${code}" data-id="${esc(x.id)}">Yes, delete it</button><button class="btn ghost" data-act="t-delno">Cancel</button></div>`:`<div><button class="btn ghost danger" data-act="t-del" data-id="${esc(x.id)}">Delete lesson</button></div>`}`;
}

/* ---------- library: open or edit a lesson/test before giving it ---------- */
const tplOf = key => ((S.templates||[]).find(t=>t.id===key) || {}).custom;
function previewBody(L){
  const items = lessonTestItems(L);
  if(L.kind==="mc") return `<article class="notes">${L.intro}</article><h2 class="h2s">Questions (correct answer ticked)</h2>
    ${items.map(it=>it.head ? `<div class="notes">${it.head}</div>` : (q=>`<div class="panel lq ${q.removed?"removedq":""}">${q.removed?`<span class="pill p-bad">Removed</span>`:""}<div class="tq"><b>${it.n}.</b> ${unrem(it.q)}</div><div class="opts">${q.o.map((o,oi)=>`<div class="opt ${oi===q.a?"right":""}"><span class="k">${"ABCD"[oi]}</span><span>${esc(o)}${oi===q.a?" ✔":""}</span></div>`).join("")}</div>${q.e?`<p class="muted" style="font-size:14px;margin:6px 0 0">${esc(q.e)}</p>`:""}</div>`)(mcQs(L)[it.n-1])).join("")}`;
  const qs = items.map(it=>it.head ? `<div class="notes">${it.head}</div>` : `<div class="panel lq ${isRem(it.q)?"removedq":""}">${isRem(it.q)?`<span class="pill p-bad">Removed</span>`:""}<div class="tq"><b>${it.n}.</b> ${unrem(it.q)}</div><p class="qans" style="margin:6px 0 0"><b>Memo:</b> ${esc(L.memo[it.n-1]||"")}</p></div>`).join("");
  if(L.kind) return `<article class="notes">${L.intro}</article><h2 class="h2s">Questions and memo</h2>${qs}`;
  return `<p class="muted">${esc(L.intro)}</p><article class="notes">${L.notes}<h2>Worked examples</h2>${L.examples}<h2>Practice</h2><ol>${L.practice.map(q=>`<li>${esc(q.q)}<br>${q.o.map((o,oi)=>`${"ABCD"[oi]}. ${esc(o)}${oi===q.a?" ✔":""}`).join(" · ")}<br><span class="muted">Hint: ${esc(q.h)}</span></li>`).join("")}</ol><h2>Test</h2>${L.testIntro||""}</article>${qs}`;
}
function vTPreview(key){
  const L = lessonOf({lessonKey:key, custom:tplOf(key)}); if(!L){ S.tprev = null; return vTeacher(); }
  return `${crumbs([...(S.family&&S.family.teacher?[]:[{act:"parent",label:"Parent"}]),{act:"teacher",label:"Teacher"},{label:"Open"}])}
  <span class="eyebrow">${esc(sname(L.subject, L.grade))} · ${L.kind?(L.kind==="mc"?"multiple-choice test, marked automatically":"show-your-method test, you mark it"):"lesson"} · ${L.minutes} min · ${L.outOf} marks</span>
  <h1 class="pagetitle">${esc(L.title)}</h1>
  ${tplOf(key)?`<div class="banner">You have edited this ${L.kind?"test":"lesson"}. Your version is what students get from now on.</div>`:""}
  <div class="row" style="gap:8px;flex-wrap:wrap;margin:0 0 14px"><button class="btn" data-act="t-tpl" data-k="${key}">✏️ Edit</button><button class="btn ghost" data-act="t-give" data-k="${key}">Give to a student</button><button class="btn ghost" data-act="t-prevclose">Back</button></div>
  ${previewBody(L)}
  <div class="row" style="gap:8px;flex-wrap:wrap;margin:16px 0"><button class="btn" data-act="t-tpl" data-k="${key}">✏️ Edit</button><button class="btn ghost" data-act="t-give" data-k="${key}">Give to a student</button></div>`;
}

/* ---------- lesson editor (teacher) ---------- */
const TB = `<div class="etools"><button type="button" data-act="t-fmt" data-f="bold"><b>B</b></button><button type="button" data-act="t-fmt" data-f="italic"><i>I</i></button><button type="button" data-act="t-fmt" data-f="h2">Heading</button><button type="button" data-act="t-fmt" data-f="insertUnorderedList">• List</button><button type="button" data-act="t-fmt" data-f="insertOrderedList">1. List</button></div>`;
function vTEdit(code, x){
  const L = lessonOf(x), st = code ? allStudents().find(s=>s.code===code && s.l.id===x.learnerId) : null, tpl = !code, what = L.kind ? "test" : "lesson";
  let n = 0;
  const testRows = L.test.map((t,i)=> t.startsWith("<h3>")
    ? (t.includes("<svg") ? `<div class="ehead">${t}<p class="muted" style="font-size:13px">This graph can't be edited here.</p></div>`
       : `<div class="ehead"><div class="edit small" contenteditable="true" data-ti="${i}">${t}</div></div>`)
    : `<div class="efs ${isRem(t)?"removedq":""}"><label>Question ${++n}<textarea rows="2" data-ti="${i}">${esc(unrem(t))}</textarea></label><label class="rmq"><input type="checkbox" data-rm="${i}" ${isRem(t)?"checked":""}> Remove this question</label></div>`).join("");
  const mcRows = L.kind==="mc" ? L.mc.map((q,i)=>{ if(q.head) return (q.head.includes("<svg") ? `<div class="ehead">${q.head}</div>` : `<div class="ehead"><div class="edit small" contenteditable="true" data-mh="${i}">${q.head}</div></div>`);
    return `<fieldset class="efs ${q.removed?"removedq":""}"><legend>Question ${++n}</legend>
      <label class="rmq"><input type="checkbox" data-rm="${i}" ${q.removed?"checked":""}> Remove this question</label>
      <label>Question<textarea rows="2" data-mq="${i}">${esc(qText(q.q))}</textarea></label>
      ${q.o.map((o,j)=>`<label class="eopt"><input type="radio" name="ma${i}" value="${j}" ${q.a===j?"checked":""} aria-label="Correct answer"> <input data-mo="${i}-${j}" value="${esc(o)}" aria-label="Option ${"ABCD"[j]}"></label>`).join("")}
      <p class="muted" style="font-size:13px;margin:0">Tick the circle next to the correct answer.</p>
      <label>Explanation shown after marking<input data-me="${i}" value="${esc(q.e||"")}"></label></fieldset>`; }).join("") : "";
  return `${crumbs([...(S.family&&S.family.teacher?[]:[{act:"parent",label:"Parent"}]),{act:"teacher",label:"Teacher"},{label:`Edit ${what}`}])}
  <h1 class="pagetitle">Edit ${what}</h1>
  <p class="muted">${tpl ? `Your changes apply to every copy you give <b>from now on</b>. Copies you already gave keep their own version: edit those under All lessons → Open.` : `Changes apply only to the copy you gave ${esc(st?st.l.name:"this student")}.`} Tap into any text to change it, then press <b>Save changes</b> at the bottom.</p>
  <form class="form wide" id="editForm">
    <label for="e-title">Title<input id="e-title" maxlength="140" value="${esc(L.title)}"></label>
    ${L.kind ? `<h2 class="h2s">Instructions</h2>${TB}<div class="edit notes" id="e-introh" contenteditable="true">${L.intro}</div>` : `<label for="e-intro">Introduction<textarea id="e-intro" rows="3">${esc(L.intro)}</textarea></label>`}
    ${L.kind==="mc" ? `<h2 class="h2s">Questions</h2>${mcRows}` : L.kind ? `<h2 class="h2s">Questions</h2><p class="muted" style="font-size:14px;margin:0">Keep the marks in brackets at the end of each question, for example (2). The app uses them to add up the total.</p>${testRows}<h2 class="h2s">Memo (only you see this)</h2>${L.memo.map((m,i)=>`<label>Answer ${i+1}<textarea rows="2" data-mi="${i}">${esc(m)}</textarea></label>`).join("")}` : `
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
    ${L.memo.map((m,i)=>`<label>Answer ${i+1}<textarea rows="2" data-mi="${i}">${esc(m)}</textarea></label>`).join("")}`}
    <div class="row sticky-save"><button class="btn" type="submit">Save changes</button><button class="btn ghost" type="button" data-act="t-editno">Cancel</button></div>
    ${x.custom?`<p class="muted" style="font-size:14px">Want the original back? <button type="button" class="linkbtn danger" data-act="t-editreset">Undo all my changes</button></p>`:""}
  </form>`;
}
function cleanHtml(h){ const d = document.createElement("div"); d.innerHTML = h; d.querySelectorAll("script,style,iframe,object").forEach(n=>n.remove()); d.querySelectorAll("*").forEach(n=>[...n.attributes].forEach(a=>{ if(/^on/i.test(a.name) || /javascript:/i.test(a.value)) n.removeAttribute(a.name); })); return d.innerHTML; }
function readEdits(x){
  const L = LESSONS[x.lessonKey], q = s => document.querySelector(s), all = s => [...document.querySelectorAll(s)];
  if(L.kind==="mc"){
    const cur = lessonOf(x);
    return { title: q("#e-title").value.trim() || L.title, intro: cleanHtml(q("#e-introh").innerHTML), removed: all("[data-rm]:checked").map(el=>+el.dataset.rm),
      mc: cur.mc.map((it,i)=> it.head ? (q(`[data-mh="${i}"]`) ? {head:cleanHtml(q(`[data-mh="${i}"]`).innerHTML)} : null)
        : {q:q(`[data-mq="${i}"]`).value.trim(), o:it.o.map((_,j)=>q(`[data-mo="${i}-${j}"]`).value.trim()), a:+(q(`input[name="ma${i}"]:checked`)?.value ?? it.a), e:q(`[data-me="${i}"]`).value.trim()}) };
  }
  if(L.kind){
    const test = lessonOf(x).test.slice();
    all("[data-ti]").forEach(el=>{ const i = +el.dataset.ti; test[i] = el.tagName==="TEXTAREA" ? el.value.trim() : cleanHtml(el.innerHTML); });
    return { title: q("#e-title").value.trim() || L.title, intro: cleanHtml(q("#e-introh").innerHTML), test, removed: all("[data-rm]:checked").map(el=>+el.dataset.rm), memo: all("[data-mi]").map(el=>el.value.trim()) };
  }
  const test = L.test.slice(); const cur = lessonOf(x);
  cur.test.forEach((t,i)=>test[i]=t);
  all("[data-ti]").forEach(el=>{ const i = +el.dataset.ti; test[i] = el.tagName==="TEXTAREA" ? el.value.trim() : cleanHtml(el.innerHTML); });
  return {
    title: q("#e-title").value.trim() || L.title, intro: q("#e-intro").value.trim(),
    notes: cleanHtml(q("#e-notes").innerHTML), examples: cleanHtml(q("#e-examples").innerHTML),
    practice: L.practice.map((p,i)=>({q:q(`[data-pq="${i}"]`).value.trim(), o:p.o.map((_,j)=>q(`[data-po="${i}-${j}"]`).value.trim()), a:+(q(`input[name="pa${i}"]:checked`)?.value ?? p.a), h:q(`[data-ph="${i}"]`).value.trim(), e:q(`[data-pe="${i}"]`).value.trim()})),
    test, removed: all("[data-rm]:checked").map(el=>+el.dataset.rm), memo: all("[data-mi]").map(el=>el.value.trim())
  };
}

/* ---------- parent view ---------- */
function vPLessons(k){
  const mine = (S.lessons||[]).filter(x=>x.learnerId===k.id && LESSONS[x.lessonKey]).sort((a,b)=>b.assignedAt-a.assignedAt);
  if(!mine.length) return "";
  return `<h2 class="h2s">Lessons from the teacher</h2><div class="topiclist">${mine.map(x=>{ const L = lessonOf(x), [st,cls] = lstatus(x), ex = x.ex||{};
    const open = S.plopen===x.id;
    return `<div class="tcard static"><span class="meta"><b>${esc(L.title)}</b><span class="pill ${cls}">${st}</span></span>
      <span class="muted" style="font-size:14px">Given ${fmtDate(x.assignedAt)} · ${L.kind?(L.kind==="mc"?"multiple-choice test":"written test"):`practice ${Object.values(ex).filter(Boolean).length}/5 right first time`}${minsTaken(x)!=null?` · test took ${minsTaken(x)} min${x.pauses?`, ${pauseNote(x)}`:""}`:""}${x.status==="marked"?` · <b>Mark ${x.mark}/${L.outOf} (${Math.round(x.mark/L.outOf*100)}%)</b>`:""}</span>
      ${(x.attempts||[]).length?`<span class="muted" style="font-size:14px">🔁 Taken ${x.attempts.length+1} times. Earlier marks: ${x.attempts.map(a=>a.pct+"%").join(", ")}.</span><details class="more"><summary>See his earlier attempt${x.attempts.length===1?"":"s"}: right and wrong</summary>${pastAttempts(x, L)}</details>`:""}
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
  else if(act==="l-mc"){ const x = curLesson(); if(!x || x.status==="marked" || x.pausedAt) return; x.answers = {...(x.answers||{}), [b.dataset.n]: +b.dataset.o}; S.mcconfirm = false; saveLesson(S.code, x); const y = window.scrollY; render(); window.scrollTo(0, y); }
  else if(act==="t-repopen"){ S.trep = b.dataset.k; S.repNote = ""; S.repFrom = S.repTo = null; render(); document.getElementById("rep-text")?.scrollIntoView({block:"center"}); }
  else if(act==="t-repq"){ S.repNote = document.getElementById("rep-note")?.value || S.repNote || ""; const v = b.dataset.v, t = new Date(), f = new Date();
    if(v==="0"){} else if(v==="1"){ f.setDate(t.getDate()-1); t.setDate(t.getDate()-1); } else if(v==="7") f.setDate(t.getDate()-6); else if(v==="14") f.setDate(t.getDate()-13); else if(v==="month") f.setDate(1); else if(v==="term") f.setMonth(t.getMonth()-3);
    else if(v==="last"){ const r = (S.reports||[]).find(x=>x.id===b.dataset.k); if(r && r.lastSentAt) f.setTime(r.lastSentAt); }
    S.repFrom = isoDay(f); S.repTo = isoDay(t); render(); document.getElementById("rep-text")?.scrollIntoView({block:"center"}); }
  else if(act==="t-repclose"){ S.trep = null; render(); }
  else if(act==="t-repphone"){ S.repEditPhone = {...(S.repEditPhone||{}), [b.dataset.k]:true}; render(); }
  else if(act==="t-repbuild"){ S.repNote = document.getElementById("rep-note")?.value || ""; render(); document.getElementById("rep-text")?.scrollIntoView({block:"center"}); }
  else if(act==="t-repsend"){ const r = repOf(b.dataset.c, b.dataset.l), text = document.getElementById("rep-text").value;
    if(!r.phone) return;
    window.open(`https://wa.me/${r.phone}?text=${encodeURIComponent(text)}`, "_blank");
    famRef.collection("reports").doc(b.dataset.k).set({phone:r.phone, withMe:r.withMe??"", code:b.dataset.c, learnerId:b.dataset.l, lastSentAt:Date.now(), sent:[...(r.sent||[]).slice(-20), Date.now()]}).catch(()=>{});
    S.trep = null; S.note = "WhatsApp opened with the report. Press send in WhatsApp."; render(); }
  else if(act==="l-retake"){ const x = curLesson(), L = lessonOf(x); if(!x || x.status!=="marked") return;
    const keep = {}; ["answers","typed","qmarks","qnotes","feedback","method","neatness","testStartedAt","submittedAt","pausedMs","submittedBy"].forEach(k=>{ if(x[k]!=null) keep[k] = x[k]; });
    x.attempts = [...(x.attempts||[]), {...keep, mark:x.mark, outOf:L.outOf, pct:Math.round(x.mark/L.outOf*100), at:x.markedAt||Date.now(), pauses:x.pauses||0, pages:x.pages||[]}];
    ["answers","typed","qmarks","qnotes","mark","testStartedAt","submittedAt","markedAt","pausedAt","pausedMs","pauses","feedback","method","neatness","autoMarked","submittedBy"].forEach(k=>delete x[k]);
    x.pages = []; x.status = "assigned"; x.retakenAt = Date.now(); S.mcconfirm = false; saveLesson(S.code, x); render(); window.scrollTo(0,0); }
  else if(act==="l-mcsubmit"){ const x = curLesson(), L = lessonOf(x), qs = mcQs(L), done = Object.keys(x.answers||{}).filter(k=>qs[k-1] && !qs[k-1].removed).length, n = qs.filter(q=>!q.removed).length;
    if(done<n && !S.mcconfirm){ S.mcconfirm = true; const y = window.scrollY; render(); window.scrollTo(0, y); return; }
    S.mcconfirm = false; submitMC(x, L); render(); window.scrollTo(0,0); }
  else if(act==="l-hand"){ const x = curLesson(); readTyped(x);
    if(!typedCount(x) && !(x.pages||[]).length){ S.note = "Type at least one answer or upload a photo of your work before you hand in."; render(); return; }
    if(x.pausedAt){ x.pausedMs = (x.pausedMs||0) + (Date.now()-x.pausedAt); x.pausedAt = null; }
    x.status = "submitted"; x.submittedAt = Date.now(); saveLesson(S.code, x); render(); window.scrollTo(0,0); }
  else if(act==="l-pause"){ const x = curLesson(); if(x.pausedAt) return; if(document.querySelector("[data-ta]")) readTyped(x); x.pausedAt = Date.now(); x.pauses = (x.pauses||0)+1; saveLesson(S.code, x); render(); window.scrollTo(0,0); }
  else if(act==="l-resume"){ const x = curLesson(); if(!x.pausedAt) return; x.pausedMs = (x.pausedMs||0) + (Date.now() - x.pausedAt); x.pausedAt = null; saveLesson(S.code, x); render(); window.scrollTo(0,0); }
  else if(act==="l-submit"){ const x = curLesson(); if(!(x.pages||[]).length) return; x.status = "submitted"; x.submittedAt = Date.now(); saveLesson(S.code, x); render(); window.scrollTo(0,0); }
  else if(act==="l-zoom"){ e.preventDefault(); const src = T.pages[b.dataset.p]; if(src){ S.zoom = src; render(); } }
  else if(act==="t-zoomclose"){ S.zoom = null; render(); }
  else if(act==="t-mark"){ S.tedit = null; S.tsel = {code:b.dataset.c, id:b.dataset.id}; go("tmark"); }
  else if(act==="t-chip"){ const ta = document.getElementById("m-fb"); ta.value = (ta.value ? ta.value.trim()+" " : "") + b.dataset.t; }
  else if(act==="t-redo"){ const {code,id} = S.tsel, x = findLesson(code,id); { const {qm, qn} = readQMarks(); x.qmarks = qm; x.qnotes = qn; } x.status = "redo"; x.feedback = document.getElementById("m-fb").value.trim(); x.method = document.getElementById("m-method").value; x.neatness = document.getElementById("m-neat").value; saveLesson(code, x); go("teacher"); S.note = "Sent back for redoing."; render(); }
  else if(act==="t-edit"){ S.tedit = S.tsel && S.tsel.id; render(); window.scrollTo(0,0); }
  else if(act==="t-editno"){ if(S.ttpl){ S.tprev = S.ttpl; S.ttpl = null; } S.tedit = null; render(); window.scrollTo(0,0); }
  else if(act==="t-prev"){ e.preventDefault(); S.tprev = b.dataset.k; S.ttpl = null; render(); window.scrollTo(0,0); }
  else if(act==="t-prevclose"){ S.tprev = null; render(); document.getElementById("assignForm")?.scrollIntoView({block:"start"}); }
  else if(act==="t-tpl"){ e.preventDefault(); S.ttpl = b.dataset.k; S.tprev = null; render(); window.scrollTo(0,0); }
  else if(act==="t-give"){ S.tgive = [b.dataset.k]; S.tprev = null; render(); document.getElementById("assignForm")?.scrollIntoView({block:"start"}); }
  else if(act==="t-editreset" && S.ttpl){ famRef.collection("templates").doc(S.ttpl).delete().catch(()=>{}); S.tprev = S.ttpl; S.ttpl = null; S.note = "Back to the original version."; render(); window.scrollTo(0,0); }
  else if(act==="t-editreset"){ const {code,id} = S.tsel, x = findLesson(code,id); delete x.custom; saveLesson(code, x); S.tedit = null; S.note = "The lesson is back to the original."; render(); window.scrollTo(0,0); }
  else if(act==="t-fmt"){ e.preventDefault(); const f = b.dataset.f; if(f==="h2") document.execCommand("formatBlock", false, "h3"); else document.execCommand(f); }
  else if(act==="t-q"){ const n = b.dataset.n; b.parentNode.querySelectorAll("button").forEach(o=>o.classList.toggle("on", o===b));
    const {qm} = readQMarks(), tot = Object.values(qm).reduce((a,c)=>a+c,0), L = lessonOf(findLesson(S.tsel.code, S.tsel.id)), all = lessonTestItems(L).filter(it=>!it.head).length, done = Object.keys(qm).length;
    document.getElementById("qtotal").textContent = tot; document.getElementById("m-mark").value = tot;
    document.getElementById("qleft").textContent = done<all ? `(${all-done} question${all-done===1?"":"s"} still to mark)` : "(all marked)"; }
  else if(act==="t-reload"){ const f = T.fams[b.dataset.c]; if(f){ f.tries = 0; f.error = ""; subscribeFam(b.dataset.c, f); } render(); }
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
let taTimer = null;
document.addEventListener("input", e=>{
  if(!e.target.matches || !e.target.matches("[data-ta]")) return;
  clearTimeout(taTimer);
  taTimer = setTimeout(()=>{ const x = curLesson(); if(!x || ["submitted","marked"].includes(x.status)) return; readTyped(x); saveLesson(S.code, x);
    const s = document.getElementById("lsaved"); if(s) s.textContent = `Saved ✔ at ${new Date().toTimeString().slice(0,5)}`; }, 900);
});
document.addEventListener("mousedown", e=>{ if(e.target.closest(".etools button")) e.preventDefault(); });
document.addEventListener("change", e=>{
  if(e.target.id==="t-stud"){ S.tstud = +e.target.value; render(); }
  if(e.target.id==="t-grade"){ const st = allStudents()[Math.min(+(S.tstud||0), allStudents().length-1)]; if(!st) return; const g = +e.target.value;
    const {id:_lid, ...ldata} = st.l; famDoc(st.code).collection("learners").doc(st.l.id).set({...ldata, grade:g})
      .then(()=>{ S.note = `${st.l.name} is now in Grade ${gradeLabel(g)}. The Grade ${gradeLabel(g)} lessons and tests are listed below.`; render(); })
      .catch(()=>{ S.note = "The grade didn't save. Check your connection."; render(); });
    st.l.grade = g; S.tgive = []; render(); }
  if(e.target.id==="rep-from" || e.target.id==="rep-to"){ S.repNote = document.getElementById("rep-note")?.value || S.repNote || ""; if(e.target.value){ if(e.target.id==="rep-from") S.repFrom = e.target.value; else S.repTo = e.target.value; render(); document.getElementById("rep-text")?.scrollIntoView({block:"center"}); } return; }
  if(e.target.dataset && e.target.dataset.wm){ const key = e.target.dataset.wm, r = repOf(e.target.dataset.c, e.target.dataset.l);
    famRef.collection("reports").doc(key).set({phone:r.phone, code:e.target.dataset.c, learnerId:e.target.dataset.l, lastSentAt:r.lastSentAt||null, sent:r.sent||[], withMe:e.target.value}).catch(()=>{});
    S.note = e.target.value==="" ? "Saved." : `Saved. ${["Sundays","Mondays","Tuesdays","Wednesdays","Thursdays","Fridays","Saturdays"][+e.target.value]} are now shown as days with you, separate from his own practice.`; render(); }
});
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
    const s = allStudents()[+document.getElementById("t-stud").value], keys = [...document.querySelectorAll("input[name=t-lesson]:checked")].map(i=>i.value).filter(k=>LESSONS[k]);
    if(!s) return;
    if(!keys.length){ S.note = "Tick at least one lesson or test."; render(); return; }
    const msg = document.getElementById("t-msg").value.trim(); let given = 0, had = [];
    keys.forEach((key,i)=>{
      if(lessonsOf(s.code).some(o=>o.learnerId===s.l.id && o.lessonKey===key && o.status!=="marked")){ had.push(LESSONS[key].title); return; }
      const t = tplOf(key); saveLesson(s.code, {id:uid(), learnerId:s.l.id, lessonKey:key, msg, assignedAt:Date.now()+i, status:"assigned", ex:{}, pages:[], ...(t?{custom:t}:{})}); given++;
    });
    S.tgive = []; S.note = `${given?`Gave ${given} to ${s.l.name}. They'll see ${given===1?"it":"them"} on their home screen.`:""}${had.length?` ${s.l.name} already has ${had.length===1?"this one":"these"} and hasn't finished: ${had.join("; ")}.`:""}`.trim(); render();
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
  if(e.target.id==="editForm" && S.ttpl){
    e.preventDefault();
    const key = S.ttpl, custom = readEdits({lessonKey:key, custom:tplOf(key)});
    famRef.collection("templates").doc(key).set({custom, at:Date.now()}).catch(()=>{ S.note = "Your changes didn't save. Check your connection."; render(); });
    S.ttpl = null; S.tprev = key; S.note = "Saved. Students get your version every time you give it from now on."; render(); window.scrollTo(0,0); return;
  }
  if(e.target.id==="editForm"){
    e.preventDefault();
    const {code,id} = S.tsel || {}, x = findLesson(code,id); if(!x) return;
    x.custom = readEdits(x); x.editedAt = Date.now(); saveLesson(code, x); S.tedit = null; S.note = "Changes saved. The student sees the new version now."; render(); window.scrollTo(0,0);
    return;
  }
  if(e.target.dataset && e.target.dataset.repform){
    e.preventDefault();
    const key = e.target.dataset.repform, phone = cleanPhone(e.target.querySelector("[name=phone]").value);
    if(phone.length < 9 || phone.startsWith("0")){ S.note = "Enter the full number with the country code, for example +27 82 123 4567 or +44 7700 900123."; render(); return; }
    const r = repOf(e.target.dataset.c, e.target.dataset.l);
    famRef.collection("reports").doc(key).set({lastSentAt:r.lastSentAt||null, sent:r.sent||[], withMe:r.withMe??"", phone, code:e.target.dataset.c, learnerId:e.target.dataset.l}).catch(()=>{ S.note = "The number didn't save. Check your connection."; render(); });
    S.repEditPhone = {...(S.repEditPhone||{}), [key]:false}; S.note = "Number saved."; render(); return;
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
    const st = allStudents().find(s=>s.code===code && s.l.id===x.learnerId);
    Object.assign(x, {mark:m, method:document.getElementById("m-method").value, neatness:document.getElementById("m-neat").value, feedback:document.getElementById("m-fb").value.trim() || autoFeedback(m, L.outOf, st?st.l.name:""), status:"marked", markedAt:Date.now()});
    saveLesson(code, x); go("teacher"); S.note = "Mark saved. The student and parent can see it now."; render();
  }
});
/* live test timer */
setInterval(()=>{ const pe = document.getElementById("lpause"); if(pe){ const x = curLesson(); if(x && x.pausedAt) pe.textContent = mm(Math.round(pausedNow(x)/1000)); } const el = document.getElementById("ltimer"); if(!el) return; const x = curLesson(); if(!x || !x.testStartedAt) return; const L = lessonOf(x), left = timeLeft(x, L);
  if(left===0 && L.kind==="mc" && x.status==="started"){ submitMC(x, L); render(); return; }
  if(left===0 && el.textContent!=="Time is up"){ render(); try{ say("Time is up. Put your pen down and upload your pages."); }catch(e){} } else if(left>0) el.textContent = mm(left); }, 1000);
function zoomLayer(){ return S.zoom ? `<div class="zoom" role="dialog" aria-label="Page photo"><button class="btn" data-act="t-zoomclose">Close</button><img src="${S.zoom}" alt="Page photo"></div>` : ""; }
