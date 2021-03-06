import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'



//引入并注册 vue-router
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'index',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})

export default router;