import Vue from 'vue';

// 引入组件
import ElementUI from 'element-ui';
import App from './App';
import store from './store';

// 全局绑定
Vue.config.productionTip = false;
Vue.use(ElementUI);

// 引入静态资源
require('element-ui/lib/theme-chalk/index.css');
require('element-ui/lib/theme-chalk/display.css');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
}).$mount('#app');
