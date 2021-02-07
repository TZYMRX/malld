<template>
	<div class="bottom-bar">
		<van-goods-action>
			<van-goods-action-icon icon="shop-o" text="店铺" color="#ee0a24"/>
			<van-goods-action-icon
				icon="cart-o"
				text="购物车"
				:info="cartLength"
				@click="goCart"/>
			<van-goods-action-icon
				:color="isShouCang ? '#ff5000' : '#000000'"
				:icon="isShouCang ? 'star' : 'star-o'"
				:text="isShouCang ? '已收藏' : '收藏'"
				@click="starClick"
			/>
			<van-goods-action-button type="warning" text="加入购物车" @click="addToCart"/>
			<van-goods-action-button type="danger" text="立即购买" @click="$router.push('/cart')"/>
		</van-goods-action>
	</div>
</template>

<script>
	import {mapGetters} from "vuex"
	import Toast from "vant/lib/toast";

	export default {
		name: "DetailBottomBar",
		data() {
			return {
				isShouCang: false
			};
		},
		methods: {
			goCart() {
				this.$router.push('/cart')
			},
			addToCart() {
				this.$emit('addCart')
			},
			starClick() {
				if (!this.isShouCang) {
					Toast("收藏成功");
					this.isShouCang = true;
				} else {
					Toast("已取消收藏");
					this.isShouCang = false;
				}
			}
		},
		computed:{
			...mapGetters(['cartLength'])
		}
	}
</script>

<style scoped>
	.bottom-bar {
		z-index: 9;
	}
</style>
