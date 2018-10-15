/*
入口JS
*/
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'

import './mock/mockServer' // 加载mockServer即可
import './filters' // 过滤器
import loading from './common/imgs/1.gif'

// 注册全局组件标签
Vue.component(Button.name,Button) // <mt-button>
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})

// 引入fastclick并绑定到body 解决移动端点击响应延迟0.3s的问题
import FastClick from 'fastclick'
FastClick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用vue-router
  store // 使用vuex
})