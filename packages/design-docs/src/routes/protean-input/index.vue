<style lang="scss" src="./styles.scss"></style>
<script setup lang="ts">
import CodeSnippet from '@/components/code-snippet/index.vue';
import { Dict } from '@/types';
import { computed, ref } from 'vue';

const demoTypes = ref([
    {
        label: 'Native',
        children: [
            {
                value: 'text',
                label: 'Text (default)',
            },
            {
                value: 'tel',
                label: 'tel',
            },
            {
                value: 'number',
                label: 'number',
            },
            {
                value: 'password',
                label: 'password',
            },
            {
                value: 'search',
                label: 'search',
            },
            {
                value: 'color',
                label: 'color',
            },
        ],
    },
    {
        label: 'Formatted',
        children: [
            {
                value: 'phone',
                label: 'phone',
            },
            {
                value: 'numeric',
                label: 'numeric',
            },
            {
                value: 'date',
                label: 'date',
            },
            {
                value: 'color-code',
                label: 'color-code',
            },
        ],
    },
]);
const demoType = ref('text');
const demoHints = ref(['Hint #1', 'Hint #2']);
const demoErrorsList = ref(['Error #1']);
const demoShowErrors = ref(false);
const demoSuppressMessages = ref(false);
const demoOptional = ref(false);
const demoDisabled = ref(false);
const demoReadonly = ref(false);
const demoMaxlength = ref('20');
const demoFormat = ref('');
const demoNumericFormats = ref(['integer', 'delimited', '3dec']);
const dateFormats = ref([
    'MM/DD/YYYY',
    'M/D/YYYY',
    'MM/DD/YY',
    'M/D/YY',
    'MM/YY',
    'M/YY',
]);
const colorCodeFormats = ref(['hex', 'hexa', 'rgb']);
const apiFormat = ref('date');

const demoFormats = computed<string[] | undefined>(() => {
    const formatMap: Dict<string[]> = {
        numeric: demoNumericFormats.value,
        date: dateFormats.value,
        'color-code': colorCodeFormats.value,
    };

    return formatMap[demoType.value];
});

const demoErrors = computed<string[]>(() => {
    if (demoShowErrors.value) return demoErrorsList.value;

    return [];
});

