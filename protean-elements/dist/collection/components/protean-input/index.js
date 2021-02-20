import { Component, Prop, Event, Listen, Element, Watch, h, } from '@stencil/core';
import formatDate from '@/utils/formatting/date';
import formatNumeric from '@/utils/formatting/numeric';
import formatPhoneNumber from '@/utils/formatting/phone';
import { createGuid } from '@/utils/utils';
export class ProteanInput {
  constructor() {
    this.disabled = false;
    this.readonly = false;
    this.guid = createGuid();
    this.inputId = `protean-input-${this.guid}`;
    this.descriptionId = `protean-input-description-${this.guid}`;
    this.scheduledAfterRender = [];
    this.isFocused = false;
    this.onInputChange = (event) => {
      event.stopPropagation();
      this.formattedValueObject = this.getFormattedValueObj(this.inputElement.value);
      this.inputElement.value = this.formattedValueObject.formattedValue;
      if (this.value !== this.formattedValueObject.value) {
        this.change.emit({
          value: this.formattedValueObject.value,
          formattedValue: this.formattedValueObject.formattedValue,
        });
      }
    };
    this.onInputInput = (event) => {
      event.stopPropagation();
      this.formattedValueObject = this.getFormattedValueObj(this.inputElement.value);
      this.cursorData = this.calculateCursorPositionOnInput();
      this.inputElement.value = this.formattedValueObject.formattedValue;
      this.setCursorPosition();
      if (this.value !== this.formattedValueObject.value) {
        this.input.emit({
          value: this.formattedValueObject.value,
          formattedValue: this.formattedValueObject.formattedValue,
        });
      }
    };
    this.onInputFocus = () => {
      this.isFocused = true;
      this.setMessagesHeight();
    };
    this.onInputBlur = () => {
      this.isFocused = false;
      if (this.showMessages) {
        this.messageContainer.style.height = '0px';
      }
    };
    this.onLabelClick = (event) => {
      event.stopImmediatePropagation();
    };
  }
  componentDidLoad() {
    this.reformatValue();
  }
  componentDidRender() {
    this.scheduledAfterRender.forEach(fn => {
      fn();
    });
    this.scheduledAfterRender = [];
  }
  get inputElement() {
    return this.hostElement.shadowRoot.querySelector('input');
  }
  get inputType() {
    const inputTypeMap = {
      text: 'text',
      tel: 'tel',
      phone: 'tel',
      numeric: 'tel',
      date: 'tel',
      number: 'number',
      password: 'password',
      search: 'search',
      email: 'email',
      button: 'button'
    };
    return inputTypeMap[this.type] ?? 'text';
  }
  get inputAriaLabel() {
    if (this.label)
      return null;
    return this.ariaLabel ?? null;
  }
  get hasErrors() {
    return Array.isArray(this.errors) && this.errors.length > 0;
  }
  get messages() {
    if (this.hasErrors) {
      return this.errors;
    }
    const hasHints = Array.isArray(this.hints) && this.hints.length > 0;
    if (hasHints) {
      return this.hints;
    }
    return;
  }
  get showMessages() {
    return (Array.isArray(this.messages) &&
      this.messages.length > 0 &&
      !this.suppressMessages);
  }
  get messageContainer() {
    return this.hostElement.shadowRoot.querySelector('.message-container');
  }
  get messageContainerHeight() {
    const height = this.hostElement.shadowRoot
      .querySelector('.message-container protean-message')
      .getBoundingClientRect().height;
    return `${height}px`;
  }
  get ariaRequired() {
    if (this.ariaHasPopup === 'listbox')
      return null;
    return `${!this.optional}`;
  }
  defaultChangeHandler(event) {
    if (!this.hostElement.onchange) {
      this.value = event.detail.value;
    }
  }
  reformatValue() {
    this.formattedValueObject = this.getFormattedValueObj(this.value, true);
    this.inputElement.value = this.formattedValueObject.formattedValue;
  }
  onMessageUpdate() {
    if (this.isFocused) {
      this.scheduledAfterRender.push(() => {
        this.setMessagesHeight();
      });
    }
  }
  setMessagesHeight() {
    if (this.showMessages) {
      this.messageContainer.style.height = this.messageContainerHeight;
    }
  }
  getFormattedValueObj(value = '', explicit = false) {
    const formattingFnMap = {
      phone: formatPhoneNumber,
      date: formatDate,
      numeric: formatNumeric,
    };
    const formattingFn = formattingFnMap[this.type];
    return (formattingFn?.(value, this.format, explicit) ?? {
      value,
      formattedValue: value,
    });
  }
  calculateCursorPositionOnInput() {
    const inputElement = this.inputElement;
    const formattedValueLength = this.formattedValueObject.formattedValue
      .length;
    return {
      startingPosition: inputElement.selectionStart ?? formattedValueLength,
      valueLength: formattedValueLength,
      previousValueLength: inputElement.value.length,
      hasSelection: false,
    };
  }
  setCursorPosition() {
    if (!this.cursorData.hasSelection) {
      const inputElement = this.inputElement;
      const { valueLength, previousValueLength, startingPosition, } = this.cursorData;
      const cursorPosition = startingPosition + (valueLength - previousValueLength);
      inputElement.setSelectionRange(cursorPosition, cursorPosition);
    }
  }
  render() {
    return (h("div", { class: "input-wrapper" },
      h("div", { class: `input-container ${this.hasErrors ? 'has-error' : ''}` },
        this.label && (h("label", { htmlFor: this.inputId, onClick: this.onLabelClick },
          this.hasErrors && (h("protean-icon", { type: "status-error-filled", class: "error-icon" })),
          this.label,
          this.optional && (h("span", { class: "optional-tag" }, " (optional)")))),
        h("input", { id: this.inputId, type: this.inputType, disabled: this.disabled, readOnly: this.readonly, role: this.ariaRole, "aria-required": this.ariaRequired, "aria-label": this.inputAriaLabel, "aria-invalid": `${this.hasErrors}`, "aria-describedby": this.descriptionId, "aria-haspopup": this.ariaHasPopup, "aria-expanded": this.ariaExpanded === undefined
            ? null
            : `${this.ariaExpanded}`, onChange: this.onInputChange, onInput: this.onInputInput, onFocus: this.onInputFocus, onBlur: this.onInputBlur })),
      this.renderMessages()));
  }
  renderMessages() {
    return (h("div", { class: "message-container" },
      h("protean-message", { type: this.hasErrors ? 'error' : 'info', level: "status", variant: "inline" },
        h("ul", { id: this.descriptionId }, this.showMessages &&
          this.messages.map(message => h("li", null, message))))));
  }
  static get is() { return "protean-input"; }
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
      "reflect": true,
      "defaultValue": "false"
    },
    "maxlength": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "maxlength",
      "reflect": true
    },
    "format": {
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
      "attribute": "format",
      "reflect": true
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
    "hints": {
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
    },
    "suppressMessages": {
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
      "attribute": "suppress-messages",
      "reflect": true
    },
    "readonly": {
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
      "attribute": "readonly",
      "reflect": true,
      "defaultValue": "false"
    },
    "ariaRole": {
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
      "attribute": "aria-role",
      "reflect": false
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
    "ariaHasPopup": {
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
      "attribute": "aria-has-popup",
      "reflect": false
    },
    "ariaExpanded": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean | undefined",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "aria-expanded",
      "reflect": false
    }
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
        "original": "FormattedValue",
        "resolved": "FormattedValue",
        "references": {
          "FormattedValue": {
            "location": "import",
            "path": "@/utils/formatting/types"
          }
        }
      }
    }, {
      "method": "input",
      "name": "input",
      "bubbles": false,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "FormattedValue",
        "resolved": "FormattedValue",
        "references": {
          "FormattedValue": {
            "location": "import",
            "path": "@/utils/formatting/types"
          }
        }
      }
    }]; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "reformatValue"
    }, {
      "propName": "type",
      "methodName": "reformatValue"
    }, {
      "propName": "format",
      "methodName": "reformatValue"
    }, {
      "propName": "hints",
      "methodName": "onMessageUpdate"
    }, {
      "propName": "errors",
      "methodName": "onMessageUpdate"
    }]; }
  static get listeners() { return [{
      "name": "change",
      "method": "defaultChangeHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
