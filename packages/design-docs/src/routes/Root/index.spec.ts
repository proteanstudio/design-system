import vProp from '@/directives/v-prop';
import { shallowMount } from '@vue/test-utils';
import { nextTick } from 'vue';
import RootRoute from './index.vue';

const mountOptions = {
    global: {
        stubs: [
            'main-nav',
            'secondary-nav',
            'protean-button',
            'protean-icon',
            'router-link',
            'router-view',
        ],
        mocks: {
            $route: {
                fullPath: '',
                name: '',
            },
        },
        directives: {
            prop: vProp,
        },
    },
};

describe('Root Route', () => {
    it('renders', () => {
        const wrapper = shallowMount(RootRoute, mountOptions);
        expect(wrapper.findComponent({ name: 'MainNav' })).not.toBeNull();
        expect(wrapper.findComponent({ name: 'SecondaryNav' })).not.toBeNull();

        expect(wrapper.vm.showOffCanvas).toEqual(false);
        expect(wrapper.vm.lightModeEnabled).toEqual(false);
        expect(document.documentElement.className).not.toContain('light');
    });

    it('binds home route name to main element', () => {
        mountOptions.global.mocks.$route = {
            fullPath: '/',
            name: 'Home',
        };
        const wrapper = shallowMount(RootRoute, mountOptions);

        expect(wrapper.vm.routeClassBinding).toEqual('home');
        expect(wrapper.find('main').classes('home')).toBe(true);
    });

    it('binds nested route name to main element', () => {
        mountOptions.global.mocks.$route = {
            fullPath: '/guidelines/accessibility',
            name: 'Accessibility',
        };
        const wrapper = shallowMount(RootRoute, mountOptions);

        expect(wrapper.find('main').classes('accessibility')).toBe(true);
        expect(wrapper.vm.routeClassBinding).toEqual(
            'guidelines accessibility',
        );
    });

    it('binds not-found route name to main element', () => {
        mountOptions.global.mocks.$route = {
            fullPath: '/eqwqweq/1232131123sas',
            name: 'not-found',
        };

        const wrapper = shallowMount(RootRoute, mountOptions);

        expect(wrapper.vm.routeClassBinding).toEqual('not-found');
        expect(wrapper.find('main').classes('not-found')).toBe(true);
    });

    it('sets lightModeEnabled from localStorage', async () => {
        localStorage.setItem('lightModeEnabled', 'true');
        await nextTick();
        const wrapper = shallowMount(RootRoute, mountOptions);

        expect(wrapper.vm.lightModeEnabled).toEqual(true);
        expect(document.documentElement.className).toContain('light');

        document.documentElement.classList.remove('light');
        localStorage.removeItem('lightModeEnabled');
    });

    it('updates lightModeEnabled on main-nav emission', async () => {
        const wrapper = shallowMount(RootRoute, mountOptions);

        expect(localStorage.getItem('lightModeEnabled')).toBe(null);
        expect(wrapper.vm.lightModeEnabled).toEqual(false);
        expect(document.documentElement.className).not.toContain('light');

        await wrapper
            .findComponent({ name: 'MainNav' })
            .trigger('toggle-light-mode', {
                detail: {
                    checked: true,
                },
            });

        expect(localStorage.getItem('lightModeEnabled')).toEqual('true');
        expect(wrapper.vm.lightModeEnabled).toEqual(true);
        expect(document.documentElement.className).toContain('light');

        await wrapper
            .findComponent({ name: 'MainNav' })
            .trigger('toggle-light-mode', {
                detail: {
                    checked: false,
                },
            });

        expect(localStorage.getItem('lightModeEnabled')).toEqual('false');
        expect(wrapper.vm.lightModeEnabled).toEqual(false);
        expect(document.documentElement.className).not.toContain('light');

        localStorage.removeItem('lightModeEnabled');
    });

    it('closes off canvas on routeChange', () => {
        const wrapper = shallowMount(RootRoute, mountOptions);

        expect(wrapper.vm.showOffCanvas).toEqual(false);

        wrapper.vm.showOffCanvas = true;
        expect(wrapper.vm.showOffCanvas).toEqual(true);

        wrapper.vm.closeOffCanvas();
        expect(wrapper.vm.showOffCanvas).toEqual(false);
    });

    it('toggles off canvas on button-click', async () => {
        const wrapper = shallowMount(RootRoute, mountOptions);

        expect(wrapper.vm.showOffCanvas).toEqual(false);

        await wrapper.find('.off-canvas-toggle').trigger('click');

        expect(wrapper.vm.showOffCanvas).toEqual(true);

        await wrapper.find('.off-canvas-toggle').trigger('click');

        expect(wrapper.vm.showOffCanvas).toEqual(false);
    });

    it('closes off canvas on main-nav emission', async () => {
        const wrapper = shallowMount(RootRoute, mountOptions);

        expect(wrapper.vm.showOffCanvas).toEqual(false);

        wrapper.vm.showOffCanvas = true;
        expect(wrapper.vm.showOffCanvas).toEqual(true);

        await wrapper
            .findComponent({ name: 'MainNav' })
            .trigger('hide-off-canvas');

        expect(wrapper.vm.showOffCanvas).toEqual(false);
    });

    it.skip('gets correct logo-url', () => {
        // require is stubbed by vitest and returns an empty string for the path name
        // img element optimized out of test build
        const wrapper = shallowMount(RootRoute, mountOptions);

        expect(wrapper.vm.lightModeEnabled).toEqual(false);
        expect(wrapper.vm.logoURL).toContain(
            'assets/images/logo-white-text.svg',
        );

        wrapper.vm.lightModeEnabled = true;
        expect(wrapper.vm.logoURL).toContain(
            'assets/images/logo-dark-text.svg',
        );
    });
});
