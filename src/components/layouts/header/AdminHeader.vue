<script setup>
	import { ref, onMounted, onUnmounted } from 'vue'

	const logoPath = ref('/assets/images/logos/banorte_seguros_c.png');

	const isOpen = ref(false)
	const dropdownRef = ref(null)
	const userName = 'Cristobal Gutierrez'
	const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}`

	const logout = () => {
		// Aquí va tu lógica de logout
		console.log('Cerrando sesión...')
	}

	const toggleMenu = () => {
		isOpen.value = !isOpen.value
	}

	const closeDropdown = () => {
		isOpen.value = false
	}

	const handleClickOutside = (event) => {
		if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
			closeDropdown();
		}
	};

	// Cerrar el dropdown si se hace clic fuera
	onMounted( async () => {
		document.addEventListener('click', handleClickOutside);
		
	});

	onUnmounted(() => {
		document.removeEventListener('click', handleClickOutside);
	});
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
								<div ref="dropdownRef" class="relative">
									<button @click="toggleMenu()" class="focus:outline-none cursor-pointer ">
										<img 
											:src="avatarUrl"
											alt="avatar"
											class="w-10 h-10 rounded-full border-2 border-gray-700"
										>
									</button>
									<!-- Dropdown -->
									<li v-if="isOpen" class="absolute right-0 top-12 w-44 bg-gray-100 shadow-lg z-50">
										<a href="/perfil" class="block text-gray-700 px-4 py-2 text-sm hover:bg-white">
											Perfil
										</a>
										<button 
											@click="logout()"
											class="w-full text-left text-gray-700 px-4 py-2 text-sm cursor-pointer hover:bg-white"
										>
											Cerrar sesión
										</button>
									</li>
								</div>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>
</template>