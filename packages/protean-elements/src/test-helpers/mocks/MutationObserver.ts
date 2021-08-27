export default function fakeMutationObserver(): VoidFunction {
    const origMutationObserver = global.MutationObserver;
    function restoreMutationObserver() {
        global.MutationObserver = origMutationObserver;
    }

    /* eslint-disable */
    (global as any).MutationObserver = class {
        /* eslint-enable */
        constructor(observer: VoidFunction) {
            this.observer = observer;
        }

        observer: VoidFunction;

        observe(/* element: Node, options: MutationObserverInit */) {
            /*  */
        }

        disconnect() {
            /*  */
        }
    };

    return restoreMutationObserver;
}
