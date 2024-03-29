import { newSpecPage } from '@stencil/core/testing';
import { ProteanSelect } from '.';
import { ProteanOption } from '@/components/protean-option';
import fakeMutationObserver from '@/test-helpers/mocks/MutationObserver';
import { ProteanInput } from '../protean-input';
import { ProteanIcon } from '../protean-icon';
import fakeConsoleError from '@/test-helpers/mocks/consoleError';
import fakeConsoleWarn from '@/test-helpers/mocks/consoleWarn';

describe('protean-select', () => {
    let teardowns: VoidFunction[] = [];
    beforeEach(() => {
        teardowns.push(fakeMutationObserver());
        teardowns.push(fakeConsoleWarn());
    });

    afterEach(() => {
        teardowns.forEach(fn => {
            fn();
        });
        teardowns = [];
    });

    it('renders with default bindings', async () => {
        const { root, rootInstance } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        expect(rootInstance.hostElement).toEqual(root);

        const optionElements = Array.from(
            root.querySelectorAll('protean-option'),
        );

        expect(rootInstance.guid).toEqual(1000);
        expect(rootInstance.selectAriaLabel).toEqual(null);
        expect(rootInstance.optionElements).toEqual(optionElements);
        expect(rootInstance.displayValue).toEqual('Option 2');
        expect(rootInstance.activeOption).toEqual(undefined);
        expect(rootInstance.activeOptionId).toEqual(undefined);
        expect(rootInstance.activeOptionIndex).toEqual(-1);

        const proteanInput = root.shadowRoot.querySelector('protean-input');

        expect(proteanInput.value).toEqual('Option 2');
        expect(proteanInput.label).toEqual('Select label');
        expect(proteanInput.optional).toEqual(undefined);
        expect(proteanInput.errors).toEqual(undefined);
        expect(proteanInput.disabled).toEqual(false);
        expect(proteanInput.type).toEqual('button');
        expect(proteanInput.suppressMessages).toEqual(true);
        expect(proteanInput.a11yLabel).toEqual(null);
        expect(proteanInput.ariaHasPopup).toEqual('listbox');
        expect(proteanInput.a11yExpanded).toEqual(false);

        const chevronIcon =
            root.shadowRoot.querySelector<HTMLProteanIconElement>(
                '.protean-select-icon',
            );
        expect(chevronIcon.type).toEqual('chevron-down');

        const selectSeparator = root.shadowRoot.querySelector<HTMLDivElement>(
            '.protean-select-separator',
        );
        expect(selectSeparator.hidden).toEqual(true);

        const selectDropdown =
            root.shadowRoot.querySelector<HTMLProteanIconElement>(
                '.protean-select-dropdown',
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

    it('passes certain properties to inner protean input', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select value="2" label="Select label" optional><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const proteanInput = root.shadowRoot.querySelector('protean-input');

        expect(root.label).toEqual('Select label');
        expect(proteanInput.label).toEqual('Select label');
        expect(root.optional).toEqual(true);
        expect(proteanInput.optional).toEqual(true);
        expect(root.errors).toEqual(undefined);
        expect(proteanInput.errors).toEqual(undefined);
        expect(root.disabled).toEqual(undefined);
        expect(proteanInput.disabled).toEqual(false);
        expect(proteanInput.value).toEqual(rootInstance.displayValue);
        expect(rootInstance.dropdownOpen).toEqual(false);
        expect(proteanInput.a11yExpanded).toEqual(false);
        expect(proteanInput.a11yLabel).toEqual(null);

        root.label = null;
        root.a11yLabel = 'Select aria-label';
        root.optional = false;
        root.errors = ['error 1'];
        root.disabled = true;
        rootInstance.dropdownOpen = true;
        await waitForChanges();

        expect(proteanInput.label).toEqual(null);
        expect(proteanInput.a11yLabel).toEqual('Select aria-label');
        expect(proteanInput.optional).toEqual(false);
        expect(proteanInput.errors).toEqual(['error 1']);
        expect(proteanInput.disabled).toEqual(true);
        expect(proteanInput.a11yExpanded).toEqual(true);
    });

    it('passes certain properties to listbox', async () => {
        const { root, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const selectDropdown =
            root.shadowRoot.querySelector<HTMLProteanIconElement>(
                '.protean-select-dropdown',
            );

        expect(selectDropdown).toEqualAttribute('aria-label', 'Select label');
        expect(selectDropdown).toEqualAttribute('aria-required', 'true');
        expect(selectDropdown).toEqualAttribute(
            'aria-multiselectable',
            'false',
        );

        root.label = 'Updated label';
        root.optional = true;
        root.multiple = true;
        await waitForChanges();

        expect(selectDropdown).toEqualAttribute('aria-label', 'Updated label');
        expect(selectDropdown).toEqualAttribute('aria-required', 'false');
        expect(selectDropdown).toEqualAttribute('aria-multiselectable', 'true');
    });

    it('shows separator when dropdown open', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const selectSeparator = root.shadowRoot.querySelector<HTMLDivElement>(
            '.protean-select-separator',
        );
        expect(selectSeparator.hidden).toEqual(true);

        rootInstance.dropdownOpen = true;
        await waitForChanges();

        expect(selectSeparator.hidden).toEqual(false);
    });

    it('initializes and fires mutationObserver on load', async () => {
        const rootInstance = new ProteanSelect();
        const onMutationObservedMock = jest.fn();
        rootInstance.onMutationObserved = onMutationObservedMock;

        expect(rootInstance.mutationObserver).toEqual(undefined);

        rootInstance.componentWillLoad();

        expect(
            rootInstance.mutationObserver instanceof MutationObserver,
        ).toEqual(true);
        expect(onMutationObservedMock).toHaveBeenCalledTimes(1);
    });

    it('sets aria-label', () => {
        const rootInstance = new ProteanSelect();

        expect(rootInstance.selectAriaLabel).toEqual(null);

        rootInstance.a11yLabel = 'Test aria-label';
        expect(rootInstance.selectAriaLabel).toEqual('Test aria-label');

        rootInstance.label = 'Test label';
        expect(rootInstance.selectAriaLabel).toEqual(null);
    });

    it('gets option elements', async () => {
        const { root, rootInstance } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const optionElements = Array.from(
            root.querySelectorAll('protean-option'),
        );
        expect(rootInstance.optionElements).toEqual(optionElements);
    });

    it('sets displayValue', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select label="Select label" multiple><protean-option value="1">Option 1 no label</protean-option><protean-option value="2" label="Option 2">Option 2 Text</protean-option><protean-option value="3"></protean-option></protean-select>',
        });

        expect(root.multiple).toEqual(true);
        expect(root.selectedOptions).toEqual([]);
        expect(rootInstance.displayValue).toEqual('');

        root.selectedOptions = ['2'];
        await waitForChanges();

        expect(rootInstance.displayValue).toEqual('Option 2');

        root.selectedOptions = ['1'];
        await waitForChanges();

        expect(rootInstance.displayValue).toEqual('Option 1 no label');

        root.selectedOptions = ['3'];
        await waitForChanges();

        expect(rootInstance.displayValue).toEqual('3');

        root.selectedOptions = ['foo'];
        await waitForChanges();

        expect(rootInstance.displayValue).toEqual('foo');

        root.selectedOptions = ['1', '2'];
        await waitForChanges();

        expect(rootInstance.displayValue).toEqual('2 selected');

        root.selectedOptions = [];
        root.multiple = false;
        root.value = '1';
        await waitForChanges();

        expect(rootInstance.displayValue).toEqual('Option 1 no label');

        root.value = '2';
        await waitForChanges();

        expect(rootInstance.displayValue).toEqual('Option 2');

        root.value = '3';
        await waitForChanges();

        expect(rootInstance.displayValue).toEqual('3');

        root.value = 'bar';
        await waitForChanges();

        expect(rootInstance.displayValue).toEqual('bar');
    });

    it('gets active option info', async () => {
        const { rootInstance } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2" active>Option 2</protean-option></protean-select>',
        });

        expect(rootInstance.activeOption).toEqual(
            rootInstance.optionElements[1],
        );
        expect(rootInstance.activeOptionIndex).toEqual(1);
    });

    it('fires default change handler', async () => {
        const { root, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        expect(root.value).toEqual(undefined);

        root.dispatchEvent(
            new CustomEvent('change', {
                detail: {
                    value: '2',
                },
            }),
        );

        await waitForChanges();
        expect(root.value).toEqual('2');

        root.multiple = true;
        await waitForChanges();
        expect(root.selectedOptions).toEqual(['2']);

        const selectedOptions = ['1', '2'];

        root.dispatchEvent(
            new CustomEvent('change', {
                detail: {
                    selectedOptions,
                },
            }),
        );

        await waitForChanges();
        expect(root.selectedOptions).toEqual(selectedOptions);
    });

    it('can focus input', async () => {
        (global as any).FocusEvent = Event; //eslint-disable-line
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const focusMock = jest.fn();
        root.shadowRoot.querySelector('protean-input').dispatchEvent =
            focusMock;

        rootInstance.focusInput();
        await waitForChanges();
        expect(focusMock).toHaveBeenCalledTimes(1);
    });

    it('delegates focus to input', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const focusMock = jest.fn();
        rootInstance.focusInput = focusMock;

        root.dispatchEvent(new Event('focus'));
        await waitForChanges();
        expect(focusMock).toHaveBeenCalledTimes(1);

        rootInstance.delegateFocus(new Event('focus'));
        await waitForChanges();
        expect(focusMock).toHaveBeenCalledTimes(1);
    });

    it('close dropdown on click-elsewhere', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const clickElsewhere = root.shadowRoot.querySelector(
            'protean-click-elsewhere',
        );

        const closeDropdownMock = jest.fn();
        rootInstance.closeDropdown = closeDropdownMock;
        await waitForChanges();

        const clickElsewhereEvent = new Event('change');
        const sIPMock = jest.fn();
        clickElsewhereEvent.stopImmediatePropagation = sIPMock;

        clickElsewhere.dispatchEvent(clickElsewhereEvent);
        await waitForChanges();

        expect(closeDropdownMock).toHaveBeenCalledTimes(1);
        expect(sIPMock).toHaveBeenCalledTimes(1);
    });

    it('updates correct options depending on multiple property', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select label="Select label" multiple><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        rootInstance.selectedOptions = [];
        await waitForChanges();

        const updateSingleOptions = jest.fn();
        const updateMultipleOptions = jest.fn();

        rootInstance.updateSingleOptions = updateSingleOptions;
        rootInstance.updateMultipleOptions = updateMultipleOptions;

        root.multiple = false;
        await waitForChanges();

        expect(updateSingleOptions).toHaveBeenCalledTimes(1);
        expect(updateMultipleOptions).toHaveBeenCalledTimes(0);

        root.multiple = true;
        await waitForChanges();

        expect(updateSingleOptions).toHaveBeenCalledTimes(1);
        expect(updateMultipleOptions).toHaveBeenCalledTimes(1);
    });

    it('updates options for single select and initializes value from first selected option', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select label="Select label" multiple><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const consoleErrorMock = jest.fn();
        teardowns.push(fakeConsoleError(consoleErrorMock));

        root.value = '1';
        await waitForChanges();

        expect(consoleErrorMock).toHaveBeenCalledTimes(1);
        expect(consoleErrorMock).toHaveBeenCalledWith(
            '`value` should not be used on `protean-select` elements where `multiple` is `true`.  Use `selectedOptions` instead.',
        );

        root.multiple = false;
        root.value = '2';
        await waitForChanges();

        expect(rootInstance.optionElements[0].selected).toEqual(false);
        expect(rootInstance.optionElements[1].selected).toEqual(true);

        root.value = undefined;
        await waitForChanges();

        expect(root.value).toEqual(rootInstance.optionElements[1].value);
    });

    it('updates options for multi select and initializes selectedOptions from selected option elements', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const consoleErrorMock = jest.fn();
        teardowns.push(fakeConsoleError(consoleErrorMock));

        root.selectedOptions = ['foo'];
        await waitForChanges();

        expect(consoleErrorMock).toHaveBeenCalledTimes(1);
        expect(consoleErrorMock).toHaveBeenCalledWith(
            '`selectedOptions` should not be used on `protean-select` elements where `multiple` is `false`.  Use `value` instead.',
        );

        root.multiple = true;
        root.selectedOptions = ['1', '2'];
        await waitForChanges();

        expect(rootInstance.optionElements[0].selected).toEqual(true);
        expect(rootInstance.optionElements[1].selected).toEqual(true);

        root.selectedOptions = undefined;
        await waitForChanges();

        expect(root.selectedOptions).toEqual(['1', '2']);
    });

    it('closes the dropdown', async () => {
        const { rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2" active>Option 2</protean-option></protean-select>',
        });

        const focusMock = jest.fn();
        rootInstance.focusInput = focusMock;

        rootInstance.dropdownOpen = true;
        await waitForChanges();

        expect(rootInstance.activeOption).toEqual(
            rootInstance.optionElements[1],
        );

        rootInstance.closeDropdown();
        await waitForChanges();

        expect(rootInstance.dropdownOpen).toEqual(false);
        expect(rootInstance.activeOption).toEqual(undefined);
        expect(focusMock).toHaveBeenCalledTimes(1);

        rootInstance.closeDropdown();
        await waitForChanges();
        expect(rootInstance.dropdownOpen).toEqual(false);
        expect(focusMock).toHaveBeenCalledTimes(1);

        rootInstance.dropdownOpen = true;
        rootInstance.closeDropdown();
        await waitForChanges();

        expect(rootInstance.activeOption).toEqual(undefined);
        expect(focusMock).toHaveBeenCalledTimes(2);
    });

    it('defaults active option to first selected or first option overall', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select value="2" label="Select label" multiple><protean-option value="1" >1</protean-option><protean-option value="2" label="Option 2" selected>Option 2</protean-option><protean-option value="3" label="Option 3" selected>Option 2</protean-option></protean-select>',
        });

        expect(rootInstance.activeOption).toEqual(undefined);
        rootInstance.activateDefaultOption();
        await waitForChanges();

        expect(rootInstance.activeOption).toEqual(
            rootInstance.optionElements[1],
        );

        root.selectedOptions = [];
        rootInstance.activateDefaultOption();
        await waitForChanges();

        expect(rootInstance.activeOption).toEqual(
            rootInstance.optionElements[0],
        );
    });

    it('opens dropdown and activates default option when handling navigation', async () => {
        const { rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select value="1" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        expect(rootInstance.activeOption).toEqual(undefined);
        expect(rootInstance.dropdownOpen).toEqual(false);

        rootInstance.handleOptionNavigation('ArrowDown');
        await waitForChanges();

        expect(rootInstance.dropdownOpen).toEqual(true);
        expect(rootInstance.activeOption).toEqual(
            rootInstance.optionElements[0],
        );
    });

    it('activates default option when handling navigation and dropdown already open', async () => {
        const { rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        rootInstance.dropdownOpen = true;
        await waitForChanges();

        expect(rootInstance.activeOption).toEqual(undefined);

        rootInstance.handleOptionNavigation('ArrowDown');
        await waitForChanges();

        expect(rootInstance.activeOption).toEqual(
            rootInstance.optionElements[0],
        );
    });

    it('handles option navigation', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select value="1" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const scrollIntoViewMock = jest.fn();

        rootInstance.optionElements.forEach(option => {
            option.scrollIntoView = scrollIntoViewMock;
        });

        const dropdown = root.shadowRoot.querySelector(
            '.protean-select-dropdown',
        );

        rootInstance.handleOptionNavigation('ArrowDown');
        await waitForChanges();

        expect(rootInstance.dropdownOpen).toEqual(true);
        expect(rootInstance.activeOption).toEqual(
            rootInstance.optionElements[0],
        );
        expect(dropdown).toEqualAttribute(
            'aria-activedescendant',
            rootInstance.optionElements[0].id,
        );

        rootInstance.handleOptionNavigation('ArrowDown');
        await waitForChanges();

        expect(rootInstance.activeOption).toEqual(
            rootInstance.optionElements[1],
        );
        expect(dropdown).toEqualAttribute(
            'aria-activedescendant',
            rootInstance.optionElements[1].id,
        );
        expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);

        rootInstance.handleOptionNavigation('ArrowDown');
        await waitForChanges();

        expect(rootInstance.activeOption).toEqual(
            rootInstance.optionElements[1],
        );
        expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);

        rootInstance.handleOptionNavigation('ArrowUp');
        await waitForChanges();

        expect(rootInstance.activeOption).toEqual(
            rootInstance.optionElements[0],
        );
        expect(dropdown).toEqualAttribute(
            'aria-activedescendant',
            rootInstance.optionElements[0].id,
        );
        expect(scrollIntoViewMock).toHaveBeenCalledTimes(2);

        rootInstance.handleOptionNavigation('ArrowUp');
        await waitForChanges();

        expect(rootInstance.activeOption).toEqual(
            rootInstance.optionElements[0],
        );
        expect(scrollIntoViewMock).toHaveBeenCalledTimes(2);

        rootInstance.handleOptionNavigation('End');
        await waitForChanges();

        expect(rootInstance.activeOption).toEqual(
            rootInstance.optionElements[1],
        );
        expect(scrollIntoViewMock).toHaveBeenCalledTimes(3);

        rootInstance.handleOptionNavigation('End');
        await waitForChanges();

        expect(rootInstance.activeOption).toEqual(
            rootInstance.optionElements[1],
        );
        expect(scrollIntoViewMock).toHaveBeenCalledTimes(3);

        rootInstance.handleOptionNavigation('Home');
        await waitForChanges();

        expect(rootInstance.activeOption).toEqual(
            rootInstance.optionElements[0],
        );
        expect(scrollIntoViewMock).toHaveBeenCalledTimes(4);

        rootInstance.handleOptionNavigation('Home');
        await waitForChanges();

        expect(rootInstance.activeOption).toEqual(
            rootInstance.optionElements[0],
        );
        expect(scrollIntoViewMock).toHaveBeenCalledTimes(4);

        rootInstance.handleOptionNavigation('foo');
        await waitForChanges();

        expect(rootInstance.activeOption).toEqual(
            rootInstance.optionElements[0],
        );
        expect(scrollIntoViewMock).toHaveBeenCalledTimes(4);
    });

    it('skips disabled options when handling navigation', async () => {
        const { rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select value="1" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2" disabled>Option 2</protean-option><protean-option value="3" label="Option 3">Option 3</protean-option><protean-option value="4" label="Option 4" disabled-group>Option 4</protean-option><protean-option value="5" label="Option 5">Option 5</protean-option><protean-option value="6" label="Option 6" disabled>Option 6</protean-option></protean-select>',
        });

        const scrollIntoViewMock = jest.fn();

        rootInstance.optionElements.forEach(option => {
            option.scrollIntoView = scrollIntoViewMock;
        });

        rootInstance.handleOptionNavigation('ArrowDown');
        await waitForChanges();
        expect(rootInstance.activeOption).toEqual(
            rootInstance.optionElements[0],
        );

        rootInstance.handleOptionNavigation('ArrowDown');
        await waitForChanges();

        expect(rootInstance.activeOption).toEqual(
            rootInstance.optionElements[2],
        );
        expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);

        rootInstance.handleOptionNavigation('ArrowDown');
        await waitForChanges();

        expect(rootInstance.activeOption).toEqual(
            rootInstance.optionElements[4],
        );
        expect(scrollIntoViewMock).toHaveBeenCalledTimes(2);

        rootInstance.handleOptionNavigation('ArrowDown');
        await waitForChanges();

        expect(rootInstance.activeOption).toEqual(
            rootInstance.optionElements[4],
        );
        expect(scrollIntoViewMock).toHaveBeenCalledTimes(2);
    });

    it('fires correct selection function', async () => {
        const rootInstance = new ProteanSelect();

        const handleMultiSelectionMock = jest.fn();
        const handleSingleSelectionMock = jest.fn();

        rootInstance.handleMultiSelection = handleMultiSelectionMock;
        rootInstance.handleSingleSelection = handleSingleSelectionMock;

        rootInstance.handleSelection('foo');

        expect(handleSingleSelectionMock).toHaveBeenCalledTimes(1);
        expect(handleSingleSelectionMock).toHaveBeenCalledWith('foo');
        expect(handleMultiSelectionMock).toHaveBeenCalledTimes(0);

        rootInstance.multiple = true;
        rootInstance.handleSelection('bar');

        expect(handleSingleSelectionMock).toHaveBeenCalledTimes(1);
        expect(handleMultiSelectionMock).toHaveBeenCalledTimes(1);
        expect(handleMultiSelectionMock).toHaveBeenCalledWith('bar');
    });

    it('emits change event on single option selection', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const changeSpy = jest.fn();
        root.addEventListener('change', changeSpy);

        const closeDropdownMock = jest.fn();
        rootInstance.closeDropdown = closeDropdownMock;

        rootInstance.handleSingleSelection('2');
        await waitForChanges();

        expect(changeSpy).toHaveBeenCalledTimes(0);
        expect(closeDropdownMock).toHaveBeenCalledTimes(1);

        rootInstance.handleSingleSelection('1');
        await waitForChanges();

        expect(changeSpy).toHaveBeenCalledTimes(1);
        expect(closeDropdownMock).toHaveBeenCalledTimes(2);
        expect(root.value).toEqual('1');
    });

    it('emits change event on multi option selection', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select multiple label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2" selected>Option 2</protean-option></protean-select>',
        });

        const changeSpy = jest.fn();
        root.addEventListener('change', changeSpy);

        rootInstance.handleMultiSelection('1');
        await waitForChanges();

        expect(root.selectedOptions).toEqual(['2', '1']);
        expect(changeSpy).toHaveBeenCalledTimes(1);

        rootInstance.handleMultiSelection('2');
        await waitForChanges();

        expect(root.selectedOptions).toEqual(['1']);
        expect(changeSpy).toHaveBeenCalledTimes(2);
    });

    it('toggles dropdown on input click', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        expect(rootInstance.dropdownOpen).toEqual(false);
        const inputElement = root.shadowRoot.querySelector('protean-input');

        inputElement.dispatchEvent(new MouseEvent('click'));
        await waitForChanges();

        expect(rootInstance.dropdownOpen).toEqual(true);

        inputElement.dispatchEvent(new MouseEvent('click'));
        await waitForChanges();

        expect(rootInstance.dropdownOpen).toEqual(false);
    });

    it('prevents tabbing when dropdown open', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const preventDefaultMock = jest.fn();
        const keydownEvent = new KeyboardEvent('keydown', { key: 'Tab' });
        keydownEvent.preventDefault = preventDefaultMock;

        expect(rootInstance.dropdownOpen).toEqual(false);
        const inputElement = root.shadowRoot.querySelector('protean-input');

        inputElement.dispatchEvent(keydownEvent);
        await waitForChanges();

        expect(preventDefaultMock).toHaveBeenCalledTimes(0);

        rootInstance.dropdownOpen = true;
        inputElement.dispatchEvent(keydownEvent);
        await waitForChanges();

        expect(preventDefaultMock).toHaveBeenCalledTimes(1);
    });

    it('handles input keydown', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select value="2" label="Select label"><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const preventDefaultMock = jest.fn();
        let keydownEvent = new KeyboardEvent('keydown', { key: 'foo' });
        keydownEvent.preventDefault = preventDefaultMock;

        const handleOptionNavigationMock = jest.fn();
        const handleSelectionMock = jest.fn();
        const closeDropdownMock = jest.fn();

        rootInstance.handleOptionNavigation = handleOptionNavigationMock;
        rootInstance.handleSelection = handleSelectionMock;
        rootInstance.closeDropdown = closeDropdownMock;

        const inputElement = root.shadowRoot.querySelector('protean-input');

        inputElement.dispatchEvent(keydownEvent);
        await waitForChanges();

        expect(preventDefaultMock).toHaveBeenCalledTimes(0);
        expect(handleOptionNavigationMock).toHaveBeenCalledTimes(0);
        expect(handleSelectionMock).toHaveBeenCalledTimes(0);
        expect(closeDropdownMock).toHaveBeenCalledTimes(0);

        keydownEvent = new KeyboardEvent('keydown', { key: 'ArrowUp' });
        keydownEvent.preventDefault = preventDefaultMock;
        inputElement.dispatchEvent(keydownEvent);
        await waitForChanges();

        expect(preventDefaultMock).toHaveBeenCalledTimes(1);
        expect(handleOptionNavigationMock).toHaveBeenCalledTimes(1);
        expect(handleSelectionMock).toHaveBeenCalledTimes(0);
        expect(closeDropdownMock).toHaveBeenCalledTimes(0);

        keydownEvent = new KeyboardEvent('keydown', { key: 'ArrowDown' });
        keydownEvent.preventDefault = preventDefaultMock;
        inputElement.dispatchEvent(keydownEvent);
        await waitForChanges();

        expect(preventDefaultMock).toHaveBeenCalledTimes(2);
        expect(handleOptionNavigationMock).toHaveBeenCalledTimes(2);
        expect(handleSelectionMock).toHaveBeenCalledTimes(0);
        expect(closeDropdownMock).toHaveBeenCalledTimes(0);

        keydownEvent = new KeyboardEvent('keydown', { key: 'Home' });
        keydownEvent.preventDefault = preventDefaultMock;
        inputElement.dispatchEvent(keydownEvent);
        await waitForChanges();

        expect(preventDefaultMock).toHaveBeenCalledTimes(3);
        expect(handleOptionNavigationMock).toHaveBeenCalledTimes(3);
        expect(handleSelectionMock).toHaveBeenCalledTimes(0);
        expect(closeDropdownMock).toHaveBeenCalledTimes(0);

        keydownEvent = new KeyboardEvent('keydown', { key: 'End' });
        keydownEvent.preventDefault = preventDefaultMock;
        inputElement.dispatchEvent(keydownEvent);
        await waitForChanges();

        expect(preventDefaultMock).toHaveBeenCalledTimes(4);
        expect(handleOptionNavigationMock).toHaveBeenCalledTimes(4);
        expect(handleSelectionMock).toHaveBeenCalledTimes(0);
        expect(closeDropdownMock).toHaveBeenCalledTimes(0);

        keydownEvent = new KeyboardEvent('keydown', { key: ' ' });
        keydownEvent.preventDefault = preventDefaultMock;
        inputElement.dispatchEvent(keydownEvent);
        await waitForChanges();

        expect(preventDefaultMock).toHaveBeenCalledTimes(4);
        expect(handleOptionNavigationMock).toHaveBeenCalledTimes(4);
        expect(handleSelectionMock).toHaveBeenCalledTimes(0);
        expect(closeDropdownMock).toHaveBeenCalledTimes(0);

        rootInstance.activateDefaultOption();
        await waitForChanges();

        keydownEvent = new KeyboardEvent('keydown', { key: ' ' });
        keydownEvent.preventDefault = preventDefaultMock;
        inputElement.dispatchEvent(keydownEvent);
        await waitForChanges();

        expect(preventDefaultMock).toHaveBeenCalledTimes(5);
        expect(handleOptionNavigationMock).toHaveBeenCalledTimes(4);
        expect(handleSelectionMock).toHaveBeenCalledTimes(1);
        expect(closeDropdownMock).toHaveBeenCalledTimes(0);

        keydownEvent = new KeyboardEvent('keydown', { key: 'Enter' });
        keydownEvent.preventDefault = preventDefaultMock;
        inputElement.dispatchEvent(keydownEvent);
        await waitForChanges();

        expect(preventDefaultMock).toHaveBeenCalledTimes(6);
        expect(handleOptionNavigationMock).toHaveBeenCalledTimes(4);
        expect(handleSelectionMock).toHaveBeenCalledTimes(2);
        expect(closeDropdownMock).toHaveBeenCalledTimes(0);

        keydownEvent = new KeyboardEvent('keydown', { key: 'Escape' });
        keydownEvent.preventDefault = preventDefaultMock;
        inputElement.dispatchEvent(keydownEvent);
        await waitForChanges();

        expect(preventDefaultMock).toHaveBeenCalledTimes(6);
        expect(handleOptionNavigationMock).toHaveBeenCalledTimes(4);
        expect(handleSelectionMock).toHaveBeenCalledTimes(2);
        expect(closeDropdownMock).toHaveBeenCalledTimes(1);

        rootInstance.optionElements.forEach(item => {
            item.remove();
        });
        await waitForChanges();

        keydownEvent = new KeyboardEvent('keydown', { key: 'ArrowDown' });
        keydownEvent.preventDefault = preventDefaultMock;
        inputElement.dispatchEvent(keydownEvent);
        await waitForChanges();

        expect(preventDefaultMock).toHaveBeenCalledTimes(6);
        expect(handleOptionNavigationMock).toHaveBeenCalledTimes(4);
        expect(handleSelectionMock).toHaveBeenCalledTimes(2);
        expect(closeDropdownMock).toHaveBeenCalledTimes(1);
    });

    it('calls handleSelection on option click', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select value="2" label="Select label"><div class="dummy-element"></div><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const handleSelectionMock = jest.fn();
        rootInstance.handleSelection = handleSelectionMock;
        await waitForChanges();

        const dummyElement = root.querySelector('.dummy-element');

        let fakeClickEvent = {
            target: dummyElement,
        };

        rootInstance.onOptionClick(fakeClickEvent);

        await waitForChanges();

        expect(handleSelectionMock).toHaveBeenCalledTimes(0);

        rootInstance.optionElements[0].localName = 'protean-option';

        fakeClickEvent = {
            target: rootInstance.optionElements[0],
        };
        rootInstance.onOptionClick(fakeClickEvent);
        await waitForChanges();

        expect(handleSelectionMock).toHaveBeenCalledTimes(1);
        expect(handleSelectionMock).toHaveBeenCalledWith('1');
    });

    // skipping since click events not bubbling
    it.skip('calls handleSelection on option click', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [
                ProteanSelect,
                ProteanOption,
                ProteanInput,
                ProteanIcon,
            ],
            html: '<protean-select value="2" label="Select label"><div class="dummy-element"></div><protean-option value="1">1</protean-option><protean-option value="2" label="Option 2">Option 2</protean-option></protean-select>',
        });

        const handleSelectionMock = jest.fn();
        rootInstance.handleSelection = handleSelectionMock;
        await waitForChanges();

        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            composed: true,
        });

        const dummyElement = root.querySelector('.dummy-element');
        dummyElement.dispatchEvent(clickEvent);
        await waitForChanges();

        expect(handleSelectionMock).toHaveBeenCalledTimes(1);

        rootInstance.optionElements[0].dispatchEvent(clickEvent);
        await waitForChanges();

        expect(handleSelectionMock).toHaveBeenCalledTimes(1);
        expect(handleSelectionMock).toHaveBeenCalledWith('1');
    });
});
