<template>
	<div id="home">
		<!--导航栏-->
		<nav-bar class="home-nav">
			<div slot="center">Mall</div>
		</nav-bar>

		<!--<tab-control @tabClick="tabClick" ref="tabControl2" v-show="!isTabFixed"/> -->
		<tab-control
			:titles="['流行','新款','精选']"
			@tabClick="tabClick"
			ref="tabControl1"
			v-show="isTabFixed"
		/>

		<scroll class="content"
						ref="scroll"
						:probe-type="3"
						@scroll="contentScroll"
						:pull-up-load="true"
						@pullingUp="loadMore">

			<!--轮播-->
			<home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>

			<!--推荐-->
			<home-recommend-view :recommends="recommends"/>

			<!--热门-->
			<homepopular/>

			<!--列表导航-->
			<tab-control
				:titles="['流行','新款','精选']"
				@tabClick="tabClick"
				ref="tabControl2"
			/>

			<!--商品列表-->
			<ware-house-list :warehouse="showWarehouse"/>
		</scroll>

		<!--返回顶部按钮-->
		<back-top @click.native="backClick" v-show="isShowBackTop"/>
	</div>
</template>

<script>
	import HomeSwiper from "./childComps/HomeSwiper";	// import {Swiper, SwiperItem} from 'components/common/swiper'
	import HomeRecommendView from "./childComps/HomeRecommendView";
	import Homepopular from "./childComps/Homepopular";

	import NavBar from "components/common/navbar/NavBar";
	import TabControl from "components/content/tabControl/TabControl";
	import WareHouseList from "components/content/warehouse/WareHouseList";
	import Scroll from "components/common/scroll/Scroll";
	import BackTop from "components/content/backTop/BackTop";

	import {getHomeMultidata, getHomeWarehouse} from "network/home";
	import {itemListenerMixin} from "../../common/mixin";

	export default {
		name: "Home",
		components: {
			NavBar,
			HomeSwiper,
			HomeRecommendView,
			Homepopular,
			TabControl,
			WareHouseList,
			Scroll,
			BackTop,
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
				isShowBackTop: false,
				tabOffsetTop: 0,
				isTabFixed: false,
				saveY: 0,
			}
		},
		mixins: [itemListenerMixin],
		computed: {
			showWarehouse() {
				return this.warehouse[this.currentType].list
			},
		},

		activated() {
			// this.$refs.scroll.refresh()
			// this.$refs.scroll.scrollTo(0, this.saveY, 0)
		},
		deactivated() {
			// 保存Y值
			// this.saveY = this.$refs.scroll.getScrollY()

			// 取消全局事件监听
			this.$bus.$off('itemImgLoad', this.ItemImgListener)
		},

		created() {
			this.getHomeMultidata()

			// 商品数据
			this.getHomeWarehouse('pop')
			this.getHomeWarehouse('new')
			this.getHomeWarehouse('sell')
		},
		mounted() {
		},
		methods: {
			/**
			 * 事件监听
			 */

			// 选择列表要显示的类型 ['pop','new','sell']
			tabClick(index) {
				// this.currentType = Object.keys(this.warehouse)[index]
				switch (index) {
					case 0:
						this.currentType = 'pop'
						break
					case 1:
						this.currentType = 'new'
						break
					case 2:
						this.currentType = 'sell'
						break
				}
				this.$refs.tabControl1.currentIndex = index;
				this.$refs.tabControl2.currentIndex = index;
			},

			// 返回顶部
			backClick() {
				this.$refs.scroll.scrollTo(0, 0)
			},

			//
			contentScroll(position) {
				// 显示返回顶部按钮
				this.isShowBackTop = (-position.y) > 1000

				// tabControl是否吸顶 (position:fixed)
				this.isTabFixed = (-position.y) > this.tabOffsetTop
			},

			// 上拉加载更多
			loadMore() {
				this.getHomeWarehouse(this.currentType)
			},

			swiperImgLoad() {
				// 获取tabControl的offsetTop
				this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
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
				let page = this.warehouse[type].page + 1
				getHomeWarehouse(type, page).then(res => {
					// for (let n of res.data.list) {
					// 	this.warehouse[type].list.push(n)
					// }
					this.warehouse[type].list.push(...res.data.list)
					this.warehouse[type].page += 1

					// 完成上拉加载
					this.$refs.scroll.finishPullUp()
				})
			}
		}
	}
</script>

<style scoped>
	#home {
		height: 100vh;
	}

	.home-nav {
		background-color: #E4728A;
		color: #ffffff;

		/*position: fixed;*/
		/*left: 0;*/
		/*right: 0;*/
		/*bottom: 0;*/
		/*top: 0;*/
		z-index: 10;
	}

	.tab-control {

	}

	.content {
		overflow: hidden;
		height: calc(100% - 93px);
		/*margin-top: 44px;*/
	}
</style>
