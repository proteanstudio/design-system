import vProp from '@/directives/v-prop';
import { shallowMount } from '@vue/test-utils';
import MainNav from './index.vue';

describe('main-nav', () => {
    it('renders base properties and structure', () => {
        const $router = {
            getRoutes() {
                return [
                    {
                        path: '/path-one/route-one',
                        name: 'Route One',
                    },
                    {
                        path: '/path-two/route-two',
                        name: 'Route Two',
                    },
                ];
            },
        };

        const wrapper = shallowMount(MainNav, {
            global: {
                mocks: {
                    $router,
                },
                directives: {
                    prop: vProp,
                },
            },
        });

        expect(wrapper.vm.showOffCanvas).toEqual(false);
        expect(wrapper.vm.lightModeEnabled).toEqual(false);
        expect(wrapper.vm.$el.localName).toEqual('nav');
        expect(wrapper.vm.$el.classList).toContain('main-nav');
        expect(wrapper.vm.$el.classList).not.toContain('show-off-canvas');
        expect(wrapper.vm.$el.getAttribute('aria-label')).toEqual(
            'Main navigation',
        );

        expect(wrapper.find('.nav-content').element.localName).toContain(
            'protean-click-elsewhere',
        );

        expect(wrapper.find('.home-link').exists()).toBe(true);
        expect(wrapper.find('.home-link img').attributes('alt')).toEqual(
            'Protean Design System',
        );

        expect(wrapper.findAll('.nav-group')).toHaveLength(1);

        expect(wrapper.find('.light-mode-toggle').exists()).toBe(true);
    });

    it('correctly constructs sorted routes array', () => {
        const $router = {
            getRoutes() {
                return [
                    {
                        path: '/home-should-not-be-mapped',
                        name: 'Home',
                    },
                    {
                        path: '/not-found-should-not-be-mapped',
                        name: 'not-found',
                    },
                    {
                        path: '/not-guidelines-or-elements/top-level',
                        name: 'Top Level Route',
                    },
                    {
                        path: '/guidelines/guideline-1',
                        name: 'Guideline 1',
                    },
                    {
                        path: '/guidelines/guideline-2',
                        name: 'Guideline 2',
                    },
                    {
                        path: '/elements/element',
                        name: 'Element',
                    },
                ];
            },
        };

        const wrapper = shallowMount(MainNav, {
            global: {
                stubs: [
                    'router-link',
                    'protean-click-elsewhere',
                    'protean-checkbox',
                ],
                mocks: {
                    $router,
                },
            },
        });

        expect(wrapper.vm.sortedRoutes).toEqual([
            {
                children: [
                    {
                        path: '/not-guidelines-or-elements/top-level',
                        name: 'Top Level Route',
                    },
                ],
            },
            {
                title: 'Guidelines',
                children: [
                    {
                        path: '/guidelines/guideline-1',
                        name: 'Guideline 1',
                    },
                    {
                        path: '/guidelines/guideline-2',
                        name: 'Guideline 2',
                    },
                ],
            },
            {
                title: 'Elements',
                children: [
                    {
                        path: '/elements/element',
                        name: 'Element',
                    },
                ],
            },
        ]);
    });

    it('renders sorted routes array', () => {
        const $router = {
            getRoutes() {
                return [
                    {
                        path: '/home-should-not-be-mapped',
                        name: 'Home',
                    },
                    {
                        path: '/not-found-should-not-be-mapped',
                        name: 'not-found',
                    },
                    {
                        path: '/not-guidelines-or-elements/top-level',
                        name: 'Top Level Route',
                    },
                    {
                        path: '/guidelines/guideline-1',
                        name: 'Guideline 1',
                    },
                    {
                        path: '/guidelines/guideline-2',
                        name: 'Guideline 2',
                    },
                    {
                        path: '/elements/element',
                        name: 'Element',
                    },
                ];
            },
        };

        const wrapper = shallowMount(MainNav, {
            global: {
                stubs: ['protean-checkbox'],
                mocks: {
                    $router,
                },
                directives: {
                    prop: vProp,
                },
            },
        });

        const navGroups = wrapper.findAll('.nav-group');

        expect(navGroups).toHaveLength(3);

        const topGroup = navGroups[0];
        expect(topGroup.find('h2').exists()).toBe(false);
        expect(topGroup.find('ul').attributes('aria-labelledby')).toEqual(
            undefined,
        );

        const topGroupItems = topGroup.findAll('li');
        expect(topGroupItems).toHaveLength(1);
        const topGroupFirstLink = topGroupItems[0].find('router-link');
        expect(topGroupFirstLink.attributes('to')).toEqual(
            '/not-guidelines-or-elements/top-level',
        );
        expect(topGroupFirstLink.text().trim()).toEqual('Top Level Route');

        const guidelinesGroup = navGroups[1];
        expect(guidelinesGroup.find('h2').exists()).toBe(true);
        expect(guidelinesGroup.find('h2').text()).toEqual('Guidelines');

        const guidelinesGroupId = 'nav-group-1-heading';

        expect(guidelinesGroup.find('h2').attributes('id')).toEqual(
            guidelinesGroupId,
        );
        expect(
            guidelinesGroup.find('ul').attributes('aria-labelledby'),
        ).toEqual(guidelinesGroupId);
    });

    it('emits "hide-off-canvas" on click-elsewhere', async () => {
        const $router = {
            getRoutes() {
                return [];
            },
        };

        const wrapper = shallowMount(MainNav, {
            global: {
                stubs: ['router-link', 'protean-checkbox'],
                mocks: {
                    $router,
                },
                directives: {
                    prop: vProp,
                },
            },
        });

        const clickElsewhereElement = wrapper.find('protean-click-elsewhere');

        await clickElsewhereElement.trigger('change');

        expect(wrapper.emitted()['hide-off-canvas']).toHaveLength(1);
        expect(
            (wrapper.emitted()['hide-off-canvas'][0] as unknown[])[0],
        ).toEqual(undefined);
    });

    it('emits "toggle-light-mode" on toggle click', async () => {
        const $router = {
            getRoutes() {
                return [];
            },
        };

        const wrapper = shallowMount(MainNav, {
            global: {
                stubs: ['router-link'],
                mocks: {
                    $router,
                },
                directives: {
                    prop: vProp,
                },
            },
        });

        const toggleElement = wrapper.find('protean-checkbox');
        expect(toggleElement.classes()).toContain('light-mode-toggle');
        expect(toggleElement.attributes('label')).toContain('Light mode');
        expect(toggleElement.attributes('variant')).toContain('toggle');
        expect(toggleElement.attributes('alignment')).toContain('right');

        await toggleElement.trigger('change');

        expect(wrapper.emitted()['toggle-light-mode']).toHaveLength(1);
        expect(
            (wrapper.emitted()['toggle-light-mode'][0] as unknown[])[0],
        ).toBeInstanceOf(Event);
    });
});
