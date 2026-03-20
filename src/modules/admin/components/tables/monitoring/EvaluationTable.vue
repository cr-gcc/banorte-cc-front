<script setup>
	import { ref, computed } from 'vue';
	import BaseSelect from '@/components/organisms/select/BaseSelect.vue';

	const options = [
		{ label: 'Cumple', value: 0 },
		{ label: 'No Cumple', value: 0 },
	];

	const props = defineProps({
		data: {
			type: Object,
			required: true
		},
		thrClass: {
			type: String,
			default: ''
		},
		borderClass: {
			type: String,
			default: 'border-white'
		}
	});

	const qualifications = ref([]);
	
	const percent = computed(() => {
		return qualifications.value.reduce((total, item) => total + (item || 0), 0);
	});	

</script>
<template>
	<div>
		<table :class="['table-fixed w-full border-collapse border mb-2', borderClass]">
			<thead>
				<tr :class="['text-left', thrClass]">
					<th class="px-1 w-2/7">
						<span class="font-semibold">{{ data.header.chapter }}</span>
					</th>
					<th class="px-1 w-1/7">
						<span class="font-semibold">Porcentaje: <span class="text-red-700">{{ percent }}%</span></span>
					</th>
					<th class="px-1 w-4/7">
						<span class="font-semibold">{{ data.header.description }}</span>
					</th>
				</tr>
			</thead>
			<tbody class="text-left">
				<tr v-for="(body, ind) in data.body" :key="data.header.slug + '-' + body.id" class="border-b border-gray-300">
					<td class="px-1">{{ body.point }}</td>
					<td class="px-1">
						<BaseSelect	
							type="single"
							v-model="qualifications[ind]"
							:options="options.map(opt => ({ 
								...opt, 
								value: opt.label === 'Cumple' ? body.value : 0 
							}))"
							size="md"
							classInput="bg-white"
							placeholder="Seleccionar"
						/>
					</td>
					<td class="px-1">{{ body.description }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>