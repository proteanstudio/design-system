export default function fakeConsoleError(errorFn = jest.fn()): VoidFunction {
    const origConsoleError = global.console.error;
    global.console.error = errorFn;

    function restoreConsoleError() {
        global.console.error = origConsoleError;
    }

    return restoreConsoleError;
}
