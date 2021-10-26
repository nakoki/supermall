<template>
  <div class="right-content">
    <tab-control
      :titles="['综合', '销量', '新品']"
      ref="tabControl1"
      class="control1"
      @tabClick="tabClick"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      :probe-type="3"
      ref="scroll"
      @pullingUp="loadmore"
      @scroll="contentScroll"
    >
      <right-grid-view :item="item" @girdViewImageLoad="girdViewImageLoad" />
      <tab-control
        :titles="['综合', '销量', '新品']"
        ref="tabControl2"
        @tabClick="tabClick"
      />

      <goods-list :goods="goodsList" />
    </scroll>
    <back-top @click.native="back2top" v-show="isback"></back-top>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import { itemListenerMixin, backTopMixin } from "common/mixin";

import RightGridView from "./RightGridView";

import { getCategoryDetail } from "network/category";
export default {
  name: "RightContent",
  components: {
    Scroll,
    TabControl,
    GoodsList,
    RightGridView,
  },
  mixins: [itemListenerMixin, backTopMixin],
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      goodsList: [],
      currentType: "pop",
      tabControlTop: 0,
      isTabFixed: false,
    };
  },
  created() {
    setTimeout(() => {
      this.tabClick(0);
    }, 200);
  },
  methods: {
    girdViewImageLoad() {
      this.tabControlTop = this.$refs.tabControl2.$el.offsetTop;
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "sell";
          break;
        case 2:
          this.currentType = "new";
          break;
      }
      this.getCategoryDetail();
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    getCategoryDetail() {
      getCategoryDetail(this.item.miniWallkey, this.currentType).then((res) => {
        this.goodsList = res;
        // console.log(res);
      });
    },
    loadmore() {
      this.getCategoryDetail(this.currentType);
      //上拉加载更多
      this.$refs.scroll.finishPullUp()
    },
    contentScroll(position) {
      // 1.判断BackTop是否显示
      this.isShowBackTop(position);
      this.isTabFixed = -position.y > this.tabControlTop;
    },
  },
  activated() {
    this.$refs.scroll.scrollTo(0, -this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // 1.保存Y值
    this.saveY = -this.$refs.scroll.getScrollY();
    // 2.取消全局事件监听
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
  watch: {
    item() {
      this.getCategoryDetail();
    },
  },
};
</script>

<style scoped>
.right-content {
  position: relative;
  flex: 2;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.control1 {
  position: relative;
  z-index: 9;
}
</style>