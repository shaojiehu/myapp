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
   width:6rem;
   height:4rem;
   border-bottom: 0.2rem solid red;
   text-align: center;
   line-height: 4rem;
}    
</style>