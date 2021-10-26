<template>
  <grid-view
    :cols="3.5"
    :lineSpace="15"
    :v-margin="20"
    v-if="gridList"
    class="grid-view"
  >
    <div class="item" v-for="(item, index) in gridList" :key="index">
      <a :href="item.link">
        <img class="item-img" :src="item.image" alt="" @load="girdViewImageLoad"/>
        <div class="item-text">{{ item.title }}</div>
      </a>
    </div>
  </grid-view>
</template>

<script>
import GridView from "components/common/gridview/GridView";
import { getSubcategory } from "network/category";
export default {
  name: "RightGridView",
  components: {
    GridView,
  },
  props: {
    item: {
      type: Object,
      defatul() {
        return {};
      },
    },
  },
  data() {
    return {
      gridList: [],
    };
  },
  created() {
    setTimeout(() => {
      this.newGridview();
    }, 200);
  },
  methods: {
    newGridview() {
      getSubcategory(this.item.maitKey).then((res) => {
        console.log(res);
        this.gridList = res.data.list;
      });
    },
    girdViewImageLoad() {
      this.$emit("girdViewImageLoad")
    }
  },
   watch: {
    item() {
      this.newGridview();
    },
  },
};
</script>

<style scoped>
.grid-view {
  margin-left: 18px;
}
.item {
  text-align: center;
  font-size: 18px;
}
.item-img {
  display: block;
  width: 100%;
  margin: auto
}
.item-text {
  margin-top: 15px;
}
</style>