<template>
   <div class="font-sans">
      <h3 class="mb-2 text-xl text-right text-blue-600">
         {{ transport.garage_number }} - <span class="text-base"> {{ list.name }} </span>
      </h3>
      <div class="flex gap-5">
         <div class="w-1/4 rounded-xl h-fit">
            <DragBlockUser :groupLavozims="groupLavozims!" :list="props.list" @dragstart="onDragStart" />
         </div>
         <div class="w-3/4 grid grid-cols-1 gap-4">
            <Skeleton
               v-if="groupLavozims == null"
               border-radius="12px"
               v-for="value in 2"
               height="208px"
               width="100%"
            />
            <div
               v-else
               v-for="lavozim in groupLavozims"
               :key="lavozim.id"
               class="min-h-52 border border-gray-200 rounded-xl flex flex-col bg-white"
            >
               <div class="flex justify-between items-center border-b border-gray-200 py-3 px-4">
                  <span class="font-semibold text-gray-600 text-sm">{{ lavozim.name }}</span>
               </div>
               <main class="flex flex-grow">
                  <div
                     v-for="change_id in uniqueValuesSet"
                     @dragover.prevent="onDragOver($event, lavozim[change_id])"
                     @dragleave="hoveredBox = null"
                     @drop="onDrop($event, lavozim, change_id)"
                     :class="{ 'bg-surface-50': hoveredBox == lavozim[change_id] }"
                     class="basis-0 flex-grow border-l first:border-0 border-surface-100 h-full relative transition-all"
                  >
                     <span class="absolute -top-1 right-2">
                        <Skeleton v-if="loadingBox == lavozim[change_id]" shape="circle" height="24px" width="24px" />
                        <span
                           v-else
                           class="w-6 h-6 rounded-full bg-blue-100 text-blue-600 inline-flex items-center justify-center text-sm"
                        >
                           {{ findChange(change_id) }}
                        </span>
                     </span>
                     <div class="flex flex-wrap gap-2 px-3 py-4 items-start animate-pop-in">
                        <Chip
                           v-for="(group, index) in lavozim[change_id]"
                           @remove="removeUserFromBox(group.id, lavozim[change_id], index)"
                           :key="group"
                           :label="group.employe.name"
                           class="text-xs! animate-pop-in"
                           :removable="!AuthStore.isAdmin"
                        />
                     </div>
                  </div>
               </main>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import DragBlockUser from "./DragBlockUser.vue";
import { useToast } from "primevue/usetoast";
import GroupRepo from "@/repositories/GroupRepo";
import { ITransportList, IEmployee, ILavozim, ITransport, IChange, IGroup } from "@/Interfaces";
import { onMounted, ref } from "vue";
import { useFetchDecorator } from "@/modules/useFetch";
import { useUserStore } from "@/stories/UserStore";

const AuthStore = useUserStore();
const loadingBox = ref(null);
const toast = useToast();
const hoveredBox = ref();
const props = defineProps<{
   list: ITransportList;
   lavozims: ILavozim[];
   transport: ITransport;
   changes: IChange[];
}>();

const { execute: executeGroup, data: groups } = useFetchDecorator<IGroup[]>(GroupRepo.byTransport);

function findChange(id: number) {
   const change = props.changes.find((change) => change.id == id);
   if (change) return change.name;
   else return null;
}
const uniqueValuesSet = new Set<number>(Object.values(props.transport.smena.formula.first));
const draggingItem = ref<IEmployee | null>(null);

const groupLavozims = ref<null | any[]>(null);

const onDragStart = (event: DragEvent, user: IEmployee) => {
   draggingItem.value = user;
   if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "copy"; // "Copy" ikonkasi chiqishi uchun
      event.dataTransfer.setData("text/plain", JSON.stringify(user));
   }
};

const onDragOver = (event: DragEvent, lavozim: any) => {
   if (hoveredBox.value != lavozim) {
      hoveredBox.value = lavozim;
   }
};

const onDrop = async (event: DragEvent, lavozim: any, changeId: number) => {
   hoveredBox.value = null;
   const formData = {
      transport_id: props.transport.id!,
      change_id: changeId,
      employe_id: draggingItem.value?.id!,
      lavozim_id: lavozim.id,
   };

   if (draggingItem.value) {
      const alreadyExists = lavozim[changeId].some((user: any) => user.employe.id === draggingItem.value?.id);

      if (alreadyExists) {
         return toast.add({
            severity: "warn",
            summary: `Takrorlamang!`,
            detail: `${draggingItem.value?.name} bu smenada  mavjud.`,
            life: 5000,
         });
      }
      loadingBox.value = lavozim[changeId];
      await GroupRepo.store(formData)
         .then((res) => {
            lavozim[changeId].push(res.data);
         })
         .catch(() => {
            toast.add({
               severity: "error",
               summary: `${draggingItem.value?.name} bu smenada  mavjud.`,
               detail: "Bir kishi bir smenada ikki lavozimda ishlay olmaydi!",
               life: 5000,
            });
         })
         .finally(() => {
            loadingBox.value = null;
         });

      draggingItem.value = null;
   }
};

const removeUserFromBox = (group_id: number, box: any, index: number | string) => {
   GroupRepo.destroy(group_id).then((result) => {
      box.splice(index, 1);
   });
};

onMounted(async () => {
   await executeGroup(props.transport.id!);
   groupLavozims.value = props.lavozims.map((lavozim: any) => {
      uniqueValuesSet.forEach((value) => {
         const currentGroups = groups.value?.filter(
            (group) =>
               group.change_id == value && group.lavozim_id == lavozim.id && group.transport_id == props.transport.id,
         );

         lavozim[value] = [];

         currentGroups?.forEach((group) => {
            lavozim[value].push(group);
         });
      });

      return lavozim;
   });
});
</script>

<style scoped>
@keyframes popIn {
   0% {
      transform: scale(0.8);
      opacity: 0;
   }
   100% {
      transform: scale(1);
      opacity: 1;
   }
}
.animate-pop-in {
   animation: popIn 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>
