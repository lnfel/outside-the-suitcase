import{P as F,a as A,f as K,p as C}from"../chunks/index.C6fQU7Ql.js";import"../chunks/disclose-version.Bg9kRutz.js";import{c as T,p as W,o as X,r as R,l as q,a as i,z as J,b as Q,d as x,q as L,n as V,k as S,e as l,t as w,K as t,u as B,s as Z,f as D,g as d}from"../chunks/custom-element.Bd7BP0Qt.js";import{a as ee}from"../chunks/await.CeFd7r0I.js";import{i as ae}from"../chunks/if.BtDi6yPi.js";import{e as se,i as te}from"../chunks/each.DLmFlzR8.js";import{s as oe}from"../chunks/snippet.DqBexmgK.js";import{s as v,h as ne}from"../chunks/attributes.Ch3uYejW.js";import{s as re}from"../chunks/class.DJa49N0K.js";import{p as G}from"../chunks/props.Cda_5gBt.js";import{u as ie,s as le,p as de}from"../chunks/stores.DvfAY4iQ.js";import{b as o}from"../chunks/paths.Dd-9-ID9.js";import{o as me}from"../chunks/entry.CVQOOV5A.js";import{L as pe}from"../chunks/LoadingSpinner.DJF-mSNX.js";const ce=async({fetch:n})=>({sheet:new Promise(async(f,$)=>{var c;const m=await n(`https://sheets.googleapis.com/v4/spreadsheets/${F}/values/F2P!B8:8?majorDimension=ROWS&key=${A}`),a=K(((c=await m.json())==null?void 0:c.values[0])??[]),g=await n(`https://sheets.googleapis.com/v4/spreadsheets/${F}/values:batchGet?ranges=F2P!C10:V&ranges=F2P!Y10:AR&ranges=F2P!AU10:BN&ranges=F2P!BQ10:CJ&ranges=F2P!CM10:DF&majorDimension=ROWS&key=${A}`),p=C(a,(await g.json()).valueRanges),b=await n(`https://sheets.googleapis.com/v4/spreadsheets/${F}/values:batchGet?ranges=FFA!C10:V&ranges=FFA!Y10:AR&ranges=FFA!AU10:BN&ranges=FFA!BQ10:CJ&ranges=FFA!CM10:DF&majorDimension=ROWS&key=${A}`),j=C(a,(await b.json()).valueRanges),k=Object.keys(p);f({headers:a,f2p:p,ffa:j,raidGroup:k})})}),Se=Object.freeze(Object.defineProperty({__proto__:null,load:ce},Symbol.toStringTag,{value:"Module"}));var he=x('<link rel="stylesheet" class="svelte-1e2d5jo">'),ve=x('<img loading="lazy" class="w-10 h-10 aspect-square md:hidden svelte-1e2d5jo">'),ue=x('<a><!> <div class="sr-only md:not-sr-only svelte-1e2d5jo"> </div></a>'),fe=x(`<div class="flex-grow md:px-20 py-6 pt-20 md:pt-6 space-y-6 svelte-1e2d5jo"><h2 class="crimson-text-bold text-tuscany-600 dark:text-white text-3xl px-10 md:px-0 svelte-1e2d5jo">Mane's Bulletin Leaderboard</h2> <div class="flex flex-col md:flex-row gap-4 svelte-1e2d5jo"><aside class="flex-shrink-0 sticky top-6 z-10 md:z-[9] backdrop-blur-sm md:backdrop-blur-none px-10 md:px-0 svelte-1e2d5jo"><div class="raid-nav sticky min-w-[180px] top-[9rem] flex md:flex-col gap-2 md:top-20 svelte-1e2d5jo"><!></div></aside> <!></div></div>`);function ge(n,u){W(u,!0);const f={};ie(f);const $=()=>le(de,"$page",f);let m=G(u,"data",7),a=G(u,"children",7),g=X(R(window.location.search));const p={"Darkness of the Abyss":{thumbnail:`${o}/img/ui/darkness-of-the-abyss.webp`},"Marsh Creation":{thumbnail:`${o}/img/ui/marsh-creation.webp`},"Gold in the Cave":{thumbnail:`${o}/img/ui/gold-in-the-cave.webp`},"Hypothesis of Exhibition":{thumbnail:`${o}/img/ui/hypothesis-of-exhibition.webp`},"Projection of Nightmare":{thumbnail:`${o}/img/ui/projection-of-nightmare.webp`}};me(()=>{V(g,R(window.location.search))});var b=fe();q(e=>{var s=he();v(s,"href",`${o??""}/css/leaderboard.css`),i(e,s)});var j=l(b),k=d(d(j,!0)),c=l(k),O=l(c),E=l(O);ee(E,()=>m().sheet,e=>{var s=S(),_=D(s);pe(_,{class:"self-center"}),i(e,s)},(e,s)=>{var _=S(),z=D(_);se(z,65,()=>B(s).raidGroup,te,(I,r,N)=>{var h=ue();w(()=>v(h,"href",`${o??""}/leaderboard/${t(r).toLowerCase().split(" ").join("-")??""}${B(g)??""}`)),v(h,"style",`--animation-order: ${t(N)+1};`),w(()=>re(h,`raid-link ${($().params.raid===t(r).toLowerCase().split(" ").join("-")?"bg-tuscany-600 text-white":"")??""} whitespace-nowrap outline-none hover:text-white focus:text-white hover:bg-tuscany-600 focus:bg-tuscany-600 p-0.5 md:px-2 md:py-1 svelte-1e2d5jo`));var P=l(h);ae(P,()=>p[t(r)].thumbnail,Y=>{var y=ve();w(()=>{v(y,"src",p[t(r)].thumbnail),v(y,"alt",t(r))}),ne(y),i(Y,y)});var H=d(d(P,!0)),U=l(H);w(()=>Z(U,t(r))),i(I,h)}),i(e,_)});var M=d(d(c,!0));return oe(a,M),i(n,b),J(n,"svelte-1e2d5jo",`
    .raid-link.svelte-1e2d5jo {
        opacity: 0;
        transform: translateX(-1rem);
        animation-name: svelte-1e2d5jo-fade-in;
        animation-duration: 400ms;
        animation-timing-function: ease-in;
        animation-delay: calc(200ms * var(--animation-order));
        animation-fill-mode: forwards;
    }

    @keyframes svelte-1e2d5jo-fade-in {
        0% {
            opacity: 0;
            transform: translateX(-1rem);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
`),Q({get data(){return m()},set data(e){m(e),L()},get children(){return a()},set children(e){a(e),L()}})}T(ge,{data:{},children:{}},[],[],!0);export{ge as component,Se as universal};
//# sourceMappingURL=4.DlgpfrCU.js.map
