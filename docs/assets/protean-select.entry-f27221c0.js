import{r,c as l,h as s,g as a}from"./index-e2c2285b-c4441d08.js";import{c as p}from"./utils-9777d7c1-a2ad5c7b.js";const d=`*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:block;margin:var(--protean-select-margin, 1rem)}.select-container{display:block;position:relative}protean-input{margin:0;cursor:pointer}.protean-select-icon{position:absolute;right:0.75rem;bottom:0.25rem}:host([disabled]) .protean-select-icon{opacity:0.4;cursor:not-allowed}.protean-dropdown{position:absolute;z-index:2;top:calc(100% - 3px);width:100%;background-color:var(--protean-dropdown-background-color, #1a1a1a);color:var(--protean-dropdown-text-color, #fafafa);border-width:var(--protean-dropdown-border-width, 0 1px 1px);border-style:solid;border-color:var(--protean-dropdown-border-color, currentColor);border-radius:0 0 2px 2px;box-shadow:var(
        --protean-dropdown-box-shadow,
        0 3px 5px -2px rgba(255, 255, 255, 0.7)
    );max-height:250px;overflow-y:scroll}.protean-select-separator{height:1px;width:calc(100% - 20px);margin:0 auto;position:relative;top:-2px;z-index:3;background-color:var(--protean-select-separator-color, #535353)}`,h=class{constructor(t){r(this,t),this.change=l(this,"change",3),this.guid=p(),this.focusInput=()=>{this.hostElement.shadowRoot.querySelector("protean-input").dispatchEvent(new FocusEvent("focus"))},this.closeDropdown=()=>{this.dropdownOpen&&(this.dropdownOpen=!1,this.focusInput(),this.activeOption&&(this.activeOption.active=!1,this.activeOptionId=""))},this.onClickElsewhere=e=>{e.stopImmediatePropagation(),this.closeDropdown()},this.onInputClick=()=>{this.dropdownOpen=!this.dropdownOpen},this.onInputKeyDown=e=>{const i=e.key;if(i==="Tab"&&this.dropdownOpen){e.preventDefault();return}if(["ArrowUp","ArrowDown","Home","End"].includes(i)&&this.optionElements.length>0){e.preventDefault(),this.handleOptionNavigation(i);return}if([" ","Enter"].includes(i)&&this.activeOption){e.preventDefault(),this.handleSelection(this.activeOption.value);return}if(i==="Escape"){this.closeDropdown();return}},this.onOptionClick=e=>{const i=e.target;i.localName==="protean-option"&&this.handleSelection(i.value)},this.onMutationObserved=()=>{this.optionElements.forEach((e,i)=>{e.id=`protean-select-${this.guid}-option-${i}`}),this.updateOptions()},this.value=void 0,this.selectedOptions=void 0,this.multiple=!1,this.label=void 0,this.a11yLabel=void 0,this.optional=void 0,this.disabled=void 0,this.errors=void 0,this.dropdownOpen=!1,this.activeOptionId=void 0}componentWillLoad(){const t=new MutationObserver(this.onMutationObserved);t.observe(this.hostElement,{childList:!0,subtree:!0}),this.onMutationObserved(),this.mutationObserver=t}get selectAriaLabel(){return this.label?null:this.a11yLabel??null}get optionElements(){return Array.from(this.hostElement.querySelectorAll("protean-option"))}get displayValue(){if(this.multiple){const e=this.selectedOptions.length;if(e===0)return"";if(e===1){const i=this.optionElements.find(n=>n.value===this.selectedOptions[0]);return i?.label??(i?.textContent.trim()||i?.value||this.selectedOptions[0])}return`${e} selected`}const t=this.optionElements.find(e=>e.selected);return t?t.label??(t.textContent.trim()||t.value):this.value}get activeOption(){return this.optionElements.find(t=>t.active)}get activeOptionIndex(){return this.optionElements.indexOf(this.activeOption)}defaultChangeHandler(t){if(this.multiple){this.selectedOptions=t.detail.selectedOptions;return}this.value=t.detail.value}delegateFocus(t){t.target===this.hostElement&&this.focusInput()}updateOptions(){this.multiple?this.updateMultipleOptions(this.selectedOptions):this.updateSingleOptions(this.value)}updateSingleOptions(t){if(this.multiple){console.error("`value` should not be used on `protean-select` elements where `multiple` is `true`.  Use `selectedOptions` instead.");return}if(t){this.optionElements.forEach(i=>{i.selected=i.value===t});return}const e=this.optionElements.find(i=>i.selected);e&&(this.value=e.value)}updateMultipleOptions(t){if(!this.multiple){console.error("`selectedOptions` should not be used on `protean-select` elements where `multiple` is `false`.  Use `value` instead.");return}if(t){this.optionElements.forEach(e=>{e.selected=t.includes(e.value)});return}this.selectedOptions=this.optionElements.filter(e=>e.selected).map(e=>e.value)}activateDefaultOption(){const t=this.optionElements.find(e=>e.selected)??this.optionElements[0];t.active=!0,this.activeOptionId=t.id}handleOptionNavigation(t,e=this.activeOptionIndex){if(!this.dropdownOpen){this.dropdownOpen=!0,this.activateDefaultOption();return}if(!this.activeOption){this.activateDefaultOption();return}const i=this.optionElements.length-1;let n=0;switch(t){case"ArrowDown":n=e<i?e+1:e;break;case"ArrowUp":n=e>0?e-1:0;break;case"Home":n=0;break;case"End":n=i;break}if(n!==this.activeOptionIndex){const o=this.optionElements[n];if(o.disabled||o.disabledGroup){o!==this.optionElements[0]&&o!==this.optionElements[i]&&this.handleOptionNavigation(t,n);return}this.activeOption.active=!1,o.active=!0,this.activeOptionId=o.id,this.activeOption.scrollIntoView({behavior:"smooth",block:"nearest"})}}handleSelection(t){if(this.multiple){this.handleMultiSelection(t);return}this.handleSingleSelection(t)}handleSingleSelection(t){t!==this.value&&this.change.emit({value:t}),this.closeDropdown()}handleMultiSelection(t){let e=[...this.selectedOptions];e.includes(t)?e=e.filter(i=>i!==t):e.push(t),this.change.emit({selectedOptions:e})}render(){return s("protean-click-elsewhere",{onChange:this.onClickElsewhere,class:"select-container"},s("protean-input",{value:this.displayValue,label:this.label,optional:this.optional,errors:this.errors,disabled:this.disabled,"suppress-messages":!0,type:"button",a11yLabel:this.selectAriaLabel,ariaHasPopup:"listbox",a11yExpanded:this.dropdownOpen,onClick:this.onInputClick,onKeyDown:this.onInputKeyDown}),s("protean-icon",{class:"protean-select-icon",type:"chevron-down"}),s("div",{class:"protean-select-separator",hidden:!this.dropdownOpen}),this.renderDropdown())}renderDropdown(){return s("div",{class:"protean-select-dropdown protean-dropdown",role:"listbox","aria-label":this.label,tabIndex:-1,"aria-required":`${!this.optional}`,"aria-multiselectable":`${this.multiple}`,"aria-activedescendant":this.activeOptionId,hidden:!this.dropdownOpen,onClick:this.onOptionClick},s("slot",null))}get hostElement(){return a(this)}static get watchers(){return{multiple:["updateOptions"],value:["updateSingleOptions"],selectedOptions:["updateMultipleOptions"]}}};h.style=d;export{h as protean_select};
