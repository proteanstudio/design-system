(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bae6e17"],{"41e7":function(e,t,a){"use strict";a.r(t);var l=a("4430");const o=Object(l["g"])("h1",null,"Input field",-1),s=Object(l["g"])("p",null," Input fields allow users to enter information. This element supports several input formatting options. ",-1),c={class:"overview-content"},i=Object(l["g"])("h2",{"data-in-page-anchor":"overview"},"Overview",-1),n={class:"overview-demo"},r={class:"overview-demo-controls"},d={class:"overview-demo-snippet"},p=Object(l["i"])(Object(l["D"])('<protean-input\n                {0}type="{1}" {2}{3}{4}{5}{6}{7}\n            ></protean-input>\n            ')),b=Object(l["h"])('<section class="best-practices-content"><h2 data-in-page-anchor="best-practices">Best practices</h2><section><h3>Use short, clear field labels.</h3><ul><li>The label should make it obvious what information is being requested.</li></ul></section><section><h3>No placeholder text</h3><p>The <code>protean-input</code> element does not support placeholder text for the following reasons:</p><ul><li>Placeholder text often fails to meet minimum contrast requirements</li><li>Fields with placeholder text appear completed, and users may mistakenly overlook them</li></ul></section><section><h3>Only ask for input you actually need</h3><ul><li>Users are more likely to complete forms with fewer fields, and to make fewer errors when doing so.</li><li>If you must include optional fields in your form, use the <code>optional</code> attribute to clearly distinguish them from required fields.</li></ul></section><section><h3>Assist the user with inline hints and error messages</h3><ul><li>Communicate unique or complex input requirements with the <code>hints</code> array. These hints are displayed when the input field is focused.</li><li>Provide inline validation feedback with the <code>errors</code> array. Like hints, these error messages are displayed while the input is focused.</li><li>Input fields with at least one item in the <code>errors</code> array also receive styles to make them easy to find when scanning the form.</li></ul></section><section><h3>Use the appropriate input field type for the kind of data you expect.</h3><ul><li>Choosing the right input field type is particularly useful for users on mobile devices and those using assistive technology: mobile devices display keyboards optimized for each input type, and many screen readers have input modes specific to a given input type.</li></ul></section></section>',1),u=Object(l["g"])("h2",{"data-in-page-anchor":"api"},"API",-1),j=Object(l["g"])("h3",null,"Properties",-1),O=Object(l["g"])("div",null,[Object(l["i"])(" In the following examples, "),Object(l["g"])("code",null,"element"),Object(l["i"])(" refers to an instance of "),Object(l["g"])("code",null,"protean-input"),Object(l["i"])(" (i.e. "),Object(l["g"])("code",null,"element = document.querySelector('protean-input#myInput')"),Object(l["i"])("). ")],-1),h={class:"prop-list"},m={class:"prop-item"},g=Object(l["g"])("div",{class:"prop-info"},[Object(l["g"])("h4",{class:"prop-name"},"value"),Object(l["g"])("div",{class:"prop-type"},[Object(l["g"])("code",null,"string")]),Object(l["g"])("div",{class:"prop-desc"},"The value of the input.")],-1),v={class:"prop-example"},f=Object(l["i"])(" element.value = '02/09/2021'; "),y={class:"prop-item"},w=Object(l["h"])('<div class="prop-info"><h4 class="prop-name">label</h4><div class="prop-type"><code>string</code></div><div class="prop-attribute"> Attribute name: <code>label</code></div><div class="prop-desc"> The visible label for the input. </div></div>',1),x={class:"prop-example"},H=Object(l["i"])(" element.label = 'Field label'; "),M={class:"prop-item"},k=Object(l["h"])('<div class="prop-info"><h4 class="prop-name">a11yLabel</h4><div class="prop-type"><code>string</code></div><div class="prop-attribute"> Attribute name: <code>a11y-label</code></div><div class="prop-desc"> The label read by assistive technologies for the input; <code>a11yLabel</code> is used here instead of <code>ariaLabel</code> to prevent double readings of the text by those technologies. Note: when <code>label</code> is set, this value will not be bound to the field. </div></div>',1),_={class:"prop-example"},T=Object(l["i"])(" element.a11yLabel = 'Field aria-label'; "),q={class:"prop-item"},F=Object(l["h"])('<div class="prop-info"><h4 class="prop-name">type</h4><div class="prop-type"><code>&quot;text&quot;</code> (default) | <code>&quot;tel&quot;</code> | <code>&quot;number&quot;</code> | <code>&quot;password&quot;</code> | <code>&quot;search&quot;</code> | <code>&quot;phone&quot;</code> | <code>&quot;numeric&quot;</code> | <code>&quot;date&quot;</code></div><div class="prop-attribute"> Attribute name: <code>type</code></div><div class="prop-desc"> The type of input used. <code>phone</code>, <code>date</code>, and <code>numeric</code> types provide text formatting and have some settable <code>format</code>s. </div></div>',1),D={class:"prop-example"},A=Object(l["i"])(" element.type = 'tel'; "),E={class:"prop-item"},I=Object(l["h"])('<div class="prop-info"><h4 class="prop-name">format</h4><div class="prop-type"><code>string</code></div><div class="prop-attribute"> Attribute name: <code>format</code></div><div class="prop-desc"> The format of the visible text in the input field. Allowed values are dependent on type selection. Note that the visible value may differ from what is set onto the <code>value</code> property; when <code>value</code> is set programmatically, it will automatically be formatted. </div></div>',1),S={class:"prop-example"},C=Object(l["g"])("div",{class:"prop-extras"},[Object(l["g"])("h5",null,[Object(l["g"])("code",null,"numeric"),Object(l["i"])(" formats:")]),Object(l["g"])("ul",null,[Object(l["g"])("li",null,[Object(l["g"])("code",null,"integer")]),Object(l["g"])("li",null,[Object(l["g"])("code",null,"delimited")]),Object(l["g"])("li",null,[Object(l["g"])("code",null,"Ndec"),Object(l["i"])(" where "),Object(l["g"])("code",null,"N"),Object(l["i"])(" is a count of numbers after the decimal. ")])])],-1),Y=Object(l["g"])("h5",null,[Object(l["g"])("code",null,"date"),Object(l["i"])(" formats:")],-1),z={class:"prop-item"},L=Object(l["h"])('<div class="prop-info"><h4 class="prop-name">optional</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute"> Attribute name: <code>optional</code></div><div class="prop-desc"> Marks the field as optional to the user by appending &quot;(optional)&quot; to the visible <code>label</code> and to assistive technologies by setting <code>aria-required=&quot;false&quot;</code>. </div></div>',1),N={class:"prop-example"},P=Object(l["i"])(" element.optional = true; "),R={class:"prop-item"},U=Object(l["g"])("div",{class:"prop-info"},[Object(l["g"])("h4",{class:"prop-name"},"hints"),Object(l["g"])("div",{class:"prop-type"},[Object(l["g"])("code",null,"string[]")]),Object(l["g"])("div",{class:"prop-desc"}," An array of hints made visible to the user when the field is focused - hints are also read by assistive technologies. ")],-1),B={class:"prop-example"},J=Object(l["i"])(" element.hints = [ 'Hint #1', ' Hint #2' ]; "),V={class:"prop-item"},$=Object(l["g"])("div",{class:"prop-info"},[Object(l["g"])("h4",{class:"prop-name"},"errors"),Object(l["g"])("div",{class:"prop-type"},[Object(l["g"])("code",null,"string[]")]),Object(l["g"])("div",{class:"prop-desc"}," An array of errors made visible to the user when the field is focused. When populated, the field border is changed, an error icon is added, and assistive technologies are alerted to the invalid state of the field. Errors take precedence over hints. ")],-1),W={class:"prop-example"},G=Object(l["i"])(" element.errors = [ 'Error #1', ' Error #2' ]; "),K={class:"prop-item"},Q=Object(l["h"])('<div class="prop-info"><h4 class="prop-name">suppressMessages</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute"> Attribute name: <code>suppress-messages</code></div><div class="prop-desc"> Dictates the visibility of <code>hint</code> or <code>error</code> messages when the field is focused. Other error state indicators are not affected by this property. </div></div>',1),X={class:"prop-example"},Z=Object(l["i"])(" element.suppressMessages = true; "),ee={class:"prop-item"},te=Object(l["h"])('<div class="prop-info"><h4 class="prop-name">disabled</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute"> Attribute name: <code>disabled</code></div><div class="prop-desc"> Disables the field and prevents user interaction. </div></div>',1),ae={class:"prop-example"},le=Object(l["i"])(" element.disabled = true; "),oe={class:"prop-item"},se=Object(l["h"])('<div class="prop-info"><h4 class="prop-name">readonly</h4><div class="prop-type"><code>boolean</code></div><div class="prop-attribute"> Attribute name: <code>readonly</code></div><div class="prop-desc"> Prevents editing but, unlike <code>disabled</code>, allows the field to be focused. </div></div>',1),ce={class:"prop-example"},ie=Object(l["i"])(" element.readonly = true; "),ne={class:"prop-item"},re=Object(l["h"])('<div class="prop-info"><h4 class="prop-name">maxlength</h4><div class="prop-type"><code>number</code></div><div class="prop-attribute"> Attribute name: <code>maxlength</code></div><div class="prop-desc"> Maximum allowed length of the input value. This value will be ignored for most formatted input types in favor of the length of the selected format. For <code>numeric</code> formats, this value is adjusted internally to account for any delimiting characters. </div></div>',1),de={class:"prop-example"},pe=Object(l["i"])(" element.maxlength = 20; "),be=Object(l["g"])("h3",null,"Events",-1),ue={class:"prop-list"},je={class:"prop-item"},Oe={class:"prop-info"},he=Object(l["g"])("h4",{class:"prop-name"},"change",-1),me={class:"prop-desc"},ge=Object(l["i"])(" Fires when the field loses focus after having its value updated. "),ve=Object(l["g"])("h5",null,"Event detail",-1),fe=Object(l["i"])(Object(l["D"])("event: {\n                                    detail: {\n                                        value: string,\n                                        formattedValue: string,\n                                    } \n                                }")),ye={class:"prop-example"},we={class:"prop-item"},xe={class:"prop-info"},He=Object(l["g"])("h4",{class:"prop-name"},"input",-1),Me={class:"prop-desc"},ke=Object(l["i"])(" Fires when the user modifies the field value. Useful for inline field validation. "),_e=Object(l["g"])("h5",null,"Event detail",-1),Te=Object(l["i"])(Object(l["D"])("event: {\n                                    detail: {\n                                        value: string,\n                                        formattedValue: string,\n                                    } \n                                }")),qe={class:"prop-example"},Fe=Object(l["g"])("h3",null,"CSS variables",-1),De=Object(l["g"])("p",null,[Object(l["i"])("Listed below are the CSS variables that can be adjusted to alter the "),Object(l["g"])("code",null,"protean-input"),Object(l["i"])(" element's appearance along with the default values set in the "),Object(l["g"])("code",null,"protean-styles"),Object(l["i"])(" package:")],-1),Ae={class:"prop-list stacked"},Ee={class:"prop-item"},Ie=Object(l["g"])("div",{class:"prop-info"},[Object(l["g"])("h4",{class:"prop-name"},"--protean-input-margin"),Object(l["g"])("div",{class:"prop-desc"},[Object(l["i"])(" The margin around the "),Object(l["g"])("code",null,"protean-input"),Object(l["i"])(" element. ")])],-1),Se={class:"prop-example"},Ce=Object(l["i"])(" --protean-input-margin: 1rem; "),Ye={class:"prop-item"},ze=Object(l["g"])("div",{class:"prop-info"},[Object(l["g"])("h4",{class:"prop-name"},"--protean-input-border-color"),Object(l["g"])("div",{class:"prop-desc"}," The color of the border that wraps the input field and its and label. ")],-1),Le={class:"prop-example"},Ne=Object(l["i"])(" --protean-input-border-color: currentColor; "),Pe={class:"prop-item"},Re=Object(l["g"])("div",{class:"prop-info"},[Object(l["g"])("h4",{class:"prop-name"},"--protean-input-border-radius"),Object(l["g"])("div",{class:"prop-desc"}," The radius of the border that wraps the input field and its and label. ")],-1),Ue={class:"prop-example"},Be=Object(l["i"])(" --protean-input-border-radius: 2px; "),Je={class:"prop-item"},Ve=Object(l["g"])("div",{class:"prop-info"},[Object(l["g"])("h4",{class:"prop-name"},"--protean-input-label-font-size"),Object(l["g"])("div",{class:"prop-desc"}," The size of the label text. ")],-1),$e={class:"prop-example"},We=Object(l["i"])(" --protean-input-label-font-size: 0.6875rem; "),Ge={class:"prop-item"},Ke=Object(l["g"])("div",{class:"prop-info"},[Object(l["g"])("h4",{class:"prop-name"},"--protean-input-label-optional-font-size"),Object(l["g"])("div",{class:"prop-desc"},[Object(l["i"])(" The size of the "),Object(l["g"])("code",null,"(optional)"),Object(l["i"])(" text within the label. ")])],-1),Qe={class:"prop-example"},Xe=Object(l["i"])(" --protean-input-label-optional-font-size: 0.625rem; "),Ze={class:"prop-item"},et=Object(l["g"])("div",{class:"prop-info"},[Object(l["g"])("h4",{class:"prop-name"},"--protean-input-font-size"),Object(l["g"])("div",{class:"prop-desc"}," The size of the text within the input field. ")],-1),tt={class:"prop-example"},at=Object(l["i"])(" --protean-input-font-size: 1rem; "),lt={class:"prop-item"},ot=Object(l["g"])("div",{class:"prop-info"},[Object(l["g"])("h4",{class:"prop-name"},"--protean-input-disabled-opacity"),Object(l["g"])("div",{class:"prop-desc"}," The opacity of the field while it is disabled. ")],-1),st={class:"prop-example"},ct=Object(l["i"])(" --protean-input-disabled-opacity: var(--disabled-opacity); ");function it(e,t){const a=Object(l["A"])("protean-input"),it=Object(l["A"])("protean-checkbox"),nt=Object(l["A"])("protean-option"),rt=Object(l["A"])("protean-optgroup"),dt=Object(l["A"])("protean-select"),pt=Object(l["A"])("code-snippet"),bt=Object(l["B"])("prop");return Object(l["t"])(),Object(l["f"])(l["a"],null,[o,s,Object(l["g"])("section",c,[i,Object(l["g"])("div",n,[Object(l["I"])(Object(l["j"])(a,{class:"overview-demo-element",label:"color"===e.demoType?void 0:"Field label",type:e.demoType,suppressMessages:e.demoSuppressMessages,optional:e.demoOptional,disabled:e.demoDisabled,readonly:e.demoReadonly,format:e.demoFormat,maxlength:e.demoMaxlength,onInput:e.spamErrors},null,8,["label","type","suppressMessages","optional","disabled","readonly","format","maxlength","onInput"]),[[bt,e.demoHints,"hints"],[bt,e.demoErrors,"errors"]])]),Object(l["g"])("div",r,[Object(l["I"])(Object(l["j"])(it,{class:"demo-toggle-errors",label:"Populate validation errors",variant:"toggle",onChange:t[0]||(t[0]=t=>e.demoShowErrors=t.detail.checked)},null,512),[[bt,e.demoShowErrors,"checked"]]),Object(l["I"])(Object(l["j"])(it,{class:"demo-toggle-messages",label:"Hide hints and errors",variant:"toggle",onChange:t[1]||(t[1]=t=>e.demoSuppressMessages=t.detail.checked)},null,512),[[bt,e.demoSuppressMessages,"checked"]]),Object(l["I"])(Object(l["j"])(it,{class:"demo-toggle-optional",label:"Show as optional",variant:"toggle",onChange:t[2]||(t[2]=t=>e.demoOptional=t.detail.checked)},null,512),[[bt,e.demoOptional,"checked"]]),Object(l["I"])(Object(l["j"])(it,{class:"demo-toggle-disabled",label:"Show as disabled",variant:"toggle",onChange:t[3]||(t[3]=t=>e.demoDisabled=t.detail.checked)},null,512),[[bt,e.demoDisabled,"checked"]]),Object(l["I"])(Object(l["j"])(it,{class:"demo-toggle-readonly",label:"Show as readonly",variant:"toggle",onChange:t[4]||(t[4]=t=>e.demoReadonly=t.detail.checked)},null,512),[[bt,e.demoReadonly,"checked"]]),Object(l["j"])(a,{class:"demo-input-maxlength",label:"Input maxlength",type:"numeric",format:"integer",maxlength:"3",value:e.demoMaxlength,onChange:t[5]||(t[5]=t=>e.demoMaxlength=t.detail.value)},null,8,["value"]),Object(l["j"])(dt,{class:"demo-select-type",onChange:t[6]||(t[6]=t=>e.demoType=t.detail.value),value:e.demoType,label:"Input type"},{default:Object(l["H"])(()=>[(Object(l["t"])(!0),Object(l["f"])(l["a"],null,Object(l["y"])(e.demoTypes,({label:e,children:t})=>(Object(l["t"])(),Object(l["d"])(rt,{label:e},{default:Object(l["H"])(()=>[(Object(l["t"])(!0),Object(l["f"])(l["a"],null,Object(l["y"])(t,({value:e,label:t})=>(Object(l["t"])(),Object(l["d"])(nt,{value:e,label:t},{default:Object(l["H"])(()=>[Object(l["i"])(Object(l["D"])(t),1)]),_:2},1032,["value","label"]))),256))]),_:2},1032,["label"]))),256))]),_:1},8,["value"]),e.demoFormats?(Object(l["t"])(),Object(l["d"])(dt,{key:0,class:"demo-select-format",value:e.demoFormat,label:"Input format",onChange:t[7]||(t[7]=t=>e.demoFormat=t.detail.value)},{default:Object(l["H"])(()=>[(Object(l["t"])(!0),Object(l["f"])(l["a"],null,Object(l["y"])(e.demoFormats,e=>(Object(l["t"])(),Object(l["d"])(nt,{value:e,label:e},{default:Object(l["H"])(()=>[Object(l["i"])(Object(l["D"])(e),1)]),_:2},1032,["value","label"]))),256))]),_:1},8,["value"])):Object(l["e"])("",!0)]),Object(l["g"])("div",d,[Object(l["j"])(pt,{substitutions:["color"===e.demoType?"":'label="Field label" \n',e.demoType,e.demoFormat?`\n format="${e.demoFormat}"`:"",`\n maxlength="${e.demoMaxlength}"`,e.demoSuppressMessages?"\n suppress-messages":"",e.demoOptional?"\n optional":"",e.demoDisabled?"\n disabled":"",e.demoReadonly?"\n readonly":""]},{default:Object(l["H"])(()=>[p]),_:1},8,["substitutions"])])]),b,Object(l["g"])("section",null,[u,Object(l["g"])("section",null,[j,O,Object(l["g"])("ul",h,[Object(l["g"])("li",m,[g,Object(l["g"])("div",v,[Object(l["j"])(pt,{language:"javascript"},{default:Object(l["H"])(()=>[f]),_:1})])]),Object(l["g"])("li",y,[w,Object(l["g"])("div",x,[Object(l["j"])(pt,{language:"javascript"},{default:Object(l["H"])(()=>[H]),_:1})])]),Object(l["g"])("li",M,[k,Object(l["g"])("div",_,[Object(l["j"])(pt,{language:"javascript"},{default:Object(l["H"])(()=>[T]),_:1})])]),Object(l["g"])("li",q,[F,Object(l["g"])("div",D,[Object(l["j"])(pt,{language:"javascript"},{default:Object(l["H"])(()=>[A]),_:1})])]),Object(l["g"])("li",E,[I,Object(l["g"])("div",S,[C,Object(l["g"])("div",null,[Y,Object(l["g"])("ul",null,[(Object(l["t"])(!0),Object(l["f"])(l["a"],null,Object(l["y"])(e.dateFormats,e=>(Object(l["t"])(),Object(l["f"])("li",null,[Object(l["g"])("code",null,Object(l["D"])(e),1)]))),256))])]),Object(l["j"])(pt,{language:"javascript"},{default:Object(l["H"])(()=>[Object(l["i"])(Object(l["D"])("element.type = 'date';\n                        element.format = 'M/D/YY';"),1)]),_:1})])]),Object(l["g"])("li",z,[L,Object(l["g"])("div",N,[Object(l["j"])(pt,{language:"javascript"},{default:Object(l["H"])(()=>[P]),_:1})])]),Object(l["g"])("li",R,[U,Object(l["g"])("div",B,[Object(l["j"])(pt,{language:"javascript"},{default:Object(l["H"])(()=>[J]),_:1})])]),Object(l["g"])("li",V,[$,Object(l["g"])("div",W,[Object(l["j"])(pt,{language:"javascript"},{default:Object(l["H"])(()=>[G]),_:1})])]),Object(l["g"])("li",K,[Q,Object(l["g"])("div",X,[Object(l["j"])(pt,{language:"javascript"},{default:Object(l["H"])(()=>[Z]),_:1})])]),Object(l["g"])("li",ee,[te,Object(l["g"])("div",ae,[Object(l["j"])(pt,{language:"javascript"},{default:Object(l["H"])(()=>[le]),_:1})])]),Object(l["g"])("li",oe,[se,Object(l["g"])("div",ce,[Object(l["j"])(pt,{language:"javascript"},{default:Object(l["H"])(()=>[ie]),_:1})])]),Object(l["g"])("li",ne,[re,Object(l["g"])("div",de,[Object(l["j"])(pt,{language:"javascript"},{default:Object(l["H"])(()=>[pe]),_:1})])])])]),Object(l["g"])("section",null,[be,Object(l["g"])("ul",ue,[Object(l["g"])("li",je,[Object(l["g"])("div",Oe,[he,Object(l["g"])("div",me,[ge,ve,Object(l["j"])(pt,{language:"typescript"},{default:Object(l["H"])(()=>[fe]),_:1})])]),Object(l["g"])("div",ye,[Object(l["j"])(pt,{language:"javascript"},{default:Object(l["H"])(()=>[Object(l["i"])(Object(l["D"])(" function onChange(event) {\n                            this.value = event.detail.value; \n                        } "),1)]),_:1}),Object(l["j"])(pt,{language:"html"},{default:Object(l["H"])(()=>[Object(l["i"])(Object(l["D"])('\n                        <protean-input\n                            label="My input field label"\n                            onchange="onChange(event)"\n                        ></protean-input>\n                        '),1)]),_:1})])]),Object(l["g"])("li",we,[Object(l["g"])("div",xe,[He,Object(l["g"])("div",Me,[ke,_e,Object(l["j"])(pt,{language:"typescript"},{default:Object(l["H"])(()=>[Te]),_:1})])]),Object(l["g"])("div",qe,[Object(l["j"])(pt,{language:"javascript"},{default:Object(l["H"])(()=>[Object(l["i"])(Object(l["D"])("function onInput(event) {\n                            const value = event.detail.value;\n                            this.value = value;\n\n                            this.errors = value === '' ? ['My input field label should have a least one character.'] : [];\n                        } "),1)]),_:1}),Object(l["j"])(pt,{language:"html"},{default:Object(l["H"])(()=>[Object(l["i"])(Object(l["D"])('\n                        <protean-input\n                            label="My input field label"\n                            oninput="onInput(event)"\n                        ></protean-input>\n                        '),1)]),_:1})])])])]),Object(l["g"])("section",null,[Fe,De,Object(l["g"])("ul",Ae,[Object(l["g"])("li",Ee,[Ie,Object(l["g"])("div",Se,[Object(l["j"])(pt,{language:"css"},{default:Object(l["H"])(()=>[Ce]),_:1})])]),Object(l["g"])("li",Ye,[ze,Object(l["g"])("div",Le,[Object(l["j"])(pt,{language:"css"},{default:Object(l["H"])(()=>[Ne]),_:1})])]),Object(l["g"])("li",Pe,[Re,Object(l["g"])("div",Ue,[Object(l["j"])(pt,{language:"css"},{default:Object(l["H"])(()=>[Be]),_:1})])]),Object(l["g"])("li",Je,[Ve,Object(l["g"])("div",$e,[Object(l["j"])(pt,{language:"css"},{default:Object(l["H"])(()=>[We]),_:1})])]),Object(l["g"])("li",Ge,[Ke,Object(l["g"])("div",Qe,[Object(l["j"])(pt,{language:"css"},{default:Object(l["H"])(()=>[Xe]),_:1})])]),Object(l["g"])("li",Ze,[et,Object(l["g"])("div",tt,[Object(l["j"])(pt,{language:"css"},{default:Object(l["H"])(()=>[at]),_:1})])]),Object(l["g"])("li",lt,[ot,Object(l["g"])("div",st,[Object(l["j"])(pt,{language:"css"},{default:Object(l["H"])(()=>[ct]),_:1})])])])])])],64)}var nt,rt=a("0f9e"),dt=a("9ad1"),pt=a("fc89");function bt(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}let ut=(nt=class extends dt["b"]{constructor(...e){super(...e),bt(this,"demoTypes",[{label:"Native",children:[{value:"text",label:"Text (default)"},{value:"tel",label:"tel"},{value:"number",label:"number"},{value:"password",label:"password"},{value:"search",label:"search"},{value:"color",label:"color"}]},{label:"Formatted",children:[{value:"phone",label:"phone"},{value:"numeric",label:"numeric"},{value:"date",label:"date"},{value:"color-code",label:"color-code"}]}]),bt(this,"demoType","text"),bt(this,"demoHints",["Hint #1","Hint #2"]),bt(this,"demoErrorsList",["Error #1"]),bt(this,"demoShowErrors",!1),bt(this,"demoSuppressMessages",!1),bt(this,"demoOptional",!1),bt(this,"demoDisabled",!1),bt(this,"demoReadonly",!1),bt(this,"demoMaxlength","20"),bt(this,"demoFormat",""),bt(this,"demoNumericFormats",["integer","delimited","3dec"]),bt(this,"dateFormats",["MM/DD/YYYY","M/D/YYYY","MM/DD/YY","M/D/YY","MM/YY","M/YY"]),bt(this,"colorCodeFormats",["hex","hexa","rgb"]),bt(this,"apiFormat","date")}get demoFormats(){const e={numeric:this.demoNumericFormats,date:this.dateFormats,"color-code":this.colorCodeFormats};return e[this.demoType]}get demoErrors(){return this.demoShowErrors?this.demoErrorsList:[]}spamErrors(){if(!this.demoShowErrors||this.demoSuppressMessages)return;const e=Math.round(9*Math.random()+1),t=new Array(e).fill("").map((e,t)=>"Error #"+(t+1));this.demoErrorsList=t}},nt);ut=Object(rt["a"])([Object(dt["a"])({components:{CodeSnippet:pt["a"]}})],ut);var jt=ut;a("b122");jt.render=it;t["default"]=jt},"94c4":function(e,t,a){},b122:function(e,t,a){"use strict";a("94c4")}}]);
//# sourceMappingURL=chunk-4bae6e17-legacy.bc3441f3.js.map