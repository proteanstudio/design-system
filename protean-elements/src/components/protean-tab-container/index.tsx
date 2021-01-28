import {
    Component,
    Prop,
    h, //eslint-disable-line
    Element,
    State,
    Event,
    EventEmitter,
    Listen,
} from '@stencil/core';
import { VNode } from '@stencil/core/internal';
import { createGuid } from '@/utils/utils';

interface Tab {
    label: string;
    value: string;
    index: number;
}

@Component({
    tag: 'protean-tab-container',
    styleUrl: 'styles.css',
    shadow: true,
})
export class ProteanTabContainer {
    @Prop({ reflect: true, mutable: true }) value: string;
    @Prop({ reflect: true }) name = '';

    @Element() hostElement: HTMLElement;
    @State() tabs: Tab[];

    observer: MutationObserver;
    guid = createGuid();

    get tabPanes(): NodeListOf<HTMLProteanTabPaneElement> {
        return this.hostElement.querySelectorAll<HTMLProteanTabPaneElement>(
            `protean-tab-pane[name="${this.name}"]`,
        );
    }

    get selectedValue(): string {
        const isValidValue =
            this.tabs?.some(tab => tab.value === this.value) ?? true;

        return isValidValue ? this.value : this.tabs[0]?.value ?? '';
    }

    @Event({ eventName: 'change', bubbles: false }) change: EventEmitter;

    @Listen('change')
    defaultChangeHandler(event: CustomEvent): void {
        if (event.target === this.hostElement && !this.hostElement.onchange) {
            this.value = event.detail.value;
            this.focusActiveTab();
        }
    }

    connectedCallback(): void {
        const observer = new MutationObserver(this.updateTabData);

        observer.observe(this.hostElement, {
            childList: true,
            subtree: true,
            attributes: true,
        });

        this.updateTabData();
        this.observer = observer;
    }

    disconnectedCallback(): void {
        this.observer.disconnect();
    }

    updateTabData = (): void => {
        this.updateTabPanes();
        this.updateTabs();
    };

    updateTabPanes = (): void => {
        this.tabPanes.forEach((tab, index) => {
            tab.selected = tab.value === this.selectedValue;
            tab.guid = this.guid;
            tab.index = index;
        });
    };

    updateTabs = (): void => {
        this.tabs = Array.from(this.tabPanes).map(tab => {
            const { label, value, index } = tab;
            return {
                label,
                value,
                index,
            };
        });
    };

    moveToAdjacentTab(currentValue: string, direction: string): void {
        const currentIndex = this.tabs
            .map(tab => tab.value)
            .indexOf(currentValue);
        let nextIndex = currentIndex;

        if (direction === 'next') {
            if (currentIndex < this.tabs.length - 1) {
                nextIndex++;
            } else {
                nextIndex = 0;
            }
        } else {
            if (currentIndex > 0) {
                nextIndex--;
            } else {
                nextIndex = this.tabs.length - 1;
            }
        }
        const value = this.tabs[nextIndex].value;
        this.change.emit({ value });
    }

    focusActiveTab(): void {
        this.hostElement.shadowRoot
            .querySelector<HTMLButtonElement>(
                `button[data-value="${this.selectedValue}"]`,
            )
            .focus();
    }

    onTabClick = (event: MouseEvent): void => {
        const value = (event.target as HTMLElement).dataset.value;

        if (value !== this.value) {
            this.change.emit({
                value,
            });
        }
    };

    onTabKeyup = (event: KeyboardEvent): void => {
        const currentValue = (event.target as HTMLElement).dataset.value;

        if (event.key === 'ArrowRight') {
            this.moveToAdjacentTab(currentValue, 'next');
            return;
        }

        if (event.key === 'ArrowLeft') {
            this.moveToAdjacentTab(currentValue, 'prev');
            return;
        }
    };

    render(): VNode {
        return (
            <div class="tab-container">
                <div class="tab-list" role="tablist">
                    {this.tabs.length > 1 &&
                        this.tabs.map(this.buildTabControl)}
                </div>
                <div class="tab-content">
                    <slot />
                </div>
            </div>
        );
    }

    buildTabControl = (tab: Tab): VNode => {
        const selected = tab.value === this.selectedValue;
        return (
            <button
                role="tab"
                type="button"
                aria-selected={`${selected}`}
                tabIndex={selected ? 0 : -1}
                data-value={tab.value}
                aria-controls={`tab-pane-${this.guid}-${tab.index}`}
                id={`tab-${this.guid}-${tab.index}`}
                onClick={this.onTabClick}
                onKeyUp={this.onTabKeyup}
            >
                {tab.label}
            </button>
        );
    };
}
