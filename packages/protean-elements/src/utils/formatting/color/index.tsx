import { Dict } from '@/types';
import formatGeneric from '@/utils/formatting/generic';
import { FormattedValue } from '@/utils/formatting/types';

const formats: Dict<string> = {
    hex: '#@@@@@@',
    hexa: '#@@@@@@@@',
    rgb: 'rgb(099, 099, 099)',
    rgba: 'rgba(099, 099, 099, 0.09)',
};

export default function formatColor(
    value: string,
    format = 'hex',
): FormattedValue {
    const fmt = formats[format] ?? formats['hex'];

    const formattedObj = formatGeneric(value.toLowerCase(), fmt);

    if (format.includes('rgb')) {
        return {
            ...formattedObj,
            value: formattedObj.formattedValue,
        };
    }

    return formattedObj;
}
