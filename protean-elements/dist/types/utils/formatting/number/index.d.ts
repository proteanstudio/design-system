import { FormattedValue } from '@/utils/formatting/types';
export interface NumberFormatOptions {
  decimals: number;
}
export default function formatNumber(value?: string, options?: NumberFormatOptions, explicit?: boolean): FormattedValue;
interface SpllitValue {
  integerString: string;
  decimalString: string;
}
export declare function splitValue(value: string, decimals: number): SpllitValue;
export {};
