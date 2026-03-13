import AuthLayout from '@/layouts/AuthLayout.vue'
import LoginView from '@/views/auth/LoginView.vue'

export default [
	{
		path: '/login',
		component: AuthLayout,
		children: [
			{
				path: '',
				name: 'login',
				component: LoginView
			}
		]
	}
]