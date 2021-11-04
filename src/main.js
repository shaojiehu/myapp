import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button ,Search ,ActionSheet,Field  } from 'vant';
import VueLazyLoad from 'vue-lazyload'
import VueQuillEditor from 'vue-quill-editor'
import VueWechatTitle from 'vue-wechat-title'//动态修改title

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor,{
  modules: {
  
  },
  placeholder: '请输入内容...',
  theme: 'snow'
})
Vue.use(VueWechatTitle)
Vue.use(VueLazyLoad, {
  preLoad: 1,
  error: require('./assets/picture/error.webp'),
  loading: require('./assets/picture/loader.webp'),
  attempt: 2,
})
Vue.use(Button);
Vue.use(Search);
Vue.use(ActionSheet);
Vue.use(Field);
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
window.addEventListener('popstate',function(e){
  router.isBack = true
},false)

