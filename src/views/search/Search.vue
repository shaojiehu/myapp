<template>
  <div class="content-container">
      <div class="search-container">
        <div class="back-icon" @click="goBack"><img src="../../images/back.png" alt=""/></div>
        <div class="search-input">
          <van-search
          v-model="value"
          shape="round"
          background="#fff"
          placeholder="请输入搜索关键词"
          @search="goToSearch"
        />
        </div>
      </div>
      <div class="search-history" v-show="historySearch.length>0">
        <div class="history-title">
          <img src="../../images/history.png" alt=""/><span class="history-text">历史记录</span><span class="history-clear" @click="historyClear">清除历史</span>
        </div>
          <ul>
            <li v-for="(item,index) in historySearch" :key="index"class="historyTag">{{item}}</li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
   data(){
     return {
      value:"",
      historySearch:[]
     }
   },
   mounted(){
     this.getHistorySearch()
   },
   methods:{
    getHistorySearch(){
      this.historySearch = JSON.parse(localStorage.getItem('historySearch')) 
    },
    goBack(){
      this.$router.go(-1);
    },
    goToSearch(value){
      //保存到本地缓存中
      let historyArr = JSON.parse(localStorage.getItem('historySearch'))     
      if(value && historyArr.indexOf(value) === -1){
           historyArr.unshift(value)
          localStorage.setItem('historySearch',JSON.stringify(historyArr))
      }          
    },
    historyClear(){
      localStorage.setItem('historySearch',JSON.stringify([]))
      this.getHistorySearch()
    }
   }
}
</script>
<style scoped>
.content-container{
  width:100%;
}
.search-container{
  width:100%;
  display: flex;
  height:5rem;
}
.back-icon{
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.back-icon img{
  width: 4rem;
  height: 4rem;
}
.search-input{
 flex: 1;
 display: flex;
}
.search-history{
  display: flex;
  flex-wrap: wrap;
}
.history-title{
  width:100%;
  height: 3rem;
  position: relative;
}
.history-title img{
  position: absolute;
  width: 1.6rem;
  height: 1.6rem;
  top:0.7rem;
  left: 0.7rem;
}
.history-text{
  font-size:1.4rem;
  position: absolute;
  top:0.5rem;
  left: 2.8rem;
}
.history-clear{
  font-size:1.4rem;
  position: absolute;
  top:0.5rem;
  right: 0.7rem;
  color: #8a8a8a;
}
.historyTag{
  display: inline-block;
  padding:0 0.8rem;
  background-color: #e6e6e6;
  border-radius: 1.25rem;
  margin: 0.5rem 1.5rem;
  font-size: 1.4rem;
  height:2.5rem;
  line-height: 2.5rem;
  max-width: 10rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>