(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0c02c50"],{a0a4:function(e,t,n){"use strict";n.r(t),n.d(t,"protean_input",(function(){return y}));n("862d"),n("9588"),n("46d4"),n("22f4"),n("966c"),n("c770"),n("7e9e"),n("6440"),n("241c"),n("32ec"),n("46c3"),n("e0d3"),n("5a85"),n("7bea"),n("cbcf"),n("6991"),n("dddc"),n("534d");var a=n("862b"),i=n("c812"),r=n("2e1a"),o=n("e82c"),s=n("d1ee"),u=n("c015");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!e||!t)return{value:e,formattedValue:e};var n=new Set(["@","#"]),a=new Set(["a","A","0"].concat(Object(o["a"])(n))),i=t.split(""),r=0,s=new Set(i.filter((function(e){return!a.has(e)}))),u=i.reduce((function(t,i){if(r>=e.length)return t;if(n.has(i)&&s.has(e[r]))return t;if(a.has(i)){var o=l(i);return o?(r++,{value:"".concat(t.value).concat(o),formattedValue:"".concat(t.formattedValue).concat(o)}):t}return e[r].includes(i)&&r++,{value:t.value,formattedValue:"".concat(t.formattedValue).concat(i)}}),{value:"",formattedValue:""});return{value:u.value,formattedValue:u.formattedValue};function l(t){if(r>=e.length)return"";var n=e[r];switch(t){case"a":n=n.replace(/[^a-zA-Z]+/g,"");break;case"A":n=n.replace(/[^A-Z]+/g,"");break;case"0":n=n.replace(/[^\d]/g,"");break;case"@":n=n.replace(/[^\da-zA-Z]+/g,"");break;case"#":n=n.replace(/[^\d]/g,"");break}return n||(r++,l(t))}}var c={"MM/DD/YYYY":"00/00/0000","M/D/YYYY":"0#/0#/0000","MM/DD/YY":"00/00/00","M/D/YY":"0#/0#/00","MM/YY":"00/00","M/YY":"0#/00"};function d(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MM/DD/YYYY",a=null!==(t=c[n])&&void 0!==t?t:c["MM/DD/YYYY"];return l(e,a)}function h(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{decimals:0},a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=null!==(e=null===n||void 0===n?void 0:n.decimals)&&void 0!==e?e:0,r=",",o=".",s=t;a&&(s=t.replace(/[^\d.]/g,""),s=s?Number(s).toFixed(i):""),s=s.replace(/[^\d]/g,"");var u=p(s,i),l=u.integerString,c=u.decimalString,d=l.replace(/\B(?=(\d{3})+(?!\d))/g,r),h=i>0?"".concat(o).concat(c):"",g="".concat(l).concat(h),m="".concat(d).concat(h);return{value:g,formattedValue:m}}function p(e,t){var n=e.length-t,a=e.substring(0,n).padStart(t>0?1:0,"0");a.length>1&&"0"===a[0]&&(a=a.substring(1));var i=e.substring(n).padStart(t,"0");return{integerString:a,decimalString:i}}var g={delimited:{decimals:2},dec:{decimals:0}};function m(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"delimited",a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(n.includes("dec")){var i=Number(n.replace("dec","")),o=Object(r["a"])(Object(r["a"])({},g.dec),{},{decimals:i});return h(e,o,a)}var s=null!==(t=g[n])&&void 0!==t?t:g["delimited"];return h(e,s,a)}var f={US:{format:"(000) 000-0000"}};function v(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"US",a=null!==(t=f[n])&&void 0!==t?t:f["US"];return l(e,a.format)}var b="*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:block;margin:1rem}.input-wrapper{position:relative}.input-container{border:1px solid currentColor;border-radius:2px;flex-grow:1}:host([disabled]) .input-container{opacity:0.4}:host([disabled]) .input-container,:host([disabled]) label,:host([disabled]) input{cursor:not-allowed}.input-container:focus-within{outline:auto 1px}.input-container.has-error{border-color:var(--protean-status-error)}.error-icon{margin-right:0.25rem;height:1.25em;width:1.25em}label{display:flex;align-items:center;font-weight:400;padding:0.375rem 0.5rem 0.25rem;font-size:0.6875rem}.optional-tag{font-size:0.625rem;margin-left:0.25rem}input{height:30px;width:100%;padding:0 0.5rem;border:none;background-color:transparent;font-size:1rem;color:inherit;box-shadow:none}input:focus{outline:none}.message-container{position:absolute;top:calc(100% - 1px);width:100%;height:0;transition:height 0.2s ease-in-out;overflow:hidden;z-index:2;box-shadow:0 2px 4px rgba(0, 0, 0, 0.5)}.message-container protean-message{margin:0}.message-container ul{margin:0;padding:0 1rem}",y=function(){function e(t){var n=this;Object(a["a"])(this,e),Object(s["i"])(this,t),this.change=Object(s["e"])(this,"change",3),this.input=Object(s["e"])(this,"input",3),this.disabled=!1,this.readonly=!1,this.guid=Object(u["a"])(),this.inputId="protean-input-".concat(this.guid),this.descriptionId="protean-input-description-".concat(this.guid),this.scheduledAfterRender=[],this.onInputChange=function(e){e.stopPropagation(),n.formattedValueObject=n.getFormattedValueObj(n.inputElement.value),n.inputElement.value=n.formattedValueObject.formattedValue,n.value!==n.formattedValueObject.value&&n.change.emit({value:n.formattedValueObject.value,formattedValue:n.formattedValueObject.formattedValue})},this.onInputInput=function(e){e.stopPropagation(),n.formattedValueObject=n.getFormattedValueObj(n.inputElement.value),n.cursorData=n.calculateCursorPositionOnInput(),n.inputElement.value=n.formattedValueObject.formattedValue,n.setCursorPosition(),n.value!==n.formattedValueObject.value&&n.input.emit({value:n.formattedValueObject.value,formattedValue:n.formattedValueObject.formattedValue})},this.onInputFocus=function(){n.setMessagesHeight()},this.onInputBlur=function(){n.showMessages&&(n.messageContainer.style.height="0px")},this.onLabelClick=function(e){e.stopImmediatePropagation()}}return Object(i["a"])(e,[{key:"componentDidLoad",value:function(){this.reformatValue()}},{key:"componentDidRender",value:function(){this.scheduledAfterRender.forEach((function(e){e()})),this.scheduledAfterRender=[]}},{key:"defaultChangeHandler",value:function(e){this.hostElement.onchange||(this.value=e.detail.value)}},{key:"reformatValue",value:function(){this.formattedValueObject=this.getFormattedValueObj(this.value,!0),this.inputElement.value=this.formattedValueObject.formattedValue}},{key:"onMessageUpdate",value:function(){var e=this;this.scheduledAfterRender.push((function(){e.setMessagesHeight()}))}},{key:"setMessagesHeight",value:function(){this.showMessages&&(this.messageContainer.style.height=this.messageContainerHeight)}},{key:"getFormattedValueObj",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={phone:v,date:d,numeric:m},i=a[this.type];return null!==(e=null===i||void 0===i?void 0:i(t,this.format,n))&&void 0!==e?e:{value:t,formattedValue:t}}},{key:"calculateCursorPositionOnInput",value:function(){var e,t=this.inputElement,n=this.formattedValueObject.formattedValue.length;return{startingPosition:null!==(e=t.selectionStart)&&void 0!==e?e:n,valueLength:n,previousValueLength:t.value.length,hasSelection:!1}}},{key:"setCursorPosition",value:function(){if(!this.cursorData.hasSelection){var e=this.inputElement,t=this.cursorData,n=t.valueLength,a=t.previousValueLength,i=t.startingPosition,r=i+(n-a);e.setSelectionRange(r,r)}}},{key:"render",value:function(){return Object(s["g"])("div",{class:"input-wrapper"},Object(s["g"])("div",{class:"input-container ".concat(this.hasErrors?"has-error":"")},this.label&&Object(s["g"])("label",{htmlFor:this.inputId,onClick:this.onLabelClick},this.hasErrors&&Object(s["g"])("protean-icon",{type:"status-error-filled",class:"error-icon"}),this.label,this.optional&&Object(s["g"])("span",{class:"optional-tag"}," (optional)")),Object(s["g"])("input",{id:this.inputId,type:this.inputType,disabled:this.disabled,readOnly:this.readonly,"aria-required":"".concat(!this.optional),"aria-label":this.inputAriaLabel,"aria-invalid":"".concat(this.hasErrors),"aria-describedby":this.descriptionId,"aria-haspopup":this.ariaHasPopup,"aria-expanded":void 0===this.ariaExpanded?null:"".concat(this.ariaExpanded),onChange:this.onInputChange,onInput:this.onInputInput,onFocus:this.onInputFocus,onBlur:this.onInputBlur})),this.renderMessages())}},{key:"renderMessages",value:function(){return Object(s["g"])("div",{class:"message-container"},Object(s["g"])("protean-message",{type:this.hasErrors?"error":"info",level:"status",variant:"inline"},Object(s["g"])("ul",{id:this.descriptionId},this.showMessages&&this.messages.map((function(e){return Object(s["g"])("li",null,e)})))))}},{key:"inputElement",get:function(){return this.hostElement.shadowRoot.querySelector("input")}},{key:"inputType",get:function(){var e,t={text:"text",tel:"tel",phone:"tel",numeric:"tel",date:"tel",number:"number",password:"password",search:"search",email:"email"};return null!==(e=t[this.type])&&void 0!==e?e:"text"}},{key:"inputAriaLabel",get:function(){var e;return this.label?null:null!==(e=this.ariaLabel)&&void 0!==e?e:null}},{key:"hasErrors",get:function(){return Array.isArray(this.errors)&&this.errors.length>0}},{key:"messages",get:function(){if(this.hasErrors)return this.errors;var e=Array.isArray(this.hints)&&this.hints.length>0;return e?this.hints:void 0}},{key:"showMessages",get:function(){return Array.isArray(this.messages)&&this.messages.length>0&&!this.suppressMessages}},{key:"messageContainer",get:function(){return this.hostElement.shadowRoot.querySelector(".message-container")}},{key:"messageContainerHeight",get:function(){var e=this.hostElement.shadowRoot.querySelector(".message-container protean-message").getBoundingClientRect().height;return"".concat(e,"px")}},{key:"hostElement",get:function(){return Object(s["f"])(this)}}],[{key:"watchers",get:function(){return{value:["reformatValue"],type:["reformatValue"],format:["reformatValue"],hints:["onMessageUpdate"],errors:["onMessageUpdate"]}}}]),e}();y.style=b},c015:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=1e3;function i(){return a++}}}]);
//# sourceMappingURL=chunk-a0c02c50.93c26106.js.map