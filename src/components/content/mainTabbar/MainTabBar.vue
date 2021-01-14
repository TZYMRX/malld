<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/Home(1).svg" alt="">
      <div slot="item-text">Home</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/Category(1).svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/Category.svg" alt="">
      <div slot="item-text">Category</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/shop-cart-6.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shop-cart-5.svg" alt="">
      <div slot="item-text">ShopCart</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/Profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/Profile(1).svg" alt="">
      <div slot="item-text">Profile</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
