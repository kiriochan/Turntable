import Vue from 'vue'
import Router from 'vue-router'
import LuckWheel from '@/pages/LuckWheel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LuckWheel',
      component: LuckWheel
    }
  ]
})
