import Vue from 'vue'
import router from './router'

// 引入组件
import App from './App'
import api from './api'
import store from './store'
import ElementUI from 'element-ui'
import VueClipboard from 'vue-clipboard2'

// 全局绑定
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(ElementUI)
Vue.use(VueClipboard)

// 引入静态资源
require('element-ui/lib/theme-chalk/index.css')
require('element-ui/lib/theme-chalk/display.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
