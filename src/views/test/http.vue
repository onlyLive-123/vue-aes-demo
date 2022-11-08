<template>
  <div>
    <p>
      <el-button type="success" @click="getAppInfo" :loading="loading">获取APPInfo信息</el-button>
    </p>
    <p>
      <el-button type="success" @click="httpReq" :loading="loading">http网络请求</el-button>
    </p>
    <p>
      <el-button type="success" @click="downWgt" :loading="loading">getwgtttt</el-button>
    </p>
    <p>
      <el-button type="success" :loading="loading" @click="goPath('/store')">get版本测试</el-button>
    </p>
  </div>
</template>

<script>
  import {addAccount} from "../../js/cms";

  export default {
    name: "test",
    data() {
      return {
        loading: false
      }
    },
    created(){
      console.log(2222222,"http")
    },
    methods: {
      goPath(path) {
        this.$router.push({path: path});
      },
      async httpReq() {
        let res = await addAccount()
      },
      getAppInfo() {
        console.log("BASE_API", process.env.VUE_APP_BASE_API);
        console.log("app:", window.plus);
        // 在调用H5 api相关功能时可以在代码之前加上这句代码，就可以避免在window端报错
        if (!window.plus) return;
        plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
          //appid属性
          let wgtStr = "appid:" + wgtinfo.appid;
          //version属性
          wgtStr += "<br/>version:" + wgtinfo.version;
          //name属性
          wgtStr += "<br/>name:" + wgtinfo.name;
          //description属性
          wgtStr += "<br/>description:" + wgtinfo.description;
          //author属性
          wgtStr += "<br/>author:" + wgtinfo.author;
          //email属性
          wgtStr += "<br/>email:" + wgtinfo.email;
          //licence属性
          wgtStr += "<br/>license:" + wgtinfo.license;
          //licensehref属性
          wgtStr += "<br/>licensehref:" + wgtinfo.licensehref;
          //features 属性
          wgtStr += "<br/>features:" + wgtinfo.features;
          plus.nativeUI.showWaiting("版本号..." + wgtinfo.version);
          console.log(wgtStr);
          console.log("版本号:" + wgtinfo.version);
        });
      },

      downWgt() {
        let wgtUrl = "http://192.168.0.199:10002/abc.wgt";
        plus.nativeUI.showWaiting("下载更新文件...");
        plus.downloader.createDownload(wgtUrl, {
          filename: "_doc/update/"
        }, (d, status) => {
          if (status == 200) {
            console.log("下载更新文件成功：" + d.filename);
            this.installWgt(d.filename); //安装wgt包
          } else {
            console.log("下载失败！");
            plus.nativeUI.alert("下载失败！");
          }
          plus.nativeUI.closeWaiting();
        }).start();
      },
      installWgt(path) {
        plus.nativeUI.showWaiting("安装更新文件...");
        plus.runtime.install(path, {}, function () {
          plus.nativeUI.closeWaiting();
          console.log("安装更新文件成功！");
          plus.nativeUI.alert("应用资源更新完成！", function () {
            plus.runtime.restart();
          });
        }, function (e) {
          plus.nativeUI.closeWaiting();
          console.log("安装更新文件失败[" + e.code + "]：" + e.message);
          plus.nativeUI.alert("安装更新文件失败[" + e.code + "]：" + e.message);
          if (e.code == 10) {
            alert('请清除临时目录');
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
