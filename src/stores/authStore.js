import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from '@/plugins/axios';

export const useAuthStore = defineStore('auth', () => {

	// State
	const user = ref(null);

	// Getters
	const isAuthenticated = computed(() => !!user.value);

	// El usuario tiene un único rol
	const role = computed(() => user.value?.roles?.[0] ?? null);

	// permissions llega como string[] desde el API
	const permissions = computed(() => user.value?.permissions ?? []);

	const hasRole = (roleName) => {
		if (!role.value) {
			return false;
		}
		return role.value.name === roleName;
	};

	const can = (permission) => {
		if (!user.value) {
			return false;
		}
		if (hasRole('Super-Admin')) {
			return true;
		}
		return permissions.value.includes(permission);
	};

	// Actions
	const setUser = (newUser) => {
		user.value = newUser;
	};

	const clearAuth = () => {
		user.value = null;
	};

	const me = async () => {
		try {
			const url = import.meta.env.VITE_API_ME;
			const response = await axios.get(url);
			user.value = response.data.user;
		} catch (error) {
			if (error.response?.status === 401) {
				clearAuth();
			} else {
				throw new Error('Error al obtener el usuario: ' + error);
			}
		}
	};

	const login = async (credentials) => {
		try {
			const url = import.meta.env.VITE_API_LOGIN;
			const response = await axios.post(url, credentials);
			user.value = response.data.user;
		} catch (error) {
			throw new Error('Error al iniciar sesión: ' + error);
		}
	};

	const logout = async () => {
		try {
			const url = import.meta.env.VITE_API_LOGOUT;
			await axios.post(url);
			clearAuth();
		} catch (error) {
			throw new Error('Error al cerrar sesión: ' + error);
		}
	};

	return {
		// State
		user,
		// Getters
		isAuthenticated,
		role,
		permissions,
		hasRole,
		can,
		// Actions
		setUser,
		clearAuth,
		me,
		login,
		logout,
	};
}, {
	// Persistencia
	persist: {
		storage: localStorage,
		paths: ['user'],
	},
});