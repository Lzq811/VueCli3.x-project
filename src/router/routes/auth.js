/* 校验类页面路由 */
import * as routerNames from '@/router/router-names'

const Auth = r => require.ensure([], () => r(require('@/views/auth')), 'login')
const LOGIN = r => require.ensure([], () => r(require('@/views/auth/login')), 'login')
const REGISTER = r => require.ensure([], () => r(require('@/views/auth/register')), 'register')

export default [
  {
    path: '/', // 根目录重定向
    redirect: { name: routerNames.LOGIN}
  },
  {
    path: '/auth', // 校验注册登录页面
    component: Auth,
    children: [
      {
        path: 'login', // 登录
        name: routerNames.LOGIN,
        component: LOGIN
      },
      {
        path: 'register', // 注册
        name: routerNames.REGISTER,
        component: REGISTER
      },
    ]
  }
]