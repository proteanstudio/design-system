import { Options, Vue } from 'vue-class-component';
import CodeSnippet from '@/components/code-snippet/index.vue';

@Options({
    components: { CodeSnippet },
})
export default class ProteanSelect extends Vue {
    demoChecked = false;
    demoIsToggle = false;
    demoIsRightAligned = false;
    demoDisabled = false;
    demoIndeterminate = false;

    get demoVariant(): string | undefined {
        if (this.demoIsToggle) return 'toggle';

        return;
    }
    get demoAlignment(): string {
        return this.demoIsRightAligned ? 'right' : 'left';
    }
}
