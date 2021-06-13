import { computed, reactive } from "vue";
import * as UserRequest from "@/requests/user";

const state = reactive({
    user: [],
    roles: [],
    token: "",

    error: "",
});

const getters = reactive({
    isLoggedIn: computed(() => state.token !== ""),
});

const actions = {
    async getUser() {
        const user = await UserRequest.getUser();

        if (user == null) {
            state.error = "error fetching user";
        }
        state.user = user;

        return true;
    },
    async login(email: string, password: string) {
        const token = await UserRequest.login(email, password);
        if (token == null) {
            state.error = "error";
            return false;
        }

        state.token = token;
        return true;
    },
};

export default { state, getters, ...actions };
