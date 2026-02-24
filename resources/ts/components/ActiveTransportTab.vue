<template>
   <section class="flex w-full">
      <Dialog
         v-model:visible="isSelectedSmena"
         modal
         :header="`${currentTransport?.garage_number}  - ${currentList?.name}`"
         :style="{ width: '25rem' }"
      >
         <main class="pt-4">
            <aside class="flex items-center gap-2 text-sm text-gray-500 justify-between mb-9">
               <main class="flex gap-2">
                  <span>
                     {{ formatDate(modalData.smena?.day).month }} - {{ formatDate(modalData.smena?.day).day }}
                  </span>
                  <span>
                     {{ formatDate(modalData.smena?.day).weekday }}
                  </span>
               </main>

               <span v-if="modalData.smena?.smena == 1" class="inline-flex items-center gap-2">
                  Kunduzgi <b class="text-gray-700 font-semibold">{{ modalData.change?.name }}</b> smena
                  <span class="p-button-icon pi pi-sun text-orange-400"></span>
               </span>
               <span v-else class="inline-flex items-center gap-2">
                  Tungi <b class="text-gray-700 font-semibold">{{ modalData.change?.name }}</b> smena
                  <span class="p-button-icon pi pi-moon !text-sm text-sky-500"></span>
               </span>
            </aside>
            <div v-for="group in modalData.groups" class="py-2 mb-3">
               <h3 class="text-gray-500 text-sm">
                  {{ group.lavozim.name }}
               </h3>
               <div class="text-xl">
                  {{ group.employe.name }}
               </div>
            </div>
         </main>
      </Dialog>
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
      <aside class="p-8 pt-4 flex-grow bg-white border border-gray-100 rounded-4xl min-h-154 shadow-xs">
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
               <SmenaViewer v-if="currentTransport" :transport="currentTransport" @selectSmena="selectSmena" />
            </main>
         </main>
      </aside>
      <!--  -->
   </section>
</template>

<script setup lang="ts">
import { formatDate } from "@/modules/timeFunction";
import DragBlock from "@/components/DragBlock.vue";
import SmenaViewer from "../entities/Smena/SmenaViewer.vue";
import TransportListRepo from "@/repositories/TransportListRepo";
import TabButton from "./TabButton.vue";
import { ref, Ref, onMounted, nextTick, reactive } from "vue";
import { IChange, IGroup, ITransport, ITransportList, ITransportType } from "../Interfaces";
import { useFetchDecorator } from "@/modules/useFetch";
import ChangeRepo from "@/repositories/ChangeRepo";
import GroupRepo from "@/repositories/GroupRepo";
const props = defineProps<{ transport_type: ITransportType }>();

const transportLists: Ref<ITransportList[]> = ref([]);
const currentTransport: Ref<ITransport | null> = ref(null);
const currentList: Ref<ITransportList | null> = ref(null);

const { execute: executeGroup, data: groups } = useFetchDecorator<IGroup[]>(GroupRepo.byTransportChange);

const isSelectedSmena = ref(false);
const modalData = reactive<any>({
   smena: null,
   change: null,
   groups: null,
});
async function selectSmena(change: { id: number; name: string }, smena: { day: Date; smena: number }) {
   await executeGroup(currentTransport.value?.id!, change.id);
   modalData.smena = smena;
   modalData.change = change;
   modalData.groups = groups;

   isSelectedSmena.value = true;
}
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
