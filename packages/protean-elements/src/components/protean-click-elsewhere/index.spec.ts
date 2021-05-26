import fakeMutationObserver from '@/test-helpers/mocks/MutationObserver';
import { newSpecPage } from '@stencil/core/testing';
import { ProteanClickElsewhere } from '.';
import { ProteanButton } from '../protean-button';
import { ProteanIcon } from '../protean-icon';
import { ProteanInput } from '../protean-input';
import { ProteanSelect } from '../protean-select';

describe('protean-click-elsewhere', () => {
    it('renders with set values', async () => {
        const { root, rootInstance } = await newSpecPage({
            components: [ProteanClickElsewhere],
            html: '<protean-click-elsewhere>Slotted Content</protean-click-elsewhere>',
        });

        expect(rootInstance.hostElement).toEqual(root);
        expect(rootInstance.isCurrentlyFocused).toEqual(false);
        expect(rootInstance.eventList).toEqual([
            'mousedown',
            'dragstart',
            'touchstart',
        ]);
    });

    it('adds document listeners on connectedCallback', async () => {
        const rootInstance = new ProteanClickElsewhere();

        const addEventListenerMock = jest.fn();
        const origAddEventListener = global.document.addEventListener;
        global.document.addEventListener = addEventListenerMock;

        rootInstance.connectedCallback();

        expect(addEventListenerMock).toHaveBeenCalledTimes(3);
        expect(addEventListenerMock).toHaveBeenNthCalledWith(
            1,
            'mousedown',
            rootInstance.handler,
        );
        expect(addEventListenerMock).toHaveBeenNthCalledWith(
            2,
            'dragstart',
            rootInstance.handler,
        );
        expect(addEventListenerMock).toHaveBeenNthCalledWith(
            3,
            'touchstart',
            rootInstance.handler,
        );

        global.document.addEventListener = origAddEventListener;
    });

    it('removes document listeners on connectedCallback', async () => {
        const rootInstance = new ProteanClickElsewhere();

        const removeEventListenerMock = jest.fn();
        const origRemoveEventListener = global.document.removeEventListener;
        global.document.removeEventListener = removeEventListenerMock;

        rootInstance.disconnectedCallback();

        expect(removeEventListenerMock).toHaveBeenCalledTimes(3);
        expect(removeEventListenerMock).toHaveBeenNthCalledWith(
            1,
            'mousedown',
            rootInstance.handler,
        );
        expect(removeEventListenerMock).toHaveBeenNthCalledWith(
            2,
            'dragstart',
            rootInstance.handler,
        );
        expect(removeEventListenerMock).toHaveBeenNthCalledWith(
            3,
            'touchstart',
            rootInstance.handler,
        );

        global.document.removeEventListener = origRemoveEventListener;
    });

    it('recursively finds active element', async () => {
        const restoreMutationObserver = fakeMutationObserver();

        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanClickElsewhere,
                ProteanSelect,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-click-elsewhere><protean-select></protean-select><button>External focus point</button></protean-click-elsewhere>',
        });

        const select = root.querySelector('protean-select');
        const proteanInput = select.shadowRoot.querySelector('protean-input');
        const input = proteanInput.shadowRoot.querySelector('input');

        /* eslint-disable */
        (document.activeElement as any) = select;
        (select.shadowRoot.activeElement as any) = proteanInput;
        (proteanInput.shadowRoot.activeElement as any) = input;
        /* eslint enable */
        await waitForChanges();

        expect(rootInstance.findActiveElement()).toEqual(input);

        const button = root.querySelector('button');

        expect(rootInstance.findActiveElement(button)).toEqual(button);

        restoreMutationObserver();
    });

    it('finds correct event target', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanClickElsewhere],
            html: '<protean-click-elsewhere><button>External focus point</button><p> Unrelated target</p></protean-click-elsewhere>',
        });

        const button = root.querySelector('button');
        const event = new Event('mousedown');
        const composedPathMock = jest
            .fn()
            .mockImplementation(() => [button, root, document, window]);
        event.composedPath = composedPathMock;

        await waitForChanges();
        expect(rootInstance.shadowEventTarget(event)).toEqual(button);

        const p = root.querySelector('p');
        (event.target as any) = p;
        event.composedPath = () => [];

        expect(rootInstance.shadowEventTarget(event)).toEqual(p);
    });

    it('recursively searches to find if shadow contains target', async () => {
        const { root, rootInstance } = await newSpecPage({
            components: [ProteanClickElsewhere, ProteanButton],
            html: '<protean-click-elsewhere><protean-button>External focus point</protean-button><p> Unrelated target</p></protean-click-elsewhere>',
        });

        const proteanButton = root.querySelector('protean-button');
        const button = proteanButton.shadowRoot.querySelector('button');

        expect(rootInstance.shadowContains(root)).toEqual(true);

        expect(rootInstance.shadowContains(button)).toEqual(true);

        expect(rootInstance.shadowContains(document.body)).toEqual(false);
    });

    it('identifies whether an event originates in slots', async () => {
        const { root, rootInstance } = await newSpecPage({
            components: [ProteanClickElsewhere],
            html: '<protean-click-elsewhere><slot /><span>Span text</span><button>Button text</button></protean-click-elsewhere>',
        });

        const span = root.querySelector('span');
        const textNode = span.childNodes[0];
        const slot = root.querySelector('slot');
        const assignedNodesMock = jest.fn().mockImplementation(() => [span]);

        slot.assignedNodes = assignedNodesMock;

        expect(rootInstance.originatesInSlots(textNode)).toEqual(true);

        const button = root.querySelector('button');
        expect(rootInstance.originatesInSlots(button)).toEqual(false);
    });

    it('correctly emits changes event on handler select', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanClickElsewhere],
            html: '<protean-click-elsewhere><span>Span text</span><button>Button text</button></protean-click-elsewhere>',
        });

        const button = root.querySelector('button');
        const span = root.querySelector('span');
        const event = new Event('mousedown');

        const changeMock = jest.fn();
        root.addEventListener('change', changeMock);

        /* eslint-disable */
        (document.activeElement as any) = button;
        event.composedPath = () => [span];
        /* eslint enable */

        expect(rootInstance.isCurrentlyFocused).toEqual(false);
        rootInstance.handler(event);
        await waitForChanges();

        expect(rootInstance.isCurrentlyFocused).toEqual(true);
        expect(changeMock).toHaveBeenCalledTimes(0);

        event.composedPath = () => [document.body];
        rootInstance.handler(event);
        await waitForChanges();

        expect(changeMock).toHaveBeenCalledTimes(1);
        expect(rootInstance.isCurrentlyFocused).toEqual(false);

        rootInstance.handler(event);
        await waitForChanges();

        expect(changeMock).toHaveBeenCalledTimes(2);
        expect(rootInstance.isCurrentlyFocused).toEqual(false);

        /* eslint-disable */
        (document.activeElement as any) = document.body;
        event.composedPath = () => [button];
        /* eslint enable */

        rootInstance.handler(event);
        await waitForChanges();

        expect(changeMock).toHaveBeenCalledTimes(2);
        expect(rootInstance.isCurrentlyFocused).toEqual(true);
    });
});
