<template>
   <main class="flex flex-grow">
      <aside class="p-4 flex-grow bg-gray-50 dark:bg-zinc-900 border-l border-gray-300 dark:border-zinc-600">
         <main>
            {{ transport_type }}
            <!-- <SmenaViewer :transport="currentTab" /> -->
            <!-- {{ currentTab }} -->
         </main>
         <!-- <main v-for="user in currentGroups">
            {{ user.tabel }}
            {{ user.change }}
            {{ user.active_from }}
         </main> -->
         <!-- <DragBlock v-if="currentTab" /> -->
      </aside>
      <nav class="flex flex-col gap-0.5 items-end py-4 border-l border-gray-300 dark:border-zinc-600 min-w-40">
         <template v-for="car in transportLists">
            <TabButton
               class="w-full text-left"
               direction="left"
               @click="onSelectTransport(car)"
               :active="currentTab?.id == car.id"
            >
               {{ car.name }}
            </TabButton>
         </template>
      </nav>
   </main>
</template>

<script setup lang="ts">
import DragBlock from "@/components/DragBlock.vue";
import SmenaViewer from "../entities/Smena/SmenaViewer.vue";
import GroupRepo from "../repositories/GroupRepo";
import TransportListRepo from "@/repositories/TransportListRepo";
import TabButton from "./TabButton.vue";
import { ref, Ref, onMounted } from "vue";
import { ITransport, IGroup, ITransportType, ITransportList } from "../Interfaces";
const props = defineProps<{ transport_type: ITransportType }>();

const transportLists: Ref<ITransportList[]> = ref([]);
const currentTab: Ref<ITransportList | null> = ref(null);
// const currentGroups: Ref<IGroup[] | null> = ref(null);

async function onSelectTransport(transportList: ITransportList) {
   // currentGroups.value = null;
   currentTab.value = transportList;
   // const { data } = await GroupRepo.getGroupsByTransportId(transport.id!);
   // currentGroups.value = data;
}

onMounted(async () => {
   const { data } = await TransportListRepo.byTransportType(
      props.transport_type.id!,
      props.transport_type.organization_id!
   );
   transportLists.value = data;
   // onSelectTransport(currentTab.value);
});
</script>
