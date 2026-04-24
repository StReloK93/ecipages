<template>
   <div class="flex flex-col h-full relative">
      <main class="absolute inset-0">
         <DataTable
            size="small"
            scrollable
            scrollHeight="flex"
            v-model:filters="filters"
            :value="props.data"
            dataKey="id"
            :globalFilterFields="props.filterFields"
         >
            <template #header>
               <div class="flex justify-between -mx-2 pb-2">
                  <IconField size="small" class="p-input-icon-left">
                     <InputIcon>
                        <i class="pi pi-search" />
                     </InputIcon>
                     <InputText v-model="filters['global'].value" size="small" placeholder="Qidiruv" />
                  </IconField>
                  <Button
                     icon="pi pi-plus"
                     label="Qo'shish"
                     size="small"
                     severity="contrast"
                     @click="$emit('create')"
                  />
               </div>
            </template>
            <Column style="width: 50px" header="#">
               <template #body="{ data, index }">
                  {{ index + 1 }}
               </template>
            </Column>
            <template v-for="column in props.columns" :key="column.field">
               <Column v-if="column.render" :header="column.header">
                  <template #body="{ data }">
                     <template v-if="column.render">
                        <div class="flex gap-1 flex-wrap">
                           <Tag v-for="item in column.render(data)" :key="item" :value="item" />
                        </div>
                     </template>
                  </template>
               </Column>
               <Column v-else :header="column.header" :field="column.field" />
            </template>
            <slot name="column"></slot>
            <Column style="width: 50px">
               <template #body="{ data }">
                  <Button
                     icon="pi pi-pencil"
                     type="button"
                     @click="$emit('update', data)"
                     severity="secondary"
                     variant="text"
                     rounded
                  />
               </template>
            </Column>

            <Column style="width: 50px">
               <template #body="{ data }">
                  <Button
                     icon="pi pi-trash"
                     type="button"
                     @click="$emit('delete', data)"
                     severity="secondary"
                     variant="text"
                     rounded
                  ></Button>
               </template>
            </Column>
         </DataTable>
      </main>
   </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FilterMatchMode } from "@primevue/core/api";

const props = defineProps<{ columns: any[]; data: any[]; filterFields: string[] }>();
const filters = ref({
   global: { value: null, matchMode: FilterMatchMode.CONTAINS },
   name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
   "country.name": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
   representative: { value: null, matchMode: FilterMatchMode.IN },
   status: { value: null, matchMode: FilterMatchMode.EQUALS },
   verified: { value: null, matchMode: FilterMatchMode.EQUALS },
});
</script>
