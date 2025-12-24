<template>
   <section ref="miniSelect" class="relative w-6 h-6 text-sm ">
      <button type="button" @click="openMenu = true" class="cursor-pointer bg-white text-center w-full h-full">
         {{ props.name && value ? value[props.name] : value }}
      </button>
      <nav v-if="openMenu" class="absolute top-full bg-white w-full border border-transparent translate-y-px z-[100]">
         <div>
            <button type="button" @click="onSelect(undefined)"
               class="w-full h-full text-center border border-transparent border-y-2 border-y-white bg-zinc-100 hover:bg-zinc-200 cursor-pointer">
               <span class="p-button-icon pi pi-times !text-[10px] text-red-500"></span>
            </button>
            <button type="button" v-for="item in props.data" @click="onSelect(item)"
               class="w-full text-center border border-transparent border-b-2 last:border-b-0 border-b-white bg-zinc-100 hover:bg-zinc-200 cursor-pointer">
               {{ props.name ? item[props.name] : item }}
            </button>
         </div>
      </nav>
   </section>

</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref, computed } from 'vue';
const miniSelect = ref()
const model = defineModel()
const openMenu = ref(false)
const props = defineProps<{
   data: any[],
   name?: string,
   value?: string
}>()


onClickOutside(miniSelect, event => openMenu.value = false)

const value = computed(() => props.data.find((item) => {
   const currentItem = props.value ? item[props.value] : item
   return currentItem == model.value
}))

function onSelect(item: any) {
   if(item){
      model.value = props.value ? item[props.value] : item
   }
   else model.value = undefined
   openMenu.value = false
}
</script>