import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@/assets/css/app.css'
import FrontLayout from "@/layout/FrontLayout.vue";
Vue.use(Buefy)

Vue.component("layout-front", FrontLayout);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
