import { Options, Vue } from 'vue-class-component';
import CodeSnippet from '@/components/code-snippet/index.vue';

@Options({
    components: { CodeSnippet },
})
export default class ProteanMessageRoute extends Vue {
    demoType = 'info';
    demoTypes = ['info', 'success', 'warning', 'error'];
    demoIsStatus = false;

    get demoLevel(): string {
        return this.demoIsStatus ? 'status' : 'alert';
    }
}
