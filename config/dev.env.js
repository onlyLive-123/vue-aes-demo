'use strict'
const {merge} = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  //实际上得到的是 '"development"',被这个引号坑了好久,直接采用下面写法
  NODE_ENV: JSON.stringify("development"),
  VUE_APP_BASE_API:JSON.stringify("/xxx/cms")
})
