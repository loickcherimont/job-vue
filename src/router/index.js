import { createRouter, createWebHistory } from 'vue-router' /** to use Vue Router correctly */

import LoginView from '@/views/LoginView.vue'
import JobsView from '@/views/JobsView.vue'
import NotFound from '@/views/NotFound.vue'

/**
 * To use Vue Router correctly 
 * Define all routes
 * And process not found case
 */
const routes = [
    { path: '/', name: 'login', component: LoginView },
    { path: '/login', redirect: '/'},
    { path: '/jobs', name: 'jobs', component: JobsView },
    { path: '/:pathMatch(.*)*', name: 'not found', component: NotFound}
]

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})