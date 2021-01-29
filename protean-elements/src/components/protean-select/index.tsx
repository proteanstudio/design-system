import { createGuid } from '@/utils/utils';
import {
    Component,
    Prop,
    State,
    Event,
    EventEmitter,
    Listen,
    Element,
    Watch,
    h, //eslint-disable-line
} from '@stencil/core';
import { VNode } from '@stencil/core/internal';

@Component({
    tag: 'protean-select',
    styleUrl: 'styles.css',
    shadow: true,
})
export class ProteanSelect {
    @Prop({ mutable: true }) value: string;
    @Prop({ mutable: true }) selectedOptions: string[];
    @Prop({ reflect: true }) label: string;
    @Prop() ariaLabel: string;
    @Prop({ reflect: true }) optional: boolean;
    @Prop({ reflect: true }) disabled: boolean;
    @Prop({ reflect: true }) multiple: boolean; //change to variant?
    @Prop() errors: string[];

    @State() dropdownOpen = false;
    @State() activeOptionId: string;

    @Event({ eventName: 'change', bubbles: false }) change: EventEmitter;

    @Element() hostElement: HTMLProteanSelectElement;

    guid: number = createGuid();
    mutationObserver: MutationObserver;
    functionQueue: VoidFunction[] = [];
    functionQueueTimeout = 200;

    componentWillLoad(): void {
        const mutationObserver = new MutationObserver(this.onMutationObserved);
        mutationObserver.observe(this.hostElement, {
            childList: true,
            subtree: true,
        });
        this.onMutationObserved();
        this.mutationObserver = mutationObserver;
    }

    get selectAriaLabel(): string | null {
        if (this.label) return null;

        return this.ariaLabel ?? null;
    }

    get optionElements(): HTMLProteanOptionElement[] {
        return Array.from(this.hostElement.querySelectorAll('protean-option'));
    }

    get displayValue(): string {
        if (this.multiple) {
            const selectedCount = this.selectedOptions.length;

            if (selectedCount === 0) return '';

            if (selectedCount === 1) {
                const selectedOption = this.optionElements.find(
                    option => option.value === this.selectedOptions[0],
                );

                return (
                    selectedOption?.label ??
                    (selectedOption?.textContent.trim() ||
                        selectedOption?.value ||
                        this.selectedOptions[0])
                );
            }

            return `${selectedCount} selected`;
        }
        const selectedOption = this.optionElements.find(
            option => option.selected,
        );
        if (selectedOption) {
            return (
                selectedOption.label ??
                (selectedOption.textContent.trim() || selectedOption.value)
            );
        }

        return this.value;
    }

    get activeOption(): HTMLProteanOptionElement | undefined {
        return this.optionElements.find(option => option.active);
    }

    get activeOptionIndex(): number {
        return this.optionElements.indexOf(this.activeOption);
    }

    @Listen('change')
    defaultChangeHandler(event: CustomEvent): void {
        if (this.multiple) {
            this.selectedOptions = event.detail.selectedOptions;
            return;
        }
        this.value = event.detail.value;
    }

    @Listen('focus')
    defaultFocusHandler(): void {
        this.functionQueue = [];
    }

    @Listen('blur')
    defaultBlurHandler(): void {
        this.functionQueue.push(() => {
            this.closeDropdown();
        });
        this.executeFunctionQueue();
    }

    @Watch('multiple')
    updateOptions(): void {
        if (this.multiple) {
            this.updateMultipleOptions(this.selectedOptions);
        } else {
            this.updateSingleOptions(this.value);
        }
    }

    @Watch('value')
    updateSingleOptions(value: string): void {
        if (this.multiple) {
            console.error(
                '`value` should not be used on `protean-select` elements where `multiple` is `true`.  Use `selectedOptions` instead.',
            );
            return;
        }

        if (value) {
            this.optionElements.forEach(option => {
                option.selected = option.value === value;
            });

            return;
        }

        const preSelectedOption = this.optionElements.find(
            option => option.selected,
        );

        if (preSelectedOption) {
            this.value = preSelectedOption.value;
        }
    }

    @Watch('selectedOptions')
    updateMultipleOptions(selectedOptions: string[]): void {
        if (!this.multiple) {
            console.error(
                '`selectedOptions` should not be used on `protean-select` elements where `multiple` is `false`.  Use `value` instead.',
            );
            return;
        }

        if (selectedOptions) {
            this.optionElements.forEach(option => {
                option.selected = selectedOptions.includes(option.value);
            });

            return;
        }

        this.selectedOptions = this.optionElements
            .filter(option => option.selected)
            .map(option => option.value);
    }

    closeDropdown: VoidFunction = () => {
        if (!this.dropdownOpen) return;

        this.dropdownOpen = false;

        if (this.activeOption) {
            this.activeOption.active = false;
            this.activeOptionId = '';
        }
    };

