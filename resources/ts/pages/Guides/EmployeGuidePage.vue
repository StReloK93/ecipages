<template>
   <UseCrudPage :entity-repo="EmployeRepo" />
</template>

<script setup lang="ts">
import UseCrudPage from "@/components/UseCrudPage.vue";
import EmployeRepo from "@/repositories/EmployeRepo";
</script>
