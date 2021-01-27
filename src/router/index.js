/* 路由的入口文件 */
import Vue from 'vue'
import VueRouter from 'vue-router'

/* 分类引入不同功能的路由文件 */
import auth from './routes/auth'
import apps from './routes/apps'
import others from './routes/others'

Vue.use(VueRouter)

const routes = [...auth, ...apps, ...others]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router