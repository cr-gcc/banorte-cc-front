<script setup>
	import { useRouter } from 'vue-router'
	import { useAuthStore } from '@/stores/authStore'
	const router = useRouter()
	const authStore = useAuthStore()

	const goToHome = () => {
		if (authStore.isAuthenticated) {
			if (authStore.user.role === 'admin') {
				router.push({ name: 'admin' })
			} else if (authStore.user.role === 'agent') {
				router.push({ name: 'agent' })
			}
		} else {
			router.push({ name: 'login' })
		}
	}
</script>

<template>
	<div class="flex flex-col items-center justify-center h-full">
		<h1 class="text-4xl font-bold text-red-700 mb-4">Acceso Denegado</h1>
		<p class="text-xl text-gray-600 mb-8">No tienes permisos para ver esta página.</p>
		<button @click="goToHome()" class="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition-colors">
			Volver al Inicio
		</button>
	</div>
</template>
