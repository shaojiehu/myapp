import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Tab, Tabs, Search} from 'vant';
import VueWechatTitle from 'vue-wechat-title'//动态修改title
Vue.use(VueWechatTitle)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
window.addEventListener('popstate',function(e){
  router.isBack = true
},false)

