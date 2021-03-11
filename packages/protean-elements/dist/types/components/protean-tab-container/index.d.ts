import { EventEmitter } from '../../stencil-public-runtime';
import { VNode } from '../../stencil-public-runtime';
interface Tab {
  label: string;
  value: string;
  index: number;
}
export declare class ProteanTabContainer {
  value: string;
  name: string;
  hostElement: HTMLElement;
  tabs: Tab[];
  observer: MutationObserver;
  guid: number;
  get tabPanes(): NodeListOf<HTMLProteanTabPaneElement>;
  get selectedValue(): string;
  change: EventEmitter;
  defaultChangeHandler(event: CustomEvent): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  updateTabData: () => void;
  updateTabPanes: () => void;
  updateTabs: () => void;
  moveToAdjacentTab(currentValue: string, direction: string): void;
  focusActiveTab(): void;
  onTabClick: (event: MouseEvent) => void;
  onTabKeyup: (event: KeyboardEvent) => void;
  render(): VNode;
  buildTabControl: (tab: Tab) => VNode;
}
export {};
