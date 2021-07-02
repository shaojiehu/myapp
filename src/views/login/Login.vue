<template>
  <div class="login-container">
     <div class="back-icon">
         <img @click="backCLick" src="../../images/go-back.png">
     </div>
     <div class="clear"></div>
     <div class="login-form">
         123
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
  height:60px;  
}
.back-icon img{
  position: absolute;  
  width:15px;
  height:15px;
  display: block;
  top:20px;
  right:20px;
}
.clear{
    clear: both;
}
.login-form{
  position: relative;  
}
.login-button{

}
</style>