export interface FormattedValue {
    value: string;
    formattedValue: string;
}

export type FormattingFn = (value: string, format?: string) => FormattedValue;
