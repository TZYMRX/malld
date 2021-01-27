import Vue from 'vue'
import App from './App.vue'
import router from "./router";

import Vant from 'vant'
import 'vant/lib/index.css';
import { Lazyload } from 'vant';

Vue.use(Vant)
Vue.use(Lazyload, {
	lazyComponent: true,
});

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
	render: h => h(App),
	router
}).$mount('#app')
