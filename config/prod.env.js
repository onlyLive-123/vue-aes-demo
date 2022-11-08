'use strict'
module.exports = {
  //实际上得到的是 '"production"',被这个引号坑了好久,直接采用下面写法
  NODE_ENV: JSON.stringify("production"),
  VUE_APP_BASE_API:JSON.stringify("http://192.168.0.199:9012")
}
