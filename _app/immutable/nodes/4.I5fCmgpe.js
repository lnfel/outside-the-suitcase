import"../chunks/disclose-version.BDr9Qe-U.js";import{p as R,B as G,s as D,z as M,A as c,N,k,f as T,l as U,q as d,m as H,r as j,v as g,w as S,M as W,I as _,g as K,L as z,j as J,i as X,C as Y,K as O,E as Q}from"../chunks/runtime.ZSJ01HAk.js";import{p as V}from"../chunks/stores.CT7GUqXt.js";import{b as m}from"../chunks/paths.BAX2pdW9.js";import{o as q}from"../chunks/navigation.Arx-17ik.js";const E="AIzaSyBGF2E59arX14AeWisWBTnPFskXKWS-TcI",P="1wjEllGmrOEUbwKLXkURFQSZVZyfw-J2-T_lOX2FAJiw";function Z(a){return a.filter(e=>e!=="")}function $(a,e){return a?.reduce((t,u,o)=>{if(e?.[o]){const p=e[o].values?.reduce((i,n,y)=>{let f={};const l=["Entry Tag","Entry Date","Username","Score","Portray","Resonance","Amplification","Name"],v=l.slice(0,4),w=[n.slice(4,8),n.slice(8,12),n.slice(12,16),n.slice(16,20)].map((r,h)=>{let s={};return s[l[4]]=r[0],s[l[5]]=r[1],s[l[6]]=r[2],s[l[7]]=r[3],s});return v.forEach((r,h)=>{f[r]=n[h]}),f.characters=w,i.push(f),i},[])??[];e[o].values=p,t[u]=e[o]}return t},{})}const ee=async({fetch:a})=>{const e=await a(`https://sheets.googleapis.com/v4/spreadsheets/${P}/values/F2P!B8:8?majorDimension=ROWS&key=${E}`),t=Z((await e.json())?.values[0]??[]),u=await a(`https://sheets.googleapis.com/v4/spreadsheets/${P}/values:batchGet?ranges=F2P!C10:V&ranges=F2P!Y10:AR&ranges=F2P!AU10:BN&ranges=F2P!BQ10:CJ&ranges=F2P!CM10:DF&majorDimension=ROWS&key=${E}`),o=$(t,(await u.json()).valueRanges),p=await a(`https://sheets.googleapis.com/v4/spreadsheets/${P}/values:batchGet?ranges=FFA!C10:V&ranges=FFA!Y10:AR&ranges=FFA!AU10:BN&ranges=FFA!BQ10:CJ&ranges=FFA!CM10:DF&majorDimension=ROWS&key=${E}`),i=$(t,(await p.json()).valueRanges);return{f2p:o,ffa:i}},pe=Object.freeze(Object.defineProperty({__proto__:null,load:ee},Symbol.toStringTag,{value:"Module"}));var se=S('<img loading="lazy" class="w-10 h-10 aspect-square md:hidden">'),ae=S('<a><!> <div class="sr-only md:not-sr-only"> </div></a>'),te=S(`<div class="flex-grow md:px-20 py-6 pt-20 md:pt-6 space-y-6"><h2 class="crimson-text-bold text-tuscany-600 dark:text-white text-3xl px-10 md:px-0">Mane's Bulletin Leaderboard</h2> <div class="flex flex-col md:flex-row gap-4"><aside class="flex-shrink-0 sticky top-6 backdrop-blur-sm md:backdrop-blur-none px-10 md:px-0"><div class="sticky top-[9rem] flex md:flex-col gap-2 md:top-20"></div></aside> <!></div></div>`);function de(a,e){R(e,!0);const t={};G(t);const u=()=>Q(V,"$page",t);let o=U(e,"data"),p=H(window.location.search);const i={"Darkness of the Abyss":{thumbnail:`${m}/img/ui/darkness-of-the-abyss.webp`},"Marsh Creation":{thumbnail:`${m}/img/ui/marsh-creation.webp`},"Gold in the Cave":{thumbnail:`${m}/img/ui/gold-in-the-cave.webp`},"Hypothesis of Exhibition":{thumbnail:`${m}/img/ui/hypothesis-of-exhibition.webp`},"Projection of Nightmare":{thumbnail:`${m}/img/ui/projection-of-nightmare.webp`}},n=Object.keys(o().f2p);q(()=>{D(p,window.location.search)});var y=j(a,!0,te),f=g(y),l=d(d(f)),v=g(l),w=g(v),r=d(d(v));M(r,c(e).children,{}),N(w,()=>n,9,null,(h,s,oe)=>{var b=j(h,!0,ae),C=g(b),I=d(d(C)),L=g(I);W(b,"href",()=>`${_(m)}/leaderboard/${_(c(s).toLowerCase().split(" ").join("-"))}${_(K(p))}`),z(b,()=>`${_(u().params.raid===c(s).toLowerCase().split(" ").join("-")?"bg-tuscany-600 text-white":"")} whitespace-nowrap outline-none hover:text-white focus:text-white hover:bg-tuscany-600 focus:bg-tuscany-600 p-0.5 md:px-2 md:py-1`),J(L,()=>c(s)),X(C,()=>i[c(s)].thumbnail,B=>{var x=j(B,!0,se),F,A;Y(()=>{F!==(F=i[c(s)].thumbnail)&&O(x,"src",F),A!==(A=c(s))&&O(x,"alt",A)}),k(B,x)},null),k(h,b)}),k(a,y),T()}export{de as component,pe as universal};