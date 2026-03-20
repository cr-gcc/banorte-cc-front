<script setup>
	import { computed } from 'vue';
	
	const props = defineProps({
		option: Object,
		size: {
			type: String,
			default: 'md',
			validator: (value) => ['sm', 'md', 'lg'].includes(value)
		},
		selected: Boolean,
		disabled: Boolean
	})

	const emit = defineEmits(['select'])

	const computedClasses = computed(() => {
		let classes = ['flex', 'items-center', 'py-0.5'];
		
		if (props.size === 'sm') classes.push('text-sm px-1');
		else if (props.size === 'md') classes.push('text-base px-1.5');
		else if (props.size === 'lg') classes.push('text-lg px-2');

		if (props.disabled) classes.push('text-gray-400 cursor-default');
		else classes.push('hover:bg-gray-200 cursor-pointer');

		if (props.selected && !props.disabled) classes.push('bg-gray-100 font-semibold');

		return classes.join(' ');
	});

	const clickedOption = () => {
		if (!props.disabled) {
			emit('select', props.option.value)
		}
	}
</script>
<template>
	<div
		@click="clickedOption"
		:class="computedClasses"
  >
    <span class="break-words whitespace-normal">{{ option.label }}</span>
  </div>
</template>
