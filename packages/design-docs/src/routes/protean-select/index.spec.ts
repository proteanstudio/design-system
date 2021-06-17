import vProp from '@/directives/v-prop';
import { shallowMount } from '@vue/test-utils';
import { nextTick } from 'vue';
import ProteanSelectRoute from './index.vue';

const mountOptions = {
    global: {
        stubs: [
            'code-snippet',
            'protean-message',
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

describe('Protean Select Route', () => {
    it('renders', () => {
        const wrapper = shallowMount(ProteanSelectRoute, mountOptions);

        expect(wrapper.find('h1').text()).toEqual('Select');

        expect(Array.isArray(wrapper.vm.demoOptgroupOptions)).toBe(true);
        expect(Array.isArray(wrapper.vm.demoFlatOptions)).toBe(true);

        const demoSelectWrapper = wrapper.find('.overview-demo-element');
        expect(wrapper.vm.demoWithOptGroups).toEqual(false);
        expect(demoSelectWrapper.classes('optgroup-demo')).toBe(false);
        expect(demoSelectWrapper.classes('flat-demo')).toBe(true);

        expect(wrapper.vm.demoValue).toEqual('');
        expect(wrapper.vm.demoSelectedOptions).toEqual([]);
        expect(wrapper.vm.demoMultiple).toEqual(false);
        expect(wrapper.vm.demoErrorsList).toEqual(['Error #1']);
        expect(wrapper.vm.demoShowErrors).toEqual(false);
        expect(wrapper.vm.demoOptional).toEqual(false);
        expect(wrapper.vm.demoDisabled).toEqual(false);

        expect(wrapper.vm.demoErrors).toEqual([]);
        expect(wrapper.vm.snippetOptions).toEqual(
            wrapper.vm.buildOptionString(wrapper.vm.demoFlatOptions),
        );
    });

    it('gets demoErrors', () => {
        const wrapper = shallowMount(ProteanSelectRoute, mountOptions);

        expect(wrapper.vm.demoErrorsList).toEqual(['Error #1']);
        expect(wrapper.vm.demoShowErrors).toEqual(false);
        expect(wrapper.vm.demoErrors).toEqual([]);

        wrapper.vm.demoShowErrors = true;
        expect(wrapper.vm.demoErrors).toEqual(wrapper.vm.demoErrorsList);
    });

    it('gets snippetOptions', () => {
        const wrapper = shallowMount(ProteanSelectRoute, mountOptions);

        expect(wrapper.vm.demoWithOptGroups).toEqual(false);
        expect(wrapper.vm.snippetOptions).toEqual(
            wrapper.vm.buildOptionString(wrapper.vm.demoFlatOptions),
        );
        expect(wrapper.vm.snippetOptions).not.toMatch(
            /(protean-optgroup)|(label="Group \d")/g,
        );

        wrapper.vm.demoWithOptGroups = true;

        expect(wrapper.vm.snippetOptions).toMatch(
            /(protean-optgroup)|(label="Group \d")/g,
        );
    });

    it('builds option string', () => {
        const wrapper = shallowMount(ProteanSelectRoute, mountOptions);

        const options = [
            {
                value: '1',
                label: 'Option 1',
            },
            {
                value: '2',
                label: 'Option 2',
            },
        ];

        const optionString = wrapper.vm.buildOptionString(options);

        expect(optionString).toEqual(
            '<protean-option value="1" label="Option 1">Option 1</protean-option>\n<protean-option value="2" label="Option 2">Option 2</protean-option>',
        );
    });

    it('renders correct demo element', async () => {
        const wrapper = shallowMount(ProteanSelectRoute, mountOptions);

        let demoSelectWrapper = wrapper.find('.overview-demo-element');

        expect(wrapper.vm.demoWithOptGroups).toEqual(false);
        expect(demoSelectWrapper.classes('optgroup-demo')).toBe(false);
        expect(demoSelectWrapper.classes('flat-demo')).toBe(true);

        wrapper.vm.demoWithOptGroups = true;
        await nextTick();

        demoSelectWrapper = wrapper.find('.overview-demo-element');

        expect(demoSelectWrapper.classes('optgroup-demo')).toBe(true);
        expect(demoSelectWrapper.classes('flat-demo')).toBe(false);
    });

    it('handles demo change event for single select', async () => {
        const wrapper = shallowMount(ProteanSelectRoute, mountOptions);

        const demoSelectWrapper = wrapper.find('.overview-demo-element');

        expect(wrapper.vm.demoMultiple).toEqual(false);
        expect(wrapper.vm.demoValue).toEqual('');

        await demoSelectWrapper.trigger('change', {
            detail: {
                value: 'option1',
            },
        });

        expect(wrapper.vm.demoValue).toEqual('option1');
    });

    it('handles demo change event for multi select', async () => {
        const wrapper = shallowMount(ProteanSelectRoute, mountOptions);

        wrapper.vm.demoMultiple = true;
        await nextTick();

        const demoSelectWrapper = wrapper.find('.overview-demo-element');

        expect(wrapper.vm.demoSelectedOptions).toEqual([]);

        await demoSelectWrapper.trigger('change', {
            detail: {
                selectedOptions: ['option3', 'option10'],
            },
        });

        expect(wrapper.vm.demoSelectedOptions).toEqual(['option3', 'option10']);
    });

    it('updates demoWithOptgroups on toggle change', async () => {
        const wrapper = shallowMount(ProteanSelectRoute, mountOptions);
        const optGroupToggleWrapper = wrapper.find('.demo-toggle-optgroups');

        expect(wrapper.vm.demoWithOptGroups).toEqual(false);

        await optGroupToggleWrapper.trigger('change', {
            detail: {
                checked: true,
            },
        });

        expect(wrapper.vm.demoWithOptGroups).toEqual(true);
    });

    it('updates demoMultiple on toggle change', async () => {
        const wrapper = shallowMount(ProteanSelectRoute, mountOptions);
        const multipleToggleWrapper = wrapper.find('.demo-toggle-multiselect');

        expect(wrapper.vm.demoMultiple).toEqual(false);

        await multipleToggleWrapper.trigger('change', {
            detail: {
                checked: true,
            },
        });

        expect(wrapper.vm.demoMultiple).toEqual(true);
    });

    it('updates demoShowErrors on toggle change', async () => {
        const wrapper = shallowMount(ProteanSelectRoute, mountOptions);
        const errorsToggleWrapper = wrapper.find('.demo-toggle-errors');

        expect(wrapper.vm.demoShowErrors).toEqual(false);

        await errorsToggleWrapper.trigger('change', {
            detail: {
                checked: true,
            },
        });

        expect(wrapper.vm.demoShowErrors).toEqual(true);
    });

    it('updates demoOptional on toggle change', async () => {
        const wrapper = shallowMount(ProteanSelectRoute, mountOptions);
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
        const wrapper = shallowMount(ProteanSelectRoute, mountOptions);
        const disabledToggleWrapper = wrapper.find('.demo-toggle-disabled');

        expect(wrapper.vm.demoDisabled).toEqual(false);

        await disabledToggleWrapper.trigger('change', {
            detail: {
                checked: true,
            },
        });

        expect(wrapper.vm.demoDisabled).toEqual(true);
    });

    it('builds correct code snippet substitutions', async () => {
        const wrapper = shallowMount(ProteanSelectRoute, mountOptions);

        /* eslint-disable */
        let substitutions: string[] = (
            wrapper.findComponent({ name: 'CodeSnippet' }).vm as any
        ).substitutions;
        /* eslint-enable */

        expect(substitutions[0]).toEqual('');
        expect(substitutions[1]).toEqual('');
        expect(substitutions[2]).toEqual('');
        expect(substitutions[3]).toEqual(wrapper.vm.snippetOptions);

        wrapper.vm.demoMultiple = true;
        wrapper.vm.demoOptional = true;
        wrapper.vm.demoDisabled = true;

        await nextTick();

        /* eslint-disable */
        substitutions = (
            wrapper.findComponent({ name: 'CodeSnippet' }).vm as any
        ).substitutions;
        /* eslint-enable */

        expect(substitutions[0]).toEqual(' multiple');
        expect(substitutions[1]).toEqual(' optional');
        expect(substitutions[2]).toEqual(' disabled');
    });
});
