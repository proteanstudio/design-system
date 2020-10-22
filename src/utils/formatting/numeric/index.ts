import formatNumber, { NumberFormatOptions } from '../number';
import { Dict } from '../../../types';
import { FormattedValue } from '../types';

const formats: Dict<NumberFormatOptions> = {
    delimited: {
        decimals: 2,
    },
    dec: {
        decimals: 0,
    },
};
export default function formatNumeric(
    value: string,
    format: string = 'delimited',
): FormattedValue {
    if (format.includes('dec')) {
        const decimals = Number(format.replace('dec', ''));

        const formatObj = {
            ...formats.dec,
            decimals,
        };

        return formatNumber(value, formatObj);
    }

    let formatObj: NumberFormatOptions =
        formats[format] ?? formats['delimited'];

    return formatNumber(value, formatObj);
}
