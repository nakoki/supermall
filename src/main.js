import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import '../rem'

import toast from 'components/common/toast'

Vue.config.productionTip = false

// 添加事件总线对象
Vue.prototype.$bus = new Vue();
// 安装插件toast
Vue.use(toast)
// 解决移动端300毫秒延迟
FastClick.attach(document.body)
// 使用懒加载
Vue.use(VueLazyLoad, {
  loading: require('assets/img/common/loading.gif')
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
