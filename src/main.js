import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";

import "./assets/css/layout.scss";
import "./assets/css/theme.scss";
import "./assets/proto-css/index.scss";

import VueMaterial from "vue-material";

Vue.use(VueMaterial);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
