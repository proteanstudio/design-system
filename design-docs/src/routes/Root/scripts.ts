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

    @Watch('$route')
    closeOffCanvas(): void {
        this.showOffCanvas = false;
    }
}
