<template>
   <div class="p-8 bg-gray-50 min-h-screen font-sans">
      <div class="flex gap-8">
         <div class="w-1/3 bg-white p-5 rounded-xl shadow-md h-fit">
            <h3 class="font-bold text-gray-500 mb-4">Barcha Userlar (Nusxalanadi)</h3>
            <div class="flex flex-col gap-2">
               <div
                  v-for="user in allUsers"
                  :key="user.id"
                  draggable="true"
                  @dragstart="onDragStart($event, user)"
                  class="p-3 bg-white border border-gray-200 shadow-sm rounded-lg cursor-grab active:cursor-grabbing hover:bg-blue-50 hover:border-blue-300 transition-all flex items-center gap-3"
               >
                  <div
                     class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm"
                  >
                     {{ user.name.charAt(0) }}
                  </div>
                  <span class="font-medium text-gray-700">{{ user.name }}</span>
                  <i class="pi pi-clone ml-auto text-gray-400 text-sm"></i>
               </div>
            </div>
         </div>

         <div class="w-2/3 grid grid-cols-2 gap-4">
            <div
               v-for="box in boxes"
               :key="box.id"
               @dragover.prevent="onDragOver"
               @drop="onDrop($event, box)"
               @dragenter="box.isHovered = true"
               @dragleave="box.isHovered = false"
               class="min-h-[200px] border-2 border-dashed rounded-xl p-4 transition-all flex flex-col gap-2 bg-white"
               :class="[box.isHovered ? 'border-blue-500 bg-blue-50' : 'border-gray-300']"
            >
               <div class="flex justify-between items-center mb-2 pb-2 border-b border-gray-100">
                  <span class="font-bold text-gray-600 text-sm">Katak #{{ box.id }}</span>
                  <span class="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full"
                     >{{ box.users.length }} kishi</span
                  >
               </div>

               <div v-if="box.users.length > 0" class="flex flex-wrap gap-2">
                  <div
                     v-for="(user, index) in box.users"
                     :key="index"
                     class="flex items-center gap-2 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full animate-pop-in"
                  >
                     <span class="text-sm font-semibold text-green-700">{{ user.name }}</span>
                     <button
                        @click="removeUserFromBox(box, index)"
                        class="text-green-400 hover:text-red-500 transition-colors"
                     >
                        <i class="pi pi-times-circle"></i>
                     </button>
                  </div>
               </div>

               <div v-else class="flex-1 flex items-center justify-center text-gray-300 text-sm">Bosh katak</div>
            </div>
         </div>
      </div>

      <div class="mt-8 p-4 bg-gray-900 text-green-400 font-mono text-xs rounded-lg h-40 overflow-y-auto">
         <div v-for="(log, i) in logs" :key="i">> {{ log }}</div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// --- TIPLAR ---
interface User {
   id: number;
   name: string;
}

interface Box {
   id: number;
   users: User[]; // <-- O'ZGARDI: Endi bu massiv
   isHovered: boolean;
}

// --- STATE ---
const allUsers = ref<User[]>([
   { id: 1, name: "Ali" },
   { id: 2, name: "Vali" },
   { id: 3, name: "Gani" },
   { id: 4, name: "Sardor" },
   { id: 5, name: "Malika" },
]);

const boxes = ref<Box[]>([
   { id: 1, users: [], isHovered: false },
   { id: 2, users: [], isHovered: false },
   { id: 3, users: [], isHovered: false },
   { id: 4, users: [], isHovered: false },
]);

const logs = ref<string[]>([]);
const draggingItem = ref<User | null>(null);

// --- EVENTLAR ---

const onDragStart = (event: DragEvent, user: User) => {
   draggingItem.value = user;
   if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "copy"; // "Copy" ikonkasi chiqishi uchun
      event.dataTransfer.setData("text/plain", JSON.stringify(user));
   }
};

const onDragOver = (event: DragEvent) => {
   event.preventDefault();
   if (event.dataTransfer) {
      event.dataTransfer.dropEffect = "copy"; // Drop qilganda "+" belgisi chiqadi
   }
};

const onDrop = (event: DragEvent, box: Box) => {
   box.isHovered = false;

   if (draggingItem.value) {
      // 1. DUBLIKAT TEKSHIRISH (Ixtiyoriy)
      // Agar bitta katakda aynan shu user bor bo'lsa, qayta qo'shmaymiz
      const alreadyExists = box.users.some((u) => u.id === draggingItem.value?.id);

      if (alreadyExists) {
         addLog(`XATO: ${draggingItem.value.name} bu katakda (#${box.id}) allaqachon bor!`);
         // draggingItem.value = null; // Agar xohlasangiz dragni to'xtating
         return;
      }

      // 2. USERNI QO'SHISH (Push)
      // Muhim: Obyektni nusxasini olish kerak (copy), aks holda reference muammosi bo'lishi mumkin
      box.users.push({ ...draggingItem.value });

      // 3. Event chiqarish
      addLogEvent(draggingItem.value, box.id);

      draggingItem.value = null;
   }
};

const removeUserFromBox = (box: Box, index: number) => {
   box.users.splice(index, 1);
};

const addLog = (msg: string) => {
   logs.value.unshift(msg);
};

const addLogEvent = (user: User, boxId: number) => {
   const msg = `EVENT: ${user.name} (ID:${user.id}) -> Katak #${boxId} ga qo'shildi.`;
   logs.value.unshift(msg);
   console.log({ userId: user.id, boxId, action: "add" });
};
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
