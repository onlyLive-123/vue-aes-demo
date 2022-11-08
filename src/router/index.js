import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: (resolve) => require(['@/views/tabBar/index'], resolve),
      redirect: "/home",
      children: [
        {
          path: '/home',
          name: 'home',
          component: (resolve) => require(['@/views/tabBar/home'], resolve),
          meta: {
            keepAlive: true,
            tabIndex: 0
          }
        },
        {
          path: '/order',
          name: 'order',
          component: (resolve) => require(['@/views/tabBar/order'], resolve),
          meta: {
            keepAlive: true,
            tabIndex: 1
          }
        },
        {
          path: '/message',
          name: 'message',
          component: (resolve) => require(['@/views/tabBar/message'], resolve),
          meta: {
            keepAlive: true,
            tabIndex: 2
          }
        },
        {
          path: '/me',
          name: 'meIndex',
          component: (resolve) => require(['@/views/tabBar/me'], resolve),
          meta: {
            keepAlive: true,
            tabIndex: 3
          }
        }
      ]
    },
    {
      path: '/http',
      name: 'http',
      component: (resolve) => require(['@/views/test/http'], resolve),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/store',
      name: 'store',
      component: (resolve) => require(['@/views/test/store'], resolve),
      meta: {}
    },
    {
      path: '/mesroll',
      name: 'mesroll',
      component: (resolve) => require(['@/views/test/mesroll'], resolve),
      meta: {}
    },
    {
      path: '/index',
      name: 'index',
      component: (resolve) => require(['@/views/test/index'], resolve),
      meta: {}
    }
  ]
})


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
