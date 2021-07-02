<template>
  <div class="category-item" @click="itemClick">
      <slot name="icon"></slot>
      <slot name="text"></slot>      
  </div>
</template>
<script>
export default {
  name:'Category',
  props:{
    path:String
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  }
}
</script>
<style scoped>
.category-item{
  flex: 1;
}
</style>
