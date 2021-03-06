import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/main.js'
Vue.config.productionTip = false
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
