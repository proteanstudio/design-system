import { newE2EPage } from '@stencil/core/testing';

describe('protean-tab-pane', () => {
    it('renders base state', async () => {
        const { waitForChanges, find } = await newE2EPage({
            html:
                '<protean-tab-pane label="Pane 1" value="test-value" name="test-name"> Pane Content </protean-tab-pane>',
        });

        const paneElement = await find('protean-tab-pane');
        const innerPaneElement = await find('protean-tab-pane >>> .tab-pane');

        paneElement.setProperty('guid', 1000);
        paneElement.setProperty('index', 0);

        await waitForChanges();

        expect(innerPaneElement).toEqualAttribute('role', 'tabpanel');
        expect(innerPaneElement).toEqualAttribute('id', 'tab-pane-1000-0');
        expect(innerPaneElement).toEqualAttribute('aria-label', 'Pane 1');
        expect(innerPaneElement).toEqualAttribute('tabindex', '0');
        expect(innerPaneElement).toHaveAttribute('hidden');
    });

    it('shows selected', async () => {
        const { waitForChanges, find } = await newE2EPage({
            html:
                '<protean-tab-pane label="Pane 1" value="test-value" name="test-name"> Pane Content </protean-tab-pane>',
        });

        const paneElement = await find('protean-tab-pane');
        const innerPaneElement = await find('protean-tab-pane >>> .tab-pane');

        paneElement.setProperty('selected', true);
        paneElement.setProperty('guid', 1000);
        paneElement.setProperty('index', 0);
        await waitForChanges();

        expect(innerPaneElement).not.toHaveAttribute('hidden');

        paneElement.setProperty('selected', false);
        await waitForChanges();
        expect(innerPaneElement).toHaveAttribute('hidden');
    });
});
