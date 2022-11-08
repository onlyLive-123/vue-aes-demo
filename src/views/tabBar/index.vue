<template>
  <div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <div class="tab-bar">
      <router-link style="color: #aaaaaa" v-for="(item,index) in tabList" :key="index" :to="item.url">
        <label :class="selIndex==index ? 'current':''">
          <el-icon :class="item.iconText" style="font-size: 30px;"></el-icon>
        </label>
      </router-link>
    </div>
  </div>
</template>

<script>
  import TabBar from "../../components/TabBar"
  import {mapActions, mapState} from "vuex";

  export default {
    name: "home",
    components: {
      TabBar
    },
    data() {
      return {
        tabList: [
          {
            "text": "home",
            "iconText": "el-icon-s-home",
            "url": "/"
          },
          {
            "text": "order",
            "iconText": "el-icon-s-claim",
            "url": "/order"
          },
          {
            "text": "消息",
            "iconText": "el-icon-message",
            "url": "/message"
          },
          {
            "text": "我的",
            "iconText": "el-icon-user",
            "url": "/me"
          }
        ]
      }
    },
    created() {

    },
    computed: {
      //tab的选中由路由前置守卫设置
      ...mapState(["selIndex"]),
    },
    methods: {
      ...mapActions(["changeSetting"])
    }
  }
</script>

<style lang="less" scoped>
  .tab-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;

  }

  .current {
    color: #1d7bff;
  }
</style>
