<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <div>
                <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            </div>
            <form class="mt-8 space-y-6" @submit.prevent="submit" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div>
                    <div>
                        <label for="email-address" class="sr-only">Email address</label>
                        <input
                            v-model="form.email"
                            :class="{ 'border-8 border-red-400 rounded-xl hover:border-red-200': form.errors }"
                            id="email-address"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required=""
                            class="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Email address"
                        />
                    </div>
                    <div class="mt-2">
                        <label for="password" class="sr-only">Password</label>
                        <input
                            v-model="form.password"
                            :class="{ 'border-8 border-red-400 rounded-xl hover:border-red-200': form.errors }"
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required=""
                            class="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Password"
                        />
                    </div>
                </div>
                <div>
                    <h2 class="text-red-500 text-xs">{{ form.errors }}</h2>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <label for="remember_me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
                    </div>

                    <div class="text-sm">
                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
                    </div>
                </div>

                <div>
                    <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { inject, reactive } from "vue";
export default {
    name: "LoginContent",
    setup() {
        const form = reactive({
            email: "",
            password: "",
            errors: "",
        });

        const userStore = inject("userStore");
        const router = inject("router");
        const submit = async function () {
            form.errors = "";
            if (await userStore.login(form.email, form.password)) {
                router.push("/");
            }

            form.errors = userStore.state.error;
        };

        return {
            form,
            submit,
        };
    },
};
</script>

<style scoped></style>
