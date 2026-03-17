<script setup>
	import { ref } from 'vue';
	import BaseSelect from '@/components/organisms/select/BaseSelect.vue';
	
	const options = [
		{ value: '1', label: 'Opción 1' },
		{ value: '2', label: 'Opción 2' },
		{ value: '3', label: 'Opción 3' }
	];
	const searchOptions = [
		{ value: '1', label: 'RFC' },
		{ value: '2', label: 'Lead ID' }
	];
	const form = ref({
		campaign: '',
		startDate: '',
		endDate: '',
		typeSearch: '',
		searchId: '',
		
	});
	
</script>

<template>
	<div>
		<div class="mb-2">
			<h1 class="text-4xl text-red-700 font-semibold">Monitoreo</h1>
		</div>
		<div class="bg-gray-200 rounded-lg">
			<div class="px-4 py-2">
				<div class="grid grid-cols-5 gap-4 mt-2 my-2 px-2">
					<div class="col-span-1">
						<BaseSelect
							type="single"
							v-model="form.campaign"
							:options="options"
							label="Campaña"
							placeholder="Seleccionar"
						/>
					</div>
					<div class="col-span-1">
						<input type="date" v-model="form.startDate" class="base-input w-full" />
					</div>
					<div class="col-span-1">
						<input type="date" v-model="form.endDate" class="base-input w-full" />	
					</div>
					<div class="col-span-1">
						<BaseSelect
							type="single"
							v-model="form.typeSearch"
							:options="searchOptions"
							label="Tipo de búsqueda"
							placeholder="Seleccionar"
						/>
					</div>
					<div class="col-span-1">
						<input type="text" v-model="form.searchId" class="base-input w-full" placeholder="ID" />
					</div>
					<div class="col-span-1">

					</div>
				</div>
			</div>
		</div>
	</div>
</template>