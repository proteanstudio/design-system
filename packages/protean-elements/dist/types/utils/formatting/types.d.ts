export interface FormattedValue {
  value: string;
  formattedValue: string;
  maxlength?: number;
  formattingCharacterCount?: number;
}
export declare type FormattingFn = (value: string, format?: string, explicit?: boolean) => FormattedValue;
