import"../chunks/disclose-version.BDr9Qe-U.js";import{p as pe,m as B,A as oe,P as we,b as fe,Q as ge,R as A,k as v,f as _e,l as he,$ as ue,s as ve,g as f,q as t,S as me,r as m,v as e,w as g,j as T,J as s,B as I,T as ye,F as R,i as xe,G as Y,e as ke,o as Fe,n as Ae}from"../chunks/runtime.TsWTqLqS.js";const U="AIzaSyBGF2E59arX14AeWisWBTnPFskXKWS-TcI",M="1wjEllGmrOEUbwKLXkURFQSZVZyfw-J2-T_lOX2FAJiw";function Se(r){return r.filter(n=>n!=="")}function V(r,n){return r?.reduce((c,d,l)=>{if(n?.[l]){const _=n[l].values?.reduce((h,i,O)=>{let y={};const b=["Entry Tag","Entry Date","Username","Score","Portray","Resonance","Amplification","Name"],j=b.slice(0,4),x=[i.slice(4,8),i.slice(8,12),i.slice(12,16),i.slice(16,20)].map((p,S)=>{let a={};return a[b[4]]=p[0],a[b[5]]=p[1],a[b[6]]=p[2],a[b[7]]=p[3],a});return j.forEach((p,S)=>{y[p]=i[S]}),y.characters=x,h.push(y),h},[])??[];n[l].values=_,c[d]=n[l]}return c},{})}const Ee=async({fetch:r})=>{const n=await r(`https://sheets.googleapis.com/v4/spreadsheets/${M}/values/F2P!B8:8?majorDimension=ROWS&key=${U}`),c=Se((await n.json())?.values[0]??[]),d=await r(`https://sheets.googleapis.com/v4/spreadsheets/${M}/values:batchGet?ranges=F2P!C10:V&ranges=F2P!Y10:AR&ranges=F2P!AU10:BN&ranges=F2P!BQ10:CJ&ranges=F2P!CM10:DF&majorDimension=ROWS&key=${U}`),l=V(c,(await d.json()).valueRanges),_=await r(`https://sheets.googleapis.com/v4/spreadsheets/${M}/values:batchGet?ranges=FFA!C10:V&ranges=FFA!Y10:AR&ranges=FFA!AU10:BN&ranges=FFA!BQ10:CJ&ranges=FFA!CM10:DF&majorDimension=ROWS&key=${U}`),h=V(c,(await _.json()).valueRanges);return console.log(l),{f2p:l,ffa:h}},Te=Object.freeze(Object.defineProperty({__proto__:null,load:Ee},Symbol.toStringTag,{value:"Module"}));var Pe=g("<option> </option>"),Be=g('<th scope="col" class="px-4 py-2 text-lg whitespace-nowrap text-white bg-tuscany-600"> </th>'),Re=g('<img class="inline w-10 h-10">'),Oe=g("<!>",!0),je=g('<tr class="odd:bg-tuscany-200 even:bg-tuscany-100 svelte-1fgx2wr"><td class="px-4 py-2 dark:text-slate-800 svelte-1fgx2wr"></td><td class="px-4 py-2 dark:text-slate-800 svelte-1fgx2wr"> </td><td class="px-4 py-2 dark:text-slate-800 svelte-1fgx2wr"> </td><td class="px-4 py-2 dark:text-slate-800 svelte-1fgx2wr"> </td><td class="px-4 py-2 dark:text-slate-800 svelte-1fgx2wr"> </td><td class="dark:text-slate-800 svelte-1fgx2wr"><span class="flex items-center px-4 py-2"></span></td></tr>'),Le=g('<article><h3 class="py-4 text-xl"> </h3> <div class="overflow-x-auto"><table class="min-w-full text-left border-collapse svelte-1fgx2wr"><thead><tr></tr></thead><tbody></tbody></table></div></article>'),Ce=g(`<main class="px-10 md:px-20 py-6 pt-20 md:pt-6 space-y-6"><h2 class="crimson-text-bold text-tuscany-600 dark:text-white text-3xl">Mane's Bulletin Leaderboard</h2> <div class="flex items-center gap-2"><label for="category">Category</label> <select name="category" id="category" class="appearance-none text-white text-sm bg-tuscany-600 outline-none hover:bg-tuscany-500 focus:bg-tuscany-500 pl-4 pr-8 py-1 bg-[right_0.5rem_center] bg-no-repeat bg-[length:1.5em_1.5em] svelte-1fgx2wr"></select></div> <!></main>`);function Ie(r,n){pe(n,!1);let c=he(n,"data"),d=B("f2p");const l=B(["Rank","Entry Tag","Entry Date","Username","Score","Team"]),_=B(Object.keys(c())),h=B(Object.keys(c().f2p)),i={37:{thumbnail:"https://www.prydwen.gg/static/a9df0a9f798cde750e47fe7b40c4cb61/60b4d/64_icon.webp"},6:{thumbnail:"https://www.prydwen.gg/static/c3b16c3397767b4737aa9bb4ff4ffafc/60b4d/65_icon.webp"},"A Knight":{thumbnail:"https://www.prydwen.gg/static/12a9276bf3b49bb3cdde0543129d129f/60b4d/7_icon.webp"},Lilya:{thumbnail:"https://www.prydwen.gg/static/54312ecf859812f00722a142e9f6a8a2/60b4d/4_icon.webp"},Regulus:{thumbnail:"https://www.prydwen.gg/static/7837f8320689ec0c511ca55ac3f48fbf/60b4d/3_icon.webp"},"Tooth Fairy":{thumbnail:"https://www.prydwen.gg/static/dffcad8d709f386addef5085f913fa0e/60b4d/56_icon.webp"},"Kaalaa Baunaa":{thumbnail:"https://www.prydwen.gg/static/c746ac1cf15c943191df0b3f0938dec9/60b4d/62_icon.webp"},Pickles:{thumbnail:"https://www.prydwen.gg/static/b2f0e0c2a66f1d950723a013bb843f4e/60b4d/54_icon.webp"},Necrologist:{thumbnail:"https://www.prydwen.gg/static/44afab4c5d9e66ecb0f48194fbde44ba/60b4d/20_icon.webp"},"Balloon Party":{thumbnail:"https://www.prydwen.gg/static/7c5aacbd1d7debf7b5e171ef5b8eb21d/60b4d/19_icon.webp"},Bkornblume:{thumbnail:"https://www.prydwen.gg/static/f5c8a1e76ffa90a6a3cc1628543264e7/60b4d/16_icon.webp"},Spathodea:{thumbnail:"https://www.prydwen.gg/static/dbceab4cd300e4d053571a25c9ace92b/60b4d/65_icon.webp"},Sweetheart:{thumbnail:"https://www.prydwen.gg/static/ebe0a115613ed47b1bb61dda6861207d/60b4d/13_icon.webp"},Melania:{thumbnail:"https://www.prydwen.gg/static/4abbfd75d20606a1f0b2f2eb6ada77a2/60b4d/53_icon.webp"},Jessica:{thumbnail:"https://www.prydwen.gg/static/d1016961dc8a59f5bc3a3d6d62ba841b/60b4d/58_icon.webp"},"Jiu Niangzi":{thumbnail:"https://www.prydwen.gg/static/865bb8cb048103c43d16b2d45d000a4e/60b4d/69_icon.webp"},"An-an Lee":{thumbnail:"https://www.prydwen.gg/static/0b86bc3c4710ab7fb76f3c30adfd1283/60b4d/0_icon.webp"},"Ms. NewBabel":{thumbnail:"https://www.prydwen.gg/static/ac2895e23af4900d682d5fd3ebfd2bda/60b4d/11_icon.webp"},Ezra:{thumbnail:"https://www.prydwen.gg/static/8069d3e37cdd5917d78f9bd188c5e4b3/60b4d/66_icon.webp"},Shamane:{thumbnail:"https://www.prydwen.gg/static/141d00528dcb72b350cfc725386985fa/60b4d/60_icon.webp"},Leilani:{thumbnail:"https://www.prydwen.gg/static/30e7f4de8a38e2c4e5fb61ee96527b52/60b4d/41_icon.webp"},"Darley Clatter":{thumbnail:"https://www.prydwen.gg/static/e2d29a713c58c599f6a55423eb08e5fa/60b4d/45_icon.webp"}};var O=m(r,!0,Ce);oe(a=>{ue.title="Reverse 1999 Global Leaderboard | Outside the suitcase"});var y=e(O),b=t(t(y)),j=e(b),x=t(t(j));we(x),fe(()=>{f(d),me(()=>{f(_)})});const p=()=>f(_)??[];var S=t(t(b));ge(x,()=>f(d),a=>ve(d,a)),A(x,p,9,null,(a,u,Z)=>{var o=m(a,!0,Pe),E=e(o);T(E,()=>s(u).toUpperCase());var P;I(()=>{P!==(P=s(u))&&(o.value=o.__value=s(u),ye(o))}),v(a,o)}),A(S,()=>f(h),1,null,(a,u,Z)=>{var o=m(a,!0,Le),E=e(o),P=e(E),q=t(t(E)),ee=e(q),J=e(ee),ae=e(J),te=t(J);T(P,()=>s(u)),A(ae,()=>f(l),9,null,(k,w,se)=>{var F=m(k,!0,Be),L=e(F);T(L,()=>s(w)),v(k,F)},null),A(te,()=>c()[f(d)][s(u)]?.values??[],9,null,(k,w,se)=>{var F=m(k,!0,je),L=e(F),$=t(L),ne=e($),K=t($),re=e(K),W=t(K),ce=e(W),H=t(W),le=e(H),de=t(H),ie=e(de);I(()=>{R(ne,s(w)["Entry Tag"]),R(re,s(w)["Entry Date"]),R(ce,s(w).Username),R(le,s(w).Score)}),A(ie,()=>s(w).characters,9,null,(z,C,De)=>{var Q=Fe(z,!0,Oe),be=Ae(Q);xe(be,()=>i?.[s(C).Name],X=>{var D=m(X,!0,Re),G,N;I(()=>{G!==(G=i[s(C).Name]?.thumbnail??"")&&Y(D,"src",G),N!==(N=s(C).Name)&&Y(D,"alt",N)}),v(X,D)},null),ke(z,Q)},null),v(k,F)},null),v(a,o)}),v(r,O),_e()}export{Ie as component,Te as universal};
