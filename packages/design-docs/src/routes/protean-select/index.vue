<style lang="scss" src="./styles.scss"></style>
<script setup lang="ts">
import CodeSnippet from '@/components/code-snippet/index.vue';
import { computed, ref } from 'vue';

const demoOptgroupOptions = ref([
    {
        label: 'Group 1',
        children: [
            {
                value: '1',
                label: 'Option 1',
            },
            {
                value: '2',
                label: 'Option 2',
            },
            {
                value: '3',
                label: 'Option 3',
            },
        ],
    },
    {
        label: 'Group 2',
        children: [
            {
                value: '4',
                label: 'Option 4',
            },
            {
                value: '5',
                label: 'Option 5',
            },
        ],
    },
    {
        label: 'Group 3',
        children: [
            {
                value: '6',
                label: 'Option 6',
            },
            {
                value: '7',
                label: 'Option 7',
            },
            {
                value: '8',
                label: 'Option 8',
            },
        ],
    },
]);
const demoFlatOptions = ref([
    {
        value: '1',
        label: 'Option 1',
    },
    {
        value: '2',
        label: 'Option 2',
    },
    {
        value: '3',
        label: 'Option 3',
    },
    {
        value: '4',
        label: 'Option 4',
    },
    {
        value: '5',
        label: 'Option 5',
    },
    {
        value: '6',
        label: 'Option 6',
    },
    {
        value: '7',
        label: 'Option 7',
    },
    {
        value: '8',
        label: 'Option 8',
    },
]);
const demoWithOptGroups = ref(false);
const demoValue = ref('');
const demoSelectedOptions = ref<string[]>([]);
const demoMultiple = ref(false);
const demoShowErrors = ref(false);
const demoOptional = ref(false);
const demoDisabled = ref(false);
const demoErrorsList = ['Error #1'];

const demoErrors = computed<string[]>(() => {
    if (demoShowErrors.value) return demoErrorsList;

    return [];
});

const snippetOptions = computed<string>(() => {
    if (demoWithOptGroups.value) {
        return demoOptgroupOptions.value.reduce((acc, group, index) => {
            const children = buildOptionString(group.children);

            const leadingLineBreak = index === 0 ? '' : '\n';

            return `${acc}${leadingLineBreak}<protean-optgroup label="${group.label}">
                ${children}
                </protean-optgroup>`;
        }, '');
    }
    return buildOptionString(demoFlatOptions.value);
});

function buildOptionString(
    options: { label: string; value: string }[],
): string {
    return options.reduce((innerAcc, { label, value }, index) => {
        const childStr = `<protean-option value="${value}" label="${label}">${label}</protean-option>`;

        const trailingLineBreak = index === options.length - 1 ? '' : '\n';

        return innerAcc + childStr + trailingLineBreak;
    }, '');
}

