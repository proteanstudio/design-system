import { newE2EPage } from '@stencil/core/testing';

describe('protean-click-elsewhere', () => {
    it.skip('renders', async () => {
        const page = await newE2EPage({
            html: '<protean-click-elsewhere>Label 1</protean-click-elsewhere>',
        });
    });
});
