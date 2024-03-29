<style lang="scss" src="./styles.scss"></style>
<script setup lang="ts">
import CodeSnippet from '@/components/code-snippet/index.vue';
import { computed, ref } from 'vue';

const demoVariant = ref('primary');
const demoDisabled = ref(false);
const demoFullWidth = ref(false);

const demoContent = computed<string>(() => {
    if (demoVariant.value === 'icon') {
        return '<protean-icon type="chevron-down"></protean-icon>';
    }

    return 'Button text';
});

const demoAriaLabel = computed<string | undefined>(() => {
    if (demoVariant.value === 'icon') return 'Button aria-label';

    return undefined;
});
</script>
<template>
    <h1>Button</h1>
    <p>
        Buttons allow the user to perform actions in a given page or context,
        typically in forms, dialogs, or contextual menus.
    </p>
    <section class="overview-content">
        <h2 data-in-page-anchor="overview">Overview</h2>
        <div class="overview-demo">
            <protean-button
                :full-width="demoFullWidth"
                class="overview-demo-element"
                :variant="demoVariant"
                :disabled="demoDisabled"
                :a11y-label="demoAriaLabel"
            >
                <protean-icon
                    v-if="demoVariant === 'icon'"
                    class="demo-button-icon"
                    type="chevron-down"
                ></protean-icon>
                <span v-else>Button text</span>
            </protean-button>
        </div>
        <div class="overview-demo-controls">
            <protean-checkbox
                :checked.prop="demoDisabled"
                class="demo-toggle-disabled"
                label="Show as disabled"
                variant="toggle"
                @change="demoDisabled = $event.detail.checked"
            ></protean-checkbox>
            <protean-checkbox
                :checked.prop="demoFullWidth"
                class="demo-toggle-width"
                label="Show as full width"
                variant="toggle"
                @change="demoFullWidth = $event.detail.checked"
            ></protean-checkbox>
            <protean-select
                class="demo-select-variant"
                :value="demoVariant"
                label="Button variant"
                @change="demoVariant = $event.detail.value"
            >
                <protean-option value="primary" label="primary">
                    primary
                </protean-option>
                <protean-option value="secondary" label="secondary">
                    secondary
                </protean-option>
                <protean-option value="icon" label="icon">
                    icon
                </protean-option>
            </protean-select>
        </div>
        <div class="overview-demo-snippet">
            <CodeSnippet
                :substitutions="[
                    demoVariant,
                    demoDisabled ? '\n disabled' : '',
                    demoFullWidth ? '\n full-width' : '',
                    demoAriaLabel
                        ? `\na11y-label=&quot;${demoAriaLabel}&quot;`
                        : '',
                    demoContent,
                ]"
            >
                {{`<protean-button \n variant="{0}" {1}{2}{3} \n>
                    {4}
                </protean-button>
                `}}
            </CodeSnippet>
        </div>
    </section>
    <section class="best-practices-content">
        <h2 data-in-page-anchor="best-practices">Best practices</h2>
        <section>
            <h3>Use clear, concise button labels.</h3>
            <ul>
                <li>
                    Button labels should indicate what will happen when the
                    button is clicked.
                </li>
                <li>
                    Start with a verb (e.g. "Create", "Save", "Remove"), and
                    supplement with a noun when you need additional clarity
                    (e.g. "Create folder", "Save address", "Remove user").
                </li>
            </ul>
        </section>
        <section>
            <h3>Use only one primary button in a given page or view.</h3>
            <ul>
                <li>
                    The primary button has the greatest visual prominence, so
                    reserve it for the most important action on the page.
                </li>
                <li>
                    If there are several equally-important actions on a page,
                    use the secondary style for all buttons on that page.
                </li>
            </ul>
        </section>
        <section>
            <h3>Use consistent button alignment.</h3>
            <ul>
                <li>
                    Consistent button alignment reduces cognitive load and
                    interaction cost.
                </li>
                <li>
                    Once you have the button alignment convention that's best
                    for your design, stick to it.
                </li>
                <li>
                    Our alignment convention, for example, is to right-align
                    buttons to their respective content, with priority actions
                    to the right.
                </li>
            </ul>
        </section>
        <section>
            <h3>Use buttons for actions, and use links for navigation.</h3>
            <ul>
                <li>
                    Buttons and links communicate distinct meaning both to users
                    and to assistive technology.
                </li>
                <li>
                    Use a button to allow the user to interact with the
                    <em>current page or view</em>.
                </li>
                <li>
                    Use a link to allow the user to go to a
                    <em>different page or view.</em>
                </li>
            </ul>
        </section>
        <section>
            <h3>Take extra care with icon buttons</h3>
            <ul>
                <li>
                    Icon buttons don't have visible labels, so users must rely
                    on context and experience to understand the button's
                    purpose.
                </li>
                <li>
                    Always include a descriptive <code>a11yLabel</code> for icon
                    buttons to ensure they can be understood by users who rely
                    on assistive technology.
                </li>
            </ul>
        </section>
    </section>

    <section>
        <h2 data-in-page-anchor="api">API</h2>
        <section>
            <h3>Properties</h3>
            <p>
                In the following examples, <code>element</code> refers to an
                instance of <code>protean-button</code> (i.e.
                <code
                    >element =
                    document.querySelector('protean-button#myButton')</code
                >).
            </p>
            <ul class="prop-list">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">variant</h4>
                        <div class="prop-type">
                            <code>"primary"</code> | <code>"secondary</code> |
                            <code>"icon"</code>
                        </div>
                        <div class="prop-attribute">
                            Attribute name: <code>variant</code>
                        </div>
                        <div class="prop-desc">
                            The visual style of the button.
                            <code>icon</code> buttons should only be used in
                            conjunction with <code>protean-icon</code> and
                            should be used with an <code>a11yLabel</code>.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.variant = 'primary';
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
                            Disables button interaction.
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
                        <h4 class="prop-name">a11yLabel</h4>
                        <div class="prop-type"><code>string</code></div>
                        <div class="prop-attribute">
                            Attribute name: <code>a11y-label</code>
                        </div>
                        <div class="prop-desc">
                            The label read by assistive technologies for the
                            input; <code>a11yLabel</code> is used here instead
                            of <code>ariaLabel</code> to prevent double readings
                            of the text by those technologies. Note: This should
                            not be set when the button has text rendered in it.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.a11yLabel = 'Field aria-label';
                        </CodeSnippet>
                    </div>
                </li>
            </ul>
        </section>

        <section>
            <h3>CSS variables</h3>
            <p>
                Listed below are the several CSS variables that can be adjusted
                to alter the <code>protean-button</code> element's appearance
                along with the default values set in the
                <code>protean-styles</code> package:
            </p>
            <ul class="prop-list stacked">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--protean-button-height</h4>
                        <div class="prop-desc">
                            The height of all buttons; typically bound to
                            minimum touch zone size (42px).
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-button-height: var(--touch-zone-size);
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-button-disabled-opacity
                        </h4>
                        <div class="prop-desc">
                            The opacity of the button while it is disabled.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-button-disabled-opacity:
                            var(--disabled-opacity);
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-button-border-radius
                        </h4>
                        <div class="prop-desc">
                            The border radius of all button variants.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-button-border-radius: 21px;
                        </CodeSnippet>
                    </div>
                </li>
            </ul>

            <ul class="prop-list stacked">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-button-primary-background-color
                        </h4>
                        <div class="prop-desc">
                            The background color of the primary button.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-button-primary-background-color:
                            var(--action-color);
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-button-primary-text-color
                        </h4>
                        <div class="prop-desc">
                            The text color of the primary button.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-button-primary-text-color:
                            var(--action-contrast-color);
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-button-primary-border-color
                        </h4>
                        <div class="prop-desc">
                            The border color of the primary button.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-button-primary-border-color: transparent;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-button-primary-hover-background-color
                        </h4>
                        <div class="prop-desc">
                            The background color of the primary button while it
                            is hovered or focused.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-button-primary-hover-background-color:
                            var(--action-hover-color);
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-button-primary-hover-text-color
                        </h4>
                        <div class="prop-desc">
                            The text color of the primary button while it is
                            hovered or focused.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-button-primary-hover-text-color:
                            var(--action-hover-contrast-color);
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-button-primary-hover-border-color
                        </h4>
                        <div class="prop-desc">
                            The border color of the primary button while it is
                            hovered or focused.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-button-primary-hover-border-color:
                            transparent;
                        </CodeSnippet>
                    </div>
                </li>
            </ul>

            <ul class="prop-list stacked">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-button-secondary-background-color
                        </h4>
                        <div class="prop-desc">
                            The background color of the secondary button.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-button-secondary-background-color:
                            transparent;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-button-secondary-text-color
                        </h4>
                        <div class="prop-desc">
                            The text color of the secondary button.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-button-secondary-text-color: inherit;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-button-secondary-border-color
                        </h4>
                        <div class="prop-desc">
                            The border color of the secondary button.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-button-secondary-border-color:
                            var(--action-color);
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-button-secondary-hover-background-color
                        </h4>
                        <div class="prop-desc">
                            The background color of the secondary button while
                            it is hovered or focused.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-button-secondary-hover-background-color:
                            var(--protean-button-primary-hover-background-color);
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-button-secondary-hover-text-color
                        </h4>
                        <div class="prop-desc">
                            The text color of the secondary button while it is
                            hovered or focused.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-button-secondary-hover-text-color:
                            var(--protean-button-primary-hover-text-color);
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-button-secondary-hover-border-color
                        </h4>
                        <div class="prop-desc">
                            The border color of the secondary button while it is
                            hovered or focused.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-button-secondary-hover-border-color:
                            var(--protean-button-primary-hover-border-color);
                        </CodeSnippet>
                    </div>
                </li>
            </ul>

            <ul class="prop-list stacked">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--protean-button-icon-size</h4>
                        <div class="prop-desc">
                            The width of icon buttons; typically matches the
                            minimum touch zone size.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-button-icon-size: var(--touch-zone-size);
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-button-icon-background-color
                        </h4>
                        <div class="prop-desc">
                            The background color of the icon button.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-button-icon-background-color: transparent;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-button-icon-stroke-color
                        </h4>
                        <div class="prop-desc">
                            The stroke color of the icon with the icon button.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-button-icon-stroke-color: currentColor;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-button-icon-hover-background-color
                        </h4>
                        <div class="prop-desc">
                            The background color of the icon button while
                            hovered or focused.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-button-icon-hover-background-color:
                            rgba(255, 95, 64, 0.2);
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-button-icon-hover-stroke-color
                        </h4>
                        <div class="prop-desc">
                            The stroke color of the icon with the icon button
                            while hovered or focused.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-button-icon-hover-stroke-color:
                            currentColor;
                        </CodeSnippet>
                    </div>
                </li>
            </ul>
        </section>
    </section>
</template>
