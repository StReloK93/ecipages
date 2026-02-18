<template>
   <section class="flex w-full">
      <aside class="p-8 flex-grow bg-white border border-gray-100 rounded-4xl min-h-154 shadow-xs">
         <main v-if="isFirstLoading" class="flex items-center justify-center h-full">
            <ProgressSpinner />
         </main>
         <main v-else-if="Counter == 0" class="flex items-center justify-center h-full">
            <div class="w-120 text-center">
               <h3 class="text-gray-800 text-2xl mb-1 font-semibold">Qurilmalar kiritilmagan</h3>
               <p class="text-gray-500">
                  Hozirda ushbu transport turiga hech qanday qurilma kiritilmagan. Iltimos, avval transport turlariga
                  mos qurilmalarni qo'shing.
               </p>
            </div>
         </main>
         <main v-else>
            <table class="w-full table-fixed">
               <thead>
                  <tr class="border-b-2 border-black">
                     <td class="border border-gray-200 py-1 px-3 w-36 align-top">Qurilma modeli</td>
                     <td class="border border-gray-200 py-1 px-3 w-11 align-top">№</td>
                     <td class="border border-gray-200 py-1 px-3 w-11 align-top text-center">
                        <i class="pi pi-sun"></i>
                     </td>
                     <template v-for="lavozim in transport_type.lavozims">
                        <td class="border border-gray-200 py-1 px-3 align-top w-84">
                           {{ lavozim.name }}
                        </td>
                        <td class="border border-gray-200 py-1 px-3 align-top w-9 text-center">
                           <i class="pi pi-circle-fill text-xs!"></i>
                        </td>
                     </template>
                     <td class="border border-gray-200 py-1 px-3 align-top"></td>
                  </tr>
               </thead>
               <tbody>
                  <template v-for="list in transportLists" :key="list.id">
                     <template v-for="(transport, tIndex) in list.transports" :key="transport.id">
                        <tr
                           v-for="(smena, vIndex) in uniqueValues(transport.smena.formula.first)"
                           :key="transport.id + '-' + vIndex"
                           :class="{
                              'border-b-2 border-black':
                                 tIndex === list.transports.length - 1 &&
                                 vIndex === uniqueValues(transport.smena.formula.first).length - 1,
                           }"
                        >
                           <!-- Qurilma modeli -->
                           <td
                              v-if="tIndex === 0 && vIndex === 0"
                              :rowspan="
                                 list.transports.reduce((sum, t) => sum + uniqueValues(t.smena.formula.first).length, 0)
                              "
                              class="border border-gray-200 py-0.5 px-3 align-top"
                           >
                              {{ list.name }}
                           </td>

                           <!-- Garage number -->
                           <td
                              v-if="vIndex === 0"
                              :rowspan="uniqueValues(transport.smena.formula.first).length"
                              class="border border-gray-200 py-0.5 px-3 align-top"
                           >
                              {{ transport.garage_number }}
                           </td>

                           <!-- Value -->
                           <td class="border border-gray-200 py-0.5 px-3 align-top text-center">
                              {{ smena.name }}
                           </td>
                           <template v-for="lavozim in transport_type.lavozims">
                              <td class="border border-gray-200 py-0.5 px-3 align-top text-sm">
                                 {{ findEmploye(transport.groups, lavozim.id!, smena.id!)?.name }}
                              </td>
                              <td class="border border-gray-200 py-0.5 px-3 align-top text-center">
                                 {{ findEmploye(transport.groups, lavozim.id!, smena.id!)?.razryad }}
                              </td>
                           </template>
                           <td class="border border-gray-200 py-0.5 px-3 align-top"></td>
                        </tr>
                     </template>
                  </template>
               </tbody>
            </table>
         </main>
      </aside>
      <!--  -->
   </section>
</template>

<script setup lang="ts">
import TransportListRepo from "@/repositories/TransportListRepo";
import { ref, Ref, onMounted, nextTick, computed } from "vue";
import { IChange, IEmployee, IGroup, ITransport, ITransportList, ITransportType } from "../Interfaces";
import { useFetchDecorator } from "@/modules/useFetch";
import ChangeRepo from "@/repositories/ChangeRepo";
const props = defineProps<{ transport_type: ITransportType }>();

const transportLists: Ref<ITransportList[]> = ref([]);

const { execute: executeChange, data: changes, isFirstLoading } = useFetchDecorator<IChange[]>(ChangeRepo.index);

function findEmploye(groups: IGroup[], lavozim_id: number | string, change_id: number): IEmployee | null {
   const group = groups.find((g) => g.lavozim_id === lavozim_id && g.change_id === change_id);

   return group ? group.employe : null;
}

const Counter = computed(() => {
   return transportLists.value.reduce((acc, list) => acc + list.transports.length, 0);
});

function uniqueValues(obj: Record<string, number>): IChange[] {
   changes.value?.find((change) => change.id == 5974523);
   const array = Array.from(new Set(Object.values(obj))).sort((a, b) => a - b);

   return array.map((item) => {
      return changes.value?.find((change) => change.id == item)!;
   });
}

onMounted(async () => {
   const { data: lists } = await TransportListRepo.tableTransportType(props.transport_type.id!);

   await executeChange();
   transportLists.value = lists;
   console.log(transportLists.value);
});
</script>
<!-- 5974523 -->
