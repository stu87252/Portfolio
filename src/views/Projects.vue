<template>
<section class="bg-white h-fit min-h-screen dark:bg-gray-900 antialiased">
    <div class="h-14 flex items-center flex-row">
        <div class="h-full text-white">
            <router-link :to="{ name: 'Home' }">
                <p class=" inline-block p-4 items-center h-full pl-8 pr-8 hover:bg-gray-800">Home</p>
            </router-link>
            <router-link :to="{ name: 'About' }">
                <p class=" inline-block p-4 items-center h-full pl-8 pr-8 hover:bg-gray-800">About</p>
            </router-link>
            <router-link :to="{ name: 'Projects' }">
                <p class="text-[#0DFC30] inline-block p-4 items-center h-full pl-8 pr-8 bg-gray-800">Projects</p>
            </router-link>
            <router-link :to="{ name: 'Contact' }">
                <p class=" inline-block p-4 items-center h-full pl-8 pr-8 hover:bg-gray-800">Contact</p>
            </router-link>
        </div>
    </div>
  <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-12">
    <div class="max-w-2xl mx-auto text-center h-fit">
      <h2 class="text-2xl pb-2 font-semibold sm:text-5xl h-fit text-transparent bg-clip-text bg-gradient-to-br from-[#0DFC30] to-[#6ACCBE]">
        My projects
      </h2>
      <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
        
      </p>
    </div>

    <div class="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
      <div class="space-y-4 border-b border-gray-200 md:border-none" v-for="project in projects">
        <span
          class="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          {{project.client}}
        </span>
        <router-link :to="{name: 'info', params: {code: project.name}}">
        <h3 class="text-2xl pt-4 hover:text-[#0DFC30] transition duration-300 font-bold leading-tight text-gray-900 dark:text-white">
          {{ project.name }}
        </h3>
        </router-link>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
          {{ project.description_eng_short }}
        </p>
        <router-link :to="{name: 'info', params: {code: project.name} }"
          class="hover:text-[#0DFC30] text-white transition duration-300 bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          role="button">
          View project
          <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</section>
</template>
<script>
import { ref } from 'vue'
import AllProjects from '@/data/projects.js'
export default {
    setup() {
        const projects = ref(AllProjects)
        return { projects }
    }
}
</script>