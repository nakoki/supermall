<template>
  <div id="profile">
    <nav-bar class="information">
      <div slot="center">我的信息</div>
    </nav-bar>
    <div class="header">
      <div class="head-img">
        <img src="~assets/img/profile/avatar.svg" alt="" />
      </div>
      <div class="head-info">
        <div class="login"><span>登录/注册</span></div>
        <div class="phone-number">
          <img src="~assets/img/profile/phone.svg" alt="" />
          <span>绑定手机</span>
        </div>
        <div class="header-right"></div>
      </div>
    </div>
    <div class="mydata">
      <div class="mydata-item">
        <span class="number">0.00元</span>
        <span class="title">我的余额</span>
      </div>
      <div class="mydata-item">
        <span class="number">0个</span>
        <span class="title">我的优惠</span>
      </div>
      <div class="mydata-item">
        <span class="number">0分</span>
        <span class="title">我的积分</span>
      </div>
    </div>
    <div class="other">
      <div class="other-item">
        <img src="~assets/img/profile/collection.svg" alt="">
        <span>收藏</span>
        </div>
      <div class="other-item">
        <img src="~assets/img/profile/subscribe.svg" alt="">
        <span>订阅店铺</span>
        </div>
      <div class="other-item">
        <img src="~assets/img/profile/footprint.svg" alt="">
        <span>足迹</span>
        </div>
    </div>
    <div class="body">
      <div class="body-item">
        <img src="~assets/img/profile/message.svg" alt="">
      <span>我的消息</span>
      </div>
      <div class="body-item">
        <img src="~assets/img/profile/pointer.svg" alt="">
      <span>积分商城</span>
      </div>
      <div class="body-item">
        <img src="~assets/img/profile/vip.svg" alt="">
      <span>会员卡 </span>
      </div>
      <div class="body-item" @click="toMyCart">
        <img src="~assets/img/profile/cart.svg" alt="">
      <span>我的购物车</span>
      </div>
      <div class="body-item">
        <img src="~assets/img/profile/shopping.svg" alt="">
      <span>下载购物APP</span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Profile",
  components: {
    NavBar,
  },
  methods: { 
    toMyCart() {
      this.$router.push("/cart")
    }
  }
};
</script>

<style scoped>
.information {
  background-color: var(--color-tint);
  color: #fff;
}
/* 整个外层头部 */
.header {
  padding-left: 10px;
  display: flex;
  position: relative;
  height: 80px;
  width: 100%;
  background-color: var(--color-tint);
}
/* 个人头像图片 */
.head-img img {
  width: 100%;
  height: 100%;
}
/* 外层div */
.head-info {
  flex: 1;
  padding: 5px 10px;
  /* 居中对齐 */
  margin: auto;
}
/* 登录/注册 */
.login {
  color: #fff;
  font-size: 23px;
  padding-left: 5px;
}
/* 绑定手机 */
.phone-number {
  color: #fff;
  font-size: 23px;
}
/* 小手机图标 */
.phone-number img {
  width: 20px;
  /* 居中 */
  vertical-align: middle;
}
/* 向右箭头 */
.header-right {
  position: absolute;
  width: 10px;
  height: 10px;
  right: 30px;
  top: 50%;
  border-right: 3px solid #fff;
  border-bottom: 3px solid #fff;
  transform: translateY(-50%) rotate(-45deg);
}
.mydata {
  display: flex;
  text-align: center;
  width: 100%;
  height: 80px;
  padding: 10px 20px;
  border-bottom: 10px solid #eee;
}
.mydata-item {
  flex: 1;
  display: flex;
  /* 	灵活的项目将垂直显示，正如一个列一样。 */
  flex-direction: column;
}
.number {
  font-size: 23px;
  color: var(--color-high-text);
}
.title {
  font-size: 20px;
}
.mydata-item:nth-of-type(2) {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.other {
  /* 水平布局 */
  display: flex;
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  text-align: center;
  
}
.other-item {
  margin: auto;
}
.other-item:nth-of-type(2) {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.other-item img {
  width: 25%;
}
.other-item span {
  font-size: 20px;
}
.body {
  padding: 10px 20px;
}
.body-item {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}
.body-item img {
  width: 9%;
}
.body-item span {
  padding:10px;
  font-size: 22px;
}
</style>
