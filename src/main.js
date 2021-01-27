import Vue from 'vue'

import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import * as echarts from 'echarts'

import axios from './api/http'

import App from './App.vue'

Vue.use(ElementUI)

Vue.prototype.axios = axios
Vue.prototype.echarts = echarts

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
