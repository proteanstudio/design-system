import {
    Component,
    Prop,
    h, //eslint-disable-line
    Event,
    EventEmitter,
    Listen,
    Element,
} from '@stencil/core';
import { VNode } from '@stencil/core/internal';
import { createGuid } from '@/utils/utils';

@Component({
    tag: 'protean-checkbox',
    styleUrl: 'styles.css',
    shadow: true,
})
export class ProteanCheckbox {
    @Prop({ reflect: true, mutable: true }) checked = false;
    @Prop({ reflect: true }) variant: string;
    @Prop({ reflect: true }) label: string;
    @Prop({ reflect: true, attribute: 'a11y-label' }) a11yLabel: string;
    @Prop({ reflect: true }) alignment: 'left' | 'right';
    @Prop({ reflect: true }) disabled: boolean;
    @Prop({ reflect: true }) indeterminate: boolean;

    @Element() hostElement: HTMLElement;

    @Listen('change')
    defaultChangeHandler(event: CustomEvent): void {
        if (event.target === this.hostElement && !this.hostElement.onchange) {
            this.checked = event.detail.checked;
        }
    }

    @Listen('focus')
    delegateFocus(event: FocusEvent): void {
        if (event.target === this.hostElement) {
            this.hostElement.shadowRoot.querySelector('input').focus();
        }
    }

    guid = createGuid();

    get checkboxId(): string {
        return `checkbox-${this.guid}`;
    }
    get checkboxAriaLabel(): string | null {
        if (this.label) return null;

        return this.a11yLabel ?? null;
    }

    get checkboxAlignment(): string {
        return ['left', 'right'].includes(this.alignment)
            ? this.alignment
            : 'left';
    }

    @Event() change: EventEmitter;

    onCheckboxChange = (event: Event): void => {
        this.change.emit({
            checked: (event.target as HTMLInputElement).checked,
        });
    };

    render(): VNode {
        return (
            <div class="checkbox-container">
                <input
                    class="sr"
                    type="checkbox"
                    id={this.checkboxId}
                    aria-label={this.checkboxAriaLabel}
                    disabled={this.disabled}
                    checked={this.checked || this.indeterminate}
                    onChange={this.onCheckboxChange}
                />
                <label
                    htmlFor={this.checkboxId}
                    class={`alignment-${this.checkboxAlignment}`}
                >
                    {this.renderSymbol()}
                    {!!this.label && (
                        <span class="label-text">{this.label}</span>
                    )}
                </label>
            </div>
        );
    }

    renderStandardFill(): VNode {
        if (this.indeterminate) {
            return (
                <line
                    class="checkbox-fill indeterminate"
                    x1="6"
                    y1="12"
                    x2="18"
                    y2="12"
                    stroke-width="3"
                ></line>
            );
        }

        if (this.checked) {
            return (
                <polyline
                    class="checkbox-fill checked"
                    points="4.76755287 13.3616687 9.85401316 18.3300512 19.438211 5.92818154"
                ></polyline>
            );
        }
    }

    renderStandard(): VNode {
        return (
            <svg
                class="checkbox-symbol standard"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                aria-hidden="true"
            >
                <rect
                    class="checkbox-outline"
                    x="1"
                    y="1"
                    width="22"
                    height="22"
                    rx="2"
                ></rect>
                {this.renderStandardFill()}
            </svg>
        );
    }

    renderToggle(): VNode {
        return (
            <svg
                class="checkbox-symbol toggle"
                viewBox="0 0 45 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                aria-hidden="true"
            >
                <line
                    class="toggle-path"
                    x1="10"
                    y1="10"
                    x2="35"
                    y2="10"
                ></line>
                <circle class="toggle-fill" cx="10" cy="10" r="8"></circle>
            </svg>
        );
    }

    renderSymbol(): VNode {
        if (this.variant === 'toggle') {
            return this.renderToggle();
        }

        return this.renderStandard();
    }
}
