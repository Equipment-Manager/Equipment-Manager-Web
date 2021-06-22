import { computed, reactive, readonly } from "vue";
import * as userRequest from "@/requests/user";

const state = reactive({
    user: [],
    permissions: [],
    token: "",
    error: "",
});

const getters = reactive({
    isAuthenticated: computed(() => state.token !== null && state.token !== ""),
});

const actions = {
    async login(email, password) {
        const response = await userRequest.login(email, password);
        if (!response.success) {
            state.error = response.message;
            return false;
        }

        state.token = response.data.token;
        localStorage.setItem("token", response.data.token);

        return true;
    },
    async getUser() {
        if (!getters.isAuthenticated) {
            return false;
        }
        const response = await userRequest.getUser();
        if (!response.success) {
            return false;
        }
        state.user = response.data.user;
        state.permissions = response.data.permissions;
        return true;
    },
    getToken() {
        state.token = localStorage.getItem("token");
    },
    logout() {
        state.token = "";
        state.user = [];
        state.permissions = [];
        state.error = "";
        localStorage.removeItem("token");
    },
};

export default {
    state: readonly(state),
    getters,
    ...actions,
};
