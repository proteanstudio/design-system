export default function fakeMutationObserver(): () => void {
    const origMutationObserver = global.MutationObserver;
    function restoreMutationObserver() {
        global.MutationObserver = origMutationObserver;
    }

    (global as any).MutationObserver = class {
        constructor(observer: () => void) {
            this.observer = observer;
        }

        observer: () => void;

        observe(element: Node, options: MutationObserverInit) {}

        disconnect() {}
    };

    return restoreMutationObserver;
}
