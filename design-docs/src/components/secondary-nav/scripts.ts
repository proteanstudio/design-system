import { Watch } from 'vue-property-decorator';
import { Vue } from 'vue-class-component';
import debounce from '@/utils/debounce';

interface SecondaryNavItem {
    path?: string;
    name?: string;
}

export default class SecondaryNav extends Vue {
    mounted(): void {
        window.addEventListener('scroll', this.scrollListener);
    }

    unmounted(): void {
        window.removeEventListener('scroll', this.scrollListener);
    }

    navItems: SecondaryNavItem[] = [];
    activeTarget = '';

    scrolling = false;

    @Watch('$route')
    onRouteChanged(): void {
        this.navItems = [];
        this.$nextTick(() => {
            this.setSecondaryNavItems();
            this.scrollHandler();
        });
    }

    getAnchors(): HTMLElement[] {
        return Array.from(
            document.querySelectorAll<HTMLElement>('[data-in-page-anchor]'),
        );
    }

    setSecondaryNavItems(): void {
        this.navItems = this.getAnchors()
            .map(item => {
                const path = item.dataset.inPageAnchor;
                const name = item.dataset.label ?? item.textContent?.trim();

                return {
                    path,
                    name,
                };
            })
            .filter(item => item.name && item.path);
    }

    scrollToNavItem(path: string): void {
        document
            .querySelector(`[data-in-page-anchor="${path}"]`)
            ?.scrollIntoView({
                behavior: 'smooth',
            });

        this.activeTarget = path;
    }

    scrollHandler(): void {
        const anchors = this.getAnchors();
        const scrolledElements = anchors.filter(element => {
            return element.getBoundingClientRect().y < 15;
        });

        const activeElement =
            scrolledElements?.[scrolledElements.length - 1] ?? anchors[0];

        this.activeTarget = activeElement?.dataset.inPageAnchor ?? '';
    }

    scrollListener: VoidFunction = debounce(this.scrollHandler.bind(this), 20);
}
