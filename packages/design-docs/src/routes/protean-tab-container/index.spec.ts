import vProp from '@/directives/v-prop';
import { shallowMount } from '@vue/test-utils';
import ProteanTabsRoute from './index.vue';

const mountOptions = {
    global: {
        stubs: [
            'code-snippet',
            'protean-checkbox',
            'protean-tab-container',
            'protean-tab-pane',
        ],
        directives: {
            prop: vProp,
        },
    },
};

describe('Protean Tabs Route', () => {
    it('renders', () => {
        const wrapper = shallowMount<any>(ProteanTabsRoute, mountOptions);
        expect(wrapper.find('h1').text()).toEqual('Tabs');
        const demoTabs = wrapper.find('protean-tab-container');

        expect(wrapper.vm.demoName).toEqual('demo-name');
        expect(demoTabs.attributes('name')).toEqual('demo-name');
        expect(wrapper.vm.demoValue).toEqual('tab1');
        expect(demoTabs.attributes('value')).toEqual('tab1');
    });

    it('updates demoValue on tab change', async () => {
        const wrapper = shallowMount<any>(ProteanTabsRoute, mountOptions);

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
