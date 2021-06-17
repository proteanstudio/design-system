import { newE2EPage } from '@stencil/core/testing';
import dispatchEvent from '@/test-helpers/dispatchEvent';

describe('protean-checkbox', () => {
    it('renders base case', async () => {
        const { find } = await newE2EPage({
            html: '<protean-checkbox label="test label"></protean-checkbox>',
        });

        const innerCheckbox = await find('protean-checkbox >>> input');

        expect(innerCheckbox).toEqualAttribute('type', 'checkbox');
        expect(innerCheckbox).toEqualAttribute('id', 'checkbox-1000');
        expect(innerCheckbox).toEqualAttribute('aria-label', null);
        expect(innerCheckbox).not.toHaveAttribute('checked');

        const innerLabel = await find('protean-checkbox >>> label');
        expect(innerLabel).toEqualAttribute('for', 'checkbox-1000');
        expect(innerLabel).toHaveClass('alignment-left');

        const checkboxSymbol = await find(
            'protean-checkbox >>> .checkbox-symbol',
        );
        expect(checkboxSymbol).toHaveClass('standard');

        const checkboxFill = await find(
            'protean-checkbox >>> .checkbox-symbol',
        );
        expect(checkboxFill).toBeNull;

        const innerLabelText = await find('protean-checkbox >>> .label-text');
        expect(innerLabelText.textContent).toEqual('test label');
    });

    it('renders correct fill state', async () => {
        const { find, waitForChanges } = await newE2EPage({
            html: '<protean-checkbox label="test label" indeterminate checked></protean-checkbox>',
        });

        let checkboxFill = await find('protean-checkbox >>> .checkbox-fill');
        expect(checkboxFill).toHaveClass('indeterminate');
        expect(checkboxFill).not.toHaveClass('checked');

        const proteanCheckbox = await find('protean-checkbox');
        proteanCheckbox.setProperty('indeterminate', false);
        await waitForChanges();

        checkboxFill = await find('protean-checkbox >>> .checkbox-fill');
        expect(checkboxFill).toHaveClass('checked');
        expect(checkboxFill).not.toHaveClass('indeterminate');
    });

    it('renders toggle fill', async () => {
        const { find, waitForChanges } = await newE2EPage({
            html: '<protean-checkbox label="test label"></protean-checkbox>',
        });

        let checkboxSymbol = await find(
            'protean-checkbox >>> .checkbox-symbol',
        );
        expect(checkboxSymbol).toHaveClass('standard');
        expect(checkboxSymbol).not.toHaveClass('toggle');

        const proteanCheckbox = await find('protean-checkbox');
        proteanCheckbox.setProperty('variant', 'toggle');
        await waitForChanges();

        checkboxSymbol = await find('protean-checkbox >>> .checkbox-symbol');
        expect(checkboxSymbol).toHaveClass('toggle');
        expect(checkboxSymbol).not.toHaveClass('standard');
    });

    it('bubbles change event from inner checkbox', async () => {
        const page = await newE2EPage({
            html: '<protean-checkbox label="test label"></protean-checkbox>',
        });
        const { find, waitForChanges } = page;
        const innerCheckbox = await find('protean-checkbox >>> input');
        innerCheckbox.setProperty('checked', true);

        await page.$eval('protean-checkbox', element => {
            element.shadowRoot.querySelector('input').checked = true;
        });
        await waitForChanges();

        const proteanCheckbox = await find('protean-checkbox');
        const changeSpy = await proteanCheckbox.spyOnEvent('change');

        await dispatchEvent(page, ['protean-checkbox', 'input'], 'change');

        expect(changeSpy).toHaveReceivedEventTimes(1);
        expect(changeSpy).toHaveReceivedEventDetail({ checked: true });
    });

    it('automatically sets checked with default change handler', async () => {
        const page = await newE2EPage({
            html: '<protean-checkbox label="test label"></protean-checkbox>',
        });

        const proteanCheckbox = await page.find('protean-checkbox');

        expect(proteanCheckbox).not.toHaveAttribute('checked');

        await dispatchEvent(page, 'protean-checkbox', 'change', {
            detail: { checked: true },
        });

        expect(proteanCheckbox).toHaveAttribute('checked');
    });

    it('handles aria-label', async () => {
        const page = await newE2EPage({
            html: '<protean-checkbox></protean-checkbox>',
        });
        const { find } = page;

        const proteanCheckbox = await find('protean-checkbox');

        const innerCheckbox = await find('protean-checkbox >>> input');
        expect(innerCheckbox).toEqualAttribute('aria-label', null);

        proteanCheckbox.setProperty('a11yLabel', 'test aria-label');
        await page.waitForChanges();

        expect(innerCheckbox).toEqualAttribute('aria-label', 'test aria-label');

        proteanCheckbox.setProperty('label', 'test label');
        await page.waitForChanges();

        expect(innerCheckbox).toEqualAttribute('aria-label', null);
    });

    it('delegates focus', async () => {
        const page = await newE2EPage({
            html: '<protean-checkbox></protean-checkbox>',
        });

        await dispatchEvent(page, 'protean-checkbox', 'focus');

        const { checkbox, activeElement } = await page.$eval(
            'protean-checkbox',
            element => {
                const checkbox = element.shadowRoot.querySelector('input');
                const activeElement = element.shadowRoot.activeElement;

                return { checkbox, activeElement };
            },
        );

        expect(activeElement).toEqual(checkbox);
    });
});
