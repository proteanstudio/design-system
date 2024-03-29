import { FormattedValue } from '@/utils/formatting/types';

export default function formatGeneric(value = '', format = ''): FormattedValue {
    const maxlength = format.length > 0 ? format.length : undefined;

    if (!value || !format) {
        return {
            value,
            formattedValue: value,
            maxlength,
        };
    }

    const optionalValidatingCharacters = new Set(['@', '9']);
    const knownValidatingCharacters = new Set([
        'a',
        'A',
        '0',
        ...optionalValidatingCharacters,
    ]);

    const splitFormat = format.split('');
    let valueIndex = 0;

    const formattingCharacters = new Set(
        splitFormat.filter(char => !knownValidatingCharacters.has(char)),
    );

    const formattedValueObj = splitFormat.reduce(
        (acc: FormattedValue, item: string) => {
            if (valueIndex >= value.length) return acc;

            if (
                optionalValidatingCharacters.has(item) &&
                formattingCharacters.has(value[valueIndex])
            ) {
                return acc;
            }

            if (knownValidatingCharacters.has(item)) {
                const formattedChar = checkCharacter(item);
                if (formattedChar) {
                    valueIndex++;
                    return {
                        value: `${acc.value}${formattedChar}`,
                        formattedValue: `${acc.formattedValue}${formattedChar}`,
                    };
                }
                return acc;
            }

            value[valueIndex].includes(item) && valueIndex++;

            return {
                value: acc.value,
                formattedValue: `${acc.formattedValue}${item}`,
            };
        },
        { value: '', formattedValue: '' },
    );

    return {
        value: formattedValueObj.value,
        formattedValue: formattedValueObj.formattedValue,
        maxlength,
    };

    function checkCharacter(validatingCharacter: string): string {
        if (valueIndex >= value.length) return '';
        let character = value[valueIndex];

        switch (validatingCharacter) {
            case 'a':
                character = character.replace(/[^a-zA-Z]+/g, '');
                break;
            case 'A':
                character = character.replace(/[^A-Z]+/g, '');
                break;
            case '0':
                character = character.replace(/[^\d]/g, '');
                break;
            case '@':
                character = character.replace(/[^\da-zA-Z]+/g, '');
                break;
            case '9':
                character = character.replace(/[^\d]/g, '');
                break;
        }

        if (character) {
            return character;
        }

        valueIndex++;
        return checkCharacter(validatingCharacter);
    }
}
