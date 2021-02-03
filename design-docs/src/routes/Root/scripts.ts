import { Options, Vue } from 'vue-class-component';
import MainNav from '@/components/main-nav/index.vue';
import SecondaryNav from '@/components/secondary-nav/index.vue';

@Options({
    components: {
        MainNav,
        SecondaryNav,
    },
})
export default class Root extends Vue {}
