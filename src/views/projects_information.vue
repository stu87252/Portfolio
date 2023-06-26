<script setup>
import projects from '@/data/projects.js'
import AppAccordion from '@/components/AppAccordion.vue'
let url = window.location.href.split("/");
const project = url[url.length - 1]
let projectNumber;
for (let i = 0; i < projects.length; i++) {
    if (projects[i].name == project) {
        projectNumber = i
    }
}
</script>
<template>
    <div class="h-fit min-h-screen bg-gray-900">
        <div class="h-14 flex items-center flex-row">
            <div class="h-full text-white">
                <router-link :to="{ name: 'Home' }">
                    <p class=" inline-block p-4 items-center h-full lg:pl-8 lg:pr-8 hover:bg-gray-800">Home</p>
                </router-link>
                <router-link :to="{ name: 'About' }">
                    <p class=" inline-block p-4 items-center h-full lg:pl-8 lg:pr-8 hover:bg-gray-800">About</p>
                </router-link>
                <router-link :to="{ name: 'Projects' }">
                    <p class="text-[#0DFC30] inline-block p-4 items-center h-full lg:pl-8 lg:pr-8  bg-gray-800">Projects >
                        {{ projects[projectNumber].name }}
                    </p>
                </router-link>
                <router-link :to="{ name: 'Contact' }">
                    <p class=" inline-block p-4 items-center h-full lg:pl-8 lg:pr-8 hover:bg-gray-800">Contact</p>
                </router-link>
            </div>
        </div>
        <section class="bg-white dark:bg-gray-900 h-fit flex items-center justify-center flex-col">
            <div
                class="gap-8 items-center py-8 px-2 mx-auto max-w-screen-xl xl:gap-8 md:grid md:grid-cols-2 sm:py-12 lg:px-0">
                <div>
                    <img class="w-full rounded-xl" draggable="false" .src="projects[projectNumber].imgURL"
                        alt="Project image">
                    <p class=" font-light text-center text-gray-400 mt-4">{{ projects[projectNumber].timeframe_start }} - {{
                        projects[projectNumber].timeframe_end }} | {{ projects[projectNumber].client }} | <a
                            class="hover:underline" .href=projects[projectNumber].appUrl>View project</a></p>
                </div>
                <div class="mt-4 md:mt-0">
                    <h2
                        class="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#0DFC30] to-[#6ACCBE]">
                        {{ projects[projectNumber].slogan }}</h2>
                    <p class="mb-6 font-light md:text-lg text-gray-400">{{ projects[projectNumber].description_nl }}</p>
                </div>
            </div>
            <div class="w-full flex">
                <div class="w-full h-fit flex justify-center items-center md:gap-12 gap-8">
                    <li class="text-gray-400 font-light pb-8" v-for="language in projects[projectNumber].languages">{{
                        language }}</li>
                </div>
            </div>
            <hr class="w-[90%]">
        </section>
        <section class="w-full h-fit pb-44 bg-gray-900 pt-2">
            <div class="w-full pt-8 h-fit flex items-center justify-center">
                <div class="h-fit flex items-center justify-start pl-8">
                    <div class="h-12 aspect-square rounded-lg border-2 border-[#c5c5c5] flex items-center justify-center text-[#c5c5c5] hover:bg-gray-200 hover:text-black transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                        </svg>
                    </div>
                </div>
                <div class="w-[60%]">
                    <div class="text-2xl text-[#c5c5c5] pl-2 pb-1">How did i go to work</div>
                    <div class="bg-[#c5c5c5] w-full h-px">
                        
                    </div>
                </div>
            </div>
            <div class="w-full h-fit flex items-center justify-center">
                <div class="h-fit w-20 flex items-center justify-start pl-8"></div>
                <div class="w-[60%]">
                    <div class="text-md text-[#c5c5c5] pl-2 pb-1 w-full">
                        {{ projects[projectNumber].workway_nl }}
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>

export default {}  
</script>