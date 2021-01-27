<template>
	<van-tabbar active-color="#E4899C" inactive-color="#000" route>
		<van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
		<van-tabbar-item replace to="/category" icon="orders-o">分类</van-tabbar-item>
		<van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
		<van-tabbar-item replace to="/profile" icon="user-o">我的</van-tabbar-item>
	</van-tabbar>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>

</style>
