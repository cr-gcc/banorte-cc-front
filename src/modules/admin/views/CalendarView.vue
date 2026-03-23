<script setup>
	import { ref } from 'vue';
	import Calendar from '@/modules/admin/components/feedback/Calendar.vue';
	import PaymentsDaysModal from '@/modules/admin/components/modals/calendar/PaymentsDaysModal.vue';

	const paymentsDaysModal = ref(false);
	const date = ref({ day: null, month: null, year: null });

	const openPaymentsDaysModal = (paymentDate) => {
		paymentsDaysModal.value = true;
		date.value = paymentDate;
	}
</script>

<template>
	<div>
		<div class="mb-2">
			<h1 class="text-4xl text-red-700 font-semibold">Calendario</h1>
		</div>
		<!-- Leyenda -->
		<div class="flex justify-end gap-4 mb-4">
			<div class="flex items-center gap-1">
				<p>Fecha Actual <i class="fa-solid fa-square text-red-700"></i></p>
			</div>
			<div class="flex items-center gap-1">
				<p>Fecha promesa de pago <i class="fa-solid fa-square text-red-800"></i></p>
			</div>
		</div>
		<!-- Calendario -->
		<div class="mb-4">
			<Calendar @day-selected="openPaymentsDaysModal" />
		</div>
		<PaymentsDaysModal v-model="paymentsDaysModal" :date="date" />
	</div>
</template>