import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Login",
        component: () => import(/* webpackChunkName: "Login"*/ "@/components/pages/login/LoginPage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
