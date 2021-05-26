import dispatchEvent from '@/test-helpers/dispatchEvent';
import { newE2EPage } from '@stencil/core/testing';

describe('protean-click-elsewhere', () => {
    it('emits change event when child focused and external mousedown occurs', async () => {
        const page = await newE2EPage({
            html: '<protean-click-elsewhere><button>Click elsewhere focal</button></protean-click-elsewhere>',
        });
        const { find, waitForChanges } = page;

        const clickElsewhere = await find('protean-click-elsewhere');
        const changeSpy = await clickElsewhere.spyOnEvent('change');
        const button = await find('button');

        await button.focus();

        await page.evaluate(() => {
            document.body.dispatchEvent(
                new MouseEvent('mousedown', { bubbles: true }),
            );
        });
        await waitForChanges();

        expect(changeSpy).toHaveReceivedEventTimes(1);
    });

    it('does not emit change event when child focused and internal mousedown occurs', async () => {
        const page = await newE2EPage({
            html: '<protean-click-elsewhere><button>Click elsewhere focal</button><span>More nested content</span></protean-click-elsewhere>',
        });

        const clickElsewhere = await page.find('protean-click-elsewhere');
        const changeSpy = await clickElsewhere.spyOnEvent('change');
        const button = await page.find('button');

        await button.focus();

        await dispatchEvent(page, 'protean-click-elsewhere span', 'mousedown', {
            bubbles: true,
        });

        expect(changeSpy).toHaveReceivedEventTimes(0);
    });

    it('does not emit change event when child not focused', async () => {
        const page = await newE2EPage({
            html: '<protean-click-elsewhere><button>Click elsewhere focal</button></protean-click-elsewhere>',
        });

        const clickElsewhere = await page.find('protean-click-elsewhere');
        const changeSpy = await clickElsewhere.spyOnEvent('change');

        await dispatchEvent(
            page,
            'protean-click-elsewhere button',
            'mousedown',
            {
                bubbles: true,
            },
        );

        expect(changeSpy).toHaveReceivedEventTimes(0);
    });
});
