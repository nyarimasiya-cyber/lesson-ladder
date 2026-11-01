/* Offline support: keeps the app and its notes available without internet.
   Change VERSION whenever you update any file so devices pick up the new copy. */
const VERSION = "lesson-ladder-v34";
const SHELL = ["./","./index.html","./styles.css","./config.js","./content.js","./content-extra.js","./content-grade7.js","./content-grade7-history.js","./content-grade7-maths-a.js","./content-grade7-maths-b.js","./content-grade7-geo.js","./content-grade7-ns-a.js","./content-grade7-ns-b.js","./content-grade7-ns.js","./content-g8-maths.js","./content-g8-ns.js","./content-g8-t4.js","./content-g9-maths.js","./content-g9-ns-a.js","./content-g9-ns-b.js","./content-g89-ss.js","./content-g9-t4.js","./content-g7-eng.js","./content-g7-afr.js","./content-g7-lo.js","./content-g7-ems.js","./content-g7-tech.js","./content-g7-arts.js","./content-g7-his-t4.js","./notes-core.js","./notes-g7-ss.js","./notes-g7-his-a.js","./notes-g7-his-b.js","./notes-g8-his.js","./notes-g9-his.js","./notes-g8-geo.js","./notes-g9-geo.js","./curriculum.js","./app.js","./writing.js","./manifest.webmanifest",
  "./icons/icon-192.png","./icons/icon-512.png","./icons/apple-touch-icon.png"];
const LIBS = ["firebase-app-compat.js","firebase-auth-compat.js","firebase-firestore-compat.js"]
  .map(f=>"https://www.gstatic.com/firebasejs/10.12.2/"+f);

self.addEventListener("install", e=>{
  e.waitUntil(caches.open(VERSION).then(c=>c.addAll(SHELL).then(()=>Promise.all(LIBS.map(u=>c.add(u).catch(()=>{}))))));
  self.skipWaiting();
});
self.addEventListener("activate", e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch", e=>{
  const req = e.request; if(req.method!=="GET") return;
  const url = new URL(req.url);
  const isShell = url.origin===location.origin;
  const isCachedLib = url.href.startsWith("https://www.gstatic.com/firebasejs/") || url.host.endsWith("fonts.googleapis.com") || url.host.endsWith("fonts.gstatic.com");
  if(!isShell && !isCachedLib) return;   // Firebase data requests go straight to the network
  // network first for the app's own files (so updates arrive), cache first for libraries and fonts
  if(isShell){
    e.respondWith(fetch(req).then(res=>{ const copy=res.clone(); caches.open(VERSION).then(c=>c.put(req,copy)); return res; })
      .catch(()=>caches.match(req).then(r=>r || caches.match("./index.html"))));
  } else {
    e.respondWith(caches.match(req).then(r=>r || fetch(req).then(res=>{ const copy=res.clone(); caches.open(VERSION).then(c=>c.put(req,copy)); return res; })));
  }
});
