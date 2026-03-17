<script setup>
	const props = defineProps({
		option: Object,
		selected: Boolean,
		disabled: Boolean
	})

	const emit = defineEmits(['select'])

	const clickedOption = () => {
		if (!props.disabled) {
			emit('select', props.option.value)
		}
	}
</script>
<template>
	<div
		@click="clickedOption"
		class="flex items-center px-3 py-1"
		:class="[
			disabled ? 'text-gray-400 cursor-default' : 'hover:bg-gray-200 cursor-pointer',
      { 'bg-gray-100 font-semibold': selected && !disabled }
    ]"
  >
    <span class="break-words whitespace-normal">{{ option.label }}</span>
  </div>
</template>
