export default {
  // 返回购物车内容长度
  cartLength(state) {
    return state.cartList.length
  },
  // 2.返回购物车所有内容
  cartList(state) {
    return state.cartList
  },
  // 3.返回分类选中的item
  clickName(state) {
    return state.clickName
  }
}
