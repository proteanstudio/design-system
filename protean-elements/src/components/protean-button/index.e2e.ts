import dispatchEvent from '@/test-helpers/dispatchEvent';
import { newE2EPage } from '@stencil/core/testing';

describe('protean-button', () => {
    it('renders', async () => {
        const page = await newE2EPage({
            html: '<protean-button>Button Text</protean-button>',
        });

        const slotContent = await page.$eval('protean-button', button => {
            return button.shadowRoot.querySelector('slot').assignedNodes()[0]
                .textContent;
        });

        expect(slotContent).toEqual('Button Text');
    });

    it('binds type property', async () => {
        const { find, waitForChanges } = await newE2EPage({
            html: '<protean-button>Button Text</protean-button>',
        });

        const proteanButton = await find('protean-button');
        const innerButton = await find('protean-button >>> button');

        expect(innerButton).toEqualAttribute('type', 'button');

        proteanButton.setProperty('type', 'submit');
        await waitForChanges();

        expect(innerButton).toEqualAttribute('type', 'submit');
    });

    it('binds disabled property', async () => {
        const { find, waitForChanges } = await newE2EPage({
            html: '<protean-button>Button Text</protean-button>',
        });

        const proteanButton = await find('protean-button');
        const innerButton = await find('protean-button >>> button');

        expect(innerButton).not.toHaveAttribute('disabled');

        proteanButton.setProperty('disabled', true);
        await waitForChanges();

        expect(innerButton).toHaveAttribute('disabled');
    });

    it('binds aria-label', async () => {
        const { find, waitForChanges } = await newE2EPage({
            html: '<protean-button>Button Text</protean-button>',
        });

        const proteanButton = await find('protean-button');
        const innerButton = await find('protean-button >>> button');

        expect(innerButton).not.toHaveAttribute('aria-label');

        proteanButton.setProperty('a11yLabel', 'button aria-label');
        await waitForChanges();

        expect(innerButton).toEqualAttribute('aria-label', 'button aria-label');
    });

    it('delegates focus', async () => {
        const page = await newE2EPage({
            html: '<protean-button>Button Text</protean-button>',
        });

        await dispatchEvent(page, 'protean-button', 'focus');

        const { button, activeElement } = await page.$eval(
            'protean-button',
            element => {
                const button = element.shadowRoot.querySelector('button');
                const activeElement = element.shadowRoot.activeElement;

                return { button, activeElement };
            },
        );

        expect(activeElement).toEqual(button);
    });
});
