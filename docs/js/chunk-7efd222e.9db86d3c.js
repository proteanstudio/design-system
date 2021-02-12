(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7efd222e"],{"33af":function(e,t,a){"use strict";a("6c50")},"6c50":function(e,t,a){},af86:function(e,t,a){"use strict";a.r(t);var i=a("79c4");const o=Object(i["h"])("h1",null,"Button",-1),c=Object(i["h"])("p",null," Use buttons to indicate an action on the current view. Don’t use these to navigate to a new view. ",-1),n=Object(i["h"])("h2",{"data-in-page-anchor":"overview"},"Overview",-1),s={class:"overview-content"},r={class:"overview-demo"},d={key:1},l={class:"overview-demo-controls"},u=Object(i["g"])(" primary "),b=Object(i["g"])(" secondary "),p=Object(i["g"])(" icon "),h={class:"overview-demo-snippet"},j=Object(i["g"])(Object(i["z"])('<protean-button variant="{0}"{1}>\n            {2}\n        </protean-button>\n            ')),O=Object(i["h"])("h2",{"data-in-page-anchor":"best-practices"},"Best practices",-1),m=Object(i["h"])("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum minima beatae dolores qui assumenda distinctio est, repellat architecto tempore illo iste pariatur debitis repellendus accusantium explicabo eum ex dolorem ullam? Provident officiis voluptatem in sit expedita consequatur ad voluptatibus nisi repellat tempore? Ex et ducimus ea distinctio deserunt. Aliquam a doloribus eligendi ratione porro vel consequuntur eaque sunt corrupti molestiae accusamus harum reprehenderit, fugit repudiandae? Quaerat fugit laudantium sunt libero consectetur reprehenderit temporibus id cupiditate dolorem recusandae, ut voluptates sequi. Officia, maiores ad asperiores iure commodi dolore aut aspernatur ut consectetur amet distinctio eius nesciunt ullam sapiente architecto fugit adipisci! ",-1),v=Object(i["h"])("h2",{"data-in-page-anchor":"api"},"API",-1),f=Object(i["h"])("h3",null,"Properties",-1),g=Object(i["h"])("div",null,[Object(i["g"])(" In the following examples, "),Object(i["h"])("code",null,"element"),Object(i["g"])(" refers to an instance of "),Object(i["h"])("code",null,"protean-button"),Object(i["g"])(" (i.e. "),Object(i["h"])("code",null,"element = document.querySelector('protean-button#myButton')"),Object(i["g"])("). ")],-1),w={class:"prop-list"},y={class:"prop-item"},x=Object(i["f"])('<div class="prop-info"><h4 class="prop-name">variant</h4><div class="prop-type"><code>&quot;primary&quot;</code> | <code>&quot;secondary</code> | <code>&quot;icon&quot;</code></div><div class="prop-attribute">Attribute name: <code>variant</code></div><div class="prop-desc">The visual style of the button. <code>icon</code> buttons should only be used in conjuction with <code>protean-icon</code> and should be used with an ariaLabel.</div></div>',1),D={class:"prop-example"},q=Object(i["g"])(" element.variant = 'primary'; "),k={class:"prop-item"},L=Object(i["f"])('<div class="prop-info"><h4 class="prop-name">disabled</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute">Attribute name: <code>disabled</code></div><div class="prop-desc">Disables button interaction.</div></div>',1),_={class:"prop-example"},V=Object(i["g"])(" element.disabled = true; "),B={class:"prop-item"},A=Object(i["h"])("div",{class:"prop-info"},[Object(i["h"])("h4",{class:"prop-name"},"ariaLabel"),Object(i["h"])("div",{class:"prop-type"},[Object(i["h"])("code",null,"string")]),Object(i["h"])("div",{class:"prop-desc"}," The label read by assistive technologies for the input. Note: This should not be set when the button has text rendered in it. ")],-1),C={class:"prop-example"},P=Object(i["g"])(" element.ariaLabel = 'Field aria-label'; ");function S(e,t){const a=Object(i["x"])("protean-icon"),S=Object(i["x"])("protean-button"),T=Object(i["x"])("protean-checkbox"),I=Object(i["x"])("protean-option"),J=Object(i["x"])("protean-select"),z=Object(i["x"])("code-snippet");return Object(i["q"])(),Object(i["d"])(i["a"],null,[o,c,n,Object(i["h"])("div",s,[Object(i["h"])("div",r,[Object(i["h"])(S,{class:"overview-demo-element",variant:e.demoVariant,disabled:e.demoDisabled,ariaLabel:e.demoAriaLabel},{default:Object(i["D"])(()=>["icon"===e.demoVariant?(Object(i["q"])(),Object(i["d"])(a,{key:0,type:"chevron-down"})):(Object(i["q"])(),Object(i["d"])("span",d,"Button text"))]),_:1},8,["variant","disabled","ariaLabel"])]),Object(i["h"])("div",l,[Object(i["h"])(T,{label:"Show as disabled",variant:"toggle",checked:e.demoDisabled,onChange:t[1]||(t[1]=t=>e.demoDisabled=t.detail.checked)},null,8,["checked"]),Object(i["h"])(J,{onChange:t[2]||(t[2]=t=>e.demoVariant=t.detail.value),value:e.demoVariant,label:"Button variant"},{default:Object(i["D"])(()=>[Object(i["h"])(I,{value:"primary",label:"primary"},{default:Object(i["D"])(()=>[u]),_:1}),Object(i["h"])(I,{value:"secondary",label:"secondary"},{default:Object(i["D"])(()=>[b]),_:1}),Object(i["h"])(I,{value:"icon",label:"icon"},{default:Object(i["D"])(()=>[p]),_:1})]),_:1},8,["value"])]),Object(i["h"])("div",h,[Object(i["h"])(z,{substitutions:[e.demoVariant,e.demoDisabled?" disabled":"",e.demoContent]},{default:Object(i["D"])(()=>[j]),_:1},8,["substitutions"])])]),O,m,v,f,g,Object(i["h"])("ul",w,[Object(i["h"])("li",y,[x,Object(i["h"])("div",D,[Object(i["h"])(z,{language:"javascript"},{default:Object(i["D"])(()=>[q]),_:1})])]),Object(i["h"])("li",k,[L,Object(i["h"])("div",_,[Object(i["h"])(z,{language:"javascript"},{default:Object(i["D"])(()=>[V]),_:1})])]),Object(i["h"])("li",B,[A,Object(i["h"])("div",C,[Object(i["h"])(z,{language:"javascript"},{default:Object(i["D"])(()=>[P]),_:1})])])])],64)}var T=a("6dbe"),I=a("9fa7"),J=a("fc89");let z=class extends I["b"]{constructor(){super(...arguments),this.demoVariant="primary",this.demoDisabled=!1}get demoContent(){return"icon"===this.demoVariant?'<protean-icon type="chevron-down"></protean-icon>':"Button text"}get demoAriaLabel(){if("icon"===this.demoVariant)return"Button aria-label"}};z=Object(T["a"])([Object(I["a"])({components:{CodeSnippet:J["a"]}})],z);var E=z;a("33af");E.render=S;t["default"]=E}}]);
//# sourceMappingURL=chunk-7efd222e.9db86d3c.js.map