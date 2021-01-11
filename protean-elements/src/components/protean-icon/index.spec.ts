import { newSpecPage } from '@stencil/core/testing';
import { ProteanIcon } from '.';

describe('protean-icon', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [ProteanIcon],
            html: '<protean-icon type="status-info"></protean-icon>',
        });

        const svg = root.shadowRoot.querySelector('svg');

        expect(svg.namespaceURI).toEqual('http://www.w3.org/2000/svg');
        expect(svg).toEqualAttribute('viewBox', '0 0 24 24');
        expect(svg).toEqualAttribute('focusable', 'false');
        expect(svg).toEqualAttribute('aria-hidden', 'true');

        const renderedIcon = svg.querySelector('g');

        expect(renderedIcon.childElementCount).toEqual(3);
        expect(renderedIcon).toEqualAttribute('transform', 'translate(1 1)');
    });

    it('renders custom icons with type="custom" and use defined', async () => {
        const { root, waitForChanges } = await newSpecPage({
            components: [ProteanIcon],
            html: '<protean-icon type="custom"></protean-icon>',
        });

        let svg = root.shadowRoot.querySelector('svg');

        expect(svg.childElementCount).toEqual(0);

        root.use = 'broken-path-to/icon.svg#custom-icon';
        await waitForChanges();
        svg = root.shadowRoot.querySelector('svg');

        expect(svg.childElementCount).toEqual(1);

        const useElement = svg.querySelector('use');
        expect(useElement).toEqualAttribute(
            'href',
            'broken-path-to/icon.svg#custom-icon',
        );
    });

    it('returns null icon when one not found in icon dict', async () => {
        const rootInstance = new ProteanIcon();

        rootInstance.type = 'foo';
        expect(rootInstance.icon).toEqual(null);
    });
});
