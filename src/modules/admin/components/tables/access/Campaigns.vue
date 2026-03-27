<script setup>
	import { ref, watch } from 'vue';
	
	const form = ref({
		campaigns_id: [],
	});
	
	const props = defineProps({
		campaigns: {
			type: Array,
			required: true
		}
	});

	const emits = defineEmits(['update:campaigns']);

	watch(form.value, () => {
		emits('update:campaigns', form.value.campaigns_id);
	});
</script>

<template>
	<div>
		<table class="table-auto w-full min-w-max divide-y-1 divide-white mt-2">
			<thead class="text-left">
				<tr>
					<th class="px-1 py-1">✔️</th>
					<th class="px-1 py-1">Campañas</th>
				</tr>
			</thead>	
			<tbody>
				<tr v-for="campaign in campaigns" :key="campaign.value">
					<td class="px-1 py-1">
						<input
							type="checkbox"
							class="w-4 h-4 mr-2 accent-red-600"
							v-model="form.campaigns_id"
							:value="campaign.value"
						/>
					</td>
					<td class="px-1 py-1">{{ campaign.label }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>