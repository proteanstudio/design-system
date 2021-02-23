export default async function dispatchEvent(page, selector, eventName, eventInit) {
  let parentSelector = selector;
  let childSelectors;
  if (Array.isArray(selector)) {
    [parentSelector, ...childSelectors] = selector;
    childSelectors = childSelectors.join(' ');
  }
  await page.$eval(parentSelector, (element, childSelectors, eventName, eventInit) => {
    const eventConstructorMap = {
      keyup: KeyboardEvent,
      keydown: KeyboardEvent,
      change: CustomEvent,
      input: CustomEvent,
      blur: FocusEvent,
      focus: FocusEvent,
      mousedown: MouseEvent,
    };
    const EventConstructor = eventConstructorMap[eventName] ?? CustomEvent;
    const elementToDispatch = childSelectors
      ? element.shadowRoot.querySelector(childSelectors)
      : element;
    const event = new EventConstructor(eventName, eventInit);
    elementToDispatch.dispatchEvent(event);
  }, childSelectors, eventName, eventInit);
  await page.waitForChanges();
}
