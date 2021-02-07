<template>
	<div class="shop-item">
		<van-checkbox v-model="product.checked" class="CheckButton"/>
		<van-swipe-cell>
			<van-card
				:num="product.count"
				:price="product.price"
				:desc="product.desc"
				:title="product.title"
				class="goods-card"
				:thumb="product.image"
			/>
			<template #right>
				<van-button square text="删除" type="danger" class="delete-button" @click="del"/>
			</template>
		</van-swipe-cell>
	</div>
</template>

<script>
  export default {
    name: "CartListItem",
		props:{
    	product:{
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				checked: false,
			}
		},
		methods:{
    	del() {
    		this.$emit('delCartItem')
			}
		},
  }
</script>

<style scoped>
	.goods-card {
		margin: 0;
		background-color: #fff;

		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.delete-button {
		height: 100%;
	}

	.van-card {
		padding: 10px;
		margin-top: 10px;
	}

	.shop-item {
		display: flex;
		border-bottom: 1px solid #eeeeee;
	}

	.CheckButton {
		padding: 5px 7px 0 11px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
