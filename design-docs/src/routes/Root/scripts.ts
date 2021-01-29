import { Options, Vue } from 'vue-class-component';
import MainNav from '@/components/main-nav/index.vue';

@Options({
    components: {
        MainNav,
    },
})
export default class Root extends Vue {}
