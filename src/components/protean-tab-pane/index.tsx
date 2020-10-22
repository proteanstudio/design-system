import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'protean-tab-pane',
    styleUrl: 'styles.css',
    shadow: true,
})
export class ProteanTabPane {
    @Prop({ reflect: true }) label: string;
    @Prop({ reflect: true }) value: string;
    @Prop({ reflect: true }) name: string = '';
    @Prop() selected: boolean;
    @Prop() guid: number;
    @Prop() index: number;

    render() {
        return (
            <div
                class="tab-pane"
                role="tab-panel"
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
