import { nextTick } from '@vue/runtime-core';
import { shallowMount } from '@vue/test-utils';
import SecondaryNav from './index.vue';
import debounce from '@/utils/debounce';
import { reactive } from 'vue';

const route = reactive({
    fullPath: '',
    name: '',
});

vi.mock('vue-router', () => ({
    useRoute: vi.fn(() => route),
}));

vi.mock('@/utils/debounce', () => ({
    default: vi.fn().mockImplementation((fn: VoidFunction) => {
        return fn;
    }),
}));

describe('secondary-nav', () => {
    afterEach(() => {
        (debounce as any).mockReset();
    });

    it('does not render if no anchors present', () => {
        const wrapper = shallowMount<any>(SecondaryNav);

        expect(wrapper.find('nav').exists()).toBe(false);
        expect(wrapper.vm.navItems).toEqual([]);
        expect(wrapper.vm.activeTarget).toEqual('');
    });

    it('gets anchors', () => {
        document.body.innerHTML = `
            <main>
                <section data-in-page-anchor="foo" data-label="bar"></section>
                <section data-in-page-anchor="baz" data-label="bam"></section>
            </main>
        `;
        const wrapper = shallowMount<any>(SecondaryNav);

        const anchors = wrapper.vm.getAnchors();

        expect(Array.isArray(anchors)).toBe(true);
        expect(anchors).toHaveLength(2);
        expect(anchors[0]).toBeInstanceOf(HTMLElement);
        expect(anchors[0].dataset.inPageAnchor).toEqual('foo');
        expect(anchors[0].dataset.label).toEqual('bar');
    });

    it.only('renders with links if anchors present', async () => {
        document.body.innerHTML = `
            <main>
                <section data-in-page-anchor="foo" data-label="bar"></section>
                <section data-in-page-anchor="baz" data-label="bam"></section>
            </main>
        `;
        const wrapper = shallowMount<any>(SecondaryNav);

        route.fullPath = '/';
        route.name = 'foo';

        await nextTick(); // sync with nextTick in watcher
        await nextTick(); // wait for ref updates
        await nextTick(); // wait for render side effect

        const nav = wrapper.find<HTMLElement>('.secondary-nav');

        expect(wrapper.vm.navItems).toHaveLength(2);
        expect(nav.exists()).toBe(true);
        expect(nav.element.className).toEqual('secondary-nav');
        expect(nav.element.getAttribute('aria-label')).toEqual(
            'In-page navigation',
        );

        const navItems = wrapper.findAll('.secondary-nav-item');
        expect(navItems).toHaveLength(2);
        expect(navItems[0].classes('active')).toBe(false);
        expect(navItems[1].classes('active')).toBe(true);
        expect(navItems[0].attributes('href')).toEqual('javascript://');
        expect(navItems[0].attributes('data-target')).toEqual('foo');
        expect(navItems[0].text()).toEqual('bar');
        expect(navItems[0].attributes('href')).toEqual('javascript://');
        expect(navItems[1].attributes('data-target')).toEqual('baz');
        expect(navItems[1].text()).toEqual('bam');
    });

    it('correctly constructs nav items', () => {
        document.body.innerHTML = `
            <main>
                <section data-in-page-anchor="foo" data-label="bar"></section>
                <section data-in-page-anchor="">biz</section>
                <section data-in-page-anchor="buzz"></section>
                <section data-in-page-anchor="baz">bam</section>
            </main>
        `;
        const wrapper = shallowMount<any>(SecondaryNav);

        wrapper.vm.setSecondaryNavItems();

        // filters out second and third sections due to lack of content for both path and name
        expect(wrapper.vm.navItems).toEqual([
            {
                path: 'foo',
                name: 'bar',
            },
            {
                path: 'baz',
                name: 'bam',
            },
        ]);
    });

    it('scaffolds scroll listener', async () => {
        document.body.innerHTML = `
            <main>
                <section data-in-page-anchor="foo" data-label="bar"></section>
                <section data-in-page-anchor="baz">bam</section>
            </main>
        `;

        shallowMount(SecondaryNav);

        expect(debounce).toHaveBeenCalledTimes(1);

        const args = (debounce as any).mock.calls[0];

        expect(typeof args[0]).toEqual('function');
        expect(args[1]).toEqual(20);
    });

    it('updates active target on window scroll', async () => {
        document.body.innerHTML = `
            <main>
                <section data-in-page-anchor="foo" data-label="bar"></section>
                <section data-in-page-anchor="baz">bam</section>
            </main>
        `;

        const wrapper = shallowMount<any>(SecondaryNav);

        wrapper.vm.setSecondaryNavItems();
        await nextTick();

        expect(wrapper.vm.activeTarget).toEqual('');

        const navItems = wrapper.findAll('.secondary-nav-item');

        expect(navItems[0].classes('active')).toBe(false);
        expect(navItems[1].classes('active')).toBe(false);

        wrapper.vm.scrollHandler();
        await nextTick();

        expect(wrapper.vm.activeTarget).toEqual('baz');
        expect(navItems[0].classes('active')).toBe(false);
        expect(navItems[1].classes('active')).toBe(true);
    });

    it('scrolls to anchor on item click', async () => {
        document.body.innerHTML = `
            <main>
                <section data-in-page-anchor="foo" data-label="bar"></section>
                <section data-in-page-anchor="baz">bam</section>
            </main>
        `;

        const wrapper = shallowMount<any>(SecondaryNav);

        wrapper.vm.setSecondaryNavItems();
        await nextTick();

        expect(wrapper.vm.activeTarget).toEqual('');

        const scrollIntoViewMock = vi.fn();

        (
            document.querySelector('[data-in-page-anchor="baz"]') as HTMLElement
        ).scrollIntoView = scrollIntoViewMock;

        await wrapper.findAll('.secondary-nav-item')[1].trigger('click');

        expect(wrapper.vm.activeTarget).toEqual('baz');
        expect(scrollIntoViewMock).toBeCalledTimes(1);
    });
});
