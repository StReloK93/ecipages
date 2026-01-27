<template>
   <div class="h-full w-full grid grid-rows-[auto_1fr]">
      <Toast />
      <ConfirmDialog></ConfirmDialog>
      <BaseHeader />
      <main class="bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-200 dark:bg-zinc-800">
         <RouterView />
      </main>
   </div>
</template>
<script setup lang="ts">
import BaseHeader from "@components/BaseHeader.vue";
</script>
