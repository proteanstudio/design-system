import { newSpecPage } from '@stencil/core/testing';
import { ProteanCheckbox } from '.';

describe('protean-message', () => {
    it('renders', async () => {
        const { root, rootInstance } = await newSpecPage({
            components: [ProteanCheckbox],
            html: '<protean-checkbox label="test label"></protean-checkbox>',
        });

        expect(rootInstance.guid).toEqual(1000);
        expect(rootInstance.checkboxId).toEqual('checkbox-1000');
        expect(rootInstance.checkboxAriaLabel).toEqual(null);
        expect(rootInstance.checkboxAlignment).toEqual('left');

        const innerCheckbox = root.shadowRoot.querySelector('input');

        expect(innerCheckbox.className).toEqual('sr');
        expect(innerCheckbox.type).toEqual('checkbox');
        expect(innerCheckbox).toEqualAttribute('id', rootInstance.checkboxId);
        expect(innerCheckbox).toEqualAttribute('aria-label', null);
        expect(innerCheckbox.checked).toEqual(false);

        const innerLabel = root.shadowRoot.querySelector('label');
        expect(innerLabel.className).toEqual('alignment-left');
        expect(innerLabel).toEqualAttribute('htmlFor', rootInstance.checkboxId); //JSDOM quirk

        const checkboxSymbol = root.shadowRoot.querySelector(
            '.checkbox-symbol',
        );
        expect(checkboxSymbol).toHaveClass('standard');

        const checkboxFill = root.shadowRoot.querySelector('.checkbox-fill');
        expect(checkboxFill).toBeNull;

        const labelText = root.shadowRoot.querySelector('.label-text');
        expect(labelText.textContent).toEqual('test label');
    });

    it('correctly computes aria-label', function () {
        const rootInstance = new ProteanCheckbox();

        expect(rootInstance.checkboxAriaLabel).toEqual(null);

        rootInstance.ariaLabel = 'test aria-label';
        expect(rootInstance.checkboxAriaLabel).toEqual('test aria-label');

        rootInstance.label = 'test label';
        expect(rootInstance.checkboxAriaLabel).toEqual(null);
    });

    it('correctly computes alignment', function () {
        const rootInstance = new ProteanCheckbox();

        expect(rootInstance.checkboxAlignment).toEqual('left');

        rootInstance.alignment = 'right';
        expect(rootInstance.checkboxAlignment).toEqual('right');

        (rootInstance.alignment as string) = 'foo';
        expect(rootInstance.checkboxAlignment).toEqual('left');

        (rootInstance.alignment as string) = 'left';
        expect(rootInstance.checkboxAlignment).toEqual('left');
    });

    it('bubbles change event', async () => {
        const { root, waitForChanges } = await newSpecPage({
            components: [ProteanCheckbox],
            html: '<protean-checkbox label="test label"></protean-checkbox>',
        });

        const innerCheckbox = root.shadowRoot.querySelector('input');

        const changeSpy = jest.fn();

        root.addEventListener('change', changeSpy);
        innerCheckbox.checked = true;
        await waitForChanges();

        innerCheckbox.dispatchEvent(new Event('change'));

        expect(changeSpy).toBeCalledTimes(1);
        expect(root.checked).toEqual(false);

        root.onchange = undefined;
        await waitForChanges();
        innerCheckbox.dispatchEvent(new Event('change'));

        expect(changeSpy).toBeCalledTimes(2);
        expect(root.checked).toEqual(true);
    });

    it('updates checked with default change handler', async () => {
        const { root, waitForChanges } = await newSpecPage({
            components: [ProteanCheckbox],
            html: '<protean-checkbox label="test label"></protean-checkbox>',
        });

        expect(root.checked).toEqual(false);

        root.onchange = undefined;
        await waitForChanges();

        root.dispatchEvent(
            new CustomEvent('change', { detail: { checked: true } }),
        );

        expect(root.checked).toEqual(true);
    });

    it('handles checkbox fill', async () => {
        const { root, waitForChanges } = await newSpecPage({
            components: [ProteanCheckbox],
            html:
                '<protean-checkbox label="test label" indeterminate checked></protean-checkbox>',
        });

        let checkboxFill = root.shadowRoot.querySelector('.checkbox-fill');
        expect(checkboxFill).toHaveClass('indeterminate');
        expect(checkboxFill).not.toHaveClass('checked');

        root.indeterminate = false;
        await waitForChanges();
        checkboxFill = root.shadowRoot.querySelector('.checkbox-fill');

        expect(checkboxFill).toHaveClass('checked');
        expect(checkboxFill).not.toHaveClass('indeterminate');
    });

    it('handles toggle render', async () => {
        const { root, waitForChanges } = await newSpecPage({
            components: [ProteanCheckbox],
            html:
                '<protean-checkbox label="test label" indeterminate checked></protean-checkbox>',
        });

        let checkboxSymbol = root.shadowRoot.querySelector('.checkbox-symbol');
        expect(checkboxSymbol).toHaveClass('standard');
        expect(checkboxSymbol).not.toHaveClass('toggle');

        root.type = 'toggle';
        await waitForChanges();

        checkboxSymbol = root.shadowRoot.querySelector('.checkbox-symbol');
        expect(checkboxSymbol).toHaveClass('toggle');
        expect(checkboxSymbol).not.toHaveClass('standard');
    });
});
