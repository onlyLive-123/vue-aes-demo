<template>
  <div>
    <el-button type="primary">我是订单页</el-button>
    <p>
      <el-button type="error" @click="goPath('/store')">去store页面</el-button>
    </p>
  </div>
</template>

<script>

  export default {
    name: "home",
    created() {
      console.log(111, "order111")
    },
    methods:{
      goPath(path) {
        this.$router.push({path: path});
      },
    }
  }
</script>

<style scoped>

</style>
