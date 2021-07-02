<template>
  <div class="container">
    <div class="top-container-none"> 
        <div class="scan">
          <img src="../../images/scan.png" alt="">
        </div> 
        <div class="edit">
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
            <div class="">

            </div>
        </div>
    </div>
    
  
  </div>
  </div>
</template>
<script>
  import Category from '../../components/Category'
export default {
  name:'Mine',
  components:{
    Category
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
  height:50px;
  background-color: #ea6f5a; 
  position: relative;
}
.scan{
  position: absolute;
  top: 20px;
  left: 20px;
}
.scan img{
  width:25px;
  height:25px;
}
.edit{
  position: absolute;
  top: 20px;
  right: 20px;
}
.edit img{
  width:25px;
  height:25px;
}
.top-container{
  width: 100%;
  height:100px;
  background-color: #ea6f5a;
  border-radius: 200% / 0 0 100% 100%;
  position: relative;
}
.top-container-one{
  position: absolute;
  width:280px;
  height:160px;
  background-color:#FAFAFA;
  border-radius: 10px;
  top:40px;
  left:20px;
  right:20px;
}
.container-info{
  position: absolute;
  width:280px;
  height:160px;
  background-color:#FAFAFA;
  border-radius: 10px;
  top:220px;
  left:20px;
  right:20px;
}

.message{
  position: relative;
}
.message img{
  position: absolute;
  width:60px;
  height:60px;
  border-radius: 30px;
  top: 20px;
  left: 10px;
}
.message-nickname{
  position: absolute;
  top: 30px;
  left: 100px;
  display: inline-block;
  font-size: 12px;
}
.follow-count{
  position: absolute;
  top: 50px;
  left: 100px;
  font-size: 12px;
}
.follow-count span{
  display: inline-block;
  margin-left: 5px;
}
.fan-count{
  position: absolute;
  top: 50px;
  left: 150px;
  font-size: 12px;
}
.fan-count span{
  display: inline-block;
  margin-left: 5px;
}
.category{
  position: absolute;
  top:100px;
  display: flex;
  width:100%;
}
.category-icon{
  text-align: center;
}

.category-icon img{ 
  display: inline-block;
  width: 30px;
  height: 30px;

}
.category-text{
  font-size: 12px;
  text-align: center;
}

</style>