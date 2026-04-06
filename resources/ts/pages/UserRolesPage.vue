<template>
   <section class="p-4">
      <UserRolesDialog ref="userRolesDialogRef" @created="fetchUsers" @updated="fetchUsers" />
      <div class="flex items-center justify-between mb-4">
         <div>
            <h2 class="text-2xl font-bold">Foydalanuvchilar</h2>
         </div>

         <div class="actions">
            <Button label="Foydalanuvchi qo'shish" icon="pi pi-plus" size="small" @click="onCreate" />
         </div>
      </div>
      <main class="p-4 bg-white rounded-md border border-gray-200">
         <DataTable :value="users" dataKey="id" size="small">
            <Column header="F.I.SH" field="name" style="width: 150px" />
            <Column header="Login" field="login" style="width: 80px" />

            <Column header="Admin" style="width: 80px">
               <template #body="{ data }">
                  <div class="flex items-center gap-3">
                     <Button
                        :icon="data.role ? 'pi pi-check' : 'pi pi-times'"
                        variant="text"
                        :severity="data.role ? 'success' : 'danger'"
                        size="small"
                        rounded
                        aria-label="Filter"
                     />
                  </div>
               </template>
            </Column>

            <Column header="Bo'linmalar" style="width: 200px">
               <template #body="{ data }">
                  <div class="flex flex-col gap-2.5 py-1">
                     <span
                        v-for="role in data.organization_roles"
                        :key="role.id"
                        class="text-sm text-gray-600 inline-flex gap-4 items-center"
                     >
                        <i
                           class="pi pi-pen-to-square text-sm!"
                           :class="[role.can_change ? 'text-teal-500' : 'text-gray-400']"
                        >
                        </i>
                        <i
                           class="pi pi-check-circle text-sm!"
                           :class="[role.can_success ? 'text-teal-500' : 'text-gray-400']"
                        >
                        </i>
                        <span>
                           {{ role.organization.short_name }}
                        </span>
                     </span>
                  </div>
               </template>
            </Column>

            <Column header="Tasdiqlovchilar" style="width: 280px">
               <template #body="{ data }">
                  <div class="flex flex-col gap-2.5 py-1">
                     <span
                        v-for="role in data.success_roles"
                        :key="role.id"
                        class="text-sm text-gray-600 inline-flex gap-4 items-center"
                     >
                        <i class="pi pi-check-circle text-sm! text-teal-500"> </i>
                        <span>
                           {{ role.boss_profession.name }}
                        </span>
                     </span>
                  </div>
               </template>
            </Column>
            <Column header="" style="width: 10px">
               <template #body="{ data }">
                  <Button
                     @click="onEdit(data)"
                     icon="pi pi-pencil"
                     severity="secondary"
                     rounded
                     size="small"
                     aria-label="Filter"
                  />
               </template>
            </Column>
         </DataTable>
      </main>
   </section>
</template>
<script setup lang="ts">
import UserRolesDialog from "@/components/UserRolesDialog.vue";
import { ref, onMounted } from "vue";
import { useFetchDecorator } from "@/modules/useFetch";
import UserRepo from "@/repositories/UserRepo";
import { IUser } from "@/Interfaces";

const userRolesDialogRef = ref<InstanceType<typeof UserRolesDialog> | null>(null);

function fetchUsers() {
   executeUsers();
}

function onCreate() {
   userRolesDialogRef.value?.openCreateDialog();
}

function onEdit(user: any) {
   userRolesDialogRef.value?.openEditDialog(user);
}
const { data: users, execute: executeUsers } = useFetchDecorator<IUser[]>(UserRepo.index);

onMounted(() => {
   executeUsers();
});
</script>
