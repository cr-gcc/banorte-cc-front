import AgentLayout from '@/layouts/AgentLayout.vue'
import HomeView from '@/modules/agent/views/HomeView.vue'

export default [
	{
		path: '/agente',
		component: AgentLayout,
		redirect: '/agente/home',
		meta: {
			requiresAuth: true
		},
		children: [
			{
				path: 'home',
				name: 'agent.home',
				component: HomeView
			}
		]
	}
]