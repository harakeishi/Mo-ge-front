/*
VueXの管理をする
*/

import Vue from 'vue'
import Vuex from 'vuex'

import State from './vuex/state'
import Getters from './vuex/getters'
import Mutations from './vuex/mutations'
import Actions from './vuex/actions'
Vue.use(Vuex)

const state = State
const getters = Getters
const mutations = Mutations
const actions = Actions

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
