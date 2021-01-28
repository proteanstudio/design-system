import { newSpecPage } from '@stencil/core/testing';
import { ProteanButton } from '.';

describe('protean-button', () => {
    it('renders', async () => {
        const { root: proteanButton } = await newSpecPage({
            components: [ProteanButton],
            html: '<protean-button>Button Text</protean-button>',
        });
        const button = proteanButton.shadowRoot.querySelector('button');
        expect(button.type).toEqual('button');
        expect(button).not.toHaveAttribute('disabled');
    });

    it('passes properties to button', async () => {
        const { root: proteanButton } = await newSpecPage({
            components: [ProteanButton],
            html: `<protean-button type="submit" disabled>Button Text</protean-button>`,
        });
        const button = proteanButton.shadowRoot.querySelector('button');
        expect(button.type).toEqual('submit');
        expect(button).toHaveAttribute('disabled');
    });
});
