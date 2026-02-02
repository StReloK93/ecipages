<template>
   <section class="h-dvh w-full grid grid-rows-[auto_1fr]">
      <BaseHeader />
      <main class="bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-200 dark:bg-zinc-800">
         <RouterView />
      </main>
   </section>
</template>

<script setup lang="ts">
import BaseHeader from "@/components/BaseHeader.vue";
</script>
