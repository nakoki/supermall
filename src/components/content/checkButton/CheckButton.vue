<template>
  <div class="check-button"  :class="{nocheck: !ischeck}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    ischeck: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
}
</script>

<style scoped>
.check-button {
  width: 20px;
  height: 20px;
  background-color: pink;
  border-radius: 50%;
  border: 2px solid pink
}
.nocheck {
  background: none;
  border: 2px solid pink;
}
</style>