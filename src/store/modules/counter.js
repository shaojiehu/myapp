export default {
    namespaced:true,
    state:{
        count:0
    },
    getters:{
      tenTimesCount(state,getters,rootState,rootGetters){
        console.log("getters:",state,getters,rootState,rootGetters); 
        return state.count *10
      }
    },
    mutations:{
      addCount(state,num){
        state.count += num ||1
      }
    },
    actions:{
      addCountAsync(context,num){
         setInterval(function(){
             if(context.state.count<2000){
                 context.commit('addCount',num || 100);
             }
         },num || 100) 
      }
    }
}