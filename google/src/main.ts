import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import VueLazyload from 'vue-lazyload'
import Bscroll from 'better-scroll'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueTouch from 'vue-touch'

Vue.use(Vant);
Vue.use(VueLazyload);
Vue.use(VueAxios, axios);
Vue.use(VueTouch, {name: 'v-touch'})
// Vue.use(IndexBar);
// Vue.use(IndexAnchor);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
