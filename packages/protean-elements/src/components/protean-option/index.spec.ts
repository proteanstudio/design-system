import { newSpecPage } from '@stencil/core/testing';
import { ProteanOption } from '.';

describe('protean-option', () => {
    it('renders base content', async () => {
        const { root } = await newSpecPage({
            components: [ProteanOption],
            html: '<protean-option value="1" label="Label 1">Label 1</protean-option>',
        });

        const optionContainer = root.shadowRoot.querySelector(
            '.protean-option-container',
        );

        expect(optionContainer).toEqualAttribute('role', 'option');
        expect(optionContainer).toEqualAttribute('aria-selected', 'false');
        expect(optionContainer).toEqualAttribute('aria-disabled', 'false');

        const selectedContainer = root.shadowRoot.querySelector(
            '.protean-option-selected',
        );
        expect(selectedContainer.childNodes).toHaveLength(0);
    });

    it('handles disabled states', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanOption],
            html: '<protean-option value="1" label="Label 1">Label 1</protean-option>',
        });

        const optionContainer = root.shadowRoot.querySelector(
            '.protean-option-container',
        );

        expect(optionContainer).toEqualAttribute('aria-disabled', 'false');
        expect(rootInstance.isDisabled).toEqual(false);

        root.disabled = true;
        await waitForChanges();

        expect(optionContainer).toEqualAttribute('aria-disabled', 'true');
        expect(rootInstance.isDisabled).toEqual(true);

        root.disabled = false;
        await waitForChanges();

        expect(optionContainer).toEqualAttribute('aria-disabled', 'false');
        expect(rootInstance.isDisabled).toEqual(false);

        root.disabledGroup = true;
        await waitForChanges();

        expect(optionContainer).toEqualAttribute('aria-disabled', 'true');
        expect(rootInstance.isDisabled).toEqual(true);

        root.disabledGroup = false;
        await waitForChanges();

        expect(optionContainer).toEqualAttribute('aria-disabled', 'false');
        expect(rootInstance.isDisabled).toEqual(false);
    });

    it('prevents click event bubbling when disabled', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanOption],
            html: '<protean-option value="1" label="Label 1">Label 1</protean-option>',
        });

        const clickEvent = new MouseEvent('click');
        const sIPMock = jest.fn();
        clickEvent.stopImmediatePropagation = sIPMock;

        expect(rootInstance.isDisabled).toEqual(false);

        root.dispatchEvent(clickEvent);
        expect(sIPMock).toHaveBeenCalledTimes(0);

        root.disabled = true;
        await waitForChanges();

        expect(rootInstance.isDisabled).toEqual(true);

        root.dispatchEvent(clickEvent);
        expect(sIPMock).toHaveBeenCalledTimes(1);
    });

    it('handles selected state', async () => {
        const { root, waitForChanges } = await newSpecPage({
            components: [ProteanOption],
            html: '<protean-option value="1" label="Label 1"> Label 1</protean-option>',
        });

        const optionContainer = root.shadowRoot.querySelector(
            '.protean-option-container',
        );

        let selectedIcon = root.shadowRoot.querySelector('protean-icon');

        expect(optionContainer).toEqualAttribute('aria-selected', 'false');
        expect(selectedIcon).toBeNull();

        root.selected = true;
        await waitForChanges();
        selectedIcon = root.shadowRoot.querySelector('protean-icon');

        expect(optionContainer).toEqualAttribute('aria-selected', 'true');
        expect(selectedIcon).not.toBeNull();

        root.selected = false;
        await waitForChanges();

        expect(optionContainer).toEqualAttribute('aria-selected', 'false');
    });
});
