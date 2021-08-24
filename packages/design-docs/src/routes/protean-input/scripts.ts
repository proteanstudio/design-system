import { Options, Vue } from 'vue-class-component';
import CodeSnippet from '@/components/code-snippet/index.vue';
import { Dict } from '@/types';

@Options({
    components: { CodeSnippet },
})
export default class ProteanInputRoute extends Vue {
    demoTypes = [
        {
            label: 'Native',
            children: [
                {
                    value: 'text',
                    label: 'Text (default)',
                },
                {
                    value: 'tel',
                    label: 'tel',
                },
                {
                    value: 'number',
                    label: 'number',
                },
                {
                    value: 'password',
                    label: 'password',
                },
                {
                    value: 'search',
                    label: 'search',
                },
                {
                    value: 'color',
                    label: 'color',
                },
            ],
        },
        {
            label: 'Formatted',
            children: [
                {
                    value: 'phone',
                    label: 'phone',
                },
                {
                    value: 'numeric',
                    label: 'numeric',
                },
                {
                    value: 'date',
                    label: 'date',
                },
                {
                    value: 'color-code',
                    label: 'color-code',
                },
            ],
        },
    ];
    demoType = 'text';
    demoHints = ['Hint #1', 'Hint #2'];
    demoErrorsList = ['Error #1'];
    demoShowErrors = false;
    demoSuppressMessages = false;
    demoOptional = false;
    demoDisabled = false;
    demoReadonly = false;
    demoMaxlength = '20';
    demoFormat = '';
    demoNumericFormats = ['integer', 'delimited', '3dec'];
    dateFormats = [
        'MM/DD/YYYY',
        'M/D/YYYY',
        'MM/DD/YY',
        'M/D/YY',
        'MM/YY',
        'M/YY',
    ];
    colorCodeFormats = ['hex', 'hexa', 'rgb'];
    apiFormat = 'date';

    get demoFormats(): string[] | undefined {
        const formatMap: Dict<string[]> = {
            numeric: this.demoNumericFormats,
            date: this.dateFormats,
            'color-code': this.colorCodeFormats,
        };

        return formatMap[this.demoType];
    }

    get demoErrors(): string[] {
        if (this.demoShowErrors) return this.demoErrorsList;

        return [];
    }

    spamErrors(): void {
        if (!this.demoShowErrors || this.demoSuppressMessages) return;

        const arrayLength = Math.round(Math.random() * 9 + 1);

        const errorList = new Array(arrayLength)
            .fill('')
            .map((i, index) => `Error #${index + 1}`);

        this.demoErrorsList = errorList;
    }
}
