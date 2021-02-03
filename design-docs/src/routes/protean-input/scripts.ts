import { Options, Vue } from 'vue-class-component';
import CodeSnippet from '@/components/code-snippet/index.vue';

@Options({
    components: { CodeSnippet },
})
export default class ProteanInput extends Vue {
    demoTypes = [
        {
            value: 'text',
            label: 'Text (default)',
        },
        {
            value: 'tel',
            label: 'tel',
        },
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
            value: 'email',
            label: 'email',
        },
    ];
    demoType = 'text';
    demoErrorsList: string[] = [];
    demoShowErrors = false;
    demoOptional = false;
    demoDisabled = false;

    get demoErrors(): string[] {
        if (this.demoShowErrors) return this.demoErrorsList;

        return [];
    }

    spamErrors(): void {
        const arrayLength = Math.round(Math.random() * 9 + 1);

        const errorList = new Array(arrayLength)
            .fill('')
            .map((i, index) => `error ${index}`);

        this.demoErrorsList = errorList;
    }
}
