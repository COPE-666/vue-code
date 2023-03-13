import Vue from 'vue'
import App from './App.vue'

import cytoscape from 'cytoscape';

// 全局引入 cytoscap 关系图库
Vue.prototype.$cytoscape = cytoscape;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
