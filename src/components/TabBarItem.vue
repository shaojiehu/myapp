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
  margin-top: 0.5rem;
  width:2rem;
  height:2rem;
}
.tab-bar-item div{
  -webkit-text-size-adjust:none; 
  font-size:1rem; 
  -webkit-transform : scale(0.8); 
  letter-spacing: 0.1rem;
}
.active{
    color:#D67868
}




</style>