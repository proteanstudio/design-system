import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/routes/home/index.vue';
import ProteanInput from '@/routes/protean-input/index.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/elements/protean-input',
        name: 'Text Fields',
        component: ProteanInput,
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
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
