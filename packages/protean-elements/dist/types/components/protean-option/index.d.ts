import { VNode } from '../../stencil-public-runtime';
export declare class ProteanOption {
  value: string;
  label: string;
  selected: boolean;
  active: boolean;
  disabled: boolean;
  disabledGroup: boolean;
  get isDisabled(): boolean;
  defaultClickHandler(event: MouseEvent): void;
  render(): VNode;
}
