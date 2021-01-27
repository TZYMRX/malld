import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		redirect: '/home',
		meta: {
			showTab: true
		}
	},
	{
		path: '/home',
		component: () => import('../views/home/Home'),
		meta: {
			showTab: true
		}
	},
	{
		path: '/category',
		component: () => import('../views/category/Category'),
		meta: {
			showTab: true
		}
	},
	{
		path: '/cart',
		component: () => import('../views/cart/Cart'),
		meta: {
			showTab: true
		}
	},
	{
		path: '/profile',
		component: () => import('../views/profile/Profile'),
		meta: {
			showTab: true
		}
	},
	{
		path: '/detail/:iid',
		component: () => import('../views/detail/Detail'),
		meta: {
			showTab: false
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
