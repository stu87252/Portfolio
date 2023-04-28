import { createWebHistory, createRouter } from "vue-router"

import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Projects from "@/views/Projects.vue"
import Projects_info from "@/views/projects_information.vue"
import contact from "@/views/contact.vue"

import PageNotFound from "@/views/PageNotFound.vue"

const routes = [ 
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/projects",
        name: "Projects",
        component: Projects,
    },
    {
        path: '/view/:code',
        name: 'info',
        component: Projects_info,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: contact,
    },
    {
        path: "/:catchAll(.*)",
        name: "PageNotFound",
        component: PageNotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router