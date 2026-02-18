<template>
   <main class="flex gap-2 mb-2">
      <RouterLink :to="{ name: 'table', params: { id: props.id } }">
         <Button icon="pi pi-table" rounded :severity="$route.name == 'table' ? 'primary' : 'secondary'" />
      </RouterLink>

      <RouterLink :to="{ name: 'organization', params: { id: props.id } }">
         <Button icon="pi pi-stop" rounded :severity="$route.name == 'organization' ? 'primary' : 'secondary'" />
      </RouterLink>
   </main>
</template>

<script setup lang="ts">
const props = defineProps(["id"]);
</script>
