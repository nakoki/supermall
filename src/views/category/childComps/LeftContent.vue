<template>
  <div class="left-content">
    <scroll ref="scroll" :probe-type="3" class="content">
      <left-content-item
        v-for="item in list"
        :key="item.maitKey"
        :item="item"
        @click="itemClick(item)"
      />
    </scroll>
  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll";
import LeftContentItem from "./LeftContentItem";
export default {
  name: "LeftContent",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Scroll,
    LeftContentItem,
  },
};
</script>
<style scoped>
.left-content {
  position: relative;
  flex: 1;
  background: #eee;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>