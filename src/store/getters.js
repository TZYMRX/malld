export default {
	cartLength(state) {
		return state.cartList.length
	},
	cartList(state) {
		return state.cartList
	},
	isLoading(state) {
		return state.isLoading
	}
}