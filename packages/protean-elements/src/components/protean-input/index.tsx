import {
    Component,
    Prop,
    Event,
    Listen,
    Element,
    EventEmitter,
    Watch,
    State,
    h, //eslint-disable-line
} from '@stencil/core';
import { VNode } from '@stencil/core/internal';
import { Dict } from '@/types';
import formatDate from '@/utils/formatting/date';
import formatNumeric from '@/utils/formatting/numeric';
import formatPhoneNumber from '@/utils/formatting/phone';
import { FormattedValue, FormattingFn } from '@/utils/formatting/types';
import { createGuid } from '@/utils/utils';

export interface CursorData {
    startingPosition: number;
    valueLength: number;
    previousValueLength: number;
    hasSelection: boolean;
}

@Component({
    tag: 'protean-input',
    styleUrl: 'styles.css',
    shadow: true,
})
export class ProteanInput {
    @Prop({ mutable: true }) value: string;
    @Prop({ reflect: true }) type: string;
    @Prop({ reflect: true }) label: string;
    @Prop({ reflect: true }) disabled = false;
    @Prop({ reflect: true }) maxlength: number; //FIX THIS
    @Prop({ reflect: true }) format: string;
    @Prop({ reflect: true }) optional: boolean;
    @Prop({ reflect: true }) hints: string[];
    @Prop({ reflect: true }) errors: string[];
    @Prop({ reflect: true }) suppressMessages: boolean;
    @Prop({ reflect: true }) readonly = false;
    @Prop({ reflect: true, attribute: 'a11y-label' }) a11yLabel: string;
    @Prop() ariaHasPopup: string;
    @Prop() ariaExpanded: boolean | undefined;
    @Prop() ariaRole: string;

    guid = createGuid();
    inputId = `protean-input-${this.guid}`;
    descriptionId = `protean-input-description-${this.guid}`;
    cursorData: CursorData;
    scheduledAfterRender: VoidFunction[] = [];
    isFocused = false;

    @State() formattedValueObject: FormattedValue;
    @Element() hostElement: HTMLProteanInputElement;

    componentWillLoad(): void {
        this.formattedValueObject = this.getFormattedValueObj(this.value, true);
    }

    componentDidLoad(): void {
        this.inputElement.value = this.formattedValueObject.formattedValue;
    }

    componentDidRender(): void {
        this.scheduledAfterRender.forEach(fn => {
            fn();
        });
        this.scheduledAfterRender = [];
    }

    get inputElement(): HTMLInputElement {
        return this.hostElement.shadowRoot.querySelector('input');
    }

    get inputType(): string {
        const inputTypeMap = {
            text: 'text',
            tel: 'tel',
            phone: 'tel',
            numeric: 'tel',
            date: 'tel',
            password: 'password',
            search: 'search',
            button: 'button',
        };

        return inputTypeMap[this.type] ?? 'text';
    }

    get inputAriaLabel(): string | null {
        if (this.label) return null;

        return this.a11yLabel ?? null;
    }

    get inputAriaRequired(): string | null {
        if (this.ariaHasPopup === 'listbox') return null;

        return `${!this.optional}`;
    }

    get inputMaxlength(): number | undefined {
        const {
            maxlength,
            formattingCharacterCount,
        } = this.formattedValueObject;

        if (maxlength) {
            return maxlength;
        }

        if (this.maxlength) {
            return this.maxlength + (formattingCharacterCount ?? 0);
        }
    }

    get hasErrors(): boolean {
        return Array.isArray(this.errors) && this.errors.length > 0;
    }

    get messages(): string[] | undefined {
        if (this.hasErrors) {
            return this.errors;
        }

        const hasHints = Array.isArray(this.hints) && this.hints.length > 0;

        if (hasHints) {
            return this.hints;
        }

        return;
    }

    get showMessages(): boolean {
        return (
            Array.isArray(this.messages) &&
            this.messages.length > 0 &&
            !this.suppressMessages
        );
    }

    get messageContainer(): HTMLDivElement {
        return this.hostElement.shadowRoot.querySelector('.message-container');
    }

    get messageContainerHeight(): string {
        const height = this.hostElement.shadowRoot
            .querySelector('.message-container protean-message')
            .getBoundingClientRect().height;

        return `${height}px`;
    }

    @Event({ eventName: 'change', bubbles: false })
    change: EventEmitter<FormattedValue>;
    @Event({ eventName: 'input', bubbles: false })
    input: EventEmitter<FormattedValue>;

    onInputChange = (event: Event): void => {
        event.stopPropagation();

        this.formattedValueObject = this.getFormattedValueObj(
            this.inputElement.value,
        );

        this.inputElement.value = this.formattedValueObject.formattedValue;
        if (this.value !== this.formattedValueObject.value) {
            this.change.emit({
                value: this.formattedValueObject.value,
                formattedValue: this.formattedValueObject.formattedValue,
            });
        }
    };

