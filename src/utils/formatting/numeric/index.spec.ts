import formatNumeric from './';

describe('formatNumeric', () => {
    it('uses delimited format by default', () => {
        let value = '1234567890';
        expect(formatNumeric(value)).toEqual({
            value: '12345678.90',
            formattedValue: '12,345,678.90',
        });

        value = '0987654321';
        expect(formatNumeric(value, 'foo')).toEqual({
            value: '9876543.21',
            formattedValue: '9,876,543.21',
        });

        value = '1234567890';
        expect(formatNumeric(value, 'delimited')).toEqual({
            value: '12345678.90',
            formattedValue: '12,345,678.90',
        });
    });

    it('allows Ndec format', () => {
        let value = '1234567890';
        expect(formatNumeric(value, '2dec')).toEqual({
            value: '12345678.90',
            formattedValue: '12,345,678.90',
        });

        value = '0987654321';
        expect(formatNumeric(value, '0dec')).toEqual({
            value: '987654321',
            formattedValue: '987,654,321',
        });

        value = '1234567890';
        expect(formatNumeric(value, '6dec')).toEqual({
            value: '1234.567890',
            formattedValue: '1,234.567890',
        });
    });

    it('respects explicit number sets', () => {
        let value = '123456.7890';
        expect(formatNumeric(value, 'delimited', true)).toEqual({
            value: '123456.79',
            formattedValue: '123,456.79',
        });
    });
});
