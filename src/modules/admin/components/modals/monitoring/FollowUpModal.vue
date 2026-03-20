<script setup>
	import { ref, computed } from 'vue';
	import BaseModal from '@/components/molecules/modals/BaseModal.vue';
	import BaseButton from '@/components/atoms/buttons/BaseButton.vue';
	import GuidelineRatingTable from '@/modules/admin/components/tables/monitoring/GuidelineRatingTable.vue';

	const props = defineProps({
		modelValue: {
			type: Boolean,
			default: false
		}
	});

	const emit = defineEmits(['update:modelValue', 'confirm']);

	const isOpen = computed({
		get: () => props.modelValue,
		set: (value) => emit('update:modelValue', value)
	});

	const closeModal = () => {
		isOpen.value = false;
	};
</script>
<template>
	<BaseModal
		v-model="isOpen"
		title="Seguimiento"
		modalClass="w-full"
		:closeOnBackdrop="false"
		:closeOnEscape="false"
	>
		<template #body>
			<GuidelineRatingTable />
		</template>
		<template #options>
			<BaseButton
				@click="closeModal()"
				type="button"
				size="sm"
				rounded="pill-sm"
				styleClass="bg-gray-600 text-white"
			>
				Guardar
			</BaseButton>
			<BaseButton
				@click="closeModal()"
				type="button"
				size="sm"
				rounded="pill-sm"
				styleClass="bg-gray-600 text-white"
			>
				Salir
			</BaseButton>
		</template>
	</BaseModal>
</template>