import { Options, Vue } from 'vue-class-component';
import CodeSnippet from '@/components/code-snippet/index.vue';

@Options({
    components: { CodeSnippet },
})
export default class ProteanButton extends Vue {
    demoVariant = 'primary';
    demoDisabled = false;
    get demoContent(): string {
        if (this.demoVariant === 'icon') {
            return '<protean-icon type="chevron-down"></protean-icon>';
        }

        return 'Button text';
    }
}
