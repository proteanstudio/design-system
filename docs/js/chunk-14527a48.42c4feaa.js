(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14527a48"],{"51a6":function(e,t,a){"use strict";a("5f0f")},"5f0f":function(e,t,a){},"9ae4":function(e,t,a){"use strict";a.r(t);var c=a("4430");const n=Object(c["g"])("h1",null,"Tabs",-1),o=Object(c["g"])("p",null,"Tabs allow the user to alternate between distinct groups of related content within a single context.",-1),l={class:"overview-content"},s=Object(c["g"])("h2",{"data-in-page-anchor":"overview"},"Overview",-1),i={class:"overview-demo no-controls"},b=Object(c["g"])("p",null,"Tab 1 Content",-1),r=Object(c["g"])("p",null,"Tab 2 Content",-1),p=Object(c["g"])("p",null,"Tab 3 Content",-1),d={class:"overview-demo-snippet"},j=Object(c["i"])(Object(c["D"])('<protean-tab-container\n                    name="{0}"\n                    value="{1}"\n                >\n                <protean-tab-pane\n                name="{0}"\n                label="Tab 1"\n                value="tab1"\n                >\n                    <p>Tab 1 Content</p> {2}\n                </protean-tab-pane>\n                <protean-tab-pane\n                name="{0}"\n                label="Tab 2"\n                value="tab2"\n                >\n                    <p>Tab 2 Content</p>\n                </protean-tab-pane>\n                <protean-tab-pane\n                name="{0}"\n                label="Tab 3"\n                value="tab3"\n                >\n                    <p>Tab 3 Content</p>\n                </protean-tab-pane>\n            </protean-tab-container>\n            ')),u=Object(c["g"])("section",{class:"best-practices-content"},[Object(c["g"])("h2",{"data-in-page-anchor":"best-practices"},"Best practices"),Object(c["g"])("section",null,[Object(c["g"])("h3",null,"Use clear, short tab labels"),Object(c["g"])("ul",null,[Object(c["g"])("li",null," Tab labels should indicate what the user will find within that tab panel. "),Object(c["g"])("li",null," Since tabs use a horizontal layout, aim for labels with one or two words to avoid space issues. ")])]),Object(c["g"])("section",null,[Object(c["g"])("h3",null,"Don’t make the user switch between tabs to complete a task"),Object(c["g"])("ul",null,[Object(c["g"])("li",null," Only one tab can be visible at a time. Tasks that require the user to remember information across multiple tabs introduce significant cognitive load and increase the chance of mistakes. "),Object(c["g"])("li",null," If the user might need to view information across multiple tabs, consider consolidating the information in a single view and separate sections with headings. ")])])],-1),O=Object(c["g"])("h2",{"data-in-page-anchor":"api"},"API",-1),g=Object(c["g"])("h3",null,"Tab Container Properties",-1),v=Object(c["g"])("div",null,[Object(c["i"])(" In the following examples, "),Object(c["g"])("code",null,"element"),Object(c["i"])(" refers to an instance of "),Object(c["g"])("code",null,"protean-tab-container"),Object(c["i"])(" (i.e. "),Object(c["g"])("code",null,"element = document.querySelector('protean-tab-container')"),Object(c["i"])("). ")],-1),h={class:"prop-list"},m={class:"prop-item"},f=Object(c["g"])("div",{class:"prop-info"},[Object(c["g"])("h4",{class:"prop-name"},"value"),Object(c["g"])("div",{class:"prop-type"},[Object(c["g"])("code",null,"string")]),Object(c["g"])("div",{class:"prop-desc"},"The value of the active tab.")],-1),w={class:"prop-example"},T=Object(c["i"])(" element.value = 'tab1'; "),H={class:"prop-item"},_=Object(c["h"])('<div class="prop-info"><h4 class="prop-name">name</h4><div class="prop-type"><code>string</code></div><div class="prop-attribute">Attribute name: <code>name</code></div><div class="prop-desc">The name of the tab-container - used to isolate groups of tab-containers and tab-panes when nested tabs are used.</div></div>',1),x={class:"prop-example"},k=Object(c["i"])(" element.name = 'tab-group'; "),C=Object(c["g"])("h3",null,"Tab Pane Properties",-1),y={class:"prop-list"},A={class:"prop-item"},S=Object(c["h"])('<div class="prop-info"><h4 class="prop-name">label</h4><div class="prop-type"><code>string</code></div><div class="prop-attribute">Attribute name: <code>label</code></div><div class="prop-desc">The visible text used for the tab control.</div></div>',1),N={class:"prop-example"},D=Object(c["i"])(" element.label = 'Tab 1'; "),P={class:"prop-item"},V=Object(c["h"])('<div class="prop-info"><h4 class="prop-name">value</h4><div class="prop-type"><code>string</code></div><div class="prop-attribute">Attribute name: <code>value</code></div><div class="prop-desc">The value of the tab. This value is emitted with the tab-container&#39;s change event and corresponds to the value that need to be set on the tab-container for this pane to be visible.</div></div>',1),I={class:"prop-example"},q=Object(c["i"])(" element.value = 'tab1'; "),E={class:"prop-item"},J=Object(c["h"])('<div class="prop-info"><h4 class="prop-name">name</h4><div class="prop-type"><code>string</code></div><div class="prop-attribute">Attribute name: <code>name</code></div><div class="prop-desc">The name of the tab-pane - used to isolate groups of tab-containers and tab-panes when nested tabs are needed.</div></div>',1),z={class:"prop-example"},B=Object(c["i"])(" element.name = 'tab-group'; "),F=Object(c["g"])("h3",null,"Event",-1),L={class:"prop-list"},M={class:"prop-item"},U={class:"prop-info"},G=Object(c["g"])("h4",{class:"prop-name"},"change",-1),K={class:"prop-desc"},Q=Object(c["i"])(" Fires when a tab is selected. "),R=Object(c["g"])("h5",null,"Event detail",-1),W=Object(c["i"])(Object(c["D"])("event: {\n                                detail: {\n                                    value: string,\n                            }\n                        } ")),X={class:"prop-example"},Y=Object(c["g"])("h3",null,"CSS variables",-1),Z=Object(c["g"])("p",null,[Object(c["i"])("Listed below are the CSS variables that can be adjusted to alter the appearance of "),Object(c["g"])("code",null,"protean-tab-container"),Object(c["i"])(". The default values set in the "),Object(c["g"])("code",null,"protean-styles"),Object(c["i"])(" package are shown in the code snippets.")],-1),$={class:"prop-list stacked"},ee={class:"prop-item"},te=Object(c["g"])("div",{class:"prop-info"},[Object(c["g"])("h4",{class:"prop-name"},"--protean-tab-container-separator-color"),Object(c["g"])("div",{class:"prop-desc"}," The color of the upper border of the tab container. ")],-1),ae={class:"prop-example"},ce=Object(c["i"])(" --protean-tab-container-separator-color: #535353; "),ne={class:"prop-item"},oe=Object(c["g"])("div",{class:"prop-info"},[Object(c["g"])("h4",{class:"prop-name"}," --protean-tab-container-active-border-color"),Object(c["g"])("div",{class:"prop-desc"}," The color of the border of the active tab control. ")],-1),le={class:"prop-example"},se=Object(c["i"])(" --protean-tab-container-active-border-color: var(--action-color); "),ie={class:"prop-item"},be=Object(c["g"])("div",{class:"prop-info"},[Object(c["g"])("h4",{class:"prop-name"}," ---protean-tab-container-hover-background-color"),Object(c["g"])("div",{class:"prop-desc"}," The background color of a tab control when hovered. ")],-1),re={class:"prop-example"},pe=Object(c["i"])(" ---protean-tab-container-hover-background-color: #353535; "),de={class:"prop-item"},je=Object(c["g"])("div",{class:"prop-info"},[Object(c["g"])("h4",{class:"prop-name"}," ---protean-tab-container-hover-background-color"),Object(c["g"])("div",{class:"prop-desc"}," The text color of a tab control when hovered. ")],-1),ue={class:"prop-example"},Oe=Object(c["i"])(" ---protean-tab-container-hover-background-color: #353535; ");function ge(e,t){const a=Object(c["A"])("protean-tab-pane"),ge=Object(c["A"])("protean-tab-container"),ve=Object(c["A"])("code-snippet");return Object(c["t"])(),Object(c["f"])(c["a"],null,[n,o,Object(c["g"])("section",l,[s,Object(c["g"])("div",i,[Object(c["j"])(ge,{name:e.demoName,value:e.demoValue,onChange:t[0]||(t[0]=t=>e.demoValue=t.detail.value)},{default:Object(c["H"])(()=>[Object(c["j"])(a,{name:e.demoName,label:"Tab 1",value:"tab1"},{default:Object(c["H"])(()=>[b]),_:1},8,["name"]),Object(c["j"])(a,{name:e.demoName,label:"Tab 2",value:"tab2"},{default:Object(c["H"])(()=>[r]),_:1},8,["name"]),Object(c["j"])(a,{name:e.demoName,label:"Tab 3",value:"tab3"},{default:Object(c["H"])(()=>[p]),_:1},8,["name"])]),_:1},8,["name","value"])]),Object(c["g"])("div",d,[Object(c["j"])(ve,{substitutions:[e.demoName,e.demoValue]},{default:Object(c["H"])(()=>[j]),_:1},8,["substitutions"])])]),u,Object(c["g"])("section",null,[O,Object(c["g"])("section",null,[g,v,Object(c["g"])("ul",h,[Object(c["g"])("li",m,[f,Object(c["g"])("div",w,[Object(c["j"])(ve,{language:"javascript"},{default:Object(c["H"])(()=>[T]),_:1})])]),Object(c["g"])("li",H,[_,Object(c["g"])("div",x,[Object(c["j"])(ve,{language:"javascript"},{default:Object(c["H"])(()=>[k]),_:1})])])])]),Object(c["g"])("section",null,[C,Object(c["g"])("ul",y,[Object(c["g"])("li",A,[S,Object(c["g"])("div",N,[Object(c["j"])(ve,{language:"javascript"},{default:Object(c["H"])(()=>[D]),_:1})])]),Object(c["g"])("li",P,[V,Object(c["g"])("div",I,[Object(c["j"])(ve,{language:"javascript"},{default:Object(c["H"])(()=>[q]),_:1})])]),Object(c["g"])("li",E,[J,Object(c["g"])("div",z,[Object(c["j"])(ve,{language:"javascript"},{default:Object(c["H"])(()=>[B]),_:1})])])])]),Object(c["g"])("section",null,[F,Object(c["g"])("ul",L,[Object(c["g"])("li",M,[Object(c["g"])("div",U,[G,Object(c["g"])("div",K,[Q,R,Object(c["j"])(ve,{language:"typescript"},{default:Object(c["H"])(()=>[W]),_:1})])]),Object(c["g"])("div",X,[Object(c["j"])(ve,{language:"javascript"},{default:Object(c["H"])(()=>[Object(c["i"])(Object(c["D"])("function onChange(event) {\n                                this.value = event.detail.value;\n                        }"),1)]),_:1}),Object(c["j"])(ve,{language:"html"},{default:Object(c["H"])(()=>[Object(c["i"])(Object(c["D"])('\n                        <protean-select\n                            label="My select field label"\n                            onchange="onChange(event)"\n                        ></protean-select>\n                        '),1)]),_:1})])])])]),Object(c["g"])("section",null,[Y,Z,Object(c["g"])("ul",$,[Object(c["g"])("li",ee,[te,Object(c["g"])("div",ae,[Object(c["j"])(ve,{language:"css"},{default:Object(c["H"])(()=>[ce]),_:1})])]),Object(c["g"])("li",ne,[oe,Object(c["g"])("div",le,[Object(c["j"])(ve,{language:"css"},{default:Object(c["H"])(()=>[se]),_:1})])]),Object(c["g"])("li",ie,[be,Object(c["g"])("div",re,[Object(c["j"])(ve,{language:"css"},{default:Object(c["H"])(()=>[pe]),_:1})])]),Object(c["g"])("li",de,[je,Object(c["g"])("div",ue,[Object(c["j"])(ve,{language:"css"},{default:Object(c["H"])(()=>[Oe]),_:1})])])])])])],64)}var ve,he=a("0f9e"),me=a("9ad1"),fe=a("fc89");function we(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}let Te=(ve=class extends me["b"]{constructor(...e){super(...e),we(this,"demoValue","tab1"),we(this,"demoName","demo-name")}},ve);Te=Object(he["a"])([Object(me["a"])({components:{CodeSnippet:fe["a"]}})],Te);var He=Te;a("51a6");He.render=ge;t["default"]=He}}]);
//# sourceMappingURL=chunk-14527a48.42c4feaa.js.map