(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a402"],{bb5a:function(t,e,o){"use strict";o.r(e),o.d(e,"protean_button",(function(){return n})),o.d(e,"protean_checkbox",(function(){return d})),o.d(e,"protean_click_elsewhere",(function(){return c})),o.d(e,"protean_icon",(function(){return b})),o.d(e,"protean_input",(function(){return E})),o.d(e,"protean_message",(function(){return C})),o.d(e,"protean_optgroup",(function(){return A})),o.d(e,"protean_option",(function(){return S})),o.d(e,"protean_select",(function(){return z})),o.d(e,"protean_tab_container",(function(){return T})),o.d(e,"protean_tab_pane",(function(){return $}));var r=o("78f0");const i="*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:inline-block}:host([disabled]) button{cursor:not-allowed;opacity:0.4}button{color:inherit;cursor:pointer;height:var(--touch-zone-size, 42px);transition:background-color 0.2s ease-in-out, color 0.2s ease-in-out,\n        border 0.2s ease-in-out}button>div{display:flex;align-items:center;justify-content:center}:host([variant='primary']) button,:host([variant='secondary']) button{padding:0 1rem;border:2px solid;border-radius:2px;font-weight:600;font-size:0.875rem}:host([variant='primary']) button{background-color:var(--protean-button-primary-background-color, #ff5f40);color:var(--protean-button-primary-text-color, #000000);border-color:var(--protean-button-primary-border-color, transparent)}:host([variant='secondary']) button{background-color:var(\n        --protean-button-secondary-background-color,\n        transparent\n    );color:var(--protean-button-secondary-text-color, inherit);border-color:var(--protean-button-secondary-border-color, #ff5f40)}:host(:not([disabled])[variant='primary']) button:hover,:host(:not([disabled])[variant='primary']) button:focus{background-color:var(--protean-button-primary-hover-background-color, #f83e19);color:var(--protean-button-primary-hover-text-color, #000000);border-color:var(--protean-button-primary-hover-border-color, transparent)}:host(:not([disabled])[variant='secondary']) button:hover,:host(:not([disabled])[variant='secondary']) button:focus{background-color:var(--protean-button-secondary-hover-background-color, #f83e19);color:var(--protean-button-secondary-hover-text-color, #000000);border-color:var(--protean-button-secondary-hover-border-color, transparent)}:host([variant='icon']) button{width:var(--touch-zone-size);background-color:var(--protean-button-icon-background-color);--protean-icon-stroke-primary:var(--protean-button-icon-stroke-color)}:host(:not([disabled])[variant='icon']) button:hover,:host(:not([disabled])[variant='icon']) button:focus{background-color:var(--protean-button-icon-hover-background-color);--protean-icon-hover-stroke-primary:var(--protean-button-icon-stroke-color)}",n=class{constructor(t){Object(r["f"])(this,t)}render(){var t;return Object(r["d"])("button",{type:null!==(t=this.type)&&void 0!==t?t:"button",disabled:this.disabled,"aria-label":this.ariaLabel},Object(r["d"])("div",null,Object(r["d"])("slot",null)))}};n.style=i;let s=1e3;function a(){return s++}const l="*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:block;margin:1rem}:host([disabled]) label{cursor:not-allowed;opacity:0.5}label{display:flex;align-items:center;cursor:pointer;min-height:24px}:host([alignment='right']) label{flex-direction:row-reverse;justify-content:flex-end}.checkbox-symbol{flex:0 0 24px;margin-right:0.625rem;stroke-linecap:round;stroke-linejoin:round}:host([alignment='right']) .checkbox-symbol{margin-left:0.625rem;margin-right:0}input:focus+label .checkbox-symbol{outline:auto}.checkbox-outline{fill:transparent;stroke:var(--action-color);stroke-width:2;transition:fill 0.2s ease-in-out}:host([checked]) .checkbox-outline,:host([indeterminate]) .checkbox-outline{fill:var(--action-color)}.checkbox-fill{stroke:var(--action-contrast-color);fill:none;stroke-width:3}:host([variant='toggle']) .checkbox-symbol{flex-basis:45px;border-radius:10px}.toggle-path{stroke:var(--protean-checkbox-toggle-path-color);stroke-width:20;fill:none;transition:stroke 0.2s ease-in-out}:host([checked]) .toggle-path{stroke:var(--action-color)}.toggle-fill{fill:var(--action-contrast-color);stroke:none;transition:transform 0.2s ease-in-out}:host([checked]) .toggle-fill{transform:translateX(25px)}.label-text{flex:1 0}",d=class{constructor(t){Object(r["f"])(this,t),this.change=Object(r["b"])(this,"change",7),this.checked=!1,this.guid=a(),this.onCheckboxChange=t=>{this.change.emit({checked:t.target.checked})}}defaultChangeHandler(t){t.target!==this.hostElement||this.hostElement.onchange||(this.checked=t.detail.checked)}get checkboxId(){return"checkbox-"+this.guid}get checkboxAriaLabel(){var t;return this.label?null:null!==(t=this.ariaLabel)&&void 0!==t?t:null}get checkboxAlignment(){return["left","right"].includes(this.alignment)?this.alignment:"left"}render(){return Object(r["d"])("div",{class:"checkbox-container"},Object(r["d"])("input",{class:"sr",type:"checkbox",id:this.checkboxId,"aria-label":this.checkboxAriaLabel,disabled:this.disabled,checked:this.checked||this.indeterminate,onChange:this.onCheckboxChange}),Object(r["d"])("label",{htmlFor:this.checkboxId,class:"alignment-"+this.checkboxAlignment},this.renderSymbol(),!!this.label&&Object(r["d"])("span",{class:"label-text"},this.label)))}renderStandardFill(){return this.indeterminate?Object(r["d"])("line",{class:"checkbox-fill indeterminate",x1:"6",y1:"12",x2:"18",y2:"12","stroke-width":"3"}):this.checked?Object(r["d"])("polyline",{class:"checkbox-fill checked",points:"4.76755287 13.3616687 9.85401316 18.3300512 19.438211 5.92818154"}):void 0}renderStandard(){return Object(r["d"])("svg",{class:"checkbox-symbol standard",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true"},Object(r["d"])("rect",{class:"checkbox-outline",x:"1",y:"1",width:"22",height:"22",rx:"2"}),this.renderStandardFill())}renderToggle(){return Object(r["d"])("svg",{class:"checkbox-symbol toggle",viewBox:"0 0 45 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true"},Object(r["d"])("line",{class:"toggle-path",x1:"10",y1:"10",x2:"35",y2:"10"}),Object(r["d"])("circle",{class:"toggle-fill",cx:"10",cy:"10",r:"8"}))}renderSymbol(){return"toggle"===this.variant?this.renderToggle():this.renderStandard()}get hostElement(){return Object(r["c"])(this)}};d.style=l;const c=class{constructor(t){Object(r["f"])(this,t),this.change=Object(r["b"])(this,"change",3),this.isCurrentlyFocused=!1,this.eventList=["mousedown","dragstart","touchstart"],this.handler=t=>{const e=this.shadowContains(this.findActiveElement()),o=this.shadowContains(this.shadowEventTarget(t))||this.originatesInSlots(t.target);if(!o&&(this.isCurrentlyFocused||e))return this.isCurrentlyFocused=!1,void this.change.emit();this.isCurrentlyFocused=o||e}}connectedCallback(){this.eventList.forEach(t=>{document.addEventListener(t,this.handler)})}disconnectedCallback(){this.eventList.forEach(t=>{document.removeEventListener(t,this.handler)})}findActiveElement(t=document.activeElement){return t.shadowRoot?this.findActiveElement(t.shadowRoot.activeElement||null):t}shadowEventTarget(t){var e;return null!==(e=t.composedPath()[0])&&void 0!==e?e:t.target}shadowContains(t){return t===this.hostElement||void 0!==t&&this.shadowContains(t.parentNode||t.host)}originatesInSlots(t){const e=this.hostElement.querySelectorAll("slot");for(let o=0;o<e.length;o++){const r=e[o],i=r&&r.assignedNodes&&r.assignedNodes()||this.hostElement.childNodes;for(let e=0;e<i.length;e++)if(i[e].contains(t))return!0}return!1}get hostElement(){return Object(r["c"])(this)}},h={error(t=""){return Object(r["d"])("g",{transform:"translate(0 -1)"},Object(r["d"])("path",{class:"stroke-primary "+t,d:"M13.576 3.163L22.71 21.43a1.768 1.768 0 01-1.581 2.559H2.86a1.768 1.768 0 01-1.581-2.56l9.133-18.266a1.768 1.768 0 013.163 0z"}),Object(r["d"])("path",{class:"fill-secondary",d:"M12 7.583a.877.877 0 01.876.916l-.345 7.748a.526.526 0 01-1.052 0L11.125 8.5A.876.876 0 0112 7.583z"}),Object(r["d"])("circle",{cx:"12",cy:"19.5",r:"1",class:"fill-secondary"}))},info(t=""){return Object(r["d"])("g",{transform:"translate(1 1)"},Object(r["d"])("circle",{cx:"11",cy:"11",r:"10.5",class:"stroke-primary "+t}),Object(r["d"])("path",{class:"fill-secondary",d:"M11.083 9.167h.834V15.5a1 1 0 01-1 1h-.834v-6.333a1 1 0 011-1z"}),Object(r["d"])("circle",{class:"fill-secondary",cx:"11",cy:"6.417",r:"1"}))},success(t=""){return Object(r["d"])("g",{transform:"translate(1 1)"},Object(r["d"])("circle",{class:"stroke-primary "+t,cx:"11",cy:"11",r:"10.5"}),Object(r["d"])("path",{class:"stroke-secondary",d:"M5.5 11.828L9.314 15.5 16.5 6.333"}))},warning(t=""){return Object(r["d"])("g",{transform:"translate(1 1)"},Object(r["d"])("circle",{cx:"11",cy:"11",r:"10.5",class:"stroke-primary "+t}),Object(r["d"])("path",{class:"fill-secondary",d:"M11 4.583a.877.877 0 01.876.916l-.345 7.748a.526.526 0 01-1.052 0L10.125 5.5A.876.876 0 0111 4.583z"}),Object(r["d"])("circle",{class:"fill-secondary",cx:"11",cy:"16.5",r:"1"}))}},p={checkmark:{markup:()=>Object(r["d"])("path",{class:"stroke-primary",d:"M5.5 11.828L9.314 15.5 16.5 6.333"})},"chevron-down":{markup:()=>Object(r["d"])("path",{class:"stroke-primary",d:"M2.003 7.5L12 16l10-8.5"})},"chevron-left":{markup:()=>Object(r["d"])("path",{class:"stroke-primary",d:"M16.251 1.752l-8.5 9.997 8.5 10"})},"chevron-right":{markup:()=>Object(r["d"])("path",{class:"stroke-primary",d:"M7.751 21.748l8.5-9.997-8.5-10"})},"chevron-up":{markup:()=>Object(r["d"])("path",{class:"stroke-primary",d:"M2.003 16L12 7.5 22 16"})},clipboard:{markup:()=>Object(r["d"])("g",{class:"stroke-primary"},Object(r["d"])("path",{d:"M7.441 16.706h4.706M7.441 13.765h8.235M7.441 10.824h8.235"}),Object(r["d"])("path",{d:"M16.323 5.53h1.118c.65 0 1.177.46 1.177 1.029V20.97c0 .568-.527 1.029-1.177 1.029H5.676c-.65 0-1.176-.46-1.176-1.03V6.56c0-.569.527-1.03 1.176-1.03h1.197"}),Object(r["d"])("path",{d:"M11.559 2c1.3 0 2.353 1.053 2.353 2.353h2.059c.162 0 .294.132.294.294V7a.294.294 0 01-.294.294H7.147A.294.294 0 016.853 7V4.647c0-.162.132-.294.294-.294h2.059c0-1.3 1.053-2.353 2.353-2.353z"}))},menu:{markup:()=>Object(r["d"])("path",{class:"stroke-primary",d:"M1.5 12.5h21M1.5 18.5h21M1.5 6.5h21"})},"status-error":{markup:()=>h["error"]()},"status-error-filled":{markup:()=>h["error"]("fill-primary")},"status-info":{markup:()=>h["info"]()},"status-info-filled":{markup:()=>h["info"]("fill-primary")},"status-success":{markup:()=>h["success"]()},"status-success-filled":{markup:()=>h["success"]("fill-primary")},"status-warning":{markup:()=>h["warning"]()},"status-warning-filled":{markup:()=>h["warning"]("fill-primary")}},u=":host{width:24px;height:24px;display:inline-block}svg{fill:none;stroke-linecap:var(--protean-icon-stroke-linecap, round);stroke-linejoin:var(--protean-icon-stroke-linejoin, round);stroke-width:var(--protean-icon-stroke-width, 1.5)}.stroke-primary{stroke:var(--protean-icon-stroke-primary, currentColor)}.stroke-secondary{stroke:var(\n        --protean-icon-stroke-secondary,\n        var(--protean-icon-stroke-primary)\n    )}.fill-primary{fill:var(--protean-icon-fill-primary, none)}.fill-secondary{fill:var(--protean-icon-fill-secondary, var(--protean-icon-fill-primary))}:host([type='status-info']){--protean-icon-stroke-primary:var(--protean-status-info);--protean-icon-fill-secondary:var(--protean-status-info)}:host([type='status-info-filled']){--protean-icon-stroke-primary:var(--protean-status-info);--protean-icon-fill-primary:var(--protean-status-info);--protean-icon-fill-secondary:var(--protean-status-info-contrast)}:host([type='status-success']){--protean-icon-stroke-primary:var(--protean-status-success)}:host([type='status-success-filled']){--protean-icon-stroke-primary:var(--protean-status-success);--protean-icon-fill-primary:var(--protean-status-success);--protean-icon-stroke-secondary:var(--protean-status-success-contrast)}:host([type='status-warning']){--protean-icon-stroke-primary:var(--protean-status-warning);--protean-icon-fill-secondary:var(--protean-status-warning)}:host([type='status-warning-filled']){--protean-icon-stroke-primary:var(--protean-status-warning);--protean-icon-fill-primary:var(--protean-status-warning);--protean-icon-fill-secondary:var(--protean-status-warning-contrast)}:host([type='status-error']){--protean-icon-stroke-primary:var(--protean-status-error);--protean-icon-fill-secondary:var(--protean-status-error)}:host([type='status-error-filled']){--protean-icon-stroke-primary:var(--protean-status-error);--protean-icon-fill-primary:var(--protean-status-error);--protean-icon-fill-secondary:var(--protean-status-error-contrast)}",b=class{constructor(t){Object(r["f"])(this,t)}get icon(){var t,e;return"custom"===this.type&&this.use?Object(r["d"])("use",{xlinkHref:this.use}):null!==(t=null===(e=p[this.type])||void 0===e?void 0:e.markup())&&void 0!==t?t:null}render(){return Object(r["d"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",focusable:"false","aria-hidden":"true"},this.icon)}};function g(t="",e=""){if(!t||!e)return{value:t,formattedValue:t};const o=new Set(["@","#"]),r=new Set(["a","A","0",...o]),i=e.split("");let n=0;const s=new Set(i.filter(t=>!r.has(t))),a=i.reduce((e,i)=>{if(n>=t.length)return e;if(o.has(i)&&s.has(t[n]))return e;if(r.has(i)){const t=l(i);return t?(n++,{value:`${e.value}${t}`,formattedValue:`${e.formattedValue}${t}`}):e}return t[n].includes(i)&&n++,{value:e.value,formattedValue:`${e.formattedValue}${i}`}},{value:"",formattedValue:""});return{value:a.value,formattedValue:a.formattedValue};function l(e){if(n>=t.length)return"";let o=t[n];switch(e){case"a":o=o.replace(/[^a-zA-Z]+/g,"");break;case"A":o=o.replace(/[^A-Z]+/g,"");break;case"0":o=o.replace(/[^\d]/g,"");break;case"@":o=o.replace(/[^\da-zA-Z]+/g,"");break;case"#":o=o.replace(/[^\d]/g,"");break}return o||(n++,l(e))}}b.style=u;const v={"MM/DD/YYYY":"00/00/0000","M/D/YYYY":"0#/0#/0000","MM/DD/YY":"00/00/00","M/D/YY":"0#/0#/00","MM/YY":"00/00","M/YY":"0#/00"};function m(t,e="MM/DD/YYYY"){var o;const r=null!==(o=v[e])&&void 0!==o?o:v["MM/DD/YYYY"];return g(t,r)}function f(t="",e={decimals:0},o=!1){var r;const i=null!==(r=null===e||void 0===e?void 0:e.decimals)&&void 0!==r?r:0,n=",",s=".";let a=t;o&&(a=t.replace(/[^\d.]/g,""),a=a?Number(a).toFixed(i):""),a=a.replace(/[^\d]/g,"");const{integerString:l,decimalString:d}=y(a,i),c=l.replace(/\B(?=(\d{3})+(?!\d))/g,n),h=i>0?`${s}${d}`:"",p=`${l}${h}`,u=`${c}${h}`;return{value:p,formattedValue:u}}function y(t,e){const o=t.length-e;let r=t.substring(0,o).padStart(e>0?1:0,"0");r.length>1&&"0"===r[0]&&(r=r.substring(1));const i=t.substring(o).padStart(e,"0");return{integerString:r,decimalString:i}}const w={delimited:{decimals:2},dec:{decimals:0}};function x(t,e="delimited",o=!1){var r;if(e.includes("dec")){const r=Number(e.replace("dec","")),i={...w.dec,decimals:r};return f(t,i,o)}const i=null!==(r=w[e])&&void 0!==r?r:w["delimited"];return f(t,i,o)}const k={US:{format:"(000) 000-0000"}};function O(t,e="US"){var o;const r=null!==(o=k[e])&&void 0!==o?o:k["US"];return g(t,r.format)}const j="*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:block;margin:1rem}.input-wrapper{position:relative}.input-container{border:1px solid currentColor;border-radius:2px;flex-grow:1}:host([disabled]) .input-container{opacity:0.4}:host([disabled]) .input-container,:host([disabled]) label,:host([disabled]) input{cursor:not-allowed}.input-container:focus-within{outline:auto 1px}.input-container.has-error{border-color:var(--protean-status-error)}.error-icon{margin-right:0.25rem;height:1.25em;width:1.25em}label{display:flex;align-items:center;font-weight:400;padding:0.375rem 0.5rem 0.25rem;font-size:0.6875rem}.optional-tag{font-size:0.625rem;margin-left:0.25rem}input{height:30px;width:100%;padding:0 0.5rem;border:none;background-color:transparent;font-size:1rem;color:inherit;box-shadow:none;text-align:left}:host(:not([label])) input{height:56px}input:focus{outline:none}.message-container{position:absolute;top:calc(100% - 1px);width:100%;height:0;transition:height 0.2s ease-in-out;overflow:hidden;z-index:2;box-shadow:0 2px 4px rgba(0, 0, 0, 0.5)}.message-container protean-message{margin:0}.message-container ul{margin:0;padding:0 1rem}",E=class{constructor(t){Object(r["f"])(this,t),this.change=Object(r["b"])(this,"change",3),this.input=Object(r["b"])(this,"input",3),this.disabled=!1,this.readonly=!1,this.guid=a(),this.inputId="protean-input-"+this.guid,this.descriptionId="protean-input-description-"+this.guid,this.scheduledAfterRender=[],this.isFocused=!1,this.onInputChange=t=>{t.stopPropagation(),this.formattedValueObject=this.getFormattedValueObj(this.inputElement.value),this.inputElement.value=this.formattedValueObject.formattedValue,this.value!==this.formattedValueObject.value&&this.change.emit({value:this.formattedValueObject.value,formattedValue:this.formattedValueObject.formattedValue})},this.onInputInput=t=>{t.stopPropagation(),this.formattedValueObject=this.getFormattedValueObj(this.inputElement.value),this.cursorData=this.calculateCursorPositionOnInput(),this.inputElement.value=this.formattedValueObject.formattedValue,this.setCursorPosition(),this.value!==this.formattedValueObject.value&&this.input.emit({value:this.formattedValueObject.value,formattedValue:this.formattedValueObject.formattedValue})},this.onInputFocus=()=>{this.isFocused=!0,this.setMessagesHeight()},this.onInputBlur=()=>{this.isFocused=!1,this.showMessages&&(this.messageContainer.style.height="0px")},this.onLabelClick=t=>{t.stopImmediatePropagation()}}componentDidLoad(){this.reformatValue()}componentDidRender(){this.scheduledAfterRender.forEach(t=>{t()}),this.scheduledAfterRender=[]}get inputElement(){return this.hostElement.shadowRoot.querySelector("input")}get inputType(){var t;const e={text:"text",tel:"tel",phone:"tel",numeric:"tel",date:"tel",number:"number",password:"password",search:"search",email:"email",button:"button"};return null!==(t=e[this.type])&&void 0!==t?t:"text"}get inputAriaLabel(){var t;return this.label?null:null!==(t=this.ariaLabel)&&void 0!==t?t:null}get hasErrors(){return Array.isArray(this.errors)&&this.errors.length>0}get messages(){if(this.hasErrors)return this.errors;const t=Array.isArray(this.hints)&&this.hints.length>0;return t?this.hints:void 0}get showMessages(){return Array.isArray(this.messages)&&this.messages.length>0&&!this.suppressMessages}get messageContainer(){return this.hostElement.shadowRoot.querySelector(".message-container")}get messageContainerHeight(){const t=this.hostElement.shadowRoot.querySelector(".message-container protean-message").getBoundingClientRect().height;return t+"px"}get ariaRequired(){return"listbox"===this.ariaHasPopup?null:""+!this.optional}defaultChangeHandler(t){this.hostElement.onchange||(this.value=t.detail.value)}reformatValue(){this.formattedValueObject=this.getFormattedValueObj(this.value,!0),this.inputElement.value=this.formattedValueObject.formattedValue}onMessageUpdate(){this.isFocused&&this.scheduledAfterRender.push(()=>{this.setMessagesHeight()})}setMessagesHeight(){this.showMessages&&(this.messageContainer.style.height=this.messageContainerHeight)}getFormattedValueObj(t="",e=!1){var o;const r={phone:O,date:m,numeric:x},i=r[this.type];return null!==(o=null===i||void 0===i?void 0:i(t,this.format,e))&&void 0!==o?o:{value:t,formattedValue:t}}calculateCursorPositionOnInput(){var t;const e=this.inputElement,o=this.formattedValueObject.formattedValue.length;return{startingPosition:null!==(t=e.selectionStart)&&void 0!==t?t:o,valueLength:o,previousValueLength:e.value.length,hasSelection:!1}}setCursorPosition(){if(!this.cursorData.hasSelection){const t=this.inputElement,{valueLength:e,previousValueLength:o,startingPosition:r}=this.cursorData,i=r+(e-o);t.setSelectionRange(i,i)}}render(){return Object(r["d"])("div",{class:"input-wrapper"},Object(r["d"])("div",{class:"input-container "+(this.hasErrors?"has-error":"")},this.label&&Object(r["d"])("label",{htmlFor:this.inputId,onClick:this.onLabelClick},this.hasErrors&&Object(r["d"])("protean-icon",{type:"status-error-filled",class:"error-icon"}),this.label,this.optional&&Object(r["d"])("span",{class:"optional-tag"}," (optional)")),Object(r["d"])("input",{id:this.inputId,type:this.inputType,disabled:this.disabled,readOnly:this.readonly,role:this.ariaRole,"aria-required":this.ariaRequired,"aria-label":this.inputAriaLabel,"aria-invalid":""+this.hasErrors,"aria-describedby":this.descriptionId,"aria-haspopup":this.ariaHasPopup,"aria-expanded":void 0===this.ariaExpanded?null:""+this.ariaExpanded,onChange:this.onInputChange,onInput:this.onInputInput,onFocus:this.onInputFocus,onBlur:this.onInputBlur})),this.renderMessages())}renderMessages(){return Object(r["d"])("div",{class:"message-container"},Object(r["d"])("protean-message",{type:this.hasErrors?"error":"info",level:"status",variant:"inline"},Object(r["d"])("ul",{id:this.descriptionId},this.showMessages&&this.messages.map(t=>Object(r["d"])("li",null,t)))))}get hostElement(){return Object(r["c"])(this)}static get watchers(){return{value:["reformatValue"],type:["reformatValue"],format:["reformatValue"],hints:["onMessageUpdate"],errors:["onMessageUpdate"]}}};E.style=j;const M="*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:block;margin:1rem 0}.message-container{--symbol-size:16px;--symbol-offset:-3px;--icon-offset:-12px;--status-color:#ffffff;--status-color:var(--info-color);background-color:var(--protean-message-background-color);color:var(--protean-message-text-color);border:1px solid var(--protean-message-border-color);border-radius:2px;position:relative;margin:calc(-1 * var(--icon-offset)) calc(-1 * var(--icon-offset))\n        calc(-1 * var(--symbol-offset));padding:var(--symbol-size) calc(-1 * var(--icon-offset))}:host([variant='inline']) .message-container{margin:0;border-color:var(--status-color)}.message-container.info{--status-color:var(--protean-status-info)}.message-container.success{--status-color:var(--protean-status-success)}.message-container.warning{--status-color:var(--protean-status-warning)}.message-container.error{--status-color:var(--protean-status-error)}.decorator{width:32px;height:32px;position:absolute;fill:var(--status-color)}.decorator.top{top:var(--symbol-offset);right:var(--symbol-offset);transform:rotate(270deg)}:host([variant='inline']) .decorator.top{top:0;right:0}.decorator.bottom{bottom:var(--symbol-offset);left:var(--symbol-offset);transform:rotate(90deg)}:host([variant='inline']) .decorator.bottom{bottom:0;left:0}protean-icon{position:absolute;top:var(--icon-offset);left:var(--icon-offset);font-weight:600;line-height:1}::slotted(ul){margin:0;padding:0.5rem 0 0.5rem 2rem}",C=class{constructor(t){Object(r["f"])(this,t)}get computedType(){var t;const e={info:"info",success:"success",warning:"warning",error:"error"};return null!==(t=e[this.type])&&void 0!==t?t:"info"}get role(){return"status"===this.level?"status":"alert"}get icon(){return`status-${this.computedType}-filled`}get isInline(){return"inline"===this.variant}render(){return Object(r["d"])("div",{class:"message-container "+this.computedType,role:this.role},!this.isInline&&Object(r["d"])("protean-icon",{type:this.icon}),this.renderDecorator("top"),Object(r["d"])("slot",null),this.renderDecorator("bottom"))}renderDecorator(t){return Object(r["d"])("svg",{class:"decorator "+t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 125 125","aria-hidden":"true"},Object(r["d"])("path",{d:"M125 125V0l-16 16v94H15L0 125h125z"}))}};C.style=M;const V="*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:block}.protean-optgroup-label{position:relative;z-index:1;top:0;display:flex;align-items:center;min-height:2.5rem;font-weight:500;background-color:var(--protean-dropdown-background-color)}.protean-optgroup-label::before{content:'';width:calc(100% - 30px);height:1px;position:absolute;top:50%;left:15px;background-color:var(--protean-optgroup-separator-color)}.protean-optgroup-label-text{display:inline-block;margin-left:1.5rem;padding:0 0.5rem;background-color:var(--protean-dropdown-background-color);position:relative;font-style:italic}:host([disabled]) .protean-optgroup-label-text span{opacity:0.4}",A=class{constructor(t){Object(r["f"])(this,t),this.guid=a(),this.onMutationObserved=()=>{this.propagateDisabledState(this.disabled)}}propagateDisabledState(t=!1){this.optionElements.forEach(e=>{e.disabledGroup=t})}get labelId(){return"protean-optgroup-label-"+this.guid}get optionElements(){return Array.from(this.hostElement.querySelectorAll("protean-option"))}componentWillLoad(){const t=new MutationObserver(this.onMutationObserved);t.observe(this.hostElement,{childList:!0}),this.onMutationObserved(),this.mutationObserver=t}render(){return Object(r["d"])("div",{class:"protean-optgroup-container",role:"group","aria-labelledby":this.labelId,"aria-disabled":this.disabled?"true":null},this.label&&Object(r["d"])("div",{class:"protean-optgroup-label",id:this.labelId,role:"presentation"},Object(r["d"])("div",{class:"protean-optgroup-label-text"},Object(r["d"])("span",null,this.label))),Object(r["d"])("div",{class:"protean-optgroup-option-container",role:"presentation"},Object(r["d"])("slot",null)))}get hostElement(){return Object(r["c"])(this)}static get watchers(){return{disabled:["propagateDisabledState"]}}};A.style=V;const I="*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:block}.protean-option-container{display:flex;min-height:42px;align-items:center;cursor:pointer;font-size:14px}:host([active]) .protean-option-container,.protean-option-container:hover,.protean-option-container:focus{background-color:var(--protean-dropdown-hover-background-color)}[aria-disabled='true']{opacity:0.4;cursor:not-allowed}.protean-option-selected{padding:0 5px;flex:0 0 34px}.protean-option-content{flex:0 1 auto}",S=class{constructor(t){Object(r["f"])(this,t)}get isDisabled(){var t;return null!==(t=this.disabled||this.disabledGroup)&&void 0!==t&&t}defaultClickHandler(t){this.isDisabled&&t.stopImmediatePropagation()}render(){var t;return Object(r["d"])("div",{class:"protean-option-container",role:"option","aria-selected":""+(null!==(t=this.selected)&&void 0!==t&&t),"aria-disabled":""+this.isDisabled},Object(r["d"])("div",{class:"protean-option-selected"},this.selected&&Object(r["d"])("protean-icon",{type:"checkmark"})),Object(r["d"])("div",{class:"protean-option-content"},Object(r["d"])("slot",null)))}};S.style=I;const D="*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:block;margin:1rem}.select-container{display:block;position:relative}protean-input{margin:0;cursor:pointer}.protean-select-icon{position:absolute;right:0.75rem;bottom:0.25rem}:host([disabled]) .protean-select-icon{opacity:0.4;cursor:not-allowed}.protean-dropdown{position:absolute;z-index:2;top:calc(100% - 3px);width:100%;background-color:var(--protean-dropdown-background-color);color:var(--protean-dropdown-text-color);border-width:var(--protean-dropdown-border-width);border-style:solid;border-color:var(--protean-dropdown-border-color, currentColor);border-radius:0 0 2px 2px;box-shadow:var(--protean-dropdown-box-shadow);max-height:250px;overflow-y:scroll}.protean-select-separator{height:1px;width:calc(100% - 20px);margin:0 auto;position:relative;top:-2px;z-index:3;background-color:var(--protean-select-separator-color)}",z=class{constructor(t){Object(r["f"])(this,t),this.change=Object(r["b"])(this,"change",3),this.dropdownOpen=!1,this.guid=a(),this.closeDropdown=()=>{this.dropdownOpen&&(this.dropdownOpen=!1,this.activeOption&&(this.activeOption.active=!1,this.activeOptionId=""))},this.onClickElsewhere=t=>{t.stopImmediatePropagation(),this.closeDropdown()},this.onInputClick=()=>{this.dropdownOpen=!this.dropdownOpen},this.onInputKeyDown=t=>{const e=t.key;if("Tab"===e&&this.dropdownOpen)return void t.preventDefault();const o=["ArrowUp","ArrowDown","Home","End"].includes(e);return o&&this.optionElements.length>0?(t.preventDefault(),void this.handleOptionNavigation(e)):[" ","Enter"].includes(e)&&this.activeOption?(t.preventDefault(),void this.handleSelection(this.activeOption.value)):void("Escape"!==e||this.closeDropdown())},this.onOptionClick=t=>{const e=t.target;"protean-option"===e.localName&&this.handleSelection(e.value)},this.onMutationObserved=()=>{this.optionElements.forEach((t,e)=>{t.id=`protean-select-${this.guid}-option-${e}`}),this.updateOptions()}}componentWillLoad(){const t=new MutationObserver(this.onMutationObserved);t.observe(this.hostElement,{childList:!0,subtree:!0}),this.onMutationObserved(),this.mutationObserver=t}get selectAriaLabel(){var t;return this.label?null:null!==(t=this.ariaLabel)&&void 0!==t?t:null}get optionElements(){return Array.from(this.hostElement.querySelectorAll("protean-option"))}get displayValue(){if(this.multiple){const e=this.selectedOptions.length;if(0===e)return"";if(1===e){var t;const e=this.optionElements.find(t=>t.value===this.selectedOptions[0]);return null!==(t=null===e||void 0===e?void 0:e.label)&&void 0!==t?t:(null===e||void 0===e?void 0:e.textContent.trim())||(null===e||void 0===e?void 0:e.value)||this.selectedOptions[0]}return e+" selected"}const e=this.optionElements.find(t=>t.selected);var o;return e?null!==(o=e.label)&&void 0!==o?o:e.textContent.trim()||e.value:this.value}get activeOption(){return this.optionElements.find(t=>t.active)}get activeOptionIndex(){return this.optionElements.indexOf(this.activeOption)}defaultChangeHandler(t){this.multiple?this.selectedOptions=t.detail.selectedOptions:this.value=t.detail.value}updateOptions(){this.multiple?this.updateMultipleOptions(this.selectedOptions):this.updateSingleOptions(this.value)}updateSingleOptions(t){if(this.multiple)return void console.error("`value` should not be used on `protean-select` elements where `multiple` is `true`.  Use `selectedOptions` instead.");if(t)return void this.optionElements.forEach(e=>{e.selected=e.value===t});const e=this.optionElements.find(t=>t.selected);e&&(this.value=e.value)}updateMultipleOptions(t){this.multiple?t?this.optionElements.forEach(e=>{e.selected=t.includes(e.value)}):this.selectedOptions=this.optionElements.filter(t=>t.selected).map(t=>t.value):console.error("`selectedOptions` should not be used on `protean-select` elements where `multiple` is `false`.  Use `value` instead.")}activateDefaultOption(){var t;const e=null!==(t=this.optionElements.find(t=>t.selected))&&void 0!==t?t:this.optionElements[0];e.active=!0,this.activeOptionId=e.id}handleOptionNavigation(t,e=this.activeOptionIndex){if(!this.dropdownOpen)return this.dropdownOpen=!0,void this.activateDefaultOption();if(!this.activeOption)return void this.activateDefaultOption();const o=this.optionElements.length-1;let r=0;switch(t){case"ArrowDown":r=e<o?e+1:e;break;case"ArrowUp":r=e>0?e-1:0;break;case"Home":r=0;break;case"End":r=o;break}if(r!==this.activeOptionIndex){const e=this.optionElements[r];if(e.disabled||e.disabledGroup)return void(e!==this.optionElements[0]&&e!==this.optionElements[o]&&this.handleOptionNavigation(t,r));this.activeOption.active=!1,e.active=!0,this.activeOptionId=e.id,this.activeOption.scrollIntoView({behavior:"smooth",block:"nearest"})}}handleSelection(t){this.multiple?this.handleMultiSelection(t):this.handleSingleSelection(t)}handleSingleSelection(t){t!==this.value&&this.change.emit({value:t}),this.closeDropdown()}handleMultiSelection(t){let e=[...this.selectedOptions];e.includes(t)?e=e.filter(e=>e!==t):e.push(t),this.change.emit({selectedOptions:e})}render(){return Object(r["d"])("protean-click-elsewhere",{onChange:this.onClickElsewhere,class:"select-container"},Object(r["d"])("protean-input",{value:this.displayValue,label:this.label,optional:this.optional,errors:this.errors,disabled:this.disabled,"suppress-messages":!0,type:"button",ariaLabel:this.selectAriaLabel,ariaHasPopup:"listbox",ariaExpanded:this.dropdownOpen,onClick:this.onInputClick,onKeyDown:this.onInputKeyDown}),Object(r["d"])("protean-icon",{class:"protean-select-icon",type:"chevron-down"}),Object(r["d"])("div",{class:"protean-select-separator",hidden:!this.dropdownOpen}),this.renderDropdown())}renderDropdown(){return Object(r["d"])("div",{class:"protean-select-dropdown protean-dropdown",role:"listbox","aria-label":this.label,tabIndex:-1,"aria-required":""+!this.optional,"aria-multiselectable":""+this.multiple,"aria-activedescendant":this.activeOptionId,hidden:!this.dropdownOpen,onClick:this.onOptionClick},Object(r["d"])("slot",null))}get hostElement(){return Object(r["c"])(this)}static get watchers(){return{multiple:["updateOptions"],value:["updateSingleOptions"],selectedOptions:["updateMultipleOptions"]}}};z.style=D;const L="*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:block}.tab-list{display:flex;align-items:center;overflow-x:auto;margin:0;padding:0;border-top:1px solid var(--protean-tab-container-border-color);list-style:none}.tab-list button{font-size:1.125rem;padding:1rem;text-decoration:none;color:inherit;transition:box-shadow 0.2s ease-in-out}.tab-list button[aria-selected='true']{box-shadow:inset var(--action-color) 0 5px}",T=class{constructor(t){Object(r["f"])(this,t),this.change=Object(r["b"])(this,"change",3),this.name="",this.guid=a(),this.updateTabData=()=>{this.updateTabPanes(),this.updateTabs()},this.updateTabPanes=()=>{this.tabPanes.forEach((t,e)=>{t.selected=t.value===this.selectedValue,t.guid=this.guid,t.index=e})},this.updateTabs=()=>{this.tabs=Array.from(this.tabPanes).map(t=>{const{label:e,value:o,index:r}=t;return{label:e,value:o,index:r}})},this.onTabClick=t=>{const e=t.target.dataset.value;e!==this.value&&this.change.emit({value:e})},this.onTabKeyup=t=>{const e=t.target.dataset.value;"ArrowRight"!==t.key?"ArrowLeft"!==t.key||this.moveToAdjacentTab(e,"prev"):this.moveToAdjacentTab(e,"next")},this.buildTabControl=t=>{const e=t.value===this.selectedValue;return Object(r["d"])("button",{role:"tab",type:"button","aria-selected":""+e,tabIndex:e?0:-1,"data-value":t.value,id:`tab-${this.guid}-${t.index}`,onClick:this.onTabClick,onKeyUp:this.onTabKeyup},t.label)}}get tabPanes(){return this.hostElement.querySelectorAll(`protean-tab-pane[name="${this.name}"]`)}get selectedValue(){var t,e,o,r;const i=null===(t=null===(e=this.tabs)||void 0===e?void 0:e.some(t=>t.value===this.value))||void 0===t||t;return i?this.value:null!==(o=null===(r=this.tabs[0])||void 0===r?void 0:r.value)&&void 0!==o?o:""}defaultChangeHandler(t){t.target!==this.hostElement||this.hostElement.onchange||(this.value=t.detail.value,this.focusActiveTab())}connectedCallback(){const t=new MutationObserver(this.updateTabData);t.observe(this.hostElement,{childList:!0,subtree:!0,attributes:!0}),this.updateTabData(),this.observer=t}disconnectedCallback(){this.observer.disconnect()}moveToAdjacentTab(t,e){const o=this.tabs.map(t=>t.value).indexOf(t);let r=o;"next"===e?o<this.tabs.length-1?r++:r=0:o>0?r--:r=this.tabs.length-1;const i=this.tabs[r].value;this.change.emit({value:i})}focusActiveTab(){this.hostElement.shadowRoot.querySelector(`button[data-value="${this.selectedValue}"]`).focus()}render(){return Object(r["d"])("div",{class:"tab-container"},Object(r["d"])("div",{class:"tab-list",role:"tablist"},this.tabs.length>1&&this.tabs.map(this.buildTabControl)),Object(r["d"])("div",{class:"tab-content"},Object(r["d"])("slot",null)))}get hostElement(){return Object(r["c"])(this)}};T.style=L;const Y="*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:block}.tab-pane{padding:1rem}",$=class{constructor(t){Object(r["f"])(this,t),this.name=""}render(){return Object(r["d"])("div",{class:"tab-pane",role:"tabpanel",id:`tab-pane-${this.guid}-${this.index}`,"aria-label":this.label,tabIndex:0,hidden:!this.selected},Object(r["d"])("slot",null))}};$.style=Y}}]);
//# sourceMappingURL=chunk-2d21a402-legacy.645a16ab.js.map