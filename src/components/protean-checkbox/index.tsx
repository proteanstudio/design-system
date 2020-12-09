import {
    Component,
    Prop,
    h,
    Event,
    EventEmitter,
    Listen,
    Element,
} from '@stencil/core';
import { createGuid } from '../../utils/utils';

@Component({
    tag: 'protean-checkbox',
    styleUrl: 'styles.css',
    shadow: true,
})
export class ProteanCheckbox {
    @Prop({ reflect: true, mutable: true }) checked: boolean = false;
    @Prop({ reflect: true }) type: string;
    @Prop({ reflect: true }) label: string;
    @Prop({ reflect: true }) ariaLabel: string;
    @Prop({ reflect: true }) alignment: 'left' | 'right';
    @Prop({ reflect: true }) disabled: boolean;
    @Prop({ reflect: true }) indeterminate: boolean;

    @Element() hostElement: HTMLElement;

    @Listen('change')
    defaultChangeHandler(event: CustomEvent) {
        if (event.target === this.hostElement && !this.hostElement.onchange) {
            this.checked = event.detail.checked;
        }
    }

    guid = createGuid();

    get checkboxId(): string {
        return `checkbox-${this.guid}`;
    }
    get checkboxAriaLabel(): string | null {
        if (this.label) return null;

        return this.ariaLabel ?? null;
    }

    get checkboxAlignment(): string {
        return ['left', 'right'].includes(this.alignment)
            ? this.alignment
            : 'left';
    }

    @Event() change: EventEmitter;

    onCheckboxChange = (event: Event) => {
        this.change.emit({
            checked: (event.target as HTMLInputElement).checked,
        });
    };

    render() {
        return (
            <div class="checkbox-container">
                <input
                    class="sr"
                    type="checkbox"
                    id={this.checkboxId}
                    aria-label={this.checkboxAriaLabel}
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

    renderStandardFill() {
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

    renderStandard() {
        return (
            <svg
                class="checkbox-symbol standard"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
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

    renderToggle() {
        return (
            <svg
                class="checkbox-symbol toggle"
                viewBox="0 0 45 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
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

    renderSymbol() {
        if (this.type === 'toggle') {
            return this.renderToggle();
        }

        return this.renderStandard();
    }
}
