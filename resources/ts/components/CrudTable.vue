<template>
   <div>
      <main class="mb-1 text-end">
         <Button icon="pi pi-plus" label="Qo'shish" size="small" severity="contrast" @click="$emit('create')" />
      </main>
      <DataTable size="small" :value="props.data" dataKey="id">
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
   </div>
</template>

<script setup lang="ts">
const props = defineProps<{ columns: any[]; data: any[] }>();
</script>
