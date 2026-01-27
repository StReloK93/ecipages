<template>
   <BaseForm class="h-full" v-slot="slotProps" :submit :resolver :initialValues @close="$emit('close')">
      <div class="mb-4 h-full">
         <FormField v-slot="$field" name="formula">
            <table class="mb-10">
               <tbody>
                  <tr>
                     <td class="border border-white bg-gray-50 w-7 h-7 text-center"></td>
                     <td class="border border-white bg-gray-50 w-7 h-7 text-center content-center" v-for="n in 30">
                        <span class="text-sm leading-1">
                           {{ n }}
                        </span>
                     </td>
                  </tr>
                  <tr>
                     <td class="border border-white bg-gray-50 w-7 h-7 text-center">
                        <span class="p-button-icon pi pi-sun text-orange-400"></span>
                     </td>
                     <td class="border border-white bg-gray-50 w-7 h-7 text-center" v-for="n in 30">
                        <div @click="" class="h-full w-full flex items-center justify-center border border-gray-200">
                           <MiniSelect
                              v-if="smenas"
                              v-model="$field.value.first[n]"
                              name="name"
                              value="id"
                              :data="smenas"
                           />
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <td class="border border-white bg-gray-50 w-7 h-7 text-center">
                        <span class="p-button-icon pi pi-moon !text-sm text-sky-500"></span>
                     </td>
                     <td class="border border-white bg-gray-50 w-7 h-7 text-center" v-for="n in 30">
                        <div class="h-full w-full flex items-center justify-center border border-gray-200">
                           <MiniSelect
                              v-if="smenas"
                              v-model="$field.value.second[n]"
                              name="name"
                              value="id"
                              :data="smenas"
                           />
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
         </FormField>
         <div class="flex-grow"></div>
         <div class="mb-4">
            <InputText placeholder="Smena turi nomi" name="name" size="small" inputId="integeronly" fluid />
            <Message v-if="slotProps.form.name?.invalid" severity="error" size="small" variant="simple">
               {{ slotProps.form.name.error }}
            </Message>
         </div>
      </div>
   </BaseForm>
</template>

<script setup lang="ts">
import MiniSelect from "@components/MiniSelect.vue";
import ChangeRepo from "@repositories/ChangeRepo";
import { IChange } from "@/Interfaces";
import { onMounted, reactive, ref, Ref } from "vue";
import BaseForm from "@components/OldBaseForm.vue";
import { useFetchDecorator } from "@/modules/useFetch";
defineProps<{
   submit: (values: any) => Promise<void>;
}>();

const { data: smenas, execute } = useFetchDecorator<IChange[]>(ChangeRepo.index);

const initialValues = reactive({
   name: "",
   formula: {
      first: {},
      second: {},
   },
});

const resolver = ({ values }: { values: any }) => {
   const errors: any = {};
   const error = "To'ldiring";

   if (!values.name) errors.name = [error];

   return { values, errors };
};

onMounted(async () => {
   await execute();
});
</script>
