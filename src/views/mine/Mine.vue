<template>
  <div class="container">
    <div class="top-container-none"> 
        <div class="scan">
          <img src="../../images/scan.png" alt="">
        </div> 
        <div class="edit"  @click="addArticle">
          <img src="../../images/pen.png" alt="">
        </div>  
    </div> 
    <div class="top-container">
        <div class="top-container-one">
            <div class="message">
              <img src="../../images/avator.png">
              <span class="message-nickname">胡少杰</span>
              <div class="follow-count">关注<span>0</span></div>
              <div class="fan-count">粉丝<span>0</span></div>
            </div>
            <div class="category">
              <Category path="myarticle">
                <div class="category-icon" slot="icon"><img src="../../images/article.png" /></div>
                <div class="category-text" slot="text">我的文章</div>
              </Category>
              <Category>
                <div  class="category-icon" slot="icon"><img src="../../images/invitation.png" /></div>
                <div  class="category-text" slot="text">我的帖子</div>
              </Category>
              <Category>
                <div class="category-icon" slot="icon"><img src="../../images/follow.png" /></div>
                <div class="category-text" slot="text">赞与收藏</div>
              </Category>
              <Category>
                <div class="category-icon" slot="icon"><img src="../../images/bookshelf.png" /></div>
                <div class="category-text" slot="text">我的书架</div>
              </Category>
            </div>
        </div>
        <div class="container-info">
        </div>
    </div>
  </div>
</template>
<script>
  import Category from '../../components/Category'
export default {
  components:{
    Category
  },
  methods:{
    addArticle(){
      this.$router.push('/add')
    }
  }
}
</script>
<style scoped>
.container{
  width: 100%;
  background-color: #fff;
  
}
.top-container-none{
  width: 100%;
  height:5rem;
  background-color: #ea6f5a; 
  position: relative;
}
.scan{
  position: absolute;
  top: 2rem;
  left: 2rem;
}
.scan img{
  width:2.5rem;
  height:2.5rem;
}
.edit{
  position: absolute;
  top: 2rem;
  right: 2rem;
}
.edit img{
  width:2.5rem;
  height:2.5rem;
}
.top-container{
  width: 100%;
  height:10rem;
  background-color: #ea6f5a;
  border-radius: 200% / 0 0 100% 100%;
  position: relative;
}
.top-container-one{
  position: absolute;
  width:28rem;
  height:16rem;
  background-color:#FAFAFA;
  border-radius: 1rem;
  top:4rem;
  left:2rem;
  right:2rem;
}
/* .container-info{
  position: absolute;
  width:28rem;
  height:16rem;
  background-color:#FAFAFA;
  border-radius: 1rem;
  top:22rem;
  left:20rem;
  right:20rem;
} */

.message{
  position: relative;
}
.message img{
  position: absolute;
  width:6rem;
  height:6rem;
  border-radius: 3rem;
  top: 2rem;
  left: 1rem;
}
.message-nickname{
  position: absolute;
  top: 3rem;
  left: 10rem;
  display: inline-block;
  font-size: 1.2rem;
}
.follow-count{
  position: absolute;
  top: 5rem;
  left: 10rem;
  font-size: 1.2rem;
}
.follow-count span{
  display: inline-block;
  margin-left: 0.5rem;
}
.fan-count{
  position: absolute;
  top: 5rem;
  left: 15rem;
  font-size: 1.2rem;
}
.fan-count span{
  display: inline-block;
  margin-left: 0.5rem;
}
.category{
  position: absolute;
  top:10rem;
  display: flex;
  width:100%;
}
.category-icon{
  text-align: center;
}

.category-icon img{ 
  display: inline-block;
  width: 3rem;
  height: 3rem;

}
.category-text{
  font-size: 1.2rem;
  text-align: center;
}

</style>