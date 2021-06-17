import { createApp } from 'vue';
import Root from './routes/Root/index.vue';
import router from './router';
import { defineCustomElements } from 'protean-elements/loader';
import vProp from './directives/v-prop';

defineCustomElements();

createApp(Root).directive('prop', vProp).use(router).mount('#app');
