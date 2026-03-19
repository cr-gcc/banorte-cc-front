<script setup>
	import { ref, computed } from 'vue';
	import BaseModal from '@/components/molecules/modals/BaseModal.vue';
	import BaseButton from '@/components/atoms/buttons/BaseButton.vue';
	
	const message = ref('');
	const variant = ref('');
	const loading = ref(false);
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
		title="Grabación"
		modal-class="max-w-sm" 
		v-model="isOpen"
		:message="message"
		:variant="variant"
		:loading="loading"
	>
		<template #body>
			<div class="bg-gray-200">
				<audio controls class="w-full p-2">
					<source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
					Tu navegador no soporta este elemento de audio.
				</audio>
			</div>
		</template>
		<template #options>
			<BaseButton
				@click="closeModal()"
				type="button"
				size="sm"
				rounded="pill-sm"
				styleClass="bg-gray-600 text-white"
			>
				Descargar
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