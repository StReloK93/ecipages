<template>
   <section class="grow">
      <Dialog v-if="selectTransport" v-model:visible="visibleViewer" modal header="Smena turi" class="w-280">
         <SmenaViewer :transport="selectTransport" />
      </Dialog>
      <UseCrudPage :entity-repo="TransportRepo" class="h-full">
         <template #column>
            <Column style="width: 50px">
               <template #body="{ data }">
                  <Button
                     icon="pi pi-eye"
                     type="button"
                     @click="onSelectTranport(data)"
                     severity="secondary"
                     variant="text"
                     rounded
                  />
               </template>
            </Column>
         </template>
      </UseCrudPage>
   </section>
</template>

<script setup lang="ts">
import SmenaViewer from "@entities/Smena/SmenaViewer.vue";
import UseCrudPage from "@/components/UseCrudPage.vue";
import { ITransport } from "@/Interfaces";
import TransportRepo from "@/repositories/TransportRepo";
import { Ref, ref } from "vue";
const selectTransport: Ref<ITransport | null> = ref(null);
const visibleViewer = ref(false);

function onSelectTranport(transport: ITransport) {
   selectTransport.value = transport;
   visibleViewer.value = true;
}
</script>
