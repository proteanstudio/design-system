import {
    Component,
    Prop,
    h,
    Element,
    State,
    Event,
    EventEmitter,
    Listen,
} from '@stencil/core';
import { createGuid } from '../../utils/utils';

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
    @Prop({ reflect: true }) name: string = '';

    @Element() hostElement: HTMLElement;
    @State() tabs: Tab[];

    observer: MutationObserver;
    guid = createGuid();

    get tabPanes() {
        return this.hostElement.querySelectorAll<HTMLProteanTabPaneElement>(
            `protean-tab-pane[name="${this.name}"]`,
        );
    }

    @Event({ eventName: 'change', bubbles: false }) change: EventEmitter;

    @Listen('change')
    defaultChangeHandler(event: CustomEvent) {
        if ((event.target === this.hostElement, !this.hostElement.onchange)) {
            this.value = event.detail.value;
        }
    }

    connectedCallback() {
        const observer = new MutationObserver(this.updateTabData);

        observer.observe(this.hostElement, {
            childList: true,
            subtree: true,
            attributes: true,
        });

        this.updateTabData;
        this.observer = observer;
    }

    disconnectedCallback() {
        this.observer.disconnect();
    }

    updateTabData = () => {
        this.updateTabPanes();
        this.updateTabs();
    };

    updateTabPanes = () => {
        this.tabPanes.forEach((tab, index) => {
            tab.selected = tab.value === this.value;
            tab.guid = this.guid;
            tab.index = index;
        });
    };

    updateTabs = () => {
        this.tabs = Array.from(this.tabPanes).map(tab => {
            const { label, value, index } = tab;
            return {
                label,
                value,
                index,
            };
        });
    };

    moveToAdjacentTab(currentValue: string, direction = 'next') {
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
        this.hostElement.shadowRoot
            .querySelector<HTMLButtonElement>(`button[data-value="${value}"]`)
            ?.focus();
    }

    onTabClick = (event: MouseEvent) => {
        this.change.emit({
            value: (event.target as HTMLElement).dataset.value,
        });
    };

    onTabKeyup = (event: KeyboardEvent) => {
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

    render() {
        return (
            <div class="tab-container">
                <div class="tab-list" role="tablist">
                    {this.tabs?.length > 1 &&
                        this.tabs?.map(this.buildTabControl)}
                </div>
                <div class="tab-content">
                    <slot />
                </div>
            </div>
        );
    }

    buildTabControl = (tab: Tab) => {
        const selected = tab.value === this.value;
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
