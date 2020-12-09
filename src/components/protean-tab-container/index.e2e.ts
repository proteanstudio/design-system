import { newE2EPage } from '@stencil/core/testing';
import dispatchEvent from '../../test-helpers/dispatchEvent';

describe('protean-tab-container', () => {
    it('renders tab list and correctly binds selected state', async () => {
        const { findAll } = await newE2EPage({
            html: `
                <protean-tab-container value="2">
                    <protean-tab-pane label="Pane 1" value="1">Pane 1 Content</protean-tab-pane>
                    <protean-tab-pane label="Pane 2" value="2">Pane 2 Content</protean-tab-pane>
                </protean-tab-container>
            `,
        });

        const tabControls = await findAll(
            'protean-tab-container >>> .tab-list button',
        );
        expect(tabControls).toHaveLength(2);

        const [tabControl1, tabControl2] = tabControls;

        expect(tabControl1).toEqualAttribute('role', 'tab');
        expect(tabControl1).toEqualAttribute('type', 'button');
        expect(tabControl1).toEqualAttribute('aria-selected', 'false');
        expect(tabControl1).toEqualAttribute('tabindex', '-1');
        expect(tabControl1).toEqualAttribute('data-value', '1');
        expect(tabControl1.textContent).toEqual('Pane 1');

        expect(tabControl2).toEqualAttribute('role', 'tab');
        expect(tabControl2).toEqualAttribute('type', 'button');
        expect(tabControl2).toEqualAttribute('aria-selected', 'true');
        expect(tabControl2).toEqualAttribute('tabindex', '0');
        expect(tabControl2).toEqualAttribute('data-value', '2');
        expect(tabControl2.textContent).toEqual('Pane 2');
    });

    it('updates tab list on tab pane mutations', async () => {
        const page = await newE2EPage({
            html: `
                <protean-tab-container value="2">
                    <protean-tab-pane label="Pane 1" value="1">Pane 1 Content</protean-tab-pane>
                    <protean-tab-pane label="Pane 2" value="2">Pane 2 Content</protean-tab-pane>
                </protean-tab-container>
            `,
        });
        const { findAll, waitForChanges } = page;

        let tabControls = await findAll(
            'protean-tab-container >>> .tab-list button',
        );
        expect(tabControls).toHaveLength(2);

        let [tabControl1, tabControl2] = tabControls;

        expect(tabControl1.textContent).toEqual('Pane 1');
        expect(tabControl2.textContent).toEqual('Pane 2');

        const [tabPane1, tabPane2] = await findAll('protean-tab-pane');

        tabPane1.setProperty('label', 'Updated Pane 1 label');
        tabPane2.setProperty('label', 'Updated Pane 2 label');
        await waitForChanges();

        [tabControl1, tabControl2] = await findAll(
            'protean-tab-container >>> .tab-list button',
        );

        expect(tabControl1.textContent).toEqual('Updated Pane 1 label');
        expect(tabControl2.textContent).toEqual('Updated Pane 2 label');

        await page.$eval('protean-tab-pane:last-child', element => {
            element.remove();
        });
        await waitForChanges();

        tabControls = await findAll(
            'protean-tab-container >>> .tab-list button',
        );
        expect(tabControls).toHaveLength(0); // does not render list with < 2 tabs
    });

    it('binds data to child panes', async () => {
        const { findAll } = await newE2EPage({
            html: `
                <protean-tab-container value="2">
                    <protean-tab-pane label="Pane 1" value="1">Pane 1 Content</protean-tab-pane>
                    <protean-tab-pane label="Pane 2" value="2">Pane 2 Content</protean-tab-pane>
                </protean-tab-container>
            `,
        });

        const tabControls = await findAll(
            'protean-tab-container >>> .tab-list button',
        );
        const tabPanes = await findAll(
            'protean-tab-container protean-tab-pane',
        );

        const [tabPane1, tabPane2] = tabPanes;

        expect(tabControls).toHaveLength(tabPanes.length);

        expect(await tabPane1.getProperty('selected')).toEqual(false);
        expect(await tabPane1.getProperty('index')).toEqual(0);

        expect(await tabPane2.getProperty('selected')).toEqual(true);
        expect(await tabPane2.getProperty('index')).toEqual(1);
        expect(await tabPane1.getProperty('guid')).toEqual(
            await tabPane2.getProperty('guid'),
        );
    });

    it('emits change event on tab click', async () => {
        const page = await newE2EPage({
            html: `
                <protean-tab-container value="2">
                    <protean-tab-pane label="Pane 1" value="1">Pane 1 Content</protean-tab-pane>
                    <protean-tab-pane label="Pane 2" value="2">Pane 2 Content</protean-tab-pane>
                </protean-tab-container>
            `,
        });

        const tabContainer = await page.find('protean-tab-container');
        const changeSpy = await tabContainer.spyOnEvent('change');

        await dispatchEvent(
            page,
            ['protean-tab-container', '.tab-list button:first-child'],
            'click',
        );

        expect(changeSpy).toHaveReceivedEventDetail({ value: '1' });
        expect(changeSpy).toHaveReceivedEventTimes(1);

        await dispatchEvent(
            page,
            ['protean-tab-container', '.tab-list button:last-child'],
            'click',
        );

        expect(changeSpy).toHaveReceivedEventDetail({ value: '2' });
        expect(changeSpy).toHaveReceivedEventTimes(2);

        // Ignores repeat click
        await dispatchEvent(
            page,
            ['protean-tab-container', '.tab-list button:last-child'],
            'click',
        );

        expect(changeSpy).toHaveReceivedEventTimes(2);
    });

    it('emits change event in the correct direction on arrow press', async () => {
        const page = await newE2EPage({
            html: `
                <protean-tab-container value="2">
                    <protean-tab-pane label="Pane 1" value="1">Pane 1 Content</protean-tab-pane>
                    <protean-tab-pane label="Pane 2" value="2">Pane 2 Content</protean-tab-pane>
                </protean-tab-container>
            `,
        });

        const tabContainer = await page.find('protean-tab-container');
        const changeSpy = await tabContainer.spyOnEvent('change');

        const [tabControl1, tabControl2] = await page.findAll(
            'protean-tab-container >>> .tab-list button',
        );

        const firstTabFocus = await tabControl1.spyOnEvent('focus');
        const secondTabFocus = await tabControl2.spyOnEvent('focus');

        await dispatchEvent(
            page,
            ['protean-tab-container', '.tab-list button:last-child'],
            'keyup',
            { key: 'ArrowLeft' },
        );

        expect(changeSpy).toHaveReceivedEventDetail({ value: '1' });
        expect(changeSpy).toHaveReceivedEventTimes(1);
        expect(firstTabFocus).toHaveReceivedEventTimes(1);

        await dispatchEvent(
            page,
            ['protean-tab-container', '.tab-list button:first-child'],
            'keyup',
            { key: 'ArrowLeft' },
        );

        expect(changeSpy).toHaveReceivedEventDetail({ value: '2' });
        expect(changeSpy).toHaveReceivedEventTimes(2);
        expect(secondTabFocus).toHaveReceivedEventTimes(1);

        await dispatchEvent(
            page,
            ['protean-tab-container', '.tab-list button:last-child'],
            'keyup',
            { key: 'ArrowRight' },
        );

        expect(changeSpy).toHaveReceivedEventDetail({ value: '1' });
        expect(changeSpy).toHaveReceivedEventTimes(3);
        expect(firstTabFocus).toHaveReceivedEventTimes(2);

        await dispatchEvent(
            page,
            ['protean-tab-container', '.tab-list button:first-child'],
            'keyup',
            { key: 'ArrowRight' },
        );

        expect(changeSpy).toHaveReceivedEventDetail({ value: '2' });
        expect(changeSpy).toHaveReceivedEventTimes(4);
        expect(secondTabFocus).toHaveReceivedEventTimes(2);
    });

    it('automatically sets value and focuses active tab with default change handler', async () => {
        const page = await newE2EPage({
            html: `
                <protean-tab-container value="2">
                    <protean-tab-pane label="Pane 1" value="1">Pane 1 Content</protean-tab-pane>
                    <protean-tab-pane label="Pane 2" value="2">Pane 2 Content</protean-tab-pane>
                </protean-tab-container>
            `,
        });

        const tabContainer = await page.find('protean-tab-container');
        const changeSpy = await tabContainer.spyOnEvent('change');

        const tabControl1 = await page.find(
            'protean-tab-container >>> .tab-list button:first-child',
        );

        const firstTabFocus = await tabControl1.spyOnEvent('focus');

        await dispatchEvent(
            page,
            ['protean-tab-container', '.tab-list button:last-child'],
            'keyup',
            { key: 'ArrowLeft' },
        );

        expect(changeSpy).toHaveReceivedEventDetail({ value: '1' });
        expect(changeSpy).toHaveReceivedEventTimes(1);
        expect(tabContainer).toEqualAttribute('value', '1');
        expect(firstTabFocus).toHaveReceivedEventTimes(1);

        await page.$eval(
            'protean-tab-container',
            (element: HTMLProteanTabContainerElement) => {
                element.onchange = () => {}; //override default onchange
                element.value = '2';
            },
        );
        await page.waitForChanges();

        await dispatchEvent(
            page,
            ['protean-tab-container', '.tab-list button:last-child'],
            'keyup',
            { key: 'ArrowLeft' },
        );

        expect(changeSpy).toHaveReceivedEventDetail({ value: '1' });
        expect(changeSpy).toHaveReceivedEventTimes(2);
        expect(tabContainer).toEqualAttribute('value', '2'); // no change
        expect(firstTabFocus).toHaveReceivedEventTimes(1); // no change
    });
});
