import"../chunks/disclose-version.BDr9Qe-U.js";import{F as mt,p as yt,m as xt,s as $,G as kt,S as St,b as Pt,j as R,T as Ct,U as Nt,N as y,i as H,k as g,f as Tt,l as jt,C as x,$ as Lt,I as Rt,g as U,q as t,r as f,v as a,w,A as e,V as Ut,D as o,K as Q,e as At,o as Et,n as Mt}from"../chunks/runtime.ZSJ01HAk.js";import"../chunks/paths.B62-V7vW.js";import{o as zt,g as Bt}from"../chunks/navigation.CtJwoddK.js";const Dt=["Rank","Username","Score","Team","Entry Tag","Entry Date"],Ot={37:{thumbnail:"https://www.prydwen.gg/static/a9df0a9f798cde750e47fe7b40c4cb61/60b4d/64_icon.webp"},6:{thumbnail:"https://www.prydwen.gg/static/c3b16c3397767b4737aa9bb4ff4ffafc/60b4d/65_icon.webp"},"A Knight":{thumbnail:"https://www.prydwen.gg/static/12a9276bf3b49bb3cdde0543129d129f/60b4d/7_icon.webp"},Lilya:{thumbnail:"https://www.prydwen.gg/static/54312ecf859812f00722a142e9f6a8a2/60b4d/4_icon.webp"},Regulus:{thumbnail:"https://www.prydwen.gg/static/7837f8320689ec0c511ca55ac3f48fbf/60b4d/3_icon.webp"},"Tooth Fairy":{thumbnail:"https://www.prydwen.gg/static/dffcad8d709f386addef5085f913fa0e/60b4d/56_icon.webp"},"Kaalaa Baunaa":{thumbnail:"https://www.prydwen.gg/static/c746ac1cf15c943191df0b3f0938dec9/60b4d/62_icon.webp"},Pickles:{thumbnail:"https://www.prydwen.gg/static/b2f0e0c2a66f1d950723a013bb843f4e/60b4d/54_icon.webp"},Necrologist:{thumbnail:"https://www.prydwen.gg/static/44afab4c5d9e66ecb0f48194fbde44ba/60b4d/20_icon.webp"},"Balloon Party":{thumbnail:"https://www.prydwen.gg/static/7c5aacbd1d7debf7b5e171ef5b8eb21d/60b4d/19_icon.webp"},Bkornblume:{thumbnail:"https://www.prydwen.gg/static/f5c8a1e76ffa90a6a3cc1628543264e7/60b4d/16_icon.webp"},Spathodea:{thumbnail:"https://www.prydwen.gg/static/dbceab4cd300e4d053571a25c9ace92b/60b4d/65_icon.webp"},Sweetheart:{thumbnail:"https://www.prydwen.gg/static/ebe0a115613ed47b1bb61dda6861207d/60b4d/13_icon.webp"},Melania:{thumbnail:"https://www.prydwen.gg/static/4abbfd75d20606a1f0b2f2eb6ada77a2/60b4d/53_icon.webp"},Jessica:{thumbnail:"https://www.prydwen.gg/static/d1016961dc8a59f5bc3a3d6d62ba841b/60b4d/58_icon.webp"},"Jiu Niangzi":{thumbnail:"https://www.prydwen.gg/static/865bb8cb048103c43d16b2d45d000a4e/60b4d/69_icon.webp"},"An-an Lee":{thumbnail:"https://www.prydwen.gg/static/0b86bc3c4710ab7fb76f3c30adfd1283/60b4d/0_icon.webp"},"Ms. NewBabel":{thumbnail:"https://www.prydwen.gg/static/ac2895e23af4900d682d5fd3ebfd2bda/60b4d/11_icon.webp"},Ezra:{thumbnail:"https://www.prydwen.gg/static/8069d3e37cdd5917d78f9bd188c5e4b3/60b4d/66_icon.webp"},Shamane:{thumbnail:"https://www.prydwen.gg/static/141d00528dcb72b350cfc725386985fa/60b4d/60_icon.webp"},Leilani:{thumbnail:"https://www.prydwen.gg/static/30e7f4de8a38e2c4e5fb61ee96527b52/60b4d/41_icon.webp"},"Darley Clatter":{thumbnail:"https://www.prydwen.gg/static/e2d29a713c58c599f6a55423eb08e5fa/60b4d/45_icon.webp"}},Gt=async({parent:l,params:s,url:r})=>{const{f2p:i,ffa:A}=await l();return{raid:Object.keys(i).find(P=>P.toLowerCase().split(" ").join("-")===s.raid),headers:Dt,characterMap:Ot,categories:["f2p","ffa"],category:r.searchParams.get("category")??"f2p"}},ta=Object.freeze(Object.defineProperty({__proto__:null,load:Gt},Symbol.toStringTag,{value:"Module"}));function Kt(l){l.stopPropagation();const s=l.currentTarget.closest(".character");s&&(s.dataset.current=s.dataset.state==="open"?"inactive":"active",document.querySelectorAll('.character[data-state="open"]:not([data-current="inactive"])').forEach(i=>{i.dataset.state="close"}),s.dataset.state=s.dataset.state==="open"?"close":"open")}var qt=w("<option> </option>"),Ft=w('<th scope="col" class="px-4 py-2 text-lg whitespace-nowrap text-white bg-tuscany-600"> </th>'),It=w('<div data-state="close" data-current="inactive" class="character group dropdown relative"><button aria-label="Toggle team info" type="button" class="outline-none"><img width="40" height="40" class="inline w-10 h-10"></button> <div class="dropdown-content group-data-[state=close]:hidden absolute left-1/2 -translate-x-1/2 z-[9] text-white bg-tuscany-600 p-2 space-y-2 svelte-1ooretm"><div class="crimson-text-bold tracking-wide"> </div> <ul class="text-sm"><li class="flex items-center justify-between flex-nowrap whitespace-nowrap space-x-4"><div>Resonance level</div> <div> </div></li> <li class="flex items-center justify-between flex-nowrap whitespace-nowrap space-x-4"><div>Portray</div> <div> </div></li> <li class="flex items-center justify-between flex-nowrap whitespace-nowrap space-x-4"><div>Amplification</div> <div> </div></li></ul></div></div>'),Jt=w("<!>",!0),Vt=w('<tr class="odd:bg-tuscany-200 even:bg-tuscany-100 svelte-1ooretm"><td class="px-4 py-2 dark:text-slate-800 svelte-1ooretm"></td><td class="px-4 py-2 dark:text-slate-800 svelte-1ooretm"> </td><td class="px-4 py-2 dark:text-slate-800 svelte-1ooretm"> </td><td class="dark:text-slate-800 svelte-1ooretm"><div class="flex items-center min-w-48 px-4 py-2"></div></td><td class="px-4 py-2 dark:text-slate-800 svelte-1ooretm"> </td><td class="px-4 py-2 dark:text-slate-800 svelte-1ooretm"> </td></tr>'),$t=w('<div class="table-container overflow-x-auto svelte-1ooretm"><table class="w-full text-left border-collapse svelte-1ooretm"><thead><tr></tr></thead><tbody></tbody></table></div>'),Ht=w('<main class="flex-grow space-y-6"><h3 class="crimson-text-bold text-tuscany-600 dark:text-white text-2xl px-10 md:px-0"> </h3> <div class="flex items-center gap-2 px-10 md:px-0"><label for="category">Category</label> <select name="category" id="category" class="appearance-none cursor-pointer text-white text-sm bg-tuscany-600 outline-none hover:bg-tuscany-500 focus:bg-tuscany-500 pl-4 pr-8 py-1 bg-[right_0.5rem_center] bg-no-repeat bg-[length:1.5em_1.5em] svelte-1ooretm"></select></div> <!></main>');function aa(l,s){yt(s,!0);let r=jt(s,"data"),i=xt(r().category);function A(c){const d=new URLSearchParams(window.location.search);d.set("category",c.currentTarget.value);const v=new URL(window.location.toString());v.search=d.toString(),console.log(v.toString()),Bt(v.toString())}zt(()=>{$(i,new URL(window.location.toString()).searchParams.get("category")??"f2p")});var k=f(l,!0,Ht);kt(c=>{x(()=>{Lt.title=`${Rt(r().raid)} | Outside the suitcase`})});var S=a(k),P=a(S),E=t(t(S)),W=a(E),_=t(t(W));St(_),Pt(()=>{U(i)});const X=()=>r().categories??[];var Y=t(t(E));R(P,()=>r().raid),Ct(_,()=>U(i),c=>$(i,c)),Nt("change",_,A,!1),y(_,X,9,null,(c,d,v)=>{var n=f(c,!0,qt),C=a(n);R(C,()=>e(d).toUpperCase());var m;x(()=>{m!==(m=e(d))&&(n.value=n.__value=e(d),Ut(n))}),g(c,n)}),H(Y,()=>r().raid,c=>{var d=f(c,!0,$t),v=a(d),n=a(v),C=a(n),m=t(n);y(C,()=>r().headers,9,null,(u,b,Z)=>{var h=f(u,!0,Ft),N=a(h);R(N,()=>e(b)),g(u,h)}),y(m,()=>r()[U(i)][r().raid]?.values??[],9,null,(u,b,Z)=>{var h=f(u,!0,Vt),N=a(h),M=t(N),tt=a(M),z=t(M),at=a(z),B=t(z),et=a(B),D=t(B),rt=a(D),st=t(D),ct=a(st);x(()=>{o(tt,e(b).Username),o(at,e(b).Score),o(rt,e(b)["Entry Tag"]),o(ct,e(b)["Entry Date"])}),y(et,()=>e(b).characters,9,null,(O,p,Qt)=>{var G=Et(O,!0,Jt),it=Mt(G);H(it,()=>r().characterMap?.[e(p).Name],K=>{var q=f(K,!0,It),T=a(q),F=a(T),dt=t(t(T)),I=a(dt),nt=a(I),ot=t(t(I)),J=a(ot),lt=a(J),bt=t(t(lt)),pt=a(bt),V=t(t(J)),wt=a(V),vt=t(t(wt)),gt=a(vt),ft=t(t(V)),ut=a(ft),ht=t(t(ut)),_t=a(ht),j,L;x(()=>{j!==(j=r().characterMap[e(p).Name]?.thumbnail??"")&&Q(F,"src",j),L!==(L=e(p).Name)&&Q(F,"alt",L),o(nt,e(p).Name),o(pt,e(p).Resonance),o(gt,e(p).Portray),o(_t,e(p).Amplification)}),T.__click=[Kt],g(K,q)},null),At(O,G)},null),g(u,h)}),g(c,d)},null),g(l,k),Tt()}mt(["click"]);export{aa as component,ta as universal};
