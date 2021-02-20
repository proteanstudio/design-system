import { Component, Prop, h, } from '@stencil/core';
export class ProteanMessage {
  get computedType() {
    const messageTypeMap = {
      info: 'info',
      success: 'success',
      warning: 'warning',
      error: 'error',
    };
    return messageTypeMap[this.type] ?? 'info';
  }
  get role() {
    return this.level === 'status' ? 'status' : 'alert';
  }
  get icon() {
    return `status-${this.computedType}-filled`;
  }
  get isInline() {
    return this.variant === 'inline';
  }
  render() {
    return (h("div", { class: `message-container ${this.computedType}`, role: this.role },
      !this.isInline && (h("protean-icon", { type: this.icon })),
      this.renderDecorator('top'),
      h("slot", null),
      this.renderDecorator('bottom')));
  }
  renderDecorator(cssClass) {
    return (h("svg", { class: `decorator ${cssClass}`, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 125 125", "aria-hidden": "true" },
      h("path", { d: "M125 125V0l-16 16v94H15L0 125h125z" })));
  }
  static get is() { return "protean-message"; }
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
    "level": {
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
      "attribute": "level",
      "reflect": true
    },
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
    }
  }; }
}
