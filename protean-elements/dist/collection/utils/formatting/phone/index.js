import formatGeneric from '@/utils/formatting/generic';
const formats = {
  US: {
    format: '(000) 000-0000',
  },
};
export default function formatPhoneNumber(value, format = 'US') {
  const formatObj = formats[format] ?? formats['US'];
  return formatGeneric(value, formatObj.format);
}
