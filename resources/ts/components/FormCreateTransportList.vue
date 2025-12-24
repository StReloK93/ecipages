<template>
   <BaseForm v-slot="slotProps" :submit :resolver :initialValues @close="$emit('close')">
      <div class="mb-4">
         <InputText name="name" severity="contrast" type="text" placeholder="Nomi" size="small" fluid />
         <Message v-if="slotProps.form.name?.invalid" severity="error" size="small" variant="simple">{{
            slotProps.form.name.error.message }}</Message>
      </div>
      <div class="mb-4">
         <InputText name="name_ru" type="text" placeholder="Nomi(ru)" size="small" fluid />
         <Message v-if="slotProps.form.name_ru?.invalid" severity="error" size="small" variant="simple">{{
            slotProps.form.name_ru.error.message }}</Message>
      </div>
      <div>
         <Select size="small" name="transport_type_id" :options="(transportTypes || [])" optionValue="id" optionLabel="name" placeholder="Transport turini tanlang" class="w-full" />
         <Message v-if="slotProps.form.transport_type_id?.invalid" severity="error" size="small" variant="simple">{{
            slotProps.form.name_ru.error.message }}</Message>
      </div>
      
   </BaseForm>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import BaseForm from './BaseForm.vue';
import TransportTypeRepo from '../repositories/TransportTypeRepo';
const { data: transportTypes } = TransportTypeRepo.index()
defineProps<{
   submit: (values: any) => Promise<void>
}>()
const initialValues = reactive({ name: '', name_ru: '', transport_type_id: '' });

const resolver = ({ values }: { values: any }) => {
   const errors: any = {};
   const error = { message: "To'ldiring" }
   if (!values.name) {
      errors.name = [error];
   }

   if (!values.name_ru) {
      errors.name_ru = [error];
   }

      if (!values.transport_type_id) {
      errors.transport_type_id = [error];
   }
   return { values, errors }
};
</script>