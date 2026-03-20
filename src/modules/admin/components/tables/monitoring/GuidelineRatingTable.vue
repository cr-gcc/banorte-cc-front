<script setup>
	import InitDataTable from '@/modules/admin/components/tables/monitoring/InitDataTable.vue';
	import EvaluationTable from '@/modules/admin/components/tables/monitoring/EvaluationTable.vue';
	import ScorePonits from '@/modules/admin/components/tables/monitoring/ScorePonits.vue';

	const borderClass="border-white"
	const thrClass="bg-gray-400 text-white"
	const data = [
		{
			header: { 
				slug: 'introduccion',
				chapter: '1. Introducción', 
				description: 'Descripción' 
			},
			body: [
				{ 
					id: 1,
					point: 'Saluda y se identifica correctamente',
					description: '-',
					value: 1.33
				},
				{ 
					id: 2,
					point: 'Identifica al cliente', 
					description: 'Garantizar que nos comunicamos con la persona correcta preguntado cortésmente por el nombre completo del cliente',
					value: 1.33
				},
				{ 
					id: 3,
					point: 'Indica Motivo de la llamada.', 
					description: 'Se menciona el motivo de la llamada de acuerdo a la campaña.',
					value: 1.34
				}
			]
		},
		{
			header: { 
				slug: 'experiencia',
				chapter: '2- Experiencia en el Servicio', 
				description: 'Descripción' 
			},
			body: [
				{ 
					id: 1,
					point: 'Actitud y Entusiasmo',
					description: 'Crear experiencia en el servicio por medio del tono de voz para generar un buen ritmo en la llamada y lograr captar el interés del cliente. ',
					value: 1.33
				},
				{ 
					id: 2,
					point: 'Cortesía y Empatía', 
					description: 'Generar confianza en el cliente para lograr un acercamiento de forma educada entendiendo la situación por la que está pasando en esos momentos.',
					value: 1.33
				},
				{ 
					id: 3,
					point: 'Espera Innecesaria.', 
					description: 'Proporcionar un servicio ágil al tener un flujo adecuado en la llamada evitando dejar al cliente en espera injustificadamente y en exceso.',
					value: 1.34
				},
				{
					id: 4,
					point: 'Interacción con el Cliente.', 
					description: 'Involucrar al cliente en la llamada  para provocar una reacción/conexión logrando tener una comunicación de 2 vías.',
					value: 1.34
				},
				{
					id: 5,
					point: 'Escucha Activa .', 
					description: 'Escuchar atentamente para responder correctamente, identificar puntos relevantes para la labor de venta y crear un acercamiento con el cliente.',
					value: 1.34
				}
			]
		}
	]
</script>
<template>
	<div class="mb-6">
		<!-- PRIMER BLOQUE -->
		<div class="grid grid-cols-2 gap-4 mb-2">
			<!-- DATOS DE MONITOREO -->
			<div class="mb-2">
				<div class="w-full text-center mb-1">
					<h1 class="text-lg text-red-700 font-semibold">Datos de monitoreo 811</h1>
				</div>
				<InitDataTable />
			</div>
			<!-- EVALUACIÓN -->
			<div class="mb-2 flex flex-col items-center">
				<h1 class="text-lg text-red-700 font-semibold mb-1">Evaluación</h1>
				<div class="mb-6">
					<ScorePonits />
				</div>
				<div class="text-center">
					<div class="bg-red-700 text-white w-auto mx-auto px-3 py-1 rounded-2xl">
						<h1 class="text-2xl font-semibold">Nota de calidad</h1>
						<span class="text-2xl font-bold">0.0%</span>
					</div>
				</div>
			</div>
		</div>
		<!-- SEGUNDO BLOQUE -->
		<div class="mb-2">
			<div class="w-full text-center mb-1">
				<h1 class="text-lg text-red-700 font-semibold">Lineamiento/Rubro de venta a evaluar</h1>
			</div>
			<div v-for="(item, index) in data" :key="index">
				<EvaluationTable :data="item" :thrClass="thrClass" :borderClass="borderClass" />
			</div>	
		</div>
	</div>
</template>