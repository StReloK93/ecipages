<template>
   <div>
      <main class="mb-3 text-end">
         <Button icon="pi pi-plus" label="Qo'shish" size="small" severity="contrast" @click="visibleRight = true" />
         <Drawer header="Qurilma turi qo'shish" :show-close-icon="false" v-model:visible="visibleRight" position="right">
            <FormCreateTransportType @close="visibleRight = false" :submit="onRowCreate" />
         </Drawer>
      </main>
      <DataTable v-if="transportTypes" size="small" v-model:editingRows="editingRows" :value="transportTypes" editMode="row" dataKey="id"
         @row-edit-save="onRowEdit">
         <Column field="name" header="Nomi">
            <template #editor="{ data, field }">
               <InputText v-model="data[field]" type="text" size="small" fluid />
            </template>
         </Column>
         <Column field="name_ru" header="Nomi (ru)">
            <template #editor="{ data, field }">
               <InputText v-model="data[field]" type="text" size="small" fluid />
            </template>
         </Column>
         <Column :rowEditor="true" style="width: 120px;" bodyStyle="text-align:right"></Column>
         <Column style="width: 50px;">
            <template #body="{ data }">
               <Button icon="pi pi-trash" type="button" @click="onRowDelete(data)" severity="secondary" variant="text"
                  rounded></Button>
            </template>
         </Column>
      </DataTable>
   </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import FormCreateTransportType from '../components/FormCreateTransportType.vue';
import TransportTypeRepo from '../repositories/TransportTypeRepo';
import { IOrganization } from '../Interfaces';
import { useConfirm } from "primevue/useconfirm";

const visibleRight = ref(false)
const editingRows = ref([]);
const confirm = useConfirm();

const { data: transportTypes } = TransportTypeRepo.index()

async function onRowCreate(formData: IOrganization) {
   await new Promise((resolve, reject) => {
      TransportTypeRepo.store(formData, ({ data }: { data: IOrganization }) => {
         resolve(true)
         transportTypes.value?.push(data)
         visibleRight.value = false
      })
   })
}

const onRowDelete = (row: IOrganization) => {
   confirm.require({
      message: `(${row.name}) - Aniq o'chirmoqchimisiz?`,
      header: "O'chirish",
      rejectProps: {
         label: 'Bekor qilish',
         severity: 'secondary',
         outlined: true
      },
      acceptProps: {
         label: "O'chirish",
         severity: 'danger',
      },
      accept: () => {
         TransportTypeRepo.destroy(row.id, () => {
            const index: any = transportTypes.value?.findIndex((type) => type.id == row.id)

            if (index > -1) {
               transportTypes.value?.splice(index, 1)
            }
         })
      }
   });
};


function onRowEdit(event: any) {
   let { newData, index } = event;

   TransportTypeRepo.update(newData.id, newData)
   if (transportTypes.value?.length) {
      transportTypes.value[index].name = newData.name;
      transportTypes.value[index].name_ru = newData.name_ru;
   }

}
</script>