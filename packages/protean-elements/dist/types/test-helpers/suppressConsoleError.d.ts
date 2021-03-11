/// <reference types="jest" />
export default function suppressConsoleMethod(method?: string, replacementFn?: jest.Mock<any, any>): VoidFunction;
