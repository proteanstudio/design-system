<style lang="scss" src="./styles.scss"></style>
<script setup lang="ts">
import debounce from '@/utils/debounce';
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

interface SecondaryNavItem {
    path: string;
    name: string;
}

const navItems = ref<SecondaryNavItem[]>([]);
const activeTarget = ref('');
const route = useRoute();

function getAnchors(): HTMLElement[] {
    return Array.from(
        document.querySelectorAll<HTMLElement>('[data-in-page-anchor]'),
    );
}

function setSecondaryNavItems(): void {
    navItems.value = getAnchors()
        .map(item => {
            const path = item.dataset.inPageAnchor!;
            const name = item.dataset.label ?? item.textContent!.trim();

            return {
                path,
                name,
            };
        })
        .filter(item => item.name && item.path);
}

function scrollToNavItem(path: string): void {
    document.querySelector(`[data-in-page-anchor="${path}"]`)?.scrollIntoView({
        behavior: 'smooth',
    });

    activeTarget.value = path;
}

function scrollHandler(): void {
    const anchors = getAnchors();
    const scrolledElements = anchors.filter(element => {
        return element.getBoundingClientRect().y < 15;
    });

    const activeElement =
        scrolledElements?.[scrolledElements.length - 1] ?? anchors[0];

    activeTarget.value = activeElement?.dataset.inPageAnchor ?? '';
}

const scrollListener: VoidFunction = debounce(scrollHandler, 20);

onMounted(() => {
    window.addEventListener('scroll', scrollListener, {
        passive: true,
    });
});

onUnmounted(() => {
    window.removeEventListener('scroll', scrollListener);
});

watch(route, () => {
    navItems.value = [];
    nextTick(() => {
        setSecondaryNavItems();
        scrollHandler();
    });
});
</script>
<template>
    <nav
        class="secondary-nav"
        v-if="navItems.length > 0"
        aria-label="In-page navigation"
    >
        <ul>
            <li v-for="item in navItems">
                <a
                    href="javascript:void(0)"
                    class="secondary-nav-item"
                    :class="{ active: activeTarget === item.path }"
                    :data-target="item.path"
                    @click="scrollToNavItem(item.path)"
                    >{{ item.name }}</a
                >
            </li>
        </ul>
    </nav>
</template>
