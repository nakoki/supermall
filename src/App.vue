<template>
  <div id="app" class="wrapper" >
    <keep-alive exclude="Detail" >
      <router-view />
    </keep-alive>
    <main-tab-bar v-if="$route.meta.showTab"/>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>