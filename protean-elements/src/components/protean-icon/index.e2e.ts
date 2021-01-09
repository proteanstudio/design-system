import { newE2EPage } from '@stencil/core/testing';
import suppressConsoleMethod from '../../test-helpers/suppressConsoleError';

describe('protean-icon', () => {
    it('renders and pulls from icon library', async () => {
        const { find } = await newE2EPage({
            html: '<protean-icon type="status-info"></protean-icon>',
        });

        const svg = await find('protean-icon >>> svg');

        expect(await svg.getProperty('namespaceURI')).toEqual(
            'http://www.w3.org/2000/svg',
        );
        expect(svg).toEqualAttribute('viewBox', '0 0 24 24');
        expect(svg).toEqualAttribute('focusable', 'false');
        expect(svg).toEqualAttribute('aria-hidden', 'true');

        const iconMarkup = await find('protean-icon >>> svg g');

        expect(iconMarkup).not.toBeNull();
        expect(iconMarkup).toEqualAttribute('transform', 'translate(1 1)');
    });

    it('allows custom icons with type="custom" and use defined', async () => {
        const errorMock = jest.fn();
        const restoreConsoleError = suppressConsoleMethod('error', errorMock);

        const { find, findAll, waitForChanges } = await newE2EPage({
            html: '<protean-icon type="custom"></protean-icon>',
        });

        const svgChildren = await findAll('protean-icon >>> svg *');

        expect(svgChildren).toHaveLength(0);

        const icon = await find('protean-icon');
        icon.setProperty('use', 'broken-path-to/icon.svg#custom-icon');
        await waitForChanges();

        const useElement = await find('protean-icon >>> svg use');

        expect(useElement).not.toBeNull();
        expect(useElement).toEqualAttribute(
            'xlink:href',
            'broken-path-to/icon.svg#custom-icon',
        );
        expect(errorMock).toBeCalledTimes(2); // 404 and requestFailed

        restoreConsoleError();
    });
});
