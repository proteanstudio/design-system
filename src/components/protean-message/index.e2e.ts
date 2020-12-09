import { newE2EPage } from '@stencil/core/testing';

describe('protean-message', () => {
    it('renders', async () => {
        const page = await newE2EPage({
            html: '<protean-message>Message Text</protean-message>',
        });

        const messageContainerElement = await page.find(
            'protean-message >>> .message-container',
        );

        expect(messageContainerElement).toEqualAttribute('role', 'alert');
        expect(messageContainerElement).toHaveClass('info');

        const slotContent = await page.$eval('protean-message', message => {
            return message.shadowRoot.querySelector('slot').assignedNodes()[0]
                .textContent;
        });

        expect(slotContent).toEqual(`Message Text`);
    });
});
