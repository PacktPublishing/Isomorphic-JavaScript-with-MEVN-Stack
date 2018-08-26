import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import '@/assets/css/style.css'
import BootstrapVue from 'bootstrap-vue'
import moment from 'moment'

Vue.use(BootstrapVue);
Vue.config.productionTip = process.env.NODE_ENV === 'production';
Vue.filter('date', (value) => {
  if (!value) {
    return '';
  }

  return moment(value).format('MMM DD, YYYY');
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
