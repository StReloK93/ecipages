<template>
   <div class="mb-4 h-full" v-if="props.transport.smena && props.transport.start_smena_day">
      <nav class="mb-4">
         <DatePicker
            v-model="date"
            @update:model-value="selectMonth"
            view="month"
            class="p-0!"
            dateFormat="yy-mm"
            size="small"
         />
      </nav>
      <table>
         <tbody>
            <tr>
               <td class="border border-white bg-gray-50 w-7 h-7 text-center"></td>
               <td class="border border-white bg-gray-50 w-7 h-7 text-center content-center" v-for="day in month">
                  <span class="text-sm leading-1">
                     {{ day.date.getDate() }}
                  </span>
               </td>
            </tr>
            <tr>
               <td class="border border-white bg-gray-50 w-7 h-7 text-center">
                  <span class="p-button-icon pi pi-sun text-orange-400"></span>
               </td>
               <td class="border border-white bg-gray-50 w-7 h-7 text-center" v-for="day in month">
                  <div
                     class="h-full w-full flex items-center justify-center border border-gray-200"
                     :class="{ 'border-l-zinc-900': day.startSmena }"
                  >
                     {{ getChangeByID(props.transport.smena.formula.first[day.number])?.name }}
                  </div>
               </td>
            </tr>
            <tr>
               <td class="border border-white bg-gray-50 w-7 h-7 text-center">
                  <span class="p-button-icon pi pi-moon !text-sm text-sky-500"></span>
               </td>
               <td class="border border-white bg-gray-50 w-7 h-7 text-center" v-for="day in month">
                  <div
                     class="h-full w-full flex items-center justify-center border border-gray-200"
                     :class="{ 'border-l-zinc-900': day.startSmena }"
                  >
                     {{ getChangeByID(props.transport.smena.formula.second[day.number])?.name }}
                  </div>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <div v-else class="pt-2">
      <Message severity="warn">Smena turi va Smena birinchi kunini tanlash shart</Message>
   </div>
</template>

<script setup lang="ts">
import ChangeRepo from "../../repositories/ChangeRepo";
import { ITransport } from "../../Interfaces";
import { ref, Ref } from "vue";
import { onMounted } from "vue";
const props = defineProps<{ transport: ITransport }>();

const date = ref(new Date());
const month = ref();

function getChangeByID(id: number) {
   const change = changes.value?.find((change) => change.id == id);
   if (change) return change;
   else return null;
}

const { data: changes } = ChangeRepo.index();

function selectMonth(value: any) {
   month.value = getDaysOfMonth(value);
}

function daysBetween(date1: any, date2: any) {
   const oneDay = 1000 * 60 * 60 * 24; // 1 kun = millisekundalarda
   const diffInTime = date2.getTime() - date1.getTime();
   return Math.round(diffInTime / oneDay);
}

function getDaysOfMonth(date: any) {
   if (props.transport.smena == null || props.transport.start_smena_day == null) return;
   const startDay = props.transport.start_smena_day ? new Date(props.transport.start_smena_day) : null;
   const smenaDays = Object.keys(props.transport.smena.formula.first).length;

   const year = date.getFullYear();
   const month = date.getMonth(); // 0-based: yanvar = 0

   const result = [];
   const startArray = [];
   const totalDays = new Date(year, month + 1, 0).getDate();

   for (let day = 1; day <= totalDays; day++) {
      const currentDay = new Date(year, month, day);
      const differentDay = daysBetween(startDay, currentDay);

      if (differentDay % smenaDays == 0) {
         result.push({ date: currentDay, number: 1, startSmena: true });

         if (day <= smenaDays) {
            for (let index = smenaDays - 1; index > 0; index--) {
               const diffDay = smenaDays - index;
               const nextDay = new Date(year, month, day - diffDay);

               if (currentDay.getMonth() == nextDay.getMonth())
                  startArray.unshift({ date: nextDay, number: index + 1 });
            }
         }

         for (let index = 1; index < smenaDays; index++) {
            const nextDay = new Date(year, month, day + index);

            if (currentDay.getMonth() == nextDay.getMonth()) result.push({ date: nextDay, number: index + 1 });
         }
      }
   }

   return startArray.concat(result);
}

onMounted(() => {
   selectMonth(date.value);
});
</script>
