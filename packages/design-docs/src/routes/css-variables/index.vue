<style lang="scss" src="./styles.scss"></style>
<script setup lang="ts">
import CodeSnippet from '@/components/code-snippet/index.vue';
</script>
<template>
    <h1>CSS variables</h1>
    <p>
        CSS variables (a.k.a. custom properties) play a vital role for this
        design system in propagating styles to the otherwise unreachable
        elements and in reducing repetition of style declarations.
    </p>
    <p>
        High level variables, i.e., globally relevant items and element
        variables, are declared on the <code>:root</code> node; others can be
        set on more specific nodes or locally scoped, if appropriate. The
        <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
            target="_blank"
            rel="noreferrer"
            >MDN web docs</a
        >
        provide great detail about how to use these properties.
    </p>

    <section>
        <h2 data-in-page-anchor="var-approach">Our approach</h2>

        <section>
            <h3>General usage</h3>
            <p>
                CSS variables are incredibly flexible; this can lead to their
                greatest benefits and their largest pitfalls. Their versatility
                allows for nearly infinite configuration points on how a
                particular item is styled. While this is a useful tool to have
                available, it is not always practical to enable such granular
                configuration for three primary reasons:
            </p>
            <ul>
                <li>It is often not necessary, useful, or leveraged.</li>
                <li>
                    All additional items add potential points of design language
                    inconsistency.
                </li>
                <li>
                    An over-abundance of configuration points can muddle the API
                    of an item in terms of the mental model users can keep and
                    with the code underneath that must accommodate for every
                    permutation.
                </li>
            </ul>
            <p>
                To be clear, this does not mean that additional variables will
                not be added in the future - new variables will added when use
                cases are presented and evaluated for them .
            </p>
        </section>
        <section>
            <h3>Relationships between variables</h3>
            <p>
                It is important to recognize how variables are connected to one
                another. This is most noticeable when working to maintain
                readable color contrast (per
                <a
                    href="https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast"
                    target="_blank"
                    rel="noreferrer"
                    >WCAG 2.0</a
                >). If mutation of a foreground color is allowed, mutation of
                the background color must also be allowed and vice versa.
                Otherwise, an incompatible color pairing may occur.
            </p>
            <p>
                Relationships can also surface in other ways, e.g., how
                border-width and border-radius affect spacing. A pattern that we
                use is setting border colors and icon strokes to the
                <code>currentColor</code>. This allows us to set fewer top level
                variables to switch color schemes while maintaining deeper
                configurability when necessary.
            </p>
        </section>
        <section>
            <h3>Separation of concerns</h3>
            <p>
                A key driver of the organization of our variables is the context
                in which they are used. Element variables are namespaced: each
                of those variables is prefixed by the element name and shared
                element variables have more generic prefixes that include
                <code>--protean</code>. No elements are internally reliant on
                variables declared in the <code>protean-styles</code> package.
            </p>
        </section>
    </section>

    <section>
        <h2 data-in-page-anchor="var-list">Variable list</h2>
        <section>
            <h3>Protean styles variables</h3>
            <ul class="prop-list stacked">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--font-family</h4>
                        <div class="prop-desc">
                            The font used throughout the design system.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --font-family: 'Quicksand', 'Heiti SC', sans-serif;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--body-text-color</h4>
                        <div class="prop-desc">
                            The text color used throughout the design system.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --body-text-color: #fafafa;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--body-background-color</h4>
                        <div class="prop-desc">The main background color.</div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --body-background-color: #1a1a1a;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--body-font-size</h4>
                        <div class="prop-desc">The standard font size.</div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --body-font-size: 1rem;
                        </CodeSnippet>
                    </div>
                </li>
            </ul>

            <ul class="prop-list stacked">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--brand-color-1</h4>
                        <div class="prop-desc">
                            The first of our three brand colors to be leveraged
                            when color contrast allows.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --brand-color-1: #f72585;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--brand-color-2</h4>
                        <div class="prop-desc">
                            The second of our three brand colors to be leveraged
                            when color contrast allows.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --brand-color-2: #7209b7;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--brand-color-3</h4>
                        <div class="prop-desc">
                            The third of our three brand colors to be leveraged
                            when color contrast allows.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --brand-color-3: #ff5f40;
                        </CodeSnippet>
                    </div>
                </li>
            </ul>

            <ul class="prop-list stacked">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--action-color</h4>
                        <div class="prop-desc">
                            The color used as a default for action elements such
                            as buttons or checkboxes.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --action-color: #c7b5fb;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--action-contrast-color</h4>
                        <div class="prop-desc">
                            The color used to contrast the
                            <code>--action-color</code> as a foreground or
                            background.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --action-contrast-color: #000000;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--action-hover-color</h4>
                        <div class="prop-desc">
                            The color used as a default for the hover state of
                            action elements such as buttons.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --action-hover-color: #7b57e4;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--action-hover-contrast-color</h4>
                        <div class="prop-desc">
                            The color used to contrast the
                            <code>--action-hover-color</code> as a foreground or
                            background.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --action-hover-contrast-color: #ffffff;
                        </CodeSnippet>
                    </div>
                </li>
            </ul>

            <ul class="prop-list stacked">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--link-color</h4>
                        <div class="prop-desc">The color of text links.</div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --link-color: inherit;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--link-hover-color</h4>
                        <div class="prop-desc">
                            The color of text links while hovered.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --link-hover-color: inherit;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--link-underline-color</h4>
                        <div class="prop-desc">
                            The color of the line underneath text links.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --link-underline-color: var(--brand-color-1);
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--touch-zone-size</h4>
                        <div class="prop-desc">
                            The minimum size of an interaction element to allow
                            for consistent presses when using a touch screen
                            device.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --touch-zone-size: 42px;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--disabled-opacity</h4>
                        <div class="prop-desc">
                            The opacity of an interaction element while it is in
                            a disabled state.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --disabled-opacity: 0.4;
                        </CodeSnippet>
                    </div>
                </li>
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">--code-background-color</h4>
                        <div class="prop-desc">
                            The background color of <code>code</code> elements.
                        </div>
                    </div>
                    <div class="prop-example">
                        <CodeSnippet language="css">
                            --code-background-color: #393939;
                        </CodeSnippet>
                    </div>
                </li>
            </ul>
        </section>

        <section>
            <h3>Generic element variables</h3>
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
            <ul class="prop-list stacked">
                <li class="prop-item">
                    <div class="prop-info">
                        <h4 class="prop-name">
                            --protean-dropdown-background-color
                        </h4>
                        <div class="prop-desc">
                            The background color of a dropdown.
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
                            The text color of content within a dropdown.
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
                            The border color of a dropdown.
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
                        <h4 class="prop-name">--protean-dropdown-box-shadow</h4>
                        <div class="prop-desc">
                            The box shadow style of a dropdown.
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
                            The background color of a dropdown item when hovered
                            or active.
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
                            The text color of a dropdown item when hovered or
                            active.
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

    <section>
        <h2 data-in-page-anchor="var-light-mode">Light mode</h2>
        <p>
            CSS variables also allow for simple implementations of new color
            schemes, e.g. light or dark mode. Our basic color choices led us to
            bind several colors together and further simplified the process of
            implementing a light mode. Establishing relationships between
            variables and using CSS values such as <code>currentColor</code> and
            <code>inherit</code> are valuable here.
        </p>
        <p>Our light mode SCSS is the below:</p>

        <CodeSnippet language="css">
            {{
                `:root {
            /* The variables listed above are here */

            &.light {
                --body-text-color: #1a1a1a;
                --body-background-color: #fdfdfd;

                --action-color: var(--brand-color-2);
                --action-contrast-color: #ffffff;
                --action-hover-color: #5a0d8d;
        
                --link-underline-color: var(--brand-color-2);

                --code-background-color: #f2f2f2;
        
                --protean-message-background-color: #f7f7f7;
                --protean-message-text-color: #000000;
                --protean-message-border-color: #dadada;
        
                --protean-button-icon-hover-background-color: rgba(114, 9, 183, 0.2);
        
                --protean-dropdown-box-shadow: 0 3px 5px -2px rgba(0, 0, 0, 0.5);
                --protean-dropdown-hover-background-color: #efefef;
        
                --protean-select-separator-color: #dadada;
        
                --protean-checkbox-toggle-path-color: #979797;
        
                --protean-tab-container-separator-color: #cdcdcd;
                --protean-tab-container-hover-background-color: #efefef;
            }
        }`
            }}
        </CodeSnippet>
    </section>
</template>
