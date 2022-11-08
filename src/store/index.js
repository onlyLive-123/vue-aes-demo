
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    active: 'componentPage',
    selIndex: 0,
    transitionName: 'slide-left'
  },
  mutations: {
    setActive(state, tabPage) {
      state.active = tabPage
    },
    CHANGE_SETTING: (state, {key, value}) => {
      if (state.hasOwnProperty(key)) {
        state[key] = value
      }
    },
  },
  actions: {
    changeSetting({commit}, data) {
      commit('CHANGE_SETTING', data)
    }
  },
  modules: {}
})
