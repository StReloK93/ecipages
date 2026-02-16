<template>
   <section class="flex w-full">
      <nav class="min-w-48 relative z-50 the-shadow">
         <main class="absolute inset-0 overflow-y-auto overflow-x-hidden h-full flex flex-col gap-1 py-10 scroll-left">
            <template v-for="list in transportLists">
               <TabButton
                  v-for="transport in list.transports"
                  class="w-full text-left"
                  direction="right"
                  @click="onSelectTransport(transport, list)"
                  :active="currentTransport?.id == transport.id"
                  @vue:mounted="counter++"
               >
                  {{ list.name }} - <span class="font-semibold text-[16px]">{{ transport.garage_number }}</span>
               </TabButton>
            </template>
         </main>
      </nav>

      <!-- <aside -->
      <aside class="p-8 flex-grow bg-white border border-gray-100 rounded-4xl min-h-154 shadow-xs">
         <main v-if="isFirstLoading" class="flex items-center justify-center h-full">
            <ProgressSpinner />
         </main>
         <main v-else-if="counter == 0" class="flex items-center justify-center h-full">
            <div class="w-120 text-center">
               <h3 class="text-gray-800 text-2xl mb-1 font-semibold">Qurilmalar kiritilmagan</h3>
               <p class="text-gray-500">
                  Hozirda ushbu transport turiga hech qanday qurilma kiritilmagan. Iltimos, avval transport turlariga
                  mos qurilmalarni qo'shing.
               </p>
            </div>
         </main>
         <main v-else>
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
         </main>
      </aside>
      <!--  -->
   </section>
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

const counter = ref(0);

const { execute: executeChange, data: changes, isFirstLoading } = useFetchDecorator<IChange[]>(ChangeRepo.index);

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
<style>
.scroll-left {
   direction: rtl;
}
.scroll-left::-webkit-scrollbar {
   width: 1px;
}

.the-shadow::after {
   content: "";
   position: absolute;
   top: 0px;
   left: 0px;
   width: 100%;
   height: 100px;
   background: linear-gradient(#fafafaaa, transparent);
   pointer-events: none;
}

.the-shadow::before {
   content: "";
   position: absolute;
   bottom: 0px;
   left: 0px;
   width: 100%;
   height: 100px;
   z-index: 10;
   background: linear-gradient(transparent, #fafafa);
   pointer-events: none;
}
</style>
<!-- 5974523 -->
