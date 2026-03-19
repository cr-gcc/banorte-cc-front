<script setup>
	import { computed } from 'vue'
	import BaseModal from '@/components/molecules/modals/BaseModal.vue'
	import BaseButton from '@/components/atoms/buttons/BaseButton.vue'

	const props = defineProps({
		modelValue: {
			type: Boolean,
			required: true
		}
	})

	const isOpen = computed({
		get: () => props.modelValue,
		set: (value) => emit('update:modelValue', value)
	});

	const emit = defineEmits(['close'])

	const closeProfileModal = () => {
		isOpen.value = false
	}
</script>
<template>
	<BaseModal
		v-model="isOpen"
		:title="'Perfil'"
		modalClass="max-w-sm"
		:closeOnBackdrop="false"
		:closeOnEscape="false"
	>
		<template #body>
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-4">
					<div class="h-8 w-8 rounded-full bg-gray-200"></div>
					<div class="flex flex-col">
						<span class="text-lg font-semibold">Cristobal Gutierrez Chaves</span>
						<span class="text-sm text-gray-500">GUCC900726</span>
						<span class="text-sm text-gray-500">Administrador</span>
						<span class="text-sm text-gray-500">cris.gcc@outlock.com</span>
					</div>
				</div>
			</div>
		</template>
		<template #options>
			<BaseButton
				@click="closeProfileModal()"
				type="button"
				size="sm"
				rounded="pill-sm"
				styleClass="bg-gray-600 text-white"
			>
				Cerrar
			</BaseButton>
		</template>
	</BaseModal>
</template>