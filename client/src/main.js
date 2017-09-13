// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import Axios from 'axios'
import App from './App'
import router from './router'

const config = {
  apiKey: 'AIzaSyBZ-tlj5X12Z95-ybQ3leZPIw171hdFXWo',
  authDomain: 'steady-hallway-178312.firebaseapp.com',
  databaseURL: 'https://steady-hallway-178312.firebaseio.com',
  projectId: 'steady-hallway-178312',
  storageBucket: 'steady-hallway-178312.appspot.com',
  messagingSenderId: '425065435280'
}
const firebaseApp = Firebase.initializeApp(config)
Vue.prototype.$db = firebaseApp.database()
Vue.prototype.$http = Axios.create({
  baseURL: 'http://localhost:3000'
})
Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
