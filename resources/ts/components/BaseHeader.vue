<template>
   <header>
      <div class="p-3 flex justify-between">
         <nav>
            <RouterLink :to="{ name: 'home' }">
               <Button 
                  size="small" 
                  :variant="route.matched[0]?.name == 'home' ? '':'text'"
                  :severity="route.matched[0]?.name == 'home' ? '':'secondary'"
                  label="Bosh sahifa" 
                  icon="pi pi-home"
               />
            </RouterLink>
         </nav>
         <nav class="flex gap-3">
            <RouterLink :to="{ name: 'guide' }">
               <Button
                  size="small"
                  :variant="route.matched[0]?.name == 'guide' ? '':'text'"
                  :severity="route.matched[0]?.name == 'guide' ? '':'secondary'"
                  class="min-w-[35px]"
                  icon="pi pi-book"
               />
            </RouterLink>
            <Button size="small" class="min-w-[35px]" variant="text" :icon="themeMoon ? 'pi pi-sun':'pi pi-moon'"
               severity="secondary" @click="toggleDarkMode()" />
         </nav>
      </div>
      <Divider class="!my-0" />
   </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const themeMoon = ref(false)
const route = useRoute()

function toggleDarkMode() {
   document.documentElement.classList.toggle('dark');
   themeMoon.value = document.documentElement.classList.contains('dark')
}
</script>