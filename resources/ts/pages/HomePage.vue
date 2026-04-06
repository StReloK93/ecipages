<template>
   <section
      class="h-full p-4 grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 flex-wrap content-start gap-3 relative"
   >
      <div class="col-span-full flex justify-between items-center mb-2">
         <span class="text-2xl font-bold text-gray-700"> Bo'linmalar </span>
         <DatePicker @date-select="onDateSelect" v-model="month" view="month" dateFormat="mm/yy" size="small" />
      </div>
      <div
         v-for="organization in organizations"
         :to="{ name: 'organization', params: { id: organization.id } }"
         class="rounded-2xl bg-white p-4 pb-0 border border-gray-200 flex flex-col justify-between select-none"
      >
         <main class="pb-6">
            <h3 class="text-xl leading-5 font-bold text-gray-700">
               {{ organization.short_name }}
            </h3>
            <h4 class="py-1 text-surface-500 text-sm">{{ organization.name }}</h4>
         </main>
         <div class="pb-4 flex gap-4 justify-end">
            <RouterLink
               :to="{ name: 'organization', params: { id: organization.id } }"
               class="text-sm text-surface-500 inline-flex gap-4 items-center"
            >
               <Button rounded severity="secondary" class="px-0 text-surface-500" icon="pi pi-eye" />
            </RouterLink>
            <RouterLink
               v-if="organization.can_change"
               :to="{ name: 'guide', params: { organization_id: organization.id } }"
               class="text-sm text-surface-500 inline-flex gap-4 items-center"
            >
               <Button rounded severity="secondary" class="px-0 text-surface-500" icon="pi pi-book" />
            </RouterLink>
         </div>
         <button
            @click.stop="successMonthOrganization(organization)"
            :disabled="!organization.can_success"
            :class="{ ' cursor-pointer hover:bg-stone-100': organization.can_success }"
            class="text-sm py-2.5 flex gap-3 justify-between items-center -mx-4 px-4 bg-stone-50 rounded-b-2xl border-t border-gray-100"
         >
            <i
               v-if="organization.can_success"
               class="w-2.5 h-2.5 rounded-full inline-block bg-gray-600 border border-gray-100"
            ></i>
            <i v-else></i>

            <main class="flex gap-3">
               <Transition mode="out-in">
                  <span v-if="organization.success.length === 0" class="flex gap-2 text-surface-500"> Yopilmagan </span>
                  <div v-else class="flex gap-2 text-surface-600">
                     <span> {{ organization.success[0].user.name }} </span>
                     <span> {{ moment(organization.success[0].created_at).format("DD.MM.YYYY HH:mm") }} </span>
                  </div>
               </Transition>

               <span class="text-surface-400">
                  <i v-if="successOrganizationLoading === organization.id" class="pi pi-spin pi-spinner text-sm!"></i>
                  <i
                     v-else
                     class="pi pi-check-circle text-sm!"
                     :class="{ 'text-green-500': organization.success.length }"
                  ></i>
               </span>
            </main>
         </button>
      </div>
      <section class="absolute bottom-0 left-0 p-3 flex gap-3">
         <button
            @click="successCurrentMonth(profession)"
            :disabled="!profession.can_success"
            v-for="profession in bossProfession"
            :key="profession.id"
            class="text-xs w-60 bg-white/60 backdrop-blur-[2px] py-1.5 px-2.5 rounded-md shadow-xs cursor-pointer relative pr-9 flex flex-col justify-between active:scale-98 transition-transform"
         >
            <span class="text-gray-800 inline-block pb-2 font-semibold">
               {{ profession.name }}
            </span>
            <main class="flex justify-between items-center -mr-6">
               <i
                  v-if="profession.can_success"
                  class="w-2.5 h-2.5 rounded-full inline-block bg-gray-600 border border-gray-100"
               ></i>
               <i v-else></i>
               <Transition mode="out-in">
                  <span v-if="profession.success.length === 0" class="text-gray-500"> Yopilmagan </span>
                  <div v-else class="flex gap-2 text-gray-600">
                     <span> {{ profession.success[0].user.name }} </span>
                     <span> {{ moment(profession.success[0].created_at).format("DD.MM.YYYY HH:mm") }} </span>
                  </div>
               </Transition>
            </main>
            <span class="absolute right-3 top-2 text-surface-400">
               <i v-if="successLoading === profession.id" class="pi pi-spin pi-spinner text-sm!"></i>
               <i
                  v-else
                  class="pi pi-check-circle text-sm!"
                  :class="{ 'text-green-500': profession.success.length }"
               ></i>
            </span>
         </button>
      </section>
   </section>
</template>

<script setup lang="ts">
import moment from "moment";
import { onMounted, ref } from "vue";
import OrganizationRepo from "../repositories/OrganizationRepo";
import { useFetchDecorator } from "@/modules/useFetch";
import { IOrganization } from "@/Interfaces";
import BossProfession from "@/repositories/BossProfessionRepo";
const month = ref(new Date());

const successLoading = ref<number>(0);
const successOrganizationLoading = ref<number>(0);
const { data: organizations, execute: executeOrganization } = useFetchDecorator<IOrganization[]>(
   OrganizationRepo.aviable,
);
const { data: bossProfession, execute: executeBossProfession } = useFetchDecorator<any[]>(
   BossProfession.aviableBossProfessions,
);

function onDateSelect(value: Date) {
   getPageData(value);
}

function successMonthOrganization(organization: IOrganization) {
   if (successOrganizationLoading.value != 0) return;
   successOrganizationLoading.value = organization.id!;
   OrganizationRepo.successCurrentMonth({ organization_id: organization.id!, date: month.value })
      .then((res) => {
         executeOrganization(month.value);
      })
      .finally(() => {
         setTimeout(() => (successOrganizationLoading.value = 0), 500);
      });
}

function getPageData(date: Date) {
   executeOrganization(date);
   executeBossProfession(date);
}

function successCurrentMonth(profession: any) {
   if (successLoading.value != 0) return;
   successLoading.value = profession.id;
   BossProfession.successCurrentMonth({ boss_profession_id: profession.id, date: month.value })
      .then((res) => {
         executeBossProfession(month.value);
      })
      .finally(() => {
         setTimeout(() => (successLoading.value = 0), 500);
      });
}

onMounted(() => {
   getPageData(new Date());
});
</script>
