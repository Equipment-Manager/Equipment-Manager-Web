import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import userStore from "@/stores/user";

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.redirectIfAuthenticated)) {
        if (userStore.getters.isAuthenticated) {
            next({ name: "Dashboard" });
            return;
        }
    }

    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!userStore.getters.isAuthenticated) {
            next({ name: "Login" });
            return;
        }
    }

    next();
});

export default router;
