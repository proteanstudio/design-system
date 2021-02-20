import formatNumber from '@/utils/formatting/number';
const formats = {
  delimited: {
    decimals: 2,
  },
  dec: {
    decimals: 0,
  },
};
export default function formatNumeric(value, format = 'delimited', explicit = false) {
  if (format.includes('dec')) {
    const decimals = Number(format.replace('dec', ''));
    const formatObj = {
      ...formats.dec,
      decimals,
    };
    return formatNumber(value, formatObj, explicit);
  }
  const formatObj = formats[format] ?? formats['delimited'];
  return formatNumber(value, formatObj, explicit);
}
