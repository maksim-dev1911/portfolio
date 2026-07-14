import { createRouter, createWebHistory } from "vue-router";

import BaseLayout from "@/components/BaseLayout/BaseLayout.vue";

import About from "@/pages/About/About.vue";
import Home from "@/pages/Home/Home.vue";
import route from "@/config/route";
import Project from "@/pages/ProjectDetails/ProjectDetails.vue";
import Contact from "@/pages/Contact/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Public",
    component: BaseLayout,
    redirect: route.HOME,
    children: [
      {
        path: route.HOME,
        name: "Home",
        component: Home,
      },
      {
        path: route.ABOUT,
        name: "About",
        component: About,
      },
      {
        path: route.CONTACT,
        name: "Contact",
        component: Contact,
      },
      {
        path: route.HOME_PROJECT,
        name: "ProjectDetails",
        component: Project,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
