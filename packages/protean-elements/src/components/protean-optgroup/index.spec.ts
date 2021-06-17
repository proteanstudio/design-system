import fakeMutationObserver from '@/test-helpers/mocks/MutationObserver';
import { newSpecPage } from '@stencil/core/testing';
import { ProteanOptgroup } from '.';
import { ProteanOption } from '@/components/protean-option';

describe('protean-optgroup', () => {
    let teardown: VoidFunction;
    beforeEach(function () {
        teardown = fakeMutationObserver();
    });

    afterEach(function () {
        teardown();
    });

    it('renders', async () => {
        const { root, rootInstance } = await newSpecPage({
            components: [ProteanOptgroup],
            html: '<protean-optgroup label="Optgroup Label"></protean-optgroup>',
        });

        expect(rootInstance.guid).toEqual(1000);
        expect(rootInstance.labelId).toEqual('protean-optgroup-label-1000');
        expect(rootInstance.optionElements).toHaveLength(0);

        const optgroupContainer = root.shadowRoot.querySelector(
            '.protean-optgroup-container',
        );
        expect(optgroupContainer).toEqualAttribute('role', 'group');
        expect(optgroupContainer).toEqualAttribute(
            'aria-labelledby',
            rootInstance.labelId,
        );
        expect(optgroupContainer).toEqualAttribute('aria-disabled', 'false');

        const optgroupLabel = root.shadowRoot.querySelector(
            '.protean-optgroup-label',
        );
        expect(optgroupLabel).toEqualAttribute('id', rootInstance.labelId);
        expect(optgroupLabel).toEqualAttribute('role', 'presentation');
        expect(optgroupLabel.textContent.trim()).toEqual('Optgroup Label');
    });

    it('passes disabled state to children', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanOptgroup, ProteanOption],
            html: '<protean-optgroup label="Optgroup Label"><protean-option value="1">1</protean-option><protean-option value="2">2</protean-option></protean-optgroup>',
        });

        const optionElements = Array.from(
            root.querySelectorAll('protean-option'),
        );

        expect(rootInstance.optionElements).toEqual(optionElements);
        expect(optionElements[0].disabledGroup).toEqual(false);
        expect(optionElements[1].disabledGroup).toEqual(false);

        const optgroupContainer = root.shadowRoot.querySelector(
            '.protean-optgroup-container',
        );

        expect(optgroupContainer).toEqualAttribute('aria-disabled', 'false');

        root.disabled = true;
        await waitForChanges();

        expect(optionElements[0].disabledGroup).toEqual(true);
        expect(optionElements[1].disabledGroup).toEqual(true);
        expect(optgroupContainer).toEqualAttribute('aria-disabled', 'true');
    });

    it('does not render label element is property not set', async () => {
        const { root, waitForChanges } = await newSpecPage({
            components: [ProteanOptgroup, ProteanOption],
            html: '<protean-optgroup></protean-optgroup>',
        });

        let optgroupLabel = root.shadowRoot.querySelector(
            '.protean-optgroup-label',
        );
        expect(optgroupLabel).toBeNull();

        root.label = 'Optgroup Label';
        await waitForChanges();
        optgroupLabel = root.shadowRoot.querySelector(
            '.protean-optgroup-label',
        );
        expect(optgroupLabel).not.toBeNull();
        expect(optgroupLabel.textContent).toEqual('Optgroup Label');
    });
});
