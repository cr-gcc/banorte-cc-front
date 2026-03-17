import AdminLayout from '@/layouts/AdminLayout.vue'
import CalendarView from '@/modules/admin/views/CalendarView.vue'
import MonitoringView from '@/modules/admin/views/MonitoringView.vue'

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
			},
			{
				path: 'monitoreo',
				name: 'admin.monitoreo',
				component: MonitoringView
			}
		]
	}
]