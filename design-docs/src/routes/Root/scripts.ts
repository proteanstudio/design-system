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

    @Watch('$route')
    closeOffCanvas(): void {
        this.showOffCanvas = false;
    }

    get logoURL(): string {
        return require(`@/assets/images/logo-${
            this.lightModeEnabled ? 'dark' : 'white'
        }-text.svg`);
    }

    toggleLightMode(event: CustomEvent): void {
        this.lightModeEnabled = event.detail.checked;

        document.documentElement.classList.toggle('light');
    }
}
