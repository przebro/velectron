import Vue from 'vue'
import App from './App.vue'
import router from './router'
import UiHeader from './components/ui/header/header.vue'

Vue.config.productionTip = false
Vue.component("ui-header",UiHeader)

new Vue({
  router,
  UiHeader,
  render: h => h(App)
}).$mount('#app')
