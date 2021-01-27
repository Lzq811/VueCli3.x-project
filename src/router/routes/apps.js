/* 主项目使用路由文件 */
import * as routerNames from '@/router/router-names'

const DEMO = r => require.ensure([], () => r(require('@/views/demo')), 'echartsdemo')
const ECHARTSDEMO = r => require.ensure([], () => r(require('@/views/demo/echartsdemo')), 'echartsdemo')
const AXIOSDEMO = r => require.ensure([], () => r(require('@/views/demo/axiosdemo')), 'axiosdemo')

export default [
  {
    path: '/demo',
    name: routerNames.DEMO,
    component: DEMO,
    children: [
      {
        path: 'echartsdemo',
        name: routerNames.ECHARTSDEMO,
        component: ECHARTSDEMO
      },
      {
        path: 'axiosdemo',
        name: routerNames.AXIOSDEMO,
        component: AXIOSDEMO
      }
    ]
  }
]