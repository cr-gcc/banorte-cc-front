<script setup>
</script>

<template>
	<aside class="min-w-64 flex flex-col justify-between bg-gray-200 rounded-lg mt-4 ml-4 mr-4 mb-4">
		<div class="px-4 py-6">
      <ul class="space-y-1">
        <li>
          <router-link to="/admin/calendario" class="block rounded-lg px-4 py-2 font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-700">
            <i class="fa-solid fa-calendar mr-2"/>Calendario
          </router-link>
        </li>
        <li>
          <router-link to="/admin/monitoreo" class="block rounded-lg px-4 py-2 font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-700">
            <i class="fa-solid fa-eye mr-2"/>Monitoreo
          </router-link>
        </li>
				<li>
					<hr class="border-gray-300"/>
				</li>
				<li>
					<router-link to="/admin/" class="block rounded-lg px-4 py-2 font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-700">
						<i class="fa-solid fa-user-lock mr-2"/>Roles / Permisos
					</router-link>
				</li>
				<li>
					<router-link to="/admin/" class="block rounded-lg px-4 py-2 font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-700">
						<i class="fa-solid fa-user mr-2"/>Usuarios
					</router-link>
				</li>
      </ul>
    </div>
	</aside>
</template>