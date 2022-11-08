<template>
  <div>
    <mescroll-vue id="mescroll" class="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
      <div v-for="(item,index) in dataList" :key="index">
        <span>{{item.title}}</span>
        <el-button type="success">{{item.content}}</el-button>
      </div>
    </mescroll-vue>
  </div>
</template>

<script>

  import MescrollVue from 'mescroll.js/mescroll.vue'

  export default {
    components: {
      MescrollVue // 注册mescroll组件
    },
    name: "login",
    data() {
      return {
        mescrollDown: { //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
          callback: this.downCallback,
          //关闭自动触发callback 默认true
          auto: false
        },
        mescrollUp: { // 上拉加载的配置.
          callback: this.upCallback,
          page: {
            num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
            size: 15 //每页数据条数,默认15
          },
          //关闭自动触发callback 默认true
          auto: false,
          toTop: {
            warpId: "mescroll",
            src: require('@/assets/logo.png'),
            offset: 800,
            warpClass: "mescroll-totop",
            showClass: "mescroll-fade-in",
            hideClass: "mescroll-fade-out",
            duration: 300,
            supportTap: false,
            btnClick: null
          },
          empty: {
            warpId: "mescroll",
            tip: "暂无相关数据~"
          },
          htmlNodata: '<p class="upwarp-nodata">暂无相关数据~</p>'
        },
        mescroll: null,
        dataList: []
      }
    },
    created() {
      console.log(2222222,"mescoll")
      this.pulldata(10);
    },
    methods: {
      mescrollInit(mescroll) {
        this.mescroll = mescroll;
      },
      /*下拉刷新的回调 */
      downCallback(page, mescroll) {
        console.log("=======", page, mescroll);
        this.$message.success("下拉刷新")
        this.dataList = [];
        this.pulldata(10);
        this.mescroll.endSuccess(10);
      },
      /*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
      upCallback(page, mescroll) {
        console.log(page, "=======", mescroll);
        this.$message.success("上拉加载");
        setTimeout(() => {
          this.pulldata(30);
          if (this.dataList.length >= 100) {
            this.mescroll.endSuccess(30, false);
          } else {
            this.mescroll.endSuccess(30);
          }
        }, 1000)
      },
      pulldata(size) {
        let curPageData = [];
        for (let i = 0; i < size; i++) {
          curPageData.push({
            title: "我当时就是肯定" + i,
            content: "圣诞节开始倒计时卡"
          })
        }
        this.dataList.push(...curPageData);
      }
    }
  }
</script>

<style scoped>
  /*通过fixed固定mescroll的高度*/
  .mescroll {
    position: fixed;
    top: 44px;
    bottom: 0;
    height: auto;
  }
</style>
