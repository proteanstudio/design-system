import vProp from '@/directives/v-prop';
import { shallowMount } from '@vue/test-utils';
import ProteanButtonRoute from './index.vue';

const mountOptions = {
    global: {
        stubs: [
            'code-snippet',
            'protean-button',
            'protean-icon',
            'protean-checkbox',
            'protean-select',
            'protean-option',
        ],
        directives: {
            prop: vProp,
        },
    },
};

describe('Protean Button Route', () => {
    it('renders', () => {
        const wrapper = shallowMount(ProteanButtonRoute, mountOptions);

        expect(wrapper.find('h1').text()).toEqual('Button');

        const demoButton = wrapper.find('.overview-demo-element')
            .element as HTMLElement & { a11yLabel: string };

        expect(wrapper.vm.demoVariant).toEqual('primary');
        expect(demoButton.getAttribute('variant')).toEqual('primary');
        expect(wrapper.vm.demoDisabled).toEqual(false);
        expect(demoButton.getAttribute('disabled')).toEqual('false');
        expect(wrapper.vm.demoContent).toEqual('Button text');
        expect(wrapper.vm.demoAriaLabel).toEqual(undefined);
        expect(demoButton.a11yLabel).toEqual(undefined);
    });

    it('updates button disabled state on toggle change', async () => {
        const wrapper = shallowMount(ProteanButtonRoute, mountOptions);

        const toggleWrapper = wrapper.find('.demo-toggle-disabled');

        let toggleElement = toggleWrapper.element as HTMLInputElement;
        let demoButton = wrapper.find('.overview-demo-element').element;

        expect(wrapper.vm.demoDisabled).toEqual(false);
        expect(demoButton.getAttribute('disabled')).toEqual('false');
        expect(toggleElement.checked).toEqual(false);

        await toggleWrapper.trigger('change', {
            detail: {
                checked: true,
            },
        });

        toggleElement = wrapper.find('.demo-toggle-disabled')
            .element as HTMLInputElement;
        demoButton = wrapper.find('.overview-demo-element').element;

        expect(wrapper.vm.demoDisabled).toEqual(true);
        expect(demoButton.getAttribute('disabled')).toEqual('true');
        expect(toggleElement.checked).toEqual(true);
    });

    it('updates button variant on select change', async () => {
        const wrapper = shallowMount(ProteanButtonRoute, mountOptions);

        let selectWrapper = wrapper.find('.demo-select-variant');
        let demoButton = wrapper.find('.overview-demo-element')
            .element as HTMLElement & { a11yLabel: string };
        let codeSnippet = wrapper.findComponent({ name: 'CodeSnippet' });

        expect(wrapper.vm.demoVariant).toEqual('primary');
        expect(demoButton.getAttribute('variant')).toEqual('primary');
        expect(selectWrapper.attributes('value')).toEqual('primary');
        /* eslint-disable */
        expect((codeSnippet.vm as any).substitutions[0]).toEqual('primary');
        expect((codeSnippet.vm as any).substitutions[2]).toEqual('');
        /* eslint-enable */
        expect(wrapper.vm.demoAriaLabel).toEqual(undefined);
        expect(demoButton.a11yLabel).toEqual(undefined);

        await selectWrapper.trigger('change', {
            detail: {
                value: 'icon',
            },
        });

        selectWrapper = wrapper.find('.demo-select-variant');
        demoButton = wrapper.find('.overview-demo-element')
            .element as HTMLElement & { a11yLabel: string };
        codeSnippet = wrapper.findComponent({ name: 'CodeSnippet' });

        expect(wrapper.vm.demoVariant).toEqual('icon');
        expect(demoButton.getAttribute('variant')).toEqual('icon');
        expect(selectWrapper.attributes('value')).toEqual('icon');
        /* eslint-disable */
        expect((codeSnippet.vm as any).substitutions[0]).toEqual('icon');
        expect((codeSnippet.vm as any).substitutions[2]).toEqual(
            '\na11y-label="Button aria-label"',
        );
        /* eslint-enable */
        expect(wrapper.vm.demoAriaLabel).toEqual('Button aria-label');
        expect(demoButton.a11yLabel).toEqual('Button aria-label');

        await selectWrapper.trigger('change', {
            detail: {
                value: 'secondary',
            },
        });

        codeSnippet = wrapper.findComponent({ name: 'CodeSnippet' });

        expect(wrapper.vm.demoVariant).toEqual('secondary');

        /* eslint-disable */
        expect((codeSnippet.vm as any).substitutions[0]).toEqual('secondary');
        expect((codeSnippet.vm as any).substitutions[2]).toEqual('');
        /* eslint-enable */
        expect(wrapper.vm.demoAriaLabel).toEqual(undefined);
    });
});
