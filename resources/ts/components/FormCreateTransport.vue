<template>
   <BaseForm v-slot="slotProps" :submit :resolver :initialValues @close="$emit('close')">
      <div class="mb-4">
         <InputNumber name="garage_number" placeholder="Garaj raqami" size="small" inputId="integeronly" fluid />
         <Message v-if="slotProps.form.garage_number?.invalid" severity="error" size="small" variant="simple">
            {{ slotProps.form.garage_number.error }}
         </Message>
      </div>
      <div class="mb-4">
         <DatePicker name="start_smena_day" fluid size="small" dateFormat="yy-mm-dd" placeholder="Smena birinchi kuni" />
         <Message v-if="slotProps.form.start_smena_day?.invalid" severity="error" size="small" variant="simple">
            {{ slotProps.form.start_smena_day.error }}
         </Message>
      </div>
      <div v-if="transportLists" class="mb-4">
         <Select name="transport_list_id" size="small" :options="transportLists" optionValue="id"
            :optionLabel="(item) => `${item.transport_type.name} ${item.name}`" placeholder="Transport modelini tanlang"
            class="w-full" />
         <Message v-if="slotProps.form.transport_list_id?.invalid" severity="error" size="small" variant="simple">
            {{ slotProps.form.transport_list_id.error }}
         </Message>
      </div>
      <div v-if="smenalar" class="mb-4">
         <Select name="smena_id" size="small" optionLabel="name" :options="smenalar" optionValue="id"
            placeholder="Smena turini tanlang" class="w-full" />
         <Message v-if="slotProps.form.smena_id?.invalid" severity="error" size="small" variant="simple">
            {{ slotProps.form.smena_id.error }}
         </Message>
      </div>
   </BaseForm>
</template>

<script setup lang="ts">
import TransportListRepo from '../repositories/TransportListRepo';
import SmenaRepo from '../repositories/SmenaRepo';
import { reactive } from 'vue';
import BaseForm from './BaseForm.vue';
defineProps<{
   submit: (values: any) => Promise<void>
}>()

const { data: transportLists } = TransportListRepo.index()
const { data: smenalar } = SmenaRepo.index()


const initialValues = reactive({ transport_list_id: '', garage_number: '', smena_id: "", start_smena_day: "" });

const resolver = ({ values }: { values: any }) => {
   const errors: any = {};
   const error = "To'ldiring"

   if (!values.transport_list_id) errors.transport_list_id = [error];

   if (!values.garage_number) errors.garage_number = [error];

   if (!values.smena_id) errors.smena_id = [error];
   if (!values.start_smena_day) errors.start_smena_day = [error];
   return { values, errors }
};
</script>