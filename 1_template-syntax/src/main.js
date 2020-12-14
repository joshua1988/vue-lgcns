import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ChartPlugin from "./plugins/ChartPlugin";

Vue.config.productionTip = false;

Vue.use(ChartPlugin);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
