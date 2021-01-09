import formatPhone from './';

describe('formatPhone', () => {
    it('uses US format by default', () => {
        let value = '1234567890';
        expect(formatPhone(value)).toEqual({
            value,
            formattedValue: '(123) 456-7890',
        });

        value = '0987654321';
        expect(formatPhone(value, 'US')).toEqual({
            value,
            formattedValue: '(098) 765-4321',
        });

        value = '1234567890';
        expect(formatPhone(value, 'foo')).toEqual({
            value,
            formattedValue: '(123) 456-7890',
        });
    });
});
