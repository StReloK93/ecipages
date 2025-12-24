<template>
   <Form v-slot="$form" ref="instance" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full">
      <div class="flex flex-col">
         <slot :form="$form"></slot>
      </div>
      <div class="flex-grow"></div>
      <main class="flex gap-3">
         <Button type="button" size="small" severity="secondary" @click="$emit('close')" label="Bekor qilish"
            :fluid="true" />
         <Button type="submit" size="small" severity="contrast" label="Saqlash" :fluid="true" :loading="buttonLoader" />
      </main>
   </Form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const instance = ref()

const buttonLoader = ref(false)

const props = defineProps<{
   initialValues: Object
   resolver: any
   submit: (values: any) => Promise<void>
}>()

const onFormSubmit = async ({ valid, values }: { valid: any, values: any }) => {
   if (valid) {
      buttonLoader.value = true
      await props.submit(values).finally(() => {
         buttonLoader.value = false
      })
   }
};


defineExpose({instance})
</script>