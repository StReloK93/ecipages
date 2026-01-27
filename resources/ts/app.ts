import { createApp } from "vue";
import App from "./App.vue";
import Aura from "@primeuix/themes/aura";
import PrimeVue from "primevue/config";
import { definePreset } from "@primeuix/themes";
import router from "./router";
import ConfirmationService from "primevue/confirmationservice";
import Tooltip from "primevue/tooltip";
import ToastService from "primevue/toastservice";
const MyPreset = definePreset(Aura, {
   semantic: {
      primary: {
         50: "{zinc.50}",
         100: "{zinc.100}",
         200: "{zinc.200}",
         300: "{zinc.300}",
         400: "{zinc.400}",
         500: "{zinc.950}",
         600: "{zinc.950}",
         700: "{zinc.950}",
         800: "{zinc.950}",
         900: "{zinc.950}",
         950: "{zinc.950}",
      },
   },
});

const app = createApp(App);
app.directive("tooltip", Tooltip);
app.use(router);
app.use(ToastService);
app.use(PrimeVue, {
   theme: {
      preset: MyPreset,
      options: {
         darkModeSelector: ".dark",
      },
   },
});
app.use(ConfirmationService).mount("#app");
