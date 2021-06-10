import { shallowMount } from '@vue/test-utils';
import HomeRoute from './index.vue';

describe('Home Route', () => {
    it('renders', () => {
        const wrapper = shallowMount(HomeRoute);

        expect(wrapper.find('h1').text()).toEqual(
            'A design system from Protean Studio',
        );
    });
});
