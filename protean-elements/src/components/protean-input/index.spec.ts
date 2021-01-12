//not happy with mocking, revisit
const dateValue = {
    value: '00000000',
    formattedValue: '00/00/0000',
};
jest.mock('../../utils/formatting/date', () => () => dateValue);

const numericValue = {
    value: '0.00',
    formattedValue: '0.00',
};
jest.mock('../../utils/formatting/numeric', () => () => numericValue);

const phoneValue = {
    value: '0000000000',
    formattedValue: '(000) 000-0000',
};
jest.mock('../../utils/formatting/phone', () => () => phoneValue);

import { ProteanInput, CursorData } from '.';
import { FormattedValue } from '@/utils/formatting/types';
import { newSpecPage } from '@stencil/core/testing';

describe('protean-input', () => {
    it('builds static values', () => {
        const proteanInput = new ProteanInput();

        expect(proteanInput.guid).toBeGreaterThanOrEqual(1000);
        expect(proteanInput.inputId).toContain(
            `protean-input-${proteanInput.guid}`,
        );
        expect(proteanInput.descriptionId).toContain(
            `protean-input-description-${proteanInput.guid}`,
        );
    });

    it('handles scheduledAfterRender', () => {
        const proteanInput = new ProteanInput();

        const mock = jest.fn();
        proteanInput.scheduledAfterRender.push(mock, mock);

        proteanInput.componentDidRender();

        expect(mock).toHaveBeenCalledTimes(2);
        expect(proteanInput.scheduledAfterRender).toEqual([]);
    });

    it('re-formats value on load and property change', async () => {
        const { root: proteanInput, rootInstance } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        let formattedValueObject: FormattedValue = {
            value: '',
            formattedValue: '',
        };
        expect(rootInstance.formattedValueObject).toEqual(formattedValueObject);

        formattedValueObject = {
            value: '1',
            formattedValue: '1',
        };
        proteanInput.value = '1';
        expect(rootInstance.formattedValueObject).toEqual(formattedValueObject);
        expect(rootInstance.inputElement.value).toEqual(
            formattedValueObject.formattedValue,
        );

        const mock = jest.fn();
        rootInstance.reformatValue = mock;

        rootInstance.componentDidLoad();
        expect(mock).toHaveBeenCalledTimes(1);

        proteanInput.value = '2';
        expect(mock).toHaveBeenCalledTimes(2);

        proteanInput.type = 'numeric';
        expect(mock).toHaveBeenCalledTimes(3);

        proteanInput.format = 'delimited';
        expect(mock).toHaveBeenCalledTimes(4);

        proteanInput.label = 'should not call reformat';
        expect(mock).toHaveBeenCalledTimes(4);
    });

    it('outputs correct input type', () => {
        const proteanInput = new ProteanInput();

        proteanInput.type = 'foo';
        expect(proteanInput.inputType).toEqual('text');

        proteanInput.type = 'text';
        expect(proteanInput.inputType).toEqual('text');

        proteanInput.type = 'tel';
        expect(proteanInput.inputType).toEqual('tel');

        proteanInput.type = 'phone';
        expect(proteanInput.inputType).toEqual('tel');

        proteanInput.type = 'numeric';
        expect(proteanInput.inputType).toEqual('tel');

        proteanInput.type = 'date';
        expect(proteanInput.inputType).toEqual('tel');

        proteanInput.type = 'number';
        expect(proteanInput.inputType).toEqual('number');

        proteanInput.type = 'password';
        expect(proteanInput.inputType).toEqual('password');

        proteanInput.type = 'search';
        expect(proteanInput.inputType).toEqual('search');

        proteanInput.type = 'email';
        expect(proteanInput.inputType).toEqual('email');
    });

    it('outputs correct input aria-label', () => {
        const proteanInput = new ProteanInput();

        expect(proteanInput.inputAriaLabel).toEqual(null);

        const ariaLabel = 'Input aria-label';
        proteanInput.ariaLabel = ariaLabel;
        expect(proteanInput.inputAriaLabel).toEqual(ariaLabel);

        proteanInput.label = 'Input label';
        expect(proteanInput.inputAriaLabel).toEqual(null);
    });

    it('identifies presence of errors', () => {
        const proteanInput = new ProteanInput();

        expect(proteanInput.hasErrors).toEqual(false);

        proteanInput.errors = ['foo'];
        expect(proteanInput.hasErrors).toEqual(true);

        proteanInput.errors = [];
        expect(proteanInput.hasErrors).toEqual(false);
    });

    it('pulls the appropriate messages', () => {
        const proteanInput = new ProteanInput();

        expect(proteanInput.messages).toEqual(undefined);

        proteanInput.errors = ['foo'];
        expect(proteanInput.messages).toEqual(proteanInput.errors);

        proteanInput.errors = ['foo'];
        proteanInput.hints = ['bar'];
        expect(proteanInput.messages).toEqual(proteanInput.errors);

        proteanInput.errors = [];
        expect(proteanInput.messages).toEqual(proteanInput.hints);
    });

    it('shows messages', () => {
        const proteanInput = new ProteanInput();

        expect(proteanInput.showMessages).toEqual(false);

        proteanInput.hints = ['foo'];
        expect(proteanInput.showMessages).toEqual(true);

        proteanInput.suppressMessages = true;
        expect(proteanInput.showMessages).toEqual(false);
    });

    it('renders messages', async () => {
        const {
            root: proteanInput,
            rootInstance,
            waitForChanges,
        } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        let messageItems = proteanInput.shadowRoot.querySelectorAll(
            '.message-container li',
        );

        expect(rootInstance.messages).toEqual(undefined);
        expect(messageItems.length).toEqual(0);

        proteanInput.hints = ['hint 1', 'hint 2'];
        await waitForChanges();

        messageItems = proteanInput.shadowRoot.querySelectorAll(
            '.message-container li',
        );
        expect(rootInstance.messages).toEqual(proteanInput.hints);
        expect(messageItems.length).toEqual(2);
    });

    it('gets correct message container element', async () => {
        const { root: proteanInput, rootInstance } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        expect(rootInstance.messageContainer).toEqual(
            proteanInput.shadowRoot.querySelector('.message-container'),
        );
    });

    it('gets correct message container height', async () => {
        const { root: proteanInput, rootInstance } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        const messageContainerHeight = proteanInput.shadowRoot
            .querySelector('.message-container protean-message')
            .getBoundingClientRect().height;
        expect(rootInstance.messageContainerHeight).toEqual(
            `${messageContainerHeight}px`,
        );
    });

    it('updates message container height when message set', async () => {
        const {
            root: proteanInput,
            rootInstance,
            waitForChanges,
        } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        const setMessagesHeightMock = jest.fn();
        rootInstance.setMessagesHeight = setMessagesHeightMock;
        expect(rootInstance.scheduledAfterRender).toEqual([]);

        proteanInput.hints = ['hint 1'];
        expect(rootInstance.scheduledAfterRender).toHaveLength(1);
        await waitForChanges();

        expect(setMessagesHeightMock).toHaveBeenCalledTimes(1);
        expect(rootInstance.scheduledAfterRender).toHaveLength(0);

        proteanInput.errors = ['error 1'];
        expect(rootInstance.scheduledAfterRender).toHaveLength(1);
        await waitForChanges();
        expect(setMessagesHeightMock).toHaveBeenCalledTimes(2);
        expect(rootInstance.scheduledAfterRender).toHaveLength(0);
    });

    it('handles change event', async () => {
        const { root: proteanInput, rootInstance } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        expect(rootInstance.formattedValueObject).toBeUndefined;

        rootInstance.inputElement.value = 'test value';

        const changeMock = jest
            .fn()
            .mockImplementation((event: CustomEvent) => {
                (event.target as HTMLProteanInputElement).value =
                    event.detail.value;
            });

        proteanInput.addEventListener('change', changeMock);

        rootInstance.inputElement.dispatchEvent(new Event('change'));

        const formattedValueObject = {
            value: 'test value',
            formattedValue: 'test value',
        };
        expect(rootInstance.formattedValueObject).toEqual(formattedValueObject);
        expect(changeMock).toHaveBeenCalledTimes(1);
        expect(rootInstance.value).toEqual('test value');

        rootInstance.inputElement.dispatchEvent(new Event('change'));
        expect(changeMock).toHaveBeenCalledTimes(1);

        proteanInput.removeEventListener('change', changeMock);
    });

    it('automatically sets value with default change handler', async () => {
        const { root: proteanInput, waitForChanges } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        proteanInput.onchange = undefined;
        await waitForChanges();

        proteanInput.dispatchEvent(
            new CustomEvent('change', {
                bubbles: true,
                detail: {
                    value: 'value',
                    formattedValue: 'value',
                },
            }),
        );

        expect(proteanInput.value).toEqual('value');

        proteanInput.onchange = () => {
            /*  */
        };
        await waitForChanges();

        proteanInput.dispatchEvent(
            new CustomEvent('change', {
                bubbles: true,
                detail: {
                    value: 'updated value',
                    formattedValue: 'updated value',
                },
            }),
        );

        expect(proteanInput.value).toEqual('value');
    });

    it('handles input event', async () => {
        const { root: proteanInput, rootInstance } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        expect(rootInstance.formattedValueObject).toBeUndefined;
        expect(rootInstance.cursorData).toBeUndefined;

        const value = 'test value';
        rootInstance.inputElement.value = value;

        const inputMock = jest.fn().mockImplementation((event: CustomEvent) => {
            (event.target as HTMLProteanInputElement).value =
                event.detail.value;
        });

        proteanInput.addEventListener('input', inputMock);

        const formattedValueObject = {
            value,
            formattedValue: value,
        };

        const valueLength = value.length;
        const cursorData: CursorData = {
            startingPosition: valueLength,
            valueLength,
            previousValueLength: valueLength,
            hasSelection: false,
        };

        const setSelectionRangeMock = jest.fn().mockImplementation(() => {
            /*  */
        });
        rootInstance.inputElement.setSelectionRange = setSelectionRangeMock;

        rootInstance.inputElement.dispatchEvent(new Event('input'));

        expect(rootInstance.formattedValueObject).toEqual(formattedValueObject);
        expect(rootInstance.cursorData).toEqual(cursorData);
        expect(inputMock).toHaveBeenCalledTimes(1);
        expect(rootInstance.value).toEqual(value);
        expect(setSelectionRangeMock).toHaveBeenCalledTimes(1);
        expect(setSelectionRangeMock).toHaveBeenCalledWith(
            valueLength,
            valueLength,
        );

        rootInstance.inputElement.dispatchEvent(new Event('input'));
        expect(setSelectionRangeMock).toHaveBeenCalledTimes(2);
        expect(inputMock).toHaveBeenCalledTimes(1);

        proteanInput.removeEventListener('input', inputMock);
    });

    it('handles input focus', async () => {
        const { root: proteanInput, rootInstance } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        expect(rootInstance.messageContainer.style.height).toBeUndefined;

        rootInstance.inputElement.dispatchEvent(new Event('focus'));
        expect(rootInstance.messageContainer.style.height).toBeUndefined;

        proteanInput.hints = ['1'];
        rootInstance.inputElement.dispatchEvent(new Event('focus'));
        expect(rootInstance.messageContainer.style.height).toEqual(
            rootInstance.messageContainerHeight,
        );
    });

    it('handles input blur', async () => {
        const { root: proteanInput, rootInstance } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        expect(rootInstance.messageContainer.style.height).toBeUndefined;

        rootInstance.inputElement.dispatchEvent(new Event('blur'));
        expect(rootInstance.messageContainer.style.height).toBeUndefined;

        proteanInput.hints = ['1'];
        rootInstance.inputElement.dispatchEvent(new Event('blur'));
        expect(rootInstance.messageContainer.style.height).toEqual('0px');
    });

    it('calls appropriate formatting function', async () => {
        //loose understanding of jest mocks, may skip/deleted this test in favor of those already in e2e and formatting fns
        const {
            root: proteanInput,
            rootInstance,
            waitForChanges,
        } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        proteanInput.value = '10';

        expect(rootInstance.formattedValueObject).toEqual({
            value: '10',
            formattedValue: '10',
        });

        proteanInput.type = 'date';
        await waitForChanges();
        expect(rootInstance.formattedValueObject).toEqual(dateValue);

        proteanInput.type = 'numeric';
        await waitForChanges();
        expect(rootInstance.formattedValueObject).toEqual(numericValue);

        proteanInput.type = 'phone';
        await waitForChanges();
        expect(rootInstance.formattedValueObject).toEqual(phoneValue);

        jest.restoreAllMocks();
    });

    it('calculates cursor position', async () => {
        const {
            root: proteanInput,
            rootInstance,
            waitForChanges,
        } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        proteanInput.value = '10';
        await waitForChanges();

        const valueLength = 2;
        const expectedCursorData: CursorData = {
            startingPosition: valueLength,
            valueLength,
            previousValueLength: valueLength,
            hasSelection: false,
        };

        let calculatedCursorData = rootInstance.calculateCursorPositionOnInput();

        expect(calculatedCursorData).toEqual(expectedCursorData);

        rootInstance.inputElement.selectionStart = 1;
        calculatedCursorData = rootInstance.calculateCursorPositionOnInput();
        expect(calculatedCursorData.startingPosition).toEqual(1);
    });

    it('sets cursor position', async () => {
        const {
            root: proteanInput,
            rootInstance,
            waitForChanges,
        } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        proteanInput.value = '10';
        await waitForChanges();

        const valueLength = 2;
        rootInstance.cursorData = {
            startingPosition: valueLength,
            valueLength,
            previousValueLength: valueLength,
            hasSelection: true,
        };

        const setSelectionRangeMock = jest.fn().mockImplementation(() => {
            /*  */
        });
        rootInstance.inputElement.setSelectionRange = setSelectionRangeMock;

        rootInstance.setCursorPosition();
        expect(setSelectionRangeMock).toHaveBeenCalledTimes(0);

        rootInstance.cursorData.hasSelection = false;
        rootInstance.setCursorPosition();

        expect(setSelectionRangeMock).toHaveBeenCalledTimes(1);
        expect(setSelectionRangeMock).toHaveBeenCalledWith(
            valueLength,
            valueLength,
        );
    });

    it('handles label rendering', async () => {
        const { root: proteanInput, waitForChanges } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        let labelElement = proteanInput.shadowRoot.querySelector('label');
        expect(labelElement).toBeNull;

        let optionalSpan = proteanInput.shadowRoot.querySelector(
            '.optional-tag',
        );
        expect(optionalSpan).toBeNull;

        proteanInput.label = 'label text';
        await waitForChanges();
        labelElement = proteanInput.shadowRoot.querySelector('label');
        expect(labelElement).not.toBeNull;
        expect(labelElement.textContent).toEqual('label text');

        optionalSpan = proteanInput.shadowRoot.querySelector('.optional-tag');
        expect(optionalSpan).toBeNull;

        proteanInput.optional = true;
        await waitForChanges();

        optionalSpan = proteanInput.shadowRoot.querySelector('.optional-tag');
        expect(optionalSpan).not.toBeNull;
        expect(optionalSpan.textContent).toEqual(' (optional)');
    });

    it('handles readonly binding', async () => {
        const { root: proteanInput, waitForChanges } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        const inputElement = proteanInput.shadowRoot.querySelector('input');
        expect(inputElement.readOnly).toEqual(false);

        proteanInput.readonly = true;
        await waitForChanges();

        expect(inputElement.readOnly).toEqual(true);
    });
});
