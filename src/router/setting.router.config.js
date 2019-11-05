export default [
  {
    path: '/setting',
    component: ()=>import('../view/mine/setting.vue')
  },
  {
    path: '/setting/edit/nickname',
    component: ()=>import('../view/mine/edit-user-nickname.vue')
  },
]
