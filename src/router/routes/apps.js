/* 主项目使用路由文件 */
import * as routerNames from '@/router/router-names'

const WORKBENCH = r => require.ensure([], () => r(require('@/views/workbench')), 'workbench')
// const ECHARTSDEMO = r => require.ensure([], () => r(require('@/views/demo/echartsdemo')), 'echartsdemo')
// const AXIOSDEMO = r => require.ensure([], () => r(require('@/views/demo/axiosdemo')), 'axiosdemo')

export default [
  {
    path: '/',
    name: routerNames.WORKBENCH,
    component: WORKBENCH,
    children: [
      {
        path: 'workbench',
        name: routerNames.WORKBENCH,
        component: WORKBENCH
      },
      // {
      //   path: 'axiosdemo',
      //   name: routerNames.AXIOSDEMO,
      //   component: AXIOSDEMO
      // }
    ]
  }
]