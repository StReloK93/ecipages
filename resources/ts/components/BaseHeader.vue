<template>
   <header>
      <div class="p-3 flex justify-between">
         <nav>
            <RouterLink :to="{ name: 'main' }">
               <Button
                  size="small"
                  :variant="route.name == 'main' ? '' : 'text'"
                  :severity="route.name == 'main' ? '' : 'secondary'"
                  label="Bosh sahifa"
                  icon="pi pi-home"
               />
            </RouterLink>
         </nav>
         <nav class="flex gap-3">
            <RouterLink v-if="AuthStore.isAdmin" :to="{ name: 'roles' }">
               <Button
                  :variant="route.name == 'roles' ? '' : 'text'"
                  :severity="route.name == 'roles' ? '' : 'secondary'"
                  label="Foydalanuvchilar"
                  size="small"
                  icon="pi pi-users"
               />
            </RouterLink>
            <Button
               label="Chiqish"
               icon-pos="right"
               size="small"
               class="min-w-[35px] ml-4"
               variant="text"
               icon="pi pi-sign-out"
               severity="secondary"
               @click="AuthStore.logout()"
            />
         </nav>
      </div>
      <Divider class="!my-0" />
   </header>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useUserStore } from "@/stories/UserStore";
const route = useRoute();
const AuthStore = useUserStore();
</script>
