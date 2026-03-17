<script setup>
	import { computed } from 'vue';

	const props = defineProps({
		type: {
			type: String,
			default: 'text',
			validator: (value) => ['text', 'html'].includes(value)
		},
		variant: {
			type: String,
			default: 'error',
			validator: (value) => ['success', 'error'].includes(value)
		},
		message: {
			type: String,
			default: ''
		}
	});

	const variant = computed(() => {
		return props.variant === 'success' ? 'text-lime-700' : 'text-red-700';
	});
</script>

<template>
	<span v-if="type === 'text'" :class="['font-semibold', variant]">{{ message }}</span>
	<span v-if="type === 'html'" :class="['font-semibold', variant]" v-html="message"></span>
</template>