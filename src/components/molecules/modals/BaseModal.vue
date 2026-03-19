<script setup>
	//import { watch } from 'vue';
	import Message from '@/components/atoms/feedback/Message.vue';
	import ProgressBar from '@/components/atoms/feedback/ProgressBar.vue';
	
	const props = defineProps({
		modelValue: {
			type: Boolean,
			default: false
		},
		modalClass: {
			type: String,
			default: 'w-full max-w-md'
		},
		title: {
			type: String,
			default: ''
		},
		message: {
			type: String,
			default: ''
		},
		variant: {
			type: String,
			default: 'solid'
		},
		type: {
			type: String,
			default: 'info'
		},
		loading: {
			type: Boolean,
			default: false
		},
		closeOnBackdrop: {
			type: Boolean,
			default: false
		},
		closeOnEscape: {
			type: Boolean,
			default: false
		},
	});
	
	const emit = defineEmits(['update:modelValue']);
	
	const handleBackdropClick = () => {
		if (props.closeOnBackdrop) {
			emit('update:modelValue', false);
		}
	};

	// Cerrar con tecla ESC
	const handleEscape = (e) => {
		if (e.key === 'Escape' && props.modelValue && props.closeOnEscape) {
			emit('update:modelValue', false);
		}
	};

	if (typeof window !== 'undefined') {
		window.addEventListener('keydown', handleEscape);
	}
	/*
	watch(() => props.modelValue, (isOpen) => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	});
	*/
</script>

<template>
	<Teleport to="body">
		<Transition
			enter-active-class="transition-opacity duration-300 ease-out"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition-opacity duration-200 ease-in"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0"
		>
			<div 
				v-if="modelValue" 
				@click.self="handleBackdropClick"
				class="fixed inset-0 z-50 flex items-start justify-center bg-black/50 px-4 py-8 overflow-y-auto" 
				role="dialog" 
				aria-modal="true"
			>
				<Transition
					enter-active-class="transition-all duration-300 ease-out"
					enter-from-class="opacity-0 scale-95 translate-y-4"
					enter-to-class="opacity-100 scale-100 translate-y-0"
					leave-active-class="transition-all duration-200 ease-in"
					leave-from-class="opacity-100 scale-100 translate-y-0"
					leave-to-class="opacity-0 scale-95 translate-y-4"
				>
					<div 
						v-if="modelValue" 
						:class="['rounded-md bg-white pt-1.5 pb-2.5 px-3 shadow-xl w-full max-h-[calc(100vh-4rem)] overflow-y-auto', modalClass]"
					>
						<div class="header-content mb-1">
							<h2 class="text-2xl font-semibold text-red-900">{{ title }}</h2>
						</div>
						<div class="body-content mb-2">
							<slot name="body"/>	
						</div>
						<div v-if="message" class="mb-2">
							<Message :type="type" :variant="variant" :message="message" />
						</div>
						<div class="flex justify-end gap-2">
							<slot name="options"/>
						</div>
						<div v-if="loading" class="mt-2">
							<ProgressBar />
						</div>
					</div>
				</Transition>
			</div>
		</Transition>
	</Teleport>
</template>