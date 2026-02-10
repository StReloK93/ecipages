<template>
   <main class="flex flex-grow w-full">
      <nav class="flex flex-col gap-0.5 items-end py-8 min-w-40">
         <template v-for="list in transportLists">
            <TabButton
               v-for="transport in list.transports"
               class="w-full text-left"
               direction="right"
               @click="onSelectTransport(transport, list)"
               :active="currentTransport?.id == transport.id"
            >
               {{ transport.garage_number }} - {{ list.name }}
            </TabButton>
         </template>
      </nav>
      <aside
         class="p-8 flex-grow bg-zinc-50 dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-600 rounded-4xl min-h-154"
      >
         <DragBlock
            class="mb-4"
            v-if="currentList && currentTransport && changes"
            :changes="changes!"
            :list="currentList"
            :lavozims="props.transport_type.lavozims"
            :transport="currentTransport!"
         />
         <main>
            <SmenaViewer v-if="currentTransport" :transport="currentTransport" />
         </main>
      </aside>
   </main>
</template>

<script setup lang="ts">
import DragBlock from "@/components/DragBlock.vue";
import SmenaViewer from "../entities/Smena/SmenaViewer.vue";
import TransportListRepo from "@/repositories/TransportListRepo";
import TabButton from "./TabButton.vue";
import { ref, Ref, onMounted, nextTick } from "vue";
import { IChange, ITransport, ITransportList, ITransportType } from "../Interfaces";
import { useFetchDecorator } from "@/modules/useFetch";
import ChangeRepo from "@/repositories/ChangeRepo";
const props = defineProps<{ transport_type: ITransportType }>();

const transportLists: Ref<ITransportList[]> = ref([]);
const currentTransport: Ref<ITransport | null> = ref(null);
const currentList: Ref<ITransportList | null> = ref(null);

const { execute: executeChange, data: changes } = useFetchDecorator<IChange[]>(ChangeRepo.index);

async function onSelectTransport(transport: ITransport, list: ITransportList) {
   currentList.value = null;
   currentTransport.value = null;
   await nextTick();
   currentTransport.value = transport;

   currentList.value = list;
}

onMounted(async () => {
   const { data: lists } = await TransportListRepo.byTransportType(props.transport_type.id!);
   await executeChange();
   transportLists.value = lists;

   let firstTransport = null;
   let firstList = null;

   for (const list of lists) {
      if (list.transports.length > 0) {
         firstTransport = list.transports[0];
         firstList = list;
         break; // <-- shu yerda to‘xtaydi
      }
   }

   if (firstList && firstTransport) onSelectTransport(firstTransport, firstList);
});
</script>
