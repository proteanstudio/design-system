<style lang="scss" src="./styles.scss"></style>
<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import MainNav from '@/components/main-nav/index.vue';
import SecondaryNav from '@/components/secondary-nav/index.vue';
import logoImage from '@/assets/images/logo-dark-text.svg';
import logoImageWhite from '@/assets/images/logo-white-text.svg';

const showOffCanvas = ref<boolean>(false);
const lightModeEnabled = ref<boolean>(false);
const route = useRoute();

onMounted(() => {
    const lightModeStorageItem =
        localStorage.getItem('lightModeEnabled') === 'true';

    if (lightModeStorageItem) {
        lightModeEnabled.value = lightModeStorageItem;
        document.documentElement.classList.add('light');
    }
});

watch(route, () => {
    showOffCanvas.value = false;
});

const logoURL = computed<string>(() => {
    return lightModeEnabled.value ? logoImage : logoImageWhite;
});

const routeClassBinding = computed<string>(() => {
    const { fullPath: path, name } = route;

    if (name === 'not-found') return 'not-found';

    return path === '/' ? 'home' : path.split('/').join(' ').trim();
});

function toggleLightMode(event: CustomEvent): void {
    lightModeEnabled.value = event.detail.checked;
    localStorage.setItem('lightModeEnabled', `${lightModeEnabled.value}`);

    document.documentElement.classList.toggle('light');
}
</script>
<template>
    <header class="mobile-banner">
        <protean-button
            :a11y-label="'Toggle Menu'"
            variant="icon"
            class="off-canvas-toggle"
            @click="showOffCanvas = !showOffCanvas"
        >
            <protean-icon type="menu"></protean-icon>
        </protean-button>
        <router-link to="/" class="home-link unstyled">
            <img
                :src="logoURL"
                class="protean-logo"
                alt="Protean Design System"
            />
        </router-link>
    </header>
    <MainNav
        :show-off-canvas="showOffCanvas"
        :light-mode-enabled="lightModeEnabled"
        @hide-off-canvas="showOffCanvas = false"
        @toggle-light-mode="toggleLightMode"
    />
    <main :class="routeClassBinding" tabindex="-1">
        <div>
            <router-view></router-view>
        </div>
        <SecondaryNav />
    </main>
</template>
