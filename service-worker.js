const e=location.pathname.split("/").slice(0,-1).join("/"),c=[e+"/_app/immutable/entry/app.Cn80sAPi.js",e+"/_app/immutable/nodes/0.DxRNn2ek.js",e+"/_app/immutable/nodes/1.CU5rndK8.js",e+"/_app/immutable/nodes/10.FaXtHKi0.js",e+"/_app/immutable/nodes/11.DCbI3Vh8.js",e+"/_app/immutable/assets/11.TXeIis2C.css",e+"/_app/immutable/nodes/12.B5AqiE2J.js",e+"/_app/immutable/nodes/13.B7wONbBM.js",e+"/_app/immutable/assets/13.Dt6u5CbB.css",e+"/_app/immutable/nodes/14.CQ_yEWdJ.js",e+"/_app/immutable/nodes/2.COa3SwAx.js",e+"/_app/immutable/nodes/3.Co70vHNc.js",e+"/_app/immutable/nodes/4.BIareawc.js",e+"/_app/immutable/assets/4.CMm9E_Ec.css",e+"/_app/immutable/nodes/5.P6bYzBx3.js",e+"/_app/immutable/nodes/6.BGD2oWQC.js",e+"/_app/immutable/nodes/7.BpEe11r0.js",e+"/_app/immutable/nodes/8.D7zkYiCB.js",e+"/_app/immutable/nodes/9.CCWptRbu.js",e+"/_app/immutable/chunks/7.SbRoBbFt.js",e+"/_app/immutable/chunks/CanvasPool.BUL-nc__.js",e+"/_app/immutable/assets/LoadingSpinner.rRSnnFtd.css",e+"/_app/immutable/chunks/LoadingSpinner.CxygTBZJ.js",e+"/_app/immutable/chunks/SharedSystems.DM0NQ_88.js",e+"/_app/immutable/chunks/Storm.DUuxciWO.js",e+"/_app/immutable/assets/app.DPoU8Gvh.css",e+"/_app/immutable/chunks/app.Cgui-v1U.js",e+"/_app/immutable/chunks/attributes.ClFAMcYJ.js",e+"/_app/immutable/chunks/class.CT2fZM7p.js",e+"/_app/immutable/chunks/colorToUniform.BTBGzFD1.js",e+"/_app/immutable/chunks/control.CYgJF_JY.js",e+"/_app/immutable/chunks/disclose-version.Bg9kRutz.js",e+"/_app/immutable/chunks/each.DHoT2t3W.js",e+"/_app/immutable/chunks/entry.Dh0VuBnu.js",e+"/_app/immutable/chunks/getBatchSamplersUniformGroup.CzWlFi13.js",e+"/_app/immutable/chunks/if.BBPrruah.js",e+"/_app/immutable/chunks/index-client.XNwHMS1C.js",e+"/_app/immutable/chunks/index.CT8Tde97.js",e+"/_app/immutable/chunks/index.g5YcAAdQ.js",e+"/_app/immutable/chunks/paths.jIiee-p2.js",e+"/_app/immutable/chunks/preload-helper.CRk0x-X1.js",e+"/_app/immutable/chunks/props.BXuQdz7u.js",e+"/_app/immutable/chunks/proxy.CKJoFeXp.js",e+"/_app/immutable/chunks/render.CJy_g0Wp.js",e+"/_app/immutable/chunks/runtime.DTLJS4Cp.js",e+"/_app/immutable/chunks/select.C0oBQ22F.js",e+"/_app/immutable/chunks/stores.BA3CZNGU.js",e+"/_app/immutable/chunks/svelte-head.CUqH2DhT.js",e+"/_app/immutable/chunks/template.B2J4WHVd.js",e+"/_app/immutable/chunks/this.CEww6dYY.js",e+"/_app/immutable/entry/start.0FmnWFvz.js",e+"/_app/immutable/chunks/browserAll.FC0xo5nf.js",e+"/_app/immutable/chunks/webworkerAll.BX2tM065.js",e+"/_app/immutable/chunks/WebGLRenderer.CCAjaRHm.js",e+"/_app/immutable/chunks/WebGPURenderer.DjxpF4Lm.js"],l=[e+"/.nojekyll",e+"/apple-touch-icon-180x180.png",e+"/audio/ambient-music.m4a",e+"/audio/and-the-raindrops.mp3",e+"/audio/it-is-raining-outside.mp3",e+"/audio/reverse-bgm.mp3",e+"/audio/sonetto-dialouge-timed.mp3",e+"/audio/sonetto-dialouge.mp3",e+"/audio/sonetto-eek.mp3",e+"/audio/sonetto-gasp.mp3",e+"/audio/timekeeper.mp3",e+"/css/leaderboard.css",e+"/css/main.css",e+"/favicon.ico",e+"/favicon.png",e+"/img/bg/starry-sky.jpeg",e+"/img/character/sonetto.jpg",e+"/img/character/sonetto.webp",e+"/img/character/vertin_reoen.jpeg",e+"/img/character/vertin_reoen.webp",e+"/img/ui/darkness-of-the-abyss.webp",e+"/img/ui/gold-in-the-cave.webp",e+"/img/ui/hypothesis-of-exhibition.webp",e+"/img/ui/marsh-creation.webp",e+"/img/ui/projection-of-nightmare.webp",e+"/jessica-ms-international.gif",e+"/jessica-ms-international.png",e+"/manifest.json",e+"/maskable-icon-512x512.png",e+"/pwa-192x192.png",e+"/pwa-512x512.png",e+"/pwa-64x64.png"],r="1719736106325",m=`cache-${r}`,o=[...c,...l];self.addEventListener("install",s=>{async function p(){await(await caches.open(m)).addAll(o)}s.waitUntil(p())});self.addEventListener("activate",s=>{async function p(){for(const a of await caches.keys())a!==m&&await caches.delete(a)}s.waitUntil(p())});self.addEventListener("fetch",s=>{if(s.request.method!=="GET")return;async function p(){const a=new URL(s.request.url),n=await caches.open(m);if(o.includes(a.pathname)){const t=await n.match(a.pathname);if(t)return t}try{const t=await fetch(s.request),i=a.protocol==="http:"||a.protocol==="https:",u=t.status===200;if(!(t instanceof Response))throw new Error("Invalid response from fetch");return i&&u&&n.put(s.request,t.clone()),t}catch{const i=await n.match(s.request);if(i)return i}return new Response("Not Found",{status:404})}s.respondWith(p())});self.addEventListener("message",s=>{s.data&&s.data.type==="SKIP_WAITING"&&self.skipWaiting()});