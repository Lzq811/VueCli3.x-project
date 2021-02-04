import Vue from 'vue'

import router from '@/router'

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css' // 引入 element 默认的主题文件
import '@/assets/element-variables.scss' // 引入在element默认主题的基础上进行修改的文件

// 引入基础样式
import '@/styles/base.less'

import 'amfe-flexible' // 引入阿里的弹性布局

import * as echarts from 'echarts'

import axios from '@/api/http'

import store from '@/store'

import App from './App.vue'

Vue.use(ElementUI, { size: 'small', zIndex: 2000 })

Vue.prototype.axios = axios
Vue.prototype.echarts = echarts

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
