import { Dict } from '../../../types';
import formatGeneric from '../generic';
import { FormattedValue } from '../types';

const formats: Dict<string> = {
    'MM/DD/YYYY': '00/00/0000',
    'M/D/YYYY': '0#/0#/0000',
    'MM/DD/YY': '00/00/00',
    'M/D/YY': '0#/0#/00',
    'MM/YY': '00/00',
    'M/YY': '0#/00',
};

export default function formatDate(
    value: string,
    format = 'MM/DD/YYYY',
): FormattedValue {
    const fmt = formats[format] ?? formats['MM/DD/YYYY'];

    return formatGeneric(value, fmt);
}
