import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

createApp(App)
  .use(router)
  .use(axios)
  .component("nav-bar", Nav)
  .component("custom-header", Header)
  .component("custom-footer", Footer)
  .mount("#app");
