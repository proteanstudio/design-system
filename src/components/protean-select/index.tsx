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
    @Prop({ reflect: true }) label: string;
    @Prop({ reflect: true }) multiple: boolean; // TODO

    @State() dropdownOpen: boolean;

    @Event({ eventName: 'change', bubbles: false }) change: EventEmitter;

    @Listen('change')
    defaultChangeHandler(event: CustomEvent): void {
        this.value = event.detail.value;
    }

    @Listen('blur')
    defaultBlurHandler(): void {
        this.closeDropdown();
    }

    @Element() hostElement: HTMLProteanSelectElement;

    @Watch('value')
    updateOptions(value: string): void {
        this.optionElements.forEach(option => {
            option.selected = option.value === value;
        });
    }

    get optionElements(): HTMLProteanOptionElement[] {
        return Array.from(this.hostElement.querySelectorAll('protean-option'));
    }

    get selectedOption(): HTMLProteanOptionElement {
        return this.optionElements.find(option => option.selected);
    }

    get displayValue(): string {
        const selectedOption = this.selectedOption;
        if (selectedOption) {
            return selectedOption.label ?? selectedOption.value;
        }

        return this.value;
    }

    get activeOptionId(): string {
        return '';
    }

    closeDropdown: VoidFunction = () => {
        this.dropdownOpen = false;
    };

    onInputClick: VoidFunction = () => {
        this.dropdownOpen = !this.dropdownOpen;
    };

    onInputKeyUp = (event: KeyboardEvent): void => {
        if (event.key === 'Escape') {
            this.closeDropdown();
        }
    };

    onOptionKeyup = (event: KeyboardEvent): void => {
        event.preventDefault();
    };

    onOptionClick = (event: MouseEvent): void => {
        const option = event.target as HTMLProteanOptionElement;

        this.change.emit({
            value: option.value,
        });
        this.closeDropdown();
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
