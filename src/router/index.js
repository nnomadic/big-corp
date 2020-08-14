import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import News from "../views/News.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/news",
    name: "News",
    component: News
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
