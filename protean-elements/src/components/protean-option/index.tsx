import {
    Component,
    Prop,
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

    render(): VNode {
        return (
            <div
                class="protean-option-container"
                role="option"
                aria-selected={`${this.selected}`}
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
