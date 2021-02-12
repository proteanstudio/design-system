/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


declare module 'highlight.js/lib/core';
declare module 'highlight.js/lib/languages/javascript';
declare module 'highlight.js/lib/languages/typescript';
declare module 'highlight.js/lib/languages/xml';