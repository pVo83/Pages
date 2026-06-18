import { createRouter, createWebHashHistory } from "vue-router"

import Home from "@/pages/Home.vue"
import About from "@/pages/About.vue"
import Contacts from "@/pages/Contacts.vue"
import OurStore from "@/pages/OurStore.vue"
import Articles from "@/pages/Articles.vue"
import Shipping from "@/pages/Shipping.vue"
import Privacy from "@/pages/Privacy.vue"
import NotFound from "@/pages/NotFound.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/our-store",
    name: "our-store",
    component: OurStore,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/articles",
    name: "articles",
    component: Articles,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/contacts-us",
    name: "contacts",
    component: Contacts,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/shipping",
    name: "shipping",
    component: Shipping,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/privacy",
    name: "privacy",
    component: Privacy,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
    meta: { layout: "ErrorLayout" },
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      }
    }

    return { left: 0, top: 0 }
  },
})

export default router
