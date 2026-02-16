<template>
   <section v-if="!isLoading" name="tabs" class="flex flex-col p-5">
      <nav class="flex gap-0.5 relative z-10">
         <template v-for="type in organization?.transport_types">
            <TabButton class="text-xl!" :active="currentTab == type.id" @click="currentTab = type.id!">
               {{ type.name }}
            </TabButton>
         </template>
      </nav>
      <main class="relative">
         <template v-for="type in organization?.transport_types">
            <Transition name="fade" mode="out-in">
               <ActiveTransportTab v-if="type.id === currentTab" :key="type.id" :transport_type="type" />
            </Transition>
         </template>
      </main>
   </section>
</template>

<script setup lang="ts">
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
   if (AuthStore.isAdmin) {
      await executeTransport({ id: props.id });
   } else {
      await executeTransport({ id: AuthStore.user?.organization_id });
   }

   if (organization.value && organization.value.transport_types[0]) {
      currentTab.value = organization.value.transport_types[0].id!;
   }
});
</script>
