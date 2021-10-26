<template>
  <div id="category">
    <nav-bar class="category-nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <left-content :list="leftList"/>
      <right-content :item="showitem"/>
    </div>
  </div>
</template>
<script>
// 1.公用组件
import NavBar from "components/common/navbar/NavBar";
// 2.子组件
import LeftContent from "./childComps/LeftContent";
import RightContent from "./childComps/RightContent.vue";
import { getCategoryMultidata } from "network/category";
export default {
  name: "Category",
  data() {
    return {
      leftList: [],
      showitem: {},
    };
  },
  components: { NavBar, LeftContent, RightContent },
  created() {
    this.getCategoryMultidata();
  },
  mounted() {
    //接受对象，保存在定义showitem中，组件绑定给rightcontent
    this.$bus.$on("getShowItem", (item) => {
      this.showitem = item;
    });
  },
  methods: {
    getCategoryMultidata() {
      getCategoryMultidata().then((res) => {
        this.leftList = res.data.category.list;
        this.showitem = this.leftList[0];
        console.log(res);
      });
    },
  },
};
</script>
<style scoped>
.category-nav-bar {
  position: relative;
  background-color: var(--color-tint);
  color: #fff;
  z-index: 999;
}
.content {
  position: absolute;
  display: flex;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}

</style>