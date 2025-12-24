import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "",
        name: "home",
        component: () => import("../pages/HomePage.vue"),
        redirect: { name: "organization", params: { id: 1 } },
        children: [
            {
                path: "/organization/:id",
                name: "organization",
                props: true,
                component: () => import("../pages/OrganizationPage.vue"),
            },
        ],
    },
    {
        path: "/guide",
        name: "guide",
        component: () => import("../pages/GuidePage.vue"),
        redirect: { name: "guide-organization" },
        children: [
            {
                path: "organizations",
                name: "guide-organization",
                component: () => import("../pages/OrganizationGuidePage.vue"),
            },
            {
                path: "transport-types",
                name: "guide-transport-type",
                component: () => import("../pages/TransportTypeGuidePage.vue"),
            },
            {
                path: "transport-lists",
                name: "guide-transport-list",
                component: () => import("../pages/TransportListGuidePage.vue"),
            },
            {
                path: "organization-transports",
                name: "guide-organization-transports",
                component: () =>
                    import("../pages/OrganizationTransportPage.vue"),
            },
            {
                path: "smena",
                name: "guide-smena",
                component: () => import("../pages/SmenaGuidePage.vue"),
            },
        ],
    },
];

export default routes;
