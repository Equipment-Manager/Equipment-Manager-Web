import { computed, reactive, readonly } from "vue";
import * as userRequest from "@/requests/user";

const state = reactive({
    user: [],
    permissions: [],
    token: "",
    error: "",
});

const getters = reactive({
    isLoggedIn: computed(() => state.token !== ""),
});

const actions = {
    async login(email, password) {
        const response = await userRequest.login(email, password);

        if (!response.status) {
            state.error = response.message;
            return false;
        }

        state.token = response.data.token;
        localStorage.setItem("token", response.data.token);
    },
    async getUser() {
        const response = userRequest.getUser();

        if (!response.status) {
            state.error = response.message;
            return false;
        }

        state.user = response.data.user;
        state.permissions = response.data.permissions;
        return true;
    },
    getToken() {
        state.token = localStorage.getItem("token");
    },
};

export default {
    state: readonly(state),
    getters,
    ...actions,
};
