import { Dict } from '@/types';
import formatGeneric from '@/utils/formatting/generic';
import { FormattedValue } from '@/utils/formatting/types';

const formats: Dict<string> = {
    'MM/DD/YYYY': '00/00/0000',
    'M/D/YYYY': '09/09/0000',
    'MM/DD/YY': '00/00/00',
    'M/D/YY': '09/09/00',
    'MM/YY': '00/00',
    'M/YY': '09/00',
};

export default function formatDate(
    value: string,
    format = 'MM/DD/YYYY',
): FormattedValue {
    const fmt = formats[format] ?? formats['MM/DD/YYYY'];

    return formatGeneric(value, fmt);
}
