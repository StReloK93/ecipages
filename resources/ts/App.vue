<template>
   <main>
      <Toast />
      <ConfirmDialog></ConfirmDialog>
      <RouterView v-if="UserStore.initialized" />
      <BasePreloader v-else />
   </main>
</template>
<script setup lang="ts">
import BasePreloader from "@components/BasePreloader.vue";
import { useUserStore } from "@/stories/UserStore";
const UserStore = useUserStore();
</script>
