const C="xsfc-dfc335453380",F=["./", "index.html", "xs-field-calc-0.html", "xs-field-calc.html", "xs-field-calc-2.html", "ca/", "en/", "es/", "pt/", "gl/", "eu/", "fr/", "eo/", "manifest.webmanifest", "xs-field-calc-icon.svg", "xs-field-calc-icon-180.png", "xs-field-calc-icon-192.png", "xs-field-calc-icon-512.png", "xs-field-calc-icon-maskable-512.png"];
const keep=new Set(F.map(f=>new URL(f,self.location).pathname));
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F.map(f=>new Request(f,{cache:"reload"})))).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith("xsfc-")&&x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);
if(u.origin!==self.location.origin||!keep.has(u.pathname))return;
e.respondWith(caches.open(C).then(async c=>{const hit=await c.match(u.pathname,{ignoreSearch:true});
const net=fetch(r).then(res=>{if(res.ok&&res.type==="basic"&&!res.redirected)c.put(u.pathname,res.clone());return res;});
if(hit){e.waitUntil(net.catch(()=>{}));return hit;}return net;}));});
