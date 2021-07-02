<template>
  <div class="tabs-pane">
      <span v-for="title in titles">{{title}}</span>
  </div>
</template>
<script>
export default {
  name:'TabsPane',
  props:{
      titles:{
          type:Array,
          default(){
              return []
          }
      }
  }
}
</script>
<style scoped>
.tabs-pane{
   flex: 1;
   width:60px;
   height:40px;
   border-bottom: 2px solid red;
   text-align: center;
   line-height: 40px;
}    
</style>