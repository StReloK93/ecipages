<template>
   <section class="grid h-full grid-cols-[auto_1fr] p-4">
      <main class="pr-4">
         <nav class="w-64 border-l border-zinc-300 dark:border-zinc-600 flex flex-col gap-1">
            <RouterLink
               v-for="link in links"
               :to="{ name: link.name }"
               :class="{
                  'font-semibold !border-l-black dark:!border-l-white': route.name == link.name,
               }"
               class="py-1 border-l text-sm border-l-transparent hover:border-l-black dark:hover:border-l-white px-3 relative -left-px line-clamp-1"
            >
               {{ link.text }}
            </RouterLink>
         </nav>
      </main>
      <RouterView class="p-4 bg-white rounded-md border border-gray-200 dark:bg-zinc-900 dark:border-zinc-950" />
   </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();

const links = [
   { name: "guide-organization", text: "Bo'linmalar" },
   { name: "guide-transport-type", text: "Qurilma turlari" },
   { name: "guide-lavozim", text: "Lavozimlar" },
   { name: "guide-transport-list", text: "Qurilma modellari" },
   { name: "guide-smena", text: "Smenalar" },
   { name: "guide-transports", text: "Qurilmalar" },
   { name: "guide-employe", text: "Xodimlar" },
];
</script>
