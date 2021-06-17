import { shallowMount } from '@vue/test-utils';
import GettingStartedRoute from './index.vue';

describe('Getting Started Route', () => {
    it('renders', () => {
        const wrapper = shallowMount(GettingStartedRoute);

        expect(wrapper.find('h1').text()).toEqual('Getting started');
        expect(wrapper.findComponent({ name: 'CodeSnippet' })).not.toBeNull();
    });
});
