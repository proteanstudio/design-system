(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4744270e"],{"3e93":function(t,e,o){"use strict";o.r(e),o.d(e,"protean_optgroup",(function(){return p}));o("46d4"),o("e28c"),o("5a85"),o("dddc");var n=o("862b"),i=o("c812"),r=o("d1ee"),a=o("c015"),l="*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:block}.protean-optgroup-label{position:relative;z-index:1;top:0;display:flex;align-items:center;min-height:2.5rem;font-weight:500;background-color:var(--protean-dropdown-background-color)}.protean-optgroup-label::before{content:'';width:calc(100% - 30px);height:1px;position:absolute;top:50%;left:15px;background-color:var(--protean-optgroup-separator-color)}.protean-optgroup-label-text{display:inline-block;margin-left:1.5rem;padding:0 0.5rem;background-color:var(--protean-dropdown-background-color);position:relative;font-style:italic}:host([disabled]) .protean-optgroup-label-text span{opacity:0.4}",p=function(){function t(e){var o=this;Object(n["a"])(this,t),Object(r["i"])(this,e),this.guid=Object(a["a"])(),this.onMutationObserved=function(){o.propagateDisabledState(o.disabled)}}return Object(i["a"])(t,[{key:"propagateDisabledState",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.optionElements.forEach((function(e){e.disabledGroup=t}))}},{key:"componentWillLoad",value:function(){var t=new MutationObserver(this.onMutationObserved);t.observe(this.hostElement,{childList:!0}),this.onMutationObserved(),this.mutationObserver=t}},{key:"render",value:function(){var t;return Object(r["g"])("div",{class:"protean-optgroup-container",role:"group","aria-labelled-by":this.labelId,"aria-disabled":"".concat(null!==(t=this.disabled)&&void 0!==t&&t)},this.label&&Object(r["g"])("div",{class:"protean-optgroup-label",id:this.labelId},Object(r["g"])("div",{class:"protean-optgroup-label-text"},Object(r["g"])("span",null,this.label))),Object(r["g"])("div",{class:"protean-optgroup-option-container"},Object(r["g"])("slot",null)))}},{key:"labelId",get:function(){return"protean-optgroup-label-".concat(this.guid)}},{key:"optionElements",get:function(){return Array.from(this.hostElement.querySelectorAll("protean-option"))}},{key:"hostElement",get:function(){return Object(r["f"])(this)}}],[{key:"watchers",get:function(){return{disabled:["propagateDisabledState"]}}}]),t}();p.style=l},c015:function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));var n=1e3;function i(){return n++}}}]);
//# sourceMappingURL=chunk-4744270e.86c0a6b5.js.map