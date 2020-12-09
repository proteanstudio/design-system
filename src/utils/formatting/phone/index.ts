import { Dict } from '../../../types';
import formatGeneric from '../generic';
import { FormattedValue } from '../types';

interface PhoneNumberFormat {
    format: string;
}

const formats: Dict<PhoneNumberFormat> = {
    US: {
        format: '(000) 000-0000',
    },
};
export default function formatPhoneNumber(
    value: string,
    format = 'US',
): FormattedValue {
    const formatObj: PhoneNumberFormat = formats[format] ?? formats['US'];

    return formatGeneric(value, formatObj.format);
}
