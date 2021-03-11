# Protean Elements

This is a collection of web components built using [StencilJS](https://stenciljs.com/docs/introduction).

## Get Started

To use the elements in your workflow, follow the steps in the [getting started docs](https://design.protean.studio/#/getting-started).

## Accessibility (a11y)

Everything here is built with accessibility in mind. We use as many native HTML elements as possible; when we must diverge, we adhere to the [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.2/) and all relevant [WCAG](https://w3c.github.io/silver/guidelines/) recommendations.

Read more about our approach on accessibility in the [design system guidelines](https://design.protean.studio/#/guidelines/accessibility).

## CSS Variables

All elements are styled using CSS variables (custom properties). The configurable style properties are listed for each element in the [design system documentation](https://design.protean.studio).

## Testing

All elements are tested thoroughly when changes are made and before releases.

-   Unit tests are used to cover logical assertions and branches. Coverage here sits at 100% of all lines of code and over 99% of branches; the last 1% is made of minor dictionary variations effectively test by other means.
-   End-to-End (E2E) tests are used to mimic user interactions. This serves as a layer of redundancy and as a mechanism to validate the design intent of an element.
-   Manual testing is used to test any additional permutations and to verify functionality when an assistive technology is being used.