    executeFunctionQueue = (): void => {
        setTimeout(() => {
            this.functionQueue.forEach(fn => {
                fn();
            });
        }, this.functionQueueTimeout); // REPLACE with click-elsewhere, timing is inconsistent
    };

    activateDefaultOption(): void {
        const targetOption =
            this.optionElements.find(option => option.selected) ??
            this.optionElements[0]; //add protections against disabled starting point
        targetOption.active = true;
        this.activeOptionId = targetOption.id;
    }

    handleOptionNavigation(
        key: string,
        activeOptionIndex = this.activeOptionIndex,
    ): void {
        if (!this.dropdownOpen) {
            this.dropdownOpen = true;
            this.activateDefaultOption();
            return;
        }

        if (!this.activeOption) {
            this.activateDefaultOption();
            return;
        }

        const lastOptionIndex = this.optionElements.length - 1;
        let targetIndex = 0;

        switch (key) {
            case 'ArrowDown':
                targetIndex =
                    activeOptionIndex < lastOptionIndex
                        ? activeOptionIndex + 1
                        : activeOptionIndex;
                break;
            case 'ArrowUp':
                targetIndex = activeOptionIndex > 0 ? activeOptionIndex - 1 : 0;
                break;
            case 'Home':
                targetIndex = 0;
                break;
            case 'End':
                targetIndex = lastOptionIndex;
                break;
        }

        if (targetIndex !== this.activeOptionIndex) {
            const targetOption = this.optionElements[targetIndex];

            if (targetOption.disabled || targetOption.disabledGroup) {
                if (
                    targetOption !== this.optionElements[0] &&
                    targetOption !== this.optionElements[lastOptionIndex]
                ) {
                    this.handleOptionNavigation(key, targetIndex);
                }
                return;
            }

            this.activeOption.active = false;
            targetOption.active = true;
            this.activeOptionId = targetOption.id;
            this.activeOption.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }
    }

    handleSelection(value: string): void {
        if (this.multiple) {
            this.handleMultiSelection(value);
            return;
        }
        this.handleSingleSelection(value);
    }

    handleSingleSelection(value: string): void {
        if (value !== this.value) {
            this.change.emit({ value });
        }
        this.closeDropdown();
    }

    handleMultiSelection(value: string): void {
        let selectedOptions = [...this.selectedOptions];
        if (selectedOptions.includes(value)) {
            selectedOptions = selectedOptions.filter(
                option => option !== value,
            );
        } else {
            selectedOptions.push(value);
        }

        this.change.emit({ selectedOptions });
    }

    onInputClick: VoidFunction = () => {
        this.dropdownOpen = !this.dropdownOpen;
    };

    onInputKeyDown = (event: KeyboardEvent): void => {
        if (event.key === 'Tab' && this.dropdownOpen) {
            event.preventDefault();
            return;
        }
    };

    onInputKeyUp = (event: KeyboardEvent): void => {
        const key = event.key;

        const isNavigationKey = [
            'ArrowUp',
            'ArrowDown',
            'Home',
            'End',
        ].includes(key);

        if (isNavigationKey && this.optionElements.length > 0) {
            event.preventDefault();
            this.handleOptionNavigation(key);
            return;
        }

        if ([' ', 'Enter'].includes(key) && this.activeOption) {
            this.handleSelection(this.activeOption.value);
            return;
        }

        if (key === 'Escape') {
            this.closeDropdown();
            return;
        }
    };

    onOptionClick = (event: MouseEvent): void => {
        const option = event.target as HTMLProteanOptionElement;
        if (option.localName !== 'protean-option') return;

        this.handleSelection(option.value);
    };

    onMutationObserved = (): void => {
        this.optionElements.forEach((option, index) => {
            option.id = `protean-select-${this.guid}-option-${index}`;
        });

        this.updateOptions();
    };

    render(): VNode {
        return (
            <div class="select-container">
                <protean-input
                    value={this.displayValue}
                    label={this.label}
                    optional={this.optional}
                    errors={this.errors}
                    disabled={this.disabled}
                    readonly
                    suppress-messages
                    ariaLabel={this.selectAriaLabel}
                    ariaHasPopup="listbox"
                    ariaExpanded={this.dropdownOpen}
                    onClick={this.onInputClick}
                    onKeyUp={this.onInputKeyUp}
                    onKeyDown={this.onInputKeyDown}
                ></protean-input>
                <protean-icon
                    class="protean-select-icon"
                    type="chevron-down"
                ></protean-icon>
                <div
                    class="protean-select-separator"
                    hidden={!this.dropdownOpen}
                ></div>
                {this.renderDropdown()}
            </div>
        );
    }

    renderDropdown(): VNode {
        return (
            <div
                class="protean-select-dropdown protean-dropdown"
                role="listbox"
                aria-label={this.label}
                tabIndex={-1}
                aria-activedescendant={this.activeOptionId}
                hidden={!this.dropdownOpen}
                onClick={this.onOptionClick}
            >
                <slot />
            </div>
        );
    }
}
