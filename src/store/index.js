/*
* vuex 状态管理的 入口 文件
* 我们可以根据项目的实际功能或者需求 把 state 分开管理
*/

import Vue from 'vue'
import Vuex from 'vuex'

import { SET_COUNT_SHORT, ACT_COUNT_SHORT } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0 // 初始化 count 状态值
  },

  /* count 状态 要改变 必须触发 moutations 的动作 commit 是触发 mutations 的语法糖 */
  mutations: {
    /* 添加一个 count plus mutations 用来模拟 同步更新 count 状态 */
    setCountPlus (state, val) {
      state.count += val
    },

    /* 添加一个 count short mutations 用来模拟 异步更新 count 状态 */
    [SET_COUNT_SHORT] (state, val) {
      state.count -= val
    }
  },

  /* 异步 修改 count 状态， 但这里的异步只是 语法糖， 
    最终还是要 触发 mutations 动作才能完成 count 状态的更新
    触发 actions 的语法糖是 dispath
   */
  actions: {
    [ACT_COUNT_SHORT] (context, val) {
      context.commit('SET_COUNT_SHORT', val)
    }
  }
})