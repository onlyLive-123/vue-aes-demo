<template>
  <div class="tab-bar">
    <div class="tab-item"
         v-for="(item,index) in tabList" :key="index"
         @click="tabClick(index)"
         :class="{current: index === selIndex}">
      <!-- 图标 -->
      <span class="iconfont"></span>
      <!-- 文字 -->
      <span>{{item.text}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    props: {
      tabList: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        selIndex: 0
      }
    },
    methods: {
      tabClick(index) {
        this.selIndex = index
      }
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

    .tab-item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .current {
    color: #1d7bff;
  }

</style>
