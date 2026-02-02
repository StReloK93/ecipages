<template>
   <div class="flex justify-center items-center bg-surface-50 dark:bg-surface-800 min-h-screen p-4">
      <Form
         v-slot="$form"
         :initial-values="initialValues"
         :resolver
         @submit="onFormSubmit"
         autocomplete="off"
      >
         <Card class="w-96 max-w-md">
            <template #title> Kirish </template>
            <template #content>
               <div class="flex flex-col gap-4">
                  <aside>
                     <InputText
                        @keydown="clearError"
                        name="login"
                        type="text"
                        placeholder="Login"
                        fluid
                        autocomplete="new-login"
                     />
                     <Message v-if="$form.login?.invalid" severity="error" size="small" variant="simple">
                        {{ $form.login.error?.message }}
                     </Message>
                  </aside>
                  <aside>
                     <InputText
                        @keydown="clearError"
                        name="password"
                        type="password"
                        placeholder="Parol"
                        autocomplete="new-password"
                        fluid
                     />
                     <Message
                        v-if="$form.password?.invalid"
                        severity="error"
                        size="small"
                        variant="simple"
                     >
                        {{ $form.password.error?.message }}
                     </Message>
                  </aside>
                  <Message v-if="error.length" severity="error" size="small" variant="simple">
                     {{ error }}
                  </Message>
               </div>
            </template>
            <template #footer>
               <div class="flex">
                  <Button :loading="loading" type="submit" label="Kirish" class="w-full" />
               </div>
            </template>
         </Card>
      </Form>
   </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "@primevue/forms";
import { reactive, ref } from "vue";
import { useUserStore } from "../stories/UserStore";
import { AxiosError } from "axios";
import { yupResolver } from "@primevue/forms/resolvers/yup";
import * as yup from "yup";

const error = ref<string>("");
const loading = ref(false);
const UserStore = useUserStore();
const initialValues = reactive({
   login: "",
   password: "",
});

const resolver = yupResolver(
   yup.object().shape({
      login: yup.string().required("Login bo'sh bo'lmasligi kerak."),
      password: yup.string().required("Parol bo'sh bo'lmasligi kerak."),
   })
);

function clearError() {
   error.value = "";
}

async function onFormSubmit(params: FormSubmitEvent) {
   if (params.valid) {
      const values = params.values as { login: string; password: string };
      loading.value = true;
      try {
         await UserStore.login(values);
      } catch (axiosError) {
         const err = axiosError as AxiosError<{ message: string }>;
         error.value = err.response?.data?.message ?? err.message ?? "Noma'lum xatolik yuz berdi";
      } finally {
         loading.value = false;
      }
   }
}
</script>
