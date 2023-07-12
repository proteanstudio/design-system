import { nextTick } from 'vue';
import { shallowMount } from '@vue/test-utils';
import ProteanCheckboxRoute from './index.vue';

describe('Protean Checkbox Route', () => {
    it('renders', () => {
        const wrapper = shallowMount(ProteanCheckboxRoute, {
            global: {
                stubs: {
                    CodeSnippet: {
                        template: '<div><slot /></div>',
                    },
                },
            },
        });

        expect(wrapper.find('h1').text()).toEqual('Checkbox');

        const demoCheckbox = wrapper.find('.overview-demo-element')
            .element as HTMLInputElement;

        expect(wrapper.vm.demoIsToggle).toEqual(false);
        expect(wrapper.vm.demoVariant).toEqual(undefined);
        expect(demoCheckbox.getAttribute('variant')).toEqual(null);
        expect(wrapper.vm.demoDisabled).toEqual(false);
        expect(demoCheckbox.getAttribute('disabled')).toEqual('false');
        expect(wrapper.vm.demoChecked).toEqual(false);
        expect(demoCheckbox.checked).toEqual(false);
        expect(wrapper.vm.demoIsRightAligned).toEqual(false);
        expect(wrapper.vm.demoAlignment).toEqual('left');
        expect(demoCheckbox.getAttribute('alignment')).toEqual('left');
        expect(wrapper.vm.demoIndeterminate).toEqual(false);
        expect(demoCheckbox.getAttribute('indeterminate')).toEqual('false');
    });

    it('toggles demo checkbox checked state on change', async () => {
        const wrapper = shallowMount(ProteanCheckboxRoute);

        const demoCheckbox = wrapper.find('.overview-demo-element');
        let demoCheckboxElement = demoCheckbox.element as HTMLInputElement;
        let codeSnippet = wrapper.findComponent({ name: 'CodeSnippet' });

        expect(wrapper.vm.demoChecked).toEqual(false);
        expect(demoCheckboxElement.checked).toEqual(false);
        /* eslint-disable */
        expect(codeSnippet.vm.substitutions[1]).toEqual('');
        /* eslint-enable */

        await demoCheckbox.trigger('change', {
            detail: {
                checked: true,
            },
        });

        demoCheckboxElement = wrapper.find('.overview-demo-element')
            .element as HTMLInputElement;
        codeSnippet = wrapper.findComponent({ name: 'CodeSnippet' });

        expect(wrapper.vm.demoChecked).toEqual(true);
        expect(demoCheckboxElement.checked).toEqual(true);
        /* eslint-disable */
        expect(codeSnippet.vm.substitutions[1]).toEqual('\n checked');
        /* eslint-enable */
    });

    it('updates checkbox variant on toggle change', async () => {
        const wrapper = shallowMount(ProteanCheckboxRoute);

        let toggleToggleWrapper = wrapper.find('.demo-toggle-toggle');
        let toggleToggleElement =
            toggleToggleWrapper.element as HTMLInputElement;
        let indeterminateToggleElement = wrapper.find(
            '.demo-toggle-indeterminate',
        ).element;
        let demoCheckbox = wrapper.find('.overview-demo-element');
        let codeSnippet = wrapper.findComponent({ name: 'CodeSnippet' });

        expect(wrapper.vm.demoIsToggle).toEqual(false);
        expect(wrapper.vm.demoVariant).toEqual(undefined);
        expect(demoCheckbox.attributes('variant')).toEqual(undefined);
        expect(toggleToggleElement.checked).toEqual(false);
        expect(indeterminateToggleElement.getAttribute('disabled')).toEqual(
            'false',
        );
        /* eslint-disable */
        expect(codeSnippet.vm.substitutions[0]).toEqual('');
        /* eslint-enable */

        await toggleToggleWrapper.trigger('change', {
            detail: {
                checked: true,
            },
        });

        toggleToggleWrapper = wrapper.find('.demo-toggle-toggle');
        demoCheckbox = wrapper.find('.overview-demo-element');
        codeSnippet = wrapper.findComponent({ name: 'CodeSnippet' });
        toggleToggleElement = toggleToggleWrapper.element as HTMLInputElement;
        indeterminateToggleElement = wrapper.find(
            '.demo-toggle-indeterminate',
        ).element;

        expect(wrapper.vm.demoIsToggle).toEqual(true);
        expect(wrapper.vm.demoVariant).toEqual('toggle');
        expect(demoCheckbox.attributes('variant')).toEqual('toggle');
        expect(toggleToggleElement.checked).toEqual(true);
        expect(indeterminateToggleElement.getAttribute('disabled')).toEqual(
            'true',
        );
        /* eslint-disable */
        expect(codeSnippet.vm.substitutions[0]).toEqual('\n variant="toggle"');
        /* eslint-enable */
    });

    it('updates checkbox disabled state on toggle change', async () => {
        const wrapper = shallowMount(ProteanCheckboxRoute);

        const toggleDisabledWrapper = wrapper.find('.demo-toggle-disabled');
        let toggleDisabledElement =
            toggleDisabledWrapper.element as HTMLInputElement;
        let demoCheckbox = wrapper.find('.overview-demo-element');
        let codeSnippet = wrapper.findComponent({ name: 'CodeSnippet' });

        expect(wrapper.vm.demoDisabled).toEqual(false);
        expect(demoCheckbox.attributes('disabled')).toEqual('false');
        expect(toggleDisabledElement.checked).toEqual(false);
        /* eslint-disable */
        expect(codeSnippet.vm.substitutions[2]).toEqual('');
        /* eslint-enable */

        await toggleDisabledWrapper.trigger('change', {
            detail: {
                checked: true,
            },
        });

        demoCheckbox = wrapper.find('.overview-demo-element');
        codeSnippet = wrapper.findComponent({ name: 'CodeSnippet' });
        toggleDisabledElement = wrapper.find('.demo-toggle-disabled')
            .element as HTMLInputElement;

        expect(wrapper.vm.demoDisabled).toEqual(true);
        expect(demoCheckbox.attributes('disabled')).toEqual('true');
        expect(toggleDisabledElement.checked).toEqual(true);
        /* eslint-disable */
        expect(codeSnippet.vm.substitutions[2]).toEqual('\n disabled');
        /* eslint-enable */
    });

    it('updates checkbox alignment on toggle change', async () => {
        const wrapper = shallowMount(ProteanCheckboxRoute);

        const toggleAlignmentWrapper = wrapper.find('.demo-toggle-alignment');
        let toggleAlignmentElement =
            toggleAlignmentWrapper.element as HTMLInputElement;
        let demoCheckbox = wrapper.find('.overview-demo-element').element;
        let codeSnippet = wrapper.findComponent({ name: 'CodeSnippet' });

        expect(wrapper.vm.demoAlignment).toEqual('left');
        expect(demoCheckbox.getAttribute('alignment')).toEqual('left');
        expect(toggleAlignmentElement.checked).toEqual(false);
        /* eslint-disable */
        expect(codeSnippet.vm.substitutions[4]).toEqual('left');
        /* eslint-enable */

        await toggleAlignmentWrapper.trigger('change', {
            detail: {
                checked: true,
            },
        });

        demoCheckbox = wrapper.find('.overview-demo-element').element;
        codeSnippet = wrapper.findComponent({ name: 'CodeSnippet' });
        toggleAlignmentElement = wrapper.find('.demo-toggle-alignment')
            .element as HTMLInputElement;

        expect(wrapper.vm.demoAlignment).toEqual('right');
        expect(demoCheckbox.getAttribute('alignment')).toEqual('right');
        expect(toggleAlignmentElement.checked).toEqual(true);
        /* eslint-disable */
        expect(codeSnippet.vm.substitutions[4]).toEqual('right');
        /* eslint-enable */
    });

    it('updates indeterminate state on toggle change', async () => {
        const wrapper = shallowMount(ProteanCheckboxRoute);

        let demoCheckbox = wrapper.find('.overview-demo-element');
        let indeterminateToggleWrapper = wrapper.find(
            '.demo-toggle-indeterminate',
        );
        let toggleToggleElement = wrapper.find('.demo-toggle-toggle');
        let codeSnippet = wrapper.findComponent({ name: 'CodeSnippet' });

        expect(wrapper.vm.demoIndeterminate).toEqual(false);
        expect(wrapper.vm.demoIsToggle).toEqual(false);
        expect(demoCheckbox.attributes('indeterminate')).toEqual('false');
        expect(
            (indeterminateToggleWrapper.element as HTMLInputElement).checked,
        ).toEqual(false);
        expect(toggleToggleElement.attributes('disabled')).toEqual('false');
        /* eslint-disable */
        expect(codeSnippet.vm.substitutions[3]).toEqual('');
        /* eslint-enable */

        await indeterminateToggleWrapper.trigger('change', {
            detail: {
                checked: true,
            },
        });

        demoCheckbox = wrapper.find('.overview-demo-element');
        indeterminateToggleWrapper = wrapper.find('.demo-toggle-indeterminate');
        toggleToggleElement = wrapper.find('.demo-toggle-toggle');
        codeSnippet = wrapper.findComponent({ name: 'CodeSnippet' });

        expect(wrapper.vm.demoIndeterminate).toEqual(true);
        expect(demoCheckbox.attributes('indeterminate')).toEqual('true');
        expect(
            (indeterminateToggleWrapper.element as HTMLInputElement).checked,
        ).toEqual(true);
        expect(toggleToggleElement.attributes('disabled')).toEqual('true');
        /* eslint-disable */
        expect(codeSnippet.vm.substitutions[3]).toEqual('\n indeterminate');
        /* eslint-enable */

        wrapper.vm.demoIsToggle = true;
        await nextTick();

        indeterminateToggleWrapper = wrapper.find('.demo-toggle-indeterminate');
        codeSnippet = wrapper.findComponent({ name: 'CodeSnippet' });

        /* eslint-disable */
        expect(codeSnippet.vm.substitutions[3]).toEqual('');
        /* eslint-enable */
    });
});
