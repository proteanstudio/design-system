export default function suppressConsoleMethod(method = 'error', replacementFn = jest.fn()) {
  const origMethod = console[method];
  function restoreMethod() {
    global.console[method] = origMethod;
  }
  global.console[method] = replacementFn;
  return restoreMethod;
}
