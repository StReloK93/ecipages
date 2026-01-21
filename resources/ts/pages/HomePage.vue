<template>
   <section class="h-full p-4 flex justify-center items-center">
      <nav class="flex gap-3">
         <RouterLink v-for="link in organizations" :to="{ name: 'organization', params: { id: link.id } }">
            <div class="w-80 rounded-2xl bg-white text-center pt-8 border border-gray-200">
               <main class="mb-8">
                  <i class="pi pi-circle-fill text-xl! text-gray-200"></i>
               </main>
               <h3 class="w-3/4 mx-auto text-xl leading-5 font-semibold text-gray-700">
                  {{ link.name }}
               </h3>
               <hr class="mt-5 border-gray-200" />
               <h4 class="py-5 bg-surface-900 rounded-b-2xl text-white text-center font-bold">
                  {{ link.short_name }}
               </h4>
            </div>
         </RouterLink>
      </nav>
   </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import TabButton from "../components/TabButton.vue";
import OrganizationRepo from "../repositories/OrganizationRepo";
import { useRoute } from "vue-router";
import { useFetchDecorator } from "@/modules/useFetch";
import { IOrganization } from "@/Interfaces";
const route = useRoute();

const { data: organizations, execute } = useFetchDecorator<IOrganization[]>(OrganizationRepo.index);
onMounted(() => {
   execute();
});
</script>
