<template>
  <div>
    <el-button type="primary">我的页</el-button>
    <router-link to="/index">去汇总页面</router-link>
  </div>
</template>

<script>

  export default {
    name: "home",
    created(){
      console.log(2222222,"tabbar-me")
    }
  }
</script>

<style scoped>

</style>
