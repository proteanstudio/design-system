import { E2EPage } from '@stencil/core/testing';

export default async function dispatchEvent(
    page: E2EPage,
    selector: string | string[],
    eventName: string,
    eventInit?: EventInit,
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
            const elementToDispatch = childSelectors
                ? element.shadowRoot.querySelector(childSelectors)
                : element;

            const event = new Event(eventName, eventInit);
            elementToDispatch.dispatchEvent(event);
        },
        childSelectors,
        eventName,
        eventInit,
    );

    await page.waitForChanges();
}
