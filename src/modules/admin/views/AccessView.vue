<script setup>
	import { ref } from 'vue';
	import Message from '@/components/atoms/feedback/Message.vue';
	import BaseButton from '@/components/atoms/buttons/BaseButton.vue';
	import Campaigns from '@/modules/admin/components/tables/access/Campaigns.vue';
	import Permissions from '@/modules/admin/components/tables/access/Permissions.vue';
	import BaseSelect from '@/components/organisms/select/BaseSelect.vue';

	const message = ref('');
	const variant = ref('success');

	const form = ref({
		role_id: null,
		campaigns_id: [],
		permissions_id: [],
	});

	const campaigns = ref([
		{ label: 'Campaña 1', value: 1 },
		{ label: 'Campaña 2', value: 2 },
		{ label: 'Campaña 3', value: 3 },
	]);

	const permissions = ref({
    "Accesos": [
        {
            "id": 7,
            "name": "ver-accesos",
            "guard_name": "api",
            "group": "Accesos",
            "created_at": "2026-01-02T20:19:20.000000Z",
            "updated_at": "2026-01-02T20:19:20.000000Z"
        },
        {
            "id": 8,
            "name": "ver-roles",
            "guard_name": "api",
            "group": "Accesos",
            "created_at": "2026-01-02T20:19:20.000000Z",
            "updated_at": "2026-01-02T20:19:20.000000Z"
        },
        {
            "id": 9,
            "name": "crear-roles",
            "guard_name": "api",
            "group": "Accesos",
            "created_at": "2026-01-02T20:19:20.000000Z",
            "updated_at": "2026-01-02T20:19:20.000000Z"
        },
        {
            "id": 10,
            "name": "editar-roles",
            "guard_name": "api",
            "group": "Accesos",
            "created_at": "2026-01-02T20:19:20.000000Z",
            "updated_at": "2026-01-02T20:19:20.000000Z"
        },
        {
            "id": 11,
            "name": "borrar-roles",
            "guard_name": "api",
            "group": "Accesos",
            "created_at": "2026-01-02T20:19:20.000000Z",
            "updated_at": "2026-01-02T20:19:20.000000Z"
        },
        {
            "id": 12,
            "name": "ver-permisos",
            "guard_name": "api",
            "group": "Accesos",
            "created_at": "2026-01-02T20:19:20.000000Z",
            "updated_at": "2026-01-02T20:19:20.000000Z"
        },
        {
            "id": 13,
            "name": "crear-permisos",
            "guard_name": "api",
            "group": "Accesos",
            "created_at": "2026-01-02T20:19:20.000000Z",
            "updated_at": "2026-01-02T20:19:20.000000Z"
        },
        {
            "id": 14,
            "name": "editar-permisos",
            "guard_name": "api",
            "group": "Accesos",
            "created_at": "2026-01-02T20:19:20.000000Z",
            "updated_at": "2026-01-02T20:19:20.000000Z"
        },
        {
            "id": 15,
            "name": "borrar-permisos",
            "guard_name": "api",
            "group": "Accesos",
            "created_at": "2026-01-02T20:19:20.000000Z",
            "updated_at": "2026-01-02T20:19:20.000000Z"
        }
    ],
    "Admin": [
        {
            "id": 31,
            "name": "ver-menu-admin",
            "guard_name": "api",
            "group": "Admin",
            "created_at": "2026-01-02T20:19:21.000000Z",
            "updated_at": "2026-01-02T20:19:21.000000Z"
        }
    ]
	});

	const roles = ref([
		{ label: 'Admin', value: 1 },
		{ label: 'User', value: 2 },
	]);
</script>

<template>
	<div>
		<div class="mb-2">
			<h1 class="text-4xl text-red-700 font-semibold">Accesos</h1>
		</div>
		<div class="bg-gray-200 rounded-lg">
			<div class="px-4 py-2">
				<div class="flex justify-end my-3 gap-2">
					<div>
						<BaseSelect
							type="single"
							v-model="form.role_id"
							:options="roles"
							classLabel="text-red-900 font-semibold"
							classInput="bg-white"
							size="lg"
							placeholder="Roles del sistema"
						/>
					</div>
					<div>
						<BaseButton 
							size="md"
							rounded="none"
							styleClass="bg-white text-black"
						>
							Guardar Permisos - Campañas
						</BaseButton>
					</div>
				</div>
				<div v-if="message" class="mb-2">
					<Message :variant="variant" :message="message"/>
				</div>
				<div class="grid grid-cols-3 gap-4 mb-4">
					<div class="permissions col-span-2">
						<div class="border-3 border-gray-400 px-3 py-2 h-auto">
							<div class="text-center mb-2">
								<h3 class="text-xl text-red-700 font-semibold">Permisos</h3>
							</div>
							<div>
								<Permissions :permissions="permissions" @update:permissions="form.permissions_id = $event"/>
							</div>
						</div>
					</div>
					<div class="campaigns col-span-1">
						<div class="border-3 border-gray-400 px-3 py-2 h-auto">
							<div class="text-center mb-2">
								<h3 class="text-xl text-red-700 font-semibold">Campañas</h3>
							</div>
							<div>
								<Campaigns :campaigns="campaigns" @update:campaigns="form.campaigns_id = $event"/>
							</div>
						</div>
					</div>
				</div>
				{{ form }}
			</div>
		</div>
	</div>
</template>