<script setup>
import projects from '@/data/projects.js'
import AppAccordion from '@/components/AppAccordion.vue'
let url = window.location.href.split("/");
const project =  url[url.length - 1]
let projectNumber;
for(let i=0; i<projects.length; i++) {
    if(projects[i].name == project) {
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
                    <p class="text-[#0DFC30] inline-block p-4 items-center h-full lg:pl-8 lg:pr-8  bg-gray-800">Projects > {{ projects[projectNumber].name }}
                    </p>
                </router-link>
                <router-link :to="{ name: 'Contact' }">
                    <p class=" inline-block p-4 items-center h-full lg:pl-8 lg:pr-8 hover:bg-gray-800">Contact</p>
                </router-link>
            </div>
        </div>
        <section class="bg-white dark:bg-gray-900 h-fit">
            <div class="gap-8 items-center py-8 px-2 mx-auto max-w-screen-xl xl:gap-8 md:grid md:grid-cols-2 sm:py-12 lg:px-0">
                <div>
                    <img class="w-full rounded-xl" draggable="false" .src="projects[projectNumber].imgURL" alt="Project image">
                    <p class=" font-light text-center text-gray-400 mt-4">{{ projects[projectNumber].timeframe_start }} - {{ projects[projectNumber].timeframe_end }} | {{ projects[projectNumber].client }}</p>
                </div>
                <div class="mt-4 md:mt-0">
                    <h2 class="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#0DFC30] to-[#6ACCBE]">{{ projects[projectNumber].slogan }}</h2>
                    <p class="mb-6 font-light md:text-lg text-gray-400">{{ projects[projectNumber].description_eng }}</p>
                </div>
            </div>
            <div class="w-full flex">
                <div class="w-full h-fit flex justify-center items-center md:gap-12 gap-8">
                    <li class="text-gray-400 font-light pb-8" v-for="language in projects[projectNumber].languages">{{ language }}</li>
                </div>
            </div>
        </section>
    </div>
</template>
<script>

export default {}  
</script>