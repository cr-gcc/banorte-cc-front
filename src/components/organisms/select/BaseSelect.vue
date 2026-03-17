<script setup>
	import { ref, computed, onMounted, onUnmounted } from 'vue'
	import SelectTrigger from '@/components/molecules/selects/SelectTrigger.vue'
	import SelectDropdown from '@/components/molecules/selects/SelectDropdown.vue'
	import SelectOption from '@/components/molecules/selects/SelectOption.vue'
	
	const openSelect = ref(false)
	const containerRef = ref(null)

	const props = defineProps({
		type: {
			type: String,
			default: 'single',
			validator: (value) => ['single', 'multi'].includes(value)
		},
		options: {
			type: Array,
			required: true
		},
		modelValue: {
			type: [Array, String, Number],
			default: null
		},
		label: {
			type: String,
			default: ''
		},
		classLabel: {
			type: String,
			default: ''
		},
		placeholder: {
			type: String,
			default: 'Seleccionar'
		}
	})

	const emit = defineEmits(['update:modelValue'])

	const normalizedValue = computed(() => {
		if (props.type === 'multi') {
			return Array.isArray(props.modelValue) ? props.modelValue : []
		}
		return props.modelValue
	})

	const totalOptions = computed(() => {
		if (props.type === 'single') {
			return props.options
		}
		else {
			return [
				{ value: 0, label: 'Todos los items' }, 
				...props.options
			]
		}
	})

	const optionsLabel = computed(() => {
		if (props.type === 'single') {
			return props.options.find(o => o.value === normalizedValue.value)?.label || ''
		}
		else {
			if (normalizedValue.value.includes(0)) {
				return 'Todos los items'
			}
			if (normalizedValue.value.length === 0) {
				return ''
			}
			return normalizedValue.value
				.map(val => props.options.find(o => o.value === val)?.label)
				.filter(Boolean)
				.join(', ')
		}
	})

	const selectOption = (value) => {
		if (props.type === 'single') {
			emit('update:modelValue', value)
			//emit('change', value)
			openSelect.value = false
		}
		else {
			let newValue = []
			// Caso: selecciona "Todos"
			if (value === 0) {
				newValue = [0]
			} else {
				// Elimina "Todos" si existía
				newValue = props.modelValue.filter(v => v !== 0)
				// Toggle normal
				if (newValue.includes(value)) {
					newValue = newValue.filter(v => v !== value)
				} else {
					newValue.push(value)
				}
			}
			emit('update:modelValue', newValue)
			//emit('change', newValue)
		}
	}
 
	const closeOnClickOutside = (e) => {
		if (containerRef.value && !containerRef.value.contains(e.target)) {
			openSelect.value = false
		}
	}

	onMounted(() => {
		document.addEventListener('click', closeOnClickOutside)
	})

	onUnmounted(() => {
		document.removeEventListener('click', closeOnClickOutside)
	})
</script>
<template>
	<div class="w-full">
		<label v-if="label" :class="['block mb-1', classLabel]">{{ label }}</label>
		<div class="relative" ref="containerRef">
			<SelectTrigger
				:label="optionsLabel || placeholder"
				:placeholder="placeholder"
				@toggle="openSelect = !openSelect"
			/>
			<SelectDropdown :open="openSelect">
				<SelectOption
					v-for="option in totalOptions"
					:key="option.value"
					:option="option"
					:selected="
						type === 'single'
							? normalizedValue === option.value
							: normalizedValue.includes(option.value)
					"
					:disabled="option.value === ''"
					@select="selectOption"
				/>
			</SelectDropdown>
		</div>
	</div>
</template>