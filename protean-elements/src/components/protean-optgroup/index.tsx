import {
    Component,
    Prop,
    Element,
    h, //eslint-disable-line
} from '@stencil/core';
import { VNode } from '@stencil/core/internal';
import { createGuid } from '@/utils/utils';

@Component({
    tag: 'protean-optgroup',
    styleUrl: 'styles.css',
    shadow: true,
})
export class ProteanOptgroup {
    @Prop({ reflect: true }) label: string;
    @Prop({ reflect: true }) disabled: boolean;

    @Element() hostElement: HTMLProteanOptgroupElement;

    guid: number = createGuid();
    mutationObserver: MutationObserver;

    get labelId(): string {
        return `protean-optgroup-label-${this.guid}`;
    }

    get optionElements(): HTMLProteanOptionElement[] {
        return Array.from(this.hostElement.querySelectorAll('protean-option'));
    }

    componentWillLoad(): void {
        const mutationObserver = new MutationObserver(this.onMutationObserved);
        mutationObserver.observe(this.hostElement, {
            childList: true,
        });
        this.onMutationObserved();
        this.mutationObserver = mutationObserver;
    }

    onMutationObserved = (): void => {
        if (this.disabled) {
            this.optionElements.forEach(option => {
                option.disabledGroup = true;
            });
        }
    };

    render(): VNode {
        return (
            <div
                class="protean-optgroup-container"
                role="group"
                aria-labelled-by={this.labelId}
            >
                {this.label && (
                    <div class="protean-optgroup-label" id={this.labelId}>
                        <div class="protean-optgroup-label-text">
                            <span>{this.label}</span>
                        </div>
                    </div>
                )}
                <div class="protean-optgroup-option-container">
                    <slot />
                </div>
            </div>
        );
    }
}
