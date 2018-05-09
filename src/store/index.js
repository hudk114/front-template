import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state () {
    return {
      clickTime: 0
    };
  },
  mutations: {
    click (state) {
      state.clickTime += 1;
    }
  },
  actions: {
    click ({ commit }) {
      commit('click');
    }
  }
});
