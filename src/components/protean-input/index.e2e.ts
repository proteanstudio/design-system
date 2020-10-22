import { newE2EPage } from '@stencil/core/testing';
import dispatchEvent from '../../utils/test-helpers/dispatchEvent';

describe('protean-input', () => {
    it('renders basic input', async () => {
        const page = await newE2EPage();

        await page.setContent('<protean-input></protean-input>');
        const labelElement = await page.find('protean-input >>> label');
        expect(labelElement).toBeNull();

        const inputElement = await page.find('protean-input >>> input');

        expect(inputElement.getAttribute('id')).toContain('protean-input-');
        expect(inputElement).toEqualAttribute('type', 'text');
        expect(inputElement).toHaveAttribute('required');
        expect(inputElement).not.toHaveAttribute('aria-label');
        expect(inputElement).toEqualAttribute('aria-invalid', 'false');
        expect(inputElement).toHaveAttribute('aria-describedby');

        const messageContainer = await page.find(
            'protean-input >>> .message-container',
        );
        expect(messageContainer).not.toBeNull();
    });

    it('handles label and optional props', async () => {
        const page = await newE2EPage();

        await page.setContent('<protean-input></protean-input>');

        let labelElement = await page.find('protean-input >>> label');
        expect(labelElement).toBeNull();

        const proteanInput = await page.find('protean-input');

        proteanInput.setProperty('label', 'Label text');
        await page.waitForChanges();

        labelElement = await page.find('protean-input >>> label');

        expect(labelElement).not.toBeNull();
        expect(labelElement.textContent).toEqual('Label text');

        const inputElement = await page.find('protean-input >>> input');

        expect(labelElement).toEqualAttribute(
            'for',
            inputElement.getAttribute('id'),
        );

        let optionalSpan = await page.find('protean-input >>> .optional-tag');
        expect(optionalSpan).toBeNull();

        proteanInput.setProperty('optional', true);
        await page.waitForChanges();

        optionalSpan = await page.find('protean-input >>> .optional-tag');
        expect(optionalSpan).not.toBeNull();
        expect(optionalSpan.textContent.trim()).toEqual('(optional)');
    });

    it('correctly binds aria-label', async () => {
        const page = await newE2EPage();

        await page.setContent('<protean-input></protean-input>');

        const inputElement = await page.find('protean-input >>> input');

        expect(inputElement).not.toHaveAttribute('aria-label');

        const proteanInput = await page.find('protean-input');

        proteanInput.setProperty('ariaLabel', 'aria-label text');
        await page.waitForChanges();

        expect(inputElement).toEqualAttribute('aria-label', 'aria-label text');

        proteanInput.setProperty('label', 'ariaLabel text');
        await page.waitForChanges();

        expect(inputElement).not.toHaveAttribute('aria-label');
    });

    it('handles optional binding', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<protean-input label="Label text"></protean-input>',
        );

        const inputElement = await page.find('protean-input >>> input');
        let optionalSpan = await page.find('protean-input >>> .optional-tag');

        expect(inputElement).toHaveAttribute('required');
        expect(optionalSpan).toBeNull;

        const proteanInput = await page.find('protean-input');

        proteanInput.setProperty('optional', true);
        await page.waitForChanges();

        expect(inputElement).not.toHaveAttribute('required');
        expect(optionalSpan).not.toBeNull;
    });

    it('emits change event and handles defaults', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<protean-input label="Label text"></protean-input>',
        );

        const proteanInput = await page.find('protean-input');
        const proteanInputChange = await proteanInput.spyOnEvent('change');

        await page.$eval('protean-input', element => {
            element.shadowRoot.querySelector('input').value = 'a';
        }); // setProperty not working here
        await page.waitForChanges();

        await dispatchEvent(page, ['protean-input', 'input'], 'change');

        expect(proteanInputChange).toHaveReceivedEventDetail({
            value: 'a',
            formattedValue: 'a',
        });
        expect(await proteanInput.getProperty('value')).toEqual('a');

        await page.$eval('protean-input', (element: HTMLElement) => {
            element.onchange = () => {}; //override default onchange
            element.shadowRoot.querySelector('input').value = 'ab';
        });
        await page.waitForChanges();

        await dispatchEvent(page, ['protean-input', 'input'], 'change');
        expect(proteanInputChange).toHaveReceivedEventDetail({
            value: 'ab',
            formattedValue: 'ab',
        });
        expect(await proteanInput.getProperty('value')).toEqual('a');
    });

    it('emits input event', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<protean-input label="Label text"></protean-input>',
        );

        const inputElement = await page.find('protean-input >>> input');
        const proteanInput = await page.find('protean-input');
        const proteanInputInput = await proteanInput.spyOnEvent('input');

        await inputElement.type('a');

        expect(proteanInputInput).toHaveReceivedEventDetail({
            value: 'a',
            formattedValue: 'a',
        });
    });

    it('handles message content and validity', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<protean-input label="Label text"></protean-input>',
        );

        const inputElement = await page.find('protean-input >>> input');
        const messageContentContainer = await page.find(
            'protean-input >>> .message-container ul',
        );
        const proteanMessage = await page.find(
            'protean-input >>> .message-container protean-message',
        );

        expect(inputElement).toEqualAttribute(
            'aria-describedby',
            messageContentContainer.getAttribute('id'),
        );
        expect(inputElement).toEqualAttribute('aria-invalid', false);
        expect(proteanMessage).toEqualAttribute('type', 'info');
        expect(proteanMessage).toEqualAttribute('level', 'status');

        const proteanInput = await page.find('protean-input');
        proteanInput.setProperty('hints', ['hint 1']);
        await page.waitForChanges();

        expect(messageContentContainer.textContent.trim()).toEqual('hint 1');

        proteanInput.setProperty('errors', ['error 1']);
        await page.waitForChanges();

        expect(inputElement).toEqualAttribute('aria-invalid', true);
        expect(proteanMessage).toEqualAttribute('type', 'error');
        expect(messageContentContainer.textContent.trim()).toEqual('error 1');
    });

    it.only('updates message container height on focus and blur', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<protean-input label="Label text"></protean-input>',
        );

        const proteanInput = await page.find('protean-input');
        proteanInput.setProperty('hints', ['hint 1']);
        await page.waitForChanges();

        await dispatchEvent(page, ['protean-input', 'input'], 'focus', {
            bubbles: true,
        });

        let { messageContainerHeight, proteanMessageHeight } = await page.$eval(
            'protean-input',
            element => {
                return {
                    messageContainerHeight: element.shadowRoot.querySelector<
                        HTMLDivElement
                    >('.message-container').style.height,
                    proteanMessageHeight: `${
                        element.shadowRoot
                            .querySelector('.message-container protean-message')
                            .getBoundingClientRect().height
                    }px`,
                };
            },
        );
        await page.waitForChanges();

        expect(messageContainerHeight).toEqual(proteanMessageHeight);
        expect(messageContainerHeight).not.toEqual('0px');

        await dispatchEvent(page, ['protean-input', 'input'], 'blur');

        messageContainerHeight = await page.$eval(
            'protean-input',
            element =>
                element.shadowRoot.querySelector<HTMLDivElement>(
                    '.message-container',
                ).style.height,
        );

        expect(messageContainerHeight).not.toEqual(proteanMessageHeight);
        expect(messageContainerHeight).toEqual('0px');

        proteanInput.setProperty('suppressMessages', true);
        await page.waitForChanges();

        await dispatchEvent(page, ['protean-input', 'input'], 'focus');

        messageContainerHeight = await page.$eval(
            'protean-input',
            element =>
                element.shadowRoot.querySelector<HTMLDivElement>(
                    '.message-container',
                ).style.height,
        );

        expect(messageContainerHeight).not.toEqual(proteanMessageHeight);
        expect(messageContainerHeight).toEqual('0px');
    });

    //Test scheduledAfterRender, likely in unit test
    //Test formatting functions get called in spec, unit test each formatter individually.  Do basic test here to verify filtering
});
