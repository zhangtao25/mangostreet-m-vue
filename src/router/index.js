import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/auth',
      component: ()=>import('../view/auth.vue'),
      children:[
        {
          path: 'w',
          component: ()=>import('../view/auth/welcome.vue'),
        },
        {
          path: 'v',
          component: ()=>import('../view/auth/vcode-auth.vue'),
        },
        {
          path: 'p',
          component: ()=>import('../view/auth/password-auth.vue'),
        }
      ]
    },
    {
      path: '/home',
      component: ()=>import('../view/home.vue')
    },
    {
      path: '/mall',
      component: ()=>import('../view/mall.vue')
    },
    {
      path: '/msg',
      component: ()=>import('../view/msg.vue')
    },
    {
      path: '/mine',
      component: ()=>import('../view/mine.vue')
    },
  ]
})
