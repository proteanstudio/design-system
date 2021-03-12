(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e20447e6"],{"1d94":function(e,t,n){"use strict";n.r(t);var l=n("4430");const s=Object(l["h"])("h1",null,"Getting started",-1),c=Object(l["h"])("p",null,[Object(l["g"])(" Follow the steps below to install the design system elements and styles. If you notice any problems or if you would like to submit a request, please open an issue in the "),Object(l["h"])("a",{href:"https://github.com/proteanstudio/design-system",target:"_blank",rel:"noreferrer"},"Github repository"),Object(l["g"])(". Please note that all system features and element properties are subject to change until a 1.0.0 version is released. Changes will be listed the Release Notes (coming soon). ")],-1),a=Object(l["h"])("h2",{"data-in-page-anchor":"static"},"Use static assets",-1),o=Object(l["h"])("p",null,[Object(l["g"])(" Static versions of the elements and styles are available for download from "),Object(l["h"])("code",null,"unpkg"),Object(l["g"])(" using "),Object(l["h"])("code",null,"link"),Object(l["g"])(" and "),Object(l["h"])("code",null,"style"),Object(l["g"])(" tags. ")],-1),i=Object(l["h"])("h2",{"data-in-page-anchor":"npm-install"},"Install via NPM",-1),r=Object(l["h"])("p",null,[Object(l["g"])(" To get started, install the "),Object(l["h"])("code",null,"protean-elements"),Object(l["g"])(" and "),Object(l["h"])("code",null,"protean-styles"),Object(l["g"])(" packages with npm or yarn. ")],-1),b=Object(l["g"])(Object(l["A"])("npm install protean-elements\n            npm install protean-styles")),u=Object(l["h"])("h3",null,"Protean Elements",-1),h=Object(l["h"])("h4",null,"Modern browsers",-1),p=Object(l["h"])("p",null," For modern browser support only, run the following snippet in the index.js or equivalent file in your application. ",-1),d=Object(l["h"])("h4",null,"Legacy browsers",-1),j=Object(l["h"])("p",null," For use in the Edge Legacy browser, an additional step is needed. Edge Legacy and Internet Explorer browsers are not actively supported. ",-1),O=Object(l["h"])("h3",null,"Protean Styles",-1),g=Object(l["h"])("h4",null,"SCSS",-1),m=Object(l["h"])("p",null,[Object(l["g"])(" If using "),Object(l["h"])("code",null,"sass-loader"),Object(l["g"])(", the styles can be imported before they are bundled; using the styles this way also allows use of our mixins, such as the "),Object(l["h"])("code",null,"breakpoint"),Object(l["g"])(" mixin. ")],-1),f=Object(l["g"])(Object(l["A"])("@import 'protean-styles/styles/app';")),y=Object(l["h"])("h4",null,"CSS",-1),w=Object(l["h"])("p",null,[Object(l["g"])(" Access fully built styles. There is no need to "),Object(l["h"])("code",null,"npm install protean-styles"),Object(l["g"])(" for this implementation. ")],-1),k=Object(l["f"])('<section><h2 data-in-page-anchor="notes">Notes</h2><ul><li>Protean elements are web components written using Typescript and StencilJS. <ul><li> All element types are declared in the global namespace - the benefits of this surface when querying an element via <code>document.querySelector</code> and when using an element in a <code>.tsx</code> file.</li></ul></li><li>React has some deficiencies that need to be accounted for. <ul><li>The <a href="https://stenciljs.com/docs/react" target="_blank" rel="noreferrer">StencilJS integration docs</a> provide some greater detail and guidance on this matter.</li></ul></li></ul></section>',1);function E(e,t){const n=Object(l["x"])("code-snippet");return Object(l["q"])(),Object(l["d"])(l["a"],null,[s,c,Object(l["h"])("section",null,[a,o,Object(l["h"])(n,{language:"html"},{default:Object(l["E"])(()=>[Object(l["g"])(Object(l["A"])('<script type="module" src="https://unpkg.com/protean-elements@0.1.2/dist/protean-elements/protean-elements.esm.js"><\/script>\n        <link rel="stylesheet" href="https://unpkg.com/protean-styles@0.1.2/dist/css/app.css" />'),1)]),_:1})]),Object(l["h"])("section",null,[i,r,Object(l["h"])(n,null,{default:Object(l["E"])(()=>[b]),_:1}),Object(l["h"])("section",null,[u,Object(l["h"])("section",null,[h,p,Object(l["h"])(n,{language:"js"},{default:Object(l["E"])(()=>[Object(l["g"])(Object(l["A"])("import { defineCustomElements } from 'protean-elements/loader';\n\n                 defineCustomElements();"),1)]),_:1})]),Object(l["h"])("section",null,[d,j,Object(l["h"])(n,{language:"js"},{default:Object(l["E"])(()=>[Object(l["g"])(Object(l["A"])("import { applyPolyfills, defineCustomElements } from 'protean-elements/loader'; \n\n                applyPolyfills().then(() => {\n                    defineCustomElements();\n                });"),1)]),_:1})])]),Object(l["h"])("section",null,[O,Object(l["h"])("section",null,[g,m,Object(l["h"])(n,{language:"css"},{default:Object(l["E"])(()=>[f]),_:1})]),Object(l["h"])("section",null,[y,w,Object(l["h"])(n,{language:"html"},{default:Object(l["E"])(()=>[Object(l["g"])(Object(l["A"])('<link rel="stylesheet" href="https://unpkg.com/protean-styles@0.1.2/dist/css/app.css" />'),1)]),_:1})])])]),k],64)}var S=n("0f9e"),v=n("9ad1"),A=n("fc89");let C=class extends v["b"]{};C=Object(S["a"])([Object(v["a"])({components:{CodeSnippet:A["a"]}})],C);var _=C;n("57ee");_.render=E;t["default"]=_},"3c15":function(e,t,n){},"57ee":function(e,t,n){"use strict";n("3c15")}}]);
//# sourceMappingURL=chunk-e20447e6.b0a9621b.js.map