import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { useUserStore } from "../stories/UserStore";
const router = createRouter({
   history: createWebHistory(),
   routes: routes,
});

router.beforeEach(async (to, from, next) => {
   const userStore = useUserStore();

   if (!userStore.initialized) {
      try {
         await userStore.getAuthUser();
      } catch {
         // optional: handle network error
      }
   }
   const isAuthenticated = userStore.user !== null;
   const isAdmin = userStore.user?.role;

   if (!isAuthenticated && to.name !== "login" && userStore.initialized) return next({ name: "login" });
   else return next();
});

export default router;
