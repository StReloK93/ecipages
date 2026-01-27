<template>
   <button
      class="py-1 text-sm px-3 border-transparent cursor-pointer relative"
      :class="[
         { 'font-semibold': props.active },
         { [directions[props.direction].active]: props.active },
         directions[props.direction].border,
         directions[props.direction].different,
      ]"
   >
      <slot></slot>
   </button>
</template>

<script setup lang="ts">
const props = withDefaults(
   defineProps<{
      active: boolean;
      direction?: HttpMethod;
   }>(),
   {
      direction: "bottom",
   }
);

type HttpMethod = "left" | "right" | "top" | "bottom";

const directions = {
   left: {
      border: "border-l hover:border-l-gray-500 dark:hover:border-l-gray-300",
      active: "!border-l-gray-500 dark:!border-l-gray-300",
      different: "right-px",
   },
   right: {
      border: "border-r hover:border-r-gray-500 dark:hover:border-r-gray-300",
      active: "!border-r-gray-500 dark:!border-r-gray-300",
      different: "left-px",
   },
   top: {
      border: "border-t hover:border-t-gray-500 dark:hover:border-t-gray-300",
      active: "!border-t-gray-500 dark:!border-t-gray-300",
      different: "bottom-px",
   },
   bottom: {
      border: "border-b hover:border-b-gray-500 dark:hover:border-b-gray-300",
      active: "!border-b-gray-500 dark:!border-b-gray-300",
      different: "top-px",
   },
};
</script>
