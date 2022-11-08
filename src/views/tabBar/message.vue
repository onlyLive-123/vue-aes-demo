<template>
  <div>
    <el-button type="primary">我是消息页</el-button>
    <router-link to="/mesroll">去上啦刷新页面</router-link>
  </div>
</template>

<script>

  export default {
    name: "home",
    created(){
      console.log(2222222,"tabbar-message")
    }
  }
</script>

<style scoped>

</style>
