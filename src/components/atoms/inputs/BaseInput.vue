<script setup>
	defineProps({
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
		styleClass: {
			type: String,
			default: ''
		}
	})

	defineEmits(['update:modelValue'])
</script>
<template>
  <input 
    :id="id" 
    :name="name"
		:type="type" 
    :value="modelValue"
		:class="styleClass"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
