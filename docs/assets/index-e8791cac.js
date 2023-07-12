import{_ as t}from"./styles.scss_vue_type_style_index_0_src_true_lang-c1f4084e.js";import{f as b,g as r,h as m,a as k,b as e,e as s,w as a,d as o,F as f,c as i,o as x,t as h}from"./index-44132db0.js";const w=e("h1",null,"Checkbox",-1),y=e("p",null," Checkboxes and toggles allow the user to select one or more options from a group, or to switch between two states. ",-1),C={class:"overview-content"},T=e("h2",{"data-in-page-anchor":"overview"},"Overview",-1),q={class:"overview-demo"},A=[".checked","variant","disabled","alignment","indeterminate"],S={class:"overview-demo-controls"},j=[".checked","disabled"],F=[".checked"],N=[".checked"],B=[".checked","disabled"],I={class:"overview-demo-snippet"},L=i('<section class="best-practices-content"><h2 data-in-page-anchor="best-practices">Best practices</h2><section><h3>Checkboxes vs. radio buttons</h3><ul><li> Use <strong>checkboxes</strong> when the user can select more than one option in a group. </li><li> Use <strong>radio buttons</strong> when the user can select only one option in a group. <ul><li><strong>Note:</strong> the design system has not implemented a radio button element yet. Native radio buttons with a fieldset will work, but they do not have design system styles associated with them at this time. </li></ul></li></ul></section><section><h3>Checkboxes vs. toggle switches</h3><ul><li> Use a <strong>checkbox</strong> when the selection must be confirmed before taking effect (typically by clicking a form button). </li><ul><li> For example, a checkbox is appropriate when inviting a user to opt-in to email communications during a sign up workflow. The email opt-in, along with other sign up information, is collected only after the user clicks a button (e.g. &quot;Complete registration&quot;). </li></ul><li> Use a <strong>toggle switch</strong> when the selection should take effect immediately, without a separate confirming action. </li><ul><li> For example, applications that offer a &quot;dark mode&quot; could use a toggle switch to enable and disable that mode. The toggled setting takes effect immediately. </li></ul></ul></section></section>',1),V=e("h2",{"data-in-page-anchor":"api"},"API",-1),D=e("h3",null,"Properties",-1),U=e("div",null,[o(" In the following examples, "),e("code",null,"element"),o(" refers to an instance of "),e("code",null,"protean-checkbox"),o(" (i.e. "),e("code",null,"element = document.querySelector('protean-checkbox#myCheckbox')"),o("). ")],-1),E={class:"prop-list"},P={class:"prop-item"},$=i('<div class="prop-info"><h4 class="prop-name">variant</h4><div class="prop-type"><code>&quot;checkbox&quot;</code> (default) | <code>&quot;toggle&quot;</code></div><div class="prop-attribute"> Attribute name: <code>variant</code></div><div class="prop-desc"> The visual style of the checkbox. </div></div>',1),M={class:"prop-example"},O={class:"prop-item"},R=i('<div class="prop-info"><h4 class="prop-name">checked</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute"> Attribute name: <code>checked</code></div><div class="prop-desc"> The checked state of the checkbox. </div></div>',1),z={class:"prop-example"},G={class:"prop-item"},H=i('<div class="prop-info"><h4 class="prop-name">label</h4><div class="prop-type"><code>string</code></div><div class="prop-attribute"> Attribute name: <code>label</code></div><div class="prop-desc"> The visible label for the checkbox. </div></div>',1),J={class:"prop-example"},K={class:"prop-item"},Q=i('<div class="prop-info"><h4 class="prop-name">a11yLabel</h4><div class="prop-type"><code>string</code></div><div class="prop-attribute"> Attribute name: <code>a11y-label</code></div><div class="prop-desc"> The label read by assistive technologies for the checkbox; <code>a11yLabel</code> is used here instead of <code>ariaLabel</code> to prevent double readings of the text by those technologies. Note: when <code>label</code> is set, this value will not be bound to the field. </div></div>',1),W={class:"prop-example"},X={class:"prop-item"},Y=i('<div class="prop-info"><h4 class="prop-name">disabled</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute"> Attribute name: <code>disabled</code></div><div class="prop-desc"> Disables checkbox interaction. </div></div>',1),Z={class:"prop-example"},ee={class:"prop-item"},oe=i('<div class="prop-info"><h4 class="prop-name">alignment</h4><div class="prop-type"><code>&quot;left&quot;</code> (default) | <code>&quot;right&quot;</code></div><div class="prop-attribute"> Attribute name: <code>alignment</code></div><div class="prop-desc"> The placement of the checkbox relative to its label. </div></div>',1),te={class:"prop-example"},se={class:"prop-item"},ae=i('<div class="prop-info"><h4 class="prop-name">indeterminate</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute"> Attribute name: <code>indeterminate</code></div><div class="prop-desc"> Shows the checkbox in an indeterminate state. Best used to indicate partial selection of options on a checkbox that controls all others in a group. Does not apply to toggles. </div></div>',1),le={class:"prop-example"},ce=e("h3",null,"Event",-1),ie={class:"prop-list"},ne={class:"prop-item"},de={class:"prop-info"},re=e("h4",{class:"prop-name"},"change",-1),pe={class:"prop-desc"},he=e("h5",null,"Event detail",-1),ue={class:"prop-example"},ve=e("h3",null,"CSS variables",-1),_e=e("p",null,[o(" Listed below are the CSS variables that can be adjusted to alter the "),e("code",null,"protean-checkbox"),o(" element's appearance along with the default values set in the "),e("code",null,"protean-styles"),o(" package: ")],-1),ge={class:"prop-list stacked"},me={class:"prop-item"},be=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"},"--protean-checkbox-margin"),e("div",{class:"prop-desc"},[o(" The margin around the "),e("code",null,"protean-checkbox"),o(" element. ")])],-1),ke={class:"prop-example"},fe={class:"prop-item"},xe=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"}," --protean-checkbox-outline-color "),e("div",{class:"prop-desc"}," The color of the outline around the checkbox. ")],-1),we={class:"prop-example"},ye={class:"prop-item"},Ce=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"}," --protean-checkbox-toggle-path-color "),e("div",{class:"prop-desc"},[o(" The color of the toggle path when not "),e("code",null,"checked"),o(". ")])],-1),Te={class:"prop-example"},qe={class:"prop-item"},Ae=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"}," --protean-checkbox-toggle-circle-fill "),e("div",{class:"prop-desc"},[o(" The color of the toggle circle when not "),e("code",null,"checked"),o(". ")])],-1),Se={class:"prop-example"},je={class:"prop-item"},Fe=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"}," --protean-checkbox-checked-outer-color "),e("div",{class:"prop-desc"},[o(" The color that fills a standard checkbox and the toggle path when "),e("code",null,"checked"),o(". ")])],-1),Ne={class:"prop-example"},Be={class:"prop-item"},Ie=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"}," --protean-checkbox-checked-inner-color "),e("div",{class:"prop-desc"},[o(" The color of a standard checkbox's check mark and the toggle circle when "),e("code",null,"checked"),o(". ")])],-1),Le={class:"prop-example"},Ve={class:"prop-item"},De=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"}," --protean-checkbox-disabled-opacity "),e("div",{class:"prop-desc"}," The opacity of the field while it is disabled. ")],-1),Ue={class:"prop-example"},Oe=b({__name:"index",setup(Ee){const u=r(!1),n=r(!1),v=r(!1),p=r(!1),d=r(!1),_=m(()=>{if(n.value)return"toggle"}),g=m(()=>v.value?"right":"left");return(Pe,l)=>(x(),k(f,null,[w,y,e("section",C,[T,e("div",q,[e("protean-checkbox",{".checked":u.value,class:"overview-demo-element",label:"Checkbox label",variant:_.value,disabled:p.value,alignment:g.value,indeterminate:d.value,onChange:l[0]||(l[0]=c=>u.value=c.detail.checked)},null,40,A)]),e("div",S,[e("protean-checkbox",{".checked":n.value,class:"demo-toggle-toggle",label:"Show as toggle",variant:"toggle",disabled:d.value,onChange:l[1]||(l[1]=c=>n.value=c.detail.checked)},null,40,j),e("protean-checkbox",{".checked":p.value,class:"demo-toggle-disabled",label:"Show as disabled",variant:"toggle",onChange:l[2]||(l[2]=c=>p.value=c.detail.checked)},null,40,F),e("protean-checkbox",{".checked":v.value,class:"demo-toggle-alignment",label:"Align to the right",variant:"toggle",onChange:l[3]||(l[3]=c=>v.value=c.detail.checked)},null,40,N),e("protean-checkbox",{".checked":d.value,class:"demo-toggle-indeterminate",label:"Show as indeterminate",variant:"toggle",disabled:n.value,onChange:l[4]||(l[4]=c=>d.value=c.detail.checked)},null,40,B)]),e("div",I,[s(t,{substitutions:[_.value?`
 variant="${_.value}"`:"",u.value?`
 checked`:"",p.value?`
 disabled`:"",d.value&&!n.value?`
 indeterminate`:"",g.value]},{default:a(()=>[o(h(`<protean-checkbox
                    label="Checkbox label"
                    {0}{1}{2}{3}
                    alignment="{4}"
                ></protean-checkbox>
                `))]),_:1},8,["substitutions"])])]),L,e("section",null,[V,e("section",null,[D,U,e("ul",E,[e("li",P,[$,e("div",M,[s(t,{language:"javascript"},{default:a(()=>[o(" element.variant = 'toggle'; ")]),_:1})])]),e("li",O,[R,e("div",z,[s(t,{language:"javascript"},{default:a(()=>[o(" element.checked = true; ")]),_:1})])]),e("li",G,[H,e("div",J,[s(t,{language:"javascript"},{default:a(()=>[o(" element.label = 'Field label'; ")]),_:1})])]),e("li",K,[Q,e("div",W,[s(t,{language:"javascript"},{default:a(()=>[o(" element.a11yLabel = 'Field aria-label'; ")]),_:1})])]),e("li",X,[Y,e("div",Z,[s(t,{language:"javascript"},{default:a(()=>[o(" element.disabled = true; ")]),_:1})])]),e("li",ee,[oe,e("div",te,[s(t,{language:"javascript"},{default:a(()=>[o(' element.alignment = "right"; ')]),_:1})])]),e("li",se,[ae,e("div",le,[s(t,{language:"javascript"},{default:a(()=>[o(" element.indeterminate = true; ")]),_:1})])])])]),e("section",null,[ce,e("ul",ie,[e("li",ne,[e("div",de,[re,e("div",pe,[o(" Fires when the checkbox is toggled. "),he,s(t,{language:"typescript"},{default:a(()=>[o(h(`
                                event: {
                                    detail: {
                                        checked: boolean,
                                    }
                                }
                            `))]),_:1})])]),e("div",ue,[s(t,{language:"javascript"},{default:a(()=>[o(h(`
                            function onChange(event) {
                                this.checked = event.detail.checked;
                            }
                        `),1)]),_:1}),s(t,{language:"html"},{default:a(()=>[o(h(`
                            <protean-checkbox
                                label="My checkbox label"
                                onchange="onChange(event)"
                            ></protean-checkbox>
                            `),1)]),_:1})])])])]),e("section",null,[ve,_e,e("ul",ge,[e("li",me,[be,e("div",ke,[s(t,{language:"css"},{default:a(()=>[o(" --protean-checkbox-margin: 1rem; ")]),_:1})])]),e("li",fe,[xe,e("div",we,[s(t,{language:"css"},{default:a(()=>[o(" --protean-checkbox-outline-color: #aaaaaa; ")]),_:1})])]),e("li",ye,[Ce,e("div",Te,[s(t,{language:"css"},{default:a(()=>[o(" --protean-checkbox-toggle-path-color: #535353; ")]),_:1})])]),e("li",qe,[Ae,e("div",Se,[s(t,{language:"css"},{default:a(()=>[o(" --protean-checkbox-toggle-circle-fill: #000000; ")]),_:1})])]),e("li",je,[Fe,e("div",Ne,[s(t,{language:"css"},{default:a(()=>[o(" --protean-checkbox-checked-outer-color: var(--action-color); ")]),_:1})])]),e("li",Be,[Ie,e("div",Le,[s(t,{language:"css"},{default:a(()=>[o(" --protean-checkbox-checked-inner-color: var(--action-contrast-color); ")]),_:1})])]),e("li",Ve,[De,e("div",Ue,[s(t,{language:"css"},{default:a(()=>[o(" --protean-checkbox-disabled-opacity: var(--disabled-opacity); ")]),_:1})])])])])])],64))}});export{Oe as default};
