<template>
   <div>
      <main class="mb-3 text-end">
         <Button icon="pi pi-plus" label="Qo'shish" size="small" severity="contrast" @click="createDialog = true" />
         <Dialog v-model:visible="createDialog" maximizable modal header="Smena turi"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <FormCreateSmena @close="createDialog = false" :submit="onRowCreate" />
         </Dialog>
         <Dialog v-model:visible="editDialog" maximizable modal header="Smena turi"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <FormEditSmena :smena_id="editableRow" @close="editDialog = false" :submit="onRowEdit" />
         </Dialog>
      </main>
      <DataTable v-if="smenalar" size="small" :value="smenalar" editMode="row" dataKey="id">
         <Column field="name" header="Nomi">
            <template #editor="{ data, field }">
               <InputText v-model="data[field]" type="text" size="small" fluid />
            </template>
         </Column>
         <Column style="width: 50px;">
            <template #body="{ data }">
               <Button icon="pi pi-pencil" type="button" @click="onSelectEditRow(data.id)" severity="secondary" variant="text" rounded />
            </template>
         </Column>
         <Column style="width: 50px;">
            <template #body="{ data }">
               <Button icon="pi pi-trash" type="button" @click="onRowDelete(data)" severity="secondary" variant="text" rounded />
            </template>
         </Column>
      </DataTable>
   </div>
</template>

<script setup lang="ts">
import { ref, computed, Ref } from 'vue';
import FormCreateSmena from '../components/FormCreateSmena.vue';
import FormEditSmena from '../components/FormEditSmena.vue';
import SmenaRepo from '../repositories/SmenaRepo';
import { ISmena } from '../Interfaces';
import { useConfirm } from "primevue/useconfirm";
const editableRow: Ref<number | null> = ref(null)

const createDialog: Ref<boolean> = ref(false)
const editDialog: Ref<boolean> = ref(false)
const confirm = useConfirm();


const { data: smenalar } = SmenaRepo.index()

async function onRowCreate(formData: ISmena) {
   await new Promise((resolve, reject) => {
      SmenaRepo.store(formData, ({ data }: { data: ISmena }) => {
         resolve(true)
         smenalar.value?.push(data)
         createDialog.value = false
      })
   })
}

function onSelectEditRow(smena_id: number) {
   editableRow.value = smena_id
   editDialog.value = true
}

const onRowDelete = (row: ISmena) => {
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
         SmenaRepo.destroy((row.id || 0), () => {
            const index: any = smenalar.value?.findIndex((smena) => smena.id == row.id)

            if (index > -1) {
               smenalar.value?.splice(index, 1)
            }
         })
      }
   });
};


async function onRowEdit(formData: ISmena) {
   await new Promise((resolve, reject) => {

      if (editableRow.value && smenalar.value) {
         SmenaRepo.update(editableRow.value, formData, (result: any) => {
            const index: any = smenalar.value?.findIndex((smena) => smena.id == editableRow.value)
            let current = smenalar.value
            if(current && current[index]) current[index].name = result.data.name
            
            editDialog.value = false
            resolve(result)
         })
      }

   })
}
</script>