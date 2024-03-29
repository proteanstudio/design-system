import { mount, shallowMount } from '@vue/test-utils';
import CodeSnippet from './index.vue';

vi.mock('highlight.js/lib/core', () => {
    return {
        default: {
            registerLanguage: vi.fn(),
            highlightElement: vi.fn(),
        },
    };
});

import hljs from 'highlight.js/lib/core';
import { nextTick } from 'vue';
import { MockedFunction } from 'vitest';

describe('code-snippet', () => {
    afterEach(() => {
        (hljs.registerLanguage as MockedFunction<VoidFunction>).mockReset();
        (hljs.highlightElement as MockedFunction<VoidFunction>).mockReset();
    });

    it('renders base properties and structure', () => {
        const wrapper = shallowMount(CodeSnippet, {
            global: {
                stubs: ['protean-button', 'protean-icon'],
            },
        });

        expect(wrapper.vm.language).toEqual('html');
        expect(wrapper.vm.substitutions).toEqual([]);
        expect(wrapper.vm.snippet).toEqual('');
        expect(wrapper.vm.canCopy).toEqual(false);
        expect(wrapper.vm.parsedSnippet.trim()).toEqual('');

        expect(wrapper.element.className).toEqual('code-snippet');
        expect(wrapper.element.localName).toEqual('pre');

        expect(wrapper.find('.parsed-snippet').classes('html')).toBe(true);
        expect(wrapper.find('.copy-container').exists()).toBe(false);

        expect(hljs.registerLanguage).toHaveBeenCalledTimes(4);
    });

    it('parses and formats inner text for single line html', () => {
        const unformattedHTML = '&lt;h1&gt;Header text&lt;/h1&gt;';
        const formattedHTML = '<h1>Header text</h1>';

        const wrapper = mount(CodeSnippet, {
            global: {
                stubs: ['protean-button', 'protean-icon'],
            },
            slots: {
                default: unformattedHTML,
            },
        });
        expect(wrapper.vm.snippet).toEqual(formattedHTML);
        expect(wrapper.vm.parsedSnippet.trim()).toEqual(formattedHTML);
        expect(wrapper.find('.parsed-snippet').text()).toEqual(formattedHTML);

        expect(hljs.highlightElement).toHaveBeenCalledTimes(1);
        expect(hljs.highlightElement).toHaveBeenCalledWith(
            wrapper.find('.parsed-snippet').element,
        );
    });

    it('correctly binds language', () => {
        const wrapper = shallowMount(CodeSnippet, {
            global: {
                stubs: ['protean-button', 'protean-icon'],
            },
            props: {
                language: 'typescript',
            },
        });

        expect(wrapper.vm.language).toEqual('typescript');
        expect(wrapper.find('.parsed-snippet').classes('typescript')).toBe(
            true,
        );
        expect(wrapper.find('.parsed-snippet').classes('html')).toBe(false);
    });

    it('inserts substitutions', () => {
        const unformattedHTML =
            '&lt;h1&gt;Header {0} text&lt;/h1&gt;&lt;p&gt;{1}&lt;/p&gt;-{2}-{3}';
        const semiFormattedHTML = '<h1>Header {0} text</h1><p>{1}</p>-{2}-{3}';
        const formattedHTML =
            '<h1>Header 1 text</h1><p>Supporting content</p>--foo';

        const wrapper = mount(CodeSnippet, {
            global: {
                stubs: ['protean-button', 'protean-icon'],
            },
            slots: {
                default: unformattedHTML,
            },
            props: {
                substitutions: ['1', 'Supporting content', undefined, 'foo'],
            },
        });
        expect(wrapper.vm.snippet).toEqual(semiFormattedHTML);
        expect(wrapper.vm.parsedSnippet.trim()).toEqual(formattedHTML);
    });

    it('resets inner content when substitutions changed', async () => {
        const unformattedHTML = '&lt;h1&gt;Header {0} text&lt;/h1&gt;';

        const wrapper = mount(CodeSnippet, {
            global: {
                stubs: ['protean-button', 'protean-icon'],
            },
            slots: {
                default: unformattedHTML,
            },
        });

        expect(wrapper.vm.parsedSnippet.trim()).not.toContain('substitution');

        wrapper.setProps({ substitutions: ['substitution'] });

        await nextTick();

        expect(wrapper.vm.parsedSnippet.trim()).toContain('substitution');
    });

    it('copies snippet', async () => {
        vi.useFakeTimers();
        const unformattedHTML = '&lt;h1&gt;Header text&lt;/h1&gt;';
        const formattedHTML = '<h1>Header text</h1>';

        const writeTextMock = vi
            .fn()
            .mockImplementation(() => Promise.resolve());

        /* eslint-disable */
        (window.navigator as any).clipboard = { writeText: writeTextMock };
        /* eslint-enable */
        const wrapper = mount(CodeSnippet, {
            global: {
                stubs: ['protean-icon'],
            },
            slots: {
                default: unformattedHTML,
            },
        });

        await nextTick();

        expect(wrapper.vm.canCopy).toEqual(true);
        expect(wrapper.find('.copy-container').exists()).toBe(true);

        const copyConfirmation = wrapper.find('.copy-confirmation');
        expect(copyConfirmation.isVisible()).toBe(false);

        await wrapper.find('.copy-snippet').trigger('click');

        expect(writeTextMock).toHaveBeenCalledTimes(1);
        expect(writeTextMock).toHaveBeenCalledWith(formattedHTML);
        expect(wrapper.vm.showCopyConfirmation).toEqual(true);

        await nextTick();

        expect(copyConfirmation.isVisible()).toBe(true);

        vi.advanceTimersByTime(1500); //may need to abstract time
        await nextTick();

        expect(wrapper.vm.showCopyConfirmation).toEqual(false);
        expect(copyConfirmation.isVisible()).toBe(false);

        /* eslint-disable */
        (window.navigator as any).clipboard = undefined;
        /* eslint-enable */
        vi.useRealTimers();
    });

    it('parses and formats inner text for multiline html', async () => {
        /* line breaks filtered out by test runner, testing functions independently */

        const unformattedHTML = `
            <protean-message
            class="overview-demo-element"
            type="info"
            level="status"
            > 
            Message info: 
            <ul> 
            <li>Message detail #1</li>
            <li>Message detail #2</li>
            <li>Message detail #3</li>
            </ul>
            </protean-message>`;
        const formattedHTML = `
<protean-message
  class="overview-demo-element"
  type="info"
  level="status"
  >
  Message info:
  <ul>
    <li>Message detail #1</li>
    <li>Message detail #2</li>
    <li>Message detail #3</li>
  </ul>
</protean-message>`;

        const wrapper = shallowMount(CodeSnippet, {
            global: {
                stubs: ['protean-button', 'protean-icon'],
            },
            // slots: {
            //     default: unformattedHTML,
            // },
        });

        wrapper.vm.snippet = unformattedHTML;

        expect(wrapper.vm.parsedSnippet.trim()).toEqual(formattedHTML.trim());
    });
});
