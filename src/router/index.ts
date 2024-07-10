import { createRouter, createWebHistory } from "vue-router";

import BaseLayout from "@/components/BaseLayout/BaseLayout.vue";

import About from "@/pages/About/About.vue";
import Home from "@/pages/Home/Home.vue";

const routes = [
  {
    path: "/",
    name: "Public",
    component: BaseLayout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        component: About,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
