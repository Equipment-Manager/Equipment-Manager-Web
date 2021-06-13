<template>
    <div v-if="!userStore.getters.isLoggedIn">not logged</div>
    <div id="app">
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import userStore from "@/stores/user";

export default defineComponent({
    name: "App",
    setup() {
        onMounted(userStore.getUser);
        return { userStore };
    },
});
</script>
