import { newE2EPage } from '@stencil/core/testing';

describe('protean-button', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<protean-button>Button Text</protean-button>');
        const slotContent = await page.$eval('protean-button', button => {
            return button.shadowRoot.querySelector('slot').assignedNodes()[0]
                .textContent;
        });

        expect(slotContent).toEqual(`Button Text`);
    });

    it('binds type property', async () => {
        const page = await newE2EPage();

        await page.setContent('<protean-button>Button Text</protean-button>');
        const proteanButton = await page.find('protean-button');
        const innerButton = await page.find('protean-button >>> button');

        expect(innerButton).toEqualAttribute('type', 'button');

        proteanButton.setProperty('type', 'submit');
        await page.waitForChanges();

        expect(innerButton).toEqualAttribute('type', 'submit');
    });

    it('binds disabled property', async () => {
        const page = await newE2EPage();

        await page.setContent('<protean-button>Button Text</protean-button>');
        const proteanButton = await page.find('protean-button');
        const innerButton = await page.find('protean-button >>> button');

        expect(innerButton).not.toHaveAttribute('disabled');

        proteanButton.setProperty('disabled', true);
        await page.waitForChanges();

        expect(innerButton).toHaveAttribute('disabled');
    });
});
