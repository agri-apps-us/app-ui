import Vue from 'vue'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import App from './App.vue'
import router from './router'
import store from './store'
import plugin from './app-plugin'

//import 'uikit/dist/css/uikit.min.css'
import '@/assets/css/dashboard.css'
import '@/assets/css/inputs.css'
import '@/assets/css/buttons.css'
import '@/assets/css/calculator.css'

Vue.config.productionTip = false

UIkit.use(Icons)

const register = (def) => {
  console.log('def', def);
}
const base = "/";

Vue.use(plugin, { base, router, store, register })

console.log(this, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
