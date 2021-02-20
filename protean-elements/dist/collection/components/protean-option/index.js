import { Component, Prop, Listen, h, } from '@stencil/core';
export class ProteanOption {
  get isDisabled() {
    return (this.disabled || this.disabledGroup) ?? false;
  }
  defaultClickHandler(event) {
    if (this.isDisabled) {
      event.stopImmediatePropagation();
    }
  }
  render() {
    return (h("div", { class: "protean-option-container", role: "option", "aria-selected": `${this.selected ?? false}`, "aria-disabled": `${this.isDisabled}` },
      h("div", { class: "protean-option-selected" }, this.selected && (h("protean-icon", { type: "checkmark" }))),
      h("div", { class: "protean-option-content" },
        h("slot", null))));
  }
  static get is() { return "protean-option"; }
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
      "attribute": "value",
      "reflect": true
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
    "selected": {
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
      "attribute": "selected",
      "reflect": true
    },
    "active": {
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
      "attribute": "active",
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
    "disabledGroup": {
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
      "attribute": "disabled-group",
      "reflect": true
    }
  }; }
  static get listeners() { return [{
      "name": "click",
      "method": "defaultClickHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
