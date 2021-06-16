<template>
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

        return { userStore };
    },
};
</script>
