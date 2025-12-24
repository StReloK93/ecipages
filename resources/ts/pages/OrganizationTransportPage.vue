<template>
   <div v-if="organizations">
      <nav class="flex gap-0.5 border-b border-b-gray-300 dark:border-zinc-600 -mx-4 -mt-2">
         <template v-for="(organization, index) in organizations">
            <TabButton :active="currentTab == index" @click="changeTab(index)">
               {{ organization.name }}
            </TabButton>
         </template>
      </nav>
      <main class="pt-4">
         <main class="mb-3 text-end">
            <Button icon="pi pi-plus" label="Qo'shish" size="small" severity="contrast" @click="visibleRight = true" />
            <Drawer header="Bo'linma qo'shish" :show-close-icon="false" v-model:visible="visibleRight" position="right">
               <template v-slot:header>
                  <span class="font-semibold">
                     {{ organizations[currentTab].name }}
                  </span>
               </template>
               <FormCreateTransport @close="visibleRight = false" :submit="onRowCreate" />
            </Drawer>
            <Dialog v-if="selectTransport" v-model:visible="visibleViewer" maximizable modal header="Smena turi"
               :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
               <template v-slot:header>
                  <span class="font-semibold">
                     {{ organizations[currentTab].name }}
                  </span>
               </template>
               <SmenaViewer :transport="selectTransport" />
            </Dialog>


         </main>
         <DataTable v-if="transports && transportLists && smenalar" size="small" v-model:editingRows="editingRows"
            :value="transports" editMode="row" dataKey="id" @row-edit-save="onRowEdit">
            <Column field="transport_list_id" header="Transport modeli">
               <template #editor="{ data }">
                  <Select v-model="data.transport_list_id" size="small" :options="transportLists" optionValue="id"
                     :optionLabel="(item) => `${item.transport_type.name} ${item.name}`"
                     placeholder="Transport modelini tanlang" />
               </template>
               <template #body="{ data }">
                  {{ data.transport_list.transport_type.name }} - {{ data.transport_list.name }}
               </template>
            </Column>
            <Column field="smena_id" header="Smena turi">
               <template #editor="{ data }">
                  <Select v-model="data.smena_id" size="small" :options="smenalar" optionValue="id" optionLabel="name"
                     placeholder="Smena turini tanlang" />
               </template>
               <template #body="{ data }">
                  {{ data.smena?.name }}
               </template>
            </Column>
            <Column field="garage_number" header="Garaj raqami">
               <template #editor="{ data, field }">
                  <InputText v-model="data[field]" type="text" size="small" fluid />
               </template>
            </Column>
            <Column field="start_smena_day" header="Smena birinchi kuni">
               <template #editor="{ data, field }">
                  <DatePicker v-model="data[field]" fluid size="small" dateFormat="yy-mm-dd"
                     placeholder="Smena birinchi kuni" />
               </template>
            </Column>
            <Column style="width: 50px;">
               <template #body="{ data }">
                  <Button icon="pi pi-eye" type="button" @click="onSelectTranport(data)" severity="secondary"
                     variant="text" rounded></Button>
               </template>
            </Column>
            <Column :rowEditor="true" style="width: 50px;" bodyStyle="text-align:right"></Column>
            <Column style="width: 50px;">
               <template #body="{ data }">
                  <Button icon="pi pi-trash" type="button" @click="onRowDelete(data)" severity="secondary"
                     variant="text" rounded></Button>
               </template>
            </Column>
         </DataTable>
      </main>
   </div>
</template>

<script setup lang="ts">
import SmenaViewer from '../components/SmenaViewer.vue'
import TabButton from '../components/TabButton.vue';
import SmenaRepo from '../repositories/SmenaRepo';
import FormCreateTransport from '../components/FormCreateTransport.vue';
import { ref, Ref } from 'vue';
import OrganizationRepo from '../repositories/OrganizationRepo';
import { ITransport } from '../Interfaces';
import TransportListRepo from '../repositories/TransportListRepo';
import TransportRepo from '../repositories/TransportRepo'
import { useConfirm } from "primevue/useconfirm";
const confirm = useConfirm();
const visibleViewer = ref()
const selectTransport: Ref<ITransport | null> = ref(null)

const visibleRight = ref()
const currentTab: Ref<number> = ref(0)
const editingRows = ref([])
const { data: organizations } = OrganizationRepo.index(() => changeTab(currentTab.value))
const { data: transportLists } = TransportListRepo.index()
const { data: smenalar } = SmenaRepo.index()

function onSelectTranport(transport: ITransport) {
   selectTransport.value = transport
   visibleViewer.value = true
}


const transports: Ref<ITransport[] | null> = ref([])
function changeTab(index: number) {
   transports.value = null
   currentTab.value = index
   if (organizations.value) {
      const currentId = organizations.value[index].id
      OrganizationRepo.transports({ id: currentId }, (result: { data: ITransport[] }) => {
         transports.value = result.data
      })
   }
}

async function onRowCreate(formData: ITransport) {
   if (organizations.value) {
      const organization_id = organizations.value[currentTab.value].id as number
      await new Promise((resolve, reject) => {
         TransportRepo.store({ ...formData, organization_id }, ({ data }: { data: ITransport }) => {
            resolve(true)
            transports.value?.push(data)
            visibleRight.value = false
         })
      })

   }
   else console.error('organizations not found');
}

function onRowDelete(row: any) {
   confirm.require({
      message: `(${row.transport_list.name} - №${row.garage_number}) - Aniq o'chirmoqchimisiz?`,
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
         TransportRepo.destroy(row.id, () => {
            const index: any = transports.value?.findIndex((organization) => organization.id == row.id)

            if (index > -1) {
               transports.value?.splice(index, 1)
            }
         })
      }
   });
}

function onRowEdit(event: any) {
   let { newData, index } = event;
   TransportRepo.update(newData.id, newData, ({ data }: { data: ITransport }) => {
      if (transports.value?.length) {
         transports.value[index].garage_number = data.garage_number;
         transports.value[index].transport_list = data.transport_list;
         transports.value[index].transport_list_id = data.transport_list_id;
         transports.value[index].smena = data.smena;
         transports.value[index].smena_id = data.smena_id;
         transports.value[index].start_smena_day = data.start_smena_day;
      }
   })
}
</script>