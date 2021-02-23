import { newE2EPage } from '@stencil/core/testing';

describe('protean-optgroup', () => {
    it('renders', async () => {
        const page = await newE2EPage({
            html:
                '<protean-optgroup label="Optgroup Label"><protean-option value="1">1</protean-option></protean-optgroup>',
        });

        const optgroupContainer = await page.find(
            'protean-optgroup >>> .protean-optgroup-container',
        );

        expect(optgroupContainer).toEqualAttribute('role', 'group');
        expect(optgroupContainer).toEqualAttribute(
            'aria-labelledby',
            'protean-optgroup-label-1000',
        );
        expect(optgroupContainer).toEqualAttribute('aria-disabled', 'false');

        const optgroupLabel = await page.find(
            'protean-optgroup >>> .protean-optgroup-label',
        );

        expect(optgroupLabel).toEqualAttribute(
            'id',
            'protean-optgroup-label-1000',
        );
        expect(optgroupLabel).toEqualAttribute('role', 'presentation');
        expect(optgroupLabel.textContent).toEqual('Optgroup Label');

        const slottedElement = await page.$eval(
            'protean-optgroup',
            optgroup => {
                return optgroup.shadowRoot
                    .querySelector('slot')
                    .assignedElements()[0].localName;
            },
        );

        expect(slottedElement).toEqual('protean-option');
    });

    it('handles disabled state', async () => {
        const page = await newE2EPage({
            html:
                '<protean-optgroup label="Optgroup Label"><protean-option value="1">1</protean-option> <protean-option value="2">2</protean-option></protean-optgroup>',
        });

        const optgroupContainer = await page.find(
            'protean-optgroup >>> .protean-optgroup-container',
        );

        expect(optgroupContainer).toEqualAttribute('aria-disabled', 'false');

        let optionElements = await page.findAll('protean-option');

        expect(await optionElements[0].getProperty('disabledGroup')).toEqual(
            false,
        );
        expect(await optionElements[1].getProperty('disabledGroup')).toEqual(
            false,
        );

        const proteanOptgroup = await page.find('protean-optgroup');
        proteanOptgroup.setProperty('disabled', true);

        await page.waitForChanges();

        expect(optgroupContainer).toEqualAttribute('aria-disabled', 'true');

        optionElements = await page.findAll('protean-option');

        expect(await optionElements[0].getProperty('disabledGroup')).toEqual(
            true,
        );
        expect(await optionElements[1].getProperty('disabledGroup')).toEqual(
            true,
        );

        await page.$eval('protean-optgroup', optgroup => {
            const thirdOption = document.createElement('protean-option');
            thirdOption.value = '3';

            optgroup.appendChild(thirdOption);
        });

        await page.waitForChanges();

        optionElements = await page.findAll('protean-option');

        expect(await optionElements[2].getProperty('disabledGroup')).toEqual(
            true,
        );
    });
});
