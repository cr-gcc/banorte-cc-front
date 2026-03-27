import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from "@/stores/authStore";

import generalRoutes from './generalRoutes'	
import authRoutes from './authRoutes'
import adminRoutes from './adminRoutes'
import agentRoutes from './agentRoutes'


const routes = [
	...generalRoutes,
	...authRoutes,
	...adminRoutes,
	...agentRoutes
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

router.beforeEach((to, from, next) => {
	const authStore = useAuthStore();
	const loggedIn = authStore.isAuthenticated;

	if (to.meta.requiresAuth && !loggedIn) {
		next({ name: 'login' });
	} else {
		next();
	}
})

export default router