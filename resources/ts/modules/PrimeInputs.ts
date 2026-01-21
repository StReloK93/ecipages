import {
   InputText,
   InputNumber,
   Select,
   SelectButton,
   AutoComplete,
   CascadeSelect,
   Checkbox,
   DatePicker,
   FloatLabel,
   IconField,
   InputMask,
   MultiSelect,
   Rating,
   InputChips,
   Textarea,
   ToggleButton,
} from "primevue";

export const globalProps = { size: "small", fluid: true };

export const PrimeInputs = {
   InputText,
   InputNumber,
   Select,
   SelectButton,
   AutoComplete,
   CascadeSelect,
   Checkbox,
   DatePicker,
   FloatLabel,
   IconField,
   InputMask,
   MultiSelect,
   Rating,
   Textarea,
   ToggleButton,
   InputChips,
};

export function selectOption(array: any[], key: string, showClear: boolean = false) {
   return {
      ...globalProps,
      options: array.map((dept: { id: number; [key: string]: any }) => ({
         label: dept[key],
         value: dept.id,
      })),
      optionLabel: "label",
      optionValue: "value",
      showClear: showClear,
   };
}
