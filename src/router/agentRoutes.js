import AgentLayout from '@/layouts/AgentLayout.vue'
import HomeView from '@/modules/agent/views/HomeView.vue'

export default [
	{
		path: '/agent',
		component: AgentLayout,
		redirect: '/agent/home',
		meta: { role: 'agent' },
		children: [
			{
				path: 'home',
				name: 'agent.home',
				component: HomeView
			}
		]
	}
]