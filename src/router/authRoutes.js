import GeneralLayout from '@/layouts/GeneralLayout.vue'
import LoginView from '@/modules/auth/views/LoginView.vue'

export default [
	{
		path: '/login',
		component: GeneralLayout,
		meta: {
			requiresAuth: false
		},
		children: [
			{
				path: '',
				name: 'login',
				component: LoginView
			}
		]
	}
]