import Vue from 'vue'
import Router from 'vue-router'
import lucky from '@/pages/lucky'
import login from '@/pages/login'
import myPrize from '@/pages/myPrize'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/lucky',
      name: 'lucky',
      component: lucky
    },
    {
      path: '/myPrize',
      name: 'myPrize',
      component: myPrize
    },
    // 重定向
    {
        path: '/', 
        redirect: '/lucky' 
    }
  ]
})
