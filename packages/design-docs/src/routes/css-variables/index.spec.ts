import { shallowMount } from '@vue/test-utils';
import CSSVariablesRoute from './index.vue';

describe('CSS Variables Route', () => {
    it('renders', () => {
        const wrapper = shallowMount(CSSVariablesRoute, {
            global: {
                stubs: {
                    CodeSnippet: {
                        template: '<div><slot /></div>',
                    },
                },
            },
        });

        expect(wrapper.find('h1').text()).toEqual('CSS variables');
        expect(wrapper.findComponent({ name: 'CodeSnippet' })).not.toBeNull();
    });
});
