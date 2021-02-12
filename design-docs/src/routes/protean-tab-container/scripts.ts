import { Options, Vue } from 'vue-class-component';
import CodeSnippet from '@/components/code-snippet/index.vue';

@Options({
    components: { CodeSnippet },
})
export default class ProteanTabs extends Vue {
    demoValue = 'tab1';
    demoName = 'demo-name';
    demoChildName = 'demo-child-name';
    demoShowChildTab = false;

    get nestedTabSnippet(): string {
        if (this.demoShowChildTab) {
            const tabString = Array(3)
                .fill('')
                .reduce((acc, i, index) => {
                    const count = index + 1;
                    return `${acc}
                    <protean-tab-pane
                    name="${this.demoChildName}"
                    label="Child ${count}" 
                    value="childtab${count}"
                    >
                    Child Tab ${count} Content
                    </protean-tab-pane>`;
                }, '');
            return `\n<protean-tab-container
                name="${this.demoChildName}"
                >
                ${tabString}
            </protean-tab-container>\n`;
        }
        return '';
    }
    toggleNestedTabs(event: CustomEvent): void {
        this.demoShowChildTab = event.detail.checked;

        this.demoValue = 'tab1';
    }
}
