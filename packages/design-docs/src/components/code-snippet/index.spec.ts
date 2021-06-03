import { shallowMount } from '@vue/test-utils';
import CodeSnippet from './index.vue';

describe('code-snippet', () => {
    it.skip('renders base properties and structure', () => {
        const wrapper = shallowMount(CodeSnippet);

        expect(wrapper.vm.language).toEqual('html');
        expect(wrapper.vm.substitutions).toEqual([]);
    });

    it.skip('renders props.msg when passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(CodeSnippet, {
            props: { msg },
        });
        expect(wrapper.text()).toContain('');
    });
});
