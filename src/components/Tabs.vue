<template>
  <div class="tabs">
     <div class="tabs-item" v-for="(title,index) in titles" @click="tabItem(index)">
        <span :class="{active: index === currentIndex}">{{title}}</span>
     </div>    
  </div>
</template>
<script>
export default {
  name:'Tabs',
  data(){
    return {
      currentIndex:0
    }
  },
  props:{
      titles:{
          type:Array,
          default(){
              return []
          }
      }
  },
  methods:{
    tabItem(index){
      this.currentIndex = index;
    }
  }
}
</script>
<style scoped>
.tabs{
  display: flex;
  width:100%;
  text-align: center;
  align-items: center;
  border-bottom: 0.5px solid #ccc;
}
.tabs-item{
  flex:1;
  height:40px;
  line-height: 40px;
  color:#8a8a8a;
}
.tabs-item span{
  padding:10px 0;
}
.active{
  color:#000;
  font-weight: bold;
  border-bottom:#ea6f5a 2px solid;
}

</style>
