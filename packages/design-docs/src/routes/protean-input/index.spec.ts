import vProp from '@/directives/v-prop';
import { shallowMount } from '@vue/test-utils';
import { nextTick } from 'vue';
import ProteanInputRoute from './index.vue';

const mountOptions = {
    global: {
        stubs: [
            'code-snippet',
            'protean-input',
            'protean-checkbox',
            'protean-select',
            'protean-optgroup',
            'protean-option',
        ],
        directives: {
            prop: vProp,
        },
    },
};

describe('Protean Input Route', () => {
    it('renders', () => {
        const wrapper = shallowMount(ProteanInputRoute, mountOptions);

        expect(wrapper.find('h1').text()).toEqual('Input field');
        expect(Array.isArray(wrapper.vm.demoTypes)).toBe(true);
        expect(wrapper.vm.demoType).toEqual('text');
        expect(wrapper.vm.demoHints).toHaveLength(2);
        expect(wrapper.vm.demoErrorsList).toHaveLength(1);
        expect(wrapper.vm.demoShowErrors).toEqual(false);
        expect(wrapper.vm.demoSuppressMessages).toEqual(false);
        expect(wrapper.vm.demoOptional).toEqual(false);
        expect(wrapper.vm.demoDisabled).toEqual(false);
        expect(wrapper.vm.demoReadonly).toEqual(false);
        expect(wrapper.vm.demoMaxlength).toEqual('20');
        expect(wrapper.vm.demoFormat).toEqual('');
        expect(wrapper.vm.demoNumericFormats).toHaveLength(3);
        expect(wrapper.vm.dateFormats).toHaveLength(6);
        expect(wrapper.vm.demoFormats).toEqual(undefined);
        expect(wrapper.vm.demoErrors).toEqual([]);

        expect(wrapper.find('.demo-select-format').exists()).toBe(false);
    });

    it('gets correct formats', async () => {
        const wrapper = shallowMount(ProteanInputRoute, mountOptions);

        expect(wrapper.vm.demoType).toEqual('text');
        expect(wrapper.vm.demoFormats).toEqual(undefined);
        expect(wrapper.find('.demo-select-format').exists()).toBe(false);

        wrapper.vm.demoType = 'numeric';
        await nextTick();

        expect(wrapper.vm.demoFormats).toEqual(wrapper.vm.demoNumericFormats);
        expect(wrapper.find('.demo-select-format').exists()).toBe(true);

        wrapper.vm.demoType = 'date';
        await nextTick();

        expect(wrapper.vm.demoFormats).toEqual(wrapper.vm.dateFormats);
        expect(wrapper.find('.demo-select-format').exists()).toBe(true);

        wrapper.vm.demoType = 'phone';
        await nextTick();

        expect(wrapper.vm.demoFormats).toEqual(undefined);
        expect(wrapper.find('.demo-select-format').exists()).toBe(false);
    });

    it('gets correct errors', () => {
        const wrapper = shallowMount(ProteanInputRoute, mountOptions);

        expect(wrapper.vm.demoErrorsList).toHaveLength(1);
        expect(wrapper.vm.demoShowErrors).toEqual(false);
        expect(wrapper.vm.demoErrors).toEqual([]);

        wrapper.vm.demoShowErrors = true;

        expect(wrapper.vm.demoErrors).toEqual(wrapper.vm.demoErrorsList);
    });

    it('spams errors on demo input input event', async () => {
        const wrapper = shallowMount(ProteanInputRoute, mountOptions);

        const demoInput = wrapper.find('.overview-demo-element');

        expect(wrapper.vm.demoErrorsList).toHaveLength(1);

        await demoInput.trigger('input');

        expect(wrapper.vm.demoErrorsList).toHaveLength(1);

        wrapper.vm.demoShowErrors = true;

        await demoInput.trigger('input');

        const errorSnapshot = wrapper.vm.demoErrorsList;

        expect(wrapper.vm.demoErrorsList[0]).toEqual('Error #1');
        expect(wrapper.vm.demoErrorsList.length).toBeGreaterThanOrEqual(1);
        expect(wrapper.vm.demoErrorsList.length).toBeLessThanOrEqual(10);

        wrapper.vm.demoSuppressMessages = true;

        await demoInput.trigger('input');

        expect(wrapper.vm.demoErrorsList).toEqual(errorSnapshot);
    });

    it('updates demoShowErrors on toggle change', async () => {
        const wrapper = shallowMount(ProteanInputRoute, mountOptions);

        const showErrorsToggleWrapper = wrapper.find('.demo-toggle-errors');

        expect(wrapper.vm.demoShowErrors).toEqual(false);

        await showErrorsToggleWrapper.trigger('change', {
            detail: {
                checked: true,
            },
        });

        expect(wrapper.vm.demoShowErrors).toEqual(true);
    });

    it('updates demoSuppressMessages on toggle change', async () => {
        const wrapper = shallowMount(ProteanInputRoute, mountOptions);

        const suppressMessagesToggleWrapper = wrapper.find(
            '.demo-toggle-messages',
        );

        expect(wrapper.vm.demoSuppressMessages).toEqual(false);

        await suppressMessagesToggleWrapper.trigger('change', {
            detail: {
                checked: true,
            },
        });

        expect(wrapper.vm.demoSuppressMessages).toEqual(true);
    });

    it('updates demoOptional on toggle change', async () => {
        const wrapper = shallowMount(ProteanInputRoute, mountOptions);

        const optionalToggleWrapper = wrapper.find('.demo-toggle-optional');

        expect(wrapper.vm.demoOptional).toEqual(false);

        await optionalToggleWrapper.trigger('change', {
            detail: {
                checked: true,
            },
        });

        expect(wrapper.vm.demoOptional).toEqual(true);
    });

    it('updates demoOptional on toggle change', async () => {
        const wrapper = shallowMount(ProteanInputRoute, mountOptions);

        const optionalToggleWrapper = wrapper.find('.demo-toggle-optional');

        expect(wrapper.vm.demoOptional).toEqual(false);

        await optionalToggleWrapper.trigger('change', {
            detail: {
                checked: true,
            },
        });

        expect(wrapper.vm.demoOptional).toEqual(true);
    });

    it('updates demoDisabled on toggle change', async () => {
        const wrapper = shallowMount(ProteanInputRoute, mountOptions);

        const disabledToggleWrapper = wrapper.find('.demo-toggle-disabled');

        expect(wrapper.vm.demoDisabled).toEqual(false);

        await disabledToggleWrapper.trigger('change', {
            detail: {
                checked: true,
            },
        });

        expect(wrapper.vm.demoDisabled).toEqual(true);
    });

    it('updates demoReadonly on toggle change', async () => {
        const wrapper = shallowMount(ProteanInputRoute, mountOptions);

        const readonlyToggleWrapper = wrapper.find('.demo-toggle-readonly');

        expect(wrapper.vm.demoReadonly).toEqual(false);

        await readonlyToggleWrapper.trigger('change', {
            detail: {
                checked: true,
            },
        });

        expect(wrapper.vm.demoReadonly).toEqual(true);
    });

    it('updates demoMaxlength on input change', async () => {
        const wrapper = shallowMount(ProteanInputRoute, mountOptions);

        const maxlengthInputWrapper = wrapper.find('.demo-input-maxlength');

        expect(wrapper.vm.demoMaxlength).toEqual('20');

        await maxlengthInputWrapper.trigger('change', {
            detail: {
                value: '10',
            },
        });

        expect(wrapper.vm.demoMaxlength).toEqual('10');
    });

    it('updates demoType on select change', async () => {
        const wrapper = shallowMount(ProteanInputRoute, mountOptions);

        const typeSelectWrapper = wrapper.find('.demo-select-type');

        expect(wrapper.vm.demoType).toEqual('text');

        await typeSelectWrapper.trigger('change', {
            detail: {
                value: 'date',
            },
        });

        expect(wrapper.vm.demoType).toEqual('date');
    });

    it('updates demoFormat on select change', async () => {
        const wrapper = shallowMount(ProteanInputRoute, mountOptions);

        wrapper.vm.demoType = 'date';
        await nextTick();

        const formatSelectWrapper = wrapper.find('.demo-select-format');

        expect(formatSelectWrapper.exists()).toBe(true);
        expect(wrapper.vm.demoFormat).toEqual('');

        await formatSelectWrapper.trigger('change', {
            detail: {
                value: 'MM/YY',
            },
        });

        expect(wrapper.vm.demoFormat).toEqual('MM/YY');
    });

    it('builds correct code snippet substitutions', async () => {
        const wrapper = shallowMount(ProteanInputRoute, mountOptions);

        /* eslint-disable */
        let substitutions: string[] = (
            wrapper.findComponent({ name: 'CodeSnippet' }).vm as any
        ).substitutions;
        /* eslint-enable */

        expect(wrapper.vm.demoType).toEqual('text');
        expect(substitutions[0]).toEqual('label="Field label" \n');
        expect(substitutions[1]).toEqual('text');

        expect(wrapper.vm.demoFormat).toEqual('');
        expect(substitutions[2]).toEqual('');

        expect(wrapper.vm.demoMaxlength).toEqual('20');
        expect(substitutions[3]).toEqual('\n maxlength="20"');

        expect(wrapper.vm.demoSuppressMessages).toEqual(false);
        expect(substitutions[4]).toEqual('');

        expect(wrapper.vm.demoOptional).toEqual(false);
        expect(substitutions[5]).toEqual('');

        expect(wrapper.vm.demoDisabled).toEqual(false);
        expect(substitutions[6]).toEqual('');

        expect(wrapper.vm.demoReadonly).toEqual(false);
        expect(substitutions[7]).toEqual('');

        wrapper.vm.demoType = 'numeric';
        wrapper.vm.demoFormat = 'integer';
        wrapper.vm.demoMaxlength = '10';
        wrapper.vm.demoSuppressMessages = true;
        wrapper.vm.demoOptional = true;
        wrapper.vm.demoDisabled = true;
        wrapper.vm.demoReadonly = true;
        await nextTick();

        /* eslint-disable */
        substitutions = (
            wrapper.findComponent({ name: 'CodeSnippet' }).vm as any
        ).substitutions;
        /* eslint-enable */

        expect(substitutions[0]).toEqual('label="Field label" \n');
        expect(substitutions[1]).toEqual('numeric');
        expect(substitutions[2]).toEqual('\n format="integer"');
        expect(substitutions[3]).toEqual('\n maxlength="10"');
        expect(substitutions[4]).toEqual('\n suppress-messages');
        expect(substitutions[5]).toEqual('\n optional');
        expect(substitutions[6]).toEqual('\n disabled');
        expect(substitutions[7]).toEqual('\n readonly');
    });
});
