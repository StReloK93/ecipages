<template>
   <div>
      <main class="mb-3 text-end">
         <Button icon="pi pi-plus" label="Qo'shish" size="small" severity="contrast" @click="visibleRight = true" />
         <Drawer header="Qurilma modeli qo'shish" :show-close-icon="false" v-model:visible="visibleRight" position="right">
            <FormCreateTransportList @close="visibleRight = false" :submit="onRowCreate" />
         </Drawer>
      </main>
      <DataTable v-if="transport_types && transportList" size="small" v-model:editingRows="editingRows" :value="transportList" editMode="row" dataKey="id"
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
         <Column field="transport_type_id" header="Qurilma turi">
            <template #editor="{ data, field }">
               <Select v-model="data[field]" size="small" :options="transport_types" optionValue="id" optionLabel="name" placeholder="Transport turini tanlang" />
            </template>
            <template #body="{ data, field }">
               {{ data.transport_type.name }}
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
import FormCreateTransportList from '../components/FormCreateTransportList.vue';
import TransportListRepo from '../repositories/TransportListRepo';
import TransportTypeRepo from '../repositories/TransportTypeRepo';
import { ITransportList } from '../Interfaces';
import { useConfirm } from "primevue/useconfirm";

const mod = ref(1)
const visibleRight = ref(false)
const editingRows = ref([]);
const confirm = useConfirm();

const { data: transportList } = TransportListRepo.index()


const { data: transport_types } = TransportTypeRepo.index()
async function onRowCreate(formData: ITransportList) {
   await new Promise((resolve, reject) => {
      TransportListRepo.store(formData, ({ data }: { data: ITransportList }) => {
         resolve(true)
         transportList.value?.push(data)
         visibleRight.value = false
      })
   })
}

const onRowDelete = (row: ITransportList) => {
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
         TransportListRepo.destroy(row.id, () => {
            const index: any = transportList.value?.findIndex((list) => list.id == row.id)

            if (index > -1) {
               transportList.value?.splice(index, 1)
            }
         })
      }
   });
};


function onRowEdit(event: any) {
   let { newData, index } = event;

   TransportListRepo.update(newData.id, newData, ({data: type} : {data: ITransportList}) => {
      if (transportList.value?.length) {
         transportList.value[index].name = type.name;
         transportList.value[index].name_ru = type.name_ru;
         transportList.value[index].transport_type_id = type.transport_type_id;
         transportList.value[index].transport_type = type.transport_type;
      }
   })

}
</script>