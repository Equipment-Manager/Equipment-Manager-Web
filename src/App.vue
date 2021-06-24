<template>
    <div class="flex h-screen bg-gray-50 font-roboto">
        <sidebar-nav v-if="userStore.getters.isAuthenticated" />

        <div class="flex-1 flex flex-col overflow-hidden">
            <top-nav v-if="userStore.getters.isAuthenticated" />

            <main class="flex-1 overflow-x-hidden overflow-y-auto">
                <div class="container mx-auto">
                    <router-view />
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import { onMounted, provide } from "vue";
import userStore from "@/stores/user";
import router from "@/router";
import SidebarNav from "@/components/global/SidebarNav";
import TopNav from "@/components/global/TopNav";

export default {
    components: { TopNav, SidebarNav },
    setup() {
        provide("userStore", userStore);
        provide("router", router);

        onMounted(userStore.getToken);
        onMounted(userStore.getUser);

        const logout = function () {
            userStore.logout();
            router.push({ name: "Login" });
        };

        return { userStore, logout };
    },
};
</script>
