import Vue from "vue";
import Vuex from "vuex";
import user from "./user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user
  },
  state: {
    message: "hi"
  },
  mutations: {
    addMessage(state) {
      state.message = state.message + "!";
    }
  }
});
