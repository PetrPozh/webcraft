import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import('./pages/IndexPage.vue')
    },
    {
        name: 'About',
        path: '/about',
        component: () => import('./pages/AboutPage.vue')
    }
]

export default createRouter({
    routes,
    // history: createWebHistory('/webc/')
    history: createWebHistory()
})