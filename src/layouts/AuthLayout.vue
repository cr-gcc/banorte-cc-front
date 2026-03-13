<script setup>
	const principalImage = '/assets/images/wallpapers/banorte.jpg';

</script>

<template>
	<div class="bg-gray-700">
		<div class="flex justify-center h-screen">
			<div class="hidden lg:block lg:w-2/3 bg-cover bg-center h-full"
				:style="`background-image: url('${principalImage}')`"></div>
			<router-view />
		</div>
	</div>
</template>