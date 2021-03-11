import { VNode } from '../../stencil-public-runtime';
export declare class ProteanMessage {
  type: string;
  level: string;
  variant: string;
  get computedType(): string;
  get role(): string;
  get icon(): string;
  get isInline(): boolean;
  render(): VNode;
  renderDecorator(cssClass: string): VNode;
}
