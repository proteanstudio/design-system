import formatNumber from './';

describe('formatNumber', () => {
    it('returns empty values when no args passed', () => {
        expect(formatNumber()).toEqual({
            value: '',
            formattedValue: '',
        });
    });

    it('uses 0 decimals and splits formattedValuee at the thousands by default', () => {
        const value = '1234567890';
        expect(formatNumber(value)).toEqual({
            value: '1234567890',
            formattedValue: '1,234,567,890',
        });
    });

    it('falls back to 0 decimals if nullish value passed to options', () => {
        const value = '1234567890';
        expect(formatNumber(value, null)).toEqual({
            value: '1234567890',
            formattedValue: '1,234,567,890',
        });
    });

    it('handles decimals option', () => {
        const value = '1234567890';
        expect(formatNumber(value, { decimals: 2 })).toEqual({
            value: '12345678.90',
            formattedValue: '12,345,678.90',
        });
    });

    it('respects explict setting and forces shape when empty', () => {
        let value = '12345678.900';
        expect(formatNumber(value, { decimals: 2 }, true)).toEqual({
            value: '12345678.90',
            formattedValue: '12,345,678.90',
        });

        value = '';
        expect(formatNumber(value, { decimals: 2 }, true)).toEqual({
            value: '0.00',
            formattedValue: '0.00',
        });

        value = '1234567890';
        expect(formatNumber(value, { decimals: 2 }, true)).toEqual({
            value: '1234567890.00',
            formattedValue: '1,234,567,890.00',
        });
    });

    it('removes non-integer characters from value', () => {
        const value = '!@#$%^12)(*&^345{}[]:";.,<>/?|/67890';
        expect(formatNumber(value, { decimals: 0 })).toEqual({
            value: '1234567890',
            formattedValue: '1,234,567,890',
        });
    });
});
