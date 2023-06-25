<template>
    <div class="bg-[url('@/img/background.png')] bg-norepeat h-screen w-screen flex flex-col items-center justify-center text-center">
        <h1 class="text-5xl text-gray-200">Ik ben <span class="text-transparent bg-clip-text bg-gradient-to-br from-[#0DFC30] to-[#6ACCBE]">Jirzy Kerklaan</span><br>
       Een <span class="text-transparent bg-clip-text bg-gradient-to-br from-[#0DFC30] to-[#6ACCBE]">Software Developer</span></h1>
        <router-link :to="{name: 'About'}">
            <p class="w-56 h-fit text-xl bg-[#0DFC30] hover:bg-[#22c900] text-gray-900 hover:transition-colors transition-colors duration-300 ease-in-out rounded-full mt-4 flex items-center justify-center">Meer weten</p>
        </router-link>
    </div>
</template>