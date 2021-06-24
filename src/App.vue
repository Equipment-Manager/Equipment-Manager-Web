<template>
    <div class="flex h-screen bg-gray-200 font-roboto">
        <sidebar-nav />

        <div class="flex-1 flex flex-col overflow-hidden">
            <top-nav />

            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                <div class="container mx-auto px-6 py-8">
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
