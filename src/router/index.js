import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Index = () => import('../views/index/Index')
const Follow = () => import('../views/follow/Follow')
const Add = () => import('../views/add/Add')
const Message = () => import('../views/message/Message')
const Mine = () => import('../views/mine/Mine')
const Article = () => import('../views/mine/MyArticle')
const Login = () => import('../views/login/Login')
const Search = () => import('../views/search/Search')
const routes = [
  {
    path:'/',
    redirect:'/index'
  },
  {
     path:'/index',
     component:Index,
     meta: {
      footShow: true, // true显示，false隐藏
      title:'首页'
     },
  },
  
  {
    path:'/follow',
    component:Follow,
    meta: {
      footShow: true, // true显示，false隐藏
      title:'关注'
     },
  },
  {
    path:'/add',
    component:Add,
    meta: {
      footShow: false,  // true显示，false隐藏
      title:'发文章'
     },
  },
  {
    path:'/message',
    component:Message,
    meta: {
      footShow: true, // true显示，false隐藏
      title:'消息'
     },
  },
  {
    path:'/mine',
    component:Mine,
    meta: {
      footShow: true, // true显示，false隐藏
      title:'我的'
     },
  },
  {
    path:'/myarticle',
    component:Article,
    meta: {
      footShow: false, // true显示，false隐藏
      title:'我的文章'
     },
  },
  {
    path:'/login',
    component:Login,
    meta: {
      footShow: false, // true显示，false隐藏
      title:'登录'
     },
  },
  {
    path:'/search',
    component:Search,
    meta: {
      footShow: false, // true显示，false隐藏
      title:'搜索'
     },
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to,from,next)=>{
  if(localStorage.getItem('user') ==='hushaojie'){
     next()
  }else{
    alert("你无权访问页面")
  }
  
})
router.afterEach((to,from)=>{
  document.title = to.meta.title
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
