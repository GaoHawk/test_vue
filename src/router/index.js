import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Direct from '@/components/customDirectives'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Direct',
      component: Direct
    }
  ]
})
