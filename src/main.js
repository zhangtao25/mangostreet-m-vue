import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'

Vue.use(mandMobile)


import pikaqiu from './common/pikachu'
import './assets/css/iconfont.css'


// 路由守卫
router.beforeEach((to, from, next) => {
  next();
});


// pikaqiu();
// require('./mock');


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
