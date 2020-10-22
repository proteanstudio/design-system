import { newSpecPage } from '@stencil/core/testing';
import { ProteanTabPane } from '.';

describe('protean-input', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [ProteanTabPane],
            html: '<protean-button>Button Text</protean-button>',
        });
        expect(root).toEqualHtml(`
      <protean-button>
        <mock:shadow-root>
          <button type="button">
              <div>
                    Button Text
              </div>
          </button>
        </mock:shadow-root>
      </protean-button>
    `);
    });

    it('passes properties to button', async () => {
        const { root } = await newSpecPage({
            components: [ProteanTabPane],
            html: `<protean-button type="submit" disabled>Button Text</protean-button>`,
        });
        expect(root).toEqualHtml(`
      <protean-button  type="submit" disabled>
        <mock:shadow-root>
          <button type="submit" disabled>
              <div>
                Button Text
              </div>
          </button>
        </mock:shadow-root>
      </protean-button>
    `);
    });
});
