import vProp from '@/directives/v-prop';
import { nextTick } from '@vue/runtime-dom';
import { shallowMount } from '@vue/test-utils';
import ProteanMessageRoute from './index.vue';

const mountOptions = {
    global: {
        stubs: {
            CodeSnippet: {
                template: '<div><slot /></div>',
            },
        },
        directives: {
            prop: vProp,
        },
    },
};

describe('Protean Message Route', () => {
    it('renders', () => {
        const wrapper = shallowMount<any>(ProteanMessageRoute, mountOptions);

        expect(wrapper.find('h1').text()).toEqual('Message');
        expect(wrapper.vm.demoType).toEqual('info');
        expect(wrapper.vm.demoTypes).toEqual([
            'info',
            'success',
            'warning',
            'error',
        ]);
        expect(wrapper.vm.demoIsStatus).toEqual(false);
        expect(wrapper.vm.demoLevel).toEqual('alert');
    });

    it('gets correct level', () => {
        const wrapper = shallowMount<any>(ProteanMessageRoute, mountOptions);

        expect(wrapper.vm.demoIsStatus).toEqual(false);
        expect(wrapper.vm.demoLevel).toEqual('alert');

        wrapper.vm.demoIsStatus = true;

        expect(wrapper.vm.demoLevel).toEqual('status');
    });

    it('updates demoType on select change', async () => {
        const wrapper = shallowMount<any>(ProteanMessageRoute, mountOptions);

        const typeSelectWrapper = wrapper.find('.demo-select-type');

        expect(wrapper.vm.demoType).toEqual('info');

        await typeSelectWrapper.trigger('change', {
            detail: {
                value: 'success',
            },
        });

        expect(wrapper.vm.demoType).toEqual('success');
    });

    it('updates demoIsStatus on toggle change', async () => {
        const wrapper = shallowMount<any>(ProteanMessageRoute, mountOptions);

        const levelToggleWrapper = wrapper.find('.demo-toggle-level');

        expect(wrapper.vm.demoIsStatus).toEqual(false);

        await levelToggleWrapper.trigger('change', {
            detail: {
                checked: true,
            },
        });

        expect(wrapper.vm.demoIsStatus).toEqual(true);
    });

    it('correctly binds code snippet substitutions', async () => {
        const wrapper = shallowMount<any>(ProteanMessageRoute, {
            global: {
                directives: {
                    prop: vProp,
                },
            },
        });

        /* eslint-disable */
        let substitutions: string[] = (
            wrapper.findComponent({ name: 'CodeSnippet' }).vm as any
        ).substitutions;
        /* eslint-enable */

        expect(substitutions).toEqual(['info', 'alert']);

        wrapper.vm.demoType = 'error';
        wrapper.vm.demoIsStatus = true;

        await nextTick();

        /* eslint-disable */
        substitutions = (
            wrapper.findComponent({ name: 'CodeSnippet' }).vm as any
        ).substitutions;
        /* eslint-enable */

        expect(substitutions).toEqual(['error', 'status']);
    });
});
