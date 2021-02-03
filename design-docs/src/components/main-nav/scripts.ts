import { Vue } from 'vue-class-component';

interface MainNavItem {
    path: string;
    name: string;
}

interface MainNavGroup {
    title: string;
    children: MainNavItem[];
}

export default class MainNav extends Vue {
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
                const targetGroupIndex = item.path.includes('elements') ? 1 : 0;
                acc[targetGroupIndex].children.push(item);
                return acc;
            }, groupedStructure);

        return routes;
    }
    /* 
    lightModeEnabled = document.body.classList.contains('light');

    toggleLightMode(event: CustomEvent): void {
        this.lightModeEnabled = event.detail.checked;

        document.body.classList.toggle('light');
    } */
}
