<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
import TabBarItem from './TabBarItem' 
export default {
   name:'TabBar',
   components:{
    TabBarItem
   }
}
</script>
<style scoped>
.tab-bar{
  display: flex;
  width:100%;
  height:5rem; 
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border-top: 0.05rem solid #ccc;
  left:0;
  right:0;
}  
</style>