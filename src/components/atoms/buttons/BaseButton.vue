<script setup>
	import { computed } from 'vue';

	const props = defineProps({
		type: {
			type: String,
			default: 'button'
		},
		size: {
			type: String,
			default: 'md',
			validator: (value) => ['sm', 'md', 'lg'].includes(value)
		},
		rounded: {
			type: String,
			default: 'square',
			validator: (value) => ['none', 'square', 'pill'].includes(value)
		},
		styleClass: {
			type: String,
			default: ''
		}
	})

	const computedClasses = computed(() => {
		let classes = ['focus:outline-none', 'appearance-none', 'cursor-pointer'];
		
		if (props.size === 'sm') classes.push('px-2 py-0.5 text-sm');
		else if (props.size === 'md') classes.push('px-3 py-1 text-base');
		else if (props.size === 'lg') classes.push('px-4 py-1.5 text-lg');

		if (props.rounded === 'none') classes.push('rounded-none');
		else if (props.rounded === 'square') classes.push('rounded');
		else if (props.rounded === 'pill') classes.push('rounded-full');

		return classes.join(' ');
	});
</script>
<template>
	<button :type="type" :class="[computedClasses, styleClass]">
		<slot />
	</button>
</template>
