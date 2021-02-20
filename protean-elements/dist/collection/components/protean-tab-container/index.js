import { Component, Prop, h, //eslint-disable-line
Element, State, Event, Listen, } from '@stencil/core';
import { createGuid } from '@/utils/utils';
export class ProteanTabContainer {
  constructor() {
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
    return (h("div", { class: "tab-container" },
      h("div", { class: "tab-list", role: "tablist" }, this.tabs.length > 1 &&
        this.tabs.map(this.buildTabControl)),
      h("div", { class: "tab-content" },
        h("slot", null))));
  }
  static get is() { return "protean-tab-container"; }
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
      "reflect": true
    },
    "name": {
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
      "attribute": "name",
      "reflect": true,
      "defaultValue": "''"
    }
  }; }
  static get states() { return {
    "tabs": {}
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
  static get listeners() { return [{
      "name": "change",
      "method": "defaultChangeHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
