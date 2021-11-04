<template>
  <div class="index-container">
        <TabTop></TabTop>
        <Tabs :titles="titles" class="tabs" @TabIndex="getTabIndex">
        </Tabs>
        <div class="content-container">
           <div v-if="indexNum===0">
              <Activity></Activity>
           </div> 
           <div v-else-if="indexNum===1">
              <Recommend></Recommend>
           </div>
           <div v-else-if="indexNum===2">
               <Subject></Subject>
           </div>
           <div v-else-if="indexNum===3">
                <Select></Select>
           </div>
           <div v-else>
              <Others></Others>
           </div>
        </div>  
        <!-- <div>
          <ul class="img-container">
              <li v-for="item in imglist" :key="item.id">
                  <img v-lazy="item.url" alt="" class="img-item"/>
              </li>
          </ul>
        </div>  -->

        <div class="add-article-button"  @click="show = true" ><img src="../../images/add-article.png" alt=""/></div>      
        <van-action-sheet v-model="show" title="请选择">
          <div class="show-bottom-sheet">
            <div class="show-button" @click="addArticle">
               <img src="../../images/write.png" alt=""/>
               <div class="show-text">发文章</div>
            </div>
            <div class="show-button">
              <img src="../../images/picture.png" alt=""/>
              <div class="show-text">发图片</div>
            </div>
            <div class="show-button">
                <img src="../../images/forum.png" alt=""/>
                <div class="show-text">发帖子</div>
            </div>
          </div>
        </van-action-sheet>
        
  </div>
</template>
<script>
  import TabTop from '../../components/TabTop'
  import Tabs from '../../components/Tabs'
  import Activity from '../../components/Activity'
  import Recommend from '../../components/Recommend'
  import Subject from '../../components/Subject'
  import Select from '../../components/Select'
  import Others from '../../components/Others'
export default {
   name:'Index',
   data(){
     return {
      titles:['活动','推荐','专题','优选','简书'],
      count: 0,
      indexNum:0,
      show:false,
      imglist:[
        {id:2,url:require('../../assets/picture/2.webp')},
        {id:3,url:require('../../assets/picture/3.webp')},
        {id:4,url:require('../../assets/picture/4.webp')},
        {id:5,url:require('../../assets/picture/5.webp')},
        {id:6,url:require('../../assets/picture/6.webp')},
        {id:7,url:require('../../assets/picture/7.webp')},
        {id:8,url:require('../../assets/picture/8.webp')},
        {id:9,url:require('../../assets/picture/9.webp')},
        {id:10,url:require('../../assets/picture/10.webp')}
      ]
     }
   },
   components:{
    TabTop,
    Tabs,
    Activity,
    Recommend,
    Subject,
    Select,
    Others
   },
   methods: {
    addArticle(){
      this.$router.push('/add')
    },
    getTabIndex(index){
      this.indexNum = index;
      console.log("子组件传递的值",index)
    }
  },
}
</script>
<style scoped>
.index-container{
  padding-bottom: 0.5rem;
}
.show-bottom-sheet{
  width:100%;
  height:10rem;
  display: flex;
  justify-content:space-around;
}
.show-button img{
  width:5rem;
  height:5rem;
}
.show-text{
  text-align: center;
  height: 3rem;
  line-height: 3rem;

}
.tabs{
  position: sticky;
  top:0;
  background-color: #fff;
  }
  .img-container{
    width:100%;
    height: auto;
  }
  .img-item{
    display:block;
    height: auto;
    max-width: 100%;
  }
  .content-container{
    width:100%;
    height: auto;
  }
.add-article-button{
    position: fixed;
    width: 5rem;
    height: 5rem;
    z-index: 1;
    bottom:6rem; 
    right:2rem; 
  }
.add-article-button img{
  width:5rem;
  height:5rem;
  }
</style>