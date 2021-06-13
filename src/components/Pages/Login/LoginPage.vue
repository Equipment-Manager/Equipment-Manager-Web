<template>
    <div>
        <login-content />
    </div>
</template>

<script lang="ts">
import LoginContent from "@/components/Pages/Login/content/LoginContent.vue";
import { defineComponent } from "vue";

export default defineComponent({
    name: "LoginPage",
    components: { LoginContent },
});
</script>

<style scoped></style>
