<template>
   <UseCrudPage :entity-repo="OrganizationRepo" />
</template>

<script setup lang="ts">
import UseCrudPage from "@/components/UseCrudPage.vue";
import OrganizationRepo from "@repositories/OrganizationRepo";
</script>
