import { Component, Prop, h, } from '@stencil/core';
import icons from './icons';
export class ProteanIcon {
  get icon() {
    if (this.type === 'custom' && !!this.use) {
      return h("use", { xlinkHref: this.use });
    }
    return icons[this.type]?.markup() ?? null;
  }
  render() {
    return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", focusable: "false", "aria-hidden": "true" }, this.icon));
  }
  static get is() { return "protean-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
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
    "use": {
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
      "attribute": "use",
      "reflect": true
    }
  }; }
}
