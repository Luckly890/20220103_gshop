//通过间接更新state的多个方法对象
import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPS,
    RECEIVE_CATEGORYS

} from './mutation-types'

import {
    reqAddress,
    reqFoodCategorys,
    reqShopList

} from '../api'


export default {
    //异步获取地址

    async getAddress({ commit, state }) {

        const geohash = state.latitude + ',' + state.longitude

        const result = await reqAddress(geohash)



        if (result.code === 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS, { address })
        }
    },


    /*   //异步获取商家列表
      async getCatgorys({ commit }) {
           const result= await reqFoodTypes()
          if(result.code===0)
          {
              const categorys=result.data
              commit(RECEIVE_CATEGORYS,{categorys})
          }
      }, //异步获取食品分类列表 */
    // 异步获取食品分类列表
    async getCategorys({ commit }) {
        // 发送异步ajax请求
        const result = await reqFoodCategorys()
        // 提交一个mutation
        if (result.code === 0) {
            const categorys = result.data
           // console.log(categorys)
            commit(RECEIVE_CATEGORYS, { categorys })
        } 
    },

    async getShops({ commit, state }) {

        const { longitude, latitude } = state
        const result = await reqShopList(longitude, latitude)
        if (result.code === 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS, { shops })
        }
    },
}