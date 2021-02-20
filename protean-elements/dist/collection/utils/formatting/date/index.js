import formatGeneric from '@/utils/formatting/generic';
const formats = {
  'MM/DD/YYYY': '00/00/0000',
  'M/D/YYYY': '0#/0#/0000',
  'MM/DD/YY': '00/00/00',
  'M/D/YY': '0#/0#/00',
  'MM/YY': '00/00',
  'M/YY': '0#/00',
};
export default function formatDate(value, format = 'MM/DD/YYYY') {
  const fmt = formats[format] ?? formats['MM/DD/YYYY'];
  return formatGeneric(value, fmt);
}
