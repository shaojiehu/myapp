<template>
  <div class="tab-top">
      <div class="tab-top-search">
        <div class="search-box">
           <img src="../images/search.png"/>
           <span>搜索感兴趣的内容</span>
        </div>
      </div>
      <div class="tab-top-login" @click="loginClick">点击登录</div>
  </div>
</template>
<script>
export default {
  name:'TabTop',
  methods:{
    loginClick(){
      this.$router.push('login')
    }
  }
}
</script>
<style scoped>
.tab-top{
    display: flex;
    height:44px;
}
.tab-top-search{
   width:75% ;
   position: relative;
}
.tab-top-login{
    width:25%  
}
.search-box{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  width:200px;
  height:30px;
  background-color: #e6e6e6;
  border-radius: 15px;
  text-align: center;
  line-height: 30px;
}
.search-box img{
    width:14px;
    height:14px;
    display: inline-block;
    margin: -2px 2px ;
}
.search-box span{
    color: #8a8a8a;
    font-size: 14px;
}
.tab-top-login{
   text-align: center;
   line-height: 44px;
   color:#ea6f5a ;
}
</style>