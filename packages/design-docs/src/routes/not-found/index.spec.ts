import { shallowMount } from '@vue/test-utils';
import NotFoundRoute from './index.vue';

describe('Not Found Route', () => {
    it('renders', () => {
        const wrapper = shallowMount(NotFoundRoute, {
            global: {
                stubs: ['router-link'],
            },
        });

        expect(wrapper.find('h1').text()).toEqual('404');
        expect(wrapper.findComponent({ name: 'RouterLink' })).not.toBeNull();
    });
});
