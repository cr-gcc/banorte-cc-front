<script setup>
import { computed } from 'vue';

const props = defineProps({
	label: {
		type: String,
		default: 'Seleccionar'
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
	let classes = ['cursor-pointer', 'flex', 'justify-between', 'items-center', 'w-full', 'py-0.5'];
	
	if (props.size === 'sm') classes.push('px-1 text-sm');
	else if (props.size === 'md') classes.push('px-1.5 text-base');
	else if (props.size === 'lg') classes.push('px-2 text-lg');

	if (props.rounded === 'none') classes.push('rounded-none');
	else if (props.rounded === 'square') classes.push('rounded');
	else if (props.rounded === 'pill') classes.push('rounded-full');

	return classes.join(' ');
});

defineEmits(['toggle'])
</script>
<template>
  <div
    @click="$emit('toggle')"
    :class="[computedClasses, styleClass]"
  >
    <span class="break-words">
      {{ label }}
    </span>
    <i class="ml-2 fa fa-angle-down" aria-hidden="true"></i>
  </div>
</template>
