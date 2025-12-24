<template>
   <BaseForm v-slot="slotProps" :submit :resolver :initialValues @close="$emit('close')">
      <div class="mb-4">
         <InputText name="name" severity="contrast" type="text" placeholder="Nomi" size="small" fluid />
         <Message v-if="slotProps.form.name?.invalid" severity="error" size="small" variant="simple">
            {{ slotProps.form.name.error.message }}
         </Message>
      </div>
      <div>
         <InputText name="name_ru" type="text" placeholder="Nomi(ru)" size="small" fluid />
         <Message v-if="slotProps.form.name_ru?.invalid" severity="error" size="small" variant="simple">
            {{ slotProps.form.name_ru.error.message }}
         </Message>
      </div>
   </BaseForm>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import BaseForm from '../components/BaseForm.vue';
defineProps<{
   submit: (values: any) => Promise<void>
}>()
const initialValues = reactive({ name: '', name_ru: '' });

const resolver = ({ values }: { values: any }) => {
   const errors: any = {};
   const error = { message: "To'ldiring" }
   if (!values.name) {
      errors.name = [error];
   }

   if (!values.name_ru) {
      errors.name_ru = [error];
   }
   return { values, errors }
};
</script>