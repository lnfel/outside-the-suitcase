import{K as l,ab as p,a5 as v,ac as y,a1 as m,H as _,ad as T,ae as N,af as R}from"./runtime.C2Zc6Vci.js";function E(e){console.warn("hydration_mismatch")}let i=!1;function O(e){i=e}let d=null,u;function w(e){d=e,u=e&&e[0]}function c(e){if(e.nodeType!==8)return e;var t=e;if(t.data!==l)return e;for(var r=[],a=0;(t=t.nextSibling)!==null;){if(t.nodeType===8){var n=t.data;if(n===l)a+=1;else if(n[0]===p){if(a===0)return d=r,u=r[0],t;a-=1}}r.push(t)}throw E(),v}var h,A;function D(){if(h===void 0){h=window,A=document;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function s(){return document.createTextNode("")}function C(e){const t=e.firstChild;return i?t===null?e.appendChild(s()):c(t):t}function H(e,t){return i?c(u):e.firstChild}function b(e,t=!1){var r=e.nextSibling;if(!i)return r;var a=r.nodeType;if(a===8&&r.data===y)return b(r,t);if(t&&a!==3){var n=s(),f=m.dom;return f.unshift(n),r==null||r.before(n),n}return c(r)}function x(e){e.textContent=""}function o(e,t=m){var r=t.dom;return r===null?t.dom=e:(_(r)||(r=t.dom=[r]),_(e)?r.push(...e):r.push(e)),e}function I(e,t){var r=(t&N)!==0,a=(t&R)!==0,n;return()=>{if(i)return o(r?d:u),u;n||(n=T(e),r||(n=n.firstChild));var f=a?document.importNode(n,!0):n.cloneNode(!0);return o(r?[...f.childNodes]:f),f}}function M(e){if(!i)return o(s());var t=u;return t||e.before(t=s()),o(t),t}function S(){if(i)return o(d),u;var e=document.createDocumentFragment(),t=s();return e.append(t),o([t]),e}function Y(e,t){i||e.before(t)}export{A as $,Y as a,S as b,C as c,c as d,s as e,H as f,u as g,i as h,d as i,O as j,x as k,w as l,D as m,M as n,b as s,I as t};
//# sourceMappingURL=template.DJK7smhD.js.map
