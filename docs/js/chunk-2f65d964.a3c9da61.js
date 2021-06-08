(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f65d964"],{"38ce":function(e,t,i){"use strict";i.r(t);var a=i("4430");const o=Object(a["f"])('<h1>Accessibility</h1><p> &quot;The Web is fundamentally designed to work for all people, whatever their hardware, software, language, location, or ability. When the Web meets this goal, it is accessible to people with a diverse range of hearing, movement, sight, and cognitive ability.&quot; <a href="https://www.w3.org/standards/webdesign/accessibility" target="_blank" rel="noreferrer">- W3C</a>. </p><p> We believe that all users should have access to the best possible experiences. Thoughtfully designed experiences can be excellent and can be provided with minimal compromise. Web accessibility (a11y) is a baseline requirement for anything that we build; all elements are built in accordance with <a href="https://w3c.github.io/silver/guidelines/" target="_blank" rel="noreferrer">W3C Accessibility Guidelines (WCAG)</a> up to 3.0 and the <a href="https://www.w3.org/TR/wai-aria-practices-1.2/" target="_blank" rel="noreferrer">WAI-ARIA Authoring Practices</a> to ensure compatibility with assistive technologies. This page is by no means an exhaustive list of a11y best practices - be sure to do thorough research and testing. </p><section><h2 data-in-page-anchor="a11y-markup">Semantic markup</h2><p> Writing semantic HTML vastly improves the accessibility of a web page. Some basic best practices include: </p><ul><li> Maintain proper heading hierarchy. <ul><li> This allows sighted users to easily scan and understand the page structure, and it gives assistive technologies landmarks to quickly navigate to. </li><li> Heading levels should not be skipped, e.g., an <code>h3</code> should not immediately follow an <code>h1</code>. </li><li> Further details can be found in this <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/" target="_blank" rel="noreferrer">W3 tutorial.</a></li></ul></li><li> Use structured content elements. <ul><li> Use <code>header</code>, <code>main</code>, <code>nav</code>, <code>section</code>, and other similar elements. These make it easier for those using assistive technologies to navigate the page. </li><li> When using a <code>section</code>, use headings within them for the benefits described above. </li><li> Further details can be found in this <a href="https://www.w3.org/WAI/GL/WCAG3/2020/how-tos/structured-content/" target="_blank" rel="noreferrer">WCAG 3.0 support resource.</a></li></ul></li><li> Be mindful of interactive element usage. <ul><li> Restrict user interactions to interactive elements. Binding click interactions to a <code>div</code> element without the proper <code>aria</code> treatments can make them unreachable for some users - all interactions should be reachable via keyboard. </li><li> Verify that all <code>a</code> elements have a corresponding <code>href</code>. This places the link in the tab order to allow for proper keyboard navigation. </li><li>Refrain from manipulating the tab order of the page. Tab order should match the sequence of elements in the DOM and manipulating the order with <code>tabindex</code> or CSS can create a poor experience for keyboard users.</li></ul></li></ul></section><section><h2 data-in-page-anchor="a11y-technology">Assistive technology notes</h2><ul><li>When building a web page or application, be sure to test it with an assistive technology - preferably on multiple devices. <ul><li>The VoiceOver Utility comes pre-installed on MacOS and iOS devices. It works best in Safari but also works well in other browsers.</li><li>Similar tools are available on Android devices and Windows PCs.</li></ul></li><li> Always provide alternative text for images or interactive elements that do not contain text by using <code>aria-label</code>s or <code>alt</code> text. <ul><li> Non-decorative images should always have <code>alt</code> text to be read for assistive technology users. </li><li> Use an <code>aria-label</code> for: <ul><li> items that cannot otherwise have visible text such as icon buttons. </li><li> distinguishing regions like primary and secondary <code>nav</code> elements from one another. </li><li>labelling checkboxes or inputs when a visible label is not viable; do this as sparingly as possible.</li><li><code>aria-label</code>s for the elements are set using <code>a11y-label</code> to prevent multiple readouts and misgroupings of DOM nodes. </li></ul><li><code>aria-labelledby</code> should be used instead of <code>aria-label</code> when there is a related, visible label on the page.</li><li> Further details can be found in this <a href="https://www.w3.org/WAI/GL/WCAG3/2020/how-tos/text-alternatives/" target="_blank" rel="noreferrer">WCAG 3.0 support resource.</a></li></li></ul></li><li>Decorative elements an be obfuscated from assistive technologies. <ul><li>Images can be hidden using empty <code>alt</code> text or <code>role=&quot;presentation&quot;</code> for some technologies.</li><li>Other elements, e.g., inline SVGs, can be hidden using <code>aria-hidden=&quot;true&quot;</code></li><li> Be sure that the image does not add any information to the page before hiding it. Further details can be found in this <a href="https://www.w3.org/WAI/tutorials/images/decorative/" target="_blank" rel="noreferrer">W3 tutorial.</a></li></ul></li><li>ARIA landmark roles and regions provide information to assistive technologies about intended behavior and give quick entry points to different regions of content. Sectioned content elements natively provide the benefits of ARIA landmark regions, i.e., the <code>nav</code> element behaves the same way that an element that has <code>role=&quot;navigation&quot;</code> behaves. </li></ul></section><section><h2 data-in-page-anchor="a11y-contrast">Color contrast</h2><p> Color contrast is often used to measure element and text visibility. It is defined as the ratio between the relative luminance of two colors ranging from 1:1 to 1:21; a full definition can be found in the <a href="https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio" target="_blank" rel="noreferrer">WCAG 2.1 documentation.</a></p><ul><li> The minimum contrast ratio to meet the WCAG 2.0 AA standard for text is 4.5:1. The AAA standard is 7:1. </li><li> The minimum contrast ratio to meet the WCAG 2.1 AA standard for interaction elements such as buttons or input borders is 3:1. This rule heavily influenced our decision for the <code>--action-color</code> variable. </li><li> There are many ways to check contrast ratio. They are often presented in a browser&#39;s developer tools and checkers can be found on many sites such as <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noreferrer">WebAIM.</a></li></ul></section>',6);function n(e,t){return o}var r=i("9ad1");class s extends r["b"]{}i("e0a4");s.render=n;t["default"]=s},4433:function(e,t,i){},e0a4:function(e,t,i){"use strict";i("4433")}}]);
//# sourceMappingURL=chunk-2f65d964.a3c9da61.js.map