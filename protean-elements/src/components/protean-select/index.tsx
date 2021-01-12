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
    @Prop({ reflect: true, mutable: true }) value: string;
    @Prop({ mutable: true }) selectedOptions: string[] = [];
    @Prop({ reflect: true }) label: string;
    @Prop({ reflect: true }) multiple: boolean; // TODO

    @State() dropdownOpen = false;

    @Event({ eventName: 'change', bubbles: false }) change: EventEmitter;

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
        console.log('focus');
        this.functionQueue = [];
    }

    @Listen('blur')
    defaultBlurHandler(): void {
        console.log('blur');
        this.functionQueue.push(() => this.closeDropdown());
        this.executeFunctionQueue();
    }

    @Element() hostElement: HTMLProteanSelectElement;

    @Watch('value')
    updateOptions(value: string): void {
        if (this.multiple) {
            console.error(
                '`value` should not be used on `protean-select` elements where `multiple` is `true`.  Use `selectedOptions` instead.',
            );
            return;
        }

        this.optionElements.forEach(option => {
            option.selected = option.value === value;
        });
    }

    @Watch('selectedOptions')
    updateMultipleOptions(selectedOptions: string[] = []): void {
        if (!this.multiple) {
            console.error(
                '`selectedOptions` should not be used on `protean-select` elements where `multiple` is `false`.  Use `value` instead.',
            );
            return;
        }

        this.optionElements.forEach(option => {
            option.selected = selectedOptions.includes(option.value);
        });
    }

    mutationObserver: MutationObserver;
    functionQueue: VoidFunction[] = [];

    componentWillLoad(): void {
        const mutationObserver = new MutationObserver(this.onMutationObserved);
        mutationObserver.observe(this.hostElement, {
            childList: !0,
            subtree: !0,
        });
        this.onMutationObserved();
        this.mutationObserver = mutationObserver;
    }

    get optionElements(): HTMLProteanOptionElement[] {
        return Array.from(this.hostElement.querySelectorAll('protean-option'));
    }

    get displayValue(): string {
        if (this.multiple) {
            const selectedCount = this.selectedOptions.length;

            if (selectedCount === 0) return '';

            if (selectedCount === 1) {
                return this.optionElements.find(
                    option => option.value === this.selectedOptions[0],
                ).label;
            }

            return `${selectedCount} selected`;
        }
        const selectedOption = this.optionElements.find(
            option => option.selected,
        );
        if (selectedOption) {
            return selectedOption.label ?? selectedOption.value;
        }

        return this.value;
    }

    get activeOption(): HTMLProteanOptionElement | null {
        return this.optionElements.find(option => option.active);
    }

    get activeOptionId(): string {
        return this.activeOption?.id ?? '';
    }

    get activeOptionIndex(): number {
        return this.optionElements.indexOf(this.activeOption) ?? 0;
    }

    closeDropdown: VoidFunction = () => {
        if (!this.dropdownOpen) return;

        this.dropdownOpen = false;

        if (this.activeOption && !this.activeOption.selected) {
            this.activeOption.active = false;
        }
    };

    executeFunctionQueue = (): void => {
        setTimeout(() => {
            console.log('execute');
            this.functionQueue.forEach(fn => {
                fn();
            });
        }, 200); // REPLACE with click-elsewhere, timing is inconsistent
    };

    activateFirstOption(): void {
        this.optionElements[0].active = true;
    }

    handleOptionNavigation(key: string): void {
        if (!this.dropdownOpen) {
            this.dropdownOpen = true;
            this.activateFirstOption();
            return;
        }

        if (!this.activeOption) {
            this.activateFirstOption();
            return;
        }

        const activeOptionIndex = this.activeOptionIndex;
        const lastOptionIndex = this.optionElements.length - 1;
        let targetIndex = 0;

        switch (key) {
            case 'ArrowUp':
                targetIndex = activeOptionIndex > 0 ? activeOptionIndex - 1 : 0;

                break;
            case 'ArrowDown':
                targetIndex =
                    activeOptionIndex < lastOptionIndex
                        ? activeOptionIndex + 1
                        : activeOptionIndex;
                break;
            case 'Home':
                targetIndex = 0;
                break;
            case 'End':
                targetIndex = lastOptionIndex;
                break;
        }

        if (targetIndex !== this.activeOptionIndex) {
            this.activeOption.active = false;
            this.optionElements[targetIndex].active = true;
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

        if (isNavigationKey) {
            event.preventDefault();
            this.handleOptionNavigation(key);
            return;
        }

        if ([' ', 'Enter'].includes(key)) {
            this.handleSelection(this.activeOption.value);
            return;
        }

        if (key === 'Escape') {
            this.closeDropdown();
            return;
        }
    };

    onOptionKeyup = (event: KeyboardEvent): void => {
        const target = event.target as HTMLProteanOptionElement;

        if (target.localName !== 'protean-option') return;
    };

    onOptionClick = (event: MouseEvent): void => {
        const target = event.target as HTMLProteanOptionElement;

        if (target.localName !== 'protean-option') return;

        this.handleSelection(target.value);
    };

    onMutationObserved = (): void => {
        if (this.multiple) {
            this.updateMultipleOptions(this.selectedOptions);
        } else {
            this.updateOptions(this.value);
        }
    };

    render(): VNode {
        return (
            <div class="select-container">
                <protean-input
                    value={this.displayValue}
                    label={this.label}
                    ariaHasPopup="listbox"
                    ariaExpanded={this.dropdownOpen}
                    onClick={this.onInputClick}
                    onKeyUp={this.onInputKeyUp}
                    onKeyDown={this.onInputKeyDown}
                    readonly
                ></protean-input>
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
                onKeyUp={this.onOptionKeyup}
            >
                <slot />
            </div>
        );
    }
}
