import AdminLayout from '@/layouts/AdminLayout.vue'
import CalendarView from '@/views/admin/CalendarView.vue'

export default [
	{
		path: '/admin',
		component: AdminLayout,
		redirect: '/admin/calendario',
		meta: { role: 'admin' },
		children: [
			{
				path: 'calendario',
				name: 'admin.calendario',
				component: CalendarView
			}
		]
	}
]