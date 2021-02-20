import { newSpecPage } from '@stencil/core/testing';
import { ProteanClickElsewhere } from '.';

describe('protean-option', () => {
    it.skip('renders base content', async () => {
        const { root } = await newSpecPage({
            components: [ProteanClickElsewhere],
            html: '<protean-click-elsewhere>Label 1</protean-click-elsewhere>',
        });
    });
});
