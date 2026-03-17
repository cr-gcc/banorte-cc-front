<script setup>
	defineProps({
		type: {
			type: String,
			default: 'button'
		},
		styleClass: {
			type: String,
			default: ''
		}
	})
</script>
<template>
	<button :type="type" :class="styleClass">
		<slot />
	</button>
</template>
