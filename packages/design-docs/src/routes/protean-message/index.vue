<style lang="scss" src="./styles.scss"></style>
<script setup lang="ts">
import CodeSnippet from '@/components/code-snippet/index.vue';
import { computed, ref } from 'vue';

const demoType = ref('info');
const demoTypes = ref(['info', 'success', 'warning', 'error']);
const demoIsStatus = ref(false);

const demoLevel = computed<string>(() => {
    return demoIsStatus.value ? 'status' : 'alert';
});
</script>
<template>
    <h1>Message</h1>
    <p>
        Messages present important information about an action, task, or system
        status.
    </p>

    <section class="overview-content">
        <h2 data-in-page-anchor="overview">Overview</h2>
        <div class="overview-demo">
            <protean-message
                class="overview-demo-element"
                :type="demoType"
                :level="demoLevel"
            >
                Message info:
                <ul>
                    <li>Message detail #1</li>
                    <li>Message detail #2</li>
                    <li>Message detail #3</li>
                </ul>
            </protean-message>
        </div>
        <div class="overview-demo-controls">
            <protean-select
                class="demo-select-type"
                label="Message type"
                :value="demoType"
                @change="demoType = $event.detail.value"
            >
                <protean-option
                    v-for="type in demoTypes"
                    :key="type"
                    :label="type"
                    :value="type"
                >
                    {{ type }}
                </protean-option>
            </protean-select>
            <protean-checkbox
                :checked.prop="demoIsStatus"
                class="demo-toggle-level"
                label="Show as status message"
                variant="toggle"
                @change="demoIsStatus = $event.detail.checked"
            ></protean-checkbox>
        </div>
        <div class="overview-demo-snippet">
            <CodeSnippet :substitutions="[demoType, demoLevel]">
                {{`
                <protean-message
                    class="overview-demo-element"
                    type="{0}"
                    level="{1}"
                >
                    Message info:
                    <ul>
                        <li>Message detail #1</li>
                        <li>Message detail #2</li>
                        <li>Message detail #3</li>
                    </ul>
                </protean-message>
                `}}
            </CodeSnippet>
        </div>
    </section>
    <section class="best-practices-content">
        <h2 data-in-page-anchor="best-practices">Best practices</h2>
        <section>
            <h3>
                Tell the user what happened, <strong>and</strong> what to do
                next.
            </h3>
            <ul>
                <li>
                    If the user needs to take action in response to a message,
                    give clear, specific instructions about what to do.
                </li>
            </ul>
        </section>
        <section>
            <h3>Use the right level of urgency.</h3>
            <ul>
                <li>
                    Messages are interruptive; the level of interruption should
                    match the urgency of the information.
                </li>
                <li>
                    Informational and success messages rarely require immediate
                    attention, so <code>level="status"</code> is appropriate.
                </li>
                <li>
                    Warning and error messages often demand timely action, so
                    use <code>level="alert"</code> to give it the necessary
                    priority.
                </li>
            </ul>
        </section>
        <section>
            <h3>Use clear, polite language.</h3>
            <ul>
                <li>Be specific, be concise, and don't blame the user.</li>
            </ul>
        </section>
        <section>
            <h3>Use messages thoughtfully</h3>
            <ul>
                <li>
                    Messages aren't effective when they are ignored; don't annoy
                    or overwhelm the user with too many interruptions.
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
                instance of <code>protean-message</code> (i.e.
                <code
                    >element =
                    document.querySelector('protean-message#myMessage')</code
                >).
            </div>
            <ul class="prop-list">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">type</h4>
                        <div class="prop-type">
                            <code>"info"</code> (default) |
                            <code>"success"</code> | <code>"warning"</code> |
                            <code>"error"</code>
                        </div>
                        <div class="prop-attribute">
                            Attribute name: <code>type</code>
                        </div>
                        <div class="prop-desc">
                            The visual style of the message. Controls the icon
                            and color used to communicate the intent of the
                            message.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.type = 'success';
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">level</h4>
                        <div class="prop-type">
                            <code>"alert"</code> (default) |
                            <code>"status"</code>
                        </div>
                        <div class="prop-attribute">
                            Attribute name: <code>level</code>
                        </div>
                        <div class="prop-desc">
                            Controls the <code>role</code> assigned to the
                            message list, dictating the verbosity of assistive
                            technologies.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="javascript">
                            element.level = 'status';
                        </CodeSnippet>
                    </div>
                </li>
            </ul>
        </section>

        <section>
            <h3>CSS variables</h3>
            <p>
                Listed below are the CSS variables that can be adjusted to alter
                the appearance of <code>protean-message</code>.
                <code>protean-message</code> also inherits global status colors.
                The default values set in the
                <code>protean-styles</code> package are shown in the code
                snippets.
            </p>
            <ul class="prop-list stacked">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--protean-message-margin</h4>
                        <div class="prop-desc">
                            The margin around the
                            <code>protean-message</code> element.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-message-margin: 1rem 0;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-message-background-color
                        </h4>
                        <div class="prop-desc">
                            The background color of the message container.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-message-background-color: #2a2a2a;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--protean-message-text-color</h4>
                        <div class="prop-desc">
                            The text color of the message container.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-message-text-color: #fcfcfc;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-message-border-color
                        </h4>
                        <div class="prop-desc">
                            The border color of the message container.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-message-border-color: #353535;
                        </CodeSnippet>
                    </div>
                </li>
            </ul>
            <ul class="prop-list stacked">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--protean-status-info</h4>
                        <div class="prop-desc">
                            The color used for informational statuses.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-status-info: #0965b7;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-status-info-contrast
                        </h4>
                        <div class="prop-desc">
                            The color used as a contrasting foreground or
                            background for informational statuses.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-status-info-contrast: #ffffff;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--protean-status-success</h4>
                        <div class="prop-desc">
                            The color used for success statuses.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-status-success: #1d820f;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-status-success-contrast
                        </h4>
                        <div class="prop-desc">
                            The color used as a contrasting foreground or
                            background for success statuses.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-status-success-contrast: #ffffff;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--protean-status-warning</h4>
                        <div class="prop-desc">
                            The color used for warning statuses.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-status-warning: #e6c400;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-status-warning-contrast
                        </h4>
                        <div class="prop-desc">
                            The color used as a contrasting foreground or
                            background for warning statuses.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-status-warning-contrast: #1a1a1a;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--protean-status-error</h4>
                        <div class="prop-desc">
                            The color used for error statuses.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-status-error: #ab0000;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-status-error-contrast
                        </h4>
                        <div class="prop-desc">
                            The color used as a contrasting foreground or
                            background for error statuses.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --protean-status-error-contrast: #ffffff;
                        </CodeSnippet>
                    </div>
                </li>
            </ul>
        </section>
    </section>
</template>
