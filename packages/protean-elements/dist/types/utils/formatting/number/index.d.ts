import { FormattedValue } from '@/utils/formatting/types';
export interface NumberFormatOptions {
  decimals: number;
  delimited: boolean;
}
export default function formatNumber(value?: string, options?: NumberFormatOptions, explicit?: boolean): FormattedValue;
interface SplitValue {
  integerString: string;
  decimalString: string;
}
export declare function splitValue(value: string, decimals: number): SplitValue;
export {};
