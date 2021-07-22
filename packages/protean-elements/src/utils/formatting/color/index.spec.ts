import formatColor from './';

describe('formatColor', () => {
    it('uses hex format by default', () => {
        let value = '00aaFF';
        expect(formatColor(value)).toEqual({
            value: '00aaff',
            formattedValue: '#00aaff',
            maxlength: 7,
        });

        value = '876543';
        expect(formatColor(value, 'foo')).toEqual({
            value,
            formattedValue: '#876543',
            maxlength: 7,
        });
    });

    it('trims excess characters from end of value', () => {
        const value = '1234567890';
        expect(formatColor(value)).toEqual({
            value: '123456',
            formattedValue: '#123456',
            maxlength: 7,
        });
    });

    it('allows "hexa"', () => {
        let value = '12345678';
        expect(formatColor(value, 'hexa')).toEqual({
            value,
            formattedValue: '#12345678',
            maxlength: 9,
        });

        value = '#123456aa';
        expect(formatColor(value, 'hexa')).toEqual({
            value: '123456aa',
            formattedValue: value,
            maxlength: 9,
        });
    });

    it('allows "rgb"', () => {
        let value = 'rgb(1, 2, 4)';
        expect(formatColor(value, 'rgb')).toEqual({
            value,
            formattedValue: value,
            maxlength: 18,
        });

        value = 'rgb(1a2, 234, 44)';
        expect(formatColor(value, 'rgb')).toEqual({
            value: 'rgb(12, 234, 44)',
            formattedValue: 'rgb(12, 234, 44)',
            maxlength: 18,
        });

        value = 'rgb(233434345, 255, 255)';
        expect(formatColor(value, 'rgb')).toEqual({
            value: 'rgb(233, 434, 345)',
            formattedValue: 'rgb(233, 434, 345)',
            maxlength: 18,
        });

        value = 'x/mdz,s..12310sgfad2232';
        expect(formatColor(value, 'rgb')).toEqual({
            value: 'rgb(123, 102, 232',
            formattedValue: 'rgb(123, 102, 232',
            maxlength: 18,
        });
    });

    it('allows "rgba"', () => {
        let value = 'rgba(1, 2, 4, 0.34)';
        expect(formatColor(value, 'rgba')).toEqual({
            value,
            formattedValue: value,
            maxlength: 25,
        });

        value = 'rgba(1a2, 234, 44)';
        expect(formatColor(value, 'rgba')).toEqual({
            value: 'rgba(12, 234, 44, ',
            formattedValue: 'rgba(12, 234, 44, ',
            maxlength: 25,
        });

        value = 'rgba(233434345, 255, 255)';
        expect(formatColor(value, 'rgba')).toEqual({
            value: 'rgba(233, 434, 345, 2.55)',
            formattedValue: 'rgba(233, 434, 345, 2.55)',
            maxlength: 25,
        });

        value = 'x/mdz,s..12310sgfad2232435j';
        //since 'a' is the generic for lowercase letters, any letters will be accepted in that space
        expect(formatColor(value, 'rgba')).toEqual({
            value: 'rgbx(123, 102, 232, 4.35)',
            formattedValue: 'rgbx(123, 102, 232, 4.35)',
            maxlength: 25,
        });
    });
});
