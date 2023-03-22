import{_ as s}from"./styles.scss_vue_type_style_index_0_src_true_lang-b52e92ca.js";import{f as a,a as i,b as e,e as n,w as l,F as r,c,d as t,o as d,t as o}from"./index-8ab0259f.js";const u=e("h1",null,"Getting started",-1),p=e("p",null,[t(" Follow the steps below to install the design system elements and styles. If you notice any problems or if you would like to submit a request, please open an issue in the "),e("a",{href:"https://github.com/proteanstudio/design-system",target:"_blank",rel:"noreferrer"},"Github repository"),t(". Please note that all system features and element properties are subject to change until a 1.0.0 version is released. Changes will be listed in the Release Notes (coming soon). ")],-1),h=e("h2",{"data-in-page-anchor":"static"},"Use static assets",-1),m=e("p",null,[t(" Static versions of the elements and styles are available for download from "),e("code",null,"unpkg"),t(" using "),e("code",null,"link"),t(" and "),e("code",null,"style"),t(" tags. ")],-1),_=e("h2",{"data-in-page-anchor":"npm-install"},"Install via NPM",-1),g=e("p",null,[t(" To get started, install the "),e("code",null,"protean-elements"),t(" and "),e("code",null,"protean-styles"),t(" packages with npm or yarn. ")],-1),f=e("h3",null,"Protean Elements",-1),y=e("h4",null,"Modern browsers",-1),b=e("p",null," For modern browser support only, run the following snippet in the index.js or equivalent file in your application. ",-1),w=e("h4",null,"Legacy browsers",-1),k=e("p",null," For use in the Edge Legacy browser, an additional step is needed. Edge Legacy and Internet Explorer browsers are not actively supported. ",-1),S=e("h3",null,"Protean Styles",-1),x=e("h4",null,"SCSS",-1),v=e("p",null,[t(" If using "),e("code",null,"sass-loader"),t(", the styles can be imported before they are bundled; using the styles this way also allows use of our mixins, such as the "),e("code",null,"breakpoint"),t(" mixin. ")],-1),C=e("h4",null,"CSS",-1),E=e("p",null,[t(" Access fully built styles. There is no need to "),e("code",null,"npm install protean-styles"),t(" for this implementation. ")],-1),N=c('<section><h2 data-in-page-anchor="notes">Notes</h2><ul><li> Protean elements are web components written using Typescript and StencilJS. <ul><li> All element types are declared in the global namespace - the benefits of this surface when querying an element via <code>document.querySelector</code> and when using an element in a <code>.tsx</code> file. </li></ul></li><li> React has some deficiencies that need to be accounted for. <ul><li> The <a href="https://stenciljs.com/docs/react" target="_blank" rel="noreferrer">StencilJS integration docs</a> provide some greater detail and guidance on this matter. </li></ul></li></ul></section>',1),I=a({__name:"index",setup(P){return(j,F)=>(d(),i(r,null,[u,p,e("section",null,[h,m,n(s,{language:"html"},{default:l(()=>[t(o(`
            <script
                type="module"
                src="https://unpkg.com/protean-elements/dist/protean-elements/protean-elements.esm.js"
            ><\/script>
            <link
                rel="stylesheet"
                href="https://unpkg.com/protean-styles/dist/css/app.css"
            />`),1)]),_:1})]),e("section",null,[_,g,n(s,null,{default:l(()=>[t(o(`npm install protean-elements
            npm install protean-styles`))]),_:1}),e("section",null,[f,e("section",null,[y,b,n(s,{language:"js"},{default:l(()=>[t(o(`import { defineCustomElements } from 'protean-elements/loader';

                 defineCustomElements();`),1)]),_:1})]),e("section",null,[w,k,n(s,{language:"js"},{default:l(()=>[t(o(`import { applyPolyfills, defineCustomElements } from 'protean-elements/loader'; 

                applyPolyfills().then(() => {
                    defineCustomElements();
                });`),1)]),_:1})])]),e("section",null,[S,e("section",null,[x,v,n(s,{language:"css"},{default:l(()=>[t(o("@import 'protean-styles/styles/app';"))]),_:1})]),e("section",null,[C,E,n(s,{language:"html"},{default:l(()=>[t(o(`<link
                        rel="stylesheet"
                        href="https://unpkg.com/protean-styles/dist/css/app.css"
                    />`),1)]),_:1})])])]),N],64))}});export{I as default};
