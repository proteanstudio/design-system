import {
    Component,
    Prop,
    h,
    Event,
    Listen,
    Element,
    EventEmitter,
    Watch,
} from '@stencil/core';
import { Dict } from '../../types';
import formatDate from '../../utils/formatting/date';
import formatNumeric from '../../utils/formatting/numeric';
import formatPhoneNumber from '../../utils/formatting/phone';
import { FormattedValue, FormattingFn } from '../../utils/formatting/types';
import { createGuid } from '../../utils/utils';

interface CursorData {
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
    @Prop({ reflect: true }) role: string;
    @Prop({ reflect: true }) maxlength: number;
    @Prop({ reflect: true }) format: string;
    @Prop({ reflect: true }) optional: boolean;
    @Prop({ reflect: true }) hints: string[];
    @Prop({ reflect: true }) errors: string[];
    @Prop({ reflect: true }) suppressMessages: boolean;
    @Prop() ariaLabel: string;

    inputId = `protean-input-${createGuid()}`;
    descriptionId = `protean-input-description-${createGuid()}`;
    formattedValueObject: FormattedValue;
    cursorData: CursorData;
    scheduledAfterRender: (() => void)[] = [];

    @Element() hostElement: HTMLProteanInputElement;

    componentDidLoad(): void {
        this.reformatValue();
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
            number: 'number',
            password: 'password',
            search: 'search',
            email: 'email',
        };

        return inputTypeMap[this.type] ?? 'text';
    }

    get inputAriaLabel(): string | null {
        if (this.label) return null;

        return this.ariaLabel ?? null;
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
        return this.messages && !this.suppressMessages;
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

    @Event({ eventName: 'change', bubbles: false }) change: EventEmitter;
    @Event({ eventName: 'input', bubbles: false }) input: EventEmitter;

    onInputChange = (event: Event) => {
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

    onInputInput = (event: Event) => {
        event.stopPropagation();

        this.formattedValueObject = this.getFormattedValueObj(
            this.inputElement.value,
        );
        this.cursorData = this.calculateCursorPositionOnInput();

        this.inputElement.value = this.formattedValueObject.formattedValue;

        this.setCursorPosition(this.cursorData);
        if (this.value !== this.formattedValueObject.value) {
            this.input.emit({
                value: this.formattedValueObject.value,
                formattedValue: this.formattedValueObject.formattedValue,
            });
        }
    };

    onInputFocus = (): void => {
        this.setMessagesHeight();
    };

    onInputBlur = (): void => {
        if (this.showMessages) {
            this.messageContainer.style.height = '0px';
        }
    };

    @Listen('change')
    defaultChangeHandler(event: CustomEvent) {
        if (!this.hostElement.onchange) {
            this.value = event.detail.value;
        }

        this.inputElement.onchange;
    }

    @Watch('value')
    @Watch('type')
    @Watch('format')
    reformatValue(): void {
        this.formattedValueObject = this.getFormattedValueObj(this.value);
        this.inputElement.value = this.formattedValueObject.formattedValue;
    }

    @Watch('hints')
    @Watch('errors')
    onMessageUpdate() {
        this.scheduledAfterRender.push(() => {
            this.setMessagesHeight();
        });
    }

    setMessagesHeight() {
        if (this.showMessages) {
            this.messageContainer.style.height = this.messageContainerHeight;
        }
    }

    getFormattedValueObj(value: string = ''): FormattedValue {
        const formattingFnMap: Dict<FormattingFn> = {
            phone: formatPhoneNumber,
            date: formatDate,
            numeric: formatNumeric,
        };

        const formattingFn: FormattingFn = formattingFnMap[this.type];

        return (
            formattingFn?.(value, this.format) ?? {
                value: value,
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
                inputElement?.selectionStart ?? formattedValueLength,
            valueLength: formattedValueLength,
            previousValueLength: inputElement?.value.length,
            hasSelection: false,
        };
    }

    setCursorPosition(cursorData: CursorData) {
        if (!cursorData.hasSelection) {
            const inputElement = this.inputElement,
                {
                    valueLength,
                    previousValueLength,
                    startingPosition,
                } = cursorData;
            if (
                startingPosition === valueLength &&
                valueLength >= previousValueLength &&
                'currency' === this.type
            )
                inputElement.setSelectionRange(valueLength, valueLength);
            else {
                const cursorPosition =
                    startingPosition + (valueLength - previousValueLength);
                inputElement.setSelectionRange(cursorPosition, cursorPosition);
            }
        }
    }

    render() {
        return (
            <div class="input-container">
                {this.label && (
                    <label htmlFor={this.inputId}>
                        {this.label}
                        {this.optional && (
                            <span class="optional-tag"> (optional)</span>
                        )}
                    </label>
                )}
                <input
                    id={this.inputId}
                    type={this.inputType}
                    required={!this.optional}
                    aria-label={this.inputAriaLabel}
                    aria-invalid={this.hasErrors ? 'true' : 'false'}
                    aria-describedby={this.descriptionId}
                    onChange={this.onInputChange}
                    onInput={this.onInputInput}
                    onFocus={this.onInputFocus}
                    onBlur={this.onInputBlur}
                />
                {this.renderMessages()}
            </div>
        );
    }

    renderMessages() {
        return (
            <div class="message-container">
                <protean-message
                    type={this.hasErrors ? 'error' : 'info'}
                    level="status"
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