    onInputInput = (event: Event): void => {
        event.stopPropagation();

        this.formattedValueObject = this.getFormattedValueObj(
            this.inputElement.value,
        );
        this.cursorData = this.calculateCursorPositionOnInput();

        this.inputElement.value = this.formattedValueObject.formattedValue;

        this.setCursorPosition();
        if (this.value !== this.formattedValueObject.value) {
            this.input.emit({
                value: this.formattedValueObject.value,
                formattedValue: this.formattedValueObject.formattedValue,
            });
        }
    };

    onInputFocus = (): void => {
        this.isFocused = true;
        this.setMessagesHeight();
    };

    onInputBlur = (): void => {
        this.isFocused = false;
        if (this.showMessages) {
            this.messageContainer.style.height = '0px';
        }
    };

    onLabelClick = (event: MouseEvent): void => {
        event.stopImmediatePropagation();
    };

    @Listen('change')
    defaultChangeHandler(event: CustomEvent): void {
        if (!this.hostElement.onchange) {
            this.value = event.detail.value;
        }
    }

    @Listen('focus')
    delegateFocus(event: FocusEvent): void {
        if (event.target === this.hostElement) {
            this.inputElement.focus();
        }
    }

    @Watch('value')
    @Watch('type')
    @Watch('format')
    reformatValue(): void {
        this.formattedValueObject = this.getFormattedValueObj(this.value, true);
        this.inputElement.value = this.formattedValueObject.formattedValue;
    }

    @Watch('hints')
    @Watch('errors')
    onMessageUpdate(): void {
        if (this.isFocused) {
            this.scheduledAfterRender.push(() => {
                this.setMessagesHeight();
            });
        }
    }

    setMessagesHeight(): void {
        if (this.showMessages) {
            this.messageContainer.style.height = this.messageContainerHeight;
        }
    }

    getFormattedValueObj(value = '', explicit = false): FormattedValue {
        const formattingFnMap: Dict<FormattingFn> = {
            phone: formatPhoneNumber,
            date: formatDate,
            numeric: formatNumeric,
        };

        const formattingFn: FormattingFn = formattingFnMap[this.type];

        return (
            formattingFn?.(value, this.format, explicit) ?? {
                value,
                formattedValue: value,
            }
        );
    }

    calculateCursorPositionOnInput(): CursorData {
        const inputElement = this.inputElement;
        const formattedValueLength = this.formattedValueObject.formattedValue
            .length;

        return {
            startingPosition:
                inputElement.selectionStart ?? formattedValueLength,
            valueLength: formattedValueLength,
            previousValueLength: inputElement.value.length,
            hasSelection: false,
        };
    }

    setCursorPosition(): void {
        if (!this.cursorData.hasSelection) {
            const inputElement = this.inputElement;
            const {
                valueLength,
                previousValueLength,
                startingPosition,
            } = this.cursorData;
            const cursorPosition =
                startingPosition + (valueLength - previousValueLength);
            inputElement.setSelectionRange(cursorPosition, cursorPosition);
        }
    }

    render(): VNode {
        return (
            <div class="input-wrapper">
                <div
                    class={`input-container ${
                        this.hasErrors ? 'has-error' : ''
                    }`}
                >
                    {this.label && (
                        <label
                            htmlFor={this.inputId}
                            onClick={this.onLabelClick}
                        >
                            {/* Error icon currently requires label */}
                            {this.hasErrors && (
                                <protean-icon
                                    type="status-error-filled"
                                    class="error-icon"
                                ></protean-icon>
                            )}
                            {this.label}
                            {this.optional && (
                                <span class="optional-tag"> (optional)</span>
                            )}
                        </label>
                    )}
                    <input
                        id={this.inputId}
                        type={this.inputType}
                        disabled={this.disabled}
                        readOnly={this.readonly}
                        maxLength={this.inputMaxlength}
                        role={this.ariaRole}
                        aria-required={this.inputAriaRequired}
                        aria-label={this.inputAriaLabel}
                        aria-invalid={`${this.hasErrors}`}
                        aria-describedby={this.descriptionId}
                        aria-haspopup={this.ariaHasPopup}
                        aria-expanded={
                            this.ariaExpanded === undefined
                                ? null
                                : `${this.ariaExpanded}`
                        }
                        onChange={this.onInputChange}
                        onInput={this.onInputInput}
                        onFocus={this.onInputFocus}
                        onBlur={this.onInputBlur}
                    />
                </div>
                {this.renderMessages()}
            </div>
        );
    }

    renderMessages(): VNode {
        return (
            <div class="message-container">
                <protean-message
                    type={this.hasErrors ? 'error' : 'info'}
                    level="status"
                    variant="inline"
                >
                    <ul id={this.descriptionId}>
                        {this.showMessages &&
                            this.messages.map(message => <li>{message}</li>)}
                    </ul>
                </protean-message>
            </div>
        );
    }
}
