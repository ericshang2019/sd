import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cmp1 from '@/components/Cmp1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cmp1',
      component: Cmp1
    }
  ]
})
