import { Component, Element, Event } from '@stencil/core';
export class ProteanClickElsewhere {
  constructor() {
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
  static get is() { return "protean-click-elsewhere"; }
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
}
