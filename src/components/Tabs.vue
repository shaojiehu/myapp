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
      console.log(index)
      this.$emit("TabIndex",index)
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
  border-bottom: 0.05rem solid #ccc;
}
.tabs-item{
  flex:1;
  height:4rem;
  line-height: 4rem;
  font-size: 1.2rem;
  color:#999999;
  letter-spacing: 0.1rem;
}
.tabs-item span{
  padding:1rem 0;
}
.active{
  color:#000;
  font-weight: 500;
  border-bottom:#E96F5A 0.2rem solid;
}

</style>
