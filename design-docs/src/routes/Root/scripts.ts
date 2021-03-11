import { Options, Vue } from 'vue-class-component';
import MainNav from '@/components/main-nav/index.vue';
import SecondaryNav from '@/components/secondary-nav/index.vue';
import { Watch } from 'vue-property-decorator';

@Options({
    components: {
        MainNav,
        SecondaryNav,
    },
})
export default class Root extends Vue {
    showOffCanvas = false;
    lightModeEnabled = false;

    mounted(): void {
        const lightModeEnabled =
            localStorage.getItem('lightModeEnabled') === 'true';

        if (lightModeEnabled) {
            this.lightModeEnabled = lightModeEnabled;
            document.documentElement.classList.add('light');
        }
    }

    @Watch('$route')
    closeOffCanvas(): void {
        this.showOffCanvas = false;
    }

    get logoURL(): string {
        return require(`@/assets/images/logo-${
            this.lightModeEnabled ? 'dark' : 'white'
        }-text.svg`);
    }

    get routeClassBinding(): string {
        const path = this.$route.fullPath;
        return path === '/' ? 'home' : path.split('/').join(' ');
    }

    toggleLightMode(event: CustomEvent): void {
        const lightModeEnabled = event.detail.checked;
        this.lightModeEnabled = lightModeEnabled;
        localStorage.setItem('lightModeEnabled', lightModeEnabled);

        document.documentElement.classList.toggle('light');
    }
}
