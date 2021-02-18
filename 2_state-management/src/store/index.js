import Vue from "vue";
import Vuex from "vuex";
import user from "./user";

Vue.use(Vuex);

// npm run serve로 개발할 때 - 개발 모드
// process.env.NODE_ENV <-- development

// npm run build - 배포 모드
// process.env.NODE_ENV <-- production

export default new Vuex.Store({
  strict: process.env.NODE_ENV === "development",
  modules: {
    user
  },
  state: {
    message: "hi"
  },
  getters: {
    reversedMessage(state) {
      return state.message
        .split("")
        .reverse()
        .join("");
    }
  },
  mutations: {
    addMessage(state) {
      state.message = state.message + "!";
      // state.message = state.message + "!";
    },
    fetchData() {
      fetchUser()
        .then(function(response) {
          console.log(response);
        })
        .catch();
    }
  },
  actions: {
    FETCH_USER(context) {
      var result = axios.get("users/1");
      context.commit("setUser", result);
    }
  }
});
