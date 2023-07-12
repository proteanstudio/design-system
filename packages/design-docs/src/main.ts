import { createApp } from 'vue';
import Root from './routes/Root/index.vue';
import router from './router';
import { defineCustomElements } from 'protean-elements/loader';

defineCustomElements();

createApp(Root).use(router).mount('#app');
