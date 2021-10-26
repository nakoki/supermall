<template>
  <div class="left-content-item"
  @click="click"
  :class="{ clicked: item.title == clickName }">
    <div>{{item.title}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "LeftContentItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
   computed: {
    ...mapGetters(["clickName"]),
  },
  methods: {
    click() {
      //切换商品分类
      this.$store.commit("clickName", this.item.title);
      //给父发送，切换商品变化
      this.$bus.$emit("getShowItem", this.item);
    }
  },
}
</script>

<style>
.left-content-item {
  width: 100%;
  padding: 10px;
  text-align: center;
  font-size: 20px;
}
.clicked {
  border-left: 3px solid var(--color-tint);
  background: #fff;
  color: #000;
}
</style>