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
            <RouterLink :to="{ name: 'guide' }">
               <Button
                  size="small"
                  :variant="route.matched[1]?.name == 'guide' ? '' : 'text'"
                  :severity="route.matched[1]?.name == 'guide' ? '' : 'secondary'"
                  class="min-w-[35px]"
                  icon="pi pi-book"
               />
            </RouterLink>
            <!-- <Button
               size="small"
               class="min-w-[35px]"
               variant="text"
               :icon="themeMoon ? 'pi pi-sun' : 'pi pi-moon'"
               severity="secondary"
               @click="toggleDarkMode()"
            /> -->
            <Button
               label="Chiqish"
               icon-pos="right"
               size="small"
               class="min-w-[35px]"
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
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "@/stories/UserStore";
const themeMoon = ref(false);
const route = useRoute();
const AuthStore = useUserStore();

// function toggleDarkMode() {
//    document.documentElement.classList.toggle("dark");
//    themeMoon.value = document.documentElement.classList.contains("dark");
// }
</script>
