import { shallowMount } from '@vue/test-utils';
import AccessibilityRoute from './index.vue';

describe('Accessibility Route', () => {
    it('renders', () => {
        const wrapper = shallowMount(AccessibilityRoute);
        expect(wrapper.find('h1').text()).toEqual('Accessibility');
    });
});
