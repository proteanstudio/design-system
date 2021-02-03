import { createApp } from 'vue';
import Root from './routes/Root/index.vue';
import router from './router';
import { applyPolyfills, defineCustomElements } from 'protean-elements/loader';

applyPolyfills().then(() => {
    defineCustomElements();
});

const app = createApp(Root);

app.config.isCustomElement = tag => tag.indexOf('protean-') !== -1;

app.use(router).mount('#app');
