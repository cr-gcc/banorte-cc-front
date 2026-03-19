<script setup>
	import { ref } from 'vue';
	import BaseTable from '@/components/organisms/table/BaseTable.vue';
	import BaseButton from '@/components/atoms/buttons/BaseButton.vue';
	import Record from '@/modules/admin/components/modals/monitoring/Record.vue';
	import FollowUp from '@/modules/admin/components/modals/monitoring/FollowUp.vue';
	
	const isOpenRecordModal = ref(false);
	const isOpenFollowUpModal = ref(false);
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

	const openRecordModal = () => {
		isOpenRecordModal.value = true;
	};

	const openFollowUpModal = () => {
		isOpenFollowUpModal.value = true;
	};
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
				<BaseButton 
					@click="openRecordModal()"
					styleClass="text-gray-600" 
					size="sm">
					<i class="fa-solid fa-play"></i>
				</BaseButton>
				<BaseButton
					@click="openFollowUpModal()"
					styleClass="text-gray-600" 
					size="sm">
					<i class="fa-solid fa-eye"></i>
				</BaseButton>
			</template>
		</BaseTable>
		<Record v-model="isOpenRecordModal" />
		<FollowUp v-model="isOpenFollowUpModal" />
	</div>	
</template>