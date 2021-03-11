import { FormattedValue } from '@/utils/formatting/types';

export interface NumberFormatOptions {
    decimals: number;
    delimited: boolean;
}

export default function formatNumber(
    value = '',
    options: NumberFormatOptions = {
        decimals: 0,
        delimited: true,
    },
    explicit = false,
): FormattedValue {
    const decimals = options?.decimals ?? 0;

    let filteredValue = value;
    if (explicit) {
        filteredValue = value.replace(/[^\d.]/g, '');
        filteredValue = filteredValue
            ? Number(filteredValue).toFixed(decimals)
            : '';
    }

    filteredValue = filteredValue.replace(/[^\d]/g, '');
    const { integerString, decimalString } = splitValue(
        filteredValue,
        decimals,
    );

    const thousandsSeparator = options?.delimited ? ',' : '';
    const decimalSeparator = decimals > 0 ? '.' : '';
    const formattedIntegerString = integerString.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        thousandsSeparator,
    );
    const formattedDecimalString = `${decimalSeparator}${decimalString}`;

    const valueString = `${integerString}${formattedDecimalString}`;
    const formattedValueString = `${formattedIntegerString}${formattedDecimalString}`;

    return {
        value: valueString,
        formattedValue: formattedValueString,
        formattingCharacterCount:
            formattedValueString.length -
            valueString.length +
            decimalSeparator.length,
    };
}

interface SplitValue {
    integerString: string;
    decimalString: string;
}

export function splitValue(value: string, decimals: number): SplitValue {
    const integerLength = value.length - decimals;
    let integerString = value
        .substring(0, integerLength)
        .padStart(decimals > 0 ? 1 : 0, '0');

    if (integerString.length > 1 && integerString[0] === '0') {
        integerString = integerString.substring(1);
    }

    const decimalString = value
        .substring(integerLength)
        .padStart(decimals, '0');

    return {
        integerString,
        decimalString,
    };
}
