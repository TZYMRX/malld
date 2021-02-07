import {ADD_COUNTER, ADD_TO_CART} from "./mutations-types";

export default {
	addTCart(context, payload) { // payload 新添加的商品
		return new Promise((resolve, reject) => {
			// 查找cartList数组中是否有该商品
			let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

			if (oldProduct) { // 当前商品数量加一
				// oldProduct.count += 1
				context.commit(ADD_COUNTER, oldProduct)
				resolve('当前商品数量加一')
			} else { // 添加新商品
				payload.count = 1
				// context.state.cartList.push(payload)
				context.commit(ADD_TO_CART, payload)
				resolve('添加购物车成功')
			}
		})
	}
}
