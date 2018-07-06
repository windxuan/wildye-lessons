import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 移动端
    isWebApp: null,
  },
  mutations: {
    setIsWebApp(state, val) {
      state.isWebApp = val;
    },
  },
});
