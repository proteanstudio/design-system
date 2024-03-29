<style lang="scss" src="./styles.scss"></style>
<script setup lang="ts">
import CodeSnippet from '@/components/code-snippet/index.vue';
</script>
<template>
    <h1>Getting started</h1>
    <p>
        Follow the steps below to install the design system elements and styles.
        If you notice any problems or if you would like to submit a request,
        please open an issue in the
        <a
            href="https://github.com/proteanstudio/design-system"
            target="_blank"
            rel="noreferrer"
            >Github repository</a
        >. Please note that all system features and element properties are
        subject to change until a 1.0.0 version is released. Changes will be
        listed in the Release Notes (coming soon).
    </p>

    <section>
        <h2 data-in-page-anchor="static">Use static assets</h2>
        <p>
            Static versions of the elements and styles are available for
            download from <code>unpkg</code> using <code>link</code> and
            <code>style</code> tags.
        </p>

        <CodeSnippet language="html">
            {{`
            <script
                type="module"
                src="https://unpkg.com/protean-elements/dist/protean-elements/protean-elements.esm.js"
            ></script>
            <link
                rel="stylesheet"
                href="https://unpkg.com/protean-styles/dist/css/app.css"
            />`}}
        </CodeSnippet>
    </section>

    <section>
        <h2 data-in-page-anchor="npm-install">Install via NPM</h2>
        <p>
            To get started, install the <code>protean-elements</code> and
            <code>protean-styles</code> packages with npm or yarn.
        </p>

        <CodeSnippet>
            {{
                `npm install protean-elements
            npm install protean-styles`
            }}
        </CodeSnippet>

        <section>
            <h3>Protean Elements</h3>

            <section>
                <h4>Modern browsers</h4>
                <p>
                    For modern browser support only, run the following snippet
                    in the index.js or equivalent file in your application.
                </p>
                <CodeSnippet language="js">
                    {{
                        `import { defineCustomElements } from 'protean-elements/loader';

                 defineCustomElements();`
                    }}
                </CodeSnippet>
            </section>

            <section>
                <h4>Legacy browsers</h4>
                <p>
                    For use in the Edge Legacy browser, an additional step is
                    needed. Edge Legacy and Internet Explorer browsers are not
                    actively supported.
                </p>
                <CodeSnippet language="js">
                    {{
                        `import { applyPolyfills, defineCustomElements } from 'protean-elements/loader'; 

                applyPolyfills().then(() => {
                    defineCustomElements();
                });`
                    }}
                </CodeSnippet>
            </section>
        </section>

        <section>
            <h3>Protean Styles</h3>

            <section>
                <h4>SCSS</h4>
                <p>
                    If using <code>sass-loader</code>, the styles can be
                    imported before they are bundled; using the styles this way
                    also allows use of our mixins, such as the
                    <code>breakpoint</code> mixin.
                </p>
                <CodeSnippet language="css">
                    {{ `@import 'protean-styles/styles/app';` }}
                </CodeSnippet>
            </section>
            <section>
                <h4>CSS</h4>
                <p>
                    Access fully built styles. There is no need to
                    <code>npm install protean-styles</code> for this
                    implementation.
                </p>
                <CodeSnippet language="html">
                    {{`<link
                        rel="stylesheet"
                        href="https://unpkg.com/protean-styles/dist/css/app.css"
                    />`}}
                </CodeSnippet>
            </section>
        </section>
    </section>

    <section>
        <h2 data-in-page-anchor="notes">Notes</h2>
        <ul>
            <li>
                Protean elements are web components written using Typescript and
                StencilJS.
                <ul>
                    <li>
                        All element types are declared in the global namespace -
                        the benefits of this surface when querying an element
                        via <code>document.querySelector</code> and when using
                        an element in a <code>.tsx</code> file.
                    </li>
                </ul>
            </li>
            <li>
                React has some deficiencies that need to be accounted for.
                <ul>
                    <li>
                        The
                        <a
                            href="https://stenciljs.com/docs/react"
                            target="_blank"
                            rel="noreferrer"
                            >StencilJS integration docs</a
                        >
                        provide some greater detail and guidance on this matter.
                    </li>
                </ul>
            </li>
        </ul>
    </section>
</template>
