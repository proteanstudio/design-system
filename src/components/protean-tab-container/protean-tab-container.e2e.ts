import { newE2EPage } from '@stencil/core/testing';

describe('protean-message', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<protean-button>Button Text</protean-button>');
        const slotContainer = await page.find('protean-button >>> div');
        expect(slotContainer.textContent).toEqual(`Button Text`);
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
