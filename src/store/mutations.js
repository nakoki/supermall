import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations_const'

export default {
  // mutations唯一目的就是修改state中状态
  // mutations中每个方法尽可能完成事件比较单一一点
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    payload.checked = false;
    state.cartList.push(payload)
  }
}