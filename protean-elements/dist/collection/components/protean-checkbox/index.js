import { Component, Prop, h, //eslint-disable-line
Event, Listen, Element, } from '@stencil/core';
import { createGuid } from '@/utils/utils';
export class ProteanCheckbox {
  constructor() {
    this.checked = false;
    this.guid = createGuid();
    this.onCheckboxChange = (event) => {
      this.change.emit({
        checked: event.target.checked,
      });
    };
  }
  defaultChangeHandler(event) {
    if (event.target === this.hostElement && !this.hostElement.onchange) {
      this.checked = event.detail.checked;
    }
  }
  delegateFocus(event) {
    if (event.target === this.hostElement) {
      this.hostElement.shadowRoot.querySelector('input').focus();
    }
  }
  get checkboxId() {
    return `checkbox-${this.guid}`;
  }
  get checkboxAriaLabel() {
    if (this.label)
      return null;
    return this.ariaLabel ?? null;
  }
  get checkboxAlignment() {
    return ['left', 'right'].includes(this.alignment)
      ? this.alignment
      : 'left';
  }
  render() {
    return (h("div", { class: "checkbox-container" },
      h("input", { class: "sr", type: "checkbox", id: this.checkboxId, "aria-label": this.checkboxAriaLabel, disabled: this.disabled, checked: this.checked || this.indeterminate, onChange: this.onCheckboxChange }),
      h("label", { htmlFor: this.checkboxId, class: `alignment-${this.checkboxAlignment}` },
        this.renderSymbol(),
        !!this.label && (h("span", { class: "label-text" }, this.label)))));
  }
  renderStandardFill() {
    if (this.indeterminate) {
      return (h("line", { class: "checkbox-fill indeterminate", x1: "6", y1: "12", x2: "18", y2: "12", "stroke-width": "3" }));
    }
    if (this.checked) {
      return (h("polyline", { class: "checkbox-fill checked", points: "4.76755287 13.3616687 9.85401316 18.3300512 19.438211 5.92818154" }));
    }
  }
  renderStandard() {
    return (h("svg", { class: "checkbox-symbol standard", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", focusable: "false", "aria-hidden": "true" },
      h("rect", { class: "checkbox-outline", x: "1", y: "1", width: "22", height: "22", rx: "2" }),
      this.renderStandardFill()));
  }
  renderToggle() {
    return (h("svg", { class: "checkbox-symbol toggle", viewBox: "0 0 45 20", version: "1.1", xmlns: "http://www.w3.org/2000/svg", focusable: "false", "aria-hidden": "true" },
      h("line", { class: "toggle-path", x1: "10", y1: "10", x2: "35", y2: "10" }),
      h("circle", { class: "toggle-fill", cx: "10", cy: "10", r: "8" })));
  }
  renderSymbol() {
    if (this.variant === 'toggle') {
      return this.renderToggle();
    }
    return this.renderStandard();
  }
  static get is() { return "protean-checkbox"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "checked": {
      "type": "boolean",
      "mutable": true,
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
      "attribute": "checked",
      "reflect": true,
      "defaultValue": "false"
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
    "alignment": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'left' | 'right'",
        "resolved": "\"left\" | \"right\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "alignment",
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
    "indeterminate": {
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
      "attribute": "indeterminate",
      "reflect": true
    }
  }; }
  static get events() { return [{
      "method": "change",
      "name": "change",
      "bubbles": true,
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
