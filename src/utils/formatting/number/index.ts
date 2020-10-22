import { FormattedValue } from '../types';

export interface NumberFormatOptions {
    decimals: number;
}

export default function formatNumber(
    value: string = '',
    options: NumberFormatOptions = {
        decimals: 0,
    },
    explicit = false,
): FormattedValue {
    let { decimals } = options;
    decimals = decimals ?? 0;
    const thousandsSeparator = ',';
    const decimalSeparator = '.';

    let filteredValue = value;
    if (explicit) {
        filteredValue = value.replace(/[^\d.]/g, '');
        filteredValue = filteredValue
            ? Number(filteredValue).toFixed(decimals)
            : '';
    }

    filteredValue = filteredValue.replace(/[^\d]/g, '');
    let { integerString, decimalString } = splitValue(filteredValue, decimals);

    const formattedIntegerString = integerString.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        thousandsSeparator,
    );
    const formattedDecimalString =
        decimals > 0 ? `${decimalSeparator}${decimalString}` : '';

    const valueString = `${integerString}${formattedDecimalString}`;
    const formattedValueString = `${formattedIntegerString}${formattedDecimalString}`;

    return { value: valueString, formattedValue: formattedValueString };
}

function splitValue(value: string, decimals: number) {
    const integerLength = value.length - decimals;
    let integerString = value
        .substring(0, integerLength)
        .padStart(decimals > 0 ? 1 : 0, '0');

    if (integerString.length > 1 && integerString[0] === '0') {
        integerString = integerString.substring(1);
    }

    const decimalString =
        value.substring(integerLength)?.padStart(decimals, '0') ?? '';

    return {
        integerString,
        decimalString,
    };
}
