<template>
   <UseCrudPage :entity-repo="TransportListRepo" />
</template>

<script setup lang="ts">
import UseCrudPage from "@/components/UseCrudPage.vue";
import TransportListRepo from "@/repositories/TransportListRepo";
</script>
