import{e as _}from"./runtime.DTLJS4Cp.js";import{i as v}from"./proxy.CKJoFeXp.js";let o=!1;function l(){o||(o=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var n;if(!e.defaultPrevented)for(const r of e.target.elements)(n=r.__on_r)==null||n.call(r)})},{capture:!0}))}function s(e,n,r,i=r){e.addEventListener(n,r);const t=e.__on_r;t?e.__on_r=()=>{t(),i()}:e.__on_r=i,l()}function f(e,n,r){if(e.multiple)return c(e,n);for(var i of e.options){var t=a(i);if(v(t,n)){i.selected=!0;return}}(!r||n!==void 0)&&(e.selectedIndex=-1)}function d(e,n){_(()=>{var r=new MutationObserver(()=>{var i=e.__value;f(e,i)});return r.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{r.disconnect()}})}function g(e,n,r){var i=!0;s(e,"change",()=>{var t;if(e.multiple)t=[].map.call(e.querySelectorAll(":checked"),a);else{var u=e.querySelector(":checked");t=u&&a(u)}r(t)}),_(()=>{var t=n();if(f(e,t,i),i&&t===void 0){var u=e.querySelector(":checked");u!==null&&(t=a(u),r(t))}e.__value=t,i=!1}),d(e)}function c(e,n){for(var r of e.options)r.selected=~n.indexOf(a(r))}function a(e){return"__value"in e?e.__value:e.value}export{g as b};
//# sourceMappingURL=select.C0oBQ22F.js.map