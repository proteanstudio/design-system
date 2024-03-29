import formatDate from './';

describe('formatDate', () => {
    it('uses MM/DD/YYYY format by default', () => {
        let value = '12345678';
        expect(formatDate(value)).toEqual({
            value,
            formattedValue: '12/34/5678',
            maxlength: 10,
        });

        value = '87654321';
        expect(formatDate(value, 'foo')).toEqual({
            value,
            formattedValue: '87/65/4321',
            maxlength: 10,
        });
    });

    it('trims excess characters from end of value', () => {
        const value = '1234567890';
        expect(formatDate(value)).toEqual({
            value: '12345678',
            formattedValue: '12/34/5678',
            maxlength: 10,
        });
    });

    it('allows "M/D/YYYY"', () => {
        let value = '12345678';
        expect(formatDate(value, 'M/D/YYYY')).toEqual({
            value,
            formattedValue: '12/34/5678',
            maxlength: 10,
        });

        value = '1/2/3456';
        expect(formatDate(value, 'M/D/YYYY')).toEqual({
            value: '123456',
            formattedValue: value,
            maxlength: 10,
        });

        value = '1/23/4567';
        expect(formatDate(value, 'M/D/YYYY')).toEqual({
            value: '1234567',
            formattedValue: value,
            maxlength: 10,
        });

        value = '12/3/4567';
        expect(formatDate(value, 'M/D/YYYY')).toEqual({
            value: '1234567',
            formattedValue: value,
            maxlength: 10,
        });
    });

    it('allows "MM/DD/YY"', () => {
        let value = '123456';
        expect(formatDate(value, 'MM/DD/YY')).toEqual({
            value,
            formattedValue: '12/34/56',
            maxlength: 8,
        });

        value = '1/2/3456';
        expect(formatDate(value, 'MM/DD/YY')).toEqual({
            value: '123456',
            formattedValue: '12/34/56',
            maxlength: 8,
        });

        value = '1/23/456';
        expect(formatDate(value, 'MM/DD/YY')).toEqual({
            value: '123456',
            formattedValue: '12/34/56',
            maxlength: 8,
        });
    });

    it('allows "M/D/YY"', () => {
        let value = '123456';
        expect(formatDate(value, 'M/D/YY')).toEqual({
            value,
            formattedValue: '12/34/56',
            maxlength: 8,
        });

        value = '1/2/3456';
        expect(formatDate(value, 'M/D/YY')).toEqual({
            value: '1234',
            formattedValue: '1/2/34',
            maxlength: 8,
        });

        value = '1/23/456';
        expect(formatDate(value, 'M/D/YY')).toEqual({
            value: '12345',
            formattedValue: '1/23/45',
            maxlength: 8,
        });
    });

    it('allows "MM/YY"', () => {
        let value = '1234';
        expect(formatDate(value, 'MM/YY')).toEqual({
            value,
            formattedValue: '12/34',
            maxlength: 5,
        });

        value = '1/2/34';
        expect(formatDate(value, 'MM/YY')).toEqual({
            value: '1234',
            formattedValue: '12/34',
            maxlength: 5,
        });

        value = '1/234';
        expect(formatDate(value, 'MM/YY')).toEqual({
            value: '1234',
            formattedValue: '12/34',
            maxlength: 5,
        });
    });

    it('allows "M/YY"', () => {
        let value = '1234';
        expect(formatDate(value, 'M/YY')).toEqual({
            value,
            formattedValue: '12/34',
            maxlength: 5,
        });

        value = '1/2/3';
        expect(formatDate(value, 'M/YY')).toEqual({
            value: '123',
            formattedValue: '1/23',
            maxlength: 5,
        });

        value = '1/234';
        expect(formatDate(value, 'M/YY')).toEqual({
            value: '123',
            formattedValue: '1/23',
            maxlength: 5,
        });

        value = '12/34';
        expect(formatDate(value, 'M/YY')).toEqual({
            value: '1234',
            formattedValue: '12/34',
            maxlength: 5,
        });
    });
});
