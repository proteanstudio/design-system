<style lang="scss" src="./styles.scss"></style>
<script setup lang="ts">
import CodeSnippet from '@/components/code-snippet/index.vue';
import { computed, ref } from 'vue';

const demoChecked = ref(false);
const demoIsToggle = ref(false);
const demoIsRightAligned = ref(false);
const demoDisabled = ref(false);
const demoIndeterminate = ref(false);

const demoVariant = computed<string | undefined>(() => {
    if (demoIsToggle.value) return 'toggle';

    return;
});

const demoAlignment = computed(() => {
    return demoIsRightAligned.value ? 'right' : 'left';
});
</script>
<template>
    <h1>Checkbox</h1>
    <p>
        Checkboxes and toggles allow the user to select one or more options from
        a group, or to switch between two states.
    </p>

    <section class="overview-content">
        <h2 data-in-page-anchor="overview">Overview</h2>
        <div class="overview-demo">
            <protean-checkbox
                class="overview-demo-element"
                label="Checkbox label"
                :variant="demoVariant"
                v-prop:checked="demoChecked"
                :disabled="demoDisabled"
                :alignment="demoAlignment"
                :indeterminate="demoIndeterminate"
                @change="demoChecked = $event.detail.checked"
            >
            </protean-checkbox>
        </div>
        <div class="overview-demo-controls">
            <protean-checkbox
                class="demo-toggle-toggle"
                label="Show as toggle"
                variant="toggle"
                v-prop:checked="demoIsToggle"
                :disabled="demoIndeterminate"
                @change="demoIsToggle = $event.detail.checked"
            ></protean-checkbox>
            <protean-checkbox
                class="demo-toggle-disabled"
                label="Show as disabled"
                variant="toggle"
                v-prop:checked="demoDisabled"
                @change="demoDisabled = $event.detail.checked"
            ></protean-checkbox>
            <protean-checkbox
                class="demo-toggle-alignment"
                label="Align to the right"
                variant="toggle"
                v-prop:checked="demoIsRightAligned"
                @change="demoIsRightAligned = $event.detail.checked"
            ></protean-checkbox>
            <protean-checkbox
                class="demo-toggle-indeterminate"
                label="Show as indeterminate"
                variant="toggle"
                v-prop:checked="demoIndeterminate"
                :disabled="demoIsToggle"
                @change="demoIndeterminate = $event.detail.checked"
            ></protean-checkbox>
        </div>
        <div class="overview-demo-snippet">
            <CodeSnippet
                :substitutions="[
                    demoVariant ? `\n variant=&quot;${demoVariant}&quot;` : '',
                    demoChecked ? '\n checked' : '',
                    demoDisabled ? '\n disabled' : '',
                    demoIndeterminate && !demoIsToggle
                        ? '\n indeterminate'
                        : '',
                    demoAlignment,
                ]"
            >
                {{`<protean-checkbox
                    label="Checkbox label" {0}{1}{2}{3}
                    alignment="{4}"
                ></protean-checkbox>
                `}}
            </CodeSnippet>
        </div>
    </section>

    <section class="best-practices-content">
        <h2 data-in-page-anchor="best-practices">Best practices</h2>
        <section>
            <h3>Checkboxes vs. radio buttons</h3>
            <ul>
                <li>
                    Use <strong>checkboxes</strong> when the user can select
                    more than one option in a group.
                </li>
                <li>
                    Use <strong>radio buttons</strong> when the user can select
                    only one option in a group.
                    <ul>
                        <li>
                            <strong>Note:</strong> the design system has not
                            implemented a radio button element yet. Native radio
                            buttons with a fieldset will work, but they do not
                            have design system styles associated with them at
                            this time.
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
        <section>
            <h3>Checkboxes vs. toggle switches</h3>
            <ul>
                <li>
                    Use a <strong>checkbox</strong> when the selection must be
                    confirmed before taking effect (typically by clicking a form
                    button).
                </li>
                <ul>
                    <li>
                        For example, a checkbox is appropriate when inviting a
                        user to opt-in to email communications during a sign up
                        workflow. The email opt-in, along with other sign up
                        information, is collected only after the user clicks a
                        button (e.g. "Complete registration").
                    </li>
                </ul>
                <li>
                    Use a <strong>toggle switch</strong> when the selection
                    should take effect immediately, without a separate
                    confirming action.
                </li>
                <ul>
                    <li>
                        For example, applications that offer a "dark mode" could
                        use a toggle switch to enable and disable that mode. The
                        toggled setting takes effect immediately.
                    </li>
                </ul>
            </ul>
        </section>
    </section>

    <section>
        <h2 data-in-page-anchor="api">API</h2>
        <section>
            <h3>Properties</h3>
            <div>
                In the following examples, <code>element</code> refers to an
                instance of <code>protean-checkbox</code> (i.e.
                <code
                    >element =
                    document.querySelector('protean-checkbox#myCheckbox')</code
                >).
            </div>
            <ul class="prop-list">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">variant</h4>
                        <div class="prop-type">
                            <code>"checkbox"</code> (default) |
                            <code>"toggle"</code>
                        </div>
                        <div class="prop-attribute">
                            Attribute name: <code>variant</code>
                        </div>
                        <div class="prop-desc">
                            The visual style of the checkbox.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.variant = 'toggle';
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">checked</h4>
                        <div class="prop-type"><code>boolean</code></div>
                        <div class="prop-attribute">
                            Attribute name: <code>checked</code>
                        </div>
                        <div class="prop-desc">
                            The checked state of the checkbox.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.checked = true;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">label</h4>
                        <div class="prop-type"><code>string</code></div>
                        <div class="prop-attribute">
                            Attribute name: <code>label</code>
                        </div>
                        <div class="prop-desc">
                            The visible label for the checkbox.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.label = 'Field label';
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">a11yLabel</h4>
                        <div class="prop-type"><code>string</code></div>
                        <div class="prop-attribute">
                            Attribute name: <code>a11y-label</code>
                        </div>
                        <div class="prop-desc">
                            The label read by assistive technologies for the
                            checkbox; <code>a11yLabel</code> is used here
                            instead of <code>ariaLabel</code> to prevent double
                            readings of the text by those technologies. Note:
                            when <code>label</code> is set, this value will not
                            be bound to the field.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.a11yLabel = 'Field aria-label';
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">disabled</h4>
                        <div class="prop-type"><code>boolean</code></div>
                        <div class="prop-attribute">
                            Attribute name: <code>disabled</code>
                        </div>
                        <div class="prop-desc">
                            Disables checkbox interaction.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.disabled = true;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">alignment</h4>
                        <div class="prop-type">
                            <code>"left"</code> (default) | <code>"right"</code>
                        </div>
                        <div class="prop-attribute">
                            Attribute name: <code>alignment</code>
                        </div>
                        <div class="prop-desc">
                            The placement of the checkbox relative to its label.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.alignment = "right";
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">indeterminate</h4>
                        <div class="prop-type"><code>boolean</code></div>
                        <div class="prop-attribute">
                            Attribute name: <code>indeterminate</code>
                        </div>
                        <div class="prop-desc">
                            Shows the checkbox in an indeterminate state. Best
                            used to indicate partial selection of options on a
                            checkbox that controls all others in a group. Does
                            not apply to toggles.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.indeterminate = true;
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
                            Fires when the checkbox is toggled.

                            <h5>Event detail</h5>
                            <CodeSnippet language="typescript">
                                {{
                                    `
                                event: {
                                    detail: {
                                        checked: boolean,
                                    }
                                }
                            `
                                }}
                            </CodeSnippet>
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            {{
                                `
                            function onChange(event) {
                                this.checked = event.detail.checked;
                            }
                        `
                            }}
                        </CodeSnippet>
                        <CodeSnippet language="html">
                            {{`
                            <protean-checkbox
                                label="My checkbox label"
                                onchange="onChange(event)"
                            ></protean-checkbox>
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
                the <code>protean-checkbox</code> element's appearance along
                with the default values set in the
                <code>protean-styles</code> package:
            </p>
            <ul class="prop-list stacked">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--protean-checkbox-margin</h4>
                        <div class="prop-desc">
                            The margin around the
                            <code>protean-checkbox</code> element.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-checkbox-margin: 1rem;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-checkbox-outline-color
                        </h4>
                        <div class="prop-desc">
                            The color of the outline around the checkbox.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-checkbox-outline-color: #aaaaaa;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-checkbox-toggle-path-color
                        </h4>
                        <div class="prop-desc">
                            The color of the toggle path when not
                            <code>checked</code>.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-checkbox-toggle-path-color: #535353;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-checkbox-toggle-circle-fill
                        </h4>
                        <div class="prop-desc">
                            The color of the toggle circle when not
                            <code>checked</code>.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-checkbox-toggle-circle-fill: #000000;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-checkbox-checked-outer-color
                        </h4>
                        <div class="prop-desc">
                            The color that fills a standard checkbox and the
                            toggle path when <code>checked</code>.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-checkbox-checked-outer-color:
                            var(--action-color);
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-checkbox-checked-inner-color
                        </h4>
                        <div class="prop-desc">
                            The color of a standard checkbox's check mark and
                            the toggle circle when <code>checked</code>.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-checkbox-checked-inner-color:
                            var(--action-contrast-color);
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-checkbox-disabled-opacity
                        </h4>
                        <div class="prop-desc">
                            The opacity of the field while it is disabled.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-checkbox-disabled-opacity:
                            var(--disabled-opacity);
                        </CodeSnippet>
                    </div>
                </li>
            </ul>
        </section>
    </section>
</template>
