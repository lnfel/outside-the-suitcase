const e=location.pathname.split("/").slice(0,-1).join("/"),c=[e+"/_app/immutable/entry/app.sQZuaWIq.js",e+"/_app/immutable/nodes/0.DxRNn2ek.js",e+"/_app/immutable/nodes/1.CrXVrUFN.js",e+"/_app/immutable/nodes/10.FaXtHKi0.js",e+"/_app/immutable/nodes/11.D4z1-FYS.js",e+"/_app/immutable/assets/11.TXeIis2C.css",e+"/_app/immutable/nodes/12.DHgcBYSR.js",e+"/_app/immutable/nodes/13.CpMv2Kzx.js",e+"/_app/immutable/assets/13.Dt6u5CbB.css",e+"/_app/immutable/nodes/14.CQ_yEWdJ.js",e+"/_app/immutable/nodes/2.COa3SwAx.js",e+"/_app/immutable/nodes/3.O_dDFJw2.js",e+"/_app/immutable/nodes/4.DaXLeN5b.js",e+"/_app/immutable/assets/4.CMm9E_Ec.css",e+"/_app/immutable/nodes/5.BmJXw6ca.js",e+"/_app/immutable/nodes/6.C_YuZ6Z_.js",e+"/_app/immutable/nodes/7.B1KzHJHY.js",e+"/_app/immutable/nodes/8.D7zkYiCB.js",e+"/_app/immutable/nodes/9.CCWptRbu.js",e+"/_app/immutable/chunks/7.zzeZPPca.js",e+"/_app/immutable/chunks/CanvasPool.CzGKFkc6.js",e+"/_app/immutable/assets/LoadingSpinner.rRSnnFtd.css",e+"/_app/immutable/chunks/LoadingSpinner.CxygTBZJ.js",e+"/_app/immutable/chunks/SharedSystems.BFMTHstL.js",e+"/_app/immutable/chunks/Storm.Cs1ntoBa.js",e+"/_app/immutable/assets/app.DPoU8Gvh.css",e+"/_app/immutable/chunks/app.Cgui-v1U.js",e+"/_app/immutable/chunks/attributes.ClFAMcYJ.js",e+"/_app/immutable/chunks/class.CT2fZM7p.js",e+"/_app/immutable/chunks/colorToUniform.DKFu6RrP.js",e+"/_app/immutable/chunks/control.CYgJF_JY.js",e+"/_app/immutable/chunks/disclose-version.Bg9kRutz.js",e+"/_app/immutable/chunks/each.DHoT2t3W.js",e+"/_app/immutable/chunks/entry.CDLxXgY1.js",e+"/_app/immutable/chunks/getBatchSamplersUniformGroup.CDzmkwen.js",e+"/_app/immutable/chunks/if.BBPrruah.js",e+"/_app/immutable/chunks/index-client.XNwHMS1C.js",e+"/_app/immutable/chunks/index.CT8Tde97.js",e+"/_app/immutable/chunks/index.g5YcAAdQ.js",e+"/_app/immutable/chunks/paths.DeeBLGbP.js",e+"/_app/immutable/chunks/preload-helper.CRk0x-X1.js",e+"/_app/immutable/chunks/props.BXuQdz7u.js",e+"/_app/immutable/chunks/proxy.CKJoFeXp.js",e+"/_app/immutable/chunks/render.CJy_g0Wp.js",e+"/_app/immutable/chunks/runtime.DTLJS4Cp.js",e+"/_app/immutable/chunks/select.C0oBQ22F.js",e+"/_app/immutable/chunks/stores.CezI3mlT.js",e+"/_app/immutable/chunks/svelte-head.CUqH2DhT.js",e+"/_app/immutable/chunks/template.B2J4WHVd.js",e+"/_app/immutable/chunks/this.CEww6dYY.js",e+"/_app/immutable/entry/start.Dl2S_ybu.js",e+"/_app/immutable/chunks/browserAll.Br5-NEoK.js",e+"/_app/immutable/chunks/webworkerAll.DBNJ_3n6.js",e+"/_app/immutable/chunks/WebGLRenderer.BctuUzUj.js",e+"/_app/immutable/chunks/WebGPURenderer.BQxPu9Qw.js"],l=[e+"/.nojekyll",e+"/apple-touch-icon-180x180.png",e+"/audio/ambient-music.m4a",e+"/audio/and-the-raindrops.mp3",e+"/audio/it-is-raining-outside.mp3",e+"/audio/reverse-bgm.mp3",e+"/audio/sonetto-dialouge-timed.mp3",e+"/audio/sonetto-dialouge.mp3",e+"/audio/sonetto-eek.mp3",e+"/audio/sonetto-gasp.mp3",e+"/audio/timekeeper.mp3",e+"/css/leaderboard.css",e+"/css/main.css",e+"/favicon.ico",e+"/favicon.png",e+"/img/bg/starry-sky.jpeg",e+"/img/character/sonetto.jpg",e+"/img/character/sonetto.webp",e+"/img/character/vertin_reoen.jpeg",e+"/img/character/vertin_reoen.webp",e+"/img/ui/darkness-of-the-abyss.webp",e+"/img/ui/gold-in-the-cave.webp",e+"/img/ui/hypothesis-of-exhibition.webp",e+"/img/ui/marsh-creation.webp",e+"/img/ui/projection-of-nightmare.webp",e+"/jessica-ms-international.gif",e+"/jessica-ms-international.png",e+"/manifest.json",e+"/maskable-icon-512x512.png",e+"/pwa-192x192.png",e+"/pwa-512x512.png",e+"/pwa-64x64.png"],r="1719740034909",m=`cache-${r}`,o=[...c,...l];self.addEventListener("install",s=>{async function i(){const t=await caches.open(m),p=[];o.forEach(a=>{p.push(t.add(a).catch(()=>console.error(`Can't load ${a} to cache.`)))}),await Promise.all(p)}s.waitUntil(i())});self.addEventListener("activate",s=>{async function i(){for(const t of await caches.keys())t!==m&&await caches.delete(t)}s.waitUntil(i())});self.addEventListener("fetch",s=>{if(s.request.method!=="GET")return;async function i(){const t=new URL(s.request.url),p=await caches.open(m);if(o.includes(t.pathname)){const a=await p.match(t.pathname);if(a)return a}try{const a=await fetch(s.request),n=t.protocol==="http:"||t.protocol==="https:",u=a.status===200;if(!(a instanceof Response))throw new Error("Invalid response from fetch");return n&&u&&p.put(s.request,a.clone()),a}catch{const n=await p.match(s.request);if(n)return n}return new Response("Not Found",{status:404})}s.respondWith(i())});self.addEventListener("message",s=>{s.data&&s.data.type==="SKIP_WAITING"&&self.skipWaiting()});
