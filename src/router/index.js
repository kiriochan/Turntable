import Vue from 'vue'
import Router from 'vue-router'
import luckWheel from '@/pages/LuckWheel'
import myPrize from '@/pages/myPrize'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/luckWheel',
      name: 'luckWheel',
      component: LuckWheel
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
