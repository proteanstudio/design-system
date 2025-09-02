export default function debounce(
    fn: VoidFunction,
    threshold = 100,
): VoidFunction {
    let timeout: NodeJS.Timeout;

    return function (): void {
        clearTimeout(timeout);
        timeout = setTimeout(fn, threshold);
    };
}
