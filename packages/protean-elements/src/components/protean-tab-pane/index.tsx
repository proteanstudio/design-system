import {
    Component,
    Prop,
    h, //eslint-disable-line
} from '@stencil/core';
import { VNode } from '@stencil/core/internal';

@Component({
    tag: 'protean-tab-pane',
    styleUrl: 'styles.css',
    shadow: true,
})
export class ProteanTabPane {
    @Prop({ reflect: true }) label: string;
    @Prop({ reflect: true }) value: string;
    @Prop({ reflect: true }) name = '';
    @Prop() selected: boolean;
    @Prop() guid: number;
    @Prop() index: number;

    render(): VNode {
        return (
            <div
                class="tab-pane"
                role="tabpanel"
                id={`tab-pane-${this.guid}-${this.index}`}
                aria-label={this.label}
                tabIndex={0}
                hidden={!this.selected}
            >
                <slot />
            </div>
        );
    }
}
