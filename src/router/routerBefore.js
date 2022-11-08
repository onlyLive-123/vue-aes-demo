import router from '@/router';
import store from '../store'
import {isEmpty} from "../utils/tools";

router.beforeEach((to, from, next) => {
  const toName = to.name;
  const fromName = from.name;
  console.log("to", toName, "from", fromName)
  console.log("to", to.meta.keepAlive, "from", from.meta.keepAlive)
  //这例可以对某些页面做keepAlive控制
  if (!isEmpty(to.meta.tabIndex)) {
    store.dispatch('changeSetting', {
      key: 'selIndex',
      value: to.meta.tabIndex
    });
  }
  // if (testPlus()) {
  //   //已存储上次过来路由
  //   const beforeFrom = from.meta.from;
  //   let transitionName = "slide-left";
  //   if (isEmpty(from.meta.from) || beforeFrom != toName) {
  //     to.meta.from = fromName;
  //   } else {
  //     transitionName = "slide-right";
  //   }
  //   store.dispatch('changeSetting', {
  //     key: 'transitionName',
  //     value: transitionName
  //   });
  // }
  next()
})
