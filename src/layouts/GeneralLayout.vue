<script setup>
	const principalImage = `${import.meta.env.VITE_BASE_URL}assets/images/wallpapers/corporativo.jpeg`;

</script>

<template>
	<div class="bg-cover bg-no-repeat bg-center h-screen" :style="`background-image: url('${principalImage}')`">
		<div class="flex justify-center h-screen">
			<div class="hidden lg:block lg:w-2/3 bg-cover bg-center h-full"></div>
			<router-view />
		</div>
	</div>
</template>