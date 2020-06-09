// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import icons from 'material-design-icons';
import 'material-design-icons/iconfont/material-icons.css';
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import vuetify from './plugins/vuetify' // path to vuetify export
import store from './store';

Vue.use(icons);
Vue.use(vueSwiper);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    vuetify,
}).$mount('#app')