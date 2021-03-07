import { Dict } from '@/types';
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

interface MainNavItem {
    path: string;
    name: string;
}

interface MainNavGroup {
    title?: string;
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
                children: [],
            },
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
                const omittedRoutes = ['Home', 'not-found'];
                if (omittedRoutes.includes(item.name)) return acc;

                const groupIndexMap: Dict<number> = {
                    guidelines: 1,
                    elements: 2,
                };

                const targetGroupIndex =
                    groupIndexMap[item.path.split('/')[1]] ?? 0;
                acc[targetGroupIndex].children.push(item);

                return acc;
            }, groupedStructure)
            .filter(group => group.children.length > 0);

        return routes;
    }
}
