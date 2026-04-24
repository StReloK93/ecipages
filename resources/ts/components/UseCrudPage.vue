<template>
   <div>
      <Drawer header="Qo'shish" :show-close-icon="false" v-model:visible="visibleRight" position="right">
         <BaseForm :submit="submit" @close="visibleRight = false" :input-configs="inputs" />
      </Drawer>
      <CrudTable
         v-if="entity && isLoading == false"
         :columns="props.entityRepo.columns"
         :filter-fields="props.entityRepo.filterFields"
         :data="entity!"
         @update="openUpdateForm"
         @delete="onDelete"
         @create="openCreateForm"
      >
         <template #column>
            <slot name="column" />
         </template>
      </CrudTable>
      <main v-else class="flex items-center justify-center h-full">
         <ProgressSpinner />
      </main>
   </div>
</template>

<script setup lang="ts">
import BaseForm from "@/components/BaseForm.vue";
import CrudTable from "@/components/CrudTable.vue";
import { ref, onMounted } from "vue";
import { InputConfig, IOrganization } from "@/Interfaces";
import { useFetchDecorator } from "@/modules/useFetch";
import { deleteConfirm } from "@/modules/useConfirm";
import { useConfirm } from "primevue/useconfirm";
import { useRoute } from "vue-router";
import { AxiosResponse } from "axios";
const confirm = useConfirm();
const props = defineProps<{
   entityRepo: Repository;
}>();

const route = useRoute();
const inputs = props.entityRepo.inputs(route.params.organization_id as string);

interface Repository {
   index: () => Promise<any>;
   store: (values: any, organization_id: string) => Promise<AxiosResponse<any, any>>;
   update: (id: number, values: any) => Promise<any>;
   destroy: (id: number) => Promise<any>;
   show: (id: number) => Promise<any>;
   showByOrganization: (organization_id: string) => Promise<any>;
   inputs: (organization_id: string) => InputConfig[];
   columns: { field: string; header: string }[];
   filterFields: string[];
}

const visibleRight = ref(false);
var submit: (values: any) => Promise<void>;

const { data: entity, execute, isLoading } = useFetchDecorator<any[]>(props.entityRepo.showByOrganization);

async function openCreateForm() {
   submit = async (values) => {
      await props.entityRepo.store(values, route.params.organization_id as string);
      await execute(route.params.organization_id);
      visibleRight.value = false;
   };

   await Promise.all(
      inputs.map(async (input) => {
         console.log(input);

         if (input.generateProps) await input.generateProps();
         input.value = undefined;
         return input;
      }),
   ).finally(() => {
      visibleRight.value = true;
   });
}

const onDelete = (row: IOrganization) => {
   confirm.require(
      deleteConfirm(row.name, async () => {
         await props.entityRepo.destroy(row.id!);

         const index: any = entity.value?.findIndex((item: any) => item.id == row.id);

         if (index > -1) {
            entity.value?.splice(index, 1);
         }
      }),
   );
};

async function openUpdateForm(row: any) {
   submit = async (values) => {
      const { data } = await props.entityRepo.update(row.id!, values);
      const selected: any = entity.value?.find((item: any) => item.id == row.id);

      if (selected) {
         for (const key in data) {
            selected[key] = data[key];
         }
      }
      visibleRight.value = false;
   };

   const { data: parameter } = await props.entityRepo.show(row.id!);

   await Promise.all(
      inputs.map(async (input) => {
         if (input.generateProps) await input.generateProps();
         input.value = parameter ? parameter[input.name] : undefined;
         return input;
      }),
   ).finally(() => {
      visibleRight.value = true;
   });
}

onMounted(() => {
   execute(route.params.organization_id);
});
</script>
