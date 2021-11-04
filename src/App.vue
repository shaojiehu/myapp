<template>
  <div id="app">
    <!-- <transition :name="transitionName"> -->
      <router-view class="router"></router-view> 
    <!-- </transition> -->
    <TabBar v-if='$route.meta.footShow'>
      <TabBarItem path='/index'>       
          <img slot="item-icon" src="./assets/images/index.png" alt=""/>  
          <img slot="item-icon-act" src="./assets/images/index-active.png" alt=""/>                
          <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path='/follow'>
          <img slot="item-icon" src="./assets/images/follow.png" alt=""/>       
          <img slot="item-icon-act" src="./assets/images/follow-active.png" alt=""/>
          <div slot="item-text">关注</div>
      </TabBarItem>
      <!-- <TabBarItem path='/add'>
          <img  slot="item-icon" src="./assets/images/add.png" alt=""/>
          <img  slot="item-icon-act" src="./assets/images/add-active.png" alt=""/>
          <div slot="item-text">星球</div>
      </TabBarItem> -->
      <TabBarItem path='/message'>
          <img slot="item-icon" src="./assets/images/message.png" alt=""/>
          <img slot="item-icon-act" src="./assets/images/message-active.png" alt=""/>
          <div slot="item-text">消息</div>
      </TabBarItem>
      <TabBarItem path='/mine'>
          <img slot="item-icon" src="./assets/images/mine.png" alt=""/>
          <img slot="item-icon-act" src="./assets/images/mine-active.png" alt=""/>
        <div slot="item-text">我的</div>
      </TabBarItem>
      </TabBar>
  </div>
</template>
<script>
import TabBar from './components/TabBar'
import TabBarItem from './components/TabBarItem'
export default {
  name:'App',
  data(){
    return { 
      transitionName:'slide-right'
    }
  },
  beforeCreate(){
    // const deviceWidth = window.screen.width;
    // const deviceHeight = window.screen.height;
    // console.log(deviceWidth,deviceHeight);
  },
  watch:{
    $route(to,from){
      let isBack = this.$router.isBack;
      if(isBack){
        this.transitionName = 'slide-right'
      }else{
        this.transitionName = 'slide-left'
      }
        this.$router.isBack = false
    }
  },

   components:{
     TabBar,
     TabBarItem
   },
   methods:{
   }
}
</script>
<style>
 @import './css/base.css';
 @import './css/animal.css';
</style>
