import"./disclose-version.Bg9kRutz.js";import{p as N,t as j,a as L,s as m,b as w,g as o}from"./runtime.DTLJS4Cp.js";import{d as P,s as B}from"./render.CJy_g0Wp.js";import{p as I}from"./proxy.CKJoFeXp.js";import{a as D,t as J,s as x,c as k,f as K}from"./template.B2J4WHVd.js";import{s as Q,h as U}from"./attributes.ClFAMcYJ.js";import{s as q,t as V}from"./class.CT2fZM7p.js";import{b as X}from"./this.CEww6dYY.js";import{p as Y}from"./props.BXuQdz7u.js";import{o as Z}from"./index-client.XNwHMS1C.js";import{b as T}from"./paths.CRYv4rsm.js";function tt(M,u,h,s,n){m(u,!0);const l=["Timekeeper","It's raining outside.","and the raindrops...","*Gasp*","Eeeek!"],g=1;function c(e,v,p){return e<=v&&e>=p}function i(e){const v=performance.now(),p=e.length*60/g;function f(){const b=window.requestAnimationFrame(f),_=performance.now(),y=Math.trunc(e.length*(_-v)/p);o(h)!==e?m(h,I(e.slice(0,y))):window.cancelAnimationFrame(b)}f()}function r(){m(s,I(window.requestAnimationFrame(r))),o(u)?(c(o(n),8e3,6e3)&&i(l[0]),c(o(n),6e3,4e3)&&i(l[1]),c(o(n),4e3,2e3)&&i(l[2]),c(o(n),2e3,500)&&i(l[3]),c(o(n),500,0)&&i(l[4])):(cancelAnimationFrame(o(s)),setTimeout(e=>{m(h,""),e.blur()},2e3,M.target))}r()}var et=J('<div></div> <div><span class="dialouge crimson-text-regular text-sm"> </span> <button type="button" class="outline-none hover:opacity-100 focus:opacity-100 transition-opacity"><img alt="Sonetto" loading="lazy" class="w-10 h-10 rounded-full overflow-hidden pointer-events-none"></button></div>',1);function pt(M,u){N(u,!0);let h=Y(u,"class",3,""),s,n,l,g,c,i=w(8e3),r=0,e=[],v=.5,p=300,f=w(!1),b=w(""),_=w(0);function y(t,a){const d=a.clientWidth,H=a.clientHeight;t&&(l=t.width=Math.max(500,d),g=t.height=Math.max(320,H)),a.style.left=a.style.right=a.style.top=a.style.bottom="0"}function z(){e=[];for(let t=p-1;t>=0;t--)e.push({x:Math.floor(Math.random()*document.documentElement.clientWidth+9),y:0,z:0});for(let t=0;t<p;t++)e[t].x=Math.floor(Math.random()*document.documentElement.clientWidth+9),e[t].y=Math.floor(Math.random()*s.clientHeight+9),e[t].z=Math.floor(Math.random()*2+1),e[t].w=Math.floor(Math.random()*3+2)}function O(){var t;for(let a=0;a<p;a++){e[a].y<=0&&(e[a].y+=s.clientHeight),e[a].x<-10?e[a].x+=l:e[a].y-=Number(((t=e[a])==null?void 0:t.w)??1)*v;const d=n.createRadialGradient(250,450,140,250,300,600);localStorage.getItem("ots:theme")==="dark"?(d.addColorStop(0,"rgba(100, 170, 160, 0.2)"),d.addColorStop(.1,"rgba(100, 160, 160, 0.12)"),d.addColorStop(.2,"rgba(100, 150, 150, 0.1)"),d.addColorStop(1,"rgba(100, 140, 140, .08)")):d.addColorStop(0,"rgba(0, 0, 0, 0.2)"),n.fillStyle=d,n.fillRect(e[a].x,e[a].y,e[a].z,4)}}function $(t){o(f)&&(r=0,t>350?r=(500-t)*.004:t<350&&t>250?r=(t-250)*.006:t<250&&t>=100?r=(250-t)*.004:t<100&&t>=0&&(r=t*.006,m(f,!1),m(i,8e3)),r>0&&(n.fillStyle=localStorage.getItem("ots:theme")==="dark"?`rgba(250, 250, 245, ${r})`:`rgba(0, 0, 0, ${r})`,n.fillRect(0,0,l,g)))}function W(){const t=document.querySelector("canvas");t&&s&&y(t,s),o(f)&&(o(i)<0?m(i,8e3):m(i,o(i)-15)),c=localStorage.getItem("ots:theme")==="dark"?"#0f172a":"#ffffff",n.fillStyle=c,n.fillRect(0,0,l,g),O(),o(i)<500&&$(o(i)),window.requestAnimationFrame(W)}Z(()=>{const t=document.createElement("div"),a=document.createElement("canvas");c=localStorage.getItem("ots:theme")==="dark"?"#0f172a":"#ffffff",new ResizeObserver(H=>{e=[],z()}).observe(s),n=a.getContext("2d",{alpha:!1}),s.appendChild(t),t.style.position="fixed",t.appendChild(a),y(a,s),z(),W()});var A=et(),C=K(A);X(C,t=>s=t,()=>s);var R=x(x(C,!0)),F=k(R),G=k(F),S=x(x(F,!0));S.__click=[tt,f,b,_,i];var E=k(S);Q(E,"src",`${T??""}/img/character/sonetto.webp`),j(()=>{q(C,`rain-container fixed inset-0 -z-10 pointer-events-none ${h()??""}`),q(R,`fixed top-6 z-10 right-10 md:right-20 flex items-center gap-2 ${h()??""}`),B(G,o(b)),S.disabled=o(f),V(S,"opacity-20",!o(f))}),U(E),D(M,A),L()}P(["click"]);export{pt as S};
//# sourceMappingURL=Storm.DS4glKpA.js.map
