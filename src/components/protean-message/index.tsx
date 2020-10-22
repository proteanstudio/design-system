import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'protean-message',
    styleUrl: 'styles.css',
    shadow: true,
})
export class ProteanMessage {
    @Prop({ reflect: true }) type: string;
    @Prop({ reflect: true }) level: string;

    get computedType(): string {
        const messageTypeMap = {
            info: 'info',
            success: 'success',
            warning: 'warning',
            error: 'error',
        };

        return messageTypeMap[this.type] ?? 'info';
    }

    get role(): string {
        return this.level === 'status' ? 'status' : 'alert';
    }

    render() {
        return (
            <div
                class={`message-container ${this.computedType}`}
                role={this.role}
            >
                <slot />
            </div>
        );
    }
}
