import { VNode } from '../../stencil-public-runtime';
export declare class ProteanOptgroup {
  label: string;
  disabled: boolean;
  hostElement: HTMLProteanOptgroupElement;
  guid: number;
  mutationObserver: MutationObserver;
  propagateDisabledState(disabled?: boolean): void;
  get labelId(): string;
  get optionElements(): HTMLProteanOptionElement[];
  componentWillLoad(): void;
  onMutationObserved: () => void;
  render(): VNode;
}
