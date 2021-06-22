const routes = [
    {
        path: "/login",
        name: "Login",
        component: () => import(/* webpackChunkName: "Login"*/ "@/components/pages/login/LoginPage.vue"),
        meta: {
            redirectIfAuthenticated: true,
        },
    },
    {
        path: "/",
        name: "Dashboard",
        component: () => import(/* webpackChunkName: "Dashboard"*/ "@/components/pages/dashboard/DashboardPage.vue"),
        meta: {
            requiresAuth: true,
        },
    },
];

export default routes;
