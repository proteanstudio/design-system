export default function fakeMutationObserver(): () => void {
    const origMutationObserver = global.MutationObserver;
    function restoreMutationObserver() {
        global.MutationObserver = origMutationObserver;
    }

    /* eslint-disable */
    (global as any).MutationObserver = class {
        /* eslint enable */
        constructor(observer: () => void) {
            this.observer = observer;
        }

        observer: () => void;

        observe(/* element: Node, options: MutationObserverInit */) {
            /*  */
        }

        disconnect() {
            /*  */
        }
    };

    return restoreMutationObserver;
}
