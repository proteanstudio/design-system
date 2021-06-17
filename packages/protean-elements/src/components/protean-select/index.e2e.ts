import dispatchEvent from '@/test-helpers/dispatchEvent';
import { newE2EPage } from '@stencil/core/testing';

describe('protean-select', () => {
    it('renders with default bindings', async () => {
        const page = await newE2EPage({
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const proteanInput = await page.find(
            'protean-select >>> protean-input',
        );

        expect(proteanInput).toEqualAttribute('value', null);
        expect(proteanInput).toEqualAttribute('label', 'Select label');
        expect(proteanInput).not.toHaveAttribute('optional');
        expect(await proteanInput.getProperty('errors')).toEqual(undefined);
        expect(proteanInput).not.toHaveAttribute('disabled');
        expect(proteanInput).toEqualAttribute('type', 'button');
        expect(proteanInput).toHaveAttribute('suppress-messages');
        expect(await proteanInput.getProperty('a11yLabel')).toEqual(null);
        expect(await proteanInput.getProperty('ariaHasPopup')).toEqual(
            'listbox',
        );
        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(false);

        const proteanIcon = await page.find('protean-select >>> protean-icon');

        expect(proteanIcon).toHaveClass('protean-select-icon');
        expect(proteanIcon).toEqualAttribute('type', 'chevron-down');

        const selectSeparator = await page.find(
            'protean-select >>> .protean-select-separator',
        );

        expect(selectSeparator).toHaveAttribute('hidden');

        const selectDropdown = await page.find(
            'protean-select >>> .protean-select-dropdown',
        );

        expect(selectDropdown).toEqualAttribute('role', 'listbox');
        expect(selectDropdown).toEqualAttribute('aria-label', 'Select label');
        expect(selectDropdown).toEqualAttribute('aria-required', 'true');
        expect(selectDropdown).toEqualAttribute(
            'aria-multiselectable',
            'false',
        );
        expect(selectDropdown).toEqualAttribute('tabindex', '-1');
        expect(selectDropdown).toEqualAttribute('aria-activedescendant', null);
        expect(selectDropdown).toHaveAttribute('hidden');
    });

    it('passes props to inner input', async () => {
        const page = await newE2EPage({
            html: '<protean-select value="2" label="Select label" optional disabled><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const proteanInput = await page.find(
            'protean-select >>> protean-input',
        );

        expect(await proteanInput.getProperty('value')).toEqual('Option 2');
        expect(proteanInput).toEqualAttribute('label', 'Select label');
        expect(proteanInput).toHaveAttribute('optional');
        expect(proteanInput).toHaveAttribute('disabled');

        const proteanSelect = await page.find(
            'protean-select >>> protean-input',
        );

        proteanSelect.setProperty('errors', ['1']);
        await page.waitForChanges();

        expect(await proteanInput.getProperty('errors')).toEqual(['1']);
    });

    it('passes props to listbox', async () => {
        const page = await newE2EPage({
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const selectDropdown = await page.find(
            'protean-select >>> .protean-select-dropdown',
        );

        expect(selectDropdown).toEqualAttribute('aria-label', 'Select label');
        expect(selectDropdown).toEqualAttribute('aria-required', 'true');
        expect(selectDropdown).toEqualAttribute(
            'aria-multiselectable',
            'false',
        );

        const proteanSelect = await page.find('protean-select');

        proteanSelect.setProperty('label', 'Updated label');
        proteanSelect.setProperty('optional', true);
        proteanSelect.setProperty('multiple', true);
        await page.waitForChanges();

        expect(selectDropdown).toEqualAttribute('aria-label', 'Updated label');
        expect(selectDropdown).toEqualAttribute('aria-required', 'false');
        expect(selectDropdown).toEqualAttribute('aria-multiselectable', 'true');
    });

    it('appropriately binds aria-label', async () => {
        const page = await newE2EPage({
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const proteanSelect = await page.find('protean-select');

        proteanSelect.setProperty('a11yLabel', 'Select aria-label');
        await page.waitForChanges();

        const proteanInput = await page.find(
            'protean-select >>> protean-input',
        );

        expect(await proteanInput.getProperty('a11yLabel')).toEqual(null);

        proteanSelect.setProperty('label', '');
        await page.waitForChanges();

        expect(await proteanInput.getProperty('a11yLabel')).toEqual(
            'Select aria-label',
        );

        proteanSelect.setProperty('a11yLabel', undefined);
        await page.waitForChanges();

        expect(await proteanInput.getProperty('a11yLabel')).toEqual(null);
    });

    it('toggles dropdown on input click and binds associated props for each state', async () => {
        const page = await newE2EPage({
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const proteanInput = await page.find(
            'protean-select >>> protean-input',
        );
        const selectDropdown = await page.find(
            'protean-select >>> .protean-select-dropdown',
        );
        const selectSeparator = await page.find(
            'protean-select >>> .protean-select-separator',
        );

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(false);
        expect(selectDropdown).toHaveAttribute('hidden');
        expect(selectSeparator).toHaveAttribute('hidden');

        await dispatchEvent(page, ['protean-select', 'protean-input'], 'click');

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(true);
        expect(selectDropdown).not.toHaveAttribute('hidden');
        expect(selectSeparator).not.toHaveAttribute('hidden');
    });

    it('handle change event by default', async () => {
        const page = await newE2EPage({
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const proteanSelect = await page.find('protean-select');

        await dispatchEvent(page, 'protean-select', 'change', {
            detail: { value: '1' },
        });

        expect(await proteanSelect.getProperty('value')).toEqual('1');

        proteanSelect.setProperty('multiple', true);
        await page.waitForChanges();

        await dispatchEvent(page, 'protean-select', 'change', {
            detail: { selectedOptions: ['1', '2'] },
        });

        expect(await proteanSelect.getProperty('selectedOptions')).toEqual([
            '1',
            '2',
        ]);
    });

    it('emits change event on option click in single select', async () => {
        const page = await newE2EPage({
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const proteanSelect = await page.find('protean-select');
        const changeSpy = await proteanSelect.spyOnEvent('change');

        await dispatchEvent(
            page,
            'protean-select protean-option:nth-child(2)',
            'click',
            { bubbles: true },
        );

        expect(changeSpy).toHaveReceivedEventTimes(0);
        expect(await proteanSelect.getProperty('value')).toEqual('2');

        await dispatchEvent(
            page,
            'protean-select protean-option:nth-child(1)',
            'click',
            { bubbles: true },
        );

        expect(changeSpy).toHaveReceivedEventTimes(1);
        expect(await proteanSelect.getProperty('value')).toEqual('1');
    });

    it('emits change event on option click in multi select', async () => {
        const page = await newE2EPage({
            html: '<protean-select label="Select label" multiple><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const proteanSelect = await page.find('protean-select');
        const changeSpy = await proteanSelect.spyOnEvent('change');

        await dispatchEvent(
            page,
            'protean-select protean-option:nth-child(2)',
            'click',
            { bubbles: true },
        );

        expect(changeSpy).toHaveReceivedEventTimes(1);
        expect(await proteanSelect.getProperty('selectedOptions')).toEqual([
            '2',
        ]);

        await dispatchEvent(
            page,
            'protean-select protean-option:nth-child(1)',
            'click',
            { bubbles: true },
        );

        expect(changeSpy).toHaveReceivedEventTimes(2);
        expect(await proteanSelect.getProperty('selectedOptions')).toEqual([
            '2',
            '1',
        ]);

        await dispatchEvent(
            page,
            'protean-select protean-option:nth-child(2)',
            'click',
            { bubbles: true },
        );

        expect(changeSpy).toHaveReceivedEventTimes(3);
        expect(await proteanSelect.getProperty('selectedOptions')).toEqual([
            '1',
        ]);
    });

    it('initiallizes value from first selected option', async () => {
        const page = await newE2EPage({
            html: '<protean-select label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2" selected>Option 2</protean-option></protean-select>',
        });

        const proteanSelect = await page.find('protean-select');

        expect(await proteanSelect.getProperty('value')).toEqual('2');
    });

    it('initiallizes selectedOptions from selected option elements', async () => {
        const page = await newE2EPage({
            html: '<protean-select label="Select label" multiple><protean-option value="1" selected>1</protean-option><protean-option value="2" label="Option 2" selected>Option 2</protean-option></protean-select>',
        });

        const proteanSelect = await page.find('protean-select');

        expect(await proteanSelect.getProperty('selectedOptions')).toEqual([
            '1',
            '2',
        ]);
    });

    it('mutates options to show selected', async () => {
        const page = await newE2EPage({
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const proteanOptions = await page.findAll(
            'protean-select protean-option',
        );

        expect(proteanOptions[0]).not.toHaveAttribute('selected');
        expect(proteanOptions[1]).toHaveAttribute('selected');

        const proteanSelect = await page.find('protean-select');

        proteanSelect.setProperty('multiple', true);
        proteanSelect.setProperty('selectedOptions', ['1', '2']);
        await page.waitForChanges();

        expect(proteanOptions[0]).toHaveAttribute('selected');
        expect(proteanOptions[1]).toHaveAttribute('selected');
    });

    it('sets display value for single select', async () => {
        const page = await newE2EPage({
            html: '<protean-select value="1" label="Select label"><protean-option value="1">Option 1 no label</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option><protean-option value="3"></protean-option></protean-select>',
        });

        const proteanSelect = await page.find('protean-select');
        const proteanInput = await page.find(
            'protean-select >>> protean-input',
        );

        expect(await proteanInput.getProperty('value')).toEqual(
            'Option 1 no label',
        );

        proteanSelect.setProperty('value', '2');
        await page.waitForChanges();

        expect(await proteanInput.getProperty('value')).toEqual('Option 2');

        proteanSelect.setProperty('value', '3');
        await page.waitForChanges();

        expect(await proteanInput.getProperty('value')).toEqual('3');

        proteanSelect.setProperty('value', 'foo');
        await page.waitForChanges();

        expect(await proteanInput.getProperty('value')).toEqual('foo');
    });

    it('sets display value for multi select', async () => {
        const page = await newE2EPage({
            html: '<protean-select multiple label="Select label"><protean-option value="1" selected>Option 1 no label</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option><protean-option value="3"></protean-option></protean-select>',
        });

        const proteanSelect = await page.find('protean-select');
        const proteanInput = await page.find(
            'protean-select >>> protean-input',
        );

        expect(await proteanInput.getProperty('value')).toEqual(
            'Option 1 no label',
        );

        proteanSelect.setProperty('selectedOptions', ['2']);
        await page.waitForChanges();

        expect(await proteanInput.getProperty('value')).toEqual('Option 2');

        proteanSelect.setProperty('selectedOptions', ['3']);
        await page.waitForChanges();

        expect(await proteanInput.getProperty('value')).toEqual('3');

        proteanSelect.setProperty('selectedOptions', ['foo']);
        await page.waitForChanges();

        expect(await proteanInput.getProperty('value')).toEqual('foo');

        proteanSelect.setProperty('selectedOptions', ['1', '2']);
        await page.waitForChanges();

        expect(await proteanInput.getProperty('value')).toEqual('2 selected');
    });

    it('closes dropdown on click-elsewhere', async () => {
        const page = await newE2EPage({
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const proteanInput = await page.find(
            'protean-select >>> protean-input',
        );

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(false);

        await dispatchEvent(page, ['protean-select', 'protean-input'], 'click');

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(true);

        await dispatchEvent(
            page,
            ['protean-select', 'protean-click-elsewhere'],
            'change',
        );

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(false);
    });

    it('delegates focus', async () => {
        const page = await newE2EPage({
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const proteanInput = await page.find(
            'protean-select >>> protean-input',
        );
        const focusMock = await proteanInput.spyOnEvent('focus');

        await dispatchEvent(page, 'protean-select', 'focus');

        expect(focusMock).toHaveReceivedEvent();
    });

    it('opens dropdown and activates default option on navigation key when closed', async () => {
        const page = await newE2EPage({
            html: '<protean-select value="1" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const proteanInput = await page.find(
            'protean-select >>> protean-input',
        );

        const firstOption = await page.find('protean-select protean-option');

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(false);
        expect(firstOption).not.toHaveAttribute('active');

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'ArrowDown' },
        );

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(true);
        expect(firstOption).toHaveAttribute('active');
    });

    it('activates default option on navigation key when dropdown open but no options are active', async () => {
        const page = await newE2EPage({
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const proteanInput = await page.find(
            'protean-select >>> protean-input',
        );

        const secondOption = await page.find(
            'protean-select protean-option:nth-child(2)',
        );

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(false);

        await dispatchEvent(page, ['protean-select', 'protean-input'], 'click');

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(true);
        expect(secondOption).not.toHaveAttribute('active');

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'ArrowUp' },
        );

        expect(secondOption).toHaveAttribute('active');
    });

    it('activates next option on ArrowDown', async () => {
        const page = await newE2EPage({
            html: '<protean-select value="1" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const proteanInput = await page.find(
            'protean-select >>> protean-input',
        );
        const selectDropdown = await page.find(
            'protean-select >>> .protean-select-dropdown',
        );

        const [firstOption, secondOption] = await page.findAll(
            'protean-select protean-option',
        );

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(false);
        expect(firstOption).not.toHaveAttribute('active');
        expect(secondOption).not.toHaveAttribute('active');
        expect(selectDropdown).toEqualAttribute('aria-activedescendant', null);

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'ArrowDown' },
        );

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(true);
        expect(firstOption).toHaveAttribute('active');
        expect(secondOption).not.toHaveAttribute('active');
        expect(selectDropdown).toEqualAttribute(
            'aria-activedescendant',
            firstOption.id,
        );

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'ArrowDown' },
        );

        expect(firstOption).not.toHaveAttribute('active');
        expect(secondOption).toHaveAttribute('active');
        expect(selectDropdown).toEqualAttribute(
            'aria-activedescendant',
            secondOption.id,
        );

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'ArrowDown' },
        );

        expect(firstOption).not.toHaveAttribute('active');
        expect(secondOption).toHaveAttribute('active');
        expect(selectDropdown).toEqualAttribute(
            'aria-activedescendant',
            secondOption.id,
        );
    });

    it('activates previous option on ArrowUp', async () => {
        const page = await newE2EPage({
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const proteanInput = await page.find(
            'protean-select >>> protean-input',
        );

        const [firstOption, secondOption] = await page.findAll(
            'protean-select protean-option',
        );

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(false);
        expect(firstOption).not.toHaveAttribute('active');
        expect(secondOption).not.toHaveAttribute('active');

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'ArrowUp' },
        );

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(true);
        expect(firstOption).not.toHaveAttribute('active');
        expect(secondOption).toHaveAttribute('active');

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'ArrowUp' },
        );

        expect(firstOption).toHaveAttribute('active');
        expect(secondOption).not.toHaveAttribute('active');

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'ArrowUp' },
        );

        expect(firstOption).toHaveAttribute('active');
        expect(secondOption).not.toHaveAttribute('active');
    });

    it('activates first option on Home press', async () => {
        const page = await newE2EPage({
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const proteanInput = await page.find(
            'protean-select >>> protean-input',
        );

        const [firstOption, secondOption] = await page.findAll(
            'protean-select protean-option',
        );

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(false);
        expect(firstOption).not.toHaveAttribute('active');
        expect(secondOption).not.toHaveAttribute('active');

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'Home' },
        );

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(true);
        expect(firstOption).not.toHaveAttribute('active');
        expect(secondOption).toHaveAttribute('active');

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'Home' },
        );

        expect(firstOption).toHaveAttribute('active');
        expect(secondOption).not.toHaveAttribute('active');

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'Home' },
        );

        expect(firstOption).toHaveAttribute('active');
        expect(secondOption).not.toHaveAttribute('active');
    });

    it('activates last option on End press', async () => {
        const page = await newE2EPage({
            html: '<protean-select value="1" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const proteanInput = await page.find(
            'protean-select >>> protean-input',
        );

        const [firstOption, secondOption] = await page.findAll(
            'protean-select protean-option',
        );

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(false);
        expect(firstOption).not.toHaveAttribute('active');
        expect(secondOption).not.toHaveAttribute('active');

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'Home' },
        );

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(true);
        expect(firstOption).toHaveAttribute('active');
        expect(secondOption).not.toHaveAttribute('active');

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'End' },
        );

        expect(firstOption).not.toHaveAttribute('active');
        expect(secondOption).toHaveAttribute('active');

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'End' },
        );

        expect(firstOption).not.toHaveAttribute('active');
        expect(secondOption).toHaveAttribute('active');
    });

    it('skips disabled options with keyboard navigation', async () => {
        const page = await newE2EPage({
            html: '<protean-select value="1" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2" disabled>Option 2</protean-option><protean-option value="3" label="Option 3">Option 3</protean-option><protean-option value="4" label="Option 4" disabled-group>Option 4</protean-option><protean-option value="5" label="Option 5">Option 5</protean-option><protean-option value="6" label="Option 6" disabled>Option 6</protean-option></protean-select>',
        });

        const proteanInput = await page.find(
            'protean-select >>> protean-input',
        );

        const proteanOptions = await page.findAll(
            'protean-select protean-option',
        );

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(false);
        expect(proteanOptions[0]).not.toHaveAttribute('active');
        expect(proteanOptions[1]).not.toHaveAttribute('active');
        expect(proteanOptions[2]).not.toHaveAttribute('active');
        expect(proteanOptions[3]).not.toHaveAttribute('active');
        expect(proteanOptions[4]).not.toHaveAttribute('active');
        expect(proteanOptions[5]).not.toHaveAttribute('active');

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'ArrowDown' },
        );

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(true);
        expect(proteanOptions[0]).toHaveAttribute('active');

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'ArrowDown' },
        );

        expect(proteanOptions[2]).toHaveAttribute('active');

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'ArrowDown' },
        );

        expect(proteanOptions[4]).toHaveAttribute('active');

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'ArrowDown' },
        );

        expect(proteanOptions[4]).toHaveAttribute('active');
    });

    it('selects active option with space and enter', async () => {
        const page = await newE2EPage({
            html: '<protean-select label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const proteanSelect = await page.find('protean-select');
        const changeSpy = await proteanSelect.spyOnEvent('change');

        const proteanInput = await page.find(
            'protean-select >>> protean-input',
        );

        const [firstOption, secondOption] = await page.findAll(
            'protean-select protean-option',
        );

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(false);

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'ArrowDown' },
        );

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(true);
        expect(firstOption).toHaveAttribute('active');

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: ' ' },
        );

        expect(changeSpy).toHaveReceivedEventTimes(1);
        expect(changeSpy).toHaveReceivedEventDetail({ value: '1' });
        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(false);

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'ArrowDown' },
        );
        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'ArrowDown' },
        );

        expect(secondOption).toHaveAttribute('active');
        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'Enter' },
        );

        expect(changeSpy).toHaveReceivedEventTimes(2);
        expect(changeSpy).toHaveReceivedEventDetail({ value: '2' });
    });

    it('closes dropdown on Escape press', async () => {
        const page = await newE2EPage({
            html: '<protean-select label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const proteanInput = await page.find(
            'protean-select >>> protean-input',
        );

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(false);

        await dispatchEvent(page, ['protean-select', 'protean-input'], 'click');

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(true);

        await dispatchEvent(
            page,
            ['protean-select', 'protean-input'],
            'keydown',
            { key: 'Escape' },
        );

        expect(await proteanInput.getProperty('ariaExpanded')).toEqual(false);
    });

    it('binds option id on and updates options on mutation observed', async () => {
        const page = await newE2EPage({
            html: '<protean-select value="3" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option><protean-option value="3" label="Option 3">Option 3</protean-option></protean-select>',
        });

        let proteanOptions = await page.findAll(
            'protean-select protean-option',
        );

        expect(proteanOptions[0].id).toEqual('protean-select-1000-option-0');
        expect(proteanOptions[1].id).toEqual('protean-select-1000-option-1');
        expect(await proteanOptions[1].getProperty('value')).toEqual('2');
        expect(proteanOptions[2].id).toEqual('protean-select-1000-option-2');
        expect(proteanOptions[2]).toHaveAttribute('selected');

        await page.$eval('protean-select', select => {
            const secondOption = select.querySelector(
                'protean-option:nth-child(2)',
            );

            secondOption.remove();
        });
        await page.waitForChanges();

        proteanOptions = await page.findAll('protean-select protean-option');

        expect(proteanOptions[0].id).toEqual('protean-select-1000-option-0');
        expect(proteanOptions[1].id).toEqual('protean-select-1000-option-1');
        expect(await proteanOptions[1].getProperty('value')).toEqual('3');
        expect(proteanOptions[1]).toHaveAttribute('selected');
    });
});
