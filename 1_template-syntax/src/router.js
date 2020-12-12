import Vue from "vue";
import VueRouter from "vue-router";
import ComputedView from "./views/ComputedView.vue";
import InputView from "./views/InputView.vue";
import NotFoundView from "./views/NotFoundView.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/", redirect: "/computed" },
    { path: "/computed", component: ComputedView },
    { path: "/input", component: InputView },
    { path: "*", component: NotFoundView }
  ]
});
