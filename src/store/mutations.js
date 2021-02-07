import {ADD_COUNTER, ADD_TO_CART, CLEAR_CART_LIST, SET_LOADING} from "./mutations-types";

export default {
	// mutations目的是修改state中的状态 ,mutations中的每个方法尽量完成的事情比较单一
	[ADD_COUNTER](state, payload) {
		payload.count++
	},
	[ADD_TO_CART](state, payload) {
		payload.checked = false
		state.cartList.push(payload)
	},
	[CLEAR_CART_LIST](state) {
		let result = state.cartList.filter(item => item.checked !== true);
		if (result.length) {

		}
	},
	[SET_LOADING](state,payload) {
		state.isLoading = payload
	}
}
