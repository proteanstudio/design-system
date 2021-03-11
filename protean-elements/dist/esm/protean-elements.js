import { p as promiseResolve, b as bootstrapLazy } from './index-e0b8d77a.js';

/*
 Stencil Client Patch Browser v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["protean-button_11",[[1,"protean-select",{"value":[1025],"selectedOptions":[1040],"multiple":[516],"label":[513],"a11yLabel":[513,"a11y-label"],"optional":[516],"disabled":[516],"errors":[16],"dropdownOpen":[32],"activeOptionId":[32]},[[0,"change","defaultChangeHandler"],[0,"focus","delegateFocus"]]],[1,"protean-option",{"value":[513],"label":[513],"selected":[516],"active":[516],"disabled":[516],"disabledGroup":[516,"disabled-group"]},[[0,"click","defaultClickHandler"]]],[1,"protean-button",{"variant":[513],"type":[513],"disabled":[516],"a11yLabel":[513,"a11y-label"]},[[0,"focus","delegateFocus"]]],[1,"protean-checkbox",{"checked":[1540],"variant":[513],"label":[513],"a11yLabel":[513,"a11y-label"],"alignment":[513],"disabled":[516],"indeterminate":[516]},[[0,"change","defaultChangeHandler"],[0,"focus","delegateFocus"]]],[1,"protean-optgroup",{"label":[513],"disabled":[516]}],[1,"protean-tab-container",{"value":[1537],"name":[513],"tabs":[32]},[[0,"change","defaultChangeHandler"]]],[1,"protean-tab-pane",{"label":[513],"value":[513],"name":[513],"selected":[4],"guid":[2],"index":[2]}],[1,"protean-input",{"value":[1025],"type":[513],"label":[513],"disabled":[516],"maxlength":[514],"format":[513],"optional":[516],"hints":[16],"errors":[16],"suppressMessages":[516,"suppress-messages"],"readonly":[516],"a11yLabel":[513,"a11y-label"],"ariaHasPopup":[1,"aria-has-popup"],"ariaExpanded":[4,"aria-expanded"],"ariaRole":[1,"aria-role"],"formattedValueObject":[32]},[[0,"change","defaultChangeHandler"],[0,"focus","delegateFocus"]]],[0,"protean-click-elsewhere"],[1,"protean-message",{"type":[513],"level":[513],"variant":[513]}],[1,"protean-icon",{"type":[513],"use":[513]}]]]], options);
});