/*
直接更新state的多个方法的对象
*/
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state,{address}) {
    state.address = address
  },

  [RECEIVE_CATEGORYS] (state,{categorys}) {
    state.categorys = categorys
  },

  [RECEIVE_SHOPS] (state,{shops}) {
    state.shops = shops
  },

  [RECEIVE_USER_INFO] (state,{userInfo}) {
    state.userInfo = userInfo
  },

  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },

  [RECEIVE_INFO] (state,{info}) {
    state.info = info
  },

  [RECEIVE_RATINGS] (state,{ratings}) {
    state.ratings = ratings
  },

  [RECEIVE_GOODS] (state,{goods}) {
    state.goods = goods
  },

  [INCREMENT_FOOD_COUNT] (state,{food}) {
    if (!food.count) { // 第一次增加
      // food.count = 1   // 新增加属性(没有数据绑定)
      // set(对象，属性名，值)，让新增属性也有数据绑定
      Vue.set(food,'count',1)
      // 将food添加到cartFoods中
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },

  [DECREMENT_FOOD_COUNT] (state,{food}) {
    if (food.count) {
      food.count--
      if (food.count==0) {
        // 将food从cartFoods移除
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },

  [CLEAR_CART] (state) {
    // count归零并清除food的count属性
    state.cartFoods.forEach(food => {
      food.count = 0
      delete food.count
    })
    // 清空购物车所有项
    state.cartFoods = []
  },

  [RECEIVE_SEARCH_SHOPS] (state, {searchShops}) {
    state.searchShops = searchShops
  }
}