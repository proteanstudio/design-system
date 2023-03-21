import{_ as o}from"./styles.scss_vue_type_style_index_0_src_true_lang-b52e92ca.js";import{f as V,g as n,i as F,a as r,b as e,l as v,u as M,F as f,p as k,m as H,e as s,w as a,d as t,c as p,q as P,o as c,t as d}from"./index-8ab0259f.js";const B=e("h1",null,"Input field",-1),O=e("p",null," Input fields allow users to enter information. This element supports several input formatting options. ",-1),U={class:"overview-content"},$=e("h2",{"data-in-page-anchor":"overview"},"Overview",-1),R={class:"overview-demo"},W=["label","type","suppressMessages","optional","disabled","readonly","format","maxlength"],G={class:"overview-demo-controls"},J=["value"],K=["value"],Q=["label"],X=["value","label"],Z=["value"],ee=["value","label"],te={class:"overview-demo-snippet"},oe=p('<section class="best-practices-content"><h2 data-in-page-anchor="best-practices">Best practices</h2><section><h3>Use short, clear field labels.</h3><ul><li> The label should make it obvious what information is being requested. </li></ul></section><section><h3>No placeholder text</h3><p> The <code>protean-input</code> element does not support placeholder text for the following reasons: </p><ul><li> Placeholder text often fails to meet minimum contrast requirements </li><li> Fields with placeholder text appear completed, and users may mistakenly overlook them </li></ul></section><section><h3>Only ask for input you actually need</h3><ul><li> Users are more likely to complete forms with fewer fields, and to make fewer errors when doing so. </li><li> If you must include optional fields in your form, use the <code>optional</code> attribute to clearly distinguish them from required fields. </li></ul></section><section><h3>Assist the user with inline hints and error messages</h3><ul><li> Communicate unique or complex input requirements with the <code>hints</code> array. These hints are displayed when the input field is focused. </li><li> Provide inline validation feedback with the <code>errors</code> array. Like hints, these error messages are displayed while the input is focused. </li><li> Input fields with at least one item in the <code>errors</code> array also receive styles to make them easy to find when scanning the form. </li></ul></section><section><h3> Use the appropriate input field type for the kind of data you expect. </h3><ul><li> Choosing the right input field type is particularly useful for users on mobile devices and those using assistive technology: mobile devices display keyboards optimized for each input type, and many screen readers have input modes specific to a given input type. </li></ul></section></section>',1),se=e("h2",{"data-in-page-anchor":"api"},"API",-1),ae=e("h3",null,"Properties",-1),le=e("div",null,[t(" In the following examples, "),e("code",null,"element"),t(" refers to an instance of "),e("code",null,"protean-input"),t(" (i.e. "),e("code",null,"element = document.querySelector('protean-input#myInput')"),t("). ")],-1),ie={class:"prop-list"},ne={class:"prop-item"},de=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"},"value"),e("div",{class:"prop-type"},[e("code",null,"string")]),e("div",{class:"prop-desc"},"The value of the input.")],-1),re={class:"prop-example"},ce={class:"prop-item"},pe=p('<div class="prop-info"><h4 class="prop-name">label</h4><div class="prop-type"><code>string</code></div><div class="prop-attribute"> Attribute name: <code>label</code></div><div class="prop-desc"> The visible label for the input. </div></div>',1),ue={class:"prop-example"},he={class:"prop-item"},ve=p('<div class="prop-info"><h4 class="prop-name">a11yLabel</h4><div class="prop-type"><code>string</code></div><div class="prop-attribute"> Attribute name: <code>a11y-label</code></div><div class="prop-desc"> The label read by assistive technologies for the input; <code>a11yLabel</code> is used here instead of <code>ariaLabel</code> to prevent double readings of the text by those technologies. Note: when <code>label</code> is set, this value will not be bound to the field. </div></div>',1),me={class:"prop-example"},_e={class:"prop-item"},fe=p('<div class="prop-info"><h4 class="prop-name">type</h4><div class="prop-type"><code>&quot;text&quot;</code> (default) | <code>&quot;tel&quot;</code> | <code>&quot;number&quot;</code> | <code>&quot;password&quot;</code> | <code>&quot;search&quot;</code> | <code>&quot;phone&quot;</code> | <code>&quot;numeric&quot;</code> | <code>&quot;date&quot;</code></div><div class="prop-attribute"> Attribute name: <code>type</code></div><div class="prop-desc"> The type of input used. <code>phone</code>, <code>date</code>, and <code>numeric</code> types provide text formatting and have some settable <code>format</code>s. </div></div>',1),ge={class:"prop-example"},be={class:"prop-item"},ye=p('<div class="prop-info"><h4 class="prop-name">format</h4><div class="prop-type"><code>string</code></div><div class="prop-attribute"> Attribute name: <code>format</code></div><div class="prop-desc"> The format of the visible text in the input field. Allowed values are dependent on type selection. Note that the visible value may differ from what is set onto the <code>value</code> property; when <code>value</code> is set programmatically, it will automatically be formatted. </div></div>',1),xe={class:"prop-example"},we=e("div",{class:"prop-extras"},[e("h5",null,[e("code",null,"numeric"),t(" formats:")]),e("ul",null,[e("li",null,[e("code",null,"integer")]),e("li",null,[e("code",null,"delimited")]),e("li",null,[e("code",null,"Ndec"),t(" where "),e("code",null,"N"),t(" is a count of numbers after the decimal. ")])])],-1),ke=e("h5",null,[e("code",null,"date"),t(" formats:")],-1),qe={class:"prop-item"},Me=p('<div class="prop-info"><h4 class="prop-name">optional</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute"> Attribute name: <code>optional</code></div><div class="prop-desc"> Marks the field as optional to the user by appending &quot;(optional)&quot; to the visible <code>label</code> and to assistive technologies by setting <code>aria-required=&quot;false&quot;</code>. </div></div>',1),Te={class:"prop-example"},Ce={class:"prop-item"},Ye=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"},"hints"),e("div",{class:"prop-type"},[e("code",null,"string[]")]),e("div",{class:"prop-desc"}," An array of hints made visible to the user when the field is focused - hints are also read by assistive technologies. ")],-1),je={class:"prop-example"},Fe={class:"prop-item"},Ae=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"},"errors"),e("div",{class:"prop-type"},[e("code",null,"string[]")]),e("div",{class:"prop-desc"}," An array of errors made visible to the user when the field is focused. When populated, the field border is changed, an error icon is added, and assistive technologies are alerted to the invalid state of the field. Errors take precedence over hints. ")],-1),De={class:"prop-example"},Ee={class:"prop-item"},Ie=p('<div class="prop-info"><h4 class="prop-name">suppressMessages</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute"> Attribute name: <code>suppress-messages</code></div><div class="prop-desc"> Dictates the visibility of <code>hint</code> or <code>error</code> messages when the field is focused. Other error state indicators are not affected by this property. </div></div>',1),Ne={class:"prop-example"},Se={class:"prop-item"},ze=p('<div class="prop-info"><h4 class="prop-name">disabled</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute"> Attribute name: <code>disabled</code></div><div class="prop-desc"> Disables the field and prevents user interaction. </div></div>',1),Le={class:"prop-example"},Ve={class:"prop-item"},He=p('<div class="prop-info"><h4 class="prop-name">readonly</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute"> Attribute name: <code>readonly</code></div><div class="prop-desc"> Prevents editing but, unlike <code>disabled</code>, allows the field to be focused. </div></div>',1),Pe={class:"prop-example"},Be={class:"prop-item"},Oe=p('<div class="prop-info"><h4 class="prop-name">maxlength</h4><div class="prop-type"><code>number</code></div><div class="prop-attribute"> Attribute name: <code>maxlength</code></div><div class="prop-desc"> Maximum allowed length of the input value. This value will be ignored for most formatted input types in favor of the length of the selected format. For <code>numeric</code> formats, this value is adjusted internally to account for any delimiting characters. </div></div>',1),Ue={class:"prop-example"},$e=e("h3",null,"Events",-1),Re={class:"prop-list"},We={class:"prop-item"},Ge={class:"prop-info"},Je=e("h4",{class:"prop-name"},"change",-1),Ke={class:"prop-desc"},Qe=e("h5",null,"Event detail",-1),Xe={class:"prop-example"},Ze={class:"prop-item"},et={class:"prop-info"},tt=e("h4",{class:"prop-name"},"input",-1),ot={class:"prop-desc"},st=e("h5",null,"Event detail",-1),at={class:"prop-example"},lt=e("h3",null,"CSS variables",-1),it=e("p",null,[t(" Listed below are the CSS variables that can be adjusted to alter the "),e("code",null,"protean-input"),t(" element's appearance along with the default values set in the "),e("code",null,"protean-styles"),t(" package: ")],-1),nt={class:"prop-list stacked"},dt={class:"prop-item"},rt=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"},"--protean-input-margin"),e("div",{class:"prop-desc"},[t(" The margin around the "),e("code",null,"protean-input"),t(" element. ")])],-1),ct={class:"prop-example"},pt={class:"prop-item"},ut=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"},"--protean-input-border-color"),e("div",{class:"prop-desc"}," The color of the border that wraps the input field and its and label. ")],-1),ht={class:"prop-example"},vt={class:"prop-item"},mt=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"},"--protean-input-border-radius"),e("div",{class:"prop-desc"}," The radius of the border that wraps the input field and its and label. ")],-1),_t={class:"prop-example"},ft={class:"prop-item"},gt=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"}," --protean-input-label-font-size "),e("div",{class:"prop-desc"},"The size of the label text.")],-1),bt={class:"prop-example"},yt={class:"prop-item"},xt=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"}," --protean-input-label-optional-font-size "),e("div",{class:"prop-desc"},[t(" The size of the "),e("code",null,"(optional)"),t(" text within the label. ")])],-1),wt={class:"prop-example"},kt={class:"prop-item"},qt=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"},"--protean-input-font-size"),e("div",{class:"prop-desc"}," The size of the text within the input field. ")],-1),Mt={class:"prop-example"},Tt={class:"prop-item"},Ct=e("div",{class:"prop-info"},[e("h4",{class:"prop-name"}," --protean-input-disabled-opacity "),e("div",{class:"prop-desc"}," The opacity of the field while it is disabled. ")],-1),Yt={class:"prop-example"},Dt=V({__name:"index",setup(jt){const A=n([{label:"Native",children:[{value:"text",label:"Text (default)"},{value:"tel",label:"tel"},{value:"number",label:"number"},{value:"password",label:"password"},{value:"search",label:"search"},{value:"color",label:"color"}]},{label:"Formatted",children:[{value:"phone",label:"phone"},{value:"numeric",label:"numeric"},{value:"date",label:"date"},{value:"color-code",label:"color-code"}]}]),h=n("text"),D=n(["Hint #1","Hint #2"]),T=n(["Error #1"]),g=n(!1),m=n(!1),b=n(!1),y=n(!1),x=n(!1),w=n("20"),_=n(""),E=n(["integer","delimited","3dec"]),C=n(["MM/DD/YYYY","M/D/YYYY","MM/DD/YY","M/D/YY","MM/YY","M/YY"]),I=n(["hex","hexa","rgb"]);n("date");const Y=F(()=>({numeric:E.value,date:C.value,"color-code":I.value})[h.value]),N=F(()=>g.value?T.value:[]),S=()=>{if(!g.value||m.value)return;const q=Math.round(Math.random()*9+1),i=new Array(q).fill("").map((u,l)=>`Error #${l+1}`);T.value=i};return(q,i)=>{const u=P("prop");return c(),r(f,null,[B,O,e("section",U,[$,e("div",R,[v(e("protean-input",{class:"overview-demo-element",label:h.value==="color"?void 0:"Field label",type:h.value,suppressMessages:m.value,optional:b.value,disabled:y.value,readonly:x.value,format:_.value,maxlength:w.value,onInput:S},null,40,W),[[u,D.value,"hints"],[u,M(N),"errors"]])]),e("div",G,[v(e("protean-checkbox",{class:"demo-toggle-errors",label:"Populate validation errors",variant:"toggle",onChange:i[0]||(i[0]=l=>g.value=l.detail.checked)},null,544),[[u,g.value,"checked"]]),v(e("protean-checkbox",{class:"demo-toggle-messages",label:"Hide hints and errors",variant:"toggle",onChange:i[1]||(i[1]=l=>m.value=l.detail.checked)},null,544),[[u,m.value,"checked"]]),v(e("protean-checkbox",{class:"demo-toggle-optional",label:"Show as optional",variant:"toggle",onChange:i[2]||(i[2]=l=>b.value=l.detail.checked)},null,544),[[u,b.value,"checked"]]),v(e("protean-checkbox",{class:"demo-toggle-disabled",label:"Show as disabled",variant:"toggle",onChange:i[3]||(i[3]=l=>y.value=l.detail.checked)},null,544),[[u,y.value,"checked"]]),v(e("protean-checkbox",{class:"demo-toggle-readonly",label:"Show as readonly",variant:"toggle",onChange:i[4]||(i[4]=l=>x.value=l.detail.checked)},null,544),[[u,x.value,"checked"]]),e("protean-input",{class:"demo-input-maxlength",label:"Input maxlength",type:"numeric",format:"integer",maxlength:"3",value:w.value,onChange:i[5]||(i[5]=l=>w.value=l.detail.value)},null,40,J),e("protean-select",{class:"demo-select-type",onChange:i[6]||(i[6]=l=>h.value=l.detail.value),value:h.value,label:"Input type"},[(c(!0),r(f,null,k(A.value,({label:l,children:z})=>(c(),r("protean-optgroup",{label:l},[(c(!0),r(f,null,k(z,({value:L,label:j})=>(c(),r("protean-option",{value:L,label:j},d(j),9,X))),256))],8,Q))),256))],40,K),M(Y)?(c(),r("protean-select",{key:0,class:"demo-select-format",value:_.value,label:"Input format",onChange:i[7]||(i[7]=l=>_.value=l.detail.value)},[(c(!0),r(f,null,k(M(Y),l=>(c(),r("protean-option",{value:l,label:l},d(l),9,ee))),256))],40,Z)):H("",!0)]),e("div",te,[s(o,{substitutions:[h.value==="color"?"":`label="Field label" 
`,h.value,_.value?`
 format="${_.value}"`:"",`
 maxlength="${w.value}"`,m.value?`
 suppress-messages`:"",b.value?`
 optional`:"",y.value?`
 disabled`:"",x.value?`
 readonly`:""]},{default:a(()=>[t(d(`<protean-input
                    {0}type="{1}"
                    {2}{3}{4}{5}{6}{7}
                ></protean-input>
                `))]),_:1},8,["substitutions"])])]),oe,e("section",null,[se,e("section",null,[ae,le,e("ul",ie,[e("li",ne,[de,e("div",re,[s(o,{language:"javascript"},{default:a(()=>[t(" element.value = '02/09/2021'; ")]),_:1})])]),e("li",ce,[pe,e("div",ue,[s(o,{language:"javascript"},{default:a(()=>[t(" element.label = 'Field label'; ")]),_:1})])]),e("li",he,[ve,e("div",me,[s(o,{language:"javascript"},{default:a(()=>[t(" element.a11yLabel = 'Field aria-label'; ")]),_:1})])]),e("li",_e,[fe,e("div",ge,[s(o,{language:"javascript"},{default:a(()=>[t(" element.type = 'tel'; ")]),_:1})])]),e("li",be,[ye,e("div",xe,[we,e("div",null,[ke,e("ul",null,[(c(!0),r(f,null,k(C.value,l=>(c(),r("li",null,[e("code",null,d(l),1)]))),256))])]),s(o,{language:"javascript"},{default:a(()=>[t(d(`element.type = 'date';
                        element.format = 'M/D/YY';`),1)]),_:1})])]),e("li",qe,[Me,e("div",Te,[s(o,{language:"javascript"},{default:a(()=>[t(" element.optional = true; ")]),_:1})])]),e("li",Ce,[Ye,e("div",je,[s(o,{language:"javascript"},{default:a(()=>[t(" element.hints = [ 'Hint #1', ' Hint #2' ]; ")]),_:1})])]),e("li",Fe,[Ae,e("div",De,[s(o,{language:"javascript"},{default:a(()=>[t(" element.errors = [ 'Error #1', ' Error #2' ]; ")]),_:1})])]),e("li",Ee,[Ie,e("div",Ne,[s(o,{language:"javascript"},{default:a(()=>[t(" element.suppressMessages = true; ")]),_:1})])]),e("li",Se,[ze,e("div",Le,[s(o,{language:"javascript"},{default:a(()=>[t(" element.disabled = true; ")]),_:1})])]),e("li",Ve,[He,e("div",Pe,[s(o,{language:"javascript"},{default:a(()=>[t(" element.readonly = true; ")]),_:1})])]),e("li",Be,[Oe,e("div",Ue,[s(o,{language:"javascript"},{default:a(()=>[t(" element.maxlength = 20; ")]),_:1})])])])]),e("section",null,[$e,e("ul",Re,[e("li",We,[e("div",Ge,[Je,e("div",Ke,[t(" Fires when the field loses focus after having its value updated. "),Qe,s(o,{language:"typescript"},{default:a(()=>[t(d(`event: {
                                    detail: {
                                        value: string,
                                        formattedValue: string,
                                    } 
                                }`))]),_:1})])]),e("div",Xe,[s(o,{language:"javascript"},{default:a(()=>[t(d(` function onChange(event) {
                            this.value = event.detail.value; 
                        } `),1)]),_:1}),s(o,{language:"html"},{default:a(()=>[t(d(`
                            <protean-input
                                label="My input field label"
                                onchange="onChange(event)"
                            ></protean-input>
                            `),1)]),_:1})])]),e("li",Ze,[e("div",et,[tt,e("div",ot,[t(" Fires when the user modifies the field value. Useful for inline field validation. "),st,s(o,{language:"typescript"},{default:a(()=>[t(d(`event: {
                                    detail: {
                                        value: string,
                                        formattedValue: string,
                                    } 
                                }`))]),_:1})])]),e("div",at,[s(o,{language:"javascript"},{default:a(()=>[t(d(`function onInput(event) {
                            const value = event.detail.value;
                            this.value = value;

                            this.errors = value === '' ? ['My input field label should have a least one character.'] : [];
                        } `),1)]),_:1}),s(o,{language:"html"},{default:a(()=>[t(d(`
                            <protean-input
                                label="My input field label"
                                oninput="onInput(event)"
                            ></protean-input>
                            `),1)]),_:1})])])])]),e("section",null,[lt,it,e("ul",nt,[e("li",dt,[rt,e("div",ct,[s(o,{language:"css"},{default:a(()=>[t(" --protean-input-margin: 1rem; ")]),_:1})])]),e("li",pt,[ut,e("div",ht,[s(o,{language:"css"},{default:a(()=>[t(" --protean-input-border-color: currentColor; ")]),_:1})])]),e("li",vt,[mt,e("div",_t,[s(o,{language:"css"},{default:a(()=>[t(" --protean-input-border-radius: 2px; ")]),_:1})])]),e("li",ft,[gt,e("div",bt,[s(o,{language:"css"},{default:a(()=>[t(" --protean-input-label-font-size: 0.6875rem; ")]),_:1})])]),e("li",yt,[xt,e("div",wt,[s(o,{language:"css"},{default:a(()=>[t(" --protean-input-label-optional-font-size: 0.625rem; ")]),_:1})])]),e("li",kt,[qt,e("div",Mt,[s(o,{language:"css"},{default:a(()=>[t(" --protean-input-font-size: 1rem; ")]),_:1})])]),e("li",Tt,[Ct,e("div",Yt,[s(o,{language:"css"},{default:a(()=>[t(" --protean-input-disabled-opacity: var(--disabled-opacity); ")]),_:1})])])])])])],64)}}});export{Dt as default};