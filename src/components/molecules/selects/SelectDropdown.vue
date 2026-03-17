<template>
	<div
		v-if="open"
		class="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
	>
		<slot />
	</div>
</template>
<script setup>
	defineProps({
		open: Boolean
	})
</script>
