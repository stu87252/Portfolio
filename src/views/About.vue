<script setup>
import { ref } from 'vue'
import technics from '@/data/technics.js'
import AppAccordion from '@/components/AppAccordion.vue'
import languages from '@/data/languages.js'
import aboutTexts from '@/data/about.js'
    let technic = ref(technics)
    let lang = ref(languages)
    let abouts = ref(aboutTexts)
    let language = 'NL'
</script>
<template>
    <div class="min-h-screen h-fit bg-gray-900">
        <div class="h-14 flex items-center flex-row">
            <div class="h-full text-white">
                <router-link :to="{ name: 'Home' }">
                    <p class=" inline-block p-4 items-center h-full md:pl-8 md:pr-8 sm:pl-6 sm:pr-6 hover:bg-gray-800">Home</p>
                </router-link>
                <router-link :to="{ name: 'About' }">
                    <p class="text-[#0DFC30] inline-block p-4 items-center h-full md:pl-8 md:pr-8 sm:pl-6 sm:pr-6 bg-gray-800">About</p>
                </router-link>
                <router-link :to="{ name: 'Projects' }">
                    <p class=" inline-block p-4 items-center h-full md:pl-8 md:pr-8 sm:pl-6 sm:pr-6 hover:bg-gray-800">Projects</p>
                </router-link>
                <router-link :to="{ name: 'Contact' }">
                    <p class=" inline-block p-4 items-center h-full md:pl-8 md:pr-8 sm:pl-6 sm:pr-6 hover:bg-gray-800">Contact</p>
                </router-link>
            </div>
        </div>
        <div class="w-full flex justify-center flex-col items-center lg:mt-0 mt-8">
            <div class="text-center h-fit w-96 text-white" v-for="about in abouts">
            <span v-if="language == 'NL'">
                <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#0DFC30] to-[#6ACCBE]">Hallo,<br>
                <span class="text-3xl">{{ about.title_nl }}</span></h1>
                <p class="p-4">{{ about.reason_par1_nl }}</p>
                <p class="p-4">{{ about.reason_par2_nl }}</p>
                <p class="p-4">{{ about.reason_par3_nl }}</p>
            </span>
            <span v-else-if="language == 'EN'">
                <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#0DFC30] to-[#6ACCBE]">Hallo,<br>
                <span class="text-3xl">{{ about.title_eng }}</span></h1>
                <p class="p-4">{{ about.reason_par1_eng }}</p>
                <p class="p-4">{{ about.reason_par2_eng }}</p>
                <p class="p-4">{{ about.reason_par3_eng }}</p>
            </span>
            </div>
            <div class="w-full min-h-screen h-fit bg-gray-900">
                <div class=" py-24" id="skills">
                    <div class="mx-auto max-w-7xl px-6 lg:px-8" v-for="about in abouts">
                    <span v-if="language == 'NL'">
                        <h2 class="text-center text-3xl font-bold leading-8 text-transparent bg-clip-text bg-gradient-to-br from-[#0DFC30] to-[#6ACCBE]">{{ about.skillstitle_nl }}</h2>
                    </span>
                    <span v-if="language == 'EN'">
                        <h2 class="text-center text-3xl font-bold leading-8 text-transparent bg-clip-text bg-gradient-to-br from-[#0DFC30] to-[#6ACCBE]">{{ about.skillstitle_eng }}</h2>
                    </span>
                        <h2 class="text-center text-md mb-8 font-light leading-8 text-white mt-4">Frameworks and technics</h2>
                        <div class="text-white h-fit grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 align-center text-center">
                            <AppAccordion v-for="technics in technic"  >
                                <template v-slot:title>
                                    <h1 class="font-semibold text-xl">{{ technics.name }}</h1>
                                </template>
                                <template v-slot:content>
                                    <div class=" " v-if="language == 'NL'">
                                        <p class="font-thin text-xl mt-2 text-white hover:text-white">{{ technics.reason_nl }}</p>
                                        <div v-for="project in technics.projects" class="inline-block text-white px-2 max-h-fit">
                                            <p class="w-fit mt-8 bg-gradient-to-br from-[#0DFC30] to-[#6ACCBE] rounded-full px-4 text-gray-900">{{ project }}</p>
                                        </div>
                                    </div>
                                    <div class=" " v-if="language == 'EN'">
                                        <p class="font-thin text-xl mt-2 text-white hover:text-white">{{ technics.reason_eng }}</p>
                                        <div v-for="project in technics.projects" class="inline-block text-white px-2 max-h-fit">
                                            <p class="w-fit mt-8 bg-gradient-to-br from-[#0DFC30] to-[#6ACCBE] rounded-full px-4 text-gray-900">{{ project }}</p>
                                        </div>
                                    </div>
                                </template>
                            </AppAccordion>
                        </div>
                        <h2 class="text-center text-md mb-8 font-light leading-8 text-white mt-4 mt-8 lg:mt-4">Languages</h2>
                        <div class="text-white h-fit grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 align-center text-center">
                            <AppAccordion v-for="langs in lang"  >
                                <template v-slot:title>
                                    <h1 class="font-semibold text-xl">{{ langs.name }}</h1>
                                </template>
                                <template v-slot:content>
                                    <div class=" " v-if="language == 'NL'">
                                        <p  class="font-thin text-xl mt-2 text-white hover:text-white">{{ langs.reason_nl }}</p>
                                    </div>
                                    <div class=" " v-if="language == 'EN'">
                                        <p class="font-thin text-xl mt-2 text-white hover:text-white">{{ langs.reason_eng }}</p>
                                    </div>
                                </template>
                            </AppAccordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div class="w-full h-20 fixed bottom-0">
            <a href="#skills">
                <div class="w-14 hidden sm:flex rounded-full float-right mr-12 aspect-square bg- flex items-center justify-center bg-gradient-to-br from-[#0DFC30] to-[#6ACCBE] hover:from-[#6ACCBE] hover:to-[#0DFC30] transition duration-300 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                </div>
            </a>
        </div>
    </footer>
</template>
<script>
export default {}
</script>