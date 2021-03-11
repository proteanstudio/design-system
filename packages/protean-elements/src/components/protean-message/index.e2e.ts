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

        const decorators = await page.findAll('protean-message >>> .decorator');

        expect(decorators).toHaveLength(2);
        expect(decorators[0]).toHaveClass('top');
        expect(decorators[0]).toEqualAttribute('viewBox', '0 0 125 125');
        expect(decorators[0]).toEqualAttribute('aria-hidden', 'true');
        expect(decorators[1]).toHaveClass('bottom');

        const icon = await page.find('protean-message >>> protean-icon');

        expect(icon).toEqualAttribute('type', 'status-info-filled');
    });
});