const spamErrors = () => {
    if (!demoShowErrors.value || demoSuppressMessages.value) return;

    const arrayLength = Math.round(Math.random() * 9 + 1);

    const errorList = new Array(arrayLength)
        .fill('')
        .map((i, index) => `Error #${index + 1}`);

    demoErrorsList.value = errorList;
};
</script>
<template>
    <h1>Input field</h1>
    <p>
        Input fields allow users to enter information. This element supports
        several input formatting options.
    </p>

    <section class="overview-content">
        <h2 data-in-page-anchor="overview">Overview</h2>
        <div class="overview-demo">
            <protean-input
                class="overview-demo-element"
                :label="demoType === 'color' ? undefined : 'Field label'"
                :type="demoType"
                v-prop:hints="demoHints"
                v-prop:errors="demoErrors"
                :suppressMessages="demoSuppressMessages"
                :optional="demoOptional"
                :disabled="demoDisabled"
                :readonly="demoReadonly"
                :format="demoFormat"
                :maxlength="demoMaxlength"
                @input="spamErrors"
            ></protean-input>
        </div>
        <div class="overview-demo-controls">
            <protean-checkbox
                class="demo-toggle-errors"
                label="Populate validation errors"
                variant="toggle"
                v-prop:checked="demoShowErrors"
                @change="demoShowErrors = $event.detail.checked"
            ></protean-checkbox>
            <protean-checkbox
                class="demo-toggle-messages"
                label="Hide hints and errors"
                variant="toggle"
                v-prop:checked="demoSuppressMessages"
                @change="demoSuppressMessages = $event.detail.checked"
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
            <protean-checkbox
                class="demo-toggle-readonly"
                label="Show as readonly"
                variant="toggle"
                v-prop:checked="demoReadonly"
                @change="demoReadonly = $event.detail.checked"
            ></protean-checkbox>
            <protean-input
                class="demo-input-maxlength"
                label="Input maxlength"
                type="numeric"
                format="integer"
                maxlength="3"
                :value="demoMaxlength"
                @change="demoMaxlength = $event.detail.value"
            ></protean-input>
            <protean-select
                class="demo-select-type"
                @change="demoType = $event.detail.value"
                :value="demoType"
                label="Input type"
            >
                <protean-optgroup
                    v-for="{ label, children } in demoTypes"
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
                class="demo-select-format"
                :value="demoFormat"
                label="Input format"
                v-if="demoFormats"
                @change="demoFormat = $event.detail.value"
            >
                <protean-option
                    v-for="format in demoFormats"
                    :value="format"
                    :label="format"
                    >{{ format }}</protean-option
                >
            </protean-select>
        </div>
        <div class="overview-demo-snippet">
            <CodeSnippet
                :substitutions="[
                    demoType === 'color'
                        ? ''
                        : 'label=&quot;Field label&quot; \n',
                    demoType,
                    demoFormat ? `\n format=&quot;${demoFormat}&quot;` : '',
                    `\n maxlength=&quot;${demoMaxlength}&quot;`,
                    demoSuppressMessages ? '\n suppress-messages' : '',
                    demoOptional ? '\n optional' : '',
                    demoDisabled ? '\n disabled' : '',
                    demoReadonly ? '\n readonly' : '',
                ]"
            >
                {{`<protean-input
                    {0}type="{1}" {2}{3}{4}{5}{6}{7}
                ></protean-input>
                `}}
            </CodeSnippet>
        </div>
    </section>

    <section class="best-practices-content">
        <h2 data-in-page-anchor="best-practices">Best practices</h2>
        <section>
            <h3>Use short, clear field labels.</h3>
            <ul>
                <li>
                    The label should make it obvious what information is being
                    requested.
                </li>
            </ul>
        </section>
        <section>
            <h3>No placeholder text</h3>
            <p>
                The <code>protean-input</code> element does not support
                placeholder text for the following reasons:
            </p>
            <ul>
                <li>
                    Placeholder text often fails to meet minimum contrast
                    requirements
                </li>
                <li>
                    Fields with placeholder text appear completed, and users may
                    mistakenly overlook them
                </li>
            </ul>
        </section>
        <section>
            <h3>Only ask for input you actually need</h3>
            <ul>
                <li>
                    Users are more likely to complete forms with fewer fields,
                    and to make fewer errors when doing so.
                </li>
                <li>
                    If you must include optional fields in your form, use the
                    <code>optional</code> attribute to clearly distinguish them
                    from required fields.
                </li>
            </ul>
        </section>
        <section>
            <h3>Assist the user with inline hints and error messages</h3>
            <ul>
                <li>
                    Communicate unique or complex input requirements with the
                    <code>hints</code> array. These hints are displayed when the
                    input field is focused.
                </li>
                <li>
                    Provide inline validation feedback with the
                    <code>errors</code> array. Like hints, these error messages
                    are displayed while the input is focused.
                </li>
                <li>
                    Input fields with at least one item in the
                    <code>errors</code> array also receive styles to make them
                    easy to find when scanning the form.
                </li>
            </ul>
        </section>
        <section>
            <h3>
                Use the appropriate input field type for the kind of data you
                expect.
            </h3>
            <ul>
                <li>
                    Choosing the right input field type is particularly useful
                    for users on mobile devices and those using assistive
                    technology: mobile devices display keyboards optimized for
                    each input type, and many screen readers have input modes
                    specific to a given input type.
                </li>
            </ul>
        </section>
    </section>

    <section>
        <h2 data-in-page-anchor="api">API</h2>
        <section>
            <h3>Properties</h3>
            <div>
                In the following examples, <code>element</code> refers to an
                instance of <code>protean-input</code> (i.e.
                <code
                    >element =
                    document.querySelector('protean-input#myInput')</code
                >).
            </div>
            <ul class="prop-list">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">value</h4>
                        <div class="prop-type"><code>string</code></div>
                        <div class="prop-desc">The value of the input.</div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.value = '02/09/2021';
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
                            The visible label for the input.
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
                            input; <code>a11yLabel</code> is used here instead
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
                        <h4 class="prop-name">type</h4>
                        <div class="prop-type">
                            <code>"text"</code> (default) | <code>"tel"</code> |
                            <code>"number"</code> | <code>"password"</code> |
                            <code>"search"</code> | <code>"phone"</code> |
                            <code>"numeric"</code> |
                            <code>"date"</code>
                        </div>
                        <div class="prop-attribute">
                            Attribute name: <code>type</code>
                        </div>
                        <div class="prop-desc">
                            The type of input used. <code>phone</code>,
                            <code>date</code>, and <code>numeric</code> types
                            provide text formatting and have some settable
                            <code>format</code>s.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.type = 'tel';
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">format</h4>
                        <div class="prop-type">
                            <code>string</code>
                        </div>
                        <div class="prop-attribute">
                            Attribute name: <code>format</code>
                        </div>
                        <div class="prop-desc">
                            The format of the visible text in the input field.
                            Allowed values are dependent on type selection. Note
                            that the visible value may differ from what is set
                            onto the
                            <code>value</code> property; when
                            <code>value</code> is set programmatically, it will
                            automatically be formatted.
                        </div>
                    </div>
                    <div class="prop-example">
                        <div class="prop-extras">
                            <h5><code>numeric</code> formats:</h5>
                            <ul>
                                <li><code>integer</code></li>
                                <li><code>delimited</code></li>
                                <li>
                                    <code>Ndec</code> where <code>N</code> is a
                                    count of numbers after the decimal.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5><code>date</code> formats:</h5>
                            <ul>
                                <li v-for="format in dateFormats">
                                    <code>{{ format }}</code>
                                </li>
                            </ul>
                        </div>
                        <CodeSnippet language="javascript">
                            {{
                                `element.type = 'date';
                        element.format = 'M/D/YY';`
                            }}
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
                        <h4 class="prop-name">hints</h4>
                        <div class="prop-type">
                            <code>string[]</code>
                        </div>
                        <div class="prop-desc">
                            An array of hints made visible to the user when the
                            field is focused - hints are also read by assistive
                            technologies.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.hints = [ 'Hint #1', ' Hint #2' ];
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
                            An array of errors made visible to the user when the
                            field is focused. When populated, the field border
                            is changed, an error icon is added, and assistive
                            technologies are alerted to the invalid state of the
                            field. Errors take precedence over hints.
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
                        <h4 class="prop-name">suppressMessages</h4>
                        <div class="prop-type">
                            <code>boolean</code>
                        </div>
                        <div class="prop-attribute">
                            Attribute name: <code>suppress-messages</code>
                        </div>
                        <div class="prop-desc">
                            Dictates the visibility of <code>hint</code> or
                            <code>error</code> messages when the field is
                            focused. Other error state indicators are not
                            affected by this property.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.suppressMessages = true;
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
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">readonly</h4>
                        <div class="prop-type">
                            <code>boolean</code>
                        </div>
                        <div class="prop-attribute">
                            Attribute name: <code>readonly</code>
                        </div>
                        <div class="prop-desc">
                            Prevents editing but, unlike <code>disabled</code>,
                            allows the field to be focused.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.readonly = true;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">maxlength</h4>
                        <div class="prop-type">
                            <code>number</code>
                        </div>
                        <div class="prop-attribute">
                            Attribute name: <code>maxlength</code>
                        </div>
                        <div class="prop-desc">
                            Maximum allowed length of the input value. This
                            value will be ignored for most formatted input types
                            in favor of the length of the selected format. For
                            <code>numeric</code> formats, this value is adjusted
                            internally to account for any delimiting characters.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.maxlength = 20;
                        </CodeSnippet>
                    </div>
                </li>
            </ul>
        </section>

        <section>
            <h3>Events</h3>

            <ul class="prop-list">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">change</h4>
                        <div class="prop-desc">
                            Fires when the field loses focus after having its
                            value updated.

                            <h5>Event detail</h5>
                            <CodeSnippet language="typescript">
                                {{
                                    `event: {
                                    detail: {
                                        value: string,
                                        formattedValue: string,
                                    } 
                                }`
                                }}
                            </CodeSnippet>
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            {{
                                ` function onChange(event) {
                            this.value = event.detail.value; 
                        } `
                            }}
                        </CodeSnippet>
                        <CodeSnippet language="html">
                            {{`
                            <protean-input
                                label="My input field label"
                                onchange="onChange(event)"
                            ></protean-input>
                            `}}
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">input</h4>
                        <div class="prop-desc">
                            Fires when the user modifies the field value. Useful
                            for inline field validation.

                            <h5>Event detail</h5>
                            <CodeSnippet language="typescript">
                                {{
                                    `event: {
                                    detail: {
                                        value: string,
                                        formattedValue: string,
                                    } 
                                }`
                                }}
                            </CodeSnippet>
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            {{
                                `function onInput(event) {
                            const value = event.detail.value;
                            this.value = value;

                            this.errors = value === '' ? ['My input field label should have a least one character.'] : [];
                        } `
                            }}
                        </CodeSnippet>
                        <CodeSnippet language="html">
                            {{`
                            <protean-input
                                label="My input field label"
                                oninput="onInput(event)"
                            ></protean-input>
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
                the <code>protean-input</code> element's appearance along with
                the default values set in the
                <code>protean-styles</code> package:
            </p>
            <ul class="prop-list stacked">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--protean-input-margin</h4>
                        <div class="prop-desc">
                            The margin around the
                            <code>protean-input</code> element.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-input-margin: 1rem;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--protean-input-border-color</h4>
                        <div class="prop-desc">
                            The color of the border that wraps the input field
                            and its and label.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-input-border-color: currentColor;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--protean-input-border-radius</h4>
                        <div class="prop-desc">
                            The radius of the border that wraps the input field
                            and its and label.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-input-border-radius: 2px;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-input-label-font-size
                        </h4>
                        <div class="prop-desc">The size of the label text.</div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-input-label-font-size: 0.6875rem;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-input-label-optional-font-size
                        </h4>
                        <div class="prop-desc">
                            The size of the <code>(optional)</code> text within
                            the label.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-input-label-optional-font-size: 0.625rem;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--protean-input-font-size</h4>
                        <div class="prop-desc">
                            The size of the text within the input field.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-input-font-size: 1rem;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-input-disabled-opacity
                        </h4>
                        <div class="prop-desc">
                            The opacity of the field while it is disabled.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-input-disabled-opacity:
                            var(--disabled-opacity);
                        </CodeSnippet>
                    </div>
                </li>
            </ul>
        </section>
    </section>
</template>
