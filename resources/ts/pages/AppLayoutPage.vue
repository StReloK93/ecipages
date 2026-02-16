<template>
   <section class="h-dvh w-full grid grid-rows-[auto_1fr]">
      <BaseHeader />
      <main class="bg-zinc-50 dark:bg-zinc-800">
         <RouterView />
      </main>
   </section>
</template>

<script setup lang="ts">
import BaseHeader from "@/components/BaseHeader.vue";
</script>
