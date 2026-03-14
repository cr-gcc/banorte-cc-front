<script setup>
	import { ref } from 'vue';

	const logoPath = ref('/assets/images/logos/banorte_seguros_c.png');
</script>

<template>
	<header class="bg-white/20 backdrop-blur-xl shadow-[0_5px_15px_rgba(0,0,0,0.4)] border border-white/30">
		<div class="mx-auto px-4">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <a class="block" href="/">
            <img :src="logoPath" alt="Logo" class="h-12 w-auto">
          </a>
        </div>
        <div class="md:flex md:items-center md:gap-10">
					<nav ref="navMenuRef" class="hidden md:block relative">
						<ul class="flex text-md text-red-700 items-center gap-2">
							<li>
								uju
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>
</template>