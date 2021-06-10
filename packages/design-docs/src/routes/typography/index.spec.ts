import { shallowMount } from '@vue/test-utils';
import TypographyRoute from './index.vue';

describe('Typography Route', () => {
    it('renders', () => {
        const wrapper = shallowMount(TypographyRoute);

        expect(wrapper.find('h1').text()).toEqual('Typography');
        expect(wrapper.findComponent({ name: 'CodeSnippet' })).not.toBeNull();
    });
});
