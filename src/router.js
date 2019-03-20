import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Generation from './views/Generation'
import Result from './views/Result'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/generation',
      name: 'generation',
      component: Generation
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    }
  ]
})
