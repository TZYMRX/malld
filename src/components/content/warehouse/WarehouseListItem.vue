<template>
	<div class="warehouseListItem">
		<img :src="warehouseItem.show.img">
		<div class="warehouse-info">
			<p>{{warehouseItem.title}}</p>
			<span class="price">{{warehouseItem.price}}</span>
			<span class="collect">{{warehouseItem.cfav}}</span>
		</div>
	</div>
</template>

<script>
	import TabControl from "../tabControl/TabControl";

	export default {
		name: "WarehouseListItem",
		components: {TabControl},
		props: {
			warehouseItem: {
				type: Object,
				default() {
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.warehouseListItem {
		padding-bottom: 40px;
		position: relative;

		width: 48%;
	}

	.warehouseListItem img {
		width: 100%;
		border-radius: 5px;
	}

	.warehouse-info {
		font-size: 12px;
		position: absolute;
		bottom: 5px;
		left: 0;
		right: 0;
		overflow: hidden;
		text-align: center;
	}

	.warehouse-info p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-bottom: 3px;
	}

	.warehouse-info .price {
		color: var(--color-high-text);
		margin-right: 20px;
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
