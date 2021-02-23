import { r as registerInstance, h, g as getElement, c as createEvent } from './index-e0b8d77a.js';

const stylesCss = "*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:inline-block}:host([disabled]) button{cursor:not-allowed;opacity:0.4}button{color:inherit;cursor:pointer;height:var(--touch-zone-size, 42px);transition:background-color 0.2s ease-in-out, color 0.2s ease-in-out,\n        border 0.2s ease-in-out}button>div{display:flex;align-items:center;justify-content:center}:host([variant='primary']) button,:host([variant='secondary']) button{padding:0 1rem;border:2px solid;border-radius:2px;font-weight:600;font-size:0.875rem}:host([variant='primary']) button{background-color:var(--protean-button-primary-background-color, #ff5f40);color:var(--protean-button-primary-text-color, #000000);border-color:var(--protean-button-primary-border-color, transparent)}:host([variant='secondary']) button{background-color:var(\n        --protean-button-secondary-background-color,\n        transparent\n    );color:var(--protean-button-secondary-text-color, inherit);border-color:var(--protean-button-secondary-border-color, #ff5f40)}:host(:not([disabled])[variant='primary']) button:hover,:host(:not([disabled])[variant='primary']) button:focus{background-color:var(\n        --protean-button-primary-hover-background-color,\n        #f83e19\n    );color:var(--protean-button-primary-hover-text-color, #000000);border-color:var(--protean-button-primary-hover-border-color, transparent)}:host(:not([disabled])[variant='secondary']) button:hover,:host(:not([disabled])[variant='secondary']) button:focus{background-color:var(\n        --protean-button-secondary-hover-background-color,\n        #f83e19\n    );color:var(--protean-button-secondary-hover-text-color, #000000);border-color:var(\n        --protean-button-secondary-hover-border-color,\n        transparent\n    )}:host([variant='icon']) button{width:var(--touch-zone-size);background-color:var(--protean-button-icon-background-color);--protean-icon-stroke-primary:var(--protean-button-icon-stroke-color)}:host(:not([disabled])[variant='icon']) button:hover,:host(:not([disabled])[variant='icon']) button:focus{background-color:var(--protean-button-icon-hover-background-color);--protean-icon-hover-stroke-primary:var(\n        --protean-button-icon-stroke-color\n    )}";

const ProteanButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  delegateFocus(event) {
    if (event.target === this.hostElement) {
      this.hostElement.shadowRoot.querySelector('button').focus();
    }
  }
  render() {
    return (h("button", { type: this.type ?? 'button', disabled: this.disabled, "aria-label": this.ariaLabel }, h("div", null, h("slot", null))));
  }
  get hostElement() { return getElement(this); }
};
ProteanButton.style = stylesCss;

let guid = 1000;
function createGuid() {
  return guid++;
}

const stylesCss$1 = "*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:block;margin:1rem}:host([disabled]) label{cursor:not-allowed;opacity:0.5}label{display:flex;align-items:center;cursor:pointer;min-height:24px}:host([alignment='right']) label{flex-direction:row-reverse;justify-content:flex-end}.checkbox-symbol{flex:0 0 24px;margin-right:0.625rem;stroke-linecap:round;stroke-linejoin:round}:host([alignment='right']) .checkbox-symbol{margin-left:0.625rem;margin-right:0}input:focus+label .checkbox-symbol{outline:auto}.checkbox-outline{fill:transparent;stroke:var(--action-color);stroke-width:2;transition:fill 0.2s ease-in-out}:host([checked]) .checkbox-outline,:host([indeterminate]) .checkbox-outline{fill:var(--action-color)}.checkbox-fill{stroke:var(--action-contrast-color);fill:none;stroke-width:3}:host([variant='toggle']) .checkbox-symbol{flex-basis:45px;border-radius:10px}.toggle-path{stroke:var(--protean-checkbox-toggle-path-color);stroke-width:20;fill:none;transition:stroke 0.2s ease-in-out}:host([checked]) .toggle-path{stroke:var(--action-color)}.toggle-fill{fill:var(--action-contrast-color);stroke:none;transition:transform 0.2s ease-in-out}:host([checked]) .toggle-fill{transform:translateX(25px)}.label-text{flex:1 0}";

const ProteanCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.change = createEvent(this, "change", 7);
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
    return (h("div", { class: "checkbox-container" }, h("input", { class: "sr", type: "checkbox", id: this.checkboxId, "aria-label": this.checkboxAriaLabel, disabled: this.disabled, checked: this.checked || this.indeterminate, onChange: this.onCheckboxChange }), h("label", { htmlFor: this.checkboxId, class: `alignment-${this.checkboxAlignment}` }, this.renderSymbol(), !!this.label && (h("span", { class: "label-text" }, this.label)))));
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
    return (h("svg", { class: "checkbox-symbol standard", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", focusable: "false", "aria-hidden": "true" }, h("rect", { class: "checkbox-outline", x: "1", y: "1", width: "22", height: "22", rx: "2" }), this.renderStandardFill()));
  }
  renderToggle() {
    return (h("svg", { class: "checkbox-symbol toggle", viewBox: "0 0 45 20", version: "1.1", xmlns: "http://www.w3.org/2000/svg", focusable: "false", "aria-hidden": "true" }, h("line", { class: "toggle-path", x1: "10", y1: "10", x2: "35", y2: "10" }), h("circle", { class: "toggle-fill", cx: "10", cy: "10", r: "8" })));
  }
  renderSymbol() {
    if (this.variant === 'toggle') {
      return this.renderToggle();
    }
    return this.renderStandard();
  }
  get hostElement() { return getElement(this); }
};
ProteanCheckbox.style = stylesCss$1;

const ProteanClickElsewhere = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.change = createEvent(this, "change", 3);
    this.isCurrentlyFocused = false;
    this.eventList = ['mousedown', 'dragstart', 'touchstart'];
    this.handler = (event) => {
      const isCurrentlyFocused = this.shadowContains(this.findActiveElement());
      const aboutToBeFocused = this.shadowContains(this.shadowEventTarget(event)) ||
        this.originatesInSlots(event.target);
      if (!aboutToBeFocused &&
        (this.isCurrentlyFocused || isCurrentlyFocused)) {
        this.isCurrentlyFocused = false;
        this.change.emit();
        return;
      }
      this.isCurrentlyFocused = aboutToBeFocused;
    };
  }
  connectedCallback() {
    this.eventList.forEach((eventName) => {
      document.addEventListener(eventName, this.handler);
    });
  }
  disconnectedCallback() {
    this.eventList.forEach((eventName) => {
      document.removeEventListener(eventName, this.handler);
    });
  }
  findActiveElement(element = document.activeElement) {
    return element.shadowRoot
      ? this.findActiveElement(element.shadowRoot.activeElement)
      : element;
  }
  shadowEventTarget(event) {
    return event.composedPath()[0] ?? event.target;
  }
  shadowContains(element) {
    return (element === this.hostElement ||
      (element !== undefined &&
        this.shadowContains(element.parentNode ||
          element.host)));
  }
  originatesInSlots(node) {
    const slots = this.hostElement.querySelectorAll('slot');
    for (let i = 0; i < slots.length; i++) {
      const slot = slots[i];
      const nodes = slot.assignedNodes();
      for (let nodeIndex = 0; nodeIndex < nodes.length; nodeIndex++) {
        if (nodes[nodeIndex].contains(node))
          return true;
      }
    }
    return false;
  }
  get hostElement() { return getElement(this); }
};

