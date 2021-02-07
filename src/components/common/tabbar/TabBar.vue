<template>
	<van-tabbar active-color="#E4899C" inactive-color="#646566" route>
		<van-tabbar-item replace to="/home" icon="wap-home">首页</van-tabbar-item>
		<van-tabbar-item replace to="/category" icon="shop">分类</van-tabbar-item>
		<van-tabbar-item replace to="/cart" icon="cart">购物车</van-tabbar-item>
		<van-tabbar-item replace to="/profile" icon="manager">我的</van-tabbar-item>
	</van-tabbar>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>

</style>
