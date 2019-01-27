import Vue from 'vue';
import 'bootstrap'
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
