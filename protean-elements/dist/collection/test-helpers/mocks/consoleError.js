export default function fakeConsoleError(errorFn = jest.fn()) {
  const origConsoleError = global.console.error;
  global.console.error = errorFn;
  function restoreConsoleError() {
    global.console.error = origConsoleError;
  }
  return restoreConsoleError;
}
