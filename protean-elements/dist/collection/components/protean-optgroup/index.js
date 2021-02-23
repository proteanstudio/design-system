import { Component, Prop, Element, Watch, h, } from '@stencil/core';
import { createGuid } from '@/utils/utils';
export class ProteanOptgroup {
  constructor() {
    this.guid = createGuid();
    this.onMutationObserved = () => {
      this.propagateDisabledState(this.disabled);
    };
  }
  propagateDisabledState(disabled = false) {
    this.optionElements.forEach(option => {
      option.disabledGroup = disabled;
    });
  }
  get labelId() {
    return `protean-optgroup-label-${this.guid}`;
  }
  get optionElements() {
    return Array.from(this.hostElement.querySelectorAll('protean-option'));
  }
  componentWillLoad() {
    const mutationObserver = new MutationObserver(this.onMutationObserved);
    mutationObserver.observe(this.hostElement, {
      childList: true,
    });
    this.onMutationObserved();
    this.mutationObserver = mutationObserver;
  }
  render() {
    return (h("div", { class: "protean-optgroup-container", role: "group", "aria-labelledby": this.labelId, "aria-disabled": `${this.disabled ?? false}` },
      this.label && (h("div", { class: "protean-optgroup-label", id: this.labelId, role: "presentation" },
        h("div", { class: "protean-optgroup-label-text" },
          h("span", null, this.label)))),
      h("div", { class: "protean-optgroup-option-container" },
        h("slot", null))));
  }
  static get is() { return "protean-optgroup"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
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
    }
  }; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "disabled",
      "methodName": "propagateDisabledState"
    }]; }
}
