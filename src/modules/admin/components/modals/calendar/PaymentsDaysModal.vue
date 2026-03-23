<script setup>
	import { ref, computed, watch } from 'vue';
	import BaseModal from '@/components/molecules/modals/BaseModal.vue';
	import BaseButton from '@/components/atoms/buttons/BaseButton.vue';
	
	const message = ref('');
	const variant = ref('');
	const loading = ref(false);

	const props = defineProps({
		modelValue: {
			type: Boolean,
			default: false
		},
    date: {
      type: Object,
      default: () => ({ day: null, month: null, year: null })
    }
	});

	const emit = defineEmits(['update:modelValue']);
	
	
	const isOpen = computed({
		get: () => props.modelValue,
		set: (value) => emit('update:modelValue', value)
	});

	watch(() => props.modelValue, () => {
		if (props.modelValue) {
			getPaymentsDays();
		}
	});

	const getPaymentsDays = async () => {
		
	};

	const closeModal = () => {
		isOpen.value = false;
	};
</script>

<template>
	<BaseModal
		title="Días de Pago"
		modal-class="max-w-5xl" 
		v-model="isOpen"
		:message="message"
		:variant="variant"
		:loading="loading"
	>
		<template #body>
			<div class="h-full overflow-auto mb-2">
        <table class="table-fixed w-full mt-2">
          <thead class="text-left">
            <tr>
							<th class="px-1 font-bold">#</th>
							<th class="px-1">Fecha de venta</th>
							<th class="px-1">Fecha de validación</th>
							<th class="px-1">Campaña</th>
							<th class="px-1 w-1/2">Comentario</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-300">
						<tr>
							<td class="px-1 py-1">1</td>
							<td class="px-1 py-1">2026-02-20</td>
							<td class="px-1 py-1">2026-02-20</td>
							<td class="px-1 py-1">Campaña 1</td>
							<td class="px-1 py-1 break-words whitespace-normal text-justify">Fecha promesa de pago para el 30 de marzo de 2026.</td>
						</tr>
						<tr>
							<td class="px-1 py-1">2</td>
							<td class="px-1 py-1">2026-02-20</td>
							<td class="px-1 py-1">2026-02-20</td>
							<td class="px-1 py-1">Campaña 1</td>
							<td class="px-1 py-1 break-words whitespace-normal text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</td>
						</tr>
						<tr>
							<td class="px-1 py-1">3</td>
							<td class="px-1 py-1">2026-02-20</td>
							<td class="px-1 py-1">2026-02-20</td>
							<td class="px-1 py-1">Campaña 1</td>
							<td class="px-1 py-1 break-words whitespace-normal text-justify">Fecha promesa de pago para el 30 de marzo de 2026.</td>
						</tr>
						<tr>
							<td class="px-1 py-1">4</td>
							<td class="px-1 py-1">2026-02-20</td>
							<td class="px-1 py-1">2026-02-20</td>
							<td class="px-1 py-1">Campaña 1</td>
							<td class="px-1 py-1 break-words whitespace-normal text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</td>
						</tr>
						<tr>
							<td class="px-1 py-1">5</td>
							<td class="px-1 py-1">2026-02-20</td>
							<td class="px-1 py-1">2026-02-20</td>
							<td class="px-1 py-1">Campaña 1</td>
							<td class="px-1 py-1 break-words whitespace-normal text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</td>
						</tr>
					</tbody>
				</table>
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
				Aceptar
			</BaseButton>
		</template>
	</BaseModal>
</template>