const reusableIcons = {
  error(modifier = '') {
    return (h("g", { transform: "translate(0 -1)" },
      h("path", { class: `stroke-primary ${modifier}`, d: "M13.576 3.163L22.71 21.43a1.768 1.768 0 01-1.581 2.559H2.86a1.768 1.768 0 01-1.581-2.56l9.133-18.266a1.768 1.768 0 013.163 0z" }),
      h("path", { class: "fill-secondary", d: "M12 7.583a.877.877 0 01.876.916l-.345 7.748a.526.526 0 01-1.052 0L11.125 8.5A.876.876 0 0112 7.583z" }),
      h("circle", { cx: "12", cy: "19.5", r: "1", class: "fill-secondary" })));
  },
  info(modifier = '') {
    return (h("g", { transform: "translate(1 1)" },
      h("circle", { cx: "11", cy: "11", r: "10.5", class: `stroke-primary ${modifier}` }),
      h("path", { class: "fill-secondary", d: "M11.083 9.167h.834V15.5a1 1 0 01-1 1h-.834v-6.333a1 1 0 011-1z" }),
      h("circle", { class: "fill-secondary", cx: "11", cy: "6.417", r: "1" })));
  },
  success(modifier = '') {
    return (h("g", { transform: "translate(1 1)" },
      h("circle", { class: `stroke-primary ${modifier}`, cx: "11", cy: "11", r: "10.5" }),
      h("path", { class: "stroke-secondary", d: "M5.5 11.828L9.314 15.5 16.5 6.333" })));
  },
  warning(modifier = '') {
    return (h("g", { transform: "translate(1 1)" },
      h("circle", { cx: "11", cy: "11", r: "10.5", class: `stroke-primary ${modifier}` }),
      h("path", { class: "fill-secondary", d: "M11 4.583a.877.877 0 01.876.916l-.345 7.748a.526.526 0 01-1.052 0L10.125 5.5A.876.876 0 0111 4.583z" }),
      h("circle", { class: "fill-secondary", cx: "11", cy: "16.5", r: "1" })));
  },
};
const icons = {
  checkmark: {
    markup: () => (h("path", { class: "stroke-primary", d: "M5.5 11.828L9.314 15.5 16.5 6.333" })),
  },
  'chevron-down': {
    markup: () => (h("path", { class: "stroke-primary", d: "M2.003 7.5L12 16l10-8.5" })),
  },
  'chevron-left': {
    markup: () => (h("path", { class: "stroke-primary", d: "M16.251 1.752l-8.5 9.997 8.5 10" })),
  },
  'chevron-right': {
    markup: () => (h("path", { class: "stroke-primary", d: "M7.751 21.748l8.5-9.997-8.5-10" })),
  },
  'chevron-up': {
    markup: () => (h("path", { class: "stroke-primary", d: "M2.003 16L12 7.5 22 16" })),
  },
  clipboard: {
    markup: () => (h("g", { class: "stroke-primary" },
      h("path", { d: "M7.441 16.706h4.706M7.441 13.765h8.235M7.441 10.824h8.235" }),
      h("path", { d: "M16.323 5.53h1.118c.65 0 1.177.46 1.177 1.029V20.97c0 .568-.527 1.029-1.177 1.029H5.676c-.65 0-1.176-.46-1.176-1.03V6.56c0-.569.527-1.03 1.176-1.03h1.197" }),
      h("path", { d: "M11.559 2c1.3 0 2.353 1.053 2.353 2.353h2.059c.162 0 .294.132.294.294V7a.294.294 0 01-.294.294H7.147A.294.294 0 016.853 7V4.647c0-.162.132-.294.294-.294h2.059c0-1.3 1.053-2.353 2.353-2.353z" }))),
  },
  menu: {
    markup: () => (h("path", { class: "stroke-primary", d: "M1.5 12.5h21M1.5 18.5h21M1.5 6.5h21" })),
  },
  'status-error': {
    markup: () => reusableIcons['error'](),
  },
  'status-error-filled': {
    markup: () => reusableIcons['error']('fill-primary'),
  },
  'status-info': {
    markup: () => reusableIcons['info'](),
  },
  'status-info-filled': {
    markup: () => reusableIcons['info']('fill-primary'),
  },
  'status-success': {
    markup: () => reusableIcons['success'](),
  },
  'status-success-filled': {
    markup: () => reusableIcons['success']('fill-primary'),
  },
  'status-warning': {
    markup: () => reusableIcons['warning'](),
  },
  'status-warning-filled': {
    markup: () => reusableIcons['warning']('fill-primary'),
  },
};

