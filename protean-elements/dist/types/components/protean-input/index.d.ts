import { Event, EventEmitter } from '../../stencil-public-runtime';
import { VNode } from '../../stencil-public-runtime';
import { FormattedValue } from '@/utils/formatting/types';
export interface CursorData {
  startingPosition: number;
  valueLength: number;
  previousValueLength: number;
  hasSelection: boolean;
}
export declare class ProteanInput {
  value: string;
  type: string;
  label: string;
  disabled: boolean;
  maxlength: number;
  format: string;
  optional: boolean;
  hints: string[];
  errors: string[];
  suppressMessages: boolean;
  readonly: boolean;
  ariaLabel: string;
  ariaHasPopup: string;
  ariaExpanded: boolean | undefined;
  ariaRole: string;
  guid: number;
  inputId: string;
  descriptionId: string;
  formattedValueObject: FormattedValue;
  cursorData: CursorData;
  scheduledAfterRender: VoidFunction[];
  isFocused: boolean;
  hostElement: HTMLProteanInputElement;
  componentDidLoad(): void;
  componentDidRender(): void;
  get inputElement(): HTMLInputElement;
  get inputType(): string;
  get inputAriaLabel(): string | null;
  get inputAriaRequired(): string | null;
  get hasErrors(): boolean;
  get messages(): string[] | undefined;
  get showMessages(): boolean;
  get messageContainer(): HTMLDivElement;
  get messageContainerHeight(): string;
  change: EventEmitter<FormattedValue>;
  input: EventEmitter<FormattedValue>;
  onInputChange: (event: Event) => void;
  onInputInput: (event: Event) => void;
  onInputFocus: () => void;
  onInputBlur: () => void;
  onLabelClick: (event: MouseEvent) => void;
  defaultChangeHandler(event: CustomEvent): void;
  delegateFocus(event: FocusEvent): void;
  reformatValue(): void;
  onMessageUpdate(): void;
  setMessagesHeight(): void;
  getFormattedValueObj(value?: string, explicit?: boolean): FormattedValue;
  calculateCursorPositionOnInput(): CursorData;
  setCursorPosition(): void;
  render(): VNode;
  renderMessages(): VNode;
}
