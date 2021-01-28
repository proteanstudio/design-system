import { newSpecPage } from '@stencil/core/testing';
import { ProteanTabContainer } from '.';
import fakeMutationObserver from '@/test-helpers/mocks/MutationObserver';
import { ProteanTabPane } from '@/components/protean-tab-pane';

describe('protean-tab-container', () => {
    let teardown: VoidFunction;
    beforeEach(function () {
        teardown = fakeMutationObserver();
    });

    afterEach(function () {
        teardown();
    });

    it('renders tab controls with correct properties', async () => {
        const { root, rootInstance } = await newSpecPage({
            components: [ProteanTabContainer, ProteanTabPane],
            html: `
                <protean-tab-container name="test-name" value="2">
                    <protean-tab-pane label="Pane 1" value="1" name="test-name">
                        Pane 1 Content
                    </protean-tab-pane>
                    <protean-tab-pane label="Pane 2" value="2" name="test-name">
                        Pane 2 Content
                    </protean-tab-pane>
                </protean-tab-container>`,
        });

        expect(rootInstance.guid).toEqual(1000);

        const tabList = root.shadowRoot.querySelector('.tab-list');
        expect(tabList).toEqualAttribute('role', 'tablist');

        const tabControls = root.shadowRoot.querySelectorAll<HTMLButtonElement>(
            '.tab-list button',
        );
        expect(tabControls).toHaveLength(2);

        const [tabControl1, tabControl2] = Array.from(tabControls);

        expect(tabControl1).toEqualAttribute('role', 'tab');
        expect(tabControl1.type).toEqual('button');
        expect(tabControl1).toEqualAttribute('aria-selected', 'false');
        expect(tabControl1.tabIndex).toEqual(-1);
        expect(tabControl1.dataset.value).toEqual('1');
        expect(tabControl1).toEqualAttribute(
            'aria-controls',
            'tab-pane-1000-0',
        );
        expect(tabControl1.id).toEqual('tab-1000-0');

        expect(tabControl2).toEqualAttribute('role', 'tab');
        expect(tabControl2.type).toEqual('button');
        expect(tabControl2).toEqualAttribute('aria-selected', 'true');
        expect(tabControl2.tabIndex).toEqual(0);
        expect(tabControl2.dataset.value).toEqual('2');
        expect(tabControl2).toEqualAttribute(
            'aria-controls',
            'tab-pane-1000-1',
        );
        expect(tabControl2.id).toEqual('tab-1000-1');
    });

    it('binds properties to rendered panes of matching name', async () => {
        const { root, rootInstance } = await newSpecPage({
            components: [ProteanTabContainer, ProteanTabPane],
            html: `
                <protean-tab-container name="test-name" value="2">
                    <protean-tab-pane label="Pane 1" value="1" name="test-name">
                        Pane 1 Content
                    </protean-tab-pane>
                    <protean-tab-pane label="Pane 2" value="2" name="test-name">
                        Pane 2 Content
                    </protean-tab-pane>
                </protean-tab-container>`,
        });

        const [tabPane1, tabPane2] = Array.from(
            root.querySelectorAll('protean-tab-pane'),
        );

        expect(tabPane1.selected).toEqual(false);
        expect(tabPane1.guid).toEqual(rootInstance.guid);
        expect(tabPane1.index).toEqual(0);

        expect(tabPane2.selected).toEqual(true);
        expect(tabPane2.guid).toEqual(rootInstance.guid);
        expect(tabPane2.index).toEqual(1);
    });

    it('ignores tab panes with different names', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanTabContainer, ProteanTabPane],
            html: `
                <protean-tab-container name="test-name" value="2">
                    <protean-tab-pane label="Pane 1" value="1" name="test-name">
                        Pane 1 Content
                    </protean-tab-pane>
                    <protean-tab-pane label="Pane 2" value="2" name="test-name">
                        Pane 2 Content
                    </protean-tab-pane>
                </protean-tab-container>`,
        });

        const tabPanes = root.querySelectorAll('protean-tab-pane');
        expect(tabPanes).toEqual(rootInstance.tabPanes);
        expect(rootInstance.tabPanes).toHaveLength(2);

        root.name = 'foo';
        await waitForChanges();

        expect(rootInstance.tabPanes).toHaveLength(0);
    });

    it('falls back to first tab value if none provided', () => {
        const rootInstance = new ProteanTabContainer();
        rootInstance.value = 'test';
        rootInstance.tabs = [
            {
                label: 'label 1',
                value: 'foo',
                index: 0,
            },
            {
                label: 'label 2',
                value: 'bar',
                index: 1,
            },
        ];

        expect(rootInstance.selectedValue).toEqual('foo');

        rootInstance.tabs = [];

        expect(rootInstance.selectedValue).toEqual('');

        rootInstance.tabs = undefined;

        expect(rootInstance.selectedValue).toEqual('test');
    });

    it('fires default change handler if no onchange passed', async () => {
        const { root, waitForChanges } = await newSpecPage({
            components: [ProteanTabContainer, ProteanTabPane],
            html: `
                <protean-tab-container name="test-name" value="2">
                    <protean-tab-pane label="Pane 1" value="1" name="test-name">
                        Pane 1 Content
                    </protean-tab-pane>
                    <protean-tab-pane label="Pane 2" value="2" name="test-name">
                        Pane 2 Content
                    </protean-tab-pane>
                </protean-tab-container>`,
        });

        expect(root.value).toEqual('2');

        const tabControl1 = root.shadowRoot.querySelector<HTMLButtonElement>(
            '.tab-list button:first-child',
        );

        const focusMock = jest.fn();
        tabControl1.focus = focusMock;
        await waitForChanges();

        root.dispatchEvent(
            new CustomEvent('change', { detail: { value: '1' } }),
        );
        await waitForChanges();

        expect(root.value).toEqual('2');
        expect(focusMock).toHaveBeenCalledTimes(0);

        root.onchange = undefined;
        root.dispatchEvent(
            new CustomEvent('change', { detail: { value: '1' } }),
        );
        await waitForChanges();

        expect(root.value).toEqual('1');
        expect(focusMock).toHaveBeenCalledTimes(1);
    });

    it('emits change event on tab click', async () => {
        const { root, waitForChanges } = await newSpecPage({
            components: [ProteanTabContainer, ProteanTabPane],
            html: `
                <protean-tab-container name="test-name" value="2">
                    <protean-tab-pane label="Pane 1" value="1" name="test-name">
                        Pane 1 Content
                    </protean-tab-pane>
                    <protean-tab-pane label="Pane 2" value="2" name="test-name">
                        Pane 2 Content
                    </protean-tab-pane>
                </protean-tab-container>`,
        });

        const tabControl1 = root.shadowRoot.querySelector<HTMLButtonElement>(
            '.tab-list button:first-child',
        );
        tabControl1.focus = () => {
            /*  */
        };

        const changeMock = jest.fn();

        root.onchange = undefined;
        root.addEventListener('change', changeMock);
        await waitForChanges();

        tabControl1.dispatchEvent(new MouseEvent('click'));
        await waitForChanges();

        expect(changeMock).toHaveBeenCalledTimes(1);
        expect(root.value).toEqual('1');

        tabControl1.dispatchEvent(new MouseEvent('click'));
        await waitForChanges();

        expect(changeMock).toHaveBeenCalledTimes(1); //does not fire again
    });

    it('emits change event on tab arrow press', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanTabContainer, ProteanTabPane],
            html: `
                <protean-tab-container name="test-name" value="1">
                    <protean-tab-pane label="Pane 1" value="1" name="test-name">
                        Pane 1 Content
                    </protean-tab-pane>
                    <protean-tab-pane label="Pane 2" value="2" name="test-name">
                        Pane 2 Content
                    </protean-tab-pane>
                </protean-tab-container>`,
        });

        const [tabControl1, tabControl2] = Array.from(
            root.shadowRoot.querySelectorAll<HTMLButtonElement>(
                '.tab-list button',
            ),
        );

        root.onchange = undefined;
        const changeMock = jest.fn();
        root.addEventListener('change', changeMock);

        const tab1FocusMock = jest.fn();
        tabControl1.focus = tab1FocusMock;

        const tab2FocusMock = jest.fn();
        tabControl2.focus = tab2FocusMock;

        await waitForChanges();

        tabControl1.dispatchEvent(
            new KeyboardEvent('keyup', { key: 'ArrowRight' }),
        );
        await waitForChanges();

        expect(changeMock).toHaveBeenCalledTimes(1);
        expect(root.value).toEqual('2');
        expect(tab1FocusMock).toHaveBeenCalledTimes(0);
        expect(tab2FocusMock).toHaveBeenCalledTimes(1);

        tabControl2.dispatchEvent(
            new KeyboardEvent('keyup', { key: 'ArrowRight' }),
        );
        await waitForChanges();

        expect(changeMock).toHaveBeenCalledTimes(2);
        expect(root.value).toEqual('1');
        expect(tab1FocusMock).toHaveBeenCalledTimes(1);
        expect(tab2FocusMock).toHaveBeenCalledTimes(1);

        tabControl1.dispatchEvent(
            new KeyboardEvent('keyup', { key: 'ArrowLeft' }),
        );
        await waitForChanges();

        expect(changeMock).toHaveBeenCalledTimes(3);
        expect(root.value).toEqual('2');
        expect(tab1FocusMock).toHaveBeenCalledTimes(1);
        expect(tab2FocusMock).toHaveBeenCalledTimes(2);

        tabControl2.dispatchEvent(
            new KeyboardEvent('keyup', { key: 'ArrowLeft' }),
        );
        await waitForChanges();

        expect(changeMock).toHaveBeenCalledTimes(4);
        expect(root.value).toEqual('1');
        expect(tab1FocusMock).toHaveBeenCalledTimes(2);
        expect(tab2FocusMock).toHaveBeenCalledTimes(2);

        const moveToAdjacentTabMock = jest.fn();
        rootInstance.moveToAdjacentTab = moveToAdjacentTabMock;

        tabControl2.dispatchEvent(new KeyboardEvent('keyup', { key: 'foo' }));
        await waitForChanges();

        //does nothing
        expect(moveToAdjacentTabMock).toHaveBeenCalledTimes(0);
        expect(changeMock).toHaveBeenCalledTimes(4);
        expect(root.value).toEqual('1');
        expect(tab1FocusMock).toHaveBeenCalledTimes(2);
        expect(tab2FocusMock).toHaveBeenCalledTimes(2);
    });

    it('does not render tab controls without tab-panes', async () => {
        const { root } = await newSpecPage({
            components: [ProteanTabContainer, ProteanTabPane],
            html: `
                <protean-tab-container name="test-name" value="2"></protean-tab-container>`,
        });

        const tabControls = root.shadowRoot.querySelectorAll(
            '.tab-list button',
        );

        expect(tabControls).toHaveLength(0);
    });

    it('does not render tab controls with only one tab-pane', async () => {
        const { root } = await newSpecPage({
            components: [ProteanTabContainer, ProteanTabPane],
            html: `
                <protean-tab-container name="test-name" value="2">
                    <protean-tab-pane label="Pane 1" value="1" name="test-name">
                        Pane 1 Content
                    </protean-tab-pane>
                </protean-tab-container>`,
        });

        const tabControls = root.shadowRoot.querySelectorAll(
            '.tab-list button',
        );

        expect(tabControls).toHaveLength(0);
    });

    it('disconnects mutationobserver on teardown', async () => {
        const { root, rootInstance, waitForChanges } = await newSpecPage({
            components: [ProteanTabContainer, ProteanTabPane],
            html: `
                <protean-tab-container name="test-name" value="2"></protean-tab-container>`,
        });

        const disconnectMock = jest.fn();
        rootInstance.observer.disconnect = disconnectMock;

        root.remove();
        await waitForChanges();

        expect(disconnectMock).toHaveBeenCalledTimes(1);
    });
});
