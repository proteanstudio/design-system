(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bcd6f08a"],{c015:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=1e3;function o(){return i++}},fc79:function(e,t,n){"use strict";n.r(t),n.d(t,"protean_select",(function(){return u}));n("862d"),n("9588"),n("2252"),n("46d4"),n("e28c"),n("22f4"),n("b902"),n("966c"),n("e0d3"),n("5a85"),n("4a00"),n("dddc");var i=n("e82c"),o=n("862b"),s=n("c812"),l=n("d1ee"),a=n("c015"),r="*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:block}.select-container{position:relative;margin:1rem}protean-input{margin:0}.protean-select-icon{position:absolute;right:0.75rem;bottom:0.5rem}:host([disabled]) .protean-select-icon{opacity:0.4;cursor:not-allowed}.protean-dropdown{position:absolute;z-index:2;top:calc(100% - 3px);width:100%;background-color:var(--protean-dropdown-background-color);color:var(--protean-dropdown-text-color);border-width:var(--protean-dropdown-border-width);border-style:solid;border-color:var(--protean-dropdown-border-color, currentColor);border-radius:0 0 2px 2px;box-shadow:var(--protean-dropdown-box-shadow);max-height:250px;overflow-y:scroll}.protean-select-separator{height:1px;width:calc(100% - 20px);margin:0 auto;position:relative;top:-2px;z-index:3;background-color:var(--protean-select-separator-color)}",u=function(){function e(t){var n=this;Object(o["a"])(this,e),Object(l["i"])(this,t),this.change=Object(l["e"])(this,"change",3),this.dropdownOpen=!1,this.guid=Object(a["a"])(),this.functionQueue=[],this.functionQueueTimeout=200,this.closeDropdown=function(){n.dropdownOpen&&(n.dropdownOpen=!1,n.activeOption&&(n.activeOption.active=!1,n.activeOptionId=""))},this.executeFunctionQueue=function(){setTimeout((function(){n.functionQueue.forEach((function(e){e()}))}),n.functionQueueTimeout)},this.onInputClick=function(){n.dropdownOpen=!n.dropdownOpen},this.onInputKeyDown=function(e){"Tab"===e.key&&n.dropdownOpen&&e.preventDefault()},this.onInputKeyUp=function(e){var t=e.key,i=["ArrowUp","ArrowDown","Home","End"].includes(t);if(i&&n.optionElements.length>0)return e.preventDefault(),void n.handleOptionNavigation(t);[" ","Enter"].includes(t)&&n.activeOption?n.handleSelection(n.activeOption.value):"Escape"!==t||n.closeDropdown()},this.onOptionClick=function(e){var t=e.target;"protean-option"===t.localName&&n.handleSelection(t.value)},this.onMutationObserved=function(){n.optionElements.forEach((function(e,t){e.id="protean-select-".concat(n.guid,"-option-").concat(t)})),n.updateOptions()}}return Object(s["a"])(e,[{key:"componentWillLoad",value:function(){var e=new MutationObserver(this.onMutationObserved);e.observe(this.hostElement,{childList:!0,subtree:!0}),this.onMutationObserved(),this.mutationObserver=e}},{key:"defaultChangeHandler",value:function(e){this.multiple?this.selectedOptions=e.detail.selectedOptions:this.value=e.detail.value}},{key:"defaultFocusHandler",value:function(){this.functionQueue=[]}},{key:"defaultBlurHandler",value:function(){var e=this;this.functionQueue.push((function(){e.closeDropdown()})),this.executeFunctionQueue()}},{key:"updateOptions",value:function(){this.multiple?this.updateMultipleOptions(this.selectedOptions):this.updateSingleOptions(this.value)}},{key:"updateSingleOptions",value:function(e){if(this.multiple)console.error("`value` should not be used on `protean-select` elements where `multiple` is `true`.  Use `selectedOptions` instead.");else if(e)this.optionElements.forEach((function(t){t.selected=t.value===e}));else{var t=this.optionElements.find((function(e){return e.selected}));t&&(this.value=t.value)}}},{key:"updateMultipleOptions",value:function(e){this.multiple?e?this.optionElements.forEach((function(t){t.selected=e.includes(t.value)})):this.selectedOptions=this.optionElements.filter((function(e){return e.selected})).map((function(e){return e.value})):console.error("`selectedOptions` should not be used on `protean-select` elements where `multiple` is `false`.  Use `value` instead.")}},{key:"activateDefaultOption",value:function(){var e,t=null!==(e=this.optionElements.find((function(e){return e.selected})))&&void 0!==e?e:this.optionElements[0];t.active=!0,this.activeOptionId=t.id}},{key:"handleOptionNavigation",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.activeOptionIndex;if(!this.dropdownOpen)return this.dropdownOpen=!0,void this.activateDefaultOption();if(this.activeOption){var n=this.optionElements.length-1,i=0;switch(e){case"ArrowDown":i=t<n?t+1:t;break;case"ArrowUp":i=t>0?t-1:0;break;case"Home":i=0;break;case"End":i=n;break}if(i!==this.activeOptionIndex){var o=this.optionElements[i];if(o.disabled||o.disabledGroup)return void(o!==this.optionElements[0]&&o!==this.optionElements[n]&&this.handleOptionNavigation(e,i));this.activeOption.active=!1,o.active=!0,this.activeOptionId=o.id,this.activeOption.scrollIntoView({behavior:"smooth",block:"nearest"})}}else this.activateDefaultOption()}},{key:"handleSelection",value:function(e){this.multiple?this.handleMultiSelection(e):this.handleSingleSelection(e)}},{key:"handleSingleSelection",value:function(e){e!==this.value&&this.change.emit({value:e}),this.closeDropdown()}},{key:"handleMultiSelection",value:function(e){var t=Object(i["a"])(this.selectedOptions);t.includes(e)?t=t.filter((function(t){return t!==e})):t.push(e),this.change.emit({selectedOptions:t})}},{key:"render",value:function(){return Object(l["g"])("div",{class:"select-container"},Object(l["g"])("protean-input",{value:this.displayValue,label:this.label,optional:this.optional,errors:this.errors,disabled:this.disabled,readonly:!0,"suppress-messages":!0,ariaLabel:this.selectAriaLabel,ariaHasPopup:"listbox",ariaExpanded:this.dropdownOpen,onClick:this.onInputClick,onKeyUp:this.onInputKeyUp,onKeyDown:this.onInputKeyDown}),Object(l["g"])("protean-icon",{class:"protean-select-icon",type:"chevron-down"}),Object(l["g"])("div",{class:"protean-select-separator",hidden:!this.dropdownOpen}),this.renderDropdown())}},{key:"renderDropdown",value:function(){return Object(l["g"])("div",{class:"protean-select-dropdown protean-dropdown",role:"listbox","aria-label":this.label,tabIndex:-1,"aria-activedescendant":this.activeOptionId,hidden:!this.dropdownOpen,onClick:this.onOptionClick},Object(l["g"])("slot",null))}},{key:"selectAriaLabel",get:function(){var e;return this.label?null:null!==(e=this.ariaLabel)&&void 0!==e?e:null}},{key:"optionElements",get:function(){return Array.from(this.hostElement.querySelectorAll("protean-option"))}},{key:"displayValue",get:function(){var e=this;if(this.multiple){var t=this.selectedOptions.length;if(0===t)return"";if(1===t){var n,i=this.optionElements.find((function(t){return t.value===e.selectedOptions[0]}));return null!==(n=null===i||void 0===i?void 0:i.label)&&void 0!==n?n:(null===i||void 0===i?void 0:i.textContent.trim())||(null===i||void 0===i?void 0:i.value)||this.selectedOptions[0]}return"".concat(t," selected")}var o,s=this.optionElements.find((function(e){return e.selected}));return s?null!==(o=s.label)&&void 0!==o?o:s.textContent.trim()||s.value:this.value}},{key:"activeOption",get:function(){return this.optionElements.find((function(e){return e.active}))}},{key:"activeOptionIndex",get:function(){return this.optionElements.indexOf(this.activeOption)}},{key:"hostElement",get:function(){return Object(l["f"])(this)}}],[{key:"watchers",get:function(){return{multiple:["updateOptions"],value:["updateSingleOptions"],selectedOptions:["updateMultipleOptions"]}}}]),e}();u.style=r}}]);
//# sourceMappingURL=chunk-bcd6f08a.1ef6b7b0.js.map