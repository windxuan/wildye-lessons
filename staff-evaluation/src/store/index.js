import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    //  存储答题分数的数组
    total1: [],
    total2: [],

    // 移动端
    isWebApp: null,

    // 显示侧栏
    showSideBar: false,

    // 显示问卷码
    showDialogCode: false,

    // 登录状态
    loginStatus: false,

    // 登录信息
    userInfo: {
      id: null,
      userName: null,
      token: null
    },

    // 生成问卷
    codeInfo: {
      survey_id: 1,
      num: 1
    },

    // 问卷码
    surveyCode: null
  },
  mutations: {
    setIsWebApp (state, val) {
      state.isWebApp = val
    },
    toggleSideBar (state) {
      state.showSideBar = !state.showSideBar
    },
    setLoginStatus (state, val) {
      state.loginStatus = val
    },
    setUserInfo (state, val) {
      state.userInfo = val
    },
    setToken (state, val) {
      state.userInfo.token = val
    },
    toggleDialogCode (state) {
      state.showDialogCode = !state.showDialogCode
    },
    setCodeId (state, val) {
      state.codeInfo.survey_id = val
    },
    setCodeNum (state, val) {
      state.codeInfo.num = val
    },
    setSurveyCode (state, val) {
      state.surveyCode = val
    }
  }
})
