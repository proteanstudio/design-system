import { createApp } from 'vue';
import Root from './routes/Root/index.vue';
import router from './router';

createApp(Root)
    .use(router)
    .mount('#app');
