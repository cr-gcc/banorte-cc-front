<script setup>
import BaseInput from '@/components/atoms/inputs/BaseInput.vue';

defineProps({
	label: {
    type: String,
    required: true
  },
	id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
	type: {
    type: String,
    default: 'text'
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
	classInput: {
		type: String,
		default: ''
	},
	classLabel: {
		type: String,
		default: ''
	},
	size: {
		type: String,
		default: 'md'
	},
	rounded: {
		type: String,
		default: 'square'
	}
})

defineEmits(['update:modelValue'])
</script>
<template>
  <div class="mb-2">
    <label :for="id" :class="['block mb-1', classLabel]">{{ label }}</label>
    <BaseInput
      :id="id"
      :name="name"
      :type="type"
      :size="size"
      :rounded="rounded"
      :modelValue="modelValue"
      :styleClass="classInput"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </div>
</template>
