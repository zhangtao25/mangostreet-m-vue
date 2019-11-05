export default [
  {
    path: '/auth',
    component: ()=>import('../view/auth.vue'),
  },
  {
    path: '/auth/w',
    component: ()=>import('../view/auth/welcome.vue'),
  },
  {
    path: '/auth/v',
    component: ()=>import('../view/auth/vcode-auth.vue'),
  },
  {
    path: '/auth/p',
    component: ()=>import('../view/auth/password-auth.vue'),
  }
]
