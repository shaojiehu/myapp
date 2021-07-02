<template>
  <div class="index-container">
        <TabTop></TabTop>
        <Tabs :titles="titles" class="tabs"></Tabs>  
  </div>
</template>
<script>
  import TabTop from '../../components/TabTop'
  import Tabs from '../../components/Tabs'
  
export default {
   name:'Index',
   data(){
     return {
      titles:['活动','推荐','专题','优选','简书FM']
     }
   },
   components:{
    TabTop,
    Tabs
   }
}
</script>
<style scoped>
.tabs{
  position: sticky;
  top:0;
  background-color: #fff;
  }
</style>