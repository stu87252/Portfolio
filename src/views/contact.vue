<template>
    <div class="h-screen bg-gray-900">
        <div class="h-14 flex items-center flex-row">
            <div class="h-full text-white">
                <router-link :to="{name: 'Home'}">
                    <p class=" inline-block p-4 items-center h-full pl-8 pr-8 hover:bg-gray-800">Home</p>
                </router-link>
                <router-link :to="{name: 'About'}">
                    <p class=" inline-block p-4 items-center h-full pl-8 pr-8 hover:bg-gray-800">About</p>
                </router-link>
                <router-link :to="{name: 'Projects'}">
                    <p class=" inline-block p-4 items-center h-full pl-8 pr-8 hover:bg-gray-800">Projects</p>
                </router-link>
                <router-link :to="{name: 'Contact'}">
                    <p class="text-[#0DFC30] inline-block p-4 items-center h-full pl-8 pr-8 bg-gray-800">Contact</p>
                </router-link>
            </div>
        </div>
    </div>
</template>