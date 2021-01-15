import {
    Component,
    Prop,
    Listen,
    h, //eslint-disable-line
} from '@stencil/core';
import { VNode } from '@stencil/core/internal';

@Component({
    tag: 'protean-option',
    styleUrl: 'styles.css',
    shadow: true,
})
export class ProteanOption {
    @Prop({ reflect: true }) value: string;
    @Prop({ reflect: true }) label: string;
    @Prop({ reflect: true }) selected: boolean;
    @Prop({ reflect: true }) active: boolean;
    @Prop({ reflect: true }) disabled: boolean;
    @Prop({ reflect: true }) disabledGroup: boolean;

    get isDisabled(): boolean {
        return this.disabled || this.disabledGroup;
    }

    @Listen('click')
    defaultClickHandler(event: MouseEvent): void {
        if (this.isDisabled) {
            event.stopImmediatePropagation();
        }
    }

    render(): VNode {
        return (
            <div
                class="protean-option-container"
                role="option"
                aria-selected={`${this.selected}`}
                aria-disabled={`${this.isDisabled}`}
            >
                <div class="protean-option-selected">
                    {this.selected && (
                        <protean-icon type="checkmark"></protean-icon>
                    )}
                </div>
                <div class="protean-option-content">
                    <slot />
                </div>
            </div>
        );
    }
}
