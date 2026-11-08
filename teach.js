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
    const f = T.fams[c] = {learners:[], lessons:[], unsubs:[]};
    ["learners","lessons"].forEach(kind=>{
      f.unsubs.push(famDoc(c).collection(kind).onSnapshot(snap=>{ f[kind] = snap.docs.map(d=>({id:d.id, ...d.data()})); if(["teacher","tmark"].includes(S.view)) softRender(); }, ()=>{}));
    });
  });
}
function allStudents(){
  const out = S.learners.map(l=>({code:S.code, fam:"Your family", l}));
  (S.links||[]).forEach(x=>{ const f = T.fams[x.id]; if(f) f.learners.forEach(l=>out.push({code:x.id, fam:x.label||"Linked family", l})); });
  return out;
}
const lessonsOf = code => code===S.code ? (S.lessons||[]) : (T.fams[code]?.lessons || []);
function allLessons(){ const out=[]; allStudents().forEach(s=>lessonsOf(s.code).filter(x=>x.learnerId===s.l.id).forEach(x=>out.push({...s, x}))); return out.sort((a,b)=>(b.x.assignedAt||0)-(a.x.assignedAt||0)); }
function saveLesson(code, x){ const {id, ...data} = x; famDoc(code).collection("lessons").doc(id).set(data).catch(()=>{ S.note="The lesson didn't save. Check your connection."; render(); }); }

/* ----- status ----- */
const LSTATUS = {assigned:["New","p-warn"], started:["In progress","p-warn"], submitted:["Waiting for marking","p-none"], marked:["Marked","p-good"], redo:["Redo requested","p-bad"]};
const lstatus = x => LSTATUS[x.status] || LSTATUS.assigned;
const minsTaken = x => x.testStartedAt && x.submittedAt ? Math.round((x.submittedAt - x.testStartedAt)/60000) : null;
function praiseFor(pct){ return pct>=80 ? "Excellent work!" : pct>=60 ? "Good work!" : pct>=40 ? "Well tried, keep practising!" : "Good effort. Go over the notes and try again."; }

