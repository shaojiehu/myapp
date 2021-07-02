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
     },
  },
  
  {
    path:'/follow',
    component:Follow,
    meta: {
      footShow: true, // true显示，false隐藏
     },
  },
  {
    path:'/add',
    component:Add,
    meta: {
      footShow: true, // true显示，false隐藏
     },
  },
  {
    path:'/message',
    component:Message,
    meta: {
      footShow: true, // true显示，false隐藏
     },
  },
  {
    path:'/mine',
    component:Mine,
    meta: {
      footShow: true, // true显示，false隐藏
     },
  },
  {
    path:'/myarticle',
    component:Article,
    meta: {
      footShow: false, // true显示，false隐藏
     },
  },
  {
    path:'/login',
    component:Login,
    meta: {
      footShow: false, // true显示，false隐藏
     },
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
