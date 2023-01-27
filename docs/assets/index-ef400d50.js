import{V as b,O as _,a as f,b as e,g as h,e as a,w as i,d as o,F as k,c as d,r as x,j as w,o as y,t as u,_ as C}from"./index-9fab0c87.js";import{C as T}from"./index-299da39d.js";var I=Object.defineProperty,A=Object.getOwnPropertyDescriptor,q=(t,l,g,r)=>{for(var n=r>1?void 0:r?A(l,g):l,m=t.length-1,s;m>=0;m--)(s=t[m])&&(n=(r?s(l,g,n):s(n))||n);return r&&n&&I(l,g,n),n};let v=class extends b{demoChecked=!1;demoIsToggle=!1;demoIsRightAligned=!1;demoDisabled=!1;demoIndeterminate=!1;get demoVariant(){if(this.demoIsToggle)return"toggle"}get demoAlignment(){return this.demoIsRightAligned?"right":"left"}};v=q([_({components:{CodeSnippet:T}})],v);const j=e("h1",null,"Checkbox",-1),D=e("p",null," Checkboxes and toggles allow the user to select one or more options from a group, or to switch between two states. ",-1),S={class:"overview-content"},V=e("h2",{"data-in-page-anchor":"overview"},"Overview",-1),F={class:"overview-demo"},N=["variant","disabled","alignment","indeterminate"],O={class:"overview-demo-controls"},P=["disabled"],B=["disabled"],L={class:"overview-demo-snippet"},R=d('<section class="best-practices-content"><h2 data-in-page-anchor="best-practices">Best practices</h2><section><h3>Checkboxes vs. radio buttons</h3><ul><li> Use <strong>checkboxes</strong> when the user can select more than one option in a group. </li><li> Use <strong>radio buttons</strong> when the user can select only one option in a group. <ul><li><strong>Note:</strong> the design system has not implemented a radio button element yet. Native radio buttons with a fieldset will work, but they do not have design system styles associated with them at this time.</li></ul></li></ul></section><section><h3>Checkboxes vs. toggle switches</h3><ul><li> Use a <strong>checkbox</strong> when the selection must be confirmed before taking effect (typically by clicking a form button). </li><ul><li> For example, a checkbox is appropriate when inviting a user to opt-in to email communications during a sign up workflow. The email opt-in, along with other sign up information, is collected only after the user clicks a button (e.g. &quot;Complete registration&quot;). </li></ul><li> Use a <strong>toggle switch</strong> when the selection should take effect immediately, without a separate confirming action. </li><ul><li> For example, applications that offer a &quot;dark mode&quot; could use a toggle switch to enable and disable that mode. The toggled setting takes effect immediately. </li></ul></ul></section></section>',1),$=e("h2",{"data-in-page-anchor":"api"},"API",-1),U=e("h3",null,"Properties",-1),E=e("div",null,[o(" In the following examples, "),e("code",null,"element"),o(" refers to an instance of "),e("code",null,"protean-checkbox"),o(" (i.e. "),e("code",null,"element = document.querySelector('protean-checkbox#myCheckbox')"),o("). ")],-1),M={class:"prop-list"},z={class:"prop-item"},G=d('<div class="prop-info"><h4 class="prop-name">variant</h4><div class="prop-type"><code>&quot;checkbox&quot;</code> (default) | <code>&quot;toggle&quot;</code></div><div class="prop-attribute"> Attribute name: <code>variant</code></div><div class="prop-desc"> The visual style of the checkbox. </div></div>',1),H={class:"prop-example"},J={class:"prop-item"},K=d('<div class="prop-info"><h4 class="prop-name">checked</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute"> Attribute name: <code>checked</code></div><div class="prop-desc"> The checked state of the checkbox. </div></div>',1),Q={class:"prop-example"},W={class:"prop-item"},X=d('<div class="prop-info"><h4 class="prop-name">label</h4><div class="prop-type"><code>string</code></div><div class="prop-attribute"> Attribute name: <code>label</code></div><div class="prop-desc"> The visible label for the checkbox. </div></div>',1),Y={class:"prop-example"},Z={class:"prop-item"},ee=d('<div class="prop-info"><h4 class="prop-name">a11yLabel</h4><div class="prop-type"><code>string</code></div><div class="prop-attribute"> Attribute name: <code>a11y-label</code></div><div class="prop-desc"> The label read by assistive technologies for the checkbox; <code>a11yLabel</code> is used here instead of <code>ariaLabel</code> to prevent double readings of the text by those technologies. Note: when <code>label</code> is set, this value will not be bound to the field. </div></div>',1),oe={class:"prop-example"},te={class:"prop-item"},se=d('<div class="prop-info"><h4 class="prop-name">disabled</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute"> Attribute name: <code>disabled</code></div><div class="prop-desc">Disables checkbox interaction.</div></div>',1),ae={class:"prop-example"},ie={class:"prop-item"},le=d('<div class="prop-info"><h4 class="prop-name">alignment</h4><div class="prop-type"><code>&quot;left&quot;</code> (default) | <code>&quot;right&quot;</code></div><div class="prop-attribute"> Attribute name: <code>alignment</code></div><div class="prop-desc"> The placement of the checkbox relative to its label. </div></div>',1),ce={class:"prop-example"},ne={class:"prop-item"},de=d('<div class="prop-info"><h4 class="prop-name">indeterminate</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute"> Attribute name: <code>indeterminate</code></div><div class="prop-desc"> Shows the checkbox in an indeterminate state. Best used to indicate partial selection of options on a checkbox that controls all others in a group. Does not apply to toggles. </div></div>',1),re={class:"prop-example"},pe=e("h3",null,"Event",-1),he={class:"prop-list"},ge={class:"prop-item"},me={class:"prop-info"},ue=e("h4",{class:"prop-name"},"change",-1),ve={class:"prop-desc"},be=e("h5",null,"Event detail",-1),_e={class:"prop-example"},fe=e("h3",null,"CSS variables",-1),ke=e("p",null,[o("Listed below are the CSS variables that can be adjusted to alter the "),e("code",null,"protean-checkbox"),o(" element's appearance along with the default values set in the "),e("code",null,"protean-styles"),o(" package:")],-1),xe={class:"prop-list stacked"},we={class:"prop-item"},ye=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"},"--protean-checkbox-margin"),e("div",{class:"prop-desc"},[o(" The margin around the "),e("code",null,"protean-checkbox"),o(" element. ")])],-1),Ce={class:"prop-example"},Te={class:"prop-item"},Ie=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"},"--protean-checkbox-outline-color"),e("div",{class:"prop-desc"}," The color of the outline around the checkbox. ")],-1),Ae={class:"prop-example"},qe={class:"prop-item"},je=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"},"--protean-checkbox-toggle-path-color"),e("div",{class:"prop-desc"},[o(" The color of the toggle path when not "),e("code",null,"checked"),o(". ")])],-1),De={class:"prop-example"},Se={class:"prop-item"},Ve=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"},"--protean-checkbox-toggle-circle-fill"),e("div",{class:"prop-desc"},[o(" The color of the toggle circle when not "),e("code",null,"checked"),o(". ")])],-1),Fe={class:"prop-example"},Ne={class:"prop-item"},Oe=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"},"--protean-checkbox-checked-outer-color"),e("div",{class:"prop-desc"},[o(" The color that fills a standard checkbox and the toggle path when "),e("code",null,"checked"),o(". ")])],-1),Pe={class:"prop-example"},Be={class:"prop-item"},Le=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"},"--protean-checkbox-checked-inner-color"),e("div",{class:"prop-desc"},[o(" The color of a standard checkbox's check mark and the toggle circle when "),e("code",null,"checked"),o(". ")])],-1),Re={class:"prop-example"},$e={class:"prop-item"},Ue=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"},"--protean-checkbox-disabled-opacity"),e("div",{class:"prop-desc"}," The opacity of the field while it is disabled. ")],-1),Ee={class:"prop-example"};function Me(t,l,g,r,n,m){const s=x("code-snippet"),p=w("prop");return y(),f(k,null,[j,D,e("section",S,[V,e("div",F,[h(e("protean-checkbox",{class:"overview-demo-element",label:"Checkbox label",variant:t.demoVariant,disabled:t.demoDisabled,alignment:t.demoAlignment,indeterminate:t.demoIndeterminate,onChange:l[0]||(l[0]=c=>t.demoChecked=c.detail.checked)},null,40,N),[[p,t.demoChecked,"checked"]])]),e("div",O,[h(e("protean-checkbox",{class:"demo-toggle-toggle",label:"Show as toggle",variant:"toggle",disabled:t.demoIndeterminate,onChange:l[1]||(l[1]=c=>t.demoIsToggle=c.detail.checked)},null,40,P),[[p,t.demoIsToggle,"checked"]]),h(e("protean-checkbox",{class:"demo-toggle-disabled",label:"Show as disabled",variant:"toggle",onChange:l[2]||(l[2]=c=>t.demoDisabled=c.detail.checked)},null,544),[[p,t.demoDisabled,"checked"]]),h(e("protean-checkbox",{class:"demo-toggle-alignment",label:"Align to the right",variant:"toggle",onChange:l[3]||(l[3]=c=>t.demoIsRightAligned=c.detail.checked)},null,544),[[p,t.demoIsRightAligned,"checked"]]),h(e("protean-checkbox",{class:"demo-toggle-indeterminate",label:"Show as indeterminate",variant:"toggle",disabled:t.demoIsToggle,onChange:l[4]||(l[4]=c=>t.demoIndeterminate=c.detail.checked)},null,40,B),[[p,t.demoIndeterminate,"checked"]])]),e("div",L,[a(s,{substitutions:[t.demoVariant?`
 variant="${t.demoVariant}"`:"",t.demoChecked?`
 checked`:"",t.demoDisabled?`
 disabled`:"",t.demoIndeterminate&&!t.demoIsToggle?`
 indeterminate`:"",t.demoAlignment]},{default:i(()=>[o(u(`<protean-checkbox
                label="Checkbox label" {0}{1}{2}{3}
                alignment="{4}"
            ></protean-checkbox>
            `))]),_:1},8,["substitutions"])])]),R,e("section",null,[$,e("section",null,[U,E,e("ul",M,[e("li",z,[G,e("div",H,[a(s,{language:"javascript"},{default:i(()=>[o(" element.variant = 'toggle'; ")]),_:1})])]),e("li",J,[K,e("div",Q,[a(s,{language:"javascript"},{default:i(()=>[o(" element.checked = true; ")]),_:1})])]),e("li",W,[X,e("div",Y,[a(s,{language:"javascript"},{default:i(()=>[o(" element.label = 'Field label'; ")]),_:1})])]),e("li",Z,[ee,e("div",oe,[a(s,{language:"javascript"},{default:i(()=>[o(" element.a11yLabel = 'Field aria-label'; ")]),_:1})])]),e("li",te,[se,e("div",ae,[a(s,{language:"javascript"},{default:i(()=>[o(" element.disabled = true; ")]),_:1})])]),e("li",ie,[le,e("div",ce,[a(s,{language:"javascript"},{default:i(()=>[o(' element.alignment = "right"; ')]),_:1})])]),e("li",ne,[de,e("div",re,[a(s,{language:"javascript"},{default:i(()=>[o(" element.indeterminate = true; ")]),_:1})])])])]),e("section",null,[pe,e("ul",he,[e("li",ge,[e("div",me,[ue,e("div",ve,[o(" Fires when the checkbox is toggled. "),be,a(s,{language:"typescript"},{default:i(()=>[o(u(`
                                event: {
                                    detail: {
                                        checked: boolean,
                                    }
                                }
                            `))]),_:1})])]),e("div",_e,[a(s,{language:"javascript"},{default:i(()=>[o(u(`
                            function onChange(event) {
                                this.checked = event.detail.checked;
                            }
                        `),1)]),_:1}),a(s,{language:"html"},{default:i(()=>[o(u(`
                        <protean-checkbox
                            label="My checkbox label"
                            onchange="onChange(event)"
                        ></protean-checkbox>
                        `),1)]),_:1})])])])]),e("section",null,[fe,ke,e("ul",xe,[e("li",we,[ye,e("div",Ce,[a(s,{language:"css"},{default:i(()=>[o(" --protean-checkbox-margin: 1rem; ")]),_:1})])]),e("li",Te,[Ie,e("div",Ae,[a(s,{language:"css"},{default:i(()=>[o(" --protean-checkbox-outline-color: var(--action-color); ")]),_:1})])]),e("li",qe,[je,e("div",De,[a(s,{language:"css"},{default:i(()=>[o(" --protean-checkbox-toggle-path-color: #535353; ")]),_:1})])]),e("li",Se,[Ve,e("div",Fe,[a(s,{language:"css"},{default:i(()=>[o(" --protean-checkbox-toggle-circle-fill: #000000; ")]),_:1})])]),e("li",Ne,[Oe,e("div",Pe,[a(s,{language:"css"},{default:i(()=>[o(" --protean-checkbox-checked-outer-color: var(--action-color); ")]),_:1})])]),e("li",Be,[Le,e("div",Re,[a(s,{language:"css"},{default:i(()=>[o(" --protean-checkbox-checked-inner-color: var(--action-contrast-color); ")]),_:1})])]),e("li",$e,[Ue,e("div",Ee,[a(s,{language:"css"},{default:i(()=>[o(" --protean-checkbox-disabled-opacity: var(--disabled-opacity); ")]),_:1})])])])])])],64)}const He=C(v,[["render",Me]]);export{He as default};
