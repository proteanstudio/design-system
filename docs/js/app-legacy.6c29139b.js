(function(e){function t(t){for(var a,l,s=t[0],c=t[1],i=t[2],u=0,d=[];u<s.length;u++)l=s[u],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);$&&$(t);while(d.length)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},l={app:0},o={app:0},r=[];function s(e){return c.p+"js/"+({"polyfills-core-js":"polyfills-core-js","polyfills-dom":"polyfills-dom"}[e]||e)+"-legacy."+{"chunk-2d21eee5":"c84e9dc7","chunk-c9d019d4":"3aa10b81","chunk-1765dfbd":"b18b7fe1","chunk-2aae628a":"dd9bfb33","chunk-3536828e":"393faca8","chunk-72e22ecc":"9337789b","chunk-7efd222e":"9db86d3c","chunk-e9aac99c":"4431cb01","chunk-d6ce21ce":"73523038","polyfills-core-js":"6b4ac208","polyfills-dom":"47caeffe"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-c9d019d4":1,"chunk-1765dfbd":1,"chunk-2aae628a":1,"chunk-3536828e":1,"chunk-72e22ecc":1,"chunk-7efd222e":1,"chunk-e9aac99c":1,"chunk-d6ce21ce":1};l[e]?t.push(l[e]):0!==l[e]&&n[e]&&t.push(l[e]=new Promise((function(t,n){for(var a="css/"+({"polyfills-core-js":"polyfills-core-js","polyfills-dom":"polyfills-dom"}[e]||e)+"."+{"chunk-2d21eee5":"31d6cfe0","chunk-c9d019d4":"46589f87","chunk-1765dfbd":"0e433876","chunk-2aae628a":"0e433876","chunk-3536828e":"0e433876","chunk-72e22ecc":"0e433876","chunk-7efd222e":"0e433876","chunk-e9aac99c":"0e433876","chunk-d6ce21ce":"0e433876","polyfills-core-js":"31d6cfe0","polyfills-dom":"31d6cfe0"}[e]+".css",o=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var i=r[s],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===a||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],u=i.getAttribute("data-href");if(u===a||u===o)return t()}var $=document.createElement("link");$.rel="stylesheet",$.type="text/css",$.onload=t,$.onerror=function(t){var a=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete l[e],$.parentNode.removeChild($),n(r)},$.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild($)})).then((function(){l[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout($);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+l+")",d.name="ChunkLoadError",d.type=a,d.request=l,n[1](d)}o[e]=void 0}};var $=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var $=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"077a":function(e,t,n){},"1b6f":function(e,t,n){var a={"./protean-button_10.entry.js":["d850","chunk-2d21eee5"]};function l(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],l=t[0];return n.e(t[1]).then((function(){return n(l)}))}l.keys=function(){return Object.keys(a)},l.id="1b6f",e.exports=l},"2a66":function(e,t,n){"use strict";n("ea77")},"3dc2":function(e,t,n){},"802c":function(e,t,n){"use strict";n("077a")},"93b3":function(e,t,n){"use strict";n.d(t,"a",(function(){return $e})),n.d(t,"b",(function(){return V})),n.d(t,"c",(function(){return F})),n.d(t,"d",(function(){return N})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return fe}));const a="protean-elements";let l,o,r=!1,s=!1;const c="undefined"!==typeof window?window:{},i=c.document||{head:{}},u={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,a)=>e.addEventListener(t,n,a),rel:(e,t,n,a)=>e.removeEventListener(t,n,a),ce:(e,t)=>new CustomEvent(e,t)},d=e=>Promise.resolve(e),$=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),h=(e,t,n,a)=>{n&&n.map(([n,a,l])=>{const o=e,r=p(t,l),s=f(n);u.ael(o,a,r,s),(t.$rmListeners$=t.$rmListeners$||[]).push(()=>u.rel(o,a,r,s))})},p=(e,t)=>n=>{try{256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}catch(a){ge(a)}},f=e=>0!==(2&e),m="{visibility:hidden}[stencil-hydrated]{visibility:inherit}",b="http://www.w3.org/1999/xlink",g=(e,t="")=>()=>{},v=(e,t)=>()=>{},y=new WeakMap,O=(e,t,n)=>{let a=Oe.get(e);$&&n?(a=a||new CSSStyleSheet,a.replace(t)):a=t,Oe.set(e,a)},j=(e,t,n,a)=>{let l=k(t),o=Oe.get(l);if(e=11===e.nodeType?e:i,o)if("string"===typeof o){e=e.head||e;let t,n=y.get(e);n||y.set(e,n=new Set),n.has(l)||(t=i.createElement("style"),t.innerHTML=o,e.insertBefore(t,e.querySelector("link")),n&&n.add(l))}else e.adoptedStyleSheets.includes(o)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]);return l},w=e=>{const t=e.$cmpMeta$,n=e.$hostElement$,a=t.$flags$,l=g("attachStyles",t.$tagName$),o=j(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&a&&(n["s-sc"]=o,n.classList.add(o+"-h")),l()},k=(e,t)=>"sc-"+e.$tagName$,C={},x="http://www.w3.org/2000/svg",E="http://www.w3.org/1999/xhtml",S=e=>null!=e,L=e=>(e=typeof e,"object"===e||"function"===e),N=(e,t,...n)=>{let a=null,l=!1,o=!1,r=[];const s=t=>{for(let n=0;n<t.length;n++)a=t[n],Array.isArray(a)?s(a):null!=a&&"boolean"!==typeof a&&((l="function"!==typeof e&&!L(a))&&(a=String(a)),l&&o?r[r.length-1].$text$+=a:r.push(l?R(null,a):a),o=l)};if(s(n),t){const e=t.className||t.class;e&&(t.class="object"!==typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}const c=R(e,null);return c.$attrs$=t,r.length>0&&(c.$children$=r),c},R=(e,t)=>{const n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null};return n},T={},P=e=>e&&e.$tag$===T,M=(e,t,n,a,l,o)=>{if(n!==a){let s=be(e,t),i=t.toLowerCase();if("class"===t){const t=e.classList,l=I(n),o=I(a);t.remove(...l.filter(e=>e&&!o.includes(e))),t.add(...o.filter(e=>e&&!l.includes(e)))}else if(s||"o"!==t[0]||"n"!==t[1]){const c=L(a);if((s||c&&null!==a)&&!l)try{if(e.tagName.includes("-"))e[t]=a;else{let l=null==a?"":a;"list"===t?s=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(r){}let u=!1;i!==(i=i.replace(/^xlink\:?/,""))&&(t=i,u=!0),null==a||!1===a?!1===a&&""!==e.getAttribute(t)||(u?e.removeAttributeNS(b,t):e.removeAttribute(t)):(!s||4&o||l)&&!c&&(a=!0===a?"":a,u?e.setAttributeNS(b,t,a):e.setAttribute(t,a))}else t="-"===t[2]?t.slice(3):be(c,i)?i.slice(2):i[2]+t.slice(3),n&&u.rel(e,t,n,!1),a&&u.ael(e,t,a,!1)}},A=/\s/,I=e=>e?e.split(A):[],H=(e,t,n,a)=>{const l=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,o=e&&e.$attrs$||C,r=t.$attrs$||C;for(a in o)a in r||M(l,a,o[a],void 0,n,t.$flags$);for(a in r)M(l,a,o[a],r[a],n,t.$flags$)},q=(e,t,n,a)=>{let o,s,c=t.$children$[n],u=0;if(null!==c.$text$)o=c.$elm$=i.createTextNode(c.$text$);else{if(r||(r="svg"===c.$tag$),o=c.$elm$=i.createElementNS(r?x:E,c.$tag$),r&&"foreignObject"===c.$tag$&&(r=!1),H(null,c,r),S(l)&&o["s-si"]!==l&&o.classList.add(o["s-si"]=l),c.$children$)for(u=0;u<c.$children$.length;++u)s=q(e,c,u),s&&o.appendChild(s);"svg"===c.$tag$?r=!1:"foreignObject"===o.tagName&&(r=!0)}return o},_=(e,t,n,a,l,r)=>{let s,c=e;for(c.shadowRoot&&c.tagName===o&&(c=c.shadowRoot);l<=r;++l)a[l]&&(s=q(null,n,l),s&&(a[l].$elm$=s,c.insertBefore(s,t)))},B=(e,t,n,a,l)=>{for(;t<=n;++t)(a=e[t])&&(l=a.$elm$,l.remove())},z=(e,t,n,a)=>{let l,o=0,r=0,s=t.length-1,c=t[0],i=t[s],u=a.length-1,d=a[0],$=a[u];while(o<=s&&r<=u)null==c?c=t[++o]:null==i?i=t[--s]:null==d?d=a[++r]:null==$?$=a[--u]:D(c,d)?(U(c,d),c=t[++o],d=a[++r]):D(i,$)?(U(i,$),i=t[--s],$=a[--u]):D(c,$)?(U(c,$),e.insertBefore(c.$elm$,i.$elm$.nextSibling),c=t[++o],$=a[--u]):D(i,d)?(U(i,d),e.insertBefore(i.$elm$,c.$elm$),i=t[--s],d=a[++r]):(l=q(t&&t[r],n,r),d=a[++r],l&&c.$elm$.parentNode.insertBefore(l,c.$elm$));o>s?_(e,null==a[u+1]?null:a[u+1].$elm$,n,a,r,u):r>u&&B(t,o,s)},D=(e,t)=>e.$tag$===t.$tag$,U=(e,t)=>{const n=t.$elm$=e.$elm$,a=e.$children$,l=t.$children$,o=t.$tag$,s=t.$text$;null===s?(r="svg"===o||"foreignObject"!==o&&r,"slot"===o||H(e,t,r),null!==a&&null!==l?z(n,a,t,l):null!==l?(null!==e.$text$&&(n.textContent=""),_(n,null,t,l,0,l.length-1)):null!==a&&B(a,0,a.length-1),r&&"svg"===o&&(r=!1)):e.$text$!==s&&(n.data=s)},W=(e,t)=>{const n=e.$hostElement$,a=e.$cmpMeta$,r=e.$vnode$||R(null,null),s=P(t)?t:N(null,null,t);o=n.tagName,a.$attrsToReflect$&&(s.$attrs$=s.$attrs$||{},a.$attrsToReflect$.map(([e,t])=>s.$attrs$[t]=n[e])),s.$tag$=null,s.$flags$|=4,e.$vnode$=s,s.$elm$=r.$elm$=n.shadowRoot||n,l=n["s-sc"],U(r,s)},F=e=>pe(e).$hostElement$,V=(e,t,n)=>{const a=F(e);return{emit:e=>G(a,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},G=(e,t,n)=>{const a=u.ce(t,n);return e.dispatchEvent(a),a},J=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.$onRenderResolve$=t))},K=(e,t)=>{if(e.$flags$|=16,4&e.$flags$)return void(e.$flags$|=512);J(e,e.$ancestorComponent$);const n=()=>Q(e,t);return Se(n)},Q=(e,t)=>{const n=g("scheduleUpdate",e.$cmpMeta$.$tagName$),a=e.$lazyInstance$;let l;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map(([e,t])=>te(a,e,t)),e.$queuedListeners$=null),l=te(a,"componentWillLoad")),n(),ne(l,()=>X(e,a,t))},X=async(e,t,n)=>{const a=e.$hostElement$,l=g("update",e.$cmpMeta$.$tagName$),o=a["s-rc"];n&&w(e);const r=g("render",e.$cmpMeta$.$tagName$);W(e,Y(e,t)),o&&(o.map(e=>e()),a["s-rc"]=void 0),r(),l();{const t=a["s-p"],n=()=>Z(e);0===t.length?n():(Promise.all(t).then(n),e.$flags$|=4,t.length=0)}},Y=(e,t)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2}catch(n){ge(n,e.$hostElement$)}return t},Z=e=>{const t=e.$cmpMeta$.$tagName$,n=e.$hostElement$,a=g("postUpdate",t),l=e.$lazyInstance$,o=e.$ancestorComponent$;te(l,"componentDidRender"),64&e.$flags$?a():(e.$flags$|=64,ae(n),te(l,"componentDidLoad"),a(),e.$onReadyResolve$(n),o||ee()),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&Ee(()=>K(e,!1)),e.$flags$&=-517},ee=e=>{ae(i.documentElement),Ee(()=>G(c,"appload",{detail:{namespace:a}}))},te=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(a){ge(a)}},ne=(e,t)=>e&&e.then?e.then(t):t(),ae=e=>e.setAttribute("stencil-hydrated",""),le=(e,t)=>null==e||L(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e,oe=(e,t)=>pe(e).$instanceValues$.get(t),re=(e,t,n,a)=>{const l=pe(e),o=l.$hostElement$,r=l.$instanceValues$.get(t),s=l.$flags$,c=l.$lazyInstance$;if(n=le(n,a.$members$[t][0]),(!(8&s)||void 0===r)&&n!==r&&(l.$instanceValues$.set(t,n),c)){if(a.$watchers$&&128&s){const e=a.$watchers$[t];e&&e.map(e=>{try{c[e](n,r,t)}catch(a){ge(a,o)}})}2===(18&s)&&K(l,!1)}},se=(e,t,n)=>{if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const a=Object.entries(t.$members$),l=e.prototype;if(a.map(([e,[a]])=>{(31&a||2&n&&32&a)&&Object.defineProperty(l,e,{get(){return oe(this,e)},set(n){re(this,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const n=new Map;l.attributeChangedCallback=function(e,t,a){u.jmp(()=>{const t=n.get(e);this[t]=(null!==a||"boolean"!==typeof this[t])&&a})},e.observedAttributes=a.filter(([e,t])=>15&t[0]).map(([e,a])=>{const l=a[1]||e;return n.set(l,e),512&a[0]&&t.$attrsToReflect$.push([e,l]),l})}}return e},ce=async(e,t,n,a,l)=>{if(0===(32&t.$flags$)){{if(t.$flags$|=32,l=ye(n),l.then){const e=v();l=await l,e()}l.isProxied||(n.$watchers$=l.watchers,se(l,n,2),l.isProxied=!0);const e=g("createInstance",n.$tagName$);t.$flags$|=8;try{new l(t)}catch(s){ge(s)}t.$flags$&=-9,t.$flags$|=128,e(),ie(t.$lazyInstance$)}if(l.style){let e=l.style;const t=k(n);if(!Oe.has(t)){const a=g("registerStyles",n.$tagName$);O(t,e,!!(1&n.$flags$)),a()}}}const o=t.$ancestorComponent$,r=()=>K(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()},ie=e=>{te(e,"connectedCallback")},ue=e=>{if(0===(1&u.$flags$)){const t=pe(e),n=t.$cmpMeta$,a=g("connectedCallback",n.$tagName$);if(1&t.$flags$)h(e,t,n.$listeners$),ie(t.$lazyInstance$);else{t.$flags$|=1;{let n=e;while(n=n.parentNode||n.host)if(n["s-p"]){J(t,t.$ancestorComponent$=n);break}}n.$members$&&Object.entries(n.$members$).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),ce(e,t,n)}a()}},de=e=>{if(0===(1&u.$flags$)){const t=pe(e),n=t.$lazyInstance$;t.$rmListeners$&&(t.$rmListeners$.map(e=>e()),t.$rmListeners$=void 0),te(n,"disconnectedCallback")}},$e=(e,t={})=>{const n=g(),a=[],l=t.exclude||[],o=c.customElements,r=i.head,s=r.querySelector("meta[charset]"),d=i.createElement("style"),$=[];let h,p=!0;Object.assign(u,t),u.$resourcesUrl$=new URL(t.resourcesUrl||"./",i.baseURI).href,e.map(e=>e[1].map(t=>{const n={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};n.$members$=t[2],n.$listeners$=t[3],n.$attrsToReflect$=[],n.$watchers$={};const r=n.$tagName$,s=class extends HTMLElement{constructor(e){super(e),e=this,me(e,n),1&n.$flags$&&e.attachShadow({mode:"open"})}connectedCallback(){h&&(clearTimeout(h),h=null),p?$.push(this):u.jmp(()=>ue(this))}disconnectedCallback(){u.jmp(()=>de(this))}componentOnReady(){return pe(this).$onReadyPromise$}};n.$lazyBundleId$=e[0],l.includes(r)||o.get(r)||(a.push(r),o.define(r,se(s,n,1)))})),d.innerHTML=a+m,d.setAttribute("data-styles",""),r.insertBefore(d,s?s.nextSibling:r.firstChild),p=!1,$.length?$.map(e=>e.connectedCallback()):u.jmp(()=>h=setTimeout(ee,30)),n()},he=new WeakMap,pe=e=>he.get(e),fe=(e,t)=>he.set(t.$lazyInstance$=e,t),me=(e,t)=>{const n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onReadyPromise$=new Promise(e=>n.$onReadyResolve$=e),e["s-p"]=[],e["s-rc"]=[],h(e,n,t.$listeners$),he.set(e,n)},be=(e,t)=>t in e,ge=(e,t)=>(0,console.error)(e,t),ve=new Map,ye=(e,t,a)=>{const l=e.$tagName$.replace(/-/g,"_"),o=e.$lazyBundleId$,r=ve.get(o);return r?r[l]:n("1b6f")(`./${o}.entry.js`).then(e=>(ve.set(o,e),e[l]),ge)},Oe=new Map,je=[],we=[],ke=(e,t)=>n=>{e.push(n),s||(s=!0,t&&4&u.$flags$?Ee(xe):u.raf(xe))},Ce=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){ge(t)}e.length=0},xe=()=>{Ce(je),Ce(we),(s=je.length>0)&&u.raf(xe)},Ee=e=>d().then(e),Se=ke(we,!0)},a7a6:function(e,t,n){e.exports=n.p+"img/logo-white-text.4e633467.svg"},c768:function(e,t,n){"use strict";n("3dc2")},cd49:function(e,t,n){"use strict";n.r(t);var a=n("79c4"),l=n("a7a6"),o=n.n(l);const r={role:"banner",class:"mobile-banner"},s=Object(a["h"])("img",{src:o.a,class:"protean-logo",alt:"Protean Studio Design System"},null,-1),c={class:"content",tabindex:"-1"};function i(e,t){const n=Object(a["x"])("protean-icon"),l=Object(a["x"])("protean-button"),o=Object(a["x"])("router-link"),i=Object(a["x"])("main-nav"),u=Object(a["x"])("router-view"),d=Object(a["x"])("secondary-nav");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("header",r,[Object(a["h"])(l,{variant:"icon",class:"off-canvas-toggle",ariaLabel:"Toggle Menu",onClick:t[1]||(t[1]=t=>e.showOffCanvas=!e.showOffCanvas)},{default:Object(a["D"])(()=>[Object(a["h"])(n,{type:"menu"})]),_:1}),Object(a["h"])(o,{to:"/",class:"home-link unstyled"},{default:Object(a["D"])(()=>[s]),_:1})]),Object(a["h"])(i,{showOffCanvas:e.showOffCanvas},null,8,["showOffCanvas"]),Object(a["h"])("main",c,[Object(a["h"])("div",null,[Object(a["h"])(u)]),Object(a["h"])(d)])],64)}var u=n("6dbe"),d=n("9fa7"),$=n("e2ad"),h=n.n($);const p={class:"nav-content"},f=Object(a["h"])("img",{src:h.a,alt:"Protean Studio Design System"},null,-1),m={class:"nav-group"},b={class:"heading-3"};function g(e,t){const n=Object(a["x"])("router-link");return Object(a["q"])(),Object(a["d"])("nav",{class:["main-nav",{"show-off-canvas":e.showOffCanvas}]},[Object(a["h"])("div",p,[Object(a["h"])(n,{to:"/",class:"home-link unstyled"},{default:Object(a["D"])(()=>[f]),_:1}),(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.sortedRoutes,(e,t)=>(Object(a["q"])(),Object(a["d"])("div",m,[Object(a["h"])("h2",b,Object(a["z"])(e.title),1),Object(a["h"])("ul",{"aria-label":e.title},[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.children,e=>(Object(a["q"])(),Object(a["d"])("li",null,[Object(a["h"])(n,{to:e.path},{default:Object(a["D"])(()=>[Object(a["g"])(Object(a["z"])(e.name),1)]),_:2},1032,["to"])]))),256))],8,["aria-label"])]))),256))])],2)}var v=n("5cf9");class y extends d["b"]{constructor(){super(...arguments),this.showOffCanvas=!1}get sortedRoutes(){const e=[{title:"Guidelines",children:[]},{title:"Elements",children:[]}],t=this.$router.getRoutes().map(({path:e,name:t})=>({path:e,name:t})).reduce((e,t)=>{if("not-found"===t.name)return e;const n=t.path.includes("elements")?1:0;return e[n].children.push(t),e},e);return t}}Object(u["a"])([Object(v["a"])()],y.prototype,"showOffCanvas",void 0);n("2a66");y.render=g;var O=y;const j={key:0,class:"secondary-nav"};function w(e,t){return e.navItems.length>0?(Object(a["q"])(),Object(a["d"])("nav",j,[Object(a["h"])("ul",null,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.navItems,t=>(Object(a["q"])(),Object(a["d"])("li",null,[Object(a["h"])("a",{href:"javascript://",class:["secondary-nav-item",{active:e.activeTarget===t.path}],"data-target":t.path,onClick:n=>e.scrollToNavItem(t.path)},Object(a["z"])(t.name),11,["data-target","onClick"])]))),256))])])):Object(a["e"])("",!0)}function k(e,t=100){let n;return function(){clearTimeout(n),n=setTimeout(()=>{e()},t)}}class C extends d["b"]{constructor(){super(...arguments),this.navItems=[],this.activeTarget="",this.scrolling=!1,this.scrollListener=k(this.scrollHandler.bind(this),20)}mounted(){window.addEventListener("scroll",this.scrollListener)}unmounted(){window.removeEventListener("scroll",this.scrollListener)}onRouteChanged(){this.navItems=[],this.$nextTick(()=>{this.setSecondaryNavItems(),this.scrollHandler()})}getAnchors(){return Array.from(document.querySelectorAll("[data-in-page-anchor]"))}setSecondaryNavItems(){this.navItems=this.getAnchors().map(e=>{var t,n;const a=e.dataset.inPageAnchor,l=null!==(t=e.dataset.label)&&void 0!==t?t:null===(n=e.textContent)||void 0===n?void 0:n.trim();return{path:a,name:l}}).filter(e=>e.name&&e.path)}scrollToNavItem(e){var t;null===(t=document.querySelector(`[data-in-page-anchor="${e}"]`))||void 0===t||t.scrollIntoView({behavior:"smooth"}),this.activeTarget=e}scrollHandler(){var e,t;const n=this.getAnchors(),a=n.filter(e=>e.getBoundingClientRect().y<15),l=null!==(e=null===a||void 0===a?void 0:a[a.length-1])&&void 0!==e?e:n[0];this.activeTarget=null!==(t=null===l||void 0===l?void 0:l.dataset.inPageAnchor)&&void 0!==t?t:""}}Object(u["a"])([Object(v["b"])("$route")],C.prototype,"onRouteChanged",null);n("c768");C.render=w;var x=C;let E=class extends d["b"]{constructor(){super(...arguments),this.showOffCanvas=!1}closeOffCanvas(){this.showOffCanvas=!1}};Object(u["a"])([Object(v["b"])("$route")],E.prototype,"closeOffCanvas",null),E=Object(u["a"])([Object(d["a"])({components:{MainNav:O,SecondaryNav:x}})],E);var S=E;n("802c");S.render=i;var L=S,N=n("3608");const R=()=>n.e("chunk-d6ce21ce").then(n.bind(null,"f770")),T=()=>Promise.all([n.e("chunk-c9d019d4"),n.e("chunk-1765dfbd")]).then(n.bind(null,"41e7")),P=()=>Promise.all([n.e("chunk-c9d019d4"),n.e("chunk-7efd222e")]).then(n.bind(null,"af86")),M=()=>Promise.all([n.e("chunk-c9d019d4"),n.e("chunk-72e22ecc")]).then(n.bind(null,"11db")),A=()=>Promise.all([n.e("chunk-c9d019d4"),n.e("chunk-3536828e")]).then(n.bind(null,"366a")),I=()=>Promise.all([n.e("chunk-c9d019d4"),n.e("chunk-2aae628a")]).then(n.bind(null,"ba92")),H=()=>Promise.all([n.e("chunk-c9d019d4"),n.e("chunk-e9aac99c")]).then(n.bind(null,"9ae4")),q=[{path:"/",name:"Home",component:R},{path:"/elements/protean-button",name:"Button",component:P},{path:"/elements/protean-checkbox",name:"Checkbox",component:M},{path:"/elements/protean-input",name:"Input",component:T},{path:"/elements/protean-select",name:"Select",component:I},{path:"/elements/protean-message",name:"Message",component:A},{path:"/elements/protean-tab-container",name:"Tabs",component:H},{path:"/:pathMatch(.*)*",name:"not-found",component:R}],_=Object(N["a"])({history:Object(N["b"])(),routes:q,scrollBehavior(e,t,n){return n?{...n}:{top:0}}});var B=_;function z(){var e=[];if("undefined"!==typeof window){var t=window;function a(){try{var e=new URL("b","http://a");return e.pathname="c%20d","http://a/c%20d"===e.href&&e.searchParams}catch(t){return!1}}t.customElements&&(!t.Element||t.Element.prototype.closest&&t.Element.prototype.matches&&t.Element.prototype.remove&&t.Element.prototype.getRootNode)||e.push(n.e("polyfills-dom").then(n.t.bind(null,"0438",7))),"function"===typeof Object.assign&&Object.entries&&Array.prototype.find&&Array.prototype.includes&&String.prototype.startsWith&&String.prototype.endsWith&&(!t.NodeList||t.NodeList.prototype.forEach)&&t.fetch&&a()&&"undefined"!=typeof WeakMap||e.push(n.e("polyfills-core-js").then(n.t.bind(null,"5397",7)))}return Promise.all(e)}var D=n("93b3");const U=()=>Object(D["e"])(),W=(e,t)=>"undefined"===typeof window?Promise.resolve():U().then(()=>Object(D["a"])([["protean-button_10",[[1,"protean-select",{value:[1025],selectedOptions:[1040],multiple:[516],label:[513],ariaLabel:[1,"aria-label"],optional:[516],disabled:[516],errors:[16],dropdownOpen:[32],activeOptionId:[32]},[[0,"change","defaultChangeHandler"],[0,"focus","defaultFocusHandler"],[0,"blur","defaultBlurHandler"]]],[1,"protean-option",{value:[513],label:[513],selected:[516],active:[516],disabled:[516],disabledGroup:[516,"disabled-group"]},[[0,"click","defaultClickHandler"]]],[1,"protean-button",{variant:[513],type:[513],disabled:[516],ariaLabel:[1,"aria-label"]}],[1,"protean-checkbox",{checked:[1540],variant:[513],label:[513],ariaLabel:[1,"aria-label"],alignment:[513],disabled:[516],indeterminate:[516]},[[0,"change","defaultChangeHandler"]]],[1,"protean-optgroup",{label:[513],disabled:[516]}],[1,"protean-tab-container",{value:[1537],name:[513],tabs:[32]},[[0,"change","defaultChangeHandler"]]],[1,"protean-tab-pane",{label:[513],value:[513],name:[513],selected:[4],guid:[2],index:[2]}],[1,"protean-input",{value:[1025],type:[513],label:[513],disabled:[516],role:[513],maxlength:[514],format:[513],optional:[516],hints:[16],errors:[16],suppressMessages:[516,"suppress-messages"],readonly:[516],ariaLabel:[1,"aria-label"],ariaHasPopup:[1,"aria-has-popup"],ariaExpanded:[4,"aria-expanded"]},[[0,"change","defaultChangeHandler"]]],[1,"protean-message",{type:[513],level:[513],variant:[513]}],[1,"protean-icon",{type:[513],use:[513]}]]]],t));(function(){if("undefined"!==typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}})(),z().then(()=>{W()});const F=Object(a["c"])(L);F.config.isCustomElement=e=>e.startsWith("protean-"),F.use(B).mount("#app")},e2ad:function(e,t,n){e.exports=n.p+"img/logo-symbol.53fd2c97.svg"},ea77:function(e,t,n){}});
//# sourceMappingURL=app-legacy.6c29139b.js.map