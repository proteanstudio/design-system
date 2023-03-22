<style lang="scss" src="./styles.scss"></style>
<script setup lang="ts">
import CodeSnippet from '@/components/code-snippet/index.vue';
import { ref } from 'vue';

const demoValue = ref('tab1');
const demoName = ref('demo-name');
</script>
<template>
    <h1>Tabs</h1>
    <p>
        Tabs allow the user to alternate between distinct groups of related
        content within a single context.
    </p>

    <section class="overview-content">
        <h2 data-in-page-anchor="overview">Overview</h2>
        <div class="overview-demo no-controls">
            <protean-tab-container
                :name="demoName"
                :value="demoValue"
                @change="demoValue = $event.detail.value"
            >
                <protean-tab-pane :name="demoName" label="Tab 1" value="tab1">
                    <p>Tab 1 Content</p>
                </protean-tab-pane>
                <protean-tab-pane :name="demoName" label="Tab 2" value="tab2">
                    <p>Tab 2 Content</p>
                </protean-tab-pane>
                <protean-tab-pane :name="demoName" label="Tab 3" value="tab3">
                    <p>Tab 3 Content</p>
                </protean-tab-pane>
            </protean-tab-container>
        </div>
        <div class="overview-demo-snippet">
            <CodeSnippet :substitutions="[demoName, demoValue]">
                {{`<protean-tab-container name="{0}" value="{1}">
                    <protean-tab-pane name="{0}" label="Tab 1" value="tab1">
                        <p>Tab 1 Content</p>
                        {2}
                    </protean-tab-pane>
                    <protean-tab-pane name="{0}" label="Tab 2" value="tab2">
                        <p>Tab 2 Content</p>
                    </protean-tab-pane>
                    <protean-tab-pane name="{0}" label="Tab 3" value="tab3">
                        <p>Tab 3 Content</p>
                    </protean-tab-pane>
                </protean-tab-container>
                `}}
            </CodeSnippet>
        </div>
    </section>

    <section class="best-practices-content">
        <h2 data-in-page-anchor="best-practices">Best practices</h2>
        <section>
            <h3>Use clear, short tab labels</h3>
            <ul>
                <li>
                    Tab labels should indicate what the user will find within
                    that tab panel.
                </li>
                <li>
                    Since tabs use a horizontal layout, aim for labels with one
                    or two words to avoid space issues.
                </li>
            </ul>
        </section>
        <section>
            <h3>Don’t make the user switch between tabs to complete a task</h3>
            <ul>
                <li>
                    Only one tab can be visible at a time. Tasks that require
                    the user to remember information across multiple tabs
                    introduce significant cognitive load and increase the chance
                    of mistakes.
                </li>
                <li>
                    If the user might need to view information across multiple
                    tabs, consider consolidating the information in a single
                    view and separate sections with headings.
                </li>
            </ul>
        </section>
    </section>

    <section>
        <h2 data-in-page-anchor="api">API</h2>
        <section>
            <h3>Tab Container Properties</h3>
            <div>
                In the following examples, <code>element</code> refers to an
                instance of <code>protean-tab-container</code> (i.e.
                <code
                    >element =
                    document.querySelector('protean-tab-container')</code
                >).
            </div>
            <ul class="prop-list">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">value</h4>
                        <div class="prop-type"><code>string</code></div>
                        <div class="prop-desc">
                            The value of the active tab.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.value = 'tab1';
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">name</h4>
                        <div class="prop-type"><code>string</code></div>
                        <div class="prop-attribute">
                            Attribute name: <code>name</code>
                        </div>
                        <div class="prop-desc">
                            The name of the tab-container - used to isolate
                            groups of tab-containers and tab-panes when nested
                            tabs are used.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.name = 'tab-group';
                        </CodeSnippet>
                    </div>
                </li>
            </ul>
        </section>
        <section>
            <h3>Tab Pane Properties</h3>
            <ul class="prop-list">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">label</h4>
                        <div class="prop-type"><code>string</code></div>
                        <div class="prop-attribute">
                            Attribute name: <code>label</code>
                        </div>
                        <div class="prop-desc">
                            The visible text used for the tab control.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.label = 'Tab 1';
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">value</h4>
                        <div class="prop-type"><code>string</code></div>
                        <div class="prop-attribute">
                            Attribute name: <code>value</code>
                        </div>
                        <div class="prop-desc">
                            The value of the tab. This value is emitted with the
                            tab-container's change event and corresponds to the
                            value that need to be set on the tab-container for
                            this pane to be visible.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.value = 'tab1';
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">name</h4>
                        <div class="prop-type"><code>string</code></div>
                        <div class="prop-attribute">
                            Attribute name: <code>name</code>
                        </div>
                        <div class="prop-desc">
                            The name of the tab-pane - used to isolate groups of
                            tab-containers and tab-panes when nested tabs are
                            needed.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.name = 'tab-group';
                        </CodeSnippet>
                    </div>
                </li>
            </ul>
        </section>
        <section>
            <h3>Event</h3>
            <ul class="prop-list">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">change</h4>
                        <div class="prop-desc">
                            Fires when a tab is selected.

                            <h5>Event detail</h5>
                            <CodeSnippet language="typescript">
                                {{
                                    `event: {
                                detail: {
                                    value: string,
                            }
                        } `
                                }}
                            </CodeSnippet>
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            {{
                                `function onChange(event) {
                                this.value = event.detail.value;
                        }`
                            }}
                        </CodeSnippet>
                        <CodeSnippet language="html">
                            {{`
                            <protean-select
                                label="My select field label"
                                onchange="onChange(event)"
                            ></protean-select>
                            `}}
                        </CodeSnippet>
                    </div>
                </li>
            </ul>
        </section>

        <section>
            <h3>CSS variables</h3>
            <p>
                Listed below are the CSS variables that can be adjusted to alter
                the appearance of <code>protean-tab-container</code>. The
                default values set in the <code>protean-styles</code> package
                are shown in the code snippets.
            </p>
            <ul class="prop-list stacked">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-tab-container-separator-color
                        </h4>
                        <div class="prop-desc">
                            The color of the upper border of the tab container.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-tab-container-separator-color: #535353;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-tab-container-active-border-color
                        </h4>
                        <div class="prop-desc">
                            The color of the border of the active tab control.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-tab-container-active-border-color:
                            var(--action-color);
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            ---protean-tab-container-hover-background-color
                        </h4>
                        <div class="prop-desc">
                            The background color of a tab control when hovered.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            ---protean-tab-container-hover-background-color:
                            #353535;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            ---protean-tab-container-hover-background-color
                        </h4>
                        <div class="prop-desc">
                            The text color of a tab control when hovered.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            ---protean-tab-container-hover-background-color:
                            #353535;
                        </CodeSnippet>
                    </div>
                </li>
            </ul>
        </section>
    </section>
</template>
