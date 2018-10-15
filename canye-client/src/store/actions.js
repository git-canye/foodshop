/*
Action:通过操作mutation间接更新state的多个方法的对象
 */
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

// api接口
import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopInfo,
  reqShopRatings,
  reqShopGoods,
  reqSearchShop
} from '../api'

export default {
  // 异步获取地址
  async getAddress({commit,state}) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    if (result.code===0) {
      const address = result.data
      commit(RECEIVE_ADDRESS,{address}) 
    }
  },
  // 获取食品分类
  async getCategorys({commit}) {
    // 发送异步ajax请求
    const result = await reqCategorys()
    // 提交一个mutation
    if (result.code===0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys}) 
    }
  },
  // 获取商家列表
  async getShops({commit,state}) {
    const {latitude,longitude} = state
    // 发送异步ajax请求
    const result = await reqShops(state)
    // 提交一个mutation
    if (result.code===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops}) 
    }
  },


  // 同步记录用户信息
  saveUser({commit},userInfo) {
    commit(RECEIVE_USER_INFO,{userInfo})
  },
  // 异步获取用户信息
  async getUserInfo({commit}) {
    const result = await reqUserInfo()
    if (result.code==0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO,{userInfo})
    }
  },
  // 异步登出
  async logout({commit}) {
    const result = await reqLogout()
    if (result.code==0) {
      commit(RESET_USER_INFO)
    }
  },


  // 异步获取商家信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if (result.code==0) {
      const info = result.data
      commit(RECEIVE_INFO,{info})
    }
  },
  // 异步获取商家评价列表
  async getShopRatings({commit},callback) {
    const result = await reqShopRatings()
    if (result.code==0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS,{ratings})
      // 数据更新了，通知组件
      callback && callback()
    }
  },
  // 异步获取商家商品列表
  async getShopGoods({commit},callback) {
    const result = await reqShopGoods()
    if (result.code==0) {
      const goods = result.data
      commit(RECEIVE_GOODS,{goods})
      // 数据更新了，通知组件
      callback && callback()
    }
  },

  // 同步更新food的count
  updateFoodCount({commit},{isAdd,food}) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT,{food})
    } else {
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  },

  // 同步清空购物车
  clearCart ({commit}) {
    commit(CLEAR_CART)
  },

  // 异步获取商家商品列表
  async getSearchShops ({commit, state}, keyword) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShop(geohash, keyword)
    if (result.code === 0) {
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS, {searchShops})
    }
  }
}