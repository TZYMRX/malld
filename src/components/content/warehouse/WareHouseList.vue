<template>
	<div class="warehouse">
		<ware-house-list-item
			v-for="item in warehouse"
			:warehouse-item="item"
		/>
	</div>
</template>

<script>
	import WareHouseListItem from "./WarehouseListItem";

	export default {
		name: "WareHouseList",
		components: {WareHouseListItem},
		props: {
			warehouse: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.warehouse {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
</style>
