import {
    Component,
    Prop,
    Element,
    Listen,
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
    @Prop({ reflect: true }) fullWidth: boolean;
    @Prop({ reflect: true, attribute: 'a11y-label' }) a11yLabel: string;

    @Element() hostElement: HTMLProteanButtonElement;

    @Listen('focus')
    delegateFocus(event: FocusEvent): void {
        if (event.target === this.hostElement) {
            this.hostElement.shadowRoot.querySelector('button').focus();
        }
    }

    render(): VNode {
        return (
            <button
                type={this.type ?? 'button'}
                disabled={this.disabled}
                aria-label={this.a11yLabel}
            >
                <div>
                    <slot />
                </div>
            </button>
        );
    }
}
