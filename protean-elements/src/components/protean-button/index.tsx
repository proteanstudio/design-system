import {
    Component,
    Prop,
    h, //eslint-disable-line
} from '@stencil/core';
import { VNode } from '@stencil/core/internal';

@Component({
    tag: 'protean-button',
    styleUrl: 'styles.css',
    shadow: true,
})
export class ProteanButton {
    @Prop({ reflect: true }) variant: string;
    @Prop({ reflect: true }) type: string;
    @Prop({ reflect: true }) disabled: boolean;
    @Prop() ariaLabel: string;

    render(): VNode {
        return (
            <button
                type={this.type ?? 'button'} 
                disabled={this.disabled}
                aria-label={this.ariaLabel}
            >
                <div>
                    <slot />
                </div>
            </button>
        );
    }
}
