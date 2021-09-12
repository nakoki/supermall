<template>
  <div class="toast"  v-show="isShow">
    <img src="~assets/img/common/success.svg" alt="">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message, duration) {
      console.log('---');
      this.isShow = true;
      this.message = message
      setTimeout(() => {
        this.isShow = false;
        this.message = ''
      }, duration);
    }
  }
}
</script>

<style scoped>
.toast {
  /* position: fixed;
  right: 10px;
  bottom: 108px;
  width: 45px;
  height: 45px;
  background-image: url("~assets/img/common/tocart.png"); 
  background-size: 100%; */

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  z-index: 999;
  color: #fff;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
}
img {
  width: 50px;
}
</style>