/* ---------- learner side ---------- */
function lessonCards(l){
  const mine = (S.lessons||[]).filter(x=>x.learnerId===l.id).sort((a,b)=>b.assignedAt-a.assignedAt);
  if(!mine.length) return "";
  return `<h2 class="h2s">📘 From your teacher</h2><div class="topiclist" style="margin-bottom:20px">${mine.slice(0,4).map(x=>{ const L = LESSONS[x.lessonKey]; const [st,cls] = lstatus(x);
    return `<button class="tcard" data-act="l-open" data-id="${esc(x.id)}"><span class="eyebrow">${esc(sname(L.subject, l.grade))} · teacher lesson</span><h3>${esc(L.title)}</h3>
      <span class="meta"><span class="muted">${x.status==="marked"?`Mark: ${x.mark}/${L.outOf}`:fmtDate(x.assignedAt)}</span><span class="pill ${cls}">${st}</span></span></button>`;}).join("")}</div>`;
}
function curLesson(){ return (S.lessons||[]).find(x=>x.id===S.lessonId); }
function vLesson(){
  const x = curLesson(), l = learner(); if(!x || !l) return vHome();
  const L = LESSONS[x.lessonKey], tab = S.ltab || "notes";
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
function timeLeft(x, L){ return Math.max(0, Math.round(L.minutes*60 - (Date.now() - x.testStartedAt)/1000)); }
function lessonTest(x, L){
  const items = lessonTestItems(L), pages = x.pages || [];
  if(x.status==="marked"){
    const pct = Math.round(x.mark/L.outOf*100);
    return `<div class="score"><div class="big">${x.mark}<small>/${L.outOf}</small></div><div><div style="font-weight:700;font-size:20px">${pct}% · Level ${level(pct)[0]}</div><div class="muted">${praiseFor(pct)} Marked on ${fmtDate(x.markedAt)}.</div></div></div>
    ${markSummary(x)}${pageStrip(x)}`;
  }
  if(x.status==="submitted") return `<div class="banner"><b>Submitted.</b> You handed in ${pages.length} page${pages.length===1?"":"s"} on ${fmtDate(x.submittedAt)}${minsTaken(x)!=null?`, after ${minsTaken(x)} minutes`:""}. Your teacher will mark it and you'll see your mark and comments here.</div>${pageStrip(x)}`;
  if(!x.testStartedAt && x.status!=="redo") return `<article class="notes">${L.testIntro}</article>
    <div class="banner"><b>Method is everything.</b> Show every step. Your work must be neat.</div>
    <div class="cta"><button class="btn" data-act="l-start">Start the ${L.minutes}-minute test</button></div>
    <p class="muted">The timer starts when you press the button. Have paper, a pen, a pencil, a ruler and a protractor ready.</p>`;
  const left = x.status==="redo" ? null : timeLeft(x, L);
  return `${x.status==="redo"?`<div class="banner"><b>Your teacher asked you to redo this.</b> ${esc(x.feedback||"")} Fix your work, take new photos and submit again.</div>`
    : `<div class="timer ${left===0?"over":""}" aria-live="polite"><span>⏱</span><b id="ltimer">${left===0?"Time is up":mm(left)}</b><span class="muted">${left===0?"Put your pen down and upload your pages.":"left"}</span></div>`}
  <article class="notes ltest">${L.testIntro}${items.map(it=>it.head ? it.head : `<p class="tq"><b>${it.n}.</b> ${it.q}</p>`).join("")}</article>
  <h2 class="h2s">Upload your written work</h2>
  <p class="muted">Take a clear, well-lit photo of each page, in order. Make sure the whole page is in the photo and the writing is sharp.</p>
  ${pageStrip(x, true)}
  <label class="btn ghost upl">📷 Add a photo of a page<input type="file" id="lupload" accept="image/*" multiple hidden></label>
  ${T.busy?`<p class="muted">Uploading…</p>`:""}
  <div class="cta"><button class="btn" data-act="l-submit" ${pages.length?"":"disabled"}>Submit my test (${pages.length} page${pages.length===1?"":"s"})</button></div>`;
}
function pageStrip(x, canRemove){
  const pages = x.pages || []; if(!pages.length) return "";
  loadPages(S.code, pages);
  return `<div class="pages">${pages.map((p,i)=>`<figure>${T.pages[p]?`<a href="#" data-act="l-zoom" data-p="${p}"><img src="${T.pages[p]}" alt="Page ${i+1}"></a>`:`<div class="ph">Loading…</div>`}<figcaption>Page ${i+1}${canRemove?` · <button class="linkbtn" data-act="l-rmpage" data-p="${p}">Remove</button>`:""}</figcaption></figure>`).join("")}</div>`;
}
function markSummary(x){
  return `<div class="panel"><h3 style="margin:0 0 6px">Teacher's feedback</h3>
    ${x.method?`<p style="margin:0"><b>Method:</b> ${esc(x.method)}</p>`:""}${x.neatness?`<p style="margin:0"><b>Neatness:</b> ${esc(x.neatness)}</p>`:""}
    ${x.feedback?`<p style="margin:8px 0 0">${esc(x.feedback)}</p>`:""}</div>`;
}

/* load page images from any family on demand */
function loadPages(code, ids){
  const need = ids.filter(p=>!(p in T.pages)); if(!need.length) return;
  need.forEach(p=>{ T.pages[p] = null;
    famDoc(code).collection("pages").doc(p).get().then(d=>{ T.pages[p] = d.exists ? d.data().img : ""; render(); }).catch(()=>{ T.pages[p] = ""; }); });
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
  if(e.target.id!=="lupload") return;
  const x = curLesson(); if(!x) return;
  const files = [...e.target.files]; if(!files.length) return;
  T.busy = true; render();
  for(const f of files){
    try{ const img = await compress(f), pid = `${x.id}_${uid()}`;
      T.pages[pid] = img;
      await famRef.collection("pages").doc(pid).set({lessonId:x.id, img, at:Date.now()});
      x.pages = [...(x.pages||[]), pid]; saveLesson(S.code, x);
    }catch(err){ S.note = "One photo couldn't be added. Try taking it again."; }
  }
  T.busy = false; render();
});

