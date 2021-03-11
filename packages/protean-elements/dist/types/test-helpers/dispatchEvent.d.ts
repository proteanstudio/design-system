import { E2EPage } from '@stencil/core/testing';
export default function dispatchEvent(page: E2EPage, selector: string | string[], eventName: string, eventInit?: EventInit | CustomEventInit | KeyboardEventInit): Promise<void>;
