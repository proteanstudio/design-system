import{_ as t}from"./styles.scss_vue_type_style_index_0_src_true_lang-b52e92ca.js";import{f as x,g as p,i as k,a as w,b as e,l as h,u,e as s,w as a,d as o,F as y,c as i,q as C,o as T,t as _}from"./index-8ab0259f.js";const q=e("h1",null,"Checkbox",-1),A=e("p",null," Checkboxes and toggles allow the user to select one or more options from a group, or to switch between two states. ",-1),S={class:"overview-content"},j=e("h2",{"data-in-page-anchor":"overview"},"Overview",-1),F={class:"overview-demo"},N=["variant","disabled","alignment","indeterminate"],D={class:"overview-demo-controls"},B=["disabled"],I=["disabled"],L={class:"overview-demo-snippet"},V=i('<section class="best-practices-content"><h2 data-in-page-anchor="best-practices">Best practices</h2><section><h3>Checkboxes vs. radio buttons</h3><ul><li> Use <strong>checkboxes</strong> when the user can select more than one option in a group. </li><li> Use <strong>radio buttons</strong> when the user can select only one option in a group. <ul><li><strong>Note:</strong> the design system has not implemented a radio button element yet. Native radio buttons with a fieldset will work, but they do not have design system styles associated with them at this time. </li></ul></li></ul></section><section><h3>Checkboxes vs. toggle switches</h3><ul><li> Use a <strong>checkbox</strong> when the selection must be confirmed before taking effect (typically by clicking a form button). </li><ul><li> For example, a checkbox is appropriate when inviting a user to opt-in to email communications during a sign up workflow. The email opt-in, along with other sign up information, is collected only after the user clicks a button (e.g. &quot;Complete registration&quot;). </li></ul><li> Use a <strong>toggle switch</strong> when the selection should take effect immediately, without a separate confirming action. </li><ul><li> For example, applications that offer a &quot;dark mode&quot; could use a toggle switch to enable and disable that mode. The toggled setting takes effect immediately. </li></ul></ul></section></section>',1),U=e("h2",{"data-in-page-anchor":"api"},"API",-1),E=e("h3",null,"Properties",-1),P=e("div",null,[o(" In the following examples, "),e("code",null,"element"),o(" refers to an instance of "),e("code",null,"protean-checkbox"),o(" (i.e. "),e("code",null,"element = document.querySelector('protean-checkbox#myCheckbox')"),o("). ")],-1),$={class:"prop-list"},M={class:"prop-item"},O=i('<div class="prop-info"><h4 class="prop-name">variant</h4><div class="prop-type"><code>&quot;checkbox&quot;</code> (default) | <code>&quot;toggle&quot;</code></div><div class="prop-attribute"> Attribute name: <code>variant</code></div><div class="prop-desc"> The visual style of the checkbox. </div></div>',1),R={class:"prop-example"},z={class:"prop-item"},G=i('<div class="prop-info"><h4 class="prop-name">checked</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute"> Attribute name: <code>checked</code></div><div class="prop-desc"> The checked state of the checkbox. </div></div>',1),H={class:"prop-example"},J={class:"prop-item"},K=i('<div class="prop-info"><h4 class="prop-name">label</h4><div class="prop-type"><code>string</code></div><div class="prop-attribute"> Attribute name: <code>label</code></div><div class="prop-desc"> The visible label for the checkbox. </div></div>',1),Q={class:"prop-example"},W={class:"prop-item"},X=i('<div class="prop-info"><h4 class="prop-name">a11yLabel</h4><div class="prop-type"><code>string</code></div><div class="prop-attribute"> Attribute name: <code>a11y-label</code></div><div class="prop-desc"> The label read by assistive technologies for the checkbox; <code>a11yLabel</code> is used here instead of <code>ariaLabel</code> to prevent double readings of the text by those technologies. Note: when <code>label</code> is set, this value will not be bound to the field. </div></div>',1),Y={class:"prop-example"},Z={class:"prop-item"},ee=i('<div class="prop-info"><h4 class="prop-name">disabled</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute"> Attribute name: <code>disabled</code></div><div class="prop-desc"> Disables checkbox interaction. </div></div>',1),oe={class:"prop-example"},te={class:"prop-item"},se=i('<div class="prop-info"><h4 class="prop-name">alignment</h4><div class="prop-type"><code>&quot;left&quot;</code> (default) | <code>&quot;right&quot;</code></div><div class="prop-attribute"> Attribute name: <code>alignment</code></div><div class="prop-desc"> The placement of the checkbox relative to its label. </div></div>',1),ae={class:"prop-example"},le={class:"prop-item"},ce=i('<div class="prop-info"><h4 class="prop-name">indeterminate</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute"> Attribute name: <code>indeterminate</code></div><div class="prop-desc"> Shows the checkbox in an indeterminate state. Best used to indicate partial selection of options on a checkbox that controls all others in a group. Does not apply to toggles. </div></div>',1),ie={class:"prop-example"},ne=e("h3",null,"Event",-1),de={class:"prop-list"},re={class:"prop-item"},pe={class:"prop-info"},he=e("h4",{class:"prop-name"},"change",-1),ue={class:"prop-desc"},ve=e("h5",null,"Event detail",-1),_e={class:"prop-example"},ge=e("h3",null,"CSS variables",-1),me=e("p",null,[o(" Listed below are the CSS variables that can be adjusted to alter the "),e("code",null,"protean-checkbox"),o(" element's appearance along with the default values set in the "),e("code",null,"protean-styles"),o(" package: ")],-1),be={class:"prop-list stacked"},fe={class:"prop-item"},ke=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"},"--protean-checkbox-margin"),e("div",{class:"prop-desc"},[o(" The margin around the "),e("code",null,"protean-checkbox"),o(" element. ")])],-1),xe={class:"prop-example"},we={class:"prop-item"},ye=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"}," --protean-checkbox-outline-color "),e("div",{class:"prop-desc"}," The color of the outline around the checkbox. ")],-1),Ce={class:"prop-example"},Te={class:"prop-item"},qe=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"}," --protean-checkbox-toggle-path-color "),e("div",{class:"prop-desc"},[o(" The color of the toggle path when not "),e("code",null,"checked"),o(". ")])],-1),Ae={class:"prop-example"},Se={class:"prop-item"},je=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"}," --protean-checkbox-toggle-circle-fill "),e("div",{class:"prop-desc"},[o(" The color of the toggle circle when not "),e("code",null,"checked"),o(". ")])],-1),Fe={class:"prop-example"},Ne={class:"prop-item"},De=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"}," --protean-checkbox-checked-outer-color "),e("div",{class:"prop-desc"},[o(" The color that fills a standard checkbox and the toggle path when "),e("code",null,"checked"),o(". ")])],-1),Be={class:"prop-example"},Ie={class:"prop-item"},Le=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"}," --protean-checkbox-checked-inner-color "),e("div",{class:"prop-desc"},[o(" The color of a standard checkbox's check mark and the toggle circle when "),e("code",null,"checked"),o(". ")])],-1),Ve={class:"prop-example"},Ue={class:"prop-item"},Ee=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"}," --protean-checkbox-disabled-opacity "),e("div",{class:"prop-desc"}," The opacity of the field while it is disabled. ")],-1),Pe={class:"prop-example"},ze=x({__name:"index",setup($e){const g=p(!1),n=p(!1),m=p(!1),v=p(!1),d=p(!1),b=k(()=>{if(n.value)return"toggle"}),f=k(()=>m.value?"right":"left");return(Me,l)=>{const r=C("prop");return T(),w(y,null,[q,A,e("section",S,[j,e("div",F,[h(e("protean-checkbox",{class:"overview-demo-element",label:"Checkbox label",variant:u(b),disabled:v.value,alignment:u(f),indeterminate:d.value,onChange:l[0]||(l[0]=c=>g.value=c.detail.checked)},null,40,N),[[r,g.value,"checked"]])]),e("div",D,[h(e("protean-checkbox",{class:"demo-toggle-toggle",label:"Show as toggle",variant:"toggle",disabled:d.value,onChange:l[1]||(l[1]=c=>n.value=c.detail.checked)},null,40,B),[[r,n.value,"checked"]]),h(e("protean-checkbox",{class:"demo-toggle-disabled",label:"Show as disabled",variant:"toggle",onChange:l[2]||(l[2]=c=>v.value=c.detail.checked)},null,544),[[r,v.value,"checked"]]),h(e("protean-checkbox",{class:"demo-toggle-alignment",label:"Align to the right",variant:"toggle",onChange:l[3]||(l[3]=c=>m.value=c.detail.checked)},null,544),[[r,m.value,"checked"]]),h(e("protean-checkbox",{class:"demo-toggle-indeterminate",label:"Show as indeterminate",variant:"toggle",disabled:n.value,onChange:l[4]||(l[4]=c=>d.value=c.detail.checked)},null,40,I),[[r,d.value,"checked"]])]),e("div",L,[s(t,{substitutions:[u(b)?`
 variant="${u(b)}"`:"",g.value?`
 checked`:"",v.value?`
 disabled`:"",d.value&&!n.value?`
 indeterminate`:"",u(f)]},{default:a(()=>[o(_(`<protean-checkbox
                    label="Checkbox label"
                    {0}{1}{2}{3}
                    alignment="{4}"
                ></protean-checkbox>
                `))]),_:1},8,["substitutions"])])]),V,e("section",null,[U,e("section",null,[E,P,e("ul",$,[e("li",M,[O,e("div",R,[s(t,{language:"javascript"},{default:a(()=>[o(" element.variant = 'toggle'; ")]),_:1})])]),e("li",z,[G,e("div",H,[s(t,{language:"javascript"},{default:a(()=>[o(" element.checked = true; ")]),_:1})])]),e("li",J,[K,e("div",Q,[s(t,{language:"javascript"},{default:a(()=>[o(" element.label = 'Field label'; ")]),_:1})])]),e("li",W,[X,e("div",Y,[s(t,{language:"javascript"},{default:a(()=>[o(" element.a11yLabel = 'Field aria-label'; ")]),_:1})])]),e("li",Z,[ee,e("div",oe,[s(t,{language:"javascript"},{default:a(()=>[o(" element.disabled = true; ")]),_:1})])]),e("li",te,[se,e("div",ae,[s(t,{language:"javascript"},{default:a(()=>[o(' element.alignment = "right"; ')]),_:1})])]),e("li",le,[ce,e("div",ie,[s(t,{language:"javascript"},{default:a(()=>[o(" element.indeterminate = true; ")]),_:1})])])])]),e("section",null,[ne,e("ul",de,[e("li",re,[e("div",pe,[he,e("div",ue,[o(" Fires when the checkbox is toggled. "),ve,s(t,{language:"typescript"},{default:a(()=>[o(_(`
                                event: {
                                    detail: {
                                        checked: boolean,
                                    }
                                }
                            `))]),_:1})])]),e("div",_e,[s(t,{language:"javascript"},{default:a(()=>[o(_(`
                            function onChange(event) {
                                this.checked = event.detail.checked;
                            }
                        `),1)]),_:1}),s(t,{language:"html"},{default:a(()=>[o(_(`
                            <protean-checkbox
                                label="My checkbox label"
                                onchange="onChange(event)"
                            ></protean-checkbox>
                            `),1)]),_:1})])])])]),e("section",null,[ge,me,e("ul",be,[e("li",fe,[ke,e("div",xe,[s(t,{language:"css"},{default:a(()=>[o(" --protean-checkbox-margin: 1rem; ")]),_:1})])]),e("li",we,[ye,e("div",Ce,[s(t,{language:"css"},{default:a(()=>[o(" --protean-checkbox-outline-color: #aaaaaa; ")]),_:1})])]),e("li",Te,[qe,e("div",Ae,[s(t,{language:"css"},{default:a(()=>[o(" --protean-checkbox-toggle-path-color: #535353; ")]),_:1})])]),e("li",Se,[je,e("div",Fe,[s(t,{language:"css"},{default:a(()=>[o(" --protean-checkbox-toggle-circle-fill: #000000; ")]),_:1})])]),e("li",Ne,[De,e("div",Be,[s(t,{language:"css"},{default:a(()=>[o(" --protean-checkbox-checked-outer-color: var(--action-color); ")]),_:1})])]),e("li",Ie,[Le,e("div",Ve,[s(t,{language:"css"},{default:a(()=>[o(" --protean-checkbox-checked-inner-color: var(--action-contrast-color); ")]),_:1})])]),e("li",Ue,[Ee,e("div",Pe,[s(t,{language:"css"},{default:a(()=>[o(" --protean-checkbox-disabled-opacity: var(--disabled-opacity); ")]),_:1})])])])])])],64)}}});export{ze as default};