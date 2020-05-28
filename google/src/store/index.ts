import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stu_identify: 1,   // 课代表标识  0普通  1课代表
    user_info: {},
  },
  mutations: {
    updateUserInfo(state, payLoad) {
      state.user_info = payLoad.user_info;
    },
  },
  actions: {
  },
  modules: {
  }
})
