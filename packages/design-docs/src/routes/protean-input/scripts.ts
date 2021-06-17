import { Options, Vue } from 'vue-class-component';
import CodeSnippet from '@/components/code-snippet/index.vue';

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
    apiFormat = 'date';

    get demoFormats(): string[] | undefined {
        if (this.demoType === 'numeric') return this.demoNumericFormats;

        if (this.demoType === 'date') return this.dateFormats;

        return;
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
