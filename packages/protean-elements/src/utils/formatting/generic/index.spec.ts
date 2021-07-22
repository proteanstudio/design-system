import formatGeneric from './';

describe('formatGeneric', () => {
    it('returns empty value if no args passed', () => {
        expect(formatGeneric()).toEqual({
            value: '',
            formattedValue: '',
            maxlength: undefined,
        });
    });

    it('returns unchanged value if value or format missing', () => {
        let value = '';
        expect(formatGeneric(value, 'foo')).toEqual({
            value,
            formattedValue: value,
            maxlength: 3,
        });

        value = 'foo';
        expect(formatGeneric(value, '')).toEqual({
            value,
            formattedValue: value,
            maxlength: undefined,
        });
    });

    it('filters for alpha characters with "a" format and caps at length of mask', () => {
        const value = '123!@#$%":>?Tes_)(*Ting43dfs';
        expect(formatGeneric(value, 'aaaaaaa')).toEqual({
            value: 'TesTing',
            formattedValue: 'TesTing',
            maxlength: 7,
        });
    });

    it('filters for capital alpha characters with "A" format', () => {
        const value = '123!@#$%":>?Tes_)(*Ting43dfs';
        expect(formatGeneric(value, 'AAAA')).toEqual({
            value: 'TT',
            formattedValue: 'TT',
            maxlength: 4,
        });
    });

    it('filters for optional alphanumeric characters with "@" format', () => {
        const value = '123!@#$%":>?Tes_)(*Ting43dfs';
        expect(formatGeneric(value, '@@@@@@@')).toEqual({
            value: '123TesT',
            formattedValue: '123TesT',
            maxlength: 7,
        });

        expect(formatGeneric(value, '@@@@@@)(@')).toEqual({
            value: '123TesT',
            formattedValue: '123Tes)(T',
            maxlength: 9,
        });
    });

    it('filters for numeric characters with "0" format', () => {
        const value = '123!@#$%":>?Tes4_)(*Ting43dfs';
        expect(formatGeneric(value, '0000')).toEqual({
            value: '1234',
            formattedValue: '1234',
            maxlength: 4,
        });
    });

    it('filters for optional numeric characters with "9" format', () => {
        const value = '1-23!@#$%":>?Tes4_)(*Ting43dfs';
        expect(formatGeneric(value, '9999')).toEqual({
            value: '1234',
            formattedValue: '1234',
            maxlength: 4,
        });

        expect(formatGeneric(value, '9-99:9')).toEqual({
            value: '1234',
            formattedValue: '1-23:4',
            maxlength: 6,
        });
    });
});
