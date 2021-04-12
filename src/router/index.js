import Vue from 'vue'
import Router from 'vue-router'
import luckWheel from '@/pages/luckWheel'
import myPrize from '@/pages/myPrize'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/luckWheel',
      name: 'luckWheel',
      component: luckWheel
    },
    {
      path: '/myPrize',
      name: 'myPrize',
      component: myPrize
    },
    // 重定向
    {
        path: '/', 
        redirect: '/luckWheel' 
    }
  ]
})