const stylesCss$2 = ":host{width:24px;height:24px;display:inline-block}svg{fill:none;stroke-linecap:var(--protean-icon-stroke-linecap, round);stroke-linejoin:var(--protean-icon-stroke-linejoin, round);stroke-width:var(--protean-icon-stroke-width, 1.5)}.stroke-primary{stroke:var(--protean-icon-stroke-primary, currentColor)}.stroke-secondary{stroke:var(\n        --protean-icon-stroke-secondary,\n        var(--protean-icon-stroke-primary)\n    )}.fill-primary{fill:var(--protean-icon-fill-primary, none)}.fill-secondary{fill:var(--protean-icon-fill-secondary, var(--protean-icon-fill-primary))}:host([type='status-info']){--protean-icon-stroke-primary:var(--protean-status-info);--protean-icon-fill-secondary:var(--protean-status-info)}:host([type='status-info-filled']){--protean-icon-stroke-primary:var(--protean-status-info);--protean-icon-fill-primary:var(--protean-status-info);--protean-icon-fill-secondary:var(--protean-status-info-contrast)}:host([type='status-success']){--protean-icon-stroke-primary:var(--protean-status-success)}:host([type='status-success-filled']){--protean-icon-stroke-primary:var(--protean-status-success);--protean-icon-fill-primary:var(--protean-status-success);--protean-icon-stroke-secondary:var(--protean-status-success-contrast)}:host([type='status-warning']){--protean-icon-stroke-primary:var(--protean-status-warning);--protean-icon-fill-secondary:var(--protean-status-warning)}:host([type='status-warning-filled']){--protean-icon-stroke-primary:var(--protean-status-warning);--protean-icon-fill-primary:var(--protean-status-warning);--protean-icon-fill-secondary:var(--protean-status-warning-contrast)}:host([type='status-error']){--protean-icon-stroke-primary:var(--protean-status-error);--protean-icon-fill-secondary:var(--protean-status-error)}:host([type='status-error-filled']){--protean-icon-stroke-primary:var(--protean-status-error);--protean-icon-fill-primary:var(--protean-status-error);--protean-icon-fill-secondary:var(--protean-status-error-contrast)}";

const ProteanIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get icon() {
    if (this.type === 'custom' && !!this.use) {
      return h("use", { xlinkHref: this.use });
    }
    return icons[this.type]?.markup() ?? null;
  }
  render() {
    return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", focusable: "false", "aria-hidden": "true" }, this.icon));
  }
};
ProteanIcon.style = stylesCss$2;

function formatGeneric(value = '', format = '') {
  if (!value || !format) {
    return {
      value,
      formattedValue: value,
    };
  }
  const optionalValidatingCharacters = new Set(['@', '#']);
  const knownValidatingCharacters = new Set([
    'a',
    'A',
    '0',
    ...optionalValidatingCharacters,
  ]);
  const splitFormat = format.split('');
  let valueIndex = 0;
  const formattingCharacters = new Set(splitFormat.filter(char => !knownValidatingCharacters.has(char)));
  const formattedValueObj = splitFormat.reduce((acc, item) => {
    if (valueIndex >= value.length)
      return acc;
    if (optionalValidatingCharacters.has(item) &&
      formattingCharacters.has(value[valueIndex])) {
      return acc;
    }
    if (knownValidatingCharacters.has(item)) {
      const formattedChar = checkCharacter(item);
      if (formattedChar) {
        valueIndex++;
        return {
          value: `${acc.value}${formattedChar}`,
          formattedValue: `${acc.formattedValue}${formattedChar}`,
        };
      }
      return acc;
    }
    value[valueIndex].includes(item) && valueIndex++;
    return {
      value: acc.value,
      formattedValue: `${acc.formattedValue}${item}`,
    };
  }, { value: '', formattedValue: '' });
  return {
    value: formattedValueObj.value,
    formattedValue: formattedValueObj.formattedValue,
  };
  function checkCharacter(validatingCharacter) {
    if (valueIndex >= value.length)
      return '';
    let character = value[valueIndex];
    switch (validatingCharacter) {
      case 'a':
        character = character.replace(/[^a-zA-Z]+/g, '');
        break;
      case 'A':
        character = character.replace(/[^A-Z]+/g, '');
        break;
      case '0':
        character = character.replace(/[^\d]/g, '');
        break;
      case '@':
        character = character.replace(/[^\da-zA-Z]+/g, '');
        break;
      case '#':
        character = character.replace(/[^\d]/g, '');
        break;
    }
    if (character) {
      return character;
    }
    valueIndex++;
    return checkCharacter(validatingCharacter);
  }
}

const formats = {
  'MM/DD/YYYY': '00/00/0000',
  'M/D/YYYY': '0#/0#/0000',
  'MM/DD/YY': '00/00/00',
  'M/D/YY': '0#/0#/00',
  'MM/YY': '00/00',
  'M/YY': '0#/00',
};
function formatDate(value, format = 'MM/DD/YYYY') {
  const fmt = formats[format] ?? formats['MM/DD/YYYY'];
  return formatGeneric(value, fmt);
}

