import { //eslint-disable-line
Event, EventEmitter } from '../../stencil-public-runtime';
import { VNode } from '../../stencil-public-runtime';
export declare class ProteanCheckbox {
  checked: boolean;
  variant: string;
  label: string;
  ariaLabel: string;
  alignment: 'left' | 'right';
  disabled: boolean;
  indeterminate: boolean;
  hostElement: HTMLElement;
  defaultChangeHandler(event: CustomEvent): void;
  delegateFocus(event: FocusEvent): void;
  guid: number;
  get checkboxId(): string;
  get checkboxAriaLabel(): string | null;
  get checkboxAlignment(): string;
  change: EventEmitter;
  onCheckboxChange: (event: Event) => void;
  render(): VNode;
  renderStandardFill(): VNode;
  renderStandard(): VNode;
  renderToggle(): VNode;
  renderSymbol(): VNode;
}
