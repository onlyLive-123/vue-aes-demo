<template>
  <div>
    <p>
      <el-button type="primary" @click="save">缓存存储</el-button>
    </p>
    <p>
      <el-button type="error">{{active}}</el-button>
    </p>
    <p>
      <el-button type="error" @click="goPath('/order')">回订单</el-button>
    </p>
  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'

  export default {
    name: "store",
    data() {
      return {}
    },
    computed: {
      ...mapState(["active"]),
    },
    created() {
      console.log(111, "store")
      this.timeout();
    },
    methods: {
      ...mapMutations(["setActive"]),
      goPath(path) {
        this.$router.push({path: path});
      },
      timeout() {
        console.log(this.active);
        let that = this;
        let save = localStorage.getItem("active");
        setTimeout(() => {
          that.setActive(save || "撒大声地所多所");
        }, 2000)
      },
      save() {
        localStorage.setItem("active", "当前时间:" + new Date().getTime());
        this.$message.success("已缓存")
      }
    }
  }
</script>

<style scoped>

</style>
