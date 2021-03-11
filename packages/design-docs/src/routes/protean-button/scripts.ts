import { Options, Vue } from 'vue-class-component';
import CodeSnippet from '@/components/code-snippet/index.vue';

@Options({
    components: { CodeSnippet },
})
export default class ProteanButtonRoute extends Vue {
    demoVariant = 'primary';
    demoDisabled = false;
    get demoContent(): string {
        if (this.demoVariant === 'icon') {
            return '<protean-icon type="chevron-down"></protean-icon>';
        }

        return 'Button text';
    }

    get demoAriaLabel(): string | undefined {
        if (this.demoVariant === 'icon') return 'Button aria-label';

        return;
    }
}
