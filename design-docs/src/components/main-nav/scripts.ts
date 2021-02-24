import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

interface MainNavItem {
    path: string;
    name: string;
}

interface MainNavGroup {
    title: string;
    children: MainNavItem[];
}

@Options({
    emits: ['hide-off-canvas', 'toggle-light-mode'],
})
export default class MainNav extends Vue {
    @Prop() showOffCanvas = false;
    @Prop() lightModeEnabled = false;

    hasMounted = false;

    get sortedRoutes(): MainNavGroup[] {
        const groupedStructure: MainNavGroup[] = [
            {
                title: 'Guidelines',
                children: [],
            },
            {
                title: 'Elements',
                children: [],
            },
        ];
        const routes = this.$router
            .getRoutes()
            .map(
                ({ path, name }): MainNavItem => {
                    return {
                        path,
                        name: name as string,
                    };
                },
            )
            .reduce((acc, item) => {
                if (item.name === 'not-found') return acc;

                const targetGroupIndex = item.path.includes('elements') ? 1 : 0;
                acc[targetGroupIndex].children.push(item);
                return acc;
            }, groupedStructure);

        return routes;
    }
}
