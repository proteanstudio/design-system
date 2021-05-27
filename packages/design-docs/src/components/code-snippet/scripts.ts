import { Vue } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('html', html);
hljs.registerLanguage('css', css);

export default class CodeSnippet extends Vue {
    @Prop() language = 'html';
    @Prop() substitutions: string[] = [];

    mounted(): void {
        this.snippet = this.$el.querySelector('code').innerText.trim();
        this.resetInnerContent();

        this.canCopy = typeof navigator.clipboard?.writeText === 'function';
    }

    snippet = '';
    openingRegex = /{|\]|(<|&lt;)(?=[a-z])/g;
    closingRegex = /(<|&lt;)\/|}|]/g;
    showCopyConfirmation = false;

    canCopy = false;

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

        hljs.highlightElement(element);
    }

    createIndentationString(count: number): string {
        return count > -1 ? Array(count).join('  ') : '';
    }

    parseSnippet(snippet: string): string {
        let indentCount = 0;
        return snippet
            .trim()
            .split('\n')
            .reduce((acc, line) => {
                const trimmedLine = line.trim();

                const hasClosingTag = !!trimmedLine.match(this.closingRegex);
                const hasOpeningTag = !!trimmedLine.match(this.openingRegex);
                const hasElse = !!trimmedLine.match('else');

                if ((hasClosingTag && !hasOpeningTag) || hasElse) {
                    indentCount--;
                }

                const indent = this.createIndentationString(indentCount + 1);

                if ((hasOpeningTag && !hasClosingTag) || hasElse) {
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
