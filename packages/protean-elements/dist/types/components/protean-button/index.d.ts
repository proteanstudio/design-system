import { VNode } from '../../stencil-public-runtime';
export declare class ProteanButton {
  variant: string;
  type: string;
  disabled: boolean;
  a11yLabel: string;
  hostElement: HTMLProteanButtonElement;
  delegateFocus(event: FocusEvent): void;
  render(): VNode;
}
