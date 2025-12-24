<template>
   <section v-if="!isLoading" name="tabs" class="flex flex-col">
      <nav class="flex gap-0.5 border-b border-b-gray-300 dark:border-zinc-600">
         <template v-for="type in currentTransports">
            <TabButton :active="currentTab == type.key" @click="currentTab = type.key">
               {{ type.title }}
            </TabButton>
         </template>
      </nav>
      <template v-for="transports in currentTransports">
         <ActiveTransportTab v-if="transports.key == currentTab" :transports="transports" />
      </template>
   </section>
   <main v-else class="grid-rows-[28px_28px_1fr] grid gap-0.5">
      <Skeleton border-radius="2px" width="260px" height="28px"></Skeleton>
      <Skeleton border-radius="2px" height="28px"></Skeleton>
      <Skeleton border-radius="2px" height="100%"></Skeleton>
   </main>
</template>

<script setup lang="ts">
import ActiveTransportTab from '../components/ActiveTransportTab.vue'
import OrganizationRepo from '../repositories/OrganizationRepo'
import TabButton from '../components/TabButton.vue'
import { ref, Ref, watch } from 'vue'
const props = defineProps(['id'])
const currentTab: Ref<number> = ref(1)

const { currentTransports, fetchData, isLoading } = OrganizationRepo.transports({ id: props.id })
watch(() => props.id, (current) => fetchData({ id: current }))
</script>