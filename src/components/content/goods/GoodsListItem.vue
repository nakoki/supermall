<template>
  <div class="goods-list-item" @click="getDetail">
    <img v-lazy="showImage" alt="" @load="imageLoad"/>
    <div class="good-info">
      <p class="title">{{ goodsItem.title }}</p>
      <p class="collect">商品已被{{ goodsItem.cfav }}收藏</p>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="sale">{{ goodsItem.sale }}人付款</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.img || this.goodsItem.show.img
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad")
    },
    getDetail() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>

<style>
.goods-list-item {
  width: 48%;

  background-color: #fff;
  padding-bottom: 0;
}

.goods-list-item img {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  overflow: hidden;
  width: 100%;
}
.good-info {
  position: relative;
  width: 100%;
  padding: 5px 10px;
}
.good-info p,
span {
  margin-top: 5px;
}
.good-info .title {
  font-size: 14px;
  /* text-overflow: ellipsis; */
  /* 显示省略符号来代表被修剪的文本，有下面的不用开了 */

  display: -webkit-box;
  /* 多行文本溢出用省略号显示 */
  -webkit-line-clamp: 2;
  /* 设置或检索伸缩盒对象的子元素的排列方式 */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.good-info .collect {
  position: relative;
  color: #ccc;
  font-size: 12px;
}
.good-info .collect::after {
  position: absolute;
  content: "";
  display: block;
  top: 0;
  right: 0;
  width: 15px;
  height: 15px;
  background-image: url("~assets/img/common/collect.svg");
  background-size: 100%;
}

.good-info .price {
  color: var(--color-high-text);
}
.good-info .sale {
  font-size: 12px;
  color: #ccc;
  margin-left: 5px;
}
</style>
