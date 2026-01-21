<template>
   <Form
      v-slot="$form"
      ref="instance"
      :initial-values
      :resolver
      @submit="onFormSubmit"
      class="flex flex-col gap-4 w-full h-full pt-2"
   >
      <slot></slot>

      <div class="flex flex-col">
         <template v-for="(input, index) in inputConfigs" :key="index">
            <main :class="input.class">
               <FloatLabel v-if="input.placeholder" variant="on">
                  <component
                     :input="input"
                     :is="input.component"
                     :name="input.name"
                     :id="input.name"
                     v-bind="input.props"
                  />
                  <label :for="input.name">{{ input.placeholder }}</label>
               </FloatLabel>

               <component
                  v-else
                  :is="input.component"
                  :input="input"
                  :name="input.name"
                  v-bind="input.props"
               />

               <Message
                  v-if="$form[input.name]?.invalid"
                  severity="error"
                  size="small"
                  variant="simple"
               >
                  {{ $form[input.name].error.message }}
               </Message>
            </main>
         </template>
      </div>

      <div class="grow" />

      <footer class="flex gap-3 pb-4 -mb-4">
         <Button
            type="button"
            size="small"
            severity="secondary"
            @click="emit('close')"
            label="Bekor qilish"
            :fluid="true"
         />
         <Button type="submit" size="small" label="Saqlash" :fluid="true" :loading="buttonLoader" />
      </footer>
   </Form>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "@primevue/forms";
import { reactive, ref } from "vue";
import { yupResolver } from "@primevue/forms/resolvers/yup";
import * as yup from "yup";
import type { InputConfig } from "@/Interfaces";
const instance = ref();

const emit = defineEmits(["close"]);

const buttonLoader = ref(false);

const props = defineProps<{
   inputConfigs: InputConfig[];
   submit: (values: unknown) => Promise<void>;
   superRefine?: (values: unknown, ctx: yup.AnyObject) => void;
}>();

const onFormSubmit = async (formEvent: FormSubmitEvent) => {
   if (formEvent.valid) {
      buttonLoader.value = true;
      console.log(formEvent);
      await props.submit(formEvent.values).finally(() => {
         buttonLoader.value = false;
      });

      emit("close");
   }
};

const initialValues = reactive(
   props.inputConfigs.reduce((acc, curr) => {
      acc[curr.name] = curr.value;
      return acc;
   }, {} as Record<string, unknown>)
);

// 1. Dinamik ravishda obyekt sxemasini yig'ib chiqamiz
const schemaObject = props.inputConfigs.reduce((acc, curr) => {
   if (curr.schema) {
      acc[curr.name] = curr.schema;
   }
   return acc;
}, {} as Record<string, yup.AnySchema>);

const resolver = yupResolver(yup.object().shape(schemaObject));

defineExpose({ instance });
</script>
