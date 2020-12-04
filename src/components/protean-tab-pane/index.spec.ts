import { newSpecPage } from '@stencil/core/testing';
import { ProteanTabPane } from '.';

describe('protean-tab-pane', () => {
    it('renders', async () => {
        const { root, waitForChanges } = await newSpecPage({
            components: [ProteanTabPane],
            html:
                '<protean-tab-pane label="Pane 1" value="test-value" name="test-name"> Pane Content </protean-tab-pane>',
        });

        root.guid = 1000;
        root.index = 0;
        await waitForChanges();

        let innerPaneElement = root.shadowRoot.querySelector('.tab-pane');

        expect(innerPaneElement).toEqualAttribute('role', 'tab-panel');
        expect(innerPaneElement).toEqualAttribute('id', 'tab-pane-1000-0');
        expect(innerPaneElement).toEqualAttribute('aria-label', 'Pane 1');
        expect(innerPaneElement).toEqualAttribute('tabindex', '0');
        expect(innerPaneElement).toHaveAttribute('hidden');

        root.selected = true;
        await waitForChanges();
        expect(innerPaneElement).not.toHaveAttribute('hidden');
    });

    it('defaults name property', async () => {
        const { root } = await newSpecPage({
            components: [ProteanTabPane],
            html:
                '<protean-tab-pane label="Pane 1" value="test-value"> Pane Content </protean-tab-pane>',
        });

        expect(root.name).toEqual('');
    });
});
