import Vue from 'vue'
import Router from 'vue-router'
import authRouterConfig from './auth.router.config'
import settingRouterConfig from './setting.router.config'

Vue.use(Router);

export default new Router({
  routes: [
    ...authRouterConfig,
    {
      path: '/home',
      component: ()=>import('../view/home.vue')
    },
    {
      path: '/note-detail',
      component: ()=>import('../view/home/note-detail.vue')
    },
    {
      path: '/mall',
      component: ()=>import('../view/mall.vue')
    },
    {
      path: '/add',
      component: ()=>import('../view/add.vue')
    },
    {
      path: '/msg',
      component: ()=>import('../view/msg.vue')
    },
    {
      path: '/mine',
      component: ()=>import('../view/mine.vue')
    },
    ...settingRouterConfig
  ]
})
