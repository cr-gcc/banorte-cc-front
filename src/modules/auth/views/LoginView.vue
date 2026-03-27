<script setup>
	import { ref } from 'vue';
	import { useAuthStore } from '@/stores/authStore'
	import { useRouter } from 'vue-router'
	import Message from '@/components/atoms/feedback/Message.vue';
	import ProgressBar from '@/components/atoms/feedback/ProgressBar.vue';

	const authStore = useAuthStore()
	const router = useRouter()

	const logo = `${import.meta.env.VITE_BASE_URL}assets/images/logos/banorte_seguros_b.png`;
	const user = ref('');
	const password = ref('');
	const message = ref('');
	const variant = ref('error');
	const progressBar = ref(false);

	const login = async () => {
		const credentials = {
			user: user.value,
			password: password.value
		}
		message.value = '';
		variant.value = 'error';
		if (credentials.user === '' || credentials.password === '') {
			message.value = 'Usuario y contraseña son obligatorios';
			variant.value = 'error';
			return;
		}
		progressBar.value = true;

		authStore.login(credentials)
			.then(() => {
				if(authStore.user.rol.role_type === 'admin'){
					router.push('/admin');
				}else{
					router.push('/agente');
				}
			})
			.catch((error) => {
				message.value = error.response.data.message;
				variant.value = 'error';
			})
			.finally(() => {
				progressBar.value = false;
			});
	}
</script>

<template>
  <div class="flex items-center w-full max-w-md ml-auto px-6 lg:w-2/6 bg-black opacity-80">
		<div class="flex-1">
			<div class="text-center">
				<div class="flex justify-center mx-auto">
					<img class="w-auto md:h-12 sm:h-10" :src="logo" alt="Logo Banorte Seguros">
				</div>
			</div>
			<div class="mt-8">
				<form @submit.prevent="login()">
					<div class="mb-4">
						<label for="user" class="block text-red-800 mb-2">Usuario</label>
						<input v-model="user" type="text" name="user" id="user" class="block w-full px-4 py-2 text-gray-600 border rounded-lg bg-gray-200 border-red-400  focus:border-red-600 focus:ring-red-600 focus:outline-none focus:ring focus:ring-opacity-40" />
					</div>
					<div class="mb-6">
						<label for="password" class="block text-red-800 mb-2">Contraseña</label>
						<input v-model="password" type="password" name="password" id="password" class="block w-full px-4 py-2 text-gray-600 border rounded-lg bg-gray-200 border-red-400  focus:border-red-600 focus:ring-red-600 focus:outline-none focus:ring focus:ring-opacity-40"/>
					</div>
					<div>
						<button type="submit" class="w-full px-4 py-2 text-white transform bg-red-800 rounded-lg hover:bg-red-600 focus:outline-none cursor-pointer">
							Iniciar sesión
						</button>
					</div>
				</form>
				<div v-if="message" class="mt-2">
					<Message :message="message" :variant="variant" />
				</div>
				<div v-if="progressBar" class="mt-2">
					<ProgressBar/>  
				</div>
			</div>
		</div>
	</div>
</template>