import {
    Component,
    Prop,
    h, //eslint-disable-line
} from '@stencil/core';
import { VNode } from '@stencil/core/internal';
import { createGuid } from '../../utils/utils';

@Component({
    tag: 'protean-optgroup',
    styleUrl: 'styles.css',
    shadow: true,
})
export class ProteanOptgroup {
    @Prop({ reflect: true }) label: string;

    guid: number = createGuid();

    get labelId(): string {
        return `protean-optgroup-label-${this.guid}`;
    }

    render(): VNode {
        return (
            <div
                class="protean-optgroup-container"
                role="group"
                aria-labelled-by={this.labelId}
            >
                {this.label && (
                    <div class="protean-optgroup-label" id={this.labelId}>
                        <span>{this.label}</span>
                    </div>
                )}
                <div class="protean-optgroup-option-container">
                    <slot />
                </div>
            </div>
        );
    }
}
