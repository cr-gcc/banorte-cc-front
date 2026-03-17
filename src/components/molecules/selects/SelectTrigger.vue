<script setup>
	defineProps({
		label: {
			type: String,
			default: 'Seleccionar'
		}
	})

	defineEmits(['toggle'])
</script>
<template>
  <div
    @click="$emit('toggle')"
    class="bg-white base-square-input-md cursor-pointer flex justify-between items-center px-2"
  >
    <span class="break-words">
      {{ label }}
    </span>
    <i class="fa fa-angle-down" aria-hidden="true"></i>
  </div>
</template>
