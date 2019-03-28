// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import '@/assets/styles/border.css'
import '@/assets/styles/reset.css'

Vue.config.productionTip = false

fastClick.attach(document.body)//事件300毫秒的延迟
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
