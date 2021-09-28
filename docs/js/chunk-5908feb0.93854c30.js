(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5908feb0"],{"0709":function(e,t,c){"use strict";c("49f6")},"11db":function(e,t,c){"use strict";c.r(t);var o=c("4430");const a=Object(o["g"])("h1",null,"Checkbox",-1),l=Object(o["g"])("p",null," Checkboxes and toggles allow the user to select one or more options from a group, or to switch between two states. ",-1),i={class:"overview-content"},s=Object(o["g"])("h2",{"data-in-page-anchor":"overview"},"Overview",-1),n={class:"overview-demo"},d={class:"overview-demo-controls"},b={class:"overview-demo-snippet"},r=Object(o["i"])(Object(o["D"])('<protean-checkbox\n                label="Checkbox label" {0}{1}{2}{3}\n                alignment="{4}"\n            ></protean-checkbox>\n            ')),p=Object(o["h"])('<section class="best-practices-content"><h2 data-in-page-anchor="best-practices">Best practices</h2><section><h3>Checkboxes vs. radio buttons</h3><ul><li> Use <strong>checkboxes</strong> when the user can select more than one option in a group. </li><li> Use <strong>radio buttons</strong> when the user can select only one option in a group. <ul><li><strong>Note:</strong> the design system has not implemented a radio button element yet. Native radio buttons with a fieldset will work, but they do not have design system styles associated with them at this time.</li></ul></li></ul></section><section><h3>Checkboxes vs. toggle switches</h3><ul><li> Use a <strong>checkbox</strong> when the selection must be confirmed before taking effect (typically by clicking a form button). </li><ul><li> For example, a checkbox is appropriate when inviting a user to opt-in to email communications during a sign up workflow. The email opt-in, along with other sign up information, is collected only after the user clicks a button (e.g. &quot;Complete registration&quot;). </li></ul><li> Use a <strong>toggle switch</strong> when the selection should take effect immediately, without a separate confirming action. </li><ul><li> For example, applications that offer a &quot;dark mode&quot; could use a toggle switch to enable and disable that mode. The toggled setting takes effect immediately. </li></ul></ul></section></section>',1),g=Object(o["g"])("h2",{"data-in-page-anchor":"api"},"API",-1),h=Object(o["g"])("h3",null,"Properties",-1),j=Object(o["g"])("div",null,[Object(o["i"])(" In the following examples, "),Object(o["g"])("code",null,"element"),Object(o["i"])(" refers to an instance of "),Object(o["g"])("code",null,"protean-checkbox"),Object(o["i"])(" (i.e. "),Object(o["g"])("code",null,"element = document.querySelector('protean-checkbox#myCheckbox')"),Object(o["i"])("). ")],-1),O={class:"prop-list"},u={class:"prop-item"},m=Object(o["h"])('<div class="prop-info"><h4 class="prop-name">variant</h4><div class="prop-type"><code>&quot;checkbox&quot;</code> (default) | <code>&quot;toggle&quot;</code></div><div class="prop-attribute"> Attribute name: <code>variant</code></div><div class="prop-desc"> The visual style of the checkbox. </div></div>',1),v={class:"prop-example"},f=Object(o["i"])(" element.variant = 'toggle'; "),k={class:"prop-item"},x=Object(o["h"])('<div class="prop-info"><h4 class="prop-name">checked</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute"> Attribute name: <code>checked</code></div><div class="prop-desc"> The checked state of the checkbox. </div></div>',1),w={class:"prop-example"},y=Object(o["i"])(" element.checked = true; "),I={class:"prop-item"},C=Object(o["h"])('<div class="prop-info"><h4 class="prop-name">label</h4><div class="prop-type"><code>string</code></div><div class="prop-attribute"> Attribute name: <code>label</code></div><div class="prop-desc"> The visible label for the checkbox. </div></div>',1),T={class:"prop-example"},A=Object(o["i"])(" element.label = 'Field label'; "),H={class:"prop-item"},_=Object(o["h"])('<div class="prop-info"><h4 class="prop-name">a11yLabel</h4><div class="prop-type"><code>string</code></div><div class="prop-attribute"> Attribute name: <code>a11y-label</code></div><div class="prop-desc"> The label read by assistive technologies for the checkbox; <code>a11yLabel</code> is used here instead of <code>ariaLabel</code> to prevent double readings of the text by those technologies. Note: when <code>label</code> is set, this value will not be bound to the field. </div></div>',1),q={class:"prop-example"},D=Object(o["i"])(" element.a11yLabel = 'Field aria-label'; "),S={class:"prop-item"},F=Object(o["h"])('<div class="prop-info"><h4 class="prop-name">disabled</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute"> Attribute name: <code>disabled</code></div><div class="prop-desc">Disables checkbox interaction.</div></div>',1),L={class:"prop-example"},R=Object(o["i"])(" element.disabled = true; "),U={class:"prop-item"},V=Object(o["h"])('<div class="prop-info"><h4 class="prop-name">alignment</h4><div class="prop-type"><code>&quot;left&quot;</code> (default) | <code>&quot;right&quot;</code></div><div class="prop-attribute"> Attribute name: <code>alignment</code></div><div class="prop-desc"> The placement of the checkbox relative to its label. </div></div>',1),B={class:"prop-example"},N=Object(o["i"])(' element.alignment = "right"; '),P={class:"prop-item"},E=Object(o["h"])('<div class="prop-info"><h4 class="prop-name">indeterminate</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute"> Attribute name: <code>indeterminate</code></div><div class="prop-desc"> Shows the checkbox in an indeterminate state. Best used to indicate partial selection of options on a checkbox that controls all others in a group. Does not apply to toggles. </div></div>',1),J={class:"prop-example"},M=Object(o["i"])(" element.indeterminate = true; "),$=Object(o["g"])("h3",null,"Event",-1),z={class:"prop-list"},G={class:"prop-item"},K={class:"prop-info"},Q=Object(o["g"])("h4",{class:"prop-name"},"change",-1),W={class:"prop-desc"},X=Object(o["i"])(" Fires when the checkbox is toggled. "),Y=Object(o["g"])("h5",null,"Event detail",-1),Z=Object(o["i"])(Object(o["D"])("\n                                event: {\n                                    detail: {\n                                        checked: boolean,\n                                    }\n                                }\n                            ")),ee={class:"prop-example"},te=Object(o["g"])("h3",null,"CSS variables",-1),ce=Object(o["g"])("p",null,[Object(o["i"])("Listed below are the CSS variables that can be adjusted to alter the "),Object(o["g"])("code",null,"protean-checkbox"),Object(o["i"])(" element's appearance along with the default values set in the "),Object(o["g"])("code",null,"protean-styles"),Object(o["i"])(" package:")],-1),oe={class:"prop-list stacked"},ae={class:"prop-item"},le=Object(o["g"])("div",{class:"prop-info"},[Object(o["g"])("h4",{class:"prop-name"},"--protean-checkbox-margin"),Object(o["g"])("div",{class:"prop-desc"},[Object(o["i"])(" The margin around the "),Object(o["g"])("code",null,"protean-checkbox"),Object(o["i"])(" element. ")])],-1),ie={class:"prop-example"},se=Object(o["i"])(" --protean-checkbox-margin: 1rem; "),ne={class:"prop-item"},de=Object(o["g"])("div",{class:"prop-info"},[Object(o["g"])("h4",{class:"prop-name"},"--protean-checkbox-outline-color"),Object(o["g"])("div",{class:"prop-desc"}," The color of the outline around the checkbox. ")],-1),be={class:"prop-example"},re=Object(o["i"])(" --protean-checkbox-outline-color: var(--action-color); "),pe={class:"prop-item"},ge=Object(o["g"])("div",{class:"prop-info"},[Object(o["g"])("h4",{class:"prop-name"},"--protean-checkbox-toggle-path-color"),Object(o["g"])("div",{class:"prop-desc"},[Object(o["i"])(" The color of the toggle path when not "),Object(o["g"])("code",null,"checked"),Object(o["i"])(". ")])],-1),he={class:"prop-example"},je=Object(o["i"])(" --protean-checkbox-toggle-path-color: #535353; "),Oe={class:"prop-item"},ue=Object(o["g"])("div",{class:"prop-info"},[Object(o["g"])("h4",{class:"prop-name"},"--protean-checkbox-toggle-circle-fill"),Object(o["g"])("div",{class:"prop-desc"},[Object(o["i"])(" The color of the toggle circle when not "),Object(o["g"])("code",null,"checked"),Object(o["i"])(". ")])],-1),me={class:"prop-example"},ve=Object(o["i"])(" --protean-checkbox-toggle-circle-fill: #000000; "),fe={class:"prop-item"},ke=Object(o["g"])("div",{class:"prop-info"},[Object(o["g"])("h4",{class:"prop-name"},"--protean-checkbox-checked-outer-color"),Object(o["g"])("div",{class:"prop-desc"},[Object(o["i"])(" The color that fills a standard checkbox and the toggle path when "),Object(o["g"])("code",null,"checked"),Object(o["i"])(". ")])],-1),xe={class:"prop-example"},we=Object(o["i"])(" --protean-checkbox-checked-outer-color: var(--action-color); "),ye={class:"prop-item"},Ie=Object(o["g"])("div",{class:"prop-info"},[Object(o["g"])("h4",{class:"prop-name"},"--protean-checkbox-checked-inner-color"),Object(o["g"])("div",{class:"prop-desc"},[Object(o["i"])(" The color of a standard checkbox's check mark and the toggle circle when "),Object(o["g"])("code",null,"checked"),Object(o["i"])(". ")])],-1),Ce={class:"prop-example"},Te=Object(o["i"])(" --protean-checkbox-checked-inner-color: var(--action-contrast-color); "),Ae={class:"prop-item"},He=Object(o["g"])("div",{class:"prop-info"},[Object(o["g"])("h4",{class:"prop-name"},"--protean-checkbox-disabled-opacity"),Object(o["g"])("div",{class:"prop-desc"}," The opacity of the field while it is disabled. ")],-1),_e={class:"prop-example"},qe=Object(o["i"])(" --protean-checkbox-disabled-opacity: var(--disabled-opacity); ");function De(e,t){const c=Object(o["A"])("protean-checkbox"),De=Object(o["A"])("code-snippet"),Se=Object(o["B"])("prop");return Object(o["t"])(),Object(o["f"])(o["a"],null,[a,l,Object(o["g"])("section",i,[s,Object(o["g"])("div",n,[Object(o["I"])(Object(o["j"])(c,{class:"overview-demo-element",label:"Checkbox label",variant:e.demoVariant,disabled:e.demoDisabled,alignment:e.demoAlignment,indeterminate:e.demoIndeterminate,onChange:t[0]||(t[0]=t=>e.demoChecked=t.detail.checked)},null,8,["variant","disabled","alignment","indeterminate"]),[[Se,e.demoChecked,"checked"]])]),Object(o["g"])("div",d,[Object(o["I"])(Object(o["j"])(c,{class:"demo-toggle-toggle",label:"Show as toggle",variant:"toggle",disabled:e.demoIndeterminate,onChange:t[1]||(t[1]=t=>e.demoIsToggle=t.detail.checked)},null,8,["disabled"]),[[Se,e.demoIsToggle,"checked"]]),Object(o["I"])(Object(o["j"])(c,{class:"demo-toggle-disabled",label:"Show as disabled",variant:"toggle",onChange:t[2]||(t[2]=t=>e.demoDisabled=t.detail.checked)},null,512),[[Se,e.demoDisabled,"checked"]]),Object(o["I"])(Object(o["j"])(c,{class:"demo-toggle-alignment",label:"Align to the right",variant:"toggle",onChange:t[3]||(t[3]=t=>e.demoIsRightAligned=t.detail.checked)},null,512),[[Se,e.demoIsRightAligned,"checked"]]),Object(o["I"])(Object(o["j"])(c,{class:"demo-toggle-indeterminate",label:"Show as indeterminate",variant:"toggle",disabled:e.demoIsToggle,onChange:t[4]||(t[4]=t=>e.demoIndeterminate=t.detail.checked)},null,8,["disabled"]),[[Se,e.demoIndeterminate,"checked"]])]),Object(o["g"])("div",b,[Object(o["j"])(De,{substitutions:[e.demoVariant?`\n variant="${e.demoVariant}"`:"",e.demoChecked?"\n checked":"",e.demoDisabled?"\n disabled":"",e.demoIndeterminate&&!e.demoIsToggle?"\n indeterminate":"",e.demoAlignment]},{default:Object(o["H"])(()=>[r]),_:1},8,["substitutions"])])]),p,Object(o["g"])("section",null,[g,Object(o["g"])("section",null,[h,j,Object(o["g"])("ul",O,[Object(o["g"])("li",u,[m,Object(o["g"])("div",v,[Object(o["j"])(De,{language:"javascript"},{default:Object(o["H"])(()=>[f]),_:1})])]),Object(o["g"])("li",k,[x,Object(o["g"])("div",w,[Object(o["j"])(De,{language:"javascript"},{default:Object(o["H"])(()=>[y]),_:1})])]),Object(o["g"])("li",I,[C,Object(o["g"])("div",T,[Object(o["j"])(De,{language:"javascript"},{default:Object(o["H"])(()=>[A]),_:1})])]),Object(o["g"])("li",H,[_,Object(o["g"])("div",q,[Object(o["j"])(De,{language:"javascript"},{default:Object(o["H"])(()=>[D]),_:1})])]),Object(o["g"])("li",S,[F,Object(o["g"])("div",L,[Object(o["j"])(De,{language:"javascript"},{default:Object(o["H"])(()=>[R]),_:1})])]),Object(o["g"])("li",U,[V,Object(o["g"])("div",B,[Object(o["j"])(De,{language:"javascript"},{default:Object(o["H"])(()=>[N]),_:1})])]),Object(o["g"])("li",P,[E,Object(o["g"])("div",J,[Object(o["j"])(De,{language:"javascript"},{default:Object(o["H"])(()=>[M]),_:1})])])])]),Object(o["g"])("section",null,[$,Object(o["g"])("ul",z,[Object(o["g"])("li",G,[Object(o["g"])("div",K,[Q,Object(o["g"])("div",W,[X,Y,Object(o["j"])(De,{language:"typescript"},{default:Object(o["H"])(()=>[Z]),_:1})])]),Object(o["g"])("div",ee,[Object(o["j"])(De,{language:"javascript"},{default:Object(o["H"])(()=>[Object(o["i"])(Object(o["D"])("\n                            function onChange(event) {\n                                this.checked = event.detail.checked;\n                            }\n                        "),1)]),_:1}),Object(o["j"])(De,{language:"html"},{default:Object(o["H"])(()=>[Object(o["i"])(Object(o["D"])('\n                        <protean-checkbox\n                            label="My checkbox label"\n                            onchange="onChange(event)"\n                        ></protean-checkbox>\n                        '),1)]),_:1})])])])]),Object(o["g"])("section",null,[te,ce,Object(o["g"])("ul",oe,[Object(o["g"])("li",ae,[le,Object(o["g"])("div",ie,[Object(o["j"])(De,{language:"css"},{default:Object(o["H"])(()=>[se]),_:1})])]),Object(o["g"])("li",ne,[de,Object(o["g"])("div",be,[Object(o["j"])(De,{language:"css"},{default:Object(o["H"])(()=>[re]),_:1})])]),Object(o["g"])("li",pe,[ge,Object(o["g"])("div",he,[Object(o["j"])(De,{language:"css"},{default:Object(o["H"])(()=>[je]),_:1})])]),Object(o["g"])("li",Oe,[ue,Object(o["g"])("div",me,[Object(o["j"])(De,{language:"css"},{default:Object(o["H"])(()=>[ve]),_:1})])]),Object(o["g"])("li",fe,[ke,Object(o["g"])("div",xe,[Object(o["j"])(De,{language:"css"},{default:Object(o["H"])(()=>[we]),_:1})])]),Object(o["g"])("li",ye,[Ie,Object(o["g"])("div",Ce,[Object(o["j"])(De,{language:"css"},{default:Object(o["H"])(()=>[Te]),_:1})])]),Object(o["g"])("li",Ae,[He,Object(o["g"])("div",_e,[Object(o["j"])(De,{language:"css"},{default:Object(o["H"])(()=>[qe]),_:1})])])])])])],64)}var Se,Fe=c("0f9e"),Le=c("9ad1"),Re=c("fc89");function Ue(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}let Ve=(Se=class extends Le["b"]{constructor(...e){super(...e),Ue(this,"demoChecked",!1),Ue(this,"demoIsToggle",!1),Ue(this,"demoIsRightAligned",!1),Ue(this,"demoDisabled",!1),Ue(this,"demoIndeterminate",!1)}get demoVariant(){if(this.demoIsToggle)return"toggle"}get demoAlignment(){return this.demoIsRightAligned?"right":"left"}},Se);Ve=Object(Fe["a"])([Object(Le["a"])({components:{CodeSnippet:Re["a"]}})],Ve);var Be=Ve;c("0709");Be.render=De;t["default"]=Be},"49f6":function(e,t,c){}}]);
//# sourceMappingURL=chunk-5908feb0.93854c30.js.map