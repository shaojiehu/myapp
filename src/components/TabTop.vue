<template>
  <div class="tab-top">
      <div class="tab-top-search">
        <div class="search-box" @click="goSearch">
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
    },
    goSearch(){
      this.$router.push('search')
    }
  }
}
</script>
<style scoped>
.tab-top{
    display: flex;
    height:4.4rem;
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
  width:20rem;
  height:3rem;
  background-color: #F4F4F4;
  border-radius: 1.5rem;
  text-align: center;
  line-height: 3rem;
}
.search-box img{
    width:1.4rem;
    height:1.4rem;
    display: inline-block;
    margin: -0.2rem 0.2rem ;
}
.search-box span{
    color: #9A9A9A;
    font-size: 1.2rem;
    letter-spacing:0.1rem;
}
.tab-top-login{
   text-align: center;
   line-height: 4.4rem;
   color:#E96F5A ;
   font-size: 1.2rem;
   letter-spacing: 0.1rem;
}
</style>