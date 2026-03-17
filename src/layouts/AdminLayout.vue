<script setup>
	import Header from '@/modules/admin/components/AdminHeader.vue';
	import Footer from '@/components/organisms/Footer.vue';
	import Sidebar from '@/modules/admin/components/AdminSidebar.vue';
	import DateTimeBar from '@/components/molecules/DateTimeBar.vue';
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