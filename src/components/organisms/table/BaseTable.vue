<script setup>
	import { ref } from 'vue';
	
	const props = defineProps({
		headers: {
			type: Array,
			required: true
		},
		data: {
			type: Array,
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
</script>
<template>
	<div>
		<table :class="['table-auto w-full border-collapse border', borderClass]">
			<thead>
				<tr :class="['text-left', thrClass]">
					<th v-for="header in headers" :key="header.value" class="px-1">
						{{ header.text }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="row in data" :key="row.id">
					<td v-for="header in headers" :key="header.value" class="px-1 text-left text-sm">
						<slot :name="`item-${header.value}`" :row="row" :value="row[header.value]">
							{{ row[header.value] }}
						</slot>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>