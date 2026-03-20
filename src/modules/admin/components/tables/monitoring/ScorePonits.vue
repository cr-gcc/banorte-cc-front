<script setup>
	import { ref } from 'vue';
	
	const points = ref([
		'1.- Introducción',
		'2.- Experiencia en el Servicio',
		'3.- Manejo de Objeciones',
		'4.- Cierre de Venta',
		'5.- Despedida'
	]);
	const qualifications = ref([]);
</script>
<template>
	<div>
		<table class="w-auto">
			<tbody class="text-left">
				<tr v-for="(point, ind) in points" :key="ind">
					<td class="px-1">
						<span class="font-bold">{{ point }}</span>
					</td>
					<td class="bg-gray-300 px-1">
						<span class="font-bold">Nulo Conocimiento</span>
					</td>
				</tr>
				<tr>
					<td colspan="2" class="bg-red-700 text-white text-center">
						<span class="font-bold">Calificación</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>