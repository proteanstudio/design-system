import { Vue } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import hljs from 'highlight.js';

export default class CodeSnippet extends Vue {
    @Prop() language = 'html';
    @Prop() substitutions: string[] = [];

    mounted(): void {
        this.snippet = this.$el.querySelector('code').innerText.trim();
        this.resetInnerContent();
    }

    snippet = '';
    openingRegex = /{|\]|(<|&lt;)(?=[a-z])/g;
    closingRegex = /(<|&lt;)\/|}|]/g;
    showCopyConfirmation = false;

    get canCopy(): boolean {
        return !!navigator.clipboard;
    }

    get parsedSnippet(): string {
        let snippet = this.snippet;
        if (Array.isArray(this.substitutions)) {
            snippet = snippet.replace(/({[0-9]})/g, sub => {
                return this.substitutions[parseInt(sub[1])];
            });
        }
        return this.parseSnippet(snippet);
    }

    @Watch('substitutions')
    resetInnerContentOnSubstitutionChange(): void {
        this.resetInnerContent();
    }

    resetInnerContent(): void {
        const element = this.$el.querySelector('code');
        element.innerHTML = this.parsedSnippet
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        hljs.highlightBlock(element);
    }

    createIndentationString(count: number): string {
        return count > -1 ? Array(count).join('  ') : '';
    }

    parseSnippet(snippet: string): string {
        let indentCount = 0;
        return snippet.split('\n').reduce((acc, line) => {
            const trimmedLine = line.trim();

            if (!trimmedLine) return acc;

            const hasClosingTag = !!trimmedLine.match(this.closingRegex);
            const hasOpeningTag = !!trimmedLine.match(this.openingRegex);
            const hasElse = !!trimmedLine.match('else');

            if ((hasClosingTag && !hasOpeningTag) || hasElse) {
                indentCount--;
            }

            const indent = this.createIndentationString(indentCount + 1);

            if (hasOpeningTag && !hasClosingTag && !hasElse) {
                indentCount++;
            }

            return acc + indent + trimmedLine + '\n';
        }, '');
    }

    copySnippet(): void {
        navigator.clipboard.writeText(this.parsedSnippet).then(() => {
            this.showCopyConfirmation = true;

            setTimeout(() => {
                this.showCopyConfirmation = false;
            }, 1500);
        });
    }
}
