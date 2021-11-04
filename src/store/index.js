import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    sum:Number(localStorage.getItem("sum")) || 0,
  },
  mutations: {
    jia(context,value){
      context.sum += value  
      localStorage.setItem("sum",context.sum) 
    },
    jian(context,value){
      context.sum -= value 
      localStorage.setItem("sum",context.sum)   
    },
    jiaOdd(context,value){
      if(context.sum % 2 === 0){
        context.sum += value
        localStorage.setItem("sum",context.sum)
      }  
    }
  },
  actions: {
    jiaWait(context,value){
      setTimeout(()=>{
        context.commit('jia',value)
      },500)   
    }
  },
  getters: {},
  modules: {}
})
