export default function debounce(
    fn: VoidFunction,
    threshold = 100,
): VoidFunction {
    let timeout: number;

    return function (): void {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn();
        }, threshold);
    };
}
