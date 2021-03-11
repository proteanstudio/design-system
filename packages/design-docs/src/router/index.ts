import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const Home = () => import('@/routes/home/index.vue');
const NotFound = () => import('@/routes/not-found/index.vue');
const GettingStarted = () => import('@/routes/getting-started/index.vue');
const Accessibility = () => import('@/routes/accessibility/index.vue');
const CSSVariables = () => import('@/routes/css-variables/index.vue');
const ProteanInput = () => import('@/routes/protean-input/index.vue');
const ProteanButton = () => import('@/routes/protean-button/index.vue');
const ProteanCheckbox = () => import('@/routes/protean-checkbox/index.vue');
const ProteanMessage = () => import('@/routes/protean-message/index.vue');
const ProteanSelect = () => import('@/routes/protean-select/index.vue');
const ProteanTabs = () => import('@/routes/protean-tab-container/index.vue');
const Typography = () => import('@/routes/typography/index.vue');

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/getting-started',
        name: 'Getting started',
        component: GettingStarted,
    },
    {
        path: '/guidelines/accessibility',
        name: 'Accessibility',
        component: Accessibility,
    },
    {
        path: '/guidelines/css-variables',
        name: 'CSS variables',
        component: CSSVariables,
    },
    {
        path: '/guidelines/typography',
        name: 'Typography',
        component: Typography,
    },
    {
        path: '/elements/protean-button',
        name: 'Button',
        component: ProteanButton,
    },
    {
        path: '/elements/protean-checkbox',
        name: 'Checkboxes & toggles',
        component: ProteanCheckbox,
    },
    {
        path: '/elements/protean-input',
        name: 'Input field',
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
        component: NotFound,
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
