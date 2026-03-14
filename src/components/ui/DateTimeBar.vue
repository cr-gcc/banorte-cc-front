<script setup>
	import { ref, onUnmounted } from 'vue';
	import { dateFormate } from '@/utils/dateFormat';

	const date = ref(dateFormate.spanishFormatDate(new Date()));

	const interval = setInterval(() => {
		date.value = dateFormate.spanishFormatDate(new Date());
	}, 1000);

	onUnmounted(() => clearInterval(interval));
</script>

<template>
	<div class="mt-3 px-4">
		<div class="flex justify-end">
			<span class="font-semibold text-red-700">{{ date }}</span>
		</div>
	</div>
</template>