<style lang="scss" src="./styles.scss"></style>
<script setup lang="ts">
import { Dict } from '@/types';
import { withDefaults, computed } from 'vue';
import { useRouter } from 'vue-router';

interface MainNavItem {
    path: string;
    name: string;
}

interface MainNavProps {
    showOffCanvas?: boolean;
    lightModeEnabled?: boolean;
}

interface MainNavGroup {
    title?: string;
    children: MainNavItem[];
}

defineEmits(['hide-off-canvas', 'toggle-light-mode']);
const props = withDefaults(defineProps<MainNavProps>(), {
    showOffCanvas: false,
    lightModeEnabled: false,
});

const router = useRouter();

const sortedRoutes = computed<MainNavGroup[]>(() => {
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

    const routes = router
        .getRoutes()
        .map(({ path, name }): MainNavItem => {
            return {
                path,
                name: name as string,
            };
        })
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
});
</script>
<template>
    <nav
        class="main-nav"
        :class="{ 'show-off-canvas': showOffCanvas }"
        aria-label="Main navigation"
    >
        <protean-click-elsewhere
            @change.self="$emit('hide-off-canvas')"
            class="nav-content"
        >
            <router-link to="/" class="home-link unstyled">
                <img
                    src="@/assets/images/logo-symbol.svg"
                    alt="Protean Design System"
                />
            </router-link>
            <div v-for="(group, index) in sortedRoutes" class="nav-group">
                <h2
                    v-if="group.title"
                    class="heading-3"
                    :id="`nav-group-${index}-heading`"
                >
                    {{ group.title }}
                </h2>
                <ul
                    :aria-labelledby="
                        group.title ? `nav-group-${index}-heading` : undefined
                    "
                >
                    <li v-for="item in group.children">
                        <router-link :to="item.path">{{
                            item.name
                        }}</router-link>
                    </li>
                </ul>
            </div>
            <protean-checkbox
                class="light-mode-toggle"
                label="Light mode"
                variant="toggle"
                alignment="right"
                v-prop:checked="lightModeEnabled"
                @change="$emit('toggle-light-mode', $event)"
            ></protean-checkbox>
        </protean-click-elsewhere>
    </nav>
</template>
