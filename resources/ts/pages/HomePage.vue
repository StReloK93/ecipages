<template>
   <section class="grid h-full grid-cols-[auto_1fr] p-4">
      <main class="pr-4">
         <nav class="w-64 border-l border-zinc-300 dark:border-zinc-600 flex flex-col gap-1">
            <RouterLink v-for="link in organizations" :to="{ name: 'organization', params: { id: link.id } }">
               <TabButton direction="left" class="text-left line-clamp-1 pr-0" :active="route.name == 'organization' && +route.params.id == link.id">
                  {{ link.name }}
               </TabButton>
            </RouterLink>
         </nav>
      </main>
      <RouterView />
   </section>
</template>

<script setup lang="ts">
import TabButton from '../components/TabButton.vue'
import OrganizationRepo from '../repositories/OrganizationRepo'
import { useRoute } from 'vue-router'
const route = useRoute()

const { data: organizations } = OrganizationRepo.index()
</script>