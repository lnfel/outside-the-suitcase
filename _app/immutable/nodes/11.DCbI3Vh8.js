import{h as ze,c as Ae}from"../chunks/index.CT8Tde97.js";import"../chunks/disclose-version.Bg9kRutz.js";import{p as Be,b as J,t as w,a as Ie,s as O,g,n as o,l as ie,a5 as ce}from"../chunks/runtime.DTLJS4Cp.js";import{d as qe,s as _}from"../chunks/render.CJy_g0Wp.js";import{p as R}from"../chunks/proxy.CKJoFeXp.js";import{a as Ge,L as Fe}from"../chunks/LoadingSpinner.CxygTBZJ.js";import{i as E}from"../chunks/if.BBPrruah.js";import{e as A,i as B}from"../chunks/each.DHoT2t3W.js";import{a as c,t as b,$ as We,s as a,c as t,b as x,f as y}from"../chunks/template.B2J4WHVd.js";import{h as He}from"../chunks/svelte-head.CUqH2DhT.js";import{s as K,h as Je}from"../chunks/attributes.ClFAMcYJ.js";import{s as Q,t as Ke}from"../chunks/class.CT2fZM7p.js";import{b as Qe}from"../chunks/select.C0oBQ22F.js";import{u as Ve,s as Xe,p as Ye}from"../chunks/stores.BA3CZNGU.js";import{b as Ze}from"../chunks/paths.jIiee-p2.js";import{o as $e,g as et}from"../chunks/entry.Dh0VuBnu.js";import{o as tt}from"../chunks/index-client.XNwHMS1C.js";const at=async({parent:k,params:n,url:h})=>({headers:ze,characterMap:Ae,categories:["f2p","ffa"],category:h.searchParams.get("category")??"f2p"}),Rt=Object.freeze(Object.defineProperty({__proto__:null,load:at},Symbol.toStringTag,{value:"Module"}));function st(k,n){const h=new URLSearchParams(window.location.search);h.set("category",k.currentTarget.value);const L=new URL(window.location.toString());L.search=h.toString(),n(L.toString())}function rt(k){k.stopPropagation();const n=k.currentTarget.closest(".character");n&&(n.dataset.current=n.dataset.state==="open"?"inactive":"active",document.querySelectorAll('.character[data-state="open"]:not([data-current="inactive"])').forEach(L=>{L.dataset.state="close"}),n.dataset.state=n.dataset.state==="open"?"close":"open")}var ot=b('<option class="svelte-192psg6"> </option>'),nt=(k,n,h)=>n(h().toLowerCase()),lt=b('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up w-4 h-4 svelte-192psg6"><path d="m18 15-6-6-6 6" class="svelte-192psg6"></path></svg>'),it=b('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-4 h-4 svelte-192psg6"><path d="m6 9 6 6 6-6" class="svelte-192psg6"></path></svg>'),ct=b('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down w-4 h-4 svelte-192psg6"><path d="m7 15 5 5 5-5" class="svelte-192psg6"></path><path d="m7 9 5-5 5 5" class="svelte-192psg6"></path></svg>'),dt=b('<th scope="col"><button type="button" class="flex items-center gap-1 outline-none hover:bg-tuscany-500 focus:bg-tuscany-500 px-4 py-2 svelte-192psg6"><span class="svelte-192psg6"> </span> <!></button></th>'),vt=b('<th scope="col"> </th>'),pt=b('<div data-state="close" data-current="inactive" class="character group dropdown relative svelte-192psg6"><button aria-label="Toggle team info" type="button" class="outline-none svelte-192psg6"><img loading="lazy" width="40" height="40" class="inline w-10 h-10 svelte-192psg6"></button> <div class="dropdown-content group-data-[state=close]:hidden absolute left-1/2 -translate-x-1/2 z-10 text-white bg-tuscany-600 p-2 space-y-2 svelte-192psg6"><div class="crimson-text-bold tracking-wide svelte-192psg6"> </div> <ul class="text-sm svelte-192psg6"><li class="flex items-center justify-between flex-nowrap whitespace-nowrap space-x-4 svelte-192psg6"><div class="svelte-192psg6">Resonance level</div> <div class="svelte-192psg6"> </div></li> <li class="flex items-center justify-between flex-nowrap whitespace-nowrap space-x-4 svelte-192psg6"><div class="svelte-192psg6">Portray</div> <div class="svelte-192psg6"> </div></li> <li class="flex items-center justify-between flex-nowrap whitespace-nowrap space-x-4 svelte-192psg6"><div class="svelte-192psg6">Amplification</div> <div class="svelte-192psg6"> </div></li></ul></div></div>'),gt=b('<tr class="raid-entry odd:bg-tuscany-200 even:bg-tuscany-100 svelte-192psg6"><td class="raid-entry-rank px-4 py-2 dark:text-slate-800 svelte-192psg6"></td><td class="raid-entry-username px-4 py-2 dark:text-slate-800 svelte-192psg6"> </td><td class="raid-entry-score px-4 py-2 dark:text-slate-800 svelte-192psg6"> </td><td class="raid-entry-characters dark:text-slate-800 svelte-192psg6"><div class="flex items-center min-w-48 px-4 py-2 svelte-192psg6"></div></td><td class="px-4 py-2 dark:text-slate-800 svelte-192psg6"> </td><td class="px-4 py-2 dark:text-slate-800 whitespace-nowrap svelte-192psg6"> </td></tr>'),ut=b('<tr class="svelte-192psg6"><td colspan="6" class="skeleton crimson-text-regular tracking-wider border border-tuscany-600 svelte-192psg6"><div class="flex items-center justify-center gap-2 py-6 svelte-192psg6"><!> <span class="svelte-192psg6">Loading ranking data</span></div></td></tr>'),mt=b('<main class="flex-grow space-y-6 svelte-192psg6"><div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 svelte-192psg6"><h3 class="crimson-text-bold text-tuscany-600 dark:text-tuscany-300 text-2xl px-10 md:px-0 svelte-192psg6"> </h3> <div class="flex items-center gap-2 px-10 md:px-0 svelte-192psg6"><label for="category" class="sr-only md:not-sr-only svelte-192psg6">Category</label> <select name="category" id="category" class="appearance-none cursor-pointer text-white text-sm bg-tuscany-600 outline-none hover:bg-tuscany-500 focus:bg-tuscany-500 pl-4 pr-8 py-1 bg-[right_0.5rem_center] bg-no-repeat bg-[length:1.5em_1.5em] svelte-192psg6"></select></div></div> <div class="table-container overflow-x-auto svelte-192psg6"><table class="w-full text-left border-collapse border border-tuscany-600 svelte-192psg6"><thead class="svelte-192psg6"><tr class="svelte-192psg6"></tr></thead><tbody><!></tbody></table></div></main>');function Mt(k,n){Be(n,!0);const h={};Ve(h);const L=()=>Xe(Ye,"$page",h);let P=J(R(n.data.category)),S=J(void 0),V=J("pending"),C=R({column:"score",order:"descending"});function de(s,e){return{username:(d,i)=>d==="ascending"?i.sort((r,l)=>new Intl.Collator("en").compare(r.Username,l.Username)):i.sort((r,l)=>new Intl.Collator("en").compare(l.Username,r.Username)),score:(d,i)=>d==="ascending"?i.sort((r,l)=>r.Score-l.Score):i.sort((r,l)=>l.Score-r.Score),"entry date":(d,i)=>d==="ascending"?i.sort((r,l)=>r["Entry Date"].valueOf()-l["Entry Date"].valueOf()):i.sort((r,l)=>l["Entry Date"].valueOf()-r["Entry Date"].valueOf())}[s.column](s.order,e)}async function ve(s){C.column===s&&(C.order=C.order==="ascending"?"descending":"ascending"),C.column=s}$e(async()=>{O(P,R(new URL(window.location.toString()).searchParams.get("category")??"f2p")),O(S,R((await n.data.sheet).raidGroup.find(s=>{var e;return s.toLowerCase().split(" ").join("-")===window.location.pathname.replace(`${Ze}/leaderboard/`,"").replace(`${(e=L().route.id)==null?void 0:e.replace("/(main)/leaderboard/","").replace("/[raid=raid]","")}/`,"")})))}),tt(async()=>{O(S,R((await n.data.sheet).raidGroup.find(s=>s.toLowerCase().split(" ").join("-")===L().params.raid))),n.data.sheet.then(s=>{var e,p;g(S)&&setTimeout(()=>{O(V,"resolved")},Number(((p=(e=s[g(P)][g(S)])==null?void 0:e.values)==null?void 0:p.length)??0)*410)})});var X=mt();He(s=>{w(()=>We.title=`${g(S)??""} | Outside the suitcase`)});var Y=t(X),Z=t(Y),pe=t(Z),ge=a(a(Z,!0)),ue=t(ge),I=a(a(ue,!0));I.__change=[st,et],A(I,73,()=>n.data.categories??[],B,(s,e,p)=>{var d=ot(),i,r=t(d);w(()=>_(r,o(e).toUpperCase())),w(()=>{i!==(i=o(e))&&(d.value=(d.__value=o(e))==null?"":o(e))}),c(s,d)});var me=a(a(Y,!0)),_e=t(me),$=t(_e),he=t($),q=(s,e)=>{let p=()=>e==null?void 0:e().name,d=ie(()=>ce(e==null?void 0:e().sortable,()=>!1)),i=ie(()=>ce(e==null?void 0:e().className,()=>""));var r=x(),l=y(r);E(l,()=>g(d),m=>{var v=dt(),u=t(v);u.__click=[nt,ve,p];var f=t(u),G=t(f),M=a(a(f,!0));E(M,()=>C.column===p().toLowerCase(),T=>{var j=x(),F=y(j);E(F,()=>C.order==="ascending",N=>{var D=lt();c(N,D)},N=>{var D=it();c(N,D)}),c(T,j)},T=>{var j=ct();c(T,j)}),w(()=>{Q(v,`text-lg whitespace-nowrap text-white bg-tuscany-600 ${g(i)??""} svelte-192psg6`),Ke(u,"bg-tuscany-500",C.column===p().toLowerCase()),_(G,p())}),c(m,v)},m=>{var v=vt(),u=t(v);w(()=>{Q(v,`px-4 py-2 text-lg whitespace-nowrap text-white bg-tuscany-600 ${g(i)??""} svelte-192psg6`),_(u,p())}),c(m,v)}),c(s,r)};A(he,73,()=>n.data.headers,B,(s,e,p)=>{var d=x(),i=y(d);E(i,()=>["Username","Score","Entry Date"].includes(o(e)),r=>{var l=x(),m=y(l);q(m,()=>({name:o(e),sortable:!0})),c(r,l)},r=>{var l=x(),m=y(l);E(m,()=>o(e)==="Team",v=>{var u=x(),f=y(u);q(f,()=>({name:o(e),className:"min-w-48"})),c(v,u)},v=>{var u=x(),f=y(u);q(f,()=>({name:o(e)})),c(v,u)},!0),c(r,l)}),c(s,d)});var ee=a($),fe=t(ee);Ge(fe,()=>n.data.sheet,s=>{var e=ut(),p=t(e),d=t(p),i=t(d);Fe(i,{}),c(s,e)},(s,e)=>{var p=x(),d=y(p);E(d,()=>g(S),i=>{var r=x(),l=y(r);A(l,65,()=>{var m;return de(C,((m=g(e)[g(P)][g(S)])==null?void 0:m.values)??[])},B,(m,v,u)=>{var f=gt();K(f,"style",`--animation-order: ${o(u)+1};`);var G=t(f),M=a(G),T=t(M),j=a(M),F=t(j);w(()=>_(F,o(v).Score.toLocaleString()));var N=a(j),D=t(N);A(D,73,()=>o(v).characters,B,(be,U,ht)=>{var ae=x(),ke=y(ae);E(ke,()=>{var z;return(z=n.data.characterMap)==null?void 0:z[o(U).Name]},z=>{var se=pt(),W=t(se);W.__click=[rt];var H=t(W),Se=a(a(W,!0)),re=t(Se),Ce=t(re),Le=a(a(re,!0)),oe=t(Le),je=t(oe),Ue=a(a(je,!0)),Ee=t(Ue),ne=a(a(oe,!0)),Ne=t(ne),Pe=a(a(Ne,!0)),Te=t(Pe),De=a(a(ne,!0)),Oe=t(De),Re=a(a(Oe,!0)),Me=t(Re);w(()=>{var le;K(H,"src",((le=n.data.characterMap[o(U).Name])==null?void 0:le.thumbnail)??""),K(H,"alt",o(U).Name),_(Ce,o(U).Name),_(Ee,o(U).Resonance),_(Te,o(U).Portray),_(Me,o(U).Amplification)}),Je(H),c(z,se)}),c(be,ae)});var te=a(N),we=t(te),xe=a(te),ye=t(xe);w(()=>_(ye,o(v)["Entry Date"].toLocaleDateString("en-CA"))),w(()=>{_(T,o(v).Username),_(we,o(v)["Entry Tag"])}),c(m,f)}),c(i,r)}),c(s,p)}),w(()=>{_(pe,g(S)??"Raid Title"),Q(ee,`${(g(V)==="pending"?"loading":"loaded")??""} svelte-192psg6`)}),Qe(I,()=>g(P),s=>O(P,s)),c(k,X),Ie()}qe(["change","click"]);export{Mt as component,Rt as universal};
//# sourceMappingURL=11.DCbI3Vh8.js.map
