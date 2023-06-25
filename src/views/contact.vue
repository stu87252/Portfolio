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
        <div class="w-full grid grid-cols-1 p-16">
                <div class=" h-16 text-4xl flex items-center justify-center font-semibold text-center text-white">
                    <span class="text-transparent bg-clip-text bg-gradient-to-br from-[#0DFC30] to-[#6ACCBE]">Contact me!</span>
                </div>
            <div class=" h-28 flex items-center justify-center font-normal text-center text-white">
            <p class="w-3/5">
            Please feel free to contact me for any inquiries or questions. I am available via email or phone and will respond promptly. Looking forward to hearing from you soon!
            </p>
            </div>
            <div class=" h-80 gap-24 p-4 grid grid-cols-2">
                <div class="text-white gap-2 border border-[#C5C5C540] rounded-md flex items-center justify-center flex-col">
                    <div class="h-20 aspect-square bg-[#C5C5C520] flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </div>
                    <div><b class="hover:text-[#0DFC30] text-white transition duration-300">Phone</b></div>
                    <div>+31 6 866 15 350</div>
                </div>
                <div class="text-white gap-2 border border-[#C5C5C540] rounded-md flex items-center justify-center flex-col">
                    <div class="h-20 aspect-square bg-[#C5C5C520] flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </div>
                    <div><b class="hover:text-[#0DFC30] text-white transition duration-300">Email</b></div>
                    <div>jirzykerklaan@gmail.com</div>
                </div>
            </div>
        </div>
    </div>
</template>