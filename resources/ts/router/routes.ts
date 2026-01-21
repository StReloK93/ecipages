import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
   {
      path: "",
      name: "home",
      component: () => import("../pages/HomePage.vue"),
   },
   {
      path: "/organization/:id",
      name: "organization",
      props: true,
      component: () => import("../pages/OrganizationPage.vue"),
   },
   {
      path: "/guide",
      name: "guide",
      component: () => import("../pages/GuidePage.vue"),
      redirect: { name: "guide-organization" },
      children: [
         {
            path: "lavozims",
            name: "guide-lavozim",
            component: () => import("../pages/Guides/LavozimGuidePage.vue"),
         },
         {
            path: "emmployes",
            name: "guide-employe",
            component: () => import("../pages/Guides/EmployeGuidePage.vue"),
         },
         {
            path: "organizations",
            name: "guide-organization",
            component: () => import("../pages/Guides/OrganizationGuidePage.vue"),
         },
         {
            path: "transport-types",
            name: "guide-transport-type",
            component: () => import("../pages/Guides/TransportTypeGuidePage.vue"),
         },
         {
            path: "transport-lists",
            name: "guide-transport-list",
            component: () => import("../pages/Guides/TransportListGuidePage.vue"),
         },
         {
            path: "transports",
            name: "guide-transports",
            component: () => import("../pages/Guides/TransportGuidePage.vue"),
         },
         {
            path: "smena",
            name: "guide-smena",
            component: () => import("../pages/Guides/SmenaGuidePage.vue"),
         },
      ],
   },
];

export default routes;
