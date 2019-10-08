import Vue from "vue";
import App from "./App.vue";
import Vant from "vant";
import "vant/lib/index.css";
import router from "./routers/router";
import store from "./stores/store";

Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  // router1,
  store,
  render: h => h(App)
}).$mount("#app");
