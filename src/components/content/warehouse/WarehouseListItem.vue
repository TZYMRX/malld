<template>
	<div class="warehouseListItem" @click="itemCilck">
		<img :src="showImage" @load="imgLoad">
		<div class="warehouse-info">
			<p>{{warehouseItem.title}}</p>
			<span class="price">{{warehouseItem.price}}￥</span>
			<span class="collect">{{warehouseItem.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "WarehouseListItem",
		props: {
			warehouseItem: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		computed:{
			showImage() {
				return this.warehouseItem.image || this.warehouseItem.show.img
			}
		},
		methods: {
			imgLoad() {
				this.$bus.$emit('itemImgLoad')
			},
			itemCilck() {
				this.$router.push('/detail/' + this.warehouseItem.iid)
			}
		}
	}
</script>

<style scoped>
	.warehouseListItem {
		margin-top: 8px;
		padding-bottom: 40px;
		position: relative;
		width: 48%;
		box-shadow: -1px 1px 5px -8px #000, -1px 1px 8px -8px #000;
		border-radius: 5px;
	}

	.warehouseListItem img {
		width: 100%;
		border-radius: 5px;
	}

	.warehouse-info {
		font-size: 12px;
		position: absolute;
		bottom: 5px;
		left: 6px;
		right: 0;
		overflow: hidden;
		text-align: center;
	}

	.warehouse-info p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-bottom: 4px;
	}

	.warehouse-info .price {
		color: var(--color-high-text);
		margin-right: 22px;
	}

	.warehouse-info .collect {
		position: relative;
	}

	.warehouse-info .collect::before {
		content: '';
		position: absolute;
		left: -15px;
		top: -1px;
		width: 14px;
		height: 14px;
		background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
	}
</style>
