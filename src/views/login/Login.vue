<template>
  <div class="login-container">
     <div class="back-icon">
         <img @click="backCLick" src="../../images/go-back.png">
     </div>
     <div class="clear"></div>
     <div class="login-form">
        <div class="login-title">
           手机验证码登录
        </div>
     </div> 
     <div class="login-button">
        
    </div> 
  </div>
</template>
<script>

export default {
  name:"Login",
  methods:{
    backCLick(){
      this.$router.back();
    }
  }

}
</script>
<style scoped>
.login-container{
  width:100%;
  height:100vh;
  overflow: hidden;  
}
.back-icon{
  position: relative;
  height:6rem;  
}
.back-icon img{
  position: absolute;  
  width:1.5rem;
  height:1.5rem;
  display: block;
  top:2rem;
  right:2rem;
}
.clear{
    clear: both;
}
.login-form{
  position: relative; 
  padding:1.5rem; 
}
.login-title{
  color: #000;
  font-size: 2rem;
  font-weight: bold;
}
</style>