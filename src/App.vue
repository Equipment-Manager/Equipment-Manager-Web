<template>
    <button v-if="userStore.getters.isAuthenticated" @click="logout">Logout</button>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import { provide, onMounted } from "vue";
import userStore from "@/stores/user";
import router from "@/router";

export default {
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
