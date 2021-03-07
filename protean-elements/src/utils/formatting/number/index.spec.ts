import formatNumber from './';

describe('formatNumber', () => {
    it('returns empty values when no args passed', () => {
        expect(formatNumber()).toEqual({
            value: '',
            formattedValue: '',
            formattingCharacterCount: 0,
        });
    });

    it('uses 0 decimals and splits formattedValue at the thousands by default', () => {
        const value = '1234567890';
        expect(formatNumber(value)).toEqual({
            value: '1234567890',
            formattedValue: '1,234,567,890',
            formattingCharacterCount: 3,
        });
    });

    it('falls back to 0 decimals if nullish value passed to options', () => {
        const value = '1234567890';
        expect(formatNumber(value, null)).toEqual({
            value: '1234567890',
            formattedValue: '1234567890',
            formattingCharacterCount: 0,
        });
    });

    it('does not render thousands separator if delimited is false', () => {
        const value = '1234567890';
        expect(formatNumber(value, { decimals: 0, delimited: false })).toEqual({
            value: '1234567890',
            formattedValue: '1234567890',
            formattingCharacterCount: 0,
        });
    });

    it('handles decimals option', () => {
        const value = '1234567890';
        expect(formatNumber(value, { decimals: 2, delimited: true })).toEqual({
            value: '12345678.90',
            formattedValue: '12,345,678.90',
            formattingCharacterCount: 3,
        });
    });

    it('respects explicit setting and forces shape when empty', () => {
        let value = '12345678.900';
        expect(
            formatNumber(value, { decimals: 2, delimited: true }, true),
        ).toEqual({
            value: '12345678.90',
            formattedValue: '12,345,678.90',
            formattingCharacterCount: 3,
        });

        value = '';
        expect(
            formatNumber(value, { decimals: 2, delimited: true }, true),
        ).toEqual({
            value: '0.00',
            formattedValue: '0.00',
            formattingCharacterCount: 1,
        });

        value = '1234567890';
        expect(
            formatNumber(value, { decimals: 2, delimited: true }, true),
        ).toEqual({
            value: '1234567890.00',
            formattedValue: '1,234,567,890.00',
            formattingCharacterCount: 4,
        });
    });

    it('removes non-integer characters from value', () => {
        const value = '!@#$%^12)(*&^345{}[]:";.,<>/?|/67890';
        expect(formatNumber(value, { decimals: 0, delimited: true })).toEqual({
            value: '1234567890',
            formattedValue: '1,234,567,890',
            formattingCharacterCount: 3,
        });
    });
});
