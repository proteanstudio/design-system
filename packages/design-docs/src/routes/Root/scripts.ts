import { Options, Vue } from 'vue-class-component';
import MainNav from '@/components/main-nav/index.vue';
import SecondaryNav from '@/components/secondary-nav/index.vue';
import { Watch } from 'vue-property-decorator';
import logoImage from '@/assets/images/logo-dark-text.svg';
import logoImageWhite from '@/assets/images/logo-white-text.svg';

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
        return this.lightModeEnabled ? logoImage : logoImageWhite;
    }

    get routeClassBinding(): string {
        const { fullPath: path, name } = this.$route;

        if (name === 'not-found') return 'not-found';

        return path === '/' ? 'home' : path.split('/').join(' ').trim();
    }

    toggleLightMode(event: CustomEvent): void {
        const lightModeEnabled = event.detail.checked;
        this.lightModeEnabled = lightModeEnabled;
        localStorage.setItem('lightModeEnabled', lightModeEnabled);

        document.documentElement.classList.toggle('light');
    }
}
