(function(e){function t(t){for(var a,l,r=t[0],c=t[1],i=t[2],u=0,d=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);h&&h(t);while(d.length)d.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,l=1;l<n.length;l++){var r=n[l];0!==o[r]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},l={app:0},o={app:0},s=[];function r(e){return c.p+"js/"+({"polyfills-core-js":"polyfills-core-js","polyfills-dom":"polyfills-dom"}[e]||e)+"-legacy."+{"chunk-0a048c3a":"2e68af8c","chunk-14527a48":"de3a341f","chunk-229f850a":"df878f3f","chunk-4bae6e17":"d405bcff","chunk-5497c747":"21fd22e5","chunk-5764f339":"967f1f14","chunk-5908feb0":"77a0aae6","chunk-79783002":"5aecbcef","chunk-e20447e6":"d8c07784","chunk-e97d52be":"b4923a6e","chunk-2d21a402":"12137792","chunk-2f65d964":"a3c9da61","chunk-6eea66ce":"b5d76c71","chunk-d1822694":"3d20deb9","polyfills-core-js":"9c834f38","polyfills-dom":"e449f421"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0a048c3a":1,"chunk-14527a48":1,"chunk-229f850a":1,"chunk-4bae6e17":1,"chunk-5497c747":1,"chunk-5764f339":1,"chunk-5908feb0":1,"chunk-79783002":1,"chunk-e20447e6":1,"chunk-e97d52be":1,"chunk-2f65d964":1,"chunk-6eea66ce":1,"chunk-d1822694":1};l[e]?t.push(l[e]):0!==l[e]&&n[e]&&t.push(l[e]=new Promise((function(t,n){for(var a="css/"+({"polyfills-core-js":"polyfills-core-js","polyfills-dom":"polyfills-dom"}[e]||e)+"."+{"chunk-0a048c3a":"35eb3fd1","chunk-14527a48":"0e433876","chunk-229f850a":"0e433876","chunk-4bae6e17":"0e433876","chunk-5497c747":"0e433876","chunk-5764f339":"cb7ebc48","chunk-5908feb0":"0e433876","chunk-79783002":"0e433876","chunk-e20447e6":"c30b0172","chunk-e97d52be":"0e433876","chunk-2d21a402":"31d6cfe0","chunk-2f65d964":"0e433876","chunk-6eea66ce":"d66f7591","chunk-d1822694":"cc10b04f","polyfills-core-js":"31d6cfe0","polyfills-dom":"31d6cfe0"}[e]+".css",o=c.p+a,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var i=s[r],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===a||u===o))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){i=d[r],u=i.getAttribute("data-href");if(u===a||u===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete l[e],h.parentNode.removeChild(h),n(s)},h.href=o;var $=document.getElementsByTagName("head")[0];$.appendChild(h)})).then((function(){l[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=s);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(e);var d=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+l+")",d.name="ChunkLoadError",d.type=a,d.request=l,n[1](d)}o[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var h=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1b6f":function(e,t,n){var a={"./protean-button_11.entry.js":["bb5a","chunk-2d21a402"]};function l(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],l=t[0];return n.e(t[1]).then((function(){return n(l)}))}l.keys=function(){return Object.keys(a)},l.id="1b6f",e.exports=l},2617:function(e,t,n){var a={"./logo-dark-text.svg":"6a33","./logo-white-text.svg":"a7a6"};function l(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=o,e.exports=l,l.id="2617"},"2a66":function(e,t,n){"use strict";n("9672")},"6a33":function(e,t,n){e.exports=n.p+"img/logo-dark-text.6a3c7f9d.svg"},"6fe2":function(e,t,n){"use strict";n.d(t,"a",(function(){return he})),n.d(t,"b",(function(){return G})),n.d(t,"c",(function(){return V})),n.d(t,"d",(function(){return M})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return pe}));const a="protean-elements";let l,o,s=!1,r=!1;const c="undefined"!==typeof window?window:{},i=c.document||{head:{}},u={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,a)=>e.addEventListener(t,n,a),rel:(e,t,n,a)=>e.removeEventListener(t,n,a),ce:(e,t)=>new CustomEvent(e,t)},d=e=>Promise.resolve(e),h=(()=>{try{return new CSSStyleSheet,"function"===typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),$=(e,t,n,a)=>{n&&n.map(([n,a,l])=>{const o=e,s=f(t,l),r=p(n);u.ael(o,a,s,r),(t.$rmListeners$=t.$rmListeners$||[]).push(()=>u.rel(o,a,s,r))})},f=(e,t)=>n=>{try{256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}catch(a){be(a)}},p=e=>0!==(2&e),m="{visibility:hidden}[stencil-hydrated]{visibility:inherit}",g="http://www.w3.org/1999/xlink",b=(e,t="")=>()=>{},v=(e,t)=>()=>{},y=new WeakMap,O=(e,t,n)=>{let a=Oe.get(e);h&&n?(a=a||new CSSStyleSheet,a.replace(t)):a=t,Oe.set(e,a)},j=(e,t,n,a)=>{let l=w(t),o=Oe.get(l);if(e=11===e.nodeType?e:i,o)if("string"===typeof o){e=e.head||e;let t,n=y.get(e);n||y.set(e,n=new Set),n.has(l)||(t=i.createElement("style"),t.innerHTML=o,e.insertBefore(t,e.querySelector("link")),n&&n.add(l))}else e.adoptedStyleSheets.includes(o)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]);return l},k=e=>{const t=e.$cmpMeta$,n=e.$hostElement$,a=t.$flags$,l=b("attachStyles",t.$tagName$),o=j(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&a&&(n["s-sc"]=o,n.classList.add(o+"-h")),l()},w=(e,t)=>"sc-"+e.$tagName$,C={},E="http://www.w3.org/2000/svg",x="http://www.w3.org/1999/xhtml",L=e=>null!=e,S=e=>(e=typeof e,"object"===e||"function"===e),M=(e,t,...n)=>{let a=null,l=!1,o=!1,s=[];const r=t=>{for(let n=0;n<t.length;n++)a=t[n],Array.isArray(a)?r(a):null!=a&&"boolean"!==typeof a&&((l="function"!==typeof e&&!S(a))&&(a=String(a)),l&&o?s[s.length-1].$text$+=a:s.push(l?R(null,a):a),o=l)};if(r(n),t){const e=t.className||t.class;e&&(t.class="object"!==typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}const c=R(e,null);return c.$attrs$=t,s.length>0&&(c.$children$=s),c},R=(e,t)=>{const n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null};return n},T={},N=e=>e&&e.$tag$===T,P=(e,t,n,a,l,o)=>{if(n!==a){let r=ge(e,t),i=t.toLowerCase();if("class"===t){const t=e.classList,l=I(n),o=I(a);t.remove(...l.filter(e=>e&&!o.includes(e))),t.add(...o.filter(e=>e&&!l.includes(e)))}else if(r||"o"!==t[0]||"n"!==t[1]){const c=S(a);if((r||c&&null!==a)&&!l)try{if(e.tagName.includes("-"))e[t]=a;else{let l=null==a?"":a;"list"===t?r=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(s){}let u=!1;i!==(i=i.replace(/^xlink\:?/,""))&&(t=i,u=!0),null==a||!1===a?!1===a&&""!==e.getAttribute(t)||(u?e.removeAttributeNS(g,t):e.removeAttribute(t)):(!r||4&o||l)&&!c&&(a=!0===a?"":a,u?e.setAttributeNS(g,t,a):e.setAttribute(t,a))}else t="-"===t[2]?t.slice(3):ge(c,i)?i.slice(2):i[2]+t.slice(3),n&&u.rel(e,t,n,!1),a&&u.ael(e,t,a,!1)}},A=/\s/,I=e=>e?e.split(A):[],q=(e,t,n,a)=>{const l=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,o=e&&e.$attrs$||C,s=t.$attrs$||C;for(a in o)a in s||P(l,a,o[a],void 0,n,t.$flags$);for(a in s)P(l,a,o[a],s[a],n,t.$flags$)},H=(e,t,n,a)=>{let o,r,c=t.$children$[n],u=0;if(null!==c.$text$)o=c.$elm$=i.createTextNode(c.$text$);else{if(s||(s="svg"===c.$tag$),o=c.$elm$=i.createElementNS(s?E:x,c.$tag$),s&&"foreignObject"===c.$tag$&&(s=!1),q(null,c,s),L(l)&&o["s-si"]!==l&&o.classList.add(o["s-si"]=l),c.$children$)for(u=0;u<c.$children$.length;++u)r=H(e,c,u),r&&o.appendChild(r);"svg"===c.$tag$?s=!1:"foreignObject"===o.tagName&&(s=!0)}return o},_=(e,t,n,a,l,s)=>{let r,c=e;for(c.shadowRoot&&c.tagName===o&&(c=c.shadowRoot);l<=s;++l)a[l]&&(r=H(null,n,l),r&&(a[l].$elm$=r,c.insertBefore(r,t)))},B=(e,t,n,a,l)=>{for(;t<=n;++t)(a=e[t])&&(l=a.$elm$,l.remove())},U=(e,t,n,a)=>{let l,o=0,s=0,r=t.length-1,c=t[0],i=t[r],u=a.length-1,d=a[0],h=a[u];while(o<=r&&s<=u)null==c?c=t[++o]:null==i?i=t[--r]:null==d?d=a[++s]:null==h?h=a[--u]:F(c,d)?(z(c,d),c=t[++o],d=a[++s]):F(i,h)?(z(i,h),i=t[--r],h=a[--u]):F(c,h)?(z(c,h),e.insertBefore(c.$elm$,i.$elm$.nextSibling),c=t[++o],h=a[--u]):F(i,d)?(z(i,d),e.insertBefore(i.$elm$,c.$elm$),i=t[--r],d=a[++s]):(l=H(t&&t[s],n,s),d=a[++s],l&&c.$elm$.parentNode.insertBefore(l,c.$elm$));o>r?_(e,null==a[u+1]?null:a[u+1].$elm$,n,a,s,u):s>u&&B(t,o,r)},F=(e,t)=>e.$tag$===t.$tag$,z=(e,t)=>{const n=t.$elm$=e.$elm$,a=e.$children$,l=t.$children$,o=t.$tag$,r=t.$text$;null===r?(s="svg"===o||"foreignObject"!==o&&s,"slot"===o||q(e,t,s),null!==a&&null!==l?U(n,a,t,l):null!==l?(null!==e.$text$&&(n.textContent=""),_(n,null,t,l,0,l.length-1)):null!==a&&B(a,0,a.length-1),s&&"svg"===o&&(s=!1)):e.$text$!==r&&(n.data=r)},D=(e,t)=>{const n=e.$hostElement$,a=e.$cmpMeta$,s=e.$vnode$||R(null,null),r=N(t)?t:M(null,null,t);o=n.tagName,a.$attrsToReflect$&&(r.$attrs$=r.$attrs$||{},a.$attrsToReflect$.map(([e,t])=>r.$attrs$[t]=n[e])),r.$tag$=null,r.$flags$|=4,e.$vnode$=r,r.$elm$=s.$elm$=n.shadowRoot||n,l=n["s-sc"],z(s,r)},V=e=>fe(e).$hostElement$,G=(e,t,n)=>{const a=V(e);return{emit:e=>W(a,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},W=(e,t,n)=>{const a=u.ce(t,n);return e.dispatchEvent(a),a},J=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.$onRenderResolve$=t))},K=(e,t)=>{if(e.$flags$|=16,4&e.$flags$)return void(e.$flags$|=512);J(e,e.$ancestorComponent$);const n=()=>Q(e,t);return Le(n)},Q=(e,t)=>{const n=b("scheduleUpdate",e.$cmpMeta$.$tagName$),a=e.$lazyInstance$;let l;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map(([e,t])=>te(a,e,t)),e.$queuedListeners$=null),l=te(a,"componentWillLoad")),n(),ne(l,()=>X(e,a,t))},X=async(e,t,n)=>{const a=e.$hostElement$,l=b("update",e.$cmpMeta$.$tagName$),o=a["s-rc"];n&&k(e);const s=b("render",e.$cmpMeta$.$tagName$);Y(e,t),o&&(o.map(e=>e()),a["s-rc"]=void 0),s(),l();{const t=a["s-p"],n=()=>Z(e);0===t.length?n():(Promise.all(t).then(n),e.$flags$|=4,t.length=0)}},Y=(e,t,n)=>{try{t=t.render&&t.render(),e.$flags$&=-17,e.$flags$|=2,D(e,t)}catch(a){be(a,e.$hostElement$)}return null},Z=e=>{const t=e.$cmpMeta$.$tagName$,n=e.$hostElement$,a=b("postUpdate",t),l=e.$lazyInstance$,o=e.$ancestorComponent$;te(l,"componentDidRender"),64&e.$flags$?a():(e.$flags$|=64,ae(n),te(l,"componentDidLoad"),a(),e.$onReadyResolve$(n),o||ee()),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&xe(()=>K(e,!1)),e.$flags$&=-517},ee=e=>{ae(i.documentElement),xe(()=>W(c,"appload",{detail:{namespace:a}}))},te=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(a){be(a)}},ne=(e,t)=>e&&e.then?e.then(t):t(),ae=e=>e.setAttribute("stencil-hydrated",""),le=(e,t)=>null==e||S(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e,oe=(e,t)=>fe(e).$instanceValues$.get(t),se=(e,t,n,a)=>{const l=fe(e),o=l.$hostElement$,s=l.$instanceValues$.get(t),r=l.$flags$,c=l.$lazyInstance$;if(n=le(n,a.$members$[t][0]),(!(8&r)||void 0===s)&&n!==s&&(l.$instanceValues$.set(t,n),c)){if(a.$watchers$&&128&r){const e=a.$watchers$[t];e&&e.map(e=>{try{c[e](n,s,t)}catch(a){be(a,o)}})}2===(18&r)&&K(l,!1)}},re=(e,t,n)=>{if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const a=Object.entries(t.$members$),l=e.prototype;if(a.map(([e,[a]])=>{(31&a||2&n&&32&a)&&Object.defineProperty(l,e,{get(){return oe(this,e)},set(n){se(this,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const n=new Map;l.attributeChangedCallback=function(e,t,a){u.jmp(()=>{const t=n.get(e);this[t]=(null!==a||"boolean"!==typeof this[t])&&a})},e.observedAttributes=a.filter(([e,t])=>15&t[0]).map(([e,a])=>{const l=a[1]||e;return n.set(l,e),512&a[0]&&t.$attrsToReflect$.push([e,l]),l})}}return e},ce=async(e,t,n,a,l)=>{if(0===(32&t.$flags$)){{if(t.$flags$|=32,l=ye(n),l.then){const e=v();l=await l,e()}l.isProxied||(n.$watchers$=l.watchers,re(l,n,2),l.isProxied=!0);const e=b("createInstance",n.$tagName$);t.$flags$|=8;try{new l(t)}catch(r){be(r)}t.$flags$&=-9,t.$flags$|=128,e(),ie(t.$lazyInstance$)}if(l.style){let e=l.style;const t=w(n);if(!Oe.has(t)){const a=b("registerStyles",n.$tagName$);O(t,e,!!(1&n.$flags$)),a()}}}const o=t.$ancestorComponent$,s=()=>K(t,!0);o&&o["s-rc"]?o["s-rc"].push(s):s()},ie=e=>{te(e,"connectedCallback")},ue=e=>{if(0===(1&u.$flags$)){const t=fe(e),n=t.$cmpMeta$,a=b("connectedCallback",n.$tagName$);if(1&t.$flags$)$(e,t,n.$listeners$),ie(t.$lazyInstance$);else{t.$flags$|=1;{let n=e;while(n=n.parentNode||n.host)if(n["s-p"]){J(t,t.$ancestorComponent$=n);break}}n.$members$&&Object.entries(n.$members$).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),ce(e,t,n)}a()}},de=e=>{if(0===(1&u.$flags$)){const t=fe(e),n=t.$lazyInstance$;t.$rmListeners$&&(t.$rmListeners$.map(e=>e()),t.$rmListeners$=void 0),te(n,"disconnectedCallback")}},he=(e,t={})=>{const n=b(),a=[],l=t.exclude||[],o=c.customElements,s=i.head,r=s.querySelector("meta[charset]"),d=i.createElement("style"),h=[];let $,f=!0;Object.assign(u,t),u.$resourcesUrl$=new URL(t.resourcesUrl||"./",i.baseURI).href,e.map(e=>e[1].map(t=>{const n={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};n.$members$=t[2],n.$listeners$=t[3],n.$attrsToReflect$=[],n.$watchers$={};const s=n.$tagName$,r=class extends HTMLElement{constructor(e){super(e),e=this,me(e,n),1&n.$flags$&&e.attachShadow({mode:"open"})}connectedCallback(){$&&(clearTimeout($),$=null),f?h.push(this):u.jmp(()=>ue(this))}disconnectedCallback(){u.jmp(()=>de(this))}componentOnReady(){return fe(this).$onReadyPromise$}};n.$lazyBundleId$=e[0],l.includes(s)||o.get(s)||(a.push(s),o.define(s,re(r,n,1)))})),d.innerHTML=a+m,d.setAttribute("data-styles",""),s.insertBefore(d,r?r.nextSibling:s.firstChild),f=!1,h.length?h.map(e=>e.connectedCallback()):u.jmp(()=>$=setTimeout(ee,30)),n()},$e=new WeakMap,fe=e=>$e.get(e),pe=(e,t)=>$e.set(t.$lazyInstance$=e,t),me=(e,t)=>{const n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onReadyPromise$=new Promise(e=>n.$onReadyResolve$=e),e["s-p"]=[],e["s-rc"]=[],$(e,n,t.$listeners$),$e.set(e,n)},ge=(e,t)=>t in e,be=(e,t)=>(0,console.error)(e,t),ve=new Map,ye=(e,t,a)=>{const l=e.$tagName$.replace(/-/g,"_"),o=e.$lazyBundleId$,s=ve.get(o);return s?s[l]:n("1b6f")(`./${o}.entry.js`).then(e=>(ve.set(o,e),e[l]),be)},Oe=new Map,je=[],ke=[],we=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&u.$flags$?xe(Ee):u.raf(Ee))},Ce=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){be(t)}e.length=0},Ee=()=>{Ce(je),Ce(ke),(r=je.length>0)&&u.raf(Ee)},xe=e=>d().then(e),Le=we(ke,!0)},"802c":function(e,t,n){"use strict";n("f5f5")},9672:function(e,t,n){},a7a6:function(e,t,n){e.exports=n.p+"img/logo-white-text.ea9439a2.svg"},c768:function(e,t,n){"use strict";n("d1a0")},cd49:function(e,t,n){"use strict";n.r(t);var a=n("4430");const l={class:"mobile-banner"};function o(e,t){const n=Object(a["x"])("protean-icon"),o=Object(a["x"])("protean-button"),s=Object(a["x"])("router-link"),r=Object(a["x"])("main-nav"),c=Object(a["x"])("router-view"),i=Object(a["x"])("secondary-nav"),u=Object(a["y"])("prop");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("header",l,[Object(a["F"])(Object(a["h"])(o,{variant:"icon",class:"off-canvas-toggle",onClick:t[1]||(t[1]=t=>e.showOffCanvas=!e.showOffCanvas)},{default:Object(a["E"])(()=>[Object(a["h"])(n,{type:"menu"})]),_:1},512),[[u,"Toggle Menu","a11yLabel"]]),Object(a["h"])(s,{to:"/",class:"home-link unstyled"},{default:Object(a["E"])(()=>[Object(a["h"])("img",{src:e.logoURL,class:"protean-logo",alt:"Protean Design System"},null,8,["src"])]),_:1})]),Object(a["h"])(r,{showOffCanvas:e.showOffCanvas,lightModeEnabled:e.lightModeEnabled,onHideOffCanvas:t[2]||(t[2]=t=>e.showOffCanvas=!1),onToggleLightMode:e.toggleLightMode},null,8,["showOffCanvas","lightModeEnabled","onToggleLightMode"]),Object(a["h"])("main",{class:e.routeClassBinding,tabindex:"-1"},[Object(a["h"])("div",null,[Object(a["h"])(c)]),Object(a["h"])(i)],2)],64)}var s=n("0f9e"),r=n("9ad1"),c=n("e2ad"),i=n.n(c);const u=Object(a["h"])("img",{src:i.a,alt:"Protean Design System"},null,-1),d={class:"nav-group"};function h(e,t){const n=Object(a["x"])("router-link"),l=Object(a["x"])("protean-checkbox"),o=Object(a["x"])("protean-click-elsewhere"),s=Object(a["y"])("prop");return Object(a["q"])(),Object(a["d"])("nav",{class:["main-nav",{"show-off-canvas":e.showOffCanvas}],"aria-label":"Main navigation"},[Object(a["h"])(o,{onChange:t[2]||(t[2]=Object(a["G"])(t=>e.$emit("hide-off-canvas"),["self"])),class:"nav-content"},{default:Object(a["E"])(()=>[Object(a["h"])(n,{to:"/",class:"home-link unstyled"},{default:Object(a["E"])(()=>[u]),_:1}),(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.sortedRoutes,(e,t)=>(Object(a["q"])(),Object(a["d"])("div",d,[e.title?(Object(a["q"])(),Object(a["d"])("h2",{key:0,class:"heading-3",id:`nav-group-${t}-heading`},Object(a["A"])(e.title),9,["id"])):Object(a["e"])("",!0),Object(a["h"])("ul",{"aria-labelledby":e.title?`nav-group-${t}-heading`:null},[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.children,e=>(Object(a["q"])(),Object(a["d"])("li",null,[Object(a["h"])(n,{to:e.path},{default:Object(a["E"])(()=>[Object(a["g"])(Object(a["A"])(e.name),1)]),_:2},1032,["to"])]))),256))],8,["aria-labelledby"])]))),256)),Object(a["F"])(Object(a["h"])(l,{class:"light-mode-toggle",label:"Light mode",variant:"toggle",alignment:"right",onChange:t[1]||(t[1]=t=>e.$emit("toggle-light-mode",t))},null,512),[[s,e.lightModeEnabled,"checked"]])]),_:1})],2)}var $=n("7e44");let f=class extends r["b"]{constructor(){super(...arguments),this.showOffCanvas=!1,this.lightModeEnabled=!1}get sortedRoutes(){const e=[{children:[]},{title:"Guidelines",children:[]},{title:"Elements",children:[]}],t=this.$router.getRoutes().map(({path:e,name:t})=>({path:e,name:t})).reduce((e,t)=>{var n;const a=["Home","not-found"];if(a.includes(t.name))return e;const l={guidelines:1,elements:2},o=null!==(n=l[t.path.split("/")[1]])&&void 0!==n?n:0;return e[o].children.push(t),e},e).filter(e=>e.children.length>0);return t}};Object(s["a"])([Object($["a"])()],f.prototype,"showOffCanvas",void 0),Object(s["a"])([Object($["a"])()],f.prototype,"lightModeEnabled",void 0),f=Object(s["a"])([Object(r["a"])({emits:["hide-off-canvas","toggle-light-mode"]})],f);var p=f;n("2a66");p.render=h;var m=p;const g={key:0,class:"secondary-nav","aria-label":"In-page navigation"};function b(e,t){return e.navItems.length>0?(Object(a["q"])(),Object(a["d"])("nav",g,[Object(a["h"])("ul",null,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.navItems,t=>(Object(a["q"])(),Object(a["d"])("li",null,[Object(a["h"])("a",{href:"javascript://",class:["secondary-nav-item",{active:e.activeTarget===t.path}],"data-target":t.path,onClick:n=>e.scrollToNavItem(t.path)},Object(a["A"])(t.name),11,["data-target","onClick"])]))),256))])])):Object(a["e"])("",!0)}function v(e,t=100){let n;return function(){clearTimeout(n),n=setTimeout(e,t)}}class y extends r["b"]{constructor(){super(...arguments),this.navItems=[],this.activeTarget="",this.scrollListener=v(this.scrollHandler.bind(this),20)}mounted(){window.addEventListener("scroll",this.scrollListener,{passive:!0})}unmounted(){window.removeEventListener("scroll",this.scrollListener)}onRouteChanged(){this.navItems=[],this.$nextTick(()=>{this.setSecondaryNavItems(),this.scrollHandler()})}getAnchors(){return Array.from(document.querySelectorAll("[data-in-page-anchor]"))}setSecondaryNavItems(){this.navItems=this.getAnchors().map(e=>{var t,n;const a=e.dataset.inPageAnchor,l=null!==(t=e.dataset.label)&&void 0!==t?t:null===(n=e.textContent)||void 0===n?void 0:n.trim();return{path:a,name:l}}).filter(e=>e.name&&e.path)}scrollToNavItem(e){var t;null===(t=document.querySelector(`[data-in-page-anchor="${e}"]`))||void 0===t||t.scrollIntoView({behavior:"smooth"}),this.activeTarget=e}scrollHandler(){var e,t;const n=this.getAnchors(),a=n.filter(e=>e.getBoundingClientRect().y<15),l=null!==(e=null===a||void 0===a?void 0:a[a.length-1])&&void 0!==e?e:n[0];this.activeTarget=null!==(t=null===l||void 0===l?void 0:l.dataset.inPageAnchor)&&void 0!==t?t:""}}Object(s["a"])([Object($["b"])("$route")],y.prototype,"onRouteChanged",null);n("c768");y.render=b;var O=y;let j=class extends r["b"]{constructor(){super(...arguments),this.showOffCanvas=!1,this.lightModeEnabled=!1}mounted(){const e="true"===localStorage.getItem("lightModeEnabled");e&&(this.lightModeEnabled=e,document.documentElement.classList.add("light"))}closeOffCanvas(){this.showOffCanvas=!1}get logoURL(){return n("2617")(`./logo-${this.lightModeEnabled?"dark":"white"}-text.svg`)}get routeClassBinding(){const{fullPath:e,name:t}=this.$route;return"not-found"===t?"not-found":"/"===e?"home":e.split("/").join(" ").trim()}toggleLightMode(e){const t=e.detail.checked;this.lightModeEnabled=t,localStorage.setItem("lightModeEnabled",t),document.documentElement.classList.toggle("light")}};Object(s["a"])([Object($["b"])("$route")],j.prototype,"closeOffCanvas",null),j=Object(s["a"])([Object(r["a"])({components:{MainNav:m,SecondaryNav:O}})],j);var k=j;n("802c");k.render=o;var w=k,C=n("9c2b");const E=()=>n.e("chunk-d1822694").then(n.bind(null,"f770")),x=()=>n.e("chunk-6eea66ce").then(n.bind(null,"dbf9")),L=()=>Promise.all([n.e("chunk-0a048c3a"),n.e("chunk-e20447e6")]).then(n.bind(null,"1d94")),S=()=>n.e("chunk-2f65d964").then(n.bind(null,"38ce")),M=()=>Promise.all([n.e("chunk-0a048c3a"),n.e("chunk-229f850a")]).then(n.bind(null,"fa74")),R=()=>Promise.all([n.e("chunk-0a048c3a"),n.e("chunk-4bae6e17")]).then(n.bind(null,"41e7")),T=()=>Promise.all([n.e("chunk-0a048c3a"),n.e("chunk-79783002")]).then(n.bind(null,"af86")),N=()=>Promise.all([n.e("chunk-0a048c3a"),n.e("chunk-5908feb0")]).then(n.bind(null,"11db")),P=()=>Promise.all([n.e("chunk-0a048c3a"),n.e("chunk-5497c747")]).then(n.bind(null,"366a")),A=()=>Promise.all([n.e("chunk-0a048c3a"),n.e("chunk-e97d52be")]).then(n.bind(null,"ba92")),I=()=>Promise.all([n.e("chunk-0a048c3a"),n.e("chunk-14527a48")]).then(n.bind(null,"9ae4")),q=()=>Promise.all([n.e("chunk-0a048c3a"),n.e("chunk-5764f339")]).then(n.bind(null,"f6ea")),H=[{path:"/",name:"Home",component:E},{path:"/getting-started",name:"Getting started",component:L},{path:"/guidelines/accessibility",name:"Accessibility",component:S},{path:"/guidelines/css-variables",name:"CSS variables",component:M},{path:"/guidelines/typography",name:"Typography",component:q},{path:"/elements/protean-button",name:"Button",component:T},{path:"/elements/protean-checkbox",name:"Checkboxes & toggles",component:N},{path:"/elements/protean-input",name:"Input field",component:R},{path:"/elements/protean-select",name:"Select",component:A},{path:"/elements/protean-message",name:"Message",component:P},{path:"/elements/protean-tab-container",name:"Tabs",component:I},{path:"/:pathMatch(.*)*",name:"not-found",component:x}],_=Object(C["a"])({history:Object(C["b"])(),routes:H,scrollBehavior(e,t,n){return n?{...n}:{top:0}}});var B=_;var U=n("6fe2");const F=()=>Object(U["e"])(),z=(e,t)=>"undefined"===typeof window?Promise.resolve():F().then(()=>Object(U["a"])([["protean-button_11",[[1,"protean-select",{value:[1025],selectedOptions:[1040],multiple:[516],label:[513],a11yLabel:[513,"a11y-label"],optional:[516],disabled:[516],errors:[16],dropdownOpen:[32],activeOptionId:[32]},[[0,"change","defaultChangeHandler"],[0,"focus","delegateFocus"]]],[1,"protean-option",{value:[513],label:[513],selected:[516],active:[516],disabled:[516],disabledGroup:[516,"disabled-group"]},[[0,"click","defaultClickHandler"]]],[1,"protean-button",{variant:[513],type:[513],disabled:[516],a11yLabel:[513,"a11y-label"]},[[0,"focus","delegateFocus"]]],[1,"protean-checkbox",{checked:[1540],variant:[513],label:[513],a11yLabel:[513,"a11y-label"],alignment:[513],disabled:[516],indeterminate:[516]},[[0,"change","defaultChangeHandler"],[0,"focus","delegateFocus"]]],[1,"protean-optgroup",{label:[513],disabled:[516]}],[1,"protean-tab-container",{value:[1537],name:[513],tabs:[32]},[[0,"change","defaultChangeHandler"]]],[1,"protean-tab-pane",{label:[513],value:[513],name:[513],selected:[4],guid:[2],index:[2]}],[1,"protean-input",{value:[1025],type:[513],label:[513],disabled:[516],maxlength:[514],format:[513],optional:[516],hints:[16],errors:[16],suppressMessages:[516,"suppress-messages"],readonly:[516],a11yLabel:[513,"a11y-label"],ariaHasPopup:[1,"aria-has-popup"],ariaExpanded:[4,"aria-expanded"],ariaRole:[1,"aria-role"],formattedValueObject:[32]},[[0,"change","defaultChangeHandler"],[0,"focus","delegateFocus"]]],[0,"protean-click-elsewhere"],[1,"protean-message",{type:[513],level:[513],variant:[513]}],[1,"protean-icon",{type:[513],use:[513]}]]]],t));(function(){if("undefined"!==typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}})();const D={mounted(e,t){t.arg&&(e[t.arg]=t.value)},updated(e,t){t.arg&&(e[t.arg]=t.value)}};var V=D;z(),Object(a["c"])(w).directive("prop",V).use(B).mount("#app")},d1a0:function(e,t,n){},e2ad:function(e,t,n){e.exports=n.p+"img/logo-symbol.c0aa29d8.svg"},f5f5:function(e,t,n){}});
//# sourceMappingURL=app-legacy.19b8be04.js.map