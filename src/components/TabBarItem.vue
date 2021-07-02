<template>
  <div class="tab-bar-item" @click="itemClick">
       <slot v-if="!isActive" name="item-icon"></slot> 
       <slot v-else name="item-icon-act"></slot>
       <span :class="{active:isActive}"><slot name="item-text"></slot></span>     
  </div>
</template>
<script>
export default {
   name:'TabBarItem',
   data(){
     return {
      // isActive:true
       }
   },
   props:{
     path:String
   },
   computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      }
   },
   methods:{
    itemClick(){
       this.$router.push(this.path)
    }
   }
}
</script>
<style scoped>
.tab-bar-item{
  flex: 1; 
  text-align: center; 
}
.tab-bar-item img{
  margin-top: 5px;
  width:20px;
  height:20px;
}
.tab-bar-item div{
  font-size: 12px;
}
.active{
    color:#ea6f5a
}




</style>