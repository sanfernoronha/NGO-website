import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import home from './views/Home.vue'
import LoginforStaff from './components/LoginforStaff.vue'

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    home,
    LoginforStaff,
    render: h => h(App)
}).$mount('#app')