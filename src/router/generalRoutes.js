import GeneralLayout from '@/layouts/GeneralLayout.vue'
import HomeView from '@/modules/HomeView.vue'
import AccessDeniedView from '@/modules/AccessDeniedView.vue'

export default [
	{
		path: '/',
		component: GeneralLayout,
		meta: {
			requiresAuth: true
		},
		children: [
			{
				path: '',
				name: 'home',
				component: HomeView
			}
		]
	},
	{
		path: '/:pathMatch(.*)*',
		component: GeneralLayout,
		meta: {
			requiresAuth: false
		},
		children: [
			{
				path: '',
				name: 'access-denied',
				component: AccessDeniedView
			}
		]
	}
]