import { Component, Element, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'protean-click-elsewhere',
    shadow: false,
})
export class ProteanClickElsewhere {
    isCurrentlyFocused = false;

    eventList = ['mousedown', 'dragstart', 'touchstart'];

    @Element() hostElement;

    @Event({ eventName: 'change', bubbles: false })
    change: EventEmitter;

    connectedCallback(): void {
        this.eventList.forEach((eventName: string) => {
            document.addEventListener(eventName, this.handler);
        });
    }

    disconnectedCallback(): void {
        this.eventList.forEach((eventName: string) => {
            document.removeEventListener(eventName, this.handler);
        });
    }

    handler = (event: MouseEvent): void => {
        const isCurrentlyFocused = this.shadowContains(
            this.findActiveElement(),
        );
        const aboutToBeFocused =
            this.shadowContains(this.shadowEventTarget(event)) ||
            this.originatesInSlots(event.target);

        if (
            !aboutToBeFocused &&
            (this.isCurrentlyFocused || isCurrentlyFocused)
        ) {
            this.isCurrentlyFocused = false;
            this.change.emit();
            return;
        }

        this.isCurrentlyFocused = aboutToBeFocused;
    };

    findActiveElement(element = document.activeElement): Element {
        return element.shadowRoot
            ? this.findActiveElement(element.shadowRoot.activeElement)
            : element;
    }

    shadowEventTarget(event: Event): EventTarget {
        return event.composedPath()[0] ?? event.target;
    }

    shadowContains(element: EventTarget): boolean {
        return (
            element === this.hostElement ||
            (element !== undefined &&
                this.shadowContains(
                    (element as HTMLElement).parentNode ||
                        (element as ShadowRoot).host,
                ))
        );
    }

    originatesInSlots(node: EventTarget): boolean {
        const slots = this.hostElement.querySelectorAll('slot');
        for (let i = 0; i < slots.length; i++) {
            const slot = slots[i];
            const nodes = slot.assignedNodes();

            for (let nodeIndex = 0; nodeIndex < nodes.length; nodeIndex++) {
                if (nodes[nodeIndex].contains(node)) return true;
            }
        }
        return false;
    }
}
