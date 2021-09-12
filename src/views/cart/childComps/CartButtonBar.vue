<template>
  <div class="button-bar">
    <div class="selectAll">
      <check-button :ischeck="isAll" class="check-button" @click.native="checkClick" />
      <span>全选</span>
    </div>

    <div class="price">合计：{{ total }}</div>
    <div class="toSettle" @click="accounts">
      结算：({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";

import { mapGetters } from "vuex";
export default {
  name: "CartButtonBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    total() {
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((pre, cur) => {
            return pre + cur.price * cur.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
    isAll() {
      if (this.cartList.length === 0) return false;
      // 1.使用filter方法
      // return !(this.cartList.filter(item => !item.checked).length)
      // 2.使用find方法
      // return !this.cartList.find(item => !item.checked)
      for (let item of this.cartList) {
        if (!item.checked) {
          return false;
        }
      }
      return true;
    },
  },
  methods: {
    checkClick() {
      if (this.isAll) {
        this.cartList.forEach(item => item.checked = false)
      } else {
        this.cartList.forEach(item => item.checked = true)
      }
    },
    accounts() {
      if (!this.isAll) {
        this.$toast.show('购物车还没有东西哦', 2000)
      }
    }
  }
};
</script>

<style scoped>
.button-bar {
  position: fixed;
  display: flex;
  height: 50px;
  padding: 0 10px;
  bottom: 50px;
  align-items: center;
  width: 100%;
  border-top: 1px solid #ccc;
  background: #fff;
}
.selectAll {
  display: flex;
  align-items: center;
  width: 80px;
  height: 40px;
}
.check-button {
  margin-right: 10px;
}
.price {
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 60px;
}
.toSettle {
  height: 40px;
  width: 100px;
  line-height: 40px;
  color: #fff;
  text-align: center;
  background: coral;
  border-radius: 20px;
}
</style>