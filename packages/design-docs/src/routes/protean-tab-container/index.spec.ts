import { shallowMount } from '@vue/test-utils';
import ProteanTabsRoute from './index.vue';

const mountOptions = {
    global: {
        stubs: {
            CodeSnippet: {
                template: '<div><slot /></div>',
            },
        },
    },
};

describe('Protean Tabs Route', () => {
    it('renders', () => {
        const wrapper = shallowMount(ProteanTabsRoute, mountOptions);
        expect(wrapper.find('h1').text()).toEqual('Tabs');
        const demoTabs = wrapper.find('protean-tab-container');

        expect(wrapper.vm.demoName).toEqual('demo-name');
        expect(demoTabs.attributes('name')).toEqual('demo-name');
        expect(wrapper.vm.demoValue).toEqual('tab1');
        expect(demoTabs.attributes('value')).toEqual('tab1');
    });

    it('updates demoValue on tab change', async () => {
        const wrapper = shallowMount(ProteanTabsRoute, mountOptions);

        let demoTabs = wrapper.find('protean-tab-container');

        expect(wrapper.vm.demoValue).toEqual('tab1');
        expect(demoTabs.attributes('value')).toEqual('tab1');

        await demoTabs.trigger('change', {
            detail: {
                value: 'tab3',
            },
        });

        demoTabs = wrapper.find('protean-tab-container');

        expect(wrapper.vm.demoValue).toEqual('tab3');
        expect(demoTabs.attributes('value')).toEqual('tab3');
    });
});
