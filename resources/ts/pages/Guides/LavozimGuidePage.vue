<template>
   <UseCrudPage :entity-repo="LavozimRepo" />
</template>

<script setup lang="ts">
import UseCrudPage from "@/components/UseCrudPage.vue";
import LavozimRepo from "@/repositories/LavozimRepo";
</script>
