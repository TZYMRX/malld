<template>
	<div class="bottom-bar">
		<van-checkbox v-model="isSelectAll" class="cb" @click="checkClick">全选</van-checkbox>
		<div class="totalPrice">
			合计: <span>{{totalPrice}}</span>元
		</div>
		<div class="calculate">
			<button @click="calcClick">结算: {{checkLength}}</button>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from "vuex"
	import Toast from "vant/lib/toast";
	import {Dialog} from "vant";

	export default {
		name: "CartBottomBar",
		computed: {
			...mapGetters(['cartList']),

			totalPrice() {
				return '￥' + this.cartList.filter(item => {
					return item.checked
				}).reduce((preValue, item) => {
					return preValue + item.price * item.count
				}, 0).toFixed(2)
			},
			checkLength() {
				return this.cartList.filter(item => item.checked).length
			},
			isSelectAll:{
				get() {
					if (this.cartList.length === 0) return false
					// return !(this.cartList.filter(item => !item.checked).length)
					// return !this.cartList.find(item => item.checked)
					return this.cartList.length === this.checkLength
				},
				set() {}
			}
		},
		methods: {
			checkClick() {
				if (this.isSelectAll) {
					this.cartList.forEach(item => item.checked = false)
				} else {
					this.cartList.forEach(item => item.checked = true)
				}
				// this.cartList.forEach(item => (item.checked = this.checkedAll));
			},
			calcClick() {
				if (!this.checkLength) {
					Toast('请选择商品')
				} else {
					Dialog
						.confirm({
							message: '您确定要提交订单吗',
						})
						.then(() => {
							this.$toast({
								type: "success",
								message: `提交 ${this.checkLength} 条数据成功`,
								forbidClick: true,
								duration: 1500
							});
							// 提交数据清空对应购物车数据
							setTimeout(() => {
								this.clearCartList();
								this.checkedAll = false;
							}, 1500);
						})
						.catch(err => err);
				}
			}
		}
	}
</script>

<style scoped>
	.bottom-bar {
		position: relative;
		display: flex;

		height: 45px;

		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
		background-color: #f5f5f5;
	}

	.cb {
		padding: 10px;
	}

	.totalPrice {
		line-height: 26px;
		padding: 10px;
	}

	.totalPrice span {
		color: red;
	}

	.calculate button {
		line-height: 44px;
		position: absolute;
		right: 0;
		bottom: 0;
		display: block;
		height: 44px;
		padding: 0 30px;
		color: white;
		border: 0;
		outline: none;
		background: linear-gradient(to right, #ff6034, #ee0a24);
	}

	.calculate button:active {
		opacity: 0.8;
	}
</style>
