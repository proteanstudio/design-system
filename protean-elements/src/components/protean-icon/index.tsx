import {
    Component,
    Prop,
    h, //eslint-disable-line
} from '@stencil/core';
import { VNode } from '@stencil/core/internal';
import icons from './icons';

@Component({
    tag: 'protean-icon',
    styleUrl: 'styles.css',
    shadow: true,
})
export class ProteanIcon {
    @Prop({ reflect: true }) type: string;
    @Prop({ reflect: true }) use: string;

    get icon(): VNode {
        if (this.type === 'custom' && !!this.use) {
            return <use xlinkHref={this.use}></use>;
        }
        return icons[this.type]?.markup() ?? null;
    }

    render(): VNode {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                focusable="false"
                aria-hidden="true"
            >
                {this.icon}
            </svg>
        );
    }
}
