import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import pikaqiu from './common/pikachu'


// Handle before route, need check auth information.
router.beforeEach((to, from, next) => {
  next();
});


pikaqiu();
require('./mock');


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
