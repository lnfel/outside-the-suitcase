import{e as D,j as m,d as L,m as T,k as A,l as H,i as N}from"./template.DJK7smhD.js";import{$,H as C,o as k,K as I,a5 as w,a6 as M,a7 as P,a8 as V,a9 as E,c as Y,p as j,a as q,v as B}from"./runtime.C2Zc6Vci.js";import{r as K}from"./svelte-head.D4WIdBQT.js";function J(n){for(var a=0;a<n.length;a++)O.add(n[a]);for(var t of y)t(n)}function R(n,a){var b;var t=n.ownerDocument,s=a.type,e=((b=a.composedPath)==null?void 0:b.call(a))||[],r=e[0]||a.target,l=0,d=a.__root;if(d){var c=e.indexOf(d);if(c!==-1&&(n===document||n===window)){a.__root=n;return}var p=e.indexOf(n);if(p===-1)return;c<=p&&(l=c)}if(r=e[l]||a.target,r!==n){$(a,"currentTarget",{configurable:!0,get(){return r||t}});try{for(var i,f=[];r!==null;){var _=r.parentNode||r.host||null;try{var o=r["__"+s];if(o!==void 0&&!r.disabled)if(C(o)){var[h,...u]=o;h.apply(r,[a,...u])}else o.call(r,a)}catch(v){i?f.push(v):i=v}if(a.cancelBubble||_===n||_===null)break;r=_}if(i){for(let v of f)queueMicrotask(()=>{throw v});throw i}}finally{a.__root=n,r=n}}}const O=new Set,y=new Set;function Q(n,a){(n.__t??(n.__t=n.nodeValue))!==a&&(n.nodeValue=n.__t=a)}function U(n,a,t,s){a===void 0||a(n,t)}function W(n,a){const t=a.anchor??a.target.appendChild(D());return k(()=>S(n,{...a,anchor:t}),!1)}function X(n,a){const t=a.target,s=N;try{return k(()=>{m(!0);for(var e=t.firstChild;e&&(e.nodeType!==8||e.data!==I);)e=e.nextSibling;if(!e)throw w;const r=L(e),l=S(n,{...a,anchor:r});return m(!1),l},!1)}catch(e){if(e===w)return a.recover===!1&&M(),T(),A(t),m(!1),W(n,a);throw e}finally{m(!!s),H(s),K()}}function S(n,{target:a,anchor:t,props:s={},events:e,context:r,intro:l=!1}){T();const d=new Set,c=R.bind(null,a),p=R.bind(null,document),i=o=>{for(let h=0;h<o.length;h++){const u=o[h];d.has(u)||(d.add(u),a.addEventListener(u,c,E.includes(u)?{passive:!0}:void 0),document.addEventListener(u,p,E.includes(u)?{passive:!0}:void 0))}};i(P(O)),y.add(i);let f;const _=V(()=>(Y(()=>{if(r){j({});var o=B;o.c=r}e&&(s.$$events=e),f=n(t,s)||{},r&&q()}),()=>{for(const o of d)a.removeEventListener(o,c),document.removeEventListener(o,c);y.delete(i),g.delete(f)}));return g.set(f,_),f}let g=new WeakMap;function Z(n){const a=g.get(n);a==null||a()}export{U as a,J as d,X as h,W as m,Q as s,Z as u};
//# sourceMappingURL=render.BSFr2KKI.js.map
