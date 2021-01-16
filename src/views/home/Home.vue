<template>
	<div id="home">
		<!--导航栏-->
		<nav-bar class="home-nav">
			<div slot="center">Mall</div>
		</nav-bar>

		<!--轮播图-->
		<home-swiper :banners="banners"/>

		<!-- -->
		<home-recommend-view :recommends="recommends"/>

		<!--本周热门-->
		<homepopular/>

		<!--列表导航-->
		<tab-control class="tab-control" @tabClick="tabClick"/>
		<!--<tab-control :titles="['流行','新款','精选']"/>-->

		<!--商品列表-->
		<ware-house-list :warehouse="showWarehouse"/>

	</div>
</template>

<script>
	import HomeSwiper from "./childComps/HomeSwiper";
	// import {Swiper, SwiperItem} from 'components/common/swiper'
	import HomeRecommendView from "./childComps/HomeRecommendView";
	import Homepopular from "./childComps/Homepopular";

	import NavBar from "components/common/navbar/NavBar";
	import TabControl from "components/content/tabControl/TabControl";
	import WareHouseList from "components/content/warehouse/WareHouseList";

	import {getHomeMultidata, getHomeWarehouse} from "network/home";

	export default {
		name: "Home",
		components: {
			NavBar,
			HomeSwiper,
			HomeRecommendView,
			Homepopular,
			TabControl,
			WareHouseList,
		},
		data() {
			return {
				banners: [],
				recommends: [],
				warehouse: {
					'pop': {page: 0, list: []},
					'new': {page: 0, list: []},
					'sell': {page: 0, list: []}
				},
				currentType: 'pop',
			}
		},
		computed: {
			showWarehouse() {
				return this.warehouse[this.currentType].list
			}
		},
		created() {
			this.getHomeMultidata()

			//商品数据
			this.getHomeWarehouse('pop')
			this.getHomeWarehouse('new')
			this.getHomeWarehouse('sell')
		},
		methods: {
			/**
			 * 事件监听
			 */
			tabClick(index) {
				this.currentType = Object.keys(this.warehouse)[index]
				// switch (index) {
				// 	case 0:
				// 		this.currentType = 'pop'
				// 		break
				// 	case 1:
				// 		this.currentType = 'new'
				// 		break
				// 	case 2:
				// 		this.currentType = 'sell'
				// 		break
				// }
			},

			/**
			 * 网络请求
			 */
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					this.banners = res.data.banner.list;
					this.recommends = res.data.recommend.list;
				})
			},
			getHomeWarehouse(type) {
				const page = this.warehouse[type].page + 1
				getHomeWarehouse(type, page).then(res => {
					// for (let n of res.data.list) {
					// 	this.warehouse[type].list.push(n)
					// }
					this.warehouse[type].list.push(...res.data.list)
					this.warehouse[type].page += 1
				})
			}
		}
	}
</script>

<style scoped>
	#home {
		padding-top: 44px;
	}

	.home-nav {
		background-color: #E4728A;
		color: #ffffff;

		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		z-index: 10;
	}

	.tab-control {
		position: sticky;
		top: 44px;
		z-index: 9;
	}
</style>
