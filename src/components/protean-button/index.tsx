import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'protean-button',
    styleUrl: 'styles.css',
    shadow: true,
})
export class ProteanButton {
    @Prop({ reflect: true }) variant: string;
    @Prop({ reflect: true }) type: string;
    @Prop({ reflect: true }) disabled: boolean;

    render() {
        return (
            <button type={this.type || 'button'} disabled={this.disabled}>
                <div>
                    <slot />
                </div>
            </button>
        );
    }
}
