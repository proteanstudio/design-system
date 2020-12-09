import {
    Component,
    Prop,
    h, //eslint-disable-line
} from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';

@Component({
    tag: 'protean-button',
    styleUrl: 'styles.css',
    shadow: true,
})
export class ProteanButton {
    @Prop({ reflect: true }) variant: string;
    @Prop({ reflect: true }) type: string;
    @Prop({ reflect: true }) disabled: boolean;

    render(): JSXBase.IntrinsicElements {
        return (
            <button type={this.type || 'button'} disabled={this.disabled}>
                <div>
                    <slot />
                </div>
            </button>
        );
    }
}
