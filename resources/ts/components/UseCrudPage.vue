<template>
   <div>
      <Drawer header="Bo'linma qo'shish" :show-close-icon="false" v-model:visible="visibleRight" position="right">
         <BaseForm :submit="submit" @close="visibleRight = false" :input-configs="props.entityRepo.inputs" />
      </Drawer>
      <CrudTable
         v-if="entity"
         :columns="props.entityRepo.columns"
         :data="entity!"
         @update="openUpdateForm"
         @delete="onDelete"
         @create="openCreateForm"
      >
         <template #column>
            <slot name="column" />
         </template>
      </CrudTable>
   </div>
</template>

<script setup lang="ts">
import BaseForm from "@/components/BaseForm.vue";
import CrudTable from "@/components/CrudTable.vue";
import { ref, onMounted } from "vue";
// import OrganizationRepo from "@repositories/OrganizationRepo";
import { InputConfig, IOrganization } from "@/Interfaces";
import { useFetchDecorator } from "@/modules/useFetch";
import { deleteConfirm } from "@/modules/useConfirm";
import { useConfirm } from "primevue/useconfirm";
const confirm = useConfirm();

interface Repository {
   index: () => Promise<any>;
   store: (values: any) => Promise<any>;
   update: (id: number, values: any) => Promise<any>;
   destroy: (id: number) => Promise<any>;
   show: (id: number) => Promise<any>;
   inputs: InputConfig[];
   columns: { field: string; header: string }[];
}

const props = defineProps<{
   entityRepo: Repository;
}>();

const visibleRight = ref(false);
var submit: (values: any) => Promise<void>;

const { data: entity, execute } = useFetchDecorator<any[]>(props.entityRepo.index);

async function openCreateForm() {
   submit = async (values) => {
      await props.entityRepo.store(values);
      await execute();
      visibleRight.value = false;
   };

   await Promise.all(
      props.entityRepo.inputs.map(async (input) => {
         if (input.generateProps) await input.generateProps();
         input.value = undefined;
         return input;
      })
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
      })
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
      props.entityRepo.inputs.map(async (input) => {
         if (input.generateProps) await input.generateProps();
         input.value = parameter ? parameter[input.name] : undefined;
         return input;
      })
   ).finally(() => {
      visibleRight.value = true;
   });
}

onMounted(() => {
   execute();
});
</script>
