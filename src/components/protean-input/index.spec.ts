import { newSpecPage } from '@stencil/core/testing';
import { ProteanInput } from '.';

describe('protean-input', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [ProteanInput],
            html: '<protean-button>Button Text</protean-button>',
        });
    });

    it('passes properties to button', async () => {
        const { root } = await newSpecPage({
            components: [ProteanInput],
            html: `<protean-button type="submit" disabled>Button Text</protean-button>`,
        });
    });
});
