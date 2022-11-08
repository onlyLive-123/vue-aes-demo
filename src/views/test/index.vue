<template>
  <div>
    <p><img alt="Vue logo" src="../../assets/logo.png"></p>
    <p>
      <el-button type="success" @click="goPath('/mesroll')">上拉加载和翻页</el-button>
    </p>
    <p>
      <el-button type="success" @click="goPath('/http')">http请求</el-button>
    </p>
    <p>
      <el-button type="success" @click="goPath('/store')">store缓存</el-button>
    </p>
    <div>{{ua}}</div>
    <div>{{testPlus}}</div>
  </div>
</template>

<script>
  import {testPlus} from "../../utils/tools";

  export default {
    name: "login",
    data() {
      return {
        ua:navigator.userAgent,
        testPlus:testPlus()
      }
    },
    created(){
      console.log(2222222,"index")
    },
    methods: {
      goPath(path) {
        this.$router.push({path: path});
      }
    }
  }
</script>

<style scoped>

</style>
