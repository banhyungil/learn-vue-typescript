import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    name: "half",
  },
  mutations: {
    change(state, name) {
      state.name = name;
    },
  },
});
