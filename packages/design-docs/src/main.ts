import { createApp } from 'vue';
import Root from './routes/Root/index.vue';
import router from './router';
import { defineCustomElements } from 'protean-elements/loader';

defineCustomElements();

createApp(Root)
    .directive('prop', {
        mounted(element, binding) {
            if (binding.arg) {
                element[binding.arg] = binding.value;
            }
        },
        updated(element, binding) {
            if (binding.arg) {
                element[binding.arg] = binding.value;
            }
        },
    })
    .use(router)
    .mount('#app');
