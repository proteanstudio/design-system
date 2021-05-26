import { newE2EPage } from '@stencil/core/testing';

describe('protean-option', () => {
    it('renders', async () => {
        const page = await newE2EPage({
            html: '<protean-option value="1" label="Label 1">Label 1</protean-option>',
        });

        const optionContainer = await page.find(
            'protean-option >>> .protean-option-container',
        );

        expect(optionContainer).toEqualAttribute('role', 'option');
        expect(optionContainer).toEqualAttribute('aria-selected', 'false');
        expect(optionContainer).toEqualAttribute('aria-disabled', 'false');

        const selectedIcon = await page.find('protean-option >>> protean-icon');

        expect(selectedIcon).toBeNull();

        const slotContent = await page.$eval('protean-option', option => {
            return option.shadowRoot.querySelector('slot').assignedNodes()[0]
                .textContent;
        });

        expect(slotContent).toEqual('Label 1');
    });

    it('handles disabled state', async () => {
        const page = await newE2EPage({
            html: '<protean-option value="1" label="Label 1">Label 1</protean-option>',
        });

        const optionContainer = await page.find(
            'protean-option >>> .protean-option-container',
        );

        expect(optionContainer).toEqualAttribute('aria-disabled', 'false');

        const proteanOption = await page.find('protean-option');

        proteanOption.setProperty('disabled', true);
        await page.waitForChanges();

        expect(optionContainer).toEqualAttribute('aria-disabled', 'true');

        proteanOption.setProperty('disabled', false);
        proteanOption.setProperty('disabledGroup', false);
        await page.waitForChanges();

        expect(optionContainer).toEqualAttribute('aria-disabled', 'false');

        proteanOption.setProperty('disabledGroup', true);
        await page.waitForChanges();

        expect(optionContainer).toEqualAttribute('aria-disabled', 'true');
    });

    it('handles selected state', async () => {
        const page = await newE2EPage({
            html: '<protean-option value="1" label="Label 1">Label 1</protean-option>',
        });

        const optionContainer = await page.find(
            'protean-option >>> .protean-option-container',
        );

        expect(optionContainer).toEqualAttribute('aria-selected', 'false');

        const proteanOption = await page.find('protean-option');

        proteanOption.setProperty('selected', true);
        await page.waitForChanges();

        expect(optionContainer).toEqualAttribute('aria-selected', 'true');

        proteanOption.setProperty('selected', false);
        await page.waitForChanges();

        expect(optionContainer).toEqualAttribute('aria-selected', 'false');
    });
});
