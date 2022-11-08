import {Notification} from 'element-ui'
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : '/', // api 的 base_url
  timeout: 30000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    // source.cancel('Operation canceled by the user.');
    config.headers['Content-Type'] = 'application/json';
    return config
  },
  error => {
    Promise.reject(error)
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    let res = response.data;
    if (res.code === 401) {
      localStorage.clear();
      return;
    }
    return response.data
  },
  error => {
    if(axios.isCancel(error)){
      console.log("中断以前请求");
      return Promise.reject(error)
    }
    // 兼容blob下载出错json提示
    if (error.response.data instanceof Blob && error.response.data.type.toLowerCase().indexOf('json') !== -1) {
      const reader = new FileReader()
      reader.readAsText(error.response.data, 'utf-8');
      reader.onload = function (e) {
        const errorMsg = JSON.parse(reader.result).message;
        Notification.error({
          title: errorMsg,
          duration: 5000
        })
      }
    } else {
      let code = 0;
      try {
        code = error.response.status
      } catch (e) {
        if (error.toString().indexOf('Error: timeout') !== -1) {
          Notification.error({
            title: '网络请求超时',
            duration: 5000
          });
          return Promise.reject(error)
        }
      }
      console.log(code)
      if (code) {
        if (code === 401) {
          localStorage.clear();
        } else if (code === 404) {
          // router.push({path: '/404'});
          Notification.error({
            title: "当前访问页面不存在",
            duration: 5000
          })
        } else {
          const errorMsg = error.response.data.message
          if (errorMsg !== undefined) {
            Notification.error({
              title: "系统正在维护,请稍后",
              duration: 5000
            })
          }
        }
      } else {
        Notification.error({
          title: '接口请求失败',
          duration: 5000
        })
      }
    }
    return Promise.reject(error)
  }
);
export default service
