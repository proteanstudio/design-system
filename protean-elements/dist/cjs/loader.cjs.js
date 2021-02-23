'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d66cd85c.js');

/*
 Stencil Client Patch Esm v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["protean-button_11.cjs",[[1,"protean-select",{"value":[1025],"selectedOptions":[1040],"multiple":[516],"label":[513],"ariaLabel":[1,"aria-label"],"optional":[516],"disabled":[516],"errors":[16],"dropdownOpen":[32],"activeOptionId":[32]},[[0,"change","defaultChangeHandler"],[0,"focus","delegateFocus"]]],[1,"protean-option",{"value":[513],"label":[513],"selected":[516],"active":[516],"disabled":[516],"disabledGroup":[516,"disabled-group"]},[[0,"click","defaultClickHandler"]]],[1,"protean-button",{"variant":[513],"type":[513],"disabled":[516],"ariaLabel":[1,"aria-label"]},[[0,"focus","delegateFocus"]]],[1,"protean-checkbox",{"checked":[1540],"variant":[513],"label":[513],"ariaLabel":[1,"aria-label"],"alignment":[513],"disabled":[516],"indeterminate":[516]},[[0,"change","defaultChangeHandler"],[0,"focus","delegateFocus"]]],[1,"protean-optgroup",{"label":[513],"disabled":[516]}],[1,"protean-tab-container",{"value":[1537],"name":[513],"tabs":[32]},[[0,"change","defaultChangeHandler"]]],[1,"protean-tab-pane",{"label":[513],"value":[513],"name":[513],"selected":[4],"guid":[2],"index":[2]}],[1,"protean-input",{"value":[1025],"type":[513],"label":[513],"disabled":[516],"maxlength":[514],"format":[513],"optional":[516],"hints":[16],"errors":[16],"suppressMessages":[516,"suppress-messages"],"readonly":[516],"ariaLabel":[1,"aria-label"],"ariaHasPopup":[1,"aria-has-popup"],"ariaExpanded":[4,"aria-expanded"],"ariaRole":[1,"aria-role"]},[[0,"change","defaultChangeHandler"],[0,"focus","delegateFocus"]]],[0,"protean-click-elsewhere"],[1,"protean-message",{"type":[513],"level":[513],"variant":[513]}],[1,"protean-icon",{"type":[513],"use":[513]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
