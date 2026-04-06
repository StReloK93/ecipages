<template>
   <Dialog
      v-model:visible="showDialog"
      modal
      :header="isEditMode ? 'Userni tahrirlash' : 'Yangi user qo‘shish'"
      :style="{ width: '666px' }"
      @hide="closeDialog"
   >
      <Form
         v-if="showDialog"
         :key="formKey"
         id="user-role-form"
         v-slot="$form"
         :resolver="resolver"
         :initialValues="initialValues"
         @submit="submitForm"
         class="min-h-[300px]"
      >
         <div class="py-4">
            <div class="mb-4 flex flex-col gap-1.5">
               <label class="text-sm text-gray-500">F.I.SH</label>
               <InputText name="name" size="small" placeholder="F.I.SH" class="w-full" />
               <Message v-if="$form.name?.invalid" severity="error" size="small" variant="simple">
                  {{ $form.name.error?.message }}
               </Message>
            </div>

            <div class="mb-4 flex flex-col gap-1.5">
               <label class="text-sm text-gray-500">Login</label>
               <InputText name="login" size="small" placeholder="Login" class="w-full" />
               <Message v-if="$form.login?.invalid" severity="error" size="small" variant="simple">
                  {{ $form.login.error?.message }}
               </Message>
            </div>

            <Divider />

            <div class="mb-6 flex flex-col gap-1.5">
               <table class="w-full">
                  <thead>
                     <tr>
                        <th class="text-left text-sm text-gray-700 pb-2">Bo'linma</th>
                        <th class="text-center text-sm text-gray-700 pb-2">O'zgartirishga ruhsat</th>
                        <th class="text-center text-sm text-gray-700 pb-2">Tasdiqlashga ruhsat</th>
                     </tr>
                  </thead>

                  <tbody>
                     <tr v-for="role in organizationRoles" :key="role.organization_id">
                        <td>
                           <ToggleButton
                              :modelValue="role.can_view"
                              @update:modelValue="updateOrganizationRole(role.organization_id, 'can_view', $event)"
                              onIcon="pi pi-lock-open"
                              offIcon="pi pi-lock"
                              class="w-full rowed"
                              size="small"
                              :onLabel="role.short_name"
                              :offLabel="role.short_name"
                           />
                        </td>

                        <td class="px-4 border-x border-gray-100">
                           <ToggleButton
                              :modelValue="role.can_change"
                              @update:modelValue="updateOrganizationRole(role.organization_id, 'can_change', $event)"
                              :disabled="!role.can_view"
                              onIcon="pi pi-lock-open"
                              offIcon="pi pi-lock"
                              class="w-full"
                              size="small"
                              onLabel="Ruhsat"
                              offLabel="Ruhsat yo'q"
                           />
                        </td>

                        <td class="px-4 py-0.5">
                           <ToggleButton
                              :modelValue="role.can_success"
                              @update:modelValue="updateOrganizationRole(role.organization_id, 'can_success', $event)"
                              :disabled="!role.can_view"
                              onIcon="pi pi-lock-open"
                              offIcon="pi pi-lock"
                              class="w-full"
                              size="small"
                              onLabel="Ruhsat"
                              offLabel="Ruhsat yo'q"
                           />
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <div class="mb-4 flex flex-col gap-1.5">
               <label class="text-sm text-gray-500">Tasdiqlashga ruhsatlar</label>
               <Listbox
                  name="boss_professions"
                  :options="bossProfessions ?? []"
                  multiple
                  optionValue="id"
                  optionLabel="name"
                  class="w-full"
               />
            </div>

            <div class="flex flex-col gap-1.5">
               <label class="text-sm text-gray-500">Admin</label>
               <div class="flex items-center gap-3">
                  <ToggleSwitch name="role" />
               </div>
            </div>
         </div>
      </Form>

      <template #footer>
         <Button
            label="Bekor qilish"
            size="small"
            severity="secondary"
            :disabled="submitLoading"
            @click="closeDialog"
         />
         <Button
            type="submit"
            form="user-role-form"
            :label="isEditMode ? 'Saqlash' : 'Qo‘shish'"
            size="small"
            :loading="submitLoading"
         />
      </template>
   </Dialog>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import * as yup from "yup";
import { yupResolver } from "@primevue/forms/resolvers/yup";

import { IOrganization, IUser } from "@/Interfaces";
import { useFetchDecorator } from "@/modules/useFetch";
import OrganizationRepo from "@/repositories/OrganizationRepo";
import BossProfessionRepo from "@/repositories/BossProfessionRepo";
import UserRepo from "@/repositories/UserRepo";
import { useUserStore } from "@/stories/UserStore";

const AuthStore = useUserStore();
type BossProfessionOption = {
   id: number;
   name: string;
};

type UserOrganizationRole = {
   organization_id: number;
   can_view: boolean;
   can_change: boolean;
   can_success: boolean;
};

type DialogUser = {
   id: number;
   name: string;
   login: string;
   role: boolean | number;
   boss_professions?: Array<number | { id: number }>;
   organization_roles?: UserOrganizationRole[];
};

