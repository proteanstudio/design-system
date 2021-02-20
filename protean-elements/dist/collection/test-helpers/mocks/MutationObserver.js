export default function fakeMutationObserver() {
  const origMutationObserver = global.MutationObserver;
  function restoreMutationObserver() {
    global.MutationObserver = origMutationObserver;
  }
  /* eslint-disable */
  global.MutationObserver = class {
    /* eslint enable */
    constructor(observer) {
      this.observer = observer;
    }
    observe( /* element: Node, options: MutationObserverInit */) {
      /*  */
    }
    disconnect() {
      /*  */
    }
  };
  return restoreMutationObserver;
}
