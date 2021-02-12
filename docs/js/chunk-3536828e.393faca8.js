(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3536828e"],{"366a":function(e,t,s){"use strict";s.r(t);var a=s("79c4");const o=Object(a["h"])("h1",null,"Message",-1),i=Object(a["h"])("p",null," Use messages to... ",-1),c=Object(a["h"])("h2",{"data-in-page-anchor":"overview"},"Overview",-1),l={class:"overview-content"},n={class:"overview-demo"},u=Object(a["g"])(" Message info: "),d=Object(a["h"])("ul",null,[Object(a["h"])("li",null,"Message detail #1"),Object(a["h"])("li",null,"Message detail #2"),Object(a["h"])("li",null,"Message detail #3")],-1),r={class:"overview-demo-controls"},p={class:"overview-demo-snippet"},b=Object(a["g"])(Object(a["z"])('\n            <protean-message\n                class="overview-demo-element"\n                type="{0}"\n                level="{1}"\n            >\n                Message info:\n                <ul>\n                    <li>Message detail #1</li>\n                    <li>Message detail #2</li>\n                    <li>Message detail #3</li>\n                </ul>\n            </protean-message>\n            ')),m=Object(a["h"])("h2",{"data-in-page-anchor":"best-practices"},"Best practices",-1),h=Object(a["h"])("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum minima beatae dolores qui assumenda distinctio est, repellat architecto tempore illo iste pariatur debitis repellendus accusantium explicabo eum ex dolorem ullam? Provident officiis voluptatem in sit expedita consequatur ad voluptatibus nisi repellat tempore? Ex et ducimus ea distinctio deserunt. Aliquam a doloribus eligendi ratione porro vel consequuntur eaque sunt corrupti molestiae accusamus harum reprehenderit, fugit repudiandae? Quaerat fugit laudantium sunt libero consectetur reprehenderit temporibus id cupiditate dolorem recusandae, ut voluptates sequi. Officia, maiores ad asperiores iure commodi dolore aut aspernatur ut consectetur amet distinctio eius nesciunt ullam sapiente architecto fugit adipisci! ",-1),v=Object(a["h"])("h2",{"data-in-page-anchor":"api"},"API",-1),j=Object(a["h"])("h3",null,"Properties",-1),O=Object(a["h"])("div",null,[Object(a["g"])(" In the following examples, "),Object(a["h"])("code",null,"element"),Object(a["g"])(" refers to an instance of "),Object(a["h"])("code",null,"protean-message"),Object(a["g"])(" (i.e. "),Object(a["h"])("code",null,"element = document.querySelector('protean-message#myMessage')"),Object(a["g"])("). ")],-1),g={class:"prop-list"},f={class:"prop-item"},q=Object(a["f"])('<div class="prop-info"><h4 class="prop-name">type</h4><div class="prop-type"><code>&quot;info&quot;</code> (default) | <code>&quot;success&quot;</code> | <code>&quot;warning&quot;</code> | <code>&quot;error&quot;</code></div><div class="prop-attribute"> Attribute name: <code>type</code></div><div class="prop-desc"> The visual style of the message. Controls the icon and color used to communicate the intent of the message. </div></div>',1),y={class:"prop-example"},w=Object(a["g"])(" element.type = 'success'; "),x={class:"prop-item"},M=Object(a["f"])('<div class="prop-info"><h4 class="prop-name">level</h4><div class="prop-type"><code>&quot;alert&quot;</code> (default) | <code>&quot;status&quot;</code></div><div class="prop-attribute"> Attribute name: <code>level</code></div><div class="prop-desc">Controls the <code>role</code> assigned to the message list, dictating the verbosity of assistive technologies.</div></div>',1),I={class:"prop-example"},T=Object(a["g"])(" element.level = 'status'; ");function k(e,t){const s=Object(a["x"])("protean-message"),k=Object(a["x"])("protean-option"),S=Object(a["x"])("protean-select"),D=Object(a["x"])("protean-checkbox"),_=Object(a["x"])("code-snippet");return Object(a["q"])(),Object(a["d"])(a["a"],null,[o,i,c,Object(a["h"])("div",l,[Object(a["h"])("div",n,[Object(a["h"])(s,{class:"overview-demo-element",type:e.demoType,variant:e.demoVariant},{default:Object(a["D"])(()=>[u,d]),_:1},8,["type","variant"])]),Object(a["h"])("div",r,[Object(a["h"])(S,{label:"Message type",value:e.demoType,onChange:t[1]||(t[1]=t=>e.demoType=t.detail.value)},{default:Object(a["D"])(()=>[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.demoTypes,e=>(Object(a["q"])(),Object(a["d"])(k,{label:e,value:e},{default:Object(a["D"])(()=>[Object(a["g"])(Object(a["z"])(e),1)]),_:2},1032,["label","value"]))),256))]),_:1},8,["value"]),Object(a["h"])(D,{label:"Show as status message",variant:"toggle",checked:e.demoIsStatus,onChange:t[2]||(t[2]=t=>e.demoIsStatus=t.detail.checked)},null,8,["checked"])]),Object(a["h"])("div",p,[Object(a["h"])(_,{substitutions:[e.demoType,e.demoLevel]},{default:Object(a["D"])(()=>[b]),_:1},8,["substitutions"])])]),m,h,v,j,O,Object(a["h"])("ul",g,[Object(a["h"])("li",f,[q,Object(a["h"])("div",y,[Object(a["h"])(_,{language:"javascript"},{default:Object(a["D"])(()=>[w]),_:1})])]),Object(a["h"])("li",x,[M,Object(a["h"])("div",I,[Object(a["h"])(_,{language:"javascript"},{default:Object(a["D"])(()=>[T]),_:1})])])])],64)}var S=s("6dbe"),D=s("9fa7"),_=s("fc89");let C=class extends D["b"]{constructor(){super(...arguments),this.demoType="info",this.demoTypes=["info","success","warning","error"],this.demoIsInline=!1,this.demoIsStatus=!1}get demoLevel(){return this.demoIsStatus?"status":"alert"}get demoVariant(){return this.demoIsInline?"inline":"default"}};C=Object(S["a"])([Object(D["a"])({components:{CodeSnippet:_["a"]}})],C);var A=C;s("769f");A.render=k;t["default"]=A},"769f":function(e,t,s){"use strict";s("7776")},7776:function(e,t,s){}}]);
//# sourceMappingURL=chunk-3536828e.393faca8.js.map