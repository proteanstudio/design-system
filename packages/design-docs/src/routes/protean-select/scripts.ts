import { Options, Vue } from 'vue-class-component';
import CodeSnippet from '@/components/code-snippet/index.vue';

@Options({
    components: { CodeSnippet },
})
export default class ProteanSelectRoute extends Vue {
    demoOptgroupOptions = [
        {
            label: 'Group 1',
            children: [
                {
                    value: '1',
                    label: 'Option 1',
                },
                {
                    value: '2',
                    label: 'Option 2',
                },
                {
                    value: '3',
                    label: 'Option 3',
                },
            ],
        },
        {
            label: 'Group 2',
            children: [
                {
                    value: '4',
                    label: 'Option 4',
                },
                {
                    value: '5',
                    label: 'Option 5',
                },
            ],
        },
        {
            label: 'Group 3',
            children: [
                {
                    value: '6',
                    label: 'Option 6',
                },
                {
                    value: '7',
                    label: 'Option 7',
                },
                {
                    value: '8',
                    label: 'Option 8',
                },
            ],
        },
    ];
    demoFlatOptions = [
        {
            value: '1',
            label: 'Option 1',
        },
        {
            value: '2',
            label: 'Option 2',
        },
        {
            value: '3',
            label: 'Option 3',
        },
        {
            value: '4',
            label: 'Option 4',
        },
        {
            value: '5',
            label: 'Option 5',
        },
        {
            value: '6',
            label: 'Option 6',
        },
        {
            value: '7',
            label: 'Option 7',
        },
        {
            value: '8',
            label: 'Option 8',
        },
    ];
    demoWithOptGroups = false;
    demoValue = '';
    demoSelectedOptions: string[] = [];
    demoMultiple = false;
    demoType = 'text';
    demoErrorsList = ['Error #1'];
    demoShowErrors = false;
    demoOptional = false;
    demoDisabled = false;

    get demoErrors(): string[] {
        if (this.demoShowErrors) return this.demoErrorsList;

        return [];
    }

    get snippetOptions(): string {
        if (this.demoWithOptGroups) {
            return this.demoOptgroupOptions.reduce((acc, group, index) => {
                const children = this.buildOptionString(group.children);

                const leadingLineBreak = index === 0 ? '' : '\n';

                return `${acc}${leadingLineBreak}<protean-optgroup label="${group.label}">
                ${children}
                </protean-optgroup>`;
            }, '');
        }
        return this.buildOptionString(this.demoFlatOptions);
    }

    buildOptionString(options: { label: string; value: string }[]): string {
        return options.reduce((innerAcc, { label, value }, index) => {
            const childStr = `<protean-option value="${value}" label="${label}">${label}</protean-option>`;

            const trailingLineBreak = index === options.length - 1 ? '' : '\n';

            return innerAcc + childStr + trailingLineBreak;
        }, '');
    }

    spamErrors(): void {
        const arrayLength = Math.round(Math.random() * 9 + 1);

        const errorList = new Array(arrayLength)
            .fill('')
            .map((i, index) => `Error #${index}`);

        this.demoErrorsList = errorList;
    }

    changeHandler(event: CustomEvent): void {
        if (this.demoMultiple) {
            this.demoSelectedOptions = event.detail.selectedOptions;
        } else {
            this.demoValue = event.detail.value;
        }
    }
}
