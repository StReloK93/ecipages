<template>
   <div class="flex gap-4 flex-col">
      <Skeleton v-if="groupLavozims == null" v-for="value in 6" height="42px" width="100%" border-radius="24px" />
      <section v-else>
         <IconField class="mb-4">
            <InputIcon class="pi pi-search" />
            <InputText
               v-model="searchText"
               placeholder="Qidiruv"
               fluid
               class="rounded-xl! border border-surface-100! shadow-none! bg-zinc-50!"
            />
         </IconField>
         <main class="max-h-90 overflow-y-auto flex flex-col gap-2">
            <div
               v-for="user in users"
               :key="user.id"
               :draggable="!AuthStore.isAdmin"
               @dragstart="emit('dragstart', $event, user)"
               :class="[AuthStore.isAdmin ? 'cursor-default' : 'cursor-grab active:cursor-grabbing']"
               class="select-none rounded-xl py-2 px-4 bg-zinc-50 border border-surface-100 hover:bg-blue-300/10 hover:border-blue-300 transition-all flex items-center gap-3"
            >
               <div class="font-medium text-gray-700 leading-4">
                  <span class="block">
                     {{ user.name }}
                  </span>
                  <span class="text-slate-500 text-sm"> Razryad: {{ user.razryad }} </span>
               </div>
               <i class="pi pi-clone ml-auto text-sky-600 text-sm mr-2"></i>
            </div>
         </main>
      </section>
   </div>
</template>

<script setup lang="ts">
import { ITransportList } from "@/Interfaces";
import { computed, ref } from "vue";
import { useUserStore } from "@/stories/UserStore";
const searchText = ref("");
const emit = defineEmits(["dragstart"]);
const props = defineProps<{ list: ITransportList; groupLavozims: any[] | null }>();

const AuthStore = useUserStore();

const users = computed(() => {
   return props.list.employes.filter((user) => {
      return user.name.toLowerCase().includes(searchText.value.toLowerCase());
   });
});
</script>
