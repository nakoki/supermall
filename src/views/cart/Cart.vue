<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list></cart-list>
    <!-- 底部汇总 -->
    <cart-button-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from './childComps/CartList.vue'
import CartButtonBar from './childComps/CartButtonBar.vue'

import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      CartButtonBar
    },
    computed: {
      // 两种语法
      // ...mapGetters(['cartLength', 'cartList'])
      ...mapGetters({
        length: 'cartLength'
      })
    }
  }
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
