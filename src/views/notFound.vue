<template>
    <div class="h-screen bg-gray-900 flex items-center justify-center flex-col">
        <p class="text-base font-semibold text-[#0DFC30]">Sorry</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">This project is not available</h1>
        <p class="mt-6 text-base leading-7 text-gray-600">Sorry, This project is currently not available to the public.</p>
        <router-link :to="{name: 'Projects'}" class="mt-8">
            <p class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Go back to projects
            </p>
        </router-link>
    </div>
</template>