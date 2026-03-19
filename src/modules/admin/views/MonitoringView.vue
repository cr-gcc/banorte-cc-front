<script setup>
	import { ref } from 'vue';
	import BaseSelect from '@/components/organisms/select/BaseSelect.vue';
	import FormInputLabel from '@/components/molecules/form/FormInputLabel.vue';
	import BaseButton from '@/components/atoms/buttons/BaseButton.vue';
	import ProgressBar from '@/components/atoms/feedback/ProgressBar.vue';
	import MonitoringTable from '@/modules/admin/components/MonitoringTable.vue';
	
	const loading = ref(false);
	const campaigns = [
		{ value: '1', label: 'Opción 1' },
		{ value: '2', label: 'Opción 2' },
		{ value: '3', label: 'Opción 3' }
	];
	const searchOptions = [
		{ value: '1', label: 'RFC' },
		{ value: '2', label: 'Lead ID' }
	];
	const typificationOptions = [
		{ value: '100001', label: '100001 - BUZON DE VOZ AG' },
		{ value: '100002', label: '100002 - FUERA DE SERVICIO' },
		{ value: '100004', label: '100004 - NO CONTESTA' },
		{ value: '100005', label: '100005 - OCUPADO' },
		{ value: '100006', label: '100006 - SIN EXTENSION' },
		{ value: '100008', label: '100008 - NO EXISTE' },
		{ value: '100009', label: '100009 - SEGUNDA LLAMADA TELEFONO NO EX' },
		{ value: '100010', label: '100010 - SEGUIMIENTO NO CONTESTA' },
		{ value: '200001', label: '200001 - ESTA DE VIAJE' },
		{ value: '200002', label: '200002 - FINADO' },
		{ value: '200003', label: '200003 - NUMERO EQUIVOCADO' },
		{ value: '200004', label: '200004 - OTRO LENGUAJE' },
		{ value: '200005', label: '200005 - NO LOCALIZABLE' },
		{ value: '400001', label: '400001 - CANCELO LA CUENTA' },
		{ value: '400003', label: '400003 - DESEMPLEADO' },
		{ value: '400004', label: '400004 - LLAMAR DESPUES' },
		{ value: '400005', label: '400005 - LO VA A PENSAR' },
		{ value: '400006', label: '400006 - MAL SERVICIO' },
		{ value: '400008', label: '400008 - MEJOR PRECIO COMPETENCIA' },
		{ value: '400009', label: '400009 - MOLESTO NO VOLVER A LLAMAR' },
		{ value: '400010', label: '400010 - NO CUMPLE CON POLITICAS DE CON' },
		{ value: '400011', label: '400011 - NO DESEA CONTAR CON DOS SEGURO' },
		{ value: '400012', label: '400012 - NO LE INTERESA' },
		{ value: '400013', label: '400013 - PREFIERE IR A SUCURSAL' },
		{ value: '400014', label: '400014 - YA CUENTA CON EL SEGURO OFERTA' },
		{ value: '400016', label: '400016 - SUCURSAL BANORTE' },
		{ value: '400017', label: '400017 - SE CORTO LLAMADA / ENTRA SIN AUT' },
		{ value: '400018', label: '400018 - ES CARO Y NO LO PUEDE PAGAR' },
		{ value: '400019', label: '400019 - CLIENTE NO DESEA CARGOS POR SE' },
		{ value: '400020', label: '400020 - PROBLEMAS CON SU CUENTA O TARJ' },
		{ value: '400021', label: '400021 - CUENTA O TC DE COBRO BLOQUEADA' },
		{ value: '400022', label: '400022 - CLIENTE COLGO DURANTE LA OFERT' },
		{ value: '400025', label: '400025 - LLAMAR MAS TARDE' },
		{ value: '500001', label: '500001 - VENTA 99' },
		{ value: '500002', label: '500002 - VENTA 129' },
		{ value: '500003', label: '500003 - VENTA 217' },
		{ value: '500004', label: '500004 - VENTA 158' },
		{ value: '500005', label: '500005 - VENTA RECUPERADA' },
		{ value: '500013', label: '500013 - VENTA 317' }
	];
	const form = ref({
		campaign: '',
		startDate: '',
		endDate: '',
		typeSearch: '',
		searchId: '',
		typification: '',
	});
</script>
<template>
	<div>
		<div class="mb-2">
			<h1 class="text-4xl text-red-700 font-semibold">Monitoreo</h1>
		</div>
		<div class="bg-gray-200 rounded-lg">
			<div class="px-4 py-2">
				<div class="grid grid-cols-3 gap-4 my-2 px-2">
					<div class="col-span-1">
						<BaseSelect
							type="single"
							v-model="form.campaign"
							:options="campaigns"
							label="Campaña"
							classLabel="text-red-900 font-semibold"
							classInput="bg-white"
							placeholder="Seleccionar"
						/>
					</div>
					<div class="col-span-1">
						<FormInputLabel
							id="startDate"
							name="startDate"
							type="date"
							v-model="form.startDate"
							label="Fecha de inicio"
							classLabel="text-red-900 font-semibold"
							classInput="bg-white"
							placeholder="Seleccionar"
						/>
					</div>
					<div class="col-span-1">
						<FormInputLabel
							id="endDate"
							name="endDate"
							type="date"
							v-model="form.endDate"
							label="Fecha de fin"
							classLabel="text-red-900 font-semibold"
							classInput="bg-white"
							placeholder="Seleccionar"
						/>
					</div>
				</div>
				<div class="grid grid-cols-3 gap-4 my-2 px-2">
					<div class="col-span-1">
						<BaseSelect
							type="single"
							v-model="form.typeSearch"
							:options="searchOptions"
							label="Tipo de búsqueda"
							classLabel="text-red-900 font-semibold"
							classInput="bg-white"
							placeholder="Seleccionar"
						/>
					</div>
					<div class="col-span-1">
						<FormInputLabel
							id="searchId"
							name="searchId"
							type="text"
							v-model="form.searchId"
							label="Identificador"
							classLabel="text-red-900 font-semibold"
							classInput="bg-white"
							placeholder="ID"
						/>
					</div>
					<div class="col-span-1">
						<BaseSelect
							type="single"
							v-model="form.typification"
							:options="typificationOptions"
							label="Tipificación"
							classLabel="text-red-900 font-semibold"
							classInput="bg-white"
							placeholder="Seleccionar"
						/>
					</div>
				</div>
				<div class="flex justify-end gap-2 my-2 px-2">
					<BaseButton
						type="button"
						size="sm"
						rounded="none"
						styleClass="bg-gray-600 text-white"
					>
						Limpiar
					</BaseButton>
					<BaseButton
						type="button"
						size="sm"
						rounded="none"
						styleClass="bg-gray-600 text-white"
					>
						Buscar
					</BaseButton>
				</div>
				<div v-if="loading" class="my-2 px-2">
					<ProgressBar/>
				</div>
				<div class="mt-4 mb-2 px-2">
					<MonitoringTable />
				</div>
			</div>
		</div>
	</div>
</template>