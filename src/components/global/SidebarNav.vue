<template>
    <div class="flex">
        <!-- Backdrop -->
        <div :class="isOpen ? 'block' : 'hidden'" @click="isOpen = false" class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>
        <!-- End Backdrop -->

        <div :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
            <div class="flex items-center justify-center mt-8">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
            </div>

            <nav class="mt-10">
                <router-link class="flex items-center duration-200 mt-4 py-2 px-6 border-l-4" :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]" to="/">
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="currentColor" />
                        <path d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z" fill="currentColor" />
                    </svg>

                    <span class="mx-4">Dashboard</span>
                </router-link>

                <router-link class="flex items-center duration-200 mt-4 py-2 px-6 border-l-4" :class="[$route.name === 'Equipment' ? activeClass : inactiveClass]" to="/equipment">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>

                    <span class="mx-4">Equipment</span>
                </router-link>

                <router-link class="flex items-center duration-200 mt-4 py-2 px-6 border-l-4" :class="[$route.name === 'Requests' ? activeClass : inactiveClass]" to="/requests">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>

                    <span class="mx-4">Requests</span>
                </router-link>
            </nav>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useSidebar } from "../../stores/navbar";

export default {
    name: "SidebarNav",
    setup() {
        const { isOpen } = useSidebar();
        const activeClass = ref("bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100");
        const inactiveClass = ref("border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100");
        return {
            isOpen,
            activeClass,
            inactiveClass,
        };
    },
};
</script>
