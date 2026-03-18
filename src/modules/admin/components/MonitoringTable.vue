<script setup>
	import BaseTable from '@/components/organisms/table/BaseTable.vue';
	import BaseButton from '@/components/atoms/buttons/BaseButton.vue';
	
	const headers = [
		{ text: 'Campaña', value: 'campaign' },
		{ text: 'Tipificación', value: 'typification' },
		{ text: 'RFC', value: 'rfc' },
		{ text: 'Lead ID', value: 'lead_id' },
		{ text: 'Duración', value: 'duration' },
		{ text: 'Acciones', value: 'actions' }
	];
	const data = [
		{ campaign: 'WECON011', typification:100001, rfc: 'FOGR040512', lead_id: '97005407', duration: '00:00:00'},
		{ campaign: 'WECON011', typification:100001, rfc: 'CAOA840302', lead_id: '97005407', duration: '00:00:00'}
	];
</script>
<template>
	<div>
		<BaseTable
			:headers="headers"
			:data="data"
			borderClass="border-red-800"
			thrClass="bg-red-800 text-white"
		>
			<template #item-actions="{ row }">
				<BaseButton size="sm" styleClass="text-gray-600">
					<i class="fa-solid fa-play"></i>
				</BaseButton>
				<BaseButton size="sm" styleClass="text-gray-600">
					<i class="fa-solid fa-eye"></i>
				</BaseButton>
				<BaseButton size="sm" styleClass="text-gray-600">
					<i class="fa-solid fa-download"></i>
				</BaseButton>
			</template>
		</BaseTable>
	</div>	
</template>