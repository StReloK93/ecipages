<template>
   <section v-if="!isLoading" name="tabs" class="flex flex-col p-8">
      <Breadcrumb
         :model="[
            { label: 'Bosh sahifa', command: () => $router.push({ name: 'home' }) },
            { label: organization?.short_name },
         ]"
         class="bg-transparent! p-0! mb-2"
      >
         <template #separator> <i class="pi pi-angle-right text-sm!" /> </template
      ></Breadcrumb>
      <nav class="flex gap-0.5 border-b border-b-gray-300 dark:border-zinc-600">
         <template v-for="type in organization?.transport_types">
            <TabButton :active="currentTab == type.id" @click="currentTab = type.id!">
               {{ type.name }}
            </TabButton>
         </template>
      </nav>
      <template v-for="type in organization?.transport_types">
         <ActiveTransportTab v-if="type.id == currentTab" :transport_type="type" />
      </template>
   </section>
   <main v-else class="grid-rows-[28px_28px_1fr] grid gap-0.5 p-8">
      <Skeleton border-radius="2px" width="260px" height="28px"></Skeleton>
      <Skeleton border-radius="2px" height="28px"></Skeleton>
      <Skeleton border-radius="2px" height="100%"></Skeleton>
   </main>
</template>

<script setup lang="ts">
import ActiveTransportTab from "../components/ActiveTransportTab.vue";
import OrganizationRepo from "../repositories/OrganizationRepo";
import TabButton from "../components/TabButton.vue";
import { onMounted, ref, Ref, watch } from "vue";
import { useFetchDecorator } from "@/modules/useFetch";
import { IOrganization } from "@/Interfaces";
const props = defineProps(["id"]);
const currentTab: Ref<number | null> = ref(null);

const { execute, isLoading, data: organization } = useFetchDecorator<IOrganization>(OrganizationRepo.transports);
watch(
   () => props.id,
   (current) => execute({ id: current })
);
onMounted(async () => {
   await execute({ id: props.id });
   if (organization.value && organization.value.transport_types[0]) {
      currentTab.value = organization.value.transport_types[0].id!;
   }
});
</script>
