<template>
   <div class="h-full w-full grid grid-rows-[auto_1fr]">
      <ConfirmDialog></ConfirmDialog>
      <BaseHeader />
      <main class="bg-gray-100 dark:bg-zinc-800">
         <RouterView />
      </main>
   </div>
</template>
<script setup lang="ts">
import BaseHeader from "@components/BaseHeader.vue";
</script>
