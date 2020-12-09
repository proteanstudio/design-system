import { newE2EPage } from '@stencil/core/testing';
import dispatchEvent from '../../test-helpers/dispatchEvent';

describe('protean-input', () => {
    it('renders basic input', async () => {
        const { find } = await newE2EPage({
            html: '<protean-input></protean-input>',
        });

        const labelElement = await find('protean-input >>> label');
        expect(labelElement).toBeNull();

        const inputElement = await find('protean-input >>> input');

        expect(inputElement.getAttribute('id')).toContain('protean-input-');
        expect(inputElement).toEqualAttribute('type', 'text');
        expect(inputElement).toEqualAttribute('aria-required', 'true');
        expect(inputElement).not.toHaveAttribute('aria-label');
        expect(inputElement).toEqualAttribute('aria-invalid', 'false');
        expect(inputElement).toHaveAttribute('aria-describedby');

        const messageContainer = await find(
            'protean-input >>> .message-container',
        );
        expect(messageContainer).not.toBeNull();
    });

    it('handles label and optional props', async () => {
        const { find, waitForChanges } = await newE2EPage({
            html: '<protean-input></protean-input>',
        });

        let labelElement = await find('protean-input >>> label');
        expect(labelElement).toBeNull();

        const proteanInput = await find('protean-input');

        proteanInput.setProperty('label', 'Label text');
        await waitForChanges();

        labelElement = await find('protean-input >>> label');

        expect(labelElement).not.toBeNull();
        expect(labelElement.textContent).toEqual('Label text');

        const inputElement = await find('protean-input >>> input');

        expect(labelElement).toEqualAttribute(
            'for',
            inputElement.getAttribute('id'),
        );

        let optionalSpan = await find('protean-input >>> .optional-tag');
        expect(optionalSpan).toBeNull();

        proteanInput.setProperty('optional', true);
        await waitForChanges();

        optionalSpan = await find('protean-input >>> .optional-tag');
        expect(optionalSpan).not.toBeNull();
        expect(optionalSpan.textContent.trim()).toEqual('(optional)');
    });

    it('correctly binds aria-label', async () => {
        const { waitForChanges, find } = await newE2EPage({
            html: '<protean-input></protean-input>',
        });

        const inputElement = await find('protean-input >>> input');

        expect(inputElement).not.toHaveAttribute('aria-label');

        const proteanInput = await find('protean-input');

        proteanInput.setProperty('ariaLabel', 'aria-label text');
        await waitForChanges();

        expect(inputElement).toEqualAttribute('aria-label', 'aria-label text');

        proteanInput.setProperty('label', 'ariaLabel text');
        await waitForChanges();

        expect(inputElement).not.toHaveAttribute('aria-label');
    });

    it('handles optional binding', async () => {
        const { find, waitForChanges } = await newE2EPage({
            html: '<protean-input label="Label text"></protean-input>',
        });

        const inputElement = await find('protean-input >>> input');
        const optionalSpan = await find('protean-input >>> .optional-tag');

        expect(inputElement).toEqualAttribute('aria-required', 'true');
        expect(optionalSpan).toBeNull;

        const proteanInput = await find('protean-input');

        proteanInput.setProperty('optional', true);
        await waitForChanges();

        expect(inputElement).toEqualAttribute('aria-required', 'false');
        expect(optionalSpan).not.toBeNull;
    });

    it('emits change event and handles defaults', async () => {
        const page = await newE2EPage({
            html: '<protean-input label="Label text"></protean-input>',
        });

        const { find, waitForChanges } = page;

        const proteanInput = await find('protean-input');
        const proteanInputChange = await proteanInput.spyOnEvent('change');

        await page.$eval('protean-input', element => {
            element.shadowRoot.querySelector('input').value = 'a';
        }); // setProperty not working here
        await waitForChanges();

        await dispatchEvent(page, ['protean-input', 'input'], 'change');

        expect(proteanInputChange).toHaveReceivedEventDetail({
            value: 'a',
            formattedValue: 'a',
        });
        expect(await proteanInput.getProperty('value')).toEqual('a');

        await page.$eval('protean-input', (element: HTMLElement) => {
            element.onchange = () => {
                /* override default onchange */
            };
            element.shadowRoot.querySelector('input').value = 'ab';
        });
        await waitForChanges();

        await dispatchEvent(page, ['protean-input', 'input'], 'change');
        expect(proteanInputChange).toHaveReceivedEventDetail({
            value: 'ab',
            formattedValue: 'ab',
        });
        expect(await proteanInput.getProperty('value')).toEqual('a');
    });

    it('emits input event', async () => {
        const { find } = await newE2EPage({
            html: '<protean-input label="Label text"></protean-input>',
        });

        const inputElement = await find('protean-input >>> input');
        const proteanInput = await find('protean-input');
        const proteanInputInput = await proteanInput.spyOnEvent('input');

        await inputElement.type('a');

        expect(proteanInputInput).toHaveReceivedEventDetail({
            value: 'a',
            formattedValue: 'a',
        });
    });

    it('handles message content and validity', async () => {
        const { find, waitForChanges } = await newE2EPage({
            html: '<protean-input label="Label text"></protean-input>',
        });

        const inputElement = await find('protean-input >>> input');
        const messageContentContainer = await find(
            'protean-input >>> .message-container ul',
        );
        const proteanMessage = await find(
            'protean-input >>> .message-container protean-message',
        );

        expect(inputElement).toEqualAttribute(
            'aria-describedby',
            messageContentContainer.getAttribute('id'),
        );
        expect(inputElement).toEqualAttribute('aria-invalid', false);
        expect(proteanMessage).toEqualAttribute('type', 'info');
        expect(proteanMessage).toEqualAttribute('level', 'status');

        const proteanInput = await find('protean-input');
        proteanInput.setProperty('hints', ['hint 1']);
        await waitForChanges();

        expect(messageContentContainer.textContent.trim()).toEqual('hint 1');

        proteanInput.setProperty('errors', ['error 1']);
        await waitForChanges();

        expect(inputElement).toEqualAttribute('aria-invalid', true);
        expect(proteanMessage).toEqualAttribute('type', 'error');
        expect(messageContentContainer.textContent.trim()).toEqual('error 1');
    });

    it('updates message container height on focus and blur', async () => {
        const page = await newE2EPage({
            html: '<protean-input label="Label text"></protean-input>',
        });

        const { find, waitForChanges } = page;

        const proteanInput = await find('protean-input');
        proteanInput.setProperty('hints', ['hint 1']);
        await waitForChanges();

        await dispatchEvent(page, ['protean-input', 'input'], 'focus', {
            bubbles: true,
        });

        const heights = await page.$eval('protean-input', element => {
            return {
                messageContainerHeight: element.shadowRoot.querySelector<HTMLDivElement>(
                    '.message-container',
                ).style.height,
                proteanMessageHeight: `${
                    element.shadowRoot
                        .querySelector('.message-container protean-message')
                        .getBoundingClientRect().height
                }px`,
            };
        });
        await waitForChanges();

        expect(heights.messageContainerHeight).toEqual(
            heights.proteanMessageHeight,
        );
        expect(heights.messageContainerHeight).not.toEqual('0px');

        await dispatchEvent(page, ['protean-input', 'input'], 'blur');

        let messageContainerHeight = await page.$eval(
            'protean-input',
            element =>
                element.shadowRoot.querySelector<HTMLDivElement>(
                    '.message-container',
                ).style.height,
        );

        expect(messageContainerHeight).not.toEqual(
            heights.proteanMessageHeight,
        );
        expect(messageContainerHeight).toEqual('0px');

        proteanInput.setProperty('suppressMessages', true);
        await waitForChanges();

        await dispatchEvent(page, ['protean-input', 'input'], 'focus');

        messageContainerHeight = await page.$eval(
            'protean-input',
            element =>
                element.shadowRoot.querySelector<HTMLDivElement>(
                    '.message-container',
                ).style.height,
        );

        expect(messageContainerHeight).not.toEqual(
            heights.proteanMessageHeight,
        );
        expect(messageContainerHeight).toEqual('0px');
    });

    it('handles phone input', async () => {
        const { find, waitForChanges } = await newE2EPage({
            html:
                '<protean-input label="Label text" type="phone"></protean-input>',
        });

        const inputElement = await find('protean-input >>> input');

        expect(inputElement).toEqualAttribute('type', 'tel');

        const proteanInput = await find('protean-input');
        proteanInput.setProperty('value', '12');
        await waitForChanges();

        expect(await inputElement.getProperty('value')).toEqual('(12');

        await inputElement.type('a');
        await inputElement.type(' ');
        await inputElement.type('_');

        expect(await inputElement.getProperty('value')).toEqual('(12');

        await inputElement.type('3');
        await inputElement.type(')');

        expect(await inputElement.getProperty('value')).toEqual('(123)');

        await inputElement.type('4');

        expect(await inputElement.getProperty('value')).toEqual('(123) 4');
    });

    it('handles numeric input', async () => {
        const page = await newE2EPage({
            html:
                '<protean-input label="Label text" type="numeric"></protean-input>',
        });
        const { find, waitForChanges } = page;

        const inputElement = await find('protean-input >>> input');

        expect(inputElement).toEqualAttribute('type', 'tel');

        const proteanInput = await find('protean-input');

        proteanInput.setProperty('value', '12');
        await waitForChanges();

        expect(await inputElement.getProperty('value')).toEqual('12.00');

        await inputElement.type('a');
        await inputElement.type('!');
        await inputElement.type('_');

        expect(await inputElement.getProperty('value')).toEqual('12.00');

        await inputElement.type('3');

        expect(await inputElement.getProperty('value')).toEqual('120.03');

        await inputElement.type('4');

        expect(await inputElement.getProperty('value')).toEqual('1,200.34');

        await dispatchEvent(page, ['protean-input', 'input'], 'change');

        proteanInput.setProperty('format', '5dec');
        await waitForChanges();

        expect(await inputElement.getProperty('value')).toEqual('1,200.34000');
    });

    it('handles date input', async () => {
        const page = await newE2EPage({
            html:
                '<protean-input label="Label text" type="date"></protean-input>',
        });
        const { find, waitForChanges } = page;

        const inputElement = await find('protean-input >>> input');

        expect(inputElement).toEqualAttribute('type', 'tel');

        const proteanInput = await find('protean-input');

        proteanInput.setProperty('value', '1');
        await waitForChanges();

        expect(await inputElement.getProperty('value')).toEqual('1');

        await inputElement.type('a');
        await inputElement.type('!');
        await inputElement.type('_');

        expect(await inputElement.getProperty('value')).toEqual('1');

        await inputElement.type('2');
        await inputElement.type('/');

        expect(await inputElement.getProperty('value')).toEqual('12/');

        await inputElement.type('4');

        expect(await inputElement.getProperty('value')).toEqual('12/4');

        await dispatchEvent(page, ['protean-input', 'input'], 'change');

        proteanInput.setProperty('format', 'M/D/YY');
        await waitForChanges();

        expect(await inputElement.getProperty('value')).toEqual('12/4');
    });
});
