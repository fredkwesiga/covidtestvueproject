import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import Vue from 'vue'
// import Vuelidate from 'vuelidate'
import { VuelidatePlugin } from '@vuelidate/core'

// import router from './router'
// import bootstrap from 'bootstrap';
// import jQuery from 'jquery';

// Vue.use(Vuelidate)
// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

const app = createApp(App)
app.use(VuelidatePlugin)

app.mount('#app')