function formatNumber(value = '', options = {
  decimals: 0,
}, explicit = false) {
  const decimals = options?.decimals ?? 0;
  const thousandsSeparator = ',';
  const decimalSeparator = '.';
  let filteredValue = value;
  if (explicit) {
    filteredValue = value.replace(/[^\d.]/g, '');
    filteredValue = filteredValue
      ? Number(filteredValue).toFixed(decimals)
      : '';
  }
  filteredValue = filteredValue.replace(/[^\d]/g, '');
  const { integerString, decimalString } = splitValue(filteredValue, decimals);
  const formattedIntegerString = integerString.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
  const formattedDecimalString = decimals > 0 ? `${decimalSeparator}${decimalString}` : '';
  const valueString = `${integerString}${formattedDecimalString}`;
  const formattedValueString = `${formattedIntegerString}${formattedDecimalString}`;
  return { value: valueString, formattedValue: formattedValueString };
}
function splitValue(value, decimals) {
  const integerLength = value.length - decimals;
  let integerString = value
    .substring(0, integerLength)
    .padStart(decimals > 0 ? 1 : 0, '0');
  if (integerString.length > 1 && integerString[0] === '0') {
    integerString = integerString.substring(1);
  }
  const decimalString = value
    .substring(integerLength)
    .padStart(decimals, '0');
  return {
    integerString,
    decimalString,
  };
}

const formats$1 = {
  delimited: {
    decimals: 2,
  },
  dec: {
    decimals: 0,
  },
};
function formatNumeric(value, format = 'delimited', explicit = false) {
  if (format.includes('dec')) {
    const decimals = Number(format.replace('dec', ''));
    const formatObj = {
      ...formats$1.dec,
      decimals,
    };
    return formatNumber(value, formatObj, explicit);
  }
  const formatObj = formats$1[format] ?? formats$1['delimited'];
  return formatNumber(value, formatObj, explicit);
}

const formats$2 = {
  US: {
    format: '(000) 000-0000',
  },
};
function formatPhoneNumber(value, format = 'US') {
  const formatObj = formats$2[format] ?? formats$2['US'];
  return formatGeneric(value, formatObj.format);
}

const stylesCss$3 = "*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:block;margin:1rem}.input-wrapper{position:relative}.input-container{border:1px solid currentColor;border-radius:2px;flex-grow:1}:host([disabled]) .input-container{opacity:0.4}:host([disabled]) .input-container,:host([disabled]) label,:host([disabled]) input{cursor:not-allowed}.input-container:focus-within{outline:auto 1px}.input-container.has-error{border-color:var(--protean-status-error)}.error-icon{margin-right:0.25rem;height:1.25em;width:1.25em}label{display:flex;align-items:center;font-weight:400;padding:0.375rem 0.5rem 0.25rem;font-size:0.6875rem}.optional-tag{font-size:0.625rem;margin-left:0.25rem}input{height:30px;width:100%;padding:0 0.5rem;border:none;background-color:transparent;font-size:1rem;color:inherit;box-shadow:none;text-align:left}:host(:not([label])) input{height:56px}input:focus{outline:none}.message-container{position:absolute;top:calc(100% - 1px);width:100%;height:0;transition:height 0.2s ease-in-out;overflow:hidden;z-index:2;box-shadow:0 2px 4px rgba(0, 0, 0, 0.5)}.message-container protean-message{margin:0}.message-container ul{margin:0;padding:0 1rem}";

const ProteanInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.change = createEvent(this, "change", 3);
    this.input = createEvent(this, "input", 3);
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
      button: 'button',
    };
    return inputTypeMap[this.type] ?? 'text';
  }
  get inputAriaLabel() {
    if (this.label)
      return null;
    return this.ariaLabel ?? null;
  }
  get inputAriaRequired() {
    if (this.ariaHasPopup === 'listbox')
      return null;
    return `${!this.optional}`;
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
  defaultChangeHandler(event) {
    if (!this.hostElement.onchange) {
      this.value = event.detail.value;
    }
  }
  delegateFocus(event) {
    if (event.target === this.hostElement) {
      this.inputElement.focus();
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
    return (h("div", { class: "input-wrapper" }, h("div", { class: `input-container ${this.hasErrors ? 'has-error' : ''}` }, this.label && (h("label", { htmlFor: this.inputId, onClick: this.onLabelClick }, this.hasErrors && (h("protean-icon", { type: "status-error-filled", class: "error-icon" })), this.label, this.optional && (h("span", { class: "optional-tag" }, " (optional)")))), h("input", { id: this.inputId, type: this.inputType, disabled: this.disabled, readOnly: this.readonly, maxLength: this.maxlength, role: this.ariaRole, "aria-required": this.inputAriaRequired, "aria-label": this.inputAriaLabel, "aria-invalid": `${this.hasErrors}`, "aria-describedby": this.descriptionId, "aria-haspopup": this.ariaHasPopup, "aria-expanded": this.ariaExpanded === undefined
        ? null
        : `${this.ariaExpanded}`, onChange: this.onInputChange, onInput: this.onInputInput, onFocus: this.onInputFocus, onBlur: this.onInputBlur })), this.renderMessages()));
  }
  renderMessages() {
    return (h("div", { class: "message-container" }, h("protean-message", { type: this.hasErrors ? 'error' : 'info', level: "status", variant: "inline" }, h("ul", { id: this.descriptionId }, this.showMessages &&
      this.messages.map(message => h("li", null, message))))));
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "value": ["reformatValue"],
    "type": ["reformatValue"],
    "format": ["reformatValue"],
    "hints": ["onMessageUpdate"],
    "errors": ["onMessageUpdate"]
  }; }
};
ProteanInput.style = stylesCss$3;

const stylesCss$4 = "*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:block;margin:1rem 0}.message-container{--symbol-size:16px;--symbol-offset:-3px;--icon-offset:-12px;--status-color:#ffffff;--status-color:var(--info-color);background-color:var(--protean-message-background-color);color:var(--protean-message-text-color);border:1px solid var(--protean-message-border-color);border-radius:2px;position:relative;margin:calc(-1 * var(--icon-offset)) calc(-1 * var(--icon-offset))\n        calc(-1 * var(--symbol-offset));padding:var(--symbol-size) calc(-1 * var(--icon-offset))}:host([variant='inline']) .message-container{margin:0;border-color:var(--status-color)}.message-container.info{--status-color:var(--protean-status-info)}.message-container.success{--status-color:var(--protean-status-success)}.message-container.warning{--status-color:var(--protean-status-warning)}.message-container.error{--status-color:var(--protean-status-error)}.decorator{width:32px;height:32px;position:absolute;fill:var(--status-color)}.decorator.top{top:var(--symbol-offset);right:var(--symbol-offset);transform:rotate(270deg)}:host([variant='inline']) .decorator.top{top:0;right:0}.decorator.bottom{bottom:var(--symbol-offset);left:var(--symbol-offset);transform:rotate(90deg)}:host([variant='inline']) .decorator.bottom{bottom:0;left:0}protean-icon{position:absolute;top:var(--icon-offset);left:var(--icon-offset);font-weight:600;line-height:1}::slotted(ul){margin:0;padding:0.5rem 0 0.5rem 2rem}";

const ProteanMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
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
    return (h("div", { class: `message-container ${this.computedType}`, role: this.role }, !this.isInline && (h("protean-icon", { type: this.icon })), this.renderDecorator('top'), h("slot", null), this.renderDecorator('bottom')));
  }
  renderDecorator(cssClass) {
    return (h("svg", { class: `decorator ${cssClass}`, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 125 125", "aria-hidden": "true" }, h("path", { d: "M125 125V0l-16 16v94H15L0 125h125z" })));
  }
};
ProteanMessage.style = stylesCss$4;

const stylesCss$5 = "*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:block}.protean-optgroup-label{position:relative;z-index:1;top:0;display:flex;align-items:center;min-height:2.5rem;font-weight:500;background-color:var(--protean-dropdown-background-color)}.protean-optgroup-label::before{content:'';width:calc(100% - 30px);height:1px;position:absolute;top:50%;left:15px;background-color:var(--protean-optgroup-separator-color)}.protean-optgroup-label-text{display:inline-block;margin-left:1.5rem;padding:0 0.5rem;background-color:var(--protean-dropdown-background-color);position:relative;font-style:italic}:host([disabled]) .protean-optgroup-label-text span{opacity:0.4}";

const ProteanOptgroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { class: "protean-optgroup-container", role: "group", "aria-labelledby": this.labelId, "aria-disabled": `${this.disabled ?? false}` }, this.label && (h("div", { class: "protean-optgroup-label", id: this.labelId, role: "presentation" }, h("div", { class: "protean-optgroup-label-text" }, h("span", null, this.label)))), h("div", { class: "protean-optgroup-option-container" }, h("slot", null))));
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "disabled": ["propagateDisabledState"]
  }; }
};
ProteanOptgroup.style = stylesCss$5;

