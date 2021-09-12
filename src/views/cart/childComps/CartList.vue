<template>
  <div class="cart-list">
    <scroll class="centent" ref="scroll">
      <cart-list-item 
      v-for="(item, index) in cartList" 
      :key="index" 
      :product="item"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem.vue"

import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated() {
    // console.log('---');
    this.$refs.scroll.refresh()
  }
};
</script>

<style>
.cart-list{
  height: calc(100% - 44px - 49px - 40px);
}
.centent {
  height: 100%;
  overflow: hidden;
}
</style>