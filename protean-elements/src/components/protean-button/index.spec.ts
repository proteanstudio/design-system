import { newSpecPage } from '@stencil/core/testing';
import { ProteanButton } from '.';

describe('protean-button', () => {
    it('renders', async () => {
        const { root, rootInstance } = await newSpecPage({
            components: [ProteanButton],
            html: '<protean-button>Button Text</protean-button>',
        });

        expect(rootInstance.hostElement).toEqual(root);

        const button = root.shadowRoot.querySelector('button');
        expect(button.type).toEqual('button');
        expect(button).not.toHaveAttribute('disabled');
    });

    it('passes properties to button', async () => {
        const { root, waitForChanges } = await newSpecPage({
            components: [ProteanButton],
            html: `<protean-button type="submit" disabled>Button Text</protean-button>`,
        });
        const button = root.shadowRoot.querySelector('button');
        expect(button.type).toEqual('submit');
        expect(button).toHaveAttribute('disabled');

        root.a11yLabel = 'button aria-label';
        await waitForChanges();

        expect(button).toEqualAttribute('aria-label', 'button aria-label');
    });

    it('delegates focus to button', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanButton],
            html: `<protean-button>Button Text</protean-button>`,
        });
        const button = root.shadowRoot.querySelector('button');
        const focusMock = jest.fn();
        button.focus = focusMock;

        root.dispatchEvent(new Event('focus'));
        await waitForChanges();
        expect(focusMock).toHaveBeenCalledTimes(1);

        rootInstance.delegateFocus(new Event('focus'));
        await waitForChanges();
        expect(focusMock).toHaveBeenCalledTimes(1);
    });
});
