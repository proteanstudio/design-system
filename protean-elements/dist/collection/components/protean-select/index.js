import { createGuid } from '@/utils/utils';
import { Component, Prop, State, Event, Listen, Element, Watch, h, } from '@stencil/core';
export class ProteanSelect {
  constructor() {
    this.multiple = false; //change to variant?
    this.dropdownOpen = false;
    this.guid = createGuid();
    this.focusInput = () => {
      this.hostElement.shadowRoot
        .querySelector('protean-input')
        .dispatchEvent(new FocusEvent('focus'));
    };
    this.closeDropdown = () => {
      if (!this.dropdownOpen)
        return;
      this.dropdownOpen = false;
      this.focusInput();
      if (this.activeOption) {
        this.activeOption.active = false;
        this.activeOptionId = '';
      }
    };
    this.onClickElsewhere = (event) => {
      event.stopImmediatePropagation();
      this.closeDropdown();
    };
    this.onInputClick = () => {
      this.dropdownOpen = !this.dropdownOpen;
    };
    this.onInputKeyDown = (event) => {
      const key = event.key;
      if (key === 'Tab' && this.dropdownOpen) {
        event.preventDefault();
        return;
      }
      const isNavigationKey = [
        'ArrowUp',
        'ArrowDown',
        'Home',
        'End',
      ].includes(key);
      if (isNavigationKey && this.optionElements.length > 0) {
        event.preventDefault();
        this.handleOptionNavigation(key);
        return;
      }
      if ([' ', 'Enter'].includes(key) && this.activeOption) {
        event.preventDefault();
        this.handleSelection(this.activeOption.value);
        return;
      }
      if (key === 'Escape') {
        this.closeDropdown();
        return;
      }
    };
    this.onOptionClick = (event) => {
      const option = event.target;
      if (option.localName !== 'protean-option')
        return;
      this.handleSelection(option.value);
    };
    this.onMutationObserved = () => {
      this.optionElements.forEach((option, index) => {
        option.id = `protean-select-${this.guid}-option-${index}`;
      });
      this.updateOptions();
    };
  }
  componentWillLoad() {
    const mutationObserver = new MutationObserver(this.onMutationObserved);
    mutationObserver.observe(this.hostElement, {
      childList: true,
      subtree: true,
    });
    this.onMutationObserved();
    this.mutationObserver = mutationObserver;
  }
  get selectAriaLabel() {
    if (this.label)
      return null;
    return this.ariaLabel ?? null;
  }
  get optionElements() {
    return Array.from(this.hostElement.querySelectorAll('protean-option'));
  }
  get displayValue() {
    if (this.multiple) {
      const selectedCount = this.selectedOptions.length;
      if (selectedCount === 0)
        return '';
      if (selectedCount === 1) {
        const selectedOption = this.optionElements.find(option => option.value === this.selectedOptions[0]);
        return (selectedOption?.label ??
          (selectedOption?.textContent.trim() ||
            selectedOption?.value ||
            this.selectedOptions[0]));
      }
      return `${selectedCount} selected`;
    }
    const selectedOption = this.optionElements.find(option => option.selected);
    if (selectedOption) {
      return (selectedOption.label ??
        (selectedOption.textContent.trim() || selectedOption.value));
    }
    return this.value;
  }
  get activeOption() {
    return this.optionElements.find(option => option.active);
  }
  get activeOptionIndex() {
    return this.optionElements.indexOf(this.activeOption);
  }
  defaultChangeHandler(event) {
    if (this.multiple) {
      this.selectedOptions = event.detail.selectedOptions;
      return;
    }
    this.value = event.detail.value;
  }
  delegateFocus(event) {
    if (event.target === this.hostElement) {
      this.focusInput();
    }
  }
  updateOptions() {
    if (this.multiple) {
      this.updateMultipleOptions(this.selectedOptions);
    }
    else {
      this.updateSingleOptions(this.value);
    }
  }
  updateSingleOptions(value) {
    if (this.multiple) {
      console.error('`value` should not be used on `protean-select` elements where `multiple` is `true`.  Use `selectedOptions` instead.');
      return;
    }
    if (value) {
      this.optionElements.forEach(option => {
        option.selected = option.value === value;
      });
      return;
    }
    const preSelectedOption = this.optionElements.find(option => option.selected);
    if (preSelectedOption) {
      this.value = preSelectedOption.value;
    }
  }
  updateMultipleOptions(selectedOptions) {
    if (!this.multiple) {
      console.error('`selectedOptions` should not be used on `protean-select` elements where `multiple` is `false`.  Use `value` instead.');
      return;
    }
    if (selectedOptions) {
      this.optionElements.forEach(option => {
        option.selected = selectedOptions.includes(option.value);
      });
      return;
    }
    this.selectedOptions = this.optionElements
      .filter(option => option.selected)
      .map(option => option.value);
  }
  activateDefaultOption() {
    const targetOption = this.optionElements.find(option => option.selected) ??
      this.optionElements[0]; //add protections against disabled starting point
    targetOption.active = true;
    this.activeOptionId = targetOption.id;
  }
  handleOptionNavigation(key, activeOptionIndex = this.activeOptionIndex) {
    if (!this.dropdownOpen) {
      this.dropdownOpen = true;
      this.activateDefaultOption();
      return;
    }
    if (!this.activeOption) {
      this.activateDefaultOption();
      return;
    }
    const lastOptionIndex = this.optionElements.length - 1;
    let targetIndex = 0;
    switch (key) {
      case 'ArrowDown':
        targetIndex =
          activeOptionIndex < lastOptionIndex
            ? activeOptionIndex + 1
            : activeOptionIndex;
        break;
      case 'ArrowUp':
        targetIndex = activeOptionIndex > 0 ? activeOptionIndex - 1 : 0;
        break;
      case 'Home':
        targetIndex = 0;
        break;
      case 'End':
        targetIndex = lastOptionIndex;
        break;
    }
    if (targetIndex !== this.activeOptionIndex) {
      const targetOption = this.optionElements[targetIndex];
      if (targetOption.disabled || targetOption.disabledGroup) {
        if (targetOption !== this.optionElements[0] &&
          targetOption !== this.optionElements[lastOptionIndex]) {
          this.handleOptionNavigation(key, targetIndex);
        }
        return;
      }
      this.activeOption.active = false;
      targetOption.active = true;
      this.activeOptionId = targetOption.id;
      this.activeOption.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }
  handleSelection(value) {
    if (this.multiple) {
      this.handleMultiSelection(value);
      return;
    }
    this.handleSingleSelection(value);
  }
  handleSingleSelection(value) {
    if (value !== this.value) {
      this.change.emit({ value });
    }
    this.closeDropdown();
  }
  handleMultiSelection(value) {
    let selectedOptions = [...this.selectedOptions];
    if (selectedOptions.includes(value)) {
      selectedOptions = selectedOptions.filter(option => option !== value);
    }
    else {
      selectedOptions.push(value);
    }
    this.change.emit({ selectedOptions });
  }
  render() {
    return (h("protean-click-elsewhere", { onChange: this.onClickElsewhere, class: "select-container" },
      h("protean-input", { value: this.displayValue, label: this.label, optional: this.optional, errors: this.errors, disabled: this.disabled, "suppress-messages": true, type: "button", ariaLabel: this.selectAriaLabel, ariaHasPopup: "listbox", ariaExpanded: this.dropdownOpen, onClick: this.onInputClick, onKeyDown: this.onInputKeyDown }),
      h("protean-icon", { class: "protean-select-icon", type: "chevron-down" }),
      h("div", { class: "protean-select-separator", hidden: !this.dropdownOpen }),
      this.renderDropdown()));
  }
  renderDropdown() {
    return (h("div", { class: "protean-select-dropdown protean-dropdown", role: "listbox", "aria-label": this.label, tabIndex: -1, "aria-required": `${!this.optional}`, "aria-multiselectable": `${this.multiple}`, "aria-activedescendant": this.activeOptionId, hidden: !this.dropdownOpen, onClick: this.onOptionClick },
      h("slot", null)));
  }
  static get is() { return "protean-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "value": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "value",
      "reflect": false
    },
    "selectedOptions": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "multiple": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "multiple",
      "reflect": true,
      "defaultValue": "false"
    },
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "label",
      "reflect": true
    },
    "ariaLabel": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "aria-label",
      "reflect": false
    },
    "optional": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "optional",
      "reflect": true
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "disabled",
      "reflect": true
    },
    "errors": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get states() { return {
    "dropdownOpen": {},
    "activeOptionId": {}
  }; }
  static get events() { return [{
      "method": "change",
      "name": "change",
      "bubbles": false,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "multiple",
      "methodName": "updateOptions"
    }, {
      "propName": "value",
      "methodName": "updateSingleOptions"
    }, {
      "propName": "selectedOptions",
      "methodName": "updateMultipleOptions"
    }]; }
  static get listeners() { return [{
      "name": "change",
      "method": "defaultChangeHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "focus",
      "method": "delegateFocus",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
