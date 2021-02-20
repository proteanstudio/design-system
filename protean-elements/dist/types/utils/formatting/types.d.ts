export interface FormattedValue {
  value: string;
  formattedValue: string;
}
export declare type FormattingFn = (value: string, format?: string, explicit?: boolean) => FormattedValue;
