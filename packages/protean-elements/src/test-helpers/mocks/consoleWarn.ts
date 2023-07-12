export default function fakeConsoleWarn(): VoidFunction {
    const origConsoleWarn = global.console.warn;
    global.console.warn = jest.fn().mockImplementation(message => {
        if (
            !message.includes(
                'is immutable but was modified from within the component',
            )
        ) {
            return origConsoleWarn(message);
        }
    });

    function restoreConsoleWarn() {
        global.console.warn = origConsoleWarn;
    }

    return restoreConsoleWarn;
}
