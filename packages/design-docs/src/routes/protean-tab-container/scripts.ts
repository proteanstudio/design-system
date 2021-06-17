import { Options, Vue } from 'vue-class-component';
import CodeSnippet from '@/components/code-snippet/index.vue';

@Options({
    components: { CodeSnippet },
})
export default class ProteanTabsRoute extends Vue {
    demoValue = 'tab1';
    demoName = 'demo-name';
}
