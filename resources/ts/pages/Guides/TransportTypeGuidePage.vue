<template>
   <UseCrudPage :entity-repo="TransportTypeRepo" />
</template>

<script setup lang="ts">
import UseCrudPage from "@/components/UseCrudPage.vue";
import TransportTypeRepo from "@/repositories/TransportTypeRepo";
</script>
