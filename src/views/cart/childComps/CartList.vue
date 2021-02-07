<template>
	<div class="cart-list">
		<cart-list-item @delCartItem="delCartItem(index)"
			v-for="(item ,index) in cartList"
			:key="index"
			:product="item"/>
	</div>
</template>

<script>
	import {mapGetters} from "vuex"
	import Scroll from "components/common/scroll/Scroll";
	import CartListItem from "./CartListItem";

	export default {
		name: "CartList",
		components: {
			Scroll,
			CartListItem,
		},
		data() {
			return {

			}
		},
		computed: {
			...mapGetters(['cartList'])
		},
		methods: {
			delCartItem(index) {
				this.cartList.splice(index,1)
			}
		},
	}
</script>

<style scoped>

</style>
