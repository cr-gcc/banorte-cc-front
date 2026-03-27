import AdminLayout from '@/layouts/AdminLayout.vue'
import CalendarView from '@/modules/admin/views/CalendarView.vue'
import MonitoringView from '@/modules/admin/views/MonitoringView.vue'
import AccessView from '@/modules/admin/views/AccessView.vue'

export default [
	{
		path: '/admin',
		component: AdminLayout,
		redirect: '/admin/calendario',
		meta: {
			requiresAuth: true
		},
		children: [
			{
				path: 'calendario',
				name: 'admin.calendario',
				component: CalendarView
			},
			{
				path: 'monitoreo',
				name: 'admin.monitoreo',
				component: MonitoringView
			},
			{
				path: 'accesos',
				name: 'admin.access',
				component: AccessView
			}
		]
	}
]