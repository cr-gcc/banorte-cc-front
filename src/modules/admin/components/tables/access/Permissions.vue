<script setup>
	import { ref, watch } from 'vue';
	
	const form = ref({
		permissions_id: [],
	});
	const props = defineProps({
		permissions: {
			type: Object,
			required: true,
		},
	});
	
	const emits = defineEmits(['update:permissions']);
	
	watch(form.value, () => {
		emits('update:permissions', form.value.permissions_id);
	});
</script>

<template>
	<div>
		<div v-for="(permission, index) in permissions" :key="index" class="divide-y-1 divide-white mb-4">
			<h4 class="text-base text-black font-semibold mb-1">{{ index }}</h4>
			<div class="grid grid-cols-3 gap-2">
				<div v-for="(per, ind) in permission" :key="ind" class="flex items-center">
					<input
						type="checkbox"
						class="w-4 h-4 mr-2 accent-red-600"
						v-model="form.permissions_id"
						:value="per.id"
					/>
					<label class="text-black">{{ per.name }}</label>
				</div>
			</div>
		</div>
	</div>
</template>
