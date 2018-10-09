/*
  路由模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
// 全局注册Vue-router组件
Vue.use(VueRouter)

// 配置路由表并导出
export default new VueRouter({
  //  所有路由
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
      // 此时的Msite等都是返回路由组件的函数，只有请求对应的路由路径时(第一次)才会执行此函数并加载路由组件
      // 标识此路由是否显示FooterGuide
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
