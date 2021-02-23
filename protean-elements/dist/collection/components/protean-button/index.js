import { Component, Prop, Element, Listen, h, } from '@stencil/core';
export class ProteanButton {
  delegateFocus(event) {
    if (event.target === this.hostElement) {
      this.hostElement.shadowRoot.querySelector('button').focus();
    }
  }
  render() {
    return (h("button", { type: this.type ?? 'button', disabled: this.disabled, "aria-label": this.ariaLabel },
      h("div", null,
        h("slot", null))));
  }
  static get is() { return "protean-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "variant": {
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
      "attribute": "variant",
      "reflect": true
    },
    "type": {
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
      "attribute": "type",
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
    }
  }; }
  static get elementRef() { return "hostElement"; }
  static get listeners() { return [{
      "name": "focus",
      "method": "delegateFocus",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
