<template>
  <div>
    <el-button type="primary">我是首页</el-button>
    <router-link to="/http">去http页面</router-link>
    <router-link to="/message">去消息页面</router-link>
    <hr>
    <div style="width: 100%;height: 400px;">
      <div class="bgk">
        <span>世界第四达康书记第四季度</span>
      </div>
    </div>
    <hr>
  </div>

</template>

<script>

  export default {
    name: "home",
    created() {
      console.log(2222222, "tabbar-home")
    }
  }
</script>

<style scoped>
  .bgk{
    width: 100%;
    height: 100%;
    background-image: url("../../assets/logo.png");
    background-size: 100% 100%;
  }
</style>
