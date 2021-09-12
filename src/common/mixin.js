import {debounce} from "./utils";
import BackTop from "components/content/backTop/BackTop.vue";

export const itemListenerMixin = {
  data() {
    return {
      ItemImgListener: null,
    }
  },
  mounted() {
    // 1.图片加载完成的事件监听
    const refresh = debounce(
      // 对我们监听的事件进行保存
      this.$refs.scroll && this.$refs.scroll.refresh, 50);
    this.itemImgListener = () => {
      // console.log('----');
      refresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
    // console.log('我是混入的内容');
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isback: false
    }
  },
  methods: {
    // 返回顶部
    back2top() {
      // scrollTo(x, y, time, easing)
      this.$refs.scroll.scrollTo(0, 0, 100);
      console.log(this.$refs.scroll);
    },
    // 检测是否出现,position位置
    isShowBackTop(position) {
      // console.log(position);
      this.isback = -position.y > 1000;
    },
  }
}
