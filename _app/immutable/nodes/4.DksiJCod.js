import"../chunks/disclose-version.BDr9Qe-U.js";import{p as $,B as G,m as D,z as M,A as l,L as N,k as F,f as T,l as U,q as m,g as H,r as A,v as g,w as P,M as W,N as K,j as z,i as J,C as X,K as O,I as k,E as Y}from"../chunks/runtime.B9qmLNte.js";import{p as Q}from"../chunks/stores.D9HSdsPM.js";import{b as f}from"../chunks/paths.DmzgRKYo.js";const j="AIzaSyBGF2E59arX14AeWisWBTnPFskXKWS-TcI",E="1wjEllGmrOEUbwKLXkURFQSZVZyfw-J2-T_lOX2FAJiw";function V(s){return s.filter(e=>e!=="")}function I(s,e){return s?.reduce((r,u,a)=>{if(e?.[a]){const c=e[a].values?.reduce((p,n,S)=>{let h={};const i=["Entry Tag","Entry Date","Username","Score","Portray","Resonance","Amplification","Name"],b=i.slice(0,4),_=[n.slice(4,8),n.slice(8,12),n.slice(12,16),n.slice(16,20)].map((t,o)=>{let d={};return d[i[4]]=t[0],d[i[5]]=t[1],d[i[6]]=t[2],d[i[7]]=t[3],d});return b.forEach((t,o)=>{h[t]=n[o]}),h.characters=_,p.push(h),p},[])??[];e[a].values=c,r[u]=e[a]}return r},{})}const q=async({fetch:s})=>{const e=await s(`https://sheets.googleapis.com/v4/spreadsheets/${E}/values/F2P!B8:8?majorDimension=ROWS&key=${j}`),r=V((await e.json())?.values[0]??[]),u=await s(`https://sheets.googleapis.com/v4/spreadsheets/${E}/values:batchGet?ranges=F2P!C10:V&ranges=F2P!Y10:AR&ranges=F2P!AU10:BN&ranges=F2P!BQ10:CJ&ranges=F2P!CM10:DF&majorDimension=ROWS&key=${j}`),a=I(r,(await u.json()).valueRanges),c=await s(`https://sheets.googleapis.com/v4/spreadsheets/${E}/values:batchGet?ranges=FFA!C10:V&ranges=FFA!Y10:AR&ranges=FFA!AU10:BN&ranges=FFA!BQ10:CJ&ranges=FFA!CM10:DF&majorDimension=ROWS&key=${j}`),p=I(r,(await c.json()).valueRanges);return console.log(a),{f2p:a,ffa:p}},ne=Object.freeze(Object.defineProperty({__proto__:null,load:q},Symbol.toStringTag,{value:"Module"}));var Z=P('<img loading="lazy" class="w-10 h-10 aspect-square md:hidden">'),ee=P('<a><!> <div class="sr-only md:not-sr-only"> </div></a>'),se=P(`<div class="flex-grow md:px-20 py-6 pt-20 md:pt-6 space-y-6"><h2 class="crimson-text-bold text-tuscany-600 dark:text-white text-3xl px-10 md:px-0">Mane's Bulletin Leaderboard</h2> <div class="flex flex-col md:flex-row gap-4"><aside class="flex-shrink-0 sticky top-6 backdrop-blur-sm md:backdrop-blur-none px-10 md:px-0"><div class="sticky top-[9rem] flex md:flex-col gap-2 md:top-20"></div></aside> <!></div></div>`);function ie(s,e){$(e,!1);const r={};G(r);const u=()=>Y(Q,"$page",r);let a=U(e,"data");const c={"Darkness of the Abyss":{thumbnail:`${f}/img/ui/darkness-of-the-abyss.webp`},"Marsh Creation":{thumbnail:`${f}/img/ui/marsh-creation.webp`},"Gold in the Cave":{thumbnail:`${f}/img/ui/gold-in-the-cave.webp`},"Hypothesis of Exhibition":{thumbnail:`${f}/img/ui/hypothesis-of-exhibition.webp`},"Projection of Nightmare":{thumbnail:`${f}/img/ui/projection-of-nightmare.webp`}},p=D(Object.keys(a().f2p));var n=A(s,!0,se),S=g(n),h=m(m(S)),i=g(h),b=g(i),_=m(m(i));M(_,l(e).children,{}),N(b,()=>H(p),9,null,(t,o,d)=>{var v=A(t,!0,ee),C=g(v),L=m(m(C)),R=g(L);W(v,"href",()=>`${k(f)}/leaderboard/${k(l(o).toLowerCase().split(" ").join("-"))}`),K(v,()=>`${k(u().params.raid===l(o).toLowerCase().split(" ").join("-")?"bg-tuscany-600 text-white":"")} whitespace-nowrap outline-none hover:text-white focus:text-white hover:bg-tuscany-600 focus:bg-tuscany-600 p-0.5 md:px-2 md:py-1`),z(R,()=>l(o)),J(C,()=>c[l(o)].thumbnail,B=>{var y=A(B,!0,Z),x,w;X(()=>{x!==(x=c[l(o)].thumbnail)&&O(y,"src",x),w!==(w=l(o))&&O(y,"alt",w)}),F(B,y)},null),F(t,v)}),F(s,n),T()}export{ie as component,ne as universal};