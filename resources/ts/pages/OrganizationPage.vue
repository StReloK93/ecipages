<template>
   <section
      v-if="!isLoading && (AuthStore.user?.organization_roles.length || AuthStore.isAdmin)"
      name="tabs"
      class="flex flex-col p-5"
   >
      <nav class="flex gap-0.5 pl-60 relative z-10 justify-between items-end">
         <main>
            <template v-for="type in organization?.transport_types">
               <TabButton :active="currentTab == type.id" @click="currentTab = type.id!">
                  {{ type.name }}
               </TabButton>
            </template>
         </main>
         <ChangeView :id="props.id" />
      </nav>
      <main class="relative">
         <template v-for="type in organization?.transport_types">
            <Transition name="fade" mode="out-in">
               <ActiveTransportTab v-if="type.id === currentTab" :key="type.id" :transport_type="type" />
            </Transition>
         </template>
      </main>
   </section>
   <section
      v-else-if="!isLoading && !AuthStore.user?.organization_roles.length"
      class="p-5 flex items-center justify-center h-full"
   >
      <main>
         <div class="flex items-center gap-3 text-3xl font-semibold mb-3">
            Sizda hech qanday bo'linmaga dostup yo'q.
         </div>
         <p class="text-gray-500">
            <i class="pi pi-info-circle text-xl"></i>
            Iltimos, administrator bilan bog'laning.
         </p>
      </main>
   </section>
   <section v-else class="p-5">
      <div class="flex items-center gap-3 text-gray-500">
         <i class="pi pi-spin pi-spinner text-xl"></i>
         Ma'lumotlar yuklanmoqda...
      </div>
   </section>
</template>

<script setup lang="ts">
import ChangeView from "@/components/ChangeView.vue";
import ActiveTransportTab from "../components/ActiveTransportTab.vue";
import OrganizationRepo from "../repositories/OrganizationRepo";
import TabButton from "../components/TabButton.vue";
import { onMounted, ref, Ref, watch } from "vue";
import { useFetchDecorator } from "@/modules/useFetch";
import { IOrganization } from "@/Interfaces";
import { useUserStore } from "@/stories/UserStore";
const props = defineProps(["id"]);
const currentTab: Ref<number | null> = ref(null);

const AuthStore = useUserStore();

const {
   execute: executeTransport,
   isLoading,
   data: organization,
} = useFetchDecorator<IOrganization>(OrganizationRepo.transports);

watch(
   () => props.id,
   (current) => executeTransport({ id: current }),
);
onMounted(async () => {
   await executeTransport({ id: props.id });

   if (organization.value && organization.value.transport_types[0]) {
      currentTab.value = organization.value.transport_types[0].id!;
   }
});
</script>
