import { E2EPage } from '@stencil/core/testing';

export default async function dispatchEvent(
    page: E2EPage,
    selector: string | string[],
    eventName: string,
    eventInit?: EventInit | CustomEventInit | KeyboardEventInit,
): Promise<void> {
    let parentSelector = selector;
    let childSelectors;
    if (Array.isArray(selector)) {
        [parentSelector, ...childSelectors] = selector;
        childSelectors = childSelectors.join(' ');
    }

    await page.$eval(
        parentSelector as string,
        (
            element: Element,
            childSelectors: string,
            eventName: string,
            eventInit: EventInit,
        ) => {
            const eventConstructorMap = {
                keyup: KeyboardEvent,
                keydown: KeyboardEvent,
                change: CustomEvent,
                input: CustomEvent,
                blur: FocusEvent,
                focus: FocusEvent,
                mousedown: MouseEvent,
            };

            const EventConstructor =
                eventConstructorMap[eventName] ?? CustomEvent;

            const elementToDispatch = childSelectors
                ? element.shadowRoot.querySelector(childSelectors)
                : element;

            const event = new EventConstructor(eventName, eventInit);
            elementToDispatch.dispatchEvent(event);
        },
        childSelectors,
        eventName,
        eventInit,
    );

    await page.waitForChanges();
}