const stylesCss$6 = "*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:block}.protean-option-container{display:flex;min-height:42px;align-items:center;cursor:pointer;font-size:14px}:host([active]) .protean-option-container,.protean-option-container:hover,.protean-option-container:focus{background-color:var(--protean-dropdown-hover-background-color)}[aria-disabled='true']{opacity:0.4;cursor:not-allowed}.protean-option-selected{padding:0 5px;flex:0 0 34px}.protean-option-content{flex:0 1 auto}";

const ProteanOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get isDisabled() {
    return (this.disabled || this.disabledGroup) ?? false;
  }
  defaultClickHandler(event) {
    if (this.isDisabled) {
      event.stopImmediatePropagation();
    }
  }
  render() {
    return (h("div", { class: "protean-option-container", role: "option", "aria-selected": `${this.selected ?? false}`, "aria-disabled": `${this.isDisabled}` }, h("div", { class: "protean-option-selected" }, this.selected && (h("protean-icon", { type: "checkmark" }))), h("div", { class: "protean-option-content" }, h("slot", null))));
  }
};
ProteanOption.style = stylesCss$6;

const stylesCss$7 = "*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:block;margin:1rem}.select-container{display:block;position:relative}protean-input{margin:0;cursor:pointer}.protean-select-icon{position:absolute;right:0.75rem;bottom:0.25rem}:host([disabled]) .protean-select-icon{opacity:0.4;cursor:not-allowed}.protean-dropdown{position:absolute;z-index:2;top:calc(100% - 3px);width:100%;background-color:var(--protean-dropdown-background-color);color:var(--protean-dropdown-text-color);border-width:var(--protean-dropdown-border-width);border-style:solid;border-color:var(--protean-dropdown-border-color, currentColor);border-radius:0 0 2px 2px;box-shadow:var(--protean-dropdown-box-shadow);max-height:250px;overflow-y:scroll}.protean-select-separator{height:1px;width:calc(100% - 20px);margin:0 auto;position:relative;top:-2px;z-index:3;background-color:var(--protean-select-separator-color)}";

const ProteanSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.change = createEvent(this, "change", 3);
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
    return (h("protean-click-elsewhere", { onChange: this.onClickElsewhere, class: "select-container" }, h("protean-input", { value: this.displayValue, label: this.label, optional: this.optional, errors: this.errors, disabled: this.disabled, "suppress-messages": true, type: "button", ariaLabel: this.selectAriaLabel, ariaHasPopup: "listbox", ariaExpanded: this.dropdownOpen, onClick: this.onInputClick, onKeyDown: this.onInputKeyDown }), h("protean-icon", { class: "protean-select-icon", type: "chevron-down" }), h("div", { class: "protean-select-separator", hidden: !this.dropdownOpen }), this.renderDropdown()));
  }
  renderDropdown() {
    return (h("div", { class: "protean-select-dropdown protean-dropdown", role: "listbox", "aria-label": this.label, tabIndex: -1, "aria-required": `${!this.optional}`, "aria-multiselectable": `${this.multiple}`, "aria-activedescendant": this.activeOptionId, hidden: !this.dropdownOpen, onClick: this.onOptionClick }, h("slot", null)));
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "multiple": ["updateOptions"],
    "value": ["updateSingleOptions"],
    "selectedOptions": ["updateMultipleOptions"]
  }; }
};
ProteanSelect.style = stylesCss$7;

const stylesCss$8 = "*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:block}.tab-list{display:flex;align-items:center;overflow-x:auto;margin:0;padding:0;border-top:1px solid var(--protean-tab-container-border-color);list-style:none}.tab-list button{font-size:1.125rem;padding:1rem;text-decoration:none;color:inherit;transition:box-shadow 0.2s ease-in-out}.tab-list button[aria-selected='true']{box-shadow:inset var(--action-color) 0 5px}";

const ProteanTabContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.change = createEvent(this, "change", 3);
    this.name = '';
    this.guid = createGuid();
    this.updateTabData = () => {
      this.updateTabPanes();
      this.updateTabs();
    };
    this.updateTabPanes = () => {
      this.tabPanes.forEach((tab, index) => {
        tab.selected = tab.value === this.selectedValue;
        tab.guid = this.guid;
        tab.index = index;
      });
    };
    this.updateTabs = () => {
      this.tabs = Array.from(this.tabPanes).map(tab => {
        const { label, value, index } = tab;
        return {
          label,
          value,
          index,
        };
      });
    };
    this.onTabClick = (event) => {
      const value = event.target.dataset.value;
      if (value !== this.value) {
        this.change.emit({
          value,
        });
      }
    };
    this.onTabKeyup = (event) => {
      const currentValue = event.target.dataset.value;
      if (event.key === 'ArrowRight') {
        this.moveToAdjacentTab(currentValue, 'next');
        return;
      }
      if (event.key === 'ArrowLeft') {
        this.moveToAdjacentTab(currentValue, 'prev');
        return;
      }
    };
    this.buildTabControl = (tab) => {
      const selected = tab.value === this.selectedValue;
      return (h("button", { role: "tab", type: "button", "aria-selected": `${selected}`, tabIndex: selected ? 0 : -1, "data-value": tab.value, id: `tab-${this.guid}-${tab.index}`, onClick: this.onTabClick, onKeyUp: this.onTabKeyup }, tab.label));
    };
  }
  get tabPanes() {
    return this.hostElement.querySelectorAll(`protean-tab-pane[name="${this.name}"]`);
  }
  get selectedValue() {
    const isValidValue = this.tabs?.some(tab => tab.value === this.value) ?? true;
    return isValidValue ? this.value : this.tabs[0]?.value ?? '';
  }
  defaultChangeHandler(event) {
    if (event.target === this.hostElement && !this.hostElement.onchange) {
      this.value = event.detail.value;
      this.focusActiveTab();
    }
  }
  connectedCallback() {
    const observer = new MutationObserver(this.updateTabData);
    observer.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
    });
    this.updateTabData();
    this.observer = observer;
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  moveToAdjacentTab(currentValue, direction) {
    const currentIndex = this.tabs
      .map(tab => tab.value)
      .indexOf(currentValue);
    let nextIndex = currentIndex;
    if (direction === 'next') {
      if (currentIndex < this.tabs.length - 1) {
        nextIndex++;
      }
      else {
        nextIndex = 0;
      }
    }
    else {
      if (currentIndex > 0) {
        nextIndex--;
      }
      else {
        nextIndex = this.tabs.length - 1;
      }
    }
    const value = this.tabs[nextIndex].value;
    this.change.emit({ value });
  }
  focusActiveTab() {
    this.hostElement.shadowRoot
      .querySelector(`button[data-value="${this.selectedValue}"]`)
      .focus();
  }
  render() {
    return (h("div", { class: "tab-container" }, h("div", { class: "tab-list", role: "tablist" }, this.tabs.length > 1 &&
      this.tabs.map(this.buildTabControl)), h("div", { class: "tab-content" }, h("slot", null))));
  }
  get hostElement() { return getElement(this); }
};
ProteanTabContainer.style = stylesCss$8;

const stylesCss$9 = "*{box-sizing:border-box}input,button{font-family:inherit;font-size:inherit}button{cursor:pointer;background:none;border:none}:host(.sr),:host(.sr) button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sr,.sr button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.hidden{display:none}:host([hidden]){display:none}.invisible{visibility:hidden}:host{display:block}.tab-pane{padding:1rem}";

const ProteanTabPane = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = '';
  }
  render() {
    return (h("div", { class: "tab-pane", role: "tabpanel", id: `tab-pane-${this.guid}-${this.index}`, "aria-label": this.label, tabIndex: 0, hidden: !this.selected }, h("slot", null)));
  }
};
ProteanTabPane.style = stylesCss$9;

export { ProteanButton as protean_button, ProteanCheckbox as protean_checkbox, ProteanClickElsewhere as protean_click_elsewhere, ProteanIcon as protean_icon, ProteanInput as protean_input, ProteanMessage as protean_message, ProteanOptgroup as protean_optgroup, ProteanOption as protean_option, ProteanSelect as protean_select, ProteanTabContainer as protean_tab_container, ProteanTabPane as protean_tab_pane };
