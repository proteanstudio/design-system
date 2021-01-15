import {
    Component,
    Prop,
    h, //eslint-disable-line
} from '@stencil/core';
import { VNode } from '@stencil/core/internal';

@Component({
    tag: 'protean-message',
    styleUrl: 'styles.css',
    shadow: true,
})
export class ProteanMessage {
    @Prop({ reflect: true }) type: string;
    @Prop({ reflect: true }) level: string;
    @Prop({ reflect: true }) variant: string;

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

    get icon(): string {
        return `status-${this.computedType}-filled`;
    }

    get isInline(): boolean {
        return this.variant === 'inline';
    }

    render(): VNode {
        return (
            <div
                class={`message-container ${this.computedType}`}
                role={this.role}
            >
                {!this.isInline && (
                    <protean-icon type={this.icon}></protean-icon>
                )}
                {this.renderDecorator('top')}
                <slot />
                {this.renderDecorator('bottom')}
            </div>
        );
    }

    renderDecorator(cssClass: string): VNode {
        return (
            <svg
                class={`decorator ${cssClass}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 125 125"
                aria-hidden="true"
            >
                <path d="M125 125V0l-16 16v94H15L0 125h125z" />
            </svg>
        );
    }
}
