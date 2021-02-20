export default function formatNumber(value = '', options = {
  decimals: 0,
}, explicit = false) {
  const decimals = options?.decimals ?? 0;
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
  const { integerString, decimalString } = splitValue(filteredValue, decimals);
  const formattedIntegerString = integerString.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
  const formattedDecimalString = decimals > 0 ? `${decimalSeparator}${decimalString}` : '';
  const valueString = `${integerString}${formattedDecimalString}`;
  const formattedValueString = `${formattedIntegerString}${formattedDecimalString}`;
  return { value: valueString, formattedValue: formattedValueString };
}
export function splitValue(value, decimals) {
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
