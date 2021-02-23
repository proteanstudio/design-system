import { VNode } from '../../stencil-public-runtime';
export declare class ProteanButton {
  variant: string;
  type: string;
  disabled: boolean;
  ariaLabel: string;
  hostElement: HTMLProteanButtonElement;
  delegateFocus(event: FocusEvent): void;
  render(): VNode;
}
