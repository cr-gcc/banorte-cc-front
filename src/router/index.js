import { createRouter, createWebHistory } from 'vue-router'

import authRoutes from './authRoutes'
import adminRoutes from './adminRoutes'
import agentRoutes from './agentRoutes'

const base = import.meta.env.VITE_BASE_URL || "/";

const routes = [
	...authRoutes,
	...adminRoutes,
	...agentRoutes
]

const router = createRouter({
	history: createWebHistory(base),
	routes
})

export default router