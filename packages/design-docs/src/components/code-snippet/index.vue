<style lang="scss" src="./styles.scss"></style>
<script setup lang="ts">
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import { computed, onMounted, ref, watch } from 'vue';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('html', html);
hljs.registerLanguage('css', css);

interface CodeSnippetProps {
    language?: string;
    substitutions?: string[];
}

defineEmits(['hide-off-canvas', 'toggle-light-mode']);
const props = withDefaults(defineProps<CodeSnippetProps>(), {
    language: 'html',
    substitutions: () => [],
});

const snippet = ref('');
const showCopyConfirmation = ref(false);
const canCopy = ref(false);
const codeElement = ref<HTMLElement>();

const openingRegex = /{|\]|(<|&lt;)(?=[a-z])/g;
const closingRegex = /(<|&lt;)\/|}|]/g;

onMounted(() => {
    snippet.value = codeElement.value!.textContent!.trim();
    resetInnerContent();

    canCopy.value = typeof navigator.clipboard?.writeText === 'function';
});

const parsedSnippet = computed<string>(() => {
    let newSnippet = snippet.value;
    if (Array.isArray(props.substitutions)) {
        newSnippet = newSnippet.replace(/({[0-9]})/g, sub => {
            return props.substitutions?.[parseInt(sub[1])] ?? '';
        });
    }
    return parseSnippet(newSnippet).trim();
});

function resetInnerContent(): void {
    const element = codeElement.value!;
    element.innerHTML = parsedSnippet.value
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    hljs.highlightElement(element);
}

function parseSnippet(snippetToParse: string): string {
    let indentCount = 0;
    return snippetToParse
        .trim()
        .split('\n')
        .reduce((acc, line) => {
            const trimmedLine = line.trim();

            if (!trimmedLine) {
                return acc;
            }

            const hasClosingTag = !!trimmedLine.match(closingRegex);
            const hasOpeningTag = !!trimmedLine.match(openingRegex);
            const hasElse = !!trimmedLine.match('else');

            if ((hasClosingTag && !hasOpeningTag) || hasElse) {
                indentCount--;
            }
            const indent = ''.padStart(2 * indentCount);

            if ((hasOpeningTag && !hasClosingTag) || hasElse) {
                indentCount++;
            }

            return acc + indent + trimmedLine + '\n';
        }, '');
}

async function copySnippet(): Promise<void> {
    await navigator.clipboard.writeText(parsedSnippet.value);

    showCopyConfirmation.value = true;

    setTimeout(() => {
        showCopyConfirmation.value = false;
    }, 1500);
}

watch(
    () => props.substitutions,
    () => {
        resetInnerContent();
    },
);
</script>
<template>
    <pre class="code-snippet">
    <code ref="codeElement" class="parsed-snippet" :class="language">
        <slot />
    </code>
    <div class="copy-container" v-if="canCopy">
        <code v-show="showCopyConfirmation" class="copy-confirmation">Copied to clipboard</code>
        <protean-button class="copy-snippet" a11y-label="Copy code snippet" variant="icon" @click="copySnippet">
            <protean-icon type="clipboard" />
        </protean-button>
    </div>
</pre>
</template>