/* ---------- teacher side ---------- */
function vTeacher(){
  const studs = allStudents(), lessons = allLessons(), toMark = lessons.filter(o=>o.x.status==="submitted");
  const opts = studs.map((s,i)=>`<option value="${i}">${esc(s.l.name)} (Grade ${gradeLabel(s.l.grade)}) · ${esc(s.fam)}</option>`).join("");
  const sel = studs[+(S.tstud||0)];
  const lopts = Object.entries(LESSONS).filter(([k,L])=>!sel || +sel.l.grade===L.grade).map(([k,L])=>`<option value="${k}">${esc(L.title)}</option>`).join("");
  return `${crumbs([{act:"parent",label:"Parent"},{label:"Teacher"}])}
  <h1 class="pagetitle">Teacher</h1>
  <h2 class="h2s">Work to mark ${toMark.length?`<span class="pill p-bad">${toMark.length}</span>`:""}</h2>
  ${toMark.length?`<div class="topiclist">${toMark.map(o=>`<button class="tcard" data-act="t-mark" data-c="${o.code}" data-id="${esc(o.x.id)}"><b>${esc(o.l.name)}</b><span class="muted">${esc(LESSONS[o.x.lessonKey].title)}</span><span class="muted">Submitted ${fmtDate(o.x.submittedAt)} · ${(o.x.pages||[]).length} pages${minsTaken(o.x)!=null?` · ${minsTaken(o.x)} min`:""}</span></button>`).join("")}</div>`:`<p class="muted">Nothing to mark right now.</p>`}
  <h2 class="h2s">Give a lesson</h2>
  ${studs.length?`<form class="form" id="assignForm">
    <label for="t-stud">Student<select id="t-stud">${opts}</select></label>
    <label for="t-lesson">Lesson<select id="t-lesson">${lopts||`<option value="">No lessons for this grade yet</option>`}</select></label>
    <label for="t-msg">Message to the student (optional)<textarea id="t-msg" rows="2" maxlength="300" placeholder="e.g. Do this before Friday. Remember: neat work and show your method."></textarea></label>
    <div><button class="btn" type="submit" ${lopts?"":"disabled"}>Give this lesson</button></div></form>`:`<p class="muted">Add a learner or link a family first.</p>`}
  ${lessons.length?`<h2 class="h2s">All lessons</h2><div class="feed">${lessons.map(o=>{const [st,cls]=lstatus(o.x), L=LESSONS[o.x.lessonKey]; return `<div><span><b>${esc(o.l.name)}</b> · ${esc(L.title.split(":")[0])}<br><span class="muted" style="font-size:13px">Given ${fmtDate(o.x.assignedAt)}${o.x.status==="marked"?` · ${o.x.mark}/${L.outOf}`:""}</span></span><span class="row" style="gap:8px"><span class="pill ${cls}">${st}</span>${["submitted","marked","redo"].includes(o.x.status)?`<button class="linkbtn" data-act="t-mark" data-c="${o.code}" data-id="${esc(o.x.id)}">Open</button>`:""}</span></div>`;}).join("")}</div>`:""}
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
  const st = allStudents().find(s=>s.code===code && s.l.id===x.learnerId), L = LESSONS[x.lessonKey];
  loadPages(code, x.pages||[]);
  const ex = x.ex || {}, exN = Object.keys(ex).length, exR = Object.values(ex).filter(Boolean).length;
  const CHIPS = ["Excellent work!","Good work!","Well tried!","Show all your method.","Work must be neat.","Use a ruler for graphs and tables.","Check your calculations.","Label your graph and give it a title.","Do your corrections."];
  const over = minsTaken(x)!=null && minsTaken(x) > L.minutes;
  return `${crumbs([{act:"parent",label:"Parent"},{act:"teacher",label:"Teacher"},{label:st?st.l.name:"Lesson"}])}
  <h1 class="pagetitle">${esc(st?st.l.name:"")} · ${esc(L.title.split(":")[0])}</h1>
  <div class="strip">
    <div class="stat"><div class="eyebrow">Practice</div><div class="v">${exR}/5</div><div class="muted" style="font-size:13px">right first time (${exN}/5 done)</div></div>
    <div class="stat"><div class="eyebrow">Test time</div><div class="v">${minsTaken(x)!=null?minsTaken(x)+" min":"–"}</div><div class="muted" style="font-size:13px">${over?`<span class="warnword">over the ${L.minutes} min</span>`:`limit ${L.minutes} min`}</div></div>
    <div class="stat"><div class="eyebrow">Pages</div><div class="v">${(x.pages||[]).length}</div></div>
  </div>
  <h2 class="h2s">His written work</h2>
  ${(x.pages||[]).length?`<div class="pages big">${x.pages.map((p,i)=>`<figure>${T.pages[p]?`<a href="#" data-act="l-zoom" data-p="${p}"><img src="${T.pages[p]}" alt="Page ${i+1}"></a>`:`<div class="ph">Loading…</div>`}<figcaption>Page ${i+1} · tap to enlarge</figcaption></figure>`).join("")}</div>`:`<p class="muted">No pages uploaded.</p>`}
  <details class="more"><summary>Memo (answers for marking)</summary><ol class="memo">${L.memo.map(m=>`<li>${esc(m)}</li>`).join("")}</ol></details>
  <h2 class="h2s">Mark and feedback</h2>
  <form class="form" id="markForm">
    <label for="m-mark">Mark out of ${L.outOf}<input id="m-mark" type="number" min="0" max="${L.outOf}" inputmode="numeric" value="${x.mark??""}" required></label>
    <label for="m-method">Method<select id="m-method">${["","Shown clearly","Partly shown","Not shown"].map(v=>`<option ${x.method===v?"selected":""} value="${v}">${v||"Choose…"}</option>`).join("")}</select></label>
    <label for="m-neat">Neatness<select id="m-neat">${["","Neat","Fairly neat","Untidy"].map(v=>`<option ${x.neatness===v?"selected":""} value="${v}">${v||"Choose…"}</option>`).join("")}</select></label>
    <div class="chips">${CHIPS.map(c=>`<button type="button" class="chip" data-act="t-chip" data-t="${esc(c)}">${esc(c)}</button>`).join("")}</div>
    <label for="m-fb">Comments for the student and parent<textarea id="m-fb" rows="4" maxlength="1000">${esc(x.feedback||"")}</textarea></label>
    <div class="row"><button class="btn" type="submit">Save mark</button><button class="btn ghost" type="button" data-act="t-redo">Ask him to redo it</button></div>
  </form>`;
}

/* ---------- parent view ---------- */
function vPLessons(k){
  const mine = (S.lessons||[]).filter(x=>x.learnerId===k.id).sort((a,b)=>b.assignedAt-a.assignedAt);
  if(!mine.length) return "";
  return `<h2 class="h2s">Lessons from the teacher</h2><div class="topiclist">${mine.map(x=>{ const L = LESSONS[x.lessonKey], [st,cls] = lstatus(x), ex = x.ex||{};
    const open = S.plopen===x.id;
    return `<div class="tcard static"><span class="meta"><b>${esc(L.title)}</b><span class="pill ${cls}">${st}</span></span>
      <span class="muted" style="font-size:14px">Given ${fmtDate(x.assignedAt)} · practice ${Object.values(ex).filter(Boolean).length}/5 right first time${minsTaken(x)!=null?` · test took ${minsTaken(x)} min`:""}${x.status==="marked"?` · <b>Mark ${x.mark}/${L.outOf} (${Math.round(x.mark/L.outOf*100)}%)</b>`:""}</span>
      ${x.status==="marked"||x.status==="redo" ? markSummary(x) : ""}
      ${(x.pages||[]).length ? (open ? pageStrip(x) : `<button class="linkbtn" data-act="p-pages" data-id="${esc(x.id)}">See his written work (${x.pages.length} pages)</button>`) : ""}
    </div>`;}).join("")}</div>`;
}

/* ---------- events ---------- */
document.addEventListener("click", e=>{
  const b = e.target.closest("[data-act^='l-'],[data-act^='t-'],[data-act^='p-pages']"); if(!b) return;
  const act = b.dataset.act;
  if(act==="l-open"){ S.lessonId = b.dataset.id; S.ltab = "notes"; S.lnpage = 0; S.ltried = {}; go("lesson"); }
  else if(act==="l-tab"){ S.ltab = b.dataset.t; render(); window.scrollTo(0,0); }
  else if(act==="l-npage"){ S.lnpage = +b.dataset.p; render(); document.querySelector(".notes")?.scrollIntoView({block:"start"}); }
  else if(act==="l-pick"){
    const x = curLesson(), L = LESSONS[x.lessonKey], qi = +b.dataset.q, oi = +b.dataset.o, q = L.practice[qi];
    S.ltried = S.ltried || {}; const tr = S.ltried[qi] = S.ltried[qi] || [];
    if(oi===q.a){ x.ex = {...(x.ex||{}), [qi]: tr.length===0}; if(x.status==="assigned") x.status = "started"; saveLesson(S.code, x); }
    else tr.push(oi);
    render();
  }
  else if(act==="l-start"){ const x = curLesson(); x.testStartedAt = Date.now(); x.status = "started"; saveLesson(S.code, x); render(); window.scrollTo(0,0); }
  else if(act==="l-rmpage"){ const x = curLesson(), p = b.dataset.p; x.pages = (x.pages||[]).filter(i=>i!==p); saveLesson(S.code, x); famRef.collection("pages").doc(p).delete().catch(()=>{}); render(); }
  else if(act==="l-submit"){ const x = curLesson(); if(!(x.pages||[]).length) return; x.status = "submitted"; x.submittedAt = Date.now(); saveLesson(S.code, x); render(); window.scrollTo(0,0); }
  else if(act==="l-zoom"){ e.preventDefault(); const src = T.pages[b.dataset.p]; if(src){ S.zoom = src; render(); } }
  else if(act==="t-zoomclose"){ S.zoom = null; render(); }
  else if(act==="t-mark"){ S.tsel = {code:b.dataset.c, id:b.dataset.id}; go("tmark"); }
  else if(act==="t-chip"){ const ta = document.getElementById("m-fb"); ta.value = (ta.value ? ta.value.trim()+" " : "") + b.dataset.t; }
  else if(act==="t-redo"){ const {code,id} = S.tsel, x = findLesson(code,id); x.status = "redo"; x.feedback = document.getElementById("m-fb").value.trim(); x.method = document.getElementById("m-method").value; x.neatness = document.getElementById("m-neat").value; saveLesson(code, x); go("teacher"); S.note = "Sent back for redoing."; render(); }
  else if(act==="t-unlink"){ famRef.collection("links").doc(b.dataset.c).delete().catch(()=>{}); }
  else if(act==="p-pages"){ S.plopen = b.dataset.id; render(); }
});
document.addEventListener("change", e=>{ if(e.target.id==="t-stud"){ S.tstud = +e.target.value; render(); } });
document.addEventListener("submit", async e=>{
  if(e.target.id==="assignForm"){
    e.preventDefault();
    const s = allStudents()[+document.getElementById("t-stud").value], key = document.getElementById("t-lesson").value;
    if(!s || !LESSONS[key]) return;
    const x = {id:uid(), learnerId:s.l.id, lessonKey:key, msg:document.getElementById("t-msg").value.trim(), assignedAt:Date.now(), status:"assigned", ex:{}, pages:[]};
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
  if(e.target.id==="markForm"){
    e.preventDefault();
    const {code,id} = S.tsel, x = findLesson(code,id), L = LESSONS[x.lessonKey], m = Math.max(0, Math.min(L.outOf, Math.round(+document.getElementById("m-mark").value)));
    Object.assign(x, {mark:m, method:document.getElementById("m-method").value, neatness:document.getElementById("m-neat").value, feedback:document.getElementById("m-fb").value.trim(), status:"marked", markedAt:Date.now()});
    saveLesson(code, x); go("teacher"); S.note = "Mark saved. The student and parent can see it now."; render();
  }
});
/* live test timer */
setInterval(()=>{ const el = document.getElementById("ltimer"); if(!el) return; const x = curLesson(); if(!x || !x.testStartedAt) return; const L = LESSONS[x.lessonKey], left = timeLeft(x, L);
  if(left===0 && el.textContent!=="Time is up"){ render(); try{ say("Time is up. Put your pen down and upload your pages."); }catch(e){} } else if(left>0) el.textContent = mm(left); }, 1000);
function zoomLayer(){ return S.zoom ? `<div class="zoom" role="dialog" aria-label="Page photo"><button class="btn" data-act="t-zoomclose">Close</button><img src="${S.zoom}" alt="Page photo"></div>` : ""; }
