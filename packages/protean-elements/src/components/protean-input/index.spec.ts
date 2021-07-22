//not happy with mocking, revisit
const dateValue = {
    value: '00000000',
    formattedValue: '00/00/0000',
};
jest.mock('../../utils/formatting/date', () => () => dateValue);

const numericValue = {
    value: '0.00',
    formattedValue: '0.00',
    formattingCharacterCount: 1,
};
jest.mock('../../utils/formatting/numeric', () => () => numericValue);

const phoneValue = {
    value: '0000000000',
    formattedValue: '(000) 000-0000',
    maxlength: 14,
};
jest.mock('../../utils/formatting/phone', () => () => phoneValue);

const colorValue = {
    value: '123456',
    formattedValue: '123456',
    maxlength: 7,
};

jest.mock('../../utils/formatting/color', () => () => colorValue);

const genericValue = {
    value: 'foo',
    formattedValue: 'foo',
};

jest.mock('../../utils/formatting/generic', () => () => genericValue);

import { ProteanInput, CursorData } from '.';
import { FormattedValue } from '../../utils/formatting/types';
import { newSpecPage } from '@stencil/core/testing';

describe('protean-input', () => {
    it('builds static values', () => {
        const root = new ProteanInput();

        expect(root.guid).toBeGreaterThanOrEqual(1000);
        expect(root.inputId).toContain(`protean-input-${root.guid}`);
        expect(root.descriptionId).toEqual(
            `protean-input-description-${root.guid}`,
        );
    });

    it('handles scheduledAfterRender', () => {
        const root = new ProteanInput();

        const mock = jest.fn();
        root.scheduledAfterRender.push(mock, mock);

        root.componentDidRender();

        expect(mock).toHaveBeenCalledTimes(2);
        expect(root.scheduledAfterRender).toEqual([]);
    });

    it('re-formats value on load and property change', async () => {
        const { root, rootInstance } = await newSpecPage({
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
        root.value = '1';
        expect(rootInstance.formattedValueObject).toEqual(formattedValueObject);
        expect(rootInstance.inputElement.value).toEqual(
            formattedValueObject.formattedValue,
        );

        const mock = jest.fn();
        rootInstance.reformatValue = mock;

        rootInstance.componentDidLoad();
        expect(mock).toHaveBeenCalledTimes(0);
        expect(rootInstance.inputElement.value).toEqual(
            rootInstance.formattedValueObject.formattedValue,
        );

        root.value = '2';
        expect(mock).toHaveBeenCalledTimes(1);

        root.type = 'numeric';
        expect(mock).toHaveBeenCalledTimes(2);

        root.format = 'delimited';
        expect(mock).toHaveBeenCalledTimes(3);

        root.label = 'should not call reformat';
        expect(mock).toHaveBeenCalledTimes(3);
    });

    it('parses "formatted-" type', () => {
        const root = new ProteanInput();

        expect(root.computedType).toEqual(undefined);

        root.type = 'text';
        expect(root.computedType).toEqual('text');

        root.type = 'formatted-text';
        expect(root.computedType).toEqual('custom');

        root.type = 'formatted-tel';
        expect(root.computedType).toEqual('custom');
    });

    it('outputs correct input type', () => {
        const root = new ProteanInput();

        root.type = 'foo';
        expect(root.inputType).toEqual('text');

        root.type = 'text';
        expect(root.inputType).toEqual('text');

        root.type = 'tel';
        expect(root.inputType).toEqual('tel');

        root.type = 'phone';
        expect(root.inputType).toEqual('tel');

        root.type = 'numeric';
        expect(root.inputType).toEqual('tel');

        root.type = 'date';
        expect(root.inputType).toEqual('tel');

        root.type = 'password';
        expect(root.inputType).toEqual('password');

        root.type = 'search';
        expect(root.inputType).toEqual('search');

        root.type = 'button';
        expect(root.inputType).toEqual('button');

        root.type = 'color';
        expect(root.inputType).toEqual('tel');

        root.type = 'formatted-tel';
        expect(root.inputType).toEqual('tel');

        root.type = 'formatted-foo';
        expect(root.inputType).toEqual('text');
    });

    it('outputs correct input aria-label', () => {
        const root = new ProteanInput();

        expect(root.inputAriaLabel).toEqual(null);

        const a11yLabel = 'Input aria-label';
        root.a11yLabel = a11yLabel;
        expect(root.inputAriaLabel).toEqual(a11yLabel);

        root.label = 'Input label';
        expect(root.inputAriaLabel).toEqual(null);
    });

    it('outputs correct input aria-required', () => {
        const root = new ProteanInput();

        expect(root.inputAriaRequired).toEqual('true');

        root.optional = false;
        expect(root.inputAriaRequired).toEqual('true');

        root.ariaHasPopup = 'listbox';
        expect(root.inputAriaRequired).toEqual(null);
    });

    it('identifies presence of errors', () => {
        const root = new ProteanInput();

        expect(root.hasErrors).toEqual(false);

        root.errors = ['foo'];
        expect(root.hasErrors).toEqual(true);

        root.errors = [];
        expect(root.hasErrors).toEqual(false);
    });

    it('pulls the appropriate messages', () => {
        const root = new ProteanInput();

        expect(root.messages).toEqual(undefined);

        root.errors = ['foo'];
        expect(root.messages).toEqual(root.errors);

        root.errors = ['foo'];
        root.hints = ['bar'];
        expect(root.messages).toEqual(root.errors);

        root.errors = [];
        expect(root.messages).toEqual(root.hints);
    });

    it('applies appropriate error class', async () => {
        const { root, waitForChanges } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        const inputContainer =
            root.shadowRoot.querySelector('.input-container');
        expect(inputContainer).not.toHaveClass('has-error');

        root.errors = ['error 1'];
        await waitForChanges();

        expect(inputContainer).toHaveClass('has-error');
    });

    it('renders error icon', async () => {
        const { root, waitForChanges } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input label="test label"></protean-input>',
        });

        let errorIcon: HTMLProteanIconElement =
            root.shadowRoot.querySelector('.error-icon');
        expect(errorIcon).toBeNull();

        root.errors = ['error 1'];
        await waitForChanges();

        errorIcon = root.shadowRoot.querySelector('.error-icon');

        expect(errorIcon).not.toBeNull();
        expect(errorIcon).toEqualAttribute('type', 'status-error-filled');
    });

    it('shows messages', () => {
        const root = new ProteanInput();

        expect(root.showMessages).toEqual(false);

        root.hints = ['foo'];
        expect(root.showMessages).toEqual(true);

        root.suppressMessages = true;
        expect(root.showMessages).toEqual(false);
    });

    it('renders messages', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        let messageItems = root.shadowRoot.querySelectorAll(
            '.message-container li',
        );

        expect(rootInstance.messages).toEqual(undefined);
        expect(messageItems.length).toEqual(0);

        root.hints = ['hint 1', 'hint 2'];
        await waitForChanges();

        messageItems = root.shadowRoot.querySelectorAll(
            '.message-container li',
        );
        expect(rootInstance.messages).toEqual(root.hints);
        expect(messageItems.length).toEqual(2);
    });

    it('gets correct message container element', async () => {
        const { root, rootInstance } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        expect(rootInstance.messageContainer).toEqual(
            root.shadowRoot.querySelector('.message-container'),
        );
    });

    it('gets correct message container height', async () => {
        const { root, rootInstance } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        const messageContainerHeight = root.shadowRoot
            .querySelector('.message-container protean-message')
            .getBoundingClientRect().height;
        expect(rootInstance.messageContainerHeight).toEqual(
            `${messageContainerHeight}px`,
        );
    });

    it('updates message container height when message set', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        const setMessagesHeightMock = jest.fn();
        rootInstance.setMessagesHeight = setMessagesHeightMock;
        expect(rootInstance.scheduledAfterRender).toEqual([]);

        root.hints = ['hint 1'];
        expect(rootInstance.scheduledAfterRender).toHaveLength(0);

        rootInstance.isFocused = true;
        root.hints = ['hint 1 again'];
        expect(rootInstance.scheduledAfterRender).toHaveLength(1);
        await waitForChanges();

        expect(setMessagesHeightMock).toHaveBeenCalledTimes(1);
        expect(rootInstance.scheduledAfterRender).toHaveLength(0);

        root.errors = ['error 1'];
        expect(rootInstance.scheduledAfterRender).toHaveLength(1);
        await waitForChanges();
        expect(setMessagesHeightMock).toHaveBeenCalledTimes(2);
        expect(rootInstance.scheduledAfterRender).toHaveLength(0);
    });

    it('prevents click propagation from input', async () => {
        const { root } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input label="Label text"></protean-input>',
        });

        const label = root.shadowRoot.querySelector('label');

        const clickEvent = new MouseEvent('click');
        const sIPMock = jest.fn();
        clickEvent.stopImmediatePropagation = sIPMock;

        label.dispatchEvent(clickEvent);

        expect(sIPMock).toHaveBeenCalledTimes(1);
    });

    it('handles change event', async () => {
        const { root, rootInstance } = await newSpecPage({
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

        root.addEventListener('change', changeMock);

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

        root.removeEventListener('change', changeMock);
    });

    it('automatically sets value with default change handler', async () => {
        const { root, waitForChanges } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        root.onchange = undefined;
        await waitForChanges();

        root.dispatchEvent(
            new CustomEvent('change', {
                bubbles: true,
                detail: {
                    value: 'value',
                    formattedValue: 'value',
                },
            }),
        );

        expect(root.value).toEqual('value');

        root.onchange = () => {
            /*  */
        };
        await waitForChanges();

        root.dispatchEvent(
            new CustomEvent('change', {
                bubbles: true,
                detail: {
                    value: 'updated value',
                    formattedValue: 'updated value',
                },
            }),
        );

        expect(root.value).toEqual('value');
    });

    it('delegates focus to button', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        const focusMock = jest.fn();
        rootInstance.inputElement.focus = focusMock;

        root.dispatchEvent(new Event('focus'));
        await waitForChanges();
        expect(focusMock).toHaveBeenCalledTimes(1);

        rootInstance.delegateFocus(new Event('focus'));
        await waitForChanges();
        expect(focusMock).toHaveBeenCalledTimes(1);
    });

    it('handles input event', async () => {
        const { root, rootInstance } = await newSpecPage({
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

        root.addEventListener('input', inputMock);

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

        root.removeEventListener('input', inputMock);
    });

    it('handles input focus', async () => {
        const { root, rootInstance } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        expect(rootInstance.messageContainer.style.height).toBeUndefined;

        rootInstance.inputElement.dispatchEvent(new Event('focus'));
        expect(rootInstance.messageContainer.style.height).toBeUndefined;
        expect(rootInstance.isFocused).toEqual(true);

        root.hints = ['1'];
        rootInstance.inputElement.dispatchEvent(new Event('focus'));
        expect(rootInstance.messageContainer.style.height).toEqual(
            rootInstance.messageContainerHeight,
        );
        expect(rootInstance.isFocused).toEqual(true);
    });

    it('handles input blur', async () => {
        const { root, rootInstance } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        expect(rootInstance.messageContainer.style.height).toBeUndefined;

        rootInstance.inputElement.dispatchEvent(new Event('blur'));
        expect(rootInstance.messageContainer.style.height).toBeUndefined;
        expect(rootInstance.isFocused).toEqual(false);

        root.hints = ['1'];
        rootInstance.inputElement.dispatchEvent(new Event('blur'));
        expect(rootInstance.messageContainer.style.height).toEqual('0px');
        expect(rootInstance.isFocused).toEqual(false);
    });

    it('calls appropriate formatting function', async () => {
        //loose understanding of jest mocks, may skip/deleted this test in favor of those already in e2e and formatting fns
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        root.value = '10';

        expect(rootInstance.formattedValueObject).toEqual({
            value: '10',
            formattedValue: '10',
        });

        root.type = 'date';
        await waitForChanges();
        expect(rootInstance.formattedValueObject).toEqual(dateValue);

        root.type = 'numeric';
        await waitForChanges();
        expect(rootInstance.formattedValueObject).toEqual(numericValue);

        root.type = 'phone';
        await waitForChanges();
        expect(rootInstance.formattedValueObject).toEqual(phoneValue);

        root.type = 'color';
        await waitForChanges();
        expect(rootInstance.formattedValueObject).toEqual(colorValue);

        root.type = 'formatted-tel';
        await waitForChanges();
        expect(rootInstance.formattedValueObject).toEqual(genericValue);

        jest.restoreAllMocks();
    });

    it('calculates cursor position', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        root.value = '10';
        await waitForChanges();

        const valueLength = 2;
        const expectedCursorData: CursorData = {
            startingPosition: valueLength,
            valueLength,
            previousValueLength: valueLength,
            hasSelection: false,
        };

        let calculatedCursorData =
            rootInstance.calculateCursorPositionOnInput();

        expect(calculatedCursorData).toEqual(expectedCursorData);

        rootInstance.inputElement.selectionStart = 1;
        calculatedCursorData = rootInstance.calculateCursorPositionOnInput();
        expect(calculatedCursorData.startingPosition).toEqual(1);
    });

    it('sets cursor position', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        root.value = '10';
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
        const { root, waitForChanges } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        let labelElement = root.shadowRoot.querySelector('label');
        expect(labelElement).toBeNull;

        let optionalSpan = root.shadowRoot.querySelector('.optional-tag');
        expect(optionalSpan).toBeNull;

        root.label = 'label text';
        await waitForChanges();
        labelElement = root.shadowRoot.querySelector('label');
        expect(labelElement).not.toBeNull;
        expect(labelElement.textContent).toEqual('label text');

        optionalSpan = root.shadowRoot.querySelector('.optional-tag');
        expect(optionalSpan).toBeNull;

        root.optional = true;
        await waitForChanges();

        optionalSpan = root.shadowRoot.querySelector('.optional-tag');
        expect(optionalSpan).not.toBeNull;
        expect(optionalSpan.textContent).toEqual(' (optional)');
    });

    it('handles disabled binding', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        const inputElement = rootInstance.inputElement;
        expect(root.disabled).toEqual(false);
        expect(inputElement.disabled).toEqual(false);

        root.disabled = true;
        await waitForChanges();

        expect(inputElement.disabled).toEqual(true);
    });

    it('handles readonly binding', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        const inputElement = rootInstance.inputElement;
        expect(root.readonly).toEqual(false);
        expect(inputElement.readOnly).toEqual(false);

        root.readonly = true;
        await waitForChanges();

        expect(inputElement.readOnly).toEqual(true);
    });

    it('handles maxlength binding', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        const inputElement = rootInstance.inputElement;
        expect(root.maxlength).toEqual(undefined);
        expect(inputElement.maxLength).toEqual(0); // actually -1 in practice
        expect(rootInstance.inputMaxlength).toEqual(undefined);

        root.maxlength = 10;
        await waitForChanges();

        expect(inputElement.maxLength).toEqual(10);
        expect(rootInstance.inputMaxlength).toEqual(10);

        root.type = 'phone';
        await waitForChanges();
        expect(inputElement.maxLength).toEqual(14);
        expect(rootInstance.inputMaxlength).toEqual(14);

        root.type = 'numeric';
        await waitForChanges();
        expect(inputElement.maxLength).toEqual(11);
        expect(rootInstance.inputMaxlength).toEqual(11);
    });

    it('handles aria-haspopup binding', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        const inputElement = rootInstance.inputElement;
        expect(inputElement).toEqualAttribute('aria-haspopup', null);

        root.ariaHasPopup = 'listbox';
        await waitForChanges();

        expect(inputElement).toEqualAttribute('aria-haspopup', 'listbox');
    });

    it('handles aria-expanded binding', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        const inputElement = rootInstance.inputElement;
        expect(inputElement).toEqualAttribute('aria-expanded', null);

        root.ariaExpanded = true;
        await waitForChanges();

        expect(inputElement).toEqualAttribute('aria-expanded', 'true');

        root.ariaExpanded = false;
        await waitForChanges();

        expect(inputElement).toEqualAttribute('aria-expanded', 'false');
    });

    it('handles role binding', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-input></protean-input>',
        });

        const inputElement = rootInstance.inputElement;
        expect(inputElement).toEqualAttribute('role', null);

        root.ariaRole = 'button';
        await waitForChanges();

        expect(inputElement).toEqualAttribute('role', 'button');
    });
});
