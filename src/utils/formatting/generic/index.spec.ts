import formatGeneric from './';

describe('formatGeneric', () => {
    it('returns empty value if no args passed', () => {
        expect(formatGeneric()).toEqual({
            value: '',
            formattedValue: '',
        });
    });

    it('returns unchanged value if value or format missing', () => {
        let value = '';
        expect(formatGeneric(value, 'foo')).toEqual({
            value,
            formattedValue: value,
        });

        value = 'foo';
        expect(formatGeneric(value, '')).toEqual({
            value,
            formattedValue: value,
        });
    });

    it('filters for alpha characters with "a" format and caps at length of mask', () => {
        const value = '123!@#$%":>?Tes_)(*Ting43dfs';
        expect(formatGeneric(value, 'aaaaaaa')).toEqual({
            value: 'TesTing',
            formattedValue: 'TesTing',
        });
    });

    it('filters for capital alpha characters with "A" format', () => {
        const value = '123!@#$%":>?Tes_)(*Ting43dfs';
        expect(formatGeneric(value, 'AAAA')).toEqual({
            value: 'TT',
            formattedValue: 'TT',
        });
    });

    it('filters for optional alphanumeric characters with "@" format', () => {
        const value = '123!@#$%":>?Tes_)(*Ting43dfs';
        expect(formatGeneric(value, '@@@@@@@')).toEqual({
            value: '123TesT',
            formattedValue: '123TesT',
        });

        expect(formatGeneric(value, '@@@@@@)(@')).toEqual({
            value: '123TesT',
            formattedValue: '123Tes)(T',
        });
    });

    it('filters for numeric characters with "0" format', () => {
        const value = '123!@#$%":>?Tes4_)(*Ting43dfs';
        expect(formatGeneric(value, '0000')).toEqual({
            value: '1234',
            formattedValue: '1234',
        });
    });

    it('filters for optional numeric characters with "#" format', () => {
        const value = '1-23!@#$%":>?Tes4_)(*Ting43dfs';
        expect(formatGeneric(value, '####')).toEqual({
            value: '1234',
            formattedValue: '1234',
        });

        expect(formatGeneric(value, '#-##:#')).toEqual({
            value: '1234',
            formattedValue: '1-23:4',
        });
    });
});