function changeHandler(event: CustomEvent): void {
    if (demoMultiple.value) {
        demoSelectedOptions.value = event.detail.selectedOptions;
    } else {
        demoValue.value = event.detail.value;
    }
}
</script>
<template>
    <h1>Select</h1>
    <p>
        Selects present a collapsible list of options from which the user can
        make a single selection (the default), or multiple selections (when
        using the multi-select variant).
    </p>

    <section class="overview-content">
        <h2 data-in-page-anchor="overview">Overview</h2>
        <div class="overview-demo">
            <protean-select
                v-if="demoWithOptGroups"
                class="overview-demo-element optgroup-demo"
                label="Select label"
                :multiple="demoMultiple"
                :value="demoValue"
                :selectedOptions="demoSelectedOptions"
                :errors="demoErrors"
                :optional="demoOptional"
                :disabled="demoDisabled"
                @change="changeHandler"
            >
                <protean-optgroup
                    v-for="{ label, children } in demoOptgroupOptions"
                    :label="label"
                >
                    <protean-option
                        v-for="{ value, label } in children"
                        :value="value"
                        :label="label"
                        >{{ label }}</protean-option
                    >
                </protean-optgroup>
            </protean-select>
            <protean-select
                v-else
                class="overview-demo-element flat-demo"
                label="Select label"
                :multiple="demoMultiple"
                :value="demoValue"
                :selectedOptions="demoSelectedOptions"
                :errors="demoErrors"
                :optional="demoOptional"
                :disabled="demoDisabled"
                @change="changeHandler"
            >
                <protean-option
                    v-for="{ value, label } in demoFlatOptions"
                    :value="value"
                    :label="label"
                    >{{ label }}</protean-option
                >
            </protean-select>
        </div>
        <div class="overview-demo-controls">
            <protean-checkbox
                class="demo-toggle-optgroups"
                label="Show with optgroups"
                variant="toggle"
                v-prop:checked="demoWithOptGroups"
                @change="demoWithOptGroups = $event.detail.checked"
            ></protean-checkbox>
            <protean-checkbox
                class="demo-toggle-multiselect"
                label="Show as multiselect"
                variant="toggle"
                v-prop:checked="demoMultiple"
                @change="demoMultiple = $event.detail.checked"
            ></protean-checkbox>
            <protean-checkbox
                class="demo-toggle-errors"
                label="Show with validation errors"
                variant="toggle"
                v-prop:checked="demoShowErrors"
                @change="demoShowErrors = $event.detail.checked"
            ></protean-checkbox>
            <protean-checkbox
                class="demo-toggle-optional"
                label="Show as optional"
                variant="toggle"
                v-prop:checked="demoOptional"
                @change="demoOptional = $event.detail.checked"
            ></protean-checkbox>
            <protean-checkbox
                class="demo-toggle-disabled"
                label="Show as disabled"
                variant="toggle"
                v-prop:checked="demoDisabled"
                @change="demoDisabled = $event.detail.checked"
            ></protean-checkbox>
        </div>
        <div class="overview-demo-snippet">
            <CodeSnippet
                :substitutions="[
                    demoMultiple ? ' multiple' : '',
                    demoOptional ? ' optional' : '',
                    demoDisabled ? ' disabled' : '',
                    snippetOptions,
                ]"
            >
                {{ `<protean-select {0}{1}{2}>\n {3}\n</protean-select>` }}
            </CodeSnippet>
        </div>
    </section>

    <section class="best-practices-content">
        <h2 data-in-page-anchor="best-practices">Best practices</h2>
        <p>
            Selects, radio buttons, and checkboxes all provide the same
            fundamental function: choosing from a list of options. Consider
            these questions before using a select in your design:
        </p>
        <section>
            <h3>How many options are in the list?</h3>
            <ul>
                <li>
                    If there are five or fewer options, radio buttons (for a
                    single selection) or checkboxes (for multiple selections)
                    are less demanding on the user’s memory and outperform
                    selects in usability tests.
                </li>
            </ul>
        </section>
        <section>
            <h3>
                Are users likely to know what option they want before seeing the
                list?
            </h3>
            <ul>
                <li>
                    If users are familiar with the list of options and how they
                    are ordered, a select may be appropriate. For highly
                    familiar option sets, like US states, it may be easier
                    simply to type the answer.
                </li>
                <li>
                    If users likely need to browse the options before choosing,
                    radio buttons or checkboxes support browsing better than
                    selects.
                </li>
            </ul>
        </section>
        <section>
            <h3>Is screen space constrained?</h3>
            <ul>
                <li>
                    When screen space is limited, a select can be an efficient
                    way to allow the user to choose from a list of options.
                </li>
            </ul>
        </section>
    </section>

    <section>
        <h2 data-in-page-anchor="api">API</h2>
        <section>
            <h3>Select Properties</h3>
            <div>
                In the following examples, <code>element</code> refers to an
                instance of <code>protean-select</code> (i.e.
                <code
                    >element =
                    document.querySelector('protean-select#mySelect')</code
                >).
            </div>
            <ul class="prop-list">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">value</h4>
                        <div class="prop-type"><code>string</code></div>
                        <div class="prop-desc">
                            The value of the select when not using a
                            <code>multiple</code> select. Should match the
                            <code>value</code> of one of the nested options.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.value = 'option1';
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">selectedOptions</h4>
                        <div class="prop-type"><code>string[]</code></div>
                        <div class="prop-desc">
                            The list of selected options when using a
                            <code>multiple</code> select. Individual items
                            should match the <code>value</code>s of one of the
                            nested options.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.selectedOptions = ['option1', 'option2'];
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">multiple</h4>
                        <div class="prop-type"><code>boolean</code></div>
                        <div class="prop-attribute">
                            Attribute name: <code>multiple</code>
                        </div>
                        <div class="prop-desc">
                            Allows selection of multiple options
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.multiple = true;
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
                            The visible label for the select.
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
                            select; <code>a11yLabel</code> is used here instead
                            of <code>ariaLabel</code> to prevent double readings
                            of the text by those technologies. Note: when
                            <code>label</code> is set, this value will not be
                            bound to the field.
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
                        <h4 class="prop-name">optional</h4>
                        <div class="prop-type">
                            <code>boolean</code>
                        </div>
                        <div class="prop-attribute">
                            Attribute name: <code>optional</code>
                        </div>
                        <div class="prop-desc">
                            Marks the field as optional to the user by appending
                            "(optional)" to the visible <code>label</code> and
                            to assistive technologies by setting
                            <code>aria-required="false"</code>.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.optional = true;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">errors</h4>
                        <div class="prop-type">
                            <code>string[]</code>
                        </div>
                        <div class="prop-desc">
                            A list of errors used to show the field in an error
                            state. The contents of the errors are not visible to
                            the user.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.errors = [ 'Error #1', ' Error #2' ];
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">disabled</h4>
                        <div class="prop-type">
                            <code>boolean</code>
                        </div>
                        <div class="prop-attribute">
                            Attribute name: <code>disabled</code>
                        </div>
                        <div class="prop-desc">
                            Disables the field and prevents user interaction.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.disabled = true;
                        </CodeSnippet>
                    </div>
                </li>
            </ul>
        </section>

        <section>
            <h3>Optgroup Properties</h3>
            <ul class="prop-list">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">label</h4>
                        <div class="prop-type"><code>string</code></div>
                        <div class="prop-attribute">
                            Attribute name: <code>label</code>
                        </div>
                        <div class="prop-desc">
                            The visible label for the group.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.label = 'Group label';
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">disabled</h4>
                        <div class="prop-type">
                            <code>boolean</code>
                        </div>
                        <div class="prop-attribute">
                            Attribute name: <code>disabled</code>
                        </div>
                        <div class="prop-desc">
                            Disables the group and prevents any options with it
                            from being selected.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.disabled = true;
                        </CodeSnippet>
                    </div>
                </li>
            </ul>
        </section>

        <section>
            <h3>Option Properties</h3>
            <ul class="prop-list">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">value</h4>
                        <div class="prop-type"><code>string</code></div>
                        <div class="prop-attribute">
                            Attribute name: <code>value</code>
                        </div>
                        <div class="prop-desc">
                            The value of the option. This value is emitted when
                            the option is selected.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.value = 'option1';
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
                            The text shown in the select when this option is
                            selected. If not populated, the select will fall
                            back to the option's inner text and further to its
                            value.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.label = 'Group label';
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">disabled</h4>
                        <div class="prop-type">
                            <code>boolean</code>
                        </div>
                        <div class="prop-attribute">
                            Attribute name: <code>disabled</code>
                        </div>
                        <div class="prop-desc">
                            Disables the options and prevents it from being
                            selected.
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
                        <h4 class="prop-name">selected</h4>
                        <div class="prop-type">
                            <code>boolean</code>
                        </div>
                        <div class="prop-attribute">
                            Attribute name: <code>selected</code>
                        </div>
                        <div class="prop-desc">
                            Indicates whether an option is selected. Can be used
                            to pre-select options on render but once
                            <code>value</code> or
                            <code>selectedOptions</code> is set on the select,
                            the properties of the select override any
                            user-defined properties on the option.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="html">
                            {{`<protean-option
                                selected
                                value="1"
                                label="Option 1"
                            >
                                Option 1 </protean-option
                            >`}}
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
                            Fires when an option is selected.

                            <h5>Event detail</h5>
                            <CodeSnippet language="typescript">
                                {{
                                    `event: {
                                detail: {
                                    value?: string,
                                    selectedOptions?: string[],
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
                            if (this.multiple) {
                                this.selectedOptions = event.detail.selectedOptions;
                            } else {
                                this.value = event.detail.value;
                            }
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
                the appearance of <code>protean-select</code>,
                <code>protean-optgroup</code>, and <code>protean-option</code>.
                <code>protean-select</code> inherits styles from
                <code>protean-input</code> and dropdown styles that will also be
                used in future components. The default values set in the
                <code>protean-styles</code> package are shown in the code
                snippets.
            </p>

            <ul class="prop-list stacked">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--protean-select-margin</h4>
                        <div class="prop-desc">
                            The margin around the
                            <code>protean-select</code> element.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-select-margin: 1rem;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-select-separator-color
                        </h4>
                        <div class="prop-desc">
                            The color of the line between the select field and
                            its dropdown.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-select-separator-color: #535353;
                        </CodeSnippet>
                    </div>
                </li>
            </ul>

            <ul class="prop-list stacked">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-optgroup-separator-color
                        </h4>
                        <div class="prop-desc">
                            The color of the line used to distinguish the
                            optgroup.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-optgroup-separator-color:
                            var(--protean-select-separator-color);
                        </CodeSnippet>
                    </div>
                </li>
            </ul>

            <ul class="prop-list stacked">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-dropdown-background-color
                        </h4>
                        <div class="prop-desc">
                            The background color of the select dropdown.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-dropdown-background-color:
                            var(--body-background-color);
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--protean-dropdown-text-color</h4>
                        <div class="prop-desc">
                            The text color of content within the select
                            dropdown.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-dropdown-text-color:
                            var(--body-text-color);
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-dropdown-border-color
                        </h4>
                        <div class="prop-desc">
                            The border color of the select dropdown.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-dropdown-border-color: currentColor;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-dropdown-border-width
                        </h4>
                        <div class="prop-desc">
                            The border width of the select dropdown.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-dropdown-border-width: 0 1px 1px;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--protean-dropdown-box-shadow</h4>
                        <div class="prop-desc">
                            The box shadow style of the select dropdown.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-dropdown-box-shadow: 0 3px 5px -2px
                            rgba(255, 255, 255, 0.7);
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-dropdown-hover-background-color
                        </h4>
                        <div class="prop-desc">
                            The background color of an option when hovered or
                            active.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-dropdown-hover-background-color: #353535;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-dropdown-hover-text-color
                        </h4>
                        <div class="prop-desc">
                            The text color of an option when hovered or active.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-dropdown-hover-text-color: #353535;
                        </CodeSnippet>
                    </div>
                </li>
            </ul>
        </section>
    </section>
</template>
