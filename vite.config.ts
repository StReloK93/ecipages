import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { resolve } from "path"; // <--- SHU QATORNI QO'SHING
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";

export default defineConfig({
   plugins: [
      laravel({
         input: ["resources/ts/app.ts", "resources/css/app.css"],
         refresh: true,
      }),
      vue(),
      tailwindcss(),
      Components({
         resolvers: [PrimeVueResolver()],
      }),
   ],
   resolve: {
      alias: {
         // '@' belgisini resources/ts papkasiga yo'naltiramiz
         "@": resolve(__dirname, "resources/ts"),
         "@pages": resolve(__dirname, "resources/ts/pages"),
         "@components": resolve(__dirname, "resources/ts/components"),
         "@repositories": resolve(__dirname, "resources/ts/repositories"),
         "@entities": resolve(__dirname, "resources/ts/entities"),
      },
   },
});
