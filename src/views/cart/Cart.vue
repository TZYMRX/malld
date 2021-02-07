<template>
	<div class="cart">
		<!--导航-->
		<nav-bar class="nav-bar">
			<div slot="center">购物车
				<span v-show="cartLength !== 0">({{cartLength}})</span>
			</div>
		</nav-bar>

		<scroll class="content" ref="scroll" :probe-type="3">
			<!--商品列表-->
			<cart-list/>
		</scroll>

		<!--底部-->
		<cart-bottom-bar/>
	</div>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar";
	import Scroll from "components/common/scroll/Scroll";

	import CartList from "./childComps/CartList";
	import CartBottomBar from "./childComps/CartBottomBar";

	import {mapGetters} from "vuex"

	export default {
		name: "Cart",
		components: {
			Scroll,
			NavBar,
			CartList,
			CartBottomBar,
		},
		computed: {
			// ...mapGetters({
			// 	length: 'cartLength'
			// })
			...mapGetters([
				'cartLength'
			])
		},
		activated() {
			this.$refs.scroll.refresh()
		}
	}
</script>

<style scoped>
	.cart {
		height: 100vh;
	}

	.nav-bar {
		background-color: #E4728A;
		color: #ffffff;
	}

	.content {
		height: calc(100% - 44px - 49px - 40px);
		overflow: hidden;
	}
</style>
