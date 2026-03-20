<script setup>
	import { ref } from 'vue';
	import BaseSelect from '@/components/organisms/select/BaseSelect.vue';
	const socio = ref('Contact Cinko');
	const call_date = ref('20/03/2026');
	const call_time = ref('10:00:00');
	const call_id = ref('1234567890');
	const etiqueta = ref('etiqueta');

	const form = ref({
		actividad: '',
		callType: '',
		campaignType: '',
		product: '',
		packagePlan: '',
		name: '',
		ventaNoVenta: '',
		accionamiento: '',
		reincidencia: '',
		callId: '',
		etiqueta: ''
	});
	const activityOptions = ref([
		{ label: 'Monitoreo Audio', value: 1 },
		{ label: 'Monitoreo Whisper', value: 2 }
	]);
	const callTypeOptions = ref([
		{ label: 'Inbound', value: 1 },
		{ label: 'Outbound', value: 2 }
	]);
	const campaignTypeOptions = ref([
		{ label: 'Campaña 1', value: 1 },
		{ label: 'Campaña 2', value: 2 }
	]);
	const productOptions = ref([
		{ label: 'PVH', value: 1 },
		{ label: 'Blindaje', value: 2 },
		{ label: 'Plenitud', value: 3 },
		{ label: 'Auto', value: 3 },
	]);
	const packagePlanOptions = ref([
		{ label: 'Paquete 1', value: 1 },
		{ label: 'Paquete 2', value: 2 }
	]);
	const callIdOptions = ref([
		{ label: 'Call ID 1', value: 1 },
		{ label: 'Call ID 2', value: 2 }
	]);
	const agentOptions = ref([
		{ label: 'Ejecutivo 1', value: 1 },
		{ label: 'Ejecutivo 2', value: 2 }
	]);
	const saleTypeOptions = ref([
		{ label: 'Venta', value: 1 },
		{ label: 'No Venta', value: 2 }
	]);
	const actionOptions = ref([
		{ label: 'RETROALIMENTACIÓN SUPERVISOR', value: 1 },
		{ label: 'RETROALIMENTACIÓN EJECUTIVO', value: 2 },
		{ label: 'MONITOREO', value: 3 },
		{ label: 'RETROALIMENTACIÓN CON SUPERVISOR', value: 4 },
		{ label: 'SEGUIMIENTO CON SUPERVISOR ', value: 5 },
		{ label: 'AUDITORIA', value: 6 }
	]);
	const relapseOptions = ref([
		{ label: 'Si', value: 1 },
		{ label: 'No', value: 2 }
	]);

</script>
<template>
	<div>
		<table class="w-full">
			<tbody class="text-left">
				<tr>
					<td class="px-1">Socio Comercial</td>
					<td class="bg-gray-300">
						<span class="px-1.5 text-gray-700">{{ socio }}</span>
					</td>
				</tr>
				<tr>
					<td class="px-1">Actividad</td>
					<td>
						<BaseSelect
							type="single"
							v-model="form.actividad"
							:options="activityOptions"
							size="md"
							rounded="none"
							classInput="bg-gray-300 text-gray-700"
							placeholder="Seleccionar"
						/>
					</td>
				</tr>
				<tr>
					<td class="px-1">Fecha de llamada</td>
					<td class="bg-gray-300">
						<span class="px-1.5 text-gray-700">{{ call_date }}</span>
					</td>
				</tr>
				<tr>
					<td class="px-1">Hora de llamada</td>
					<td class="bg-gray-300">
						<span class="px-1.5 text-gray-700">{{ call_time }}</span>
					</td>
				</tr>
				<tr>
					<td class="px-1">Tipo de llamada</td>
					<td>
						<BaseSelect
							type="single"
							v-model="form.callType"
							:options="callTypeOptions"
							size="md"
							rounded="none"
							classInput="bg-gray-300 text-gray-700"
							placeholder="Seleccionar"
						/>
					</td>
				</tr>
				<tr>
					<td class="px-1">Tipo de campaña</td>
					<td>
						<BaseSelect
							type="single"
							v-model="form.campaignType"
							:options="campaignTypeOptions"
							size="md"
							rounded="none"
							classInput="bg-gray-300 text-gray-700"
							placeholder="Seleccionar"
						/>
					</td>
				</tr>
				<tr>
					<td class="px-1">Producto</td>
					<td>
						<BaseSelect
							type="single"
							v-model="form.product"
							:options="productOptions"
							size="md"
							rounded="none"
							classInput="bg-gray-300 text-gray-700"
							placeholder="Seleccionar"
						/>
					</td>
				</tr>
				<tr>
					<td class="px-1">Paquete/Plan ofertado</td>
					<td>
						<BaseSelect
							type="single"
							v-model="form.packagePlan"
							:options="packagePlanOptions"
							size="md"
							rounded="none"
							classInput="bg-gray-300 text-gray-700"
							placeholder="Seleccionar"
						/>
					</td>
				</tr>
				<tr>
					<td class="px-1">Nombre del ejecutivo</td>
					<td>
						<BaseSelect
							type="single"
							v-model="form.agent"
							:options="agentOptions"
							size="md"
							rounded="none"
							classInput="bg-gray-300 text-gray-700"
							placeholder="Seleccionar"
						/>
					</td>
				</tr>
				<tr>
					<td class="px-1">Venta/No Venta</td>
					<td>
						<BaseSelect
							type="single"
							v-model="form.ventaNoVenta"
							:options="saleTypeOptions"
							size="md"
							rounded="none"
							classInput="bg-gray-300 text-gray-700"
							placeholder="Seleccionar"
						/>
					</td>
				</tr>
				<tr>
					<td class="px-1">Accionamiento</td>
					<td>
						<BaseSelect
							type="single"
							v-model="form.action"
							:options="actionOptions"
							size="md"
							rounded="none"
							classInput="bg-gray-300 text-gray-700"
							placeholder="Seleccionar"
						/>
					</td>
				</tr>
				<tr>
					<td class="px-1">Reincidencia</td>
					<td>
						<BaseSelect
							type="single"
							v-model="form.relapse"
							:options="relapseOptions"
							size="md"
							rounded="none"
							classInput="bg-gray-300 text-gray-700"
							placeholder="Seleccionar"
						/>
					</td>
				</tr>
				<tr>
					<td class="px-1">Id Llamada</td>
					<td>
						<BaseSelect
							type="single"
							v-model="form.callId"
							:options="callIdOptions"
							size="md"
							rounded="none"
							classInput="bg-gray-300 text-gray-700"
							placeholder="Seleccionar"
						/>
					</td>
				</tr>
				<tr>
					<td class="px-1">Id Llamada</td>
					<td class="bg-gray-300">
						<span class="px-1.5 text-gray-700">{{ call_id }}</span>
					</td>
				</tr>
				<tr>
					<td class="px-1">Etiqueta</td>
					<td class="bg-gray-300">
						<span class="px-1.5 text-gray-700">{{ etiqueta }}</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>