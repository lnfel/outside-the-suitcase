import"./disclose-version.Bg9kRutz.js";import{p as N,t as j,a as L,s as m,e as x,g as a}from"./runtime.C2Zc6Vci.js";import{d as P,s as V}from"./render.BSFr2KKI.js";import{p as H}from"./proxy.BjlMx0ws.js";import{a as B,t as D,s as S,c as k,f as J}from"./template.DJK7smhD.js";import{s as K}from"./attributes.Cv1ilxUd.js";import{s as I,t as Q}from"./class.C6jkPbH_.js";import{b as U}from"./this.BsltOBbE.js";import{p as X}from"./props.DcQzd0wf.js";import{o as Y}from"./index-client.CPyGcluf.js";import{b as Z}from"./paths.3tJfktJx.js";function T(M,h,u,s,i){m(h,!0);const l=["Timekeeper","It's raining outside.","and the raindrops...","*Gasp*","Eeeek!"],g=1;function c(e,v,p){return e<=v&&e>=p}function n(e){const v=performance.now(),p=e.length*60/g;function f(){const b=window.requestAnimationFrame(f),C=performance.now(),y=Math.trunc(e.length*(C-v)/p);a(u)!==e?m(u,H(e.slice(0,y))):window.cancelAnimationFrame(b)}f()}function r(){m(s,H(window.requestAnimationFrame(r))),a(h)?(c(a(i),8e3,6e3)&&n(l[0]),c(a(i),6e3,4e3)&&n(l[1]),c(a(i),4e3,2e3)&&n(l[2]),c(a(i),2e3,500)&&n(l[3]),c(a(i),500,0)&&n(l[4])):(cancelAnimationFrame(a(s)),setTimeout(e=>{m(u,""),e.blur()},2e3,M.target))}r()}var tt=D('<div></div> <div><span class="dialouge crimson-text-regular text-sm"> </span> <button type="button" class="outline-none hover:opacity-100 focus:opacity-100 transition-opacity"><img alt="Vertin" class="w-10 h-10 rounded-full overflow-hidden pointer-events-none"></button></div>',1);function mt(M,h){N(h,!0);let u=X(h,"class",3,""),s,i,l,g,c,n=x(8e3),r=0,e=[],v=.5,p=300,f=x(!1),b=x(""),C=x(0);function y(t,o){const d=o.clientWidth,E=o.clientHeight;t&&(l=t.width=Math.max(500,d),g=t.height=Math.max(320,E)),o.style.left=o.style.right=o.style.top=o.style.bottom="0"}function z(){e=[];for(let t=p-1;t>=0;t--)e.push({x:Math.floor(Math.random()*document.documentElement.clientWidth+9),y:0,z:0});for(let t=0;t<p;t++)e[t].x=Math.floor(Math.random()*document.documentElement.clientWidth+9),e[t].y=Math.floor(Math.random()*s.clientHeight+9),e[t].z=Math.floor(Math.random()*2+1),e[t].w=Math.floor(Math.random()*3+2)}function q(){var t;for(let o=0;o<p;o++){e[o].y<=0&&(e[o].y+=s.clientHeight),e[o].x<-10?e[o].x+=l:e[o].y-=Number(((t=e[o])==null?void 0:t.w)??1)*v;const d=i.createRadialGradient(250,450,140,250,300,600);localStorage.getItem("ots:theme")==="dark"?(d.addColorStop(0,"rgba(100, 170, 160, 0.2)"),d.addColorStop(.1,"rgba(100, 160, 160, 0.12)"),d.addColorStop(.2,"rgba(100, 150, 150, 0.1)"),d.addColorStop(1,"rgba(100, 140, 140, .08)")):d.addColorStop(0,"rgba(0, 0, 0, 0.2)"),i.fillStyle=d,i.fillRect(e[o].x,e[o].y,e[o].z,4)}}function O(t){a(f)&&(r=0,t>350?r=(500-t)*.004:t<350&&t>250?r=(t-250)*.006:t<250&&t>=100?r=(250-t)*.004:t<100&&t>=0&&(r=t*.006,m(f,!1),m(n,8e3)),r>0&&(i.fillStyle=localStorage.getItem("ots:theme")==="dark"?`rgba(250, 250, 245, ${r})`:`rgba(0, 0, 0, ${r})`,i.fillRect(0,0,l,g)))}function W(){const t=document.querySelector("canvas");t&&y(t,s),a(f)&&(a(n)<0?m(n,8e3):m(n,a(n)-15)),c=localStorage.getItem("ots:theme")==="dark"?"#0f172a":"#ffffff",i.fillStyle=c,i.fillRect(0,0,l,g),q(),a(n)<500&&O(a(n)),window.requestAnimationFrame(W)}Y(()=>{const t=document.createElement("div"),o=document.createElement("canvas");c=localStorage.getItem("ots:theme")==="dark"?"#0f172a":"#ffffff",new ResizeObserver(E=>{e=[],z()}).observe(s),i=o.getContext("2d",{alpha:!1}),s.appendChild(t),t.style.position="fixed",t.appendChild(o),y(o,s),z(),W()});var A=tt(),_=J(A);U(_,t=>s=t,()=>s);var R=S(S(_,!0)),F=k(R),$=k(F),w=S(S(F,!0));w.__click=[T,f,b,C,n];var G=k(w);K(G,"src",`${Z??""}/img/character/sonetto.webp`),j(()=>{I(_,`rain-container fixed inset-0 -z-10 pointer-events-none ${u()??""}`),I(R,`fixed top-6 z-10 right-10 md:right-20 flex items-center gap-2 ${u()??""}`),V($,a(b)),w.disabled=a(f),Q(w,"opacity-20",!a(f))}),B(M,A),L()}P(["click"]);export{mt as S};
//# sourceMappingURL=Storm.D70eeDRH.js.map
