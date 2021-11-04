<template>
  <div class="article-contioner">
    <div class="article-contioner-top">
      <div class="back-icon" @click="goBack">
        <img src="../../images/back.png" alt="" /> 
      </div>
      <div class="publish-container">
        <div class="publish-button" @click="">发布</div>
      </div>
    </div>
    <div class="article-contioner-top">
      <van-field v-model="text" label="标题" /> 
    </div>
    <quill-editor class="editor"
        v-model="messages"
        ref="myQuillEditor"
        @blur="onEditorBlur"
        @focus="onEditorFocus"
        @ready="onEditorReady">
</quill-editor>
  </div>
</template>

<script>
export default {
  name:'Add',
  data(){
    return{
      messages:"",
      text:""
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    onEditorBlur() {
        console.log('blur',this.messages)
      },
 
      onEditorFocus(){
        console.log('focus',this.messages)
      },
 
      onEditorReady(){
        console.log('ready',this.messages)
      }
  }
}
</script>
<style scoped>
.article-contioner{
  width: 100%;
  }
  .back-icon{
    position: absolute;
    top:0;
    left: 0;
  }
  .back-icon img{
    width:5rem;
    height:5rem;
  }
  .publish-container{
    position: absolute;
    top:1rem;
    right:1rem;
  }
  .publish-button{
    width:4rem;
    background-color: #ea6f5a;
    border-radius:2.5rem ;
    line-height: 3rem;
    height:3rem;
    padding:0 2rem;
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
  }
  .article-contioner-top{
    width: 100%;
    height:5rem;
    border-bottom: 0.05rem solid #ccc;
    display:block;
    position: relative;
  }
  div.ql-container.ql-snow{
    height:20rem;
  }
 
  div.ql-editor.ql-blank{
    height: 10rem;
  }

</style>