type FormValues = {
   name: string;
   login: string;
   boss_professions: number[];
   role: boolean;
};

type OrganizationRoleRow = {
   organization_id: number;
   short_name: string;
   can_view: boolean;
   can_change: boolean;
   can_success: boolean;
};

const emit = defineEmits<{
   created: [];
   updated: [];
}>();

const showDialog = ref(false);
const submitLoading = ref(false);
const formKey = ref(0);
const editingUser = ref<DialogUser | null>(null);

const { data: organizations, execute: executeOrganizations } = useFetchDecorator<IOrganization[]>(
   OrganizationRepo.index,
);

const { data: bossProfessions, execute: executeBossProfessions } = useFetchDecorator<BossProfessionOption[]>(
   BossProfessionRepo.index,
);

const resolver = yupResolver(
   yup.object({
      name: yup.string().trim().required("F.I.SH majburiy").min(3, "F.I.SH kamida 3 ta belgidan iborat bo'lishi kerak"),
      login: yup.string().trim().required("Login majburiy").min(3, "Login kamida 3 ta belgidan iborat bo'lishi kerak"),
      boss_professions: yup.array().of(yup.number().required()).default([]),
      role: yup.boolean().default(false),
   }),
);

const isEditMode = computed(() => !!editingUser.value);

const initialValues = ref<FormValues>({
   name: "",
   login: "",
   boss_professions: [],
   role: false,
});

const organizationRoles = ref<OrganizationRoleRow[]>([]);

function getDefaultFormValues(): FormValues {
   return {
      name: "",
      login: "",
      boss_professions: [],
      role: false,
   };
}

function buildEmptyOrganizationRoles() {
   organizationRoles.value = (organizations.value ?? []).map((organization) => ({
      organization_id: organization.id,
      short_name: organization.short_name,
      can_view: false,
      can_change: false,
      can_success: false,
   }));
}

function resetState() {
   editingUser.value = null;
   initialValues.value = getDefaultFormValues();
   buildEmptyOrganizationRoles();
   formKey.value++;
}

function fillFormFromUser(user: IUser) {
   initialValues.value = {
      name: user.name ?? "",
      login: user.login ?? "",
      boss_professions: user.success_roles?.map((role) => role.boss_profession.id) ?? [],
      role: Boolean(user.role),
   };

   organizationRoles.value = (organizations.value ?? []).map((organization) => {
      const found = user.organization_roles?.find((role) => Number(role.organization_id) === Number(organization.id));

      return {
         organization_id: organization.id,
         short_name: organization.short_name,
         can_view: found ? true : false,
         can_change: Boolean(found?.can_change),
         can_success: Boolean(found?.can_success),
      };
   });

   formKey.value++;
}

function updateOrganizationRole(
   organizationId: number,
   field: "can_view" | "can_change" | "can_success",
   value: boolean,
) {
   const role = organizationRoles.value.find((item) => item.organization_id === organizationId);
   if (!role) return;

   role[field] = value;

   if (field === "can_view" && !value) {
      role.can_change = false;
      role.can_success = false;
   }
}

function makePayload(values: FormValues) {
   return {
      ...values,
      organization_roles: organizationRoles.value
         .map((role) => ({
            organization_id: role.organization_id,
            can_change: role.can_view ? role.can_change : false,
            can_success: role.can_view ? role.can_success : false,
            can_view: role.can_view,
         }))
         .filter((role) => role.can_view === true),
   };
}

async function submitForm(event: any) {
   if (!event.valid || submitLoading.value) return;

   submitLoading.value = true;

   try {
      const payload = makePayload(event.values);

      if (editingUser.value) {
         const { data } = await UserRepo.update(editingUser.value.id, payload);
         if (AuthStore.user?.id === data.data.id) {
            AuthStore.setUser(data.data);
         }
         emit("updated");
      } else {
         await UserRepo.store(payload);
         emit("created");
      }

      closeDialog();
   } catch (error) {
      console.error(error);
   } finally {
      submitLoading.value = false;
   }
}

async function openCreateDialog() {
   if (!organizations.value?.length) {
      await executeOrganizations();
   }

   if (!bossProfessions.value?.length) {
      await executeBossProfessions();
   }

   resetState();
   showDialog.value = true;
}

async function openEditDialog(user: DialogUser) {
   if (!organizations.value?.length) {
      await executeOrganizations();
   }

   if (!bossProfessions.value?.length) {
      await executeBossProfessions();
   }

   submitLoading.value = true;

   try {
      // Aks holda detail endpointdan to'liq userni olib kel.
      const fullUser = user.organization_roles ? user : await UserRepo.show(user.id);
      editingUser.value = fullUser;
      fillFormFromUser(fullUser);
      showDialog.value = true;
   } catch (error) {
      console.error(error);
   } finally {
      submitLoading.value = false;
   }
}

function closeDialog() {
   showDialog.value = false;
   resetState();
}

defineExpose({
   openCreateDialog,
   openEditDialog,
});

onMounted(async () => {
   await Promise.all([executeOrganizations(), executeBossProfessions()]);
   buildEmptyOrganizationRoles();
});
</script>
