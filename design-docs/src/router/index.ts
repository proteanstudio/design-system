import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const Home = () => import('@/routes/home/index.vue');
const ProteanInput = () => import('@/routes/protean-input/index.vue');
const ProteanButton = () => import('@/routes/protean-button/index.vue');
const ProteanCheckbox = () => import('@/routes/protean-checkbox/index.vue');
const ProteanMessage = () => import('@/routes/protean-message/index.vue');
const ProteanSelect = () => import('@/routes/protean-select/index.vue');
const ProteanTabs = () => import('@/routes/protean-tab-container/index.vue');

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/elements/protean-button',
        name: 'Button',
        component: ProteanButton,
    },
    {
        path: '/elements/protean-checkbox',
        name: 'Checkbox',
        component: ProteanCheckbox,
    },
    {
        path: '/elements/protean-input',
        name: 'Input',
        component: ProteanInput,
    },
    {
        path: '/elements/protean-select',
        name: 'Select',
        component: ProteanSelect,
    },
    {
        path: '/elements/protean-message',
        name: 'Message',
        component: ProteanMessage,
    },
    {
        path: '/elements/protean-tab-container',
        name: 'Tabs',
        component: ProteanTabs,
    },
    {
        // will match everything
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: Home,
    },
    //   {
    //     path: "/about",
    //     name: "About",
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //       import(/* webpackChunkName: "about" */ "../views/About.vue")
    //   }
];

const router = createRouter({
    history: createWebHashHistory(), //createWebHistory preferred long term, hash prevents 404
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return { ...savedPosition };
        } else {
            return { top: 0 };
        }
    },
});

export default router;
