import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './router/routerBefore'

import ELEMENT from 'element-ui'
Vue.use(ELEMENT);
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

import Mui from 'vue-awesome-mui'
Vue.use(Mui);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
