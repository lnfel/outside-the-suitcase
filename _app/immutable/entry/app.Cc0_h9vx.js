import{d as at,p as ot,a as x,b as nt,u as st,c as it,g as r,s as q,t as ut,e as B,f as N,h as l,i as X,j as lt,m as P}from"../chunks/runtime.BGm8LMIg.js";import{c as _t,i as C,a as _,b as R,t as mt,d as dt,o as m,e as ct,f as i,g as b}from"../chunks/render.Dki2-gLd.js";import"../chunks/disclose-version.BDr9Qe-U.js";import{o as ft}from"../chunks/main-client.D0lBBaYG.js";function vt(d){return class extends pt{constructor(t){super({component:d,...t})}}}class pt{#t={};#e;constructor(t){this.#e=_t(t.component,{target:t.target,props:{...t.props,$$events:this.#t},context:t.context,immutable:t.immutable,intro:t.intro,recover:t.recover});for(const o of Object.keys(this.#e))o==="$set"||o==="$destroy"||at(this,o,{get(){return this.#e[o]},set(c){this.#e[o]=c},enumerable:!0})}$set(t){this.#e.$set(t)}$on(t,o){this.#t[t]=this.#t[t]||[];const c=(...a)=>o.call(this,...a);return this.#t[t].push(c),()=>{this.#t[t]=this.#t[t].filter(a=>a!==c)}}$destroy(){this.#e.$destroy()}}const gt="modulepreload",ht=function(d,t){return new URL(d,t).href},Y={},s=function(t,o,c){if(!o||o.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(o.map(e=>{if(e=ht(e,c),e in Y)return;Y[e]=!0;const n=e.endsWith(".css"),T=n?'[rel="stylesheet"]':"";if(!!c)for(let p=a.length-1;p>=0;p--){const g=a[p];if(g.href===e&&(!n||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${T}`))return;const u=document.createElement("link");if(u.rel=n?"stylesheet":gt,n||(u.as="script",u.crossOrigin=""),u.href=e,document.head.appendChild(u),n)return new Promise((p,g)=>{u.addEventListener("load",p),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>t()).catch(e=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=e,window.dispatchEvent(n),!n.defaultPrevented)throw e})},Ut={};var Et=i("<!>",!0),Pt=i("<!>",!0),Rt=i("<!>",!0),bt=i("<!>",!0),yt=i("<!>",!0),Lt=i("<!>",!0),Ot=i("<!>",!0),Tt=i("<!>",!0),At=i("<!>",!0),Dt=i(" ",!0),It=i('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Vt=i("<!> <!>",!0);function kt(d,t){ot(t,!0);let o=B(t,"stores"),c=B(t,"page"),a=B(t,"constructors"),e=x(t,"components",()=>[],!0),n=B(t,"form"),T=x(t,"data_0",null,!1),S=x(t,"data_1",null,!1),u=x(t,"data_2",null,!1),p=x(t,"data_3",null,!1);nt(()=>o().page.set(c())),st(()=>{o(),c(),a(),r(e),n(),r(T),r(S),r(u),r(p),o().page.notify()});let g=N(!1),W=N(!1),z=N(null);ft(()=>{const f=o().page.subscribe(()=>{r(g)&&(q(W,!0),ut().then(()=>{q(z,document.title||"untitled page")}))});return q(g,!0),f});var F=m(d,!0,Vt),G=l(F),Z=X(X(G));C(G,()=>a()[1],f=>{var h=m(f,!0,Tt),E=l(h);R(E,()=>a()[0],y=>{b(y(E,{get data(){return r(T)},children:(v,H)=>{var J=m(v,!0,Ot),$=l(J);C($,()=>a()[2],A=>{var D=m(A,!0,yt),I=l(D);R(I,()=>a()[1],j=>{b(j(I,{get data(){return r(S)},children:(L,wt)=>{var K=m(L,!0,bt),tt=l(K);C(tt,()=>a()[3],V=>{var k=m(V,!0,Pt),w=l(k);R(w,()=>a()[2],U=>{b(U(w,{get data(){return r(u)},children:(O,xt)=>{var M=m(O,!0,Et),Q=l(M);R(Q,()=>a()[3],et=>{b(et(Q,{get data(){return r(p)},get form(){return n()}}),rt=>P(e,r(e)[3]=rt))}),_(O,M)}}),O=>P(e,r(e)[2]=O))}),_(V,k)},V=>{var k=m(V,!0,Rt),w=l(k);R(w,()=>a()[2],U=>{b(U(w,{get data(){return r(u)},get form(){return n()}}),O=>P(e,r(e)[2]=O))}),_(V,k)}),_(L,K)}}),L=>P(e,r(e)[1]=L))}),_(A,D)},A=>{var D=m(A,!0,Lt),I=l(D);R(I,()=>a()[1],j=>{b(j(I,{get data(){return r(S)},get form(){return n()}}),L=>P(e,r(e)[1]=L))}),_(A,D)}),_(v,J)}}),v=>P(e,r(e)[0]=v))}),_(f,h)},f=>{var h=m(f,!0,At),E=l(h);R(E,()=>a()[0],y=>{b(y(E,{get data(){return r(T)},get form(){return n()}}),v=>P(e,r(e)[0]=v))}),_(f,h)}),C(Z,()=>r(g),f=>{var h=ct(f,!0,It),E=lt(h);C(E,()=>r(W),y=>{var v=m(y,!0,Dt),H=l(v);mt(H,()=>r(z)),_(y,v)},null),dt(f,h)},null),_(d,F),it()}const qt=vt(kt),Nt=[()=>s(()=>import("../nodes/0.C0ffxoSj.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>s(()=>import("../nodes/1.DdReefdK.js"),__vite__mapDeps([4,1,2,3,5,6,7]),import.meta.url),()=>s(()=>import("../nodes/2.Cg3BDm8R.js"),__vite__mapDeps([8,1,2,3,9]),import.meta.url),()=>s(()=>import("../nodes/3.BJR8KVI-.js"),__vite__mapDeps([10,1,2,3,5,6,7,11,12,9]),import.meta.url),()=>s(()=>import("../nodes/4.rEAv-wna.js"),__vite__mapDeps([13,14,1,2,3,5,6,7,15,16,17]),import.meta.url),()=>s(()=>import("../nodes/5.Oqux0x4v.js"),__vite__mapDeps([18,14,1,2,3]),import.meta.url),()=>s(()=>import("../nodes/6.NGxKzZp8.js"),__vite__mapDeps([19,1,2,3,12,11,7]),import.meta.url),()=>s(()=>import("../nodes/7.7TWuKO5I.js"),__vite__mapDeps([20,1,2,3]),import.meta.url),()=>s(()=>import("../nodes/8.BU_XLzh5.js"),__vite__mapDeps([21,1,2,3]),import.meta.url),()=>s(()=>import("../nodes/9.DXzmi4di.js"),__vite__mapDeps([22,1,2,3,5,6,7,15,16,11,23]),import.meta.url),()=>s(()=>import("../nodes/10.L528MG_8.js"),__vite__mapDeps([24,1,2,3]),import.meta.url),()=>s(()=>import("../nodes/11.C04V1Sgo.js"),__vite__mapDeps([25,1,2]),import.meta.url)],Wt=[],zt={"/(main)":[7,[3]],"/(main)/leaderboard":[8,[3,4]],"/(main)/leaderboard/[raid]":[9,[3,4]],"/(main)/prototype":[-11,[3]],"/(development)/storm":[6,[2]],"/(main)/stream":[11,[3,5]]},Ft={handleError:({error:d})=>{console.error(d)}};export{zt as dictionary,Ft as hooks,Ut as matchers,Nt as nodes,qt as root,Wt as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.C0ffxoSj.js","../chunks/disclose-version.BDr9Qe-U.js","../chunks/runtime.BGm8LMIg.js","../chunks/render.Dki2-gLd.js","../nodes/1.DdReefdK.js","../chunks/stores.VXTfmVCn.js","../chunks/singletons.BK8FGQ4X.js","../chunks/paths.CbgOo8-2.js","../nodes/2.Cg3BDm8R.js","../assets/app.DMgo1lA1.css","../nodes/3.BJR8KVI-.js","../chunks/main-client.D0lBBaYG.js","../chunks/Storm.CGPhEyq3.js","../nodes/4.rEAv-wna.js","../chunks/index.CwO1EkJR.js","../chunks/LoadingSpinner.BdmcHRnp.js","../assets/LoadingSpinner.rRSnnFtd.css","../assets/4.CMm9E_Ec.css","../nodes/5.Oqux0x4v.js","../nodes/6.NGxKzZp8.js","../nodes/7.7TWuKO5I.js","../nodes/8.BU_XLzh5.js","../nodes/9.DXzmi4di.js","../assets/9.CDgllIFo.css","../nodes/10.L528MG_8.js","../nodes/11.C04V1Sgo.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}