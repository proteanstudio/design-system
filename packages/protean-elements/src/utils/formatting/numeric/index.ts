import formatNumber, { NumberFormatOptions } from '@/utils/formatting/number';
import { Dict } from '@/types';
import { FormattedValue } from '@/utils/formatting/types';

const formats: Dict<NumberFormatOptions> = {
    delimited: {
        decimals: 2,
        delimited: true,
    },
    dec: {
        decimals: 0,
        delimited: true,
    },
    integer: {
        decimals: 0,
        delimited: false,
    },
};
export default function formatNumeric(
    value: string,
    format = 'delimited',
    explicit = false,
): FormattedValue {
    if (format.includes('dec')) {
        const decimals = Number(format.replace('dec', ''));

        const formatObj = {
            ...formats.dec,
            decimals,
        };

        return formatNumber(value, formatObj, explicit);
    }

    const formatObj: NumberFormatOptions =
        formats[format] ?? formats['delimited'];

    return formatNumber(value, formatObj, explicit);
}
