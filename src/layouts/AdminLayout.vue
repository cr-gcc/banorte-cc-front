<script setup>
	import Header from '@/components/layouts/header/AdminHeader.vue';
	import Footer from '@/components/layouts/footer/Footer.vue';
	import Sidebar from '@/components/layouts/sidebar/AdminSidebar.vue';
	import DateTimeBar from '@/components/ui/DateTimeBar.vue';
</script>

<template>
	<Header />
	
	<div class="flex min-h-screen">
		<Sidebar />
		<main class="flex-1">
			<DateTimeBar />
			<div class="mr-4 mb-4">
				<div class="max-w-8xl mx-auto">
					<router-view />
				</div>
			</div>
		</main>
	</div>
	<Footer />
</template>